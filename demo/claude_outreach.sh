#!/bin/bash
#
# RakriAI — Fetch new leads for Claude Code to write outreach
# Usage: bash demo/claude_outreach.sh
#
# Prerequisites: dev server running (npm run dev)
#

API="http://localhost:3000"
PASSWORD="${DASHBOARD_PASSWORD:-rakriai2026}"
COOKIE_FILE="/tmp/rakriai_cookies.txt"

echo ""
echo "═══════════════════════════════════════════════════"
echo "  🎯 RakriAI — Fetching leads for outreach"
echo "═══════════════════════════════════════════════════"
echo ""

# Step 1: Authenticate
echo "🔐 Authenticating..."
AUTH_RESPONSE=$(curl -s -X POST "$API/api/auth" \
  -H "Content-Type: application/json" \
  -d "{\"password\":\"$PASSWORD\"}" \
  -c "$COOKIE_FILE" \
  -w "%{http_code}")

HTTP_CODE="${AUTH_RESPONSE: -3}"
if [ "$HTTP_CODE" != "200" ]; then
  echo "❌ Authentication failed (HTTP $HTTP_CODE). Is the dev server running?"
  echo "   Start with: npm run dev"
  exit 1
fi
echo "✅ Authenticated"
echo ""

# Step 2: Fetch leads by stage
fetch_leads() {
  local stage=$1
  local label=$2

  RESPONSE=$(curl -s "$API/api/leads?stage=$stage" -b "$COOKIE_FILE")
  COUNT=$(echo "$RESPONSE" | python3 -c "import sys,json; data=json.load(sys.stdin); print(len(data))" 2>/dev/null || echo "0")

  if [ "$COUNT" = "0" ]; then
    echo "   No leads with stage '$stage'"
    return
  fi

  echo "📋 $label ($COUNT leads):"
  echo "─────────────────────────────────────────────────────────────────────────"
  echo "$RESPONSE" | python3 -c "
import sys, json
leads = json.load(sys.stdin)
for l in leads:
    email_tag = f' | 📧 {l[\"email\"]}' if l.get('email') else ' | no email'
    print(f'  {l[\"id\"][:8]}.. | {l[\"businessName\"]:<28} | {l[\"city\"]:<15} | {l[\"niche\"]:<12} | {l[\"rating\"]}★ ({l[\"reviewCount\"]} reviews){email_tag}')
    print(f'           slug: {l[\"slug\"]} | phone: {l[\"phone\"]}')
    print(f'           demo: {l.get(\"demoUrl\", \"—\")}')
    print()
"
  echo "─────────────────────────────────────────────────────────────────────────"
  echo ""
}

# Step 3: Show leads needing outreach
fetch_leads "new" "NEW LEADS (need outreach content)"
fetch_leads "outreach_ready" "OUTREACH READY (content written, ready to send)"

# Step 4: Check follow-ups
echo "🔄 Follow-up queue:"
FOLLOWUPS=$(curl -s "$API/api/leads/followups" -b "$COOKIE_FILE")
FU_TOTAL=$(echo "$FOLLOWUPS" | python3 -c "import sys,json; print(json.load(sys.stdin).get('total',0))" 2>/dev/null || echo "0")
echo "   $FU_TOTAL leads need follow-up today"
echo ""

# Step 5: Print summary
echo "═══════════════════════════════════════════════════"
echo "  📊 Quick Stats"
echo "═══════════════════════════════════════════════════"
for stage in new outreach_ready email_sent wa_sent replied client dead; do
  COUNT=$(curl -s "$API/api/leads?stage=$stage" -b "$COOKIE_FILE" | python3 -c "import sys,json; print(len(json.load(sys.stdin)))" 2>/dev/null || echo "0")
  printf "   %-18s %s\n" "$stage" "$COUNT"
done
echo "═══════════════════════════════════════════════════"
echo ""

# Cleanup
rm -f "$COOKIE_FILE"

echo "✅ Done. Now tell Claude Code:"
echo ""
echo '   "Write personalized outreach for all new leads above."'
echo ""
