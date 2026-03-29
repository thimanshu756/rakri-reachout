#!/usr/bin/env python3
"""
Google Maps Lead Scraper for RakriAI
Finds local businesses WITHOUT websites — only your targets, nothing else.

Usage (explicit flags — recommended):
  python3 lead_scraper.py --niche plumber --city Killeen --state TX --country US --targets 10
  python3 lead_scraper.py --niche hvac --city Waco --state TX --country US --targets 15 --min_rating 4.0
  python3 lead_scraper.py --niche pest_control --city "San Marcos" --state TX --targets 10 --import

Usage (legacy query mode):
  python3 lead_scraper.py --query "plumber Killeen Texas" --targets 10

Batch mode (scrape multiple cities):
  python3 lead_scraper.py --batch rotation.csv --import
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

# ═══════════════════════════════════════════════════════════
# NICHE + COUNTRY MAPS
# ═══════════════════════════════════════════════════════════

VALID_NICHES = ["plumber", "hvac", "roofer", "electrician", "pest_control"]

# Maps niche to Google Maps search term
NICHE_SEARCH_TERMS = {
    "plumber": "plumber",
    "hvac": "hvac heating cooling",
    "roofer": "roofing contractor",
    "electrician": "electrician",
    "pest_control": "pest control",
}

# Maps country code to full name for search query
COUNTRY_NAMES = {
    "US": "United States",
    "UK": "United Kingdom",
    "CA": "Canada",
    "AU": "Australia",
    "NZ": "New Zealand",
}

# State/province used in search for better results
US_STATES = {
    "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas",
    "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware",
    "FL": "Florida", "GA": "Georgia", "HI": "Hawaii", "ID": "Idaho",
    "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas",
    "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland",
    "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi",
    "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada",
    "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York",
    "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma",
    "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina",
    "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah",
    "VT": "Vermont", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia",
    "WI": "Wisconsin", "WY": "Wyoming",
}


def build_search_query(niche, city, state=None, country="US"):
    """Build a Google Maps search query from explicit params."""
    search_term = NICHE_SEARCH_TERMS.get(niche, niche)
    parts = [search_term, city]
    if state:
        state_full = US_STATES.get(state.upper(), state)
        parts.append(state_full)
    elif country:
        parts.append(COUNTRY_NAMES.get(country.upper(), country))
    return " ".join(parts)


def parse_niche_from_query(query):
    """Extract niche from a legacy query string."""
    first_word = query.split()[0].lower()
    niche_map = {
        "pest": "pest_control",
        "heating": "hvac",
        "cooling": "hvac",
        "air": "hvac",
        "roofing": "roofer",
        "roof": "roofer",
    }
    return niche_map.get(first_word, first_word)


# ═══════════════════════════════════════════════════════════
# SCRAPER
# ═══════════════════════════════════════════════════════════

def scrape_google_maps(query, niche, city, state, country, target_count=10, min_rating=3.5, min_reviews=1, headed=False):
    """
    Scrape Google Maps and return ONLY businesses without websites.
    """
    targets = []
    skipped_has_website = 0
    skipped_low_rating = 0
    skipped_no_phone = 0
    total_scanned = 0
    seen_names = set()

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=not headed)
        context = browser.new_context(
            viewport={"width": 1280, "height": 900},
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        )
        page = context.new_page()

        print(f"\n{'='*60}")
        print(f"🎯  RAKRIAI LEAD SCRAPER")
        print(f"{'='*60}")
        print(f"   Niche:        {niche}")
        print(f"   City:         {city}")
        print(f"   State:        {state or '—'}")
        print(f"   Country:      {country}")
        print(f"   Query:        \"{query}\"")
        print(f"   Targets:      {target_count}")
        print(f"   Min rating:   {min_rating}⭐")
        print(f"   Min reviews:  {min_reviews}")
        print(f"{'='*60}\n")

        search_url = f"https://www.google.com/maps/search/{query.replace(' ', '+')}"
        page.goto(search_url, wait_until="domcontentloaded", timeout=30000)
        time.sleep(3)

        # Accept cookies if prompted
        try:
            accept_btn = page.locator("button:has-text('Accept all')")
            if accept_btn.is_visible(timeout=3000):
                accept_btn.click()
                time.sleep(1)
        except Exception:
            pass

        # Wait for results feed
        try:
            page.wait_for_selector('[role="feed"]', timeout=10000)
        except PlaywrightTimeout:
            try:
                page.wait_for_selector('div[role="article"]', timeout=10000)
            except PlaywrightTimeout:
                print("⚠️  Could not find results. Page structure may have changed.")
                browser.close()
                return targets, 0, 0, 0, 0

        # Scroll to load all listings
        print("📜 Loading all available listings...")
        scroll_attempts = 0
        max_scroll_attempts = 50
        end_reached = False

        while scroll_attempts < max_scroll_attempts and not end_reached:
            try:
                feed_element = page.locator('[role="feed"]')
                if feed_element.is_visible():
                    feed_element.evaluate("el => el.scrollTop = el.scrollHeight")
                else:
                    page.mouse.wheel(0, 1000)
            except Exception:
                page.mouse.wheel(0, 1000)

            time.sleep(random.uniform(1.0, 2.0))
            scroll_attempts += 1

            end_text = page.locator("text=You've reached the end of the list")
            if end_text.is_visible():
                end_reached = True

            if scroll_attempts % 10 == 0:
                current = len(page.locator('a[href*="/maps/place/"]').all())
                print(f"   Loaded {current} listings...")

        listing_links = page.locator('a[href*="/maps/place/"]').all()
        total_available = len(listing_links)
        print(f"   Total available: {total_available} listings")
        print(f"\n🔍 Scanning for businesses WITHOUT websites...\n")

        for i, link in enumerate(listing_links):
            if len(targets) >= target_count:
                break

            try:
                link.click()
                time.sleep(random.uniform(1.5, 2.5))
                total_scanned += 1

                # Business name
                name = ""
                try:
                    name_el = page.locator("h1.DUwDvf").first
                    if name_el.is_visible(timeout=3000):
                        name = name_el.inner_text().strip()
                except Exception:
                    try:
                        name_el = page.locator('[data-item-id="title"]').first
                        name = name_el.inner_text().strip()
                    except Exception:
                        pass

                if not name or name in seen_names:
                    page.keyboard.press("Escape")
                    time.sleep(0.3)
                    continue
                seen_names.add(name)

                # Check website FIRST
                has_website = False
                try:
                    website_btn = page.locator('a[data-item-id="authority"]').first
                    if website_btn.is_visible(timeout=1500):
                        href = website_btn.get_attribute("href") or ""
                        if href:
                            has_website = True
                except Exception:
                    pass

                if has_website:
                    skipped_has_website += 1
                    print(f"   ✗ {name} — has website, skipping")
                    page.keyboard.press("Escape")
                    time.sleep(0.3)
                    continue

                # Rating
                rating = 0.0
                try:
                    rating_el = page.locator('div.F7nice span[aria-hidden="true"]').first
                    if rating_el.is_visible(timeout=2000):
                        rating = float(rating_el.inner_text().strip())
                except Exception:
                    pass

                if rating < min_rating:
                    skipped_low_rating += 1
                    print(f"   ✗ {name} — rating {rating}⭐ < {min_rating}⭐, skipping")
                    page.keyboard.press("Escape")
                    time.sleep(0.3)
                    continue

                # Review count
                review_count = 0
                try:
                    review_el = page.locator('div.F7nice span[aria-label*="review"]').first
                    if review_el.is_visible(timeout=2000):
                        review_text = review_el.get_attribute("aria-label") or ""
                        review_match = re.search(r"(\d[\d,]*)", review_text)
                        if review_match:
                            review_count = int(review_match.group(1).replace(",", ""))
                except Exception:
                    pass

                if review_count < min_reviews:
                    print(f"   ✗ {name} — only {review_count} reviews, skipping")
                    page.keyboard.press("Escape")
                    time.sleep(0.3)
                    continue

                # Phone
                phone = ""
                try:
                    phone_btn = page.locator('button[data-item-id^="phone:"]').first
                    if phone_btn.is_visible(timeout=2000):
                        phone_text = phone_btn.get_attribute("aria-label") or ""
                        phone = phone_text.replace("Phone:", "").strip()
                except Exception:
                    pass

                if not phone:
                    skipped_no_phone += 1
                    print(f"   ✗ {name} — no phone number, skipping")
                    page.keyboard.press("Escape")
                    time.sleep(0.3)
                    continue

                # Email
                email = ""
                try:
                    email_btn = page.locator('a[data-item-id="email"]').first
                    if email_btn.is_visible(timeout=1000):
                        email_href = email_btn.get_attribute("href") or ""
                        email = email_href.replace("mailto:", "").strip()
                except Exception:
                    pass

                # Address (for additional context, but city/state come from flags)
                address = ""
                try:
                    addr_btn = page.locator('button[data-item-id="address"]').first
                    if addr_btn.is_visible(timeout=2000):
                        address = (addr_btn.get_attribute("aria-label") or "").replace("Address: ", "").strip()
                except Exception:
                    pass

                maps_url = page.url

                lead = {
                    "business_name": name,
                    "phone": phone,
                    "email": email,
                    "has_email": "True" if email else "False",
                    "address": address,
                    "city": city,           # from --city flag, always correct
                    "state": state or "",    # from --state flag
                    "country": country,      # from --country flag
                    "niche": niche,          # from --niche flag, always correct
                    "rating": rating,
                    "review_count": review_count,
                    "maps_url": maps_url,
                }

                targets.append(lead)
                email_tag = f" | 📧 {email}" if email else ""
                print(f"   🎯 [{len(targets)}/{target_count}] {name} — {rating}⭐ ({review_count} reviews) | {phone}{email_tag}")

                page.keyboard.press("Escape")
                time.sleep(random.uniform(0.5, 1.0))

            except Exception as e:
                print(f"   ⚠️  Error on listing {i+1}: {str(e)[:80]}")
                try:
                    page.keyboard.press("Escape")
                    time.sleep(0.5)
                except Exception:
                    pass
                continue

        browser.close()

    return targets, total_scanned, skipped_has_website, skipped_low_rating, skipped_no_phone


# ═══════════════════════════════════════════════════════════
# CSV + SUMMARY
# ═══════════════════════════════════════════════════════════

def save_to_csv(targets, output_path, append=False):
    """Save target leads to CSV."""
    if not targets:
        print("\n❌ No targets found.")
        return

    fieldnames = [
        "business_name", "phone", "email", "has_email", "address",
        "city", "state", "country", "niche", "rating", "review_count", "maps_url"
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


def print_summary(targets, total_scanned, skipped_website, skipped_rating, skipped_phone, niche, city, country):
    """Print summary of the scraping run."""
    print(f"\n{'='*60}")
    print(f"📊  RESULTS — {niche.upper()} in {city}, {country}")
    print(f"{'='*60}")
    print(f"   Total scanned:          {total_scanned}")
    print(f"   Skipped (has website):   {skipped_website}")
    print(f"   Skipped (low rating):    {skipped_rating}")
    print(f"   Skipped (no phone):      {skipped_phone}")
    print(f"   ─────────────────────────────────")
    print(f"   🎯 TARGETS COLLECTED:    {len(targets)}")

    emails_found = sum(1 for t in targets if t.get("email"))
    print(f"   📧 WITH EMAIL:           {emails_found}")
    print(f"{'='*60}")

    if targets:
        sorted_leads = sorted(targets, key=lambda x: (-x["rating"], -x["review_count"]))
        print(f"\n{'─'*95}")
        print(f"  {'Business':<28} {'Phone':<18} {'Rating':>6} {'Reviews':>8}  {'Email':<25} City")
        print(f"{'─'*95}")
        for t in sorted_leads:
            email_display = t.get("email", "")[:24] or "—"
            print(f"  {t['business_name'][:27]:<28} {t['phone'][:17]:<18} {t['rating']:>5}⭐ {t['review_count']:>7}  {email_display:<25} {t['city']}")
        print(f"{'─'*95}")
    else:
        print(f"\n💡 Try a smaller city or different niche for more targets")
    print()


# ═══════════════════════════════════════════════════════════
# BATCH MODE
# ═══════════════════════════════════════════════════════════

def run_batch(batch_csv_path, min_rating, min_reviews, output_path, headed, do_import, api_base, password):
    """Run scraper for multiple cities from a rotation CSV."""
    if not os.path.exists(batch_csv_path):
        print(f"❌ Batch file not found: {batch_csv_path}")
        return

    with open(batch_csv_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    if not rows:
        print("❌ No rows in batch file")
        return

    print(f"\n{'='*60}")
    print(f"🔄  BATCH MODE — {len(rows)} cities to scrape")
    print(f"{'='*60}\n")

    total_leads = 0

    for idx, row in enumerate(rows):
        niche = row.get("niche", "").strip()
        city_val = row.get("city", "").strip()
        state_val = row.get("state", "").strip()
        country_val = row.get("country", "US").strip()
        targets_val = int(row.get("targets", "10").strip())

        if not niche or not city_val:
            print(f"   ⚠️  Skipping row {idx+1}: missing niche or city")
            continue

        print(f"\n{'─'*60}")
        print(f"   [{idx+1}/{len(rows)}] {niche} in {city_val}, {state_val} {country_val}")
        print(f"{'─'*60}")

        query = build_search_query(niche, city_val, state_val, country_val)

        targets, scanned, skip_web, skip_rate, skip_phone = scrape_google_maps(
            query=query,
            niche=niche,
            city=city_val,
            state=state_val,
            country=country_val,
            target_count=targets_val,
            min_rating=min_rating,
            min_reviews=min_reviews,
            headed=headed,
        )

        # Append to single output file
        save_to_csv(targets, output_path, append=(idx > 0))
        print_summary(targets, scanned, skip_web, skip_rate, skip_phone, niche, city_val, country_val)
        total_leads += len(targets)

        # Small delay between cities
        if idx < len(rows) - 1:
            delay = random.uniform(3, 6)
            print(f"   ⏳ Waiting {delay:.0f}s before next city...")
            time.sleep(delay)

    print(f"\n{'='*60}")
    print(f"✅  BATCH COMPLETE — {total_leads} total leads from {len(rows)} cities")
    print(f"   Saved to: {output_path}")
    print(f"{'='*60}\n")

    if do_import and total_leads > 0:
        auto_import(output_path, api_base, password)


# ═══════════════════════════════════════════════════════════
# AUTO IMPORT
# ═══════════════════════════════════════════════════════════

def auto_import(csv_path, api_base, password):
    """Auto-import leads after scraping."""
    print(f"\n📤 Auto-importing leads to {api_base}...")
    script_dir = os.path.dirname(os.path.abspath(__file__))
    import_script = os.path.join(script_dir, "import_leads.py")

    cmd = [
        sys.executable, import_script,
        "--csv", csv_path,
        "--api", api_base,
        "--password", password,
    ]
    subprocess.run(cmd)


# ═══════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════

def main():
    parser = argparse.ArgumentParser(
        description="RakriAI Lead Scraper — finds businesses WITHOUT websites",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples (explicit flags — recommended):
  python3 lead_scraper.py --niche plumber --city Killeen --state TX --targets 10
  python3 lead_scraper.py --niche hvac --city Waco --state TX --country US --targets 15
  python3 lead_scraper.py --niche pest_control --city "San Marcos" --state TX --targets 10 --import

Batch mode:
  python3 lead_scraper.py --batch rotation.csv --import

Legacy query mode:
  python3 lead_scraper.py --query "plumber Killeen Texas" --targets 10
        """
    )

    # Explicit flags (recommended)
    parser.add_argument("--niche", type=str, choices=VALID_NICHES,
                        help="Business niche (plumber, hvac, roofer, electrician, pest_control)")
    parser.add_argument("--city", type=str,
                        help='City name (e.g. "Killeen", "San Antonio")')
    parser.add_argument("--state", type=str, default=None,
                        help='State code (e.g. "TX", "CA", "FL")')
    parser.add_argument("--country", type=str, default="US",
                        help='Country code: US, UK, CA, AU (default: US)')

    # Batch mode
    parser.add_argument("--batch", type=str, default=None,
                        help='Path to rotation CSV (columns: niche, city, state, country, targets)')

    # Legacy query mode
    parser.add_argument("--query", type=str, default=None,
                        help='Legacy: full search query (e.g. "plumber Killeen Texas")')

    # Common options
    parser.add_argument("--targets", type=int, default=10,
                        help="Number of no-website targets to find (default: 10)")
    parser.add_argument("--min_rating", type=float, default=3.5,
                        help="Minimum Google rating (default: 3.5)")
    parser.add_argument("--min_reviews", type=int, default=1,
                        help="Minimum reviews (default: 1)")
    parser.add_argument("--output", type=str, default=None,
                        help="Output CSV path (default: demo/leads.csv)")
    parser.add_argument("--headed", action="store_true",
                        help="Run browser in visible mode")
    parser.add_argument("--import", dest="auto_import", action="store_true",
                        help="Auto-import leads to dashboard after scraping")
    parser.add_argument("--api", type=str, default="http://localhost:3000",
                        help="API base URL for auto-import")
    parser.add_argument("--password", type=str, default=None,
                        help="Dashboard password for auto-import")

    args = parser.parse_args()

    # Default output path
    if args.output is None:
        script_dir = os.path.dirname(os.path.abspath(__file__))
        args.output = os.path.join(script_dir, "leads.csv")

    password = args.password or os.environ.get("DASHBOARD_PASSWORD", "rakriai2026")

    # ─── BATCH MODE ───
    if args.batch:
        run_batch(
            batch_csv_path=args.batch,
            min_rating=args.min_rating,
            min_reviews=args.min_reviews,
            output_path=args.output,
            headed=args.headed,
            do_import=args.auto_import,
            api_base=args.api,
            password=password,
        )
        return

    # ─── EXPLICIT FLAGS MODE ───
    if args.niche and args.city:
        niche = args.niche
        city = args.city
        state = args.state
        country = args.country or "US"
        query = build_search_query(niche, city, state, country)

    # ─── LEGACY QUERY MODE ───
    elif args.query:
        query = args.query
        niche = parse_niche_from_query(query)
        city = query.split()[1] if len(query.split()) > 1 else "Unknown"
        state = None
        country = "US"

    else:
        parser.error("Provide --niche + --city, or --query, or --batch")
        return

    # Validate niche
    if niche not in VALID_NICHES:
        print(f"⚠️  Unknown niche '{niche}'. Valid: {', '.join(VALID_NICHES)}")
        print(f"   Proceeding anyway (will save as-is)...")

    # Run scraper
    targets, scanned, skip_web, skip_rate, skip_phone = scrape_google_maps(
        query=query,
        niche=niche,
        city=city,
        state=state,
        country=country,
        target_count=args.targets,
        min_rating=args.min_rating,
        min_reviews=args.min_reviews,
        headed=args.headed,
    )

    # Save and summarize
    save_to_csv(targets, args.output)
    print_summary(targets, scanned, skip_web, skip_rate, skip_phone, niche, city, country)

    # Next steps
    if targets:
        print(f"✅ Next steps:")
        print(f"   1. Import: python3 import_leads.py --csv {args.output}")
        print(f"   2. Ask Claude Code to write outreach for new leads")
        print()

    # Auto-import
    if args.auto_import and targets:
        auto_import(args.output, args.api, password)


if __name__ == "__main__":
    main()
