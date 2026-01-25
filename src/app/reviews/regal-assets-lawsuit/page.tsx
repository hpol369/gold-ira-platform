import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { AuthorVerification } from "@/components/reviews/AuthorVerification";
import { StickyMobileCTA } from "@/components/cta/StickyMobileCTA";
import { AFFILIATE_LINKS } from "@/config/affiliates";
import { AlertTriangle, XCircle, ShieldAlert } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Regal Assets Lawsuit & Collapse (2026): What Happened?",
    description: "Regal Assets was once a top-rated Gold IRA company. Then it collapsed. We investigate what happened, the lawsuits, and what customers should do now.",
};

export default function RegalAssetsLawsuitPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-slate-900">
                {/* Header / Hero for Review */}
                <header className="bg-red-950 text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-800/40 via-red-950 to-red-950 opacity-80 z-0"></div>
                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-red-200 text-sm font-bold uppercase tracking-wider mb-4">
                                <span className="bg-white/10 px-2 py-1 rounded flex items-center gap-1">
                                    <AlertTriangle className="w-4 h-4" /> Warning
                                </span>
                                <span>•</span>
                                <span>Investigation</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Regal Assets: <br />
                                <span className="text-red-300">The Rise and Collapse</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                Once one of the most-recommended Gold IRA companies in America. Now defunct. What happened, and what should former customers do?
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

                            {/* Warning Box instead of VerdictBox */}
                            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 my-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                        <ShieldAlert className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-red-800 mb-2">Company Status: DEFUNCT</h3>
                                        <p className="text-red-700">
                                            Regal Assets appears to have ceased operations. Their website is down, phone lines disconnected, and former customers report inability to reach anyone about their accounts. <strong>Do not attempt to do business with this company.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Main Body Content */}
                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-secondary">
                                <h2>What Happened to Regal Assets?</h2>
                                <p>
                                    <strong>Regal Assets</strong> was once one of the most-recommended Gold IRA companies in America. They had thousands of positive reviews, celebrity endorsements, and featured prominently on "best of" lists across the internet.
                                </p>
                                <p>
                                    Then it all collapsed. The company appears defunct, their website is down, and former customers are left wondering what happened to their gold. This case is a stark reminder of why we emphasize due diligence in this industry.
                                </p>

                                <h2>Timeline of Collapse</h2>

                                <div className="not-prose my-8 space-y-4">
                                    <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                                        <div className="font-bold text-green-800 shrink-0">2012-2020</div>
                                        <div className="text-green-700">
                                            <strong>The Golden Years:</strong> Regal Assets builds a stellar reputation. Industry awards, thousands of positive reviews, one of the most-recommended precious metals IRA companies. Marketing machine was formidable.
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-5 rounded-xl bg-amber-50 border border-amber-100">
                                        <div className="font-bold text-amber-800 shrink-0">2021-2022</div>
                                        <div className="text-amber-700">
                                            <strong>Cracks Appear:</strong> Customer complaints increase. Reports of delayed shipments, poor communication, difficulty reaching representatives. BBB rating starts to slip.
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-5 rounded-xl bg-orange-50 border border-orange-100">
                                        <div className="font-bold text-orange-800 shrink-0">2023</div>
                                        <div className="text-orange-700">
                                            <strong>Rapid Deterioration:</strong> Website goes dark. Phone lines disconnect. Customers discover they can't reach anyone about accounts or metals. Lawsuits filed.
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-5 rounded-xl bg-red-50 border border-red-100">
                                        <div className="font-bold text-red-800 shrink-0">2024-Present</div>
                                        <div className="text-red-700">
                                            <strong>Aftermath:</strong> Company appears defunct. Former customers working with custodians and attorneys to recover assets. BBB rating revoked. What was once a success story becomes a cautionary tale.
                                        </div>
                                    </div>
                                </div>

                                <h2>What This Means for Customers</h2>
                                <p>
                                    If you have or had an account with Regal Assets, here's what you need to know:
                                </p>

                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 not-prose my-8">
                                    <h4 className="font-bold text-white mb-4">Action Steps for Former Customers</h4>
                                    <ul className="space-y-3 text-slate-400">
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold">1.</span>
                                            <span><strong>Your metals should still exist.</strong> IRA precious metals are held by custodians and depositories, not the dealer. Regal was an intermediary—assets should be held separately.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold">2.</span>
                                            <span><strong>Contact your IRA custodian directly.</strong> If you worked with Regal on an IRA, your custodian (likely Equity Trust or similar) has records of your holdings.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold">3.</span>
                                            <span><strong>Document everything.</strong> Save all communications, statements, and records related to your account for potential legal action.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold">4.</span>
                                            <span><strong>Consider consulting an attorney.</strong> If you believe you've suffered losses, a securities attorney can advise on potential recourse.</span>
                                        </li>
                                    </ul>
                                </div>

                                <h2>Lessons Learned: How to Avoid This</h2>
                                <p>
                                    The Regal Assets collapse teaches several important lessons:
                                </p>
                                <ul>
                                    <li><strong>Verify current BBB status.</strong> Don't rely on outdated reviews. Check the BBB directly for current ratings. Regal had great ratings—until they didn't.</li>
                                    <li><strong>Understand the custody structure.</strong> Your metals should be held by an independent, insured custodian—not by the dealer themselves.</li>
                                    <li><strong>Avoid "too good to be true."</strong> Extremely aggressive promotions, unrealistic promises, or pressure to act immediately are red flags.</li>
                                    <li><strong>Diversify across providers.</strong> Consider not putting all your precious metals with a single dealer.</li>
                                </ul>

                                <h2>Safe Alternatives</h2>
                                <p>
                                    Unlike Regal Assets, many companies have maintained impeccable records over decades. We recommend sticking to established, A+ rated dealers:
                                </p>
                                <ul>
                                    <li><Link href="/reviews/augusta-precious-metals">Augusta Precious Metals</Link> — Zero BBB complaints, 10+ years, education-first approach</li>
                                    <li><Link href="/reviews/noble-gold">Noble Gold</Link> — Low minimums, Texas storage option, strong track record</li>
                                    <li><Link href="/reviews/goldco">Goldco</Link> — Billions placed, celebrity endorsements, "White Glove" service</li>
                                </ul>
                                <p>
                                    These companies have weathered multiple market cycles and continue to operate with strong reputations.
                                </p>

                                <hr className="my-12 border-white/10" />

                                <h2>Final Thoughts</h2>
                                <p>
                                    The Regal Assets story is a reminder that due diligence matters. A company can look perfect on paper—great reviews, industry awards, celebrity endorsements—and still fail. Always verify current status, understand how your assets are held, and work with companies that have proven staying power.
                                </p>
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-primary text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Looking for a Trustworthy Gold IRA Company?</h3>
                                    <p className="mb-8 text-gray-200 max-w-lg mx-auto">
                                        Compare companies with proven track records and clean regulatory histories.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">
                                            See Our Top-Rated Companies
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
            <StickyMobileCTA companySlug="regal-assets" companyName="Regal Assets" />
        </main>
    );
}
