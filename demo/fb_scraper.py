#!/usr/bin/env python3
"""
Facebook Pages Lead Scraper for RakriAI
Finds local business Facebook pages, extracts emails + contact info.
Used ALONGSIDE the Google Maps scraper — the import API handles deduplication.

Usage:
  python3 fb_scraper.py --niche plumber --city Birmingham --country UK --targets 20
  python3 fb_scraper.py --niche hvac --city Dubai --country AE --targets 15 --import
  python3 fb_scraper.py --batch rotation.csv --import
"""

import argparse
import csv
import os
import random
import re
import subprocess
import sys
import time
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeout

# Reuse niche search terms from lead_scraper
NICHE_SEARCH_TERMS = {
    "plumber": "plumber plumbing",
    "hvac": "hvac heating cooling",
    "roofer": "roofing roofer",
    "electrician": "electrician electrical",
    "pest_control": "pest control",
}

COUNTRY_NAMES = {
    "US": "United States", "UK": "United Kingdom", "CA": "Canada",
    "AU": "Australia", "NL": "Netherlands", "IE": "Ireland",
    "DE": "Germany", "AE": "UAE", "NZ": "New Zealand",
    "SG": "Singapore", "ZA": "South Africa",
}


def scrape_facebook_pages(niche, city, country="UK", target_count=20, headed=False):
    """
    Search Facebook Pages for local businesses and extract contact info.
    Returns list of leads with fb_url, email, phone.
    """
    targets = []
    seen_names = set()

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=not headed)
        context = browser.new_context(
            viewport={"width": 1280, "height": 900},
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        )
        page = context.new_page()

        search_term = NICHE_SEARCH_TERMS.get(niche, niche)
        country_name = COUNTRY_NAMES.get(country.upper(), country)
        query = f"{search_term} {city} {country_name}"

        print(f"\n{'='*60}")
        print(f"📘  RAKRIAI FACEBOOK SCRAPER")
        print(f"{'='*60}")
        print(f"   Niche:    {niche}")
        print(f"   City:     {city}")
        print(f"   Country:  {country}")
        print(f"   Query:    \"{query}\"")
        print(f"   Targets:  {target_count}")
        print(f"{'='*60}\n")

        # Search Facebook Pages
        search_url = f"https://www.facebook.com/search/pages/?q={query.replace(' ', '%20')}"
        print(f"🔍 Searching Facebook Pages...")

        try:
            page.goto(search_url, wait_until="domcontentloaded", timeout=30000)
            time.sleep(3)
        except Exception as e:
            print(f"⚠️  Could not load Facebook search: {str(e)[:80]}")
            # Facebook may require login — try Google search as fallback
            print("📎 Falling back to Google search for Facebook pages...")
            google_query = f"site:facebook.com {search_term} {city} {country_name}"
            page.goto(f"https://www.google.com/search?q={google_query.replace(' ', '+')}&num=50", wait_until="domcontentloaded", timeout=30000)
            time.sleep(2)

        # Handle Facebook login wall — use Google fallback
        if "login" in page.url.lower() or "checkpoint" in page.url.lower():
            print("📎 Facebook requires login — using Google search fallback...")
            google_query = f"site:facebook.com {search_term} {city} {country_name}"
            page.goto(f"https://www.google.com/search?q={google_query.replace(' ', '+')}&num=50", wait_until="domcontentloaded", timeout=30000)
            time.sleep(2)

            # Accept Google cookies if prompted
            try:
                accept_btn = page.locator("button:has-text('Accept all')")
                if accept_btn.is_visible(timeout=3000):
                    accept_btn.click()
                    time.sleep(1)
            except Exception:
                pass

            # Extract Facebook page URLs from Google results
            fb_links = []
            google_results = page.locator('a[href*="facebook.com"]').all()
            for result in google_results:
                href = result.get_attribute("href") or ""
                # Only keep actual business pages, not groups or posts
                if "facebook.com/" in href and "/posts/" not in href and "/groups/" not in href and "/events/" not in href:
                    # Clean up Google redirect URLs
                    if "url=" in href:
                        match = re.search(r'url=(https?://[^&]+facebook\.com/[^&]+)', href)
                        if match:
                            href = match.group(1)
                    if href not in fb_links:
                        fb_links.append(href)

            print(f"   Found {len(fb_links)} Facebook page links from Google\n")

            # Visit each Facebook page and extract info
            for idx, fb_link in enumerate(fb_links[:target_count * 2]):  # visit more than needed
                if len(targets) >= target_count:
                    break

                try:
                    print(f"   Checking [{idx+1}] {fb_link[:60]}...")
                    page.goto(fb_link, wait_until="domcontentloaded", timeout=15000)
                    time.sleep(random.uniform(2, 3))

                    # Skip if login wall
                    if "login" in page.url.lower():
                        print(f"      ✗ Login required, skipping")
                        continue

                    # Extract business name from page title or h1
                    name = ""
                    try:
                        title = page.title() or ""
                        # Facebook titles are usually "Business Name | Facebook"
                        name = title.split("|")[0].split("-")[0].strip()
                        # Remove "Facebook" if it's still there
                        name = name.replace("Facebook", "").strip()
                    except Exception:
                        pass

                    if not name or len(name) < 3 or name in seen_names:
                        continue
                    seen_names.add(name)

                    # Get page HTML content for parsing
                    content = page.content()

                    # Extract phone number
                    phone = ""
                    phone_patterns = [
                        r'(\+44[\s\d]{10,13})',       # UK
                        r'(\+1[\s\d\-]{10,14})',       # US/CA
                        r'(\+971[\s\d]{8,12})',        # UAE
                        r'(\+31[\s\d]{9,12})',         # Netherlands
                        r'(\+353[\s\d]{8,12})',        # Ireland
                        r'(\+49[\s\d]{10,14})',        # Germany
                        r'(\+61[\s\d]{9,12})',         # Australia
                        r'(0[\d\s]{10,13})',           # Local format
                    ]
                    for pattern in phone_patterns:
                        match = re.search(pattern, content)
                        if match:
                            phone = match.group(1).strip()
                            break

                    # Extract email
                    email = ""
                    email_match = re.search(r'[\w.+-]+@[\w-]+\.[\w.]+', content)
                    if email_match:
                        found_email = email_match.group(0)
                        # Skip Facebook's own emails and common false positives
                        skip_domains = ["facebook.com", "fb.com", "sentry.io", "w3.org", "schema.org", "example.com"]
                        if not any(domain in found_email.lower() for domain in skip_domains):
                            email = found_email

                    # Check if they have a website linked
                    has_website = False
                    website_indicators = [
                        'data-lynx-mode="asynclazy"',
                        "Website</span>",
                        "website</span>",
                    ]
                    # Also check for common website URL patterns in the page
                    website_match = re.search(r'(https?://(?!facebook\.com|fb\.com|instagram\.com|twitter\.com|x\.com)[\w.-]+\.\w{2,})', content)
                    if website_match:
                        has_website = True

                    # Extract followers/likes count
                    followers = 0
                    follower_match = re.search(r'([\d,]+)\s*(?:followers|likes|people\s+like)', content, re.IGNORECASE)
                    if follower_match:
                        followers = int(follower_match.group(1).replace(",", ""))

                    # Skip if they have a website (we only want targets without)
                    if has_website:
                        print(f"      ✗ {name} — has website, skipping")
                        continue

                    if not phone:
                        print(f"      ✗ {name} — no phone found, skipping")
                        continue

                    lead = {
                        "business_name": name,
                        "phone": phone,
                        "email": email,
                        "has_email": "True" if email else "False",
                        "address": "",
                        "city": city,
                        "state": "",
                        "country": country,
                        "niche": niche,
                        "rating": 0,
                        "review_count": 0,
                        "maps_url": "",
                        "fb_url": fb_link,
                        "fb_followers": followers,
                    }

                    targets.append(lead)
                    email_tag = f" | 📧 {email}" if email else ""
                    print(f"      🎯 [{len(targets)}/{target_count}] {name} | {phone}{email_tag}")

                except PlaywrightTimeout:
                    print(f"      ✗ Timeout, skipping")
                    continue
                except Exception as e:
                    print(f"      ✗ Error: {str(e)[:60]}")
                    continue

                time.sleep(random.uniform(1, 2))

        browser.close()

    return targets


