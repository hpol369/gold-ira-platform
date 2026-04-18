"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  [
    "relative overflow-hidden transition-all duration-300",
    "text-[#F6F4EF]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "rounded-2xl bg-[#161828] border border-[#2A2D42]",
          "shadow-[0_8px_24px_rgba(0,0,0,0.26)]",
        ].join(" "),
        featured: [
          "rounded-[28px] border border-[rgba(197,149,46,0.42)]",
          "bg-[linear-gradient(180deg,rgba(197,149,46,0.14),rgba(255,255,255,0.01)_38%,rgb(22,24,40))]",
          "shadow-[0_16px_48px_rgba(197,149,46,0.14)]",
        ].join(" "),
        stat: [
          "rounded-2xl bg-[#121423] border border-[#2A2D42]",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_8px_24px_rgba(0,0,0,0.22)]",
        ].join(" "),
        glass: [
          "rounded-2xl border border-white/10",
          "bg-[rgba(22,24,40,0.72)] backdrop-blur-xl",
          "shadow-[0_18px_50px_rgba(0,0,0,0.32)]",
        ].join(" "),
        comparison: [
          "rounded-xl bg-[#121423] border border-[#2A2D42]",
          "shadow-[0_6px_18px_rgba(0,0,0,0.22)]",
        ].join(" "),
        hero: [
          "rounded-[28px] border border-white/10",
          "bg-[rgba(22,24,40,0.75)] backdrop-blur-xl",
          "shadow-[0_24px_70px_rgba(0,0,0,0.38)]",
        ].join(" "),
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      severity: {
        none: "",
        info: "before:absolute before:left-0 before:top-5 before:bottom-5 before:w-1 before:rounded-r-full before:bg-[#3B82F6]",
        success: "before:absolute before:left-0 before:top-5 before:bottom-5 before:w-1 before:rounded-r-full before:bg-[#2E8B57]",
        warning: "before:absolute before:left-0 before:top-5 before:bottom-5 before:w-1 before:rounded-r-full before:bg-[#B7791F]",
        critical: "before:absolute before:left-0 before:top-5 before:bottom-5 before:w-1 before:rounded-r-full before:bg-[#DC2626]",
        gold: "before:absolute before:left-0 before:top-5 before:bottom-5 before:w-1 before:rounded-r-full before:bg-[#C5952E]",
      },
      hoverable: {
        true: "cursor-pointer hover:border-[rgba(197,149,46,0.55)] hover:shadow-[0_16px_46px_rgba(0,0,0,0.34)]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      severity: "none",
      hoverable: false,
    },
  }
);

export interface CardProps
  extends Omit<HTMLMotionProps<"div">, "children">,
    VariantProps<typeof cardVariants> {
  children?: React.ReactNode;
}

export function Card({
  className,
  variant,
  padding,
  severity,
  hoverable,
  children,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className={cn(cardVariants({ variant, padding, severity, hoverable, className }))}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const CardHeader = ({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...p} className={cn("flex flex-col gap-2 mb-4", className)} />
);

export const CardTitle = ({
  as: As = "h3",
  className,
  ...p
}: React.HTMLAttributes<HTMLHeadingElement> & { as?: "h2" | "h3" | "h4" }) => (
  <As
    {...p}
    className={cn(
      "font-serif text-2xl md:text-[1.75rem] leading-tight text-[#F6F4EF] tracking-[-0.02em]",
      className
    )}
  />
);

export const CardDescription = ({ className, ...p }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p {...p} className={cn("text-[15px] md:text-base text-[#D0CCC4] leading-[1.65]", className)} />
);

export const CardContent = ({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...p} className={cn("text-[#F6F4EF]", className)} />
);

export const CardFooter = ({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...p} className={cn("mt-6 flex items-center gap-3", className)} />
);

export { cardVariants };
