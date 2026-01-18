"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, TrendingUp, Lock, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-primary pb-20 pt-24 md:pb-32 md:pt-32 min-h-[90vh] flex items-center">
            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gold Glow Top Left */}
                <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen opacity-60" />
                {/* Deep Green Glow Bottom Right */}
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#1a5d3a]/30 rounded-full blur-[120px] mix-blend-screen opacity-50" />
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
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white mb-8 leading-[1.1]"
                    >
                        What the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5b94a] via-[#FFF8E7] to-[#d4a835] animate-shimmer bg-[length:200%_auto]">Rich</span> Know About Retirement
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="max-w-2xl text-lg text-gray-300 md:text-2xl leading-relaxed mb-10 font-light"
                    >
                        Most people save in paper assets and lose purchasing power every year.
                        See how to use a <strong className="text-white font-semibold">Tax-Free Gold IRA</strong> to opt out of the failing banking system.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                        <Button
                            size="xl"
                            asChild
                            className="w-full sm:w-auto min-w-[280px] h-16 text-lg font-bold text-[#1a5d3a] 
                            bg-gradient-to-b from-[#fadd7d] via-[#f2c94c] to-[#d4a017] 
                            shadow-[0_0_50px_-10px_rgba(250,221,125,0.4)] hover:shadow-[0_0_60px_-10px_rgba(250,221,125,0.6)]
                            hover:scale-105 transition-all duration-300 border border-[#fff8e7]/40 relative overflow-hidden group"
                        >
                            <Link href="/best-gold-ira-companies">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    See Best Companies of 2026
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Shine Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
                            </Link>
                        </Button>

                        <Button
                            size="xl"
                            className="bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 w-full sm:w-auto min-w-[280px] h-16 text-lg backdrop-blur-sm transition-all duration-300 shadow-lg"
                            asChild
                        >
                            <Link href="/guide/gold-ira-guide">
                                <span className="flex items-center justify-center gap-2">
                                    Get Free PDF Guide
                                    <ChevronRight className="h-5 w-5 text-secondary" />
                                </span>
                            </Link>
                        </Button>
                    </div>

                    {/* Trust Strip (Phase 1.5) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 z-10 relative"
                    >
                        {/* BBB */}
                        <div className="flex items-center gap-2">
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
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group">
                                <div className="p-3 rounded-full bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-white text-base">Wealth Protection</span>
                                    <span className="text-gray-400 text-xs uppercase tracking-wider">Inflation Hedge</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group">
                                <div className="p-3 rounded-full bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-white text-base">Portfolio Growth</span>
                                    <span className="text-gray-400 text-xs uppercase tracking-wider">Uncorrelated Asset</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group">
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
