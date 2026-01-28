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
    {
        id: 4,
        name: "Gary P.",
        location: "Ohio",
        text: "My 401(k) took a beating in 2008. I swore I wouldn't let it happen again. Now I have physical gold in a secure depository and I sleep much better at night.",
        rating: 5,
        highlight: "Secure protection",
    },
    {
        id: 5,
        name: "Linda K.",
        location: "Michigan",
        text: "The tax benefits of the Gold IRA were explained clearly. I was able to transfer funds without paying a cent in penalty or taxes.",
        rating: 5,
        highlight: "Tax advantages",
    },
    {
        id: 6,
        name: "Thomas B.",
        location: "North Carolina",
        text: "Professional, courteous, and no pressure. They answered all my questions and guided me through the paperwork. First class service.",
        rating: 5,
        highlight: "No pressure",
    }
];

export function Testimonials() {
    return (
        <section className="relative py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
            {/* Patriot Wash */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.015] pointer-events-none"></div>

            <Container className="relative z-10">
                <FadeIn>
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-serif font-black text-[#000080] md:text-5xl">
                            Trusted by American Retirees
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                            See why thousands of investors have switched to physical precious metals for their retirement security.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.slice(0, 3).map((t, i) => (
                        <FadeIn key={t.id} delay={i * 0.1} className="h-full">
                            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#000080]/20 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative group">
                                {/* Quote mark */}
                                <div className="text-6xl font-serif text-slate-100 absolute top-4 right-6 group-hover:text-[#000080]/5 transition-colors">
                                    &rdquo;
                                </div>

                                {/* Star ratings */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <Star
                                            key={starIndex}
                                            className="h-4 w-4 fill-amber-500 text-amber-500"
                                        />
                                    ))}
                                </div>

                                <p className="text-slate-700 leading-relaxed font-medium mb-6 flex-grow relative z-10">
                                    &ldquo;{t.text}&rdquo;
                                </p>

                                <div className="border-t border-slate-100 pt-6 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#000080]/10 flex items-center justify-center text-[#000080] font-bold">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#000080]">{t.name}</p>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.location}</p>
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
