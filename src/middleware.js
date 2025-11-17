import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // ✅ Define which routes need protection
  const isProtectedRoute = pathname.startsWith("/applyJob") || pathname === "/apply";

  // ✅ Prevent redirect loops: do not redirect if already on /login
  const isLoginPage = pathname === "/login";

  // 🧩 Not logged in → redirect to login with callback
  if (isProtectedRoute && !token && !isLoginPage) {
    const loginUrl = new URL("/login", req.url);

    // Avoid nesting callbackUrl
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ✅ Allow access
  return NextResponse.next();
}

// ✅ Match all /applyJob and /apply routes
export const config = {
  matcher: ["/apply/:path*", "/apply"],
};
