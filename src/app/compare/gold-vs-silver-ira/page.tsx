import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, ComparisonRow } from "@/components/compare/ComparisonTable";
import { VerdictBox } from "@/components/compare/VerdictBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { Metadata } from "next";
import { ArrowRight, TrendingUp, ShieldCheck, DollarSign, Scale, Coins } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Gold vs. Silver IRA: Which Precious Metal is Best? (2026 Guide)",
    description: "Comparing gold vs silver for your IRA. Learn the differences in volatility, growth potential, storage costs, and which metal is right for your retirement.",
};

const comparisonRows: ComparisonRow[] = [
    { feature: "Price Per Ounce", optionA: "~$2,000-2,500", optionB: "~$25-35", winner: "Tie" },
    { feature: "Volatility", optionA: "Lower (more stable)", optionB: "Higher (bigger swings)", winner: "Tie" },
    { feature: "Growth Potential", optionA: "Moderate", optionB: "Higher (in bull markets)", winner: "B" },
    { feature: "Inflation Hedge", optionA: "Excellent", optionB: "Very Good", winner: "A" },
    { feature: "Industrial Demand", optionA: "~10% of demand", optionB: "~50% of demand", winner: "B" },
    { feature: "Storage Cost Per $", optionA: "Lower (compact)", optionB: "Higher (bulky)", winner: "A" },
    { feature: "Entry Point", optionA: "Higher barrier", optionB: "Lower barrier", winner: "B" },
    { feature: "Liquidity", optionA: "Very High", optionB: "High", winner: "A" },
    { feature: "Historical Track Record", optionA: "5,000+ years", optionB: "5,000+ years", winner: "Tie" },
    { feature: "Crash Protection", optionA: "Excellent", optionB: "Good (more volatile)", winner: "A" }
];

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "comparison", label: "Side-by-Side Comparison" },
    { id: "gold-overview", label: "Gold IRA Overview" },
    { id: "silver-overview", label: "Silver IRA Overview" },
    { id: "key-differences", label: "Key Differences" },
    { id: "gold-silver-ratio", label: "The Gold-Silver Ratio" },
    { id: "allocation", label: "How to Allocate" },
    { id: "faq", label: "FAQs" }
];

