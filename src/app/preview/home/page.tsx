import { PatriotNavbar } from "@/components/layout/PatriotNavbar";
import { Footer } from "@/components/layout/Footer"; // Footer is okay to stay dark
import { AlertTriangle, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

/* 
  PREVIEW: HOME PAGE 
  Reconstructed with Patriot classes.
*/

export default function PreviewHome() {
    return (
        <main className="min-h-screen flex flex-col">
            <PatriotNavbar />

            {/* HERO SECTION */}
            <header className="relative py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Copy Side */}
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 text-[#B22234] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-8">
                                <AlertTriangle className="h-3 w-3" />
                                Warning: Retirement Savings At Risk
                            </div>

                            <h1 className="text-5xl md:text-7xl font-serif font-black text-[#000080] leading-[1.1] mb-6">
                                Protect Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B22234] to-red-600 decoration-[#B22234] underline decoration-4 underline-offset-8">Retirement.</span>
                            </h1>

                            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                                The dollar is losing value every day. Discover the <strong>"IRS Loophole"</strong> that allows you to move your 401(k) into physical gold—tax-free and penalty-free.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-[#000080] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-900/20 hover:bg-[#000060] transition-all flex items-center justify-center gap-2">
                                    Check Eligibility
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Visual Side */}
                        <div className="relative hidden md:flex justify-center">
                            <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-200 max-w-sm rotate-3 transform hover:rotate-0 transition-all duration-500">
                                <div className="bg-slate-100 rounded-lg p-8 text-center border-2 border-slate-200 border-dashed">
                                    <div className="text-[#000080] font-black text-2xl uppercase mb-2">2026 Gold Guide</div>
                                    <div className="text-sm text-slate-500 mb-4">Official IRS Loophole Documentation</div>
                                    <div className="bg-[#B22234] h-1 w-20 mx-auto rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* TRUST BAR */}
            <section className="py-10 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">As Seen On</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale font-black text-2xl text-slate-300">
                        <span>FOX BUSINESS</span>
                        <span>CNBC</span>
                        <span>BLOOMBERG</span>
                        <span>FORBES</span>
                    </div>
                </div>
            </section>

            {/* VALUE PROPS GRID */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-[#000080] mb-4">Why Smart Money is Moving to Gold</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">In times of economic uncertainty, paper assets crumble. Gold has maintained its purchasing power for 5,000 years.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Tax-Free Growth", desc: "Grow your wealth without paying taxes until you withdraw." },
                            { title: "Physical Ownership", desc: "Real bars and coins you can hold. Not digital numbers." },
                            { title: "Inflation Hedge", desc: "When the dollar drops, gold historically rises." }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-[#000080]/30 hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-[#000080] rounded-lg mb-6 flex items-center justify-center">
                                    <CheckCircle2 className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-bold text-xl text-[#000080] mb-3">{item.title}</h3>
                                <p className="text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
