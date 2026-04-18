import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { EvidenceCard } from "@/components/investigation/EvidenceCard";
import { GoldChart } from "@/components/investigation/GoldChart";
import { ShieldAlert, Search, FileSearch, Lock, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { getTrackedAugustaLink } from "@/config/affiliates";

export const metadata = {
    title: "Gold IRA Industry: Red Flags & What to Watch For",
    description: "Understanding the Gold IRA industry's common tactics. Learn what questions to ask, red flags to watch for, and how to evaluate companies before investing.",
};

export default function InvestigativeHubPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#0C0D18]">
            <Navbar />

            <div className="bg-[#0C0D18] text-[#F6F4EF] py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(178,34,52,0.08),transparent_50%)]" />
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-[#D4A94E] border border-red-200 text-xs font-bold tracking-widest uppercase mb-4">
                        Consumer Education
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#F6F4EF] mb-6">
                        Understanding the <span className="text-[#D4A94E]">Gold IRA Industry</span>
                    </h1>
                    <p className="text-xl text-[#D0CCC4] max-w-2xl mx-auto mb-8">
                        The precious metals IRA space has good actors and bad actors. Here's what we've learned about identifying the difference and protecting yourself as an investor.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="gold" size="xl" asChild className="bg-[#DC2626] hover:bg-[#991B1B] text-white">
                            <Link href="#red-flags">Common Red Flags</Link>
                        </Button>
                        <Button variant="outline" className="text-[#D0CCC4] border-[#3F4460] hover:bg-[#1E2134]" asChild>
                            <Link href="/best-gold-ira-companies">See Our Rankings</Link>
                        </Button>
                    </div>
                </Container>
            </div>

            <Container className="py-16">

                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-[#0C0D18] p-6 rounded-xl shadow-sm border border-[#2A2D42] text-center">
                        <div className="text-4xl font-bold text-[#F6F4EF] mb-2">BBB</div>
                        <div className="text-sm text-[#A8A39A] uppercase tracking-wide font-bold">Ratings Checked</div>
                    </div>
                    <div className="bg-[#0C0D18] p-6 rounded-xl shadow-sm border border-[#2A2D42] text-center">
                        <div className="text-4xl font-bold text-[#F6F4EF] mb-2">IRS</div>
                        <div className="text-sm text-[#A8A39A] uppercase tracking-wide font-bold">Rules Verified</div>
                    </div>
                    <div className="bg-[#0C0D18] p-6 rounded-xl shadow-sm border border-[#2A2D42] text-center">
                        <div className="text-4xl font-bold text-[#D4A94E] mb-2">Fees</div>
                        <div className="text-sm text-[#A8A39A] uppercase tracking-wide font-bold">Analyzed</div>
                    </div>
                    <div className="bg-[#0C0D18] p-6 rounded-xl shadow-sm border border-[#2A2D42] text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">Storage</div>
                        <div className="text-sm text-[#A8A39A] uppercase tracking-wide font-bold">Confirmed</div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">

                        <section className="prose prose-lg max-w-none prose-headings:text-[#F6F4EF] prose-p:text-[#D0CCC4]">
                            <h2>Why This Information Matters</h2>
                            <p>
                                The Gold IRA industry exists in a regulatory gray area. While the IRS has clear rules about what can go into a precious metals IRA, there's less oversight on the sales and marketing practices of the dealers themselves.
                            </p>
                            <p>
                                This creates an environment where some companies use aggressive tactics - fear-based marketing, pressure selling, and opaque fee structures - to push investors into decisions they might regret. Understanding what to look for helps you separate legitimate companies from problematic ones.
                            </p>
                            <p>
                                We've compiled information from public records, customer reviews across platforms, BBB complaint histories, and industry research to help you evaluate companies before making a decision.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-serif text-[#F6F4EF] mb-6">Gold Price Context</h2>
                            <GoldChart />
                            <p className="text-sm text-[#A8A39A] mt-2 italic">
                                Note: Companies that use market volatility to create artificial urgency ("Buy now before it's too late!") are using a common pressure tactic. Gold prices fluctuate; that's normal. Don't let fear of missing out drive your investment decisions.
                            </p>
                        </section>

                        <section id="red-flags" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold font-serif text-[#F6F4EF] mb-6 flex items-center gap-2">
                                <FileSearch className="w-6 h-6 text-[#F6F4EF]" />
                                What We Look For
                            </h2>
                            <div className="grid gap-6">
                                <EvidenceCard
                                    type="analysis"
                                    title="Fee Transparency Check"
                                    company="All Reviewed Companies"
                                    date="Ongoing"
                                    description="We verify whether companies publish their fee structures upfront or require phone calls to get pricing. Transparent companies tell you what you'll pay before you sign anything."
                                    findings="neutral"
                                />
                                <EvidenceCard
                                    type="document"
                                    title="BBB Complaint History"
                                    company="Industry-Wide"
                                    date="Ongoing"
                                    description="BBB complaints reveal patterns. One complaint could be a misunderstanding. Dozens of similar complaints suggest systemic issues. We track these patterns over time."
                                    findings="neutral"
                                />
                                <EvidenceCard
                                    type="analysis"
                                    title="Custodian & Storage Verification"
                                    company="All Reviewed Companies"
                                    date="Ongoing"
                                    description="IRA metals must be held by approved custodians in approved depositories. We verify these relationships exist and that segregated storage is available when advertised."
                                    findings="positive"
                                />
                                <EvidenceCard
                                    type="email"
                                    title="Sales Approach Analysis"
                                    company="Industry-Wide"
                                    date="Ongoing"
                                    description="Education-focused companies explain the pros AND cons of precious metals investing. High-pressure operations focus on fear and urgency. The difference is usually obvious within the first call."
                                    findings="neutral"
                                />
                            </div>
                        </section>

                        <section className="prose prose-lg max-w-none prose-headings:text-[#F6F4EF] prose-p:text-[#D0CCC4]">
                            <h2>The Regal Assets Case Study</h2>
                            <p>
                                Nothing illustrates the importance of due diligence better than the <Link href="/reviews/regal-assets-lawsuit" className="text-[#D4A94E] hover:underline">Regal Assets collapse</Link>. Once one of the most-recommended companies in the industry with thousands of positive reviews, Regal Assets appears to have ceased operations, leaving customers unable to contact anyone about their accounts.
                            </p>
                            <p>
                                The lesson: past performance and reviews aren't guarantees. Current BBB standing, verified storage arrangements, and transparent business practices matter more than marketing hype or celebrity endorsements.
                            </p>
                        </section>

                    </div>

                    <aside className="lg:col-span-1 space-y-8">
                        <div className="bg-[#0C0D18] p-6 rounded-xl border border-[#2A2D42] sticky top-24">
                            <h3 className="text-xl font-bold font-serif text-[#F6F4EF] mb-4 flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-red-500" />
                                Red Flag Phrases
                            </h3>
                            <p className="text-sm text-[#A8A39A] mb-4">
                                If you hear these on a sales call, proceed with caution:
                            </p>
                            <ul className="space-y-3 text-sm">
                                <li className="flex gap-2 items-start">
                                    <span className="text-red-500 font-bold">1.</span>
                                    <span className="text-[#D0CCC4]">"The dollar is about to collapse" - Fear-based urgency tactic</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-red-500 font-bold">2.</span>
                                    <span className="text-[#D0CCC4]">"These rare coins are better than bullion" - Often a markup trap</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-red-500 font-bold">3.</span>
                                    <span className="text-[#D0CCC4]">"I can only hold this price today" - Artificial pressure</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-red-500 font-bold">4.</span>
                                    <span className="text-[#D0CCC4]">"The government is going to confiscate IRAs" - Conspiracy selling</span>
                                </li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-[#2A2D42]">
                                <h4 className="font-bold text-[#F6F4EF] mb-2">Ready to Compare?</h4>
                                <p className="text-sm text-[#A8A39A] mb-3">See which companies passed our evaluation criteria.</p>
                                <Button className="w-full bg-[#DC2626] hover:bg-[#991B1B] text-white" asChild>
                                    <Link href="/best-gold-ira-companies">View Company Rankings</Link>
                                </Button>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
            {/* Augusta CTA */}
            <section className="py-16 bg-gradient-to-r from-[#000080] to-[#000060]">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-[#D4A94E] text-sm font-bold uppercase tracking-wider mb-3">The Company That Passed Every Check</p>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                            Augusta Precious Metals: Our #1 Pick
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200 mb-6">
                            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> A+ BBB Rating</span>
                            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> Zero Complaints</span>
                            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> Transparent Fees</span>
                            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> Education First</span>
                        </div>
                        <a
                            href={getTrackedAugustaLink("default", "investigative-hub")}
                            className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#9a1e2d] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
                        >
                            Get Your Free Info Kit
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <p className="text-white/40 text-xs mt-3">No pressure. No obligation. Just the facts.</p>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
