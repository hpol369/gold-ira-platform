"use client";

import { createContext, useContext, useCallback, ReactNode } from "react";
import { getTrackedLink, AFFILIATE_LINKS } from "@/config/affiliates";
import type { MetalPreference } from "@/types/funnel";

// Two-path CTA system:
// - "funnel" (default): routes to /get-started qualification page
// - "direct-augusta": routes directly to Augusta LP (for Augusta-specific pages)
type CTAPath = "funnel" | "direct-augusta";

interface LeadModalContextType {
  /** Navigate to the appropriate CTA destination */
  openModal: (variant: string, source: string, metal?: MetalPreference) => void;
  /** Get the href for a CTA link (for <a> tags) */
  getCTALink: (source: string, path?: CTAPath, metal?: MetalPreference) => string;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const getCTALink = useCallback((source: string, path: CTAPath = "funnel", metal?: MetalPreference): string => {
    if (path === "direct-augusta") {
      // Use silver-specific Augusta link when metal is silver
      const link = metal === "silver" ? AFFILIATE_LINKS.augustaSilver : AFFILIATE_LINKS.augusta;
      return getTrackedLink(link, source, "augusta");
    }
    const params = new URLSearchParams({ ref: source });
    if (metal) params.set("metal", metal);
    return `/get-started?${params.toString()}`;
  }, []);

  const openModal = useCallback((variant: string, source: string, metal?: MetalPreference) => {
    // Determine path based on variant
    const path: CTAPath = variant === "direct-augusta" ? "direct-augusta" : "funnel";
    window.location.href = getCTALink(source, path, metal);
  }, [getCTALink]);

  return (
    <LeadModalContext.Provider value={{ openModal, getCTALink }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (context === undefined) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
