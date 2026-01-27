import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import ExitIntentPopup from "@/components/lp/ExitIntentPopup";
import DebtInfographic from "@/components/lp/DebtInfographic";

export const metadata: Metadata = {
    title: "Is Your Retirement Safe From the $38 Trillion Debt? | 2026 Gold Guide",
    description: "With tariffs and national debt at record highs, protect your retirement savings. Get your free 2026 Gold Investment Kit today.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function PatriotGoldKitPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-serif">
            {/* Top Warning Bar */}
            <div className="bg-[#B22234] text-white p-2 text-center font-bold uppercase tracking-wider text-sm">
                <span className="flex items-center justify-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Urgent Message for Accounts Over $50,000
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    {/* Headline Group */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        Is Your Retirement <br />
                        <span className="text-[#B22234] underline decoration-4 underline-offset-8">Safe From the $38 Trillion Debt?</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-8 max-w-2xl mx-auto">
                        With tariffs driving prices up and the national debt at record highs, discover the <strong>"IRS Loophole"</strong> smart Americans are using to protect their 401(k) with Tax-Free Gold.
                    </p>

                    {/* Debt Infographic */}
                    <div className="mb-10">
                        <DebtInfographic />
                    </div>

                    {/* CTA Area */}
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="https://learn.augustapreciousmetals.com/apm-aff-lp-1-v3?apmtrkr_cid=1696&aff_id=5129"
                            className="bg-[#B22234] hover:bg-[#8b1c2a] text-white text-2xl md:text-3xl font-bold py-6 px-12 rounded-lg shadow-[0_5px_0_rgb(100,0,0)] hover:shadow-[0_2px_0_rgb(100,0,0)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            Get Your Free Gold Kit
                            <ArrowRight className="h-8 w-8" />
                        </Link>
                        <p className="text-sm text-slate-500 font-sans flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            100% Free & Secure • Zero Obligation
                        </p>
                    </div>
                </div>
            </header>

            {/* As Seen On / Trust */}
            <section className="py-8 bg-slate-100 border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <p className="text-slate-500 font-sans uppercase tracking-widest text-xs mb-4">Trusted By 50,000+ Americans</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
                        {/* Placeholders for logos (FOX, NEWSMAX, ETC - Text for now) */}
                        <span className="text-2xl font-black text-slate-800">FOX NEWS</span>
                        <span className="text-2xl font-black text-slate-800">NEWSMAX</span>
                        <span className="text-2xl font-black text-slate-800">BEN SHAPIRO</span>
                        <span className="text-2xl font-black text-slate-800">FORBES</span>
                    </div>
                </div>
            </section>

            {/* Global Instability Section */}
            <section className="py-12 bg-red-50 border-y border-red-200 font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-[#B22234] text-center mb-6 font-serif">2026: A World on Edge</h2>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg border border-red-200">
                            <div className="text-3xl mb-2">🇻🇪</div>
                            <div className="font-bold text-[#000080]">Venezuela Crisis</div>
                            <div className="text-sm text-slate-600">U.S. military intervention. Russia & China condemn action.</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-red-200">
                            <div className="text-3xl mb-2">🇬🇱</div>
                            <div className="font-bold text-[#000080]">Greenland Tensions</div>
                            <div className="text-sm text-slate-600">NATO allies at odds. 25% tariff threats on Europe.</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-red-200">
                            <div className="text-3xl mb-2">🇷🇺🇨🇳</div>
                            <div className="font-bold text-[#000080]">Russia-China Alliance</div>
                            <div className="text-sm text-slate-600">Deepening cooperation. De-dollarization accelerating.</div>
                        </div>
                    </div>
                    <p className="text-center mt-6 text-slate-700 font-semibold">
                        When the world gets chaotic, smart money moves to <span className="text-amber-600">gold</span>.
                    </p>
                </div>
            </section>

            {/* The Warning Content */}
            <section className="py-16 bg-white font-sans text-lg md:text-xl leading-relaxed text-slate-800">
                <div className="max-w-3xl mx-auto px-4 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold text-[#000080] font-serif">$38.45 Trillion in Debt. Who Pays?</h2>
                    <p>
                        Take a look at your grocery bill. Look at the gas pump. Tariffs have added <strong>$1,300 per household</strong> in 2026. <strong>This isn't going away.</strong>
                    </p>
                    <p>
                        With the national debt at record highs and 19% of federal spending just to pay interest, the value of <em>your</em> hard-earned savings is at risk.
                        But there is one asset that has stood the test of time for 5,000 years.
                    </p>
                    <p>
                        <strong>God's Money. Gold.</strong>
                    </p>
                    <ul className="not-prose space-y-4 my-8 bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span><strong>Tax-Free Growth:</strong> Learn how to legally roll over your IRA or 401(k) without paying a penny in taxes.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span><strong>Physical Possession:</strong> Don't trust the banks? Learn how to take physical delivery.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span><strong>The "Billionaire Strategy":</strong> See why the ultra-wealthy constitute 20% of their portfolio in metals.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-[#000080] text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-serif">
                        Claim Your Free 2026 Wealth Protection Kit
                    </h2>
                    <Link
                        href="https://learn.augustapreciousmetals.com/apm-aff-lp-1-v3?apmtrkr_cid=1696&aff_id=5129"
                        className="inline-block bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Send Me The Free Guide
                    </Link>
                    <p className="text-slate-400 mt-6 text-sm">
                        Strictly confidential. We respect your privacy.
                    </p>
                </div>
            </section>

            <footer className="bg-slate-900 text-slate-600 py-8 text-center text-xs">
                <div className="max-w-4xl mx-auto px-4">
                    <p>&copy; 2026 Rich Dad Retirement. All Rights Reserved.</p>
                    <p className="mt-2">Disclaimer: We are not financial advisors. Gold involves risk.</p>
                </div>
            </footer>

            {/* Exit Intent Popup */}
            <ExitIntentPopup
                affiliateLink="https://learn.augustapreciousmetals.com/apm-aff-lp-1-v3?apmtrkr_cid=1696&aff_id=5129"
                variant="gold"
            />
        </div>
    );
}
