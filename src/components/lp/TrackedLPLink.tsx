"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { trackAffiliateClick, trackGoogleAdsConversion } from "@/lib/analytics";

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
    // Add sub_id to the destination URL for Augusta postback tracking
    const destinationWithSubId = href.includes('?')
        ? `${href}&sub_id=${encodeURIComponent(source)}`
        : `${href}?sub_id=${encodeURIComponent(source)}`;

    // Build the tracked URL (for Telegram notification)
    const trackedUrl = `/api/track-click?url=${encodeURIComponent(destinationWithSubId)}&source=${encodeURIComponent(source)}&company=${company}&traffic=${traffic}`;

    // Fire GA4 event + Google Ads conversion on click
    const handleClick = () => {
        trackAffiliateClick(company, source, "cta");
        trackGoogleAdsConversion();
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
