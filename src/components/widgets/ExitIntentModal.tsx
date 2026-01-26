"use client";

import { useState, useEffect, useCallback } from "react";
import { X, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getTrackedLink, AFFILIATE_LINKS } from "@/config/affiliates";

const SESSION_KEY = "exitIntentModalShown";

export function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    // Check if already shown this session
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (alreadyShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves through the top of viewport
      if (e.clientY <= 0) {
        setIsVisible(true);
        sessionStorage.setItem(SESSION_KEY, "true");
        // Remove listener after triggering once
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleClose]);

  // Close when clicking backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/10"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors z-20 rounded-full hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 text-center">
              {/* Icon */}
              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                <FileText className="w-8 h-8 text-amber-400" />
              </div>

              {/* Headline */}
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                Wait! Before You Go...
              </h2>

              {/* Subheadline */}
              <p className="text-lg text-slate-300 mb-6">
                Get our free <span className="text-amber-400 font-semibold">Gold IRA Investor's Guide</span>
              </p>

              {/* Benefits */}
              <ul className="text-left space-y-2 mb-8 max-w-xs mx-auto">
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  Learn how to protect your retirement from inflation
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  Discover the IRS-approved gold you can hold
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  Compare top Gold IRA companies side-by-side
                </li>
              </ul>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button
                  variant="gold"
                  size="lg"
                  asChild
                  className="w-full shadow-lg"
                >
                  <a
                    href={getTrackedLink(AFFILIATE_LINKS.augusta, "exit-intent-modal", "augusta")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Free Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  variant="ghost"
                  size="default"
                  asChild
                  className="w-full text-slate-400 hover:text-white"
                >
                  <Link href="/audit">
                    Or take our free portfolio audit
                  </Link>
                </Button>
              </div>

              {/* Dismissal text */}
              <p className="mt-6 text-xs text-slate-500">
                No thanks, I'll figure it out myself
                <button
                  onClick={handleClose}
                  className="ml-1 underline hover:text-slate-400 transition-colors"
                >
                  Close
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
