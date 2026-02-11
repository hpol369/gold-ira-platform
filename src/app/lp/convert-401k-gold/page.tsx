import type { Metadata } from "next";
import { ShieldCheck, CheckCircle2, ArrowRight, Phone, Shield, Award, ArrowRightLeft, Building2, Clock, DollarSign } from "lucide-react";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";
import { MoneyMagazineBadge, ZeroFeesBadge } from "@/components/lp/AwardBadges";

export const metadata: Metadata = {
    title: "Convert Your 401(k) to Gold — Tax-Free | Step-by-Step Guide",
    description: "Roll over your 401(k), 403(b), TSP, or IRA into physical gold — tax-free. See how it works in 3 simple steps.",
    robots: {
        index: false,
        follow: false,
    },
};

const faqs = [
    {
        question: "Is a 401(k) to Gold IRA rollover really tax-free?",
        answer:
            "Yes! A direct rollover (trustee-to-trustee transfer) from your 401(k) to a Gold IRA is completely tax-free. No penalties, no tax events. The funds move directly between custodians and never touch your personal account.",
    },
    {
        question: "Do I need to quit my job to roll over my 401(k)?",
        answer:
            "No. If you're over 59½, most plans allow in-service rollovers. If you've left the employer, you can roll over at any time. If you're still employed and under 59½, check with your plan administrator — many plans now allow partial rollovers.",
    },
    {
        question: "How long does the rollover process take?",
        answer:
            "Most rollovers are completed within 1-3 weeks. Augusta coordinates directly with your current custodian and handles all the paperwork. Your dedicated agent keeps you informed every step of the way.",
    },
    {
        question: "What accounts are eligible for rollover?",
        answer:
            "401(k), 403(b), TSP (Thrift Savings Plan), traditional IRA, SEP IRA, SIMPLE IRA, and most other qualified retirement accounts can be rolled over into a Gold IRA. Even Roth IRAs can hold physical gold.",
    },
    {
        question: "Will I face any penalties?",
        answer:
            "No penalties for a direct rollover at any age. The funds transfer tax-free between custodians. This is not an early withdrawal — it's a change of investment, not a distribution.",
    },
    {
        question: "What's the minimum to convert?",
        answer:
            "Augusta's minimum investment is $50,000. This ensures premium, personalized service with a dedicated account manager. You don't need to roll over your entire 401(k) — partial rollovers are available.",
    },
];

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

