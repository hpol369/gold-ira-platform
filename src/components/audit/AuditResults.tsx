"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, AlertTriangle, TrendingDown, ShieldCheck, Lock, Download, CheckCircle2 } from "lucide-react";
import { AFFILIATE_LINKS } from "@/config/affiliates";
import { useState } from "react";

interface AuditResultProps {
    score: number;
    riskLabel: string;
    projectedLoss: string;
    primaryFear: string;
}

export function AuditResults({ score, riskLabel, projectedLoss, primaryFear }: AuditResultProps) {
    const isHighRisk = score > 70;
    const scoreColor = isHighRisk ? "text-red-500" : "text-amber-500";
    const barColor = isHighRisk ? "bg-red-500" : "bg-amber-500";

    return (
        <div className="py-8 w-full max-w-4xl mx-auto">
            {/* Header / ScoreCard */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl mb-8 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs font-mono text-slate-400 mb-4">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            AUDIT REPORT #8021
                        </div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                            Exposure Analysis
                        </h1>
                        <p className="text-slate-400">
                            Based on your goal to protect against <span className="text-white font-semibold">{primaryFear}</span>.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center p-6 bg-slate-900/80 rounded-2xl border border-slate-700 backdrop-blur-sm min-w-[200px]">
                        <span className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-2">Risk Score</span>
                        <div className={`text-6xl font-serif font-bold ${scoreColor}`}>
                            {score}<span className="text-2xl text-slate-600">/100</span>
                        </div>
                        <div className={`mt-2 px-3 py-1 rounded-full text-xs font-bold uppercase ${isHighRisk ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}>
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
                        <h3 className="text-xl font-bold text-white">The Vulnerability</h3>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                            <p className="text-sm text-red-300 mb-1 font-mono uppercase">Projected Loss (2030)</p>
                            <p className="text-3xl font-bold text-red-500">-{projectedLoss}</p>
                            <p className="text-xs text-red-400/70 mt-1">If purchasing power continues to decay at current CPI rates.</p>
                        </div>
                        <ul className="space-y-3 text-slate-300 text-sm">
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
                        <h3 className="text-xl font-bold text-white">The Sovereign Shield</h3>
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                        To neutralize this score, "Smart Money" investors move 5-20% of assets into <strong>Hard Assets (Gold, Silver, Crypto)</strong>. This acts as an insurance policy that rises when the dollar falls.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                            <Lock className="w-5 h-5 text-amber-500" />
                            <span className="text-sm text-white">Tax-Free "Penalty-Free" Rollover Logic</span>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                            <CheckCircle2 className="w-5 h-5 text-amber-500" />
                            <span className="text-sm text-white">IRS-Approved Legal Loophole</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 md:p-12 shadow-2xl shadow-amber-500/20"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Get Your Full "Sovereign Blueprint"
                </h2>
                <p className="text-amber-50 mb-8 max-w-xl mx-auto text-lg">
                    We've prepared a comprehensive guide explaining exactly how to execute this hedge strategy with zero tax implications.
                </p>

                <EmailCaptureForm auditScore={score} />

                <p className="text-xs text-amber-100 mt-6 opacity-80">
                    Includes: 2026 Gold Forecast, Zero-Tax Guide, and Trusted Dealer List.
                </p>
            </motion.div>
        </div>
    );
}

function EmailCaptureForm({ auditScore }: { auditScore: number }) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        try {
            const res = await fetch("/api/lead-capture", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    result: { score: auditScore }
                }),
            });

            if (res.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 animate-in fade-in zoom-in">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold text-white text-lg">Report Sent!</h3>
                        <p className="text-amber-100 text-sm mb-4">Check your inbox for your Sovereign Blueprint.</p>
                        <Button size="xl" className="bg-white text-amber-600 hover:bg-slate-50 font-bold w-full" asChild>
                            <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">
                                Download Free Kit Now <Download className="ml-2 w-5 h-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
            <div className="flex flex-col sm:flex-row gap-2">
                <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/90 border-0 text-slate-900 placeholder:text-slate-500 rounded-xl px-4 py-4 focus:ring-2 focus:ring-amber-400 outline-none"
                    required
                />
                <Button
                    type="submit"
                    size="xl"
                    disabled={status === "loading"}
                    className="bg-slate-900 text-white hover:bg-slate-800 font-bold shrink-0"
                >
                    {status === "loading" ? "Sending..." : "Email My Report"}
                </Button>
            </div>
            {status === "error" && (
                <p className="text-red-200 text-sm mt-2 absolute -bottom-6 left-0">Something went wrong. Please try again.</p>
            )}
        </form>
    );
}
