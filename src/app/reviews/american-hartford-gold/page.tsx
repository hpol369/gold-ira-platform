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
    title: "American Hartford Gold Review (2026): Price Match & Fees Revealed",
    description: "American Hartford Gold promises to match any competitor's price. We review their fees, buyback program, and Bill O'Reilly endorsement.",
};

export default function AmericanHartfordGoldReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-gray-50/50">
                {/* Header / Hero for Review */}
                <header className="bg-blue-950 text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-800/40 via-blue-950 to-blue-950 opacity-80 z-0"></div>
                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-blue-200 text-sm font-bold uppercase tracking-wider mb-4">
                                <span className="bg-white/10 px-2 py-1 rounded">Gold IRA Company Reviews</span>
                                <span>•</span>
                                <span>Updated Jan 2026</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                American Hartford Gold Review: <br />
                                <span className="text-gray-400">Low Price Leader?</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                Endorsed by Bill O'Reilly. They claim to have the "Best Price Guarantee". We put that to the test.
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
                                companyName="American Hartford Gold"
                                rating={4.7}
                                isRecommended={true}
                                bottomLine="American Hartford Gold is the 'Value Pick'. Their Price Match Guarantee is legit. If you get a quote from a competitor, show it to AHG and they will beat it. Perfect for cost-conscious investors."
                                ctaUrl={AFFILIATE_LINKS.americanHartford}
                                ctaText="Get AHG's Free Info Kit"
                            />

                            {/* Main Body Content - TYPOGRAPHY PROSE */}
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <h2>The Executive Summary</h2>
                                <p>
                                    <strong>American Hartford Gold (AHG)</strong> is a family-owned company based in Los Angeles. They have grown explosively because they focus on volume rather than high margins.
                                </p>
                                <p>
                                    While they don't have the "White Glove" feel of Augusta, they make up for it with <strong>aggressive pricing</strong>. They are known for waiving fees for up to 3 years if you meet certain deposit thresholds.
                                    (Check our <a href="/best-gold-ira-companies">Fees Comparison Table</a> to see exactly how much you save).
                                </p>

                                <h3>Pros & Cons at a Glance</h3>
                                <ProsCons
                                    pros={[
                                        "Price Match Guarantee (They beat competitors)",
                                        "No Buyback Fees (Free liquidation)",
                                        "Up to $5,000 in free silver",
                                        "Endorsed by Bill O'Reilly"
                                    ]}
                                    cons={[
                                        "Website lacks detailed pricing chart",
                                        "Must call for live gold prices",
                                        "Account setup is slightly slower than Goldco"
                                    ]}
                                />

                                <h2>1. The Price Match Guarantee</h2>
                                <p>
                                    In the gold industry, dealers make money on the "spread" (the difference between spot price and retail price).
                                    AHG promises that if you find a lower advertised price for the same bullion elsewhere, they will match it.
                                    This removes the fear of being "ripped off" on premium pricing.
                                </p>

                                <h2>2. Buyback Program (No Fees)</h2>
                                <p>
                                    When you want to sell your gold to take a distribution, most companies charge a liquidation fee.
                                    <strong>American Hartford Gold does not charge liquidation fees.</strong> They buy back metals at the current market rate. This can save you 1-5% on the exit, which is significant.
                                </p>
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 not-prose my-8">
                                    <h4 className="font-bold text-blue-900 flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5" /> Minimums
                                    </h4>
                                    <p className="text-sm text-blue-800">
                                        AHG has a <strong>$10,000 minimum</strong> for cash purchases and IRAs. This is very accessible compared to the industry standard of $25k-$50k.
                                    </p>
                                </div>

                                <h2>3. Customer Sentiment</h2>
                                <p>
                                    They have a 5-star rating on Trustpilot with over 1,500 reviews.
                                    Clients frequently mention their account representatives by name, indicating a strong culture of personal retention.
                                </p>

                                <hr className="my-12 border-gray-200" />

                                <h2>Final Verdict: Are They Worth It?</h2>
                                <p>
                                    If you are willing to shop around and negotiate, <strong>American Hartford Gold</strong> is your best friend.
                                    Use their Price Match Guarantee to secure the lowest possible entry price for your metals.
                                </p>
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-blue-950 text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Get the Lowest Prince Guarantee</h3>
                                    <p className="mb-8 text-blue-200 max-w-lg mx-auto">
                                        See how much free silver you can get with your order today.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.americanHartford} target="_blank" rel="noopener noreferrer">
                                            Request Free Investment Kit
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
