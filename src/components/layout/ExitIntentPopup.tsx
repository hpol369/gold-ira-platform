// Exit Intent Popup — captures email for nurture sequence
// Triggers when mouse leaves viewport top (desktop) or after 45s idle (mobile)
// Shows once per session, stores email in Supabase via /api/newsletter

"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Shield, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackExitIntent, trackEmailSignup } from "@/lib/analytics";

const SESSION_KEY = "exitIntentShown";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleClose = useCallback(() => {
    trackExitIntent('closed', window.location.pathname);
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    // Desktop: mouse leaves viewport top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
        trackExitIntent('shown', window.location.pathname);
        sessionStorage.setItem(SESSION_KEY, "true");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    // Mobile: show after 45s of browsing (no mouse events on mobile)
    const mobileTimer = setTimeout(() => {
      if (!sessionStorage.getItem(SESSION_KEY) && window.innerWidth < 768) {
        setIsVisible(true);
        trackExitIntent('shown', window.location.pathname);
        sessionStorage.setItem(SESSION_KEY, "true");
      }
    }, 45000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, []);

  // ESC to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "exit-intent" }),
      });
      const data = await res.json();
      if (data.success) {
        trackExitIntent('converted', window.location.pathname);
        trackEmailSignup(window.location.pathname, 'exit_intent');
        setStatus("success");
        setTimeout(() => setIsVisible(false), 2500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
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
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-2 text-slate-400 hover:text-slate-600 transition-colors z-20 rounded-full hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Red accent bar */}
            <div className="h-1 bg-gradient-to-r from-[#B22234] via-[#B22234] to-[#8b1c2a]" />

            <div className="p-6 md:p-8">
              {status === "success" ? (
                <div className="text-center py-4">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#000080] mb-2">You&apos;re In!</h3>
                  <p className="text-slate-500 text-sm">Check your inbox for the precious metals guide.</p>
                </div>
              ) : (
                <>
                  {/* Icon + Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#B22234]/10 border border-[#B22234]/20">
                      <Shield className="w-6 h-6 text-[#B22234]" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl font-bold text-[#000080]">
                        Wait — Don&apos;t Leave Empty-Handed
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                    Get our free <span className="font-semibold text-slate-700">2026 Precious Metals Investor&apos;s Guide</span> — the same research that helped 10,000+ Americans protect their retirement.
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2.5 mb-6">
                    <li className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      How to roll over your 401(k) tax-free
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      Top 5 precious metals IRA companies ranked
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      IRS rules you need to know before investing
                    </li>
                  </ul>

                  {/* Email form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B22234]/30 focus:border-[#B22234]/40 placeholder:text-slate-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoFocus
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white bg-[#B22234] hover:bg-[#8b1c2a] transition-all shadow-lg disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          Send Me the Free Guide
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>

                  {status === "error" && (
                    <p className="mt-3 text-xs text-red-500 text-center">Something went wrong. Please try again.</p>
                  )}

                  <p className="mt-4 text-xs text-center text-slate-400">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