export default function GoldVsSilverIraPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-secondary mb-6">
                        Precious Metals Showdown
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Gold vs. Silver IRA
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Should you invest in gold, silver, or both? We compare these precious metals to help you build the ideal retirement portfolio.
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-invert prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

                        <p className="lead">
                            <strong>Gold vs. Silver</strong>—it&apos;s one of the oldest debates in precious metals investing. Both have protected wealth for millennia, but they behave very differently. This guide helps you decide how to allocate between these two metals in your IRA.
                        </p>

                        <p>
                            The short answer: <strong>most investors should own both</strong>. Gold provides stability; silver provides growth potential. The right mix depends on your goals, timeline, and risk tolerance.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="Combination is Best (Gold-Heavy Portfolio)"
                                summary="Gold wins for stability, lower storage costs, and proven crash protection. Silver wins for growth potential and lower entry point. Most advisors recommend a gold-heavy portfolio (60-75% gold, 25-40% silver) that provides stability with growth potential."
                                bestFor="Conservative investors should lean toward gold; aggressive investors can tilt toward silver."
                            />
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2>Complete Side-by-Side Comparison</h2>
                            <p>
                                Here&apos;s how gold and silver compare across key investment factors:
                            </p>
                            <ComparisonTable
                                optionAName="Gold IRA"
                                optionBName="Silver IRA"
                                rows={comparisonRows}
                            />
                        </section>

                        {/* Gold Overview */}
                        <section id="gold-overview" className="scroll-mt-32">
                            <h2>Gold IRA: The Stability Play</h2>
                            <p>
                                <strong>Gold</strong> has been the ultimate store of value for over 5,000 years. Central banks hold it, wealthy families hold it, and increasingly, everyday investors hold it in their retirement accounts.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30">
                                    <h4 className="font-bold text-green-400 mb-3">Gold Strengths</h4>
                                    <ul className="space-y-2 text-sm text-green-300">
                                        <li>• Superior stability and crash protection</li>
                                        <li>• Lower storage costs per dollar</li>
                                        <li>• More liquid (easier to sell large amounts)</li>
                                        <li>• Universally recognized as money</li>
                                        <li>• Less affected by economic downturns</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
                                    <h4 className="font-bold text-red-400 mb-3">Gold Weaknesses</h4>
                                    <ul className="space-y-2 text-sm text-red-300">
                                        <li>• Higher price per ounce (barrier to entry)</li>
                                        <li>• Lower growth potential than silver</li>
                                        <li>• Less industrial demand</li>
                                        <li>• May underperform silver in bull markets</li>
                                    </ul>
                                </div>
                            </div>

                            <p>
                                <strong>Gold is ideal for:</strong> Wealth preservation, crash protection, and investors who prioritize stability over aggressive growth.
                            </p>
                        </section>

                        {/* Silver Overview */}
                        <section id="silver-overview" className="scroll-mt-32">
                            <h2>Silver IRA: The Growth Play</h2>
                            <p>
                                <strong>Silver</strong> offers unique advantages that gold doesn&apos;t provide. Its dual role as both a precious metal and an industrial commodity creates interesting dynamics—and potentially higher returns.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30">
                                    <h4 className="font-bold text-green-400 mb-3">Silver Strengths</h4>
                                    <ul className="space-y-2 text-sm text-green-300">
                                        <li>• Higher growth potential in bull markets</li>
                                        <li>• Lower price = more accessible</li>
                                        <li>• Strong industrial demand (solar, electronics)</li>
                                        <li>• Currently undervalued vs. gold (historically)</li>
                                        <li>• Potential for outsized gains</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
                                    <h4 className="font-bold text-red-400 mb-3">Silver Weaknesses</h4>
                                    <ul className="space-y-2 text-sm text-red-300">
                                        <li>• Higher volatility (bigger drops possible)</li>
                                        <li>• Higher storage costs per dollar</li>
                                        <li>• More affected by economic recessions</li>
                                        <li>• Higher premiums on coins</li>
                                        <li>• Requires more physical space</li>
                                    </ul>
                                </div>
                            </div>

                            <p>
                                <strong>Silver is ideal for:</strong> Growth-oriented investors, those with longer time horizons, and investors who believe silver is undervalued relative to gold.
                            </p>

                            <p>
                                Learn more in our <Link href="/guide/silver-ira-guide">comprehensive Silver IRA guide</Link>.
                            </p>
                        </section>

                        {/* Key Differences */}
                        <section id="key-differences" className="scroll-mt-32">
                            <h2>Key Differences: Gold vs. Silver</h2>

                            <div className="not-prose space-y-6 my-8">
                                <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-400 text-lg">Volatility & Returns</h4>
                                        <p className="text-slate-300 mt-1"><strong>Gold:</strong> More stable, typically ±10-20% annual swings. Better for preservation.</p>
                                        <p className="text-slate-300 mt-1"><strong>Silver:</strong> More volatile, can swing ±30-50%. From 2008-2011, silver rose 400%+ while gold rose 166%. But it also falls harder.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                                        <Coins className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-400 text-lg">Industrial Demand</h4>
                                        <p className="text-slate-300 mt-1"><strong>Gold:</strong> ~10% industrial use. Primarily an investment/store of value.</p>
                                        <p className="text-slate-300 mt-1"><strong>Silver:</strong> ~50% industrial use. Essential for solar panels, electronics, EVs, and medical devices. Green energy transition is bullish for silver.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                        <DollarSign className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-400 text-lg">Storage Costs</h4>
                                        <p className="text-slate-300 mt-1"><strong>Gold:</strong> Higher value-to-weight ratio. $50,000 in gold weighs ~1.5 lbs.</p>
                                        <p className="text-slate-300 mt-1"><strong>Silver:</strong> Same $50,000 weighs ~100+ lbs. More space = higher storage fees.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-400 text-lg">Crash Protection</h4>
                                        <p className="text-slate-300 mt-1"><strong>Gold:</strong> Superior. Often rises when stocks crash. Pure &quot;safe haven&quot; asset.</p>
                                        <p className="text-slate-300 mt-1"><strong>Silver:</strong> Good but less reliable. Can initially fall with stocks (due to industrial demand drop), then recover.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Find the Best Gold & Silver IRA Company</h3>
                                <p className="mb-6 text-gray-200">Take our quiz to get matched with a company that offers both metals at competitive prices.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Gold-Silver Ratio */}
                        <section id="gold-silver-ratio" className="scroll-mt-32">
                            <h2>The Gold-Silver Ratio: Why It Matters</h2>
                            <p>
                                The <strong>gold-silver ratio</strong> measures how many ounces of silver it takes to buy one ounce of gold. It&apos;s a key indicator many investors use to determine which metal is relatively undervalued.
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-amber-400 text-lg mb-4">Gold-Silver Ratio History</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="w-3 h-3 rounded-full bg-secondary mt-1.5 flex-shrink-0"></span>
                                        <span><strong>Historical average:</strong> 15:1 to 20:1</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-3 h-3 rounded-full bg-secondary mt-1.5 flex-shrink-0"></span>
                                        <span><strong>Modern average:</strong> 50:1 to 60:1</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-3 h-3 rounded-full bg-secondary mt-1.5 flex-shrink-0"></span>
                                        <span><strong>Current ratio:</strong> Often 80:1 or higher</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-3 h-3 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                                        <span><strong>Implication:</strong> Silver is historically undervalued relative to gold</span>
                                    </li>
                                </ul>
                            </div>

                            <h3>What Does This Mean for Investors?</h3>
                            <p>
                                When the ratio is high (80:1+), silver is relatively cheap compared to gold. If the ratio returns toward historical norms (40:1 or lower), silver would dramatically outperform gold.
                            </p>
                            <ul>
                                <li><strong>High ratio:</strong> Favors buying silver (undervalued)</li>
                                <li><strong>Low ratio:</strong> Favors buying gold (silver is expensive)</li>
                            </ul>
                            <p>
                                Many investors use this ratio to rebalance their precious metals holdings over time.
                            </p>

                            <Callout type="tip" title="Silver Bulls Point Out">
                                If the gold-silver ratio returned to its 20th century average of ~47:1, silver would need to more than double from current levels (assuming gold stays flat). This is why some investors are heavily weighted toward silver.
                            </Callout>
                        </section>

                        {/* Allocation */}
                        <section id="allocation" className="scroll-mt-32">
                            <h2>How to Allocate: Gold vs. Silver</h2>
                            <p>
                                Here are common allocation strategies for precious metals IRAs:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Strategy</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Gold</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Silver</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Conservative</td>
                                            <td className="p-4">75-80%</td>
                                            <td className="p-4">20-25%</td>
                                            <td className="p-4">Near retirement, stability-focused</td>
                                        </tr>
                                        <tr className="bg-white/5">
                                            <td className="p-4 font-semibold text-white">Balanced</td>
                                            <td className="p-4">60-70%</td>
                                            <td className="p-4">30-40%</td>
                                            <td className="p-4">Most investors, diversified approach</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Growth</td>
                                            <td className="p-4">50%</td>
                                            <td className="p-4">50%</td>
                                            <td className="p-4">Longer timeline, higher risk tolerance</td>
                                        </tr>
                                        <tr className="bg-white/5">
                                            <td className="p-4 font-semibold text-white">Aggressive</td>
                                            <td className="p-4">30-40%</td>
                                            <td className="p-4">60-70%</td>
                                            <td className="p-4">Silver bulls, long timeline</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>Factors to Consider</h3>
                            <ul>
                                <li><strong>Timeline:</strong> Longer = can handle more silver volatility</li>
                                <li><strong>Risk tolerance:</strong> Lower = more gold</li>
                                <li><strong>Storage costs:</strong> Smaller budgets may favor gold (lower storage per $)</li>
                                <li><strong>Market outlook:</strong> Bullish on precious metals = consider more silver</li>
                                <li><strong>Retirement proximity:</strong> Closer = more gold for stability</li>
                            </ul>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Gold vs. Silver IRA FAQs</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Can I hold both gold and silver in the same IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-300">
                                        Yes! Most precious metals IRAs hold a combination of gold and silver (and sometimes platinum and palladium). This is the most common approach—you don&apos;t need separate accounts. Your custodian and depository can hold multiple metals in the same IRA.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Is silver a better investment than gold right now?</h4>
                                        <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-300">
                                        The gold-silver ratio suggests silver is undervalued relative to gold. If you believe precious metals will rise, silver has more upside potential. However, &quot;better&quot; depends on your goals—gold is better for stability, silver for growth. Most advisors recommend owning both.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Why is silver cheaper than gold?</h4>
                                        <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-300">
                                        Silver is more abundant in the Earth&apos;s crust than gold (about 17x more). Additionally, silver is consumed in industrial applications (it&apos;s not recycled as much as gold), while gold is primarily hoarded. Supply and demand dynamics keep silver cheaper per ounce—but that doesn&apos;t make it less valuable as an investment.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What&apos;s the minimum to start a gold or silver IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-300">
                                        Minimums vary by company. <Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link> accepts as little as $2,000. <Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link> starts at $25,000. <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta Precious Metals</Link> requires $50,000+. Lower minimums make silver more accessible since you can buy more ounces per dollar.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Start Your Precious Metals IRA?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Find the best company for gold and silver at competitive prices.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/guide/silver-ira-guide">Read the Silver Guide</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </article>
                </div>
            </Container>
        </main>
    );
}
