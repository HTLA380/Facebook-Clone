import { isAuthenticated } from "./utils/isAuthenticated";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/"];

export default function middleware(req: NextRequest) {
  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/register", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
