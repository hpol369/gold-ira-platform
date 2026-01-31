"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTrackedAugustaLink, type AugustaContext } from "@/config/affiliates";

interface LPFinalCTAProps {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  trustPoints?: string[];
  linkContext?: AugustaContext;
  trackSource: string;
  className?: string;
  /** Internal link - if provided, links internally instead of to affiliate */
  internalLink?: string;
}

export function LPFinalCTA({
  headline,
  subheadline,
  ctaText = "Get Your Free Consultation",
  trustPoints = ["No obligation", "100% free", "Takes 15 minutes"],
  linkContext = "silver",
  trackSource,
  className,
  internalLink,
}: LPFinalCTAProps) {
  // LP pages are for paid campaigns, so we mark traffic as "paid"
  const affiliateLink = getTrackedAugustaLink(linkContext, trackSource, "paid");
  const isInternal = !!internalLink;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 py-16 md:py-24",
        className
      )}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {headline}
        </h2>
        {subheadline && (
          <p className="text-lg text-slate-300 mb-6">{subheadline}</p>
        )}

        {/* Guarantees Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-white">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span>100% Satisfaction Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span>7-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span>Highest Buyback Guarantee</span>
          </div>
        </div>

        {isInternal ? (
          <Link
            href={internalLink!}
            className={cn(
              "inline-flex items-center justify-center gap-2",
              "w-full md:w-auto",
              "px-6 py-3 text-lg md:px-10 md:py-5 md:text-xl font-bold",
              "bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600",
              "text-slate-900 rounded-xl",
              "shadow-[0_0_80px_-5px_rgba(212,175,55,0.6)]",
              "hover:shadow-[0_0_100px_-5px_rgba(212,175,55,0.8)]",
              "hover:scale-105 transition-all duration-300",
              "relative overflow-hidden group"
            )}
          >
            <span className="relative z-10 flex items-center gap-2">
              {ctaText}
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          </Link>
        ) : (
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center gap-2",
              "w-full md:w-auto",
              "px-6 py-3 text-lg md:px-10 md:py-5 md:text-xl font-bold",
              "bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600",
              "text-slate-900 rounded-xl",
              "shadow-[0_0_80px_-5px_rgba(212,175,55,0.6)]",
              "hover:shadow-[0_0_100px_-5px_rgba(212,175,55,0.8)]",
              "hover:scale-105 transition-all duration-300",
              "relative overflow-hidden group"
            )}
          >
            <span className="relative z-10 flex items-center gap-2">
              {ctaText}
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          </a>
        )}

        {trustPoints.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
            {trustPoints.map((point, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-slate-600">|</span>}
                {point}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
