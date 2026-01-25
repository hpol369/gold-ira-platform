"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, ShieldAlert, TrendingDown } from "lucide-react";

export function SidebarAuditWidget() {
    return (
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-amber-500/30 rounded-xl p-6 shadow-xl relative overflow-hidden group">
            {/* Ambient Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/20 transition-all duration-700" />

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                        <ShieldAlert className="w-6 h-6 text-amber-500" />
                    </div>
                    <span className="text-xs font-bold text-amber-500 tracking-widest uppercase">
                        Portfolio Alert
                    </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-white mb-3">
                    Is Your 401(k) Safe from a Crash?
                </h3>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    Most retirement accounts are 100% physically exposed to the stock market.
                    <br /><br />
                    Take this 60-second audit to calculate your <strong className="text-white">Risk Score</strong> and see if you need to hedge.
                </p>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400 bg-slate-950/50 p-2 rounded border border-white/5">
                        <TrendingDown className="w-4 h-4 text-red-500" />
                        <span>Inflation Risk Detected</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 bg-slate-950/50 p-2 rounded border border-white/5">
                        <ShieldAlert className="w-4 h-4 text-amber-500" />
                        <span>Market Exposure Check</span>
                    </div>
                </div>

                <Button variant="gold" className="w-full mt-6 shadow-lg shadow-amber-900/20" asChild>
                    <Link href="/audit">
                        Check My Risk Score <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
