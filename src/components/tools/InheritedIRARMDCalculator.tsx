"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Calculator,
  DollarSign,
  Calendar,
  Users,
  AlertTriangle,
  TrendingDown,
  Info,
  CheckCircle2,
  Clock,
  Heart,
} from "lucide-react";

// IRS Single Life Expectancy Table (for inherited IRAs)
const singleLifeExpectancyTable: Record<number, number> = {
  0: 84.6, 1: 83.7, 2: 82.8, 3: 81.8, 4: 80.8, 5: 79.8, 6: 78.8, 7: 77.9,
  8: 76.9, 9: 75.9, 10: 74.9, 11: 73.9, 12: 72.9, 13: 71.9, 14: 70.9,
  15: 69.9, 16: 69.0, 17: 68.0, 18: 67.0, 19: 66.0, 20: 65.0, 21: 64.1,
  22: 63.1, 23: 62.1, 24: 61.1, 25: 60.2, 26: 59.2, 27: 58.2, 28: 57.3,
  29: 56.3, 30: 55.3, 31: 54.4, 32: 53.4, 33: 52.5, 34: 51.5, 35: 50.5,
  36: 49.6, 37: 48.6, 38: 47.7, 39: 46.7, 40: 45.7, 41: 44.8, 42: 43.8,
  43: 42.9, 44: 41.9, 45: 41.0, 46: 40.0, 47: 39.0, 48: 38.1, 49: 37.1,
  50: 36.2, 51: 35.3, 52: 34.3, 53: 33.4, 54: 32.5, 55: 31.6, 56: 30.6,
  57: 29.8, 58: 28.9, 59: 28.0, 60: 27.1, 61: 26.2, 62: 25.4, 63: 24.5,
  64: 23.7, 65: 22.9, 66: 22.0, 67: 21.2, 68: 20.4, 69: 19.6, 70: 18.8,
  71: 18.0, 72: 17.2, 73: 16.4, 74: 15.6, 75: 14.8, 76: 14.1, 77: 13.3,
  78: 12.6, 79: 11.9, 80: 11.2, 81: 10.5, 82: 9.9, 83: 9.3, 84: 8.7,
  85: 8.1, 86: 7.6, 87: 7.1, 88: 6.6, 89: 6.1, 90: 5.7, 91: 5.3,
  92: 4.9, 93: 4.6, 94: 4.3, 95: 4.0, 96: 3.7, 97: 3.4, 98: 3.2,
  99: 3.0, 100: 2.8, 101: 2.6, 102: 2.5, 103: 2.3, 104: 2.2, 105: 2.1,
  106: 1.9, 107: 1.8, 108: 1.7, 109: 1.6, 110: 1.5, 111: 1.4, 112: 1.3,
  113: 1.2, 114: 1.1, 115: 1.0, 116: 1.0, 117: 1.0, 118: 1.0, 119: 1.0, 120: 1.0,
};

// IRS Uniform Lifetime Table (for spouse who does rollover)
const uniformLifetimeTable: Record<number, number> = {
  72: 27.4, 73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9,
  78: 22.0, 79: 21.1, 80: 20.2, 81: 19.4, 82: 18.5, 83: 17.7,
  84: 16.8, 85: 16.0, 86: 15.2, 87: 14.4, 88: 13.7, 89: 12.9,
  90: 12.2, 91: 11.5, 92: 10.8, 93: 10.1, 94: 9.5, 95: 8.9,
  96: 8.4, 97: 7.8, 98: 7.3, 99: 6.8, 100: 6.4, 101: 6.0,
  102: 5.6, 103: 5.2, 104: 4.9, 105: 4.6, 106: 4.3, 107: 4.1,
  108: 3.9, 109: 3.7, 110: 3.5, 111: 3.4, 112: 3.3, 113: 3.1,
  114: 3.0, 115: 2.9, 116: 2.8, 117: 2.7, 118: 2.5, 119: 2.3, 120: 2.0,
};

type BeneficiaryType = "spouse" | "edb" | "designated" | "non-designated";
type SpouseOption = "rollover" | "inherited";

