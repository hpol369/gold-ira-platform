import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { ProsCons } from "@/components/reviews/ProsCons";
import { AuthorVerification } from "@/components/reviews/AuthorVerification";
import { StickyMobileCTA } from "@/components/cta/StickyMobileCTA";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import { Info } from "lucide-react";

export const metadata = {
    title: "American Bullion Review (2026): The Gold IRA Pioneer?",
    description: "American Bullion review 2026. One of the oldest Gold IRA companies (since 2009). We analyze fees, service, and if they still compete today.",
};

export default function AmericanBullionReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <div className="flex-grow">
                {/* Header / Hero for Review */}
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
                                American Bullion Review: <br />
                                <span className="text-slate-500">The Original Gold IRA Pioneer?</span>
                            </h1>
                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
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
                                ctaUrl={getTrackedLink(AFFILIATE_LINKS.augusta, "review-american-bullion", "augusta")}
                                ctaText="Compare With Our #1 Pick"
                            />

                            {/* Main Body Content - TYPOGRAPHY PROSE */}
                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-[#B22234]">
                                <h2>The Straight Talk</h2>
                                <p>
                                    <strong>You&apos;ve been working hard since before 2008.</strong> You remember what happened to retirement accounts that year. American Bullion has been around since 2009—they started right after that crash, when people were scrambling to protect what was left of their savings.
                                </p>
                                <p>
                                    <strong>American Bullion</strong> isn&apos;t the flashiest company. They don&apos;t have celebrity endorsements or slick TV commercials. What they have is experience—15+ years of handling Gold IRAs, including complex rollovers that trip up newer companies.
                                </p>
                                <p>
                                    Ray, a retired tool and die maker from Detroit, appreciated that: &quot;I didn&apos;t need a fancy website. I needed someone who&apos;d handled 401k rollovers a thousand times and knew all the IRS rules. American Bullion knew their stuff.&quot;
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

                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 not-prose my-8">
                                    <h4 className="font-bold text-[#000080] flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5 text-[#B22234]" /> Experience vs. Innovation
                                    </h4>
                                    <p className="text-sm text-slate-600">
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

                                <hr className="my-12 border-slate-200" />

                                <h2>Final Verdict: Experienced, Not Flashy</h2>
                                <p>
                                    <strong>American Bullion</strong> is the reliable, experienced choice for folks who value track record over marketing. They&apos;ve survived 15+ years and multiple market crashes with their reputation intact.
                                </p>
                                <p>
                                    If you&apos;ve got a complicated rollover situation—multiple old 401ks, pension conversions, whatever—American Bullion has seen it before. They won&apos;t wow you with technology, but they&apos;ll get the job done right.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Working folks who want experience over flash. If you want video education and fancy apps, look at Augusta. If you want someone who&apos;s done this a thousand times and knows all the IRS rules, American Bullion delivers.
                                </p>
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center mt-12 shadow-sm relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-[#000080]">Want Modern Tools & Education?</h3>
                                    <p className="mb-8 text-slate-600 max-w-lg mx-auto">
                                        Compare American Bullion with our top-rated companies.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={getTrackedLink(AFFILIATE_LINKS.augusta, "review-american-bullion", "augusta")} target="_blank" rel="noopener noreferrer">
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
            <StickyMobileCTA companySlug="american-bullion" companyName="American Bullion" />
        </main>
    );
}
