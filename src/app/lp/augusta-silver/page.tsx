import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Star, ArrowRight, CheckCircle2, Award, Users, Phone, XCircle } from "lucide-react";
import SocialProofToast from "@/components/lp/SocialProofToast";
import TrackedLPLink from "@/components/lp/TrackedLPLink";

export const metadata: Metadata = {
    title: "Augusta Precious Metals Review 2026 | Why We Recommend Them",
    description: "Zero BBB complaints. A+ rating. Education-first approach. See why Augusta is our #1 choice for Gold and Silver IRAs in 2026.",
    robots: {
        index: false,
        follow: false,
    },
};

const AFFILIATE_LINK = "https://learn.augustapreciousmetals.com/silver-ira?apmtrkr_cid=1696&aff_id=5129";

export default function AugustaSilverPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-serif">
            {/* Top Warning Bar - Green for Trust/Verified */}
            <div className="bg-emerald-700 text-white p-2 text-center font-bold uppercase tracking-wider text-sm">
                <span className="flex items-center justify-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    Verified: Zero BBB Complaints Since 2012
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-sans text-sm font-semibold mb-6">
                        <ShieldCheck className="h-4 w-4" />
                        Updated January 2026
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        Why Augusta Is Our <br />
                        <span className="text-[#B22234] underline decoration-4 underline-offset-8">#1 Recommendation</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-10 max-w-2xl mx-auto">
                        We reviewed 15+ precious metals companies. One stood out with a <strong>perfect complaint record</strong> and an education-first approach that puts you in control.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10 font-sans">
                        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-emerald-200">
                            <div className="text-5xl font-black text-emerald-600 mb-2">0</div>
                            <div className="text-sm font-bold uppercase text-slate-500">BBB Complaints</div>
                            <p className="text-xs text-slate-400 mt-2">In company history</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#000080]/20">
                            <div className="text-5xl font-black text-[#000080] mb-2">A+</div>
                            <div className="text-sm font-bold uppercase text-slate-500">BBB Rating</div>
                            <p className="text-xs text-slate-400 mt-2">Highest possible</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-amber-200">
                            <div className="text-5xl font-black text-amber-600 mb-2">4.9</div>
                            <div className="text-sm font-bold uppercase text-slate-500">Customer Rating</div>
                            <p className="text-xs text-slate-400 mt-2">1,000+ reviews</p>
                        </div>
                    </div>

                    {/* CTA Area */}
                    <div className="flex flex-col items-center gap-4">
                        <TrackedLPLink
                            href={AFFILIATE_LINK}
                            source="lp-augusta-silver-hero"
                            className="bg-[#B22234] hover:bg-[#8b1c2a] text-white text-2xl md:text-3xl font-bold py-6 px-12 rounded-lg shadow-[0_5px_0_rgb(100,0,0)] hover:shadow-[0_2px_0_rgb(100,0,0)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            Get Free Consultation
                            <ArrowRight className="h-8 w-8" />
                        </TrackedLPLink>
                        <p className="text-sm text-slate-500 font-sans flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            No pressure • Education first • Free silver guide
                        </p>
                    </div>
                </div>
            </header>

            {/* Trust Bar */}
            <section className="py-8 bg-slate-100 border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <p className="text-slate-500 font-sans uppercase tracking-widest text-xs mb-4">Featured In</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
                        <span className="text-2xl font-black text-slate-800">MONEY</span>
                        <span className="text-2xl font-black text-slate-800">FORBES</span>
                        <span className="text-2xl font-black text-slate-800">KIPLINGER</span>
                        <span className="text-2xl font-black text-slate-800">INVESTOPEDIA</span>
                    </div>
                </div>
            </section>

            {/* Why Augusta Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#000080] font-serif text-center mb-4">What Makes Augusta Different?</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                        Most gold companies push high-pressure sales. Augusta does the opposite.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <Award className="h-10 w-10 text-[#000080] mb-4" />
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Education Before Sales</h3>
                            <p className="text-slate-600">
                                Every new client gets a one-on-one web conference with an economist. No sales pitch—just facts about precious metals, IRAs, and the economy. You decide if it's right for you.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <Users className="h-10 w-10 text-[#000080] mb-4" />
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Lifetime Customer Support</h3>
                            <p className="text-slate-600">
                                You get a dedicated account manager for life. Not a call center. A real person who knows your account and helps with every question, from paperwork to buybacks.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <Phone className="h-10 w-10 text-[#000080] mb-4" />
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Zero Complaints (Really)</h3>
                            <p className="text-slate-600">
                                Check the BBB yourself. Augusta has <strong>zero complaints</strong> filed against them. In an industry full of shady dealers, that's remarkable.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <ShieldCheck className="h-10 w-10 text-[#000080] mb-4" />
                            <h3 className="text-xl font-bold text-[#000080] mb-3">Transparent Pricing</h3>
                            <p className="text-slate-600">
                                No hidden fees. No bait-and-switch. They show you the price, the premium, and the buyback rate upfront. What you see is what you pay.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-16 bg-slate-50 font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#000080] font-serif text-center mb-10">Augusta vs. The Competition</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Augusta */}
                        <div className="bg-white border-2 border-emerald-300 rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <Star className="h-5 w-5 text-emerald-600 fill-emerald-600" />
                                <h3 className="text-xl font-bold text-emerald-700">Augusta Precious Metals</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                                    <span>Zero BBB complaints ever</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                                    <span>Education-first, no pressure</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                                    <span>Lifetime dedicated support</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                                    <span>Transparent, fair buyback</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                                    <span>$50K minimum (serious investors)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Others */}
                        <div className="bg-white border-2 border-red-200 rounded-xl p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <XCircle className="h-5 w-5 text-red-500" />
                                <h3 className="text-xl font-bold text-red-600">Many Competitors</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-center gap-3">
                                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                                    <span>Multiple BBB complaints</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                                    <span>High-pressure sales tactics</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                                    <span>Call center support</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                                    <span>Wide buyback spreads</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                                    <span>Low minimums, hidden fees</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Joe Montana Section */}
            <section className="py-12 bg-[#000080]/5 border-y border-[#000080]/20 font-sans">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Award className="h-4 w-4" />
                        Celebrity Endorsement That Means Something
                    </div>
                    <h3 className="text-2xl font-bold text-[#000080] mb-4">Joe Montana Isn't Just a Spokesman</h3>
                    <p className="text-slate-700 text-lg">
                        Hall of Fame quarterback Joe Montana didn't just sign a contract. He <strong>secret-shopped</strong> Augusta anonymously before agreeing to work with them. He scrutinized their process, their pricing, and their customer service. Then he chose them for his own retirement assets.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-[#000080] text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
                        See Why 50,000+ Americans Chose Augusta
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 font-sans">
                        Free consultation. No pressure. Just honest education.
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
                            $50K Minimum
                        </span>
                    </div>

                    <TrackedLPLink
                        href={AFFILIATE_LINK}
                        source="lp-augusta-silver-footer"
                        className="inline-block bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Get Your Free Consultation
                    </TrackedLPLink>
                    <p className="text-slate-400 mt-6 text-sm font-sans">
                        Takes 15 minutes. No obligation. Strictly confidential.
                    </p>
                </div>
            </section>

            <footer className="bg-slate-900 text-slate-600 py-8 text-center text-xs font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <p>&copy; 2026 Rich Dad Retirement. All Rights Reserved.</p>
                    <p className="mt-2">Disclaimer: We are not financial advisors. Precious metals involve risk. Past performance does not guarantee future results. We may receive compensation from Augusta.</p>
                </div>
            </footer>

            {/* Social Proof Toast */}
            <SocialProofToast variant="silver" />

            {/* Exit Intent Popup */}
        </div>
    );
}
