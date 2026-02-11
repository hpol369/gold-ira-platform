import type { Metadata } from "next";
import { ShieldCheck, CheckCircle2, ArrowRight, Phone, Shield, Award, BookOpen, FileText, DollarSign, HelpCircle } from "lucide-react";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";
import { MoneyMagazineBadge, ZeroFeesBadge } from "@/components/lp/AwardBadges";

export const metadata: Metadata = {
    title: "Free 2026 Gold IRA Kit | Everything You Need to Know",
    description: "Request your free Gold IRA kit with complete guide, fee chart, and 2026 tax rules. No obligation, no pressure — just the facts.",
    robots: {
        index: false,
        follow: false,
    },
};

const faqs = [
    {
        question: "Is the Gold IRA kit really free?",
        answer:
            "Yes, 100% free with no strings attached. Augusta provides this educational kit because they believe informed investors make the best decisions. You won't be charged anything, and there's zero obligation to invest.",
    },
    {
        question: "Will I get pushy sales calls after requesting the kit?",
        answer:
            "Absolutely not. Augusta has zero BBB complaints precisely because they don't use pressure tactics. If you opt in for a consultation, it's educational — not a sales pitch. You're in complete control.",
    },
    {
        question: "What's the minimum to open a Gold IRA?",
        answer:
            "Augusta's minimum investment is $50,000. This ensures every client receives premium, personalized service including a dedicated account manager and one-on-one educational sessions.",
    },
    {
        question: "Can I roll over my 401(k) or existing IRA?",
        answer:
            "Yes! You can roll over a 401(k), 403(b), TSP, traditional IRA, or other qualified retirement accounts into a Gold IRA — tax-free. The kit explains the entire process step by step.",
    },
    {
        question: "How long does it take to set up a Gold IRA?",
        answer:
            "Most accounts are set up within 1-2 weeks. Augusta handles all the paperwork and coordinates with your existing custodian. Your dedicated agent walks you through every step.",
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

export default function FreeGoldIRAKitPage() {
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
                    <BookOpen className="h-4 w-4" />
                    Free 2026 Gold IRA Kit — No Obligation
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-[#000080]/10 text-[#000080] px-4 py-2 rounded-full font-sans text-sm font-semibold mb-6">
                        <Award className="h-4 w-4" />
                        Updated for 2026
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        Request Your Free <br />
                        <span className="text-[#B22234] underline decoration-4 underline-offset-8">2026 Gold IRA Kit</span>
                    </h1>

                    <div className="mb-4 flex flex-wrap justify-center gap-3">
                        <MoneyMagazineBadge />
                        <ZeroFeesBadge />
                    </div>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-8 max-w-2xl mx-auto">
                        Everything you need to make an informed decision. <strong>Complete guide, fee chart, and tax rules — all free.</strong>
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <LeadCaptureButton
                            variant="free-gold-kit"
                            source="lp-free-gold-ira-kit-hero"
                            className="bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-[0_5px_0_rgb(100,0,0)] hover:shadow-[0_2px_0_rgb(100,0,0)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            Get My Free Kit
                            <ArrowRight className="h-6 w-6" />
                        </LeadCaptureButton>
                        <p className="text-sm text-slate-500 font-sans flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            100% Free • No Obligation • No Sales Pressure
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

            {/* What's Inside Your Free Kit */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        What&apos;s Inside Your Free Kit
                    </h2>
                    <p className="text-center text-slate-600 mb-12 text-lg">
                        Three essential resources to help you decide if a Gold IRA is right for you.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-[#000080]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <BookOpen className="h-8 w-8 text-[#000080]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Complete Gold IRA Guide</h3>
                            <p className="text-slate-600">
                                Everything from how gold IRAs work, to which metals qualify, to how your gold is stored and insured. Written in plain English.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-[#000080]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <DollarSign className="h-8 w-8 text-[#000080]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Transparent Fee Chart</h3>
                            <p className="text-slate-600">
                                See exactly what Gold IRAs cost — setup fees, annual fees, storage fees. No hidden charges, no surprises. Compare providers side by side.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-[#000080]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FileText className="h-8 w-8 text-[#000080]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080] mb-3">2026 Tax Rules</h3>
                            <p className="text-slate-600">
                                Updated tax rules for rollovers, contributions, and distributions. Understand the tax benefits before you make a move.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Objections */}
            <section className="py-16 bg-slate-50 font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        We Get It — You Have Questions
                    </h2>
                    <p className="text-center text-slate-600 mb-10 text-lg">
                        Here&apos;s what people ask before requesting the kit.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <HelpCircle className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#000080] mb-1">&ldquo;Is this really free?&rdquo;</h3>
                                    <p className="text-slate-600">Yes. No credit card, no hidden fees, no catches. Augusta provides this kit as an educational resource. You won&apos;t owe anyone anything.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <HelpCircle className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#000080] mb-1">&ldquo;Will I get pushy sales calls?&rdquo;</h3>
                                    <p className="text-slate-600">No. Augusta has zero BBB complaints because they never use pressure tactics. You choose whether to speak with a specialist — and if you do, it&apos;s educational, not a sales pitch.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <HelpCircle className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#000080] mb-1">&ldquo;Why do you need my phone number?&rdquo;</h3>
                                    <p className="text-slate-600">We send the kit details via text for fastest delivery. You&apos;ll be asked if you&apos;d like a specialist to call — it&apos;s entirely your choice.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <LeadCaptureButton
                            variant="free-gold-kit"
                            source="lp-free-gold-ira-kit-middle"
                            className="inline-block bg-[#000080] hover:bg-[#000060] text-white text-lg font-bold py-4 px-8 rounded-lg transition-colors uppercase font-sans"
                        >
                            Request Your Free Kit Now
                        </LeadCaptureButton>
                    </div>
                </div>
            </section>

            {/* Why Augusta */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        Why 50,000+ Americans Trust Augusta
                    </h2>

                    <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200 mt-10">
                        <ul className="space-y-5 text-lg">
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#000080]/10 rounded-full flex items-center justify-center">
                                    <Award className="h-5 w-5 text-[#000080]" />
                                </div>
                                <span><strong>Zero BBB Complaints:</strong> The only major gold company with a perfect record.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#000080]/10 rounded-full flex items-center justify-center">
                                    <Phone className="h-5 w-5 text-[#000080]" />
                                </div>
                                <span><strong>Dedicated Phone Support:</strong> One person who knows your account and answers when you call.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#000080]/10 rounded-full flex items-center justify-center">
                                    <Shield className="h-5 w-5 text-[#000080]" />
                                </div>
                                <span><strong>Money Magazine&apos;s &ldquo;Best Overall&rdquo;:</strong> Recognized as the top Gold IRA company in 2024.</span>
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
                        Get the Facts. Then Decide.
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 font-sans">
                        Your free Gold IRA kit is waiting — everything you need, no strings attached.
                    </p>

                    <LeadCaptureButton
                        variant="free-gold-kit"
                        source="lp-free-gold-ira-kit-footer"
                        className="inline-block bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Request My Free Kit
                    </LeadCaptureButton>

                    <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80 text-sm font-sans">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            100% free
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            No obligation
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            No pressure
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
