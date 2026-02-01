"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// Augusta customer landing page with affiliate tracking
const AUGUSTA_AFFILIATE_URL = "https://learn.augustapreciousmetals.com/apm-aff-lp-1-v3?apmtrkr_cid=1696&aff_id=5129";

const investmentOptions = [
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k-250k", label: "$100,000 - $250,000" },
  { value: "250k-500k", label: "$250,000 - $500,000" },
  { value: "500k+", label: "$500,000+" },
];

export function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    investmentAmount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\(\)\+]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.investmentAmount) {
      newErrors.investmentAmount = "Please select an investment amount";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // 1. Submit lead to our API (saves to Supabase)
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          investmentAmount: formData.investmentAmount,
          source: "lead-capture-form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        // 2. Fire Google Ads conversion
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "conversion", {
            send_to: "AW-17807049464/b4n5CImJ3O4bEPiFiKtC",
            value: 50.0,
            currency: "USD",
          });
        }

        // 3. Small delay for tracking to fire, then redirect
        await new Promise((resolve) => setTimeout(resolve, 500));
        window.location.href = AUGUSTA_AFFILIATE_URL;
      } else {
        console.error("Lead submission failed:", result.error);
        // Still redirect even if our API fails - don't lose the lead
        window.location.href = AUGUSTA_AFFILIATE_URL;
      }
    } catch (error) {
      console.error("Lead submission error:", error);
      // Still redirect on error - don't lose the lead
      window.location.href = AUGUSTA_AFFILIATE_URL;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const inputStyles = cn(
    "w-full px-4 py-3 rounded-lg",
    "bg-white/5 border border-white/10",
    "text-white placeholder:text-slate-500",
    "focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50",
    "transition-all"
  );

  const errorStyles = "text-red-400 text-xs mt-1";

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-serif font-bold text-white mb-2">
          Request Your Free Kit
        </h2>
        <p className="text-slate-400 text-sm">
          Fill out the form below and a specialist will contact you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={cn(inputStyles, errors.firstName && "border-red-500/50")}
            />
            {errors.firstName && <p className={errorStyles}>{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={cn(inputStyles, errors.lastName && "border-red-500/50")}
            />
            {errors.lastName && <p className={errorStyles}>{errors.lastName}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={cn(inputStyles, errors.email && "border-red-500/50")}
          />
          {errors.email && <p className={errorStyles}>{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={cn(inputStyles, errors.phone && "border-red-500/50")}
          />
          {errors.phone && <p className={errorStyles}>{errors.phone}</p>}
        </div>

        {/* Investment Amount */}
        <div>
          <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Investment Amount</label>
          <select
            name="investmentAmount"
            value={formData.investmentAmount}
            onChange={handleChange}
            className={cn(
              inputStyles,
              !formData.investmentAmount && "text-slate-500",
              errors.investmentAmount && "border-red-500/50"
            )}
          >
            <option value="">How much are you looking to invest?</option>
            {investmentOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.investmentAmount && (
            <p className={errorStyles}>{errors.investmentAmount}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="gold"
          size="xl"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Get My Free Kit
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>

        {/* Privacy Note */}
        <div className="flex items-start gap-2 text-xs text-slate-500">
          <Lock className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <p>
            Your information is secure and will never be shared. By submitting, you agree to receive information about Gold IRAs via phone, email, and text. You can opt out anytime.
          </p>
        </div>
      </form>

      {/* Urgency */}
      <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg text-center">
        <p className="text-sm text-amber-400">
          <strong>Limited Time:</strong> Gold prices are at near all-time highs. Request your kit now to lock in current information.
        </p>
      </div>
    </div>
  );
}
