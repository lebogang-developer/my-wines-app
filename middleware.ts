import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get("auth-token"); // Check for an authentication token

  // Protect the routes
  const protectedRoutes = ["/add-wine", "/edit-wine"];

  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next(); // Continue if authenticated or route is not protected
}

export const config = {
  matcher: ["/add-wine/:path*", "/edit-wine/:path*"], // Routes to protect
};
