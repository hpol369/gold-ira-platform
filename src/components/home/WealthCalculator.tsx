"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Slider } from "@/components/ui/Slider";
import { Button } from "@/components/ui/Button";
import { ArrowRight, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import Link from "next/link";

export function WealthCalculator() {
    const [amount, setAmount] = useState(100000);
    const [years, setYears] = useState(10);
    const [cashValue, setCashValue] = useState(0);
    const [goldValue, setGoldValue] = useState(0);

    // Assumptions
    const INFLATION_RATE = 0.035; // 3.5% decay
    const GOLD_GROWTH_RATE = 0.08; // 8% growth

    useEffect(() => {
        // Calculate Cash Decay
        const futureCash = amount * Math.pow(1 - INFLATION_RATE, years);
        setCashValue(Math.round(futureCash));

        // Calculate Gold Growth
        const futureGold = amount * Math.pow(1 + GOLD_GROWTH_RATE, years);
        setGoldValue(Math.round(futureGold));
    }, [amount, years]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(val);
    };

    return (
        <section className="py-20 bg-slate-900 border-y border-white/10">
            <Container>
                <div className="text-center mb-12">
                    <span className="text-amber-400 font-bold tracking-widest uppercase text-xs mb-2 block">
                        The Cost of Inaction
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        See Your Financial Future
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Don't guess. See exactly what happens to your savings if you leave it in the bank versus moving it to gold.
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden max-w-4xl mx-auto">
                    {/* Input Section */}
                    <div className="p-8 md:p-10 border-b border-white/10 bg-slate-800/50">
                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Inputs */}
                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Investable Savings</label>
                                        <div className="text-2xl font-serif font-bold text-amber-400">
                                            {formatCurrency(amount)}
                                        </div>
                                    </div>
                                    <Slider
                                        value={[amount]}
                                        min={50000}
                                        max={1000000}
                                        step={10000}
                                        onValueChange={(val) => setAmount(val[0])}
                                        className="py-4"
                                    />
                                    <div className="flex justify-between text-xs text-slate-500">
                                        <span>$50k</span>
                                        <span>$1M+</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Time Horizon</label>
                                        <div className="text-2xl font-serif font-bold text-amber-400">
                                            {years} Years
                                        </div>
                                    </div>
                                    <Slider
                                        value={[years]}
                                        min={5}
                                        max={30}
                                        step={1}
                                        onValueChange={(val) => setYears(val[0])}
                                        className="py-4"
                                    />
                                    <div className="flex justify-between text-xs text-slate-500">
                                        <span>5 Years</span>
                                        <span>30 Years</span>
                                    </div>
                                </div>
                            </div>

                            {/* Narrative */}
                            <div className="flex flex-col justify-center border-l border-white/10 pl-0 md:pl-10">
                                <h4 className="text-xl font-bold text-white mb-2">Two Paths Diverge</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    In <span className="text-white font-bold">{years} years</span>, the difference between holding cash and holding gold could cost you <span className="text-red-400 font-bold">{formatCurrency(goldValue - cashValue)}</span>.
                                </p>
                                <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-white/10 flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <p className="text-xs text-slate-300">
                                        <strong className="text-amber-400">Inflation Alert:</strong> Cash guarantees a loss of purchasing power. The stats below show historic trends.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Split */}
                    <div className="grid md:grid-cols-2">
                        {/* The Crash (Cash) */}
                        <div className="p-8 md:p-10 bg-red-500/10 flex flex-col justify-center relative overflow-hidden group border-r border-white/10">
                            <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/5 transition-colors" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2 text-red-400">
                                    <TrendingDown className="w-5 h-5" />
                                    <span className="font-bold text-sm uppercase tracking-wide">If Kept in Cash</span>
                                </div>
                                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-1">
                                    {formatCurrency(cashValue)}
                                </div>
                                <p className="text-sm text-red-400 font-medium mb-6">
                                    Purchasing Power Value
                                </p>
                                <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-red-500 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${(cashValue / amount) * 100}%` }}
                                    />
                                </div>
                                <p className="text-xs text-slate-400 mt-3">
                                    You effectively <strong className="text-red-400">lost {formatCurrency(amount - cashValue)}</strong> to inflation.
                                </p>
                            </div>
                        </div>

                        {/* The Gold Standard */}
                        <div className="p-8 md:p-10 bg-emerald-500/10 flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2 text-emerald-400">
                                    <TrendingUp className="w-5 h-5" />
                                    <span className="font-bold text-sm uppercase tracking-wide">If Moved to Gold</span>
                                </div>
                                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-1">
                                    {formatCurrency(goldValue)}
                                </div>
                                <p className="text-sm text-emerald-400 font-medium mb-6">
                                    Projected Portfolio Value
                                </p>
                                <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <p className="text-xs text-slate-400 mt-3">
                                    Your wealth grew by <strong className="text-emerald-400">{Math.round(((goldValue - amount) / amount) * 100)}%</strong>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="p-6 bg-slate-800/50 border-t border-white/10 text-center">
                        <Button variant="gold" size="lg" asChild>
                            <Link href="/quiz">
                                Lock In These {formatCurrency(goldValue)} Gains <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                        <p className="text-[10px] text-slate-500 mt-3 text-center max-w-lg mx-auto">
                            *Projections based on historic 8% gold growth and 3.5% inflation. Past performance does not guarantee future results.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
