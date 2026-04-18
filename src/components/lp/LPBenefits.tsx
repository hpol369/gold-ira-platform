"use client";

import {
  Gem,
  Factory,
  TrendingDown,
  DollarSign,
  Shield,
  TrendingUp,
  Clock,
  Award,
  Coins,
  BarChart3,
  Landmark,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Icon mapping for string-based icon selection
const iconMap = {
  gem: Gem,
  factory: Factory,
  "trending-down": TrendingDown,
  "dollar-sign": DollarSign,
  shield: Shield,
  "trending-up": TrendingUp,
  clock: Clock,
  award: Award,
  coins: Coins,
  "bar-chart": BarChart3,
  landmark: Landmark,
  users: Users,
} as const;

export type IconName = keyof typeof iconMap;

export interface Benefit {
  icon: IconName;
  title: string;
  description: string;
}

interface LPBenefitsProps {
  headline: string;
  benefits: Benefit[];
  className?: string;
}

export function LPBenefits({ headline, benefits, className }: LPBenefitsProps) {
  return (
    <section className={cn("bg-slate-900 py-16 md:py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
          {headline}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div
                key={index}
                className={cn(
                  "relative p-6 rounded-xl",
                  "bg-white/5 backdrop-blur-sm border border-white/10",
                  "hover:border-amber-400/30 hover:bg-[#1E2134]/[0.07]",
                  "transition-all duration-300"
                )}
              >
                <div className="h-12 w-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#3F4460] text-base md:text-lg leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
