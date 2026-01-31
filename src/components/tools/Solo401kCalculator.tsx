"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Calculator,
  DollarSign,
  Building2,
  TrendingUp,
  Briefcase,
  User,
  Info,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
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
  return `$${value.toLocaleString()}`;
}

function formatFullCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

// 2024 Contribution Limits
const LIMITS_2024 = {
  employeeDeferral: 23000,
  catchUp: 7500,
  totalContribution: 69000,
  totalWithCatchUp: 76500,
  socialSecurityWageBase: 168600,
  selfEmploymentTaxRate: 0.153,
  halfSETaxRate: 0.0765,
};

type BusinessType = "sole-prop" | "llc" | "s-corp";

export function Solo401kCalculator() {
  // Inputs
  const [businessType, setBusinessType] = useState<BusinessType>("sole-prop");
  const [netIncome, setNetIncome] = useState<number>(150000);
  const [w2Wages, setW2Wages] = useState<number>(75000); // For S-Corp
  const [age, setAge] = useState<number>(50);
  const [otherContributions, setOtherContributions] = useState<number>(0);
  const [taxBracket, setTaxBracket] = useState<number>(32);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  const isCatchUpEligible = age >= 50;

  // Calculations
  const calculations = useMemo(() => {
    let compensation = 0;
    let selfEmploymentTax = 0;
    let halfSETax = 0;

    // Calculate compensation based on business type
    if (businessType === "s-corp") {
      // S-Corp: Based on W-2 wages
      compensation = w2Wages;
    } else {
      // Sole Prop / LLC: Net SE income minus 1/2 SE tax
      selfEmploymentTax = netIncome * LIMITS_2024.selfEmploymentTaxRate;
      halfSETax = netIncome * LIMITS_2024.halfSETaxRate;
      compensation = netIncome - halfSETax;
    }

    // Employee deferral (elective contribution)
    const maxEmployeeDeferral = LIMITS_2024.employeeDeferral;
    const catchUpAmount = isCatchUpEligible ? LIMITS_2024.catchUp : 0;
    const totalEmployeeLimit = maxEmployeeDeferral + catchUpAmount;

    // Can't contribute more than earned
    const actualEmployeeDeferral = Math.min(totalEmployeeLimit, compensation);

    // Employer profit sharing (25% of compensation)
    const maxProfitSharing = compensation * 0.25;

    // Total contribution limit
    const maxTotalLimit = isCatchUpEligible
      ? LIMITS_2024.totalWithCatchUp
      : LIMITS_2024.totalContribution;

    // Calculate actual max contribution (employee + employer, minus other plan contributions)
    const availableLimit = Math.max(0, maxTotalLimit - otherContributions);

    // Total max contribution
    const totalMaxContribution = Math.min(
      actualEmployeeDeferral + maxProfitSharing,
      availableLimit
    );

    // Optimal split (max out employee first, then employer)
    const optimalEmployeeDeferral = Math.min(actualEmployeeDeferral, availableLimit);
    const remainingForEmployer = Math.max(0, availableLimit - optimalEmployeeDeferral);
    const optimalEmployerContribution = Math.min(maxProfitSharing, remainingForEmployer);

    // Tax savings
    const taxSavings = totalMaxContribution * (taxBracket / 100);

    // If they maxed a traditional 401k, what's the incremental savings vs SEP IRA?
    // SEP IRA is just employer contribution (25%), no employee deferral
    const sepMaxContribution = Math.min(maxProfitSharing, LIMITS_2024.totalContribution);
    const solo401kAdvantage = totalMaxContribution - sepMaxContribution;

    // Calculate what % of income can be deferred
    const percentOfIncome = (totalMaxContribution / (businessType === "s-corp" ? w2Wages : netIncome)) * 100;

    // 10-year projection at 7% return
    const futureValue = totalMaxContribution * Math.pow(1.07, 10);
    const annualContributionFV = totalMaxContribution * ((Math.pow(1.07, 10) - 1) / 0.07) * 1.07;

    return {
      compensation,
      selfEmploymentTax,
      halfSETax,
      maxEmployeeDeferral: actualEmployeeDeferral,
      catchUpAmount,
      totalEmployeeLimit,
      maxProfitSharing,
      maxTotalLimit,
      totalMaxContribution,
      optimalEmployeeDeferral,
      optimalEmployerContribution,
      taxSavings,
      sepMaxContribution,
      solo401kAdvantage,
      percentOfIncome,
      futureValue,
      annualContributionFV,
      otherContributionsImpact: otherContributions > 0,
    };
  }, [businessType, netIncome, w2Wages, age, otherContributions, taxBracket, isCatchUpEligible]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-purple-500/30">
          <Briefcase className="h-4 w-4" />
          Self-Employed Retirement Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Solo 401(k) Calculator
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Calculate your maximum Solo 401(k) contribution as a self-employed individual. Includes 2024 limits, catch-up contributions, and tax savings.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Business Type */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <Building2 className="h-5 w-5 text-purple-700" />
              </div>
              <h3 className="text-lg font-semibold">Business Type</h3>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "sole-prop", label: "Sole Prop", desc: "Schedule C" },
                { value: "llc", label: "LLC", desc: "Single Member" },
                { value: "s-corp", label: "S-Corp", desc: "W-2 Wages" },
              ].map((type) => (
                <button
                  key={type.value}
                  onClick={() => setBusinessType(type.value as BusinessType)}
                  className={`p-4 rounded-xl border transition-all ${
                    businessType === type.value
                      ? "bg-purple-500/20 border-purple-500text-slate-900"
                      : "bg-slate-100 border-slate-700 text-slate-500 hover:border-slate-600"
                  }`}
                >
                  <div className="font-semibold">{type.label}</div>
                  <div className="text-xs mt-1 opacity-75">{type.desc}</div>
                </button>
              ))}
            </div>

            <div className="mt-4 p-3 bg-slate-50 rounded-lg text-sm text-slate-500">
              {businessType === "s-corp" ? (
                <p>S-Corp: Contributions based on W-2 wages you pay yourself.</p>
              ) : (
                <p>Sole Prop/LLC: Contributions based on net self-employment income minus 1/2 SE tax.</p>
              )}
            </div>
          </div>

          {/* Income */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Income</h3>
            </div>

            <div className="space-y-4">
              {businessType === "s-corp" ? (
                <div>
                  <label className="text-sm text-slate-500 mb-2 block">
                    W-2 Wages (paid to yourself)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                    <input
                      type="number"
                      value={w2Wages}
                      onChange={(e) => setW2Wages(Number(e.target.value))}
                      className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-purple-500"
                      min="0"
                      step="5000"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Must be &quot;reasonable compensation&quot; for work performed
                  </p>
                </div>
              ) : (
                <div>
                  <label className="text-sm text-slate-500 mb-2 block">
                    Net Self-Employment Income
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                    <input
                      type="number"
                      value={netIncome}
                      onChange={(e) => setNetIncome(Number(e.target.value))}
                      className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-purple-500"
                      min="0"
                      step="5000"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Business income minus business expenses (Schedule C line 31)
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Personal Info */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Personal Info</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                  Your Age: {age}
                  {isCatchUpEligible && (
                    <span className="text-green-600 text-xs bg-green-500/20 px-2 py-0.5 rounded">
                      Catch-up eligible
                    </span>
                  )}
                </label>
                <input
                  type="range"
                  min="25"
                  max="75"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Tax Bracket: {taxBracket}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="37"
                  value={taxBracket}
                  onChange={(e) => setTaxBracket(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>10%</span>
                  <span>22%</span>
                  <span>37%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Options (Collapsible) */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#B22234]/10 rounded-lg border border-[#B22234]/30">
                  <TrendingUp className="h-5 w-5 text-[#B22234]" />
                </div>
                <h3 className="text-lg font-semibold">Advanced Options</h3>
              </div>
              <span className={`text-slate-500 transition-transform ${showAdvanced ? 'rotate-180' : ''}`}>
                &#9660;
              </span>
            </button>

            {showAdvanced && (
              <div className="space-y-4 mt-6">
                <div>
                  <label className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                    Other Retirement Plan Contributions
                    <div className="group relative">
                      <Info className="h-4 w-4 text-slate-500 cursor-help" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-slate-100 text-xs text-slate-600 rounded-lg p-3 border border-slate-700 z-10">
                        If you have another job with a 401(k), your employee deferral limit is combined. Enter your other contributions here.
                      </div>
                    </div>
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                    <input
                      type="number"
                      value={otherContributions}
                      onChange={(e) => setOtherContributions(Number(e.target.value))}
                      className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-[#B22234]"
                      min="0"
                      step="1000"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Employee deferrals from other employer plans (401k, 403b)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Result */}
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <div className="text-center mb-6">
              <div className="text-sm text-slate-500 mb-2">Maximum Solo 401(k) Contribution</div>
              <div className="text-5xl font-bold text-purple-700">
                {formatCurrency(calculations.totalMaxContribution)}
              </div>
              <div className="text-sm text-slate-500 mt-2">
                {formatFullCurrency(calculations.totalMaxContribution)} for 2024
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <div className="text-sm text-slate-500">Employee Deferral</div>
                <div className="text-xl font-bold text-blue-600">
                  {formatCurrency(calculations.optimalEmployeeDeferral)}
                </div>
                {isCatchUpEligible && calculations.catchUpAmount > 0 && (
                  <div className="text-xs text-green-600 mt-1">
                    +${LIMITS_2024.catchUp.toLocaleString()} catch-up
                  </div>
                )}
              </div>
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <div className="text-sm text-slate-500">Employer Contribution</div>
                <div className="text-xl font-bold text-green-600">
                  {formatCurrency(calculations.optimalEmployerContribution)}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  25% of compensation
                </div>
              </div>
            </div>
          </div>

          {/* Tax Savings */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Wallet className="h-5 w-5 text-green-600" />
              Tax Savings
            </h3>

            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {formatFullCurrency(calculations.taxSavings)}
                </div>
                <div className="text-sm text-slate-500">
                  Estimated federal tax savings this year ({taxBracket}% bracket)
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-500">Effective contribution cost</span>
                <span className="font-semibold text-slate-900">
                  {formatFullCurrency(calculations.totalMaxContribution - calculations.taxSavings)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-500">% of income sheltered</span>
                <span className="font-semibold text-purple-700">
                  {calculations.percentOfIncome.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {/* Comparison to SEP IRA */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-[#B22234]" />
              Solo 401(k) vs SEP IRA
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-500">Solo 401(k) Max</span>
                  <span className="font-semibold text-purple-700">
                    {formatFullCurrency(calculations.totalMaxContribution)}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div
                    className="h-full bg-purple-500 rounded-full"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-500">SEP IRA Max</span>
                  <span className="font-semibold text-[#B22234]">
                    {formatFullCurrency(calculations.sepMaxContribution)}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{
                      width: `${(calculations.sepMaxContribution / calculations.totalMaxContribution) * 100}%`
                    }}
                  />
                </div>
              </div>

              {calculations.solo401kAdvantage > 0 && (
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                  <p className="text-sm text-purple-700">
                    <strong>Solo 401(k) Advantage:</strong>{" "}
                    {formatFullCurrency(calculations.solo401kAdvantage)} more per year vs SEP IRA
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 10-Year Projection */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              10-Year Growth Projection
            </h3>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="text-sm text-slate-500 mb-1">One-time contribution grows to</div>
                <div className="text-2xl font-bold text-blue-600">
                  {formatFullCurrency(calculations.futureValue)}
                </div>
                <div className="text-xs text-slate-500">At 7% annual return</div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-sm text-slate-500 mb-1">Annual contributions for 10 years</div>
                <div className="text-2xl font-bold text-blue-600">
                  {formatCurrency(calculations.annualContributionFV)}
                </div>
                <div className="text-xs text-slate-500">
                  Contributing {formatFullCurrency(calculations.totalMaxContribution)}/year
                </div>
              </div>
            </div>
          </div>

          {/* 2024 Limits Reference */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4">2024 Contribution Limits</h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Employee deferral</span>
                <span className="text-slate-900">${LIMITS_2024.employeeDeferral.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Catch-up (50+)</span>
                <span className="text-green-600">+${LIMITS_2024.catchUp.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2 mt-2">
                <span className="text-slate-500">Total limit (under 50)</span>
                <span className="text-slate-900">${LIMITS_2024.totalContribution.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Total limit (50+)</span>
                <span className="text-slate-900">${LIMITS_2024.totalWithCatchUp.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Bridge Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-[#B22234]/5 backdrop-blur-sm rounded-xl p-8 border border-[#B22234]/30">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-bold">Solo 401(k) with Checkbook Control</h2>
          </div>

          <p className="text-slate-500 mb-6">
            A self-directed Solo 401(k) with &quot;checkbook control&quot; lets you invest in physical gold directly - without custodian approval for each purchase. This is one of the most powerful ways to hold precious metals in a retirement account.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-[#B22234] font-semibold mb-2">Checkbook Control</div>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Write checks from plan account</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Buy gold directly from dealers</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>No custodian fees per transaction</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-[#B22234] font-semibold mb-2">Eligible Gold</div>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>American Gold Eagles</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Canadian Maple Leafs</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>.995+ purity bars</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-[#B22234] font-semibold mb-2">Key Rules</div>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-[#B22234] flex-shrink-0 mt-0.5" />
                  <span>Gold must be stored in approved depository</span>
                </li>
                <li className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-[#B22234] flex-shrink-0 mt-0.5" />
                  <span>Cannot hold gold personally</span>
                </li>
                <li className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-[#B22234] flex-shrink-0 mt-0.5" />
                  <span>Annual reporting required</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
              <p className="text-slate-600 text-sm">
                <strong className="text-[#B22234]">Key Insight:</strong> A Solo 401(k) with checkbook control lets you invest in physical gold directly. This gives you more control and potentially lower fees than a traditional Gold IRA, while sheltering up to ${formatFullCurrency(calculations.totalMaxContribution)} per year.
              </p>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="solo-401k-calculator"
            subheadline="Self-employed? Maximize your retirement savings with a Solo 401(k) that allows gold investments. Learn how to set up checkbook control for direct precious metals purchases."
          />
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding Solo 401(k) Contributions</h2>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">Two Types of Contributions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-blue-600 font-semibold mb-2">1. Employee Deferral</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li>Up to $23,000 (2024)</li>
                  <li>+$7,500 catch-up if 50+</li>
                  <li>Can be Traditional or Roth</li>
                  <li>Shared limit across all 401(k)s</li>
                </ul>
              </div>
              <div>
                <h4 className="text-green-600 font-semibold mb-2">2. Employer Profit Sharing</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li>Up to 25% of compensation</li>
                  <li>Must be Traditional (pre-tax)</li>
                  <li>Separate limit per employer</li>
                  <li>Optional - contribute any amount</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">Business Type Calculations</h3>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="text-purple-700 font-semibold mb-2">Sole Proprietor / Single-Member LLC</h4>
                <p className="text-slate-600 text-sm mb-2">
                  Compensation = Net SE Income - (1/2 of SE Tax)
                </p>
                <p className="text-slate-500 text-xs">
                  Example: $150,000 net income = ~$138,725 compensation
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="text-purple-700 font-semibold mb-2">S-Corporation</h4>
                <p className="text-slate-600 text-sm mb-2">
                  Compensation = W-2 wages paid to yourself
                </p>
                <p className="text-slate-500 text-xs">
                  Must pay &quot;reasonable compensation&quot; for services performed
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">Solo 401(k) vs Other Options</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="px-3 py-2 text-left text-slate-600">Plan Type</th>
                  <th className="px-3 py-2 text-right text-slate-600">2024 Max</th>
                  <th className="px-3 py-2 text-left text-slate-600">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-3 py-2 text-purple-700 font-semibold">Solo 401(k)</td>
                  <td className="px-3 py-2 text-righttext-slate-900">$69,000 ($76,500 if 50+)</td>
                  <td className="px-3 py-2 text-slate-500">No employees, max savings</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="px-3 py-2 text-[#B22234] font-semibold">SEP IRA</td>
                  <td className="px-3 py-2 text-righttext-slate-900">$69,000</td>
                  <td className="px-3 py-2 text-slate-500">Simple setup, lower income</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="px-3 py-2 text-blue-600 font-semibold">SIMPLE IRA</td>
                  <td className="px-3 py-2 text-righttext-slate-900">$16,000 ($19,500 if 50+)</td>
                  <td className="px-3 py-2 text-slate-500">Small business with employees</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-green-600 font-semibold">Traditional/Roth IRA</td>
                  <td className="px-3 py-2 text-righttext-slate-900">$7,000 ($8,000 if 50+)</td>
                  <td className="px-3 py-2 text-slate-500">Additional savings after 401k</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
}
