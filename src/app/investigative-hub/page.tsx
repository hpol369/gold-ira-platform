import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { EvidenceCard } from "@/components/investigation/EvidenceCard";
import { GoldChart } from "@/components/investigation/GoldChart";
import { ShieldAlert, Search, FileSearch, Lock } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Gold IRA Industry: Red Flags & What to Watch For",
    description: "Understanding the Gold IRA industry's common tactics. Learn what questions to ask, red flags to watch for, and how to evaluate companies before investing.",
};

export default function InvestigativeHubPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0f172a] opacity-90 z-0 pattern-grid-lg"></div>
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold tracking-widest uppercase mb-4">
                        Consumer Education
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Understanding the <span className="text-amber-400">Gold IRA Industry</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        The precious metals IRA space has good actors and bad actors. Here's what we've learned about identifying the difference and protecting yourself as an investor.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="gold" size="xl" asChild>
                            <Link href="#red-flags">Common Red Flags</Link>
                        </Button>
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
                            <Link href="/best-gold-ira-companies">See Our Rankings</Link>
                        </Button>
                    </div>
                </Container>
            </div>

            <Container className="py-16">

                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                        <div className="text-4xl font-bold text-primary mb-2">BBB</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wide font-bold">Ratings Checked</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                        <div className="text-4xl font-bold text-primary mb-2">IRS</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wide font-bold">Rules Verified</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                        <div className="text-4xl font-bold text-amber-500 mb-2">Fees</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wide font-bold">Analyzed</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                        <div className="text-4xl font-bold text-green-500 mb-2">Storage</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wide font-bold">Confirmed</div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">

                        <section className="prose prose-lg max-w-none">
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
                            <h2 className="text-2xl font-bold font-serif mb-6">Gold Price Context</h2>
                            <GoldChart />
                            <p className="text-sm text-muted-foreground mt-2 italic">
                                Note: Companies that use market volatility to create artificial urgency ("Buy now before it's too late!") are using a common pressure tactic. Gold prices fluctuate; that's normal. Don't let fear of missing out drive your investment decisions.
                            </p>
                        </section>

                        <section id="red-flags" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold font-serif mb-6 flex items-center gap-2">
                                <FileSearch className="w-6 h-6 text-primary" />
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

                        <section className="prose prose-lg max-w-none">
                            <h2>The Regal Assets Case Study</h2>
                            <p>
                                Nothing illustrates the importance of due diligence better than the <Link href="/reviews/regal-assets-lawsuit">Regal Assets collapse</Link>. Once one of the most-recommended companies in the industry with thousands of positive reviews, Regal Assets appears to have ceased operations, leaving customers unable to contact anyone about their accounts.
                            </p>
                            <p>
                                The lesson: past performance and reviews aren't guarantees. Current BBB standing, verified storage arrangements, and transparent business practices matter more than marketing hype or celebrity endorsements.
                            </p>
                        </section>

                    </div>

                    <aside className="lg:col-span-1 space-y-8">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 sticky top-24">
                            <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-red-500" />
                                Red Flag Phrases
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                If you hear these on a sales call, proceed with caution:
                            </p>
                            <ul className="space-y-3 text-sm">
                                <li className="flex gap-2 items-start">
                                    <span className="text-red-500 font-bold">1.</span>
                                    <span>"The dollar is about to collapse" - Fear-based urgency tactic</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-red-500 font-bold">2.</span>
                                    <span>"These rare coins are better than bullion" - Often a markup trap</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-red-500 font-bold">3.</span>
                                    <span>"I can only hold this price today" - Artificial pressure</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-red-500 font-bold">4.</span>
                                    <span>"The government is going to confiscate IRAs" - Conspiracy selling</span>
                                </li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-slate-200">
                                <h4 className="font-bold mb-2">Ready to Compare?</h4>
                                <p className="text-sm text-muted-foreground mb-3">See which companies passed our evaluation criteria.</p>
                                <Button className="w-full" asChild>
                                    <Link href="/best-gold-ira-companies">View Company Rankings</Link>
                                </Button>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
            <Footer />
        </main>
    );
}
