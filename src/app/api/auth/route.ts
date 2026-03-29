import { NextRequest, NextResponse } from "next/server";
import { validatePassword, setAuthCookie, clearAuthCookie } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const { password, action } = await request.json();

  if (action === "logout") {
    await clearAuthCookie();
    return NextResponse.json({ success: true });
  }

  if (!password) {
    return NextResponse.json({ error: "Password required" }, { status: 400 });
  }

  if (!validatePassword(password)) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  await setAuthCookie();
  return NextResponse.json({ success: true });
}
