"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import {
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Shield,
  TrendingDown,
  CheckCircle2,
  HelpCircle,
  PieChart,
  DollarSign,
  Building2,
  Calendar,
  Wallet,
} from "lucide-react";
import { getTrackedLink, AFFILIATE_LINKS } from "@/config/affiliates";

// Provider options
const providers = [
  { id: "fidelity", name: "Fidelity", logo: "F" },
  { id: "vanguard", name: "Vanguard", logo: "V" },
  { id: "schwab", name: "Charles Schwab", logo: "S" },
  { id: "troweprice", name: "T. Rowe Price", logo: "T" },
  { id: "other", name: "Other", logo: "?" },
];

// Fund types with stock exposure estimates
const fundTypes = [
  { id: "tdf-2025", name: "Target Date 2025", stockExposure: 45, description: "Conservative mix for near retirement" },
  { id: "tdf-2030", name: "Target Date 2030", stockExposure: 55, description: "Balanced approach" },
  { id: "tdf-2035", name: "Target Date 2035", stockExposure: 70, description: "Growth-focused" },
  { id: "tdf-2040", name: "Target Date 2040", stockExposure: 80, description: "Aggressive growth" },
  { id: "tdf-2045", name: "Target Date 2045+", stockExposure: 90, description: "Maximum stock exposure" },
  { id: "sp500", name: "S&P 500 Index Fund", stockExposure: 100, description: "100% U.S. large cap stocks" },
  { id: "total-stock", name: "Total Stock Market Fund", stockExposure: 100, description: "100% domestic stocks" },
  { id: "balanced", name: "Balanced Fund", stockExposure: 60, description: "60/40 stock/bond mix" },
  { id: "bond", name: "Bond Fund", stockExposure: 0, description: "Fixed income focus" },
  { id: "money-market", name: "Money Market", stockExposure: 0, description: "Cash equivalent" },
  { id: "unknown", name: "I don't know my allocation", stockExposure: 75, description: "We'll estimate based on typical defaults" },
];

// Age ranges
const ageRanges = [
  { id: "under-50", label: "Under 50", description: "Still building wealth" },
  { id: "50-55", label: "50-55", description: "Pre-retirement planning" },
  { id: "56-60", label: "56-60", description: "Approaching retirement" },
  { id: "61-65", label: "61-65", description: "Near retirement" },
  { id: "65-plus", label: "65+", description: "At or in retirement" },
];

// Balance ranges
const balanceRanges = [
  { id: "under-100k", label: "Under $100,000", min: 50000, max: 100000 },
  { id: "100k-250k", label: "$100,000 - $250,000", min: 100000, max: 250000 },
  { id: "250k-500k", label: "$250,000 - $500,000", min: 250000, max: 500000 },
  { id: "500k-1m", label: "$500,000 - $1,000,000", min: 500000, max: 1000000 },
  { id: "over-1m", label: "Over $1,000,000", min: 1000000, max: 2000000 },
];

// Risk assessment logic
function calculateRiskScore(stockExposure: number, ageRange: string): number {
  const ageMultiplier = {
    "under-50": 0.7,
    "50-55": 0.85,
    "56-60": 1.0,
    "61-65": 1.15,
    "65-plus": 1.3,
  }[ageRange] || 1.0;

  // Risk score: higher stock exposure + older age = higher risk
  const baseRisk = stockExposure;
  const adjustedRisk = Math.min(100, baseRisk * ageMultiplier);
  return Math.round(adjustedRisk);
}

function getRiskLevel(score: number): { level: string; color: string; bgColor: string } {
  if (score < 30) return { level: "Low", color: "text-green-400", bgColor: "bg-green-500/20 border-green-500/30" };
  if (score < 50) return { level: "Medium", color: "text-blue-400", bgColor: "bg-blue-500/20 border-blue-500/30" };
  if (score < 75) return { level: "High", color: "text-amber-400", bgColor: "bg-amber-500/20 border-amber-500/30" };
  return { level: "Very High", color: "text-red-400", bgColor: "bg-red-500/20 border-red-500/30" };
}

