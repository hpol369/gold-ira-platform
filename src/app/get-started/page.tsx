"use client";

import { Suspense, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Shield, TrendingDown, AlertTriangle, Clock, Heart, ArrowRight, Lock, CheckCircle, Phone, Loader2, Mail, Users, Star, Award } from "lucide-react";
import type { SavingsTier, Concern, FunnelState } from "@/types/funnel";
import { SAVINGS_OPTIONS, CONCERN_OPTIONS, getQualificationResult } from "@/types/funnel";
import { useABTest } from "@/lib/ab-testing";
import { GOOGLE_ADS_CONVERSION_TAG } from "@/config/google-ads";
import { trackFunnelStep, trackLeadSubmission } from "@/lib/analytics";

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

const TESTIMONIALS = [
  {
    quote: "I was skeptical at first, but the free consultation answered every question. Zero pressure — just solid information.",
    name: "Robert T.",
    state: "Ohio",
    job: "Retired Electrician",
  },
  {
    quote: "After 30 years driving trucks, I wanted my savings protected. The process was simpler than I expected.",
    name: "Linda M.",
    state: "Texas",
    job: "Retired Truck Driver",
  },
  {
    quote: "My financial advisor never mentioned gold. Wish I had found this years ago — my portfolio feels more secure now.",
    name: "James K.",
    state: "Pennsylvania",
    job: "Former Steelworker",
  },
];

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

// Map quiz savings values to funnel SavingsTier
function mapSavingsParam(value: string): SavingsTier | null {
  const mapping: Record<string, SavingsTier> = {
    "under-25k": "under-25k",
    "<25k": "under-25k",
    "25k-50k": "25k-50k",
    "50k-100k": "50k-100k",
    "100k-250k": "100k-250k",
    "100k-500k": "250k-500k",
    "250k-500k": "250k-500k",
    "250k+": "250k-500k",
    "500k-plus": "500k-plus",
    "500k+": "500k-plus",
  };
  return mapping[value] || null;
}

// Map quiz concern values to funnel Concern
function mapConcernParam(value: string): Concern | null {
  const mapping: Record<string, Concern> = {
    "inflation": "inflation",
    "market-crash": "market-crash",
    "economy": "market-crash",
    "diversification": "market-crash",
    "outliving-savings": "outliving-savings",
    "legacy": "legacy",
  };
  return mapping[value] || null;
}

function GetStartedContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref") || "direct";
  const variant = useABTest("funnel-order-v1");

  // Read pre-filled params from quiz/calculator
  const savingsParam = searchParams.get("savings");
  const concernParam = searchParams.get("concern");
  const prefillSavings = savingsParam ? mapSavingsParam(savingsParam) : null;
  const prefillConcern = concernParam ? mapConcernParam(concernParam) : null;

  // Variant B: concern-first (emotional hook), then savings
  const firstStep = variant === "variant" ? "concern" : "savings";
  const secondStep = variant === "variant" ? "savings" : "concern";

  // Determine initial step based on pre-filled params
  function getInitialStep(): FunnelState["step"] {
    if (prefillSavings && prefillConcern) {
      // Both pre-filled (from quiz) → skip to result
      return "result";
    }
    if (prefillSavings) {
      // Savings pre-filled → skip to concern
      return variant === "variant" ? "concern" : "concern";
    }
    if (prefillConcern) {
      // Concern pre-filled → skip to savings
      return variant === "variant" ? "savings" : "savings";
    }
    return firstStep as FunnelState["step"];
  }

  const initialQualification = prefillSavings ? getQualificationResult(prefillSavings) : null;

  const [state, setState] = useState<FunnelState>({
    step: getInitialStep(),
    savingsTier: prefillSavings,
    concern: prefillConcern,
    qualificationTier: initialQualification?.tier || null,
    firstName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [isAugustaResult, setIsAugustaResult] = useState(false);

  function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  const selectSavings = useCallback((tier: SavingsTier) => {
    trackFunnelStep("savings", { savingsTier: tier, abVariant: `funnel-order-v1:${variant}` });
    if (variant === "variant") {
      // Variant B: savings is step 2, go to result
      const result = getQualificationResult(tier);
      setState(prev => ({ ...prev, savingsTier: tier, qualificationTier: result.tier, step: "result" }));
    } else {
      // Control: savings is step 1, go to concern
      setState(prev => ({ ...prev, savingsTier: tier, step: "concern" }));
    }
  }, [variant]);

  const selectConcern = useCallback((concern: Concern) => {
    trackFunnelStep("concern", { concern, abVariant: `funnel-order-v1:${variant}` });
    if (variant === "variant") {
      // Variant B: concern is step 1, go to savings
      setState(prev => ({ ...prev, concern, step: "savings" }));
    } else {
      // Control: concern is step 2, go to result
      const result = getQualificationResult(state.savingsTier!);
      setState(prev => ({
        ...prev,
        concern,
        qualificationTier: result.tier,
        step: "result",
      }));
    }
  }, [state.savingsTier, variant]);

  const proceedToContact = useCallback(() => {
    const r = state.savingsTier ? getQualificationResult(state.savingsTier) : null;
    trackFunnelStep("contact", { savingsTier: state.savingsTier || undefined, concern: state.concern || undefined, company: r?.companyName });
    setState(prev => ({ ...prev, step: "contact" }));
  }, [state.savingsTier, state.concern]);

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

    trackFunnelStep("submit", { savingsTier: state.savingsTier || undefined, concern: state.concern || undefined, company: result.companyName });
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
          abVariant: `funnel-order-v1:${variant}`,
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
            send_to: GOOGLE_ADS_CONVERSION_TAG,
          });
        } catch { /* gtag not available */ }
      }

      trackLeadSubmission({ source: `get-started_${ref}`, savingsTier: state.savingsTier || undefined, company: result.companyName, isAugusta });
      trackFunnelStep("success", { savingsTier: state.savingsTier || undefined, company: result.companyName });
      setIsAugustaResult(isAugusta);
      setState(prev => ({ ...prev, step: "success" }));

      // Route based on partner type
      if (isAugusta) {
        // Augusta leads: Stay on our success screen.
        // Lead already submitted via Zapier — Augusta will call them.
        // We send our own PDF guide via Resend (triggered server-side).
        // No redirect needed.
      } else {
        // Non-Augusta partners: redirect to thank-you page
        const thankYouParams = new URLSearchParams({
          name: state.firstName.trim(),
          company: result.companyName,
        });
        setTimeout(() => {
          window.location.href = `/thank-you?${thankYouParams.toString()}`;
        }, 3000);
      }
    } catch {
      setError("Network error. Please try again.");
      setState(prev => ({ ...prev, step: "contact" }));
    }
  }, [state, ref, variant]);

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

      {/* Trust stats bar */}
      <div className="w-full py-2.5 border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-x-5 gap-y-1.5 px-4 text-white/50 text-[11px]">
          <span className="flex items-center gap-1"><Users className="h-3 w-3 text-amber-400/60" />50,000+ Educated</span>
          <span className="flex items-center gap-1"><Shield className="h-3 w-3 text-amber-400/60" />$2B+ Protected</span>
          <span className="flex items-center gap-1"><Star className="h-3 w-3 text-amber-400/60" />4.9/5 Rating</span>
          <span className="flex items-center gap-1"><Award className="h-3 w-3 text-amber-400/60" />A+ BBB Partners</span>
        </div>
      </div>

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
                  <p className="text-white/80 text-sm font-medium mb-1">Question {firstStep === "savings" ? "1" : "2"} of 2</p>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                    How much do you have in retirement savings?
                  </h2>
                  <p className="text-white/50 text-sm mb-6">IRA, 401(k), TSP, pension — all combined</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  <p className="text-white/80 text-sm font-medium mb-1">Question {secondStep === "concern" ? "2" : "1"} of 2</p>
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

                {/* Testimonial */}
                <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm italic mb-2">
                    &ldquo;{TESTIMONIALS[0].quote}&rdquo;
                  </p>
                  <p className="text-white/50 text-xs">
                    — {TESTIMONIALS[0].name}, {TESTIMONIALS[0].state} &bull; {TESTIMONIALS[0].job}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4 text-white/40 text-xs mt-4">
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
                          onChange={(e) => setState(prev => ({ ...prev, phone: formatPhone(e.target.value) }))}
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

            {/* STEP 6: Success — Augusta leads get enhanced screen, others redirect */}
            {state.step === "success" && result && (
              <motion.div
                key="success"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className={isAugustaResult ? "py-10" : "text-center py-16"}
              >
                {isAugustaResult ? (
                  /* Enhanced Augusta success screen */
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-400" />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
                      You&apos;re All Set, {state.firstName}!
                    </h2>

                    <p className="text-white/80 text-lg mb-6">
                      A Gold IRA specialist from Augusta Precious Metals will reach out shortly
                      for a free info call about how a Gold IRA works for your situation.
                    </p>

                    {/* PDF Guide Delivery Confirmation */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6 text-left">
                      <div className="flex items-start gap-3 mb-4">
                        <Mail className="h-5 w-5 text-[#C5A55A] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-white font-semibold">Your Free Gold IRA Guide</p>
                          <p className="text-white/60 text-sm">
                            We just sent the 2026 Gold IRA Protection Guide to{" "}
                            <span className="text-white/80">{state.email}</span>.
                            Check your inbox (and spam folder).
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 mb-4">
                        <Phone className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-white font-semibold">What to Expect</p>
                          <p className="text-white/60 text-sm">
                            A friendly specialist will call to answer your questions.
                            It&apos;s educational, not a sales pitch. Average call: 15 minutes.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-white font-semibold">Zero Obligation</p>
                          <p className="text-white/60 text-sm">
                            100% free. No contracts. Your decision, your timeline.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Continue browsing CTA */}
                    <a
                      href="/learn"
                      className="inline-flex items-center gap-2 text-[#C5A55A] hover:text-[#d4b96a] font-medium transition-colors"
                    >
                      Explore our Learning Center while you wait
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                ) : (
                  /* Non-Augusta: simple redirect screen */
                  <>
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
                  </>
                )}
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
