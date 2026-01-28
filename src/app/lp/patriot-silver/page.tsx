import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, TrendingUp, DollarSign, Factory, BarChart } from "lucide-react";
import { INTERNAL_WARMUP_PAGES } from "@/config/affiliates";
import SocialProofToast from "@/components/lp/SocialProofToast";
import TrackedLPLink from "@/components/lp/TrackedLPLink";

export const metadata: Metadata = {
    title: "Urgent Silver Alert | The 'Poor Man's Gold' Opportunity",
    description: "Why smart Americans are moving to Silver before the ratio resets. Get your free Silver Guide.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function PatriotSilverKitPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-serif">
            {/* Top Warning Bar - BLUE for Silver to distinguish from Gold page */}
            <div className="bg-[#000080] text-white p-2 text-center font-bold uppercase tracking-wider text-sm">
                <span className="flex items-center justify-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Silver Alert: Historic Disconnect Detected (80:1 Ratio)
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#B22234]">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    {/* Headline Group */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        Why Millions Are <br />
                        <span className="text-[#B22234] underline decoration-4 underline-offset-8">Dumping Cash For Silver</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-8 max-w-2xl mx-auto">
                        Gold is for the wealthy. <strong>Silver is for the people.</strong> Discover why this "Essential Metal" might be the most undervalued asset in America.
                    </p>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 font-sans">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#000080]">~$30</div>
                            <div className="text-sm text-slate-600">Per Ounce (vs $2,400 Gold)</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#B22234]">80:1</div>
                            <div className="text-sm text-slate-600">Historic Ratio Gap</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#000080]">50%+</div>
                            <div className="text-sm text-slate-600">Industrial Use</div>
                        </div>
                    </div>

                    {/* CTA Area */}
                    <div className="flex flex-col items-center gap-4">
                        <TrackedLPLink
                            href="https://learn.augustapreciousmetals.com/silver-ira?apmtrkr_cid=1696&aff_id=5129"
                            source="lp-patriot-silver-hero"
                            className="bg-[#000080] hover:bg-[#000060] text-white text-2xl md:text-3xl font-bold py-6 px-12 rounded-lg shadow-[0_5px_0_rgb(0,0,50)] hover:shadow-[0_2px_0_rgb(0,0,50)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            Get Your Free Silver Kit
                            <ArrowRight className="h-8 w-8" />
                        </TrackedLPLink>
                        <p className="text-sm text-slate-500 font-sans flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            100% Free • Zero Obligation • A+ BBB Rated
                        </p>
                    </div>
                </div>
            </header>

            {/* Trust Strip */}
            <section className="py-6 bg-slate-100 border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-12 lowercase font-bold text-slate-400 text-xl font-sans">
                    <span>zero fees for 10 years*</span>
                    <span>•</span>
                    <span>best of money 2026</span>
                    <span>•</span>
                    <span>zero complaints</span>
                </div>
            </section>

            {/* The Evidence Content */}
            <section className="py-16 bg-white font-sans text-lg md:text-xl leading-relaxed text-slate-800">
                <div className="max-w-3xl mx-auto px-4 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold text-[#B22234] font-serif">The "Silver Squeeze" Is Coming...</h2>

                    <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <Factory className="h-8 w-8 text-[#000080] mb-3" />
                            <h3 className="font-bold text-lg mb-2 text-[#000080]">It Gets Used Up</h3>
                            <p className="text-base text-slate-600">Unlike gold, 50%+ of all silver is consumed by industry (Solar, EVs, Tech). It's disappearing.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <BarChart className="h-8 w-8 text-[#000080] mb-3" />
                            <h3 className="font-bold text-lg mb-2 text-[#000080]">The 80:1 Gap</h3>
                            <p className="text-base text-slate-600">Historically, 1oz Gold = 15oz Silver. Today it's 1oz Gold = 80oz Silver. That gap must close.</p>
                        </div>
                    </div>

                    <p>
                        While Wall Street chases AI stocks, smart patriots are quietly accumulating physical silver. It is the single most essential metal for the green energy revolution, yet it is priced like dirt.
                    </p>
                    <p>
                        <strong>This is the asymmetry of a lifetime.</strong>
                    </p>

                    <div className="bg-[#eff6ff] p-6 rounded-xl border-l-4 border-[#000080] my-8 not-prose">
                        <h4 className="font-bold text-[#000080] flex items-center gap-2 mb-2">
                            <DollarSign className="h-5 w-5" />
                            More Metal For Your Money
                        </h4>
                        <p className="text-base">
                            With Gold at $2,400+, it's hard to accumulate. With Silver at ~$30, you can buy <strong>buckets</strong> of real, physical money for the same price.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-[#B22234] text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-serif">
                        Claim Your Free 2026 Silver Guide
                    </h2>
                    <TrackedLPLink
                        href="https://learn.augustapreciousmetals.com/silver-ira?apmtrkr_cid=1696&aff_id=5129"
                        source="lp-patriot-silver-footer"
                        className="inline-block bg-[#000080] hover:bg-[#000060] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Yes! Send Me The Guide
                    </TrackedLPLink>
                    <p className="text-white/80 mt-6 text-sm">
                        Join 50,000+ Americans who have switched to physical metals.
                    </p>
                </div>
            </section>

            <footer className="bg-slate-900 text-slate-600 py-8 text-center text-xs">
                <div className="max-w-4xl mx-auto px-4">
                    <p>&copy; 2026 Rich Dad Retirement. All Rights Reserved.</p>
                    <p className="mt-2">Disclaimer: Past performance does not guarantee future results.</p>
                </div>
            </footer>

            {/* Social Proof Toast */}
            <SocialProofToast variant="silver" />

            {/* Exit Intent Popup */}
        </div>
    );
}
