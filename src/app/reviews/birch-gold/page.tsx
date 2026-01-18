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
    title: "Birch Gold Group Review (2026): Ben Shapiro's Choice?",
    description: "Birch Gold has been in business since 2003. We review their flat fees, Ben Shapiro endorsement, and education-first model.",
};

export default function BirchGoldReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-gray-50/50">
                {/* Header / Hero for Review */}
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
                                Birch Gold Review: <br />
                                <span className="text-gray-400">The "Old Guard" of Gold</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                Founded in 2003, they are one of the oldest players in the game. Endorsed by Ben Shapiro and Ron Paul. Do they still hold up?
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
                                companyName="Birch Gold Group"
                                rating={4.6}
                                isRecommended={true}
                                bottomLine="Birch Gold is the 'Steady Hand'. They have survived 20+ years of market cycles. Their flat-fee structure ($200/yr) is excellent for large accounts, as you are not charged a percentage of your assets."
                                ctaUrl={AFFILIATE_LINKS.birch}
                                ctaText="Get Birch Gold's Info Kit"
                            />

                            {/* Main Body Content - TYPOGRAPHY PROSE */}
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <h2>The Executive Summary</h2>
                                <p>
                                    <strong>Birch Gold Group</strong> focuses on education and stability. They heavily sponsor conservative media figures (Ben Shapiro, Steve Bannon, Ron Paul), positioning themselves as the "Liberty-minded" choice for protecting wealth against government overreach.
                                </p>
                                <p>
                                    Their age (Founded 2003) is their biggest asset. Many gold companies pop up and vanish in 5 years. Birch has staying power.
                                    We verified their business history in our <a href="/investigative-hub">corporate background check</a>.
                                </p>

                                <h3>Pros & Cons at a Glance</h3>
                                <ProsCons
                                    pros={[
                                        "20+ Year Track Record (Since 2003)",
                                        "Flat Fees (Does not scale with account size)",
                                        "Ben Shapiro Official Partner",
                                        "A+ BBB Rating"
                                    ]}
                                    cons={[
                                        "$10,000 Minimum Investment",
                                        "Can feel 'old school' (lots of phone calls)",
                                        "Not the absolute cheapest on small accounts"
                                    ]}
                                />

                                <h2>1. Flat Fee Structure</h2>
                                <p>
                                    Birch Gold charges flat administrative and storage fees, typically totaling <strong>$200 per year</strong>.
                                    This is a huge advantage if you have a $500,000 account.
                                    (Some competitors charge a percentage, like 0.5%, which would be $2,500/yr on a large account. Birch keeps it at $200).
                                </p>

                                <h2>2. Education & Politics</h2>
                                <p>
                                    They are unapologetically political in their marketing, focusing on the National Debt, Inflation, and Federal Reserve policy.
                                    if you align with this worldview, you will love their content and newsletters. They don't just sell gold; they sell a hedge against "Big Government".
                                </p>

                                <h2>3. Product Selection</h2>
                                <p>
                                    Birch has strong relationships with mints. They offer a wide variety of palladium and platinum as well, which not all dealers carry.
                                </p>

                                <hr className="my-12 border-gray-200" />

                                <h2>Final Verdict: Are They Worth It?</h2>
                                <p>
                                    If you have a <strong>Large Account ($100k+)</strong>, Birch Gold's flat fee model will save you thousands over time.
                                    They are the reliable, boring (in a good way) choice for long-term holders.
                                </p>
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-zinc-900 text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Protect Your Savings With Birch</h3>
                                    <p className="mb-8 text-zinc-300 max-w-lg mx-auto">
                                        Join thousands of Americans who trust the 20-year veteran of the industry.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.birch} target="_blank" rel="noopener noreferrer">
                                            Request Free Info Kit
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
