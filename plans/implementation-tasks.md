# RakriAI — Implementation Tasks (60 tasks across 6 phases)

---

## Phase 1: Project Setup + Database (10 tasks)

| # | Task | Files |
|---|------|-------|
| 1.1 | Init Next.js 14 with App Router, TypeScript, Tailwind, src dir | `package.json`, `tsconfig.json`, `tailwind.config.ts` |
| 1.2 | Init git repo, create `.gitignore` (node_modules, .env, .next, prisma/generated) | `.gitignore` |
| 1.3 | Create `.env.example` and `.env.local` with all variable placeholders | `.env.example`, `.env.local` |
| 1.4 | Install Prisma + MongoDB dependencies (`prisma`, `@prisma/client`) | `package.json` |
| 1.5 | Create Prisma schema with Lead model, all fields, indexes | `prisma/schema.prisma` |
| 1.6 | Run `prisma generate` to create client | `prisma/generated/` |
| 1.7 | Create Prisma client singleton | `src/lib/prisma.ts` |
| 1.8 | Create TypeScript types (Lead, Niche, Stage, API responses) | `src/lib/types.ts` |
| 1.9 | Create slug helper (business name → URL slug) | `src/lib/slug.ts` |
| 1.10 | Create auth helper (cookie set/verify/clear) | `src/lib/auth.ts` |

---

## Phase 2: Lib Files + API Routes (10 tasks)

| # | Task | Files |
|---|------|-------|
| 2.1 | Create niche-config with all 5 niches (colors, services, testimonials, hero text, trust points) | `src/lib/niche-config.ts` |
| 2.2 | Create Zoho SMTP email helper (connect, send email function) | `src/lib/zoho.ts` |
| 2.3 | Create WhatsApp helper (generate wa.me deep link with pre-filled text) | `src/lib/whatsapp.ts` |
| 2.4 | Build auth API route — POST validates password, sets HTTP-only cookie | `src/app/api/auth/route.ts` |
| 2.5 | Build leads GET route — list all leads with filters (niche, city, stage) | `src/app/api/leads/route.ts` |
| 2.6 | Build leads POST route — add single lead (auto stage "new", generate slug + demoUrl) | `src/app/api/leads/route.ts` |
| 2.7 | Build leads [id] routes — GET single, PUT update, DELETE remove | `src/app/api/leads/[id]/route.ts` |
| 2.8 | Build import route — POST accepts CSV text, parses rows, bulk creates leads in DB | `src/app/api/leads/import/route.ts` |
| 2.9 | Build follow-ups route — GET returns leads needing follow-up today (Day 3/7/14 logic) | `src/app/api/leads/followups/route.ts` |
| 2.10 | Build send email route — POST sends email via Zoho SMTP, auto-updates stage + outreachAt | `src/app/api/send/email/route.ts` |

---

## Phase 3: Public Demo Pages (10 tasks)

| # | Task | Files |
|---|------|-------|
| 3.1 | Create root layout with Inter + Montserrat fonts, Tailwind, metadata | `src/app/layout.tsx`, `src/app/globals.css` |
| 3.2 | Create root page — redirect "/" to "/dashboard" | `src/app/page.tsx` |
| 3.3 | Build HeroSection — niche-colored gradient bg, business name, city, headline, phone CTA, rating badge | `src/components/demo/HeroSection.tsx` |
| 3.4 | Build ServicesSection — 6 service cards from niche-config, icons, descriptions | `src/components/demo/ServicesSection.tsx` |
| 3.5 | Build WhyChooseUsSection — 4 trust blocks (licensed, insured, fast, guaranteed) from niche-config | `src/components/demo/WhyChooseUsSection.tsx` |
| 3.6 | Build TestimonialsSection — 3 review cards with stars, names, text from niche-config | `src/components/demo/TestimonialsSection.tsx` |
| 3.7 | Build ContactSection — phone (clickable tel:), WhatsApp button (wa.me), CTA banner | `src/components/demo/ContactSection.tsx` |
| 3.8 | Build Footer — business name, phone, city, nav links, "Website by Rakriai" | `src/components/demo/Footer.tsx` |
| 3.9 | Build [slug]/page.tsx — SSR from MongoDB, loads lead data, picks niche config, renders all 6 sections | `src/app/[slug]/page.tsx` |
| 3.10 | Add generateMetadata for SEO — title: "{Business} \| {Niche} in {City}", description with keywords | `src/app/[slug]/page.tsx` |

---

## Phase 4: Dashboard (10 tasks)

