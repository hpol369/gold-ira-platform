"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Flame,
  DollarSign,
  Calendar,
  Target,
  TrendingUp,
  Shield,
  CheckCircle2,
  Clock,
  Percent,
  PiggyBank,
  Briefcase,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

// Format currency
function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}k`;
  }
  return `$${value.toLocaleString()}`;
}

function formatFullCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

interface YearProjection {
  year: number;
  age: number;
  startBalance: number;
  contributions: number;
  returns: number;
  endBalance: number;
  percentToFIRE: number;
}

interface WhatIfScenario {
  name: string;
  description: string;
  fireNumber: number;
  yearsToFIRE: number;
  fireAge: number;
  monthlySavings: number;
  difference: string;
}

export function FIRECalculator() {
  // Inputs
  const [currentAge, setCurrentAge] = useState<number>(35);
  const [annualIncome, setAnnualIncome] = useState<number>(80000);
  const [annualExpenses, setAnnualExpenses] = useState<number>(50000);
  const [currentSavings, setCurrentSavings] = useState<number>(150000);
  const [expectedReturn, setExpectedReturn] = useState<number>(7);
  const [withdrawalRate, setWithdrawalRate] = useState<number>(4);
  const [socialSecurity, setSocialSecurity] = useState<number>(0);
  const [socialSecurityAge, setSocialSecurityAge] = useState<number>(67);

  // UI state
  const [showProjectionTable, setShowProjectionTable] = useState<boolean>(false);

  // Core calculations
  const calculations = useMemo(() => {
    // Annual savings
    const annualSavings = Math.max(0, annualIncome - annualExpenses);
    const monthlySavings = annualSavings / 12;

    // Adjusted annual expenses (accounting for Social Security when eligible)
    const adjustedExpenses = annualExpenses;

    // FIRE Number (Annual Expenses / SWR)
    const fireNumber = adjustedExpenses / (withdrawalRate / 100);

    // Amount still needed
    const amountNeeded = Math.max(0, fireNumber - currentSavings);

    // Progress percentage
    const progressPercent = Math.min(100, (currentSavings / fireNumber) * 100);

    // Years to FIRE calculation with compound interest
    let yearsToFIRE = 0;
    let balance = currentSavings;
    const returnRate = expectedReturn / 100;

    if (amountNeeded > 0 && annualSavings > 0) {
      while (balance < fireNumber && yearsToFIRE < 100) {
        balance = balance * (1 + returnRate) + annualSavings;
        yearsToFIRE++;
      }
    } else if (amountNeeded <= 0) {
      yearsToFIRE = 0;
    } else {
      yearsToFIRE = 999; // Not achievable with current savings rate
    }

    // FIRE Age
    const fireAge = currentAge + yearsToFIRE;

    // Has reached FIRE?
    const hasReachedFIRE = currentSavings >= fireNumber;

    // Monthly savings needed to hit target in 10 years
    const targetYears = 10;
    const targetFV = fireNumber;
    const presentValue = currentSavings;
    // FV = PV(1+r)^n + PMT*((1+r)^n - 1)/r
    // PMT = (FV - PV(1+r)^n) * r / ((1+r)^n - 1)
    const fvFactor = Math.pow(1 + returnRate, targetYears);
    const pvContribution = presentValue * fvFactor;
    const annuityFactor = (fvFactor - 1) / returnRate;
    const annualContributionNeeded = Math.max(0, (targetFV - pvContribution) / annuityFactor);
    const monthlyNeededFor10Years = annualContributionNeeded / 12;

    // Savings rate
    const savingsRate = annualIncome > 0 ? (annualSavings / annualIncome) * 100 : 0;

    // Year-by-year projections
    const projections: YearProjection[] = [];
    let projBalance = currentSavings;
    const currentYear = new Date().getFullYear();

    for (let i = 0; i <= Math.min(yearsToFIRE + 5, 40); i++) {
      const startBalance = projBalance;
      const contributions = annualSavings;
      const returns = startBalance * returnRate;
      const endBalance = startBalance + contributions + returns;

      projections.push({
        year: currentYear + i,
        age: currentAge + i,
        startBalance,
        contributions,
        returns,
        endBalance,
        percentToFIRE: Math.min(100, (endBalance / fireNumber) * 100),
      });

      projBalance = endBalance;
    }

    return {
      fireNumber,
      amountNeeded,
      progressPercent,
      yearsToFIRE,
      fireAge,
      hasReachedFIRE,
      annualSavings,
      monthlySavings,
      savingsRate,
      monthlyNeededFor10Years,
      projections,
    };
  }, [
    currentAge,
    annualIncome,
    annualExpenses,
    currentSavings,
    expectedReturn,
    withdrawalRate,
    socialSecurity,
    socialSecurityAge,
  ]);

  // What-if scenarios
  const scenarios = useMemo((): WhatIfScenario[] => {
    const returnRate = expectedReturn / 100;
    const baseAnnualSavings = Math.max(0, annualIncome - annualExpenses);

    // Scenario 1: Cut expenses by 10%
    const reducedExpenses = annualExpenses * 0.9;
    const reducedFireNumber = reducedExpenses / (withdrawalRate / 100);
    const reducedAnnualSavings = annualIncome - reducedExpenses;
    let reducedYears = 0;
    let reducedBalance = currentSavings;
    while (reducedBalance < reducedFireNumber && reducedYears < 100) {
      reducedBalance = reducedBalance * (1 + returnRate) + reducedAnnualSavings;
      reducedYears++;
    }

    // Scenario 2: Increase savings by $500/mo
    const additionalSavings = 6000; // $500/mo
    const increasedAnnualSavings = baseAnnualSavings + additionalSavings;
    let increasedYears = 0;
    let increasedBalance = currentSavings;
    while (increasedBalance < calculations.fireNumber && increasedYears < 100) {
      increasedBalance = increasedBalance * (1 + returnRate) + increasedAnnualSavings;
      increasedYears++;
    }

    // Scenario 3: Part-time income in retirement ($1,000/mo)
    const partTimeIncome = 12000; // $1,000/mo annual
    const reducedNeededExpenses = annualExpenses - partTimeIncome;
    const partTimeFireNumber = reducedNeededExpenses / (withdrawalRate / 100);
    let partTimeYears = 0;
    let partTimeBalance = currentSavings;
    while (partTimeBalance < partTimeFireNumber && partTimeYears < 100) {
      partTimeBalance = partTimeBalance * (1 + returnRate) + baseAnnualSavings;
      partTimeYears++;
    }

    return [
      {
        name: "Cut Expenses by 10%",
        description: `Reduce spending to ${formatFullCurrency(reducedExpenses)}/year`,
        fireNumber: reducedFireNumber,
        yearsToFIRE: reducedYears,
        fireAge: currentAge + reducedYears,
        monthlySavings: reducedAnnualSavings / 12,
        difference: `${calculations.yearsToFIRE - reducedYears} years sooner`,
      },
      {
        name: "Save Extra $500/month",
        description: `Increase savings to ${formatFullCurrency(increasedAnnualSavings)}/year`,
        fireNumber: calculations.fireNumber,
        yearsToFIRE: increasedYears,
        fireAge: currentAge + increasedYears,
        monthlySavings: increasedAnnualSavings / 12,
        difference: `${calculations.yearsToFIRE - increasedYears} years sooner`,
      },
      {
        name: "Part-time Work in Retirement",
        description: "$1,000/mo part-time income reduces FIRE number",
        fireNumber: partTimeFireNumber,
        yearsToFIRE: partTimeYears,
        fireAge: currentAge + partTimeYears,
        monthlySavings: baseAnnualSavings / 12,
        difference: `${calculations.yearsToFIRE - partTimeYears} years sooner`,
      },
    ];
  }, [
    currentAge,
    annualIncome,
    annualExpenses,
    currentSavings,
    expectedReturn,
    withdrawalRate,
    calculations.fireNumber,
    calculations.yearsToFIRE,
  ]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-500/30">
          <Flame className="h-4 w-4" />
          Financial Independence Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
          FIRE Calculator
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Calculate your path to Financial Independence and Retire Early. Find your FIRE number, timeline, and explore scenarios to reach freedom faster.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Calendar className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">Personal Information</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Current Age: {currentAge}
                </label>
                <input
                  type="range"
                  min="18"
                  max="65"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>
            </div>
          </div>

          {/* Income & Expenses */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <DollarSign className="h-5 w-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Income & Expenses</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Annual Income (before taxes)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-orange-500"
                    min="0"
                    step="5000"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Monthly: {formatFullCurrency(annualIncome / 12)}
                </p>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Annual Expenses
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={annualExpenses}
                    onChange={(e) => setAnnualExpenses(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-orange-500"
                    min="0"
                    step="5000"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Monthly: {formatFullCurrency(annualExpenses / 12)}
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Annual Savings</span>
                  <span className="font-semibold text-green-400">
                    {formatFullCurrency(calculations.annualSavings)}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-slate-400">Savings Rate</span>
                  <span className="font-semibold text-green-400">
                    {calculations.savingsRate.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Current Savings */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <PiggyBank className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">Current Savings/Investments</h3>
            </div>

            <div>
              <label className="text-sm text-slate-400 mb-2 block">
                Total Retirement Savings
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  type="number"
                  value={currentSavings}
                  onChange={(e) => setCurrentSavings(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-orange-500"
                  min="0"
                  step="10000"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Include 401(k), IRA, brokerage accounts, etc.
              </p>
            </div>
          </div>

          {/* Investment Assumptions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-500/20 rounded-lg border border-orange-500/30">
                <TrendingUp className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold">Investment Assumptions</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Expected Annual Return: {expectedReturn}%
                </label>
                <input
                  type="range"
                  min="4"
                  max="10"
                  step="0.5"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Conservative (4%)</span>
                  <span>Aggressive (10%)</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Safe Withdrawal Rate: {withdrawalRate}%
                </label>
                <input
                  type="range"
                  min="3"
                  max="5"
                  step="0.25"
                  value={withdrawalRate}
                  onChange={(e) => setWithdrawalRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Conservative (3%)</span>
                  <span>Standard (4%)</span>
                  <span>Aggressive (5%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Security (Optional) */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal-500/20 rounded-lg border border-teal-500/30">
                <Briefcase className="h-5 w-5 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold">Social Security (Optional)</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Expected Monthly Social Security
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={socialSecurity}
                    onChange={(e) => setSocialSecurity(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-orange-500"
                    min="0"
                    step="100"
                    placeholder="0"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Leave at 0 to exclude from calculations
                </p>
              </div>

              {socialSecurity > 0 && (
                <div>
                  <label className="text-sm text-slate-400 mb-2 block">
                    Social Security Start Age: {socialSecurityAge}
                  </label>
                  <input
                    type="range"
                    min="62"
                    max="70"
                    value={socialSecurityAge}
                    onChange={(e) => setSocialSecurityAge(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Annual benefit: {formatFullCurrency(socialSecurity * 12)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* FIRE Number */}
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="h-10 w-10 text-orange-400" />
              <div>
                <h3 className="text-sm text-slate-400">Your FIRE Number</h3>
                <div className="text-4xl font-bold text-orange-400">
                  {formatCurrency(calculations.fireNumber)}
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 mb-4">
              This is the amount you need invested to live off {withdrawalRate}% annual withdrawals
            </p>

            <div className="mt-6 pt-6 border-t border-orange-500/30">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress to FIRE</span>
                <span className="font-semibold">{calculations.progressPercent.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 relative"
                  style={{ width: `${Math.min(100, calculations.progressPercent)}%` }}
                >
                  {calculations.progressPercent >= 10 && (
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                      {calculations.progressPercent.toFixed(0)}%
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>{formatCurrency(currentSavings)} saved</span>
                <span>{formatCurrency(calculations.amountNeeded)} to go</span>
              </div>
            </div>
          </div>

          {/* Timeline Card */}
          <div className={`rounded-xl p-6 border ${
            calculations.hasReachedFIRE
              ? 'bg-green-500/20 border-green-500/30'
              : calculations.yearsToFIRE < 100
              ? 'bg-blue-500/20 border-blue-500/30'
              : 'bg-amber-500/20 border-amber-500/30'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              {calculations.hasReachedFIRE ? (
                <CheckCircle2 className="h-8 w-8 text-green-400" />
              ) : (
                <Clock className="h-8 w-8 text-blue-400" />
              )}
              <div>
                <h3 className="text-xl font-bold">
                  {calculations.hasReachedFIRE
                    ? "Congratulations! You've Reached FIRE!"
                    : calculations.yearsToFIRE < 100
                    ? `${calculations.yearsToFIRE} Years to FIRE`
                    : "Adjust Your Plan"}
                </h3>
                <p className="text-sm text-slate-300">
                  {calculations.hasReachedFIRE
                    ? "You're financially independent"
                    : calculations.yearsToFIRE < 100
                    ? `You'll reach FIRE at age ${calculations.fireAge}`
                    : "Increase savings or reduce expenses"}
                </p>
              </div>
            </div>

            {!calculations.hasReachedFIRE && calculations.yearsToFIRE < 100 && (
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{calculations.yearsToFIRE}</div>
                  <div className="text-xs text-slate-400">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{calculations.fireAge}</div>
                  <div className="text-xs text-slate-400">FIRE Age</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">
                    {new Date().getFullYear() + calculations.yearsToFIRE}
                  </div>
                  <div className="text-xs text-slate-400">Target Year</div>
                </div>
              </div>
            )}
          </div>

          {/* Monthly Savings Needed */}
          {!calculations.hasReachedFIRE && (
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-amber-400" />
                Savings Analysis
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-slate-400">Current Monthly Savings</span>
                  <span className="text-xl font-bold text-green-400">
                    {formatFullCurrency(calculations.monthlySavings)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-slate-400">Needed for 10-Year FIRE</span>
                  <span className="text-xl font-bold text-orange-400">
                    {formatFullCurrency(calculations.monthlyNeededFor10Years)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Current Savings Rate</span>
                  <span className="text-xl font-bold text-purple-400">
                    {calculations.savingsRate.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* What-If Scenarios */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-400" />
              What-If Scenarios
            </h3>

            <div className="space-y-4">
              {scenarios.map((scenario, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-semibold text-white">{scenario.name}</div>
                      <div className="text-xs text-slate-400">{scenario.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">
                        Age {scenario.fireAge}
                      </div>
                      <div className="text-xs text-green-400">{scenario.difference}</div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-slate-400 mt-2 pt-2 border-t border-slate-700">
                    <span>FIRE Number: {formatCurrency(scenario.fireNumber)}</span>
                    <span>{scenario.yearsToFIRE} years</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Year-by-Year Projection Table */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <button
              onClick={() => setShowProjectionTable(!showProjectionTable)}
              className="w-full flex items-center justify-between text-lg font-semibold"
            >
              <span className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-400" />
                Year-by-Year Projection
              </span>
              {showProjectionTable ? (
                <ChevronUp className="h-5 w-5 text-slate-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-slate-400" />
              )}
            </button>

            {showProjectionTable && (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-2 text-slate-400">Year</th>
                      <th className="text-left py-2 px-2 text-slate-400">Age</th>
                      <th className="text-right py-2 px-2 text-slate-400">Start</th>
                      <th className="text-right py-2 px-2 text-slate-400">+ Savings</th>
                      <th className="text-right py-2 px-2 text-slate-400">+ Returns</th>
                      <th className="text-right py-2 px-2 text-slate-400">End Balance</th>
                      <th className="text-right py-2 px-2 text-slate-400">% to FIRE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculations.projections.slice(0, 20).map((proj, index) => (
                      <tr
                        key={index}
                        className={`border-b border-slate-800 ${
                          proj.percentToFIRE >= 100 ? 'bg-green-500/10' : ''
                        }`}
                      >
                        <td className="py-2 px-2">{proj.year}</td>
                        <td className="py-2 px-2">{proj.age}</td>
                        <td className="text-right py-2 px-2 text-slate-400">
                          {formatCurrency(proj.startBalance)}
                        </td>
                        <td className="text-right py-2 px-2 text-green-400">
                          +{formatCurrency(proj.contributions)}
                        </td>
                        <td className="text-right py-2 px-2 text-blue-400">
                          +{formatCurrency(proj.returns)}
                        </td>
                        <td className="text-right py-2 px-2 font-semibold">
                          {formatCurrency(proj.endBalance)}
                        </td>
                        <td className="text-right py-2 px-2">
                          <span className={proj.percentToFIRE >= 100 ? 'text-green-400 font-bold' : 'text-orange-400'}>
                            {proj.percentToFIRE.toFixed(0)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Augusta CTA Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-amber-400" />
            <h2 className="text-2xl font-bold">Protect Your FIRE Number from Market Crashes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-amber-400 font-semibold mb-2">Sequence of Returns Risk</div>
              <p className="text-slate-400 text-sm">
                A market crash in your first years of FIRE can devastate your plan. Gold often rises when stocks fall, providing crucial protection.
              </p>
            </div>

            <div>
              <div className="text-amber-400 font-semibold mb-2">30+ Year Horizon</div>
              <p className="text-slate-400 text-sm">
                Early retirement means your portfolio must last decades. Gold has preserved wealth through every economic crisis in history.
              </p>
            </div>

            <div>
              <div className="text-amber-400 font-semibold mb-2">True Diversification</div>
              <p className="text-slate-400 text-sm">
                Most FIRE portfolios are 100% paper assets. Physical gold in an IRA adds real diversification beyond stocks and bonds.
              </p>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="fire-calculator"
            subheadline="FIRE investors protect their nest egg from inflation and market crashes with Gold IRAs. Unlike paper assets, gold maintains purchasing power over decades of early retirement."
          />
        </div>
      </div>

      {/* Related Tools */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Explore More FIRE Calculators</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/tools/coast-fire-calculator"
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-amber-500/50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <TrendingUp className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div className="font-semibold group-hover:text-amber-400 transition-colors">
                  Coast FIRE
                </div>
                <div className="text-xs text-slate-400">Stop saving, let it grow</div>
              </div>
              <ArrowRight className="h-4 w-4 ml-auto text-slate-400 group-hover:text-amber-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/tools/barista-fire-calculator"
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-amber-500/50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <Briefcase className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <div className="font-semibold group-hover:text-amber-400 transition-colors">
                  Barista FIRE
                </div>
                <div className="text-xs text-slate-400">Part-time work + benefits</div>
              </div>
              <ArrowRight className="h-4 w-4 ml-auto text-slate-400 group-hover:text-amber-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/tools/fat-fire-calculator"
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-amber-500/50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
                <DollarSign className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <div className="font-semibold group-hover:text-amber-400 transition-colors">
                  Fat FIRE
                </div>
                <div className="text-xs text-slate-400">Luxury retirement</div>
              </div>
              <ArrowRight className="h-4 w-4 ml-auto text-slate-400 group-hover:text-amber-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/tools/lean-fire-calculator"
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-amber-500/50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <PiggyBank className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <div className="font-semibold group-hover:text-amber-400 transition-colors">
                  Lean FIRE
                </div>
                <div className="text-xs text-slate-400">Minimalist approach</div>
              </div>
              <ArrowRight className="h-4 w-4 ml-auto text-slate-400 group-hover:text-amber-400 transition-colors" />
            </div>
          </Link>
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding FIRE</h2>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
            <h3 className="text-xl font-semibold mb-4">What is FIRE?</h3>
            <p className="text-slate-400 mb-4">
              FIRE (Financial Independence, Retire Early) is a lifestyle movement dedicated to extreme savings and investment. The goal is to accumulate assets until the returns from your investments can cover your living expenses indefinitely, allowing you to retire decades before the traditional age of 65.
            </p>
            <p className="text-slate-400">
              The core principle is simple: save aggressively (typically 50-70% of income), invest in low-cost index funds, and live below your means. Once your invested assets reach 25 times your annual expenses (your &quot;FIRE number&quot;), you can safely withdraw 4% annually without depleting your principal.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
            <h3 className="text-xl font-semibold mb-4">The FIRE Number Formula</h3>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm mb-4">
              FIRE Number = Annual Expenses / Safe Withdrawal Rate
            </div>
            <p className="text-slate-400 mb-4">
              With a standard 4% withdrawal rate, this simplifies to:
            </p>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm mb-4">
              FIRE Number = Annual Expenses x 25
            </div>
            <p className="text-slate-400">
              For example, if you spend $50,000 per year, your FIRE number is $1,250,000. Once you reach this amount, you can withdraw $50,000 annually (4% of $1.25M) to cover your expenses.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4">Types of FIRE</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex gap-2">
                <Flame className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span><strong>Traditional FIRE:</strong> Standard approach targeting 25x expenses for moderate lifestyle</span>
              </li>
              <li className="flex gap-2">
                <Flame className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Lean FIRE:</strong> Minimalist lifestyle with annual expenses under $40,000</span>
              </li>
              <li className="flex gap-2">
                <Flame className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span><strong>Fat FIRE:</strong> Luxury retirement with $100,000+ annual spending</span>
              </li>
              <li className="flex gap-2">
                <Flame className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Coast FIRE:</strong> Save enough early, then coast without additional contributions</span>
              </li>
              <li className="flex gap-2">
                <Flame className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span><strong>Barista FIRE:</strong> Semi-retirement with part-time work for healthcare benefits</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-2">What is FIRE?</h3>
            <p className="text-slate-400">
              FIRE stands for Financial Independence, Retire Early. It&apos;s a lifestyle movement focused on extreme savings and investment to achieve financial freedom earlier than traditional retirement age. The goal is to accumulate enough assets to live off investment returns indefinitely.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-2">How is the FIRE number calculated?</h3>
            <p className="text-slate-400">
              Your FIRE number is calculated by dividing your annual expenses by your safe withdrawal rate (typically 4%). For example, if you spend $50,000 per year and use a 4% withdrawal rate, your FIRE number is $1,250,000 ($50,000 / 0.04).
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-2">What is a safe withdrawal rate?</h3>
            <p className="text-slate-400">
              A safe withdrawal rate (SWR) is the percentage of your portfolio you can withdraw annually without running out of money. The most common SWR is 4%, based on the Trinity Study, which found this rate historically sustained portfolios for 30+ years.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-2">How does Social Security affect my FIRE plan?</h3>
            <p className="text-slate-400">
              Social Security can reduce your FIRE number because it provides guaranteed income starting at age 62-70. You can factor in expected Social Security benefits to lower the amount you need to save, though early retirees should plan for years before SS kicks in.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-2">What is the difference between FIRE, Lean FIRE, and Fat FIRE?</h3>
            <p className="text-slate-400">
              Lean FIRE targets minimal expenses (typically under $40,000/year), standard FIRE targets moderate expenses ($40,000-$100,000/year), and Fat FIRE targets higher spending ($100,000+/year) for a more luxurious retirement lifestyle.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
