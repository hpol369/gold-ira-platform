// src/components/widgets/InContentCTA.tsx
// In-content CTA widget that appears mid-article with subtle glass-morphism design

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type InContentCTAVariant = "default" | "minimal" | "emphasized";

interface InContentCTAProps {
  variant?: InContentCTAVariant;
  className?: string;
}

const variantStyles: Record<InContentCTAVariant, {
  container: string;
  text: string;
  button: string;
}> = {
  default: {
    container: "bg-white/5 backdrop-blur-sm border border-white/10",
    text: "text-slate-300",
    button: "bg-amber-500/90 hover:bg-amber-500 text-slate-900",
  },
  minimal: {
    container: "bg-white/[0.03] backdrop-blur-sm border border-white/5",
    text: "text-slate-400",
    button: "bg-amber-500/80 hover:bg-amber-500 text-slate-900",
  },
  emphasized: {
    container: "bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent backdrop-blur-sm border border-amber-500/20",
    text: "text-slate-300",
    button: "bg-amber-500 hover:bg-amber-600 text-slate-900",
  },
};

export function InContentCTA({ variant = "default", className }: InContentCTAProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "rounded-xl p-5 my-8 transition-all duration-300",
        styles.container,
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className={cn("text-sm leading-relaxed", styles.text)}>
          <p className="font-semibold text-white">Exploring your retirement options?</p>
          <p>Our 60-second quiz matches you with the right account type</p>
        </div>
        <Link
          href="/audit"
          className={cn(
            "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap flex-shrink-0",
            styles.button
          )}
        >
          Get Matched
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
