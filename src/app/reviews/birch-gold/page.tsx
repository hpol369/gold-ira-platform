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
    title: "Birch Gold Group Review (2026): Veteran Dealer Analysis",
    description: "An honest review of Birch Gold Group covering their 20+ year history, fee structure, conservative media partnerships, and how they compare to competitors.",
};

export default function BirchGoldReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-slate-900">
                <header className="bg-zinc-900 text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/40 via-zinc-900 to-zinc-900 opacity-80 z-0"></div>
                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-yellow-200 text-sm font-bold uppercase tracking-wider mb-4">
                                <span className="bg-white/10 px-2 py-1 rounded">Gold IRA Company Reviews</span>
                                <span>•</span>
                                <span>Updated Jan 2026</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Birch Gold Group Review: <br />
                                <span className="text-gray-400">20 Years in the Business</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                One of the longest-operating Gold IRA companies still around. Here's what two decades of business history tells us about their service.
                            </p>
                        </div>
                    </Container>
                </header>

                <Container className="py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">

                            <AuthorVerification />

                            <VerdictBox
                                companyName="Birch Gold Group"
                                rating={4.5}
                                isRecommended={true}
                                bottomLine="Birch Gold's longevity in an industry where companies frequently appear and disappear is notable. They offer flat annual fees which can benefit larger accounts. A reasonable choice for investors who value established track records, though compare their pricing with Augusta for premium service."
                                ctaUrl={AFFILIATE_LINKS.birch}
                                ctaText="Learn More"
                            />

                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-secondary">
                                <h2>Company Background</h2>
                                <p>
                                    <strong>Birch Gold Group</strong> was founded in 2003, making them one of the oldest dedicated precious metals IRA companies still operating. Their Burbank, California headquarters has weathered multiple economic cycles, including the 2008 financial crisis and the 2020 pandemic.
                                </p>
                                <p>
                                    Longevity matters in this industry. Many Gold IRA companies are startups that haven't been tested by market downturns. Birch has been around long enough to demonstrate staying power.
                                </p>
                                <p>
                                    The company has become known for its partnerships with conservative media personalities, including Ben Shapiro and Ron Paul. Like Goldco's celebrity endorsements, these are paid partnerships - useful for brand awareness, but not indicators of service quality one way or another.
                                </p>

                                <h3>Pros & Cons</h3>
                                <ProsCons
                                    pros={[
                                        "20+ years of operating history",
                                        "Flat annual fees (benefits larger accounts)",
                                        "A+ BBB rating maintained over time",
                                        "Broad product selection including platinum and palladium"
                                    ]}
                                    cons={[
                                        "Traditional phone-heavy communication style",
                                        "Flat fees less advantageous for smaller accounts",
                                        "Political marketing may not appeal to all investors"
                                    ]}
                                />

                                <h2>Fee Structure</h2>
                                <p>
                                    Birch Gold uses a flat-fee model rather than percentage-based fees. Their combined annual custodian and storage fees typically run around $200 per year, regardless of how much you have invested.
                                </p>
                                <p>
                                    This structure creates an interesting dynamic. On a $200,000 account, $200 in annual fees is a 0.1% expense ratio - excellent value. On a $10,000 account, that same $200 represents 2% annually - not as attractive.
                                </p>
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 not-prose my-8">
                                    <h4 className="font-bold text-white flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5 text-secondary" /> Flat vs. Percentage Fees
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        The flat fee model favors larger accounts significantly. If you're investing $100,000+, Birch's fee structure is competitive. For accounts under $50,000, you might find better value with companies whose fees are proportional to account size or who offer fee waivers.
                                    </p>
                                </div>

                                <h2>The Communication Style</h2>
                                <p>
                                    Birch Gold operates in a traditional manner - expect phone calls. Their process involves speaking with representatives at multiple stages, from initial inquiry through purchase. Some investors appreciate this personal touch; others prefer more self-service options.
                                </p>
                                <p>
                                    Customer reviews generally describe their representatives as knowledgeable rather than pushy. The company emphasizes education about precious metals as part of their process, similar to Augusta's approach though perhaps less formalized.
                                </p>

                                <h2>Product Selection</h2>
                                <p>
                                    One area where Birch differentiates is product variety. Beyond standard gold and silver IRA products, they offer platinum and palladium options. This appeals to investors looking for broader precious metals diversification within their IRA.
                                </p>
                                <p>
                                    Their inventory includes the standard IRA-eligible coins (American Eagles, Canadian Maple Leafs, etc.) as well as bars from approved refiners.
                                </p>

                                <h2>How They Compare</h2>
                                <p>
                                    Birch Gold sits in the established-but-not-premium tier. They lack the white-glove educational experience of <a href="/reviews/augusta-precious-metals">Augusta</a>, but they have more history than newer entrants like <a href="/reviews/noble-gold">Noble Gold</a>.
                                </p>
                                <p>
                                    For investors with $100,000+ accounts who prioritize track record and flat fees, Birch is worth considering. For smaller accounts or those who want a more modern experience, other options may serve you better.
                                </p>

                                <hr className="my-12 border-white/10" />

                                <h2>Final Verdict</h2>
                                <p>
                                    <strong>Birch Gold Group</strong> offers the comfort of established history in an industry where longevity is meaningful. Their flat fee structure rewards larger accounts, and they've maintained solid ratings over two decades.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Investors with $100,000+ who value company longevity and prefer flat annual fees. Less ideal for smaller accounts or those who prefer digital-first service models.
                                </p>
                            </div>

                            <div className="bg-zinc-900 text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Compare Gold IRA Options</h3>
                                    <p className="mb-8 text-zinc-300 max-w-lg mx-auto">
                                        See how Birch Gold's 20-year track record compares to other established companies.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.birch} target="_blank" rel="noopener noreferrer">
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
