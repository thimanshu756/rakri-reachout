import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticatedFromRequest } from "@/lib/auth";

// GET /api/leads/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const lead = await prisma.lead.findUnique({ where: { id } });

  if (!lead) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  return NextResponse.json(lead);
}

// PUT /api/leads/[id] — update any fields
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();

  // Auto-set timestamps based on stage changes
  const data: Record<string, unknown> = { ...body };

  if (body.stage) {
    const now = new Date();
    switch (body.stage) {
      case "email_sent":
      case "wa_sent":
        if (!data.outreachAt) data.outreachAt = now;
        break;
      case "followed_up_1":
        data.followup1At = now;
        break;
      case "followed_up_2":
        data.followup2At = now;
        break;
      case "followed_up_3":
        data.followup3At = now;
        break;
      case "replied":
        data.repliedAt = now;
        break;
      case "client":
        data.clientAt = now;
        break;
      case "delivered":
        data.deliveredAt = now;
        break;
    }
  }

  try {
    const lead = await prisma.lead.update({
      where: { id },
      data,
    });
    return NextResponse.json(lead);
  } catch {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }
}

// DELETE /api/leads/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await prisma.lead.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }
}
