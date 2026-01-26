import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
    ArrowLeft,
    ArrowRight,
    ShieldCheck,
    TrendingUp,
    TrendingDown,
    BarChart3,
    Coins,
    Scale,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
    title: "Gold vs Stocks: Which Is Better for Your Portfolio? | Rich Dad Retirement",
    description: "Compare gold vs stocks for your investment portfolio. Learn when gold outperforms, when stocks win, and how to balance both for optimal returns.",
    openGraph: {
        title: "Gold vs Stocks: Complete Comparison Guide",
        description: "When does gold outperform stocks? Learn how to balance both for a resilient retirement portfolio.",
        type: "article",
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Gold vs Stocks: Which Is Better for Your Portfolio?",
    description: "Compare gold vs stocks for your investment portfolio. Learn when gold outperforms and how to balance both.",
    author: {
        "@type": "Person",
        name: "Thomas Richardson",
    },
    publisher: {
        "@type": "Organization",
        name: "Rich Dad Retirement",
    },
    datePublished: "2026-01-23",
    dateModified: "2026-01-23",
};

export default function GoldVsStocksPage() {
    return (
        <>
            <Navbar />
            <SchemaScript schema={schema} />

            {/* Hero */}
            <section className="bg-primary pt-24 pb-16">
                <Container>
                    <Link
                        href="/why-gold"
                        className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Why Gold
                    </Link>
                    <div className="max-w-3xl">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            The Comparison That Matters
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            In 2008, Stocks Crashed 37%. Gold Went Up.
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Your broker says &quot;stay the course.&quot; Easy for him to say - he gets paid either way.
                            But if you&apos;re 5-15 years from retirement, you can&apos;t afford another 2008.
                            Here&apos;s what your broker won&apos;t tell you about gold vs stocks.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Content */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <article className="prose prose-lg prose-invert prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 prose-a:text-secondary max-w-none">

                            {/* Introduction */}
                            <p className="lead">
                                Let&apos;s cut through the noise. This isn&apos;t about getting rich quick. It&apos;s about not losing
                                everything you&apos;ve worked for when Wall Street has another meltdown.
                            </p>
                            <p>
                                Karen, a retired teacher from Wisconsin, remembers 2008: &quot;I had $450,000 saved. After the crash,
                                I had $280,000. My financial advisor said &apos;be patient.&apos; But I was 58. I didn&apos;t have time to be patient.
                                I worked 4 more years than I planned.&quot; Workers who had 20% in gold? They were fine.
                            </p>

                            {/* Head-to-Head */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The Real Comparison</h2>
                            </div>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Factor</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Gold</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-blue-400">Stocks</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-medium text-white">Long-term returns (50yr)</td>
                                            <td className="p-4">~7% annually</td>
                                            <td className="p-4">~10% annually</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">Income generation</td>
                                            <td className="p-4">None</td>
                                            <td className="p-4">Dividends (1-3%)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">Crisis performance</td>
                                            <td className="p-4 text-green-400 font-semibold">Excellent (rises)</td>
                                            <td className="p-4 text-red-400">Poor (falls)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">Inflation protection</td>
                                            <td className="p-4 text-green-400 font-semibold">Excellent</td>
                                            <td className="p-4">Moderate</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">Counterparty risk</td>
                                            <td className="p-4 text-green-400 font-semibold">None (physical)</td>
                                            <td className="p-4">Yes (company risk)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">Volatility</td>
                                            <td className="p-4">Lower</td>
                                            <td className="p-4">Higher</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">Correlation to stocks</td>
                                            <td className="p-4 text-green-400 font-semibold">Near zero/negative</td>
                                            <td className="p-4">N/A</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* When Gold Wins */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">When Gold Saves Your Retirement</h2>
                            </div>

                            <p>
                                Here&apos;s what your broker won&apos;t tell you: gold does best exactly when you need it most.
                            </p>

                            <h3>1. When Wall Street Falls Apart</h3>
                            <div className="overflow-x-auto not-prose my-6">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Crisis</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Gold</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-blue-400">S&P 500</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 text-white">2008 Financial Crisis</td>
                                            <td className="p-4 text-green-400 font-semibold">+25%</td>
                                            <td className="p-4 text-red-400 font-semibold">-37%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white">2020 COVID (full year)</td>
                                            <td className="p-4 text-green-400 font-semibold">+25%</td>
                                            <td className="p-4 font-semibold text-white">+18%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white">2001 Dot-Com Crash</td>
                                            <td className="p-4 text-green-400 font-semibold">+2%</td>
                                            <td className="p-4 text-red-400 font-semibold">-13%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white">1973-74 Bear Market</td>
                                            <td className="p-4 text-green-400 font-semibold">+73%</td>
                                            <td className="p-4 text-red-400 font-semibold">-48%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>2. When They&apos;re Printing Money</h3>
                            <p>
                                In the 1970s, inflation hit hard. Stocks went nowhere. Gold went up 1,400%.
                                Sound familiar? They printed $5 trillion during COVID. Your dollars buy less every year.
                                Gold doesn&apos;t care what the Fed does.
                            </p>

                            <h3>3. When the Dollar Weakens</h3>
                            <p>
                                $35 trillion in national debt. More printing every year. The dollar is losing value.
                                Gold rises when dollars fall. It&apos;s simple math.
                            </p>

                            <h3>4. When the World Gets Scary</h3>
                            <p>
                                Wars, bank failures, political chaos - gold has hit all-time highs in 2024-2025 for a reason.
                                When things get uncertain, people run to gold. They&apos;ve done it for 5,000 years.
                            </p>

                            {/* When Stocks Win */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Let&apos;s Be Fair: When Stocks Do Better</h2>
                            </div>

                            <p>
                                We&apos;re not here to tell you stocks are bad. They&apos;re not. Here&apos;s when they beat gold:
                            </p>

                            <h3>1. When Everything Is Going Well</h3>
                            <p>
                                During boom times, stocks grow faster. The 2010-2020 bull market? Stocks up 400%, gold mostly flat.
                                If you&apos;re young with 30 years to ride out crashes, stocks make sense.
                            </p>

                            <h3>2. When Inflation Is Under Control</h3>
                            <p>
                                When the economy is stable and inflation is low, stocks tend to do better.
                                Gold shines when things go wrong. Stocks shine when things go right.
                            </p>

                            <h3>3. Over Very Long Periods</h3>
                            <p>
                                If you&apos;re 25 and have 40 years to retire, 100% stocks might make sense.
                                But if you&apos;re 55 and need your money in 10 years? One crash can ruin everything.
                            </p>

                            <Callout type="info" title="The Numbers Over 50 Years">
                                Stocks returned about 10% per year. Gold returned about 7%. But here&apos;s the key:
                                a portfolio with 15% gold had better &quot;risk-adjusted&quot; returns. Meaning: slightly lower
                                returns, but WAY fewer sleepless nights and no 5-year delays on retirement.
                            </Callout>

                            {/* The Real Answer */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The Smart Move: Have Both</h2>
                            </div>

                            <p>
                                This isn&apos;t about picking one or the other. It&apos;s about not putting all your eggs in one basket.
                                Here&apos;s what adding gold to your portfolio actually does:
                            </p>

                            <ul>
                                <li><strong>Smaller crashes hurt less:</strong> When stocks drop 40%, your losses are smaller</li>
                                <li><strong>You sleep better:</strong> Less worry during market chaos</li>
                                <li><strong>You don&apos;t sell at the bottom:</strong> Gold cushion means you don&apos;t panic sell stocks</li>
                                <li><strong>Inflation doesn&apos;t eat you alive:</strong> Gold keeps up with rising prices</li>
                            </ul>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">Real Numbers Since 1972</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                        <span className="text-slate-300">100% Stocks (what your broker wants)</span>
                                        <div className="text-right">
                                            <span className="font-semibold text-blue-400 block">10.2% return</span>
                                            <span className="text-xs text-red-400">Worst crash: -51% (ouch)</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                        <span className="text-slate-300">85% Stocks / 15% Gold</span>
                                        <div className="text-right">
                                            <span className="font-semibold text-green-400 block">9.8% return</span>
                                            <span className="text-xs text-amber-400">Worst crash: -40% (much better)</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                        <span className="text-slate-300">70% Stocks / 20% Bonds / 10% Gold</span>
                                        <div className="text-right">
                                            <span className="font-semibold text-purple-400 block">9.4% return</span>
                                            <span className="text-xs text-green-400">Worst crash: -32% (you keep your plan)</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 mt-4">A bit less return, a LOT less risk. For someone near retirement, that trade-off makes sense.</p>
                            </div>

                            {/* How Much Gold */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">How Much Gold Do You Need?</h2>
                            </div>

                            <p>
                                It depends on how close you are to retirement and how much risk you can handle:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">How Much</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Who It&apos;s For</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-amber-400">5-10%</td>
                                            <td className="p-4">Young workers, 20+ years until retirement, can ride out crashes</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-amber-400">10-15%</td>
                                            <td className="p-4">Most people - solid balance of growth and protection</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-amber-400">15-20%</td>
                                            <td className="p-4">5-15 years from retirement - can&apos;t afford another 2008</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-amber-400">20%+</td>
                                            <td className="p-4">Already retired or very conservative - protection first</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Callout type="tip" title="What the Billionaires Do">
                                Ray Dalio runs the world&apos;s biggest hedge fund. He recommends 5-10% gold for everyone.
                                His own portfolio has 7.5% in gold. If it&apos;s good enough for billionaires, it might be worth considering.
                            </Callout>

                            {/* CTA */}
                            <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-white">Ready to Protect Your Retirement?</h3>
                                    <p className="mb-6 text-gray-200">A Gold IRA lets you move some of your 401k into real gold - same tax benefits, real protection.</p>
                                    <Button variant="gold" size="lg" asChild>
                                        <Link href="/quiz">See If Gold Is Right for You <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Key Takeaways */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">What You Need to Remember</h2>
                            </div>

                            <ul>
                                <li><strong>You don&apos;t have to choose:</strong> Smart money has both stocks AND gold</li>
                                <li><strong>Gold works when you need it:</strong> When stocks crash, gold usually goes up</li>
                                <li><strong>Stocks are fine for growth:</strong> If you have 20+ years, stocks make sense</li>
                                <li><strong>Gold is insurance:</strong> 10-20% in gold means crashes don&apos;t destroy you</li>
                                <li><strong>Your broker won&apos;t suggest this:</strong> He doesn&apos;t get paid when you buy gold</li>
                            </ul>

                            <p>
                                A <Link href="/what-is-a-gold-ira">Gold IRA</Link> lets you hold physical gold with the same tax advantages
                                as your 401k. No penalties to roll over. No extra taxes. Just real protection for what you&apos;ve built.
                            </p>

                        </article>

                        {/* Navigation */}
                        <div className="mt-16 pt-8 border-t border-white/10">
                            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                                <Link
                                    href="/why-gold/central-banks-buying-gold"
                                    className="flex items-center gap-2 text-primary hover:text-secondary transition"
                                >
                                    <ArrowLeft className="w-4 h-4" /> Central Banks Buying Gold
                                </Link>
                                <Link
                                    href="/why-gold/inflation-protection"
                                    className="flex items-center gap-2 text-primary hover:text-secondary transition justify-end"
                                >
                                    Gold & Inflation <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <AugustaCTA trackSource="why-gold-gold-vs-stocks" />
            <Footer />
        </>
    );
}
