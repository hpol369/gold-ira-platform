"use client";

import Link from "next/link";
import { ReactNode } from "react";

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
 * Routes through /api/track-click to send Telegram notifications
 */
export default function TrackedLPLink({
    href,
    source,
    company = "augusta",
    traffic = "paid", // LP traffic is usually paid
    className,
    children,
}: TrackedLPLinkProps) {
    // Build the tracked URL
    const trackedUrl = `/api/track-click?url=${encodeURIComponent(href)}&source=${encodeURIComponent(source)}&company=${company}&traffic=${traffic}`;

    return (
        <Link
            href={trackedUrl}
            className={className}
        >
            {children}
        </Link>
    );
}
