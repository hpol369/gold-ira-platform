"use client";

import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Trophy, Phone, UserCheck, Lock, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export function FeaturedPartner() {
    return (
        <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden" id="featured-partner">
            {/* Ambient red glow behind section */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#B22234]/5 blur-[120px] rounded-full" />
            </div>

            {/* Floating Orbs decoration */}
            <FloatingOrbs variant="section" />

            <Container className="relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B22234]/10 border border-[#B22234]/20 text-[#B22234] text-xs font-bold uppercase tracking-widest mb-4">
                        <Trophy className="w-3.5 h-3.5" />
                        Editor&apos;s Choice - 2026 Gold Standard
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#000080] mb-4">
                        Our <span className="text-[#B22234] border-b-4 border-[#B22234]/30 drop-shadow-[0_0_20px_rgba(178,34,52,0.4)]">Top Pick</span> for 2026
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl">
                        After reviewing fees, customer complaints, and service quality across the industry,
                        Augusta Precious Metals earned our highest rating with <strong className="text-slate-900">zero BBB complaints</strong> in over 7 years.
                    </p>
                </div>

                {/* Main Card - Premium glass treatment */}
                <div className="relative rounded-3xl overflow-hidden animate-fade-in-up max-w-5xl mx-auto
                              bg-white border border-slate-200
                              shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                    {/* Red decorative line */}
                    <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#B22234]/50 via-[#B22234] to-[#B22234]/50" />

                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Left Side: Visual/Brand */}
                        <div className="bg-[#000080] text-white p-10 md:p-14 flex flex-col justify-center relative overflow-hidden ring-1 ring-slate-200">
                            {/* Radial Gradient for Depth */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#000080] via-[#000060] to-[#000040]"></div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10">
                                <span className="text-[#B22234] font-bold tracking-widest uppercase text-sm mb-2 block drop-shadow-[0_0_20px_rgba(178,34,52,0.4)]">
                                    #1 Rated Gold IRA Company
                                </span>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                    Augusta Precious Metals
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#B22234] border border-white/20 shadow-[0_0_20px_rgba(178,34,52,0.2)]">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold font-serif">0</div>
                                            <div className="text-xs text-slate-300 uppercase tracking-wide">BBB Complaints</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-amber-400 border border-white/20 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                            <Star className="w-6 h-6 fill-amber-400" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold font-serif">1000+</div>
                                            <div className="text-xs text-slate-300 uppercase tracking-wide">5-Star Reviews</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#B22234] border border-white/20 shadow-[0_0_20px_rgba(178,34,52,0.2)]">
                                            <UserCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-xl font-bold font-serif">Devlyn Steele</div>
                                            <div className="text-xs text-slate-300 uppercase tracking-wide">On-Staff Harvard Economist</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-sm text-slate-200">
                                    <span className="text-[#B22234] font-bold">Best For:</span> Investors with $50,000+ wanting VIP service.
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Copy/Direct CTA */}
                        <div className="p-10 md:p-14 flex flex-col justify-center bg-white relative">
                            {/* Exclusive Banner */}
                            <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-[#B22234]/10 text-[#B22234] px-3 py-1 rounded-full text-xs font-bold border border-[#B22234]/20 shadow-sm">
                                <Lock className="w-3 h-3" />
                                Private Client Access ($50k Min)
                            </div>

                            <h4 className="text-2xl font-bold text-[#000080] mb-4">
                                Education First, Not Sales Pressure
                            </h4>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Augusta built their reputation on teaching, not selling. Request their free kit and you&apos;ll get a one-on-one web conference explaining how Gold IRAs work—no obligation, no hard sell.
                            </p>

                            {/* Benefits list with premium red checkmarks */}
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-[#B22234] to-[#8b1c2a] flex items-center justify-center shadow-[0_0_12px_rgba(178,34,52,0.5)]">
                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm font-medium text-slate-600">Free web conference with their on-staff economist</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-[#B22234] to-[#8b1c2a] flex items-center justify-center shadow-[0_0_12px_rgba(178,34,52,0.5)]">
                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm font-medium text-slate-600">Dedicated support from account setup through retirement</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-[#B22234] to-[#8b1c2a] flex items-center justify-center shadow-[0_0_12px_rgba(178,34,52,0.5)]">
                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm font-medium text-slate-600">Fee waiver programs available for qualifying accounts</span>
                                </li>
                            </ul>

                            {/* CTA Button with enhanced red glow and shine animation */}
                            <Button
                                size="xl"
                                className="w-full bg-gradient-to-r from-[#B22234] to-[#8b1c2a] hover:from-[#8b1c2a] hover:to-[#6b1520] text-white text-lg font-bold group relative overflow-hidden
                                         shadow-[0_0_60px_-5px_rgba(178,34,52,0.5),0_0_100px_-10px_rgba(178,34,52,0.3)]
                                         hover:shadow-[0_0_80px_-5px_rgba(178,34,52,0.7),0_0_120px_-10px_rgba(178,34,52,0.4)]
                                         hover:scale-[1.02] transition-all duration-300"
                                asChild
                            >
                                <a href={getTrackedLink(AFFILIATE_LINKS.augusta, "homepage-featured", "augusta")} target="_blank" rel="noopener noreferrer">
                                    {/* Shine animation overlay */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                                    <div className="flex flex-col items-center relative z-10">
                                        <span className="flex items-center gap-2">
                                            Get Your Free Gold IRA Kit
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <span className="text-[10px] font-normal opacity-80 uppercase tracking-widest mt-1 text-white/80">
                                            No cost - No obligation
                                        </span>
                                    </div>
                                </a>
                            </Button>

                            <p className="text-center text-xs text-slate-500 mt-4">
                                Minimum investment: <span className="whitespace-nowrap">$50,000</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
