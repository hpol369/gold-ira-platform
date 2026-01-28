import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, Award, Users, Star } from "lucide-react";
import ExitIntentPopup from "@/components/lp/ExitIntentPopup";
import SocialProofToast from "@/components/lp/SocialProofToast";
import TrackedLPLink from "@/components/lp/TrackedLPLink";

export const metadata: Metadata = {
    title: "Best Silver IRA Companies 2026 | Who Can You Trust?",
    description: "We analyzed 15+ silver IRA providers to find the most trustworthy choice. See why Augusta is our #1 pick with zero BBB complaints.",
    robots: {
        index: false,
        follow: false,
    },
};

// Augusta affiliate link for silver
const AUGUSTA_SILVER_LINK = "/lp/augusta-silver";

// FAQ content specific to company comparison
const faqs = [
    {
        question: "How did you rank the silver IRA companies?",
        answer:
            "We evaluated 15+ companies based on: customer reviews and ratings, BBB complaints, fee transparency, minimum investment requirements, silver product selection, and quality of customer education. Augusta ranked #1 due to zero BBB complaints, highest customer satisfaction scores, and education-first approach.",
    },
    {
        question: "What makes Augusta different from other silver IRA companies?",
        answer:
            "Augusta is the only major silver IRA company with zero BBB complaints in company history. They focus on education first - you'll never experience high-pressure sales tactics. They also offer lifetime customer support and transparent pricing with no hidden markups on silver.",
    },
    {
        question: "What are typical silver IRA fees?",
        answer:
            "Most silver IRA companies charge $150-$300 per year for storage and custodian fees. Augusta charges a flat $180/year which includes both storage and custodian fees. Some companies have hidden markups on silver prices - Augusta is transparent about their premiums.",
    },
    {
        question: "What's the minimum to open a silver IRA?",
        answer:
            "Minimums vary by company: Noble Gold ($2K), Birch Gold ($10K), Goldco ($25K), Augusta ($50K). While Augusta has a higher minimum, it's designed for serious retirement investors and comes with premium education and support.",
    },
    {
        question: "Can I transfer my existing IRA to silver?",
        answer:
            "Yes! You can do a direct rollover from any existing IRA, 401(k), 403(b), TSP, or other qualified retirement account to a silver IRA. The transfer is tax-free when done as a direct rollover. Augusta handles all the paperwork.",
    },
];

// Generate FAQPage schema
function generateFAQSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

