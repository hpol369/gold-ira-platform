"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, ArrowRight, CheckCircle2, Loader2, ShieldCheck, Star } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { leadModalVariants } from "@/config/lead-modal-variants";

type Step = 1 | 2 | 3 | "success";

export default function LeadCaptureModal() {
  const { isOpen, variant, source, closeModal } = useLeadModal();
  const config = leadModalVariants[variant] || leadModalVariants.default;

  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      // Delay reset to allow exit animation
      const timer = setTimeout(() => {
        setStep(1);
        setFormData({ firstName: "", email: "", phone: "" });
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
    if (step === 1 && formData.firstName.trim()) {
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
          lastName: "",
          email: formData.email,
          phone: formData.phone,
          source: source || `lp-modal-${variant}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStep("success");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors z-20 rounded-full hover:bg-white/10"
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
                    <span className="text-white/60 text-sm">Step {step} of 3</span>
                    <span className="text-white/60 text-sm">30 seconds</span>
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
                    You&apos;re All Set, {formData.firstName}!
                  </h2>
                  <p className="text-lg text-white/80 mb-6">
                    A specialist from Augusta will reach out shortly to answer your questions. <strong className="text-white">This is not a sales call</strong> — just helpful guidance.
                  </p>
                  <div className="bg-amber-500/20 border border-amber-500/30 rounded-xl p-4 mb-6">
                    <p className="text-amber-300 font-semibold text-lg">
                      Expect a call within 24 hours
                    </p>
                    <p className="text-amber-200/80 text-sm mt-2">
                      Have questions ready — the team is happy to answer all of them.
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                  <div className="flex items-center justify-center gap-2 text-white/50 text-sm mt-6">
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
                    <p className="text-white/70">{config.subtext}</p>
                  </div>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
                    <input
                      ref={inputRef}
                      type="text"
                      autoFocus
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      onKeyDown={handleKeyDown}
                      className="w-full pl-14 pr-4 py-4 text-xl text-slate-900 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                      placeholder="Your first name"
                    />
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={!formData.firstName.trim()}
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
                    <p className="text-white/70">Where should we send your info?</p>
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
                    <input
                      ref={inputRef}
                      type="email"
                      autoFocus
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onKeyDown={handleKeyDown}
                      className="w-full pl-14 pr-4 py-4 text-xl text-slate-900 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                      placeholder="your@email.com"
                    />
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
                    className="w-full text-white/60 hover:text-white text-sm py-2 transition-colors"
                  >
                    Go back
                  </button>
                </div>
              )}

              {/* Step 3: Phone */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Last step, {formData.firstName}!
                    </h2>
                    <p className="text-white/70">Best number to reach you?</p>
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
                    <input
                      ref={inputRef}
                      type="tel"
                      autoFocus
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onKeyDown={handleKeyDown}
                      className="w-full pl-14 pr-4 py-4 text-xl text-slate-900 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
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
                    className="w-full text-white/60 hover:text-white text-sm py-2 transition-colors"
                  >
                    Go back
                  </button>

                  <p className="text-center text-xs text-white/50">
                    By clicking above, you agree to be contacted by Augusta Precious Metals.
                  </p>
                </div>
              )}

              {/* Trust signals (only on steps 1-3) */}
              {step !== "success" && (
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-4 text-white/50 text-xs">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-4 w-4" />
                      256-bit SSL
                    </span>
                    <span>|</span>
                    <span>Zero BBB Complaints</span>
                    <span>|</span>
                    <span>A+ Rating</span>
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
