import { NextRequest, NextResponse } from "next/server";

// Gates /admin/* pages and /api/admin/* routes behind HTTP Basic Auth.
// Good enough for a small internal team; swap for a real auth provider
// (e.g. NextAuth with an allowlist of OSN team emails) once more than a
// couple of people need access, since Basic Auth shares one password.
//
// Required env vars:
//   ADMIN_USERNAME
//   ADMIN_PASSWORD

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  const expectedUser = process.env.ADMIN_USERNAME;
  const expectedPass = process.env.ADMIN_PASSWORD;

  if (!expectedUser || !expectedPass) {
    // Fail closed: if credentials aren't configured, block access entirely
    // rather than silently letting anyone through.
    return new NextResponse("Admin auth not configured", { status: 503 });
  }

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = Buffer.from(encoded, "base64").toString("utf-8");
      const [user, pass] = decoded.split(":");
      if (user === expectedUser && pass === expectedPass) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="OSN Admin"' },
  });
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
