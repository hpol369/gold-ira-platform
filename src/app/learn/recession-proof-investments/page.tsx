import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { ShieldCheck, TrendingDown, Coins, Building2, Droplets, Pill, ArrowRight, BarChart3 } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Recession-Proof Investments: 7 Assets That Survive",
    description: "Recession-proof investments to protect your portfolio during downturns. Learn about gold, bonds, utilities, and other defensive assets.",
    openGraph: {
        title: "Recession-Proof Investments: Protect Your Portfolio",
        description: "7 investments that have historically performed well during recessions and economic crises.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const takeaways = [
    "No investment is 100% recession-proof, but some assets are far more resilient than others.",
    "Gold has historically risen during recessions, gaining 5.5% during the 2008 crash while stocks fell 37%.",
    "Treasury bonds and high-quality bonds typically rise when stocks fall as investors seek safety.",
    "Consumer staples, utilities, and healthcare stocks tend to hold up because demand is consistent.",
    "Cash provides stability and buying opportunities but loses purchasing power to inflation.",
    "Diversification across multiple recession-resistant assets provides the best protection.",
    "The time to build recession protection is before the recession, not during it."
];

const tocItems = [
    { id: "overview", label: "What Is Recession-Proof?" },
    { id: "gold", label: "1. Gold & Precious Metals" },
    { id: "bonds", label: "2. Treasury Bonds" },
    { id: "utilities", label: "3. Utility Stocks" },
    { id: "healthcare", label: "4. Healthcare Stocks" },
    { id: "staples", label: "5. Consumer Staples" },
    { id: "cash", label: "6. Cash & Equivalents" },
    { id: "reits", label: "7. Essential REITs" },
    { id: "strategy", label: "Building Your Strategy" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Recession-Proof Investments: 7 Assets That Survive Economic Downturns",
            "description": "Discover recession-proof investments that protect your portfolio during economic downturns.",
            "author": {
                "@type": "Person",
                "name": "Thomas Richardson"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "datePublished": "2026-01-23",
            "dateModified": "2026-01-23"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What investments are recession-proof?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "While no investment is 100% recession-proof, historically resilient assets include: gold and precious metals, Treasury bonds, utility stocks, healthcare stocks, consumer staples, cash equivalents, and essential real estate (like healthcare facilities). These tend to hold value or even rise during economic downturns."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is gold a good recession investment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, gold has historically performed well during recessions. During the 2008 financial crisis, gold rose 5.5% while stocks fell 37%. Gold is considered a 'safe haven' asset because investors flee to it during uncertainty. A Gold IRA allows you to hold physical gold in a tax-advantaged retirement account."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I protect my retirement from a recession?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Protect your retirement by: 1) Diversifying into recession-resistant assets like gold, bonds, and defensive stocks, 2) Maintaining adequate cash reserves (1-2 years of expenses), 3) Reducing exposure to cyclical stocks before recession, 4) Having multiple income sources, and 5) Avoiding panic selling during downturns."
                    }
                }
            ]
        }
    ]
};

export default function RecessionProofInvestmentsPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-white/5 backdrop-blur-sm py-16 border-b border-white/10">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Portfolio Protection
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Recession-Proof Investments
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            You've built your 401k over 30+ years of hard work. Now you're 5-10 years from retirement, and the thought of another 2008-style crash keeps you up at night. Here are 7 assets that have historically held their value—or even grown—when the market tanks.
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
                    <article className="flex-1 prose prose-lg prose-invert prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead">
                                Let's be honest: if you're 55-65 with a $500k-$1M 401k, you can't afford to ride out another 2008. Those "just stay the course" advisors? They kept collecting fees while people like you watched 40% of their life savings disappear. You've worked too hard—too many early mornings, too many overtime shifts—to let that happen again.
                            </p>
                            <p>
                                The term &quot;recession-proof&quot; is a bit misleading. Nothing is 100% safe. But some assets have proven themselves time and again—they either hold their value or actually <em>rise</em> when the stock market is falling apart. These are the investments that let you sleep at night.
                            </p>
                            <p>
                                Here's what actually works—no Wall Street jargon, just the facts from historical data.
                            </p>

                            <Callout type="info" title="Recession Definition">
                                A recession is typically defined as two consecutive quarters of negative GDP growth. During recessions, unemployment rises, consumer spending falls, and stock markets often decline significantly.
                            </Callout>
                        </section>

                        {/* 1. Gold */}
                        <section id="gold" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">1. Gold & Precious Metals</h2>
                            </div>
                            <p>
                                Here's what your broker probably won't tell you: while they were advising people to "stay the course" during 2008, gold was going UP. When the stock market dropped 37%, gold gained 25%. Look at the numbers:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Recession</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">S&P 500</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Gold</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="p-4 text-white">2007-2009 (Great Recession)</td>
                                            <td className="p-4 text-red-400 font-semibold">-37%</td>
                                            <td className="p-4 text-green-400 font-semibold">+25%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white">2001 (Dot-Com Recession)</td>
                                            <td className="p-4 text-red-400 font-semibold">-13%</td>
                                            <td className="p-4 text-green-400 font-semibold">+2%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white">2020 (COVID Recession)</td>
                                            <td className="p-4 text-red-400 font-semibold">-34% (Feb-Mar)</td>
                                            <td className="p-4 text-green-400 font-semibold">+25% (full year)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <strong>Why gold works:</strong> Gold doesn't depend on any company's earnings or any government's promises. It's been a store of value for 5,000 years. When people lose faith in the financial system, they turn to gold. That's not theory—that's history.
                            </p>
                            <p>
                                <strong>How to add it to your retirement:</strong> You can move part of your 401k or IRA into physical gold through a <Link href="/what-is-a-gold-ira">Gold IRA</Link>. The gold is held in a secure depository, you maintain the tax advantages, and you own real metal—not a piece of paper.
                            </p>
                        </section>

                        {/* 2. Bonds */}
                        <section id="bonds" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">2. Treasury Bonds</h2>
                            </div>
                            <p>
                                US Treasury bonds are backed by the full faith and credit of the US government. During recessions, as the Federal Reserve cuts interest rates and investors seek safety, bond prices typically rise.
                            </p>
                            <p>
                                <strong>Why bonds work:</strong> Guaranteed income stream, inverse relationship to interest rates (which fall during recessions), and flight-to-quality effect as investors sell stocks for bonds.
                            </p>
                            <p>
                                <strong>Best choices:</strong> Long-term Treasury bonds (most sensitive to rate cuts), Treasury Inflation-Protected Securities (TIPS) for inflation protection, high-quality corporate bonds.
                            </p>

                            <Callout type="warning" title="Bond Risk in Rising Rate Environments">
                                While bonds typically perform well during recessions, they can lose value when interest rates rise (as in 2022). Consider a bond ladder or shorter-duration bonds if rate hikes are expected.
                            </Callout>
                        </section>

                        {/* 3. Utilities */}
                        <section id="utilities" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-yellow-500/20 rounded-lg text-yellow-400">
                                    <Droplets className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">3. Utility Stocks</h2>
                            </div>
                            <p>
                                People need electricity, water, and gas regardless of economic conditions. This makes utility companies some of the most recession-resistant businesses.
                            </p>
                            <p>
                                <strong>Why utilities work:</strong> Inelastic demand (you can&apos;t &quot;cut back&quot; on electricity), regulated monopolies with predictable revenue, high dividend yields that provide income during downturns.
                            </p>
                            <p>
                                <strong>Examples:</strong> Duke Energy, Southern Company, NextEra Energy, utility ETFs like XLU.
                            </p>
                        </section>

                        {/* 4. Healthcare */}
                        <section id="healthcare" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <Pill className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">4. Healthcare Stocks</h2>
                            </div>
                            <p>
                                Healthcare spending continues regardless of economic conditions—people still need medications, doctor visits, and medical procedures during recessions.
                            </p>
                            <p>
                                <strong>Why healthcare works:</strong> Non-discretionary spending, aging population increases demand, many products (medications) are essential with no substitutes.
                            </p>
                            <p>
                                <strong>Best choices:</strong> Large pharmaceutical companies (Johnson & Johnson, Pfizer), healthcare REITs, healthcare ETFs like XLV.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Protect What You've Built</h3>
                                <p className="mb-6 text-gray-200">You've worked 30+ years to build your 401k. A Gold IRA moves part of it into physical gold—the asset that's risen during every major crash.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find the Right Gold IRA <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* 5. Consumer Staples */}
                        <section id="staples" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">5. Consumer Staples</h2>
                            </div>
                            <p>
                                Consumer staples are everyday necessities that people buy regardless of economic conditions: food, beverages, household products, and personal care items.
                            </p>
                            <p>
                                <strong>Why staples work:</strong> Inelastic demand—you still buy toothpaste, soap, and groceries during a recession. These companies also tend to pay consistent dividends.
                            </p>
                            <p>
                                <strong>Examples:</strong> Procter & Gamble, Coca-Cola, Walmart, Costco, consumer staples ETF (XLP).
                            </p>
                        </section>

                        {/* 6. Cash */}
                        <section id="cash" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-slate-800/50 rounded-lg text-slate-400">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">6. Cash & Cash Equivalents</h2>
                            </div>
                            <p>
                                Cash provides stability and optionality during recessions. While it earns little return, it doesn&apos;t lose value in market crashes—and it gives you the ability to buy assets at depressed prices.
                            </p>
                            <p>
                                <strong>Why cash works:</strong> Provides liquidity for emergencies, buying opportunities when markets crash, and peace of mind during volatility.
                            </p>
                            <p>
                                <strong>Best options:</strong> High-yield savings accounts, money market funds, short-term Treasury bills, CDs.
                            </p>

                            <Callout type="tip" title="The Cash Dilemma">
                                While cash is stable, it loses purchasing power to inflation over time. The solution: keep enough cash for emergencies and opportunities (6-24 months of expenses), but don&apos;t hold excessive cash long-term.
                            </Callout>
                        </section>

                        {/* 7. REITs */}
                        <section id="reits" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">7. Essential Real Estate (REITs)</h2>
                            </div>
                            <p>
                                Not all real estate is recession-resistant, but certain categories tend to hold up: healthcare facilities, data centers, cell towers, and essential retail (grocery-anchored).
                            </p>
                            <p>
                                <strong>Why essential REITs work:</strong> Long-term leases provide stable income, essential services maintain demand, high dividend yields provide income during downturns.
                            </p>
                            <p>
                                <strong>Best choices:</strong> Healthcare REITs (Welltower, Ventas), data center REITs (Digital Realty), cell tower REITs (American Tower).
                            </p>
                        </section>

                        {/* Building Your Strategy */}
                        <section id="strategy" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Building Your Recession Defense</h2>
                            </div>
                            <p>
                                The best approach is to hold a diversified mix of recession-resistant assets <em>before</em> a recession hits. Here&apos;s a sample defensive allocation:
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">Sample Recession-Resistant Portfolio</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="text-slate-300">Gold & Precious Metals</span>
                                        <span className="font-semibold text-amber-400">15%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="text-slate-300">Treasury Bonds</span>
                                        <span className="font-semibold text-blue-400">20%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="text-slate-300">Defensive Stocks (Utilities, Healthcare, Staples)</span>
                                        <span className="font-semibold text-green-400">35%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="text-slate-300">Cash & Equivalents</span>
                                        <span className="font-semibold text-slate-400">15%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="text-slate-300">Growth Stocks (Reduced)</span>
                                        <span className="font-semibold text-purple-400">15%</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 mt-4">This is a defensive allocation. Adjust based on your risk tolerance and time horizon.</p>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What investments are recession-proof?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        While no investment is 100% recession-proof, historically resilient assets include: gold and precious metals, Treasury bonds, utility stocks, healthcare stocks, consumer staples, cash equivalents, and essential real estate (like healthcare facilities). These tend to hold value or even rise during economic downturns.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Is gold a good recession investment?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Yes, gold has historically performed well during recessions. During the 2008 financial crisis, gold rose while stocks fell 37%. Gold is considered a &quot;safe haven&quot; asset because investors flee to it during uncertainty. A <Link href="/what-is-a-gold-ira" className="text-secondary hover:underline">Gold IRA</Link> allows you to hold physical gold in a tax-advantaged retirement account.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">How do I protect my retirement from recession?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Protect your retirement by: 1) Diversifying into recession-resistant assets like gold, bonds, and defensive stocks, 2) Maintaining adequate cash reserves (1-2 years of expenses), 3) Reducing exposure to cyclical stocks before recession, 4) Having multiple income sources, and 5) Avoiding panic selling during downturns.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Don't Wait for the Next Crash</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">You've seen what happens to 401ks in a crash. The time to protect your savings is before the next one—not during.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/learn/stock-market-crash-protection">Crash Protection Guide</Link>
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
                    <AugustaCTA variant="footer" trackSource="learn-recession-proof-investments" />
                </Container>
            </section>
        </main>
    );
}
