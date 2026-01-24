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
    title: "American Hartford Gold Review (2026): Honest Analysis of Fees & Service",
    description: "A balanced review of American Hartford Gold covering their fee structure, buyback program, and how they compare to other Gold IRA companies.",
};

export default function AmericanHartfordGoldReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-slate-900">
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
                                <span className="text-gray-400">Fast-Growing Competitor</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                American Hartford has grown rapidly through TV advertising and celebrity endorsements. Here's our objective look at what they offer and who they're suited for.
                            </p>
                        </div>
                    </Container>
                </header>

                <Container className="py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">

                            <AuthorVerification />

                            <VerdictBox
                                companyName="American Hartford Gold"
                                rating={4.4}
                                isRecommended={true}
                                bottomLine="American Hartford Gold is a legitimate option with good customer reviews. They've carved out space as a value-focused alternative to premium providers. Worth getting a quote from, especially if you're comparing prices across multiple companies."
                                ctaUrl={AFFILIATE_LINKS.americanHartford}
                                ctaText="Learn More"
                            />

                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-secondary">
                                <h2>Company Overview</h2>
                                <p>
                                    <strong>American Hartford Gold</strong> is a Los Angeles-based precious metals dealer founded in 2015. They've grown significantly through television advertising and partnerships with conservative media personalities like Bill O'Reilly.
                                </p>
                                <p>
                                    The company positions itself as offering competitive pricing and markets heavily to first-time precious metals investors. They handle both IRA rollovers and direct cash purchases.
                                </p>
                                <p>
                                    What's notable about American Hartford is their accessibility - they maintain a lower minimum investment than companies like Augusta or Goldco, making them an option for investors who don't meet higher thresholds elsewhere.
                                </p>

                                <h3>Pros & Cons</h3>
                                <ProsCons
                                    pros={[
                                        "Lower minimum investment ($10,000)",
                                        "Price-match policy (bring competitor quotes)",
                                        "Buyback program with no liquidation fees",
                                        "Good BBB rating and customer reviews"
                                    ]}
                                    cons={[
                                        "Pricing requires phone conversation (not posted online)",
                                        "Heavy reliance on promotional marketing",
                                        "Less emphasis on investor education than Augusta"
                                    ]}
                                />

                                <h2>Pricing and Fee Structure</h2>
                                <p>
                                    American Hartford advertises a "price match guarantee" - if you bring a lower quote from another dealer on the same product, they'll match or beat it. In practice, this works as you'd expect: get written quotes from competitors and use them as negotiating leverage.
                                </p>
                                <p>
                                    Like most Gold IRA companies, they don't publish specific pricing on their website. You'll need to call to get current prices on coins and bars. Annual storage and custodian fees are in the typical industry range of $150-$225.
                                </p>
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 not-prose my-8">
                                    <h4 className="font-bold text-white flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5 text-secondary" /> About Price Guarantees
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        Price-match policies in this industry come with fine print. They typically apply to identical products (same coin, same condition, same quantity) from established competitors. Don't expect them to match prices from unknown dealers or auction sites.
                                    </p>
                                </div>

                                <h2>The Buyback Program</h2>
                                <p>
                                    One area where American Hartford does well is their buyback program. When you eventually want to liquidate metals from your IRA, they offer to repurchase at competitive rates without charging a separate liquidation fee.
                                </p>
                                <p>
                                    This can save money on the exit, though keep in mind all dealers make money on the spread between buy and sell prices regardless of whether there's a separate "fee" line item.
                                </p>

                                <h2>Customer Experience</h2>
                                <p>
                                    American Hartford maintains an A+ BBB rating and generally positive reviews across platforms. Customer feedback mentions responsive representatives and smooth account setup processes.
                                </p>
                                <p>
                                    Some reviews mention aggressive follow-up calls after requesting information, which seems to be a common industry practice but worth knowing if you prefer a lower-pressure experience.
                                </p>

                                <h2>How They Compare</h2>
                                <p>
                                    American Hartford occupies the middle ground in the Gold IRA market. They're not the premium choice (<a href="/reviews/augusta-precious-metals">Augusta</a> wins there with their education-first approach), and they're not the lowest-minimum option (<a href="/reviews/noble-gold">Noble Gold</a> goes lower).
                                </p>
                                <p>
                                    Their strength is accessibility combined with the price-match policy. If you're the type of investor who gets multiple quotes and negotiates, American Hartford's willingness to compete on price can work in your favor.
                                </p>

                                <hr className="my-12 border-white/10" />

                                <h2>Final Verdict</h2>
                                <p>
                                    <strong>American Hartford Gold</strong> is a legitimate player in the Gold IRA space with a focus on competitive pricing. They're worth including in your comparison shopping, especially if you have $10,000-$50,000 to invest and want to negotiate.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Price-conscious investors who are comfortable negotiating and want a lower minimum than premium providers require. Consider comparing them alongside Noble Gold for mid-range accounts.
                                </p>
                            </div>

                            <div className="bg-blue-950 text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Compare Your Options</h3>
                                    <p className="mb-8 text-blue-200 max-w-lg mx-auto">
                                        See how American Hartford stacks up against other Gold IRA companies.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.americanHartford} target="_blank" rel="noopener noreferrer">
                                            Request Information
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
