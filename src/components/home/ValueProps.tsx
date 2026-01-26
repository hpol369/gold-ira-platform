"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { Check, X } from "lucide-react";

export function ValueProps() {
    return (
        <section className="py-32 bg-slate-800/50 relative overflow-hidden">
            <FloatingOrbs variant="minimal" />
            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Left Content */}
                    <FadeIn className="flex-1 space-y-8">
                        <div>
                            <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">The Rich Dad Approach</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-2">
                                What the Wealthy Do Differently
                            </h2>
                        </div>

                        <p className="text-lg text-slate-300 leading-relaxed">
                            The middle class saves in <strong className="text-white">&quot;Paper Assets&quot;</strong> (Stocks, Bonds, 401ks) that can be printed away by the government.
                            The wealthy own <strong className="text-white">&quot;Real Assets&quot;</strong> (Gold, Silver, Real Estate) that can never be destroyed.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6
                                           hover:bg-white/[0.08] hover:-translate-y-2
                                           hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(212,175,55,0.1)]
                                           hover:border-amber-400/30
                                           transition-all duration-400 flex items-start gap-4">
                                <div className="p-3 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/5 text-red-400 mt-1">
                                    <X className="h-4 w-4" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-red-400">Paper Assets (The Trap)</h4>
                                    <p className="text-sm text-red-300/80">Fiat currency, Savings Accounts, Mutual Funds. Vulnerable to inflation and market crashes.</p>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6
                                           hover:bg-white/[0.08] hover:-translate-y-2
                                           hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(212,175,55,0.1)]
                                           hover:border-amber-400/30
                                           transition-all duration-400 flex items-start gap-4">
                                <div className="p-3 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/5 text-green-400 mt-1">
                                    <Check className="h-4 w-4" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-green-400">Real Assets (The Solution)</h4>
                                    <p className="text-sm text-green-300/80">Physical Gold, Silver, Real Estate. Intrinsic value that has survived every crisis in history.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Visual (Pie Charts Comparison) */}
                    <FadeIn delay={0.2} className="flex-1 w-full">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8
                                       hover:bg-white/[0.08] hover:-translate-y-2
                                       hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(212,175,55,0.1)]
                                       hover:border-amber-400/30
                                       transition-all duration-400 relative overflow-hidden">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />

                            <div className="grid grid-cols-2 gap-8 text-center relative z-10">
                                {/* Middle Class Chart */}
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative h-32 w-32 rounded-full bg-slate-600 border-4 border-slate-700 shadow-lg flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-500 w-full h-full" style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0)' }}></div>
                                        <span className="relative z-10 font-bold text-slate-300 text-xs">95% Paper</span>
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-bold text-slate-400">The Middle Class</h4>
                                        <p className="text-xs text-slate-500">Exposed to Crash</p>
                                    </div>
                                </div>

                                {/* Wealthy Chart */}
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative h-32 w-32 rounded-full bg-amber-500 border-4 border-amber-400/50 shadow-lg flex items-center justify-center">
                                        <div className="absolute inset-0 bg-slate-800 opacity-40 w-full h-full" style={{ clipPath: 'polygon(50% 50%, 100% 100%, 0 100%)' }}></div>
                                        <span className="relative z-10 font-bold text-white text-xs">40% Real Assets</span>
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-bold text-white">The Wealthy</h4>
                                        <p className="text-xs text-amber-400/70">Protected & Growing</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-sm font-medium text-slate-400">
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
