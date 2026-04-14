"use client";

import { useState } from "react";
import { CheckCircle2, Lock, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalculatorEmailGateProps {
  calculatorName: string;
  basicResults: React.ReactNode;
  advancedFeatures: string[];
  onEmailSubmit?: (email: string) => void;
}

export function CalculatorEmailGate({
  calculatorName,
  basicResults,
  advancedFeatures,
  onEmailSubmit,
}: CalculatorEmailGateProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitted(true);
    onEmailSubmit?.(trimmed);
  }

  return (
    <div className="mt-8">
      {/* Basic results always visible */}
      <div>{basicResults}</div>

      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-200" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm font-medium text-slate-500 flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-amber-500" />
            Want deeper insights?
          </span>
        </div>
      </div>

      {/* Gate card */}
      <div
        className={cn(
          "rounded-2xl border transition-all duration-300",
          submitted
            ? "border-green-200 bg-green-50/50"
            : "border-slate-200 bg-slate-50"
        )}
      >
        {submitted ? (
          /* Thank you state */
          <div className="p-6 md:p-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
              <CheckCircle2 className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-[#000080] mb-2">
              Your personalized report is ready
            </h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Check your inbox for the full {calculatorName} report with
              advanced analysis.
            </p>

            {/* Unlocked features list */}
            <div className="bg-white border border-green-200 rounded-xl p-5 max-w-sm mx-auto text-left">
              <p className="text-sm font-semibold text-green-700 mb-3 uppercase tracking-wide">
                Unlocked for you
              </p>
              <ul className="space-y-2.5">
                {advancedFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          /* Email capture state */
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[#B22234]/10 flex items-center justify-center flex-shrink-0">
                <Lock className="h-5.5 w-5.5 text-[#B22234]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#000080] leading-snug">
                  Unlock your personalized {calculatorName} report
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Get advanced analysis tailored to your numbers.
                </p>
              </div>
            </div>

            {/* Feature bullets */}
            <ul className="space-y-2.5 mb-6">
              {advancedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#B22234]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#B22234]" />
                  </div>
                  <span className="text-slate-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Email form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="calculator-email" className="sr-only">
                  Email address
                </label>
                <div className="flex gap-2">
                  <input
                    id="calculator-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Enter your email address"
                    className={cn(
                      "flex-1 px-4 py-3 rounded-xl border bg-white text-slate-900 text-sm",
                      "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B22234]/30 focus:border-[#B22234]",
                      error
                        ? "border-red-300 focus:ring-red-300 focus:border-red-400"
                        : "border-slate-200"
                    )}
                    autoComplete="email"
                  />
                  <button
                    type="submit"
                    className={cn(
                      "px-5 py-3 rounded-xl font-semibold text-sm text-white",
                      "bg-[#B22234] hover:bg-[#8B1A29] active:bg-[#6B1420]",
                      "transition-colors duration-150 flex items-center gap-1.5 flex-shrink-0"
                    )}
                  >
                    Get Report
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                {error && (
                  <p className="text-red-500 text-xs mt-1.5">{error}</p>
                )}
              </div>

              <p className="text-xs text-slate-400 text-center">
                Free. No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
