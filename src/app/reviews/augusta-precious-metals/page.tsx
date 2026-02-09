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
    title: "Augusta Precious Metals Review 2026 | Fees & Ratings",
    description: "Augusta Precious Metals review for 2026. $50k minimum, transparent fees, education-first approach. See if Augusta is right for your Gold IRA.",
};

export default function AugustaReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <div className="flex-grow">
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
                                Augusta Precious Metals Review: <br />
                                <span className="text-slate-500">Premium Service or Overpriced?</span>
                            </h1>
                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
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
                                companySlug="augusta-precious-metals"
                                ctaText="Get Free Gold IRA Guide"
                            />

                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-[#B22234]">
                                <h2>The Bottom Line</h2>
                                <p>
                                    <strong>Look, we know you've heard promises before.</strong> Every financial company claims they're "different." After 30+ years of working and saving, you've earned the right to be skeptical. So let's cut through the BS.
                                </p>
                                <p>
                                    <strong>Augusta Precious Metals</strong> isn't trying to be everything to everyone. They focus on folks with $50,000 or more to roll over—people who've spent decades building their nest egg and don't want some fast-talking salesperson pushing them into something they don't understand.
                                </p>
                                <p>
                                    What separates Augusta from the pack? <strong>No pushy salespeople.</strong> Before you invest a dollar, they walk you through a one-on-one web conference covering how gold actually works in a retirement account. No scare tactics about economic collapse. No pressure to buy today. Just straight information so you can make your own decision.
                                </p>
                                <p>
                                    Here's what matters most: <strong>zero complaints with the BBB.</strong> In an industry where lawsuits and shady practices are common, that track record tells you something. Mike, a retired steelworker from Ohio, put it this way: "After 33 years at the mill, I wasn't about to hand my 401k over to some company that might disappear. Augusta's record gave me peace of mind."
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

                                <h2>Fee Structure - No Hidden Surprises</h2>
                                <p>
                                    After working hard for decades, the last thing you need is a company nickel-and-diming you with hidden fees. Augusta is refreshingly upfront about what you'll pay:
                                </p>
                                <ul>
                                    <li><strong>Account Setup:</strong> $50 one-time fee</li>
                                    <li><strong>Annual Custodian Fee:</strong> $80-$100</li>
                                    <li><strong>Annual Storage Fee:</strong> $100-$150 (depending on depository)</li>
                                </ul>
                                <p>
                                    Here's where it gets interesting for larger accounts. Depending on your account size, Augusta covers your custodian and storage fees for up to 10 years. On a $100,000 account, that's $2,000-$3,000 that stays invested instead of going to fees. Tom, a retired long-haul trucker from Texas, told us: "I spent 30 years watching companies take fees from my 401k. Augusta was the first one that actually saved me money upfront."
                                </p>

                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 not-prose my-8">
                                    <h4 className="font-bold text-[#000080] flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5 text-secondary" /> About Dealer Spreads
                                    </h4>
                                    <p className="text-sm text-slate-600">
                                        Like all precious metals dealers, Augusta makes money on the spread between buy and sell prices. This is typically 5-8% and is standard across the industry. The difference with Augusta is they don't layer additional commissions on top.
                                    </p>
                                </div>

                                <h2>The Education Process - No Sales Pitch</h2>
                                <p>
                                    Here's what separates Augusta from the companies that call you ten times a day. Their signature offering is a one-on-one web conference—and it's actually educational, not a sales pitch in disguise. They cover:
                                </p>
                                <ul>
                                    <li>How inflation is eating away at your savings (the grocery store proves it)</li>
                                    <li>Why gold tends to go up when stocks crash (2008 being the prime example)</li>
                                    <li>IRS rules you need to know—no surprises at tax time</li>
                                    <li>Red flags to watch for with other companies (so you don't get ripped off)</li>
                                </ul>
                                <p>
                                    The conference runs about 45 minutes, and here's the key part: <strong>no obligation to buy anything.</strong> Linda, a retired ER nurse from Florida, told us: "After 28 years of people trying to sell me stuff, I was shocked when they just answered my questions and said 'take your time.' First time that's happened in this industry."
                                </p>

                                <h2>What Real Customers Say</h2>
                                <p>
                                    Forget the celebrity endorsements for a minute. Here's what matters—Augusta's reputation with regular folks like you:
                                </p>
                                <ul>
                                    <li><strong>BBB Rating:</strong> A+ with zero complaints filed</li>
                                    <li><strong>BCA Rating:</strong> AAA</li>
                                    <li><strong>Google Reviews:</strong> 4.9/5 average</li>
                                </ul>
                                <p>
                                    <strong>Zero BBB complaints.</strong> Think about that. In an industry full of lawsuits and regulatory problems, Augusta has kept a clean record. John, a retired electrician from Pennsylvania, summed it up: "I worked with my hands for 35 years. I can tell when someone's giving me a straight answer and when they're blowing smoke. Augusta's people knew their stuff and didn't try to rush me."
                                </p>
                                <p>
                                    Common themes we hear: patient reps who actually listen, smooth rollover process that doesn't require you to become a paperwork expert, and follow-up support even after your account is set up.
                                </p>

                                <h2>The $50,000 Minimum - Let's Be Honest</h2>
                                <p>
                                    Here's the dealbreaker for some folks: Augusta requires at least $50,000 to roll over. They're upfront about why—they can't provide personal service to smaller accounts and still stay in business.
                                </p>
                                <p>
                                    Is this for everyone? No. But it's honest. Companies that promise "premium service" to everyone usually cut corners somewhere. Augusta would rather turn away business than give you a watered-down experience.
                                </p>
                                <p>
                                    If you've got less than $50,000 to invest, don't worry—there are solid options. Check out <a href="/reviews/noble-gold">Noble Gold</a> (lower minimums, still reputable) or <a href="/reviews/orion-metal-exchange">Orion Metal Exchange</a>.
                                </p>

                                <hr className="my-12 border-slate-200" />

                                <h2>Final Verdict - Protection, Not Get-Rich-Quick</h2>
                                <p>
                                    Let's be clear about what Augusta offers: <strong>protection for what you've already built.</strong> This isn't about getting rich quick or timing the market. It's about making sure a market crash doesn't wipe out 30 years of hard work right when you need it most.
                                </p>
                                <p>
                                    <strong>Augusta Precious Metals</strong> earns their reputation. For folks with $50,000+ who want straight answers, no pushy salespeople, and a company with zero complaints, they're our top recommendation.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Workers with $50,000+ saved who want to protect their nest egg—not gamble with it. If you spent decades building your retirement, Augusta helps you keep it safe.</p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center mt-12 shadow-sm relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-[#000080]">Get Augusta's Free Information Kit</h3>
                                    <p className="mb-8 text-slate-600 max-w-lg mx-auto">
                                        Learn how Gold IRAs work and whether they fit your retirement strategy.
                                    </p>
                                    <LeadCaptureButton
                                        variant="gold"
                                        source="review-augusta-cta"
                                        className="inline-flex items-center justify-center rounded-md font-medium bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:scale-105 transition-transform h-14 px-10 text-lg w-full sm:w-auto"
                                    >
                                        Request Free Guide
                                    </LeadCaptureButton>
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
