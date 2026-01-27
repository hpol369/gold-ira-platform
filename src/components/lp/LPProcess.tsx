"use client";

import {
  ArrowRight,
  Phone,
  RefreshCcw,
  Coins,
  FileText,
  CheckCircle,
  MessageCircle,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getTrackedAugustaLink, type AugustaContext } from "@/config/affiliates";

// Icon mapping for string-based icon selection
const iconMap = {
  phone: Phone,
  "refresh-ccw": RefreshCcw,
  coins: Coins,
  "file-text": FileText,
  "check-circle": CheckCircle,
  "message-circle": MessageCircle,
  shield: Shield,
  clock: Clock,
  users: Users,
} as const;

export type ProcessIconName = keyof typeof iconMap;

export interface Step {
  icon: ProcessIconName;
  title: string;
  description: string;
}

interface LPProcessProps {
  headline: string;
  steps: Step[];
  ctaText?: string;
  linkContext?: AugustaContext;
  trackSource: string;
  className?: string;
}

export function LPProcess({
  headline,
  steps,
  ctaText = "Start Free Consultation",
  linkContext = "silver",
  trackSource,
  className,
}: LPProcessProps) {
  const ctaLink = getTrackedAugustaLink(linkContext, trackSource);

  return (
    <section
      className={cn(
        "bg-gradient-to-b from-slate-900 to-slate-800 py-16 md:py-20",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
          {headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={index} className="relative">
                {/* Connector line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] right-[-40%] h-0.5 bg-gradient-to-r from-amber-400/50 to-amber-400/10" />
                )}
                <div className="flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                      <Icon className="h-10 w-10 text-amber-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
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
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          </a>
        </div>
      </div>
    </section>
  );
}
