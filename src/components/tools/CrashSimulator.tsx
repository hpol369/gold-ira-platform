"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  TrendingDown,
  Shield,
  AlertTriangle,
  DollarSign,
  Percent,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

interface SimulationResult {
  scenario: string;
  stocksLoss: number;
  goldGain: number;
  portfolioWithoutGold: number;
  portfolioWithGold: number;
  difference: number;
}

const scenarios = [
  {
    id: "2008",
    name: "2008 Financial Crisis",
    description: "Banks collapsed, markets crashed 57%",
    stocksReturn: -57,
    goldReturn: 25,
  },
  {
    id: "2020",
    name: "COVID-19 Crash",
    description: "Pandemic panic, markets dropped 34%",
    stocksReturn: -34,
    goldReturn: 24,
  },
  {
    id: "dotcom",
    name: "Dot-Com Bubble",
    description: "Tech crash wiped out 78% of Nasdaq",
    stocksReturn: -49,
    goldReturn: -6,
  },
  {
    id: "inflation",
    name: "1970s Stagflation",
    description: "High inflation, stagnant growth",
    stocksReturn: -45,
    goldReturn: 721,
  },
  {
    id: "dollar",
    name: "Dollar Collapse (20%)",
    description: "Hypothetical currency devaluation",
    stocksReturn: -30,
    goldReturn: 50,
  },
  {
    id: "severe",
    name: "Severe Recession",
    description: "Extended economic downturn",
    stocksReturn: -60,
    goldReturn: 35,
  },
];

export function CrashSimulator() {
  const [portfolioValue, setPortfolioValue] = useState(500000);
  const [goldAllocation, setGoldAllocation] = useState(15);
  const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);
  const [result, setResult] = useState<SimulationResult | null>(null);

  function runSimulation() {
    const stocksAllocation = 100 - goldAllocation;

    // Without gold (100% stocks)
    const portfolioWithoutGold = portfolioValue * (1 + selectedScenario.stocksReturn / 100);

    // With gold allocation
    const stocksValue = portfolioValue * (stocksAllocation / 100);
    const goldValue = portfolioValue * (goldAllocation / 100);

    const stocksAfter = stocksValue * (1 + selectedScenario.stocksReturn / 100);
    const goldAfter = goldValue * (1 + selectedScenario.goldReturn / 100);
    const portfolioWithGold = stocksAfter + goldAfter;

    const difference = portfolioWithGold - portfolioWithoutGold;

    setResult({
      scenario: selectedScenario.name,
      stocksLoss: selectedScenario.stocksReturn,
      goldGain: selectedScenario.goldReturn,
      portfolioWithoutGold,
      portfolioWithGold,
      difference,
    });
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-600 font-semibold text-sm mb-6">
              <AlertTriangle className="h-4 w-4" />
              CRASH SIMULATOR
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#000080] mb-4">
              What Happens to Your Portfolio in a Crisis?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how gold allocation could protect your retirement during historical and hypothetical market crashes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-[#000080] mb-6">Your Portfolio</h3>

              {/* Portfolio Value */}
              <div className="mb-6">
                <label className="block text-slate-600 text-sm mb-2">
                  Current Portfolio Value
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={portfolioValue}
                    onChange={(e) => setPortfolioValue(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 text-lg focus:outline-none focus:border-[#B22234]"
                  />
                </div>
              </div>

              {/* Gold Allocation */}
              <div className="mb-6">
                <label className="block text-slate-600 text-sm mb-2">
                  Gold Allocation: <span className="text-[#B22234] font-bold">{goldAllocation}%</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={goldAllocation}
                  onChange={(e) => setGoldAllocation(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>0% (No Gold)</span>
                  <span>25% (Moderate)</span>
                  <span>50% (Aggressive)</span>
                </div>
              </div>

              {/* Scenario Selection */}
              <div className="mb-6">
                <label className="block text-slate-600 text-sm mb-2">
                  Crisis Scenario
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {scenarios.map((scenario) => (
                    <button
                      key={scenario.id}
                      onClick={() => setSelectedScenario(scenario)}
                      className={`p-3 rounded-xl text-left transition-all ${
                        selectedScenario.id === scenario.id
                          ? "bg-[#B22234]/10 border-[#B22234]/50 border"
                          : "bg-slate-100 border border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className={`text-sm font-semibold ${
                        selectedScenario.id === scenario.id ? "text-[#B22234]" : "text-slate-900"
                      }`}>
                        {scenario.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        Stocks: {scenario.stocksReturn}%
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Run Button */}
              <button
                onClick={runSimulation}
                className="w-full py-4 bg-[#B22234] hover:bg-[#8b1c2a] text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="h-5 w-5" />
                Run Simulation
              </button>
            </motion.div>

            {/* Results Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-[#000080] mb-6">Simulation Results</h3>

              {result ? (
                <div className="space-y-6">
                  {/* Scenario Info */}
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="text-[#B22234] font-semibold mb-1">{result.scenario}</div>
                    <div className="flex gap-4 text-sm">
                      <span className="text-red-600">Stocks: {result.stocksLoss}%</span>
                      <span className={result.goldGain >= 0 ? "text-green-600" : "text-red-600"}>
                        Gold: {result.goldGain >= 0 ? "+" : ""}{result.goldGain}%
                      </span>
                    </div>
                  </div>

                  {/* Without Gold */}
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-red-600 text-sm mb-2">
                      <TrendingDown className="h-4 w-4" />
                      WITHOUT GOLD PROTECTION
                    </div>
                    <div className="text-2xl font-bold text-slate-900">
                      ${result.portfolioWithoutGold.toLocaleString()}
                    </div>
                    <div className="text-red-600 text-sm">
                      Lost ${(portfolioValue - result.portfolioWithoutGold).toLocaleString()}
                    </div>
                  </div>

                  {/* With Gold */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-green-600 text-sm mb-2">
                      <Shield className="h-4 w-4" />
                      WITH {goldAllocation}% GOLD ALLOCATION
                    </div>
                    <div className="text-2xl font-bold text-slate-900">
                      ${result.portfolioWithGold.toLocaleString()}
                    </div>
                    <div className={result.portfolioWithGold >= portfolioValue ? "text-green-600" : "text-[#B22234]"}>
                      {result.portfolioWithGold >= portfolioValue ? "Gained" : "Lost"} $
                      {Math.abs(portfolioValue - result.portfolioWithGold).toLocaleString()}
                    </div>
                  </div>

                  {/* Difference */}
                  <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-4 text-center">
                    <div className="text-[#B22234] font-semibold mb-1">GOLD PROTECTED</div>
                    <div className="text-3xl font-bold text-slate-900">
                      ${result.difference.toLocaleString()}
                    </div>
                    <div className="text-slate-600 text-sm">more of your retirement</div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/get-started"
                    className="block w-full py-4 bg-[#B22234] hover:bg-[#8b1c2a] text-white font-bold text-center rounded-xl transition-all"
                  >
                    Protect Your Portfolio Now
                    <ArrowRight className="inline ml-2 h-5 w-5" />
                  </Link>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
                    <Percent className="h-8 w-8 text-slate-500" />
                  </div>
                  <p className="text-slate-500">
                    Configure your portfolio and select a scenario, then click &quot;Run Simulation&quot; to see the results.
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-slate-500 text-sm mt-8 max-w-2xl mx-auto">
            * Historical data is for educational purposes only. Past performance does not guarantee future results.
            Gold prices can be volatile and may not always increase during market downturns.
          </p>
        </div>
      </Container>
    </section>
  );
}
