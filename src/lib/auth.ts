import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const COOKIE_NAME = "rakriai_auth";
const COOKIE_VALUE = "authenticated";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export function validatePassword(password: string): boolean {
  return password === process.env.DASHBOARD_PASSWORD;
}

export async function setAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME);
  return cookie?.value === COOKIE_VALUE;
}

export function isAuthenticatedFromRequest(request: NextRequest): boolean {
  const cookie = request.cookies.get(COOKIE_NAME);
  return cookie?.value === COOKIE_VALUE;
}

export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
