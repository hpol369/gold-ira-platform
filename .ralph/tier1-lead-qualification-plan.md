# Tier 1.1 — Lead Qualification Overhaul

**Date:** 2026-03-19
**Priority:** CRITICAL — This is the single highest-ROI change in the entire project.
**Architect:** Cowork | **Dev Lead:** Claude Code

---

## THE PROBLEM

**`src/context/LeadModalContext.tsx` line 21:**
```typescript
const openModal = useCallback((newVariant: string, newSource: string) => {
    window.location.href = "https://learn.augustapreciousmetals.com/apm-aff-lp-1-v3?apmtrkr_cid=1696&aff_id=5129&apmtrkr_cph=844-405-3908";
}, []);
```

Every CTA on every page calls `openModal()` → which does a raw redirect to Augusta. No modal. No qualification. No data capture. No routing. EVERYONE goes to Augusta regardless of budget.

The entire LeadCaptureModal.tsx (840 lines) is dead code. The multi-step form, the enrichment calculator, the confirmation flow — none of it runs.

Result: Augusta receives 100% of traffic with 0% qualification. 99.9% of those visitors don't have $50k+ in savings. Augusta's sales team wastes time on unqualified leads. Our conversion rates suffer. Our affiliate relationship suffers.

---

## THE SOLUTION

Activate and rebuild the lead funnel with **savings-first qualification**. Only send $50k+ leads to Augusta. Route everyone else to the appropriate partner or educational content.

---

## PHASE 1: Reactivate the Modal System

### P1-001: Fix LeadModalContext.tsx
**File:** `src/context/LeadModalContext.tsx`

**Change:** Restore the modal open behavior instead of the raw redirect.

```typescript
"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type QualificationTier = "high" | "mid" | "low" | "nurture" | null;

interface QuizData {
  age?: string;
  savings?: string;
  goal?: string;
  timeline?: string;
}

interface LeadModalContextType {
  isOpen: boolean;
  variant: string;
  source: string;
  quizData: QuizData | null;
  qualificationTier: QualificationTier;
  openModal: (variant: string, source: string, quizData?: QuizData) => void;
  closeModal: () => void;
  setQualificationTier: (tier: QualificationTier) => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState("default");
  const [source, setSource] = useState("");
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [qualificationTier, setQualificationTier] = useState<QualificationTier>(null);

  const openModal = useCallback((newVariant: string, newSource: string, newQuizData?: QuizData) => {
    setVariant(newVariant);
    setSource(newSource);
    if (newQuizData) {
      setQuizData(newQuizData);
    }
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Reset after animation
    setTimeout(() => {
      setQuizData(null);
      setQualificationTier(null);
    }, 300);
  }, []);

  return (
    <LeadModalContext.Provider value={{
      isOpen, variant, source, quizData, qualificationTier,
      openModal, closeModal, setQualificationTier
    }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (context === undefined) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
```

**Key changes:**
- `openModal()` now opens the modal instead of redirecting
- Added `quizData` to pass quiz answers into the modal
- Added `qualificationTier` for routing decisions
- Reset state on close (after animation)

---

## PHASE 2: Rebuild the Modal with Savings-First Flow

### P2-001: Rewrite LeadCaptureModal.tsx
**File:** `src/components/lp/LeadCaptureModal.tsx`

**New flow (5 steps):**

