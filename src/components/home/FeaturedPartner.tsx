"use client";

import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Trophy, Phone, UserCheck, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export function FeaturedPartner() {
    return (
        <section className="py-12 bg-gradient-to-b from-white to-amber-50/30 border-b border-amber-100" id="featured-partner">
            <Container>
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-widest mb-4">
                        <Trophy className="w-3.5 h-3.5" />
                        Editor's Choice • 2026 Gold Standard
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                        Our <span className="text-amber-600 border-b-4 border-amber-200">Top Pick</span> for 2026
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        After reviewing fees, customer complaints, and service quality across the industry,
                        Augusta Precious Metals earned our highest rating with <strong className="text-slate-900">zero BBB complaints</strong> in over 7 years.
                    </p>
                </div>

                {/* Main Card */}
                <div className="relative rounded-3xl overflow-hidden animate-fade-in-up border border-amber-200 shadow-2xl bg-white max-w-5xl mx-auto">
                    {/* Gold decorative line */}
                    <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300" />

                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Left Side: Visual/Brand */}
                        <div className="bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden ring-1 ring-white/10">
                            {/* Radial Gradient for Depth */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950"></div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10">
                                <span className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-2 block">
                                    #1 Rated Gold IRA Company
                                </span>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white leading-tight">
                                    Augusta Precious Metals
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-amber-400">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold font-serif">0</div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">BBB Complaints</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-amber-400">
                                            <Star className="w-6 h-6 fill-amber-400" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold font-serif">1000+</div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">5-Star Reviews</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-amber-400">
                                            <UserCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-xl font-bold font-serif">Devlyn Steele</div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">On-Staff Harvard Economist</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-sm text-gray-300">
                                    <span className="text-amber-400 font-bold">Best For:</span> Investors with $50,000+ wanting VIP service.
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Copy/Direct CTA */}
                        <div className="p-8 md:p-12 flex flex-col justify-center bg-white relative">
                            {/* Exclusive Banner */}
                            <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1 rounded-full text-xs font-bold border border-amber-200 shadow-sm">
                                <Lock className="w-3 h-3 text-amber-600" />
                                Private Client Access ($50k Min)
                            </div>

                            <h4 className="text-2xl font-bold text-slate-900 mb-4">
                                Education First, Not Sales Pressure
                            </h4>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Augusta built their reputation on teaching, not selling. Request their free kit and you'll get a one-on-one web conference explaining how Gold IRAs work—no obligation, no hard sell.
                            </p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-amber-100 rounded-full p-1 text-amber-700">
                                        <ArrowRight className="w-3 h-3" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">Free web conference with their on-staff economist</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-amber-100 rounded-full p-1 text-amber-700">
                                        <ArrowRight className="w-3 h-3" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">Dedicated support from account setup through retirement</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-amber-100 rounded-full p-1 text-amber-700">
                                        <ArrowRight className="w-3 h-3" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">Fee waiver programs available for qualifying accounts</span>
                                </li>
                            </ul>

                            <Button
                                size="xl"
                                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-lg font-bold group"
                                asChild
                            >
                                <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">
                                    <div className="flex flex-col items-center">
                                        <span className="flex items-center gap-2">
                                            Get Your Free Gold IRA Kit
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <span className="text-[10px] font-normal opacity-80 uppercase tracking-widest mt-1 text-amber-100">
                                            No cost • No obligation
                                        </span>
                                    </div>
                                </a>
                            </Button>

                            <p className="text-center text-xs text-slate-400 mt-4">
                                Minimum investment: <span className="whitespace-nowrap">$50,000</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
