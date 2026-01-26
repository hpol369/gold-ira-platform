import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { ProsCons } from "@/components/reviews/ProsCons";
import { AuthorVerification } from "@/components/reviews/AuthorVerification";
import { StickyMobileCTA } from "@/components/cta/StickyMobileCTA";
import { AFFILIATE_LINKS } from "@/config/affiliates";
import { Info } from "lucide-react";

export const metadata = {
    title: "Orion Metal Exchange Review 2026 | Fees & Ratings",
    description: "Orion Metal Exchange review for 2026. The lowest minimum in the industry at $5,000. We analyze their fees, real-time pricing, and customer reviews.",
};

export default function OrionMetalExchangeReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-slate-900">
                {/* Header / Hero for Review */}
                <header className="bg-indigo-950 text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-800/40 via-indigo-950 to-indigo-950 opacity-80 z-0"></div>
                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-indigo-200 text-sm font-bold uppercase tracking-wider mb-4">
                                <span className="bg-white/10 px-2 py-1 rounded">Gold IRA Company Reviews</span>
                                <span>•</span>
                                <span>Updated Jan 2026</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Orion Metal Exchange Review: <br />
                                <span className="text-gray-400">The Small Investor's Friend?</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                With the lowest minimum in the industry at just $5,000, Orion Metal Exchange has opened doors for investors who don't have six figures. But does a lower barrier mean lower quality?
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
                                companyName="Orion Metal Exchange"
                                rating={4.4}
                                isRecommended={true}
                                bottomLine="Orion Metal Exchange is the best option for investors starting with smaller amounts. Their $5,000 minimum, transparent real-time pricing, and buy-back program make them ideal for first-time gold IRA investors. Not the best for large portfolios, but excellent value for entry-level accounts."
                                ctaUrl={AFFILIATE_LINKS.noble}
                                ctaText="Compare With Noble Gold"
                            />

                            {/* Main Body Content - TYPOGRAPHY PROSE */}
                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-secondary">
                                <h2>The Executive Summary</h2>
                                <p>
                                    <strong>Orion Metal Exchange</strong> has built a reputation as the "small investor's friend" in the Gold IRA space. While Augusta requires $50,000 and Goldco asks for $25,000, Orion welcomes you with just <strong>$5,000</strong>—the lowest entry point in the industry.
                                </p>
                                <p>
                                    What sets them apart? <strong>Transparent pricing</strong>. Their website shows real-time metal prices so you can see exactly what premium you're paying over spot. No calling to "get a quote" and enduring a sales pitch first.
                                </p>

                                <h3>Pros & Cons at a Glance</h3>
                                <ProsCons
                                    pros={[
                                        "Lowest $5,000 minimum in the industry",
                                        "Real-time transparent pricing on website",
                                        "Buy-back program included",
                                        "A+ BBB Rating"
                                    ]}
                                    cons={[
                                        "Newer company compared to giants",
                                        "Website can feel cluttered",
                                        "Storage fees apply separately"
                                    ]}
                                />

                                <h2>1. The $5,000 Minimum: Why It Matters</h2>
                                <p>
                                    Most Gold IRA companies have strict minimums that lock out smaller investors:
                                </p>
                                <ul>
                                    <li>Augusta Precious Metals: $50,000</li>
                                    <li>Goldco: $25,000</li>
                                    <li>Noble Gold: $20,000</li>
                                    <li><strong>Orion Metal Exchange: $5,000</strong></li>
                                </ul>
                                <p>
                                    This makes Orion accessible to younger investors, those testing the waters, or anyone who wants to start small and add over time. You don't need to be rich to start protecting your retirement with gold.
                                </p>

                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 not-prose my-8">
                                    <h4 className="font-bold text-white flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5 text-secondary" /> Fee Consideration
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        While the minimum is low, remember that flat annual fees ($150-$250) represent a higher percentage of smaller accounts. We recommend investing at least $10,000 to make the fee math work in your favor long-term.
                                    </p>
                                </div>

                                <h2>2. Transparent Pricing Model</h2>
                                <p>
                                    In an industry known for hiding the ball on fees, Orion's transparency is refreshing. Their website displays real-time metal pricing so you can see exactly what premium you're paying over spot price before you even call.
                                </p>
                                <p>
                                    They also offer a <strong>buy-back program</strong>, which matters more than most people realize. When it's time to liquidate, you want a dealer who'll make a fair offer rather than lowballing you.
                                </p>

                                <h2>3. Customer Reviews & Complaints</h2>
                                <p>
                                    Orion Metal Exchange holds an A+ BBB rating with relatively few complaints. Customer reviews frequently mention the straightforward process and helpful representatives. The company responds to feedback publicly when concerns arise.
                                </p>
                                <p>
                                    The majority of negative feedback relates to shipping times during high-demand periods (like when gold prices spike). This is an industry-wide issue, not unique to Orion.
                                </p>

                                <hr className="my-12 border-white/10" />

                                <h2>Final Verdict: Are They Worth It?</h2>
                                <p>
                                    <strong>Orion Metal Exchange</strong> is the best choice for investors with under $20,000 to invest. Their combination of low minimums, transparent pricing, and solid customer service makes them ideal for getting started with precious metals.
                                </p>
                                <p>
                                    <strong>Best for:</strong> First-time gold IRA investors, those with $5,000-$20,000 to invest, and anyone who values upfront pricing over hand-holding service.
                                </p>
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-indigo-950 text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Ready to Start Your Gold IRA?</h3>
                                    <p className="mb-8 text-indigo-200 max-w-lg mx-auto">
                                        Compare Orion with other top-rated companies to find your best fit.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.noble} target="_blank" rel="noopener noreferrer">
                                            Compare Top Companies
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
            <StickyMobileCTA companySlug="orion-metal-exchange" companyName="Orion Metal Exchange" />
        </main>
    );
}
