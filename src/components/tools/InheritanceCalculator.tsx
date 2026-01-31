"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Gift,
  DollarSign,
  Calendar,
  TrendingUp,
  Calculator,
  AlertTriangle,
  Percent,
  Building2,
  FileText,
  Users,
  Clock,
  PiggyBank,
  Scale,
  ShieldCheck,
} from "lucide-react";

// State inheritance tax rates (only 6 states have inheritance tax)
const STATE_INHERITANCE_TAX: Record<string, { name: string; rates: string; exemptions: string }> = {
  IA: { name: "Iowa", rates: "0-6%", exemptions: "Lineal descendants exempt; phasing out by 2025" },
  KY: { name: "Kentucky", rates: "4-16%", exemptions: "Class A (spouse, children) exempt" },
  MD: { name: "Maryland", rates: "10%", exemptions: "Spouse, children, grandchildren exempt" },
  NE: { name: "Nebraska", rates: "1-18%", exemptions: "Spouse exempt; $40k for immediate family" },
  NJ: { name: "New Jersey", rates: "11-16%", exemptions: "Spouse, children, grandchildren exempt" },
  PA: { name: "Pennsylvania", rates: "4.5-15%", exemptions: "Spouse exempt; 4.5% for children" },
};

// Federal tax brackets for 2024
const FEDERAL_TAX_BRACKETS = [
  { min: 0, max: 11600, rate: 0.10 },
  { min: 11600, max: 47150, rate: 0.12 },
  { min: 47150, max: 100525, rate: 0.22 },
  { min: 100525, max: 191950, rate: 0.24 },
  { min: 191950, max: 243725, rate: 0.32 },
  { min: 243725, max: 609350, rate: 0.35 },
  { min: 609350, max: Infinity, rate: 0.37 },
];

type AssetType = "cash" | "inherited_ira" | "roth_ira" | "property" | "stocks" | "business";
type BeneficiaryType = "spouse" | "non_spouse" | "trust";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function calculateTax(income: number): number {
  let tax = 0;
  let remaining = income;

  for (const bracket of FEDERAL_TAX_BRACKETS) {
    if (remaining <= 0) break;
    const taxableInBracket = Math.min(remaining, bracket.max - bracket.min);
    tax += taxableInBracket * bracket.rate;
    remaining -= taxableInBracket;
  }

  return tax;
}

