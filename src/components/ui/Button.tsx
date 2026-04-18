"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-medium tracking-[-0.005em] transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5952E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0D18]",
    "disabled:pointer-events-none disabled:opacity-50",
    "select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        // v2 — AngelGuard-pattern
        primary: [
          "rounded-lg bg-[#C5952E] text-[#0C0D18]",
          "shadow-[0_10px_30px_rgba(197,149,46,0.20)]",
          "hover:bg-[#D4A94E] hover:shadow-[0_14px_40px_rgba(197,149,46,0.28)]",
          "active:bg-[#A67D24]",
          "font-semibold",
        ].join(" "),
        secondary: [
          "rounded-lg bg-[#121423] text-[#F6F4EF] border border-white/10",
          "hover:bg-[#1E2134] hover:border-[rgba(197,149,46,0.5)]",
          "active:bg-[#2A2D42]",
        ].join(" "),
        outline: [
          "rounded-lg border-2 border-[#C5952E] text-[#D4A94E] bg-transparent",
          "hover:bg-[rgba(197,149,46,0.1)] hover:text-[#F6F4EF]",
          "active:bg-[rgba(197,149,46,0.18)]",
        ].join(" "),
        ghost: [
          "rounded-lg text-[#D0CCC4] bg-transparent",
          "hover:bg-[#1E2134]/5 hover:text-[#F6F4EF]",
        ].join(" "),
        danger: [
          "rounded-lg bg-[rgba(220,38,38,0.12)] text-[#FCA5A5] border border-[rgba(220,38,38,0.3)]",
          "hover:bg-[rgba(220,38,38,0.22)] hover:border-[rgba(220,38,38,0.55)]",
        ].join(" "),
        link: "text-[#D4A94E] underline-offset-4 hover:underline hover:text-[#F6F4EF] px-0",

        // --- Legacy variants (re-skinned to dark theme) so old pages don't break ---
        default: "rounded-lg bg-[#C5952E] text-[#0C0D18] font-semibold hover:bg-[#D4A94E]",
        destructive: "rounded-lg bg-[#DC2626] text-white hover:bg-[#B91C1C]",
        gold: [
          "rounded-lg bg-gradient-to-r from-[#D4A94E] to-[#C5952E] text-[#0C0D18]",
          "shadow-[0_10px_30px_rgba(197,149,46,0.22)]",
          "hover:from-[#E6BF68] hover:to-[#D4A94E] hover:shadow-[0_14px_40px_rgba(197,149,46,0.3)]",
          "hover:-translate-y-0.5 font-bold transition-all duration-200",
        ].join(" "),
        navy: [
          "rounded-lg bg-[#1E2134] text-[#F6F4EF] border border-white/10",
          "shadow-md hover:bg-[#2A2D42] hover:shadow-lg hover:-translate-y-0.5",
          "font-semibold transition-all duration-200",
        ].join(" "),
        "outline-gold": [
          "rounded-lg border-2 border-[#C5952E] text-[#D4A94E] bg-transparent",
          "hover:bg-[rgba(197,149,46,0.1)] hover:text-[#F6F4EF] font-semibold",
          "transition-all duration-200",
        ].join(" "),
      },
      size: {
        default: "h-12 px-6 text-base",
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-[17px] min-h-[56px]",
        xl: "h-16 px-10 text-lg min-h-16",
        icon: "h-12 w-12",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  motionDisabled?: boolean;
}

const MotionButton = motion.button;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, motionDisabled, children, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, fullWidth, className }))}
          ref={ref as unknown as React.Ref<HTMLElement>}
          {...(props as React.HTMLAttributes<HTMLElement>)}
        >
          {children}
        </Slot>
      );
    }

    if (motionDisabled) {
      return (
        <button
          ref={ref}
          className={cn(buttonVariants({ variant, size, fullWidth, className }))}
          {...props}
        >
          {children}
        </button>
      );
    }

    // Motion-enabled button — separate element because Slot can't merge framer motion props
    return (
      <MotionButton
        ref={ref}
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        {...(props as unknown as React.ComponentProps<typeof MotionButton>)}
      >
        {children}
      </MotionButton>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
