import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { Metadata } from "next";
import { TrendingUp, ArrowRight, Sun, Battery, Cpu, Globe, Pickaxe, Calendar } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Silver Forecast Next 5 Years (2026-2030) | Long-Term Outlook",
    description: "Silver price forecast for the next 5 years (2026-2030). Megatrends in solar, EVs, 5G, supply constraints, and long-term price projections from industry experts.",
    keywords: "silver forecast next 5 years, silver price 2030, silver long term forecast, silver outlook 5 years, silver prediction 2030",
};

const takeaways = [
    "Solar demand could reach 300M oz by 2030 (vs ~200M in 2026)—30% of mine supply.",
    "EVs require 25-50g of silver each; 50M EVs/year = 40-80M oz additional demand.",
    "5G infrastructure and AI data centers are emerging silver demand drivers.",
    "Mine supply is capped at ~820M oz with no major new projects until 2030+.",
    "Cumulative deficits of 500M-800M oz over 5 years will drain remaining stockpiles.",
    "Long-term price projections range from $50-75 (conservative) to $100-200 (bullish).",
    "The supply/demand fundamentals strongly favor higher prices over the 5-year horizon."
];

const yearlyProjections = [
    { year: "2026", low: "$32", base: "$42", high: "$55", supply: "1,000M", demand: "1,180M", deficit: "-180M" },
    { year: "2027", low: "$38", base: "$50", high: "$70", supply: "1,010M", demand: "1,240M", deficit: "-230M" },
    { year: "2028", low: "$45", base: "$60", high: "$85", supply: "1,020M", demand: "1,310M", deficit: "-290M" },
    { year: "2029", low: "$50", base: "$70", high: "$100", supply: "1,030M", demand: "1,390M", deficit: "-360M" },
    { year: "2030", low: "$55", base: "$80", high: "$120+", supply: "1,040M", demand: "1,480M", deficit: "-440M" },
];

const megatrends = [
    {
        trend: "Solar Energy Explosion",
        icon: Sun,
        current: "200M oz/year",
        by2030: "300-350M oz/year",
        growth: "+50-75%",
        details: "Each solar panel uses ~20g of silver. Global solar installations growing 20-25% annually. IEA projects tripling of solar capacity by 2030."
    },
    {
        trend: "Electric Vehicle Revolution",
        icon: Battery,
        current: "30M oz/year",
        by2030: "80-120M oz/year",
        growth: "+200%+",
        details: "Each EV uses 25-50g of silver (vs 15-28g for ICE). EV sales projected to reach 50M+ units/year by 2030."
    },
    {
        trend: "5G and AI Infrastructure",
        icon: Cpu,
        current: "50M oz/year",
        by2030: "100M oz/year",
        growth: "+100%",
        details: "5G antennas require silver. AI data centers need silver for superior conductivity. Both sectors in early growth phase."
    },
    {
        trend: "Medical and Antimicrobial",
        icon: Globe,
        current: "60M oz/year",
        by2030: "80M oz/year",
        growth: "+33%",
        details: "Silver's antimicrobial properties drive medical device and coating demand. Post-COVID healthcare investment."
    },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Silver Forecast Next 5 Years: 2026-2030 Outlook",
            "description": "Long-term silver price forecast for 2026-2030 covering megatrends, supply constraints, and expert projections.",
            "image": "https://www.richdadretirement.com/images/silver-5-year-forecast.jpg",
            "author": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.richdadretirement.com/logo.png"
                }
            },
            "datePublished": "2026-01-15",
            "dateModified": "2026-01-27"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the silver price forecast for the next 5 years?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Long-term silver forecasts project significant gains over 2026-2030: Conservative estimates see $55-75 by 2030, base case projections target $70-80, and bullish scenarios see $100-200+. The key drivers are growing industrial demand from solar and EVs, combined with stagnant mine supply creating cumulative deficits."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What will silver be worth in 2030?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "By 2030, silver could range from $55 (conservative, if manipulation persists) to $120+ (bullish, if supply crunch materializes). The base case estimate is around $80, reflecting continued demand growth from green energy, depleting inventories, and potential ratio reversion vs gold. Inflation-adjusted, even $80 would still be below the 1980 high."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why will silver be higher in 5 years?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Silver is positioned for higher prices due to: 1) Structural supply deficits (demand exceeding supply by 150-400M oz annually), 2) Solar panel demand potentially consuming 30% of mine supply by 2030, 3) EV growth requiring 80-120M oz annually, 4) No major new mines coming online before 2030, 5) Depleting above-ground stockpiles that have covered deficits."
                    }
                }
            ]
        }
    ]
};

