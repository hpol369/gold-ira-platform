// src/components/cta/AugustaCTA.tsx
// Augusta Precious Metals CTA component — two-path routing
// Path A (default): /get-started qualification funnel
// Path B (directToAugusta): context-aware Augusta LP via /api/track-click

"use client";

import { useABTest } from "@/lib/ab-testing";

import { ArrowRight, Award, Phone, Shield, Star } from "lucide-react";
import { getFeaturedCompany } from "@/data/companies";
import { cn } from "@/lib/utils";
import { trackAffiliateClick } from "@/lib/analytics";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { useLeadModal } from "@/context/LeadModalContext";
import { getTrackedAugustaLink, type AugustaContext } from "@/config/affiliates";
import type { MetalContext } from "@/types/funnel";
import { getKitLabel } from "@/types/funnel";

interface AugustaCTAProps {
  variant?: "default" | "sidebar" | "inline" | "footer" | "banner";
  headline?: string;
  subheadline?: string;
  /** When true, clicks go directly to Augusta LP instead of /get-started funnel */
  directToAugusta?: boolean;
  /** Which Augusta LP variant to use when directToAugusta is true */
  augustaContext?: AugustaContext;
  /** @deprecated Use augustaContext instead. Auto-mapped for backward compatibility. */
  linkContext?: string;
  trackSource?: string;
  className?: string;
  metalContext?: MetalContext;
}

// Valid AugustaContext values for auto-mapping from legacy linkContext
const VALID_CONTEXTS = new Set<string>([
  "default", "comparison", "fees", "silver", "scam",
  "buyer-beware", "mid-intent", "fees-mid", "silver-mid",
]);

