import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('-> env', process.env.NODE_ENV);
  // const apiUrl = process.env.NODE_ENV === "production"
  //   ? 'https://jobportal-server-backend.yajxvx.easypanel.host'
  //   : "http://localhost:5000";

  const apiUrl = process.env.API_URL;

  console.log('-> apiUrl', apiUrl);

  const url = new URL(apiUrl + request.nextUrl.pathname + request.nextUrl.search)

  console.log('-> url', url.toString());
  return NextResponse.rewrite(url.toString(), {
    request,
    headers: {
      ...request.headers,
    },
    statusText: "Rewriting to API",
  })
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}