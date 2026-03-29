import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticatedFromRequest } from "@/lib/auth";

// GET /api/leads/followups — returns leads needing follow-up today
export async function GET(request: NextRequest) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();

  // Follow-up 1: 3+ days after first outreach, stage is email_sent or wa_sent
  const fu1Cutoff = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
  const followup1 = await prisma.lead.findMany({
    where: {
      stage: { in: ["email_sent", "wa_sent"] },
      outreachAt: { lte: fu1Cutoff },
      followup1: { not: null }, // has follow-up content ready
    },
    orderBy: { outreachAt: "asc" },
  });

  // Follow-up 2: 4+ days after FU1, stage is followed_up_1
  const fu2Cutoff = new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000);
  const followup2 = await prisma.lead.findMany({
    where: {
      stage: "followed_up_1",
      followup1At: { lte: fu2Cutoff },
      followup2: { not: null },
    },
    orderBy: { followup1At: "asc" },
  });

  // Follow-up 3: 7+ days after FU2, stage is followed_up_2
  const fu3Cutoff = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const followup3 = await prisma.lead.findMany({
    where: {
      stage: "followed_up_2",
      followup2At: { lte: fu3Cutoff },
      followup3: { not: null },
    },
    orderBy: { followup2At: "asc" },
  });

  // Auto-dead: 7+ days after FU3 with no reply
  const deadCutoff = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const autoDead = await prisma.lead.findMany({
    where: {
      stage: "followed_up_3",
      followup3At: { lte: deadCutoff },
    },
  });

  // Auto-mark dead leads
  if (autoDead.length > 0) {
    await prisma.lead.updateMany({
      where: {
        id: { in: autoDead.map((l) => l.id) },
      },
      data: { stage: "dead" },
    });
  }

  return NextResponse.json({
    followup1: followup1.map((l) => ({ ...l, followupNumber: 1, daysSince: Math.floor((now.getTime() - (l.outreachAt?.getTime() || 0)) / (24 * 60 * 60 * 1000)) })),
    followup2: followup2.map((l) => ({ ...l, followupNumber: 2, daysSince: Math.floor((now.getTime() - (l.followup1At?.getTime() || 0)) / (24 * 60 * 60 * 1000)) })),
    followup3: followup3.map((l) => ({ ...l, followupNumber: 3, daysSince: Math.floor((now.getTime() - (l.followup2At?.getTime() || 0)) / (24 * 60 * 60 * 1000)) })),
    autoDeadCount: autoDead.length,
    total: followup1.length + followup2.length + followup3.length,
  });
}
