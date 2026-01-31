"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Clock,
  DollarSign,
  Calendar,
  TrendingUp,
  TrendingDown,
  Shield,
  CheckCircle2,
  Info,
  AlertTriangle,
  Percent,
  Target,
  Wallet,
} from "lucide-react";

// Format currency
function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}k`;
  }
  return `$${Math.round(value).toLocaleString()}`;
}

function formatFullCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

interface YearData {
  year: number;
  age: number;
  startBalance: number;
  withdrawal: number;
  returns: number;
  endBalance: number;
  inflationAdjustedNeeds: number;
}

export function RetirementLongevityCalculator() {
  // Inputs
  const [currentSavings, setCurrentSavings] = useState<number>(500000);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState<number>(3500);
  const [expectedReturn, setExpectedReturn] = useState<number>(6);
  const [inflationRate, setInflationRate] = useState<number>(3);
  const [socialSecurity, setSocialSecurity] = useState<number>(2000);
  const [pensionIncome, setPensionIncome] = useState<number>(0);
  const [currentAge, setCurrentAge] = useState<number>(65);

  // Calculations
  const calculations = useMemo(() => {
    const annualWithdrawal = monthlyWithdrawal * 12;
    const totalMonthlyIncome = socialSecurity + pensionIncome;
    const netMonthlyWithdrawal = Math.max(0, monthlyWithdrawal - totalMonthlyIncome);
    const netAnnualWithdrawal = netMonthlyWithdrawal * 12;

    // Real return (return minus inflation)
    const realReturn = expectedReturn - inflationRate;

    // Calculate year-by-year projection
    const yearData: YearData[] = [];
    let balance = currentSavings;
    let depletionYear: number | null = null;
    let inflationMultiplier = 1;

    // Project for 50 years or until depletion
    for (let year = 1; year <= 50; year++) {
      const age = currentAge + year;
      const startBalance = balance;

      // Inflation-adjusted withdrawal (expenses grow with inflation)
      inflationMultiplier *= (1 + inflationRate / 100);
      const inflationAdjustedWithdrawal = netAnnualWithdrawal * inflationMultiplier;

      // Calculate returns on balance
      const returns = startBalance * (expectedReturn / 100);

      // End balance = start + returns - withdrawal
      balance = startBalance + returns - inflationAdjustedWithdrawal;

      yearData.push({
        year,
        age,
        startBalance,
        withdrawal: inflationAdjustedWithdrawal,
        returns,
        endBalance: Math.max(0, balance),
        inflationAdjustedNeeds: annualWithdrawal * inflationMultiplier,
      });

      if (balance <= 0 && depletionYear === null) {
        depletionYear = year;
        balance = 0;
      }
    }

    // Years until depletion
    const yearsUntilDepletion = depletionYear || (balance > 0 ? 50 : 0);
    const ageAtDepletion = depletionYear ? currentAge + depletionYear : null;

    // Safe withdrawal calculations (what would last 30 years)
    // Using simplified formula: PMT = PV * r / (1 - (1+r)^-n)
    const r = realReturn / 100;
    const n = 30;
    let safeMonthlyWithdrawal: number;
    if (r > 0) {
      const safeAnnualWithdrawal = currentSavings * (r / (1 - Math.pow(1 + r, -n)));
      safeMonthlyWithdrawal = safeAnnualWithdrawal / 12 + totalMonthlyIncome;
    } else {
      safeMonthlyWithdrawal = (currentSavings / (n * 12)) + totalMonthlyIncome;
    }

    // Impact of reducing spending by 10% and 20%
    const calculateYearsWithReduction = (reduction: number): number => {
      let testBalance = currentSavings;
      let testInflation = 1;
      const reducedWithdrawal = netAnnualWithdrawal * (1 - reduction);

      for (let year = 1; year <= 60; year++) {
        testInflation *= (1 + inflationRate / 100);
        const adjWithdrawal = reducedWithdrawal * testInflation;
        testBalance = testBalance * (1 + expectedReturn / 100) - adjWithdrawal;
        if (testBalance <= 0) return year;
      }
      return 60;
    };

    const yearsWith10PercentReduction = calculateYearsWithReduction(0.10);
    const yearsWith20PercentReduction = calculateYearsWithReduction(0.20);

    // Initial withdrawal rate
    const initialWithdrawalRate = (netAnnualWithdrawal / currentSavings) * 100;

    // Check if plan is at risk
    const isAtRisk = yearsUntilDepletion < 30 || (ageAtDepletion && ageAtDepletion < 95);

    return {
      yearData,
      yearsUntilDepletion,
      ageAtDepletion,
      safeMonthlyWithdrawal,
      yearsWith10PercentReduction,
      yearsWith20PercentReduction,
      initialWithdrawalRate,
      netMonthlyWithdrawal,
      totalMonthlyIncome,
      isAtRisk,
      realReturn,
    };
  }, [
    currentSavings,
    monthlyWithdrawal,
    expectedReturn,
    inflationRate,
    socialSecurity,
    pensionIncome,
    currentAge,
  ]);

  // Find max balance for chart
  const maxBalance = Math.max(
    currentSavings,
    ...calculations.yearData.slice(0, 35).map(y => y.endBalance)
  );

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-500/30">
          <Clock className="h-4 w-4" />
          Zero Competition Keyword
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
          Retirement Longevity Calculator
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Calculate exactly how long your retirement savings will last. See the impact of
          spending changes, returns, and inflation on your financial future.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Current Savings */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Retirement Savings</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Current Retirement Savings
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-green-500"
                    min="0"
                    step="10000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Current Age: {currentAge}
                </label>
                <input
                  type="range"
                  min="55"
                  max="80"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
              </div>
            </div>
          </div>

          {/* Monthly Withdrawal */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Wallet className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Monthly Expenses</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Monthly Withdrawal Needed
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={monthlyWithdrawal}
                    onChange={(e) => setMonthlyWithdrawal(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-green-500"
                    min="0"
                    step="100"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Annual: {formatFullCurrency(monthlyWithdrawal * 12)}
                </p>
              </div>
            </div>
          </div>

          {/* Income Sources */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <TrendingUp className="h-5 w-5 text-purple-700" />
              </div>
              <h3 className="text-lg font-semibold">Guaranteed Income</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Social Security (Monthly)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={socialSecurity}
                    onChange={(e) => setSocialSecurity(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-green-500"
                    min="0"
                    step="100"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Pension Income (Monthly)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={pensionIncome}
                    onChange={(e) => setPensionIncome(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-green-500"
                    min="0"
                    step="100"
                  />
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Total Guaranteed Income</span>
                  <span className="text-xl font-bold text-green-600">
                    {formatFullCurrency(calculations.totalMonthlyIncome)}/mo
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-slate-500">Net from Savings Needed</span>
                  <span className="text-lg font-semibold text-[#B22234]">
                    {formatFullCurrency(calculations.netMonthlyWithdrawal)}/mo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Assumptions */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#B22234]/10 rounded-lg border border-[#B22234]/30">
                <Percent className="h-5 w-5 text-[#B22234]" />
              </div>
              <h3 className="text-lg font-semibold">Assumptions</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Expected Return: {expectedReturn}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="12"
                  step="0.5"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Conservative</span>
                  <span>Moderate</span>
                  <span>Aggressive</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Inflation Rate: {inflationRate}%
                </label>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="0.5"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Low (1%)</span>
                  <span>Historical (3%)</span>
                  <span>High (6%)</span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Real Return (After Inflation)</span>
                  <span className={`text-xl font-bold ${
                    calculations.realReturn > 0 ? "text-green-600" : "text-red-600"
                  }`}>
                    {calculations.realReturn.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Result */}
          <div className={`bg-gradient-to-br rounded-xl p-8 border ${
            calculations.isAtRisk
              ? "from-red-500/20 to-orange-500/20 border-red-500/30"
              : "from-green-500/20 to-teal-500/20 border-green-500/30"
          }`}>
            <div className="text-center">
              <div className="text-sm text-slate-500 mb-2">YOUR MONEY WILL LAST</div>
              <div className={`text-6xl font-bold mb-2 ${
                calculations.isAtRisk ? "text-red-600" : "text-green-600"
              }`}>
                {calculations.yearsUntilDepletion >= 50
                  ? "50+"
                  : calculations.yearsUntilDepletion}
              </div>
              <div className="text-xl text-slate-600">years</div>

              {calculations.ageAtDepletion && calculations.ageAtDepletion < 100 && (
                <div className={`mt-4 pt-4 border-t border-slate-200 ${
                  calculations.ageAtDepletion < 95 ? "text-red-600" : "text-[#B22234]"
                }`}>
                  <AlertTriangle className="h-5 w-5 inline-block mr-2" />
                  Money runs out at age {calculations.ageAtDepletion}
                </div>
              )}
            </div>
          </div>

          {/* Warning if at risk */}
          {calculations.isAtRisk && calculations.ageAtDepletion && calculations.ageAtDepletion < 95 && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-600 mb-1">Warning: Plan at Risk</h4>
                  <p className="text-sm text-slate-600">
                    Your savings may run out before age 95. Consider reducing monthly expenses or
                    adjusting your investment strategy. See the spending reduction analysis below.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Balance Chart */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-blue-600" />
              Balance Over Time
            </h3>

            <div className="relative h-48 mb-4">
              {/* Y-axis */}
              <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-slate-500">
                <span>{formatCurrency(maxBalance)}</span>
                <span>{formatCurrency(maxBalance / 2)}</span>
                <span>$0</span>
              </div>

              {/* Chart */}
              <div className="ml-14 h-full relative">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                  <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

                  {/* Balance line */}
                  <path
                    d={`
                      M 0 ${100 - (currentSavings / maxBalance) * 100}
                      ${calculations.yearData.slice(0, 35).map((d, i) =>
                        `L ${((i + 1) / 35) * 100} ${100 - (d.endBalance / maxBalance) * 100}`
                      ).join(" ")}
                    `}
                    fill="none"
                    stroke="url(#balanceGradient)"
                    strokeWidth="1.5"
                  />

                  {/* Area fill */}
                  <path
                    d={`
                      M 0 ${100 - (currentSavings / maxBalance) * 100}
                      ${calculations.yearData.slice(0, 35).map((d, i) =>
                        `L ${((i + 1) / 35) * 100} ${100 - (d.endBalance / maxBalance) * 100}`
                      ).join(" ")}
                      L 100 100 L 0 100 Z
                    `}
                    fill="url(#areaGradient)"
                  />

                  <defs>
                    <linearGradient id="balanceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="50%" stopColor="#eab308" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(34,197,94,0.2)" />
                      <stop offset="100%" stopColor="rgba(34,197,94,0)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="flex justify-between text-xs text-slate-500">
              <span>Age {currentAge}</span>
              <span>Age {currentAge + 17}</span>
              <span>Age {currentAge + 35}</span>
            </div>
          </div>

          {/* Safe Withdrawal */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              Safe Withdrawal Analysis
            </h3>

            <div className="space-y-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="text-sm text-green-600 mb-1">Safe Monthly Withdrawal for 30 Years</div>
                <div className="text-3xl font-bold text-green-600">
                  {formatFullCurrency(calculations.safeMonthlyWithdrawal)}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Includes {formatFullCurrency(calculations.totalMonthlyIncome)} from Social Security/Pension
                </p>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-slate-500">Your Current Withdrawal</span>
                <span className="font-semibold">{formatFullCurrency(monthlyWithdrawal)}/mo</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-slate-500">Initial Withdrawal Rate</span>
                <span className={`font-semibold ${
                  calculations.initialWithdrawalRate > 5
                    ? "text-red-600"
                    : calculations.initialWithdrawalRate > 4
                    ? "text-[#B22234]"
                    : "text-green-600"
                }`}>
                  {calculations.initialWithdrawalRate.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {/* Spending Reduction Impact */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-[#B22234]" />
              Impact of Reducing Spending
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <div>
                  <div className="text-slate-600">Reduce by 10%</div>
                  <div className="text-sm text-slate-500">
                    {formatFullCurrency(monthlyWithdrawal * 0.9)}/mo
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-blue-600">
                    {calculations.yearsWith10PercentReduction >= 60
                      ? "60+"
                      : calculations.yearsWith10PercentReduction} years
                  </div>
                  <div className="text-xs text-green-600">
                    +{calculations.yearsWith10PercentReduction - calculations.yearsUntilDepletion} years
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <div>
                  <div className="text-slate-600">Reduce by 20%</div>
                  <div className="text-sm text-slate-500">
                    {formatFullCurrency(monthlyWithdrawal * 0.8)}/mo
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-green-600">
                    {calculations.yearsWith20PercentReduction >= 60
                      ? "60+"
                      : calculations.yearsWith20PercentReduction} years
                  </div>
                  <div className="text-xs text-green-600">
                    +{calculations.yearsWith20PercentReduction - calculations.yearsUntilDepletion} years
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Table */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4">Projection Details</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-slate-500 border-b border-slate-200">
                    <th className="text-left py-2">Year</th>
                    <th className="text-left py-2">Age</th>
                    <th className="text-right py-2">Balance</th>
                    <th className="text-right py-2">Withdrawal</th>
                  </tr>
                </thead>
                <tbody>
                  {calculations.yearData.filter((_, i) => i % 5 === 0 || i === calculations.yearsUntilDepletion - 1).slice(0, 8).map((data) => (
                    <tr key={data.year} className="border-b border-slate-200">
                      <td className="py-2">{data.year}</td>
                      <td className="py-2">{data.age}</td>
                      <td className={`py-2 text-right ${data.endBalance === 0 ? "text-red-600" : ""}`}>
                        {formatCurrency(data.endBalance)}
                      </td>
                      <td className="py-2 text-right text-slate-500">
                        {formatCurrency(data.withdrawal)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-16">
        {/* Inflation Warning */}
        <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Shield className="h-8 w-8 text-[#B22234] flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-[#B22234] mb-2">
                Key Insight: Gold Protects Against Inflation
              </h3>
              <p className="text-slate-600 mb-4">
                At {inflationRate}% inflation, your purchasing power will be cut in half in just{" "}
                {Math.round(72 / inflationRate)} years. What costs {formatFullCurrency(monthlyWithdrawal * 12)} today
                will cost {formatFullCurrency(monthlyWithdrawal * 12 * Math.pow(1 + inflationRate / 100, 20))} in 20 years.
              </p>
              <p className="text-slate-600 text-sm">
                Gold has historically preserved purchasing power over long periods, making it an essential
                component of a retirement portfolio designed to last 30+ years.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Info className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Understanding Retirement Longevity</h2>
          </div>

          <div className="space-y-6 text-slate-600">
            <p>
              The biggest fear in retirement is running out of money. This calculator helps you understand
              exactly how long your savings will last based on your spending, returns, and inflation assumptions.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <TrendingUp className="h-6 w-6 text-green-600 mb-2" />
                <h4 className="font-semibold text-slate-900 mb-1">Investment Returns</h4>
                <p className="text-sm text-slate-500">
                  Higher returns extend your money&apos;s lifespan, but come with more risk. A balanced approach
                  typically assumes 5-7% returns.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <TrendingDown className="h-6 w-6 text-red-600 mb-2" />
                <h4 className="font-semibold text-slate-900 mb-1">Inflation Impact</h4>
                <p className="text-sm text-slate-500">
                  Inflation is a silent wealth destroyer. At 3% inflation, $1 today is worth only $0.40
                  in 30 years.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <Wallet className="h-6 w-6 text-[#B22234] mb-2" />
                <h4 className="font-semibold text-slate-900 mb-1">Withdrawal Rate</h4>
                <p className="text-sm text-slate-500">
                  The 4% rule suggests withdrawing 4% of your portfolio annually. Lower rates are safer
                  for longer retirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips to Extend Retirement */}
        <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Clock className="h-6 w-6 text-green-600" />
            Strategies to Make Your Money Last Longer
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Reduce Fixed Expenses</h4>
                  <p className="text-sm text-slate-500">
                    Cutting just 10% from monthly expenses can add years to your retirement.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Delay Social Security</h4>
                  <p className="text-sm text-slate-500">
                    Each year you delay (up to 70) increases benefits by about 8%.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Part-Time Work</h4>
                  <p className="text-sm text-slate-500">
                    Even $500/month from part-time work reduces portfolio withdrawals significantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Geographic Arbitrage</h4>
                  <p className="text-sm text-slate-500">
                    Moving to a lower cost-of-living area can dramatically reduce expenses.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Downsize Housing</h4>
                  <p className="text-sm text-slate-500">
                    Smaller home = lower mortgage, taxes, insurance, and maintenance costs.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Inflation-Protected Assets</h4>
                  <p className="text-sm text-slate-500">
                    Gold and TIPS help maintain purchasing power as prices rise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gold Bridge */}
        <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-bold">Protect Against Inflation with Gold</h2>
          </div>

          <p className="text-slate-500 mb-6">
            Inflation is one of the biggest threats to retirement longevity. Over a 30-year retirement,
            even moderate 3% inflation will more than double your costs. Gold has historically maintained
            its purchasing power over long periods, making it an essential hedge for retirees.
          </p>

          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <strong className="text-green-600">Historical Fact:</strong>{" "}
                <span className="text-slate-600">
                  In 1970, one ounce of gold bought about 300 gallons of gasoline. Today, one ounce
                  still buys approximately 300 gallons. Gold maintained purchasing power while the
                  dollar lost over 85% of its value.
                </span>
              </div>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="retirement-longevity-calculator"
            subheadline="Protect your retirement purchasing power with gold. Augusta Precious Metals can help you add inflation protection to your IRA."
          />
        </div>
      </div>
    </Container>
  );
}
