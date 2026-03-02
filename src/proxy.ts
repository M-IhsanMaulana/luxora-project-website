import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n/config";

export default function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        // A simple basic accept-language detection
        const acceptLanguage = request.headers.get("accept-language") || "";
        let locale: string = i18n.defaultLocale;

        if (acceptLanguage.includes("id")) {
            locale = "id";
        }

        // e.g. incoming request is /bot
        // The new URL is now /en/bot
        return NextResponse.redirect(
            new URL(`/${locale}${pathname}`, request.url)
        );
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next), API routes, and static assets
        "/((?!_next|api|favicon.ico|.*\\..*).*)",
    ],
};