function getRecommendation(riskScore: number, ageRange: string, stockExposure: number): string {
  const isNearRetirement = ["56-60", "61-65", "65-plus"].includes(ageRange);

  if (riskScore >= 75) {
    return isNearRetirement
      ? "Your portfolio has very high stock exposure for someone nearing or in retirement. A significant market downturn could severely impact your retirement timeline. Financial experts often recommend reducing stock exposure and adding uncorrelated assets like precious metals to protect against market volatility."
      : "Your portfolio is heavily weighted toward stocks. While this may be appropriate for long-term growth, consider diversifying with assets that don't move with the stock market, like gold, to protect against severe downturns.";
  }

  if (riskScore >= 50) {
    return isNearRetirement
      ? "Your stock exposure is moderate but may still leave you vulnerable to significant losses as you approach retirement. Consider rebalancing to include more stable assets and hedges against inflation like precious metals."
      : "Your allocation is moderate. As you get closer to retirement, you may want to gradually reduce stock exposure and add diversifying assets to protect your accumulated savings.";
  }

  if (riskScore >= 30) {
    return "Your portfolio has moderate risk. While you're somewhat protected from market downturns, consider whether adding gold or precious metals could provide additional protection against inflation and currency devaluation.";
  }

  return "Your portfolio has low stock exposure. While this provides stability, make sure you're still positioned for growth to keep pace with inflation. A small allocation to gold can provide both protection and growth potential.";
}

