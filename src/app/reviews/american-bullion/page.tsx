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
    title: "American Bullion Review (2026): The Gold IRA Pioneer?",
    description: "American Bullion review for 2026. One of the oldest Gold IRA companies, founded in 2009. We analyze their experience, fees, and whether they still compete with newer companies.",
};

export default function AmericanBullionReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-gray-50/50">
                {/* Header / Hero for Review */}
                <header className="bg-slate-900 text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-700/40 via-slate-900 to-slate-900 opacity-80 z-0"></div>
                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-slate-300 text-sm font-bold uppercase tracking-wider mb-4">
                                <span className="bg-white/10 px-2 py-1 rounded">Gold IRA Company Reviews</span>
                                <span>•</span>
                                <span>Updated Jan 2026</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                American Bullion Review: <br />
                                <span className="text-gray-400">The Original Gold IRA Pioneer?</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                Founded in 2009, American Bullion claims to have "pioneered" the Gold IRA industry. But does experience translate to better service, or have newer competitors passed them by?
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
                                companyName="American Bullion"
                                rating={4.2}
                                isRecommended={true}
                                bottomLine="American Bullion is a solid, experienced player with a long track record and A+ BBB rating. They know what they're doing. The tradeoff: their website and educational resources feel dated compared to Augusta or Goldco. Good choice if you value experience over polish."
                                ctaUrl={AFFILIATE_LINKS.augusta}
                                ctaText="Compare With Our #1 Pick"
                            />

                            {/* Main Body Content - TYPOGRAPHY PROSE */}
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <h2>The Executive Summary</h2>
                                <p>
                                    <strong>American Bullion</strong> claims to be the company that "pioneered" the Gold IRA industry. Whether or not they were literally first, they've been around long enough to have seen every market cycle since the 2008 financial crisis.
                                </p>
                                <p>
                                    But longevity cuts both ways—does their experience translate into better service, or has the company rested on its laurels while newer competitors innovate? We investigated.
                                </p>

                                <h3>Pros & Cons at a Glance</h3>
                                <ProsCons
                                    pros={[
                                        "15+ years in business (since 2009)",
                                        "A+ BBB Rating maintained throughout",
                                        "Deep expertise in complex rollovers",
                                        "Consultative, low-pressure approach"
                                    ]}
                                    cons={[
                                        "Website feels dated compared to competitors",
                                        "Fewer online educational resources",
                                        "Not the cheapest option available"
                                    ]}
                                />

                                <h2>1. History & Reputation</h2>
                                <p>
                                    American Bullion was founded in 2009, right in the aftermath of the financial crisis when interest in gold as a safe haven exploded. They positioned themselves as specialists in IRA rollovers at a time when most dealers were still figuring out the process.
                                </p>
                                <p>
                                    This head start gave them deep expertise in navigating IRS rules. Their team includes people who've been doing Gold IRAs since the beginning, and that institutional knowledge shows in how smoothly they handle complex rollovers.
                                </p>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 not-prose my-8">
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5" /> Experience vs. Innovation
                                    </h4>
                                    <p className="text-sm text-slate-700">
                                        American Bullion's age is their biggest asset—and their biggest limitation. They know the business inside out, but haven't invested in modern educational content and digital experience that newer competitors prioritize.
                                    </p>
                                </div>

                                <h2>2. Fees & Minimums</h2>
                                <p>
                                    The minimum for a Gold IRA with American Bullion is <strong>$10,000</strong>. This is lower than Augusta's $50k but higher than some budget-focused competitors.
                                </p>
                                <p>
                                    Fees are competitive but not the absolute lowest. Where American Bullion shines is in the consultative approach—their reps take time to explain options without pushing the most expensive products.
                                </p>

                                <h2>3. Customer Reviews</h2>
                                <p>
                                    American Bullion's review profile reflects their tenure in the industry—they have a substantial number of reviews spanning many years, with the overall trend being positive. Common praise focuses on smooth rollover processes and knowledgeable staff.
                                </p>
                                <p>
                                    Complaints that exist tend to center on pricing (not always the cheapest) and communication speed. Nothing catastrophic—no patterns of fraud or major failures.
                                </p>

                                <hr className="my-12 border-gray-200" />

                                <h2>Final Verdict: Are They Worth It?</h2>
                                <p>
                                    <strong>American Bullion</strong> is the reliable, experienced choice for investors who value track record over flashy marketing. They've survived 15+ years and multiple market cycles with their reputation intact.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Investors who want a company that's "been there, done that" with complex rollovers. If you want the latest educational content and digital tools, look at Augusta or Goldco instead.
                                </p>
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-slate-900 text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Want Modern Tools & Education?</h3>
                                    <p className="mb-8 text-slate-300 max-w-lg mx-auto">
                                        Compare American Bullion with our top-rated companies.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">
                                            See Our #1 Recommendation
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
