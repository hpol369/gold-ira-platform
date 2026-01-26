import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { ShieldCheck, Coins, Building2, Globe, ArrowRight, TrendingUp, Lock, BarChart3 } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Safe Haven Investments: 6 Assets for Crisis",
    description: "Discover safe haven investments that protect wealth during market crashes, geopolitical crises, and economic uncertainty. Gold, bonds, and more.",
    openGraph: {
        title: "Safe Haven Investments - 2026 Guide",
        description: "6 proven safe haven assets that protect wealth during market crashes and economic crises.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const takeaways = [
    "Safe haven assets rise in value or hold steady when traditional markets fall during crises.",
    "Gold is the quintessential safe haven—rising 25% during the 2008 crash while stocks fell 37%.",
    "US Treasury bonds are backed by the government and typically rise when stocks fall.",
    "The Swiss franc and Japanese yen are considered safe haven currencies.",
    "Safe havens should be part of every diversified portfolio, not just bought during crises.",
    "Physical gold in a Gold IRA provides safe haven protection within a tax-advantaged account."
];

const tocItems = [
    { id: "overview", label: "What Is a Safe Haven?" },
    { id: "gold", label: "1. Gold & Precious Metals" },
    { id: "bonds", label: "2. US Treasury Bonds" },
    { id: "currencies", label: "3. Safe Haven Currencies" },
    { id: "cash", label: "4. Cash & Equivalents" },
    { id: "defensive", label: "5. Defensive Stocks" },
    { id: "land", label: "6. Farmland & Land" },
    { id: "allocation", label: "Building Your Strategy" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Safe Haven Investments: 6 Assets That Protect During Crisis",
            "description": "Discover safe haven investments that protect wealth during market crashes, geopolitical crises, and economic uncertainty.",
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
                    "name": "What is a safe haven investment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A safe haven investment is an asset that is expected to retain or increase its value during times of market turbulence or economic crisis. Examples include gold, US Treasury bonds, and the Swiss franc. These assets provide portfolio protection when stocks and other risky assets decline."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is gold a good safe haven?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, gold is considered the quintessential safe haven asset. During the 2008 financial crisis, gold rose 25% while stocks fell 37%. Gold has no counterparty risk, limited supply, and 5,000+ years of history as a store of value. Investors historically flee to gold during uncertainty."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the safest investment during a recession?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The safest investments during a recession include: gold and precious metals, US Treasury bonds, high-quality corporate bonds, cash and money market funds, and defensive stocks (utilities, healthcare, consumer staples). Diversifying across multiple safe haven assets provides the best protection."
                    }
                }
            ]
        }
    ]
};

export default function SafeHavenInvestmentsPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-white/5 backdrop-blur-sm py-16 border-b border-white/10">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Wealth Protection
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Safe Haven Investments
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            6 proven assets that protect wealth during market crashes, geopolitical crises, and economic uncertainty.
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
                                You didn&apos;t work 30 years on the factory floor, driving trucks, or pulling double shifts as a nurse just to watch Wall Street gamble away your retirement in another 2008-style crash.
                            </p>
                            <p>
                                <strong>Safe haven assets</strong> are investments that hold or increase value when everything else is falling apart. While stocks can drop 40% in months, these assets move in the opposite direction—or at least stay put. When panic sets in on Wall Street, smart money moves to safe havens.
                            </p>
                            <p>
                                If you&apos;ve saved $500K, $700K, or more through decades of discipline, protecting that nest egg isn&apos;t optional—it&apos;s essential. Your knees might not let you work another five years to &quot;recover&quot; from the next crash. Here are six safe haven investments that can help you sleep at night.
                            </p>

                            <Callout type="info" title="Flight to Safety">
                                During crises, investors engage in &quot;flight to safety&quot;—selling risky assets and buying safe havens. This mass movement is what causes safe haven prices to rise during downturns.
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
                                Gold is the original and most recognized safe haven investment. For thousands of years, humans have turned to gold during times of uncertainty—and that behavior continues today.
                            </p>

                            <h3>Why Gold Works as a Safe Haven</h3>
                            <ul>
                                <li><strong>No counterparty risk:</strong> Gold doesn&apos;t depend on any company, bank, or government to honor an obligation</li>
                                <li><strong>Limited supply:</strong> You can&apos;t print gold like fiat currency</li>
                                <li><strong>Universal value:</strong> Accepted and valued in every country on Earth</li>
                                <li><strong>5,000+ year track record:</strong> The longest-standing store of value in human history</li>
                            </ul>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Crisis Event</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">S&P 500</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Gold</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="p-4 text-white">2008 Financial Crisis</td>
                                            <td className="p-4 text-red-400 font-semibold">-37%</td>
                                            <td className="p-4 text-green-400 font-semibold">+25%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white">2020 COVID Crash</td>
                                            <td className="p-4 text-red-400 font-semibold">-34% (peak to trough)</td>
                                            <td className="p-4 text-green-400 font-semibold">+25% (full year)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white">2022 Rate Shock</td>
                                            <td className="p-4 text-red-400 font-semibold">-18%</td>
                                            <td className="p-4 text-yellow-400 font-semibold">0% (held value)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white">2024-2025 Geopolitical Tensions</td>
                                            <td className="p-4 text-slate-400 font-semibold">Volatile</td>
                                            <td className="p-4 text-green-400 font-semibold">New all-time highs</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <strong>How to invest:</strong> Physical gold (coins/bars), <Link href="/what-is-a-gold-ira">Gold IRAs</Link>, gold ETFs (GLD, IAU), or gold mining stocks. Physical gold in an IRA offers the best combination of safe haven protection and tax advantages.
                            </p>
                        </section>

                        {/* 2. Treasury Bonds */}
                        <section id="bonds" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">2. US Treasury Bonds</h2>
                            </div>
                            <p>
                                US Treasury bonds are backed by the &quot;full faith and credit&quot; of the US government—making them among the safest investments in the world. When crisis hits, investors globally flee to Treasuries.
                            </p>

                            <h3>Why Treasuries Work</h3>
                            <ul>
                                <li><strong>Government backing:</strong> The US has never defaulted on Treasury debt</li>
                                <li><strong>Flight to quality:</strong> Global investors buy Treasuries during crises, pushing prices up</li>
                                <li><strong>Inverse relationship:</strong> When stocks crash, the Fed typically cuts rates, causing bond prices to rise</li>
                                <li><strong>Liquidity:</strong> The Treasury market is the most liquid in the world</li>
                            </ul>

                            <Callout type="warning" title="Rising Rate Risk">
                                While Treasuries protect during stock market crashes, they can lose value when interest rates rise unexpectedly (as in 2022). Long-term bonds are most sensitive to rate changes.
                            </Callout>
                        </section>

                        {/* 3. Safe Haven Currencies */}
                        <section id="currencies" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">3. Safe Haven Currencies</h2>
                            </div>
                            <p>
                                Certain currencies are considered safe havens and tend to strengthen during global crises:
                            </p>

                            <h3>Swiss Franc (CHF)</h3>
                            <p>
                                Switzerland&apos;s political neutrality, stable banking system, and strong economy make the Swiss franc a classic safe haven. During European crises, investors flock to CHF.
                            </p>

                            <h3>Japanese Yen (JPY)</h3>
                            <p>
                                Despite Japan&apos;s high debt levels, the yen strengthens during global crises because Japanese investors repatriate foreign investments, buying yen to bring money home.
                            </p>

                            <h3>US Dollar (USD)</h3>
                            <p>
                                As the world&apos;s reserve currency, the US dollar typically strengthens during global uncertainty. Even during US-centric crises, the dollar often rises as the &quot;least bad&quot; option.
                            </p>
                        </section>

                        {/* 4. Cash */}
                        <section id="cash" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-slate-700/50 rounded-lg text-slate-400">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">4. Cash & Cash Equivalents</h2>
                            </div>
                            <p>
                                Cash doesn&apos;t rise during crises, but it doesn&apos;t fall either. Holding cash provides stability and—critically—the ability to buy assets at depressed prices when markets crash.
                            </p>

                            <h3>Cash Equivalents</h3>
                            <ul>
                                <li><strong>Money market funds:</strong> Low-risk funds invested in short-term securities</li>
                                <li><strong>Treasury bills:</strong> Short-term government debt (4-52 weeks)</li>
                                <li><strong>High-yield savings:</strong> FDIC-insured accounts with competitive rates</li>
                                <li><strong>CDs:</strong> Certificates of deposit with guaranteed returns</li>
                            </ul>

                            <Callout type="tip" title="The Optionality Value">
                                Cash provides &quot;optionality&quot;—the ability to act when opportunities arise. During the 2020 crash, investors with cash could buy stocks at 30%+ discounts.
                            </Callout>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Add the Ultimate Safe Haven to Your Portfolio</h3>
                                <p className="mb-6 text-gray-200">A Gold IRA lets you hold physical precious metals in a tax-advantaged retirement account.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* 5. Defensive Stocks */}
                        <section id="defensive" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">5. Defensive Stocks</h2>
                            </div>
                            <p>
                                While stocks generally fall during crises, certain sectors are more resilient because they provide essential goods and services people need regardless of economic conditions:
                            </p>

                            <h3>Utilities</h3>
                            <p>
                                People need electricity, water, and gas regardless of the economy. Utility companies offer stable dividends and predictable revenue.
                            </p>

                            <h3>Healthcare</h3>
                            <p>
                                Medical needs don&apos;t disappear during recessions. Pharmaceutical companies, hospitals, and healthcare REITs tend to hold up well.
                            </p>

                            <h3>Consumer Staples</h3>
                            <p>
                                Toothpaste, food, and household products are purchased rain or shine. Companies like Procter & Gamble, Coca-Cola, and Walmart are classic defensive holdings.
                            </p>
                        </section>

                        {/* 6. Farmland & Land */}
                        <section id="land" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">6. Farmland & Land</h2>
                            </div>
                            <p>
                                &quot;They&apos;re not making more of it,&quot; as the saying goes. Farmland and land investments offer a tangible safe haven that produces real value:
                            </p>
                            <ul>
                                <li><strong>Inflation hedge:</strong> Food prices rise with inflation, supporting farmland values</li>
                                <li><strong>Low correlation:</strong> Farmland returns don&apos;t move with stock markets</li>
                                <li><strong>Income producing:</strong> Farmland generates rental income or crop sales</li>
                                <li><strong>Real asset:</strong> Tangible property with intrinsic value</li>
                            </ul>
                            <p>
                                Access options include direct ownership, farmland REITs, or crowdfunding platforms like FarmFundr and AcreTrader.
                            </p>
                        </section>

                        {/* Building Your Strategy */}
                        <section id="allocation" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Building Your Safe Haven Strategy</h2>
                            </div>
                            <p>
                                The key insight is that safe havens should be part of your portfolio <em>before</em> a crisis—not purchased during one. By the time crisis hits, safe haven prices have often already risen.
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">Sample Safe Haven Allocation</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="text-slate-300">Gold & Precious Metals</span>
                                        <span className="font-semibold text-amber-400">10-15%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="text-slate-300">Treasury Bonds</span>
                                        <span className="font-semibold text-blue-400">15-25%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="text-slate-300">Cash & Equivalents</span>
                                        <span className="font-semibold text-slate-400">5-15%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="text-slate-300">Defensive Stocks</span>
                                        <span className="font-semibold text-purple-400">10-20%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="text-slate-300">Growth Assets (Stocks)</span>
                                        <span className="font-semibold text-green-400">40-60%</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 mt-4">Adjust based on your risk tolerance, time horizon, and current market conditions.</p>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What is a safe haven investment?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        A safe haven investment is an asset expected to retain or increase value during market turbulence or economic crisis. Examples include gold, US Treasury bonds, and the Swiss franc. These provide portfolio protection when stocks and risky assets decline.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Is gold a good safe haven?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Yes, gold is the quintessential safe haven asset. During the 2008 financial crisis, gold rose 25% while stocks fell 37%. Gold has no counterparty risk, limited supply, and 5,000+ years of history as a store of value. A <Link href="/what-is-a-gold-ira" className="text-secondary hover:underline">Gold IRA</Link> allows you to hold physical gold in a tax-advantaged retirement account.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What is the safest investment during a recession?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        The safest investments during a recession include: gold and precious metals, US Treasury bonds, high-quality corporate bonds, cash and money market funds, and defensive stocks (utilities, healthcare, consumer staples). Diversifying across multiple safe haven assets provides the best protection.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">When should I buy safe haven assets?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        The best time to buy safe haven assets is <em>before</em> a crisis—as part of a diversified portfolio. By the time a crisis hits, safe haven prices have often already risen as investors flee to safety. Maintain a consistent allocation to safe havens (10-30% depending on your risk profile) at all times.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Build Your Safe Haven Portfolio</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Add physical gold to your retirement account for time-tested crisis protection.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/learn/recession-proof-investments">Recession-Proof Guide</Link>
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
                    <AugustaCTA variant="footer" trackSource="learn-safe-haven-investments" />
                </Container>
            </section>
        </main>
    );
}
