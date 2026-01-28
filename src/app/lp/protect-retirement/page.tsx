import type { Metadata } from "next";
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, TrendingDown, DollarSign, Shield, Clock, Phone, Award } from "lucide-react";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";

export const metadata: Metadata = {
    title: "Is Your Retirement Protected From the Next Crash? | 2026 Guide",
    description: "73% of Americans aren't prepared for the next market crash. Learn how gold can protect your retirement savings from inflation and economic uncertainty.",
    robots: {
        index: false,
        follow: false,
    },
};

// FAQ content specific to retirement protection
const faqs = [
    {
        question: "How does gold protect against market crashes?",
        answer:
            "Gold has historically moved inversely to stocks during market downturns. During the 2008 financial crisis, while the S&P 500 dropped 50%, gold prices rose 25%. This 'inverse correlation' makes gold an effective hedge against market volatility and economic uncertainty.",
    },
    {
        question: "Is my 401(k) at risk during a recession?",
        answer:
            "Traditional 401(k)s invested in stocks and bonds can lose significant value during recessions. Many Americans lost 30-50% of their retirement savings in 2008. Diversifying with physical gold through a Gold IRA can help protect against these losses.",
    },
    {
        question: "Can I move my existing retirement account to gold?",
        answer:
            "Yes! You can roll over any existing 401(k), IRA, 403(b), TSP, or other qualified retirement account into a Gold IRA without taxes or penalties when done as a direct rollover. Augusta handles all the paperwork for you.",
    },
    {
        question: "What's the minimum investment for a Gold IRA?",
        answer:
            "Augusta Precious Metals has a $50,000 minimum investment. This is designed for serious retirement investors who want premium education, lifetime support, and transparent pricing with no hidden fees.",
    },
    {
        question: "Why do financial experts recommend gold during uncertainty?",
        answer:
            "Gold has been a store of value for over 5,000 years. Unlike paper currencies, it cannot be printed or devalued by government policy. During periods of high inflation, debt, and economic uncertainty, gold typically appreciates as investors seek safe-haven assets.",
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

export default function ProtectRetirementPage() {
    const faqSchema = generateFAQSchema();

    return (
        <div className="min-h-screen bg-white text-slate-900 font-serif">
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Top Warning Bar */}
            <div className="bg-[#B22234] text-white p-3 text-center font-bold uppercase tracking-wider text-sm">
                <span className="flex items-center justify-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    WARNING: Economic Indicators Suggest Turbulence Ahead
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#B22234]/10 text-[#B22234] px-4 py-2 rounded-full font-sans text-sm font-semibold mb-6">
                        <AlertTriangle className="h-4 w-4" />
                        2026 Market Alert
                    </div>

                    {/* Headline Group */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        Is Your Retirement <br />
                        <span className="text-[#B22234] underline decoration-4 underline-offset-8">Protected</span> From the Next Crash?
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-8 max-w-2xl mx-auto">
                        <strong>73% of Americans</strong> aren&apos;t prepared for the next market crash. Here&apos;s how to join the 27% who are.
                    </p>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 font-sans">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#B22234]">$34T</div>
                            <div className="text-sm text-slate-600">National Debt</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#B22234]">40-Year</div>
                            <div className="text-sm text-slate-600">High Inflation</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#000080]">+400%</div>
                            <div className="text-sm text-slate-600">Gold Since 2000</div>
                        </div>
                    </div>

                    {/* CTA Area */}
                    <div className="flex flex-col items-center gap-4">
                        <LeadCaptureButton
                            variant="protect"
                            source="lp-protect-retirement-hero"
                            className="bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-[0_5px_0_rgb(100,0,0)] hover:shadow-[0_2px_0_rgb(100,0,0)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            See How to Protect Your Retirement
                            <ArrowRight className="h-6 w-6" />
                        </LeadCaptureButton>
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

            {/* Warning Signs Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        3 Warning Signs You Can&apos;t Ignore
                    </h2>
                    <p className="text-center text-slate-600 mb-10 text-lg">
                        The signs are everywhere. Here&apos;s what smart investors are watching:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-50 p-6 rounded-xl border-2 border-[#B22234]/20 hover:border-[#B22234] transition-colors">
                            <div className="w-12 h-12 bg-[#B22234]/10 rounded-full flex items-center justify-center mb-4">
                                <DollarSign className="h-6 w-6 text-[#B22234]" />
                            </div>
                            <div className="text-3xl font-black text-[#B22234] mb-2">$34 Trillion</div>
                            <div className="font-semibold text-[#000080] mb-2">National Debt Crisis</div>
                            <p className="text-slate-600 text-sm">The U.S. debt has never been higher. When governments print money to pay debt, your savings lose purchasing power.</p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border-2 border-[#B22234]/20 hover:border-[#B22234] transition-colors">
                            <div className="w-12 h-12 bg-[#B22234]/10 rounded-full flex items-center justify-center mb-4">
                                <TrendingDown className="h-6 w-6 text-[#B22234]" />
                            </div>
                            <div className="text-3xl font-black text-[#B22234] mb-2">-50%</div>
                            <div className="font-semibold text-[#000080] mb-2">2008 Stock Losses</div>
                            <p className="text-slate-600 text-sm">Millions of Americans lost half their retirement savings in 2008. Most didn&apos;t have gold to protect them.</p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border-2 border-[#B22234]/20 hover:border-[#B22234] transition-colors">
                            <div className="w-12 h-12 bg-[#B22234]/10 rounded-full flex items-center justify-center mb-4">
                                <AlertTriangle className="h-6 w-6 text-[#B22234]" />
                            </div>
                            <div className="text-3xl font-black text-[#B22234] mb-2">40-Year High</div>
                            <div className="font-semibold text-[#000080] mb-2">Inflation Erosion</div>
                            <p className="text-slate-600 text-sm">Inflation hit 40-year highs. Your dollar buys less every year. Gold has historically preserved purchasing power.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gold Protection Section */}
            <section className="py-16 bg-slate-50 font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        Why Gold Protects When Markets Crash
                    </h2>
                    <p className="text-center text-slate-600 mb-10 text-lg max-w-2xl mx-auto">
                        History shows us what happens when crisis hits. The numbers speak for themselves.
                    </p>

                    {/* 2008 Comparison */}
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-10">
                        <div className="bg-[#000080] text-white p-4 text-center">
                            <h3 className="text-xl font-bold">2008 Financial Crisis: A Tale of Two Investments</h3>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <div className="p-8 border-b md:border-b-0 md:border-r border-slate-200 text-center">
                                <TrendingDown className="h-12 w-12 text-[#B22234] mx-auto mb-4" />
                                <div className="text-5xl font-black text-[#B22234] mb-2">-50%</div>
                                <div className="text-xl font-bold text-slate-700">S&P 500</div>
                                <p className="text-slate-500 mt-2 text-sm">Stocks crashed, taking retirement accounts with them</p>
                            </div>
                            <div className="p-8 text-center bg-green-50/50">
                                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                                <div className="text-5xl font-black text-green-600 mb-2">+25%</div>
                                <div className="text-xl font-bold text-slate-700">Gold</div>
                                <p className="text-slate-500 mt-2 text-sm">Gold rose while everything else fell</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-black text-[#000080] mb-2">5,000+</div>
                            <div className="text-slate-600">Years as a Store of Value</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-[#000080] mb-2">$0</div>
                            <div className="text-slate-600">Counterparty Risk</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-[#000080] mb-2">Tax-Free</div>
                            <div className="text-slate-600">Rollover Available</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Augusta CTA Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        Augusta: Our #1 Choice for Retirement Protection
                    </h2>
                    <p className="text-center text-slate-600 mb-10 text-lg">
                        When it comes to protecting your life savings, you need a partner you can trust.
                    </p>

                    <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200">
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Zero BBB Complaints:</strong> The only major gold IRA company with a perfect complaint record.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Education First:</strong> No high-pressure sales. Learn before you invest, on your timeline.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Transparent Pricing:</strong> No hidden fees or surprise markups on gold prices.</span>
                            </li>
                        </ul>

                        <div className="text-center mt-8">
                            <LeadCaptureButton
                                variant="protect"
                                source="lp-protect-retirement-middle"
                                className="inline-block bg-[#000080] hover:bg-[#000060] text-white text-lg font-bold py-4 px-8 rounded-lg transition-colors uppercase font-sans"
                            >
                                Get Your Free Protection Guide
                            </LeadCaptureButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-100 font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-10">
                        Common Questions
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
                        Don&apos;t Wait Until It&apos;s Too Late
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 font-sans">
                        The best time to protect your retirement was yesterday. The second best time is now.
                    </p>

                    <LeadCaptureButton
                        variant="protect"
                        source="lp-protect-retirement-footer"
                        className="inline-block bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Protect Your Retirement Now
                    </LeadCaptureButton>

                    <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80 text-sm font-sans">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            Free consultation
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            No obligation
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            Takes 2 minutes
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
        </div>
    );
}
