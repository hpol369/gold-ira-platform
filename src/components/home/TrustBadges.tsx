"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";

export function TrustBadges() {
    const logos = [
        { name: "Forbes", width: 100 },
        { name: "CNBC", width: 80 },
        { name: "Bloomberg", width: 110 },
        { name: "Fox Business", width: 90 },
        { name: "Morningstar", width: 120 },
    ];

    return (
        <section className="relative py-32 border-y border-white/5 bg-slate-800/30 overflow-hidden">
            {/* Ambient gold glow behind section */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-radial from-amber-500/[0.07] via-amber-500/[0.03] to-transparent rounded-full blur-3xl" />
            </div>

            {/* Floating orbs decoration */}
            <FloatingOrbs variant="minimal" />

            <Container className="relative z-10">
                <FadeIn>
                    <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-12">
                        Insights Featured In
                    </p>
                </FadeIn>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {logos.map((logo, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6
                                          hover:bg-white/[0.08] hover:-translate-y-1
                                          hover:border-amber-400/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]
                                          transition-all duration-300 cursor-default">
                                {/* Shine sweep effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out
                                              bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

                                {/* Badge content */}
                                <span className="relative font-serif font-bold text-2xl text-slate-400
                                               group-hover:text-amber-400 transition-colors duration-300">
                                    {logo.name}
                                </span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    );
}
