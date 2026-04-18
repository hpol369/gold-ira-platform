import type { Metadata } from "next";
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";
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
        <div className="min-h-screen bg-white text-[#F6F4EF] font-serif">
            {/* Top Warning Bar */}
            <div className="bg-[#DC2626] text-white p-2 text-center font-bold uppercase tracking-wider text-sm">
                <span className="flex items-center justify-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Urgent Message for Accounts Over $50,000
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-[#0C0D18] border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    {/* Headline Group */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#F6F4EF] mb-6 leading-tight uppercase">
                        Is Your Retirement <br />
                        <span className="text-[#D4A94E] underline decoration-4 underline-offset-8">Safe From the $38 Trillion Debt?</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[#D0CCC4] font-sans mb-8 max-w-2xl mx-auto">
                        With tariffs driving prices up and the national debt at record highs, discover the <strong>"IRS Loophole"</strong> smart Americans are using to protect their 401(k) with Tax-Free Gold.
                    </p>

                    {/* Debt Infographic */}
                    <div className="mb-10">
                        <DebtInfographic />
                    </div>

                    {/* CTA Area */}
                    <div className="flex flex-col items-center gap-4">
                        <LeadCaptureButton
                            variant="default"
                            source="lp-us-gold-kit-hero"
                            className="bg-[#DC2626] hover:bg-[#991B1B] text-white text-2xl md:text-3xl font-bold py-6 px-12 rounded-lg shadow-[0_5px_0_rgb(100,0,0)] hover:shadow-[0_2px_0_rgb(100,0,0)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            Get Your Free Gold Kit
                            <ArrowRight className="h-8 w-8" />
                        </LeadCaptureButton>
                        <p className="text-sm text-[#A8A39A] font-sans flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            100% Free & Secure • Zero Obligation
                        </p>
                    </div>
                </div>
            </header>

            {/* As Seen On / Trust */}
            <section className="py-8 bg-[#121423] border-b border-[#2A2D42]">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <p className="text-[#A8A39A] font-sans uppercase tracking-widest text-xs mb-4">Trusted By 50,000+ Americans</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
                        {/* Placeholders for logos (FOX, NEWSMAX, ETC - Text for now) */}
                        <span className="text-2xl font-black text-[#F6F4EF]">FOX NEWS</span>
                        <span className="text-2xl font-black text-[#F6F4EF]">NEWSMAX</span>
                        <span className="text-2xl font-black text-[#F6F4EF]">BEN SHAPIRO</span>
                        <span className="text-2xl font-black text-[#F6F4EF]">FORBES</span>
                    </div>
                </div>
            </section>

            {/* Global Instability Section */}
            <section className="py-12 bg-red-50 border-y border-red-200 font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-[#D4A94E] text-center mb-6 font-serif">2026: A World on Edge</h2>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="bg-[#161828] p-4 rounded-lg border border-red-200">
                            <div className="text-3xl mb-2">🇻🇪</div>
                            <div className="font-bold text-[#F6F4EF]">Venezuela Crisis</div>
                            <div className="text-sm text-[#D0CCC4]">U.S. military intervention. Russia & China condemn action.</div>
                        </div>
                        <div className="bg-[#161828] p-4 rounded-lg border border-red-200">
                            <div className="text-3xl mb-2">🇬🇱</div>
                            <div className="font-bold text-[#F6F4EF]">Greenland Tensions</div>
                            <div className="text-sm text-[#D0CCC4]">NATO allies at odds. 25% tariff threats on Europe.</div>
                        </div>
                        <div className="bg-[#161828] p-4 rounded-lg border border-red-200">
                            <div className="text-3xl mb-2">🇷🇺🇨🇳</div>
                            <div className="font-bold text-[#F6F4EF]">Russia-China Alliance</div>
                            <div className="text-sm text-[#D0CCC4]">Deepening cooperation. De-dollarization accelerating.</div>
                        </div>
                    </div>
                    <p className="text-center mt-6 text-[#D0CCC4] font-semibold">
                        When the world gets chaotic, smart money moves to <span className="text-amber-600">gold</span>.
                    </p>
                </div>
            </section>

            {/* The Warning Content */}
            <section className="py-16 bg-white font-sans text-lg md:text-xl leading-relaxed text-[#F6F4EF]">
                <div className="max-w-3xl mx-auto px-4 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold text-[#F6F4EF] font-serif">$38.45 Trillion in Debt. Who Pays?</h2>
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
                    <ul className="not-prose space-y-4 my-8 bg-[#0C0D18] p-6 rounded-xl border border-[#2A2D42]">
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
            <section className="py-16 bg-[rgba(197,149,46,0.1)] text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-serif">
                        Claim Your Free 2026 Wealth Protection Kit
                    </h2>
                    <LeadCaptureButton
                        variant="default"
                        source="lp-us-gold-kit-footer"
                        className="inline-block bg-[#DC2626] hover:bg-[#991B1B] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Send Me The Free Guide
                    </LeadCaptureButton>
                    <p className="text-[#A8A39A] mt-6 text-sm">
                        Strictly confidential. We respect your privacy.
                    </p>
                </div>
            </section>

            <footer className="bg-slate-900 text-[#D0CCC4] py-8 text-center text-xs">
                <div className="max-w-4xl mx-auto px-4">
                    <p>&copy; 2026 Rich Dad Retirement. All Rights Reserved.</p>
                    <p className="mt-2">Disclaimer: We are not financial advisors. Gold involves risk.</p>
                </div>
            </footer>

            {/* Social Proof Toast */}

            {/* Exit Intent Popup */}
        </div>
    );
}
