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
    title: "Goldco Review (2026): Free Silver Bonus & Customer Service Ratings",
    description: "Goldco is rated #1 for customer service. We break down their fees, 'White Glove' onboarding, and their massive free silver bonus.",
};

export default function GoldcoReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-gray-50/50">
                {/* Header / Hero for Review */}
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
                                <span className="text-gray-400">The "White Glove" Experience?</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                Endorsed by Sean Hannity and Chuck Norris. But is their service actually better than the competition? We tested their onboarding process to find out.
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
                                companyName="Goldco"
                                rating={4.8}
                                isRecommended={true}
                                bottomLine="Goldco is our winning choice for 'Customer Service'. If you are terrified of paperwork, their team literally does it for you. Plus, their Free Silver Bonus (up to 10%) provides an immediate ROI that offsets their slightly higher account minimums."
                                ctaUrl={AFFILIATE_LINKS.goldco}
                                ctaText="Get Goldco's Free Wealth Kit"
                            />

                            {/* Main Body Content - TYPOGRAPHY PROSE */}
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <h2>The Executive Summary</h2>
                                <p>
                                    <strong>Goldco</strong> is the heavy hitter of the industry. They have moved over <strong>$2 Billion</strong> in precious metals and have arguably the strongest celebrity endorsement lineup (Sean Hannity, Chuck Norris, Ben Stein).
                                </p>
                                <p>
                                    But fame doesn't equal quality. What impressed us most was their <strong>"White Glove" service</strong>.
                                    (See our <a href="/best-gold-ira-companies">full comparison table</a> to see how they stack up against Augusta).
                                </p>
                                <p>
                                    When we <a href="/investigative-hub">mystery shopped them</a>, we didn't just get a sales rep; we got a dedicated "IRA Specialist" who offered to conference call our current 401(k) custodian to handle the transfer paperwork <em>for us</em>.
                                </p>

                                <h3>Pros & Cons at a Glance</h3>
                                <ProsCons
                                    pros={[
                                        "Huge 'Free Silver' Bonus (Up to $10k)",
                                        "Full 'White Glove' paperwork handling",
                                        "Buyback Guarantee (Highest price)",
                                        "Over 5,000 5-Star Reviews"
                                    ]}
                                    cons={[
                                        "$25,000 Minimum Investment",
                                        "Does not disclose spread on website",
                                        "Can have wait times during busy seasons"
                                    ]}
                                />

                                <h2>1. The "Free Silver" Bonus Explained</h2>
                                <p>
                                    This is Goldco's biggest selling point. Depending on your investment amount, Goldco will give you up to <strong>10% back in free silver coins</strong>.
                                </p>
                                <ul>
                                    <li>Invest $50k → Get ~$5,000 in Free Silver</li>
                                    <li>Invest $100k → Get ~$10,000 in Free Silver</li>
                                </ul>
                                <p>
                                    <strong>Why this matters:</strong> Most gold companies charge fees. Goldco essentially <em>pays you</em> to become a client. This bonus silver helps offset any fees or market volatility in your first year.
                                </p>

                                <h2>2. Fees & Pricing</h2>
                                <p>
                                    Goldco is competitive, though not the absolute cheapest on annual fees.
                                </p>
                                <ul>
                                    <li><strong>Setup Fee:</strong> $50 (One-time)</li>
                                    <li><strong>Annual Fees:</strong> ~$180 (Storage + Custodian)</li>
                                    <li><strong>Minimum:</strong> $25,000</li>
                                </ul>
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 not-prose my-8">
                                    <h4 className="font-bold text-blue-900 flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5" /> Fee Waiver Note
                                    </h4>
                                    <p className="text-sm text-blue-800">
                                        For accounts over $50,000, Goldco will often waive your storage fees for the first year. Be sure to ask your specialist if you qualify for this waiver on top of the silver bonus.
                                    </p>
                                </div>

                                <h2>3. The "White Glove" Rollover Process</h2>
                                <p>
                                    Rollovers are scary. One wrong form and the IRS can hit you with taxes.
                                    Goldco's team specializes in this. They have a 3-step process:
                                </p>
                                <ol>
                                    <li><strong>Open IRA:</strong> They generate the paperwork for you to sign digitally.</li>
                                    <li><strong>Fund Account:</strong> They talk to your old 401(k) provider to move the funds tax-free.</li>
                                    <li><strong>Select Metals:</strong> You pick your gold/silver coins.</li>
                                </ol>
                                <p>
                                    During our test, they offered to stay on the line with Fidelity (our test 401k) to ensure the wire was sent correctly. That is peace of mind.
                                </p>

                                <hr className="my-12 border-gray-200" />

                                <h2>Final Verdict: Are They Worth It?</h2>
                                <p>
                                    If you want the <strong>easiest possible experience</strong>, choose Goldco.
                                    They are built for people who want to "set it and forget it" without getting bogged down in IRS tax codes.
                                    The massive silver bonus is just the cherry on top.
                                </p>
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-[#1e1e1e] text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Claim Your Free Wealth Kit From Goldco</h3>
                                    <p className="mb-8 text-gray-300 max-w-lg mx-auto">
                                        See how much FREE SILVER you qualify for today.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.goldco} target="_blank" rel="noopener noreferrer">
                                            Request Free Kit & Bonus Info
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
