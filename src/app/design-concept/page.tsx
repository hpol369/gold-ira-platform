import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, Star, Menu, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* 
  PATRIOT DESIGN CONCEPT (PREVIEW)
  --------------------------------
  Theme: "The Institutional Standard"
  Colors: Navy (#000080), White (#FFFFFF), Warning Red (#B22234), Slate text.
  Vibe: Wall Street Journal meets Government Warning.
*/

export const metadata = {
    title: "Patriot Design Concept | Rich Dad Retirement",
    robots: { index: false, follow: false },
};

export default function DesignConceptPage() {
    return (
        <div className="min-h-screen bg-[#0C0D18] text-[#F6F4EF] font-sans selection:bg-[rgba(197,149,46,0.1)] selection:text-white">

            {/* 
        1. TOP BAR (Trust & Contact) 
        Replaces the "Ticker" with a solid institutional bar.
      */}
            <div className="bg-[#121423] border-b border-[#2A2D42] py-2 px-4 text-xs md:text-sm font-medium text-[#D0CCC4]">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Market Alert: Gold Hits Record Highs
                        </span>
                        <span className="hidden md:inline text-[#A8A39A]">|</span>
                        <span className="hidden md:inline">Updated: January 2026</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="hover:text-[#F6F4EF] underline">Member Login</Link>
                    </div>
                </div>
            </div>

            {/* 
        2. NAVBAR (Patriot Style)
        Clean White, Navy Logo, Clear Typography.
      */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#2A2D42] shadow-sm">
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="bg-[rgba(197,149,46,0.1)] text-white p-2 rounded-lg font-serif font-black text-xl tracking-tighter">
                            RD
                        </div>
                        <div className="leading-tight">
                            <div className="font-serif font-bold text-[#F6F4EF] text-lg tracking-tight">RICH DAD</div>
                            <div className="text-[10px] font-bold text-[#D4A94E] tracking-widest uppercase">Retirement</div>
                        </div>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-[#D0CCC4]">
                        <Link href="#" className="text-[#F6F4EF]">Market News</Link>
                        <Link href="#" className="hover:text-[#F6F4EF] transition-colors">Gold IRA Reviews</Link>
                        <Link href="#" className="hover:text-[#F6F4EF] transition-colors">Tax-Free Loopholes</Link>
                        <Link href="#" className="hover:text-[#F6F4EF] transition-colors">Learn</Link>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:flex bg-[#DC2626] hover:bg-[#991B1B] text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-red-900/10 transition-all transform hover:scale-105">
                            Get Free Gold Kit
                        </button>
                        <Menu className="md:hidden h-6 w-6 text-[#D0CCC4]" />
                    </div>
                </div>
            </nav>

            {/* 
        3. HERO SECTION (The Big Shift)
        From "Dark/Video" to "White/Type/Urgency".
      */}
            <header className="relative py-20 bg-[#0C0D18] border-b border-[#2A2D42] overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[rgba(197,149,46,0.06)] skew-x-12 transform translate-x-20 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Copy Side */}
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 text-[#D4A94E] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-8">
                                <AlertTriangle className="h-3 w-3" />
                                Warning: Retirement Savings At Risk
                            </div>

                            <h1 className="text-5xl md:text-7xl font-serif font-black text-[#F6F4EF] leading-[1.1] mb-6">
                                Protect Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B22234] to-red-600 decoration-[#B22234] underline decoration-4 underline-offset-8">Retirement.</span>
                            </h1>

                            <p className="text-xl text-[#D0CCC4] mb-8 leading-relaxed max-w-lg">
                                The dollar is losing value every single day. Discover the <strong>"IRS Loophole"</strong> that allows you to move your 401(k) into physical gold—tax-free and penalty-free.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-[rgba(197,149,46,0.1)] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-900/20 hover:bg-[#000060] transition-all flex items-center justify-center gap-2">
                                    Check Eligibility
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                                <button className="px-8 py-4 rounded-xl font-bold text-[#F6F4EF] border-2 border-[#000080]/10 hover:border-[rgba(197,149,46,0.55)]/30 hover:bg-[#1E2134] transition-all">
                                    Read The Guide
                                </button>
                            </div>

                            <div className="mt-8 flex items-center gap-4 text-sm text-[#A8A39A] font-medium">
                                <span className="flex items-center gap-1.5">
                                    <ShieldCheck className="h-4 w-4 text-emerald-600" /> 100% Tax-Free
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Star className="h-4 w-4 text-[#D4A94E] fill-[#D4A94E]" /> 4.9/5 Rating
                                </span>
                            </div>
                        </div>

                        {/* Visual Side (Mockup) */}
                        <div className="relative hidden md:block">
                            <div className="bg-[#161828] p-2 rounded-2xl shadow-2xl border border-[#2A2D42] transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="aspect-[4/3] bg-[#121423] rounded-xl flex items-center justify-center border border-[#2A2D42] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#000080] to-slate-900 opacity-90"></div>
                                    {/* Simulating the Gold Kit Cover */}
                                    <div className="relative text-center text-white p-8">
                                        <div className="font-serif font-bold text-4xl mb-2">2026</div>
                                        <div className="font-sans font-black text-2xl tracking-widest uppercase mb-4 text-[#d4af37]">Gold Guide</div>
                                        <div className="w-16 h-1 bg-[#DC2626] mx-auto"></div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-[#161828] p-4 rounded-xl shadow-xl border border-[#2A2D42] flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-[#A8A39A] font-bold uppercase">Sent Today</div>
                                    <div className="font-bold text-[#F6F4EF]">142 Kits Claimed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 
        4. TRUST BAR (Clean & Corporate)
      */}
            <section className="py-10 bg-[#161828] border-b border-[#2A2D42]">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-xs font-bold text-[#A8A39A] uppercase tracking-widest mb-6">Featured In Major Financial Networks</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-2xl font-black text-[#F6F4EF]">FORBES</span>
                        <span className="text-2xl font-black text-[#F6F4EF]">BLOOMBERG</span>
                        <span className="text-2xl font-black text-[#F6F4EF]">MARKETWATCH</span>
                        <span className="text-2xl font-black text-[#F6F4EF]">YAHOO! FINANCE</span>
                    </div>
                </div>
            </section>

            {/* 
        5. "WHY" SECTION (Readability Focus)
      */}
            <section className="py-24 bg-[#0C0D18]">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-center font-serif font-bold text-4xl text-[#F6F4EF] mb-8">
                        Is Your Retirement "Safe" in Paper Money?
                    </h2>
                    <div className="prose prose-lg prose-slate mx-auto">
                        <p>
                            Most Americans believe their 401(k) is safe. But when you look at the <strong>$34 Trillion National Debt</strong> and rising inflation, the truth becomes clear: The dollar is losing its buying power.
                        </p>
                        <p>
                            Historically, when paper currencies fail, investors flock to <strong>Gold and Silver</strong>. It's the only asset class that has zero counterparty risk.
                        </p>
                        <div className="bg-[#eff6ff] border-l-4 border-[#000080] p-6 not-prose rounded-r-xl my-8">
                            <h3 className="font-bold text-[#F6F4EF] text-xl mb-2">The Rich Dad Philosophy</h3>
                            <p className="text-[#D0CCC4]">
                                "Savers are losers. Real money is gold and silver. Fake money is the US Dollar." — <em>Robert Kiyosaki</em>
                            </p>
                        </div>
                        <p>
                            We help you legally move your retirement savings out of the volatility of the stock market and into the stability of physical precious metals.
                        </p>
                    </div>
                </div>
            </section>

            {/* 
        6. GRID PREVIEW (Cards)
      */}
            <section className="py-24 bg-[#0C0D18] border-t border-[#2A2D42]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-[#161828] p-8 rounded-2xl shadow-sm border border-[#2A2D42] hover:shadow-xl hover:border-[rgba(197,149,46,0.55)]/30 transition-all group">
                            <div className="w-12 h-12 bg-[rgba(197,149,46,0.08)] rounded-lg flex items-center justify-center text-[#F6F4EF] mb-6 group-hover:bg-[rgba(197,149,46,0.1)] group-hover:text-white transition-colors">
                                <ArrowRight className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-xl text-[#F6F4EF] mb-3">Rollover Guide</h3>
                            <p className="text-[#D0CCC4] mb-6">Step-by-step instructions on moving your 401k to Gold tax-free.</p>
                            <span className="text-[#D4A94E] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                Start Rollover <ArrowRight className="h-4 w-4" />
                            </span>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#161828] p-8 rounded-2xl shadow-sm border border-[#2A2D42] hover:shadow-xl hover:border-[rgba(197,149,46,0.55)]/30 transition-all group">
                            <div className="w-12 h-12 bg-[rgba(197,149,46,0.08)] rounded-lg flex items-center justify-center text-[#F6F4EF] mb-6 group-hover:bg-[rgba(197,149,46,0.1)] group-hover:text-white transition-colors">
                                <Star className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-xl text-[#F6F4EF] mb-3">Company Reviews</h3>
                            <p className="text-[#D0CCC4] mb-6">We've audited 15+ Gold IRA companies. See who passed our test.</p>
                            <span className="text-[#D4A94E] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                Compare Companies <ArrowRight className="h-4 w-4" />
                            </span>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#161828] p-8 rounded-2xl shadow-sm border border-[#2A2D42] hover:shadow-xl hover:border-[rgba(197,149,46,0.55)]/30 transition-all group">
                            <div className="w-12 h-12 bg-[rgba(197,149,46,0.08)] rounded-lg flex items-center justify-center text-[#F6F4EF] mb-6 group-hover:bg-[rgba(197,149,46,0.1)] group-hover:text-white transition-colors">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-xl text-[#F6F4EF] mb-3">Market Alerts</h3>
                            <p className="text-[#D0CCC4] mb-6">Stay ahead of the crash with our daily precious metals briefing.</p>
                            <span className="text-[#D4A94E] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                Read News <ArrowRight className="h-4 w-4" />
                            </span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
