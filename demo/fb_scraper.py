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


def find_fb_pages_via_duckduckgo(query):
    """Use DuckDuckGo Lite (no bot detection) to find Facebook page URLs."""
    import urllib.request
    import urllib.parse

    url = f"https://lite.duckduckgo.com/lite/?q={urllib.parse.quote(query)}"
    headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"}
    req = urllib.request.Request(url, headers=headers)

    try:
        resp = urllib.request.urlopen(req, timeout=15)
        html = resp.read().decode("utf-8")
    except Exception as e:
        print(f"⚠️  DuckDuckGo search failed: {e}")
        return []

    # DuckDuckGo Lite wraps URLs in redirect links
    import urllib.parse as urlparse
    fb_links = []
    for match in re.finditer(r'uddg=(https%3A%2F%2F[^&"]+facebook\.com[^&"]+)', html):
        decoded = urllib.parse.unquote(match.group(1))
        # Clean up: only keep page URLs, skip posts/groups/events
        if "/posts/" in decoded or "/groups/" in decoded or "/events/" in decoded:
            continue
        if decoded not in fb_links:
            fb_links.append(decoded)

    return fb_links


def scrape_facebook_pages(niche, city, country="UK", target_count=20, headed=False):
    """
    Search Facebook Pages for local businesses and extract contact info.
    Returns list of leads with fb_url, email, phone.
    """
    targets = []
    seen_names = set()

    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=not headed,
            args=["--disable-blink-features=AutomationControlled"],
        )
        context = browser.new_context(
            viewport={"width": 1280, "height": 900},
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        )
        page = context.new_page()
        page.add_init_script("delete Object.getPrototypeOf(navigator).webdriver")

        search_term = NICHE_SEARCH_TERMS.get(niche, niche)
        country_name = COUNTRY_NAMES.get(country.upper(), country)
        query = f"facebook.com {search_term} {city} {country_name}"

        print(f"\n{'='*60}")
        print(f"📘  RAKRIAI FACEBOOK SCRAPER")
        print(f"{'='*60}")
        print(f"   Niche:    {niche}")
        print(f"   City:     {city}")
        print(f"   Country:  {country}")
        print(f"   Query:    \"{query}\"")
        print(f"   Targets:  {target_count}")
        print(f"{'='*60}\n")

        # Step 1: Find Facebook page URLs via DuckDuckGo Lite (no CAPTCHA)
        print(f"🔍 Searching DuckDuckGo for Facebook pages...")
        fb_links = find_fb_pages_via_duckduckgo(query)

        # Also try a second query variation for more results
        query2 = f"site:facebook.com {search_term} {city} {country_name}"
        fb_links2 = find_fb_pages_via_duckduckgo(query2)
        for link in fb_links2:
            if link not in fb_links:
                fb_links.append(link)

        print(f"   Found {len(fb_links)} Facebook page links\n")

        # Step 2: Visit each Facebook page and extract contact info
        for idx, fb_link in enumerate(fb_links[:target_count * 2]):
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
                    name = name.replace("Facebook", "").strip()
                except Exception:
                    pass

                if not name or len(name) < 3 or name in seen_names:
                    continue
                seen_names.add(name)

                # Get page HTML content for parsing
                content = page.content()

                # Extract phone number — only match real phone formats
                # Avoid matching Facebook user IDs (long digit strings in URLs)
                phone = ""
                phone_patterns = [
                    r'(\+44\s?\d{4}\s?\d{6})',     # UK: +44 7943 164685
                    r'(\+44\s?\d{3}\s?\d{3}\s?\d{4})', # UK: +44 121 234 5678
                    r'(07\d{3}\s?\d{6})',           # UK local mobile: 07943 164685
                    r'(01[1-9]\d{1,2}\s?\d{3}\s?\d{3,4})', # UK landline: 0121 234 5678 (not 010x)
                    r'(\+1[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4})', # US/CA
                    r'(\+971\s?\d{2}\s?\d{3}\s?\d{4})', # UAE
                    r'(\+353\s?\d{2,3}\s?\d{3}\s?\d{4})', # Ireland
                    r'(\+61\s?\d\s?\d{4}\s?\d{4})',  # Australia
                    r'(\+49\s?\d{3,4}\s?\d{7,8})',   # Germany
                    r'(\+31\s?\d\s?\d{8})',          # Netherlands
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
                    skip_domains = ["facebook.com", "fb.com", "sentry.io", "w3.org", "schema.org", "example.com"]
                    if not any(domain in found_email.lower() for domain in skip_domains):
                        email = found_email

                # Check if they have a website linked on their FB page
                # Look for explicit website section, not random URLs in page HTML
                has_website = False
                # Facebook shows website in specific patterns
                website_indicators = [
                    r'Website\s*</span>',               # "Website" label
                    r'"website"\s*:\s*"https?://',       # JSON-LD
                    r'l\.facebook\.com/l\.php\?u=http',  # FB outbound link wrapper
                ]
                for indicator in website_indicators:
                    if re.search(indicator, content, re.IGNORECASE):
                        has_website = True
                        break

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
