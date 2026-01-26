"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Star,
  Mail,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

// ============================================
// TYPE DEFINITIONS
// ============================================

interface QuizResultsProps {
  productType: string;
  answers: Record<string, string>;
  recommendedCompany: {
    id: string;
    name: string;
    affiliateKey: string;
    minInvestment: string;
    highlights: string[];
    bestFor: string;
  };
  alternatives: Array<{
    id: string;
    name: string;
    affiliateKey: string;
    minInvestment: string;
    bestFor: string;
  }>;
  onSaveResults?: (email: string) => void;
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function getProductTypeLabel(productType: string): string {
  const labels: Record<string, string> = {
    "gold-ira": "Gold IRA",
    "silver-ira": "Silver IRA",
    "precious-metals-ira": "Precious Metals IRA",
    "crypto-ira": "Crypto IRA",
    "real-estate-ira": "Real Estate IRA",
    "self-directed-ira": "Self-Directed IRA",
    "solo-401k": "Solo 401(k)",
    "robs-401k": "ROBS 401(k)",
  };
  return labels[productType] || "Retirement Account";
}

function getProductTypeColor(productType: string): string {
  const colors: Record<string, string> = {
    "gold-ira": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    "silver-ira": "bg-slate-400/20 text-slate-300 border-slate-400/30",
    "precious-metals-ira": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    "crypto-ira": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "real-estate-ira": "bg-teal-500/20 text-teal-400 border-teal-500/30",
    "self-directed-ira": "bg-green-500/20 text-green-400 border-green-500/30",
    "solo-401k": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "robs-401k": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  };
  return colors[productType] || "bg-slate-500/20 text-slate-400 border-slate-500/30";
}

// ============================================
// ANIMATION VARIANTS
// ============================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

// ============================================
// MAIN COMPONENT
// ============================================

export function QuizResults({
  productType,
  answers,
  recommendedCompany,
  alternatives,
  onSaveResults,
}: QuizResultsProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [emailError, setEmailError] = useState("");

  // Get affiliate link for primary recommendation
  const primaryAffiliateLink = getTrackedLink(
    AFFILIATE_LINKS[recommendedCompany.affiliateKey as keyof typeof AFFILIATE_LINKS] || "",
    `quiz-results-${productType}`,
    recommendedCompany.id
  );

  // Handle email submission
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      if (onSaveResults) {
        await onSaveResults(email);
      }
      setIsSaved(true);
    } catch {
      setEmailError("Failed to save results. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          {/* Product Type Badge */}
          <div className="inline-flex items-center justify-center mb-6">
            <span
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border",
                getProductTypeColor(productType)
              )}
            >
              <Sparkles className="h-4 w-4" />
              {getProductTypeLabel(productType)}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Your Personalized{" "}
            <span className="text-amber-400">Recommendation</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Based on your answers, we&apos;ve found the perfect match for your retirement goals.
          </p>
        </motion.div>

        {/* ============================================ */}
        {/* PRIMARY RECOMMENDATION CARD */}
        {/* ============================================ */}
        <motion.div
          variants={cardVariants}
          className="relative mb-12"
        >
          {/* Glass-morphism Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            {/* Top Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />

            {/* Best Match Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500 text-slate-900 text-sm font-bold shadow-lg">
                <Star className="h-4 w-4 fill-current" />
                Best Match
              </span>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 pt-10">
              {/* Company Name */}
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-2">
                  {recommendedCompany.name}
                </h2>
                <p className="text-slate-400">{recommendedCompany.bestFor}</p>
              </div>

              {/* Why We Recommend Section */}
              <div className="mb-8">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                  <Shield className="h-5 w-5 text-amber-400" />
                  Why we recommend {recommendedCompany.name}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {recommendedCompany.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Minimum Investment */}
              <div className="flex items-center justify-center gap-2 mb-8 text-slate-400">
                <span>Minimum Investment:</span>
                <span className="font-semibold text-white">
                  {recommendedCompany.minInvestment}
                </span>
              </div>

              {/* Primary CTA */}
              <div className="flex justify-center">
                <Button
                  size="xl"
                  variant="gold"
                  asChild
                  className="w-full sm:w-auto min-w-[300px] text-lg shadow-xl hover:shadow-amber-500/20"
                >
                  <a
                    href={primaryAffiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Your Free Investment Kit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================ */}
        {/* ALTERNATIVES SECTION */}
        {/* ============================================ */}
        {alternatives.length > 0 && (
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-xl font-serif font-bold text-white mb-6 text-center">
              Also Consider
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {alternatives.slice(0, 2).map((company, index) => {
                const affiliateLink = getTrackedLink(
                  AFFILIATE_LINKS[company.affiliateKey as keyof typeof AFFILIATE_LINKS] || "",
                  `quiz-results-alt-${productType}`,
                  company.id
                );

                return (
                  <motion.div
                    key={company.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {company.name}
                    </h4>
                    <p className="text-sm text-slate-400 mb-3">
                      {company.bestFor}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        Min: {company.minInvestment}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="text-amber-400 border-amber-500/30 hover:bg-amber-500/10 hover:border-amber-500/50"
                      >
                        <a
                          href={affiliateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ============================================ */}
        {/* EMAIL CAPTURE SECTION */}
        {/* ============================================ */}
        {onSaveResults && (
          <motion.div variants={itemVariants}>
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">
              {isSaved ? (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 mb-4">
                    <CheckCircle className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Results Saved!
                  </h3>
                  <p className="text-slate-400">
                    We&apos;ve sent your personalized recommendations to your email.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20">
                      <Mail className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Save My Results
                      </h3>
                      <p className="text-sm text-slate-400">
                        Get your personalized recommendation sent to your inbox
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError("");
                        }}
                        placeholder="Enter your email address"
                        className={cn(
                          "w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder:text-slate-500",
                          "focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50",
                          "transition-colors",
                          emailError
                            ? "border-red-500/50"
                            : "border-white/10"
                        )}
                      />
                      {emailError && (
                        <p className="mt-1 text-sm text-red-400">{emailError}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      disabled={isSubmitting}
                      className="whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">
                            <svg
                              className="h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                          </span>
                          Saving...
                        </>
                      ) : (
                        <>
                          Save Results
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="mt-3 text-xs text-slate-500 text-center sm:text-left">
                    We respect your privacy. No spam, unsubscribe anytime.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* ============================================ */}
        {/* TRUST INDICATORS */}
        {/* ============================================ */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            Recommendations are based on your investment goals, timeline, and budget.
            <br />
            All companies listed are vetted for reputation and customer satisfaction.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
