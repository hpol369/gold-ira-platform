"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function TrustBadges() {
    const logos = [
        { name: "Forbes", width: 100 },
        { name: "CNBC", width: 80 },
        { name: "Bloomberg", width: 110 },
        { name: "Fox Business", width: 90 },
        { name: "Morningstar", width: 120 },
    ];

    return (
        <section className="relative py-20 border-b border-slate-200 bg-white overflow-hidden">
            <Container className="relative z-10">
                <FadeIn>
                    <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-10">
                        Insights Featured In
                    </p>
                </FadeIn>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {logos.map((logo, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="group flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                                <span className="text-2xl font-serif font-black text-slate-400 group-hover:text-[#000080] transition-colors">
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
