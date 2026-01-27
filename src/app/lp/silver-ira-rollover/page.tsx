import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, FileText, Building2, Clock } from "lucide-react";
import ExitIntentPopup from "@/components/lp/ExitIntentPopup";
import SocialProofToast from "@/components/lp/SocialProofToast";

export const metadata: Metadata = {
    title: "Move Your 401(k) to Silver Tax-Free | 2026 Rollover Guide",
    description: "Use the IRS direct rollover rule to move your retirement funds into physical silver without paying taxes or penalties. Free 2026 guide.",
    robots: {
        index: false,
        follow: false,
    },
};

const AFFILIATE_LINK = "https://learn.augustapreciousmetals.com/silver-ira?apmtrkr_cid=1696&aff_id=5129";

export default function SilverIRARolloverPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-serif">
            {/* Top Warning Bar */}
            <div className="bg-[#B22234] text-white p-2 text-center font-bold uppercase tracking-wider text-sm">
                <span className="flex items-center justify-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    IRS Direct Rollover: Zero Taxes, Zero Penalties
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        Move Your 401(k) to Silver <br />
                        <span className="text-[#B22234] underline decoration-4 underline-offset-8">Without Paying Taxes</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-8 max-w-2xl mx-auto">
                        The IRS allows a <strong>direct rollover</strong> from your existing retirement account to a Silver IRA. No taxes. No penalties. No 60-day deadline stress.
                    </p>

                    {/* VSL / Image Area */}
                    <div className="relative aspect-video bg-black rounded-xl shadow-2xl overflow-hidden mb-10 border-4 border-white max-w-3xl mx-auto group cursor-pointer">
                        <Image
                            src="/patriot_silver_hero.png"
                            alt="Silver IRA Rollover Guide"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-[#000080] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                            <span className="bg-black/70 text-white px-4 py-1 rounded text-sm font-sans font-bold">
                                WATCH: The Tax-Free Rollover Explained (4 Min)
                            </span>
                        </div>
                    </div>

                    {/* CTA Area */}
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href={AFFILIATE_LINK}
                            className="bg-[#000080] hover:bg-[#000060] text-white text-2xl md:text-3xl font-bold py-6 px-12 rounded-lg shadow-[0_5px_0_rgb(0,0,80)] hover:shadow-[0_2px_0_rgb(0,0,80)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            Get Your Free Rollover Kit
                            <ArrowRight className="h-8 w-8" />
                        </Link>
                        <p className="text-sm text-slate-500 font-sans flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            Tax-Free Process • IRS Compliant • Zero Obligation
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

            {/* Global Instability Section */}
            <section className="py-12 bg-red-50 border-y border-red-200 font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-[#B22234] text-center mb-6 font-serif">Why Americans Are Moving to Silver in 2026</h2>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg border border-red-200">
                            <div className="text-3xl mb-2">💵</div>
                            <div className="font-bold text-[#000080]">$38 Trillion Debt</div>
                            <div className="text-sm text-slate-600">19% of federal spending goes to interest payments alone.</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-red-200">
                            <div className="text-3xl mb-2">📈</div>
                            <div className="font-bold text-[#000080]">Tariffs = Higher Prices</div>
                            <div className="text-sm text-slate-600">$1,300/household added costs in 2026 from new tariffs.</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-red-200">
                            <div className="text-3xl mb-2">🏭</div>
                            <div className="font-bold text-[#000080]">Industrial Demand</div>
                            <div className="text-sm text-slate-600">Solar, EVs, and electronics need 50%+ of all silver mined.</div>
                        </div>
                    </div>
                    <p className="text-center mt-6 text-slate-700 font-semibold">
                        Silver isn't just precious—it's <span className="text-[#000080]">essential</span>.
                    </p>
                </div>
            </section>

            {/* Direct Rollover Explanation */}
            <section className="py-16 bg-white font-sans text-lg md:text-xl leading-relaxed text-slate-800">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#000080] font-serif mb-6">What Is a Direct Rollover?</h2>
                    <p className="mb-6">
                        A direct rollover (also called a "trustee-to-trustee transfer") moves money straight from your old retirement account to your new Silver IRA. <strong>You never touch the funds.</strong> That's why there's no tax event.
                    </p>

                    <div className="bg-slate-50 border-l-4 border-[#000080] p-6 rounded-r-xl mb-8">
                        <h3 className="text-xl font-bold text-[#000080] mb-4">Direct Rollover vs. Indirect Rollover</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-green-600 mb-2">✓ Direct Rollover</h4>
                                <ul className="text-base space-y-2 text-slate-600">
                                    <li>• Funds go directly to new custodian</li>
                                    <li>• No taxes withheld</li>
                                    <li>• No 60-day deadline</li>
                                    <li>• No risk of missing the window</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-600 mb-2">✗ Indirect Rollover</h4>
                                <ul className="text-base space-y-2 text-slate-600">
                                    <li>• Check sent to YOU</li>
                                    <li>• 20% mandatory tax withholding</li>
                                    <li>• Must deposit within 60 days</li>
                                    <li>• Miss deadline = taxable distribution</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#000080] font-serif mb-6">The 3-Step Process</h3>

                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white p-6 rounded-xl border-2 border-slate-200 text-center">
                            <div className="bg-[#000080] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                            <FileText className="h-8 w-8 text-[#000080] mx-auto mb-3" />
                            <h4 className="font-bold mb-2">Open Your Silver IRA</h4>
                            <p className="text-sm text-slate-600">We help you set up a self-directed IRA with an approved custodian. Takes 15 minutes.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-2 border-slate-200 text-center">
                            <div className="bg-[#000080] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                            <Building2 className="h-8 w-8 text-[#000080] mx-auto mb-3" />
                            <h4 className="font-bold mb-2">Request Direct Transfer</h4>
                            <p className="text-sm text-slate-600">We contact your old custodian and handle the paperwork. You just sign.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-2 border-slate-200 text-center">
                            <div className="bg-[#000080] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                            <Clock className="h-8 w-8 text-[#000080] mx-auto mb-3" />
                            <h4 className="font-bold mb-2">Fund & Buy Silver</h4>
                            <p className="text-sm text-slate-600">Once funds arrive (usually 5-10 business days), choose your IRS-approved silver.</p>
                        </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                        <h4 className="font-bold text-green-700 mb-2">Accounts That Can Roll Over:</h4>
                        <p className="text-slate-700">401(k) • Traditional IRA • Roth IRA • 403(b) • TSP • SEP IRA • SIMPLE IRA • 457(b)</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-[#000080] text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
                        Start Your Tax-Free Rollover Today
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 font-sans">
                        Join 50,000+ Americans who have diversified into physical silver.
                    </p>
                    <Link
                        href={AFFILIATE_LINK}
                        className="inline-block bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Get Your Free Rollover Kit
                    </Link>
                    <p className="text-slate-400 mt-6 text-sm font-sans">
                        100% free. No obligation. Strictly confidential.
                    </p>
                </div>
            </section>

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
                affiliateLink={AFFILIATE_LINK}
                variant="silver"
            />
        </div>
    );
}
