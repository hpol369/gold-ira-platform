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
    title: "Money Metals Exchange Review (2026): Starter Packs & Investopedia's Top Pick",
    description: "Money Metals Exchange review. Named 'Best Overall' by Investopedia. We analyze their famous Starter Portfolios, pricing, and whether they're good for IRAs.",
};

export default function MoneyMetalsExchangePage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-gray-50/50">
                {/* Header / Hero for Review */}
                <header className="bg-orange-950 text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-800/40 via-orange-950 to-orange-950 opacity-80 z-0"></div>
                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-orange-200 text-sm font-bold uppercase tracking-wider mb-4">
                                <span className="bg-white/10 px-2 py-1 rounded">Gold IRA Company Reviews</span>
                                <span>•</span>
                                <span>Updated Jan 2026</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Money Metals Exchange Review: <br />
                                <span className="text-gray-400">Investopedia's "Best Overall"?</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                Named "Best Overall" by Investopedia and famous for their Starter Portfolios. But they're primarily a direct dealer—how do they handle Gold IRAs?
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
                                companyName="Money Metals Exchange"
                                rating={4.5}
                                isRecommended={true}
                                bottomLine="Money Metals Exchange excels at direct bullion sales with competitive pricing and no minimums. Their famous 'Starter Portfolios' are perfect for beginners. However, IRA services feel secondary to their core business—if IRAs are your main goal, consider a more IRA-focused dealer."
                                ctaUrl={AFFILIATE_LINKS.noble}
                                ctaText="Compare IRA Specialists"
                            />

                            {/* Main Body Content - TYPOGRAPHY PROSE */}
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <h2>The Executive Summary</h2>
                                <p>
                                    <strong>Money Metals Exchange</strong> made headlines when Investopedia named them "Best Overall" precious metals dealer. Their claim to fame? Low-cost Starter Portfolios that let anyone get into gold and silver without a massive upfront investment.
                                </p>
                                <p>
                                    But here's the catch: they're primarily a <strong>direct dealer</strong>, not an IRA specialist. They facilitate IRAs through partner custodians, but it's not their core business. This matters depending on what you're looking for.
                                </p>

                                <h3>Pros & Cons at a Glance</h3>
                                <ProsCons
                                    pros={[
                                        "No minimum for direct purchases",
                                        "Famous 'Starter Portfolios' for beginners",
                                        "Voted 'Best Overall' by Investopedia",
                                        "Transparent, competitive pricing"
                                    ]}
                                    cons={[
                                        "IRA services are secondary focus",
                                        "Shipping costs on small orders",
                                        "Storage fees separate from purchase"
                                    ]}
                                />

                                <h2>1. The Famous "Starter Portfolios"</h2>
                                <p>
                                    Money Metals Exchange built their reputation on <strong>Starter Portfolios</strong>—pre-assembled collections of gold, silver, platinum, and palladium that let first-time buyers diversify across multiple metals in a single purchase.
                                </p>
                                <p>
                                    These packs range from a few hundred dollars to several thousand. The appeal is obvious: instead of agonizing over which coins or bars to buy, you get a curated mix. They update these portfolios based on market conditions.
                                </p>
                                <p>
                                    For new investors, Starter Portfolios remove the paralysis of choice. For experienced stackers, they might seem limiting. Either way, they've helped Money Metals attract customers who'd otherwise feel overwhelmed.
                                </p>

                                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 not-prose my-8">
                                    <h4 className="font-bold text-orange-900 flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5" /> IRA vs. Direct Purchase
                                    </h4>
                                    <p className="text-sm text-orange-800">
                                        Money Metals is better known for direct purchases (you receive metals at home) than IRAs (metals stored in depository). If your primary goal is a retirement account rollover, compare with IRA-focused companies like Augusta or Noble Gold.
                                    </p>
                                </div>

                                <h2>2. Pricing & Fees</h2>
                                <p>
                                    For direct purchases, Money Metals has <strong>no minimum</strong>—you can buy a single silver coin if you want. Pricing is transparent and competitive, with real-time spot price tracking on their website.
                                </p>
                                <p>
                                    For IRA services, minimum requirements vary based on the custodian they partner with. Expect standard IRA fees: setup, annual maintenance, and storage charges.
                                </p>

                                <h2>3. Customer Reviews</h2>
                                <p>
                                    Money Metals Exchange holds an A+ BBB rating and consistently receives praise for pricing transparency and fast shipping. The Investopedia recognition wasn't accidental—they've earned a loyal customer base.
                                </p>
                                <p>
                                    Complaints typically focus on shipping costs for small orders (no minimum means some people order small and balk at shipping fees) and occasional delays during high-demand periods.
                                </p>

                                <hr className="my-12 border-gray-200" />

                                <h2>Final Verdict: Are They Worth It?</h2>
                                <p>
                                    <strong>Money Metals Exchange</strong> is excellent for direct bullion purchases with their Starter Portfolios and competitive pricing. For Gold IRAs specifically, they can facilitate the process but IRA services aren't their specialty.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Direct bullion buyers, beginners who want Starter Portfolios, and cost-conscious investors. For dedicated IRA rollovers, consider IRA-focused dealers instead.
                                </p>
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-orange-950 text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Looking for an IRA Specialist?</h3>
                                    <p className="mb-8 text-orange-200 max-w-lg mx-auto">
                                        Compare companies that specialize in Gold IRA rollovers.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">
                                            See Our Top IRA Picks
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
