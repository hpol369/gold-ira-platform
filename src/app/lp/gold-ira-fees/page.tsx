import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import ExitIntentPopup from "@/components/lp/ExitIntentPopup";
import SocialProofToast from "@/components/lp/SocialProofToast";
import TrackedLPLink from "@/components/lp/TrackedLPLink";

export const metadata: Metadata = {
    title: "Gold IRA Fees: What Wall Street Doesn't Want You to Know | 2026",
    description: "Exposed: Hidden gold IRA fees that cost retirees thousands. Buyback spreads, premium markups, storage scams revealed. Get the truth before you invest.",
    robots: {
        index: false,
        follow: false,
    },
};

// Fee-specific FAQ content for schema
const faqs = [
    {
        question: "What are typical gold IRA fees?",
        answer: "Typical gold IRA fees include: account setup ($50-$150), annual custodian fees ($75-$300), storage fees ($100-$300/year or 0.5% of value), and transaction fees ($25-$50 per trade). However, the largest hidden cost is often the buyback spread - the difference between what you pay for gold and what a company will pay you when you sell. Some companies have spreads of 10-30%, meaning you could lose thousands when liquidating.",
    },
    {
        question: "What hidden fees should I watch for?",
        answer: "The biggest hidden fees in gold IRAs are: (1) Buyback spreads - many companies buy back gold at 10-30% below spot price; (2) Premium markups - inflated prices hidden in 'per ounce' pricing; (3) Percentage-based storage that grows with your account; (4) Liquidation fees when you need to sell; (5) Wire transfer fees on every transaction. Always ask for a complete fee schedule in writing before opening an account.",
    },
    {
        question: "Why do some companies have higher premiums?",
        answer: "Higher premiums often hide commission payments to salespeople and marketing costs. Some companies mark up gold 15-20% above spot price, while transparent companies like Augusta keep premiums competitive. Always compare the total cost per ounce to the current spot price - a difference of more than 5-8% for common coins should raise questions.",
    },
    {
        question: "How much do buyback spreads really cost?",
        answer: "Buyback spreads can cost you 10-30% of your investment when you sell. On a $100,000 gold IRA, that's $10,000-$30,000 you'll never see. For example, if you buy gold at $2,000/oz and the company only offers $1,700/oz when you sell (a 15% spread), you've lost $300 per ounce regardless of whether gold prices went up. This is the single largest hidden cost in the industry.",
    },
    {
        question: "Is Augusta's $50K minimum worth it for the transparency?",
        answer: "For investors with $50,000 or more to protect, Augusta's transparent pricing typically saves money compared to companies with lower minimums but hidden fees. The combination of fair buyback pricing, competitive premiums, flat $180/year storage, and no liquidation fees often results in thousands saved over time.",
    },
    {
        question: "Can I negotiate gold IRA fees?",
        answer: "Some fees are negotiable, especially for larger accounts. However, the fees you see advertised are often the least important costs. Instead of negotiating small annual fees, focus on: (1) Getting buyback pricing in writing; (2) Comparing premium markups across companies; (3) Understanding the total cost when you eventually sell.",
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

export default function GoldIRAFeesPatriotPage() {
    const faqSchema = generateFAQSchema();
    const affiliateLink = "https://learn.augustapreciousmetals.com/gold-ira-2?apmtrkr_cid=1696&aff_id=5129";

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
                    Warning: Hidden Fees Are Eating Your Retirement
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    {/* Headline Group */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        Gold IRA Fees: <br />
                        <span className="text-[#B22234] underline decoration-4 underline-offset-8">What Wall Street Doesn't Want You to Know</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-8 max-w-2xl mx-auto">
                        Hidden <strong>buyback spreads</strong> and <strong>premium markups</strong> are silently draining American retirees of thousands. Get the truth before they take yours.
                    </p>

                    {/* VSL / Image Area */}
                    <div className="relative aspect-video bg-black rounded-xl shadow-2xl overflow-hidden mb-10 border-4 border-white max-w-3xl mx-auto group cursor-pointer">
                        <Image
                            src="/patriot_gold_hero.png"
                            alt="Hidden Gold IRA Fees Exposed"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-[#B22234] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                            <span className="bg-black/70 text-white px-4 py-1 rounded text-sm font-sans font-bold">
                                EXPOSED: The Fee Tricks Gold Companies Use (5 Min)
                            </span>
                        </div>
                    </div>

                    {/* CTA Area */}
                    <div className="flex flex-col items-center gap-4">
                        <TrackedLPLink
                            href={affiliateLink}
                            source="lp-gold-ira-fees-hero"
                            className="bg-[#B22234] hover:bg-[#8b1c2a] text-white text-2xl md:text-3xl font-bold py-6 px-12 rounded-lg shadow-[0_5px_0_rgb(100,0,0)] hover:shadow-[0_2px_0_rgb(100,0,0)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            Get The Truth About Fees
                            <ArrowRight className="h-8 w-8" />
                        </TrackedLPLink>
                        <p className="text-sm text-slate-500 font-sans flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            100% Free Fee Guide - Zero Obligation
                        </p>
                    </div>
                </div>
            </header>

            {/* As Seen On / Trust Bar */}
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

            {/* The Fee Expose Content */}
            <section className="py-16 bg-white font-sans text-lg md:text-xl leading-relaxed text-slate-800">
                <div className="max-w-3xl mx-auto px-4 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold text-[#000080] font-serif">The Dirty Secret Gold Companies Don't Want You to Know...</h2>
                    <p>
                        You did everything right. Saved for decades. Trusted the system. And now you're looking to protect your nest egg with gold.
                    </p>
                    <p>
                        But here's what they won't tell you: <strong>Most gold IRA companies are quietly stealing 10-30% of your investment through hidden fees.</strong>
                    </p>
                    <p>
                        It's not illegal. It's not even technically a lie. They just don't <em>volunteer</em> this information. And by the time you find out, it's too late.
                    </p>

                    <h3 className="text-2xl font-bold text-[#B22234] font-serif mt-10">The Three Fee Traps That Cost Retirees Thousands:</h3>

                    {/* Fee Trap #1 */}
                    <div className="bg-red-50 border-l-4 border-[#B22234] p-6 my-6 not-prose">
                        <h4 className="text-xl font-bold text-[#B22234] mb-2">TRAP #1: The Buyback Spread Scam</h4>
                        <p className="text-slate-700">
                            When you sell your gold back, many companies pay you <strong>10-30% LESS</strong> than spot price. On a $100,000 IRA, that's $10,000-$30,000 you'll NEVER see again. They call it the "spread." We call it highway robbery.
                        </p>
                    </div>

                    {/* Fee Trap #2 */}
                    <div className="bg-red-50 border-l-4 border-[#B22234] p-6 my-6 not-prose">
                        <h4 className="text-xl font-bold text-[#B22234] mb-2">TRAP #2: Premium Markup Games</h4>
                        <p className="text-slate-700">
                            Some companies charge <strong>15-20% above spot price</strong> when you BUY gold. They hide it in "per ounce" pricing so you never notice. That's thousands lost before your gold even arrives.
                        </p>
                    </div>

                    {/* Fee Trap #3 */}
                    <div className="bg-red-50 border-l-4 border-[#B22234] p-6 my-6 not-prose">
                        <h4 className="text-xl font-bold text-[#B22234] mb-2">TRAP #3: Percentage-Based Storage</h4>
                        <p className="text-slate-700">
                            They start at 0.5% of your account value per year. Sounds small, right? But as gold rises and your account grows, so do their fees. <strong>Your success becomes their payday.</strong>
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-[#000080] font-serif mt-10">What the HONEST Companies Do Differently:</h3>

                    <ul className="not-prose space-y-4 my-8 bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span><strong>Transparent Buyback Pricing:</strong> Know EXACTLY what they'll pay you BEFORE you invest.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span><strong>Competitive Premiums:</strong> Fair markup on purchases - typically 5-8%, not 15-20%.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span><strong>Flat Annual Fees:</strong> $180/year storage - doesn't grow as your account grows.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span><strong>No Liquidation Fees:</strong> When you need YOUR money, they don't charge you to get it.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span><strong>All Costs In Writing:</strong> Every fee disclosed upfront - no surprises, no "fine print."</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Fee Comparison Section */}
            <section className="py-12 bg-slate-50 border-y border-slate-200">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#000080] text-center mb-10 font-serif">The Hidden Cost Comparison</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Bad Company */}
                        <div className="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold text-[#B22234] mb-4 font-sans uppercase tracking-wide">Typical Gold IRA Company</h3>
                            <ul className="space-y-3 font-sans text-slate-700">
                                <li className="flex items-start gap-3">
                                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span>15-30% buyback spread</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span>15-20% premium markup</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span>0.5%+ storage (grows with account)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span>Hidden liquidation fees</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span>High-pressure sales tactics</span>
                                </li>
                            </ul>
                            <div className="mt-6 pt-4 border-t border-red-200">
                                <p className="text-sm text-red-600 font-bold">Potential Hidden Cost on $100K: <span className="text-xl">$15,000 - $30,000+</span></p>
                            </div>
                        </div>

                        {/* Good Company */}
                        <div className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold text-green-700 mb-4 font-sans uppercase tracking-wide">Transparent Company (Augusta)</h3>
                            <ul className="space-y-3 font-sans text-slate-700">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Fair buyback - close to spot</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Competitive 5-8% premium</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Flat $180/year storage</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>No liquidation fees</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Education-first approach</span>
                                </li>
                            </ul>
                            <div className="mt-6 pt-4 border-t border-green-200">
                                <p className="text-sm text-green-700 font-bold">Known Cost on $100K: <span className="text-xl">~$1,000/year</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#000080] text-center mb-10 font-serif">Gold IRA Fee Questions Answered</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-slate-200 pb-6">
                                <h3 className="text-xl font-bold text-slate-800 mb-3 font-sans">{faq.question}</h3>
                                <p className="text-slate-600 font-sans leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 bg-[#000080] text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
                        Stop Paying Hidden Fees on Your Gold IRA
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 font-sans">
                        Get the free guide that exposes every fee trick in the industry - and shows you how to avoid them all.
                    </p>
                    <TrackedLPLink
                        href={affiliateLink}
                        source="lp-gold-ira-fees-footer"
                        className="inline-block bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Get Your Free Fee Guide
                    </TrackedLPLink>
                    <p className="text-slate-400 mt-6 text-sm font-sans">
                        Strictly confidential. We respect your privacy.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-600 py-8 text-center text-xs font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <p>&copy; 2026 Rich Dad Retirement. All Rights Reserved.</p>
                    <p className="mt-2">Disclaimer: We are not financial advisors. Gold and precious metals involve risk. Past performance is not indicative of future results.</p>
                </div>
            </footer>

            {/* Social Proof Toast */}
            <SocialProofToast variant="gold" />

            {/* Exit Intent Popup */}
            <ExitIntentPopup
                affiliateLink="https://learn.augustapreciousmetals.com/gold-ira-2?apmtrkr_cid=1696&aff_id=5129"
                variant="gold"
            />
        </div>
    );
}
