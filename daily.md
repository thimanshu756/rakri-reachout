RakriAI — Complete Daily Operating Guide
ONE-TIME SETUP (do once, never again)

1. MongoDB Atlas → create free cluster → copy connection string
2. Update .env.local → paste connection string in DATABASE_URL
3. npx prisma db push (creates the Lead collection)
4. npm run dev (verify it starts)
5. Visit localhost:3000/dashboard → login with "rakriai2026"
6. Setup Zoho Mail → create hi@rakriai.com → get app password → update .env.local
DAILY ROUTINE (30-45 min total)
STEP 1: Start your server (30 seconds)

cd ~/Developer/Self/rakri-reachout
npm run dev
Leave this terminal open. Everything runs through this.

STEP 2: Check your status (1 min)

bash demo/claude_outreach.sh
This shows you:

How many new leads need outreach
How many are ready to send
Follow-up queue (who needs Day 3/7/14 follow-up)
Quick stats: total, sent, replied, clients
STEP 3: Scrape new leads (5 min)
Tell Claude Code:


Run the scraper for plumbers in Temple, Texas. Find 10 targets with 4.0+ rating.

python3 demo/lead_scraper.py --niche plumber --city Temple --state TX --targets 10 --min_rating 4.0 --import
Or batch scrape multiple cities:


python3 demo/lead_scraper.py --batch demo/rotation.csv --import
Result: New leads appear in dashboard with stage "new".

STEP 4: Tell Claude Code to write outreach (10 min)
Paste this into Claude Code:


My dev server is at http://localhost:3000. Password: rakriai2026

1. Authenticate: POST /api/auth with {"password":"rakriai2026"}
2. Fetch new leads: GET /api/leads?stage=new
3. For each lead, write personalized:
   - emailSubject (max 8 words, curiosity-driven)
   - emailBody (max 100 words, mention their name, city, no website, 
     demo link https://demo.rakriai.com/{slug}, price $1,000-$1,500)
   - waMessage (max 35 words, casual hook question, no links)
   - followup1 (Day 3 nudge)
   - followup2 (Day 7 urgency)
   - followup3 (Day 14 closing the loop)
4. PUT /api/leads/{id} with all content + stage "outreach_ready"

Personalize based on their rating and review count.
Sign off emails as: Himanshu | rakriai.com
What happens: Claude Code fetches each lead via curl, writes unique content for each, updates the DB. All leads move from "new" → "outreach_ready".

STEP 5: Send outreach from Dashboard (15 min)
Open localhost:3000/dashboard

Handle follow-ups FIRST (top of dashboard):


Follow-up queue shows:
  "Judd Plumbing — Day 3 — Send Follow-up 1"

→ Click "Send FU-1" (if email)
→ Or click WhatsApp link (if no email)
→ Stage auto-updates
Then send to new "outreach_ready" leads:

For each lead, click to expand:

Lead has...	You do...	Clicks
Email	Email tab → "Send via Zoho"	1 click, auto-sent
Phone only	WhatsApp tab → "Open in WhatsApp" → send on phone → "Mark as Sent"	3 clicks
Both	Send email (1 click) + Open WhatsApp (1 click)	2 clicks
30-40 leads in 15 minutes.

STEP 6: Check for replies (throughout the day)
When someone replies (email/WhatsApp):

Dashboard → find the lead → change stage to "Replied"
Add notes: "Interested, wants pricing" or "Asked to call Thursday"
Reply within 1 hour — speed = professionalism
STEP 7: Close the deal (when they want to move forward)
Schedule a 10-min call (WhatsApp voice or Zoom)
On the call: confirm their needs, quote $1,000-$1,500
Dashboard → change stage to "Call Scheduled"
Send payment request (UPI/PayPal/Wise) for 50% upfront
Once paid → change stage to "Client"
STEP 8: Build their website (Claude Code, 3-4 hours)
Paste into Claude Code:


Curtis & Sons Plumbing paid $1,500. Build their full website.
Niche: plumber
City: Harker Heights, TX
Phone: 254-271-0541
Services: emergency repairs, drain cleaning, water heaters, bathroom remodels
Notes: Family-owned since 2015, fast response

Build complete Next.js site (Home, Services, About, Contact).
SEO for "plumber Harker Heights TX". Deploy to Vercel.
Then update lead: PUT http://localhost:3000/api/leads/{id} 
with {"stage": "website_building"}
When deployed: {"stage": "website_ready"}
Claude Code builds everything, deploys, updates the dashboard.

Send client the URL → collect remaining 50% → stage → "Delivered"

DAILY TIMELINE

┌─────────────────────────────────────────────────────┐
│  TIME        ACTION                     TOOL        │
├─────────────────────────────────────────────────────┤
│  9:00 AM     Start server               Terminal    │
│  9:01 AM     Check status               Shell script│
│  9:02 AM     Scrape 10-15 leads         Claude Code │
│  9:07 AM     Write outreach for leads   Claude Code │
│  9:17 AM     Handle follow-up queue     Dashboard   │
│  9:22 AM     Send outreach (30+ leads)  Dashboard   │
│  9:40 AM     Done for morning           ─           │
│                                                     │
│  Throughout   Check for replies          Phone/Email │
│  day          Reply within 1 hour        WhatsApp    │
│                                                     │
│  When client  Build website              Claude Code │
│  pays         Deploy + deliver           Vercel      │
└─────────────────────────────────────────────────────┘
CITY ROTATION (change daily)
Edit demo/rotation.csv or just change the city each day:


Week 1:
  Mon: plumber, Killeen TX
  Tue: plumber, Temple TX
  Wed: hvac, Waco TX
  Thu: electrician, Round Rock TX
  Fri: pest_control, San Marcos TX

Week 2:
  Mon: plumber, San Antonio TX
  Tue: roofer, Dallas TX
  Wed: hvac, Austin TX
  Thu: electrician, Georgetown TX
  Fri: pest_control, Brownsville TX
WHAT EACH TOOL DOES
Tool	Purpose	You touch it?
Terminal	Start server, run scraper	Type 1 command
Claude Code	Scrape leads, write outreach, build client sites	Paste prompts
Dashboard	Send emails, send WhatsApp, track stages, notes	Click buttons
WhatsApp	Reply to prospects, schedule calls	On your phone
Zoho Mail	Sends emails automatically	Never (dashboard does it)
MongoDB	Stores everything	Never (API handles it)
Vercel	Hosts demo pages + client sites	Auto-deploys on git push
METRICS TO TRACK
After 1 week, your dashboard stats should look like:


Total: 50-75 leads
Sent: 40-60
Replied: 4-8 (10-15% reply rate)
Clients: 1-2
Revenue: $1,000-$3,000
After 1 month:


Total: 200-300 leads
Clients: 4-8
Revenue: $4,000-$12,000