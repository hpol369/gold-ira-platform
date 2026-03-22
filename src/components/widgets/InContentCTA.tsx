// src/components/widgets/InContentCTA.tsx
// In-content CTA widget — links to /get-started qualification funnel

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type InContentCTAVariant = "default" | "minimal" | "emphasized";

interface InContentCTAProps {
  variant?: InContentCTAVariant;
  /** Source page for tracking (e.g. "learn-gold-ira-fees") */
  trackSource?: string;
  /** Custom headline (overrides default) */
  headline?: string;
  /** Custom body text (overrides default) */
  body?: string;
  className?: string;
}

const variantStyles: Record<InContentCTAVariant, {
  container: string;
  text: string;
  button: string;
}> = {
  default: {
    container: "bg-slate-50 border border-slate-200",
    text: "text-slate-600",
    button: "bg-[#B22234] hover:bg-[#8b1c2a] text-white",
  },
  minimal: {
    container: "bg-white border border-slate-200",
    text: "text-slate-500",
    button: "bg-[#B22234]/90 hover:bg-[#B22234] text-white",
  },
  emphasized: {
    container: "bg-gradient-to-r from-[#B22234]/10 via-[#B22234]/5 to-transparent border border-[#B22234]/20",
    text: "text-slate-600",
    button: "bg-[#B22234] hover:bg-[#8b1c2a] text-white",
  },
};

export function InContentCTA({ variant = "default", trackSource, headline, body, className }: InContentCTAProps) {
  const styles = variantStyles[variant];

  const href = trackSource
    ? `/get-started?ref=${encodeURIComponent(trackSource)}`
    : "/get-started";

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
          <p className="font-semibold text-[#000080]">{headline || "Thinking about protecting your retirement?"}</p>
          <p>{body || "Get matched with the right Gold IRA company for your situation — free, no obligation."}</p>
        </div>
        <Link
          href={href}
          className={cn(
            "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap flex-shrink-0",
            styles.button
          )}
        >
          Get Free Kit
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
