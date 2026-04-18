import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border font-semibold leading-none whitespace-nowrap",
  {
    variants: {
      variant: {
        gold: "border-[rgba(197,149,46,0.35)] bg-[rgba(197,149,46,0.10)] text-[#D4A94E]",
        neutral: "border-[#2A2D42] bg-[rgba(255,255,255,0.03)] text-[#D0CCC4]",
        critical: "border-[rgba(220,38,38,0.35)] bg-[rgba(220,38,38,0.10)] text-[#FCA5A5]",
        warning: "border-[rgba(183,121,31,0.35)] bg-[rgba(183,121,31,0.10)] text-[#E8BE74]",
        info: "border-[rgba(59,130,246,0.35)] bg-[rgba(59,130,246,0.10)] text-[#93C5FD]",
        success: "border-[rgba(46,139,87,0.35)] bg-[rgba(46,139,87,0.10)] text-[#86EFAC]",
        live: "border-[rgba(197,149,46,0.45)] bg-[rgba(22,24,40,0.7)] text-[#D4A94E] backdrop-blur-sm",
      },
      size: {
        sm: "text-[10px] px-2.5 py-1 tracking-[0.18em] uppercase",
        md: "text-[11px] px-3 py-1.5 tracking-[0.22em] uppercase",
        lg: "text-[13px] px-4 py-2 tracking-[0.20em] uppercase",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  pulse?: boolean;
}

export function Badge({ className, variant, size, pulse, children, ...props }: BadgeProps) {
  const dotColor =
    variant === "critical"
      ? "bg-[#DC2626]"
      : variant === "warning"
      ? "bg-[#B7791F]"
      : variant === "info"
      ? "bg-[#3B82F6]"
      : variant === "success"
      ? "bg-[#2E8B57]"
      : "bg-[#C5952E]";

  return (
    <span className={cn(badgeVariants({ variant, size, className }))} {...props}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={cn("absolute inline-flex h-full w-full rounded-full opacity-70 animate-ping", dotColor)} />
          <span className={cn("relative inline-flex h-2 w-2 rounded-full", dotColor)} />
        </span>
      )}
      {children}
    </span>
  );
}

export { badgeVariants };
