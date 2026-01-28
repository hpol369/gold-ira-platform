import type { Metadata } from "next";
import { ShieldCheck, CheckCircle2, ArrowRight, Heart, Phone, Users, Clock, Shield, Award, Gem, HandHeart, Moon } from "lucide-react";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";

export const metadata: Metadata = {
    title: "Gold IRA for Seniors Over 60 | The Safe-Haven Investment Guide",
    description: "At 60+, you can't afford to gamble with retirement. Learn why thousands of seniors choose gold IRAs for wealth preservation and peace of mind.",
    robots: {
        index: false,
        follow: false,
    },
};

// FAQ content specific to seniors
const faqs = [
    {
        question: "Is there an age limit for opening a Gold IRA?",
        answer:
            "No! There's no upper age limit for opening or contributing to a Gold IRA. Whether you're 60, 70, or 80+, you can open a Gold IRA. You can also roll over existing retirement accounts at any age. Many of Augusta's clients are in their 60s, 70s, and beyond.",
    },
    {
        question: "What about Required Minimum Distributions (RMDs)?",
        answer:
            "Gold IRAs follow the same RMD rules as traditional IRAs. If you're 73 or older, you'll need to take RMDs. Augusta can help you understand how RMDs work with physical gold and plan your distributions accordingly.",
    },
    {
        question: "What's the minimum investment for seniors?",
        answer:
            "Augusta's minimum investment is $50,000. This ensures you receive premium, personalized service including a dedicated account manager, educational one-on-one sessions, and lifetime customer support — especially valuable for seniors who prefer personal attention.",
    },
    {
        question: "Is the process complicated? I'm not tech-savvy.",
        answer:
            "Not at all! Augusta specializes in helping seniors who prefer phone calls over computers. Everything can be done over the phone with your dedicated account representative. They handle all the paperwork and guide you through every step. No apps, no complicated online portals required.",
    },
    {
        question: "Can I leave my Gold IRA to my children or grandchildren?",
        answer:
            "Absolutely. Your Gold IRA can be passed to your beneficiaries just like any other IRA. Physical gold in an IRA is a tangible legacy you can leave for future generations — real wealth that has held value for thousands of years.",
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

export default function GoldIRASeniorsPage() {
    const faqSchema = generateFAQSchema();

    return (
        <div className="min-h-screen bg-white text-slate-900 font-serif">
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Top Alert Bar - Navy for trust/calm */}
            <div className="bg-[#000080] text-white p-3 text-center font-bold uppercase tracking-wider text-sm">
                <span className="flex items-center justify-center gap-2">
                    <Shield className="h-4 w-4" />
                    For Americans 60+: A Smarter Way to Protect Your Nest Egg
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#000080]/10 text-[#000080] px-4 py-2 rounded-full font-sans text-sm font-semibold mb-6">
                        <Award className="h-4 w-4" />
                        Senior&apos;s Guide 2026
                    </div>

                    {/* Headline Group */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        Gold IRA for Seniors: <br />
                        <span className="text-[#B22234] underline decoration-4 underline-offset-8">The Safe-Haven Investment</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-8 max-w-2xl mx-auto">
                        At 60+, you&apos;ve earned the right to protect what you&apos;ve built. <strong>No volatility. No gambling. Just security.</strong>
                    </p>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 font-sans">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#000080]">60+</div>
                            <div className="text-sm text-slate-600">Friendly Process</div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-1 text-3xl md:text-4xl font-black text-[#000080]">
                                <Phone className="h-7 w-7" />
                            </div>
                            <div className="text-sm text-slate-600">Phone Support</div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-1 text-3xl md:text-4xl font-black text-[#000080]">
                                <Heart className="h-7 w-7" />
                            </div>
                            <div className="text-sm text-slate-600">No Pressure Sales</div>
                        </div>
                    </div>

                    {/* CTA Area */}
                    <div className="flex flex-col items-center gap-4">
                        <LeadCaptureButton
                            variant="seniors"
                            source="lp-gold-ira-seniors-hero"
                            className="bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-[0_5px_0_rgb(100,0,0)] hover:shadow-[0_2px_0_rgb(100,0,0)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            Get Your Free Senior&apos;s Guide
                            <ArrowRight className="h-6 w-6" />
                        </LeadCaptureButton>
                        <p className="text-sm text-slate-500 font-sans flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            Free Guide • Phone Support • No Obligation
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

            {/* Why Seniors Choose Gold Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        Why Seniors Over 60 Are Moving to Gold
                    </h2>
                    <p className="text-center text-slate-600 mb-12 text-lg">
                        After decades of hard work, you deserve peace of mind.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Reason 1 */}
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-[#000080]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="h-8 w-8 text-[#000080]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Wealth Preservation</h3>
                            <p className="text-slate-600">
                                Gold has protected wealth for 5,000+ years. It can&apos;t be printed, inflated away, or devalued by politicians. Your savings stay your savings.
                            </p>
                        </div>

                        {/* Reason 2 */}
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-[#000080]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <HandHeart className="h-8 w-8 text-[#000080]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Leave a Legacy</h3>
                            <p className="text-slate-600">
                                Physical gold is a tangible inheritance you can pass to children and grandchildren. Real wealth they can hold in their hands.
                            </p>
                        </div>

                        {/* Reason 3 */}
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-[#000080]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Moon className="h-8 w-8 text-[#000080]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Sleep Better at Night</h3>
                            <p className="text-slate-600">
                                No more worrying about market crashes or what politicians are doing. Gold provides the stability you need in your golden years.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* It's Not Too Late Section */}
            <section className="py-16 bg-slate-50 font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        It&apos;s Not Too Late — And It&apos;s Easier Than You Think
                    </h2>
                    <p className="text-center text-slate-600 mb-10 text-lg">
                        We understand your concerns. Here&apos;s the truth:
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#000080] mb-1">&ldquo;I&apos;m too old for this&rdquo;</h3>
                                    <p className="text-slate-600">There&apos;s no age limit. Many of our clients are 70, 80, even 90+. It&apos;s never too late to protect what you&apos;ve worked for.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#000080] mb-1">&ldquo;I&apos;m not good with technology&rdquo;</h3>
                                    <p className="text-slate-600">Everything can be done over the phone. Your dedicated agent handles all paperwork. No apps, no complicated websites.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#000080] mb-1">&ldquo;It sounds complicated&rdquo;</h3>
                                    <p className="text-slate-600">Augusta makes it simple. One phone call to get started. They handle the rest — the paperwork, the transfers, everything.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#000080] mb-1">&ldquo;I don&apos;t want pushy salespeople&rdquo;</h3>
                                    <p className="text-slate-600">Augusta has zero BBB complaints because they don&apos;t use pressure tactics. Education first, sales never. Take all the time you need.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Augusta for Seniors Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        Why Seniors Trust Augusta
                    </h2>
                    <p className="text-center text-slate-600 mb-10 text-lg">
                        Augusta understands what matters most to retirees.
                    </p>

                    <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200">
                        <ul className="space-y-5 text-lg">
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#000080]/10 rounded-full flex items-center justify-center">
                                    <Award className="h-5 w-5 text-[#000080]" />
                                </div>
                                <span><strong>Zero BBB Complaints:</strong> The only major gold company with a perfect record. Your money is in trustworthy hands.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#000080]/10 rounded-full flex items-center justify-center">
                                    <Phone className="h-5 w-5 text-[#000080]" />
                                </div>
                                <span><strong>Dedicated Phone Support:</strong> One person who knows your account and answers when you call. Real humans, not robots.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#000080]/10 rounded-full flex items-center justify-center">
                                    <Heart className="h-5 w-5 text-[#000080]" />
                                </div>
                                <span><strong>Education First:</strong> They teach you about gold IRAs before asking for anything. No pressure, ever.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#000080]/10 rounded-full flex items-center justify-center">
                                    <Users className="h-5 w-5 text-[#000080]" />
                                </div>
                                <span><strong>Endorsed by Joe Montana:</strong> NFL legend Joe Montana trusts Augusta with his retirement. So do 50,000+ other Americans.</span>
                            </li>
                        </ul>

                        <div className="text-center mt-8">
                            <LeadCaptureButton
                                variant="seniors"
                                source="lp-gold-ira-seniors-middle"
                                className="inline-block bg-[#000080] hover:bg-[#000060] text-white text-lg font-bold py-4 px-8 rounded-lg transition-colors uppercase font-sans"
                            >
                                Get Your Free Senior&apos;s Guide
                            </LeadCaptureButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-100 font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-10">
                        Questions Seniors Ask
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
                        Your Retirement. Your Legacy. Protected.
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 font-sans">
                        Join thousands of seniors who&apos;ve found peace of mind with a Gold IRA.
                    </p>

                    <LeadCaptureButton
                        variant="seniors"
                        source="lp-gold-ira-seniors-footer"
                        className="inline-block bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Get Your Free Senior&apos;s Guide
                    </LeadCaptureButton>

                    <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80 text-sm font-sans">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            No age limit
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            Phone support
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
