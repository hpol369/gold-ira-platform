"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
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
      color: "text-red-400",
      bgColor: "bg-red-500/20 border-red-500/30",
      message:
        "Your savings may not last through retirement. Consider delaying retirement, reducing expenses, or finding additional income sources.",
    };
  }

  if (monthlyGap > 0) {
    return {
      level: "Moderate Risk",
      color: "text-amber-400",
      bgColor: "bg-amber-500/20 border-amber-500/30",
      message:
        "You have a monthly income shortfall. Your savings will need to cover this gap, which accelerates depletion.",
    };
  }

  if (stockAllocation > 60 && savingsYears < 25) {
    return {
      level: "Market Vulnerable",
      color: "text-amber-400",
      bgColor: "bg-amber-500/20 border-amber-500/30",
      message:
        "High stock market exposure with limited runway. A major market crash could significantly impact your retirement timeline.",
    };
  }

  if (savingsYears >= 30) {
    return {
      level: "Low Risk",
      color: "text-green-400",
      bgColor: "bg-green-500/20 border-green-500/30",
      message:
        "Your retirement plan looks solid. Consider diversifying with inflation-protected assets like gold to maintain purchasing power.",
    };
  }

  return {
    level: "Moderate",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20 border-blue-500/30",
    message:
      "Your plan is reasonable but has some vulnerability. Consider ways to extend your runway and protect against inflation.",
  };
}

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
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 font-semibold text-sm mb-6">
              <Calculator className="h-4 w-4" />
              FREE RETIREMENT CALCULATOR
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Can I Retire Calculator
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Find out if your savings will last through retirement. See exactly
              how long your money will last and what you can do to improve your
              outlook.
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
                              ? "bg-amber-500 text-slate-900"
                              : isCompleted
                              ? "bg-green-500 text-white"
                              : "bg-slate-800 text-slate-500"
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
                              ? "text-amber-400 font-medium"
                              : "text-slate-500"
                          }`}
                        >
                          {step.title}
                        </span>
                        {/* Connector line */}
                        {index < steps.length - 1 && (
                          <div
                            className={`absolute h-0.5 top-5 -z-10 ${
                              isCompleted ? "bg-green-500" : "bg-slate-700"
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
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                  <span>
                    Step {currentStep} of {steps.length}
                  </span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
              </div>
            )}

            {/* Card Container */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
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
                          <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                            <PiggyBank className="h-5 w-5 text-amber-400" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-white">
                              What are your total retirement savings?
                            </h2>
                            <p className="text-slate-400 text-sm">
                              Include 401(k), IRA, and other retirement accounts
                            </p>
                          </div>
                        </div>

                        {/* Savings Display */}
                        <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
                          <div className="text-center mb-4">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                              {formatFullCurrency(totalSavings)}
                            </div>
                            <div className="text-slate-400">
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
                              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2">
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
                                    ? "bg-amber-500 text-slate-900"
                                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
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
                          <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                            <Wallet className="h-5 w-5 text-amber-400" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-white">
                              Estimated monthly expenses in retirement?
                            </h2>
                            <p className="text-slate-400 text-sm">
                              Include housing, healthcare, food, and lifestyle
                              costs
                            </p>
                          </div>
                        </div>

                        {/* Expenses Display */}
                        <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
                          <div className="text-center mb-4">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                              {formatFullCurrency(monthlyExpenses)}
                              <span className="text-lg text-slate-400 font-normal">
                                /month
                              </span>
                            </div>
                            <div className="text-slate-400">
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
                              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2">
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
                                  ? "bg-amber-500 text-slate-900"
                                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                              }`}
                            >
                              {formatCurrency(amount)}
                            </button>
                          ))}
                        </div>

                        {/* Expense guidance */}
                        <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                          <div className="flex items-start gap-3">
                            <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-slate-300">
                              <strong className="text-white">
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
                          <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-amber-400" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-white">
                              Your age information
                            </h2>
                            <p className="text-slate-400 text-sm">
                              This helps calculate your retirement timeline
                            </p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {/* Current Age */}
                          <div className="bg-slate-800/50 rounded-xl p-5">
                            <label className="block text-sm text-slate-400 mb-3">
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
                                className="flex-1 bg-slate-700 border border-white/10 rounded-lg px-4 py-3 text-2xl font-bold text-white text-center focus:outline-none focus:ring-2 focus:ring-amber-500"
                              />
                              <span className="text-slate-400">years old</span>
                            </div>
                            <input
                              type="range"
                              min={25}
                              max={80}
                              value={currentAge}
                              onChange={(e) =>
                                setCurrentAge(Number(e.target.value))
                              }
                              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500 mt-3"
                            />
                          </div>

                          {/* Retirement Age */}
                          <div className="bg-slate-800/50 rounded-xl p-5">
                            <label className="block text-sm text-slate-400 mb-3">
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
                                className="flex-1 bg-slate-700 border border-white/10 rounded-lg px-4 py-3 text-2xl font-bold text-white text-center focus:outline-none focus:ring-2 focus:ring-amber-500"
                              />
                              <span className="text-slate-400">years old</span>
                            </div>
                            <input
                              type="range"
                              min={currentAge}
                              max={80}
                              value={retirementAge}
                              onChange={(e) =>
                                setRetirementAge(Number(e.target.value))
                              }
                              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500 mt-3"
                            />
                          </div>

                          {/* Years until retirement indicator */}
                          <div className="flex items-center justify-center gap-2 text-slate-300">
                            <Clock className="h-5 w-5 text-amber-400" />
                            <span>
                              <strong className="text-white">
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
                          <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                            <TrendingUp className="h-5 w-5 text-amber-400" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-white">
                              Expected income in retirement
                            </h2>
                            <p className="text-slate-400 text-sm">
                              Include all sources of retirement income
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {/* Social Security */}
                          <div className="bg-slate-800/50 rounded-xl p-5">
                            <div className="flex items-center justify-between mb-3">
                              <label className="text-sm text-slate-300 font-medium">
                                Social Security (monthly)
                              </label>
                              <span className="text-amber-400 font-bold">
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
                              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                              <span>$0</span>
                              <span>$5,000</span>
                            </div>
                          </div>

                          {/* Pension */}
                          <div className="bg-slate-800/50 rounded-xl p-5">
                            <div className="flex items-center justify-between mb-3">
                              <label className="text-sm text-slate-300 font-medium">
                                Pension (monthly)
                              </label>
                              <span className="text-amber-400 font-bold">
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
                              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                              <span>$0</span>
                              <span>$5,000</span>
                            </div>
                          </div>

                          {/* Part-time work */}
                          <div className="bg-slate-800/50 rounded-xl p-5">
                            <div className="flex items-center justify-between mb-3">
                              <label className="text-sm text-slate-300 font-medium">
                                Part-time Work (monthly)
                              </label>
                              <span className="text-amber-400 font-bold">
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
                              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                              <span>$0</span>
                              <span>$3,000</span>
                            </div>
                          </div>

                          {/* Stock allocation (for risk assessment) */}
                          <div className="bg-slate-800/50 rounded-xl p-5">
                            <div className="flex items-center justify-between mb-3">
                              <label className="text-sm text-slate-300 font-medium">
                                Current Stock Market Exposure
                              </label>
                              <span className="text-amber-400 font-bold">
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
                              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                              <span>0% (All bonds)</span>
                              <span>100% (All stocks)</span>
                            </div>
                          </div>

                          {/* Total income summary */}
                          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mt-4">
                            <div className="flex items-center justify-between">
                              <span className="text-slate-300">
                                Total Monthly Income:
                              </span>
                              <span className="text-2xl font-bold text-green-400">
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
                          className="px-6 py-3 bg-slate-800 border border-white/10 rounded-xl text-white font-medium hover:bg-slate-700 transition-all flex items-center gap-2"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Back
                        </button>
                      )}
                      <button
                        onClick={handleNext}
                        className="flex-1 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 hover:from-amber-600 hover:to-amber-700"
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
                      <div className="text-slate-400 text-sm mb-2">
                        YOUR SAVINGS WILL LAST
                      </div>
                      <div className="relative inline-flex items-center justify-center mb-4">
                        <motion.div
                          className={`text-6xl md:text-7xl font-bold ${
                            results.yearsWithReturns >= 30
                              ? "text-green-400"
                              : results.yearsWithReturns >= 20
                              ? "text-amber-400"
                              : "text-red-400"
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
                      <div className="text-xl text-white font-medium">
                        years in retirement
                      </div>
                      {!results.incomeCoversExpenses && (
                        <div className="text-slate-400 mt-2">
                          Money runs out around age {results.ageAtDepletion}
                        </div>
                      )}
                    </div>

                    {/* Visual Timeline */}
                    <div className="bg-slate-800/50 rounded-xl p-5 mb-6">
                      <div className="text-slate-400 text-sm mb-4">
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
                                ? "bg-gradient-to-r from-amber-500 to-amber-600"
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
                            <div className="text-white font-medium">
                              {retirementAge}
                            </div>
                            <div className="text-slate-500">Retire</div>
                          </div>
                          <div className="text-center">
                            <div className="text-white font-medium">
                              {retirementAge + 10}
                            </div>
                            <div className="text-slate-500">+10 yrs</div>
                          </div>
                          <div className="text-center">
                            <div className="text-white font-medium">
                              {retirementAge + 20}
                            </div>
                            <div className="text-slate-500">+20 yrs</div>
                          </div>
                          <div className="text-center">
                            <div className="text-white font-medium">85</div>
                            <div className="text-slate-500">Life exp.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Metrics Grid */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {/* Monthly Withdrawal */}
                      <div className="bg-slate-800/50 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                          <DollarSign className="h-4 w-4" />
                          MONTHLY WITHDRAWAL (4% RULE)
                        </div>
                        <div className="text-2xl font-bold text-white">
                          {formatFullCurrency(results.monthlyWithdrawal4Percent)}
                        </div>
                        <div className="text-slate-500 text-sm">
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
                            ? "bg-red-500/10 border border-red-500/20"
                            : "bg-green-500/10 border border-green-500/20"
                        }`}
                      >
                        <div
                          className={`flex items-center gap-2 text-sm mb-2 ${
                            results.monthlyGap > 0
                              ? "text-red-400"
                              : "text-green-400"
                          }`}
                        >
                          <Target className="h-4 w-4" />
                          MONTHLY GAP ANALYSIS
                        </div>
                        <div
                          className={`text-2xl font-bold ${
                            results.monthlyGap > 0
                              ? "text-red-400"
                              : "text-green-400"
                          }`}
                        >
                          {results.monthlyGap > 0
                            ? `-${formatFullCurrency(results.monthlyGap)}`
                            : "Covered"}
                        </div>
                        <div className="text-slate-500 text-sm">
                          {results.monthlyGap > 0
                            ? "Shortfall per month from income"
                            : "Income covers expenses"}
                        </div>
                      </div>
                    </div>

                    {/* Conservative Scenario */}
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-white font-semibold mb-1">
                            Conservative 3% Rule Scenario
                          </h3>
                          <p className="text-slate-300 text-sm">
                            Using a safer 3% withdrawal rate, you could withdraw{" "}
                            <strong className="text-white">
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
                            <h3 className="text-white font-semibold">
                              Risk Assessment
                            </h3>
                            <span
                              className={`text-sm font-medium ${riskAssessment.color}`}
                            >
                              {riskAssessment.level}
                            </span>
                          </div>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {riskAssessment.message}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Gold IRA Recommendation */}
                    {stockAllocation > 50 && (
                      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 mb-6">
                        <div className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="text-white font-semibold mb-2">
                              Diversification Recommendation
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-3">
                              With{" "}
                              <strong className="text-white">
                                {stockAllocation}% in stocks
                              </strong>
                              , your retirement is heavily exposed to market
                              volatility. A 2008-style crash could reduce your
                              savings by{" "}
                              <strong className="text-red-400">
                                {formatFullCurrency(
                                  totalSavings * (stockAllocation / 100) * 0.4
                                )}
                              </strong>{" "}
                              or more.
                            </p>
                            <p className="text-slate-300 text-sm">
                              Financial experts often recommend allocating 5-15%
                              of retirement savings to precious metals like gold
                              to:
                            </p>
                            <ul className="mt-2 space-y-1 text-sm text-slate-300">
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                                Hedge against market crashes
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                                Protect against inflation
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                                Reduce overall portfolio volatility
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Summary Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                      <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                        <div className="text-slate-400 text-xs mb-1">
                          Total Savings
                        </div>
                        <div className="text-white font-bold">
                          {formatCurrency(totalSavings)}
                        </div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                        <div className="text-slate-400 text-xs mb-1">
                          Monthly Expenses
                        </div>
                        <div className="text-white font-bold">
                          {formatCurrency(monthlyExpenses)}
                        </div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                        <div className="text-slate-400 text-xs mb-1">
                          Monthly Income
                        </div>
                        <div className="text-white font-bold">
                          {formatCurrency(results.monthlyIncome)}
                        </div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                        <div className="text-slate-400 text-xs mb-1">
                          Years to Retire
                        </div>
                        <div className="text-white font-bold">
                          {results.yearsUntilRetirement}
                        </div>
                      </div>
                    </div>

                    {/* Augusta CTA */}
                    <AugustaCTA
                      variant="footer"
                      headline="Protect Your Retirement with Gold"
                      subheadline="Learn how a Gold IRA can help diversify your retirement savings and protect against market volatility. Get a free consultation with no obligation."
                      linkContext="default"
                      trackSource="retirement-calculator"
                    />

                    {/* Start Over */}
                    <button
                      onClick={resetCalculator}
                      className="w-full mt-6 py-3 bg-slate-800 border border-white/10 rounded-xl text-slate-400 font-medium hover:bg-slate-700 hover:text-white transition-all"
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
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm mb-4">
                <Info className="h-4 w-4" />
                RETIREMENT PLANNING BASICS
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Understanding the 4% Rule
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
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
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-amber-400 mb-3">
                    {item.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-400">4% Withdrawal:</span>
                      <span className="text-white font-medium">
                        {item.withdrawal}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Monthly:</span>
                      <span className="text-white font-medium">
                        {item.monthly}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm">{item.description}</p>
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
                  <h3 className="text-white font-semibold mb-2">
                    Important Disclaimer
                  </h3>
                  <p className="text-slate-400 text-sm">
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

      <Footer />
    </main>
  );
}
