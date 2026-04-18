"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Phone, TrendingUp, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useLeadModal } from "@/context/LeadModalContext";

export function Hero() {
    const { openModal } = useLeadModal();

    return (
        <section className="relative overflow-hidden bg-[#0C0D18] pb-20 pt-20 md:pb-32 md:pt-32 border-b border-[#2A2D42]">
            {/* Abstract Background Element - Patriot Navy/Red Wash */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[rgba(197,149,46,0.06)] skew-x-12 transform translate-x-20 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.015] pointer-events-none"></div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Warning Badge */}
                    <div
                        style={{ animation: "fadeInUp 0.5s ease-out both" }}
                        className="inline-flex items-center gap-2 bg-[rgba(220,38,38,0.08)] border border-red-100 text-[#D4A94E] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-8 shadow-sm"
                    >
                        <ShieldCheck className="h-4 w-4" />
                        <span>Wealth Protection Alert: 2026 Update</span>
                    </div>

                    {/* Main Headline */}
                    <h1
                        style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-[#F6F4EF] mb-8 leading-[1.1]"
                    >
                        Protect Your <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5952E] to-red-600 decoration-[#B22234] underline decoration-4 underline-offset-8">Retirement.</span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
                        className="max-w-2xl text-lg text-[#D0CCC4] md:text-2xl leading-relaxed mb-10 font-medium"
                    >
                        The dollar is losing value. Discover the <strong className="text-[#F6F4EF]">&quot;IRS Loophole&quot;</strong> that allows you to move your 401(k) into physical gold—tax-free and penalty-free.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                        <Button
                            size="xl"
                            asChild
                            className="w-full sm:w-auto min-w-[280px] h-16 text-lg font-bold text-white
                            bg-[rgba(197,149,46,0.1)] hover:bg-[#000060]
                            shadow-xl shadow-blue-900/20
                            hover:scale-105 transition-all duration-300"
                        >
                            <Link href="/#featured-partner" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('featured-partner')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <span className="flex items-center justify-center gap-2">
                                    Show Me The Strategy
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        </Button>

                        <Button
                            size="xl"
                            variant="outline"
                            className="bg-white hover:bg-[#121423] text-[#F6F4EF] border-2 border-[#000080]/10 hover:border-[rgba(197,149,46,0.55)]/30 w-full sm:w-auto min-w-[280px] h-16 text-lg transition-all duration-300 shadow-md hover:shadow-lg group"
                            onClick={() => openModal("default", "homepage-hero")}
                        >
                            <span className="flex items-center justify-center gap-2">
                                <Phone className="h-5 w-5 text-[#D4A94E]" />
                                Free Info Call
                            </span>
                        </Button>
                    </div>

                    {/* Trust Factors */}
                    <div
                        style={{ animation: "fadeInUp 1s ease-out 0.4s both" }}
                        className="mt-16 w-full max-w-4xl"
                    >
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-sm text-left">
                            <div className="flex items-center gap-4 p-5 rounded-xl bg-[#161828] border border-[#2A2D42] shadow-sm hover:shadow-md hover:border-[rgba(197,149,46,0.55)]/30 transition-all duration-300 group">
                                <div className="p-3 rounded-full bg-[#121423] text-[#F6F4EF] group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-[#F6F4EF] text-base">Wealth Protection</span>
                                    <span className="text-[#A8A39A] text-xs uppercase tracking-wider">Inflation Hedge</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-5 rounded-xl bg-[#161828] border border-[#2A2D42] shadow-sm hover:shadow-md hover:border-[rgba(197,149,46,0.55)]/30 transition-all duration-300 group">
                                <div className="p-3 rounded-full bg-[#121423] text-[#F6F4EF] group-hover:scale-110 transition-transform">
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-[#F6F4EF] text-base">Portfolio Growth</span>
                                    <span className="text-[#A8A39A] text-xs uppercase tracking-wider">Uncorrelated Asset</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-5 rounded-xl bg-[#161828] border border-[#2A2D42] shadow-sm hover:shadow-md hover:border-[rgba(197,149,46,0.55)]/30 transition-all duration-300 group">
                                <div className="p-3 rounded-full bg-[#121423] text-[#F6F4EF] group-hover:scale-110 transition-transform">
                                    <Lock className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-[#F6F4EF] text-base">Tax-Free</span>
                                    <span className="text-[#A8A39A] text-xs uppercase tracking-wider">IRS Approved Rollover</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
