"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTrackedAugustaLink, type AugustaContext } from "@/config/affiliates";

interface LPHeroProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  linkContext?: AugustaContext;
  trackSource: string;
  className?: string;
}

export function LPHero({
  headline,
  subheadline,
  ctaText = "Get Your Free Consultation",
  linkContext = "silver",
  trackSource,
  className,
}: LPHeroProps) {
  const ctaLink = getTrackedAugustaLink(linkContext, trackSource);

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-slate-900 py-16 md:py-24",
        className
      )}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          {subheadline}
        </p>
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center justify-center gap-2",
            "px-8 py-4 text-lg font-bold",
            "bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600",
            "text-slate-900 rounded-xl",
            "shadow-[0_0_60px_-5px_rgba(212,175,55,0.5)]",
            "hover:shadow-[0_0_80px_-5px_rgba(212,175,55,0.7)]",
            "hover:scale-105 transition-all duration-300",
            "relative overflow-hidden group"
          )}
        >
          <span className="relative z-10 flex items-center gap-2">
            {ctaText}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </span>
          {/* Shine effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
        </a>
      </div>
    </section>
  );
}
