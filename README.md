# RakriAI — Demo Website Platform & Lead Management

> A branch of [Rakri AI](https://rakriai.com) — Engineers Building AI You Own.

Professional demo websites for local service businesses (plumbers, electricians, roofers, HVAC, pest control) with a full lead management dashboard, outreach automation, and multi-channel prospecting.

## What This Does

1. **Scrapes** Google Maps & Facebook for local businesses without websites
2. **Generates** premium demo landing pages per lead at `demo.rakriai.com/[business-slug]`
3. **Manages** all leads in a dashboard with stage tracking, outreach copy, and one-click contact
4. **Claude Code** writes personalized outreach for each lead (no API costs)

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | Next.js 14, App Router, TypeScript |
| Styling | Tailwind CSS v4 |
| Database | MongoDB Atlas (free tier) via Prisma |
| Email | Zoho Mail SMTP |
| Hosting | Vercel |
| Scraping | Python + Playwright |
| Content | Claude Code (Max plan) |

## Quick Start

```bash
# 1. Install dependencies
npm install
pip3 install -r demo/requirements.txt
python3 -m playwright install chromium

# 2. Set up environment
cp .env.example .env.local
# Edit .env.local with your MongoDB URI and Zoho credentials

# 3. Push schema to MongoDB
npx prisma db push

# 4. Start dev server
npm run dev

# 5. Scrape leads
python3 demo/lead_scraper.py --niche plumber --city Birmingham --country UK --targets 10 --import

# 6. Visit dashboard
# http://localhost:3000/dashboard (password: rakriai2026)
```

## Project Structure

```
src/
├── app/
│   ├── [slug]/page.tsx          # Dynamic demo pages (niche-specific designs)
│   ├── dashboard/page.tsx       # Lead management dashboard
│   ├── demo/                    # Static niche demo pages (plumbing, roof, electric, pest, hvac)
│   └── api/                     # REST API (leads, auth, email, stages)
├── components/
│   ├── demo/                    # Premium demo page components
│   ├── dashboard/               # Dashboard UI components
│   └── shared/                  # ThemeProvider, ThemeToggle
└── lib/                         # Prisma, niche configs, auth, email, WhatsApp helpers

demo/
├── lead_scraper.py              # Google Maps scraper
├── fb_scraper.py                # Facebook Pages scraper
├── import_leads.py              # CSV → Dashboard importer
├── seed_db.py                   # Seed database with sample data
├── claude_outreach.sh           # Status check script
├── rotation.csv                 # Multi-city batch scraping config
└── outreach_prompt.md           # Claude Code daily prompts

plans/
├── system-plan.md               # Full architecture plan
├── implementation-tasks.md      # 60 tasks across 6 phases
├── stitch-implementation-tasks.md # Design implementation plan
└── facebook-setup-guide.md      # Facebook page setup + 35 post ideas
```

## Supported Niches

| Niche | Design | Colors |
|-------|--------|--------|
| Plumber | Warm cream + navy | `#011545` / `#FEF9F1` |
| HVAC | Warm orange + charcoal | `#EA580C` / `#FFF7ED` |
| Roofer | Slate + red | `#334155` / `#DC2626` |
| Electrician | Navy + electric yellow | `#0F172A` / `#EAB308` |
| Pest Control | Forest green + emerald | `#064E3B` / `#22C55E` |

## Supported Countries

UK, US, UAE, Netherlands, Ireland, Germany, Australia, Canada, Singapore, South Africa, New Zealand

## Daily Workflow

```
Morning (15 min):  Scrape leads + Claude Code writes outreach
Outreach (30 min): Dashboard → Send WhatsApp + Email + Facebook
Throughout day:    Handle replies → Schedule calls → Close deals
When client pays:  Claude Code builds full production website
```

## License

Private — Rakri AI internal tool.

---

Built by [Rakri AI](https://rakriai.com) — Engineers Building AI You Own.
# rakri-reachout