export function InheritanceCalculator() {
  // Inputs
  const [inheritanceAmount, setInheritanceAmount] = useState<number>(500000);
  const [assetType, setAssetType] = useState<AssetType>("inherited_ira");
  const [yourTaxBracket, setYourTaxBracket] = useState<number>(24);
  const [state, setState] = useState<string>("none");
  const [beneficiaryType, setBeneficiaryType] = useState<BeneficiaryType>("non_spouse");
  const [originalCostBasis, setOriginalCostBasis] = useState<number>(200000);
  const [growthRate, setGrowthRate] = useState<number>(7);
  const [currentAge, setCurrentAge] = useState<number>(50);

  // Calculations
  const calculations = useMemo(() => {
    const rate = yourTaxBracket / 100;
    const annualGrowth = growthRate / 100;

    // Step-up in basis calculation (for property/stocks)
    const stepUpBenefit = assetType === "property" || assetType === "stocks"
      ? (inheritanceAmount - originalCostBasis) * rate
      : 0;

    // State inheritance tax
    let stateInheritanceTax = 0;
    if (state !== "none" && STATE_INHERITANCE_TAX[state]) {
      // Simplified calculation - actual varies by relationship
      if (beneficiaryType === "non_spouse") {
        const avgRate = state === "PA" ? 0.045 : state === "KY" ? 0.06 : state === "MD" ? 0.10 : 0.05;
        stateInheritanceTax = inheritanceAmount * avgRate;
      }
    }

    // Inherited IRA 10-year rule calculations
    let iraDistributions: { year: number; balance: number; rmd: number; tax: number; afterTax: number }[] = [];
    let totalIraTax = 0;
    let totalAfterTax = 0;

    if (assetType === "inherited_ira" && beneficiaryType !== "spouse") {
      // Non-spouse beneficiaries must empty account within 10 years (SECURE Act)
      let balance = inheritanceAmount;
      const annualDistribution = inheritanceAmount / 10;

      for (let year = 1; year <= 10; year++) {
        const distribution = year < 10 ? annualDistribution : balance;
        const tax = distribution * rate;
        const afterTax = distribution - tax;

        iraDistributions.push({
          year,
          balance: balance,
          rmd: distribution,
          tax,
          afterTax,
        });

        totalIraTax += tax;
        totalAfterTax += afterTax;
        balance = (balance - distribution) * (1 + annualGrowth);
      }
    } else if (assetType === "inherited_ira" && beneficiaryType === "spouse") {
      // Spouse can roll over to own IRA - no immediate tax
      iraDistributions = [];
      totalAfterTax = inheritanceAmount; // Full value, taxed later
    } else if (assetType === "roth_ira") {
      // Roth IRA - no income tax (if qualified), but 10-year rule still applies for non-spouse
      totalAfterTax = inheritanceAmount;
      totalIraTax = 0;
    }

    // Calculate after-tax value for different asset types
    let afterTaxValue = inheritanceAmount;
    let immediatesTax = 0;

    switch (assetType) {
      case "cash":
        afterTaxValue = inheritanceAmount - stateInheritanceTax;
        break;
      case "inherited_ira":
        afterTaxValue = beneficiaryType === "spouse" ? inheritanceAmount : totalAfterTax;
        immediatesTax = beneficiaryType === "spouse" ? 0 : totalIraTax;
        break;
      case "roth_ira":
        afterTaxValue = inheritanceAmount; // Tax-free
        break;
      case "property":
      case "stocks":
        // Step-up in basis - no tax on inherited gains
        afterTaxValue = inheritanceAmount - stateInheritanceTax;
        break;
      case "business":
        afterTaxValue = inheritanceAmount - stateInheritanceTax;
        break;
    }

    // Investment growth projections (10 years)
    const projections: { year: number; conservative: number; moderate: number; aggressive: number; goldIra: number }[] = [];
    let conservativeBalance = afterTaxValue;
    let moderateBalance = afterTaxValue;
    let aggressiveBalance = afterTaxValue;
    let goldIraBalance = afterTaxValue;

    for (let year = 0; year <= 20; year++) {
      projections.push({
        year,
        conservative: conservativeBalance,
        moderate: moderateBalance,
        aggressive: aggressiveBalance,
        goldIra: goldIraBalance,
      });

      conservativeBalance *= 1.04; // 4% bonds/CDs
      moderateBalance *= 1.07; // 7% balanced
      aggressiveBalance *= 1.10; // 10% stocks
      goldIraBalance *= 1.06; // 6% gold historical average
    }

    return {
      stepUpBenefit,
      stateInheritanceTax,
      iraDistributions,
      totalIraTax,
      totalAfterTax,
      afterTaxValue,
      immediatesTax,
      projections,
      stateInfo: state !== "none" ? STATE_INHERITANCE_TAX[state] : null,
    };
  }, [inheritanceAmount, assetType, yourTaxBracket, state, beneficiaryType, originalCostBasis, growthRate, currentAge]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-purple-500/30">
          <Gift className="h-4 w-4" />
          Inheritance Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
          Inheritance Tax Calculator
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Calculate taxes on your inheritance, understand the 10-year rule for inherited IRAs, and explore smart investment strategies.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Inheritance Details */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <Gift className="h-5 w-5 text-purple-700" />
              </div>
              <h3 className="text-lg font-semibold">Inheritance Details</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Inheritance Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={inheritanceAmount}
                    onChange={(e) => setInheritanceAmount(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-purple-500"
                    min="10000"
                    step="10000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Asset Type
                </label>
                <select
                  value={assetType}
                  onChange={(e) => setAssetType(e.target.value as AssetType)}
                  className="w-full bg-slate-100 border border-slate-700 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-500"
                >
                  <option value="cash">Cash / Bank Accounts</option>
                  <option value="inherited_ira">Traditional IRA / 401(k)</option>
                  <option value="roth_ira">Roth IRA</option>
                  <option value="property">Real Estate</option>
                  <option value="stocks">Stocks / Investments</option>
                  <option value="business">Business / Partnership</option>
                </select>
              </div>

              {(assetType === "property" || assetType === "stocks") && (
                <div>
                  <label className="text-sm text-slate-500 mb-2 block">
                    Decedent&apos;s Original Cost Basis
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                    <input
                      type="number"
                      value={originalCostBasis}
                      onChange={(e) => setOriginalCostBasis(Number(e.target.value))}
                      className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-purple-500"
                      min="0"
                      step="10000"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    What they originally paid - used to calculate step-up in basis
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Beneficiary Info */}
          {assetType === "inherited_ira" && (
            <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Beneficiary Type</h3>
              </div>

              <div className="space-y-2">
                {[
                  { value: "spouse" as BeneficiaryType, label: "Spouse", desc: "Can roll over to own IRA" },
                  { value: "non_spouse" as BeneficiaryType, label: "Non-Spouse", desc: "10-year distribution rule" },
                  { value: "trust" as BeneficiaryType, label: "Trust Beneficiary", desc: "Complex rules apply" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setBeneficiaryType(option.value)}
                    className={`w-full p-4 rounded-lg border text-left transition-all ${
                      beneficiaryType === option.value
                        ? "bg-blue-500/20 border-blue-500/50"
                        : "bg-slate-50 border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <div className="font-semibold text-slate-900">{option.label}</div>
                    <div className="text-sm text-slate-500">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Your Tax Info */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <Percent className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Your Tax Situation</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Your Marginal Tax Bracket: <span className="text-slate-900 font-semibold">{yourTaxBracket}%</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="37"
                  value={yourTaxBracket}
                  onChange={(e) => setYourTaxBracket(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>10%</span>
                  <span>24%</span>
                  <span>37%</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Your State (Inheritance Tax)
                </label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full bg-slate-100 border border-slate-700 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-green-500"
                >
                  <option value="none">No State Inheritance Tax</option>
                  <option value="IA">Iowa</option>
                  <option value="KY">Kentucky</option>
                  <option value="MD">Maryland</option>
                  <option value="NE">Nebraska</option>
                  <option value="NJ">New Jersey</option>
                  <option value="PA">Pennsylvania</option>
                </select>
                {calculations.stateInfo && (
                  <p className="text-xs text-[#B22234] mt-2">
                    {calculations.stateInfo.name}: {calculations.stateInfo.rates} | {calculations.stateInfo.exemptions}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Your Current Age: <span className="text-slate-900 font-semibold">{currentAge}</span>
                </label>
                <input
                  type="range"
                  min="25"
                  max="75"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Results */}
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
            <h3 className="text-sm text-slate-500 mb-2">After-Tax Value</h3>
            <div className="text-4xl font-bold text-purple-700 mb-4">
              {formatCurrency(calculations.afterTaxValue)}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Gross Inheritance</span>
                <span className="text-slate-900">{formatCurrency(inheritanceAmount)}</span>
              </div>
              {calculations.immediatesTax > 0 && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Income Tax (over 10 years)</span>
                  <span className="text-red-600">-{formatCurrency(calculations.immediatesTax)}</span>
                </div>
              )}
              {calculations.stateInheritanceTax > 0 && (
                <div className="flex justify-between">
                  <span className="text-slate-500">State Inheritance Tax</span>
                  <span className="text-red-600">-{formatCurrency(calculations.stateInheritanceTax)}</span>
                </div>
              )}
              {calculations.stepUpBenefit > 0 && (
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="text-slate-500">Step-Up in Basis Benefit</span>
                  <span className="text-green-600">+{formatCurrency(calculations.stepUpBenefit)} saved</span>
                </div>
              )}
            </div>
          </div>

          {/* Asset Type Specific Info */}
          {assetType === "inherited_ira" && beneficiaryType !== "spouse" && (
            <div className="bg-[#B22234]/10 backdrop-blur-sm rounded-xl p-6 border border-[#B22234]/30">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-[#B22234]" />
                <h3 className="text-lg font-semibold text-[#B22234]">10-Year Distribution Rule</h3>
              </div>

              <p className="text-slate-600 text-sm mb-4">
                Under the SECURE Act, non-spouse beneficiaries must withdraw all funds within 10 years.
                Here&apos;s an equal distribution strategy:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="py-2 text-left text-slate-500">Year</th>
                      <th className="py-2 text-right text-slate-500">Distribution</th>
                      <th className="py-2 text-right text-slate-500">Tax ({yourTaxBracket}%)</th>
                      <th className="py-2 text-right text-slate-500">After Tax</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculations.iraDistributions.slice(0, 5).map((dist) => (
                      <tr key={dist.year} className={dist.year % 2 === 0 ? "bg-slate-50" : ""}>
                        <td className="py-2 text-slate-600">{dist.year}</td>
                        <td className="py-2 text-righttext-slate-900">{formatCurrency(dist.rmd)}</td>
                        <td className="py-2 text-right text-red-600">{formatCurrency(dist.tax)}</td>
                        <td className="py-2 text-right text-green-600">{formatCurrency(dist.afterTax)}</td>
                      </tr>
                    ))}
                    <tr className="border-t border-slate-200 font-semibold">
                      <td className="py-2text-slate-900">Total (10 yr)</td>
                      <td className="py-2 text-righttext-slate-900">{formatCurrency(inheritanceAmount)}</td>
                      <td className="py-2 text-right text-red-600">{formatCurrency(calculations.totalIraTax)}</td>
                      <td className="py-2 text-right text-green-600">{formatCurrency(calculations.totalAfterTax)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {assetType === "roth_ira" && (
            <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-green-600">Roth IRA Advantage</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Inherited Roth IRAs are income tax-free if the account was open 5+ years. Non-spouse beneficiaries
                still follow the 10-year rule but can let it grow tax-free and withdraw in year 10.
              </p>
              <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-slate-500">Tax Savings vs Traditional IRA</span>
                  <span className="text-green-600 font-bold">{formatCurrency(inheritanceAmount * (yourTaxBracket / 100))}</span>
                </div>
              </div>
            </div>
          )}

          {(assetType === "property" || assetType === "stocks") && calculations.stepUpBenefit > 0 && (
            <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center gap-2 mb-4">
                <Scale className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-green-600">Step-Up in Basis Benefit</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                When you inherit {assetType === "property" ? "property" : "stocks"}, your cost basis &quot;steps up&quot;
                to the fair market value at death. This eliminates capital gains on appreciation during the
                decedent&apos;s lifetime!
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Original Cost Basis</span>
                  <span className="text-slate-900">{formatCurrency(originalCostBasis)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Value at Inheritance</span>
                  <span className="text-slate-900">{formatCurrency(inheritanceAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Gain Avoided</span>
                  <span className="text-slate-900">{formatCurrency(inheritanceAmount - originalCostBasis)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="text-slate-600 font-semibold">Tax Savings (at {yourTaxBracket}%)</span>
                  <span className="text-green-600 font-bold">{formatCurrency(calculations.stepUpBenefit)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Investment Projections */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Investment Growth Scenarios</h3>
            </div>

            <p className="text-slate-600 text-sm mb-4">
              How your {formatCurrency(calculations.afterTaxValue)} after-tax inheritance could grow:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-2 text-left text-slate-500">Year</th>
                    <th className="py-2 text-right text-blue-600">Conservative (4%)</th>
                    <th className="py-2 text-right text-green-600">Moderate (7%)</th>
                    <th className="py-2 text-right text-[#B22234]">Gold IRA (6%)</th>
                  </tr>
                </thead>
                <tbody>
                  {calculations.projections.filter((_, i) => i === 0 || i === 5 || i === 10 || i === 20).map((proj, idx) => (
                    <tr key={proj.year} className={idx % 2 === 0 ? "bg-slate-50" : ""}>
                      <td className="py-2 text-slate-600">{proj.year}</td>
                      <td className="py-2 text-right text-blue-600">{formatCurrency(proj.conservative)}</td>
                      <td className="py-2 text-right text-green-600">{formatCurrency(proj.moderate)}</td>
                      <td className="py-2 text-right text-[#B22234]">{formatCurrency(proj.goldIra)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* What to Do With Inheritance Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
          Smart Steps When You Receive an Inheritance
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Don&apos;t Rush</h3>
            <p className="text-slate-600 text-sm">
              Take 6-12 months before making major decisions. Park funds in a high-yield savings account while you plan.
            </p>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <FileText className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Understand Tax Rules</h3>
            <p className="text-slate-600 text-sm">
              Different assets have different tax treatments. Inherited IRAs require action within timelines. Consult a CPA.
            </p>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="w-10 h-10 bg-[#B22234]/10 rounded-lg flex items-center justify-center mb-4">
              <Scale className="h-5 w-5 text-[#B22234]" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Diversify Wisely</h3>
            <p className="text-slate-600 text-sm">
              Don&apos;t put all inherited assets in one place. Consider a mix of stocks, bonds, real estate, and precious metals.
            </p>
          </div>
        </div>
      </div>

      {/* Gold IRA Bridge */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-[#B22234]/5 backdrop-blur-sm rounded-xl p-8 border border-[#B22234]/30">
          <div className="flex items-center gap-3 mb-6">
            <PiggyBank className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-bold">Preserve Your Inheritance Across Generations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <div className="text-[#B22234] font-semibold mb-2">Wealth Preservation</div>
              <p className="text-slate-600 text-sm">
                An inheritance represents a lifetime of someone&apos;s work. Protect it from inflation and market volatility with physical gold that has held value for 5,000+ years.
              </p>
            </div>

            <div>
              <div className="text-[#B22234] font-semibold mb-2">Tax-Advantaged Growth</div>
              <p className="text-slate-600 text-sm">
                A Gold IRA lets you grow your inheritance tax-deferred (or tax-free with Roth). Pass wealth to the next generation with built-in inflation protection.
              </p>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="inheritance-calculator"
            subheadline="Diversify your inheritance with a Gold IRA - preserves wealth across generations while providing portfolio stability."
          />
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding Inheritance Taxes</h2>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">Estate Tax vs Inheritance Tax</h3>
            <p className="text-slate-500 mb-4">
              <strong className="text-slate-900">Estate Tax:</strong> Federal tax paid by the estate before distribution.
              In 2024, estates under $13.61 million ($27.22 million for married couples) are exempt - meaning
              99.9% of Americans pay zero federal estate tax.
            </p>
            <p className="text-slate-500">
              <strong className="text-slate-900">Inheritance Tax:</strong> State tax paid by the beneficiary after
              receiving assets. Only 6 states have inheritance tax (Iowa, Kentucky, Maryland, Nebraska, New Jersey,
              Pennsylvania), and most exempt spouses and direct descendants.
            </p>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">The SECURE Act &amp; Inherited IRAs</h3>
            <p className="text-slate-500 mb-4">
              The SECURE Act of 2019 eliminated the &quot;stretch IRA&quot; for most non-spouse beneficiaries. Now,
              inherited traditional IRAs must be emptied within 10 years of the original owner&apos;s death.
            </p>
            <ul className="space-y-2 text-slate-500">
              <li>- <strong className="text-slate-900">Spouse beneficiaries:</strong> Can roll over to their own IRA and follow normal RMD rules</li>
              <li>- <strong className="text-slate-900">Non-spouse beneficiaries:</strong> Must withdraw all funds within 10 years (all distributions are taxable income)</li>
              <li>- <strong className="text-slate-900">Eligible Designated Beneficiaries:</strong> Minor children, disabled/chronically ill, and those within 10 years of the decedent&apos;s age can still stretch</li>
            </ul>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">Step-Up in Basis Explained</h3>
            <p className="text-slate-500 mb-4">
              One of the most valuable tax benefits in inheritance law: when you inherit appreciated assets
              (real estate, stocks), your cost basis &quot;steps up&quot; to the fair market value at the date of death.
            </p>
            <div className="bg-slate-100 rounded-lg p-4">
              <p className="text-sm text-slate-500">
                <strong className="text-slate-900">Example:</strong> Parent bought stock for $50,000, now worth $500,000.
                If sold during their lifetime: $450,000 taxable gain. If inherited: your basis becomes $500,000 -
                sell immediately and pay zero capital gains tax!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto mt-12">
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-slate-900 font-semibold mb-2">Important Disclaimer</h3>
              <p className="text-slate-600 text-sm">
                This calculator provides estimates for educational purposes only. Tax laws are complex and vary
                by situation. Inherited IRA rules depend on your relationship to the decedent and account type.
                This is not tax or legal advice. Consult a qualified tax professional or estate attorney for
                your specific situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
