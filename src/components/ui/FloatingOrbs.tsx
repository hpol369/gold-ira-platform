"use client";

import { cn } from "@/lib/utils";

interface Orb {
  size: string;
  position: string;
  color: string;
  blur: string;
  delay?: string;
  duration?: string;
}

interface FloatingOrbsProps {
  variant?: 'hero' | 'section' | 'minimal' | 'custom';
  customOrbs?: Orb[];
  className?: string;
}

// Preset configurations
const presets: Record<string, Orb[]> = {
  hero: [
    { size: 'w-40 h-40', position: 'top-10 left-[5%]', color: 'from-amber-500/20 to-amber-600/5', blur: 'blur-3xl', duration: '8s' },
    { size: 'w-32 h-32', position: 'top-32 right-[10%]', color: 'from-amber-400/15 to-transparent', blur: 'blur-2xl', duration: '10s', delay: '2s' },
    { size: 'w-24 h-24', position: 'bottom-20 left-[15%]', color: 'from-emerald-500/10 to-transparent', blur: 'blur-2xl', duration: '12s', delay: '4s' },
    { size: 'w-20 h-20', position: 'bottom-40 right-[20%]', color: 'from-amber-300/10 to-transparent', blur: 'blur-xl', duration: '9s', delay: '1s' },
  ],
  section: [
    { size: 'w-32 h-32', position: 'top-0 right-[10%]', color: 'from-amber-500/10 to-transparent', blur: 'blur-2xl', duration: '10s' },
    { size: 'w-24 h-24', position: 'bottom-10 left-[5%]', color: 'from-amber-400/10 to-transparent', blur: 'blur-xl', duration: '12s', delay: '3s' },
  ],
  minimal: [
    { size: 'w-24 h-24', position: 'top-10 right-[15%]', color: 'from-amber-500/10 to-transparent', blur: 'blur-2xl', duration: '10s' },
  ],
};

export function FloatingOrbs({ variant = 'section', customOrbs, className }: FloatingOrbsProps) {
  const orbs = customOrbs || presets[variant] || presets.section;

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={cn(
            'absolute rounded-full bg-gradient-to-br animate-pulse',
            orb.size,
            orb.position,
            orb.color,
            orb.blur
          )}
          style={{
            animationDuration: orb.duration || '8s',
            animationDelay: orb.delay || '0s',
          }}
        />
      ))}
    </div>
  );
}

// Single orb for simpler usage
export function GoldOrb({
  size = 'w-24 h-24',
  className
}: {
  size?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/5 blur-2xl animate-pulse',
        size,
        className
      )}
      style={{ animationDuration: '8s' }}
    />
  );
}
