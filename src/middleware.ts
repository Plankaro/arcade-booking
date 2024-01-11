import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {


    const apiUrl = process.env.NODE_ENV === "development" ? process.env.DEVELOPMENT_API_URL : process.env.API_URL
    console.log(process.env.NODE_ENV)
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