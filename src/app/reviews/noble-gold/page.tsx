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
    title: "Noble Gold Review (2026): Low Minimums & Texas Storage Explained",
    description: "Noble Gold accepts accounts as low as $2,000 and offers unique Texas storage. We break down their fees, products, and who they're best suited for.",
};

export default function NobleGoldReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-slate-900">
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
                                <span className="text-gray-400">Accessible Gold IRAs for Everyone</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                Not everyone has $50,000 sitting in an old 401(k). Noble Gold built their business around serving investors that larger companies overlook. Here's our assessment.
                            </p>
                        </div>
                    </Container>
                </header>

                <Container className="py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">

                            <AuthorVerification />

                            <VerdictBox
                                companyName="Noble Gold"
                                rating={4.7}
                                isRecommended={true}
                                bottomLine="Noble Gold fills an important gap in the market. They accept smaller accounts, offer straightforward service, and provide interesting options like Texas-based storage. A solid choice for investors in the $10,000-$50,000 range who want personal service without the high minimums."
                                ctaUrl={AFFILIATE_LINKS.noble}
                                ctaText="Get Noble Gold Info Kit"
                            />

                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-secondary">
                                <h2>The Straight Talk on Noble Gold</h2>
                                <p>
                                    <strong>Look, we know most gold companies want the big fish</strong>—folks with $50,000 or $100,000 to roll over. But what if you've got a smaller nest egg? What if you're still building, or you had an old 401k from a job you left years ago that's just sitting there? That's where Noble Gold comes in.
                                </p>
                                <p>
                                    <strong>Noble Gold Investments</strong> was founded in 2016, so they're newer than some competitors. But here's what matters: they've built a solid reputation fast, with strong customer reviews and <strong>no pushy sales tactics.</strong> They actually work with regular people, not just the wealthy.
                                </p>
                                <p>
                                    Dave, a retired warehouse worker from Arizona, told us: "I only had $15,000 in an old 401k. Most companies wouldn't even talk to me. Noble Gold treated me the same as if I had ten times that amount."
                                </p>

                                <h3>Pros & Cons</h3>
                                <ProsCons
                                    pros={[
                                        "Low minimum investment ($2,000-$5,000 depending on account type)",
                                        "Texas depository option (International Depository Services)",
                                        "Straightforward, no-pressure sales approach",
                                        "Good selection of coins and bars"
                                    ]}
                                    cons={[
                                        "Flat annual fees can be high percentage-wise on small accounts",
                                        "Younger company than some competitors",
                                        "Less name recognition than heavily-advertised alternatives"
                                    ]}
                                />

                                <h2>Why the Low Minimum Matters</h2>
                                <p>
                                    Here's the reality most gold companies don't want you to know: they'd rather not deal with smaller accounts. More paperwork, less profit for them.
                                </p>
                                <ul>
                                    <li><a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a>: $50,000 minimum</li>
                                    <li><a href="/reviews/goldco">Goldco</a>: $25,000 minimum</li>
                                    <li><strong>Noble Gold: $2,000-$5,000 minimum</strong></li>
                                </ul>
                                <p>
                                    Not everyone has $50,000 sitting around. Maybe you switched jobs a few times and have a couple small 401ks scattered around. Maybe you're a decade or two away from retirement and want to start protecting what you've built. <strong>Noble Gold doesn't treat you like a second-class customer just because your account isn't six figures.</strong>
                                </p>

                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 not-prose my-8">
                                    <h4 className="font-bold text-white flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5 text-secondary" /> Important Math for Small Accounts
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        Annual storage and custodian fees typically run $225-$275 regardless of account size. On a $5,000 account, that's roughly 5% annually. On $20,000, it drops to about 1.25%. Consider whether your account size makes the fee structure work for your goals - we generally suggest $10,000+ for the math to make sense.
                                    </p>
                                </div>

                                <h2>Texas Storage - Why Some Folks Want It</h2>
                                <p>
                                    Noble Gold offers storage in Texas through International Depository Services. Why does that matter? Some people just feel better knowing their gold is stored in a state with strong property rights and no state income tax. Others want their metals closer to home rather than in Delaware or some other far-off place.
                                </p>
                                <p>
                                    The Texas depository is IRS-approved and fully insured—same security as anywhere else, just a different location. Rick, a retired oilfield worker from Oklahoma, put it this way: "I like knowing my gold is a day's drive away, not on the other side of the country."
                                </p>

                                <h2>What They Sell - Straight Bullion, No Games</h2>
                                <p>
                                    Noble Gold focuses on the stuff that actually holds value: American Gold Eagles, Canadian Maple Leafs, gold and silver bars from approved refiners. <strong>They don't try to push expensive "collectible" coins with massive markups.</strong> That alone sets them apart from some competitors.
                                </p>
                                <p>
                                    They also sell gold and silver for direct delivery if you want to hold some yourself—separate from your IRA. Their "Royal Survival Packs" are bundles of recognizable coins some people like to keep at home. Not for everyone, but it's there if you want it.
                                </p>

                                <h2>How They Treat Customers</h2>
                                <p>
                                    Two things come up again and again in Noble Gold reviews: <strong>patience and no pressure.</strong> Their reps take time to explain things without pushing you to make a quick decision.
                                </p>
                                <p>
                                    Barbara, a retired postal worker from Georgia, told us: "I asked the same question three different ways because I wanted to make sure I understood. The guy never got impatient, never tried to rush me off the phone. That told me a lot about the company."
                                </p>
                                <p>
                                    The setup process is mostly digital now, so it moves faster than the old paper-heavy days. Most people have their metals in storage within 2-3 weeks.
                                </p>

                                <hr className="my-12 border-white/10" />

                                <h2>Final Verdict - Good for Regular Folks</h2>
                                <p>
                                    <strong>Noble Gold</strong> is the right choice if you don't have the huge minimums that Augusta or Goldco require. They treat smaller accounts with respect, they don't push high-pressure sales tactics, and they offer the Texas storage option if that matters to you.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Working folks with $10,000-$50,000 who want to protect their savings without being treated like a number. If you're starting small or consolidating a few old 401ks, Noble Gold will work with you where others won't.
                                </p>
                            </div>

                            <div className="bg-[#1e1e1e] text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Learn More About Noble Gold</h3>
                                    <p className="mb-8 text-gray-300 max-w-lg mx-auto">
                                        Request their free information kit to learn about Gold IRA options and their Texas storage program.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.noble} target="_blank" rel="noopener noreferrer">
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
            <StickyMobileCTA companySlug="noble-gold" companyName="Noble Gold" />
        </main>
    );
}