export default function Convert401kGoldPage() {
    const faqSchema = generateFAQSchema();

    return (
        <div className="min-h-screen bg-white text-slate-900 font-serif">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Top Alert Bar */}
            <div className="bg-[#000080] text-white p-3 text-center font-bold uppercase tracking-wider text-sm">
                <span className="flex items-center justify-center gap-2">
                    <ArrowRightLeft className="h-4 w-4" />
                    Tax-Free 401(k) to Gold Rollover — See How It Works
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-[#000080]/10 text-[#000080] px-4 py-2 rounded-full font-sans text-sm font-semibold mb-6">
                        <Award className="h-4 w-4" />
                        2026 Rollover Guide
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        Convert Your 401(k) to Gold <br />
                        <span className="text-[#B22234] underline decoration-4 underline-offset-8">Tax-Free</span>
                    </h1>

                    <div className="mb-4 flex flex-wrap justify-center gap-3">
                        <MoneyMagazineBadge />
                        <ZeroFeesBadge />
                    </div>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-8 max-w-2xl mx-auto">
                        Move your retirement savings into physical gold — <strong>no taxes, no penalties, in as little as 3 steps.</strong>
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 font-sans">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#000080]">$0</div>
                            <div className="text-sm text-slate-600">Tax on Rollover</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#000080]">$0</div>
                            <div className="text-sm text-slate-600">Penalties</div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-1 text-3xl md:text-4xl font-black text-[#000080]">
                                <Clock className="h-7 w-7" />
                            </div>
                            <div className="text-sm text-slate-600">1-3 Week Process</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <LeadCaptureButton
                            variant="convert-401k"
                            source="lp-convert-401k-gold-hero"
                            className="bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-[0_5px_0_rgb(100,0,0)] hover:shadow-[0_2px_0_rgb(100,0,0)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            Start My Tax-Free Rollover
                            <ArrowRight className="h-6 w-6" />
                        </LeadCaptureButton>
                        <p className="text-sm text-slate-500 font-sans flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            Free Consultation • No Obligation • Tax-Free Transfer
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

            {/* 3-Step Process */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        How It Works — 3 Simple Steps
                    </h2>
                    <p className="text-center text-slate-600 mb-12 text-lg">
                        Augusta handles the hard part. You just say &ldquo;go.&rdquo;
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="relative bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#000080] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                1
                            </div>
                            <div className="w-16 h-16 bg-[#000080]/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                                <Phone className="h-8 w-8 text-[#000080]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Free Consultation</h3>
                            <p className="text-slate-600">
                                Speak with a specialist who explains the process, answers your questions, and helps you decide if gold is right for you.
                            </p>
                        </div>

                        <div className="relative bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#000080] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                2
                            </div>
                            <div className="w-16 h-16 bg-[#000080]/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                                <ArrowRightLeft className="h-8 w-8 text-[#000080]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Tax-Free Rollover</h3>
                            <p className="text-slate-600">
                                Augusta coordinates the direct transfer from your 401(k) to your new Gold IRA. No taxes, no penalties, no hassle.
                            </p>
                        </div>

                        <div className="relative bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#000080] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                3
                            </div>
                            <div className="w-16 h-16 bg-[#000080]/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                                <Shield className="h-8 w-8 text-[#000080]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Your Gold is Secured</h3>
                            <p className="text-slate-600">
                                Your physical gold is stored in a secure, insured depository. You own real, tangible wealth that protects your retirement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligible Accounts */}
            <section className="py-16 bg-slate-50 font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        Which Accounts Are Eligible?
                    </h2>
                    <p className="text-center text-slate-600 mb-10 text-lg">
                        Almost every retirement account can be rolled over into a Gold IRA.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { icon: Building2, label: "401(k)" },
                            { icon: Building2, label: "403(b)" },
                            { icon: Shield, label: "TSP" },
                            { icon: DollarSign, label: "Traditional IRA" },
                            { icon: DollarSign, label: "Roth IRA" },
                            { icon: DollarSign, label: "SEP / SIMPLE IRA" },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-5 rounded-xl border border-slate-200 text-center">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <item.icon className="h-6 w-6 text-green-600" />
                                </div>
                                <p className="font-bold text-[#000080]">{item.label}</p>
                                <p className="text-xs text-green-600 font-semibold mt-1">Eligible</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <LeadCaptureButton
                            variant="convert-401k"
                            source="lp-convert-401k-gold-middle"
                            className="inline-block bg-[#000080] hover:bg-[#000060] text-white text-lg font-bold py-4 px-8 rounded-lg transition-colors uppercase font-sans"
                        >
                            Check My Eligibility — Free
                        </LeadCaptureButton>
                    </div>
                </div>
            </section>

            {/* Why Augusta for Rollovers */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        Why 50,000+ Americans Trust Augusta for Rollovers
                    </h2>

                    <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200 mt-10">
                        <ul className="space-y-5 text-lg">
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#000080]/10 rounded-full flex items-center justify-center">
                                    <Award className="h-5 w-5 text-[#000080]" />
                                </div>
                                <span><strong>Zero BBB Complaints:</strong> The only major gold company with a perfect record. Your retirement is in the safest hands.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#000080]/10 rounded-full flex items-center justify-center">
                                    <ArrowRightLeft className="h-5 w-5 text-[#000080]" />
                                </div>
                                <span><strong>They Handle Everything:</strong> Augusta coordinates directly with your current custodian. No paperwork headaches for you.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#000080]/10 rounded-full flex items-center justify-center">
                                    <Phone className="h-5 w-5 text-[#000080]" />
                                </div>
                                <span><strong>Dedicated Agent:</strong> One person who guides you from start to finish and is always a phone call away.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-100 font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-10">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
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
                        Your 401(k) Deserves Better Protection
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 font-sans">
                        Convert to gold today — tax-free, penalty-free, hassle-free.
                    </p>

                    <LeadCaptureButton
                        variant="convert-401k"
                        source="lp-convert-401k-gold-footer"
                        className="inline-block bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Start My Tax-Free Rollover
                    </LeadCaptureButton>

                    <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80 text-sm font-sans">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            Tax-free transfer
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            No penalties
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            No obligation
                        </span>
                    </div>

                    <p className="text-slate-400 mt-6 text-sm font-sans">
                        Your information is 100% secure. We respect your privacy.
                    </p>
                </div>
            </section>

            <footer className="bg-slate-900 text-slate-600 py-8 text-center text-xs font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <p>&copy; 2026 Rich Dad Retirement. All Rights Reserved.</p>
                    <p className="mt-2">Disclaimer: We are not financial advisors. Precious metals investing involves risk. Past performance does not guarantee future results.</p>
                </div>
            </footer>
        </div>
    );
}
