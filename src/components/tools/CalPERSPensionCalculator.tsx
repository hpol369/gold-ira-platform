"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import {
  Calculator,
  DollarSign,
  Calendar,
  Users,
  TrendingUp,
  Info,
  ArrowRight,
  Building2,
  CheckCircle2,
  Heart,
  Clock,
  Scale,
} from "lucide-react";
import Link from "next/link";

// Employer types and their typical formulas
const EMPLOYER_TYPES = {
  state: {
    name: "State of California",
    description: "State government employees",
    classicFormula: "2at55",
    peprFormula: "2at62",
  },
  school: {
    name: "School District (Non-Teaching)",
    description: "Classified school employees",
    classicFormula: "2at55",
    peprFormula: "2at62",
  },
  local: {
    name: "Local Government",
    description: "City, county, special districts",
    classicFormula: "2at60",
    peprFormula: "2at62",
  },
  safety: {
    name: "Public Safety",
    description: "Police, fire, corrections",
    classicFormula: "3at50",
    peprFormula: "2.7at57",
  },
};

// All CalPERS formulas with detailed age factors
const FORMULAS = {
  "2at55": {
    name: "2% @ 55",
    description: "Classic State/School",
    minAge: 50,
    maxFactor: 2.418,
    maxAge: 63,
    ageFactors: {
      50: 1.10, 51: 1.22, 52: 1.34, 53: 1.46, 54: 1.58,
      55: 2.00, 56: 2.00, 57: 2.00, 58: 2.00, 59: 2.00,
      60: 2.00, 61: 2.00, 62: 2.00, 63: 2.418,
    },
  },
  "2at60": {
    name: "2% @ 60",
    description: "Classic Local Government",
    minAge: 50,
    maxFactor: 2.418,
    maxAge: 63,
    ageFactors: {
      50: 1.092, 51: 1.156, 52: 1.22, 53: 1.284, 54: 1.348,
      55: 1.412, 56: 1.476, 57: 1.54, 58: 1.604, 59: 1.668,
      60: 2.00, 61: 2.00, 62: 2.00, 63: 2.418,
    },
  },
  "2at62": {
    name: "2% @ 62",
    description: "PEPRA Miscellaneous",
    minAge: 52,
    maxFactor: 2.5,
    maxAge: 67,
    ageFactors: {
      52: 1.0, 53: 1.1, 54: 1.2, 55: 1.3, 56: 1.4,
      57: 1.5, 58: 1.6, 59: 1.7, 60: 1.8, 61: 1.9,
      62: 2.0, 63: 2.1, 64: 2.2, 65: 2.3, 66: 2.4, 67: 2.5,
    },
  },
  "3at50": {
    name: "3% @ 50",
    description: "Classic Safety",
    minAge: 50,
    maxFactor: 3.0,
    maxAge: 55,
    ageFactors: {
      50: 3.0, 51: 3.0, 52: 3.0, 53: 3.0, 54: 3.0, 55: 3.0,
    },
  },
  "2.7at57": {
    name: "2.7% @ 57",
    description: "PEPRA Safety",
    minAge: 50,
    maxFactor: 2.7,
    maxAge: 57,
    ageFactors: {
      50: 2.0, 51: 2.14, 52: 2.28, 53: 2.42, 54: 2.56,
      55: 2.60, 56: 2.65, 57: 2.7,
    },
  },
};

type FormulaKey = keyof typeof FORMULAS;
type EmployerKey = keyof typeof EMPLOYER_TYPES;

interface ComparisonResult {
  age: number;
  ageFactor: number;
  monthlyBenefit: number;
  annualBenefit: number;
  yearsToReceive: number;
  lifetimeBenefitTo85: number;
}

interface CalPERSResult {
  monthlyBenefit: number;
  annualBenefit: number;
  ageFactor: number;
  formula: string;
  comparison: ComparisonResult[];
  optimalAge: number;
  optimalBenefit: number;
  healthBenefitsEligible: boolean;
  healthVestingYears: number;
  reciprocityNote: string | null;
}

