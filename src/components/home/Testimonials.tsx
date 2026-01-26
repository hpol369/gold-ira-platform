"use client";

import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";

const testimonials = [
    {
        id: 1,
        name: "Robert & Sarah M.",
        location: "Florida",
        text: "We were worried about inflation eating away our retirement. The process of rolling over our 401(k) to Gold was surprisingly simple. Highly recommend for peace of mind.",
        rating: 5,
        highlight: "Peace of mind",
    },
    {
        id: 2,
        name: "James D.",
        location: "Texas",
        text: "I did months of research before choosing a company. The educational resources provided helped me understand exactly why I needed gold in my portfolio.",
        rating: 5,
        highlight: "Excellent education",
    },
    {
        id: 3,
        name: "Margaret H.",
        location: "Arizona",
        text: "At 72, I can't afford to lose money in the stock market. Moving a portion to gold gave me the stability I was looking for. The team was patient and kind.",
        rating: 5,
        highlight: "Stability",
    },
];

export function Testimonials() {
    return (
        <section className="relative py-32 bg-slate-800/50 overflow-hidden">
            {/* Ambient gold glow behind section */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-amber-500/5 via-amber-400/10 to-amber-500/5 blur-3xl rounded-full" />
            </div>

            {/* Floating orbs for subtle decoration */}
            <FloatingOrbs variant="minimal" />

            <Container className="relative z-10">
                <FadeIn>
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-serif font-bold text-white md:text-4xl">
                            Trusted by American Retirees
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            See why thousands of investors have switched to physical precious metals for their retirement security.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <FadeIn key={t.id} delay={i * 0.1} className="h-full">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8
                                           shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                                           hover:bg-white/[0.08] hover:-translate-y-1
                                           hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(212,175,55,0.1)]
                                           transition-all duration-300 h-full flex flex-col">
                                {/* Quote mark with gold gradient */}
                                <div className="text-5xl font-serif text-transparent bg-clip-text
                                               bg-gradient-to-br from-amber-400 to-amber-600 opacity-50 leading-none mb-2">
                                    &ldquo;
                                </div>

                                {/* Star ratings with gold glow animation */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <Star
                                            key={starIndex}
                                            className="h-5 w-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]"
                                            style={{
                                                animation: `pulse 2s ease-in-out infinite`,
                                                animationDelay: `${starIndex * 0.1}s`
                                            }}
                                        />
                                    ))}
                                </div>

                                <p className="text-slate-300 leading-relaxed italic mb-6 flex-grow">
                                    {t.text}
                                </p>

                                <div className="border-t border-white/10 pt-6 flex items-center gap-4">
                                    {/* Avatar with gold ring glow */}
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20
                                                   flex items-center justify-center text-amber-400 font-bold text-lg
                                                   ring-2 ring-amber-400/50 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{t.name}</p>
                                        <p className="text-sm text-slate-500">{t.location}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    );
}
