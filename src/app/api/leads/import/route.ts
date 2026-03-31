import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticatedFromRequest } from "@/lib/auth";
import { toSlug, toDemoUrl } from "@/lib/slug";

interface CsvRow {
  business_name?: string;
  businessName?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  niche?: string;
  rating?: string;
  review_count?: string;
  reviewCount?: string;
  maps_url?: string;
  mapsUrl?: string;
  // Facebook fields
  fb_url?: string;
  fbUrl?: string;
  fb_followers?: string;
  fbFollowers?: string;
}

function parseCsv(csvText: string): CsvRow[] {
  const lines = csvText.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0].split(",").map((h) => h.trim().replace(/"/g, ""));
  const rows: CsvRow[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values: string[] = [];
    let current = "";
    let inQuotes = false;

    for (const char of lines[i]) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        values.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    const row: Record<string, string> = {};
    headers.forEach((header, idx) => {
      row[header] = values[idx] || "";
    });
    rows.push(row as unknown as CsvRow);
  }

  return rows;
}

function normalizePhone(phone: string): string {
  // Strip everything except digits and leading +
  return phone.replace(/[^\d+]/g, "").replace(/^0+/, "");
}

// POST /api/leads/import — bulk import from CSV with smart dedup
export async function POST(request: NextRequest) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { csv } = await request.json();

  if (!csv) {
    return NextResponse.json({ error: "CSV data required" }, { status: 400 });
  }

  const rows = parseCsv(csv);

  if (rows.length === 0) {
    return NextResponse.json({ error: "No valid rows found" }, { status: 400 });
  }

  let imported = 0;
  let merged = 0;
  let skipped = 0;
  const errors: string[] = [];

  for (const row of rows) {
    const name = row.business_name || row.businessName || "";
    const phone = row.phone || "";
    const city = row.city || "";
    const country = row.country || "US";
    const niche = row.niche || "plumber";
    const email = row.email || null;
    const fbUrl = row.fb_url || row.fbUrl || null;
    const fbFollowers = parseInt(row.fb_followers || row.fbFollowers || "0") || null;

    if (!name || !phone) {
      skipped++;
      continue;
    }

    const slug = toSlug(name);
    const normalizedPhone = normalizePhone(phone);

    // Check 1: exact slug match
    const existingBySlug = await prisma.lead.findUnique({ where: { slug } });

    // Check 2: phone number match (catches different names for same business)
    const existingByPhone = normalizedPhone
      ? await prisma.lead.findFirst({
          where: {
            phone: { contains: normalizedPhone.slice(-10) }, // last 10 digits
          },
        })
      : null;

    const existing = existingBySlug || existingByPhone;

    if (existing) {
      // MERGE: update existing lead with new data (don't overwrite, only fill gaps)
      const updates: Record<string, unknown> = {};

      if (!existing.email && email) {
        updates.email = email;
        updates.hasEmail = true;
      }
      if (!existing.fbUrl && fbUrl) {
        updates.fbUrl = fbUrl;
      }
      if (!existing.fbFollowers && fbFollowers) {
        updates.fbFollowers = fbFollowers;
      }
      if (!existing.address && row.address) {
        updates.address = row.address;
      }
      if (!existing.mapsUrl && (row.maps_url || row.mapsUrl)) {
        updates.mapsUrl = row.maps_url || row.mapsUrl || null;
      }

      if (Object.keys(updates).length > 0) {
        await prisma.lead.update({
          where: { id: existing.id },
          data: updates,
        });
        merged++;
      } else {
        skipped++;
      }
      continue;
    }

    // CREATE: new lead
    try {
      await prisma.lead.create({
        data: {
          slug,
          businessName: name,
          phone,
          email,
          hasEmail: !!email,
          address: row.address || null,
          city,
          state: row.state || null,
          country,
          niche,
          rating: parseFloat(row.rating || "0") || 0,
          reviewCount: parseInt(row.review_count || row.reviewCount || "0") || 0,
          mapsUrl: row.maps_url || row.mapsUrl || null,
          demoUrl: toDemoUrl(slug),
          fbUrl,
          fbFollowers,
          stage: "new",
        },
      });
      imported++;
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      errors.push(`${name}: ${msg}`);
    }
  }

  return NextResponse.json({
    imported,
    merged,
    skipped,
    total: rows.length,
    errors: errors.length > 0 ? errors : undefined,
  });
}
