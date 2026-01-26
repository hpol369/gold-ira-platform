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
                                <h2>Straight Talk About Goldco</h2>
                                <p>
                                    <strong>We get it—you're skeptical.</strong> After 30+ years of watching companies make promises and disappear, you should be. So let's cut through the advertising and look at what Goldco actually delivers.
                                </p>
                                <p>
                                    <strong>Goldco</strong> has been around since 2006, processing billions in precious metals. You've probably seen their ads—they're everywhere. Sean Hannity, Chuck Norris, YouTube commercials. The question is: does all that marketing mean they're actually good, or just well-funded?
                                </p>
                                <p>
                                    Here's the honest answer: Goldco is solid but not perfect. They offer good customer service and make the rollover process pretty painless. Gary, a retired HVAC technician from Michigan, told us: "They walked me through everything step by step. No rushing, no pressure." Where they fall short is fee transparency—you have to call to get pricing, which can feel like a sales tactic.
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

                                <h2>About Those Celebrity Endorsements</h2>
                                <p>
                                    Let's address the elephant in the room. Sean Hannity, Chuck Norris, and Ben Stein are <strong>paid spokespeople</strong>—not financial advisors who actually use the service. That's important to understand.
                                </p>
                                <p>
                                    Does that mean Goldco is bad? No. It means they have money to spend on advertising. But here's the straight talk: don't base your decision on who's in the commercials. Base it on fees, service quality, and whether they answer your questions honestly. Bill, a retired union carpenter from New Jersey, put it bluntly: "I don't care if Chuck Norris likes them. I care if they're going to protect my 401k."
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

                                <h2>The Rollover Process - They Handle the Paperwork</h2>
                                <p>
                                    Here's where Goldco earns some points. Moving your 401k to a Gold IRA involves paperwork—lots of it. Goldco's team handles most of it and coordinates directly with your current provider. If you've spent 30 years working with your hands instead of pushing papers, this matters.
                                </p>
                                <p>
                                    The process typically takes 2-3 weeks. Their reps stay in touch throughout. Martha, a retired factory supervisor from Ohio, appreciated this: "I'm not a paperwork person. They made it simple and called me with updates instead of making me chase them."
                                </p>

                                <h2>How They Stack Up</h2>
                                <p>
                                    Let's be real: Goldco is a solid middle-of-the-road choice. They're not the cheapest (see <a href="/reviews/noble-gold">Noble Gold</a> for lower minimums), and they're not quite as focused on education as <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a>.
                                </p>
                                <p>
                                    If you have $50,000 or more to invest, Augusta's fee-waiver programs might save you more money. If you have less than $25,000, Goldco won't work for you anyway—their minimum is $25k. Look at Noble Gold or <a href="/reviews/orion-metal-exchange">Orion Metal Exchange</a> instead.
                                </p>

                                <hr className="my-12 border-white/10" />

                                <h2>Final Verdict - A Decent Option, Not the Only Option</h2>
                                <p>
                                    <strong>Goldco</strong> is legitimate and does what they advertise. They make the rollover process relatively painless, and they have a solid track record. But remember: the most-advertised company isn't automatically the best value. Those TV commercials cost money—and that money comes from somewhere.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Hardworking folks with $25k-$50k who want a recognized brand and appreciate someone handling the paperwork. If you're the type who likes to research pricing before talking to anyone, you might get frustrated—they don't post prices online.
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
            <StickyMobileCTA companySlug="goldco" companyName="Goldco" />
        </main>
    );
}
