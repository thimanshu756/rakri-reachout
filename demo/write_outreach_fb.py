#!/usr/bin/env python3
"""
Write personalized outreach messages for Facebook-sourced leads.
Updates each lead in the DB with waMessage, fbMessage, emailSubject, emailBody.
"""

import csv
import os
import requests

API_BASE = "https://demo.rakriai.com"
PASSWORD = os.environ.get("DASHBOARD_PASSWORD", "rakriai2026")

def to_slug(name):
    import re
    slug = name.lower()
    slug = re.sub(r"[''\"']", "", slug)
    slug = slug.replace("&", "and")
    slug = re.sub(r"[^a-z0-9]+", "-", slug)
    slug = re.sub(r"^-+|-+$", "", slug)
    return slug


def get_first_name_guess(business_name):
    """Try to extract a first name from business name, otherwise return None."""
    # Names like "J.Marshall Plumbing" -> skip
    # Names like "DB Electrical" -> skip
    # We'll just use "Hi there" for most
    return None


def build_demo_url(slug):
    return f"https://demo.rakriai.com/{slug}"


NICHE_SERVICES = {
    "plumber": "plumbing",
    "electrician": "electrical",
    "roofer": "roofing",
    "hvac": "heating & cooling",
}

NICHE_LABEL = {
    "plumber": "plumbing",
    "electrician": "electrical services",
    "roofer": "roofing",
    "hvac": "HVAC",
}


def build_messages(lead):
    name = lead["business_name"]
    slug = to_slug(name)
    demo_url = build_demo_url(slug)
    niche = lead["niche"]
    city = lead["city"]
    service = NICHE_SERVICES.get(niche, niche)
    label = NICHE_LABEL.get(niche, niche)
    email = lead.get("email", "")
    phone = lead.get("phone", "")
    fb_url = lead.get("fb_url", "")

    # --- WhatsApp Message ---
    wa = (
        f"Hi there 👋\n\n"
        f"I came across {name} on Facebook — looks like you're doing great {service} work in {city}!\n\n"
        f"I noticed you don't have a website yet, so I went ahead and built a free demo for you:\n\n"
        f"👉 {demo_url}\n\n"
        f"It's got your business name, phone number, services, and a contact form — "
        f"everything a customer needs to trust you and get in touch.\n\n"
        f"Takes 2 minutes to check on your phone. No cost, no commitment.\n\n"
        f"Would love to hear what you think!"
    )

    # --- Facebook Message ---
    fb = (
        f"Hi! 👋\n\n"
        f"I found your page while looking at {service} businesses in {city} — "
        f"great work you're doing!\n\n"
        f"I build websites for local tradespeople and noticed you don't have one yet, "
        f"so I put together a free demo for {name}:\n\n"
        f"👉 {demo_url}\n\n"
        f"It's mobile-friendly, has your business info and a call button — "
        f"ready to help you get more calls from Google.\n\n"
        f"Completely free to look at, no strings attached. "
        f"Let me know what you think!"
    )

    # --- Email ---
    email_subject = f"I built a free website demo for {name}"
    email_body = (
        f"Hi,\n\n"
        f"I came across {name} on Facebook and noticed you're doing "
        f"{service} work in {city} — but don't have a website yet.\n\n"
        f"I went ahead and built a free demo website for you:\n\n"
        f"{demo_url}\n\n"
        f"It includes:\n"
        f"- Your business name and phone number front and centre\n"
        f"- A services section tailored to {label}\n"
        f"- A click-to-call button so customers can ring you instantly\n"
        f"- Fully mobile-responsive — looks great on any phone\n\n"
        f"This is completely free — no card details, no commitment. "
        f"I only charge if you love it and want to go live.\n\n"
        f"Take 2 minutes to have a look on your phone and let me know what you think.\n\n"
        f"Best regards,\n"
        f"Himanshu\n"
        f"RakriAI — Web Design for Tradespeople\n"
        f"rakriai.com"
    )

    return {
        "slug": slug,
        "waMessage": wa,
        "fbMessage": fb,
        "emailSubject": email_subject,
        "emailBody": email_body,
    }


def main():
    csv_path = os.path.join(os.path.dirname(__file__), "fb_leads_all.csv")

    with open(csv_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        leads = list(reader)

    print(f"\n📝 Writing outreach messages for {len(leads)} leads\n")

    # Authenticate
    session = requests.Session()
    auth = session.post(f"{API_BASE}/api/auth", json={"password": PASSWORD})
    if not auth.ok:
        print(f"❌ Auth failed: {auth.text}")
        return

    # Get all leads from API to find IDs
    res = session.get(f"{API_BASE}/api/leads")
    if not res.ok:
        print(f"❌ Could not fetch leads: {res.text}")
        return

    db_leads = res.json()
    slug_to_id = {l["slug"]: l["id"] for l in db_leads}

    success = 0
    skipped = 0

    for lead in leads:
        msgs = build_messages(lead)
        slug = msgs["slug"]
        lead_id = slug_to_id.get(slug)

        if not lead_id:
            print(f"   ✗ {lead['business_name']} — not found in DB (slug: {slug})")
            skipped += 1
            continue

        update_data = {
            "waMessage": msgs["waMessage"],
            "fbMessage": msgs["fbMessage"],
            "emailSubject": msgs["emailSubject"],
            "emailBody": msgs["emailBody"],
            "stage": "outreach_ready",
        }

        update_res = session.put(
            f"{API_BASE}/api/leads/{lead_id}",
            json=update_data,
        )

        if update_res.ok:
            has_email = lead.get("email", "")
            channels = "WA + FB"
            if has_email:
                channels += " + Email"
            print(f"   ✓ {lead['business_name']:<35} [{channels}]")
            success += 1
        else:
            print(f"   ✗ {lead['business_name']} — update failed: {update_res.text[:60]}")
            skipped += 1

    print(f"\n{'='*50}")
    print(f"✅ Messages written: {success}")
    print(f"⏭️  Skipped: {skipped}")
    print(f"{'='*50}\n")


if __name__ == "__main__":
    main()
