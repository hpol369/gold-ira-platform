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
    title: "Goldco Review (2026): Celebrity Hype vs Reality | Fee Analysis",
    description: "An honest look at Goldco - the most-advertised Gold IRA company. We examine their fees, the celebrity endorsements, and who they're actually best suited for.",
};

export default function GoldcoReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-slate-900">
                <header className="bg-[#1e1e1e] text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#1e1e1e] to-[#1e1e1e] opacity-80 z-0"></div>
                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-blue-200 text-sm font-bold uppercase tracking-wider mb-4">
                                <span className="bg-white/10 px-2 py-1 rounded">Gold IRA Company Reviews</span>
                                <span>•</span>
                                <span>Updated Jan 2026</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Goldco Review: <br />
                                <span className="text-gray-400">Marketing Giant or Solid Choice?</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                You've seen their ads everywhere. Sean Hannity, Chuck Norris, countless YouTube commercials. But does their service justify the hype? Here's what we found.
                            </p>
                        </div>
                    </Container>
                </header>

                <Container className="py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">

                            <AuthorVerification />

                            <VerdictBox
                                companyName="Goldco"
                                rating={4.5}
                                isRecommended={true}
                                bottomLine="Goldco is a legitimate major player with good customer service. Their marketing budget is enormous, which means they're everywhere - but that doesn't make them the best value. Good choice for investors who want a well-known name, but compare with Augusta or Noble Gold first."
                                ctaUrl={AFFILIATE_LINKS.goldco}
                                ctaText="Request Information"
                            />

                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-secondary">
                                <h2>Our Take on Goldco</h2>
                                <p>
                                    <strong>Goldco</strong> has become almost synonymous with Gold IRAs, at least in terms of brand recognition. Their advertising is everywhere - conservative talk radio, podcasts, YouTube pre-roll ads, and late-night television. They've processed billions in precious metals transactions since their founding in 2006.
                                </p>
                                <p>
                                    The question is whether all that marketing translates to a better deal for investors. After researching their fee structure, customer reviews, and comparing them to competitors, here's what stands out.
                                </p>
                                <p>
                                    Goldco does offer solid customer service and a streamlined rollover process. Their representatives are generally helpful and patient, especially with first-time precious metals investors. Where they fall slightly short is in fee transparency - you need to speak with a representative to get specific pricing on products.
                                </p>

                                <h3>Pros & Cons at a Glance</h3>
                                <ProsCons
                                    pros={[
                                        "Established company with long track record",
                                        "Helpful customer service representatives",
                                        "Buyback program for when you need to sell",
                                        "A+ BBB rating with solid review scores"
                                    ]}
                                    cons={[
                                        "$25,000 minimum may exclude smaller investors",
                                        "Pricing not disclosed upfront (must call)",
                                        "Heavy advertising means higher overhead costs",
                                        "Some reports of aggressive follow-up calls"
                                    ]}
                                />

                                <h2>The Celebrity Endorsement Question</h2>
                                <p>
                                    Let's address the elephant in the room. Goldco's celebrity endorsements are paid advertisements. Sean Hannity, Chuck Norris, and Ben Stein are brand ambassadors, not financial advisors vouching for the company from personal experience.
                                </p>
                                <p>
                                    This isn't necessarily a bad thing - it shows Goldco has resources and staying power. But your investment decision shouldn't be based on whose face is on the ad. It should be based on fees, service quality, and whether the company meets your specific needs.
                                </p>

                                <h2>Fee Structure</h2>
                                <p>
                                    Goldco's fee structure is fairly standard for the industry, though getting exact numbers requires a phone conversation.
                                </p>
                                <ul>
                                    <li><strong>Setup Fee:</strong> Approximately $50 one-time</li>
                                    <li><strong>Annual Fees:</strong> $175-$225 combined (custodian + storage)</li>
                                    <li><strong>Minimum Investment:</strong> $25,000</li>
                                </ul>
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 not-prose my-8">
                                    <h4 className="font-bold text-white flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5 text-secondary" /> About Silver Bonuses
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        Goldco frequently advertises "free silver" bonuses. These promotions change regularly and typically require larger investment amounts. The silver is real, but remember that promotional giveaways are built into their pricing structure somewhere. Always compare the total cost of ownership, not just promotional offers.
                                    </p>
                                </div>

                                <h2>The Rollover Experience</h2>
                                <p>
                                    Where Goldco genuinely excels is in making the rollover process painless. Their team handles most of the paperwork and will coordinate directly with your existing 401(k) or IRA provider. For investors who are intimidated by the logistics of moving retirement funds, this hand-holding is valuable.
                                </p>
                                <p>
                                    The process typically takes 2-3 weeks and Goldco's representatives stay in communication throughout. They're experienced with the common custodians and know how to navigate potential delays.
                                </p>

                                <h2>How They Compare</h2>
                                <p>
                                    Goldco is a solid middle-of-the-road option. They're not the cheapest (see <a href="/reviews/noble-gold">Noble Gold</a> for lower minimums), and they're not quite as premium as <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a> in terms of educational approach. They occupy a comfortable space for investors who want a recognizable brand with decent service.
                                </p>
                                <p>
                                    If you have $50,000 or more to invest, you might find better value with Augusta's fee-waiver programs. If you have less than $25,000, Goldco won't work for you anyway - consider Noble Gold or <a href="/reviews/orion-metal-exchange">Orion Metal Exchange</a> instead.
                                </p>

                                <hr className="my-12 border-white/10" />

                                <h2>Final Verdict</h2>
                                <p>
                                    <strong>Goldco</strong> is a legitimate, well-established company that does what it advertises. Their customer service is good, their track record is solid, and they make the rollover process relatively painless. Just don't assume that being the most-advertised means being the best value.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Investors with $25k-$50k who want a well-known brand and appreciate guided service. Less ideal for bargain hunters or those who prefer to research pricing independently before talking to sales.
                                </p>
                            </div>

                            <div className="bg-[#1e1e1e] text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Want to Compare Options?</h3>
                                    <p className="mb-8 text-gray-300 max-w-lg mx-auto">
                                        See how Goldco stacks up against other top-rated Gold IRA companies.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.goldco} target="_blank" rel="noopener noreferrer">
                                            Get Free Information Kit
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
