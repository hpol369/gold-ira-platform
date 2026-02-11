import type { Metadata } from "next";
import { ShieldCheck, CheckCircle2, ArrowRight, Shield, ArrowRightLeft, Building2, DollarSign, ClipboardCheck, FileCheck, Landmark } from "lucide-react";
import { MoneyMagazineBadge, ZeroFeesBadge } from "@/components/lp/AwardBadges";

export const metadata: Metadata = {
    title: "Gold IRA Rollover | Move Your 401(k) or IRA to Gold — Tax-Free",
    description: "Step-by-step guide to rolling over your 401(k), IRA, 403(b), or TSP into physical gold. Tax-free, penalty-free. Most rollovers complete in 2-3 weeks.",
    robots: {
        index: false,
        follow: false,
    },
};

const AUGUSTA_BASE_URL = "https://learn.augustapreciousmetals.com/company-checklist-1/?apmtrkr_cid=1696&aff_id=5129&apmtrkr_cph=844-405-3908";

function augustaLink(subId: string) {
    return `${AUGUSTA_BASE_URL}&sub_id=${subId}`;
}

const faqs = [
    {
        question: "Is a direct rollover really tax-free?",
        answer: "Yes. A direct rollover (also called a trustee-to-trustee transfer) moves funds directly between custodians. The money never touches your personal account, so there's no taxable event and no early withdrawal penalty — regardless of your age.",
    },
    {
        question: "Can I roll over my 401(k) while still employed?",
        answer: "It depends on your plan. If you're over 59½, most plans allow in-service rollovers. If you've left the employer or are retired, you can roll over at any time with no restrictions. Augusta's specialists can help you check your plan's rules.",
    },
    {
        question: "How long does a rollover take?",
        answer: "Most direct rollovers complete in 2-3 weeks. Augusta coordinates directly with your current custodian and handles 95% of the paperwork. Your dedicated agent keeps you updated throughout the process.",
    },
    {
        question: "Do I have to roll over my entire account?",
        answer: "No. You can do a partial rollover — move a portion of your retirement savings into gold while keeping the rest where it is. Many clients start with 10-25% of their portfolio.",
    },
    {
        question: "What's the minimum amount to roll over?",
        answer: "Augusta's minimum is $50,000 in qualifying retirement savings. This ensures you receive premium, one-on-one service with a dedicated account manager who handles everything for you.",
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

export default function GoldIRARolloverPage() {
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
                    Tax-Free Gold IRA Rollover — Free Step-by-Step Checklist
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-[#000080]/10 text-[#000080] px-4 py-2 rounded-full font-sans text-sm font-semibold mb-6">
                        <ClipboardCheck className="h-4 w-4" />
                        2026 Rollover Checklist
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        Move Your 401(k) or IRA <br />
                        <span className="text-[#B22234] underline decoration-4 underline-offset-8">to Physical Gold</span>
                    </h1>

                    <div className="mb-4 flex flex-wrap justify-center gap-3">
                        <MoneyMagazineBadge />
                        <ZeroFeesBadge />
                    </div>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-8 max-w-2xl mx-auto">
                        Free step-by-step checklist shows you exactly how. <strong>Takes 15 minutes.</strong>
                    </p>

                    {/* Quick Stats */}
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
                            <div className="text-3xl md:text-4xl font-black text-[#000080]">2-3</div>
                            <div className="text-sm text-slate-600">Weeks to Complete</div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col items-center gap-4">
                        <a
                            href={augustaLink("lp-gold-ira-rollover-hero")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-[0_5px_0_rgb(100,0,0)] hover:shadow-[0_2px_0_rgb(100,0,0)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            Get My Free Rollover Checklist
                            <ArrowRight className="h-6 w-6" />
                        </a>
                        <p className="text-sm text-slate-500 font-sans flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            Free • No Obligation • Tax-Free Transfer
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

            {/* Which Account Do You Have? */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        Which Account Do You Have?
                    </h2>
                    <p className="text-center text-slate-600 mb-10 text-lg">
                        All of these are eligible for a tax-free rollover to physical gold.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Building2, label: "401(k)" },
                            { icon: Building2, label: "403(b)" },
                            { icon: Landmark, label: "TSP" },
                            { icon: DollarSign, label: "Traditional IRA" },
                            { icon: DollarSign, label: "Roth IRA" },
                            { icon: DollarSign, label: "SEP IRA" },
                            { icon: Building2, label: "457(b)" },
                        ].map((item, index) => (
                            <div key={index} className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-center hover:border-green-300 transition-colors">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <item.icon className="h-6 w-6 text-green-600" />
                                </div>
                                <p className="font-bold text-[#000080] text-lg">{item.label}</p>
                                <p className="text-xs text-green-600 font-semibold mt-1 flex items-center justify-center gap-1">
                                    <CheckCircle2 className="h-3 w-3" />
                                    Eligible for tax-free rollover
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works — 3 Steps */}
            <section className="py-16 bg-slate-50 font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        How It Works — 3 Steps
                    </h2>
                    <p className="text-center text-slate-600 mb-12 text-lg">
                        You handle 5%. They handle 95%.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="relative bg-white p-8 rounded-xl border border-slate-200 text-center">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#000080] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                1
                            </div>
                            <div className="w-16 h-16 bg-[#000080]/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                                <ClipboardCheck className="h-8 w-8 text-[#000080]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Request Your Checklist</h3>
                            <p className="text-slate-600">
                                Get your free rollover checklist. A specialist reviews your account type and walks you through your options.
                            </p>
                        </div>

                        <div className="relative bg-white p-8 rounded-xl border border-slate-200 text-center">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#000080] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                2
                            </div>
                            <div className="w-16 h-16 bg-[#000080]/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                                <FileCheck className="h-8 w-8 text-[#000080]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080] mb-3">They Handle the Paperwork</h3>
                            <p className="text-slate-600">
                                Augusta coordinates with your current custodian. They handle 95% of the paperwork. You just approve and sign.
                            </p>
                        </div>

                        <div className="relative bg-white p-8 rounded-xl border border-slate-200 text-center">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#000080] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                3
                            </div>
                            <div className="w-16 h-16 bg-[#000080]/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                                <Shield className="h-8 w-8 text-[#000080]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Your Gold Is Secured</h3>
                            <p className="text-slate-600">
                                Your physical gold is stored in a secure, insured depository. Done in 2-3 weeks. You own real, tangible wealth.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <a
                            href={augustaLink("lp-gold-ira-rollover-steps")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#000080] hover:bg-[#000060] text-white text-lg font-bold py-4 px-8 rounded-lg transition-colors uppercase font-sans"
                        >
                            Start My Rollover — Free
                        </a>
                    </div>
                </div>
            </section>

            {/* Key Objections */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-10">
                        Your Questions, Answered
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <p className="text-[#000080] font-bold text-lg mb-2">&ldquo;Will I pay taxes?&rdquo;</p>
                            <p className="text-slate-700">
                                <strong className="text-green-600">No.</strong> Direct rollovers are tax-free. Funds move between custodians — they never hit your personal account.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <p className="text-[#000080] font-bold text-lg mb-2">&ldquo;Will I pay penalties?&rdquo;</p>
                            <p className="text-slate-700">
                                <strong className="text-green-600">No.</strong> A direct rollover is not a withdrawal. No early distribution penalties at any age.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <p className="text-[#000080] font-bold text-lg mb-2">&ldquo;How long does it take?&rdquo;</p>
                            <p className="text-slate-700">
                                <strong className="text-[#000080]">2-3 weeks</strong> for most rollovers. Augusta coordinates everything and keeps you updated throughout.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <p className="text-[#000080] font-bold text-lg mb-2">&ldquo;What&apos;s the minimum?&rdquo;</p>
                            <p className="text-slate-700">
                                <strong className="text-[#000080]">$50,000</strong> in qualifying retirement savings. Partial rollovers are available — you don&apos;t have to move everything.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Stats Bar */}
            <section className="py-12 bg-[#000080] text-white font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-4xl font-black text-amber-400">A+</div>
                            <div className="text-sm text-slate-300 mt-1">BBB Rating</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-amber-400">0</div>
                            <div className="text-sm text-slate-300 mt-1">BBB Complaints</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-amber-400">50K+</div>
                            <div className="text-sm text-slate-300 mt-1">Americans Served</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-amber-400">$0</div>
                            <div className="text-sm text-slate-300 mt-1">Fees for 10 Years</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-100 font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-10">
                        Rollover FAQs
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
                        Ready to Move Your Retirement to Gold?
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 font-sans">
                        Get your free rollover checklist. Tax-free. Penalty-free. Takes 15 minutes.
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

                    <a
                        href={augustaLink("lp-gold-ira-rollover-footer")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Get My Free Rollover Checklist
                    </a>

                    <p className="text-slate-400 mt-6 text-sm font-sans">
                        100% free. No obligation. Your information is secure.
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
