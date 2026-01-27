"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface LPFeaturesProps {
  headline: string;
  features: string[];
  className?: string;
}

export function LPFeatures({ headline, features, className }: LPFeaturesProps) {
  return (
    <section className={cn("bg-slate-900 py-16 md:py-20", className)}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          {headline}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start gap-3 p-4 rounded-lg",
                "bg-white/5 border border-white/10",
                "hover:border-green-400/30 transition-colors"
              )}
            >
              <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <span className="text-slate-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
