import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });
  const pathname = req.nextUrl.pathname;

  const isUserSpecificRoute = pathname.startsWith("/apply");

  // 🧩 Redirect unauthenticated users to login
  if (isUserSpecificRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🧩 Redirect if user is not role: 'user'
  if (isUserSpecificRoute && token?.role !== "user") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
