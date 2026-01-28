import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, TrendingUp, Factory, Coins, BarChart3 } from "lucide-react";
import ExitIntentPopup from "@/components/lp/ExitIntentPopup";
import SocialProofToast from "@/components/lp/SocialProofToast";
import TrackedLPLink from "@/components/lp/TrackedLPLink";

export const metadata: Metadata = {
    title: "Best Silver IRA Companies 2026 | Free Consultation",
    description: "Compare top silver IRA companies. A+ BBB rated. No pushy sales. Get your free consultation and silver investment guide today.",
    robots: {
        index: false,
        follow: false,
    },
};

const AFFILIATE_LINK = "https://learn.augustapreciousmetals.com/silver-ira?apmtrkr_cid=1696&aff_id=5129";

// FAQ content for schema
const faqs = [
    {
        question: "What is a Silver IRA?",
        answer: "A Silver IRA is a self-directed retirement account that holds physical silver coins and bars instead of paper assets. It offers the same tax advantages as traditional IRAs while providing protection against inflation and currency devaluation.",
    },
    {
        question: "What silver products are IRA-approved?",
        answer: "IRS-approved silver must be .999 fine or better. Popular options include American Silver Eagles, Canadian Maple Leafs, Austrian Philharmonics, and silver bars from approved refiners like PAMP Suisse and Johnson Matthey.",
    },
    {
        question: "How much should I invest in silver?",
        answer: "Financial experts typically recommend allocating 5-15% of your portfolio to precious metals. Augusta's specialists can help determine the right allocation based on your retirement goals and risk tolerance.",
    },
    {
        question: "Why is silver used in so many industries?",
        answer: "Silver has the highest electrical conductivity of any metal, making it essential for electronics, solar panels, EVs, and medical devices. Over 50% of silver demand comes from industrial use, unlike gold which is primarily held as a store of value.",
    },
    {
        question: "Can I transfer my existing IRA to silver?",
        answer: "Yes. You can do a direct rollover from any existing IRA, 401(k), 403(b), TSP, or other qualified retirement account. The transfer is tax-free when done correctly. Augusta handles all the paperwork.",
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

export default function SilverIRAPage() {
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
                    Silver Supply Deficit: Industrial Demand Exceeds Mining Output
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#000080]/10 text-[#000080] px-4 py-2 rounded-full font-sans text-sm font-semibold mb-6">
                        <ShieldCheck className="h-4 w-4" />
                        2026 Silver IRA Guide
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        Protect Your Retirement <br />
                        <span className="text-[#B22234] underline decoration-4 underline-offset-8">With Physical Silver</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-8 max-w-2xl mx-auto">
                        Silver isn't just precious—it's <strong>essential</strong>. Over 50% goes to industry. Supply can't keep up with demand. Get our free 2026 silver investment guide.
                    </p>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 font-sans">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#000080]">50%+</div>
                            <div className="text-sm text-slate-600">Industrial Demand</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#B22234]">80:1</div>
                            <div className="text-sm text-slate-600">Gold-Silver Ratio</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#000080]">$50K</div>
                            <div className="text-sm text-slate-600">Minimum Investment</div>
                        </div>
                    </div>

                    {/* CTA Area */}
                    <div className="flex flex-col items-center gap-4">
                        <TrackedLPLink
                            href={AFFILIATE_LINK}
                            source="lp-silver-ira-hero"
                            className="bg-[#B22234] hover:bg-[#8b1c2a] text-white text-2xl md:text-3xl font-bold py-6 px-12 rounded-lg shadow-[0_5px_0_rgb(100,0,0)] hover:shadow-[0_2px_0_rgb(100,0,0)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            Get Your Free Silver Guide
                            <ArrowRight className="h-8 w-8" />
                        </TrackedLPLink>
                        <p className="text-sm text-slate-500 font-sans flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            100% Free • No Obligation • Education First
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

            {/* Why Silver Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#000080] font-serif text-center mb-4">Why Silver for Your IRA?</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                        Gold gets the headlines, but silver has fundamentals that make it equally compelling.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <Factory className="h-10 w-10 text-[#000080] mb-4" />
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Industrial Demand (50%+)</h3>
                            <p className="text-slate-600">
                                Silver powers solar panels, electric vehicles, smartphones, and medical devices. Unlike gold, silver gets consumed. Once it's in your iPhone, it's gone forever.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <TrendingUp className="h-10 w-10 text-[#000080] mb-4" />
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Supply Deficit</h3>
                            <p className="text-slate-600">
                                For years, silver demand has exceeded mining supply. The deficit is covered by recycling and above-ground stockpiles—which are shrinking.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <BarChart3 className="h-10 w-10 text-[#000080] mb-4" />
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Gold-Silver Ratio at 80:1</h3>
                            <p className="text-slate-600">
                                Historically, it took 15-20 ounces of silver to buy 1 ounce of gold. Today it takes 80+. If the ratio reverts, silver has room to outperform.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <Coins className="h-10 w-10 text-[#000080] mb-4" />
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Accessible Entry Point</h3>
                            <p className="text-slate-600">
                                At ~$30/oz vs gold at ~$2,400/oz, you can own significantly more physical metal. Silver is easier to buy in small amounts—and easier to sell.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Silver Stats */}
            <section className="py-12 bg-[#000080] text-white font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-4xl font-black text-amber-400">.999</div>
                            <div className="text-sm text-slate-300 mt-1">IRS Purity Required</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-amber-400">$50K</div>
                            <div className="text-sm text-slate-300 mt-1">Augusta Minimum</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-amber-400">80:1</div>
                            <div className="text-sm text-slate-300 mt-1">Gold-Silver Ratio</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-amber-400">50%+</div>
                            <div className="text-sm text-slate-300 mt-1">Industrial Demand</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#000080] font-serif text-center mb-10">
                        Silver IRA Questions Answered
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-[#000080] mb-3">{faq.question}</h3>
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
                        Ready to Add Silver to Your Retirement?
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 font-sans">
                        Get a free consultation with a silver specialist. No pressure. Just education.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8 font-sans">
                        <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                            Zero BBB Complaints
                        </span>
                        <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                            A+ BBB Rating
                        </span>
                        <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                            Tax-Free Rollover
                        </span>
                    </div>

                    <TrackedLPLink
                        href={AFFILIATE_LINK}
                        source="lp-silver-ira-footer"
                        className="inline-block bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Get Your Free Silver Guide
                    </TrackedLPLink>
                    <p className="text-slate-400 mt-6 text-sm font-sans">
                        100% free. No obligation. Strictly confidential.
                    </p>
                </div>
            </section>

            <footer className="bg-slate-900 text-slate-600 py-8 text-center text-xs font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <p>&copy; 2026 Rich Dad Retirement. All Rights Reserved.</p>
                    <p className="mt-2">Disclaimer: We are not financial advisors. Precious metals involve risk. Past performance does not guarantee future results.</p>
                </div>
            </footer>

            {/* Social Proof Toast */}
            <SocialProofToast variant="silver" />

            {/* Exit Intent Popup */}
            <ExitIntentPopup
                affiliateLink={AFFILIATE_LINK}
                variant="silver"
            />
        </div>
    );
}
