// src/components/cta/AugustaCTA.tsx
// Augusta Precious Metals CTA component for use across the site

"use client";

import { ArrowRight, Award, Phone, Shield, Star } from "lucide-react";
import { getFeaturedCompany } from "@/data/companies";
import { getAugustaLink, getTrackedAugustaLink, type AugustaContext } from "@/config/affiliates";
import { cn } from "@/lib/utils";
import { trackAffiliateClick } from "@/lib/analytics";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";

interface AugustaCTAProps {
  variant?: "default" | "sidebar" | "inline" | "footer" | "banner";
  headline?: string;
  subheadline?: string;
  linkContext?: AugustaContext; // Which Augusta landing page to use
  trackSource?: string; // If provided, enables click tracking with Telegram notifications
  className?: string;
}

export function AugustaCTA({
  variant = "default",
  headline,
  subheadline,
  linkContext = "default",
  trackSource,
  className,
}: AugustaCTAProps) {
  const augusta = getFeaturedCompany();
  // Use tracked link if trackSource is provided, otherwise use direct link
  const affiliateLink = trackSource
    ? getTrackedAugustaLink(linkContext, trackSource)
    : getAugustaLink(linkContext);

  // Fire GA4 event on click
  const handleClick = () => {
    const linkType = variant === "sidebar" ? "sidebar"
      : variant === "inline" ? "inline"
      : variant === "banner" ? "cta"
      : "cta";
    trackAffiliateClick("augusta", trackSource || "direct", linkType);
  };

  // Premium button with patriot glow and shine effect
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
      sm: "py-3 px-4 text-sm",
      default: "py-3 px-6 text-base",
      lg: "py-4 px-8 text-lg"
    };

    return (
      <a
        href={affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn(
          "group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl font-bold",
          "bg-gradient-to-b from-[#B22234] via-[#B22234] to-[#8b1c2a] text-white",
          "shadow-[0_0_60px_-5px_rgba(178,34,52,0.5),0_0_100px_-10px_rgba(178,34,52,0.3)]",
          "hover:shadow-[0_0_80px_-5px_rgba(178,34,52,0.7),0_0_120px_-10px_rgba(178,34,52,0.4)]",
          "hover:scale-105 transition-all duration-300",
          sizeClasses[size],
          btnClassName
        )}
      >
        {/* Shine effect overlay */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  };

  // Sidebar variant - compact for sidebars
  if (variant === "sidebar") {
    return (
      <div className={cn(
        "relative overflow-hidden",
        "bg-gradient-to-br from-slate-50 to-white rounded-xl p-5",
        "border border-slate-200",
        "shadow-[0_8px_32px_rgba(0,0,0,0.1),0_0_60px_rgba(178,34,52,0.1)]",
        className
      )}
      style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
      >
        <FloatingOrbs variant="minimal" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-[#B22234] font-semibold text-xs mb-3">
            <Award className="h-3.5 w-3.5" />
            #1 RATED COMPANY
          </div>
          <h3 className="font-bold text-[#000080] mb-2 text-lg">
            {headline || "Augusta Precious Metals"}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex text-[#B22234]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-slate-500">4.9/5</span>
          </div>
          <ul className="space-y-2 mb-4 text-sm">
            <li className="flex items-center gap-2 text-slate-600">
              <Shield className="h-4 w-4 text-green-500" />
              A+ BBB Rating
            </li>
            <li className="flex items-center gap-2 text-slate-600">
              <Shield className="h-4 w-4 text-green-500" />
              Lifetime Support
            </li>
            <li className="flex items-center gap-2 text-slate-600">
              <Shield className="h-4 w-4 text-green-500" />
              No Pushy Sales
            </li>
          </ul>
          <PremiumButton size="sm" className="w-full justify-center">
            Free Consultation
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
        "bg-slate-50 border border-slate-200 rounded-2xl p-4 my-6",
        "shadow-[0_8px_32px_rgba(0,0,0,0.1),0_0_60px_rgba(178,34,52,0.1)]",
        className
      )}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-[#B22234] font-semibold text-xs mb-1">
              <Award className="h-3.5 w-3.5" />
              RECOMMENDED
            </div>
            <p className="text-slate-600 text-sm">
              {subheadline || "Augusta Precious Metals is our #1 rated Gold IRA company for their education-first approach and transparent pricing."}
            </p>
          </div>
          <PremiumButton size="sm" className="whitespace-nowrap">
            Learn More
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
        "bg-gradient-to-r from-slate-50 via-white to-slate-50 py-4 px-6",
        "shadow-[0_8px_32px_rgba(0,0,0,0.1),0_0_60px_rgba(178,34,52,0.1)]",
        className
      )}>
        {/* Subtle ambient patriot gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#B22234]/5 via-transparent to-[#B22234]/5" />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[#B22234] font-semibold text-sm">
              <Award className="h-4 w-4" />
              #1 RATED
            </div>
            <span className="text-[#000080]">
              {headline || "Get Your Free Gold IRA Guide from Augusta Precious Metals"}
            </span>
          </div>
          <PremiumButton size="sm">
            Get Free Guide
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
        "bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-2xl p-8 md:p-10",
        "border border-slate-200 text-center",
        "shadow-[0_8px_32px_rgba(0,0,0,0.1),0_0_60px_rgba(178,34,52,0.1)]",
        className
      )}
      style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
      >
        <FloatingOrbs variant="section" />
        {/* Ambient patriot gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B22234]/5 via-transparent to-[#B22234]/5 rounded-2xl" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#B22234]/10 text-[#B22234] font-semibold text-sm px-4 py-2 rounded-full mb-4 border border-[#B22234]/30">
            <Award className="h-4 w-4" />
            OUR #1 RECOMMENDATION
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
            {headline || "Ready to Protect Your Retirement?"}
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto mb-6">
            {subheadline || "Augusta Precious Metals has been rated #1 in our comprehensive review. Their education-first approach means you'll never feel pressured. Get a free consultation today."}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-slate-600">
              <Shield className="h-5 w-5 text-green-500" />
              A+ BBB Rating
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Star className="h-5 w-5 text-[#B22234]" />
              4.9/5 Rating
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Phone className="h-5 w-5 text-blue-500" />
              Lifetime Support
            </div>
          </div>
          <PremiumButton size="lg">
            Get Your Free Consultation
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
      "bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 md:p-10",
      "border border-slate-200",
      "shadow-[0_8px_32px_rgba(0,0,0,0.1),0_0_60px_rgba(178,34,52,0.1)]",
      className
    )}
    style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
    >
      <FloatingOrbs variant="section" />
      {/* Ambient patriot gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B22234]/5 via-transparent to-[#B22234]/5 rounded-2xl" />
      <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#B22234] text-white font-semibold text-sm px-4 py-2 rounded-full mb-4">
            <Award className="h-4 w-4" />
            #1 RATED GOLD IRA COMPANY
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
            {headline || "Augusta Precious Metals"}
          </h3>
          <p className="text-slate-500 mb-6">
            {subheadline || "Education-first approach with lifetime customer support. No high-pressure sales tactics. Get a free one-on-one web conference to learn about protecting your retirement."}
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-slate-600">
              <Shield className="h-5 w-5 text-green-500" />
              A+ BBB Rating - Zero Complaints
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <Star className="h-5 w-5 text-[#B22234]" />
              4.9/5 Average Rating
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <Phone className="h-5 w-5 text-blue-500" />
              Dedicated Agent for Life
            </li>
          </ul>
          <PremiumButton size="lg">
            Get Free Consultation
            <ArrowRight className="h-5 w-5" />
          </PremiumButton>
        </div>
        <div className="hidden md:block">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.1),0_0_40px_rgba(178,34,52,0.05)]">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-[#000080]">4.9</div>
              <div className="flex justify-center text-[#B22234] my-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <div className="text-sm text-slate-500">{augusta.reviewCount.toLocaleString()} verified reviews</div>
            </div>
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Minimum Investment</span>
                <span className="font-semibold text-[#000080] whitespace-nowrap">${augusta.minInvestment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Setup Fee</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Annual Fee</span>
                <span className="font-semibold text-[#000080] whitespace-nowrap">${augusta.fees.annual}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
