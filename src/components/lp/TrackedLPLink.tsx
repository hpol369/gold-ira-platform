"use client";

import Link from "next/link";
import { ReactNode, useMemo } from "react";
import { trackAffiliateClick, trackGoogleAdsConversion } from "@/lib/analytics";

// Generate a short unique click ID
function generateClickId(): string {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 6; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return `CLK-${id}`;
}

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
    // Generate a unique click ID for tracking (stable per component instance)
    const clickId = useMemo(() => generateClickId(), []);

    // Combine source with click ID for tracking
    const sourceWithClickId = `${source}_${clickId}`;

    // Add sub_id to the destination URL for Augusta postback tracking
    const destinationWithSubId = href.includes('?')
        ? `${href}&sub_id=${encodeURIComponent(sourceWithClickId)}`
        : `${href}?sub_id=${encodeURIComponent(sourceWithClickId)}`;

    // Build the tracked URL (for Telegram notification)
    const trackedUrl = `/api/track-click?url=${encodeURIComponent(destinationWithSubId)}&source=${encodeURIComponent(source)}&company=${company}&traffic=${traffic}&click_id=${clickId}`;

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
