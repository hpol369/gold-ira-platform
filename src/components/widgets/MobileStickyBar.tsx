// src/components/widgets/MobileStickyBar.tsx
// Mobile-only sticky bottom CTA bar with glass-morphism style
// Appears after scrolling 300px, links to /audit

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, ArrowRight } from "lucide-react";

interface MobileStickyBarProps {
  /** Text to display next to the icon */
  text?: string;
  /** Button label */
  buttonText?: string;
  /** Link destination */
  href?: string;
  /** Scroll threshold to show the bar (default: 300px) */
  scrollThreshold?: number;
}

export function MobileStickyBar({
  text = "Free Retirement Audit",
  buttonText = "Start Now",
  href = "/audit",
  scrollThreshold = 300,
}: MobileStickyBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > scrollThreshold;
      setIsVisible(scrolled);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1
          }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          {/* Gradient fade effect at top */}
          <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none" />

          {/* Glass-morphism bar */}
          <div
            className="bg-slate-900/80 backdrop-blur-xl border-t border-amber-500/20"
            style={{
              paddingBottom: "env(safe-area-inset-bottom, 0px)"
            }}
          >
            <div className="px-4 py-3">
              <div className="flex items-center gap-3">
                {/* Icon with amber accent */}
                <div className="flex-shrink-0 p-2 rounded-lg bg-amber-500/20 border border-amber-500/30">
                  <ClipboardCheck className="h-5 w-5 text-amber-400" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">
                    {text}
                  </p>
                  <p className="text-slate-400 text-xs">
                    2-minute assessment
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href={href}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold text-sm rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all whitespace-nowrap shadow-lg shadow-amber-500/25"
                >
                  {buttonText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
