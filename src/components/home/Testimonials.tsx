"use client";

import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

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
        <section className="py-24 bg-slate-800/50">
            <Container>
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
                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full flex flex-col hover:bg-white/10 transition-all">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                <p className="text-slate-300 leading-relaxed italic mb-6 flex-grow">
                                    &quot;{t.text}&quot;
                                </p>

                                <div className="border-t border-white/10 pt-6">
                                    <p className="font-bold text-white">{t.name}</p>
                                    <p className="text-sm text-slate-500">{t.location}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    );
}
