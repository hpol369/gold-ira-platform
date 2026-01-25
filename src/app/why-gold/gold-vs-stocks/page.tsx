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
                            Investment Comparison
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Gold vs Stocks: Which Is Better?
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            The answer isn&apos;t &quot;one or the other&quot;—it&apos;s understanding when each shines and how to combine them for a resilient portfolio.
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
                                &quot;Should I invest in gold or stocks?&quot; is the wrong question. The right question is: <strong>How do I combine gold and stocks for optimal portfolio performance?</strong>
                            </p>
                            <p>
                                Gold and stocks serve different purposes in a portfolio. Stocks provide growth and dividends; gold provides stability and crisis protection. The magic happens when you hold both.
                            </p>

                            {/* Head-to-Head */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Head-to-Head Comparison</h2>
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
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">When Gold Outperforms Stocks</h2>
                            </div>

                            <p>
                                Gold tends to outperform stocks during specific economic conditions:
                            </p>

                            <h3>1. Financial Crises & Market Crashes</h3>
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

                            <h3>2. High Inflation Periods</h3>
                            <p>
                                During the 1970s stagflation (high inflation + slow growth), gold rose over 1,400% while stocks were essentially flat. Gold maintains purchasing power when currencies are being debased.
                            </p>

                            <h3>3. Currency Crises</h3>
                            <p>
                                When the dollar weakens significantly, gold (priced in dollars) tends to rise. Gold also protects against the risk of currency devaluation.
                            </p>

                            <h3>4. Geopolitical Uncertainty</h3>
                            <p>
                                Wars, political instability, and global tensions drive investors to gold. The 2022-2024 period saw gold reach all-time highs amid geopolitical tensions.
                            </p>

                            {/* When Stocks Win */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">When Stocks Outperform Gold</h2>
                            </div>

                            <p>
                                Stocks tend to outperform gold during:
                            </p>

                            <h3>1. Bull Markets & Economic Expansion</h3>
                            <p>
                                During periods of strong economic growth and rising corporate profits, stocks typically outperform. The 2010-2020 bull market saw stocks gain 400%+ while gold was relatively flat.
                            </p>

                            <h3>2. Low Inflation, Rising Rates</h3>
                            <p>
                                When inflation is contained and interest rates are rising, gold faces headwinds (higher opportunity cost), while stocks can continue to perform.
                            </p>

                            <h3>3. Long-Term Compounding</h3>
                            <p>
                                Over very long periods (30-50 years), stocks have historically outperformed gold due to compound growth from reinvested dividends and earnings growth.
                            </p>

                            <Callout type="info" title="The 50-Year Picture">
                                Since 1971 (when gold was freely traded), stocks have returned ~10% annually vs. gold&apos;s ~7%. However, a portfolio with 15% gold had better <em>risk-adjusted</em> returns than 100% stocks.
                            </Callout>

                            {/* The Real Answer */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The Real Answer: Hold Both</h2>
                            </div>

                            <p>
                                The question isn&apos;t gold <em>or</em> stocks—it&apos;s how much of each. Research consistently shows that adding gold to a stock portfolio:
                            </p>

                            <ul>
                                <li><strong>Reduces volatility:</strong> Portfolio swings are smaller</li>
                                <li><strong>Improves risk-adjusted returns:</strong> Better Sharpe ratio</li>
                                <li><strong>Provides crisis protection:</strong> Limits drawdowns during crashes</li>
                                <li><strong>Maintains purchasing power:</strong> Inflation protection</li>
                            </ul>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">Portfolio Comparison (1972-2024)</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                        <span className="text-slate-300">100% Stocks</span>
                                        <div className="text-right">
                                            <span className="font-semibold text-blue-400 block">10.2% return</span>
                                            <span className="text-xs text-slate-500">Max drawdown: -51%</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                        <span className="text-slate-300">85% Stocks / 15% Gold</span>
                                        <div className="text-right">
                                            <span className="font-semibold text-green-400 block">9.8% return</span>
                                            <span className="text-xs text-slate-500">Max drawdown: -40%</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                        <span className="text-slate-300">70% Stocks / 20% Bonds / 10% Gold</span>
                                        <div className="text-right">
                                            <span className="font-semibold text-purple-400 block">9.4% return</span>
                                            <span className="text-xs text-slate-500">Max drawdown: -32%</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 mt-4">Adding gold slightly reduces returns but dramatically reduces risk and drawdowns.</p>
                            </div>

                            {/* How Much Gold */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">How Much Gold Should You Own?</h2>
                            </div>

                            <p>
                                Most research suggests <strong>5-20% of your portfolio in gold</strong>, depending on your risk tolerance and economic outlook:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Allocation</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-amber-400">5-10%</td>
                                            <td className="p-4">Conservative diversification, young investors with long time horizons</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-amber-400">10-15%</td>
                                            <td className="p-4">Standard recommendation, balanced approach</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-amber-400">15-20%</td>
                                            <td className="p-4">Near-retirees, those concerned about market risk or inflation</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-amber-400">20%+</td>
                                            <td className="p-4">Wealth preservation focus, very risk-averse, economic pessimists</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Callout type="tip" title="Ray Dalio's View">
                                Ray Dalio, founder of the world&apos;s largest hedge fund, recommends 5-10% gold for all portfolios. His &quot;All Weather&quot; portfolio holds 7.5% gold.
                            </Callout>

                            {/* CTA */}
                            <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-white">Add Gold to Your Portfolio</h3>
                                    <p className="mb-6 text-gray-200">A Gold IRA lets you hold physical precious metals in a tax-advantaged retirement account.</p>
                                    <Button variant="gold" size="lg" asChild>
                                        <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Key Takeaways */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Key Takeaways</h2>
                            </div>

                            <ul>
                                <li><strong>It&apos;s not either/or:</strong> Optimal portfolios contain both stocks and gold</li>
                                <li><strong>Gold shines in crises:</strong> When stocks crash, gold typically rises</li>
                                <li><strong>Stocks win long-term:</strong> For pure growth, stocks have higher returns</li>
                                <li><strong>Gold reduces risk:</strong> 10-15% gold significantly reduces portfolio volatility</li>
                                <li><strong>Rebalance matters:</strong> Selling gold highs / stock lows improves returns</li>
                            </ul>

                            <p>
                                A <Link href="/what-is-a-gold-ira">Gold IRA</Link> allows you to hold physical gold in your retirement portfolio, providing the diversification benefits within a tax-advantaged account.
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
