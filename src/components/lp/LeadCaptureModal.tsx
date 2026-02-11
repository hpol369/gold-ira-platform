"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, ArrowRight, ArrowLeft, CheckCircle2, Loader2, ShieldCheck, Star, Calculator, MessageCircle, TrendingUp } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { leadModalVariants } from "@/config/lead-modal-variants";

type Step = 1 | 2 | 3 | "thank-you" | "calculator" | "success" | "confirmation" | "declined-guide";

export default function LeadCaptureModal() {
  const { isOpen, variant, source, closeModal } = useLeadModal();
  const config = leadModalVariants[variant] || leadModalVariants.default;

  // Get UTM params from URL on client side only
  const [finalSource, setFinalSource] = useState(source || `lp-modal-${variant}`);

  useEffect(() => {
    // Read UTM params from URL after mount (client-side only)
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

  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [enrichmentData, setEnrichmentData] = useState({
    retirementGoal: "",       // What they want to reach
    progressToGoal: "",       // How close they are (implies current savings)
    totalRetirementSavings: "", // Calculated from goal * progress
  });
  const [leadId, setLeadId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      // Delay reset to allow exit animation
      const timer = setTimeout(() => {
        setStep(1);
        setFormData({ firstName: "", lastName: "", email: "", phone: "" });
        setEnrichmentData({ retirementGoal: "", progressToGoal: "", totalRetirementSavings: "" });
        setLeadId(null);
        setError("");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Auto-focus input when step changes
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, step]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleNext = () => {
    if (step === 1 && formData.firstName.trim() && formData.lastName.trim()) {
      setStep(2);
    } else if (step === 2 && formData.email.includes("@")) {
      setStep(3);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (step === 3) {
        handleSubmit();
      } else {
        handleNext();
      }
    }
  };

  const handleSubmit = async () => {
    if (!formData.phone.trim()) return;

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          source: finalSource,
          skipAugusta: true,
        }),
      });

      const result = await response.json();

      if (result.success) {
        if (result.leadId) {
          setLeadId(result.leadId);
        }

        // Show confirmation step (conversion pixel fires on "Yes, Call Me")
        setStep("confirmation");
      } else {
        setError("We couldn't process your request. Please verify your phone number includes the area code, or call us at 1-800-700-1008.");
      }
    } catch {
      setError("Connection issue — your information is safe. Please check your internet and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmCall = async () => {
    if (!leadId) return;

    setIsSubmitting(true);

    try {
      await fetch("/api/submit-to-augusta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadId }),
      });
    } catch {
      // Lead is already saved — redirect anyway
    }

    // Fire Google Ads conversion pixel on "Yes, Call Me"
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17807049464/b4n5CImJ3O4bEPiFiKtC",
        value: 50.0,
        currency: "USD",
      });
    }

    setIsSubmitting(false);

    // Redirect to Augusta
    window.location.href = "https://www.augustapreciousmetals.com/instant-download-thank-you-high";
  };

  const handleDeclineCall = () => {
    if (leadId) {
      // Fire-and-forget: update status to declined_call
      fetch("/api/submit-lead", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadId, action: "decline_call" }),
      }).catch(() => {});
    }

    setStep("declined-guide");
  };

  // Calculate savings bracket - DIRECT MAPPING now
  const calculateSavingsBracket = (savingsRange: string, _allocation: string): string => {
    if (savingsRange === "under-50k") return "under_50k";
    if (savingsRange === "50k-100k") return "50k_100k";
    if (savingsRange === "100k-250k") return "100k_250k";
    if (savingsRange === "250k-500k") return "250k_500k";
    if (savingsRange === "500k+") return "over_500k";
    return "under_50k";
  };

  const handleCalculatorSubmit = async () => {
    // If no leadId captured, just go to success (fallback)
    if (!leadId) {
      setStep("success");
      return;
    }

    const calculatedBracket = calculateSavingsBracket(
      enrichmentData.retirementGoal,
      enrichmentData.progressToGoal
    );

    setIsSubmitting(true);
    try {
      await fetch("/api/submit-lead", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId,
          totalRetirementSavings: calculatedBracket,
          notes: `Current Savings: ${enrichmentData.retirementGoal}, Protect Intent: ${enrichmentData.progressToGoal}%`,
        }),
      });
      setStep("success");
    } catch (e) {
      console.error("Enrichment failed", e);
      setStep("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const progressWidth =
    step === "success" || step === "confirmation" || step === "declined-guide"
      ? 100
      : ((step as number) / 3) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm md:items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-[#000080] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] md:max-h-none overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-20 rounded-full hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Progress bar */}
              {step !== "success" && step !== "thank-you" && step !== "calculator" && step !== "confirmation" && step !== "declined-guide" && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80 text-sm">Step {step} of 3</span>
                    <span className="text-white/80 text-sm">30 seconds</span>
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

              {/* Confirmation Step — "Would you like a specialist to call you?" */}
              {step === "confirmation" && (
                <div className="text-center py-4">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/30">
                    <CheckCircle2 className="h-10 w-10 text-green-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Great, {formData.firstName}!
                  </h2>
                  <p className="text-lg text-white/90 mb-8">
                    Would you like a specialist to call you for a free, no-pressure consultation?
                  </p>

                  {/* Yes, Call Me — GREEN button */}
                  <button
                    onClick={handleConfirmCall}
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-800 text-white text-xl font-bold py-5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 mb-4"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-6 w-6 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <Phone className="h-6 w-6" />
                        Yes, Call Me — It&apos;s Free
                      </>
                    )}
                  </button>

                  {/* Trust signals */}
                  <div className="flex flex-wrap items-center justify-center gap-4 text-white/70 text-sm mb-6">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-green-400" />
                      No obligation
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 text-amber-400" />
                      Zero BBB complaints
                    </span>
                  </div>

                  {/* No thanks link */}
                  <button
                    onClick={handleDeclineCall}
                    className="text-white/50 hover:text-white/70 text-sm py-2 transition-colors underline underline-offset-2"
                  >
                    No thanks, I&apos;ll explore on my own
                  </button>
                </div>
              )}

              {/* Declined Step — redirect to homepage */}
              {step === "declined-guide" && (
                <div className="text-center py-4">
                  <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-amber-500/30">
                    <CheckCircle2 className="h-10 w-10 text-amber-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    No Problem, {formData.firstName}!
                  </h2>
                  <p className="text-lg text-white/80 mb-6">
                    Feel free to explore our resources — everything you need to make an informed decision.
                  </p>

                  <a
                    href="/"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 text-lg font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Explore Our Resources
                    <ArrowRight className="h-5 w-5" />
                  </a>

                  <button
                    onClick={closeModal}
                    className="w-full text-white/50 hover:text-white/70 text-sm py-3 transition-colors mt-3"
                  >
                    Close
                  </button>

                  <div className="flex items-center justify-center gap-2 text-white/60 text-sm mt-4">
                    <ShieldCheck className="h-4 w-4" />
                    Your information is secure
                  </div>
                </div>
              )}

              {/* Success State */}
              {step === "success" && (
                <div className="text-center py-4">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/30">
                    <CheckCircle2 className="h-10 w-10 text-green-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Your Free Guide is Being Sent!
                  </h2>
                  <p className="text-lg text-white/80 mb-6">
                    Check your phone for a text with your personalized Gold IRA report, {formData.firstName}.
                  </p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 mb-6">
                    <p className="text-green-300 font-semibold text-lg">
                      Your guide is on its way!
                    </p>
                    <p className="text-green-200/80 text-sm mt-2">
                      A specialist may follow up to answer questions — only if you&apos;d like.
                    </p>
                  </div>
                  <a
                    href="/"
                    className="w-full bg-[#B22234] hover:bg-[#8b1c2a] text-white text-lg font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Join Thousands of Smart Retirees
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <button
                    onClick={closeModal}
                    className="w-full text-white/70 hover:text-white text-sm py-2 transition-colors"
                  >
                    Close
                  </button>
                  <div className="flex items-center justify-center gap-2 text-white/70 text-sm mt-4">
                    <ShieldCheck className="h-4 w-4" />
                    Your information is secure
                  </div>
                </div>
              )}

              {/* Step 1: Name */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {config.headline}
                    </h2>
                    <p className="text-white/90">{config.subtext}</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white/90 mb-1.5">
                        First Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
                        <input
                          id="firstName"
                          ref={inputRef}
                          type="text"
                          autoFocus
                          autoComplete="given-name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          onKeyDown={handleKeyDown}
                          className="w-full pl-14 pr-4 py-4 text-xl text-slate-900 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                          placeholder="First name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white/90 mb-1.5">
                        Last Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
                        <input
                          id="lastName"
                          type="text"
                          autoComplete="family-name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          onKeyDown={handleKeyDown}
                          className="w-full pl-14 pr-4 py-4 text-xl text-slate-900 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={!formData.firstName.trim() || !formData.lastName.trim()}
                    className="w-full bg-[#B22234] hover:bg-[#8b1c2a] disabled:bg-slate-500 disabled:cursor-not-allowed text-white text-xl font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Continue
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  {/* Benefits */}
                  <div className="space-y-2 pt-2">
                    {config.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-white/80 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Email */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Hi {formData.firstName}!
                    </h2>
                    <p className="text-white/90">Where should we send your info?</p>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
                      <input
                        id="email"
                        ref={inputRef}
                        type="email"
                        autoFocus
                        inputMode="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onKeyDown={handleKeyDown}
                        className="w-full pl-14 pr-4 py-4 text-xl text-slate-900 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={!formData.email.includes("@")}
                    className="w-full bg-[#B22234] hover:bg-[#8b1c2a] disabled:bg-slate-500 disabled:cursor-not-allowed text-white text-xl font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Continue
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => setStep(1)}
                    className="w-full text-white/80 hover:text-white text-base py-3 px-4 rounded-lg hover:bg-white/10 flex items-center justify-center gap-2 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Go Back
                  </button>
                </div>
              )}

              {/* Step 3: Phone */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Almost done, {formData.firstName}!
                    </h2>
                    <p className="text-white/90">Where should we text your free guide?</p>
                    <p className="text-white/70 text-sm mt-1">We&apos;ll send a link to your personalized report. No surprise calls.</p>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
                      <input
                        id="phone"
                        ref={inputRef}
                        type="tel"
                        autoFocus
                        inputMode="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                        onKeyDown={handleKeyDown}
                        className="w-full pl-14 pr-4 py-4 text-xl text-slate-900 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-500/20 border border-red-500/30 text-red-200 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={!formData.phone.trim() || isSubmitting}
                    className="w-full bg-[#B22234] hover:bg-[#8b1c2a] disabled:bg-slate-500 disabled:cursor-not-allowed text-white text-xl font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Connecting you...
                      </>
                    ) : (
                      <>
                        Get My Free Consultation
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setStep(2)}
                    className="w-full text-white/80 hover:text-white text-base py-3 px-4 rounded-lg hover:bg-white/10 flex items-center justify-center gap-2 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Go Back
                  </button>

                  <p className="text-center text-xs text-white/70">
                    By clicking above, you agree to be contacted by Augusta Precious Metals.
                  </p>
                </div>
              )}


              {/* Step: Thank You - After phone submit */}
              {step === "thank-you" && (
                <div className="space-y-5">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500/30">
                      <CheckCircle2 className="h-7 w-7 text-green-400" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Thank You, {formData.firstName}!
                    </h2>
                    <p className="text-white/80 text-sm leading-relaxed">
                      A specialist from Augusta will reach out shortly.
                    </p>
                  </div>

                  {/* Important info box */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <MessageCircle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium text-sm">This is NOT a sales call</p>
                        <p className="text-white/60 text-xs mt-0.5">
                          It&apos;s an educational consultation to answer your questions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium text-sm">Prepare your questions</p>
                        <p className="text-white/60 text-xs mt-0.5">
                          Write down anything you want to know — they&apos;ll be happy to help.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Calculator CTA */}
                  <div className="pt-2">
                    <p className="text-white/60 text-xs text-center mb-3">While you wait...</p>
                    <button
                      onClick={() => setStep("calculator")}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                    >
                      <Calculator className="h-5 w-5" />
                      <span>See Your Gold Protection Potential</span>
                    </button>
                    <p className="text-white/50 text-xs text-center mt-2">
                      Quick 2-question calculator
                    </p>
                  </div>

                  {/* Skip to close */}
                  <button
                    onClick={closeModal}
                    className="w-full text-white/50 hover:text-white/70 text-sm py-2 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}

              {/* Step: Calculator - 2 Smart Questions */}
              {step === "calculator" && (
                <div className="space-y-5">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-amber-500/30">
                      <TrendingUp className="h-6 w-6 text-amber-400" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                      Your Protection Potential
                    </h2>
                    <p className="text-white/60 text-sm">
                      Answer 2 quick questions
                    </p>
                  </div>

                  {/* Question 1: Current Savings (Reality Check) */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      What is your current IRA/401(k) balance?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: "under-50k", label: "Under $50k" },
                        { value: "50k-100k", label: "$50k - $100k" },
                        { value: "100k-250k", label: "$100k - $250k" },
                        { value: "250k-500k", label: "$250k - $500k" },
                        { value: "500k+", label: "$500k+" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setEnrichmentData({ ...enrichmentData, retirementGoal: option.value })}
                          className={`py-3 px-4 rounded-xl border-2 text-center font-medium transition-all ${enrichmentData.retirementGoal === option.value
                            ? "border-amber-400 bg-amber-400/20 text-amber-400"
                            : "border-white/20 bg-white/5 text-white hover:border-white/40"
                            }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Question 2: Progress to Goal */}
                  {enrichmentData.retirementGoal && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-white mb-2">
                        How much of this would you like to protect?
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { value: "25", label: "10-25%", subtext: "Conservative" },
                          { value: "50", label: "25-50%", subtext: "Balanced" },
                          { value: "75", label: "50%+", subtext: "Maximum Protection" },
                          { value: "100", label: "Not sure yet", subtext: "Need Advice" },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => setEnrichmentData({ ...enrichmentData, progressToGoal: option.value })}
                            className={`py-3 px-3 rounded-xl border-2 text-center transition-all ${enrichmentData.progressToGoal === option.value
                              ? "border-amber-400 bg-amber-400/20 text-amber-400"
                              : "border-white/20 bg-white/5 text-white hover:border-white/40"
                              }`}
                          >
                            <span className="font-medium text-sm block">{option.label}</span>
                            <span className="text-xs opacity-60">{option.subtext}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  {enrichmentData.retirementGoal && enrichmentData.progressToGoal && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <button
                        onClick={handleCalculatorSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-[#B22234] hover:bg-[#8b1c2a] disabled:bg-slate-500 text-white text-lg font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Calculating...
                          </>
                        ) : (
                          <>
                            See My Results
                            <ArrowRight className="h-5 w-5" />
                          </>
                        )}
                      </button>
                    </motion.div>
                  )}

                  {/* Back / Skip */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setStep("thank-you")}
                      className="text-white/50 hover:text-white/70 text-sm py-2 transition-colors flex items-center gap-1"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                    <button
                      onClick={() => setStep("success")}
                      className="text-white/50 hover:text-white/70 text-sm py-2 transition-colors"
                    >
                      Skip
                    </button>
                  </div>
                </div>
              )}

              {/* Trust signals (only on steps 1-3) */}
              {step !== "success" && step !== "thank-you" && step !== "calculator" && step !== "confirmation" && step !== "declined-guide" && (
                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  {/* Security */}
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