def save_to_csv(targets, output_path, append=False):
    """Save targets to CSV."""
    if not targets:
        print("\n❌ No targets found.")
        return

    fieldnames = [
        "business_name", "phone", "email", "has_email", "address",
        "city", "state", "country", "niche", "rating", "review_count",
        "maps_url", "fb_url", "fb_followers"
    ]

    mode = "a" if append and os.path.exists(output_path) else "w"
    write_header = mode == "w" or not os.path.exists(output_path)

    with open(output_path, mode, newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        if write_header:
            writer.writeheader()
        for row in targets:
            writer.writerow(row)

    action = "Appended" if append else "Saved"
    print(f"\n💾 {action} {len(targets)} targets to: {output_path}")


def print_summary(targets, niche, city, country):
    """Print summary."""
    emails_found = sum(1 for t in targets if t.get("email"))

    print(f"\n{'='*60}")
    print(f"📊  FACEBOOK RESULTS — {niche.upper()} in {city}, {country}")
    print(f"{'='*60}")
    print(f"   🎯 TARGETS:     {len(targets)}")
    print(f"   📧 WITH EMAIL:  {emails_found}")
    print(f"   📘 WITH FB URL: {len(targets)} (all)")
    print(f"{'='*60}")

    if targets:
        print(f"\n{'─'*95}")
        print(f"  {'Business':<28} {'Phone':<18} {'Email':<25} {'Followers':>9}  FB URL")
        print(f"{'─'*95}")
        for t in sorted(targets, key=lambda x: -(x.get("fb_followers") or 0)):
            email_display = t.get("email", "")[:24] or "—"
            followers = t.get("fb_followers", 0) or 0
            fb_short = t.get("fb_url", "")[:30] + "..." if t.get("fb_url") else "—"
            print(f"  {t['business_name'][:27]:<28} {t['phone'][:17]:<18} {email_display:<25} {followers:>8}  {fb_short}")
        print(f"{'─'*95}")
    print()


def auto_import(csv_path, api_base, password):
    """Auto-import leads."""
    print(f"\n📤 Auto-importing to {api_base}...")
    script_dir = os.path.dirname(os.path.abspath(__file__))
    import_script = os.path.join(script_dir, "import_leads.py")
    subprocess.run([sys.executable, import_script, "--csv", csv_path, "--api", api_base, "--password", password])


def main():
    parser = argparse.ArgumentParser(
        description="RakriAI Facebook Pages Scraper",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python3 fb_scraper.py --niche plumber --city Birmingham --country UK --targets 20
  python3 fb_scraper.py --niche electrician --city Dubai --country AE --targets 15 --import
        """
    )
    parser.add_argument("--niche", type=str, required=True, help="Business niche")
    parser.add_argument("--city", type=str, required=True, help="City name")
    parser.add_argument("--country", type=str, default="UK", help="Country code (default: UK)")
    parser.add_argument("--targets", type=int, default=20, help="Target count (default: 20)")
    parser.add_argument("--output", type=str, default=None, help="Output CSV path")
    parser.add_argument("--headed", action="store_true", help="Show browser")
    parser.add_argument("--import", dest="auto_import", action="store_true", help="Auto-import after scraping")
    parser.add_argument("--api", type=str, default="http://localhost:3000", help="API base URL")
    parser.add_argument("--password", type=str, default=None, help="Dashboard password")

    args = parser.parse_args()

    if args.output is None:
        script_dir = os.path.dirname(os.path.abspath(__file__))
        args.output = os.path.join(script_dir, "fb_leads.csv")

    targets = scrape_facebook_pages(
        niche=args.niche,
        city=args.city,
        country=args.country,
        target_count=args.targets,
        headed=args.headed,
    )

    save_to_csv(targets, args.output)
    print_summary(targets, args.niche, args.city, args.country)

    if args.auto_import and targets:
        password = args.password or os.environ.get("DASHBOARD_PASSWORD", "rakriai2026")
        auto_import(args.output, args.api, password)


if __name__ == "__main__":
    main()