export default function SilverIRACompaniesPatriotPage() {
    const faqSchema = generateFAQSchema();

    return (
        <div className="min-h-screen bg-white text-slate-900 font-serif">
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Top Warning Bar */}
            <div className="bg-[#B22234] text-white p-2 text-center font-bold uppercase tracking-wider text-sm">
                <span className="flex items-center justify-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Warning: Not All Silver IRA Companies Are Created Equal
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#000080]/10 text-[#000080] px-4 py-2 rounded-full font-sans text-sm font-semibold mb-6">
                        <Award className="h-4 w-4" />
                        Updated January 2026
                    </div>

                    {/* Headline Group */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        Best Silver IRA Companies: <br />
                        <span className="text-[#B22234] underline decoration-4 underline-offset-8">Who Can You Trust?</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-8 max-w-2xl mx-auto">
                        We analyzed <strong>15+ providers</strong> to find the most trustworthy choice for American retirees looking to add silver to their retirement.
                    </p>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 font-sans">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#000080]">15+</div>
                            <div className="text-sm text-slate-600">Companies Reviewed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#B22234]">0</div>
                            <div className="text-sm text-slate-600">BBB Complaints (#1 Pick)</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#000080]">4.9★</div>
                            <div className="text-sm text-slate-600">Customer Rating</div>
                        </div>
                    </div>

                    {/* CTA Area */}
                    <div className="flex flex-col items-center gap-4">
                        <TrackedLPLink
                            href={AUGUSTA_SILVER_LINK}
                            source="lp-silver-ira-companies-hero"
                            className="bg-[#B22234] hover:bg-[#8b1c2a] text-white text-2xl md:text-3xl font-bold py-6 px-12 rounded-lg shadow-[0_5px_0_rgb(100,0,0)] hover:shadow-[0_2px_0_rgb(100,0,0)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            See Our #1 Pick
                            <ArrowRight className="h-8 w-8" />
                        </TrackedLPLink>
                        <p className="text-sm text-slate-500 font-sans flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            Free Consultation • No Pressure • Education First
                        </p>
                    </div>
                </div>
            </header>

            {/* Trust Bar */}
            <section className="py-8 bg-slate-100 border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <p className="text-slate-500 font-sans uppercase tracking-widest text-xs mb-4">Trusted By 50,000+ Americans</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
                        <span className="text-2xl font-black text-slate-800">FOX NEWS</span>
                        <span className="text-2xl font-black text-slate-800">NEWSMAX</span>
                        <span className="text-2xl font-black text-slate-800">BEN SHAPIRO</span>
                        <span className="text-2xl font-black text-slate-800">FORBES</span>
                    </div>
                </div>
            </section>

            {/* Why Augusta Section */}
            <section className="py-16 bg-white font-sans text-lg md:text-xl leading-relaxed text-slate-800">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        Why Augusta Is Our #1 Pick
                    </h2>
                    <p className="text-center text-slate-600 mb-10">
                        After reviewing 15+ silver IRA companies, here&apos;s why Augusta stands above the rest:
                    </p>

                    <ul className="space-y-4 bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span><strong>Zero BBB Complaints:</strong> The only major silver IRA company with a perfect complaint record in company history.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span><strong>Education First:</strong> No high-pressure sales tactics. You&apos;ll speak with a specialist who answers your questions, not pushes products.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span><strong>Transparent Pricing:</strong> Flat $180/year for storage and custodian fees. No hidden markups or surprise charges.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span><strong>Lifetime Support:</strong> Dedicated account manager stays with you for the life of your account.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span><strong>Easy Rollovers:</strong> They handle all paperwork for 401(k), IRA, TSP, and other retirement account transfers.</span>
                        </li>
                    </ul>

                    {/* Quick Comparison */}
                    <div className="mt-10 bg-[#000080]/5 p-6 rounded-xl border border-[#000080]/20">
                        <h3 className="text-xl font-bold text-[#000080] mb-4 flex items-center gap-2">
                            <Users className="h-5 w-5" />
                            Quick Company Comparison
                        </h3>
                        <div className="space-y-3 text-base">
                            <div className="flex justify-between items-center py-2 border-b border-slate-200">
                                <span className="font-semibold text-[#000080]">Augusta Precious Metals</span>
                                <span className="flex items-center gap-1 text-green-600 font-bold"><Star className="h-4 w-4 fill-current" /> #1 Pick - Zero Complaints</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-slate-200">
                                <span>Goldco</span>
                                <span className="text-slate-500">$25K min, some complaints</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-slate-200">
                                <span>Birch Gold</span>
                                <span className="text-slate-500">$10K min, mixed reviews</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span>Noble Gold</span>
                                <span className="text-slate-500">$2K min, newer company</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Silver Now Section */}
            <section className="py-16 bg-slate-100 font-sans">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif mb-6">
                        Why Silver in 2026?
                    </h2>
                    <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
                        Silver isn&apos;t just precious &mdash; it&apos;s <strong>essential</strong>. With over 50% of annual silver production going to industrial use, demand is at historic highs.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="text-3xl font-black text-[#B22234] mb-2">50%+</div>
                            <div className="font-semibold text-[#000080] mb-2">Industrial Demand</div>
                            <p className="text-slate-600 text-sm">Solar panels, EVs, electronics &mdash; silver is irreplaceable in modern technology.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="text-3xl font-black text-[#B22234] mb-2">5,000</div>
                            <div className="font-semibold text-[#000080] mb-2">Years of Value</div>
                            <p className="text-slate-600 text-sm">Silver has been money since ancient times. No currency has matched its staying power.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="text-3xl font-black text-[#B22234] mb-2">Tax-Free</div>
                            <div className="font-semibold text-[#000080] mb-2">IRA Rollover</div>
                            <p className="text-slate-600 text-sm">Move your 401(k) or IRA to physical silver without paying taxes on the transfer.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-10">
                        Common Questions
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-slate-200 pb-6">
                                <h3 className="text-lg font-bold text-[#000080] mb-2">{faq.question}</h3>
                                <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-[#000080] text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
                        Ready to Work with Our #1 Pick?
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 font-sans">
                        Get a free, no-pressure consultation with Augusta&apos;s silver specialists.
                    </p>

                    <TrackedLPLink
                        href={AUGUSTA_SILVER_LINK}
                        source="lp-silver-ira-companies-footer"
                        className="inline-block bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Get Your Free Consultation
                    </TrackedLPLink>

                    <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80 text-sm font-sans">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            No obligation
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            Education-first
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            Zero BBB complaints
                        </span>
                    </div>

                    <p className="text-slate-400 mt-6 text-sm font-sans">
                        Strictly confidential. We respect your privacy.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-600 py-8 text-center text-xs font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <p>&copy; 2026 Rich Dad Retirement. All Rights Reserved.</p>
                    <p className="mt-2">Disclaimer: We are not financial advisors. Precious metals investing involves risk. Past performance does not guarantee future results.</p>
                </div>
            </footer>

            {/* Social Proof Toast */}
            <SocialProofToast variant="silver" />

            {/* Exit Intent Popup */}
            <ExitIntentPopup
                affiliateLink="/lp/augusta-silver"
                variant="silver"
            />
        </div>
    );
}
