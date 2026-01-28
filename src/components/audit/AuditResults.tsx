"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, AlertTriangle, TrendingDown, ShieldCheck, Lock, Download, CheckCircle2 } from "lucide-react";
import { AFFILIATE_LINKS } from "@/config/affiliates";

interface AuditResultProps {
    score: number;
    riskLabel: string;
    projectedLoss: string;
    primaryFear: string;
}

export function AuditResults({ score, riskLabel, projectedLoss, primaryFear }: AuditResultProps) {
    const isHighRisk = score > 70;
    const scoreColor = isHighRisk ? "text-red-500" : "text-[#B22234]";
    const barColor = isHighRisk ? "bg-red-500" : "bg-[#B22234]";

    return (
        <div className="py-8 w-full max-w-4xl mx-auto">
            {/* Header / ScoreCard */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-2xl mb-8 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-mono text-slate-500 mb-4">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            AUDIT REPORT #8021
                        </div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#000080] mb-2">
                            Exposure Analysis
                        </h1>
                        <p className="text-slate-500">
                            Based on your goal to protect against <span className="text-[#000080] font-semibold">{primaryFear}</span>.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-200 min-w-[200px]">
                        <span className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-2">Risk Score</span>
                        <div className={`text-6xl font-serif font-bold ${scoreColor}`}>
                            {score}<span className="text-2xl text-slate-400">/100</span>
                        </div>
                        <div className={`mt-2 px-3 py-1 rounded-full text-xs font-bold uppercase ${isHighRisk ? 'bg-red-500/20 text-red-600' : 'bg-[#B22234]/20 text-[#B22234]'}`}>
                            {riskLabel}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Two Columns: The Problem vs The Solution */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                {/* The Danger */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle className="w-6 h-6 text-red-500" />
                        <h3 className="text-xl font-bold text-[#000080]">The Vulnerability</h3>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                            <p className="text-sm text-red-600 mb-1 font-mono uppercase">Projected Loss (2030)</p>
                            <p className="text-3xl font-bold text-red-500">-{projectedLoss}</p>
                            <p className="text-xs text-red-500/70 mt-1">If purchasing power continues to decay at current CPI rates.</p>
                        </div>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li className="flex items-start gap-2">
                                <TrendingDown className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                                <span>Your portfolio is 100% correlated to the dollar, which has lost 25% value since 2020.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <TrendingDown className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                                <span>Traditional "60/40" stocks/bonds offer zero protection against stagflation.</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* The Solution */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <ShieldCheck className="w-6 h-6 text-emerald-500" />
                        <h3 className="text-xl font-bold text-[#000080]">The Sovereign Shield</h3>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        To neutralize this score, "Smart Money" investors move 5-20% of assets into <strong>Hard Assets (Gold, Silver, Crypto)</strong>. This acts as an insurance policy that rises when the dollar falls.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <Lock className="w-5 h-5 text-[#B22234]" />
                            <span className="text-sm text-[#000080]">Tax-Free "Penalty-Free" Rollover Logic</span>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <CheckCircle2 className="w-5 h-5 text-[#B22234]" />
                            <span className="text-sm text-[#000080]">IRS-Approved Legal Loophole</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center bg-gradient-to-br from-[#B22234] to-[#8b1c2a] rounded-2xl p-8 md:p-12 shadow-2xl shadow-[#B22234]/20"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Get Your Full "Sovereign Blueprint"
                </h2>
                <p className="text-red-50 mb-8 max-w-xl mx-auto text-lg">
                    We've prepared a comprehensive guide explaining exactly how to execute this hedge strategy with zero tax implications.
                </p>
                <Button size="xl" className="bg-white text-[#B22234] hover:bg-slate-50 font-bold text-lg min-w-[280px]" asChild>
                    <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">
                        Download Free Kit & Report <Download className="ml-2 w-5 h-5" />
                    </a>
                </Button>
                <p className="text-xs text-red-100 mt-4 opacity-80">
                    Includes: 2026 Gold Forecast, Zero-Tax Guide, and Trusted Dealer List.
                </p>
            </motion.div>
        </div>
    );
}
