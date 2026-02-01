"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, ArrowRight, ArrowLeft, CheckCircle2, Loader2, ShieldCheck, Star } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { leadModalVariants } from "@/config/lead-modal-variants";

type Step = 1 | 2 | 3 | "enrichment" | "success";

export default function LeadCaptureModal() {
  const { isOpen, variant, source, closeModal } = useLeadModal();
  const config = leadModalVariants[variant] || leadModalVariants.default;

  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [enrichmentData, setEnrichmentData] = useState({
    investmentAmount: "",
    percentageToProtect: "",
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
        setEnrichmentData({ investmentAmount: "", percentageToProtect: "" });
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
          source: source || `lp-modal-${variant}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        if (result.leadId) {
          setLeadId(result.leadId);
        }

        // Fire Google Ads conversion immediately on initial capture (don't wait for enrichment)
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "conversion", {
            send_to: "AW-17807049464/b4n5CImJ3O4bEPiFiKtC",
            value: 50.0,
            currency: "USD",
          });
        }
        // Move to Enrichment instead of immediately success
        setStep("enrichment");
      } else {
        setError("We couldn't process your request. Please verify your phone number includes the area code, or call us at 1-800-700-1008.");
      }
    } catch {
      setError("Connection issue — your information is safe. Please check your internet and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEnrichmentSubmit = async () => {
    // If no leadId captured, just go to success (fallback)
    if (!leadId) {
      setStep("success");
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch("/api/submit-lead", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId,
          investmentAmount: enrichmentData.investmentAmount,
          percentageToProtect: enrichmentData.percentageToProtect,
        }),
      });
      // Regardless of success/fail of enrichment, show success page
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

  const progressWidth = step === "success" ? 100 : ((step as number) / 3) * 100;

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
              {step !== "success" && (
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


              {/* Step 4: Enrichment (Post-Capture) */}
              {step === "enrichment" && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Help your specialist prepare
                    </h2>
                    <p className="text-white/90">2 quick questions to customize your kit.</p>
                  </div>

                  <div className="space-y-4">
                    {/* Q1: Investment Amount */}
                    <div>
                      <label className="block text-sm font-medium text-amber-400 mb-2">
                        Approximate Retirement Savings?
                      </label>
                      <select
                        value={enrichmentData.investmentAmount}
                        onChange={(e) => setEnrichmentData({ ...enrichmentData, investmentAmount: e.target.value })}
                        className="w-full px-4 py-3 text-lg text-slate-900 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all appearance-none"
                      >
                        <option value="">Select an amount...</option>
                        <option value="$25k-$50k">$25,000 - $50,000</option>
                        <option value="$50k-$100k">$50,000 - $100,000</option>
                        <option value="$100k-$250k">$100,000 - $250,000</option>
                        <option value="$250k-$500k">$250,000 - $500,000</option>
                        <option value="$500k+">$500,000+</option>
                      </select>
                    </div>

                    {/* Q2: Percentage to Protect */}
                    <div>
                      <label className="block text-sm font-medium text-amber-400 mb-2">
                        % you are considering to protect?
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["10-20%", "20-50%", "50%+"].map((pct) => (
                          <button
                            key={pct}
                            onClick={() => setEnrichmentData({ ...enrichmentData, percentageToProtect: pct })}
                            className={`py-3 px-2 rounded-lg text-sm font-semibold border-2 transition-all ${enrichmentData.percentageToProtect === pct
                                ? "bg-amber-400 border-amber-400 text-slate-900"
                                : "bg-white/5 border-white/20 text-white hover:bg-white/10"
                              }`}
                          >
                            {pct}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleEnrichmentSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        Complete Customization
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setStep("success")}
                    className="w-full text-white/50 hover:text-white text-sm py-2 transition-colors uppercase tracking-wider font-medium"
                  >
                    Skip & Show My Kit
                  </button>
                </div>
              )}

              {/* Trust signals (only on steps 1-3) */}
              {step !== "success" && step !== "enrichment" && (
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
