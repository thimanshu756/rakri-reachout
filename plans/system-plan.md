# RakriAI Demo Platform — Complete System Plan v3

## Context

Building a **fully automated** lead prospecting + outreach platform deployed at **demo.rakriai.com**. The user has very limited time — automation is the priority. Every click saved = more leads contacted.

**Key changes from v2:**
- Prisma + MongoDB (free Atlas tier) instead of JSON file
- Zoho Mail API integration for one-click email sending
- WhatsApp Business API (via whapi.cloud free tier) for WA verification + auto-send
- Auto follow-up tracking with daily follow-up queue
- Auto stage updates (website ready, email sent, etc.)
- Claude Code as the daily content engine (no Claude API)

---

## Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                       LEAD ACQUISITION                             │
│                                                                    │
│  Google Maps ──► lead_scraper.py ──► leads.csv                    │
│                                         │                          │
│                                         ▼                          │
│                            import_leads.py                         │
│                        (CSV → DB via API, basic data)              │
│                                         │                          │
│                                         ▼                          │
│                              MongoDB Atlas (free)                  │
│                              via Prisma ORM                        │
│                                         │                          │
│                         ┌── CLAUDE CODE ──┐                        │
│                         │ Reads leads     │                        │
│                         │ Writes emails   │                        │
│                         │ Writes WA msgs  │                        │
│                         │ Writes followups│                        │
│                         │ Updates DB      │                        │
│                         │ via API routes  │                        │
│                         └────────┬────────┘                        │
│                                  │                                 │
│              ┌───────────────────┼───────────────────┐             │
│              ▼                   ▼                    ▼             │
│     /[slug] demo pages    /dashboard            Automations        │
│     (prospect sees)       (you operate)         (background)       │
│                                │                     │             │
│                    ┌───────────┼──────────┐          │             │
│                    ▼           ▼          ▼          ▼             │
│              📧 Zoho     📱 WhatsApp   📋 Follow   🔄 Auto       │
│              Mail API    Cloud API     -up Queue   Stage Update   │
│              (1-click    (verify +     (Day 3,7,   (sent→replied  │
│               send)      1-click       14 alerts)   →client)      │
│                          send)                                     │
└────────────────────────────────────────────────────────────────────┘
```

### Dashboard Flow — What You See Daily

```
┌─────────────────────────────────────────────────────────────┐
│  DASHBOARD                                          [Import]│
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📊 STATS BAR                                               │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌────────┐  │
│  │  42  │ │  28  │ │  8   │ │  3   │ │  2   │ │ 7.1%   │  │
│  │Total │ │Sent  │ │Reply │ │Calls │ │Client│ │Close % │  │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └────────┘  │
│                                                             │
│  🔥 TODAY'S FOLLOW-UPS (5 leads need attention)             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Judd Plumbing      Day 3   [Send Follow-up 1] 📧   │   │
│  │ Curtis & Sons      Day 7   [Send Follow-up 2] 📧   │   │
│  │ BellCo Plumbing    Day 14  [Send Final + Close] 📧  │   │
│  │ Morgan Creek       Day 3   [Send Follow-up 1] 📱   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  📋 ALL LEADS                    [Filter: Niche|City|Stage] │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Name          │City    │Niche  │Stage     │Actions   │  │
│  ├───────────────┼────────┼───────┼──────────┼──────────┤  │
│  │ Judd Plumbing │Killeen │Plumber│email_sent│          │  │
│  │               │        │       │          │          │  │
│  │  ┌─ EXPANDED ROW ──────────────────────────────┐    │  │
│  │  │                                              │    │  │
│  │  │  📧 EMAIL          📱 WHATSAPP      📝 NOTES│    │  │
│  │  │  ┌────────────┐   ┌─────────────┐          │    │  │
│  │  │  │Subject:... │   │Hi, saw Judd │  [edit]  │    │  │
│  │  │  │Body:...    │   │Plumbing on  │          │    │  │
│  │  │  │            │   │Google Maps..│          │    │  │
│  │  │  │[Send Email]│   │             │          │    │  │
│  │  │  │ via Zoho   │   │✅ On WhatsApp│          │    │  │
│  │  │  └────────────┘   │[Send Message]│          │    │  │
│  │  │                    └─────────────┘          │    │  │
│  │  │  Demo: demo.rakriai.com/judd-plumbing 🔗    │    │  │
│  │  └──────────────────────────────────────────────┘    │  │
│  │                                                      │  │
│  │ Curtis & Sons│Harker │Plumber│replied  │             │  │
│  │ BellCo       │Killeen│Plumber│pending  │             │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