| # | Task | Files |
|---|------|-------|
| 4.1 | Build AuthGate — password form, calls POST /api/auth, stores cookie, shows/hides dashboard | `src/components/dashboard/AuthGate.tsx` |
| 4.2 | Build dashboard layout — sidebar or top nav, auth check, wraps page | `src/app/dashboard/layout.tsx` |
| 4.3 | Build StatsBar — total, sent, replied, calls, clients, close rate % (fetched from API) | `src/components/dashboard/StatsBar.tsx` |
| 4.4 | Build FollowUpQueue — today's follow-ups panel at top, shows lead name + day + send button | `src/components/dashboard/FollowUpQueue.tsx` |
| 4.5 | Build FilterBar — dropdowns for niche, city, stage + search input for business name | `src/components/dashboard/FilterBar.tsx` |
| 4.6 | Build LeadsTable + LeadRow — sortable table, click row to expand, show stage badge with color | `src/components/dashboard/LeadsTable.tsx`, `src/components/dashboard/LeadRow.tsx` |
| 4.7 | Build EmailPanel — shows subject + body, "Send via Zoho" button (calls POST /api/send/email), copy buttons | `src/components/dashboard/EmailPanel.tsx` |
| 4.8 | Build WhatsAppPanel — shows WA message, phone number, "Open in WhatsApp" (wa.me link), "Copy Message", "Mark as Sent" button | `src/components/dashboard/WhatsAppPanel.tsx` |
| 4.9 | Build FollowUpPanel + NotesEditor + StageDropdown — follow-up tabs (FU1/FU2/FU3 with send buttons), inline notes save, stage change dropdown | `src/components/dashboard/FollowUpPanel.tsx`, `NotesEditor.tsx`, `StageDropdown.tsx` |
| 4.10 | Build ImportModal + wire dashboard page — CSV upload dialog with preview, connect all components in dashboard/page.tsx | `src/components/dashboard/ImportModal.tsx`, `src/app/dashboard/page.tsx` |

---

## Phase 5: Python Scripts + Integration (10 tasks)

| # | Task | Files |
|---|------|-------|
| 5.1 | Create import_leads.py — reads CSV, calls POST /api/leads/import with CSV data | `demo/import_leads.py` |
| 5.2 | Update lead_scraper.py — add email extraction from Google Maps listings | `demo/lead_scraper.py` |
| 5.3 | Update lead_scraper.py — add hasEmail field to output CSV | `demo/lead_scraper.py` |
| 5.4 | Add --import flag to lead_scraper.py — auto-imports to DB after scraping (calls import_leads.py) | `demo/lead_scraper.py` |
| 5.5 | Create seed script — imports existing leads.csv into MongoDB for testing | `demo/seed_db.py` |
| 5.6 | Test scraper → import → DB pipeline end-to-end | — |
| 5.7 | Test demo page renders from DB (visit localhost:3000/judd-plumbing) | — |
| 5.8 | Test dashboard login + leads table loads | — |
| 5.9 | Test email send via Zoho SMTP (send test email) | — |
| 5.10 | Test WhatsApp wa.me link opens correctly with pre-filled message | — |

---

## Phase 6: Polish + Deploy (10 tasks)

| # | Task | Files |
|---|------|-------|
| 6.1 | Add responsive breakpoints to all demo page components (mobile/tablet/desktop) | `src/components/demo/*.tsx` |
| 6.2 | Add responsive breakpoints to dashboard (mobile-friendly table, collapsible panels) | `src/components/dashboard/*.tsx` |
| 6.3 | Add loading states (skeleton loaders for table, spinner for API calls) | `src/components/dashboard/*.tsx` |
| 6.4 | Add error handling (toast notifications for failed sends, API errors) | `src/components/dashboard/*.tsx` |
| 6.5 | Add auto-dead logic — API route or cron that marks leads "dead" after 21 days no response | `src/app/api/stages/route.ts` |
| 6.6 | Create vercel.json if needed (environment, build settings) | `vercel.json` |
| 6.7 | Push to GitHub (create repo, first commit, push) | — |
| 6.8 | Create Vercel project, connect GitHub repo, set all env vars | — |
| 6.9 | Configure demo.rakriai.com subdomain DNS → Vercel | — |
| 6.10 | Full end-to-end test on production (scrape → import → outreach → demo page live) | — |

---

## Quick Reference — Task Count

| Phase | Description | Tasks |
|-------|-------------|-------|
| 1 | Project Setup + Database | 10 |
| 2 | Lib Files + API Routes | 10 |
| 3 | Public Demo Pages | 10 |
| 4 | Dashboard | 10 |
| 5 | Python Scripts + Integration | 10 |
| 6 | Polish + Deploy | 10 |
| **Total** | | **60** |
