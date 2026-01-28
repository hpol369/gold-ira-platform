"use client";

import { useState, useMemo, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Play,
  DollarSign,
  Calendar,
  Target,
  TrendingUp,
  Shield,
  CheckCircle2,
  Info,
  BarChart3,
  Percent,
  RefreshCw,
  AlertTriangle,
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

// Historical return assumptions (mean and standard deviation)
const ASSET_ASSUMPTIONS = {
  stocks: { mean: 10.0, stdDev: 18.0, name: "Stocks" },
  bonds: { mean: 5.0, stdDev: 6.0, name: "Bonds" },
  cash: { mean: 2.0, stdDev: 1.0, name: "Cash" },
  gold: { mean: 7.5, stdDev: 15.0, name: "Gold" },
};

// Box-Muller transform for normal distribution
function randomNormal(mean: number, stdDev: number): number {
  let u1 = Math.random();
  let u2 = Math.random();
  while (u1 === 0) u1 = Math.random();
  const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  return mean + z * stdDev;
}

interface SimulationPath {
  values: number[];
  success: boolean;
  finalValue: number;
}

interface AllocationInputs {
  stocks: number;
  bonds: number;
  cash: number;
  gold: number;
}

export function MonteCarloRetirementSimulator() {
  // Inputs
  const [portfolioValue, setPortfolioValue] = useState<number>(500000);
  const [annualContribution, setAnnualContribution] = useState<number>(20000);
  const [yearsUntilRetirement, setYearsUntilRetirement] = useState<number>(10);
  const [yearsInRetirement, setYearsInRetirement] = useState<number>(30);
  const [annualSpending, setAnnualSpending] = useState<number>(50000);
  const [numSimulations, setNumSimulations] = useState<number>(1000);
  const [allocation, setAllocation] = useState<AllocationInputs>({
    stocks: 60,
    bonds: 25,
    cash: 5,
    gold: 10,
  });

  // Simulation state
  const [hasSimulated, setHasSimulated] = useState<boolean>(false);
  const [simulationPaths, setSimulationPaths] = useState<SimulationPath[]>([]);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // Normalize allocation to 100%
  const normalizedAllocation = useMemo(() => {
    const total = allocation.stocks + allocation.bonds + allocation.cash + allocation.gold;
    if (total === 0) return { stocks: 25, bonds: 25, cash: 25, gold: 25 };
    return {
      stocks: (allocation.stocks / total) * 100,
      bonds: (allocation.bonds / total) * 100,
      cash: (allocation.cash / total) * 100,
      gold: (allocation.gold / total) * 100,
    };
  }, [allocation]);

  // Calculate portfolio expected return and volatility
  const portfolioStats = useMemo(() => {
    const weightedMean =
      (normalizedAllocation.stocks / 100) * ASSET_ASSUMPTIONS.stocks.mean +
      (normalizedAllocation.bonds / 100) * ASSET_ASSUMPTIONS.bonds.mean +
      (normalizedAllocation.cash / 100) * ASSET_ASSUMPTIONS.cash.mean +
      (normalizedAllocation.gold / 100) * ASSET_ASSUMPTIONS.gold.mean;

    // Simplified volatility calculation (ignores correlations for simplicity)
    const weightedVol = Math.sqrt(
      Math.pow((normalizedAllocation.stocks / 100) * ASSET_ASSUMPTIONS.stocks.stdDev, 2) +
      Math.pow((normalizedAllocation.bonds / 100) * ASSET_ASSUMPTIONS.bonds.stdDev, 2) +
      Math.pow((normalizedAllocation.cash / 100) * ASSET_ASSUMPTIONS.cash.stdDev, 2) +
      Math.pow((normalizedAllocation.gold / 100) * ASSET_ASSUMPTIONS.gold.stdDev, 2)
    );

    return { mean: weightedMean, stdDev: weightedVol };
  }, [normalizedAllocation]);

  // Run Monte Carlo simulation
  const runSimulation = useCallback(() => {
    setIsSimulating(true);

    // Use setTimeout to allow UI to update
    setTimeout(() => {
      const totalYears = yearsUntilRetirement + yearsInRetirement;
      const paths: SimulationPath[] = [];

      for (let sim = 0; sim < numSimulations; sim++) {
        let balance = portfolioValue;
        const yearlyValues: number[] = [balance];

        for (let year = 1; year <= totalYears; year++) {
          // Generate random return for this year
          const annualReturn = randomNormal(portfolioStats.mean, portfolioStats.stdDev) / 100;

          // Apply return
          balance = balance * (1 + annualReturn);

          // Add contribution (pre-retirement) or subtract spending (in retirement)
          if (year <= yearsUntilRetirement) {
            balance += annualContribution;
          } else {
            balance -= annualSpending;
          }

          balance = Math.max(0, balance);
          yearlyValues.push(balance);
        }

        paths.push({
          values: yearlyValues,
          success: balance > 0,
          finalValue: balance,
        });
      }

      setSimulationPaths(paths);
      setHasSimulated(true);
      setIsSimulating(false);
    }, 100);
  }, [portfolioValue, annualContribution, yearsUntilRetirement, yearsInRetirement, annualSpending, numSimulations, portfolioStats]);

  // Calculate statistics from simulation results
  const statistics = useMemo(() => {
    if (!hasSimulated || simulationPaths.length === 0) {
      return null;
    }

    const successCount = simulationPaths.filter(p => p.success).length;
    const successRate = (successCount / simulationPaths.length) * 100;

    const finalValues = simulationPaths.map(p => p.finalValue).sort((a, b) => a - b);
    const median = finalValues[Math.floor(finalValues.length / 2)];
    const percentile10 = finalValues[Math.floor(finalValues.length * 0.1)];
    const percentile90 = finalValues[Math.floor(finalValues.length * 0.9)];
    const mean = finalValues.reduce((a, b) => a + b, 0) / finalValues.length;

    // Calculate value at retirement
    const retirementValues = simulationPaths.map(p => p.values[yearsUntilRetirement] || 0).sort((a, b) => a - b);
    const medianAtRetirement = retirementValues[Math.floor(retirementValues.length / 2)];

    return {
      successRate,
      successCount,
      median,
      mean,
      percentile10,
      percentile90,
      medianAtRetirement,
    };
  }, [hasSimulated, simulationPaths, yearsUntilRetirement]);

  // Generate paths for visualization (sample of paths)
  const visualizationPaths = useMemo(() => {
    if (!hasSimulated) return [];
    // Take a sample of paths for visualization
    const sampleSize = Math.min(100, simulationPaths.length);
    const step = Math.floor(simulationPaths.length / sampleSize);
    return simulationPaths.filter((_, i) => i % step === 0).slice(0, sampleSize);
  }, [hasSimulated, simulationPaths]);

  // Calculate confidence bands
  const confidenceBands = useMemo(() => {
    if (!hasSimulated || simulationPaths.length === 0) return null;

    const totalYears = yearsUntilRetirement + yearsInRetirement;
    const bands: { year: number; p10: number; p50: number; p90: number }[] = [];

    for (let year = 0; year <= totalYears; year++) {
      const valuesAtYear = simulationPaths.map(p => p.values[year] || 0).sort((a, b) => a - b);
      bands.push({
        year,
        p10: valuesAtYear[Math.floor(valuesAtYear.length * 0.1)],
        p50: valuesAtYear[Math.floor(valuesAtYear.length * 0.5)],
        p90: valuesAtYear[Math.floor(valuesAtYear.length * 0.9)],
      });
    }

    return bands;
  }, [hasSimulated, simulationPaths, yearsUntilRetirement, yearsInRetirement]);

  const handleAllocationChange = (asset: keyof AllocationInputs, value: number) => {
    setAllocation(prev => ({ ...prev, [asset]: value }));
    setHasSimulated(false);
  };

  const totalAllocation = allocation.stocks + allocation.bonds + allocation.cash + allocation.gold;

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-purple-500/30">
          <BarChart3 className="h-4 w-4" />
          High Volume Keyword (600-1,100 searches/mo)
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Monte Carlo Retirement Simulator
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Run {numSimulations.toLocaleString()} simulations to see the probability of your retirement plan succeeding.
          Understand how asset allocation affects your odds.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Portfolio Value */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <DollarSign className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">Current Situation</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Current Portfolio Value
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={portfolioValue}
                    onChange={(e) => {
                      setPortfolioValue(Number(e.target.value));
                      setHasSimulated(false);
                    }}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-purple-500"
                    min="0"
                    step="10000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Annual Contribution (while working)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={annualContribution}
                    onChange={(e) => {
                      setAnnualContribution(Number(e.target.value));
                      setHasSimulated(false);
                    }}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-purple-500"
                    min="0"
                    step="5000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Timeline</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Years Until Retirement: {yearsUntilRetirement}
                </label>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={yearsUntilRetirement}
                  onChange={(e) => {
                    setYearsUntilRetirement(Number(e.target.value));
                    setHasSimulated(false);
                  }}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Years In Retirement: {yearsInRetirement}
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={yearsInRetirement}
                  onChange={(e) => {
                    setYearsInRetirement(Number(e.target.value));
                    setHasSimulated(false);
                  }}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Annual Spending in Retirement
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={annualSpending}
                    onChange={(e) => {
                      setAnnualSpending(Number(e.target.value));
                      setHasSimulated(false);
                    }}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-purple-500"
                    min="0"
                    step="5000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Asset Allocation */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#B22234]/10 rounded-lg border border-[#B22234]/30">
                <Target className="h-5 w-5 text-[#B22234]" />
              </div>
              <h3 className="text-lg font-semibold">Asset Allocation</h3>
            </div>

            <div className="space-y-4">
              {Object.entries(ASSET_ASSUMPTIONS).map(([key, asset]) => {
                const colorClasses = {
                  stocks: "accent-blue-500",
                  bonds: "accent-green-500",
                  cash: "accent-slate-500",
                  gold: "accent-amber-500",
                };
                const color = colorClasses[key as keyof typeof colorClasses];

                return (
                  <div key={key}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-500">{asset.name}</span>
                      <span className="font-semibold">{allocation[key as keyof AllocationInputs]}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={allocation[key as keyof AllocationInputs]}
                      onChange={(e) => handleAllocationChange(key as keyof AllocationInputs, Number(e.target.value))}
                      className={`w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer ${color}`}
                    />
                    <div className="text-xs text-slate-500 mt-1">
                      Expected: {asset.mean}% return, {asset.stdDev}% volatility
                    </div>
                  </div>
                );
              })}

              <div className={`bg-slate-50 rounded-lg p-4 ${
                totalAllocation !== 100 ? "border border-amber-500/50" : ""
              }`}>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Total Allocation</span>
                  <span className={`text-xl font-bold ${
                    totalAllocation === 100 ? "text-green-600" : "text-[#B22234]"
                  }`}>
                    {totalAllocation}%
                  </span>
                </div>
                {totalAllocation !== 100 && (
                  <p className="text-xs text-[#B22234] mt-1">
                    Allocation will be normalized to 100%
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Simulation Settings & Run Button */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Number of Simulations: {numSimulations.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={numSimulations}
                  onChange={(e) => {
                    setNumSimulations(Number(e.target.value));
                    setHasSimulated(false);
                  }}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-slate-900 font-bold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    Running Simulations...
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5" />
                    Run Monte Carlo Simulation
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Success Rate */}
          {hasSimulated && statistics ? (
            <>
              <div className={`bg-gradient-to-br rounded-xl p-8 border ${
                statistics.successRate >= 90
                  ? "from-green-500/20 to-green-600/20 border-green-500/30"
                  : statistics.successRate >= 75
                  ? "from-blue-500/20 to-blue-600/20 border-blue-500/30"
                  : statistics.successRate >= 50
                  ? "bg-[#B22234]/10 border-[#B22234]/30"
                  : "from-red-500/20 to-red-600/20 border-red-500/30"
              }`}>
                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-2">RETIREMENT SUCCESS PROBABILITY</div>
                  <div className={`text-6xl font-bold mb-2 ${
                    statistics.successRate >= 90
                      ? "text-green-600"
                      : statistics.successRate >= 75
                      ? "text-blue-600"
                      : statistics.successRate >= 50
                      ? "text-[#B22234]"
                      : "text-red-600"
                  }`}>
                    {statistics.successRate.toFixed(1)}%
                  </div>
                  <div className="text-slate-500">
                    {statistics.successCount.toLocaleString()} of {numSimulations.toLocaleString()} simulations succeeded
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">10th Percentile</div>
                      <div className="text-lg font-semibold text-red-600">
                        {formatCurrency(statistics.percentile10)}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Median</div>
                      <div className="text-lg font-semibold text-blue-600">
                        {formatCurrency(statistics.median)}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">90th Percentile</div>
                      <div className="text-lg font-semibold text-green-600">
                        {formatCurrency(statistics.percentile90)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spaghetti Chart */}
              <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-purple-400" />
                  Simulation Paths (Sample of {visualizationPaths.length})
                </h3>

                <div className="relative h-64 mb-4">
                  {confidenceBands && (
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* 90% confidence band */}
                      <path
                        d={`
                          M 0 ${100 - (confidenceBands[0].p90 / (statistics.percentile90 * 1.2)) * 100}
                          ${confidenceBands.map((b, i) =>
                            `L ${(i / (confidenceBands.length - 1)) * 100} ${100 - (b.p90 / (statistics.percentile90 * 1.2)) * 100}`
                          ).join(" ")}
                          ${confidenceBands.slice().reverse().map((b, i) =>
                            `L ${((confidenceBands.length - 1 - i) / (confidenceBands.length - 1)) * 100} ${100 - (b.p10 / (statistics.percentile90 * 1.2)) * 100}`
                          ).join(" ")}
                          Z
                        `}
                        fill="rgba(139, 92, 246, 0.1)"
                        stroke="none"
                      />

                      {/* Median line */}
                      <path
                        d={`
                          M 0 ${100 - (confidenceBands[0].p50 / (statistics.percentile90 * 1.2)) * 100}
                          ${confidenceBands.map((b, i) =>
                            `L ${(i / (confidenceBands.length - 1)) * 100} ${100 - (b.p50 / (statistics.percentile90 * 1.2)) * 100}`
                          ).join(" ")}
                        `}
                        fill="none"
                        stroke="rgba(139, 92, 246, 0.8)"
                        strokeWidth="0.5"
                      />

                      {/* Retirement year marker */}
                      <line
                        x1={(yearsUntilRetirement / (yearsUntilRetirement + yearsInRetirement)) * 100}
                        y1="0"
                        x2={(yearsUntilRetirement / (yearsUntilRetirement + yearsInRetirement)) * 100}
                        y2="100"
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeDasharray="2,2"
                      />
                    </svg>
                  )}
                </div>

                <div className="flex justify-between text-xs text-slate-500">
                  <span>Year 0</span>
                  <span>Retirement (Year {yearsUntilRetirement})</span>
                  <span>Year {yearsUntilRetirement + yearsInRetirement}</span>
                </div>

                <div className="flex justify-center gap-6 text-sm mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-500/30 rounded" />
                    <span className="text-slate-500">10-90% Range</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-1 bg-purple-500 rounded" />
                    <span className="text-slate-500">Median Path</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Simulation Results
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-500">Portfolio at Retirement (Median)</span>
                    <span className="font-semibold text-blue-600">
                      {formatCurrency(statistics.medianAtRetirement)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-500">Final Value (Median)</span>
                    <span className="font-semibold text-purple-400">
                      {formatCurrency(statistics.median)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-500">Final Value (Mean)</span>
                    <span className="font-semibold">
                      {formatCurrency(statistics.mean)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Portfolio Expected Return</span>
                    <span className="font-semibold text-green-600">
                      {portfolioStats.mean.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Gold Impact Analysis */}
              <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-[#B22234] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#B22234] mb-2">
                      Gold Allocation Impact
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Your current gold allocation of <strong>{normalizedAllocation.gold.toFixed(0)}%</strong> helps
                      reduce portfolio volatility from pure stock/bond allocation.
                    </p>
                    <div className="text-xs text-slate-500">
                      <p>
                        Portfolio Volatility: <strong>{portfolioStats.stdDev.toFixed(1)}%</strong>
                      </p>
                      <p className="mt-1">
                        Historical studies show that a 10-15% gold allocation can improve success rates
                        by 3-5% while reducing worst-case scenarios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Pre-simulation state */
            <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200 text-center">
              <BarChart3 className="h-16 w-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ready to Simulate</h3>
              <p className="text-slate-500 mb-6">
                Configure your inputs and click &quot;Run Monte Carlo Simulation&quot; to see
                {numSimulations.toLocaleString()} possible retirement outcomes.
              </p>
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Current Portfolio Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-500">Expected Return</div>
                    <div className="font-semibold text-green-600">{portfolioStats.mean.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-slate-500">Expected Volatility</div>
                    <div className="font-semibold text-[#B22234]">{portfolioStats.stdDev.toFixed(1)}%</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Info className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Understanding Monte Carlo Simulation</h2>
          </div>

          <div className="space-y-6 text-slate-600">
            <p>
              Monte Carlo simulation is a powerful technique that runs thousands of possible scenarios
              to estimate the probability of different outcomes. For retirement planning, it helps answer
              the critical question: <strong className="text-slate-900">&quot;What are the odds my money will last?&quot;</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <Percent className="h-6 w-6 text-purple-400 mb-2" />
                <h4 className="font-semibold text-slate-900 mb-1">Probability-Based</h4>
                <p className="text-sm text-slate-500">
                  Instead of a single projection, you get a range of outcomes with their probabilities.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <TrendingUp className="h-6 w-6 text-green-600 mb-2" />
                <h4 className="font-semibold text-slate-900 mb-1">Market Variability</h4>
                <p className="text-sm text-slate-500">
                  Accounts for the unpredictable nature of market returns year-over-year.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <Shield className="h-6 w-6 text-[#B22234] mb-2" />
                <h4 className="font-semibold text-slate-900 mb-1">Stress Testing</h4>
                <p className="text-sm text-slate-500">
                  See how your plan holds up in worst-case scenarios, not just average ones.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Rate Guide */}
        <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Target className="h-6 w-6 text-purple-400" />
            What Success Rate Should You Target?
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-24 flex-shrink-0">
                <div className="bg-green-500/20 text-green-600 text-center py-2 rounded-lg font-bold">
                  90%+
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-green-600">Excellent</h4>
                <p className="text-sm text-slate-500">
                  High confidence your money will last. You may have room for more aggressive growth
                  or increased spending.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-24 flex-shrink-0">
                <div className="bg-blue-500/20 text-blue-600 text-center py-2 rounded-lg font-bold">
                  75-89%
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600">Good</h4>
                <p className="text-sm text-slate-500">
                  Solid plan with reasonable buffer. Consider small adjustments for more safety margin.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-24 flex-shrink-0">
                <div className="bg-[#B22234]/10 text-[#B22234] text-center py-2 rounded-lg font-bold">
                  50-74%
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[#B22234]">Caution</h4>
                <p className="text-sm text-slate-500">
                  Plan may work but has significant risk. Consider reducing spending, working longer,
                  or adjusting allocation.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-24 flex-shrink-0">
                <div className="bg-red-500/20 text-red-600 text-center py-2 rounded-lg font-bold">
                  &lt;50%
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-red-600">High Risk</h4>
                <p className="text-sm text-slate-500">
                  Plan unlikely to succeed. Major adjustments needed to spending, savings, or timeline.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gold Bridge */}
        <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-bold">How Gold Improves Success Rates</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Reduces Volatility</h4>
                  <p className="text-sm text-slate-500">
                    Gold&apos;s low correlation to stocks smooths out portfolio returns over time.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Protects Worst Cases</h4>
                  <p className="text-sm text-slate-500">
                    In market crashes, gold often rises, protecting your 10th percentile outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Inflation Hedge</h4>
                  <p className="text-sm text-slate-500">
                    Gold maintains purchasing power over decades of retirement.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Sequence Risk Buffer</h4>
                  <p className="text-sm text-slate-500">
                    Provides assets to draw from during early retirement market downturns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <strong className="text-purple-400">Research Finding:</strong>{" "}
                <span className="text-slate-600">
                  Adding 10% gold to a traditional 60/40 portfolio historically increased Monte Carlo
                  success rates by 3-5% while reducing the worst-case (10th percentile) outcomes by
                  up to 15%.
                </span>
              </div>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="monte-carlo-retirement-simulator"
            subheadline="Boost your retirement success probability with gold. Augusta Precious Metals can help you add this crucial diversifier to your IRA."
          />
        </div>
      </div>
    </Container>
  );
}
