"use client";

import { TrendingUp, DollarSign, AlertTriangle, Shield } from "lucide-react";

export default function DebtInfographic() {
    // National debt data (in trillions)
    // Source: U.S. Treasury / Statista
    const debtData = [
        { year: "2000", debt: 5.7, height: 15 },
        { year: "2008", debt: 10.0, height: 26 },
        { year: "2016", debt: 19.6, height: 51 },
        { year: "2020", debt: 27.7, height: 72 },
        { year: "2024", debt: 34.0, height: 88 },
        { year: "2026", debt: 38.5, height: 100 },
    ];

    return (
        <div className="bg-[#000080] rounded-xl shadow-2xl overflow-hidden border-4 border-[#B22234] max-w-3xl mx-auto ring-4 ring-white/10 ring-offset-4 ring-offset-slate-900">
            {/* Header */}
            <div className="bg-[#B22234] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 border-b-2 border-white/20">
                <div className="flex items-center gap-3 text-white font-bold uppercase tracking-wider">
                    <AlertTriangle className="h-6 w-6 text-yellow-400" />
                    <span className="text-lg">U.S. National Debt Explosion</span>
                </div>
                <span className="text-white/80 text-xs font-mono bg-black/20 px-3 py-1 rounded-full">Source: U.S. Treasury 2026</span>
            </div>

            {/* Chart Area */}
            <div className="p-6 md:p-8 relative">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 top-20 bottom-32 px-8 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="w-full h-px bg-white border-t border-dashed"></div>
                    <div className="w-full h-px bg-white border-t border-dashed"></div>
                    <div className="w-full h-px bg-white border-t border-dashed"></div>
                    <div className="w-full h-px bg-white border-t border-dashed"></div>
                </div>

                {/* Bar Chart */}
                <div className="flex items-end justify-between gap-3 md:gap-6 h-64 mb-6 relative z-10">
                    {debtData.map((item, index) => (
                        <div key={item.year} className="flex flex-col items-center flex-1 group">
                            {/* Value Label */}
                            <div className="mb-2 text-white font-bold text-[10px] md:text-sm bg-black/40 px-2 py-1 rounded transition-all group-hover:scale-110 group-hover:bg-[#B22234]">
                                ${item.debt}T
                            </div>

                            {/* Bar */}
                            <div
                                className={`w-full max-w-[40px] rounded-t shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-700 ease-out hover:brightness-110 ${index === debtData.length - 1
                                        ? "bg-gradient-to-t from-[#B22234] to-red-500 animate-pulse border-t-2 border-white/50"
                                        : "bg-gradient-to-t from-slate-700 to-slate-500 hover:from-[#B22234] hover:to-red-500"
                                    }`}
                                style={{ height: `${item.height}%` }}
                            >
                            </div>
                        </div>
                    ))}
                </div>

                {/* X-axis labels */}
                <div className="flex justify-between text-slate-300 text-xs md:text-sm font-black font-mono border-t-2 border-white/20 pt-4">
                    {debtData.map((item) => (
                        <span key={item.year} className="flex-1 text-center">{item.year}</span>
                    ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                    <div className="text-center group hover:bg-white/5 p-2 rounded-lg transition-colors">
                        <div className="flex items-center justify-center gap-1 text-[#ff0000] mb-2">
                            <TrendingUp className="h-5 w-5" />
                        </div>
                        <div className="text-2xl md:text-4xl font-black text-white tracking-tighter shadow-black drop-shadow-lg">
                            575<span className="text-lg align-top text-[#B22234]">%</span>
                        </div>
                        <div className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wide mt-1">Debt Surge</div>
                    </div>

                    <div className="text-center group hover:bg-white/5 p-2 rounded-lg transition-colors">
                        <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
                            <DollarSign className="h-5 w-5" />
                        </div>
                        <div className="text-2xl md:text-4xl font-black text-white tracking-tighter drop-shadow-lg">
                            $1,300
                        </div>
                        <div className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wide mt-1">Cost Per Family</div>
                    </div>

                    <div className="text-center group hover:bg-white/5 p-2 rounded-lg transition-colors">
                        <div className="flex items-center justify-center gap-1 text-[#FFD700] mb-2">
                            <Shield className="h-5 w-5" />
                        </div>
                        <div className="text-2xl md:text-4xl font-black text-[#FFD700] tracking-tighter drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                            GOLD
                        </div>
                        <div className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wide mt-1">Wealth Shield</div>
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="mt-8 bg-black/40 border border-[#B22234]/30 rounded-lg p-4 text-center">
                    <p className="text-white/90 font-medium text-sm md:text-base italic">
                        <span className="text-[#B22234] font-bold">"</span>
                        When governments print money, gold preserves purchasing power.
                        <span className="text-[#B22234] font-bold">"</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
