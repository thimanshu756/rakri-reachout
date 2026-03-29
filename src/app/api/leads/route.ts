import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticatedFromRequest } from "@/lib/auth";
import { toSlug, toDemoUrl } from "@/lib/slug";

// GET /api/leads — list all leads with optional filters
export async function GET(request: NextRequest) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const niche = searchParams.get("niche");
  const city = searchParams.get("city");
  const stage = searchParams.get("stage");
  const search = searchParams.get("search");

  const where: Record<string, unknown> = {};
  if (niche) where.niche = niche;
  if (city) where.city = { contains: city, mode: "insensitive" };
  if (stage) where.stage = stage;
  if (search) where.businessName = { contains: search, mode: "insensitive" };

  const leads = await prisma.lead.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(leads);
}

// POST /api/leads — add a single lead
export async function POST(request: NextRequest) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  if (!body.businessName || !body.phone || !body.city || !body.niche) {
    return NextResponse.json(
      { error: "businessName, phone, city, and niche are required" },
      { status: 400 }
    );
  }

  const slug = toSlug(body.businessName);

  // Check for duplicate
  const existing = await prisma.lead.findUnique({ where: { slug } });
  if (existing) {
    return NextResponse.json(
      { error: "Lead already exists", slug },
      { status: 409 }
    );
  }

  const lead = await prisma.lead.create({
    data: {
      slug,
      businessName: body.businessName,
      phone: body.phone,
      email: body.email || null,
      hasEmail: !!body.email,
      address: body.address || null,
      city: body.city,
      state: body.state || null,
      country: body.country || "US",
      niche: body.niche,
      rating: body.rating || 0,
      reviewCount: body.reviewCount || 0,
      mapsUrl: body.mapsUrl || null,
      demoUrl: toDemoUrl(slug),
      stage: "new",
    },
  });

  return NextResponse.json(lead, { status: 201 });
}
