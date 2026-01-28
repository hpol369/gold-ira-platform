// src/components/widgets/MobileStickyBar.tsx
// Mobile-only sticky bottom CTA bar with Patriot Light Theme
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
  text = "Find Your Perfect Account",
  buttonText = "Free Quiz",
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
          {/* Shadow fade effect at top */}
          <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />

          {/* Patriot Light bar */}
          <div
            className="bg-white border-t border-slate-200 shadow-lg"
            style={{
              paddingBottom: "env(safe-area-inset-bottom, 0px)"
            }}
          >
            <div className="px-4 py-3">
              <div className="flex items-center gap-3">
                {/* Icon with red accent */}
                <div className="flex-shrink-0 p-2 rounded-lg bg-[#B22234]/10 border border-[#B22234]/20">
                  <ClipboardCheck className="h-5 w-5 text-[#B22234]" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 font-semibold text-sm truncate">
                    {text}
                  </p>
                  <p className="text-slate-500 text-xs">
                    2-minute assessment
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href={href}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-[#B22234] text-white font-bold text-sm rounded-lg hover:bg-[#8b1c2a] transition-all whitespace-nowrap shadow-lg"
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
