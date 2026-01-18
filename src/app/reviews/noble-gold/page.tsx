import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { ProsCons } from "@/components/reviews/ProsCons";
import { AuthorVerification } from "@/components/reviews/AuthorVerification";
import { AFFILIATE_LINKS } from "@/config/affiliates";
import { Info } from "lucide-react";

export const metadata = {
    title: "Noble Gold Review (2026): Best for Small Accounts ($2k Min)?",
    description: "Noble Gold is the only top-tier company with a $2,000 minimum. We review their 'Royal Survival Packs' and Texas storage options.",
};

export default function NobleGoldReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-gray-50/50">
                {/* Header / Hero for Review */}
                <header className="bg-[#1e1e1e] text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/40 via-[#1e1e1e] to-[#1e1e1e] opacity-80 z-0"></div>
                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-amber-200 text-sm font-bold uppercase tracking-wider mb-4">
                                <span className="bg-white/10 px-2 py-1 rounded">Gold IRA Company Reviews</span>
                                <span>•</span>
                                <span>Updated Jan 2026</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Noble Gold Review: <br />
                                <span className="text-gray-400">The "Little Guy" Champion?</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                Most companies ignore you if you have less than $25k. Noble Gold welcomes you with open arms. But are their fees too high for small accounts?
                            </p>
                        </div>
                    </Container>
                </header>

                <Container className="py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content (Left 2/3) */}
                        <article className="lg:col-span-2">

                            {/* Author & Verification */}
                            <AuthorVerification />

                            {/* Verdict Box (Key Takeaway) */}
                            <VerdictBox
                                companyName="Noble Gold"
                                rating={4.8}
                                isRecommended={true}
                                bottomLine="If you have under $25,000, Noble Gold is virtually your ONLY safe option. Their $2,000 minimum is undefeated. They also offer unique 'Survival Packs' for people who want metals at home, not in a bank."
                                ctaUrl={AFFILIATE_LINKS.noble}
                                ctaText="Get Noble's Free Gold Guide"
                            />

                            {/* Main Body Content - TYPOGRAPHY PROSE */}
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <h2>The Executive Summary</h2>
                                <p>
                                    <strong>Noble Gold Investments</strong> plays a different game than the big giants. While Augusta and Goldco fight for the million-dollar acounts, Noble Gold has carved out a niche as the "friendly, accessible" expert.
                                </p>
                                <p>
                                    Their CEO, Collin Plume, focuses on <strong>survival and preparedness</strong>. This is why they are the go-to choice for Preppers.
                                    They are also the only major company that owns their own secure depository in <strong>Texas</strong>, which is a huge selling point for investors who don't trust Delaware or New York banks.
                                </p>

                                <h3>Pros & Cons at a Glance</h3>
                                <ProsCons
                                    pros={[
                                        "Lowest Minimum Investment ($2,000)",
                                        "Royal Survival Packs (Home Delivery)",
                                        "Secure Texas Storage Option",
                                        "Fastest Account Setup (Digital)"
                                    ]}
                                    cons={[
                                        "Higher annual fees relative to small account sizes",
                                        "Newer company (Founded 2016)",
                                        "Website is less polished than competitors"
                                    ]}
                                />

                                <h2>1. The $2,000 Minimum: Why It Matters</h2>
                                <p>
                                    most Gold IRA companies have strict minimums:
                                </p>
                                <ul>
                                    <li>Augusta: $50,000</li>
                                    <li>Goldco: $25,000</li>
                                    <li><strong>Noble Gold: $2,000</strong></li>
                                </ul>
                                <p>
                                    Noble Gold is democratizing access to precious metals. You don't need to be rich to start. However, be aware of the <strong>flat fees</strong>.
                                </p>

                                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 not-prose my-8">
                                    <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5" /> Fee Warning for Small Accounts
                                    </h4>
                                    <p className="text-sm text-amber-800">
                                        Noble charges flat annual fees of ~$250. If you only invest $2,000, that is a 12.5% fee ratio, which is high. We recommend investing at least $10,000 to make the math work in your favor.
                                    </p>
                                </div>

                                <h2>2. "Royal Survival Packs"</h2>
                                <p>
                                    This is Noble's unique product. These are not for your IRA. These are bundles of semi-numismatic coins designed to be <strong>delivered to your doorstep</strong>.
                                </p>
                                <p>
                                    The idea is that in a true economic collapse, you want metals you can hold. Noble curates these packs specifically for liquidity and barterability.
                                </p>

                                <h2>3. Reviews & Complaints</h2>
                                <p>
                                    Noble Gold holds an <strong>A+ Rating with the BBB</strong> and 5.0 Stars on Consumer Affairs.
                                    Complaints are minimal and usually revolve around shipping delays during peak demand, which is common in the industry.
                                </p>

                                <hr className="my-12 border-gray-200" />

                                <h2>Final Verdict: Are They Worth It?</h2>
                                <p>
                                    If you are a <strong>Prepper</strong> or have a <strong>smaller balance</strong> (under $25k), Noble Gold is your #1 choice.
                                    No other trustworthy company will give you the time of day for $5,000. Noble Gold will treat you like a VIP.
                                </p>
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-[#1e1e1e] text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Protect Your Retirement With Noble Gold</h3>
                                    <p className="mb-8 text-gray-300 max-w-lg mx-auto">
                                        Get the "Gold Investment Guide" that explains how to keep your metals in Texas.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.noble} target="_blank" rel="noopener noreferrer">
                                            Download Free Guide
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="relative">
                            <StickyMasterSidebar />
                        </aside>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
