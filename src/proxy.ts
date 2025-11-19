/* old middleware.ts new proxy.ts */
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/dashboard"];
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !token) {
    return Response.redirect(new URL("/sign-in", request.url));
  }

  const authPages = ["/sign-in", "/sign-up"];
  const isAuthPage = authPages.includes(pathname);

  if (token && isAuthPage) {
    return Response.redirect(new URL("/dashboard", request.url));
  }

  return;
}