export default function SilverForecast5YearsPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />

            {/* Header */}
            <header className="bg-white/5 backdrop-blur-sm py-16 border-b border-white/10">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <Link href="/silver-price" className="text-gray-400 hover:text-gray-300 text-sm font-medium mb-4 inline-flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Silver Price Hub
                        </Link>
                        <span className="text-slate-500 text-sm block mb-4">20 monthly searches</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Silver Forecast: Next 5 Years (2026-2030)
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            The next five years could be transformative for silver. <strong className="text-white">Solar panels, EVs, 5G, and AI</strong> are creating unprecedented demand—while supply remains stubbornly flat. Here&apos;s the long-term outlook.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="max-w-4xl mx-auto">
                    <article className="prose prose-lg prose-invert prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* The 5-Year Picture */}
                        <section className="scroll-mt-32">
                            <h2>The 5-Year Silver Outlook: Executive Summary</h2>
                            <p className="lead">
                                If you&apos;re asking about the <strong>silver forecast for the next 5 years</strong>, you&apos;re thinking like an investor, not a trader. And the 5-year outlook for silver is among the most bullish of any major commodity.
                            </p>
                            <p>
                                Here&apos;s why: The forces driving silver demand—renewable energy, electrification, digitization—are <strong>secular megatrends</strong> that will play out over decades. Meanwhile, silver supply is constrained by geology and underinvestment in new mines.
                            </p>
                            <p>
                                The result? Cumulative supply deficits of 500-800 million ounces over the next 5 years. That&apos;s roughly equivalent to a full year of global mine production that needs to come from somewhere—depleting stockpiles, driving prices higher, or both.
                            </p>

                            <Callout type="tip" title="Rich Dad Insight">
                                &quot;Most people think short-term. They panic at 10% drops and celebrate 10% rallies. The wealthy think in 5-year and 10-year horizons. Over that timeframe, the silver setup is extraordinary. Supply can&apos;t keep up with demand. Math wins eventually.&quot;
                            </Callout>
                        </section>

                        {/* Year-by-Year Projections */}
                        <section className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Year-by-Year Price Projections</h2>
                            </div>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 font-bold text-white border-b border-white/10">Year</th>
                                            <th className="p-4 font-bold text-white border-b border-white/10">Bear Case</th>
                                            <th className="p-4 font-bold text-white border-b border-white/10">Base Case</th>
                                            <th className="p-4 font-bold text-white border-b border-white/10">Bull Case</th>
                                            <th className="p-4 font-bold text-white border-b border-white/10">Supply/Demand</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        {yearlyProjections.map((year, idx) => (
                                            <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-800/30' : ''}>
                                                <td className="p-4 text-white font-bold">{year.year}</td>
                                                <td className="p-4 text-red-400">{year.low}</td>
                                                <td className="p-4 text-amber-400 font-bold">{year.base}</td>
                                                <td className="p-4 text-green-400">{year.high}</td>
                                                <td className="p-4 text-slate-400">
                                                    <span className="text-xs">{year.supply} / {year.demand}</span>
                                                    <span className="text-red-400 font-bold ml-2">{year.deficit}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <strong>Cumulative 5-Year Deficit:</strong> 1.5+ billion ounces. That&apos;s nearly two full years of mine production that must come from stockpiles or higher prices—or both.
                            </p>
                        </section>

                        {/* Megatrends */}
                        <section className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Megatrends Driving Silver Demand</h2>
                            </div>
                            <p>
                                These aren&apos;t speculative trends—they&apos;re secular shifts that are already underway and accelerating:
                            </p>

                            <div className="not-prose my-8 space-y-6">
                                {megatrends.map((trend, idx) => (
                                    <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-green-500/20 rounded-lg text-green-400 shrink-0">
                                                <trend.icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                                                    <h4 className="font-bold text-white text-lg">{trend.trend}</h4>
                                                    <div className="flex items-center gap-4">
                                                        <div className="text-center">
                                                            <div className="text-xs text-slate-500">2026</div>
                                                            <div className="text-sm font-bold text-slate-300">{trend.current}</div>
                                                        </div>
                                                        <div className="text-green-400">→</div>
                                                        <div className="text-center">
                                                            <div className="text-xs text-slate-500">2030</div>
                                                            <div className="text-sm font-bold text-green-400">{trend.by2030}</div>
                                                        </div>
                                                        <span className="px-2 py-1 bg-green-500/20 rounded text-xs font-bold text-green-400">{trend.growth}</span>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-slate-400">{trend.details}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p>
                                Combined, these megatrends could add <strong>200-300 million ounces</strong> of annual demand by 2030—equivalent to 25-35% of current mine production. Where does that silver come from? Stockpiles are finite. Eventually, price must ration demand.
                            </p>
                        </section>

                        {/* Supply Constraints */}
                        <section className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <Pickaxe className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">The Supply Problem: Why Production Can&apos;t Keep Up</h2>
                            </div>
                            <p>
                                Silver supply is fundamentally constrained by factors that can&apos;t be quickly changed:
                            </p>

                            <div className="not-prose my-8 grid md:grid-cols-2 gap-4">
                                <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20">
                                    <h4 className="font-bold text-red-400 mb-3">No Major New Mines</h4>
                                    <p className="text-sm text-slate-300">It takes 10-15 years and $500M+ to develop a primary silver mine. There are no significant projects coming online before 2030 at the earliest.</p>
                                </div>
                                <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20">
                                    <h4 className="font-bold text-red-400 mb-3">Byproduct Dependency</h4>
                                    <p className="text-sm text-slate-300">70% of silver comes as a byproduct of zinc, copper, and lead mining. Silver supply is tied to base metal demand, not silver prices.</p>
                                </div>
                                <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20">
                                    <h4 className="font-bold text-red-400 mb-3">Declining Ore Grades</h4>
                                    <p className="text-sm text-slate-300">Average ore grades have fallen 30% over 20 years. Miners must process more rock to get the same silver, increasing costs and limiting production growth.</p>
                                </div>
                                <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20">
                                    <h4 className="font-bold text-red-400 mb-3">ESG and Permitting</h4>
                                    <p className="text-sm text-slate-300">Environmental regulations and permitting challenges make new mine development increasingly difficult and expensive.</p>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">5-Year Supply Outlook</h4>
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-400">Mine Production</span>
                                            <span className="text-amber-400">~820M oz (flat)</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-3">
                                            <div className="bg-amber-500 h-3 rounded-full" style={{ width: '82%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-400">Recycling</span>
                                            <span className="text-slate-400">~180-200M oz (slow growth)</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-3">
                                            <div className="bg-slate-500 h-3 rounded-full" style={{ width: '18%' }}></div>
                                        </div>
                                    </div>
                                    <div className="pt-3 border-t border-white/10">
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Total 5-Year Supply</span>
                                            <span className="text-white font-bold">~5.1B oz</span>
                                        </div>
                                        <div className="flex justify-between mt-1">
                                            <span className="text-slate-400">Total 5-Year Demand (projected)</span>
                                            <span className="text-green-400 font-bold">~6.6B oz</span>
                                        </div>
                                        <div className="flex justify-between mt-2 pt-2 border-t border-white/10">
                                            <span className="text-red-400 font-bold">Cumulative Deficit</span>
                                            <span className="text-red-400 font-bold text-lg">~1.5B oz</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Think Long-Term. Act Now.</h3>
                                <p className="mb-6 text-gray-200">The 5-year outlook for silver is exceptional. Find the right precious metals company to help you build your position.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Price Scenarios */}
                        <section className="scroll-mt-32">
                            <h2>Long-Term Price Scenarios</h2>
                            <p>
                                Where could silver be by 2030? Here are three scenarios:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-bold text-red-400 text-lg">Bear Case: $50-60</h4>
                                        <span className="text-xs text-slate-500">20% probability</span>
                                    </div>
                                    <p className="text-sm text-slate-300 mb-3">Manipulation continues, recession hits industrial demand, Fed stays hawkish longer than expected. Silver grinds higher but underperforms vs fundamentals.</p>
                                    <p className="text-xs text-slate-500">Even the bear case shows significant gains from current levels (~$32).</p>
                                </div>

                                <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/20">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-bold text-amber-400 text-lg">Base Case: $70-90</h4>
                                        <span className="text-xs text-slate-500">50% probability</span>
                                    </div>
                                    <p className="text-sm text-slate-300 mb-3">Supply deficits force price higher over time. Gold ratio compresses from 80:1 toward 50:1. Fed eventually cuts, dollar weakens. Steady accumulation of bullish factors.</p>
                                    <p className="text-xs text-slate-500">Base case represents 120-180% gains over 5 years.</p>
                                </div>

                                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-bold text-green-400 text-lg">Bull Case: $100-200+</h4>
                                        <span className="text-xs text-slate-500">30% probability</span>
                                    </div>
                                    <p className="text-sm text-slate-300 mb-3">Industrial supply crunch forces physical price discovery. Dollar crisis drives safe-haven buying. Gold ratio reverts toward 20:1-30:1. Paper manipulation breaks.</p>
                                    <p className="text-xs text-slate-500">Bull case represents 200-500%+ gains—life-changing for positioned investors.</p>
                                </div>
                            </div>

                            <Callout type="info" title="The Asymmetric Setup">
                                Note that even the bear case shows significant gains (50-85%). The base case shows exceptional returns (120-180%). And the bull case is generational wealth territory. This is an asymmetric setup: limited downside relative to potential upside.
                            </Callout>
                        </section>

                        {/* Investment Strategy */}
                        <section className="scroll-mt-32">
                            <h2>5-Year Investment Strategy</h2>
                            <p>
                                If you believe in the 5-year thesis, here&apos;s how to position:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Silver IRA (Tax-Advantaged Holding)</h4>
                                    <p className="text-sm text-slate-400">Best for long-term investors. Tax-deferred or tax-free growth over 5+ years. Physical metal in secure storage. No need to time trades. <Link href="/quiz" className="text-gray-400 hover:underline">Find the right Silver IRA company →</Link></p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Physical Silver (Coins & Bars)</h4>
                                    <p className="text-sm text-slate-400">For those who want direct control. American Silver Eagles, Canadian Maple Leafs, or generic bars. Store securely. No counterparty risk.</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Silver Mining Stocks</h4>
                                    <p className="text-sm text-slate-400">Leveraged exposure to silver price. Higher risk/reward. Consider First Majestic (AG), Pan American Silver (PAAS), or the SIL ETF for diversification.</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Dollar-Cost Averaging</h4>
                                    <p className="text-sm text-slate-400">Given volatility, consider buying a fixed amount monthly over 12-24 months rather than all at once. This reduces timing risk.</p>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="scroll-mt-32">
                            <h2>Silver 5-Year Forecast: FAQ</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What is the silver price forecast for the next 5 years?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-gray-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Long-term silver forecasts project significant gains over 2026-2030: Bear case sees $50-60 (if manipulation persists), base case targets $70-90 (as supply deficits force prices higher), and bull case sees $100-200+ (if supply crunch or monetary crisis materializes). The key drivers are growing industrial demand from solar and EVs, combined with stagnant mine supply creating cumulative deficits of 1.5+ billion ounces.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What will silver be worth in 2030?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-gray-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        By 2030, silver could range from $55 (conservative, if manipulation persists) to $120+ (bullish, if supply crunch materializes). The base case estimate is around $80, reflecting continued demand growth from green energy, depleting inventories, and potential ratio reversion vs gold. Even at $80, silver would still be below its 1980 inflation-adjusted high of $180+.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Why will silver be higher in 5 years?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-gray-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Silver is positioned for higher prices due to: 1) Structural supply deficits (demand exceeding supply by 150-400M oz annually), 2) Solar panel demand potentially consuming 30% of mine supply by 2030, 3) EV growth requiring 80-120M oz annually, 4) 5G and AI infrastructure creating new demand, 5) No major new mines coming online before 2030, 6) Depleting above-ground stockpiles that have covered deficits. The math simply doesn&apos;t work at current prices.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Is silver a good 5-year investment?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-gray-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Silver&apos;s 5-year fundamentals are among the strongest of any major asset class. Supply/demand dynamics strongly favor higher prices. Even the bear case shows significant gains from current levels. However, silver is volatile—expect 20-30% drawdowns even in a bull market. For those with a 5-year horizon and tolerance for volatility, silver offers an asymmetric risk/reward setup. Consider it as part of a diversified precious metals allocation (10-20% of portfolio).
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Build Your 5-Year Position</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">The next 5 years could be transformative for silver. Don&apos;t wait until $50 or $80 to start building your position. Find the right company today.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Find Your Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/silver-price/prediction-2026">2026 Predictions</Link>
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
                    <AugustaCTA variant="footer" trackSource="silver-forecast-5-years" />
                </Container>
            </section>
        </main>
    );
}
