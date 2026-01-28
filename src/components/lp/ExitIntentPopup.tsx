"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, FileText, ArrowRight } from "lucide-react";
import TrackedLPLink from "./TrackedLPLink";

interface ExitIntentPopupProps {
    affiliateLink: string;
    source: string;
    variant?: "gold" | "silver";
}

export default function ExitIntentPopup({ affiliateLink, source, variant = "gold" }: ExitIntentPopupProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if already shown this session
        const shown = sessionStorage.getItem("exitPopupShown");
        if (shown) {
            setHasShown(true);
            return;
        }

        const handleMouseLeave = (e: MouseEvent) => {
            // Only trigger when mouse leaves through the top
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem("exitPopupShown", "true");
            }
        };

        // Also show after 30 seconds on mobile (no mouse leave)
        const mobileTimeout = setTimeout(() => {
            if (!hasShown && window.innerWidth < 768) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem("exitPopupShown", "true");
            }
        }, 30000);

        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
            clearTimeout(mobileTimeout);
        };
    }, [hasShown]);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    const isGold = variant === "gold";
    const title = isGold ? "Gold IRA Investor's Guide" : "Silver IRA Investor's Guide";
    const bullets = isGold
        ? [
              "Learn how to protect your retirement from inflation",
              "Discover the IRS-approved gold you can hold",
              "Compare top Gold IRA companies side-by-side",
          ]
        : [
              "Learn how to add silver to your retirement account",
              "Discover IRS-approved silver coins and bars",
              "Compare top Silver IRA companies side-by-side",
          ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="relative bg-[#1a2744] rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-in fade-in zoom-in duration-300">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                    aria-label="Close popup"
                >
                    <X className="h-6 w-6" />
                </button>

                {/* Icon */}
                <div className="mx-auto w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                    <FileText className="h-8 w-8 text-amber-500" />
                </div>

                {/* Headline */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Wait! Before You Go...
                </h2>
                <p className="text-lg text-white mb-6">
                    Get our free <span className="text-amber-500 font-semibold">{title}</span>
                </p>

                {/* Bullet Points */}
                <ul className="text-left space-y-3 mb-8">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-300">
                            <span className="text-amber-500 mt-1">•</span>
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <TrackedLPLink
                    href={affiliateLink}
                    source={source}
                    className="block w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-6 rounded-lg transition-colors text-lg flex items-center justify-center gap-2"
                >
                    Get Free Guide
                    <ArrowRight className="h-5 w-5" />
                </TrackedLPLink>

                {/* Secondary Link */}
                <p className="mt-4 text-slate-400 text-sm">
                    Or take our{" "}
                    <Link href="/tools/gold-allocation-calculator" className="text-amber-500 hover:underline">
                        free portfolio audit
                    </Link>
                </p>

                {/* Dismiss Link */}
                <button
                    onClick={handleClose}
                    className="mt-4 text-slate-500 text-sm hover:text-slate-400 transition-colors"
                >
                    No thanks, I'll figure it out myself{" "}
                    <span className="underline">Close</span>
                </button>
            </div>
        </div>
    );
}
