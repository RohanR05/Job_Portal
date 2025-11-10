import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  const isProtectedRoute = pathname.startsWith("/apply");

  // 🧩 If user is NOT logged in and tries to visit protected route:
  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/login", req.url);
    // Store the intended route so we can go back after login
    loginUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // 🧩 If logged in but not a 'user' role
  if (isProtectedRoute && token?.role !== "user") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // ✅ Otherwise allow access
  return NextResponse.next();
}

// Apply middleware to /apply and its subroutes
export const config = {
  matcher: ["/apply/:path*", "/apply"],
};
