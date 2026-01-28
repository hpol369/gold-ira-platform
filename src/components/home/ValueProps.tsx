"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Check, X } from "lucide-react";

export function ValueProps() {
    return (
        <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Left Content */}
                    <FadeIn className="flex-1 space-y-8">
                        <div>
                            <span className="text-[#B22234] font-bold tracking-widest uppercase text-sm">The Rich Dad Approach</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-black text-[#000080] mt-2">
                                What the Wealthy Do Differently
                            </h2>
                        </div>

                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            The middle class saves in <strong className="text-[#000080]">&quot;Paper Assets&quot;</strong> (Stocks, Bonds, 401ks) that can be printed away by the government.
                            The wealthy own <strong className="text-[#000080]">&quot;Real Assets&quot;</strong> (Gold, Silver, Real Estate) that can never be destroyed.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-red-50 border border-red-100 rounded-2xl p-6
                                           hover:-translate-y-1 hover:shadow-lg
                                           transition-all duration-300 flex items-start gap-4">
                                <div className="p-3 rounded-full bg-red-100 text-[#B22234] mt-1 shrink-0">
                                    <X className="h-4 w-4" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#B22234] text-lg">Paper Assets (The Trap)</h4>
                                    <p className="text-sm text-slate-600 font-medium">Fiat currency, Savings Accounts, Mutual Funds. Vulnerable to inflation and market crashes.</p>
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-100 rounded-2xl p-6
                                           hover:-translate-y-1 hover:shadow-lg
                                           transition-all duration-300 flex items-start gap-4">
                                <div className="p-3 rounded-full bg-green-100 text-green-700 mt-1 shrink-0">
                                    <Check className="h-4 w-4" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-green-700 text-lg">Real Assets (The Solution)</h4>
                                    <p className="text-sm text-slate-600 font-medium">Physical Gold, Silver, Real Estate. Intrinsic value that has survived every crisis in history.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Visual (Pie Charts Comparison) */}
                    <FadeIn delay={0.2} className="flex-1 w-full">
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8
                                       shadow-xl relative overflow-hidden">

                            <div className="grid grid-cols-2 gap-8 text-center relative z-10">
                                {/* Middle Class Chart */}
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative h-32 w-32 rounded-full bg-slate-200 border-4 border-slate-300 shadow-inner flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-400 w-full h-full" style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0)' }}></div>
                                        <span className="relative z-10 font-bold text-slate-600 text-xs bg-white/80 px-2 py-1 rounded-full shadow-sm">95% Paper</span>
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-bold text-slate-500">The Middle Class</h4>
                                        <p className="text-xs text-[#B22234] font-bold uppercase tracking-wider">Exposed to Crash</p>
                                    </div>
                                </div>

                                {/* Wealthy Chart */}
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative h-32 w-32 rounded-full bg-[#000080] border-4 border-[#000080]/20 shadow-xl flex items-center justify-center">
                                        <div className="absolute inset-0 bg-amber-400 w-full h-full" style={{ clipPath: 'polygon(50% 50%, 100% 100%, 0 100%)' }}></div>
                                        <span className="relative z-10 font-bold text-white text-xs text-center leading-tight">40% Real<br />Assets</span>
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-bold text-[#000080]">The Wealthy</h4>
                                        <p className="text-xs text-green-600 font-bold uppercase tracking-wider">Protected & Growing</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                <p className="text-sm font-bold text-[#000080]">
                                    A Gold IRA allows you to move your money from the &quot;Paper&quot; circle to the &quot;Real Asset&quot; circle—tax-free.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
}
