"use client";

// Testimonials — Sprint 11: Photos, gold quotes, post-section CTA
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const testimonials = [
    {
        id: 1,
        name: "Robert & Sarah M.",
        location: "Florida",
        text: "We were worried about inflation eating away our retirement. The process of rolling over our 401(k) to Gold was surprisingly simple. Highly recommend for peace of mind.",
        rating: 5,
        image: "/images/homepage/testimonial-couple.jpg",
    },
    {
        id: 2,
        name: "James D.",
        location: "Texas",
        text: "I did months of research before choosing a company. The educational resources provided helped me understand exactly why I needed gold in my portfolio.",
        rating: 5,
        image: "/images/homepage/testimonial-man.jpg",
    },
    {
        id: 3,
        name: "Margaret H.",
        location: "Arizona",
        text: "At 72, I can't afford to lose money in the stock market. Moving a portion to gold gave me the stability I was looking for. The team was patient and kind.",
        rating: 5,
        image: "/images/homepage/testimonial-woman.jpg",
    },
];

export function Testimonials() {
    return (
        <section className="relative py-20 md:py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none" />

            <Container className="relative z-10">
                <FadeIn>
                    <div className="text-center mb-14 space-y-4">
                        <h2 className="text-3xl font-serif font-black text-[#000080] md:text-5xl">
                            Trusted by American Retirees
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                            See why thousands of investors have switched to physical precious metals for their retirement security.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                    {testimonials.map((t, i) => (
                        <FadeIn key={t.id} delay={i * 0.1} className="h-full">
                            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#C5A55A]/30 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative group">
                                {/* Decorative gold quote */}
                                <div className="text-7xl font-serif text-[#C5A55A]/15 absolute top-2 right-6 leading-none select-none group-hover:text-[#C5A55A]/25 transition-colors">
                                    &ldquo;
                                </div>

                                {/* Star ratings */}
                                <div className="flex gap-1 mb-5">
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

                                <div className="border-t border-slate-100 pt-5 flex items-center gap-4">
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover w-12 h-12"
                                    />
                                    <div>
                                        <p className="font-bold text-[#000080]">{t.name}</p>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.location}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Post-testimonials CTA */}
                <FadeIn delay={0.3}>
                    <div className="text-center">
                        <p className="text-lg text-slate-600 font-medium mb-6">
                            Join 50,000+ Americans who&apos;ve protected their retirement.
                        </p>
                        <Link
                            href="/get-started?ref=homepage-social-proof"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#000080] hover:bg-[#000060] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:-translate-y-1 group"
                        >
                            Get Your Free Kit
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}
