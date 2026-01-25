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
    title: "Priority Gold Review (2026): Fees, Ratings & Customer Service",
    description: "In-depth Priority Gold review for 2026. We analyze their A+ BBB rating, $10k minimum, and focus on numismatic coins. Is their customer service worth it?",
};

export default function PriorityGoldReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-slate-900">
                {/* Header / Hero for Review */}
                <header className="bg-emerald-950 text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-800/40 via-emerald-950 to-emerald-950 opacity-80 z-0"></div>
                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-emerald-200 text-sm font-bold uppercase tracking-wider mb-4">
                                <span className="bg-white/10 px-2 py-1 rounded">Gold IRA Company Reviews</span>
                                <span>•</span>
                                <span>Updated Jan 2026</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Priority Gold Review: <br />
                                <span className="text-gray-400">Customer Service Champion?</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                With an A+ BBB rating and a $10,000 minimum, Priority Gold targets investors who value personalized service over flashy marketing. But is their numismatic focus right for your IRA?
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
                                companyName="Priority Gold"
                                rating={4.3}
                                isRecommended={true}
                                bottomLine="Priority Gold is a solid mid-tier choice for investors who value personalized service over mass marketing. Their $10,000 minimum is accessible, and their focus on numismatic coins can be valuable—if you understand the tradeoffs. Best for collectors and those who want a dedicated rep."
                                ctaUrl={getTrackedLink(AFFILIATE_LINKS.augusta, "review-priority-gold", "augusta")}
                                ctaText="Compare With Our #1 Pick"
                            />

                            {/* Main Body Content - TYPOGRAPHY PROSE */}
                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-secondary">
                                <h2>The Executive Summary</h2>
                                <p>
                                    <strong>Priority Gold</strong> has carved out a niche in the precious metals industry by putting customer service first. While they may not have the advertising budget of Augusta or Goldco, their A+ BBB rating and loyal customer base tell a different story.
                                </p>
                                <p>
                                    What makes them different? Their focus on <strong>numismatic (collectible) coins</strong> rather than standard bullion. This is worth noting: numismatic coins can carry higher premiums over spot price, but they also have potential collectible value that generic bars don't.
                                </p>

                                <h3>Pros & Cons at a Glance</h3>
                                <ProsCons
                                    pros={[
                                        "A+ BBB Rating with minimal complaints",
                                        "Lower $10,000 minimum investment",
                                        "Personalized, low-pressure service",
                                        "Numismatic coin expertise"
                                    ]}
                                    cons={[
                                        "Website lacks detailed fee info",
                                        "Heavy emphasis on collectible coins",
                                        "Fewer online educational resources"
                                    ]}
                                />

                                <h2>1. Services & Products</h2>
                                <p>
                                    Priority Gold offers both direct precious metals purchases and Gold IRA services. Their product selection leans heavily toward numismatic (collectible) coins rather than standard bullion.
                                </p>
                                <p>
                                    For IRA clients, they work with established custodians like Equity Trust and handle the rollover paperwork. The process is straightforward—they assign you a dedicated rep who walks you through every step. Multiple reviewers mention their rep by name, which speaks to the personalized approach.
                                </p>

                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 not-prose my-8">
                                    <h4 className="font-bold text-white flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5 text-secondary" /> Numismatic vs. Bullion
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        Numismatic coins carry higher premiums but may appreciate beyond gold's spot price due to rarity and collectibility. Bullion tracks spot price more closely with lower premiums. Know which you're buying.
                                    </p>
                                </div>

                                <h2>2. Fees & Minimums</h2>
                                <p>
                                    Priority Gold's $10,000 minimum is lower than Augusta's $50k but higher than Noble Gold's $2k. This positions them in the middle tier—accessible but not the cheapest entry point.
                                </p>
                                <p>
                                    One thing that stands out: Priority Gold doesn't blast you with email sequences or aggressive follow-up calls. Their sales approach is notably low-pressure compared to some competitors who treat every lead like a closing opportunity.
                                </p>

                                <h2>3. Customer Reviews & Complaints</h2>
                                <p>
                                    Priority Gold maintains an A+ rating with the BBB with minimal complaints. Most reviews mention the same themes: helpful staff, no pressure tactics, and timely delivery.
                                </p>
                                <p>
                                    Common praise focuses on the education aspect—customers appreciate that their reps explain the differences between coin types without pushing the most expensive option. That said, some reviewers wish the website had more transparent pricing upfront.
                                </p>

                                <hr className="my-12 border-white/10" />

                                <h2>Final Verdict: Are They Worth It?</h2>
                                <p>
                                    Priority Gold is a legitimate option for investors who want personalized service and don't mind the numismatic focus. They're not the cheapest, and they're not the biggest—but they deliver consistent, professional service.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Investors with $10k-$50k who value a dedicated rep and are interested in collectible coins. If you want straight bullion at the lowest premium, look elsewhere. If you want a relationship with your dealer, Priority Gold delivers.
                                </p>
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-emerald-950 text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Want Better Value? Compare Options</h3>
                                    <p className="mb-8 text-emerald-200 max-w-lg mx-auto">
                                        See how Priority Gold stacks up against our top-rated companies.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={getTrackedLink(AFFILIATE_LINKS.augusta, "review-priority-gold", "augusta")} target="_blank" rel="noopener noreferrer">
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
            <StickyMobileCTA companySlug="priority-gold" companyName="Priority Gold" />
        </main>
    );
}
