"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { trackAffiliateClick } from "@/lib/analytics";

interface TrackedLPLinkProps {
    href: string;
    source: string;
    company?: string;
    traffic?: "paid" | "organic";
    className?: string;
    children: ReactNode;
}

/**
 * Tracked affiliate link for Landing Pages
 * - Sends Telegram notification via /api/track-click
 * - Fires GA4 event for Google Ads optimization
 */
export default function TrackedLPLink({
    href,
    source,
    company = "augusta",
    traffic = "paid", // LP traffic is usually paid
    className,
    children,
}: TrackedLPLinkProps) {
    // Build the tracked URL (for Telegram notification)
    const trackedUrl = `/api/track-click?url=${encodeURIComponent(href)}&source=${encodeURIComponent(source)}&company=${company}&traffic=${traffic}`;

    // Fire GA4 event on click (for Google Ads optimization)
    const handleClick = () => {
        trackAffiliateClick(company, source, "cta");
    };

    return (
        <Link
            href={trackedUrl}
            className={className}
            onClick={handleClick}
        >
            {children}
        </Link>
    );
}