```
Step 1: SAVINGS QUALIFICATION (new — the gate)
   "How much do you have in retirement savings (IRA, 401k, etc.)?"
   [Under $25k] [$25k-$50k] [$50k-$100k] [$100k-$250k] [$250k+]

   → Sets qualificationTier:
     - $100k+    → "high"   (Augusta primary)
     - $50k-100k → "mid"    (Augusta or Goldco)
     - $25k-50k  → "low"    (American Hartford / Noble Gold)
     - Under $25k → "nurture" (Educational content + newsletter)

Step 2: CONCERN/GOAL (builds rapport + captures intent)
   "What concerns you most about your retirement?"
   [Inflation eroding savings] [Stock market crash] [Outliving my money] [Leaving legacy for family]

Step 3: CONTACT INFO (name + email + phone — single step)
   ONLY shown if tier is "high" or "mid" ($50k+)
   "Let's match you with the right specialist."
   [First Name] [Last Name] [Email] [Phone]
   [Get My Free Consultation →]

   For "low" tier ($25k-$50k):
   "See your recommended options"
   [First Name] [Email]
   [See My Options →]

   For "nurture" tier (under $25k):
   "Get your free Gold IRA starter guide"
   [Email]
   [Send My Guide →]

Step 4: ROUTING (different per tier)
   HIGH ($100k+):
     → Submit to Supabase with savings data
     → Submit to Augusta via Zapier
     → Fire Google Ads conversion pixel
     → Redirect to Augusta LP
     → Telegram notification: 🔥🔥🔥 HIGH VALUE

   MID ($50k-100k):
     → Submit to Supabase with savings data
     → Submit to Augusta via Zapier (they accept $50k+)
     → Fire Google Ads conversion pixel
     → Redirect to Augusta LP
     → Telegram notification: 🔥 QUALIFIED LEAD

   LOW ($25k-50k):
     → Submit to Supabase (DO NOT submit to Augusta)
     → Show comparison page with American Hartford + Noble Gold + Goldco links
     → Track affiliate clicks
     → Telegram notification: 📊 Budget lead - routed to alternatives

   NURTURE (under $25k):
     → Save email to Supabase as "nurture" lead
     → Show educational content + Noble Gold soft CTA
     → DO NOT send to Augusta
     → Telegram notification: 📚 Newsletter subscriber

Step 5: SUCCESS/THANK YOU (tier-appropriate)
   HIGH/MID: "Your specialist will call shortly. Here's what to expect..."
   LOW: "Here are the best options for your budget..."
   NURTURE: "Your free guide is on its way! Start learning..."
```

**Full component rewrite below.** The existing 840-line modal should be completely replaced with this new version.

Key design decisions:
- Same visual style (navy blue bg, amber accents, white inputs)
- Same animation system (framer-motion AnimatePresence)
- Same trust signals (SSL badge, BBB rating, stars)
- BUT savings question is FIRST, before any contact info
- AND routing logic is BUILT IN, not an afterthought

