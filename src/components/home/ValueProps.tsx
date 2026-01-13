"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Check, X } from "lucide-react";

export function ValueProps() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Left Content */}
                    <FadeIn className="flex-1 space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm">The Rich Dad Approach</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mt-2">
                                What the Wealthy Do Differently
                            </h2>
                        </div>

                        <p className="text-lg text-text-muted leading-relaxed">
                            The middle class saves in <strong>"Paper Assets"</strong> (Stocks, Bonds, 401ks) that can be printed away by the government.
                            The wealthy own <strong>"Real Assets"</strong> (Gold, Silver, Real Estate) that can never be destroyed.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                                <div className="p-2 rounded-full bg-red-100 text-red-600 mt-1">
                                    <X className="h-4 w-4" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-red-900">Paper Assets (The Trap)</h4>
                                    <p className="text-sm text-red-700">Fiat currency, Savings Accounts, Mutual Funds. Vulnerable to inflation and market crashes.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-100">
                                <div className="p-2 rounded-full bg-green-100 text-accent mt-1">
                                    <Check className="h-4 w-4" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-accent">Real Assets (The Solution)</h4>
                                    <p className="text-sm text-green-800">Physical Gold, Silver, Real Estate. Intrinsic value that has survived every crisis in history.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Visual (Pie Charts Comparison) */}
                    <FadeIn delay={0.2} className="flex-1 w-full">
                        <div className="bg-background-subtle rounded-3xl p-8 border border-gray-100 relative overflow-hidden">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />

                            <div className="grid grid-cols-2 gap-8 text-center relative z-10">
                                {/* Middle Class Chart */}
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative h-32 w-32 rounded-full bg-gray-300 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-gray-400 w-full h-full" style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0)' }}></div>
                                        <span className="relative z-10 font-bold text-gray-600 text-xs">95% Paper</span>
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-bold text-text-muted">The Middle Class</h4>
                                        <p className="text-xs text-gray-500">Exposed to Crash</p>
                                    </div>
                                </div>

                                {/* Wealthy Chart */}
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative h-32 w-32 rounded-full bg-secondary border-4 border-white shadow-lg flex items-center justify-center">
                                        <div className="absolute inset-0 bg-primary opacity-30 w-full h-full" style={{ clipPath: 'polygon(50% 50%, 100% 100%, 0 100%)' }}></div>
                                        <span className="relative z-10 font-bold text-white text-xs">40% Real Assets</span>
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-bold text-primary">The Wealthy</h4>
                                        <p className="text-xs text-primary/70">Protected & Growing</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-sm font-medium text-text-muted">
                                    A Gold IRA allows you to move your money from the "Paper" circle to the "Real Asset" circle—tax-free.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
}
