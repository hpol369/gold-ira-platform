// src/components/cta/AugustaCTA.tsx
// Augusta Precious Metals CTA component for use across the site

import { ArrowRight, Award, Phone, Shield, Star } from "lucide-react";
import { getFeaturedCompany } from "@/data/companies";
import { getAugustaLink, getTrackedAugustaLink, type AugustaContext } from "@/config/affiliates";
import { cn } from "@/lib/utils";

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

  // Sidebar variant - compact for sidebars
  if (variant === "sidebar") {
    return (
      <div className={cn(
        "bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 border border-white/10",
        className
      )}>
        <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs mb-3">
          <Award className="h-3.5 w-3.5" />
          #1 RATED COMPANY
        </div>
        <h3 className="font-bold text-white mb-2 text-lg">
          {headline || "Augusta Precious Metals"}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-amber-400">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="text-sm text-slate-400">4.9/5</span>
        </div>
        <ul className="space-y-2 mb-4 text-sm">
          <li className="flex items-center gap-2 text-slate-300">
            <Shield className="h-4 w-4 text-green-400" />
            A+ BBB Rating
          </li>
          <li className="flex items-center gap-2 text-slate-300">
            <Shield className="h-4 w-4 text-green-400" />
            Lifetime Support
          </li>
          <li className="flex items-center gap-2 text-slate-300">
            <Shield className="h-4 w-4 text-green-400" />
            No Pushy Sales
          </li>
        </ul>
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all text-sm"
        >
          Free Consultation
        </a>
      </div>
    );
  }

  // Inline variant - for use within content
  if (variant === "inline") {
    return (
      <div className={cn(
        "bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 my-6",
        className
      )}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs mb-1">
              <Award className="h-3.5 w-3.5" />
              RECOMMENDED
            </div>
            <p className="text-slate-300 text-sm">
              {subheadline || "Augusta Precious Metals is our #1 rated Gold IRA company for their education-first approach and transparent pricing."}
            </p>
          </div>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all text-sm whitespace-nowrap"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  // Banner variant - full width banner
  if (variant === "banner") {
    return (
      <div className={cn(
        "bg-gradient-to-r from-slate-900 to-slate-800 py-4 px-6",
        className
      )}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
              <Award className="h-4 w-4" />
              #1 RATED
            </div>
            <span className="text-white">
              {headline || "Get Your Free Gold IRA Guide from Augusta Precious Metals"}
            </span>
          </div>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all text-sm"
          >
            Get Free Guide
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  // Footer variant - for end of articles
  if (variant === "footer") {
    return (
      <div className={cn(
        "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 border border-white/10 text-center",
        className
      )}>
        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 font-semibold text-sm px-4 py-2 rounded-full mb-4 border border-amber-500/30">
          <Award className="h-4 w-4" />
          OUR #1 RECOMMENDATION
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {headline || "Ready to Protect Your Retirement?"}
        </h3>
        <p className="text-slate-400 max-w-2xl mx-auto mb-6">
          {subheadline || "Augusta Precious Metals has been rated #1 in our comprehensive review. Their education-first approach means you'll never feel pressured. Get a free consultation today."}
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-slate-300">
            <Shield className="h-5 w-5 text-green-400" />
            A+ BBB Rating
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Star className="h-5 w-5 text-amber-400" />
            4.9/5 Rating
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Phone className="h-5 w-5 text-blue-400" />
            Lifetime Support
          </div>
        </div>
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold text-lg rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/25"
        >
          Get Your Free Consultation
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    );
  }

  // Default variant - full featured
  return (
    <div className={cn(
      "bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 border border-white/10",
      className
    )}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            <Award className="h-4 w-4" />
            #1 RATED GOLD IRA COMPANY
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {headline || "Augusta Precious Metals"}
          </h3>
          <p className="text-slate-400 mb-6">
            {subheadline || "Education-first approach with lifetime customer support. No high-pressure sales tactics. Get a free one-on-one web conference to learn about protecting your retirement."}
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-slate-300">
              <Shield className="h-5 w-5 text-green-400" />
              A+ BBB Rating • Zero Complaints
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <Star className="h-5 w-5 text-amber-400" />
              4.9/5 Average Rating
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <Phone className="h-5 w-5 text-blue-400" />
              Dedicated Agent for Life
            </li>
          </ul>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold text-lg rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/25"
          >
            Get Free Consultation
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
        <div className="hidden md:block">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-white">4.9</div>
              <div className="flex justify-center text-amber-400 my-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <div className="text-sm text-slate-400">{augusta.reviewCount.toLocaleString()} verified reviews</div>
            </div>
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Minimum Investment</span>
                <span className="font-semibold text-white whitespace-nowrap">${augusta.minInvestment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Setup Fee</span>
                <span className="font-semibold text-green-400">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Annual Fee</span>
                <span className="font-semibold text-white whitespace-nowrap">${augusta.fees.annual}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
