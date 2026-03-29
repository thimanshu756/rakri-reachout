import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticatedFromRequest } from "@/lib/auth";

// PUT /api/stages — run auto stage transitions
// Call this periodically or on dashboard load to auto-mark dead leads
export async function PUT(request: NextRequest) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();
  const results: Record<string, number> = {};

  // Auto-dead: 7+ days after follow-up 3 with no reply
  const deadCutoff = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const deadResult = await prisma.lead.updateMany({
    where: {
      stage: "followed_up_3",
      followup3At: { lte: deadCutoff },
    },
    data: { stage: "dead" },
  });
  results.markedDead = deadResult.count;

  // Auto-dead: 21+ days after outreach with no follow-ups sent and no reply
  const staleCutoff = new Date(now.getTime() - 21 * 24 * 60 * 60 * 1000);
  const staleResult = await prisma.lead.updateMany({
    where: {
      stage: { in: ["email_sent", "wa_sent"] },
      outreachAt: { lte: staleCutoff },
    },
    data: { stage: "dead" },
  });
  results.markedStale = staleResult.count;

  return NextResponse.json({
    success: true,
    transitions: results,
  });
}
