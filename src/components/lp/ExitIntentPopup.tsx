"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, FileText, ArrowRight } from "lucide-react";
import TrackedLPLink from "./TrackedLPLink";
import { trackExitIntent } from "@/lib/analytics";

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
                trackExitIntent('shown', source);
            }
        };

        // Also show after 30 seconds on mobile (no mouse leave)
        const mobileTimeout = setTimeout(() => {
            if (!hasShown && window.innerWidth < 768) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem("exitPopupShown", "true");
                trackExitIntent('shown', source);
            }
        }, 30000);

        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
            clearTimeout(mobileTimeout);
        };
    }, [hasShown]);

    const handleClose = () => {
        trackExitIntent('closed', source);
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
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="relative bg-[#1a2744] rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-in fade-in zoom-in duration-300">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-[#A8A39A] hover:text-white transition-colors"
                    aria-label="Close popup"
                >
                    <X className="h-6 w-6" />
                </button>

                {/* Icon */}
                <div className="mx-auto w-16 h-16 bg-[#161828]0/20 rounded-full flex items-center justify-center mb-6">
                    <FileText className="h-8 w-8 text-[#D4A94E]" />
                </div>

                {/* Headline */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Wait! Before You Go...
                </h2>
                <p className="text-lg text-white mb-6">
                    Get our free <span className="text-[#D4A94E] font-semibold">{title}</span>
                </p>

                {/* Bullet Points */}
                <ul className="text-left space-y-3 mb-8">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-3 text-[#3F4460]">
                            <span className="text-[#D4A94E] mt-1">•</span>
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <TrackedLPLink
                    href={affiliateLink}
                    source={source}
                    className="block w-full bg-[#161828]0 hover:bg-amber-600 text-[#F6F4EF] font-bold py-4 px-6 rounded-lg transition-colors text-lg flex items-center justify-center gap-2"
                >
                    Get Free Guide
                    <ArrowRight className="h-5 w-5" />
                </TrackedLPLink>

                {/* Trust signal */}
                <p className="mt-4 text-[#A8A39A] text-sm">
                    100% free, no commitment required
                </p>

                {/* Dismiss Link */}
                <button
                    onClick={handleClose}
                    className="mt-3 text-[#A8A39A] text-sm hover:text-[#A8A39A] transition-colors underline"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
