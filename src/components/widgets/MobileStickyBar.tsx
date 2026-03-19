// src/components/widgets/MobileStickyBar.tsx
// Mobile-only sticky bottom CTA bar
// Appears after scrolling past hero, links to Augusta affiliate LP

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getTrackedLink, AFFILIATE_LINKS } from "@/config/affiliates";

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const augustaLink = getTrackedLink(AFFILIATE_LINKS.augusta, "mobile-sticky", "augusta");

  return (
    <AnimatePresence>
      {visible && (
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
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <a
            href={augustaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#B22234] text-white font-bold py-3.5 px-6 w-full text-center shadow-lg"
            style={{
              paddingBottom: "calc(0.875rem + env(safe-area-inset-bottom, 0px))"
            }}
          >
            Get Your Free Gold IRA Kit
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
