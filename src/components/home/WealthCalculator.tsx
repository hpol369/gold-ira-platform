"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Slider } from "@/components/ui/Slider";
import { Button } from "@/components/ui/Button";
import { ArrowRight, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
        <section id="wealth-calculator" className="py-24 bg-white border-y border-slate-200 scroll-mt-20">
            <Container>
                <div className="text-center mb-12">
                    <span className="text-[#B22234] font-bold tracking-widest uppercase text-xs mb-3 block">
                        The Cost of Inaction
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-[#000080] mb-6">
                        See Your Financial Future
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                        Don't guess. See exactly what happens to your savings if you leave it in the bank versus moving it to gold.
                    </p>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-5xl mx-auto">
                    {/* Input Section */}
                    <div className="p-8 md:p-12 border-b border-slate-200 bg-slate-50/50">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Inputs */}
                            <div className="space-y-10">
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Investable Savings</label>
                                        <div className="text-3xl font-serif font-bold text-[#000080]">
                                            {formatCurrency(amount)}
                                        </div>
                                    </div>
                                    <Slider
                                        value={[amount]}
                                        min={50000}
                                        max={1000000}
                                        step={10000}
                                        onValueChange={(val) => setAmount(val[0])}
                                        className="py-4 cursor-pointer"
                                    />
                                    <div className="flex justify-between text-xs text-slate-400 font-bold">
                                        <span>$50k</span>
                                        <span>$1M+</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Time Horizon</label>
                                        <div className="text-3xl font-serif font-bold text-[#000080]">
                                            {years} Years
                                        </div>
                                    </div>
                                    <Slider
                                        value={[years]}
                                        min={5}
                                        max={30}
                                        step={1}
                                        onValueChange={(val) => setYears(val[0])}
                                        className="py-4 cursor-pointer"
                                    />
                                    <div className="flex justify-between text-xs text-slate-400 font-bold">
                                        <span>5 Years</span>
                                        <span>30 Years</span>
                                    </div>
                                </div>
                            </div>

                            {/* Narrative */}
                            <div className="flex flex-col justify-center md:border-l border-slate-200 md:pl-12 pt-8 md:pt-0">
                                <h4 className="text-xl font-bold text-[#000080] mb-3">Two Paths Diverge</h4>
                                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                    In <span className="text-[#000080] font-bold">{years} years</span>, the difference between holding cash and holding gold could cost you <span className="text-[#B22234] font-black underline decoration-2 underline-offset-4">{formatCurrency(goldValue - cashValue)}</span>.
                                </p>
                                <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                    <p className="text-sm text-slate-700 font-medium">
                                        <strong className="text-amber-700">Inflation Alert:</strong> Cash guarantees a loss of purchasing power. The stats below show historic trends.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Split */}
                    <div className="grid md:grid-cols-2 text-white">
                        {/* The Crash (Cash) */}
                        <div className="p-10 bg-[#B22234] text-white flex flex-col justify-center relative overflow-hidden group">
                            {/* Texture overlay */}
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-3 text-red-100">
                                    <TrendingDown className="w-5 h-5" />
                                    <span className="font-bold text-sm uppercase tracking-wide">If Kept in Cash</span>
                                </div>
                                <div className="text-4xl md:text-5xl font-serif font-black mb-2">
                                    {formatCurrency(cashValue)}
                                </div>
                                <p className="text-sm text-red-100 font-medium mb-8">
                                    Purchasing Power Value
                                </p>
                                <div className="h-2.5 w-full bg-black/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-white rounded-full transition-all duration-1000 ease-out opacity-80"
                                        style={{ width: `${(cashValue / amount) * 100}%` }}
                                    />
                                </div>
                                <p className="text-sm text-red-50 mt-4 font-medium">
                                    You effectively <strong className="text-white border-b-2 border-white/40">lost {formatCurrency(amount - cashValue)}</strong> to inflation.
                                </p>
                            </div>
                        </div>

                        {/* The Gold Standard */}
                        <div className="p-10 bg-[#000080] text-white flex flex-col justify-center relative overflow-hidden group">
                            {/* Texture overlay */}
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-3 text-blue-100">
                                    <TrendingUp className="w-5 h-5" />
                                    <span className="font-bold text-sm uppercase tracking-wide">If Moved to Gold</span>
                                </div>
                                <div className="text-4xl md:text-5xl font-serif font-black mb-2">
                                    {formatCurrency(goldValue)}
                                </div>
                                <p className="text-sm text-blue-100 font-medium mb-8">
                                    Projected Portfolio Value
                                </p>
                                <div className="h-2.5 w-full bg-black/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-amber-400 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(251,191,36,0.6)]"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <p className="text-sm text-blue-100 mt-4 font-medium">
                                    Your wealth grew by <strong className="text-amber-700 border-b-2 border-amber-400/40">{Math.round(((goldValue - amount) / amount) * 100)}%</strong>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="p-8 bg-slate-50 border-t border-slate-200 text-center">
                        <Button className="bg-[#B22234] text-white font-bold text-lg px-8 py-6 h-auto shadow-lg hover:bg-[#8b1c2a] hover:-translate-y-0.5 transition-all" asChild>
                            <Link href="/quiz">
                                Lock In These {formatCurrency(goldValue)} Gains <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                        <p className="text-[11px] text-slate-400 mt-4 text-center max-w-lg mx-auto leading-normal">
                            *Projections based on historic 8% gold growth and 3.5% inflation. Past performance does not guarantee future results.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
