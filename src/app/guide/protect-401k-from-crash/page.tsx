import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, ShieldCheck, TrendingDown, Coins, BarChart3, AlertTriangle, PieChart } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "How to Protect Your 401(k) From a Stock Market Crash | Rich Dad Retirement",
    description: "Learn proven strategies to protect your 401(k) from stock market crashes. Diversification, rebalancing, gold allocation, and crisis-proofing techniques.",
    openGraph: {
        title: "Protect Your 401(k) From Market Crash - 2026 Guide",
        description: "Proven strategies to protect your 401(k) from stock market crashes and economic downturns.",
        type: "article",
    },
};

const tocItems = [
    { id: "overview", label: "Why Protection Matters" },
    { id: "diversify", label: "1. Diversify Beyond Stocks" },
    { id: "age-allocation", label: "2. Age-Appropriate Allocation" },
    { id: "gold", label: "3. Add Gold Allocation" },
    { id: "rebalance", label: "4. Rebalance Regularly" },
    { id: "target-date", label: "5. Consider Target-Date Funds" },
    { id: "stable-value", label: "6. Use Stable Value Funds" },
    { id: "cash-buffer", label: "7. Build a Cash Buffer" },
    { id: "dont-panic", label: "8. Don't Panic Sell" },
    { id: "rollover", label: "9. Consider a Rollover" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "HowTo",
            "name": "How to Protect Your 401(k) From a Stock Market Crash",
            "description": "Step-by-step guide to protecting your 401(k) from market crashes",
            "step": [
                {
                    "@type": "HowToStep",
                    "name": "Diversify Beyond Stocks",
                    "text": "Spread investments across stocks, bonds, and alternative assets like gold"
                },
                {
                    "@type": "HowToStep",
                    "name": "Use Age-Appropriate Allocation",
                    "text": "Reduce stock exposure as you approach retirement"
                },
                {
                    "@type": "HowToStep",
                    "name": "Add Gold Allocation",
                    "text": "Consider 10-15% in precious metals through Gold IRA rollover"
                },
                {
                    "@type": "HowToStep",
                    "name": "Rebalance Regularly",
                    "text": "Review and rebalance portfolio quarterly or annually"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How do I protect my 401(k) from a market crash?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Protect your 401(k) by: 1) Diversifying across stocks, bonds, and gold, 2) Using age-appropriate allocation (less stocks as you near retirement), 3) Rebalancing regularly, 4) Maintaining a cash buffer, 5) Not panic selling during crashes. Consider rolling part of your 401(k) to a Gold IRA for precious metals exposure."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Should I move my 401(k) to cash before a crash?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Moving entirely to cash is generally not recommended because: 1) You can't reliably predict crashes, 2) You'll miss the recovery, 3) Cash loses value to inflation. Instead, maintain a diversified portfolio with some defensive assets (bonds, gold, stable value) that provide crash protection while still participating in market growth."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I put my 401(k) in gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most 401(k) plans don't offer direct gold investment options. However, you can: 1) Roll over an old 401(k) to a Gold IRA (tax-free), 2) Invest in gold ETFs or mining stocks if your 401(k) offers them, or 3) Wait until you change jobs or retire to do a rollover. A Gold IRA allows you to hold physical gold in a tax-advantaged account."
                    }
                }
            ]
        }
    ]
};

