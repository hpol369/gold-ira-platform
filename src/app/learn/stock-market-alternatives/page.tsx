import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Coins, Building2, Home, BarChart3, ArrowRight, ShieldCheck, TrendingUp, Landmark } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Stock Market Alternatives: 8 Ways to Invest Beyond Stocks | Rich Dad Retirement",
    description: "Explore stock market alternatives including gold, real estate, bonds, private equity, and more. Diversify your portfolio beyond traditional stocks.",
    openGraph: {
        title: "Stock Market Alternatives - 2026 Guide",
        description: "8 proven alternatives to stock market investing for diversification and wealth protection.",
        type: "article",
    },
};

const takeaways = [
    "Diversification beyond stocks reduces portfolio risk and provides uncorrelated returns.",
    "Gold has historically risen when stocks fall, making it an excellent portfolio diversifier.",
    "Real estate offers income, appreciation, and inflation protection outside the stock market.",
    "Bonds provide stability and income, especially during stock market downturns.",
    "Alternative investments like private equity and farmland offer institutional-level diversification.",
    "A Gold IRA lets you hold physical precious metals in a tax-advantaged retirement account."
];

const tocItems = [
    { id: "overview", label: "Why Look Beyond Stocks?" },
    { id: "gold", label: "1. Gold & Precious Metals" },
    { id: "realestate", label: "2. Real Estate" },
    { id: "bonds", label: "3. Bonds & Fixed Income" },
    { id: "privateequity", label: "4. Private Equity" },
    { id: "commodities", label: "5. Commodities" },
    { id: "farmland", label: "6. Farmland" },
    { id: "annuities", label: "7. Annuities" },
    { id: "alternatives", label: "8. Alternative Funds" },
    { id: "comparison", label: "Comparison Table" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Stock Market Alternatives: 8 Ways to Invest Beyond Stocks",
            "description": "Explore stock market alternatives including gold, real estate, bonds, private equity, and more.",
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
                    "name": "What are the best alternatives to the stock market?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Top alternatives to stock market investing include: gold and precious metals, real estate (direct ownership or REITs), bonds and fixed income, private equity, commodities, farmland, annuities, and alternative investment funds. The best choice depends on your goals, risk tolerance, and investment timeline."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is gold a good alternative to stocks?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, gold is an excellent alternative to stocks because it has low to negative correlation with the stock market. When stocks fall, gold often rises. During the 2008 crash, gold gained 25% while stocks lost 37%. A Gold IRA allows you to hold physical gold in a tax-advantaged retirement account."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Where should I put my money instead of the stock market?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Alternatives to the stock market include: precious metals (gold, silver), real estate, Treasury bonds, corporate bonds, money market funds, CDs, annuities, and alternative investments. Most financial advisors recommend keeping 10-30% of your portfolio in non-stock assets for diversification."
                    }
                }
            ]
        }
    ]
};

