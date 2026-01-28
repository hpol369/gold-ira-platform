// src/components/cta/StickyMobileCTA.tsx
// Sticky bottom CTA bar for mobile - Patriot Light Theme
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
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      {/* Gradient fade effect removed for clean look */}

      <div className="bg-white/95 backdrop-blur-lg border-t border-slate-200 px-4 py-3 safe-area-pb">
        <div className="flex items-center gap-3">
          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>

          {isAugusta ? (
            // Augusta review - Direct CTA
            <>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-amber-600 text-xs font-bold">
                  <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                  <span>Our #1 Pick</span>
                </div>
                <p className="text-slate-900 text-sm font-bold truncate">
                  Get Your Free Gold IRA Kit
                </p>
              </div>
              <a
                href={trackedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-[#B22234] text-white font-bold text-sm rounded-lg hover:bg-[#8b1c2a] transition-all whitespace-nowrap shadow-sm"
              >
                Get Free Kit
                <ArrowRight className="h-4 w-4" />
              </a>
            </>
          ) : (
            // Competitor review - Steal traffic to Augusta
            <>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold">
                  <Shield className="h-3 w-3 fill-green-100" />
                  <span>Better Alternative?</span>
                </div>
                <p className="text-slate-900 text-sm font-bold truncate">
                  See why Augusta is rated #1
                </p>
              </div>
              <a
                href={trackedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white font-bold text-sm rounded-lg hover:bg-green-700 transition-all whitespace-nowrap shadow-sm"
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
