// src/components/cta/StickyMobileCTA.tsx
// Sticky bottom CTA bar for mobile - appears after scrolling
// Logic: Augusta review = direct CTA, competitor review = steal traffic to Augusta

"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Star, Shield, X } from "lucide-react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

interface StickyMobileCTAProps {
  companySlug: string;
  companyName: string;
}

export function StickyMobileCTA({ companySlug, companyName }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const isAugusta = companySlug === "augusta-precious-metals";
  const trackSource = `mobile-sticky-${companySlug}`;
  const trackedLink = getTrackedLink(AFFILIATE_LINKS.augusta, trackSource, "augusta");

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px (user is engaged)
      const scrolled = window.scrollY > 300;

      // Hide when near bottom (sidebar is visible)
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;

      setIsVisible(scrolled && !nearBottom && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      {/* Gradient fade effect */}
      <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />

      <div className="bg-slate-900/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 safe-area-pb">
        <div className="flex items-center gap-3">
          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>

          {isAugusta ? (
            // Augusta review - Direct CTA
            <>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                  <Star className="h-3 w-3 fill-amber-400" />
                  <span>Our #1 Pick</span>
                </div>
                <p className="text-white text-sm font-medium truncate">
                  Get Your Free Gold IRA Kit
                </p>
              </div>
              <a
                href={trackedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold text-sm rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all whitespace-nowrap"
              >
                Get Free Kit
                <ArrowRight className="h-4 w-4" />
              </a>
            </>
          ) : (
            // Competitor review - Steal traffic to Augusta
            <>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                  <Shield className="h-3 w-3" />
                  <span>Better Alternative?</span>
                </div>
                <p className="text-white text-sm font-medium truncate">
                  See why Augusta is rated #1
                </p>
              </div>
              <a
                href={trackedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-sm rounded-lg hover:from-green-600 hover:to-green-700 transition-all whitespace-nowrap"
              >
                Compare
                <ArrowRight className="h-4 w-4" />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
