"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  variant?: 'default' | 'glow' | 'subtle';
  hover?: boolean;
  className?: string;
  as?: 'div' | 'article' | 'section';
}

export function PremiumCard({
  children,
  variant = 'default',
  hover = true,
  className,
  as: Component = 'div',
}: PremiumCardProps) {
  // Base styles - glass morphism
  const baseStyles = `
    relative overflow-hidden rounded-2xl
    bg-gradient-to-br from-white/[0.05] to-white/[0.02]
    backdrop-blur-xl
    border border-white/10
  `;

  // Variant styles
  const variantStyles = {
    default: 'shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]',
    glow: 'shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_40px_-10px_rgba(212,175,55,0.3)]',
    subtle: 'shadow-lg border-white/5',
  };

  // Hover styles
  const hoverStyles = hover
    ? 'transition-all duration-400 hover:translate-y-[-4px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(212,175,55,0.1)] hover:border-amber-500/30'
    : '';

  return (
    <Component
      className={cn(
        baseStyles,
        variantStyles[variant],
        hoverStyles,
        className
      )}
    >
      {children}
    </Component>
  );
}

// Animated version with Framer Motion
export function PremiumCardAnimated({
  children,
  variant = 'default',
  className,
  delay = 0,
}: PremiumCardProps & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      className={cn(
        'relative overflow-hidden rounded-2xl',
        'bg-gradient-to-br from-white/[0.05] to-white/[0.02]',
        'backdrop-blur-xl border border-white/10',
        variant === 'glow' && 'shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)]',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
