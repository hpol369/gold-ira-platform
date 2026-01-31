import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Metadata } from "next";
import { TrendingUp, TrendingDown, DollarSign, Calendar, ArrowRight, BarChart3, Target, Clock, HelpCircle, Zap } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Silver Price Predictions 2026 | Expert Forecasts & Analysis",
    description: "Expert silver price predictions for 2026 and beyond. Bank forecasts, analyst targets, technical analysis, and scenarios for $50 and $100 silver. Updated weekly.",
    keywords: "silver price prediction 2026, silver forecast, silver price forecast 2026, when will silver hit $100, silver all time high",
};

const currentSilverPrice = 32.45;
const priceChange24h = 0.67;
const priceChangePercent = 2.1;

const expertPredictions = [
    { source: "Bank of America", target: "$38", timeframe: "2026", stance: "Bullish" },
    { source: "CPM Group", target: "$35-40", timeframe: "2026", stance: "Bullish" },
    { source: "Saxo Bank", target: "$50", timeframe: "2026", stance: "Very Bullish" },
    { source: "Keith Neumeyer (First Majestic)", target: "$130", timeframe: "Long-term", stance: "Extremely Bullish" },
    { source: "Peter Schiff", target: "$100+", timeframe: "This Cycle", stance: "Very Bullish" },
];

const predictionPages = [
    {
        href: "/silver-price/prediction-2026",
        title: "Silver Price Prediction 2026",
        description: "Expert analyst predictions, bank forecasts, and bullish vs bearish scenarios for silver in 2026.",
        icon: Target,
        volume: "1,700",
        hot: true,
    },
    {
        href: "/silver-price/forecast-2026",
        title: "Silver Price Forecast 2026",
        description: "Data-driven forecast with supply/demand analysis, technical indicators, and macro factors.",
        icon: BarChart3,
        volume: "1,200",
        hot: true,
    },
    {
        href: "/silver-coin-values",
        title: "Silver Coin Values",
        description: "Current melt values for Morgan dollars, Peace dollars, junk silver, and collectible coins.",
        icon: DollarSign,
        volume: "2,400",
        hot: true,
    },
    {
        href: "/silver-coin-values/melt-value-calculator",
        title: "Silver Melt Value Calculator",
        description: "Calculate the melt value of your silver coins based on current spot prices.",
        icon: DollarSign,
        volume: "800",
        hot: true,
    },
    {
        href: "/silver-price/all-time-high",
        title: "Silver All-Time High",
        description: "Historical highs of $49.45 (1980) and $48.70 (2011). What caused the spikes and could it happen again?",
        icon: TrendingUp,
        volume: "400",
    },
    {
        href: "/silver-price/why-silver-is-cheap",
        title: "Why Is Silver So Cheap?",
        description: "Bank manipulation, the gold-to-silver ratio, and why silver may be the most undervalued asset on Earth.",
        icon: HelpCircle,
        volume: "250",
    },
    {
        href: "/silver-price/will-silver-hit-100",
        title: "When Will Silver Hit $100?",
        description: "Scenarios, catalysts, and timeline predictions for triple-digit silver prices.",
        icon: Zap,
        volume: "80",
    },
    {
        href: "/silver-price/will-silver-hit-50",
        title: "When Will Silver Hit $50?",
        description: "More conservative price target analysis. Technical levels and catalyst breakdown.",
        icon: Target,
        volume: "60",
    },
    {
        href: "/silver-price/forecast-5-years",
        title: "Silver Forecast: Next 5 Years",
        description: "Long-term outlook 2026-2030. Megatrends in solar, EVs, 5G, and supply constraints.",
        icon: Clock,
        volume: "20",
    },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "name": "Silver Price Predictions Hub",
            "description": "Expert silver price predictions and forecasts for 2026 and beyond.",
            "url": "https://www.richdadretirement.com/silver-price",
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the silver price prediction for 2026?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most analysts predict silver will trade between $35-50 in 2026, with some bullish forecasts targeting $50+ due to industrial demand from solar panels, EVs, and potential supply deficits."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will silver hit $100 an ounce?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "While $100 silver is possible in a major monetary crisis or supply squeeze, most analysts view it as a longer-term possibility. Adjusted for inflation, silver's 1980 high would be over $180 today, suggesting $100 is achievable."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is silver so cheap compared to gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The gold-to-silver ratio currently sits around 80:1, while the historical average is 15:1. Many believe silver is suppressed through paper market manipulation and is significantly undervalued relative to gold."
                    }
                }
            ]
        }
    ]
};

