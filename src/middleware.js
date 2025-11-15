import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // ✅ Define which routes need protection
  const isProtectedRoute = pathname.startsWith("/applyJob") || pathname === "/apply";

  // 🧩 Not logged in → redirect to login with callback
  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // 🧩 Logged in but not a 'user' role
  if (isProtectedRoute && token?.role !== "user") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // ✅ Allow access
  return NextResponse.next();
}

// ✅ Match all /applyJob and /apply routes
export const config = {
  matcher: ["/apply/:path*", "/apply"],
};