```tsx
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, User, Mail, Phone, ArrowRight, ArrowLeft,
  CheckCircle2, Loader2, ShieldCheck, Star,
  DollarSign, Shield, TrendingDown, Heart, Clock
} from "lucide-react";
import { useLeadModal, QualificationTier } from "@/context/LeadModalContext";
import { leadModalVariants } from "@/config/lead-modal-variants";
import { getTrackedLink, AFFILIATE_LINKS } from "@/config/affiliates";

// Savings tiers and their qualification mapping
const SAVINGS_OPTIONS = [
  { value: "under-25k", label: "Under $25,000", tier: "nurture" as QualificationTier },
  { value: "25k-50k", label: "$25,000 – $50,000", tier: "low" as QualificationTier },
  { value: "50k-100k", label: "$50,000 – $100,000", tier: "mid" as QualificationTier },
  { value: "100k-250k", label: "$100,000 – $250,000", tier: "high" as QualificationTier },
  { value: "250k-500k", label: "$250,000 – $500,000", tier: "high" as QualificationTier },
  { value: "500k-plus", label: "$500,000+", tier: "high" as QualificationTier },
];

const CONCERN_OPTIONS = [
  { value: "inflation", label: "Inflation eroding my savings", icon: TrendingDown },
  { value: "market-crash", label: "A stock market crash", icon: Shield },
  { value: "outlive-savings", label: "Outliving my money", icon: Clock },
  { value: "legacy", label: "Leaving something for family", icon: Heart },
];

type Step = "savings" | "concern" | "contact" | "submitting" | "success";

export default function LeadCaptureModal() {
  const { isOpen, variant, source, quizData, closeModal, setQualificationTier } = useLeadModal();
  const config = leadModalVariants[variant] || leadModalVariants.default;

  // UTM tracking
  const [finalSource, setFinalSource] = useState(source || `modal-${variant}`);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const utmSource = params.get("utm_source");
      const utmCampaign = params.get("utm_campaign");
      if (utmSource) {
        setFinalSource(utmCampaign ? `${utmSource}-${utmCampaign}` : utmSource);
      } else if (source) {
        setFinalSource(source);
      }
    }
  }, [source, variant]);

  // Form state
  const [step, setStep] = useState<Step>("savings");
  const [savings, setSavings] = useState("");
  const [tier, setTier] = useState<QualificationTier>(null);
  const [concern, setConcern] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  // Pre-fill from quiz data if available
  useEffect(() => {
    if (quizData?.savings) {
      const match = SAVINGS_OPTIONS.find(o => o.value === quizData.savings);
      if (match) {
        setSavings(match.value);
        setTier(match.tier);
        setQualificationTier(match.tier);
        // Skip savings step if quiz already captured it
        if (quizData.goal) {
          setConcern(quizData.goal);
          setStep("contact"); // Skip straight to contact
        } else {
          setStep("concern");
        }
      }
    }
  }, [quizData, setQualificationTier]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStep("savings");
        setSavings("");
        setTier(null);
        setConcern("");
        setFormData({ firstName: "", lastName: "", email: "", phone: "" });
        setError("");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Auto-focus
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, step]);

  // ESC to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeModal]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => { if (e.target === e.currentTarget) closeModal(); },
    [closeModal]
  );

  // Phone formatter
  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  // Handle savings selection
  const handleSavingsSelect = (option: typeof SAVINGS_OPTIONS[number]) => {
    setSavings(option.value);
    setTier(option.tier);
    setQualificationTier(option.tier);
    // Auto-advance after short delay for visual feedback
    setTimeout(() => setStep("concern"), 300);
  };

  // Handle concern selection
  const handleConcernSelect = (value: string) => {
    setConcern(value);
    setTimeout(() => setStep("contact"), 300);
  };

  // Handle form submission — routes based on tier
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      // Determine what data we need based on tier
      const isQualified = tier === "high" || tier === "mid"; // $50k+
      const isLow = tier === "low"; // $25k-50k
      // nurture = under $25k

      // Build lead payload
      const payload: Record<string, string | boolean | undefined> = {
        firstName: formData.firstName || undefined,
        lastName: formData.lastName || undefined,
        email: formData.email,
        phone: formData.phone || undefined,
        source: finalSource,
        savingsTier: savings,
        concern: concern,
        qualificationTier: tier || undefined,
        // Only submit to Augusta for qualified leads
        skipAugusta: !isQualified,
      };

      // For nurture tier, we only have email
      if (tier === "nurture") {
        payload.firstName = undefined;
        payload.lastName = undefined;
        payload.phone = undefined;
      }

      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!result.success) {
        setError(result.error || "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // If qualified ($50k+), also submit to Augusta directly
      if (isQualified && result.leadId) {
        try {
          await fetch("/api/submit-to-augusta", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ leadId: result.leadId }),
          });
        } catch {
          // Lead is saved, Augusta submission can be retried
        }

        // Fire Google Ads conversion
        if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).gtag) {
          (window as unknown as Record<string, (...args: unknown[]) => void>).gtag("event", "conversion", {
            send_to: "AW-17807049464/b4n5CImJ3O4bEPiFiKtC",
            value: tier === "high" ? 100.0 : 50.0,
            currency: "USD",
          });
        }
      }

      // Also PATCH with enrichment data if we have a leadId
      if (result.leadId && savings) {
        fetch("/api/submit-lead", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            leadId: result.leadId,
            totalRetirementSavings: savings,
            notes: `Concern: ${concern} | Tier: ${tier} | Source: ${finalSource}`,
          }),
        }).catch(() => {}); // Fire and forget
      }

      setIsSubmitting(false);
      setStep("success");

    } catch {
      setError("Connection issue. Please check your internet and try again.");
      setIsSubmitting(false);
    }
  };

  // Enter key handling
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (step === "contact") handleSubmit();
    }
  };

  // Progress calculation
  const stepNumber = step === "savings" ? 1 : step === "concern" ? 2 : step === "contact" ? 3 : 3;
  const totalSteps = 3;
  const progressWidth = step === "success" || step === "submitting" ? 100 : (stepNumber / totalSteps) * 100;

  // Determine what contact fields to show based on tier
  const showPhone = tier === "high" || tier === "mid";
  const showName = tier !== "nurture";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-[#000080] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-20 rounded-full hover:bg-white/10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              {/* Progress bar — shown on steps 1-3 */}
              {step !== "success" && step !== "submitting" && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80 text-sm">Step {stepNumber} of {totalSteps}</span>
                    <span className="text-white/80 text-sm">
                      {step === "savings" ? "30 seconds" : step === "concern" ? "20 seconds" : "Almost done!"}
                    </span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-amber-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressWidth}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              )}

              {/* ================================================ */}
              {/* STEP 1: SAVINGS QUALIFICATION                    */}
              {/* ================================================ */}
              {step === "savings" && (
                <div className="space-y-5">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-amber-500/30">
                      <DollarSign className="h-7 w-7 text-amber-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {config.headline}
                    </h2>
                    <p className="text-white/90 mb-1">{config.subtext}</p>
                    <p className="text-white/60 text-sm">
                      This helps us match you with the right advisor for your situation.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-3">
                      How much do you have in retirement savings?
                    </label>
                    <div className="space-y-2">
                      {SAVINGS_OPTIONS.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleSavingsSelect(option)}
                          className={`w-full py-3.5 px-5 rounded-xl border-2 text-left font-medium transition-all flex items-center justify-between ${
                            savings === option.value
                              ? "border-amber-400 bg-amber-400/20 text-amber-300"
                              : "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                          }`}
                        >
                          <span>{option.label}</span>
                          {savings === option.value && (
                            <CheckCircle2 className="h-5 w-5 text-amber-400" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Trust signals */}
                  <div className="pt-2 space-y-2">
                    {config.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-white/80 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ================================================ */}
              {/* STEP 2: CONCERN / GOAL                           */}
              {/* ================================================ */}
              {step === "concern" && (
                <div className="space-y-5">
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      What concerns you most?
                    </h2>
                    <p className="text-white/80">
                      We&apos;ll tailor your guidance to what matters most to you.
                    </p>
                  </div>

                  <div className="space-y-2">
                    {CONCERN_OPTIONS.map((option) => {
                      const Icon = option.icon;
                      return (
                        <button
                          key={option.value}
                          onClick={() => handleConcernSelect(option.value)}
                          className={`w-full py-3.5 px-5 rounded-xl border-2 text-left font-medium transition-all flex items-center gap-3 ${
                            concern === option.value
                              ? "border-amber-400 bg-amber-400/20 text-amber-300"
                              : "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                          }`}
                        >
                          <Icon className="h-5 w-5 flex-shrink-0" />
                          <span>{option.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setStep("savings")}
                    className="w-full text-white/60 hover:text-white/80 text-sm py-2 transition-colors flex items-center justify-center gap-1"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                </div>
              )}

              {/* ================================================ */}
              {/* STEP 3: CONTACT INFO (tier-adaptive)             */}
              {/* ================================================ */}
              {step === "contact" && (
                <div className="space-y-5">
                  <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {tier === "nurture"
                        ? "Get Your Free Gold IRA Guide"
                        : tier === "low"
                          ? "See Your Recommended Options"
                          : "Let\u2019s Match You With a Specialist"}
                    </h2>
                    <p className="text-white/80 text-sm">
                      {tier === "nurture"
                        ? "Enter your email and we\u2019ll send it right over."
                        : tier === "low"
                          ? "We\u2019ll show you the best options for your budget."
                          : "A Gold IRA specialist will reach out for a free, no-pressure consultation."}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {/* Name fields — shown for mid, low, high tiers */}
                    {showName && (
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="firstName" className="block text-xs font-medium text-white/80 mb-1">
                            First Name
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input
                              id="firstName"
                              ref={inputRef}
                              type="text"
                              autoComplete="given-name"
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              onKeyDown={handleKeyDown}
                              className="w-full pl-11 pr-3 py-3.5 text-lg text-slate-900 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
                              placeholder="First"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-xs font-medium text-white/80 mb-1">
                            Last Name
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            autoComplete="family-name"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            onKeyDown={handleKeyDown}
                            className="w-full px-3 py-3.5 text-lg text-slate-900 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
                            placeholder="Last"
                          />
                        </div>
                      </div>
                    )}

                    {/* Email — always shown */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-white/80 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          id="email"
                          ref={tier === "nurture" ? inputRef : undefined}
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onKeyDown={handleKeyDown}
                          className="w-full pl-11 pr-3 py-3.5 text-lg text-slate-900 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Phone — only for qualified ($50k+) */}
                    {showPhone && (
                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-white/80 mb-1">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                          <input
                            id="phone"
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                            onKeyDown={handleKeyDown}
                            className="w-full pl-11 pr-3 py-3.5 text-lg text-slate-900 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <p className="text-white/50 text-xs mt-1">
                          For your specialist to reach you. No spam, ever.
                        </p>
                      </div>
                    )}
                  </div>

                  {error && (
                    <div className="bg-red-500/20 border border-red-500/30 text-red-200 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  {/* Submit button — copy varies by tier */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.email.includes("@") || (showPhone && !formData.phone.trim()) || (showName && !formData.firstName.trim())}
                    className="w-full bg-[#B22234] hover:bg-[#8b1c2a] disabled:bg-slate-500 disabled:cursor-not-allowed text-white text-xl font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="h-5 w-5 animate-spin" /> Processing...</>
                    ) : tier === "nurture" ? (
                      <><Mail className="h-5 w-5" /> Send My Free Guide</>
                    ) : tier === "low" ? (
                      <><ArrowRight className="h-5 w-5" /> See My Options</>
                    ) : (
                      <><Phone className="h-5 w-5" /> Get My Free Consultation</>
                    )}
                  </button>

                  <button
                    onClick={() => setStep("concern")}
                    className="w-full text-white/60 hover:text-white/80 text-sm py-2 transition-colors flex items-center justify-center gap-1"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>

                  {showPhone && (
                    <p className="text-center text-xs text-white/60">
                      By clicking above, you agree to be contacted by a retirement specialist.
                    </p>
                  )}
                </div>
              )}

              {/* ================================================ */}
              {/* STEP: SUBMITTING (animation)                     */}
              {/* ================================================ */}
              {step === "submitting" && (
                <div className="text-center py-8">
                  <Loader2 className="h-12 w-12 text-amber-400 animate-spin mx-auto mb-4" />
                  <h2 className="text-xl font-bold text-white">Finding your best match...</h2>
                </div>
              )}

              {/* ================================================ */}
              {/* STEP: SUCCESS (tier-adaptive)                    */}
              {/* ================================================ */}
              {step === "success" && tier === "high" && (
                <div className="text-center py-4 space-y-5">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto border-2 border-green-500/30">
                    <CheckCircle2 className="h-10 w-10 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    You&apos;re All Set{formData.firstName ? `, ${formData.firstName}` : ""}!
                  </h2>
                  <p className="text-white/80">
                    A Gold IRA specialist will call you shortly for a free, no-pressure consultation.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left space-y-2">
                    <p className="text-white/90 font-medium text-sm">What to expect:</p>
                    <div className="flex items-start gap-2 text-white/70 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Educational call — not a sales pitch</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/70 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Get answers to all your Gold IRA questions</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/70 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Zero obligation — 100% your decision</span>
                    </div>
                  </div>
                  <button onClick={closeModal} className="w-full text-white/50 hover:text-white/70 text-sm py-2">
                    Close
                  </button>
                </div>
              )}

              {step === "success" && tier === "mid" && (
                <div className="text-center py-4 space-y-5">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto border-2 border-green-500/30">
                    <CheckCircle2 className="h-10 w-10 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    You&apos;re All Set{formData.firstName ? `, ${formData.firstName}` : ""}!
                  </h2>
                  <p className="text-white/80">
                    A specialist will reach out to walk you through your options. No pressure, just answers.
                  </p>
                  <button onClick={closeModal} className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-xl">
                    Continue Browsing
                  </button>
                </div>
              )}

              {step === "success" && tier === "low" && (
                <div className="text-center py-4 space-y-5">
                  <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto border-2 border-amber-500/30">
                    <CheckCircle2 className="h-10 w-10 text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Great Options for Your Budget
                  </h2>
                  <p className="text-white/80 text-sm">
                    Based on your savings range, here are the best companies for you:
                  </p>
                  <div className="space-y-3 text-left">
                    <a
                      href={getTrackedLink(AFFILIATE_LINKS.americanHartford, "modal-low-tier", "americanHartford")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl p-4 transition-all"
                    >
                      <p className="text-white font-bold">American Hartford Gold</p>
                      <p className="text-white/60 text-sm">Minimum $10,000 · Price match guarantee</p>
                    </a>
                    <a
                      href={getTrackedLink(AFFILIATE_LINKS.noble, "modal-low-tier", "noble")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl p-4 transition-all"
                    >
                      <p className="text-white font-bold">Noble Gold Investments</p>
                      <p className="text-white/60 text-sm">Minimum $2,000 · Lowest minimum in industry</p>
                    </a>
                  </div>
                  <button onClick={closeModal} className="w-full text-white/50 hover:text-white/70 text-sm py-2">
                    Close
                  </button>
                </div>
              )}

              {step === "success" && tier === "nurture" && (
                <div className="text-center py-4 space-y-5">
                  <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto border-2 border-blue-500/30">
                    <Mail className="h-10 w-10 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Your Guide is On Its Way!
                  </h2>
                  <p className="text-white/80 text-sm">
                    Check your email for your free Gold IRA starter guide. In the meantime, explore our learning center:
                  </p>
                  <a
                    href="/learn"
                    className="block w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-xl"
                  >
                    Explore Learning Center
                  </a>
                  <a
                    href={getTrackedLink(AFFILIATE_LINKS.noble, "modal-nurture", "noble")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white/60 hover:text-white/80 text-sm underline"
                  >
                    Or see Gold IRAs starting at $2,000 →
                  </a>
                  <button onClick={closeModal} className="w-full text-white/50 hover:text-white/70 text-sm py-2">
                    Close
                  </button>
                </div>
              )}

              {/* Trust footer — shown on input steps */}
              {(step === "savings" || step === "concern" || step === "contact") && (
                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-4 text-white/70 text-xs">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-4 w-4" />
                      256-bit SSL
                    </span>
                    <span>|</span>
                    <span>A+ BBB Rating</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

---

## PHASE 3: Update the API to Accept Qualification Data

### P3-001: Update submit-lead API route
**File:** `src/app/api/submit-lead/route.ts`

**Changes needed:**
1. Accept new fields in POST: `savingsTier`, `concern`, `qualificationTier`
2. Save these to Supabase lead record
3. For nurture tier (email only), relax validation — don't require phone
4. Update Telegram notification to show qualification tier prominently

**LeadData interface update:**
```typescript
interface LeadData {
  firstName?: string;     // Optional for nurture tier
  lastName?: string;      // Optional for nurture tier
  email: string;          // Always required
  phone?: string;         // Optional for nurture/low tier
  investmentAmount?: string;
  source?: string;
  skipAugusta?: boolean;
  savingsTier?: string;   // NEW: under-25k, 25k-50k, 50k-100k, etc.
  concern?: string;       // NEW: inflation, market-crash, etc.
  qualificationTier?: string; // NEW: high, mid, low, nurture
}
```

**Validation changes:**
- If `qualificationTier === "nurture"`: only require email
- If `qualificationTier === "low"`: require email + firstName
- If `qualificationTier === "mid"` or `"high"`: require all fields (current behavior)
- Phone validation only when phone is provided

### P3-002: Update Supabase schema
**File:** `src/lib/supabase.ts`

**Add columns to Lead type:**
```typescript
savings_tier?: string;        // under-25k, 25k-50k, 50k-100k, etc.
concern?: string;             // inflation, market-crash, outlive-savings, legacy
qualification_tier?: string;  // high, mid, low, nurture
```

**NOTE:** These columns need to be added to the actual Supabase table too. Run this SQL:
```sql
ALTER TABLE leads ADD COLUMN IF NOT EXISTS savings_tier TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS concern TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS qualification_tier TEXT;
```

### P3-003: Update Telegram notification
**File:** `src/lib/lead-notification.ts`

**Add qualification tier to notification message:**
```
🔥🔥🔥 HIGH VALUE LEAD ($100k+)
👤 John Smith
📧 john@email.com
📱 (555) 123-4567
💰 Savings: $100k-$250k
🎯 Concern: Inflation
📊 Tier: HIGH
🏷️ Source: homepage-hero
```

vs

```
📚 NEWSLETTER SUBSCRIBER (Under $25k)
📧 jane@email.com
💰 Savings: Under $25k
🎯 Concern: Market crash
📊 Tier: NURTURE
🏷️ Source: learn-article-sidebar
```

---

## PHASE 4: Verification

### P4-001: Build check
Run `npm run build` and verify zero TypeScript errors.

### P4-002: Manual flow testing
Test each savings tier path:
1. Click any CTA → modal opens (NOT a redirect)
2. Select "$100k-$250k" → concern step → contact form with all fields → submit → Augusta submission + Telegram notification shows "HIGH VALUE"
3. Select "$50k-$100k" → concern → contact form with all fields → submit → Augusta submission + "QUALIFIED LEAD"
4. Select "$25k-$50k" → concern → name + email only → submit → NO Augusta → shows alternative companies
5. Select "Under $25k" → concern → email only → submit → NO Augusta → shows guide + learning center
6. Verify quiz data pre-fills modal (if coming from quiz)

### P4-003: Regression check
- All CTA buttons across the site should call `openModal()` and open the modal
- No more raw redirects to Augusta LP
- Navbar CTA works
- Footer CTA works
- Exit intent popup still works (separate component)
- Quiz result CTA opens modal with pre-filled data

---

## FILES CHANGED

| File | Action | Description |
|------|--------|-------------|
| `src/context/LeadModalContext.tsx` | REWRITE | Restore modal + add qualification state |
| `src/components/lp/LeadCaptureModal.tsx` | REWRITE | Savings-first qualification flow |
| `src/app/api/submit-lead/route.ts` | EDIT | Accept qualification fields, flexible validation |
| `src/lib/supabase.ts` | EDIT | Add qualification columns to Lead type |
| `src/lib/lead-notification.ts` | EDIT | Tier-aware Telegram messages |
| Supabase dashboard | MANUAL | Add 3 columns to leads table |

---

## EXPECTED IMPACT

| Metric | Before | After |
|--------|--------|-------|
| Augusta leads (all) | 100% of clicks | Only $50k+ leads |
| Qualified rate | <1% | ~40-60% |
| Lead data captured | Zero (redirect) | Savings, concern, contact |
| Sub-$50k experience | Augusta reject | Appropriate partner |
| Telegram usefulness | "Someone clicked" | Full qualification context |

---

RALPH_STATUS:
- PHASE: 1 (Lead Qualification)
- TASK: Tier 1.1 — Implementation plan written
- PROGRESS: Plan complete, ready for Claude Code execution
- BLOCKERS: Need Supabase column additions (manual or migration)
