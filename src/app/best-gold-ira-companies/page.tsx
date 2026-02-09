import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { Sparkles, Trophy, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";

export const metadata = {
    title: "Best Gold IRA Companies of 2026 | Independent Reviews",
    description: "Objective comparison of the top Gold IRA companies. We analyze fees, minimums, customer service, and track records to help you make an informed decision.",
};

export default function BestGoldIraCompaniesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <div className="flex-grow">
                <header className="bg-slate-50 text-[#000080] py-20 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#B22234]/5 rounded-full blur-[150px]" />
                        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-300/20 rounded-full blur-[100px]" />
                    </div>
                    <Container className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B22234]/10 border border-[#B22234]/20 text-[#B22234] text-sm font-semibold mb-6">
                            <Sparkles className="w-4 h-4" />
                            Updated January 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#000080]">
                            We Know You&apos;re Skeptical. You Should Be.
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            After decades of Wall Street promises and financial advisors who didn&apos;t return your calls,
                            trusting another company with your savings isn&apos;t easy. That&apos;s why we focus on one thing:
                            which companies have zero complaints and treat people like you with respect.
                        </p>
                    </Container>
                </header>

                <div className="-mt-12 relative z-20">
                    <ComparisonTable />
                </div>

                <Container className="py-20">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-16">

                            <div className="prose prose-lg max-w-none text-slate-600">
                                <h2 className="text-3xl font-serif font-bold text-[#000080]">How We Separate the Good from the Bad</h2>
                                <p>
                                    Let&apos;s be honest—the Gold IRA industry has some bad actors. Pushy salespeople, hidden fees, companies that
                                    disappear when you have questions. After 30 years of hard work, the last thing you need is another
                                    financial headache.
                                </p>
                                <p>
                                    We look at what actually matters: Do they have complaints with the BBB? Will they pressure you into
                                    buying today? Can a retired steelworker or nurse actually understand their fee structure? Do they
                                    treat you like a partner or a transaction?
                                </p>
                                <p>
                                    <strong>Real example:</strong> Tom, a retired electrician from Ohio, told us he called three Gold IRA
                                    companies. Two wouldn&apos;t stop calling back. One (Augusta) sent him information, answered his
                                    questions, and let him decide on his own timeline. That&apos;s the difference we look for.
                                </p>
                            </div>

                            {/* Augusta - Best for $50k+ */}
                            <div id="augusta-review" className="scroll-mt-24 border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 shadow-xl">
                                <div className="bg-[#000080] text-white p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-[#B22234] text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">#1</div>
                                        <h3 className="font-bold text-xl whitespace-nowrap">Augusta Precious Metals</h3>
                                    </div>
                                    <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded whitespace-nowrap">Best for $50,000+</div>
                                </div>
                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row gap-8 mb-6">
                                        <div className="w-full md:w-1/3 bg-white rounded-xl h-40 flex items-center justify-center text-slate-400 border border-slate-200">
                                            [Logo/Image]
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <p className="text-slate-500 mb-4">
                                                <strong className="text-[#000080]">Why retired teachers, nurses, and factory workers choose Augusta:</strong> They don&apos;t
                                                pressure you. Period. John, a retired steelworker from Pittsburgh, chose Augusta because
                                                &quot;they explained everything in plain English and never rushed me.&quot; Their team will walk you through
                                                a free web conference—no obligation, no sales pitch. If your body says retire at 62 but your
                                                advisor says 67, Augusta can show you how gold might bridge that gap.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold border border-green-200">No Pushy Salespeople</span>
                                                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold border border-blue-200">Zero BBB Complaints</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                                            <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Why People Trust Them</h4>
                                            <ul className="text-sm space-y-1 text-slate-500">
                                                <li>- They explain things without jargon</li>
                                                <li>- Zero complaints in their entire history</li>
                                                <li>- No pressure to decide today</li>
                                            </ul>
                                        </div>
                                        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                                            <h4 className="font-bold text-amber-700 mb-2 flex items-center gap-2">Good to Know</h4>
                                            <ul className="text-sm space-y-1 text-slate-500">
                                                <li>- Need at least <span className="whitespace-nowrap">$50,000</span> to work with them</li>
                                                <li>- They want to talk first (but it&apos;s worth it)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <LeadCaptureButton
                                            variant="gold"
                                            source="best-companies-augusta"
                                            className="inline-flex items-center justify-center rounded-md font-medium bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:scale-105 transition-transform h-12 px-8 text-lg w-full"
                                        >
                                            Request Information
                                        </LeadCaptureButton>
                                        <Button variant="outline" size="lg" className="w-full border-slate-300 text-slate-600 hover:bg-slate-100" asChild>
                                            <Link href="/reviews/augusta-precious-metals">Read Full Review</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Noble Gold - Best for $10k-$50k */}
                            <div id="noble-review" className="scroll-mt-24 border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 shadow-xl">
                                <div className="bg-slate-600 text-white p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-slate-400 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">#2</div>
                                        <h3 className="font-bold text-xl whitespace-nowrap">Noble Gold Investments</h3>
                                    </div>
                                    <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded whitespace-nowrap">Best for $10,000-$50,000</div>
                                </div>
                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row gap-8 mb-6">
                                        <div className="w-full md:w-1/3 bg-white rounded-xl h-40 flex items-center justify-center text-slate-400 border border-slate-200">
                                            [Logo/Image]
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <p className="text-slate-500 mb-4">
                                                <strong className="text-[#000080]">Good for folks who haven&apos;t hit $50k yet:</strong> Mary, a recently retired
                                                school bus driver, had $35,000 to move from her 403(b). Augusta&apos;s minimum was too high,
                                                but Noble Gold worked with her budget. Their team is patient—they know you&apos;ve worked
                                                hard for every dollar and won&apos;t rush you into anything.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold border border-green-200">Works With Smaller Accounts</span>
                                                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold border border-blue-200">Texas Storage Available</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                                            <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Why People Trust Them</h4>
                                            <ul className="text-sm space-y-1 text-slate-500">
                                                <li>- No $50k minimum to get started</li>
                                                <li>- Patient reps who answer questions</li>
                                                <li>- Storage in Texas (closer to home for some)</li>
                                            </ul>
                                        </div>
                                        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                                            <h4 className="font-bold text-amber-700 mb-2 flex items-center gap-2">Good to Know</h4>
                                            <ul className="text-sm space-y-1 text-slate-500">
                                                <li>- Fees are flat, so smaller accounts pay more %</li>
                                                <li>- Newer company (founded 2016, but solid record)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Button variant="gold" size="lg" className="w-full" asChild>
                                            <a href={getTrackedLink(AFFILIATE_LINKS.noble, "best-companies", "noble")} target="_blank" rel="noopener noreferrer">
                                                Request Information
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full border-slate-300 text-slate-600 hover:bg-slate-100" asChild>
                                            <Link href="/reviews/noble-gold">Read Full Review</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Goldco - Established Alternative */}
                            <div id="goldco-review" className="scroll-mt-24 border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 shadow-xl">
                                <div className="bg-slate-600 text-white p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-slate-400 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">#3</div>
                                        <h3 className="font-bold text-xl">Goldco</h3>
                                    </div>
                                    <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded">Most Recognized Brand</div>
                                </div>
                                <div className="p-8">
                                    <p className="text-slate-500 mb-6">
                                        You&apos;ve probably seen Goldco ads everywhere—they spend more on marketing than anyone else.
                                        That said, they&apos;ve been around a while and have handled billions in rollovers. If you
                                        like working with a name you recognize and don&apos;t mind that their pricing isn&apos;t posted
                                        online, they&apos;re a solid option. Just be ready to talk to a rep before you see numbers.
                                    </p>
                                    <div className="flex gap-4">
                                        <Button variant="gold" size="lg" className="w-full" asChild>
                                            <a href={getTrackedLink(AFFILIATE_LINKS.goldco, "best-companies", "goldco")} target="_blank" rel="noopener noreferrer">
                                                Request Information
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full border-slate-300 text-slate-600 hover:bg-slate-100" asChild>
                                            <Link href="/reviews/goldco">Read Full Review</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Other Companies Worth Considering */}
                            <div className="prose prose-lg max-w-none text-slate-600">
                                <h2 className="text-2xl font-serif font-bold text-[#000080]">Other Companies Worth Looking At</h2>
                                <p>
                                    Everyone&apos;s situation is different. <Link href="/reviews/birch-gold" className="text-[#B22234] hover:underline">Birch Gold Group</Link>
                                    has been around since 2003—longer than most—and their flat fees work well if you&apos;re moving
                                    $100k+. <Link href="/reviews/american-hartford-gold" className="text-[#B22234] hover:underline">American Hartford Gold</Link>
                                    offers price-matching if you want to compare quotes.
                                </p>
                                <p>
                                    <strong>Smaller savings to protect?</strong> Don&apos;t let that stop you.
                                    <Link href="/reviews/orion-metal-exchange" className="text-[#B22234] hover:underline"> Orion Metal Exchange</Link>
                                    works specifically with folks who are just getting started or have smaller amounts to move.
                                    There&apos;s no shame in starting where you are.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-200">
                                <h3 className="text-2xl font-serif font-bold text-[#000080] mb-4">Not Sure Where to Start?</h3>
                                <p className="text-slate-500 mb-6">
                                    Every situation is different. A retired truck driver with $200k has different needs than a
                                    nurse with $50k. Take our 2-minute quiz and we&apos;ll match you with the company that fits your situation.
                                </p>
                                <Button variant="outline" className="border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-[#000080]" asChild>
                                    <Link href="/quiz">
                                        Find My Match <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>

                            {/* Also Consider Silver IRA Section */}
                            <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
                                <h3 className="text-2xl font-serif font-bold text-[#000080] mb-4">Also Consider: Silver IRA</h3>
                                <p className="text-slate-500 mb-6">
                                    Many gold investors diversify with silver. Silver offers higher volatility (bigger potential gains),
                                    lower entry points, and strong industrial demand from solar and tech. Most Gold IRA companies also
                                    offer silver—explore our silver resources to learn more.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Link href="/silver-ira" className="group bg-white border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
                                        <h4 className="font-bold text-[#000080] mb-1 group-hover:text-[#B22234] transition-colors">Silver IRA Hub</h4>
                                        <p className="text-xs text-slate-500">Complete silver retirement guide</p>
                                    </Link>
                                    <Link href="/silver-price" className="group bg-white border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
                                        <h4 className="font-bold text-[#000080] mb-1 group-hover:text-[#B22234] transition-colors">Silver Price Predictions</h4>
                                        <p className="text-xs text-slate-500">2026-2040 expert forecasts</p>
                                    </Link>
                                    <Link href="/best-silver-ira-companies" className="group bg-white border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
                                        <h4 className="font-bold text-[#000080] mb-1 group-hover:text-[#B22234] transition-colors">Best Silver IRA Companies</h4>
                                        <p className="text-xs text-slate-500">Top providers ranked</p>
                                    </Link>
                                    <Link href="/compare/gold-vs-silver-ira" className="group bg-white border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
                                        <h4 className="font-bold text-[#000080] mb-1 group-hover:text-[#B22234] transition-colors">Gold vs Silver IRA</h4>
                                        <p className="text-xs text-slate-500">Side-by-side comparison</p>
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className="relative">
                            <StickyMasterSidebar />
                        </div>
                    </div>
                </Container>

                {/* Augusta CTA */}
                <section className="py-16">
                    <Container>
                        <AugustaCTA
                            variant="footer"
                            linkContext="comparison"
                            headline="You've Earned the Right to Be Careful With Your Money"
                            subheadline="Augusta Precious Metals has zero BBB complaints because they treat people right. No pressure, no gimmicks—just honest folks who will answer your questions and let you decide on your own timeline. After 30 years of hard work, that's the least you deserve."
                            trackSource="best-companies"
                        />
                    </Container>
                </section>
            </div>
            <Footer />
        </main>
    );
}