export default function StockMarketAlternativesPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-background-subtle py-16 border-b border-primary/5">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Portfolio Diversification
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            Stock Market Alternatives
                        </h1>
                        <p className="text-xl text-text-muted leading-relaxed">
                            8 proven ways to diversify your portfolio beyond traditional stocks for better risk-adjusted returns.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead">
                                Most Americans have their retirement savings concentrated in one asset class: stocks. While stocks have historically provided strong long-term returns, this concentration creates significant risk—especially for those approaching retirement.
                            </p>
                            <p>
                                The 2008 financial crisis demonstrated this vividly: many near-retirees saw their portfolios drop 30-50% just as they needed to start withdrawals. Some had to delay retirement by years. Others never recovered.
                            </p>
                            <p>
                                <strong>Diversification beyond stocks isn&apos;t about abandoning the market</strong>—it&apos;s about building a more resilient portfolio that can weather different economic conditions while still growing wealth.
                            </p>

                            <Callout type="info" title="The Correlation Problem">
                                During the 2008 crash, supposedly &quot;diversified&quot; stock portfolios (US, international, large-cap, small-cap) all fell together. True diversification requires assets that don&apos;t move with stocks—like gold, which rose 25% while stocks fell 37%.
                            </Callout>
                        </section>

                        {/* 1. Gold */}
                        <section id="gold" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">1. Gold & Precious Metals</h2>
                            </div>
                            <p>
                                Gold is perhaps the ultimate stock market alternative. It has <strong>near-zero correlation with stocks</strong> over the long term and often rises when stocks fall.
                            </p>

                            <h3>Why Gold Works</h3>
                            <ul>
                                <li><strong>Negative correlation:</strong> Gold often rises when stocks fall, providing portfolio balance</li>
                                <li><strong>Inflation hedge:</strong> Maintains purchasing power as currencies debase</li>
                                <li><strong>No counterparty risk:</strong> Physical gold doesn&apos;t depend on any company or government</li>
                                <li><strong>Global demand:</strong> Central banks, jewelry, and investment demand support prices</li>
                            </ul>

                            <h3>How to Invest</h3>
                            <ul>
                                <li><strong>Physical gold:</strong> Coins, bars, stored at home or in depositories</li>
                                <li><strong>Gold IRA:</strong> Hold physical gold in a tax-advantaged retirement account</li>
                                <li><strong>Gold ETFs:</strong> Paper gold exposure through GLD, IAU, etc.</li>
                                <li><strong>Gold mining stocks:</strong> Leveraged exposure to gold prices</li>
                            </ul>

                            <p>
                                A <Link href="/what-is-a-gold-ira">Gold IRA</Link> is particularly compelling for retirement investors—it combines the diversification benefits of physical gold with the tax advantages of an IRA.
                            </p>
                        </section>

                        {/* 2. Real Estate */}
                        <section id="realestate" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                    <Home className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">2. Real Estate</h2>
                            </div>
                            <p>
                                Real estate offers tangible ownership, rental income, appreciation potential, and inflation protection—all outside the stock market.
                            </p>

                            <h3>Investment Options</h3>
                            <ul>
                                <li><strong>Rental properties:</strong> Direct ownership with cash flow and appreciation</li>
                                <li><strong>REITs:</strong> Real Estate Investment Trusts offer liquid, diversified real estate exposure</li>
                                <li><strong>Real estate crowdfunding:</strong> Platforms like Fundrise, RealtyMogul for smaller investments</li>
                                <li><strong>Private real estate funds:</strong> For accredited investors seeking larger deals</li>
                            </ul>

                            <Callout type="tip" title="Real Estate vs. REITs">
                                Direct ownership offers more control and tax benefits (depreciation), while REITs offer liquidity and diversification. Many investors use both.
                            </Callout>
                        </section>

                        {/* 3. Bonds */}
                        <section id="bonds" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                                    <Landmark className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">3. Bonds & Fixed Income</h2>
                            </div>
                            <p>
                                Bonds provide stability, income, and typically rise when stocks fall (as the Fed cuts rates during recessions).
                            </p>

                            <h3>Bond Types</h3>
                            <ul>
                                <li><strong>Treasury bonds:</strong> US government-backed, safest option</li>
                                <li><strong>TIPS:</strong> Treasury Inflation-Protected Securities adjust for inflation</li>
                                <li><strong>Corporate bonds:</strong> Higher yields from companies, more risk</li>
                                <li><strong>Municipal bonds:</strong> Tax-free income, good for high earners</li>
                                <li><strong>I Bonds:</strong> Inflation-protected savings bonds from Treasury</li>
                            </ul>

                            <p>
                                A traditional 60/40 stock/bond portfolio has historically provided smoother returns than 100% stocks—though the 2022 rate shock challenged this assumption.
                            </p>
                        </section>

                        {/* 4. Private Equity */}
                        <section id="privateequity" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">4. Private Equity & Private Credit</h2>
                            </div>
                            <p>
                                Private equity involves investing in companies not traded on public stock exchanges. These investments offer potential for higher returns but come with less liquidity.
                            </p>

                            <h3>Access Options</h3>
                            <ul>
                                <li><strong>Private equity funds:</strong> For accredited investors ($250K+ minimums typically)</li>
                                <li><strong>Interval funds:</strong> Semi-liquid PE exposure for smaller investors</li>
                                <li><strong>Private credit:</strong> Lending to private companies for fixed income</li>
                                <li><strong>Venture capital:</strong> Early-stage company investing</li>
                            </ul>
                        </section>

                        {/* 5. Commodities */}
                        <section id="commodities" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-orange-50 rounded-lg text-orange-600">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">5. Commodities</h2>
                            </div>
                            <p>
                                Beyond gold, other commodities like silver, oil, natural gas, and agricultural products offer diversification:
                            </p>

                            <ul>
                                <li><strong>Silver:</strong> More volatile than gold but similar safe-haven properties</li>
                                <li><strong>Platinum/Palladium:</strong> Industrial demand plus precious metal characteristics</li>
                                <li><strong>Oil & Gas:</strong> Energy commodities, often via ETFs or futures</li>
                                <li><strong>Agricultural:</strong> Wheat, corn, soybeans—inflation hedges</li>
                            </ul>

                            <p>
                                Commodity ETFs like DBC, DJP, and GSG offer diversified commodity exposure without futures complexity.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Add Gold to Diversify Your Portfolio</h3>
                                <p className="mb-6 text-gray-200">A Gold IRA lets you hold physical precious metals in a tax-advantaged retirement account.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* 6. Farmland */}
                        <section id="farmland" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">6. Farmland</h2>
                            </div>
                            <p>
                                &quot;Buy land, they&apos;re not making it anymore.&quot; Farmland has historically provided steady returns with low correlation to stocks:
                            </p>

                            <ul>
                                <li><strong>Inflation hedge:</strong> Food prices rise with inflation</li>
                                <li><strong>Income + appreciation:</strong> Rental income plus land value growth</li>
                                <li><strong>Low correlation:</strong> Returns don&apos;t move with stock markets</li>
                                <li><strong>Real asset:</strong> Tangible property with intrinsic value</li>
                            </ul>

                            <p>
                                Access options include farmland REITs (LAND, FPI), crowdfunding platforms (FarmFundr, AcreTrader), and direct ownership.
                            </p>
                        </section>

                        {/* 7. Annuities */}
                        <section id="annuities" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-cyan-50 rounded-lg text-cyan-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">7. Annuities</h2>
                            </div>
                            <p>
                                Annuities are insurance contracts that provide guaranteed income—completely independent of stock market performance:
                            </p>

                            <ul>
                                <li><strong>Fixed annuities:</strong> Guaranteed interest rate, like a CD from an insurer</li>
                                <li><strong>Immediate annuities:</strong> Convert lump sum to lifetime income stream</li>
                                <li><strong>Fixed indexed annuities:</strong> Potential upside linked to market indexes, with downside protection</li>
                            </ul>

                            <Callout type="warning" title="Annuity Caution">
                                Annuities can have high fees and surrender charges. Avoid variable annuities (they have stock market risk). Only consider annuities from highly-rated insurers.
                            </Callout>
                        </section>

                        {/* 8. Alternative Funds */}
                        <section id="alternatives" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-pink-50 rounded-lg text-pink-600">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">8. Alternative Investment Funds</h2>
                            </div>
                            <p>
                                For sophisticated investors, alternative funds offer exposure to strategies uncorrelated with traditional markets:
                            </p>

                            <ul>
                                <li><strong>Hedge funds:</strong> Various strategies (long/short, market-neutral, arbitrage)</li>
                                <li><strong>Managed futures:</strong> Trend-following strategies across asset classes</li>
                                <li><strong>Multi-asset funds:</strong> Diversified alternative strategies in one package</li>
                                <li><strong>Collectibles funds:</strong> Art, wine, rare watches (highly specialized)</li>
                            </ul>
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2>Stock Market Alternatives Comparison</h2>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="p-4 border-b font-bold text-primary">Alternative</th>
                                            <th className="p-4 border-b font-bold text-primary">Liquidity</th>
                                            <th className="p-4 border-b font-bold text-primary">Minimum</th>
                                            <th className="p-4 border-b font-bold text-primary">Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        <tr>
                                            <td className="p-4 font-semibold">Gold IRA</td>
                                            <td className="p-4">Medium</td>
                                            <td className="p-4">$5,000-$25,000</td>
                                            <td className="p-4">Retirement diversification</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">Real Estate</td>
                                            <td className="p-4">Low</td>
                                            <td className="p-4">$25,000+</td>
                                            <td className="p-4">Income + appreciation</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">REITs</td>
                                            <td className="p-4">High</td>
                                            <td className="p-4">$100+</td>
                                            <td className="p-4">Liquid real estate exposure</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">Treasury Bonds</td>
                                            <td className="p-4">High</td>
                                            <td className="p-4">$100</td>
                                            <td className="p-4">Safety + stability</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">I Bonds</td>
                                            <td className="p-4">Medium</td>
                                            <td className="p-4">$25</td>
                                            <td className="p-4">Inflation protection</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">Farmland</td>
                                            <td className="p-4">Low</td>
                                            <td className="p-4">$10,000+</td>
                                            <td className="p-4">Real asset diversification</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">Fixed Annuity</td>
                                            <td className="p-4">Low</td>
                                            <td className="p-4">$10,000+</td>
                                            <td className="p-4">Guaranteed income</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">What are the best alternatives to the stock market?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Top alternatives include: gold and precious metals, real estate (direct or REITs), bonds and fixed income, private equity, commodities, farmland, annuities, and alternative funds. The best choice depends on your goals, risk tolerance, and timeline.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">Is gold a good alternative to stocks?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Yes, gold is an excellent alternative because it has low to negative correlation with stocks. During the 2008 crash, gold gained 25% while stocks lost 37%. A <Link href="/what-is-a-gold-ira" className="text-secondary hover:underline">Gold IRA</Link> allows you to hold physical gold in a tax-advantaged retirement account.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">How much should I allocate to alternatives?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Most financial advisors recommend allocating 10-30% of your portfolio to non-stock assets for diversification. The specific allocation depends on your age, risk tolerance, and retirement timeline. Those closer to retirement typically allocate more to stable alternatives.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Diversify Beyond Stocks Today</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Add physical gold to your retirement portfolio for true diversification.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/what-is-a-gold-ira">What Is a Gold IRA?</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>
        </main>
    );
}
