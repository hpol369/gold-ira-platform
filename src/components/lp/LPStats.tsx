"use client";

import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

interface LPStatsProps {
  headline: string;
  stats: Stat[];
  className?: string;
}

export function LPStats({ headline, stats, className }: LPStatsProps) {
  return (
    <section
      className={cn(
        "bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 py-12 md:py-16",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
          {headline}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-400 mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
