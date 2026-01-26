"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, TrendingUp, Lock, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-primary pb-20 pt-24 md:pb-32 md:pt-32 min-h-[90vh] flex items-center">
            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gold Glow Top Left */}
                <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen opacity-40" />
                {/* Emerald Glow Bottom Right */}
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-emerald-900/40 rounded-full blur-[120px] mix-blend-screen opacity-30" />
                {/* Grainy Texture Overlay */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Floating Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300 mb-8 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span>Last Updated: January 18, 2026</span>
                    </div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white mb-8 leading-[1.1] drop-shadow-sm"
                    >
                        Stop Letting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-200 animate-shimmer bg-[length:200%_auto]">Inflation</span> Eat Your Savings
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="max-w-2xl text-lg text-gray-300 md:text-2xl leading-relaxed mb-10 font-light"
                    >
                        Most people save in "fake money" and lose purchasing power every day.
                        See how to use a <strong className="text-white font-semibold">Tax-Free Gold IRA</strong> to legally opt out of the failing banking system.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                        <Button
                            size="xl"
                            asChild
                            className="w-full sm:w-auto min-w-[280px] h-16 text-lg font-bold text-slate-900 
                            bg-gradient-to-b from-amber-200 via-amber-400 to-amber-500 
                            shadow-[0_0_50px_-10px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_-10px_rgba(212,175,55,0.6)]
                            hover:scale-105 transition-all duration-300 border border-amber-200/50 relative overflow-hidden group"
                        >
                            <Link href="/#featured-partner" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('featured-partner')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Show Me The Strategy
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Shine Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
                            </Link>
                        </Button>

                        <Button
                            size="xl"
                            className="bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 w-full sm:w-auto min-w-[280px] h-16 text-lg backdrop-blur-sm transition-all duration-300 shadow-lg group"
                            asChild
                        >
                            <a href={getTrackedLink(AFFILIATE_LINKS.augusta, "homepage-hero", "augusta")} target="_blank" rel="noopener noreferrer">
                                <span className="flex items-center justify-center gap-2">
                                    <Phone className="h-5 w-5 text-secondary group-hover:animate-pulse" />
                                    Free Personal Consultation
                                </span>
                            </a>
                        </Button>
                    </div>

                    {/* Trust Strip (Phase 1.5) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 z-10 relative"
                    >
                        {/* 0 Complaints Badge (NEW) */}
                        <div className="flex items-center gap-2">
                            <div className="bg-green-500/20 p-1 rounded border border-green-500/30">
                                <ShieldCheck className="w-4 h-4 text-green-400" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] text-green-400 uppercase tracking-widest leading-none font-bold">Zero</span>
                                <span className="text-sm font-bold text-white leading-none">Consumer Complaints</span>
                            </div>
                        </div>

                        {/* BBB */}
                        <div className="flex items-center gap-2 border-l border-white/10 pl-6">
                            <div className="bg-white/10 p-1 rounded">
                                <span className="font-sans font-bold text-white text-xs leading-none">BBB</span>
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">Rating</span>
                                <span className="text-sm font-bold text-white leading-none">A+ Accredited</span>
                            </div>
                        </div>

                        {/* Trustpilot Placeholder */}
                        <div className="flex items-center gap-2 border-l border-white/10 pl-6">
                            <div className="flex text-[#00b67a]">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                ))}
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">Trustpilot</span>
                                <span className="text-sm font-bold text-white leading-none">4.9/5.0 Score</span>
                            </div>
                        </div>

                        {/* Consumer Affairs */}
                        <div className="flex items-center gap-2 border-l border-white/10 pl-6">
                            <div className="flex text-amber-500">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                ))}
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">Consumer</span>
                                <span className="text-sm font-bold text-white leading-none">Affairs Linked</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Trust Factors / Social Proof */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-16 pt-8 border-t border-white/10 w-full max-w-4xl"
                    >
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-sm text-left">
                            <div className="flex items-center gap-4 glass-card p-4 hover:bg-white/10 transition-colors group">
                                <div className="p-3 rounded-full bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-white text-base">Wealth Protection</span>
                                    <span className="text-gray-400 text-xs uppercase tracking-wider">Inflation Hedge</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 glass-card p-4 hover:bg-white/10 transition-colors group">
                                <div className="p-3 rounded-full bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-white text-base">Portfolio Growth</span>
                                    <span className="text-gray-400 text-xs uppercase tracking-wider">Uncorrelated Asset</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 glass-card p-4 hover:bg-white/10 transition-colors group">
                                <div className="p-3 rounded-full bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                                    <Lock className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-white text-base">Tax-Free</span>
                                    <span className="text-gray-400 text-xs uppercase tracking-wider">IRS Approved Rollover</span>
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 text-center text-xs text-gray-500 font-mono tracking-widest uppercase opacity-60">
                            Trusted Strategy • Zero Tax Implications • 100% Legal
                        </p>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
