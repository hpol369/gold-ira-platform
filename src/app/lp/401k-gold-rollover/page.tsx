import type { Metadata } from "next";
import { ShieldCheck, CheckCircle2, ArrowRight, FileText, Building2, Coins, Clock, DollarSign, Phone, Award, ArrowRightCircle } from "lucide-react";
import SocialProofToast from "@/components/lp/SocialProofToast";
import TrackedLPLink from "@/components/lp/TrackedLPLink";

export const metadata: Metadata = {
    title: "Move Your 401(k) to Gold Tax-Free | 2026 Rollover Guide",
    description: "Learn how to roll over your old 401(k) to a Gold IRA without taxes or penalties. Free 2026 guide shows the 3-step process.",
    robots: {
        index: false,
        follow: false,
    },
};

// Augusta affiliate link for gold
const AUGUSTA_GOLD_LINK = "https://learn.augustapreciousmetals.com/gold-ira-2?apmtrkr_cid=1696&aff_id=5129";

// FAQ content specific to 401k rollovers
const faqs = [
    {
        question: "Is a 401(k) to Gold IRA rollover really tax-free?",
        answer:
            "Yes! When you do a direct rollover (also called a trustee-to-trustee transfer), no taxes or penalties apply. The funds move directly from your 401(k) custodian to your Gold IRA custodian without you ever touching the money. Augusta handles all the paperwork to ensure it's done correctly.",
    },
    {
        question: "How long does the rollover process take?",
        answer:
            "Most rollovers are completed within 2-3 weeks. The timeline depends on how quickly your former 401(k) custodian processes the transfer request. Augusta's team manages the entire process and keeps you informed at every step.",
    },
    {
        question: "Can I roll over a 401(k) from a former employer?",
        answer:
            "Yes! Once you leave an employer, you have full control over your 401(k). You can roll it over to a Gold IRA, traditional IRA, or leave it where it is. Rolling over to gold gives you physical asset protection that paper investments can't provide.",
    },
    {
        question: "What if I'm still employed? Can I roll over my current 401(k)?",
        answer:
            "It depends on your employer's plan rules. Many plans offer 'in-service rollovers' that allow you to transfer a portion of your 401(k) while still employed. Augusta's specialists can help you check if your plan qualifies.",
    },
    {
        question: "What's the minimum amount I can roll over?",
        answer:
            "Augusta Precious Metals has a $50,000 minimum investment. This is designed for serious retirement investors who want premium education, dedicated support, and transparent pricing with no hidden fees.",
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

export default function GoldRolloverPage() {
    const faqSchema = generateFAQSchema();

    return (
        <div className="min-h-screen bg-white text-slate-900 font-serif">
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Top Alert Bar - Green for educational/positive */}
            <div className="bg-green-700 text-white p-3 text-center font-bold uppercase tracking-wider text-sm">
                <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Good News: You Can Move Your 401(k) to Gold Tax-Free
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#000080]/10 text-[#000080] px-4 py-2 rounded-full font-sans text-sm font-semibold mb-6">
                        <FileText className="h-4 w-4" />
                        2026 Rollover Guide
                    </div>

                    {/* Headline Group */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        Move Your 401(k) to Gold — <br />
                        <span className="text-green-600 underline decoration-4 underline-offset-8">Tax-Free</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-8 max-w-2xl mx-auto">
                        Most Americans don&apos;t know they can <strong>protect their retirement</strong> with physical gold without paying taxes or penalties.
                    </p>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 font-sans">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#000080]">60-Day</div>
                            <div className="text-sm text-slate-600">Rollover Window</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-green-600">$0</div>
                            <div className="text-sm text-slate-600">Taxes or Penalties</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#000080]">3</div>
                            <div className="text-sm text-slate-600">Simple Steps</div>
                        </div>
                    </div>

                    {/* CTA Area */}
                    <div className="flex flex-col items-center gap-4">
                        <TrackedLPLink
                            href={AUGUSTA_GOLD_LINK}
                            source="lp-401k-gold-rollover-hero"
                            className="bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-[0_5px_0_rgb(100,0,0)] hover:shadow-[0_2px_0_rgb(100,0,0)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            Get Your Free Rollover Guide
                            <ArrowRight className="h-6 w-6" />
                        </TrackedLPLink>
                        <p className="text-sm text-slate-500 font-sans flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            Free Guide • No Obligation • Takes 2 Minutes
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

            {/* 3-Step Process Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        How It Works: 3 Simple Steps
                    </h2>
                    <p className="text-center text-slate-600 mb-12 text-lg">
                        Rolling over your 401(k) to gold is easier than you think. Here&apos;s the process:
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="bg-[#000080] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">1</div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center h-full">
                                <Building2 className="h-10 w-10 text-[#000080] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-[#000080] mb-2">Open Gold IRA Account</h3>
                                <p className="text-slate-600">Complete a simple application. Augusta handles the paperwork and opens your new Gold IRA with an IRS-approved custodian.</p>
                            </div>
                            <div className="hidden md:block absolute top-6 right-0 translate-x-1/2">
                                <ArrowRightCircle className="h-6 w-6 text-[#000080]" />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <div className="bg-[#000080] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">2</div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center h-full">
                                <FileText className="h-10 w-10 text-[#000080] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-[#000080] mb-2">Request Direct Rollover</h3>
                                <p className="text-slate-600">Augusta contacts your old 401(k) provider and initiates a direct transfer. No taxes, no penalties, no hassle.</p>
                            </div>
                            <div className="hidden md:block absolute top-6 right-0 translate-x-1/2">
                                <ArrowRightCircle className="h-6 w-6 text-[#000080]" />
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div>
                            <div className="bg-[#000080] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">3</div>
                            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 text-center h-full">
                                <Coins className="h-10 w-10 text-green-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-green-700 mb-2">Choose Your Gold</h3>
                                <p className="text-slate-600">Select from IRS-approved gold coins and bars. Your metals are stored in a secure, insured depository.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <p className="text-lg text-slate-700 bg-slate-50 inline-block px-6 py-3 rounded-full">
                            <Clock className="inline h-5 w-5 text-[#000080] mr-2" />
                            Most rollovers complete in <strong>2-3 weeks</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Gold Section */}
            <section className="py-16 bg-slate-50 font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-10">
                        Why Add Gold to Your Retirement?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-[#000080]/10 rounded-full flex items-center justify-center">
                                    <ShieldCheck className="h-6 w-6 text-[#000080]" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#000080] mb-2">Protection from Volatility</h3>
                                <p className="text-slate-600 text-sm">Gold typically moves inversely to stocks. When markets crash, gold often rises, protecting your wealth.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-[#000080]/10 rounded-full flex items-center justify-center">
                                    <DollarSign className="h-6 w-6 text-[#000080]" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#000080] mb-2">Inflation Hedge</h3>
                                <p className="text-slate-600 text-sm">Gold has maintained purchasing power for over 5,000 years. Paper money loses value — gold doesn&apos;t.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-[#000080]/10 rounded-full flex items-center justify-center">
                                    <Coins className="h-6 w-6 text-[#000080]" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#000080] mb-2">Physical Asset</h3>
                                <p className="text-slate-600 text-sm">Unlike stocks or bonds, you own real, tangible gold stored in a secure vault. No counterparty risk.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-green-700 mb-2">Tax Advantages</h3>
                                <p className="text-slate-600 text-sm">Same tax benefits as your 401(k). Rollover tax-free, grow tax-deferred until retirement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligibility Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        Who Can Roll Over?
                    </h2>
                    <p className="text-center text-slate-600 mb-10 text-lg">
                        You may be eligible if you have any of these accounts:
                    </p>

                    <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                                <span className="text-lg"><strong>401(k)</strong> from a former employer</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                                <span className="text-lg"><strong>Traditional IRA</strong></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                                <span className="text-lg"><strong>403(b)</strong> retirement plan</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                                <span className="text-lg"><strong>TSP</strong> (Thrift Savings Plan)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                                <span className="text-lg"><strong>457</strong> deferred compensation</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                                <span className="text-lg"><strong>Pension</strong> plans</span>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                            <p className="text-slate-600">
                                <strong>Not sure if you qualify?</strong> Augusta&apos;s specialists will check your eligibility for free.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Augusta Section */}
            <section className="py-16 bg-slate-100 font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        Why Choose Augusta for Your Rollover?
                    </h2>
                    <p className="text-center text-slate-600 mb-10 text-lg">
                        Augusta is America&apos;s most trusted Gold IRA company.
                    </p>

                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-200">
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Zero BBB Complaints:</strong> The only major gold IRA company with a perfect record.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><strong>White-Glove Service:</strong> We handle all paperwork and communicate with your old custodian.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Free Educational Guide:</strong> Learn everything about gold IRAs before making any decision.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><strong>No Pressure:</strong> Education-first approach. Take your time to decide.</span>
                            </li>
                        </ul>

                        <div className="text-center mt-8">
                            <TrackedLPLink
                                href={AUGUSTA_GOLD_LINK}
                                source="lp-401k-gold-rollover-middle"
                                className="inline-block bg-[#000080] hover:bg-[#000060] text-white text-lg font-bold py-4 px-8 rounded-lg transition-colors uppercase font-sans"
                            >
                                Get Your Free Rollover Guide
                            </TrackedLPLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-10">
                        Rollover Questions Answered
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
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
                        Ready to Protect Your 401(k)?
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 font-sans">
                        Get your free rollover guide and learn how to move your retirement to gold — tax-free.
                    </p>

                    <TrackedLPLink
                        href={AUGUSTA_GOLD_LINK}
                        source="lp-401k-gold-rollover-footer"
                        className="inline-block bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Get Your Free Rollover Guide
                    </TrackedLPLink>

                    <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80 text-sm font-sans">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            $0 taxes
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            $0 penalties
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            2-3 week process
                        </span>
                    </div>

                    <p className="text-slate-400 mt-6 text-sm font-sans">
                        Your information is 100% secure and will never be shared.
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
            <SocialProofToast variant="gold" />
        </div>
    );
}
