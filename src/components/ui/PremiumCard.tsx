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
  // Base glass-morphism optimized for dark navy base
  const baseStyles = `
    relative overflow-hidden rounded-2xl
    bg-[rgba(22,24,40,0.72)]
    backdrop-blur-xl
    border border-white/8
    text-[#F6F4EF]
  `;

  const variantStyles = {
    default:
      'shadow-[0_8px_32px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.04)]',
    glow:
      'shadow-[0_8px_32px_rgba(0,0,0,0.34),0_0_40px_-10px_rgba(197,149,46,0.34)] border-[rgba(197,149,46,0.28)]',
    subtle:
      'shadow-[0_6px_20px_rgba(0,0,0,0.22)] border-white/5',
  };

  const hoverStyles = hover
    ? 'transition-all duration-400 hover:translate-y-[-4px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.44),0_0_40px_rgba(197,149,46,0.12)] hover:border-[rgba(197,149,46,0.38)]'
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
      transition={{ duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{
        y: -6,
        transition: { duration: 0.3 }
      }}
      className={cn(
        'relative overflow-hidden rounded-2xl',
        'bg-[rgba(22,24,40,0.72)]',
        'backdrop-blur-xl border border-white/8',
        'text-[#F6F4EF]',
        'shadow-[0_8px_32px_rgba(0,0,0,0.34)]',
        variant === 'glow' && 'shadow-[0_0_40px_-10px_rgba(197,149,46,0.34)] border-[rgba(197,149,46,0.28)]',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