export function AugustaCTA({
  variant = "default",
  headline,
  subheadline,
  directToAugusta = false,
  augustaContext,
  linkContext,
  trackSource,
  className,
  metalContext = "gold",
}: AugustaCTAProps) {
  const augusta = getFeaturedCompany();
  const { openModal } = useLeadModal();

  // Resolve context: explicit augustaContext > legacy linkContext > "default"
  const resolvedContext: AugustaContext = augustaContext
    || (linkContext && VALID_CONTEXTS.has(linkContext) ? linkContext as AugustaContext : undefined)
    || "default";

  const handleClick = () => {
    const linkType = variant === "sidebar" ? "sidebar"
      : variant === "inline" ? "inline"
      : "cta";
    const source = trackSource || `augusta-cta-${variant}`;

    trackAffiliateClick("augusta", source, linkType);

    if (directToAugusta) {
      // Path B: Direct to context-aware Augusta LP (tracked via /api/track-click)
      window.location.href = getTrackedAugustaLink(resolvedContext, source);
    } else {
      // Path A: Qualification funnel at /get-started
      openModal("default", source);
    }
  };

  // A/B test: CTA button text variant
  const ctaVariant = useABTest("cta-text-v1");

  // Button text adapts to the routing path + A/B test
  const getButtonText = () => {
    if (directToAugusta) {
      if (variant === "sidebar") return "Get Free Kit";
      if (variant === "inline") return "Visit Augusta";
      if (variant === "banner") return "Get Free Kit";
      return getKitLabel(metalContext);
    }
    // Path A: A/B test on main CTA text
    if (variant === "sidebar") return ctaVariant === "variant" ? "Check Your Options" : "Free Info Call";
    if (variant === "inline") return "Learn More";
    if (variant === "banner") return "Get Free Guide";
    if (variant === "footer") return ctaVariant === "variant" ? "See If Gold Is Right For You" : "Get Your Free Info Kit";
    return ctaVariant === "variant" ? "See If Gold Is Right For You" : "Get Free Info Kit";
  };

  // Premium gold CTA button — dark navy text on gold bg with gold glow shine
  const PremiumButton = ({
    children,
    className: btnClassName,
    size = "default"
  }: {
    children: React.ReactNode;
    className?: string;
    size?: "sm" | "default" | "lg";
  }) => {
    const sizeClasses = {
      sm: "py-3 px-5 text-sm",
      default: "py-3.5 px-6 text-base",
      lg: "py-4 px-8 text-lg"
    };

    return (
      <button
        onClick={handleClick}
        className={cn(
          "group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-lg font-semibold",
          "bg-[#C5952E] text-[#0C0D18]",
          "shadow-[0_10px_30px_rgba(197,149,46,0.28),0_0_80px_-10px_rgba(197,149,46,0.2)]",
          "hover:bg-[#D4A94E] hover:shadow-[0_14px_40px_rgba(197,149,46,0.38),0_0_100px_-10px_rgba(197,149,46,0.28)]",
          "hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
          sizeClasses[size],
          btnClassName
        )}
      >
        {/* Subtle gold shine overlay */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  };

  const buttonText = getButtonText();

  // Sidebar variant - compact for sidebars
  if (variant === "sidebar") {
    return (
      <div className={cn(
        "relative overflow-hidden",
        "bg-[#121423] rounded-xl p-5",
        "border border-[#2A2D42]",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_60px_rgba(197,149,46,0.08)]",
        className
      )}
      >
        <FloatingOrbs variant="minimal" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-[#D4A94E] font-semibold text-xs mb-3 uppercase tracking-[0.18em]">
            <Award className="h-3.5 w-3.5" />
            #1 Rated Company
          </div>
          <h3 className="font-serif font-semibold text-[#F6F4EF] mb-2 text-lg tracking-[-0.01em]">
            {headline || "Augusta Precious Metals"}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex text-[#D4A94E]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-[#D4A94E]" />
              ))}
            </div>
            <span className="text-sm text-[#A8A39A]">4.9/5</span>
          </div>
          <ul className="space-y-2 mb-4 text-sm">
            <li className="flex items-center gap-2 text-[#D0CCC4]">
              <Shield className="h-4 w-4 text-[#86EFAC]" />
              A+ BBB Rating
            </li>
            <li className="flex items-center gap-2 text-[#D0CCC4]">
              <Shield className="h-4 w-4 text-[#86EFAC]" />
              Lifetime Support
            </li>
            <li className="flex items-center gap-2 text-[#D0CCC4]">
              <Shield className="h-4 w-4 text-[#86EFAC]" />
              No Pushy Sales
            </li>
          </ul>
          <PremiumButton size="sm" className="w-full justify-center">
            {buttonText}
          </PremiumButton>
        </div>
      </div>
    );
  }

  // Inline variant - for use within content
  if (variant === "inline") {
    return (
      <div className={cn(
        "relative overflow-hidden",
        "bg-[#161828] border border-[#2A2D42] rounded-2xl p-5 my-6",
        "shadow-[0_8px_32px_rgba(0,0,0,0.28)]",
        className
      )}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-[#D4A94E] font-semibold text-xs mb-1 uppercase tracking-[0.18em]">
              <Award className="h-3.5 w-3.5" />
              Recommended
            </div>
            <p className="text-[#D0CCC4] text-sm leading-[1.6]">
              {subheadline || (metalContext === "gold" ? "Augusta Precious Metals is our #1 rated Gold IRA company for their education-first approach and transparent pricing." : "Augusta Precious Metals is our #1 rated precious metals IRA company for their education-first approach and transparent pricing.")}
            </p>
          </div>
          <PremiumButton size="sm" className="whitespace-nowrap">
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </PremiumButton>
        </div>
      </div>
    );
  }

  // Banner variant - full width banner
  if (variant === "banner") {
    return (
      <div className={cn(
        "relative overflow-hidden",
        "bg-[#121423] border-y border-[#2A2D42] py-4 px-6",
        className
      )}>
        {/* Subtle ambient gold gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,149,46,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[#D4A94E] font-semibold text-sm uppercase tracking-[0.18em]">
              <Award className="h-4 w-4" />
              #1 Rated
            </div>
            <span className="text-[#F6F4EF]">
              {headline || (metalContext === "gold" ? "Get Your Free Gold IRA Guide from Augusta Precious Metals" : "Get Your Free Precious Metals IRA Guide from Augusta Precious Metals")}
            </span>
          </div>
          <PremiumButton size="sm">
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </PremiumButton>
        </div>
      </div>
    );
  }

  // Footer variant - for end of articles
  if (variant === "footer") {
    return (
      <div className={cn(
        "relative overflow-hidden",
        "bg-[linear-gradient(180deg,rgba(197,149,46,0.08),rgba(255,255,255,0.01)_40%,rgb(18,20,35))]",
        "rounded-[28px] p-8 md:p-12",
        "border border-[rgba(197,149,46,0.32)] text-center",
        "shadow-[0_16px_48px_rgba(197,149,46,0.14)]",
        className
      )}
      >
        {/* Gold accent strip */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5952E] to-transparent" />

        <FloatingOrbs variant="section" />
        {/* Ambient gold radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(197,149,46,0.12),transparent_60%)] rounded-[28px]" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-[rgba(197,149,46,0.12)] text-[#D4A94E] font-semibold text-xs px-4 py-2 rounded-full mb-5 border border-[rgba(197,149,46,0.35)] uppercase tracking-[0.2em]">
            <Award className="h-4 w-4" />
            Our #1 Recommendation
          </div>
          <h3 className="font-serif text-[2rem] md:text-[2.5rem] font-semibold text-[#F6F4EF] mb-4 tracking-[-0.02em] leading-[1.1]">
            {headline || "Ready to Protect Your Retirement?"}
          </h3>
          <p className="text-[#D0CCC4] max-w-2xl mx-auto mb-7 text-[16px] md:text-[17px] leading-[1.65]">
            {subheadline || "Augusta Precious Metals has been rated #1 in our comprehensive review. Their education-first approach means you'll never feel pressured. Request a free info kit today."}
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
            <div className="flex items-center gap-2 text-[#D0CCC4] text-sm">
              <Shield className="h-5 w-5 text-[#86EFAC]" />
              A+ BBB Rating
            </div>
            <div className="flex items-center gap-2 text-[#D0CCC4] text-sm">
              <Star className="h-5 w-5 fill-[#D4A94E] text-[#D4A94E]" />
              4.9/5 Rating
            </div>
            <div className="flex items-center gap-2 text-[#D0CCC4] text-sm">
              <Phone className="h-5 w-5 text-[#D4A94E]" />
              Lifetime Support
            </div>
          </div>
          <PremiumButton size="lg">
            {buttonText}
            <ArrowRight className="h-5 w-5" />
          </PremiumButton>
        </div>
      </div>
    );
  }

  // Default variant - full featured
  return (
    <div className={cn(
      "relative overflow-hidden",
      "bg-[#161828] rounded-2xl p-8 md:p-10",
      "border border-[#2A2D42]",
      "shadow-[0_16px_48px_rgba(0,0,0,0.32)]",
      className
    )}
    >
      {/* Gold accent strip */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5952E] to-transparent" />
      <FloatingOrbs variant="section" />
      {/* Ambient gold radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(197,149,46,0.1),transparent_55%)] rounded-2xl" />
      <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-[rgba(197,149,46,0.12)] text-[#D4A94E] border border-[rgba(197,149,46,0.35)] font-semibold text-xs px-4 py-2 rounded-full mb-4 uppercase tracking-[0.2em]">
            <Award className="h-4 w-4" />
            {metalContext === "gold" ? "#1 Rated Gold IRA Company" : "#1 Rated Precious Metals Company"}
          </div>
          <h3 className="font-serif text-[1.75rem] md:text-[2.25rem] font-semibold text-[#F6F4EF] mb-4 tracking-[-0.02em] leading-tight">
            {headline || "Augusta Precious Metals"}
          </h3>
          <p className="text-[#D0CCC4] mb-6 text-[16px] leading-[1.65]">
            {subheadline || "Education-first approach with lifetime customer support. No high-pressure sales tactics. Get a free one-on-one web conference to learn about protecting your retirement."}
          </p>
          <ul className="space-y-3 mb-7">
            <li className="flex items-center gap-3 text-[#D0CCC4]">
              <Shield className="h-5 w-5 text-[#86EFAC]" />
              A+ BBB Rating — Zero Complaints
            </li>
            <li className="flex items-center gap-3 text-[#D0CCC4]">
              <Star className="h-5 w-5 fill-[#D4A94E] text-[#D4A94E]" />
              4.9/5 Average Rating
            </li>
            <li className="flex items-center gap-3 text-[#D0CCC4]">
              <Phone className="h-5 w-5 text-[#D4A94E]" />
              Dedicated Agent for Life
            </li>
          </ul>
          <PremiumButton size="lg">
            {buttonText}
            <ArrowRight className="h-5 w-5" />
          </PremiumButton>
        </div>
        <div className="hidden md:block">
          <div className="bg-[#121423] rounded-xl p-6 border border-[#2A2D42] shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            <div className="text-center mb-4">
              <div className="tactical text-5xl font-semibold text-[#F6F4EF]">4.9</div>
              <div className="flex justify-center text-[#D4A94E] my-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-[#D4A94E]" />
                ))}
              </div>
              <div className="text-sm text-[#A8A39A]">{augusta.reviewCount.toLocaleString()} verified reviews</div>
            </div>
            <div className="space-y-3 pt-4 border-t border-[#2A2D42]">
              <div className="flex justify-between text-sm">
                <span className="text-[#A8A39A]">Minimum Investment</span>
                <span className="tactical font-semibold text-[#F6F4EF] whitespace-nowrap">${augusta.minInvestment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#A8A39A]">Setup Fee</span>
                <span className="font-semibold text-[#86EFAC]">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#A8A39A]">Annual Fee</span>
                <span className="tactical font-semibold text-[#F6F4EF] whitespace-nowrap">${augusta.fees.annual}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
