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
    title: "American Hartford Gold Review 2026 | Fees & Service",
    description: "A balanced review of American Hartford Gold covering their fee structure, buyback program, and how they compare to other Gold IRA companies.",
};

export default function AmericanHartfordGoldReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <div className="flex-grow">
                <header className="bg-slate-50 border-b border-slate-200 py-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#000080]/5 skew-x-12 transform translate-x-20 pointer-events-none"></div>
                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-[#B22234] text-sm font-bold uppercase tracking-wider mb-4">
                                <span className="bg-white px-2 py-1 rounded border border-slate-200">Gold IRA Company Reviews</span>
                                <span>•</span>
                                <span>Updated Jan 2026</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight text-[#000080]">
                                American Hartford Gold Review: <br />
                                <span className="text-slate-500">Fast-Growing Competitor</span>
                            </h1>
                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
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

                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-[#B22234]">
                                <h2>The Honest Take on American Hartford Gold</h2>
                                <p>
                                    <strong>We know you've seen the commercials.</strong> Bill O'Reilly telling you to protect your retirement, promises of free silver, urgent warnings about the economy. After 30 years of working and saving, you've learned to question what you hear on TV. Good. That skepticism has served you well.
                                </p>
                                <p>
                                    <strong>American Hartford Gold</strong> has been around since 2015. They're based in Los Angeles, and they've grown fast—mostly through advertising. The question is: are they actually good, or just well-marketed?
                                </p>
                                <p>
                                    Here's what we found: they're legitimate, they have good customer reviews, and their $10,000 minimum is lower than many competitors. Steve, a retired forklift operator from Nevada, told us: "I didn't have the $50,000 some companies wanted. American Hartford worked with what I had without making me feel small-time."
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

                                <h2>Pricing - They'll Match Competitors</h2>
                                <p>
                                    American Hartford has a "price match guarantee"—if you get a lower quote from another dealer on the same product, they claim they'll match or beat it. In practice, this means you should get quotes from 2-3 companies first, then use them as leverage.
                                </p>
                                <p>
                                    The catch: like most companies in this business, they don't publish prices on their website. You have to call. Some folks find this annoying—they'd rather research on their own time. Annual fees run $150-$225, which is typical for the industry.
                                </p>
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 not-prose my-8">
                                    <h4 className="font-bold text-[#000080] flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5 text-[#B22234]" /> About Price Guarantees
                                    </h4>
                                    <p className="text-sm text-slate-600">
                                        Price-match policies in this industry come with fine print. They typically apply to identical products (same coin, same condition, same quantity) from established competitors. Don't expect them to match prices from unknown dealers or auction sites.
                                    </p>
                                </div>

                                <h2>When You Want to Sell - The Buyback Program</h2>
                                <p>
                                    Here's something worth knowing: American Hartford offers to buy back your metals without charging a separate liquidation fee. When you need to access your money—maybe health issues, maybe helping a grandkid with school—they won't penalize you for selling.
                                </p>
                                <p>
                                    <strong>The reality check:</strong> All dealers make money on the spread between buy and sell prices. No separate fee doesn't mean no cost. But at least they're not hitting you with an extra charge on top.
                                </p>

                                <h2>What Customers Say</h2>
                                <p>
                                    American Hartford keeps an A+ BBB rating with generally positive reviews. People mention responsive reps and smooth account setup.
                                </p>
                                <p>
                                    <strong>One warning:</strong> Some folks complain about persistent follow-up calls after requesting info. If you hate being called repeatedly, be aware. Peggy, a retired cafeteria worker from California, told us: "They called more than I liked, but when I finally told them to slow down, they listened. The actual service was good once we got past that."
                                </p>

                                <h2>Where They Fit In</h2>
                                <p>
                                    American Hartford is in the middle of the pack. They're not the premium choice (<a href="/reviews/augusta-precious-metals">Augusta</a> wins there), and they're not the lowest-minimum option (<a href="/reviews/noble-gold">Noble Gold</a> goes even lower).
                                </p>
                                <p>
                                    Their strength is the price-match policy. If you're the type who gets multiple quotes and isn't afraid to negotiate, American Hartford will work with you on price. That's not nothing.
                                </p>

                                <hr className="my-12 border-slate-200" />

                                <h2>Final Verdict - Good for Negotiators</h2>
                                <p>
                                    <strong>American Hartford Gold</strong> is legitimate and worth including in your comparison shopping. They won't blow you away with education or white-glove service, but they'll compete on price if you push them.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Working folks with $10,000-$50,000 who don't mind negotiating and want a company that will match competitor prices. If you prefer to do your own research and then haggle, this approach works well for you.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center mt-12 shadow-sm relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-[#000080]">Compare Your Options</h3>
                                    <p className="mb-8 text-slate-600 max-w-lg mx-auto">
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
            <StickyMobileCTA companySlug="american-hartford-gold" companyName="American Hartford Gold" />
        </main>
    );
}
