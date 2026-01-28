"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, ShieldAlert, TrendingDown } from "lucide-react";

export function SidebarAuditWidget() {
    return (
        <div className="bg-gradient-to-b from-slate-50 to-white border border-[#B22234]/30 rounded-xl p-6 shadow-xl relative overflow-hidden group">
            {/* Ambient Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#B22234]/20 transition-all duration-700" />

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-[#B22234]/10 rounded-lg">
                        <ShieldAlert className="w-6 h-6 text-[#B22234]" />
                    </div>
                    <span className="text-xs font-bold text-[#B22234] tracking-widest uppercase">
                        Portfolio Alert
                    </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#000080] mb-3">
                    Is Your 401(k) Safe from a Crash?
                </h3>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Most retirement accounts are 100% physically exposed to the stock market.
                    <br /><br />
                    Take this 60-second audit to calculate your <strong className="text-[#000080]">Risk Score</strong> and see if you need to hedge.
                </p>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500 bg-slate-50 p-2 rounded border border-slate-200">
                        <TrendingDown className="w-4 h-4 text-red-500" />
                        <span>Inflation Risk Detected</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 bg-slate-50 p-2 rounded border border-slate-200">
                        <ShieldAlert className="w-4 h-4 text-[#B22234]" />
                        <span>Market Exposure Check</span>
                    </div>
                </div>

                <Button variant="gold" className="w-full mt-6 shadow-lg shadow-[#B22234]/20" asChild>
                    <Link href="/audit">
                        Check My Risk Score <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
