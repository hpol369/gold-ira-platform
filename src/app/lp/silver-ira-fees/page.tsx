import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, XCircle, DollarSign, TrendingDown, Building2 } from "lucide-react";
import ExitIntentPopup from "@/components/lp/ExitIntentPopup";
import SocialProofToast from "@/components/lp/SocialProofToast";
import TrackedLPLink from "@/components/lp/TrackedLPLink";

export const metadata: Metadata = {
    title: "Silver IRA Fees: The Truth They Don't Want You to Know | 2026",
    description: "Warning: Hidden silver IRA fees are eating your retirement. Discover buyback spreads (15-35%), premium markups, and storage traps. Get transparent pricing.",
    robots: {
        index: false,
        follow: false,
    },
};

// FAQ data for schema and display
const faqs = [
    {
        question: "What are typical silver IRA fees?",
        answer: "Typical silver IRA fees include: account setup ($50-$150), annual custodian fees ($75-$300), storage fees ($100-$300/year or 0.5% of value), and transaction fees ($25-$50 per trade). Silver often has higher percentage-based storage costs than gold because it requires more vault space per dollar of value. The biggest hidden cost is the buyback spread - some companies buy back silver at 15-35% below spot.",
    },
    {
        question: "Why are silver IRA fees sometimes higher than gold?",
        answer: "Silver requires significantly more storage space per dollar of value compared to gold. A $50,000 silver investment weighs about 100 lbs vs just 1 lb for gold. This means higher shipping costs, more vault space, and potentially higher insurance. Companies with percentage-based storage fees charge more for silver accounts. Augusta's flat $180/year fee is the same regardless of whether you hold gold or silver.",
    },
    {
        question: "What hidden fees should I watch for with silver IRAs?",
        answer: "The biggest hidden fees in silver IRAs are: (1) Buyback spreads - many companies buy back silver at 15-35% below spot price; (2) Premium markups - silver premiums are often higher than gold, ranging from 8-20% over spot; (3) Percentage-based storage that grows with your account; (4) Liquidation fees when you sell; (5) Shipping fees for larger silver volumes.",
    },
    {
        question: "How much do silver buyback spreads really cost?",
        answer: "Silver buyback spreads can cost you 15-35% of your investment when you sell. On a $50,000 silver IRA, that's $7,500-$17,500 you'll never see. Silver spreads are typically wider than gold because of lower liquidity and higher handling costs. Always ask for buyback pricing in writing before opening an account.",
    },
    {
        question: "Is Augusta's $50K minimum worth it for silver?",
        answer: "For investors with $50,000 or more to protect, Augusta's transparent pricing typically saves significant money compared to companies with lower minimums but hidden fees. The flat $180/year storage fee is especially valuable for silver investors, since percentage-based storage would cost much more. Augusta also provides free educational resources specifically about silver investing.",
    },
    {
        question: "Can I hold both gold and silver in the same IRA?",
        answer: "Yes, you can hold both gold and silver in the same self-directed IRA. Many investors diversify between the two metals. Augusta's flat annual fee covers both gold and silver storage, making it cost-effective to hold a mix. Their specialists can help you determine the right allocation based on your goals.",
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

const AFFILIATE_LINK = "https://learn.augustapreciousmetals.com/silver-ira?apmtrkr_cid=1696&aff_id=5129";

export default function SilverIRAFeesPatriotPage() {
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
                    Warning: Hidden Silver Fees Are Eating Your Retirement
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    {/* Headline Group */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        Silver IRA Fees: <br />
                        <span className="text-[#B22234] underline decoration-4 underline-offset-8">The Truth They Don't Want You to Know</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-8 max-w-2xl mx-auto">
                        Hidden buyback spreads of <strong>15-35%</strong> are silently destroying American retirement accounts. Most silver IRA companies won't tell you the real cost until it's too late.
                    </p>

                    {/* Key Stats Box */}
                    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 mb-10 border-4 border-[#000080]/20 max-w-3xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6 font-sans">
                            <div className="text-center">
                                <div className="text-4xl font-black text-[#B22234]">15-35%</div>
                                <div className="text-slate-600 text-sm">Hidden Buyback Spreads</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-[#B22234]">8-20%</div>
                                <div className="text-slate-600 text-sm">Premium Markups</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-[#B22234]">$17,500</div>
                                <div className="text-slate-600 text-sm">Lost on $50K Account</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Area */}
                    <div className="flex flex-col items-center gap-4">
                        <TrackedLPLink
                            href={AFFILIATE_LINK}
                            source="lp-silver-ira-fees-hero"
                            className="bg-[#B22234] hover:bg-[#8b1c2a] text-white text-2xl md:text-3xl font-bold py-6 px-12 rounded-lg shadow-[0_5px_0_rgb(100,0,0)] hover:shadow-[0_2px_0_rgb(100,0,0)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            Get The Truth About Silver Fees
                            <ArrowRight className="h-8 w-8" />
                        </TrackedLPLink>
                        <p className="text-sm text-slate-500 font-sans flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            Free Consultation - Zero Obligation
                        </p>
                    </div>
                </div>
            </header>

            {/* As Seen On / Trust */}
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

            {/* Hidden Fees Expose Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif text-center mb-4">
                        The Hidden Silver IRA Fees Others Won't Tell You About
                    </h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                        Silver fees are often <strong>WORSE</strong> than gold fees. Here's what shady dealers hide from you:
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Hidden Fees Column */}
                        <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                            <h3 className="text-xl font-bold text-[#B22234] mb-6 flex items-center gap-2">
                                <XCircle className="h-6 w-6" />
                                Hidden Fees They Don't Tell You
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <DollarSign className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-1" />
                                    <div>
                                        <strong>Buyback Spreads (15-35%)</strong>
                                        <p className="text-slate-600 text-sm">When you sell silver, some companies buy back at 15-35% below spot price</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <TrendingDown className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-1" />
                                    <div>
                                        <strong>Premium Markups (8-20%)</strong>
                                        <p className="text-slate-600 text-sm">Hidden in the "price per ounce" - often 8-20% over spot for silver</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Building2 className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-1" />
                                    <div>
                                        <strong>Percentage Storage (0.5%+)</strong>
                                        <p className="text-slate-600 text-sm">Adds up fast as silver takes more space than gold</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <DollarSign className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-1" />
                                    <div>
                                        <strong>Liquidation Fees</strong>
                                        <p className="text-slate-600 text-sm">Surprise charges when you need to sell your silver</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <DollarSign className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-1" />
                                    <div>
                                        <strong>Wire Transfer Fees</strong>
                                        <p className="text-slate-600 text-sm">Nickel-and-dime charges on every transaction</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Transparent Fees Column */}
                        <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                            <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center gap-2">
                                <CheckCircle2 className="h-6 w-6" />
                                Augusta's Transparent Approach
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong>Fair Buyback</strong>
                                        <p className="text-slate-600 text-sm">Competitive spreads shown upfront before purchase</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong>Clear Premiums</strong>
                                        <p className="text-slate-600 text-sm">All silver pricing transparent, no hidden markups</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong>Flat Storage ($180/year)</strong>
                                        <p className="text-slate-600 text-sm">Same whether $50K or $500K in silver</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong>No Liquidation Fees</strong>
                                        <p className="text-slate-600 text-sm">Sell your silver anytime without penalty</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong>Minimal Transaction Fees</strong>
                                        <p className="text-slate-600 text-sm">Standard wire fees only when needed</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Impact Callout */}
                    <div className="bg-[#000080]/10 rounded-xl p-6 border-2 border-[#000080]/20 text-center">
                        <p className="text-lg md:text-xl text-[#000080] font-bold">
                            On a $50,000 silver IRA, hidden buyback spreads alone can cost you <span className="text-[#B22234]">$7,500-$17,500</span> when you sell. Silver spreads are often wider than gold - choose a transparent provider.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Silver Fees Are Worse */}
            <section className="py-16 bg-slate-50 font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#000080] font-serif text-center mb-8">
                        Why Silver Fees Are Often WORSE Than Gold
                    </h2>

                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#B22234] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">Silver Takes 100x More Storage Space</h3>
                                <p className="text-slate-600">A $50,000 silver investment weighs about 100 lbs vs just 1 lb for gold. This means higher shipping costs, more vault space, and potentially higher insurance.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-[#B22234] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">Lower Liquidity = Wider Spreads</h3>
                                <p className="text-slate-600">Silver markets are less liquid than gold, giving dealers an excuse to charge wider buyback spreads of 15-35% vs gold's 3-10%.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-[#B22234] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">Percentage-Based Fees Punish Silver</h3>
                                <p className="text-slate-600">Companies charging 0.5% of holdings for storage penalize silver investors more because of the bulk. Augusta's flat fee solves this.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#000080] font-serif text-center mb-12">
                        Silver IRA Fee Questions Answered
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                <h3 className="font-bold text-lg text-[#000080] mb-3">{faq.question}</h3>
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
                        Stop Overpaying for Your Silver IRA
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 font-sans">
                        See why Augusta offers the most transparent silver IRA pricing in America
                    </p>

                    {/* Trust Points */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8 font-sans">
                        <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                            100% Transparent Pricing
                        </span>
                        <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                            No Hidden Buyback Fees
                        </span>
                        <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                            Flat Annual Fees
                        </span>
                    </div>

                    <TrackedLPLink
                        href={AFFILIATE_LINK}
                        source="lp-silver-ira-fees-footer"
                        className="inline-block bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Get The Truth About Silver Fees
                    </TrackedLPLink>
                    <p className="text-slate-400 mt-6 text-sm font-sans">
                        Free consultation - Strictly confidential
                    </p>
                </div>
            </section>

            {/* Footer */}
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
                affiliateLink="https://learn.augustapreciousmetals.com/silver-ira?apmtrkr_cid=1696&aff_id=5129"
                variant="silver"
            />
        </div>
    );
}