| Component | Technology | Cost |
|-----------|-----------|------|
| Framework | Next.js 14, App Router, TypeScript | $0 |
| Styling | Tailwind CSS | $0 |
| Database | MongoDB Atlas (free tier: 512MB) | $0 |
| ORM | Prisma | $0 |
| Email sending | Zoho Mail API (SMTP) | $0 (free with Zoho Mail) |
| WhatsApp | whapi.cloud (free tier: 50 msgs/day) | $0 |
| Hosting | Vercel (free tier) | $0 |
| Lead scraping | Python + Playwright | $0 |
| Content generation | Claude Code (Max plan) | $0 |

---

## Database Schema (Prisma + MongoDB)

```prisma
// prisma/schema.prisma

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Lead {
  id            String    @id @default(auto()) @map("_id") @db.ObjectId
  slug          String    @unique
  businessName  String
  phone         String
  email         String?
  hasEmail      Boolean   @default(false)
  hasWhatsApp   Boolean?
  address       String?
  city          String
  state         String?
  niche         String
  rating        Float
  reviewCount   Int
  mapsUrl       String?
  demoUrl       String?

  // Outreach content (filled by Claude Code)
  emailSubject  String?
  emailBody     String?
  waMessage     String?
  followup1     String?
  followup2     String?
  followup3     String?

  // Stage tracking
  stage         String    @default("new")

  // Timestamps
  notes         String?
  createdAt     DateTime  @default(now())
  outreachAt    DateTime?
  followup1At   DateTime?
  followup2At   DateTime?
  followup3At   DateTime?
  repliedAt     DateTime?
  clientAt      DateTime?
  deliveredAt   DateTime?

  @@index([niche])
  @@index([stage])
  @@index([city])
}
```

### Stage Pipeline
```
new → outreach_ready → email_sent / wa_sent →
followed_up_1 → followed_up_2 → followed_up_3 →
replied → call_scheduled → client →
website_building → website_ready → delivered

(or → dead at any point)
```

---

## Auto Stage Updates

```
Action                          → Stage becomes
──────────────────────────────────────────────
Lead imported from CSV          → "new"
Claude Code fills outreach copy → "outreach_ready"
Click "Send Email" (Zoho)       → "email_sent" + sets outreachAt
Click "Send WhatsApp"           → "wa_sent" + sets outreachAt
Send Follow-up 1                → "followed_up_1" + sets followup1At
Send Follow-up 2                → "followed_up_2" + sets followup2At
Send Follow-up 3                → "followed_up_3" + sets followup3At
Mark as replied (manual)        → "replied" + sets repliedAt
Mark as client (manual)         → "client" + sets clientAt
Claude Code builds site         → "website_building" (via API)
Site deployed to Vercel         → "website_ready" (via API)
Client confirms delivery        → "delivered" + sets deliveredAt
No response after follow-up 3  → "dead" (auto after 21 days)

FOLLOW-UP QUEUE LOGIC:
Today - outreachAt >= 3 days AND stage = "email_sent"/"wa_sent"  → Show Follow-up 1
Today - followup1At >= 4 days AND stage = "followed_up_1"        → Show Follow-up 2
Today - followup2At >= 7 days AND stage = "followed_up_2"        → Show Follow-up 3
Today - followup3At >= 7 days AND stage = "followed_up_3"        → Auto-mark "dead"
```

---

## File Structure

```
rakri-reachout/
├── demo/
│   ├── lead_scraper.py                # ✅ DONE
│   ├── import_leads.py                # NEW — CSV → MongoDB via API
│   ├── leads.csv                      # ✅ DONE
│   └── requirements.txt               # ✅ DONE
│
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                   # "/" → redirect to /dashboard
│   │   ├── globals.css
│   │   ├── [slug]/page.tsx            # Public demo page (SSR from DB)
│   │   ├── dashboard/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── api/
│   │       ├── auth/route.ts
│   │       ├── leads/
│   │       │   ├── route.ts           # GET all, POST new
│   │       │   ├── [id]/route.ts      # GET/PUT/DELETE
│   │       │   ├── import/route.ts    # POST bulk CSV
│   │       │   └── followups/route.ts # GET today's queue
│   │       ├── send/
│   │       │   ├── email/route.ts     # POST via Zoho SMTP
│   │       │   └── whatsapp/route.ts  # POST via whapi.cloud
│   │       ├── whatsapp/
│   │       │   └── verify/route.ts    # POST check WA status
│   │       └── stages/route.ts        # PUT auto transitions
│   │
│   ├── components/
│   │   ├── demo/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── WhyChooseUsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── Footer.tsx
│   │   └── dashboard/
│   │       ├── AuthGate.tsx
│   │       ├── StatsBar.tsx
│   │       ├── FollowUpQueue.tsx
│   │       ├── LeadsTable.tsx
│   │       ├── LeadRow.tsx
│   │       ├── StageDropdown.tsx
│   │       ├── WhatsAppPanel.tsx
│   │       ├── EmailPanel.tsx
│   │       ├── FollowUpPanel.tsx
│   │       ├── NotesEditor.tsx
│   │       ├── FilterBar.tsx
│   │       └── ImportModal.tsx
│   │
│   └── lib/
│       ├── prisma.ts
│       ├── types.ts
│       ├── niche-config.ts
│       ├── slug.ts
│       ├── zoho.ts
│       ├── whatsapp.ts
│       └── auth.ts
│
├── plans/
│   └── system-plan.md
├── .env.local
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── vercel.json
```

