import {
    NextResponse
} from "next/server";

export function middleware(req) {
    if (req.nextUrl.pathname.includes("/private-dash")) {
        return NextResponse.redirect(new URL("/", req.url))
    }
    return NextResponse.next()
}