export default function RiskAnalyzerPage() {
  const [step, setStep] = useState(1);
  const [provider, setProvider] = useState("");
  const [fundType, setFundType] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [balanceRange, setBalanceRange] = useState("");
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const selectedFund = fundTypes.find((f) => f.id === fundType);
  const selectedBalance = balanceRanges.find((b) => b.id === balanceRange);
  const stockExposure = selectedFund?.stockExposure ?? 75;
  const riskScore = calculateRiskScore(stockExposure, ageRange);
  const riskLevel = getRiskLevel(riskScore);
  const recommendation = getRecommendation(riskScore, ageRange, stockExposure);

  // Calculate potential loss
  const avgBalance = selectedBalance ? (selectedBalance.min + selectedBalance.max) / 2 : 250000;
  const stockValue = avgBalance * (stockExposure / 100);
  const potentialLoss40 = stockValue * 0.4;

  // Allocation breakdown for pie chart
  const bondExposure = 100 - stockExposure;
  const estimatedAllocation = [
    { label: "Stocks", value: stockExposure, color: "#ef4444" },
    { label: "Bonds", value: bondExposure * 0.8, color: "#3b82f6" },
    { label: "Cash/Other", value: bondExposure * 0.2, color: "#6b7280" },
  ];

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return provider !== "";
      case 2: return fundType !== "";
      case 3: return ageRange !== "";
      case 4: return balanceRange !== "";
      default: return false;
    }
  };

  const resetAnalyzer = () => {
    setStep(1);
    setProvider("");
    setFundType("");
    setAgeRange("");
    setBalanceRange("");
    setShowResults(false);
  };

  const affiliateLink = getTrackedLink(AFFILIATE_LINKS.augusta, "401k-risk-analyzer", "augusta");

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 font-semibold text-sm mb-6">
              <AlertTriangle className="h-4 w-4" />
              FREE RISK ASSESSMENT
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              401(k) Risk Analyzer
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover how much of your retirement savings is exposed to stock market volatility and what could happen in a major downturn.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Tool */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            {!showResults && (
              <div className="mb-8">
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>Step {step} of {totalSteps}</span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}

            {/* Card Container */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <AnimatePresence mode="wait">
                {!showResults ? (
                  <motion.div
                    key={`step-${step}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step 1: Provider Selection */}
                    {step === 1 && (
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-amber-400" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-white">Who is your 401(k) provider?</h2>
                            <p className="text-slate-400 text-sm">Select your retirement plan administrator</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {providers.map((p) => (
                            <button
                              key={p.id}
                              onClick={() => setProvider(p.id)}
                              className={`p-4 rounded-xl text-center transition-all ${
                                provider === p.id
                                  ? "bg-amber-500/20 border-2 border-amber-500"
                                  : "bg-slate-800/50 border border-white/10 hover:border-white/30"
                              }`}
                            >
                              <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center text-xl font-bold ${
                                provider === p.id ? "bg-amber-500 text-slate-900" : "bg-slate-700 text-white"
                              }`}>
                                {p.logo}
                              </div>
                              <div className={`font-medium ${provider === p.id ? "text-amber-400" : "text-white"}`}>
                                {p.name}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Fund Type */}
                    {step === 2 && (
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                            <PieChart className="h-5 w-5 text-amber-400" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-white">What type of fund is your money in?</h2>
                            <p className="text-slate-400 text-sm">Select your primary investment type</p>
                          </div>
                        </div>

                        <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                          {fundTypes.map((fund) => (
                            <button
                              key={fund.id}
                              onClick={() => setFundType(fund.id)}
                              className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between ${
                                fundType === fund.id
                                  ? "bg-amber-500/20 border-2 border-amber-500"
                                  : "bg-slate-800/50 border border-white/10 hover:border-white/30"
                              }`}
                            >
                              <div>
                                <div className={`font-medium ${fundType === fund.id ? "text-amber-400" : "text-white"}`}>
                                  {fund.name}
                                </div>
                                <div className="text-slate-500 text-sm">{fund.description}</div>
                              </div>
                              {fund.id === "unknown" ? (
                                <HelpCircle className={`h-5 w-5 ${fundType === fund.id ? "text-amber-400" : "text-slate-500"}`} />
                              ) : (
                                <div className={`text-sm font-mono ${
                                  fund.stockExposure >= 75 ? "text-red-400" :
                                  fund.stockExposure >= 50 ? "text-amber-400" : "text-green-400"
                                }`}>
                                  {fund.stockExposure}% stocks
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 3: Age Range */}
                    {step === 3 && (
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-amber-400" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-white">What is your age range?</h2>
                            <p className="text-slate-400 text-sm">This helps us assess appropriate risk levels</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {ageRanges.map((age) => (
                            <button
                              key={age.id}
                              onClick={() => setAgeRange(age.id)}
                              className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between ${
                                ageRange === age.id
                                  ? "bg-amber-500/20 border-2 border-amber-500"
                                  : "bg-slate-800/50 border border-white/10 hover:border-white/30"
                              }`}
                            >
                              <div>
                                <div className={`font-medium ${ageRange === age.id ? "text-amber-400" : "text-white"}`}>
                                  {age.label}
                                </div>
                                <div className="text-slate-500 text-sm">{age.description}</div>
                              </div>
                              {ageRange === age.id && (
                                <CheckCircle2 className="h-5 w-5 text-amber-400" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 4: Balance Range */}
                    {step === 4 && (
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                            <Wallet className="h-5 w-5 text-amber-400" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-white">What is your approximate 401(k) balance?</h2>
                            <p className="text-slate-400 text-sm">This helps calculate potential dollar impact</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {balanceRanges.map((balance) => (
                            <button
                              key={balance.id}
                              onClick={() => setBalanceRange(balance.id)}
                              className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between ${
                                balanceRange === balance.id
                                  ? "bg-amber-500/20 border-2 border-amber-500"
                                  : "bg-slate-800/50 border border-white/10 hover:border-white/30"
                              }`}
                            >
                              <div className={`font-medium ${balanceRange === balance.id ? "text-amber-400" : "text-white"}`}>
                                {balance.label}
                              </div>
                              {balanceRange === balance.id && (
                                <CheckCircle2 className="h-5 w-5 text-amber-400" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex gap-3 mt-8">
                      {step > 1 && (
                        <button
                          onClick={handleBack}
                          className="px-6 py-3 bg-slate-800 border border-white/10 rounded-xl text-white font-medium hover:bg-slate-700 transition-all flex items-center gap-2"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Back
                        </button>
                      )}
                      <button
                        onClick={handleNext}
                        disabled={!canProceed()}
                        className={`flex-1 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                          canProceed()
                            ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 hover:from-amber-600 hover:to-amber-700"
                            : "bg-slate-700 text-slate-500 cursor-not-allowed"
                        }`}
                      >
                        {step === totalSteps ? "See My Risk Analysis" : "Continue"}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Results Screen */
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Risk Score Header */}
                    <div className="text-center mb-8">
                      <div className="text-slate-400 text-sm mb-2">YOUR RISK SCORE</div>
                      <div className="relative inline-flex items-center justify-center">
                        <svg className="w-40 h-40" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#1e293b"
                            strokeWidth="8"
                          />
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke={riskScore >= 75 ? "#ef4444" : riskScore >= 50 ? "#f59e0b" : riskScore >= 30 ? "#3b82f6" : "#22c55e"}
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 45}`}
                            strokeDashoffset={`${2 * Math.PI * 45 * (1 - riskScore / 100)}`}
                            transform="rotate(-90 50 50)"
                            initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                            animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - riskScore / 100) }}
                            transition={{ duration: 1, delay: 0.3 }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <motion.span
                            className="text-4xl font-bold text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            {riskScore}
                          </motion.span>
                          <span className="text-slate-400 text-sm">out of 100</span>
                        </div>
                      </div>
                      <div className={`inline-flex items-center gap-2 px-4 py-2 ${riskLevel.bgColor} rounded-full ${riskLevel.color} font-semibold text-sm mt-4 border`}>
                        <AlertTriangle className="h-4 w-4" />
                        {riskLevel.level} Risk
                      </div>
                    </div>

                    {/* Key Stats */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {/* Stock Exposure */}
                      <div className="bg-slate-800/50 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                          <TrendingDown className="h-4 w-4" />
                          ESTIMATED STOCK EXPOSURE
                        </div>
                        <div className="text-3xl font-bold text-white">{stockExposure}%</div>
                        <div className="text-slate-500 text-sm">of your portfolio</div>
                      </div>

                      {/* Potential Loss */}
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-red-400 text-sm mb-2">
                          <DollarSign className="h-4 w-4" />
                          IF MARKET DROPS 40%
                        </div>
                        <div className="text-3xl font-bold text-white">
                          -${potentialLoss40.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </div>
                        <div className="text-red-400 text-sm">potential loss</div>
                      </div>
                    </div>

                    {/* Visual Pie Chart */}
                    <div className="bg-slate-800/50 rounded-xl p-5 mb-6">
                      <div className="text-slate-400 text-sm mb-4">ESTIMATED ALLOCATION BREAKDOWN</div>
                      <div className="flex items-center gap-6">
                        {/* Simple visual bar chart */}
                        <div className="flex-1">
                          <div className="h-8 rounded-lg overflow-hidden flex">
                            {estimatedAllocation.map((item, idx) => (
                              <motion.div
                                key={item.label}
                                className="h-full"
                                style={{ backgroundColor: item.color }}
                                initial={{ width: 0 }}
                                animate={{ width: `${item.value}%` }}
                                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                              />
                            ))}
                          </div>
                          <div className="flex gap-4 mt-3">
                            {estimatedAllocation.map((item) => (
                              <div key={item.label} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                <span className="text-slate-400 text-sm">{item.label}: {Math.round(item.value)}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recommendation */}
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 mb-6">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-white font-semibold mb-2">Our Recommendation</h3>
                          <p className="text-slate-300 text-sm leading-relaxed">{recommendation}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl p-6 text-center">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Protect Your 401(k) with Gold
                      </h3>
                      <p className="text-slate-300 text-sm mb-4">
                        Learn how a Gold IRA can help diversify your retirement savings and protect against market volatility.
                      </p>
                      <a
                        href={affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold text-lg rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/25"
                      >
                        Get Your Free Gold IRA Guide
                        <ArrowRight className="h-5 w-5" />
                      </a>
                      <p className="text-slate-500 text-xs mt-3">
                        From Augusta Precious Metals - #1 Rated Gold IRA Company
                      </p>
                    </div>

                    {/* Start Over */}
                    <button
                      onClick={resetAnalyzer}
                      className="w-full mt-4 py-3 bg-slate-800 border border-white/10 rounded-xl text-slate-400 font-medium hover:bg-slate-700 hover:text-white transition-all"
                    >
                      Start Over
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Check Your Risk */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm mb-4">
                <AlertTriangle className="h-4 w-4" />
                WHY CHECK YOUR 401(K) RISK
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Most Americans Don&apos;t Know What&apos;s in Their 401(k)
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Studies show that over 60% of 401(k) participants couldn&apos;t identify their asset allocation. Understanding your risk exposure is the first step to protecting your retirement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: "78%",
                  label: "of target date funds",
                  description: "are heavily weighted toward stocks, even near retirement",
                },
                {
                  stat: "$126K",
                  label: "average loss in 2008",
                  description: "for those with $500K+ in stock-heavy 401(k)s during the financial crisis",
                },
                {
                  stat: "5-7 yrs",
                  label: "recovery time",
                  description: "it took for many portfolios to recover from the 2008 crash",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-1">{item.stat}</div>
                  <div className="text-white font-medium mb-2">{item.label}</div>
                  <div className="text-slate-400 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Important Disclaimer</h3>
                  <p className="text-slate-400 text-sm">
                    This tool provides estimates based on general assumptions about typical fund allocations. Your actual allocation may differ. This is for educational purposes only and is not financial advice. Past performance does not guarantee future results. Consult with a qualified financial advisor before making investment decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
