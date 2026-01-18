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
    title: "Noble Gold Review (2026): Low Minimums & Texas Storage Explained",
    description: "Noble Gold accepts accounts as low as $2,000 and offers unique Texas storage. We break down their fees, products, and who they're best suited for.",
};

export default function NobleGoldReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-gray-50/50">
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

                            <div className="prose prose-lg max-w-none text-gray-700">
                                <h2>Why Noble Gold Stands Out</h2>
                                <p>
                                    <strong>Noble Gold Investments</strong> operates differently than the industry giants. While companies like Augusta focus on high-net-worth clients and Goldco pours money into celebrity advertising, Noble Gold built their reputation on accessibility and personal touch.
                                </p>
                                <p>
                                    Founded in 2016, they're a newer player compared to some competitors, but they've quickly established themselves as a legitimate option with strong customer reviews. Their approach is refreshingly straightforward - no hard sales tactics, reasonable minimums, and multiple storage options including a Texas facility.
                                </p>
                                <p>
                                    The company is based in Pasadena, California and maintains an A+ rating with the BBB. What caught our attention during research was the consistency of positive feedback about their customer service team.
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

                                <h2>The Low Minimum Advantage</h2>
                                <p>
                                    Here's the reality of Gold IRA investing: most reputable companies don't want your business unless you have significant assets to roll over.
                                </p>
                                <ul>
                                    <li><a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a>: $50,000 minimum</li>
                                    <li><a href="/reviews/goldco">Goldco</a>: $25,000 minimum</li>
                                    <li><strong>Noble Gold: $2,000-$5,000 minimum</strong></li>
                                </ul>
                                <p>
                                    This matters if you're younger, just starting to diversify, or rolling over a smaller 401(k) from an old job. Noble Gold doesn't make you feel like a second-class customer because your account isn't six figures.
                                </p>

                                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 not-prose my-8">
                                    <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5" /> Important Math for Small Accounts
                                    </h4>
                                    <p className="text-sm text-amber-800">
                                        Annual storage and custodian fees typically run $225-$275 regardless of account size. On a $5,000 account, that's roughly 5% annually. On $20,000, it drops to about 1.25%. Consider whether your account size makes the fee structure work for your goals - we generally suggest $10,000+ for the math to make sense.
                                    </p>
                                </div>

                                <h2>Texas Storage Option</h2>
                                <p>
                                    One of Noble Gold's distinctive features is their relationship with International Depository Services in Texas. Some investors specifically want their metals stored in Texas rather than Delaware or other common locations, either for geographic diversification or state-specific legal protections.
                                </p>
                                <p>
                                    The Texas depository is IRS-approved for IRA storage and fully insured. It's a legitimate option that some investors find appealing, though it functions the same as any other approved depository in terms of security and compliance.
                                </p>

                                <h2>Product Selection</h2>
                                <p>
                                    Noble Gold offers a solid range of IRA-eligible products including American Gold Eagles, Canadian Maple Leafs, gold bars from reputable refiners, and various silver options. They don't try to push rare or collectible coins that carry high premiums - the focus is on bullion that holds its value.
                                </p>
                                <p>
                                    They also sell products for direct delivery (non-IRA purchases), including what they call "Royal Survival Packs" - bundles of recognizable coins designed for potential emergency situations. This appeals to a certain segment of their customer base, though it's separate from their IRA business.
                                </p>

                                <h2>Customer Experience</h2>
                                <p>
                                    Reviews consistently mention two things about Noble Gold: patience and accessibility. Their representatives are known for taking time to explain the process without pushing for immediate decisions. For first-time precious metals investors who have questions, this approach is valuable.
                                </p>
                                <p>
                                    The account setup process is largely digital, which speeds things up compared to more paper-heavy competitors. Most customers report 2-3 weeks from initial contact to having metals in storage.
                                </p>

                                <hr className="my-12 border-gray-200" />

                                <h2>Final Verdict</h2>
                                <p>
                                    <strong>Noble Gold</strong> is a strong choice for investors who don't meet the high minimums at Augusta or Goldco, or who specifically want the Texas storage option. Their customer service approach is genuinely helpful rather than sales-driven, and they've built a solid reputation in a relatively short time.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Investors with $10,000-$50,000 who want accessible service and flexible options. Also worth considering if Texas storage is important to you, or if you want to start small and grow your precious metals position over time.
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
        </main>
    );
}
