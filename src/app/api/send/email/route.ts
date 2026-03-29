import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticatedFromRequest } from "@/lib/auth";
import { sendEmail } from "@/lib/zoho";

// POST /api/send/email — send email via Zoho SMTP and auto-update stage
export async function POST(request: NextRequest) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { leadId, type } = await request.json();
  // type: "initial" | "followup1" | "followup2" | "followup3"

  if (!leadId) {
    return NextResponse.json({ error: "leadId required" }, { status: 400 });
  }

  const lead = await prisma.lead.findUnique({ where: { id: leadId } });
  if (!lead) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  if (!lead.email && !lead.hasEmail) {
    return NextResponse.json(
      { error: "Lead has no email address" },
      { status: 400 }
    );
  }

  // Determine which email content to send
  let subject: string | null = null;
  let body: string | null = null;
  let newStage: string | null = null;
  const updateData: Record<string, unknown> = {};

  switch (type || "initial") {
    case "initial":
      subject = lead.emailSubject;
      body = lead.emailBody;
      newStage = "email_sent";
      updateData.outreachAt = new Date();
      break;
    case "followup1":
      subject = `Re: ${lead.emailSubject || "Following up"}`;
      body = lead.followup1;
      newStage = "followed_up_1";
      updateData.followup1At = new Date();
      break;
    case "followup2":
      subject = `Re: ${lead.emailSubject || "Following up"}`;
      body = lead.followup2;
      newStage = "followed_up_2";
      updateData.followup2At = new Date();
      break;
    case "followup3":
      subject = `Re: ${lead.emailSubject || "Final follow-up"}`;
      body = lead.followup3;
      newStage = "followed_up_3";
      updateData.followup3At = new Date();
      break;
  }

  if (!subject || !body) {
    return NextResponse.json(
      { error: "No email content available. Ask Claude Code to write outreach first." },
      { status: 400 }
    );
  }

  // Send via Zoho SMTP
  const result = await sendEmail({
    to: lead.email!,
    subject,
    body,
  });

  if (!result.success) {
    return NextResponse.json(
      { error: `Failed to send: ${result.error}` },
      { status: 500 }
    );
  }

  // Update stage and timestamp
  if (newStage) {
    updateData.stage = newStage;
  }

  const updatedLead = await prisma.lead.update({
    where: { id: leadId },
    data: updateData,
  });

  return NextResponse.json({
    success: true,
    message: `Email sent to ${lead.email}`,
    lead: updatedLead,
  });
}