interface RMDProjection {
  year: number;
  age: number;
  startingBalance: number;
  rmd: number;
  endingBalance: number;
  lifeExpectancy: number;
  cumulativeDistributions: number;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function InheritedIRARMDCalculator() {
  // Inputs
  const [deathYear, setDeathYear] = useState<number>(2023);
  const [accountBalance, setAccountBalance] = useState<number>(500000);
  const [beneficiaryType, setBeneficiaryType] = useState<BeneficiaryType>("designated");
  const [beneficiaryAge, setBeneficiaryAge] = useState<number>(50);
  const [ownerAge, setOwnerAge] = useState<number>(75);
  const [spouseOption, setSpouseOption] = useState<SpouseOption>("inherited");
  const [growthRate, setGrowthRate] = useState<number>(5);
  const [taxRate, setTaxRate] = useState<number>(22);

  const currentYear = new Date().getFullYear();
  const isPreSecureAct = deathYear < 2020;

  const calculations = useMemo(() => {
    const projections: RMDProjection[] = [];
    let balance = accountBalance;
    let cumulativeDistributions = 0;
    let yearsToDeplete = 0;
    let totalTaxes = 0;
    let strategy = "";
    let ruleExplanation = "";

    // Determine the rule and calculate projections
    if (beneficiaryType === "spouse" && spouseOption === "rollover") {
      // Spouse rollover - treated as own IRA
      strategy = "Spousal Rollover";
      ruleExplanation = "As a spouse, you can roll the inherited IRA into your own IRA. RMDs follow the Uniform Lifetime Table starting at age 73 (SECURE 2.0).";

      const rmdStartAge = 73;
      let age = beneficiaryAge;

      for (let i = 0; i < 30 && balance > 0; i++) {
        const year = currentYear + i;
        const lifeExpectancy = age >= 72 ? (uniformLifetimeTable[age] || 2.0) : 0;
        const rmd = age >= rmdStartAge ? balance / lifeExpectancy : 0;
        const growth = (balance - rmd) * (growthRate / 100);
        const endingBalance = Math.max(0, balance - rmd + growth);

        if (rmd > 0) {
          cumulativeDistributions += rmd;
          totalTaxes += rmd * (taxRate / 100);
        }

        projections.push({
          year,
          age,
          startingBalance: balance,
          rmd,
          endingBalance,
          lifeExpectancy,
          cumulativeDistributions,
        });

        balance = endingBalance;
        age++;
      }
      yearsToDeplete = projections.length;
    } else if (beneficiaryType === "spouse" && spouseOption === "inherited") {
      // Spouse keeps as inherited - stretch over life expectancy
      strategy = "Inherited IRA (Spouse)";
      ruleExplanation = "As a spouse beneficiary keeping an inherited IRA, you can stretch distributions over your life expectancy using the Single Life Table.";

      let age = beneficiaryAge;
      let lifeExpectancy = singleLifeExpectancyTable[age] || 1;

      for (let i = 0; i < 40 && balance > 100; i++) {
        const year = currentYear + i;
        const rmd = balance / lifeExpectancy;
        const growth = (balance - rmd) * (growthRate / 100);
        const endingBalance = Math.max(0, balance - rmd + growth);

        cumulativeDistributions += rmd;
        totalTaxes += rmd * (taxRate / 100);

        projections.push({
          year,
          age,
          startingBalance: balance,
          rmd,
          endingBalance,
          lifeExpectancy,
          cumulativeDistributions,
        });

        balance = endingBalance;
        age++;
        lifeExpectancy = Math.max(1, lifeExpectancy - 1);
        yearsToDeplete++;
      }
    } else if (beneficiaryType === "edb") {
      // Eligible Designated Beneficiary (not spouse) - stretch over life expectancy
      strategy = "Life Expectancy Stretch (EDB)";
      ruleExplanation = "As an Eligible Designated Beneficiary (minor child, disabled, chronically ill, or not more than 10 years younger), you can stretch RMDs over your life expectancy.";

      let age = beneficiaryAge;
      let lifeExpectancy = singleLifeExpectancyTable[age] || 1;

      for (let i = 0; i < 40 && balance > 100; i++) {
        const year = currentYear + i;
        const rmd = balance / lifeExpectancy;
        const growth = (balance - rmd) * (growthRate / 100);
        const endingBalance = Math.max(0, balance - rmd + growth);

        cumulativeDistributions += rmd;
        totalTaxes += rmd * (taxRate / 100);

        projections.push({
          year,
          age,
          startingBalance: balance,
          rmd,
          endingBalance,
          lifeExpectancy,
          cumulativeDistributions,
        });

        balance = endingBalance;
        age++;
        lifeExpectancy = Math.max(1, lifeExpectancy - 1);
        yearsToDeplete++;
      }
    } else if (beneficiaryType === "designated") {
      // Non-spouse Designated Beneficiary - 10-year rule
      if (isPreSecureAct) {
        strategy = "Life Expectancy Stretch (Pre-2020)";
        ruleExplanation = "Since death occurred before 2020, you may use the old stretch rules based on your life expectancy.";

        let age = beneficiaryAge;
        let lifeExpectancy = singleLifeExpectancyTable[age] || 1;

        for (let i = 0; i < 40 && balance > 100; i++) {
          const year = currentYear + i;
          const rmd = balance / lifeExpectancy;
          const growth = (balance - rmd) * (growthRate / 100);
          const endingBalance = Math.max(0, balance - rmd + growth);

          cumulativeDistributions += rmd;
          totalTaxes += rmd * (taxRate / 100);

          projections.push({
            year,
            age,
            startingBalance: balance,
            rmd,
            endingBalance,
            lifeExpectancy,
            cumulativeDistributions,
          });

          balance = endingBalance;
          age++;
          lifeExpectancy = Math.max(1, lifeExpectancy - 1);
          yearsToDeplete++;
        }
      } else {
        // Post-2020: 10-year rule with annual RMDs (if owner died after RBD)
        const ownerDiedAfterRBD = ownerAge >= 73;
        strategy = "10-Year Rule";

        if (ownerDiedAfterRBD) {
          ruleExplanation = "Under SECURE Act, the account must be emptied by year 10. Since the owner died after their Required Beginning Date (RBD), annual RMDs are required in years 1-9.";
        } else {
          ruleExplanation = "Under SECURE Act, the account must be emptied by year 10. Since the owner died before their RBD, no annual RMDs are required - only complete distribution by year 10.";
        }

        let age = beneficiaryAge;
        const yearsRemaining = Math.max(1, 10 - (currentYear - deathYear));

        for (let i = 0; i < yearsRemaining && balance > 0; i++) {
          const year = currentYear + i;
          const isLastYear = i === yearsRemaining - 1;
          const yearInPeriod = (currentYear - deathYear) + i + 1;

          let lifeExpectancy: number;
          let rmd: number;

          if (ownerDiedAfterRBD && !isLastYear) {
            // Annual RMDs required based on beneficiary life expectancy
            const initialLE = singleLifeExpectancyTable[beneficiaryAge] || 30;
            lifeExpectancy = Math.max(1, initialLE - (currentYear - deathYear) - i);
            rmd = balance / lifeExpectancy;
          } else if (isLastYear) {
            // Final year - must withdraw everything
            lifeExpectancy = 1;
            rmd = balance;
          } else {
            // No annual RMD required (owner died before RBD)
            lifeExpectancy = yearsRemaining - i;
            rmd = 0;
          }

          const growth = (balance - rmd) * (growthRate / 100);
          const endingBalance = Math.max(0, balance - rmd + growth);

          cumulativeDistributions += rmd;
          totalTaxes += rmd * (taxRate / 100);

          projections.push({
            year,
            age: age + i,
            startingBalance: balance,
            rmd,
            endingBalance,
            lifeExpectancy,
            cumulativeDistributions,
          });

          balance = endingBalance;
          yearsToDeplete++;
        }
      }
    } else {
      // Non-designated beneficiary - 5-year rule
      strategy = "5-Year Rule";
      ruleExplanation = "As a non-designated beneficiary (estate, charity, etc.), the entire account must be distributed by the end of the 5th year following the owner's death.";

      const yearsRemaining = Math.max(1, 5 - (currentYear - deathYear));

      for (let i = 0; i < yearsRemaining; i++) {
        const year = currentYear + i;
        const isLastYear = i === yearsRemaining - 1;
        const rmd = isLastYear ? balance : 0;
        const growth = (balance - rmd) * (growthRate / 100);
        const endingBalance = Math.max(0, balance - rmd + growth);

        cumulativeDistributions += rmd;
        totalTaxes += rmd * (taxRate / 100);

        projections.push({
          year,
          age: beneficiaryAge + i,
          startingBalance: balance,
          rmd,
          endingBalance,
          lifeExpectancy: yearsRemaining - i,
          cumulativeDistributions,
        });

        balance = endingBalance;
        yearsToDeplete++;
      }
    }

    const firstYearRMD = projections[0]?.rmd || 0;
    const totalDistributions = projections.reduce((sum, p) => sum + p.rmd, 0);

    return {
      projections: projections.slice(0, 10), // Show first 10 years
      fullProjections: projections,
      firstYearRMD,
      yearsToDeplete,
      totalDistributions,
      totalTaxes,
      strategy,
      ruleExplanation,
      isPreSecureAct,
    };
  }, [
    accountBalance,
    beneficiaryType,
    beneficiaryAge,
    ownerAge,
    spouseOption,
    deathYear,
    growthRate,
    taxRate,
    currentYear,
    isPreSecureAct,
  ]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-500/30">
          <Calculator className="h-4 w-4" />
          Inherited IRA Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
          Inherited IRA RMD Calculator
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Calculate Required Minimum Distributions for inherited IRAs under SECURE Act rules.
          Understand your options based on your beneficiary status.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Death Date Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-slate-500/20 rounded-lg border border-slate-500/30">
                <Calendar className="h-5 w-5 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold">Account Owner Details</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Year of Original Owner&apos;s Death
                </label>
                <input
                  type="number"
                  value={deathYear}
                  onChange={(e) => setDeathYear(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  min={2010}
                  max={currentYear}
                />
                {isPreSecureAct && (
                  <div className="mt-2 flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle2 className="h-4 w-4" />
                    Pre-SECURE Act rules may apply (death before 2020)
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Owner&apos;s Age at Death
                </label>
                <input
                  type="number"
                  value={ownerAge}
                  onChange={(e) => setOwnerAge(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  min={30}
                  max={110}
                />
                <p className="text-xs text-slate-500 mt-1">
                  {ownerAge >= 73 ? "Died after Required Beginning Date (RBD)" : "Died before Required Beginning Date (RBD)"}
                </p>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Inherited IRA Balance
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={accountBalance}
                    onChange={(e) => setAccountBalance(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-amber-500"
                    min="0"
                    step="10000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Beneficiary Type */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Users className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">Beneficiary Information</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Beneficiary Type
                </label>
                <select
                  value={beneficiaryType}
                  onChange={(e) => setBeneficiaryType(e.target.value as BeneficiaryType)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="spouse">Surviving Spouse</option>
                  <option value="edb">Eligible Designated Beneficiary (Non-Spouse)</option>
                  <option value="designated">Designated Beneficiary (10-Year Rule)</option>
                  <option value="non-designated">Non-Designated Beneficiary (Estate/Charity)</option>
                </select>
              </div>

              {/* Spouse Options */}
              {beneficiaryType === "spouse" && (
                <div>
                  <label className="text-sm text-slate-400 mb-2 block">
                    Spouse Distribution Option
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg cursor-pointer border border-slate-700 hover:border-amber-500/50">
                      <input
                        type="radio"
                        name="spouseOption"
                        value="rollover"
                        checked={spouseOption === "rollover"}
                        onChange={(e) => setSpouseOption(e.target.value as SpouseOption)}
                        className="accent-amber-500"
                      />
                      <div>
                        <span className="text-white font-medium">Spousal Rollover</span>
                        <p className="text-xs text-slate-400">Treat as your own IRA</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg cursor-pointer border border-slate-700 hover:border-amber-500/50">
                      <input
                        type="radio"
                        name="spouseOption"
                        value="inherited"
                        checked={spouseOption === "inherited"}
                        onChange={(e) => setSpouseOption(e.target.value as SpouseOption)}
                        className="accent-amber-500"
                      />
                      <div>
                        <span className="text-white font-medium">Keep as Inherited IRA</span>
                        <p className="text-xs text-slate-400">Stretch over your life expectancy</p>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* EDB Explanation */}
              {beneficiaryType === "edb" && (
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                  <p className="text-sm text-blue-300">
                    <strong>Eligible Designated Beneficiaries include:</strong>
                    <br />- Minor children (until age of majority)
                    <br />- Disabled individuals
                    <br />- Chronically ill individuals
                    <br />- Individuals not more than 10 years younger than deceased
                  </p>
                </div>
              )}

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Your Current Age: {beneficiaryAge}
                </label>
                <input
                  type="range"
                  min={1}
                  max={90}
                  value={beneficiaryAge}
                  onChange={(e) => setBeneficiaryAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Growth & Tax Assumptions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <TrendingDown className="h-5 w-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Assumptions</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Expected Annual Growth: {growthRate}%
                </label>
                <input
                  type="range"
                  min={0}
                  max={12}
                  step={0.5}
                  value={growthRate}
                  onChange={(e) => setGrowthRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Estimated Tax Rate: {taxRate}%
                </label>
                <input
                  type="range"
                  min={10}
                  max={40}
                  step={1}
                  value={taxRate}
                  onChange={(e) => setTaxRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Strategy Overview */}
          <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-sm rounded-xl p-8 border border-amber-500/30">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-10 w-10 text-amber-400" />
              <div>
                <h3 className="text-sm text-slate-400">Your Distribution Rule</h3>
                <div className="text-2xl font-bold text-amber-400">
                  {calculations.strategy}
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-4">
              {calculations.ruleExplanation}
            </p>

            <div className="grid grid-cols-2 gap-4 bg-slate-800/50 rounded-lg p-4">
              <div>
                <div className="text-xs text-slate-400">First Year RMD</div>
                <div className="text-xl font-bold text-white">
                  {formatCurrency(calculations.firstYearRMD)}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Years to Deplete</div>
                <div className="text-xl font-bold text-white">
                  {calculations.yearsToDeplete}
                </div>
              </div>
            </div>
          </div>

          {/* Tax Impact */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-400" />
              <h3 className="text-lg font-semibold">Estimated Tax Impact</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-slate-400">Total Distributions</span>
                <span className="text-xl font-bold text-white">
                  {formatCurrency(calculations.totalDistributions)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-slate-400">Estimated Total Taxes ({taxRate}%)</span>
                <span className="text-xl font-bold text-red-400">
                  {formatCurrency(calculations.totalTaxes)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Net After Taxes</span>
                <span className="text-xl font-bold text-green-400">
                  {formatCurrency(calculations.totalDistributions - calculations.totalTaxes)}
                </span>
              </div>
            </div>
          </div>

          {/* 10-Year Projection Table */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-400" />
              Distribution Schedule (10 Years)
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 px-2 text-left text-slate-500">Year</th>
                    <th className="py-2 px-2 text-right text-slate-500">Balance</th>
                    <th className="py-2 px-2 text-right text-slate-500">RMD</th>
                    <th className="py-2 px-2 text-right text-slate-500">Tax Est.</th>
                  </tr>
                </thead>
                <tbody>
                  {calculations.projections.map((proj, idx) => (
                    <tr
                      key={proj.year}
                      className={`border-b border-white/5 ${idx === 0 ? "bg-amber-500/5" : ""}`}
                    >
                      <td className="py-2 px-2 text-slate-300">
                        {proj.year} (Age {proj.age})
                      </td>
                      <td className="py-2 px-2 text-right text-slate-400">
                        {formatCurrency(proj.startingBalance)}
                      </td>
                      <td className="py-2 px-2 text-right text-amber-400 font-medium">
                        {formatCurrency(proj.rmd)}
                      </td>
                      <td className="py-2 px-2 text-right text-red-400">
                        {formatCurrency(proj.rmd * (taxRate / 100))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-xs mt-3">
              * Assumes {growthRate}% annual growth. Actual results will vary.
            </p>
          </div>

          {/* Strategy Tips */}
          {beneficiaryType === "designated" && !isPreSecureAct && (
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">
                    10-Year Rule Strategy Tips
                  </h4>
                  <ul className="text-sm text-slate-300 space-y-2">
                    <li>- Consider spreading distributions to manage tax brackets</li>
                    <li>- Front-load distributions in lower-income years</li>
                    <li>- Coordinate with other income (retirement, Social Security)</li>
                    <li>- Don&apos;t wait until year 10 - could face huge tax bill</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gold Bridge Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-6 w-6 text-amber-400" />
            <h2 className="text-2xl font-bold">Preserve Your Inherited Wealth</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-amber-400 font-semibold mb-2">Long-Term Protection</div>
              <p className="text-slate-400 text-sm">
                If you&apos;re inheriting a traditional IRA, consider rolling eligible portions into a Gold IRA for long-term wealth preservation across generations.
              </p>
            </div>

            <div>
              <div className="text-amber-400 font-semibold mb-2">Inflation Hedge</div>
              <p className="text-slate-400 text-sm">
                With required distributions forcing taxable withdrawals, gold&apos;s inflation hedge can help protect the purchasing power of your remaining balance.
              </p>
            </div>

            <div>
              <div className="text-amber-400 font-semibold mb-2">Estate Planning</div>
              <p className="text-slate-400 text-sm">
                Physical gold in an IRA can be part of your own estate plan, potentially passing real assets to your beneficiaries.
              </p>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="inherited-ira-rmd-calculator"
            subheadline="Consider rolling inherited IRA assets to a Gold IRA for long-term wealth preservation. Our specialists can explain your options."
          />
        </div>
      </div>
    </Container>
  );
}
