"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Phone, CheckCircle2, TrendingUp, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-50 pb-20 pt-20 md:pb-32 md:pt-32 border-b border-slate-200">
            {/* Abstract Background Element - Patriot Navy/Red Wash */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#000080]/5 skew-x-12 transform translate-x-20 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.015] pointer-events-none"></div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Warning Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-[#B22234] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-8 shadow-sm"
                    >
                        <ShieldCheck className="h-4 w-4" />
                        <span>Wealth Protection Alert: 2026 Update</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-[#000080] mb-8 leading-[1.1]"
                    >
                        Protect Your <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B22234] to-red-600 decoration-[#B22234] underline decoration-4 underline-offset-8">Retirement.</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="max-w-2xl text-lg text-slate-600 md:text-2xl leading-relaxed mb-10 font-medium"
                    >
                        The dollar is losing value. Discover the <strong className="text-[#000080]">"IRS Loophole"</strong> that allows you to move your 401(k) into physical gold—tax-free and penalty-free.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                        <Button
                            size="xl"
                            asChild
                            className="w-full sm:w-auto min-w-[280px] h-16 text-lg font-bold text-white
                            bg-[#000080] hover:bg-[#000060]
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
                            className="bg-white hover:bg-slate-50 text-[#000080] border-2 border-[#000080]/10 hover:border-[#000080]/30 w-full sm:w-auto min-w-[280px] h-16 text-lg transition-all duration-300 shadow-md hover:shadow-lg group"
                            asChild
                        >
                            <a href={getTrackedLink(AFFILIATE_LINKS.augusta, "homepage-hero", "augusta")} target="_blank" rel="noopener noreferrer">
                                <span className="flex items-center justify-center gap-2">
                                    <Phone className="h-5 w-5 text-[#B22234]" />
                                    Free Consultation
                                </span>
                            </a>
                        </Button>
                    </div>

                    {/* Trust Factors */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mt-16 w-full max-w-4xl"
                    >
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-sm text-left">
                            <div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#000080]/30 transition-all duration-300 group">
                                <div className="p-3 rounded-full bg-blue-50 text-[#000080] group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-[#000080] text-base">Wealth Protection</span>
                                    <span className="text-slate-500 text-xs uppercase tracking-wider">Inflation Hedge</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#000080]/30 transition-all duration-300 group">
                                <div className="p-3 rounded-full bg-blue-50 text-[#000080] group-hover:scale-110 transition-transform">
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-[#000080] text-base">Portfolio Growth</span>
                                    <span className="text-slate-500 text-xs uppercase tracking-wider">Uncorrelated Asset</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#000080]/30 transition-all duration-300 group">
                                <div className="p-3 rounded-full bg-blue-50 text-[#000080] group-hover:scale-110 transition-transform">
                                    <Lock className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-[#000080] text-base">Tax-Free</span>
                                    <span className="text-slate-500 text-xs uppercase tracking-wider">IRS Approved Rollover</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
