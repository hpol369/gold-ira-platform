import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { ProsCons } from "@/components/reviews/ProsCons";
import { AuthorVerification } from "@/components/reviews/AuthorVerification";
import { StickyMobileCTA } from "@/components/cta/StickyMobileCTA";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";
import { Info } from "lucide-react";

export const metadata = {
    title: "Priority Gold Review (2026): Fees, Ratings & Customer Service",
    description: "In-depth Priority Gold review for 2026. We analyze their A+ BBB rating, $10k minimum, and focus on numismatic coins. Is their customer service worth it?",
};

export default function PriorityGoldReviewPage() {
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
                                Priority Gold Review: <br />
                                <span className="text-slate-500">Customer Service Champion?</span>
                            </h1>
                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
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
                                companySlug="augusta-precious-metals"
                                rating={4.3}
                                isRecommended={true}
                                bottomLine="Priority Gold is a solid mid-tier choice for investors who value personalized service over mass marketing. Their $10,000 minimum is accessible, and their focus on numismatic coins can be valuable—if you understand the tradeoffs. Best for collectors and those who want a dedicated rep."
                                ctaText="Compare With Our #1 Pick"
                            />

                            {/* Main Body Content - TYPOGRAPHY PROSE */}
                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-[#B22234]">
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

                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 not-prose my-8">
                                    <h4 className="font-bold text-[#000080] flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5 text-[#B22234]" /> Numismatic vs. Bullion
                                    </h4>
                                    <p className="text-sm text-slate-600">
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

                                <hr className="my-12 border-slate-200" />

                                <h2>Final Verdict: Are They Worth It?</h2>
                                <p>
                                    Priority Gold is a legitimate option for investors who want personalized service and don't mind the numismatic focus. They're not the cheapest, and they're not the biggest—but they deliver consistent, professional service.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Investors with $10k-$50k who value a dedicated rep and are interested in collectible coins. If you want straight bullion at the lowest premium, look elsewhere. If you want a relationship with your dealer, Priority Gold delivers.
                                </p>
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center mt-12 shadow-sm relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-[#000080]">Want Better Value? Compare Options</h3>
                                    <p className="mb-8 text-slate-600 max-w-lg mx-auto">
                                        See how Priority Gold stacks up against our top-rated companies.
                                    </p>
                                    <LeadCaptureButton
                                        variant="gold"
                                        source="review-priority-gold-cta"
                                        className="inline-flex items-center justify-center rounded-md font-medium bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:scale-105 transition-transform h-14 px-10 text-lg w-full sm:w-auto"
                                    >
                                        See Our #1 Recommendation
                                    </LeadCaptureButton>
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
