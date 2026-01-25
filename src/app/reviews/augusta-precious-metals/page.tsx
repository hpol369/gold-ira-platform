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
    title: "Augusta Precious Metals Review (2026): Fees, Complaints & Real Customer Experience",
    description: "Our honest Augusta Precious Metals review. We analyze their $50k minimum, fee structure, Joe Montana endorsement, and whether their education-first approach is worth it.",
};

export default function AugustaReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-slate-900">
                <header className="bg-primary text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary opacity-50 z-0"></div>
                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-secondary text-sm font-bold uppercase tracking-wider mb-4">
                                <span className="bg-white/10 px-2 py-1 rounded">Gold IRA Company Reviews</span>
                                <span>•</span>
                                <span>Updated Jan 2026</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Augusta Precious Metals Review: <br />
                                <span className="text-gray-300">Premium Service or Overpriced?</span>
                            </h1>
                            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                                Joe Montana endorses them. Money Magazine featured them. But with a $50,000 minimum, is Augusta actually worth it for your retirement savings?
                            </p>
                        </div>
                    </Container>
                </header>

                <Container className="py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">

                            <AuthorVerification />

                            <VerdictBox
                                companyName="Augusta Precious Metals"
                                rating={4.9}
                                isRecommended={true}
                                bottomLine="Augusta is the premium choice for investors with $50,000+. Their education-first approach, transparent fees, and fee-waiver program make them stand out. Not the cheapest, but arguably the best service in the industry."
                                ctaUrl={AFFILIATE_LINKS.augusta}
                                ctaText="Get Free Gold IRA Guide"
                            />

                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-secondary">
                                <h2>The Bottom Line</h2>
                                <p>
                                    <strong>Augusta Precious Metals</strong> isn't trying to be everything to everyone. They've carved out a specific niche: high-net-worth investors who want white-glove service and are willing to pay for it. If you have $50,000 or more to roll over, they're worth serious consideration.
                                </p>
                                <p>
                                    What separates Augusta from the pack? They lead with education instead of sales pitches. Before you invest a dollar, they walk you through a one-on-one web conference covering how gold fits into a diversified portfolio. No fear-mongering about economic collapse. No pressure to buy today. Just information.
                                </p>
                                <p>
                                    That approach has earned them something rare in this industry: zero complaints with the BBB. In a space where lawsuits and regulatory issues are common, that track record speaks volumes.
                                </p>

                                <h3>Pros & Cons</h3>
                                <ProsCons
                                    pros={[
                                        "Fee waiver program (up to 10 years of fees covered)",
                                        "Zero BBB complaints - exceptional track record",
                                        "Education-first approach with personal web conference",
                                        "Transparent pricing with no hidden markups"
                                    ]}
                                    cons={[
                                        "$50,000 minimum locks out smaller investors",
                                        "Must speak with rep - no online-only option",
                                        "Premium pricing compared to budget competitors"
                                    ]}
                                />

                                <h2>Fee Structure</h2>
                                <p>
                                    Augusta is refreshingly upfront about what you'll pay. Most Gold IRA companies bury their fees or quote different numbers depending on who you talk to. Augusta publishes their standard fees:
                                </p>
                                <ul>
                                    <li><strong>Account Setup:</strong> $50 one-time fee</li>
                                    <li><strong>Annual Custodian Fee:</strong> $80-$100</li>
                                    <li><strong>Annual Storage Fee:</strong> $100-$150 (depending on depository)</li>
                                </ul>
                                <p>
                                    The real value comes from their fee-waiver promotion. Depending on your account size, Augusta covers your custodian and storage fees for up to 10 years. On a $100,000+ account, that's potentially $2,000-$3,000 in savings that stays invested and compounding.
                                </p>

                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 not-prose my-8">
                                    <h4 className="font-bold text-white flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5 text-secondary" /> About Dealer Spreads
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        Like all precious metals dealers, Augusta makes money on the spread between buy and sell prices. This is typically 5-8% and is standard across the industry. The difference with Augusta is they don't layer additional commissions on top.
                                    </p>
                                </div>

                                <h2>The Education Process</h2>
                                <p>
                                    Augusta's signature offering is their one-on-one web conference. This isn't a sales call disguised as education—it's a genuine economics lesson. They cover:
                                </p>
                                <ul>
                                    <li>How inflation affects purchasing power over time</li>
                                    <li>The role of precious metals in portfolio diversification</li>
                                    <li>IRS rules and tax implications for Gold IRAs</li>
                                    <li>Red flags to watch for with other companies</li>
                                </ul>
                                <p>
                                    The conference runs about 45 minutes and there's no obligation to buy anything afterward. For investors who've never dealt with precious metals, this education alone is valuable—even if you end up choosing a different company.
                                </p>

                                <h2>Customer Feedback</h2>
                                <p>
                                    Augusta's reputation metrics are the best in the business:
                                </p>
                                <ul>
                                    <li><strong>BBB Rating:</strong> A+ with zero complaints filed</li>
                                    <li><strong>BCA Rating:</strong> AAA</li>
                                    <li><strong>Google Reviews:</strong> 4.9/5 average</li>
                                </ul>
                                <p>
                                    The Joe Montana endorsement gets attention, but what matters more is what actual customers say. Common themes in reviews: patient reps who don't push, smooth rollover process, and follow-up support after the sale. The complaints that exist (and there are few) typically relate to wanting a lower minimum or faster processing during high-demand periods.
                                </p>

                                <h2>The $50,000 Minimum</h2>
                                <p>
                                    This is the dealbreaker for many people. Augusta doesn't accept accounts under $50,000. Their reasoning: they can't provide their level of personalized service to smaller accounts while keeping the business viable.
                                </p>
                                <p>
                                    Is this elitist? Maybe. But it's also honest. Companies that claim to offer "premium service" to everyone regardless of account size are usually cutting corners somewhere. Augusta would rather turn away business than dilute their service quality.
                                </p>
                                <p>
                                    If you have less than $50,000 to invest, check out <a href="/reviews/noble-gold">Noble Gold</a> or <a href="/reviews/orion-metal-exchange">Orion Metal Exchange</a> instead.
                                </p>

                                <hr className="my-12 border-white/10" />

                                <h2>Final Verdict</h2>
                                <p>
                                    <strong>Augusta Precious Metals</strong> earns their premium reputation. For investors with $50,000+, the combination of education-first approach, fee waivers, and spotless track record makes them our top recommendation. They're not the cheapest option, but they deliver genuine value.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Investors with $50,000+ who want thorough education and white-glove service. Not ideal for bargain hunters or those with smaller accounts.
                                </p>
                            </div>

                            <div className="bg-primary text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Get Augusta's Free Information Kit</h3>
                                    <p className="mb-8 text-white/80 max-w-lg mx-auto">
                                        Learn how Gold IRAs work and whether they fit your retirement strategy.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">
                                            Request Free Guide
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </article>

                        <aside className="relative">
                            <StickyMasterSidebar />
                        </aside>
                    </div>
                </Container>
            </div>
            <Footer />
            <StickyMobileCTA companySlug="augusta-precious-metals" companyName="Augusta Precious Metals" />
        </main>
    );
}
