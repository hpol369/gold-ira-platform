// src/components/cta/StickyMobileCTA.tsx
// Sticky bottom CTA bar for mobile — Patriot Light Theme
// Augusta review = direct to Augusta LP, competitor review = funnel via /get-started

"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Star, Shield, X } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { trackAffiliateClick } from "@/lib/analytics";
import { getTrackedAugustaLink } from "@/config/affiliates";

interface StickyMobileCTAProps {
  companySlug: string;
  companyName: string;
}

export function StickyMobileCTA({ companySlug, companyName }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { openModal } = useLeadModal();

  const isAugusta = companySlug === "augusta-precious-metals";
  const trackSource = `mobile-sticky-${companySlug}`;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 300;
          const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
          setIsVisible(scrolled && !nearBottom && !isDismissed);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  const handleCtaClick = () => {
    trackAffiliateClick("augusta", trackSource, "mobile");

    if (isAugusta) {
      // Path B: Augusta review page → direct to Augusta LP
      window.location.href = getTrackedAugustaLink("default", trackSource);
    } else {
      // Path A: Competitor review → qualification funnel
      openModal("default", trackSource);
    }
  };

  return (
    <div className="fixed bottom-16 left-0 right-0 z-50 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="bg-white/95 backdrop-blur-lg border-t border-[#2A2D42] px-4 py-3 safe-area-pb">
        <div className="flex items-center gap-3">
          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-[#A8A39A] hover:text-[#F6F4EF] transition-colors"
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
                <p className="text-[#F6F4EF] text-sm font-bold truncate">
                  Get Your Free Precious Metals Kit
                </p>
              </div>
              <button
                onClick={handleCtaClick}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#DC2626] text-white font-bold text-sm rounded-lg hover:bg-[#991B1B] transition-all whitespace-nowrap shadow-sm"
              >
                Get Free Kit
                <ArrowRight className="h-4 w-4" />
              </button>
            </>
          ) : (
            // Competitor review - Steal traffic to Augusta
            <>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold">
                  <Shield className="h-3 w-3 fill-green-100" />
                  <span>Better Alternative?</span>
                </div>
                <p className="text-[#F6F4EF] text-sm font-bold truncate">
                  See why Augusta is rated #1
                </p>
              </div>
              <button
                onClick={handleCtaClick}
                className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white font-bold text-sm rounded-lg hover:bg-green-700 transition-all whitespace-nowrap shadow-sm"
              >
                Compare
                <ArrowRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
