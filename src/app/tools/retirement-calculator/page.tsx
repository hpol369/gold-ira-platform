"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { CalculatorCTA } from "@/components/widgets/CalculatorCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import {
  Calculator,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  PiggyBank,
  Wallet,
  Shield,
  Target,
  Info,
} from "lucide-react";
import { SourcesSection } from "@/components/content/SourcesSection";

// Step configuration
const steps = [
  { id: 1, title: "Current Savings", icon: PiggyBank },
  { id: 2, title: "Monthly Expenses", icon: Wallet },
  { id: 3, title: "Age Info", icon: Calendar },
  { id: 4, title: "Income Sources", icon: TrendingUp },
];

// Format currency
function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}k`;
  }
  return `$${value.toLocaleString()}`;
}

// Format full currency
function formatFullCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

// Risk assessment based on market exposure
function getRiskAssessment(
  savingsYears: number,
  monthlyGap: number,
  stockAllocation: number
): { level: string; color: string; bgColor: string; message: string } {
  if (savingsYears < 10) {
    return {
      level: "High Risk",
      color: "text-red-600",
      bgColor: "bg-[rgba(220,38,38,0.08)]0/20 border-red-500/30",
      message:
        "Your savings may not last through retirement. Consider delaying retirement, reducing expenses, or finding additional income sources.",
    };
  }

  if (monthlyGap > 0) {
    return {
      level: "Moderate Risk",
      color: "text-[#D4A94E]",
      bgColor: "bg-[rgba(220,38,38,0.1)] border-[rgba(197,149,46,0.32)]",
      message:
        "You have a monthly income shortfall. Your savings will need to cover this gap, which accelerates depletion.",
    };
  }

  if (stockAllocation > 60 && savingsYears < 25) {
    return {
      level: "Market Vulnerable",
      color: "text-[#D4A94E]",
      bgColor: "bg-[rgba(220,38,38,0.1)] border-[rgba(197,149,46,0.32)]",
      message:
        "High stock market exposure with limited runway. A major market crash could significantly impact your retirement timeline.",
    };
  }

  if (savingsYears >= 30) {
    return {
      level: "Low Risk",
      color: "text-green-600",
      bgColor: "bg-[rgba(46,139,87,0.08)]0/20 border-green-500/30",
      message:
        "Your retirement plan looks solid. Consider diversifying with inflation-protected assets like gold to maintain purchasing power.",
    };
  }

  return {
    level: "Moderate",
    color: "text-blue-600",
    bgColor: "bg-[#121423]0/20 border-blue-500/30",
    message:
      "Your plan is reasonable but has some vulnerability. Consider ways to extend your runway and protect against inflation.",
  };
}

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Tools", url: "/tools" },
  { name: "Retirement Calculator", url: "/tools/retirement-calculator" },
]);

export default function RetirementCalculatorPage() {
  // Step state
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);

  // Form state
  const [totalSavings, setTotalSavings] = useState(500000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(5000);
  const [currentAge, setCurrentAge] = useState(55);
  const [retirementAge, setRetirementAge] = useState(65);
  const [socialSecurity, setSocialSecurity] = useState(2000);
  const [pension, setPension] = useState(0);
  const [partTimeIncome, setPartTimeIncome] = useState(0);
  const [stockAllocation, setStockAllocation] = useState(70);

  // Calculate results
  const results = useMemo(() => {
    const yearsUntilRetirement = Math.max(0, retirementAge - currentAge);
    const monthlyIncome = socialSecurity + pension + partTimeIncome;
    const monthlyGap = Math.max(0, monthlyExpenses - monthlyIncome);
    const annualGap = monthlyGap * 12;

    // 4% rule (aggressive)
    const annualWithdrawal4Percent = totalSavings * 0.04;
    const monthlyWithdrawal4Percent = annualWithdrawal4Percent / 12;

    // 3% rule (conservative)
    const annualWithdrawal3Percent = totalSavings * 0.03;
    const monthlyWithdrawal3Percent = annualWithdrawal3Percent / 12;

    // Calculate years savings will last
    // Using simple calculation (not accounting for investment returns)
    const yearsAt4Percent =
      annualGap > 0 ? totalSavings / annualGap : Infinity;
    const yearsAt3Percent =
      annualGap > 0 ? totalSavings / annualGap : Infinity;

    // More realistic calculation with modest returns
    const annualReturn = 0.05; // 5% annual return assumption
    const inflationRate = 0.03; // 3% inflation
    const realReturn = annualReturn - inflationRate;

    // Calculate years with returns (simplified)
    let balance = totalSavings;
    let years = 0;
    const maxYears = 50;

    while (balance > 0 && years < maxYears) {
      balance = balance * (1 + realReturn) - annualGap;
      years++;
    }

    const yearsWithReturns = years >= maxYears ? Infinity : years;

    // Life expectancy estimate (rough)
    const lifeExpectancy = 85;
    const yearsInRetirement = lifeExpectancy - retirementAge;
    const willMoneyLast = yearsWithReturns >= yearsInRetirement;

    // Determine if fully covered
    const incomeCoversExpenses = monthlyIncome >= monthlyExpenses;

    return {
      yearsUntilRetirement,
      monthlyIncome,
      monthlyGap,
      annualGap,
      annualWithdrawal4Percent,
      monthlyWithdrawal4Percent,
      annualWithdrawal3Percent,
      monthlyWithdrawal3Percent,
      yearsAt4Percent: Math.min(yearsAt4Percent, 50),
      yearsAt3Percent: Math.min(yearsAt3Percent, 50),
      yearsWithReturns: Math.min(yearsWithReturns, 50),
      yearsInRetirement,
      willMoneyLast,
      incomeCoversExpenses,
      ageAtDepletion: retirementAge + Math.floor(yearsWithReturns),
    };
  }, [
    totalSavings,
    monthlyExpenses,
    currentAge,
    retirementAge,
    socialSecurity,
    pension,
    partTimeIncome,
  ]);

  const riskAssessment = getRiskAssessment(
    results.yearsWithReturns,
    results.monthlyGap,
    stockAllocation
  );

  const progress = (currentStep / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetCalculator = () => {
    setCurrentStep(1);
    setShowResults(false);
    setTotalSavings(500000);
    setMonthlyExpenses(5000);
    setCurrentAge(55);
    setRetirementAge(65);
    setSocialSecurity(2000);
    setPension(0);
    setPartTimeIncome(0);
    setStockAllocation(70);
  };

  return (
    <main className="min-h-screen bg-[#0C0D18]">
      <Navbar />
      <SchemaScript schema={breadcrumbs} />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(220,38,38,0.1)] border border-[rgba(197,149,46,0.32)] rounded-full text-[#D4A94E] font-semibold text-sm mb-6">
              <Calculator className="h-4 w-4" />
              FREE RETIREMENT CALCULATOR
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#F6F4EF] mb-4">
              Can I Retire Calculator
            </h1>
            <p className="text-xl text-[#D0CCC4] max-w-2xl mx-auto">
              After 30+ years of early mornings and physical work, you've built a real nest egg.
              This calculator shows if it's enough to stop working - especially if your body
              can't wait until 67.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Calculator */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            {!showResults && (
              <div className="mb-8">
                {/* Step indicators */}
                <div className="flex justify-between mb-4">
                  {steps.map((step, index) => {
                    const StepIcon = step.icon;
                    const isActive = currentStep === step.id;
                    const isCompleted = currentStep > step.id;

                    return (
                      <div
                        key={step.id}
                        className="flex flex-col items-center flex-1"
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all ${
                            isActive
                              ? "bg-[#DC2626] text-white"
                              : isCompleted
                              ? "bg-[rgba(46,139,87,0.08)]0text-[#F6F4EF]"
                              : "bg-[#121423] text-[#A8A39A]"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="h-5 w-5" />
                          ) : (
                            <StepIcon className="h-5 w-5" />
                          )}
                        </div>
                        <span
                          className={`text-xs text-center hidden sm:block ${
                            isActive
                              ? "text-[#D4A94E] font-medium"
                              : "text-[#A8A39A]"
                          }`}
                        >
                          {step.title}
                        </span>
                        {/* Connector line */}
                        {index < steps.length - 1 && (
                          <div
                            className={`absolute h-0.5 top-5 -z-10 ${
                              isCompleted ? "bg-[rgba(46,139,87,0.08)]0" : "bg-slate-700"
                            }`}
                            style={{
                              left: `${(index + 0.5) * 25}%`,
                              width: "25%",
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-[#121423] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#DC2626]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="flex justify-between text-sm text-[#A8A39A] mt-2">
                  <span>
                    Step {currentStep} of {steps.length}
                  </span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
              </div>
            )}

            {/* Card Container */}
            <div className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-2xl p-6 md:p-8">
              <AnimatePresence mode="wait">
                {!showResults ? (
                  <motion.div
                    key={`step-${currentStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step 1: Current Savings */}
                    {currentStep === 1 && (
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-[rgba(220,38,38,0.1)] rounded-xl flex items-center justify-center">
                            <PiggyBank className="h-5 w-5 text-[#D4A94E]" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-[#F6F4EF]">
                              What are your total retirement savings?
                            </h2>
                            <p className="text-[#D0CCC4] text-sm">
                              Include 401(k), IRA, and other retirement accounts
                            </p>
                          </div>
                        </div>

                        {/* Savings Display */}
                        <div className="bg-[#0C0D18] rounded-xl p-6 mb-6">
                          <div className="text-center mb-4">
                            <div className="text-4xl md:text-5xl font-bold text-[#F6F4EF] mb-2">
                              {formatFullCurrency(totalSavings)}
                            </div>
                            <div className="text-[#A8A39A]">
                              Total Retirement Savings
                            </div>
                          </div>

                          {/* Slider */}
                          <div className="relative pt-4">
                            <input
                              type="range"
                              min={0}
                              max={5000000}
                              step={10000}
                              value={totalSavings}
                              onChange={(e) =>
                                setTotalSavings(Number(e.target.value))
                              }
                              className="w-full h-2 bg-[#2A2D42] rounded-lg appearance-none cursor-pointer accent-[#C5952E]"
                            />
                            <div className="flex justify-between text-xs text-[#A8A39A] mt-2">
                              <span>$0</span>
                              <span>$1M</span>
                              <span>$2M</span>
                              <span>$3M</span>
                              <span>$4M</span>
                              <span>$5M</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick select buttons */}
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                          {[100000, 300000, 500000, 1000000, 2000000].map(
                            (amount) => (
                              <button
                                key={amount}
                                onClick={() => setTotalSavings(amount)}
                                className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                                  totalSavings === amount
                                    ? "bg-[#DC2626] text-white"
                                    : "bg-[#121423] text-[#D0CCC4] hover:bg-[#2A2D42]"
                                }`}
                              >
                                {formatCurrency(amount)}
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Monthly Expenses */}
                    {currentStep === 2 && (
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-[rgba(220,38,38,0.1)] rounded-xl flex items-center justify-center">
                            <Wallet className="h-5 w-5 text-[#D4A94E]" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-[#F6F4EF]">
                              Estimated monthly expenses in retirement?
                            </h2>
                            <p className="text-[#D0CCC4] text-sm">
                              Include housing, healthcare, food, and lifestyle
                              costs
                            </p>
                          </div>
                        </div>

                        {/* Expenses Display */}
                        <div className="bg-[#0C0D18] rounded-xl p-6 mb-6">
                          <div className="text-center mb-4">
                            <div className="text-4xl md:text-5xl font-bold text-[#F6F4EF] mb-2">
                              {formatFullCurrency(monthlyExpenses)}
                              <span className="text-lg text-[#A8A39A] font-normal">
                                /month
                              </span>
                            </div>
                            <div className="text-[#A8A39A]">
                              ={" "}
                              {formatFullCurrency(monthlyExpenses * 12)}{" "}
                              per year
                            </div>
                          </div>

                          {/* Slider */}
                          <div className="relative pt-4">
                            <input
                              type="range"
                              min={2000}
                              max={15000}
                              step={100}
                              value={monthlyExpenses}
                              onChange={(e) =>
                                setMonthlyExpenses(Number(e.target.value))
                              }
                              className="w-full h-2 bg-[#2A2D42] rounded-lg appearance-none cursor-pointer accent-[#C5952E]"
                            />
                            <div className="flex justify-between text-xs text-[#A8A39A] mt-2">
                              <span>$2k</span>
                              <span>$5k</span>
                              <span>$8k</span>
                              <span>$11k</span>
                              <span>$15k</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick select buttons */}
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                          {[3000, 4000, 5000, 7500, 10000].map((amount) => (
                            <button
                              key={amount}
                              onClick={() => setMonthlyExpenses(amount)}
                              className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                                monthlyExpenses === amount
                                  ? "bg-[#DC2626] text-white"
                                  : "bg-[#121423] text-[#D0CCC4] hover:bg-[#2A2D42]"
                              }`}
                            >
                              {formatCurrency(amount)}
                            </button>
                          ))}
                        </div>

                        {/* Expense guidance */}
                        <div className="mt-6 p-4 bg-[#121423] border border-blue-200 rounded-xl">
                          <div className="flex items-start gap-3">
                            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-[#D0CCC4]">
                              <strong className="text-[#F6F4EF]">
                                Rule of thumb:
                              </strong>{" "}
                              Most retirees need 70-80% of their pre-retirement
                              income. Healthcare costs often increase while work
                              expenses decrease.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Age Info */}
                    {currentStep === 3 && (
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-[rgba(220,38,38,0.1)] rounded-xl flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-[#D4A94E]" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-[#F6F4EF]">
                              Your age information
                            </h2>
                            <p className="text-[#D0CCC4] text-sm">
                              This helps calculate your retirement timeline
                            </p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {/* Current Age */}
                          <div className="bg-[#0C0D18] rounded-xl p-5">
                            <label className="block text-sm text-[#A8A39A] mb-3">
                              Current Age
                            </label>
                            <div className="flex items-center gap-4">
                              <input
                                type="number"
                                min={25}
                                max={80}
                                value={currentAge}
                                onChange={(e) =>
                                  setCurrentAge(Number(e.target.value))
                                }
                                className="flex-1 bg-[#161828] border border-[#2A2D42] rounded-lg px-4 py-3 text-2xl font-bold text-[#F6F4EF] text-center focus:outline-none focus:ring-2 focus:ring-[#B22234]"
                              />
                              <span className="text-[#A8A39A]">years old</span>
                            </div>
                            <input
                              type="range"
                              min={25}
                              max={80}
                              value={currentAge}
                              onChange={(e) =>
                                setCurrentAge(Number(e.target.value))
                              }
                              className="w-full h-2 bg-[#2A2D42] rounded-lg appearance-none cursor-pointer accent-[#C5952E] mt-3"
                            />
                          </div>

                          {/* Retirement Age */}
                          <div className="bg-[#0C0D18] rounded-xl p-5">
                            <label className="block text-sm text-[#A8A39A] mb-3">
                              Desired Retirement Age
                            </label>
                            <div className="flex items-center gap-4">
                              <input
                                type="number"
                                min={currentAge}
                                max={80}
                                value={retirementAge}
                                onChange={(e) =>
                                  setRetirementAge(Number(e.target.value))
                                }
                                className="flex-1 bg-[#161828] border border-[#2A2D42] rounded-lg px-4 py-3 text-2xl font-bold text-[#F6F4EF] text-center focus:outline-none focus:ring-2 focus:ring-[#B22234]"
                              />
                              <span className="text-[#A8A39A]">years old</span>
                            </div>
                            <input
                              type="range"
                              min={currentAge}
                              max={80}
                              value={retirementAge}
                              onChange={(e) =>
                                setRetirementAge(Number(e.target.value))
                              }
                              className="w-full h-2 bg-[#2A2D42] rounded-lg appearance-none cursor-pointer accent-[#C5952E] mt-3"
                            />
                          </div>

                          {/* Years until retirement indicator */}
                          <div className="flex items-center justify-center gap-2 text-[#D0CCC4]">
                            <Clock className="h-5 w-5 text-[#D4A94E]" />
                            <span>
                              <strong className="text-[#F6F4EF]">
                                {Math.max(0, retirementAge - currentAge)} years
                              </strong>{" "}
                              until retirement
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Income Sources */}
                    {currentStep === 4 && (
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-[rgba(220,38,38,0.1)] rounded-xl flex items-center justify-center">
                            <TrendingUp className="h-5 w-5 text-[#D4A94E]" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-[#F6F4EF]">
                              Expected income in retirement
                            </h2>
                            <p className="text-[#D0CCC4] text-sm">
                              Include all sources of retirement income
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {/* Social Security */}
                          <div className="bg-[#0C0D18] rounded-xl p-5">
                            <div className="flex items-center justify-between mb-3">
                              <label className="text-sm text-[#D0CCC4] font-medium">
                                Social Security (monthly)
                              </label>
                              <span className="text-[#D4A94E] font-bold">
                                {formatFullCurrency(socialSecurity)}
                              </span>
                            </div>
                            <input
                              type="range"
                              min={0}
                              max={5000}
                              step={100}
                              value={socialSecurity}
                              onChange={(e) =>
                                setSocialSecurity(Number(e.target.value))
                              }
                              className="w-full h-2 bg-[#2A2D42] rounded-lg appearance-none cursor-pointer accent-[#C5952E]"
                            />
                            <div className="flex justify-between text-xs text-[#A8A39A] mt-1">
                              <span>$0</span>
                              <span>$5,000</span>
                            </div>
                          </div>

                          {/* Pension */}
                          <div className="bg-[#0C0D18] rounded-xl p-5">
                            <div className="flex items-center justify-between mb-3">
                              <label className="text-sm text-[#D0CCC4] font-medium">
                                Pension (monthly)
                              </label>
                              <span className="text-[#D4A94E] font-bold">
                                {formatFullCurrency(pension)}
                              </span>
                            </div>
                            <input
                              type="range"
                              min={0}
                              max={5000}
                              step={100}
                              value={pension}
                              onChange={(e) =>
                                setPension(Number(e.target.value))
                              }
                              className="w-full h-2 bg-[#2A2D42] rounded-lg appearance-none cursor-pointer accent-[#C5952E]"
                            />
                            <div className="flex justify-between text-xs text-[#A8A39A] mt-1">
                              <span>$0</span>
                              <span>$5,000</span>
                            </div>
                          </div>

                          {/* Part-time work */}
                          <div className="bg-[#0C0D18] rounded-xl p-5">
                            <div className="flex items-center justify-between mb-3">
                              <label className="text-sm text-[#D0CCC4] font-medium">
                                Part-time Work (monthly)
                              </label>
                              <span className="text-[#D4A94E] font-bold">
                                {formatFullCurrency(partTimeIncome)}
                              </span>
                            </div>
                            <input
                              type="range"
                              min={0}
                              max={3000}
                              step={100}
                              value={partTimeIncome}
                              onChange={(e) =>
                                setPartTimeIncome(Number(e.target.value))
                              }
                              className="w-full h-2 bg-[#2A2D42] rounded-lg appearance-none cursor-pointer accent-[#C5952E]"
                            />
                            <div className="flex justify-between text-xs text-[#A8A39A] mt-1">
                              <span>$0</span>
                              <span>$3,000</span>
                            </div>
                          </div>

                          {/* Stock allocation (for risk assessment) */}
                          <div className="bg-[#0C0D18] rounded-xl p-5">
                            <div className="flex items-center justify-between mb-3">
                              <label className="text-sm text-[#D0CCC4] font-medium">
                                Current Stock Market Exposure
                              </label>
                              <span className="text-[#D4A94E] font-bold">
                                {stockAllocation}%
                              </span>
                            </div>
                            <input
                              type="range"
                              min={0}
                              max={100}
                              step={5}
                              value={stockAllocation}
                              onChange={(e) =>
                                setStockAllocation(Number(e.target.value))
                              }
                              className="w-full h-2 bg-[#2A2D42] rounded-lg appearance-none cursor-pointer accent-[#C5952E]"
                            />
                            <div className="flex justify-between text-xs text-[#A8A39A] mt-1">
                              <span>0% (All bonds)</span>
                              <span>100% (All stocks)</span>
                            </div>
                          </div>

                          {/* Total income summary */}
                          <div className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-xl p-4 mt-4">
                            <div className="flex items-center justify-between">
                              <span className="text-[#D0CCC4]">
                                Total Monthly Income:
                              </span>
                              <span className="text-2xl font-bold text-green-600">
                                {formatFullCurrency(
                                  socialSecurity + pension + partTimeIncome
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex gap-3 mt-8">
                      {currentStep > 1 && (
                        <button
                          onClick={handleBack}
                          className="px-6 py-3 bg-[#121423] border border-[#2A2D42] rounded-xl text-[#F6F4EF] font-medium hover:bg-[#2A2D42] transition-all flex items-center gap-2"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Back
                        </button>
                      )}
                      <button
                        onClick={handleNext}
                        className="flex-1 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 bg-[#DC2626] text-[#F6F4EF] hover:bg-[#991B1B]"
                      >
                        {currentStep === steps.length
                          ? "See My Results"
                          : "Continue"}
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
                    {/* Main Result */}
                    <div className="text-center mb-8">
                      <div className="text-[#D0CCC4] text-sm mb-2">
                        YOUR SAVINGS WILL LAST
                      </div>
                      <div className="relative inline-flex items-center justify-center mb-4">
                        <motion.div
                          className={`text-6xl md:text-7xl font-bold ${
                            results.yearsWithReturns >= 30
                              ? "text-green-600"
                              : results.yearsWithReturns >= 20
                              ? "text-[#D4A94E]"
                              : "text-red-600"
                          }`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.2,
                          }}
                        >
                          {results.incomeCoversExpenses
                            ? "30+"
                            : results.yearsWithReturns >= 50
                            ? "50+"
                            : Math.round(results.yearsWithReturns)}
                        </motion.div>
                      </div>
                      <div className="text-xl text-[#F6F4EF] font-medium">
                        years in retirement
                      </div>
                      {!results.incomeCoversExpenses && (
                        <div className="text-[#A8A39A] mt-2">
                          Money runs out around age {results.ageAtDepletion}
                        </div>
                      )}
                    </div>

                    {/* Visual Timeline */}
                    <div className="bg-[#0C0D18] rounded-xl p-5 mb-6">
                      <div className="text-[#D0CCC4] text-sm mb-4">
                        RETIREMENT TIMELINE
                      </div>
                      <div className="relative">
                        {/* Timeline bar */}
                        <div className="h-8 bg-slate-700 rounded-lg overflow-hidden flex">
                          <motion.div
                            className={`h-full ${
                              results.yearsWithReturns >= 30
                                ? "bg-gradient-to-r from-green-500 to-green-600"
                                : results.yearsWithReturns >= 20
                                ? "bg-[#DC2626]"
                                : "bg-gradient-to-r from-red-500 to-red-600"
                            }`}
                            initial={{ width: 0 }}
                            animate={{
                              width: `${Math.min(
                                100,
                                (results.yearsWithReturns /
                                  results.yearsInRetirement) *
                                  100
                              )}%`,
                            }}
                            transition={{ duration: 1, delay: 0.3 }}
                          />
                        </div>

                        {/* Timeline markers */}
                        <div className="flex justify-between mt-2 text-xs">
                          <div className="text-center">
                            <div className="text-[#F6F4EF] font-medium">
                              {retirementAge}
                            </div>
                            <div className="text-[#A8A39A]">Retire</div>
                          </div>
                          <div className="text-center">
                            <div className="text-[#F6F4EF] font-medium">
                              {retirementAge + 10}
                            </div>
                            <div className="text-[#A8A39A]">+10 yrs</div>
                          </div>
                          <div className="text-center">
                            <div className="text-[#F6F4EF] font-medium">
                              {retirementAge + 20}
                            </div>
                            <div className="text-[#A8A39A]">+20 yrs</div>
                          </div>
                          <div className="text-center">
                            <div className="text-[#F6F4EF] font-medium">85</div>
                            <div className="text-[#A8A39A]">Life exp.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Metrics Grid */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {/* Monthly Withdrawal */}
                      <div className="bg-[#0C0D18] rounded-xl p-4">
                        <div className="flex items-center gap-2 text-[#D0CCC4] text-sm mb-2">
                          <DollarSign className="h-4 w-4" />
                          MONTHLY WITHDRAWAL (4% RULE)
                        </div>
                        <div className="text-2xl font-bold text-[#F6F4EF]">
                          {formatFullCurrency(results.monthlyWithdrawal4Percent)}
                        </div>
                        <div className="text-[#A8A39A] text-sm">
                          {formatFullCurrency(
                            results.annualWithdrawal4Percent
                          )}{" "}
                          per year
                        </div>
                      </div>

                      {/* Gap Analysis */}
                      <div
                        className={`rounded-xl p-4 ${
                          results.monthlyGap > 0
                            ? "bg-[rgba(220,38,38,0.08)] border border-red-200"
                            : "bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)]"
                        }`}
                      >
                        <div
                          className={`flex items-center gap-2 text-sm mb-2 ${
                            results.monthlyGap > 0
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          <Target className="h-4 w-4" />
                          MONTHLY GAP ANALYSIS
                        </div>
                        <div
                          className={`text-2xl font-bold ${
                            results.monthlyGap > 0
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {results.monthlyGap > 0
                            ? `-${formatFullCurrency(results.monthlyGap)}`
                            : "Covered"}
                        </div>
                        <div className="text-[#A8A39A] text-sm">
                          {results.monthlyGap > 0
                            ? "Shortfall per month from income"
                            : "Income covers expenses"}
                        </div>
                      </div>
                    </div>

                    {/* Conservative Scenario */}
                    <div className="bg-[#121423] border border-blue-200 rounded-xl p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-[#F6F4EF] font-semibold mb-1">
                            Conservative 3% Rule Scenario
                          </h3>
                          <p className="text-[#D0CCC4] text-sm">
                            Using a safer 3% withdrawal rate, you could withdraw{" "}
                            <strong className="text-[#F6F4EF]">
                              {formatFullCurrency(
                                results.monthlyWithdrawal3Percent
                              )}
                              /month
                            </strong>{" "}
                            to make your savings last longer during market
                            downturns.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Risk Assessment */}
                    <div
                      className={`${riskAssessment.bgColor} border rounded-xl p-5 mb-6`}
                    >
                      <div className="flex items-start gap-3">
                        <AlertTriangle
                          className={`h-5 w-5 ${riskAssessment.color} flex-shrink-0 mt-0.5`}
                        />
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-[#F6F4EF] font-semibold">
                              Risk Assessment
                            </h3>
                            <span
                              className={`text-sm font-medium ${riskAssessment.color}`}
                            >
                              {riskAssessment.level}
                            </span>
                          </div>
                          <p className="text-[#D0CCC4] text-sm leading-relaxed">
                            {riskAssessment.message}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Gold IRA Recommendation */}
                    {stockAllocation > 50 && (
                      <div className="bg-[rgba(220,38,38,0.1)] border border-[rgba(197,149,46,0.32)] rounded-xl p-5 mb-6">
                        <div className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="text-[#F6F4EF] font-semibold mb-2">
                              Diversification Recommendation
                            </h3>
                            <p className="text-[#D0CCC4] text-sm leading-relaxed mb-3">
                              With{" "}
                              <strong className="text-[#F6F4EF]">
                                {stockAllocation}% in stocks
                              </strong>
                              , your retirement is heavily exposed to market
                              volatility. A 2008-style crash could reduce your
                              savings by{" "}
                              <strong className="text-red-600">
                                {formatFullCurrency(
                                  totalSavings * (stockAllocation / 100) * 0.4
                                )}
                              </strong>{" "}
                              or more.
                            </p>
                            <p className="text-[#D0CCC4] text-sm">
                              Financial experts often recommend allocating 5-15%
                              of retirement savings to precious metals like gold
                              to:
                            </p>
                            <ul className="mt-2 space-y-1 text-sm text-[#D0CCC4]">
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                Hedge against market crashes
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                Protect against inflation
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                Reduce overall portfolio volatility
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Summary Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                      <div className="bg-[#0C0D18] rounded-lg p-3 text-center">
                        <div className="text-[#A8A39A] text-xs mb-1">
                          Total Savings
                        </div>
                        <div className="text-[#F6F4EF] font-bold">
                          {formatCurrency(totalSavings)}
                        </div>
                      </div>
                      <div className="bg-[#0C0D18] rounded-lg p-3 text-center">
                        <div className="text-[#A8A39A] text-xs mb-1">
                          Monthly Expenses
                        </div>
                        <div className="text-[#F6F4EF] font-bold">
                          {formatCurrency(monthlyExpenses)}
                        </div>
                      </div>
                      <div className="bg-[#0C0D18] rounded-lg p-3 text-center">
                        <div className="text-[#A8A39A] text-xs mb-1">
                          Monthly Income
                        </div>
                        <div className="text-[#F6F4EF] font-bold">
                          {formatCurrency(results.monthlyIncome)}
                        </div>
                      </div>
                      <div className="bg-[#0C0D18] rounded-lg p-3 text-center">
                        <div className="text-[#A8A39A] text-xs mb-1">
                          Years to Retire
                        </div>
                        <div className="text-[#F6F4EF] font-bold">
                          {results.yearsUntilRetirement}
                        </div>
                      </div>
                    </div>

                    {/* Contextual CTA */}
                    <CalculatorCTA calculatorType="retirement" trackSource="tools-retirement-calculator" />

                    {/* Augusta CTA */}
                    <AugustaCTA
                      variant="footer"
                      headline="You've Earned Every Dollar. Let's Keep It That Way."
                      subheadline="Your nest egg represents decades of showing up. A Gold IRA can help protect it from the next market crash - so you retire on your terms, not Wall Street's."
                      linkContext="default"
                      trackSource="retirement-calculator"
                    />

                    {/* Start Over */}
                    <button
                      onClick={resetCalculator}
                      className="w-full mt-6 py-3 bg-[#121423] border border-[#2A2D42] rounded-xl text-[#A8A39A] font-medium hover:bg-[#2A2D42] hover:text-[#F6F4EF] transition-all"
                    >
                      Start Over with New Numbers
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </section>

      {/* Educational Section */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-[#D4A94E] font-semibold text-sm mb-4">
                <Info className="h-4 w-4" />
                RETIREMENT PLANNING BASICS
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F6F4EF] mb-4">
                Understanding the 4% Rule
              </h2>
              <p className="text-[#D0CCC4] max-w-2xl mx-auto">
                The 4% rule is a guideline suggesting you can withdraw 4% of
                your savings annually without running out of money for 30 years.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "$300,000 Savings",
                  withdrawal: "$12,000/year",
                  monthly: "$1,000/month",
                  description:
                    "May work for low-cost areas with Social Security",
                },
                {
                  title: "$500,000 Savings",
                  withdrawal: "$20,000/year",
                  monthly: "$1,667/month",
                  description:
                    "Decent foundation with additional income sources",
                },
                {
                  title: "$1,000,000 Savings",
                  withdrawal: "$40,000/year",
                  monthly: "$3,333/month",
                  description:
                    "Comfortable retirement for most retirees",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-[#D4A94E] mb-3">
                    {item.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-[#A8A39A]">4% Withdrawal:</span>
                      <span className="text-[#F6F4EF] font-medium">
                        {item.withdrawal}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A8A39A]">Monthly:</span>
                      <span className="text-[#F6F4EF] font-medium">
                        {item.monthly}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#A8A39A] text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#F6F4EF] font-semibold mb-2">
                    Important Disclaimer
                  </h3>
                  <p className="text-[#D0CCC4] text-sm">
                    This calculator provides estimates based on simplified
                    assumptions. Actual results will vary based on investment
                    returns, inflation, taxes, healthcare costs, and other
                    factors. This is for educational purposes only and is not
                    financial advice. Past performance does not guarantee future
                    results. Consult with a qualified financial advisor before
                    making retirement decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-[#0C0D18]">
        <Container>
          <AutoRelatedContent currentUrl="/tools/retirement-calculator" />
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto px-4 pb-12">
            <SourcesSection
              sources={[
                { name: "IRS — Retirement Plan Contribution Limits", url: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-contributions", accessDate: "Mar 2026" },
                { name: "SSA — Retirement Benefits", url: "https://www.ssa.gov/benefits/retirement/", accessDate: "Mar 2026" },
                { name: "BLS — Consumer Expenditure Survey", url: "https://www.bls.gov/cex/", accessDate: "Mar 2026" },
              ]}
              lastVerified="March 2026"
            />
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
