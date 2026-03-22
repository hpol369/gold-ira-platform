// src/components/cta/StickyMobileCTAGeneric.tsx
// Generic mobile sticky CTA for guide/learn/hub pages — promotes Augusta free kit
// Sits above MobileBottomNav (bottom-16)

"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Shield, X } from "lucide-react";
import { trackAffiliateClick } from "@/lib/analytics";
import { getTrackedAugustaLink } from "@/config/affiliates";

export function StickyMobileCTAGeneric() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 400;
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

  const handleClick = () => {
    trackAffiliateClick("augusta", "mobile-sticky-generic", "mobile");
    window.location.href = getTrackedAugustaLink("default", "mobile-sticky-generic");
  };

  return (
    <div className="fixed bottom-16 left-0 right-0 z-50 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="bg-white/95 backdrop-blur-lg border-t border-slate-200 px-4 py-3 safe-area-pb">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-green-700 text-xs font-bold">
              <Shield className="h-3 w-3" />
              <span>Free Gold IRA Kit</span>
            </div>
            <p className="text-slate-900 text-sm font-bold truncate">
              See if a Gold IRA is right for you
            </p>
          </div>
          <button
            onClick={handleClick}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#B22234] text-white font-bold text-sm rounded-lg hover:bg-[#8b1c2a] transition-all whitespace-nowrap shadow-sm"
          >
            Get Free Kit
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
