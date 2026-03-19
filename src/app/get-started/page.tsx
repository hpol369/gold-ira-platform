"use client";

import { Suspense, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Shield, TrendingDown, AlertTriangle, Clock, Heart, ArrowRight, Lock, CheckCircle, Phone, Loader2 } from "lucide-react";
import { getTrackedLink, AFFILIATE_LINKS } from "@/config/affiliates";
import type { SavingsTier, Concern, FunnelState } from "@/types/funnel";
import { SAVINGS_OPTIONS, CONCERN_OPTIONS, getQualificationResult } from "@/types/funnel";

const CONCERN_ICONS = {
  TrendingDown,
  AlertTriangle,
  Clock,
  Heart,
} as const;

const slideVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export default function GetStartedPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-[#000040] via-[#000060] to-[#000080] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-white animate-spin" />
      </div>
    }>
      <GetStartedContent />
    </Suspense>
  );
}

function GetStartedContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref") || "direct";

  const [state, setState] = useState<FunnelState>({
    step: "savings",
    savingsTier: null,
    concern: null,
    qualificationTier: null,
    firstName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const selectSavings = useCallback((tier: SavingsTier) => {
    setState(prev => ({ ...prev, savingsTier: tier, step: "concern" }));
  }, []);

  const selectConcern = useCallback((concern: Concern) => {
    const result = getQualificationResult(state.savingsTier!);
    setState(prev => ({
      ...prev,
      concern,
      qualificationTier: result.tier,
      step: "result",
    }));
  }, [state.savingsTier]);

  const proceedToContact = useCallback(() => {
    setState(prev => ({ ...prev, step: "contact" }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!state.firstName.trim()) {
      setError("Please enter your first name.");
      return;
    }
    if (!state.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(state.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const result = getQualificationResult(state.savingsTier!);
    if (result.requiresPhone) {
      const digits = state.phone.replace(/\D/g, "");
      if (digits.length !== 10) {
        setError("Please enter a valid 10-digit phone number.");
        return;
      }
    }

    setState(prev => ({ ...prev, step: "submitting" }));

    try {
      const isAugusta = result.tier.startsWith("augusta");
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: state.firstName.trim(),
          email: state.email.trim().toLowerCase(),
          phone: state.phone.replace(/\D/g, ""),
          source: `get-started_${ref}`,
          savingsTier: state.savingsTier,
          concern: state.concern,
          qualificationTier: state.qualificationTier,
          routedTo: result.companyName,
          skipAugusta: !isAugusta,
        }),
      });

      const data = await response.json();
      if (!data.success) {
        setError(data.error || "Something went wrong. Please try again.");
        setState(prev => ({ ...prev, step: "contact" }));
        return;
      }

      // Fire Google Ads conversion for $50k+ leads
      if (isAugusta && typeof window !== "undefined") {
        try {
          const w = window as unknown as { gtag?: (...args: unknown[]) => void };
          w.gtag?.("event", "conversion", {
            send_to: "AW-17807049464/b4n5CImJ3O4bEPiFiKtC",
          });
        } catch { /* gtag not available */ }
      }

      setState(prev => ({ ...prev, step: "success" }));

      // Redirect to partner LP after brief success message
      const affiliateUrl = AFFILIATE_LINKS[result.affiliateKey as keyof typeof AFFILIATE_LINKS];
      if (affiliateUrl) {
        const trackedUrl = getTrackedLink(affiliateUrl, `get-started_${ref}`, result.affiliateKey);
        setTimeout(() => {
          window.location.href = trackedUrl;
        }, 2000);
      }
    } catch {
      setError("Network error. Please try again.");
      setState(prev => ({ ...prev, step: "contact" }));
    }
  }, [state, ref]);

  const result = state.savingsTier ? getQualificationResult(state.savingsTier) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000040] via-[#000060] to-[#000080] flex flex-col">
      {/* Trust header */}
      <header className="w-full py-4 px-6 border-b border-white/10">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="text-white font-serif font-bold text-lg">Rich Dad Retirement</span>
          <div className="flex items-center gap-2 text-white/60 text-xs">
            <Lock className="h-3.5 w-3.5" />
            <span>256-bit SSL Encrypted</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-16">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {/* STEP 1: Savings */}
            {state.step === "savings" && (
              <motion.div
                key="savings"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
                    <Shield className="h-4 w-4 text-amber-400" />
                    <span className="text-amber-300 text-sm font-medium">Free — No Obligation</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-serif font-black text-white mb-4 leading-tight">
                    Get Your Personalized<br />Gold IRA Kit
                  </h1>
                  <p className="text-white/70 text-lg max-w-lg mx-auto">
                    Answer 2 quick questions so we can match you with the best company for your situation.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8">
                  <p className="text-white/80 text-sm font-medium mb-1">Question 1 of 2</p>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                    How much do you have in retirement savings?
                  </h2>
                  <p className="text-white/50 text-sm mb-6">IRA, 401(k), TSP, pension — all combined</p>

                  <div className="grid grid-cols-2 gap-3">
                    {SAVINGS_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => selectSavings(option.value)}
                        className="text-left px-5 py-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-amber-400/50 text-white font-medium transition-all duration-200 active:scale-[0.98]"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Concern */}
            {state.step === "concern" && (
              <motion.div
                key="concern"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-10">
                  <h1 className="text-3xl md:text-4xl font-serif font-black text-white mb-4">
                    Almost there...
                  </h1>
                </div>

                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8">
                  <p className="text-white/80 text-sm font-medium mb-1">Question 2 of 2</p>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                    What concerns you most about your retirement?
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {CONCERN_OPTIONS.map((option) => {
                      const Icon = CONCERN_ICONS[option.icon as keyof typeof CONCERN_ICONS];
                      return (
                        <button
                          key={option.value}
                          onClick={() => selectConcern(option.value)}
                          className="flex items-center gap-3 text-left px-5 py-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-amber-400/50 text-white font-medium transition-all duration-200 active:scale-[0.98]"
                        >
                          <Icon className="h-5 w-5 text-amber-400 flex-shrink-0" />
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Personalized Result */}
            {state.step === "result" && result && (
              <motion.div
                key="result"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-1.5 mb-6">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-green-300 text-sm font-medium">Match Found</span>
                  </div>
                  <h1 className="text-2xl md:text-4xl font-serif font-black text-white mb-2">
                    {result.headline}
                  </h1>
                </div>

                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-white font-bold">{result.companyName}</p>
                      <p className="text-white/50 text-sm">Matched for your profile</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6">{result.description}</p>

                  <button
                    onClick={proceedToContact}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#B22234] hover:bg-[#9a1d2d] text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg active:scale-[0.98]"
                  >
                    Get My Free Kit
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-white/40 text-xs">
                  <span>A+ BBB Rated Partners</span>
                  <span>|</span>
                  <span>No Spam, Ever</span>
                  <span>|</span>
                  <span>10,000+ Americans Educated</span>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Contact Form */}
            {state.step === "contact" && result && (
              <motion.div
                key="contact"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <h1 className="text-2xl md:text-3xl font-serif font-black text-white mb-2">
                    Where should we send your kit?
                  </h1>
                  <p className="text-white/60">
                    {result.companyName} will reach out within 1 business day.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8">
                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-white/70 text-sm font-medium mb-1.5">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        value={state.firstName}
                        onChange={(e) => setState(prev => ({ ...prev, firstName: e.target.value }))}
                        placeholder="John"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 text-lg"
                        autoFocus
                        autoComplete="given-name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-1.5">Email</label>
                      <input
                        id="email"
                        type="email"
                        value={state.email}
                        onChange={(e) => setState(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 text-lg"
                        autoComplete="email"
                      />
                    </div>

                    {result.requiresPhone && (
                      <div>
                        <label htmlFor="phone" className="block text-white/70 text-sm font-medium mb-1.5">
                          <span className="flex items-center gap-1.5">
                            <Phone className="h-3.5 w-3.5" />
                            Phone Number
                          </span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={state.phone}
                          onChange={(e) => setState(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 text-lg"
                          autoComplete="tel"
                        />
                      </div>
                    )}
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm mb-4">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#B22234] hover:bg-[#9a1d2d] text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg active:scale-[0.98]"
                  >
                    Get My Free Kit
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <p className="text-white/30 text-xs text-center mt-4">
                    <Lock className="h-3 w-3 inline mr-1" />
                    Your information is encrypted and never shared without your consent.
                  </p>
                </form>
              </motion.div>
            )}

            {/* STEP 5: Submitting */}
            {state.step === "submitting" && (
              <motion.div
                key="submitting"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="text-center py-20"
              >
                <Loader2 className="h-12 w-12 text-amber-400 animate-spin mx-auto mb-6" />
                <h2 className="text-2xl font-serif font-bold text-white">
                  Matching you with the best option...
                </h2>
              </motion.div>
            )}

            {/* STEP 6: Success */}
            {state.step === "success" && result && (
              <motion.div
                key="success"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-white mb-4">
                  You&apos;re all set, {state.firstName}!
                </h2>
                <p className="text-white/70 text-lg mb-2">
                  {result.companyName} is preparing your personalized kit.
                </p>
                <p className="text-white/50 text-sm">
                  Redirecting you now...
                </p>
                <Loader2 className="h-5 w-5 text-white/30 animate-spin mx-auto mt-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Trust footer */}
      <footer className="w-full py-6 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/30 text-xs">
          <span>A+ BBB Rated Partners</span>
          <span>256-bit SSL Encryption</span>
          <span>10,000+ Americans Educated</span>
          <span>No Spam Guarantee</span>
        </div>
      </footer>
    </div>
  );
}