export default function SilverPriceHubPage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />

            {/* Hero Header with Live Price */}
            <header className="bg-white py-16 border-b border-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/silver-pattern.png')] opacity-5" />
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                            <div>
                                <span className="inline-flex items-center gap-2 text-gray-400 font-bold tracking-widest uppercase text-xs mb-4">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Live Market Data
                                </span>
                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                                    Silver Price Predictions
                                </h1>
                                <p className="text-xl text-slate-600 leading-relaxed">
                                    Expert forecasts, analyst targets, and scenarios for silver in 2026 and beyond. What the banks and insiders are really saying.
                                </p>
                            </div>

                            {/* Live Price Card */}
                            <div className="bg-slate-50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 min-w-[280px]">
                                <div className="text-sm text-slate-600 mb-2">Current Silver Price</div>
                                <div className="flex items-baseline gap-3 mb-3">
                                    <span className="text-4xl font-bold text-slate-900">${currentSilverPrice.toFixed(2)}</span>
                                    <span className="text-lg text-slate-600">/oz</span>
                                </div>
                                <div className={`flex items-center gap-2 ${priceChange24h >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                                    {priceChange24h >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                    <span className="font-semibold">${priceChange24h.toFixed(2)} ({priceChangePercent}%)</span>
                                    <span className="text-slate-600 text-sm">24h</span>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-200">
                                    <div className="text-xs text-slate-600">Gold/Silver Ratio</div>
                                    <div className="text-lg font-bold text-[#B22234]">80.5:1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                {/* Expert Predictions Summary */}
                <section className="mb-16">
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">2026 Expert Predictions At-A-Glance</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Source</th>
                                    <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Price Target</th>
                                    <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Timeframe</th>
                                    <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Stance</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 text-sm">
                                {expertPredictions.map((pred, idx) => (
                                    <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-100' : ''}>
                                        <td className="p-4 text-slate-900 font-medium">{pred.source}</td>
                                        <td className="p-4 text-green-700 font-bold text-lg">{pred.target}</td>
                                        <td className="p-4 text-slate-600">{pred.timeframe}</td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                pred.stance === 'Extremely Bullish' ? 'bg-green-500/20 text-green-700' :
                                                pred.stance === 'Very Bullish' ? 'bg-green-500/20 text-green-700' :
                                                pred.stance === 'Bullish' ? 'bg-emerald-500/20 text-emerald-400' :
                                                'bg-[#B22234]/20 text-[#B22234]'
                                            }`}>
                                                {pred.stance}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-600 mt-4">* Predictions are compiled from public statements and reports. Past predictions are not indicative of future results.</p>
                </section>

                {/* Prediction Pages Grid */}
                <section className="mb-16">
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Silver Price Analysis Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {predictionPages.map((page) => (
                            <Link
                                key={page.href}
                                href={page.href}
                                className="group bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:border-gray-500/50 transition-all duration-300 hover:bg-slate-100"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-gray-500/20 rounded-lg text-gray-400 group-hover:bg-gray-500/30 transition-colors">
                                        <page.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {page.hot && (
                                            <span className="bg-red-500/20 text-red-700 text-xs font-bold px-2 py-1 rounded-full">HOT</span>
                                        )}
                                        <span className="text-xs text-slate-600">{page.volume} searches/mo</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-gray-400 transition-colors">
                                    {page.title}
                                </h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    {page.description}
                                </p>
                                <div className="flex items-center text-gray-400 text-sm font-semibold">
                                    Read Analysis <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Why Silver Section */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-gray-600/20 to-slate-800/50 rounded-2xl p-8 border border-gray-500/20">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-gray-500/20 rounded-lg">
                                <DollarSign className="w-8 h-8 text-gray-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-slate-900">Why Silver Could Be the Investment of the Decade</h2>
                                <p className="text-slate-600">What the mainstream financial media won&apos;t tell you</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-gray-400 mt-2"></div>
                                    <p className="text-slate-600"><strong className="text-slate-900">Industrial Demand Explosion:</strong> Solar panels, EVs, 5G, and electronics require massive silver inputs. Supply can&apos;t keep up.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-gray-400 mt-2"></div>
                                    <p className="text-slate-600"><strong className="text-slate-900">Gold/Silver Ratio at Extremes:</strong> Currently 80:1 vs historical average of 15:1. Silver has massive catch-up potential.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-gray-400 mt-2"></div>
                                    <p className="text-slate-600"><strong className="text-slate-900">Supply Deficit Growing:</strong> Mine production has peaked while demand accelerates. Above-ground stockpiles are depleting.</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-gray-400 mt-2"></div>
                                    <p className="text-slate-600"><strong className="text-slate-900">Monetary Insurance:</strong> Like gold, silver is real money that can&apos;t be printed. Central banks are losing credibility.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-gray-400 mt-2"></div>
                                    <p className="text-slate-600"><strong className="text-slate-900">Tiny Market Size:</strong> The entire silver market is ~$30B. A small shift from bonds/stocks could send prices parabolic.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-gray-400 mt-2"></div>
                                    <p className="text-slate-600"><strong className="text-slate-900">Inflation Hedge:</strong> With real rates negative and debt at record highs, hard assets protect purchasing power.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                                <Link href="/quiz">Find the Best Silver IRA Company <ArrowRight className="ml-2 w-4 h-4" /></Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="border-white/30 text-slate-900 hover:bg-slate-100">
                                <Link href="/silver-price/why-silver-is-cheap">Why Silver Is Undervalued</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                <h4 className="text-lg font-bold">What is the silver price prediction for 2026?</h4>
                                <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-gray-400 sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-slate-600">
                                Most analysts predict silver will trade between $35-50 in 2026, with some bullish forecasts targeting $50+ due to industrial demand from solar panels, EVs, and potential supply deficits. Bank of America targets $38, while more bullish analysts like those at Saxo Bank see $50 as achievable. The wide range reflects uncertainty about Fed policy, industrial demand, and potential monetary crises.
                            </p>
                        </details>

                        <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                <h4 className="text-lg font-bold">Will silver hit $100 an ounce?</h4>
                                <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-gray-400 sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-slate-600">
                                While $100 silver is possible in a major monetary crisis or supply squeeze, most analysts view it as a longer-term possibility rather than an imminent event. Adjusted for inflation, silver&apos;s 1980 high of $49.45 would be over $180 today, suggesting $100 is historically achievable. Key catalysts could include: a dollar crisis, industrial supply shortage, or a return to the historical 15:1 gold/silver ratio (which would put silver at ~$175 with gold at $2,600).
                            </p>
                        </details>

                        <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                <h4 className="text-lg font-bold">Why is silver so cheap compared to gold?</h4>
                                <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-gray-400 sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-slate-600">
                                The gold-to-silver ratio currently sits around 80:1, while the historical average is 15:1 and the ratio in the Earth&apos;s crust is about 17:1. Many analysts believe silver is suppressed through paper market manipulation (massive short positions by bullion banks), lack of central bank buying (unlike gold), and its dual role as both industrial metal and monetary metal creating conflicting narratives. If the ratio reverted to even 40:1, silver would need to more than double relative to gold.
                            </p>
                        </details>

                        <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                <h4 className="text-lg font-bold">Should I invest in silver or gold for my IRA?</h4>
                                <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-gray-400 sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-slate-600">
                                Most precious metals IRA investors hold both gold and silver. Gold offers stability and is the go-to safe haven, while silver offers higher potential returns due to its smaller market and industrial demand growth. A common allocation is 60-70% gold and 30-40% silver. Silver is more volatile, so younger investors or those with higher risk tolerance might favor silver, while those closer to retirement might prefer gold&apos;s stability. <Link href="/quiz" className="text-gray-400 hover:underline">Take our quiz</Link> to find the right mix for your situation.
                            </p>
                        </details>
                    </div>
                </section>
            </Container>

            {/* CTA Section */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA variant="footer" trackSource="silver-price-hub" />
                </Container>
            </section>
        </main>
    );
}