export function CalPERSPensionCalculator() {
  const [employerType, setEmployerType] = useState<EmployerKey>("state");
  const [membershipYear, setMembershipYear] = useState(2008);
  const [finalCompensation, setFinalCompensation] = useState(100000);
  const [serviceYears, setServiceYears] = useState(25);
  const [retirementAge, setRetirementAge] = useState(60);
  const [hasReciprocity, setHasReciprocity] = useState(false);
  const [reciprocityYears, setReciprocityYears] = useState(0);
  const [result, setResult] = useState<CalPERSResult | null>(null);

  // Determine formula based on employer type and membership year
  const formula = useMemo(() => {
    const employer = EMPLOYER_TYPES[employerType];
    return membershipYear >= 2013 ? employer.peprFormula : employer.classicFormula;
  }, [employerType, membershipYear]) as FormulaKey;

  const formulaData = FORMULAS[formula];

  function getAgeFactor(formulaKey: FormulaKey, age: number): number {
    const data = FORMULAS[formulaKey];
    const factors = data.ageFactors;
    const ages = Object.keys(factors).map(Number).sort((a, b) => a - b);
    const minAge = ages[0];
    const maxAge = ages[ages.length - 1];

    if (age < minAge) return factors[minAge as keyof typeof factors];
    if (age >= maxAge) return data.maxFactor;

    if (age in factors) return factors[age as keyof typeof factors];

    // Linear interpolation
    const lowerAge = ages.filter(a => a <= age).pop() || minAge;
    const upperAge = ages.find(a => a > age) || maxAge;
    const lowerFactor = factors[lowerAge as keyof typeof factors];
    const upperFactor = factors[upperAge as keyof typeof factors] || data.maxFactor;

    return lowerFactor + ((age - lowerAge) / (upperAge - lowerAge)) * (upperFactor - lowerFactor);
  }

  function calculateBenefit() {
    if (retirementAge < formulaData.minAge) {
      alert(`Minimum retirement age for ${formulaData.name} is ${formulaData.minAge}`);
      return;
    }

    const totalServiceYears = serviceYears + (hasReciprocity ? reciprocityYears : 0);
    const ageFactor = getAgeFactor(formula, retirementAge);

    // CalPERS formula: Age Factor % x Service Years x Final Compensation
    const annualBenefit = (ageFactor / 100) * totalServiceYears * finalCompensation;
    const monthlyBenefit = annualBenefit / 12;

    // Generate comparison for different retirement ages
    const comparison: ComparisonResult[] = [];
    for (let age = formulaData.minAge; age <= Math.min(67, formulaData.maxAge + 4); age++) {
      const factor = getAgeFactor(formula, age);
      const annual = (factor / 100) * totalServiceYears * finalCompensation;
      const monthly = annual / 12;
      const yearsTo85 = Math.max(0, 85 - age);
      const lifetime = annual * yearsTo85;

      comparison.push({
        age,
        ageFactor: factor,
        monthlyBenefit: monthly,
        annualBenefit: annual,
        yearsToReceive: yearsTo85,
        lifetimeBenefitTo85: lifetime,
      });
    }

    // Find optimal retirement age (highest lifetime benefit to age 85)
    const optimal = comparison.reduce((best, current) =>
      current.lifetimeBenefitTo85 > best.lifetimeBenefitTo85 ? current : best
    );

    // Health benefits eligibility (typically 10-20 years depending on employer)
    const healthVestingYears = employerType === "state" ? 10 : 20;
    const healthBenefitsEligible = totalServiceYears >= healthVestingYears;

    // Reciprocity note
    let reciprocityNote: string | null = null;
    if (hasReciprocity && reciprocityYears > 0) {
      reciprocityNote = `Your ${reciprocityYears} years of reciprocal service credit increases your total to ${totalServiceYears} years. Your highest salary from either system will be used for calculation.`;
    }

    setResult({
      monthlyBenefit,
      annualBenefit,
      ageFactor,
      formula: formulaData.name,
      comparison,
      optimalAge: optimal.age,
      optimalBenefit: optimal.lifetimeBenefitTo85,
      healthBenefitsEligible,
      healthVestingYears,
      reciprocityNote,
    });
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/10 border border-[#B22234]/30 rounded-full text-[#B22234] font-semibold text-sm mb-6">
              <Calculator className="h-4 w-4" />
              ADVANCED CALPERS CALCULATOR
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#000080] mb-4">
              CalPERS Pension Calculator
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Advanced CalPERS benefit estimator with employer-specific formulas,
              reciprocity support, and optimal retirement age analysis.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Input Panel - 2 columns */}
            <div className="lg:col-span-2 bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#000080] mb-6">Your CalPERS Details</h3>

              {/* Employer Type */}
              <div className="mb-6">
                <label className="block text-slate-600 text-sm mb-2">
                  Employer Type
                </label>
                <select
                  value={employerType}
                  onChange={(e) => setEmployerType(e.target.value as EmployerKey)}
                  className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#B22234]"
                >
                  {Object.entries(EMPLOYER_TYPES).map(([key, data]) => (
                    <option key={key} value={key}>
                      {data.name}
                    </option>
                  ))}
                </select>
                <p className="text-slate-500 text-xs mt-2">
                  {EMPLOYER_TYPES[employerType].description}
                </p>
              </div>

              {/* Membership Year */}
              <div className="mb-6">
                <label className="block text-slate-600 text-sm mb-2">
                  CalPERS Membership Year
                </label>
                <input
                  type="number"
                  value={membershipYear}
                  onChange={(e) => setMembershipYear(Number(e.target.value))}
                  min={1970}
                  max={2024}
                  className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#B22234]"
                />
                <div className={`text-sm mt-2 ${membershipYear >= 2013 ? "text-[#B22234]" : "text-green-600"}`}>
                  {membershipYear >= 2013 ? "PEPRA Member" : "Classic Member"} - {formulaData.name}
                </div>
              </div>

              {/* Final Compensation */}
              <div className="mb-6">
                <label className="block text-slate-600 text-sm mb-2">
                  Final Compensation
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={finalCompensation}
                    onChange={(e) => setFinalCompensation(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#B22234]"
                  />
                </div>
              </div>

              {/* Service Years */}
              <div className="mb-6">
                <label className="block text-slate-600 text-sm mb-2">
                  CalPERS Service Credit: <span className="text-[#B22234] font-bold">{serviceYears} years</span>
                </label>
                <input
                  type="range"
                  min={5}
                  max={40}
                  step={0.5}
                  value={serviceYears}
                  onChange={(e) => setServiceYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
              </div>

              {/* Retirement Age */}
              <div className="mb-6">
                <label className="block text-slate-600 text-sm mb-2">
                  Retirement Age: <span className="text-[#B22234] font-bold">{retirementAge}</span>
                </label>
                <input
                  type="range"
                  min={formulaData.minAge}
                  max={70}
                  step={1}
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
              </div>

              {/* Reciprocity Section */}
              <div className="mb-6 p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Scale className="h-5 w-5 text-blue-600" />
                  <h4 className="text-slate-900 font-semibold">Reciprocity with Other CA Systems</h4>
                </div>
                <label className="flex items-center gap-2 mb-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasReciprocity}
                    onChange={(e) => setHasReciprocity(e.target.checked)}
                    className="w-4 h-4 rounded bg-white border-slate-600 text-[#B22234] focus:ring-[#B22234]"
                  />
                  <span className="text-slate-600 text-sm">I have reciprocity with CalSTRS, UCRS, or 37 Act</span>
                </label>
                {hasReciprocity && (
                  <div>
                    <label className="block text-slate-500 text-xs mb-1">
                      Reciprocal Service Years
                    </label>
                    <input
                      type="number"
                      value={reciprocityYears}
                      onChange={(e) => setReciprocityYears(Number(e.target.value))}
                      min={0}
                      max={35}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm"
                    />
                  </div>
                )}
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateBenefit}
                className="w-full py-4 bg-[#B22234] hover:bg-[#8b1c2a] text-slate-900 font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="h-5 w-5" />
                Calculate Pension
              </button>
            </div>

            {/* Results Panel - 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              {result ? (
                <>
                  {/* Primary Result */}
                  <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900">Your Pension Estimate</h3>
                      <span className="px-3 py-1 bg-[#B22234]/10 text-[#B22234] text-sm font-semibold rounded-full">
                        {result.formula}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-5">
                        <div className="text-[#B22234] text-sm mb-1">Monthly Benefit at Age {retirementAge}</div>
                        <div className="text-4xl font-bold text-slate-900">{formatCurrency(result.monthlyBenefit)}</div>
                        <div className="text-slate-600 text-sm mt-1">{formatCurrency(result.annualBenefit)}/year</div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-5">
                        <div className="text-slate-600 text-sm mb-1">Age Factor Used</div>
                        <div className="text-3xl font-bold text-slate-900">{result.ageFactor.toFixed(3)}%</div>
                        <div className="text-slate-500 text-sm mt-1">
                          Max: {formulaData.maxFactor}% at age {formulaData.maxAge}+
                        </div>
                      </div>
                    </div>

                    {result.reciprocityNote && (
                      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Scale className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <p className="text-blue-300 text-sm">{result.reciprocityNote}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Optimal Retirement Analysis */}
                  <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-5 w-5 text-green-600" />
                      <h3 className="text-lg font-bold text-slate-900">Optimal Retirement Age Analysis</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <div className="text-green-600 text-sm mb-1">Optimal Retirement Age</div>
                        <div className="text-3xl font-bold text-slate-900">{result.optimalAge}</div>
                        <div className="text-slate-500 text-xs mt-1">Maximizes lifetime benefits to age 85</div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4">
                        <div className="text-slate-600 text-sm mb-1">Lifetime Benefit to 85</div>
                        <div className="text-2xl font-bold text-slate-900">{formatCurrency(result.optimalBenefit)}</div>
                        <div className="text-slate-500 text-xs mt-1">At optimal age {result.optimalAge}</div>
                      </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="py-2 px-3 text-left text-slate-500">Age</th>
                            <th className="py-2 px-3 text-right text-slate-500">Factor</th>
                            <th className="py-2 px-3 text-right text-slate-500">Monthly</th>
                            <th className="py-2 px-3 text-right text-slate-500">Lifetime to 85</th>
                          </tr>
                        </thead>
                        <tbody>
                          {result.comparison
                            .filter(c => c.age >= 55 && c.age <= 67)
                            .map((comp) => (
                            <tr
                              key={comp.age}
                              className={`border-b border-slate-200 ${
                                comp.age === retirementAge ? "bg-[#B22234]/10" :
                                comp.age === result.optimalAge ? "bg-green-500/10" : ""
                              }`}
                            >
                              <td className="py-2 px-3text-slate-900">
                                {comp.age}
                                {comp.age === retirementAge && <span className="text-[#B22234] ml-1">(selected)</span>}
                                {comp.age === result.optimalAge && <span className="text-green-600 ml-1">(optimal)</span>}
                              </td>
                              <td className="py-2 px-3 text-right text-slate-600">{comp.ageFactor.toFixed(2)}%</td>
                              <td className="py-2 px-3 text-right text-slate-600">{formatCurrency(comp.monthlyBenefit)}</td>
                              <td className="py-2 px-3 text-right text-slate-600">{formatCurrency(comp.lifetimeBenefitTo85)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Health Benefits Eligibility */}
                  <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="h-5 w-5 text-red-600" />
                      <h3 className="text-lg font-bold text-slate-900">Health Benefits Eligibility</h3>
                    </div>

                    <div className={`p-4 rounded-xl ${
                      result.healthBenefitsEligible
                        ? "bg-green-50 border border-green-200"
                        : "bg-[#B22234]/10 border border-[#B22234]/30"
                    }`}>
                      {result.healthBenefitsEligible ? (
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                          <div>
                            <p className="text-green-600 font-semibold">You are vested for health benefits</p>
                            <p className="text-slate-600 text-sm mt-1">
                              With {serviceYears + (hasReciprocity ? reciprocityYears : 0)} years of service,
                              you meet the {result.healthVestingYears}-year vesting requirement for your employer type.
                              You may be eligible for CalPERS health coverage in retirement.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start gap-3">
                          <Info className="h-6 w-6 text-[#B22234] flex-shrink-0" />
                          <div>
                            <p className="text-[#B22234] font-semibold">Not yet vested for health benefits</p>
                            <p className="text-slate-600 text-sm mt-1">
                              You need {result.healthVestingYears - (serviceYears + (hasReciprocity ? reciprocityYears : 0))} more years
                              to meet the {result.healthVestingYears}-year requirement for {EMPLOYER_TYPES[employerType].name} employees.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/get-started"
                    className="block w-full py-4 bg-[#B22234] hover:bg-[#8b1c2a] text-slate-900 font-bold text-center rounded-xl transition-all"
                  >
                    Protect Your CalPERS Pension with Gold
                    <ArrowRight className="inline ml-2 h-5 w-5" />
                  </Link>
                </>
              ) : (
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8">
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                      <Building2 className="h-10 w-10 text-slate-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Advanced CalPERS Analysis</h3>
                    <p className="text-slate-600 max-w-md">
                      Enter your CalPERS details and click &quot;Calculate Pension&quot; to see your
                      benefit estimate, optimal retirement age, and health benefits eligibility.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Educational Cards */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5">
              <Building2 className="h-7 w-7 text-[#B22234] mb-3" />
              <h4 className="text-slate-900 font-semibold mb-2">Employer-Specific</h4>
              <p className="text-slate-600 text-sm">
                Different employers have different CalPERS formulas. State and school employees typically have 2%@55 vs local government 2%@60.
              </p>
            </div>
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5">
              <Scale className="h-7 w-7 text-blue-600 mb-3" />
              <h4 className="text-slate-900 font-semibold mb-2">Reciprocity</h4>
              <p className="text-slate-600 text-sm">
                Service credit from CalSTRS, UC Retirement, or 37 Act systems can be combined with CalPERS for a larger pension.
              </p>
            </div>
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5">
              <Heart className="h-7 w-7 text-red-600 mb-3" />
              <h4 className="text-slate-900 font-semibold mb-2">Health Coverage</h4>
              <p className="text-slate-600 text-sm">
                Vesting for retiree health benefits varies by employer - typically 10 years for state, 20 years for local government.
              </p>
            </div>
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5">
              <Clock className="h-7 w-7 text-green-600 mb-3" />
              <h4 className="text-slate-900 font-semibold mb-2">Timing Matters</h4>
              <p className="text-slate-600 text-sm">
                The optimal retirement age balances higher monthly benefits (waiting) vs more years of payments (retiring earlier).
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
