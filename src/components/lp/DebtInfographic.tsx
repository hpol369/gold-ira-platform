"use client";

import { TrendingUp, DollarSign, AlertTriangle, Shield } from "lucide-react";

export default function DebtInfographic() {
    // National debt data (in trillions)
    const debtData = [
        { year: "2000", debt: 5.7, height: 15 },
        { year: "2008", debt: 10.0, height: 26 },
        { year: "2016", debt: 19.6, height: 51 },
        { year: "2020", debt: 27.7, height: 72 },
        { year: "2024", debt: 34.0, height: 88 },
        { year: "2026", debt: 38.5, height: 100 },
    ];

    return (
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl shadow-2xl overflow-hidden border-4 border-white max-w-3xl mx-auto">
            {/* Header */}
            <div className="bg-[#B22234] px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-bold">
                    <AlertTriangle className="h-5 w-5" />
                    <span>U.S. National Debt Growth</span>
                </div>
                <span className="text-white/80 text-sm">Source: U.S. Treasury 2026</span>
            </div>

            {/* Chart Area */}
            <div className="p-6">
                {/* Bar Chart */}
                <div className="flex items-end justify-between gap-2 h-48 mb-4">
                    {debtData.map((item, index) => (
                        <div key={item.year} className="flex flex-col items-center flex-1">
                            <div
                                className={`w-full rounded-t transition-all duration-500 ${
                                    index === debtData.length - 1
                                        ? "bg-gradient-to-t from-[#B22234] to-red-400 animate-pulse"
                                        : "bg-gradient-to-t from-amber-600 to-amber-400"
                                }`}
                                style={{ height: `${item.height}%` }}
                            >
                                <div className="text-center pt-2 text-white font-bold text-xs md:text-sm">
                                    ${item.debt}T
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* X-axis labels */}
                <div className="flex justify-between text-slate-400 text-xs md:text-sm font-mono border-t border-slate-700 pt-2">
                    {debtData.map((item) => (
                        <span key={item.year} className="flex-1 text-center">{item.year}</span>
                    ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-700">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-[#B22234] mb-1">
                            <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-2xl md:text-3xl font-black text-white">575%</div>
                        <div className="text-xs text-slate-400">Debt Growth Since 2000</div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-amber-500 mb-1">
                            <DollarSign className="h-4 w-4" />
                        </div>
                        <div className="text-2xl md:text-3xl font-black text-white">$1,300</div>
                        <div className="text-xs text-slate-400">Tariff Cost/Household</div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                            <Shield className="h-4 w-4" />
                        </div>
                        <div className="text-2xl md:text-3xl font-black text-amber-400">GOLD</div>
                        <div className="text-xs text-slate-400">5,000 Years of Protection</div>
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 text-center">
                    <p className="text-amber-400 font-semibold text-sm md:text-base">
                        When governments print money, gold preserves purchasing power.
                    </p>
                </div>
            </div>
        </div>
    );
}
