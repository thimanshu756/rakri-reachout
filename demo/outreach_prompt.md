# RakriAI — Claude Code Daily Prompts

Copy-paste these prompts into Claude Code for each daily task.

---

## 🌅 MORNING: Scrape + Import + Write Outreach

### Step 1: Scrape leads (paste this)

```
Run the lead scraper for plumbers in Temple, Texas.
Find 10 businesses without websites, minimum 4.0 rating.

Command: python3 demo/lead_scraper.py --niche plumber --city Temple --state TX --targets 10 --min_rating 4.0 --import
```

### Step 2: Write outreach for new leads (paste this)

```
My dev server is running at http://localhost:3000.
Dashboard password is: rakriai2026

1. Authenticate: POST http://localhost:3000/api/auth with {"password":"rakriai2026"}
2. Fetch all new leads: GET http://localhost:3000/api/leads?stage=new
3. For each lead, write personalized outreach based on their name, city, niche, rating, and review count:

   - emailSubject: max 8 words, curiosity-driven, mentions their business
   - emailBody: max 100 words, conversational "I" tone, mentions:
     * their business name and city
     * that they don't have a website
     * their demo page: https://demo.rakriai.com/{slug}
     * price range $1,000-$1,500
     * soft CTA ("no pressure, happy to chat")
     * sign off: Himanshu | rakriai.com

   - waMessage: max 35 words, casual friendly, no links, just a hook question
     Example style: "Hi, saw {name} on Google Maps — are you getting customers online or mainly word of mouth?"

   - followup1: Day 3 nudge, 2-3 sentences, reference the demo link
   - followup2: Day 7 mild urgency, mention other businesses in their city
   - followup3: Day 14 "closing the loop", leave door open

4. Update each lead via PUT http://localhost:3000/api/leads/{id} with all the content + set stage to "outreach_ready"

Personalization matters — a 4.7★ business with 193 reviews needs a different pitch than a 5.0★ business with 8 reviews.
```

---

## 📋 FOLLOW-UPS: Write follow-up content

```
My dev server is running at http://localhost:3000.
Dashboard password: rakriai2026

1. Authenticate with the API
2. Fetch follow-up queue: GET http://localhost:3000/api/leads/followups
3. For each lead in the queue that doesn't have follow-up content yet:
   - If needs followup1: write a Day 3 friendly nudge (reference their demo page)
   - If needs followup2: write a Day 7 urgency email (mention other businesses in their city)
   - If needs followup3: write a Day 14 "closing the loop" email
4. Update each lead via PUT with the follow-up content
```

---

## 🏗️ CLIENT SITE: Build production website

```
{CLIENT_NAME} paid ${AMOUNT}. Build their full production website.

Client details:
  Business: {NAME}
  Niche: {NICHE}
  City: {CITY}
  Phone: {PHONE}
  Services: {LIST OF SERVICES}
  Notes: {ANYTHING FROM THE CALL}

Requirements:
- Next.js 14 with App Router and Tailwind CSS
- Pages: Home, Services, About, Contact
- SEO optimized for "{niche} {city}" keywords
- Mobile responsive
- Fast loading
- Footer: "Website by Rakriai"

After building:
1. Deploy to Vercel
2. Update lead stage via PUT http://localhost:3000/api/leads/{id}
   with {"stage": "website_ready"}
```

---

## 🔄 BATCH: Scrape multiple cities

```
Run the batch scraper using the rotation file.
Command: python3 demo/lead_scraper.py --batch demo/rotation.csv --import

After import, write outreach for all new leads (same as morning step 2).
```

---

## 📊 STATUS CHECK: See all leads

```
Run: bash demo/claude_outreach.sh
This shows all leads by stage with their details.
```