---

## Environment Variables

```env
DATABASE_URL="mongodb+srv://user:pass@cluster.mongodb.net/rakriai"
DASHBOARD_PASSWORD="your-secret-password"
NEXT_PUBLIC_BASE_URL="https://demo.rakriai.com"

# Zoho Mail SMTP
ZOHO_SMTP_HOST="smtp.zoho.com"
ZOHO_SMTP_PORT="465"
ZOHO_EMAIL="hi@rakriai.com"
ZOHO_PASSWORD="your-zoho-app-password"

# WhatsApp API (whapi.cloud)
WHAPI_API_URL="https://gate.whapi.cloud"
WHAPI_TOKEN="your-whapi-token"
```

---

## API Routes

| Method | Route | Purpose | Auto stage? |
|--------|-------|---------|-------------|
| POST | `/api/auth` | Dashboard login | — |
| GET | `/api/leads` | List all, filter by niche/city/stage | — |
| POST | `/api/leads` | Add single lead | → "new" |
| GET | `/api/leads/[id]` | Get one lead | — |
| PUT | `/api/leads/[id]` | Update any fields | — |
| DELETE | `/api/leads/[id]` | Delete lead | — |
| POST | `/api/leads/import` | Bulk CSV import | → "new" |
| GET | `/api/leads/followups` | Today's follow-up queue | — |
| POST | `/api/send/email` | Send via Zoho SMTP | → "email_sent" |
| POST | `/api/send/whatsapp` | Send via whapi.cloud | → "wa_sent" |
| POST | `/api/whatsapp/verify` | Check if on WhatsApp | sets hasWhatsApp |
| PUT | `/api/stages` | Bulk auto-stage transitions | auto |

---

## Implementation Order

### Phase 1: Project Setup + Database
1. Init Next.js 14 (App Router, TS, Tailwind, src dir)
2. Init git repo
3. Set up MongoDB Atlas free cluster
4. Install Prisma, configure schema, `prisma generate`
5. Create `src/lib/prisma.ts`, `types.ts`, `slug.ts`, `niche-config.ts`
6. Create `.env.local`

### Phase 2: API Routes
1. Auth route
2. Leads CRUD
3. Import route
4. Follow-ups query route
5. Zoho email send route
6. WhatsApp verify + send routes
7. Stage auto-transition route

### Phase 3: Public Demo Pages
1. Niche configs (colors, services, testimonials)
2. 6 demo components
3. `[slug]/page.tsx` — SSR from MongoDB
4. Test locally

### Phase 4: Dashboard
1. AuthGate + layout
2. StatsBar + FollowUpQueue
3. FilterBar
4. LeadsTable + LeadRow (expandable)
5. WhatsAppPanel (verify ✅ + send)
6. EmailPanel (send via Zoho)
7. FollowUpPanel
8. NotesEditor + StageDropdown
9. ImportModal

### Phase 5: Python Scripts
1. `import_leads.py` — CSV → DB via API
2. Update `lead_scraper.py` — extract emails too

### Phase 6: Deploy
1. Push to GitHub
2. Vercel project + env vars
3. Point demo.rakriai.com
4. End-to-end test

---

## Claude Code Daily Workflow

```
MORNING SESSION (15 min):

You: "Run scraper for 'plumber San Antonio Texas', 15 targets"
Claude Code: runs lead_scraper.py → imports to DB

You: "Write personalized outreach for all new leads"
Claude Code: reads leads → writes unique emails/WA msgs → updates DB
All leads: "new" → "outreach_ready"


OUTREACH SESSION (Dashboard — 30 min):

Open dashboard → handle follow-up queue first
Then send outreach to new leads (1-click email/WA)
Each send auto-updates stage + timestamp


WHEN CLIENT PAYS (3-4 hours):

You: "Curtis & Sons paid. Build their site."
Claude Code: builds site → deploys → updates stage → "website_ready"
```

---

## Verification

1. Scraper produces CSV with targets
2. Import CSV → leads in DB with stage "new"
3. Claude Code writes outreach → stage "outreach_ready"
4. Demo page renders at demo.rakriai.com/[slug]
5. WhatsApp verify shows ✅ badge
6. Send email → sent via Zoho, stage → "email_sent"
7. Send WhatsApp → sent via API, stage → "wa_sent"
8. Follow-up queue shows leads after 3 days
9. Auto-dead after 21 days no response
10. Client site built → stage → "website_ready"