export default function Protect401kFromCrashPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-800/50 py-16 border-b border-white/10">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Comprehensive Guide
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            How to Protect Your 401(k) From a Stock Market Crash
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Proven strategies to shield your retirement savings from market downturns.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-400 prose-a:text-secondary max-w-none">

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead text-xl text-slate-400">
                                Market crashes are inevitable. Since 1929, the stock market has crashed more than a dozen times—with drops of 20-50% or more. For those nearing retirement, a major crash at the wrong time can be devastating.
                            </p>
                            <p>
                                In 2008, the average 401(k) lost 31% of its value. Many retirees had to delay retirement or return to work. The lesson? <strong className="text-white">Protection must be built before the crash, not during it.</strong>
                            </p>
                            <p>
                                This guide covers 9 proven strategies to protect your 401(k) from the next market downturn.
                            </p>

                            <Callout type="warning" title="Time Is Your Enemy">
                                The closer you are to retirement, the more dangerous a crash becomes. A 40% loss at age 30 has 35 years to recover. The same loss at age 60 may never recover before you need the money.
                            </Callout>
                        </section>

                        {/* 1. Diversify */}
                        <section id="diversify" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <PieChart className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">1. Diversify Beyond Stocks</h2>
                            </div>
                            <p>
                                True diversification means holding assets that don&apos;t move together. During the 2008 crash, &quot;diversified&quot; stock portfolios (US, international, large-cap, small-cap) all fell together.
                            </p>
                            <p>
                                Real diversification requires <strong className="text-white">different asset classes</strong>:
                            </p>
                            <ul className="text-slate-400">
                                <li><strong className="text-white">Stocks:</strong> Growth potential, but volatile</li>
                                <li><strong className="text-white">Bonds:</strong> Stability, income, often rise when stocks fall</li>
                                <li><strong className="text-white">Gold/Precious Metals:</strong> Crisis hedge, rose 25% in 2008 while stocks fell 37%</li>
                                <li><strong className="text-white">Real Estate:</strong> Income and inflation protection</li>
                                <li><strong className="text-white">Cash:</strong> Stability and buying opportunities</li>
                            </ul>
                        </section>

                        {/* 2. Age-Appropriate Allocation */}
                        <section id="age-allocation" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">2. Use Age-Appropriate Allocation</h2>
                            </div>
                            <p>
                                A common rule of thumb: subtract your age from 110 to get your stock percentage. A 60-year-old would have 50% stocks; a 30-year-old would have 80%.
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Age</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Stocks</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Bonds</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Gold/Alternatives</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4">30s</td>
                                            <td className="p-4">70-80%</td>
                                            <td className="p-4">10-20%</td>
                                            <td className="p-4">5-10%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">40s</td>
                                            <td className="p-4">60-70%</td>
                                            <td className="p-4">20-25%</td>
                                            <td className="p-4">10-15%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">50s</td>
                                            <td className="p-4">50-60%</td>
                                            <td className="p-4">25-35%</td>
                                            <td className="p-4">10-15%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">60s</td>
                                            <td className="p-4">40-50%</td>
                                            <td className="p-4">30-40%</td>
                                            <td className="p-4">10-20%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 3. Gold Allocation */}
                        <section id="gold" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">3. Add a Gold Allocation</h2>
                            </div>
                            <p>
                                Gold is one of the few assets that consistently rises during market crashes. During the 2008 financial crisis, gold rose 25% while the S&P 500 fell 37%.
                            </p>
                            <p>
                                <strong className="text-white">The problem:</strong> Most 401(k) plans don&apos;t offer gold investment options.
                            </p>
                            <p>
                                <strong className="text-white">The solution:</strong> Roll over part of your 401(k) to a <Link href="/what-is-a-gold-ira">Gold IRA</Link>. This allows you to hold physical gold, silver, platinum, and palladium in a tax-advantaged retirement account.
                            </p>

                            <Callout type="tip" title="401(k) to Gold IRA Rollover">
                                If you have an old 401(k) from a previous employer, you can roll it over to a Gold IRA tax-free. This gives you direct ownership of physical precious metals. Learn more in our <Link href="/guide/401k-to-gold-rollover">401(k) to Gold Rollover Guide</Link>.
                            </Callout>
                        </section>

                        {/* 4. Rebalance */}
                        <section id="rebalance" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">4. Rebalance Regularly</h2>
                            </div>
                            <p>
                                If your target is 60% stocks and markets have risen, you might now be at 75% stocks—more exposed to a crash than intended. Rebalancing brings you back to target.
                            </p>
                            <p>
                                <strong className="text-white">How often:</strong> Quarterly or annually. Some experts recommend rebalancing when any asset class drifts 5%+ from target.
                            </p>
                            <p>
                                <strong className="text-white">Automatic option:</strong> Many 401(k) plans offer automatic rebalancing—turn it on.
                            </p>
                        </section>

                        {/* 5. Target-Date Funds */}
                        <section id="target-date" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">5. Consider Target-Date Funds</h2>
                            </div>
                            <p>
                                Target-date funds automatically become more conservative as you approach retirement. A &quot;2035 Fund&quot; is more aggressive now but will shift to bonds/stable assets by 2035.
                            </p>
                            <p>
                                <strong className="text-white">Pros:</strong> Automatic rebalancing, professionally managed, simple
                            </p>
                            <p>
                                <strong className="text-white">Cons:</strong> One-size-fits-all, may not match your risk tolerance, limited customization
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Add Crash Protection to Your 401(k)</h3>
                                <p className="mb-6 text-gray-200">Roll over your 401(k) to a Gold IRA for physical precious metals protection.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* 6. Stable Value Funds */}
                        <section id="stable-value" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">6. Use Stable Value Funds</h2>
                            </div>
                            <p>
                                Stable value funds are unique to retirement plans—they offer bond-like returns with principal protection. They typically yield 2-4% with no risk of losing money.
                            </p>
                            <p>
                                Consider allocating 10-20% to stable value, especially if you&apos;re within 10 years of retirement. This provides a buffer during crashes.
                            </p>
                        </section>

                        {/* 7. Cash Buffer */}
                        <section id="cash-buffer" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-slate-700/50 rounded-lg text-slate-300">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">7. Build a Cash Buffer</h2>
                            </div>
                            <p>
                                Outside your 401(k), maintain 1-2 years of expenses in cash or short-term bonds. This &quot;retirement buffer&quot; lets you avoid selling stocks during crashes.
                            </p>
                            <p>
                                If markets crash 40% early in retirement, you can draw from your cash buffer while waiting for stocks to recover.
                            </p>
                        </section>

                        {/* 8. Don't Panic */}
                        <section id="dont-panic" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">8. Don&apos;t Panic Sell</h2>
                            </div>
                            <p>
                                The worst thing you can do during a crash is panic sell. Investors who sold at the 2008 bottom and missed the 2009 recovery suffered permanent losses.
                            </p>
                            <p>
                                If you&apos;ve built proper diversification and a cash buffer, you can ride out crashes without selling at the worst possible time.
                            </p>

                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 not-prose my-6">
                                <h4 className="font-bold text-red-400 mb-2">The Cost of Panic Selling</h4>
                                <p className="text-red-300 text-sm">
                                    An investor who sold at the March 2009 bottom and stayed in cash for just one year missed a 68% recovery. That one decision likely cost hundreds of thousands in retirement wealth.
                                </p>
                            </div>
                        </section>

                        {/* 9. Consider Rollover */}
                        <section id="rollover" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">9. Consider a Gold IRA Rollover</h2>
                            </div>
                            <p>
                                If your 401(k) doesn&apos;t offer the crash protection you need, consider rolling over to a Gold IRA. This is particularly useful for:
                            </p>
                            <ul className="text-slate-400">
                                <li>Old 401(k)s from previous employers</li>
                                <li>Retirees with 401(k) access</li>
                                <li>Those wanting physical gold ownership</li>
                            </ul>
                            <p>
                                A Gold IRA rollover is tax-free and penalty-free when done correctly. You maintain the tax-advantaged status while gaining access to physical precious metals.
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">How do I protect my 401(k) from a market crash?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Protect your 401(k) by: 1) Diversifying across stocks, bonds, and gold, 2) Using age-appropriate allocation, 3) Rebalancing regularly, 4) Maintaining a cash buffer, 5) Not panic selling. Consider rolling over to a <Link href="/what-is-a-gold-ira" className="text-secondary hover:underline">Gold IRA</Link> for precious metals exposure.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Should I move my 401(k) to cash before a crash?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Moving entirely to cash is generally not recommended because you can&apos;t reliably predict crashes, you&apos;ll miss the recovery, and cash loses value to inflation. Instead, maintain diversification with defensive assets that provide crash protection while participating in growth.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Can I put my 401(k) in gold?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Most 401(k) plans don&apos;t offer direct gold options. However, you can roll over an old 401(k) to a <Link href="/guide/401k-to-gold-rollover" className="text-secondary hover:underline">Gold IRA</Link> tax-free, invest in gold ETFs if your plan offers them, or wait until job change/retirement to do a rollover.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Protect Your 401(k) With Gold</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Roll over your 401(k) to a Gold IRA for physical precious metals crash protection.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/guide/401k-to-gold-rollover">401(k) Rollover Guide</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>

            {/* CTA Section */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <AugustaCTA variant="footer" trackSource="guide-protect-401k-from-crash" />
                </Container>
            </section>
        </main>
    );
}
