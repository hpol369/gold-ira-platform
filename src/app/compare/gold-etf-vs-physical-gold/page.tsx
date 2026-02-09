import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, ComparisonRow } from "@/components/compare/ComparisonTable";
import { VerdictBox } from "@/components/compare/VerdictBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { Metadata } from "next";
import { ArrowRight, TrendingUp, ShieldCheck, AlertTriangle, DollarSign, BarChart3, Coins, Scale } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Gold ETF vs Physical Gold: Complete Comparison (2026)",
    description: "Comparing gold ETFs (GLD, IAU) vs physical gold for investing. Learn the key differences in ownership, costs, liquidity, and which is better for your investment goals.",
};

const comparisonRows: ComparisonRow[] = [
    { feature: "Ownership", optionA: "Paper claim on gold", optionB: "Real metal you own", winner: "B" },
    { feature: "Counterparty Risk", optionA: "Yes (fund, custodian, authorized participants)", optionB: "No (direct ownership)", winner: "B" },
    { feature: "Liquidity", optionA: "Very high (instant trading)", optionB: "Moderate (dealer/buyer needed)", winner: "A" },
    { feature: "Annual Costs", optionA: "0.25-0.40% expense ratio", optionB: "Storage fees ($100-300/yr)", winner: "Tie" },
    { feature: "Tax Treatment", optionA: "Capital gains (collectibles rate)", optionB: "Collectibles rate (28% max)", winner: "Tie" },
    { feature: "Divisibility", optionA: "Any dollar amount", optionB: "Fixed coin/bar sizes", winner: "A" },
    { feature: "Crisis Protection", optionA: "Dependent on markets functioning", optionB: "Independent of financial system", winner: "B" },
    { feature: "Tangibility", optionA: "None (digital entries)", optionB: "Yes (hold in your hands)", winner: "B" }
];

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "comparison", label: "Side-by-Side Comparison" },
    { id: "what-are-gold-etfs", label: "What Are Gold ETFs?" },
    { id: "what-is-physical-gold", label: "What is Physical Gold?" },
    { id: "gld-vs-iau", label: "GLD vs IAU Comparison" },
    { id: "physical-gold-options", label: "Physical Gold Options" },
    { id: "key-differences", label: "Key Differences" },
    { id: "when-etf", label: "When to Choose ETFs" },
    { id: "when-physical", label: "When to Choose Physical" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Gold ETF vs Physical Gold: Complete Comparison",
            "description": "Comparing gold ETFs (GLD, IAU) vs physical gold for investing. Learn the key differences in ownership, costs, liquidity, and which is better for your investment goals.",
            "image": "https://richdadretirement.com/images/gold-etf-vs-physical-gold-cover.jpg",
            "author": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://richdadretirement.com/logo.png"
                }
            },
            "datePublished": "2026-01-27",
            "dateModified": "2026-01-27"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is a gold ETF the same as owning gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. A gold ETF is a paper claim on gold held by a fund. You don't own the gold directly - you own shares of a trust that holds gold. Most ETF investors cannot redeem shares for physical gold; only large 'authorized participants' can. With physical gold, you own the actual metal."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the best gold ETF to buy?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The two largest gold ETFs are GLD (SPDR Gold Shares) and IAU (iShares Gold Trust). GLD has higher liquidity but a 0.40% expense ratio. IAU has a lower 0.25% expense ratio but slightly less liquidity. For most investors, IAU offers better value for long-term holdings."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is physical gold a better investment than gold ETF?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends on your goals. Physical gold is better for long-term wealth protection, crisis insurance, and eliminating counterparty risk. Gold ETFs are better for short-term trading, small investments, and convenience. Many investors use both for different purposes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What happens to gold ETFs if the market crashes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Gold ETFs should track gold prices during normal market conditions. However, during extreme crises, ETF shares can trade at discounts to the underlying gold value if markets become illiquid or dysfunctional. Physical gold maintains its value independent of market functioning."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I hold physical gold in an IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, through a Gold IRA (also called a precious metals IRA). This allows you to own physical gold coins and bars with the same tax advantages as a regular IRA. The gold is stored in an IRS-approved depository. You can roll over existing 401(k) or IRA funds tax-free."
                    }
                }
            ]
        }
    ]
};

export default function GoldEtfVsPhysicalGoldPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={schema} />
            <Navbar />
            {/* Header */}
            <header className="bg-slate-50 border-b border-slate-200 py-20 relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-100 border border-slate-200 text-sm font-semibold text-[#B22234] mb-6">
                        Paper Claims vs. Real Metal
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Gold ETF vs. Physical Gold
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4">
                        One sits on your brokerage statement. The other you can hold in your hands. Which way to invest in gold is right for you?
                    </p>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Gold ETFs like GLD and IAU offer convenience. Physical gold offers true ownership. Understanding the tradeoffs helps you make the right choice for your situation.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 max-w-none">

                        <p className="lead">
                            The question comes up constantly: <em>&quot;Why buy physical gold when I can just buy GLD?&quot;</em>
                        </p>
                        <p>
                            It&apos;s a fair question. Gold ETFs are convenient&mdash;buy and sell with a click, no storage hassles, fits right in your brokerage account. But here&apos;s what most people don&apos;t realize: when you buy a gold ETF, you don&apos;t actually own any gold. You own shares of a trust that owns gold. And in certain scenarios, that distinction matters a lot.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="It Depends on Your Goals"
                                summary="Gold ETFs are better for active trading, small positions, and convenience. Physical gold is better for long-term wealth protection, crisis insurance, and true ownership. For retirement protection, physical gold (especially in a Gold IRA) provides the certainty that paper claims cannot."
                                bestFor="Use ETFs for trading and liquidity. Use physical gold for protection and long-term holdings."
                            />
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2>Complete Side-by-Side Comparison</h2>
                            <p>
                                Here&apos;s how gold ETFs and physical gold stack up across every important factor:
                            </p>
                            <ComparisonTable
                                optionAName="Gold ETF"
                                optionBName="Physical Gold"
                                rows={comparisonRows}
                            />
                            <p className="text-sm text-slate-600 mt-4">
                                <strong>Key:</strong> Green highlighting indicates the better option for that category. &quot;Tie&quot; means both are roughly equivalent.
                            </p>
                        </section>

                        {/* What Are Gold ETFs */}
                        <section id="what-are-gold-etfs" className="scroll-mt-32">
                            <h2>What Are Gold ETFs?</h2>
                            <p>
                                Gold ETFs (Exchange-Traded Funds) are investment funds that trade on stock exchanges and aim to track the price of gold. The fund holds physical gold in vaults, and investors buy shares that represent a fractional ownership of that gold.
                            </p>
                            <p>
                                The two biggest gold ETFs are:
                            </p>
                            <ul>
                                <li><strong>GLD (SPDR Gold Shares)</strong> &mdash; The largest gold ETF with over $50 billion in assets</li>
                                <li><strong>IAU (iShares Gold Trust)</strong> &mdash; Similar structure with lower fees</li>
                            </ul>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-green-50 border border-green-100">
                                    <h4 className="font-bold text-green-700 mb-3">Gold ETF Advantages</h4>
                                    <ul className="space-y-2 text-sm text-green-600">
                                        <li>• <strong>Instant liquidity</strong> &mdash; Buy/sell during market hours</li>
                                        <li>• <strong>Low minimums</strong> &mdash; Start with any dollar amount</li>
                                        <li>• <strong>No storage hassles</strong> &mdash; Fund handles custody</li>
                                        <li>• <strong>Easy to trade</strong> &mdash; Works in any brokerage</li>
                                        <li>• <strong>Fractional shares</strong> &mdash; Buy exact dollar amounts</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-red-50 border border-red-100">
                                    <h4 className="font-bold text-red-700 mb-3">Gold ETF Disadvantages</h4>
                                    <ul className="space-y-2 text-sm text-red-600">
                                        <li>• <strong>No physical ownership</strong> &mdash; Just paper claims</li>
                                        <li>• <strong>Counterparty risk</strong> &mdash; Trust structure adds risk</li>
                                        <li>• <strong>Ongoing fees</strong> &mdash; Expense ratios reduce returns</li>
                                        <li>• <strong>Market dependent</strong> &mdash; Requires functioning exchanges</li>
                                        <li>• <strong>No redemption</strong> &mdash; Retail investors can&apos;t get gold</li>
                                    </ul>
                                </div>
                            </div>

                            <Callout type="warning" title="The Fine Print">
                                Read any gold ETF prospectus and you&apos;ll find this: only &quot;authorized participants&quot; (large institutions) can actually redeem shares for physical gold. As a regular investor, you can only sell shares for cash. You never get the gold.
                            </Callout>
                        </section>

                        {/* What is Physical Gold */}
                        <section id="what-is-physical-gold" className="scroll-mt-32">
                            <h2>What is Physical Gold?</h2>
                            <p>
                                Physical gold means exactly what it sounds like: real gold bars and coins that you own outright. You can hold it in your hands, store it in a safe, or keep it in a professional vault. No intermediaries, no paper claims&mdash;just you and your metal.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-green-50 border border-green-100">
                                    <h4 className="font-bold text-green-700 mb-3">Physical Gold Advantages</h4>
                                    <ul className="space-y-2 text-sm text-green-600">
                                        <li>• <strong>True ownership</strong> &mdash; The gold is yours, period</li>
                                        <li>• <strong>No counterparty risk</strong> &mdash; No one can default</li>
                                        <li>• <strong>Crisis protection</strong> &mdash; Works when systems fail</li>
                                        <li>• <strong>Private ownership</strong> &mdash; Less visible than brokerage</li>
                                        <li>• <strong>5,000 year track record</strong> &mdash; Ultimate store of value</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-red-50 border border-red-100">
                                    <h4 className="font-bold text-red-700 mb-3">Physical Gold Disadvantages</h4>
                                    <ul className="space-y-2 text-sm text-red-600">
                                        <li>• <strong>Storage requirements</strong> &mdash; Safe or vault needed</li>
                                        <li>• <strong>Lower liquidity</strong> &mdash; Need to find a buyer</li>
                                        <li>• <strong>Dealer spreads</strong> &mdash; Buy/sell price difference</li>
                                        <li>• <strong>Fixed sizes</strong> &mdash; Minimum purchase amounts</li>
                                        <li>• <strong>Security concerns</strong> &mdash; Theft risk if home stored</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* GLD vs IAU */}
                        <section id="gld-vs-iau" className="scroll-mt-32">
                            <h2>GLD vs IAU: Which Gold ETF is Better?</h2>
                            <p>
                                If you decide to use ETFs for gold exposure, the two main choices are GLD and IAU. Here&apos;s how they compare:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white shadow-sm rounded-xl border border-slate-200">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">Feature</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">GLD</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">IAU</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-600">
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-900">Expense Ratio</td>
                                            <td className="p-4">0.40%</td>
                                            <td className="p-4 text-green-700">0.25%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-900">Assets Under Management</td>
                                            <td className="p-4 text-green-700">$55+ billion</td>
                                            <td className="p-4">$28+ billion</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-900">Average Daily Volume</td>
                                            <td className="p-4 text-green-700">~7 million shares</td>
                                            <td className="p-4">~5 million shares</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-900">Share Price</td>
                                            <td className="p-4">~$180-200</td>
                                            <td className="p-4 text-green-700">~$35-40</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-900">Best For</td>
                                            <td className="p-4">Active traders needing liquidity</td>
                                            <td className="p-4">Long-term holders minimizing fees</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Callout type="tip" title="Our Take">
                                For most investors, <strong>IAU is the better choice</strong> due to its lower expense ratio. The 0.15% annual savings adds up over time. GLD&apos;s superior liquidity only matters for large institutional trades.
                            </Callout>
                        </section>

                        {/* Physical Gold Options */}
                        <section id="physical-gold-options" className="scroll-mt-32">
                            <h2>Physical Gold Options: Coins, Bars, and Gold IRAs</h2>
                            <p>
                                If you choose physical gold, you have several options for how to buy and hold it:
                            </p>

                            <div className="not-prose space-y-6 my-8">
                                <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm border border-slate-200">
                                    <div className="w-12 h-12 rounded-full bg-[#B22234]/10 text-[#B22234] flex items-center justify-center shrink-0">
                                        <Coins className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#B22234] text-lg">Gold Coins</h4>
                                        <p className="text-slate-600 mt-1">Popular choices include American Gold Eagles, Canadian Maple Leafs, and South African Krugerrands. Coins carry small premiums over spot price but are highly recognizable and easy to sell.</p>
                                        <p className="text-sm text-slate-500 mt-2"><strong>Best for:</strong> Smaller purchases, portability, potential numismatic value</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm border border-slate-200">
                                    <div className="w-12 h-12 rounded-full bg-[#B22234]/10 text-[#B22234] flex items-center justify-center shrink-0">
                                        <BarChart3 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#B22234] text-lg">Gold Bars</h4>
                                        <p className="text-slate-600 mt-1">Available from 1 gram to 400 oz. Larger bars have lower premiums over spot but are less divisible. PAMP Suisse, Credit Suisse, and Perth Mint are well-known refiners.</p>
                                        <p className="text-sm text-slate-500 mt-2"><strong>Best for:</strong> Larger purchases, lowest premiums, serious wealth storage</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm border border-slate-200">
                                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#B22234] text-lg">Gold IRA</h4>
                                        <p className="text-slate-600 mt-1">Hold physical gold in a tax-advantaged retirement account. The gold is stored in an IRS-approved depository, and you get the same tax benefits as a regular IRA. You can roll over existing 401(k) or IRA funds.</p>
                                        <p className="text-sm text-slate-500 mt-2"><strong>Best for:</strong> Retirement savings, tax advantages, professional storage</p>
                                    </div>
                                </div>
                            </div>

                            <Callout type="info" title="Gold IRA Advantage">
                                A Gold IRA combines the best of both worlds: you own physical gold (no counterparty risk) with IRA tax benefits. It&apos;s the preferred method for retirement-focused gold investors.
                            </Callout>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-[#000080] rounded-2xl p-8 text-slate-900 text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">Want Physical Gold with Tax Benefits?</h3>
                                <p className="mb-6 text-slate-600">Learn how a Gold IRA lets you own physical gold with the same tax advantages as your 401(k).</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Take the 60-Second Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Key Differences */}
                        <section id="key-differences" className="scroll-mt-32">
                            <h2>Key Differences: Gold ETF vs. Physical Gold</h2>

                            <div className="not-prose space-y-6 my-8">
                                <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm border border-slate-200">
                                    <div className="w-12 h-12 rounded-full bg-[#B22234]/10 text-[#B22234] flex items-center justify-center shrink-0">
                                        <Scale className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#B22234] text-lg">1. Ownership Structure</h4>
                                        <p className="text-slate-600 mt-1"><strong>Gold ETF:</strong> You own shares in a trust. The trust owns gold. You have a paper claim, not direct ownership.</p>
                                        <p className="text-slate-600 mt-1"><strong>Physical Gold:</strong> You own the metal outright. It&apos;s yours, full stop. No intermediaries.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm border border-slate-200">
                                    <div className="w-12 h-12 rounded-full bg-[#B22234]/10 text-[#B22234] flex items-center justify-center shrink-0">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#B22234] text-lg">2. Counterparty Risk</h4>
                                        <p className="text-slate-600 mt-1"><strong>Gold ETF:</strong> Multiple counterparties: the fund sponsor, custodian banks, authorized participants. Any could fail.</p>
                                        <p className="text-slate-600 mt-1"><strong>Physical Gold:</strong> None. The gold exists independent of any institution or financial system.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm border border-slate-200">
                                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#B22234] text-lg">3. Crisis Scenarios</h4>
                                        <p className="text-slate-600 mt-1"><strong>Gold ETF:</strong> Requires functioning stock exchanges and financial infrastructure to trade or sell.</p>
                                        <p className="text-slate-600 mt-1"><strong>Physical Gold:</strong> Works even if banks are closed, markets are halted, or digital systems fail.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm border border-slate-200">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                                        <DollarSign className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#B22234] text-lg">4. Cost Structure</h4>
                                        <p className="text-slate-600 mt-1"><strong>Gold ETF:</strong> Ongoing expense ratio (0.25-0.40%) that compounds over time, reducing your holdings.</p>
                                        <p className="text-slate-600 mt-1"><strong>Physical Gold:</strong> One-time dealer spread at purchase/sale. Storage fees if using a vault. No ongoing erosion of holdings.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* When to Choose ETF */}
                        <section id="when-etf" className="scroll-mt-32">
                            <h2>When Gold ETFs Make Sense</h2>
                            <p>
                                ETFs aren&apos;t &quot;bad&quot;&mdash;they serve specific purposes well. Here&apos;s when they make sense:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-blue-50 border border-blue-100">
                                    <BarChart3 className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-blue-700">You&apos;re actively trading gold</h4>
                                        <p className="text-sm text-blue-600 mt-1">If you&apos;re making short-term trades on gold price movements, ETFs offer instant execution and tight spreads.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-blue-50 border border-blue-100">
                                    <DollarSign className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-blue-700">You&apos;re investing small amounts</h4>
                                        <p className="text-sm text-blue-600 mt-1">With ETFs, you can invest $100 or $1,000. Physical gold requires larger minimum purchases (typically $1,500+).</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-blue-50 border border-blue-100">
                                    <TrendingUp className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-blue-700">You want portfolio convenience</h4>
                                        <p className="text-sm text-blue-600 mt-1">ETFs fit neatly in existing brokerage accounts. No separate storage, no new accounts needed.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* When to Choose Physical */}
                        <section id="when-physical" className="scroll-mt-32">
                            <h2>When Physical Gold Makes Sense</h2>
                            <p>
                                Physical gold serves a different purpose: <strong>real protection</strong>. Here&apos;s when it&apos;s the right choice:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                                    <ShieldCheck className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-green-700">You want true crisis insurance</h4>
                                        <p className="text-sm text-green-600 mt-1">If banks close, markets halt, or digital systems fail&mdash;physical gold still works. It&apos;s protection that doesn&apos;t depend on the system functioning.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                                    <ShieldCheck className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-green-700">You&apos;re building long-term wealth</h4>
                                        <p className="text-sm text-green-600 mt-1">For holdings measured in years or decades, physical gold avoids the ongoing expense ratio drag of ETFs.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                                    <ShieldCheck className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-green-700">You want to eliminate counterparty risk</h4>
                                        <p className="text-sm text-green-600 mt-1">Physical gold has no counterparty. No fund sponsor, no custodian bank, no authorized participants. Just you and your metal.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                                    <ShieldCheck className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-green-700">You&apos;re protecting retirement savings</h4>
                                        <p className="text-sm text-green-600 mt-1">A Gold IRA lets you hold physical gold with tax advantages. It&apos;s the best of both worlds for retirement protection.</p>
                                    </div>
                                </div>
                            </div>

                            <Callout type="tip" title="The Balanced Approach">
                                Many sophisticated investors use <em>both</em>: ETFs for convenient trading positions and physical gold (often in a Gold IRA) for core long-term holdings. The ETF is for tactics; the physical is for strategy.
                            </Callout>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Gold ETF vs. Physical Gold FAQs</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white shadow-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Is a gold ETF the same as owning gold?</h4>
                                        <span className="shrink-0 rounded-full bg-[#B22234]/10 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        No. A gold ETF is a paper claim on gold held by a fund. You don&apos;t own the gold directly&mdash;you own shares of a trust that holds gold. Most ETF investors cannot redeem shares for physical gold; only large &quot;authorized participants&quot; can. With physical gold, you own the actual metal.
                                    </p>
                                </details>

                                <details className="group bg-white shadow-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">What is the best gold ETF to buy?</h4>
                                        <span className="shrink-0 rounded-full bg-[#B22234]/10 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        The two largest gold ETFs are GLD (SPDR Gold Shares) and IAU (iShares Gold Trust). GLD has higher liquidity but a 0.40% expense ratio. IAU has a lower 0.25% expense ratio but slightly less liquidity. For most investors, IAU offers better value for long-term holdings.
                                    </p>
                                </details>

                                <details className="group bg-white shadow-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Is physical gold a better investment than gold ETF?</h4>
                                        <span className="shrink-0 rounded-full bg-[#B22234]/10 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        It depends on your goals. Physical gold is better for long-term wealth protection, crisis insurance, and eliminating counterparty risk. Gold ETFs are better for short-term trading, small investments, and convenience. Many investors use both for different purposes.
                                    </p>
                                </details>

                                <details className="group bg-white shadow-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">What happens to gold ETFs if the market crashes?</h4>
                                        <span className="shrink-0 rounded-full bg-[#B22234]/10 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Gold ETFs should track gold prices during normal market conditions. However, during extreme crises, ETF shares can trade at discounts to the underlying gold value if markets become illiquid or dysfunctional. Physical gold maintains its value independent of market functioning.
                                    </p>
                                </details>

                                <details className="group bg-white shadow-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Can I hold physical gold in an IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-[#B22234]/10 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Yes, through a Gold IRA (also called a precious metals IRA). This allows you to own physical gold coins and bars with the same tax advantages as a regular IRA. The gold is stored in an IRS-approved depository. You can roll over existing 401(k) or IRA funds tax-free. See our <Link href="/guide/gold-ira-guide" className="text-[#B22234] hover:underline">Gold IRA guide</Link> to learn more.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-slate-900 relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-slate-900">Ready to Own Physical Gold?</h3>
                                <p className="mb-6 text-slate-600 max-w-xl mx-auto">Get your free Gold IRA guide and learn how to hold real gold with retirement tax benefits.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">See If Physical Gold Is Right for Me <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-slate-300 text-slate-900 hover:bg-slate-100">
                                        <Link href="/compare/gold-ira-vs-gold-etf">Compare Gold IRA vs ETF</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Related Comparisons */}
                        <section className="mt-12 not-prose">
                            <h3 className="text-lg font-bold text-[#B22234] mb-4">Related Comparisons</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link href="/compare/gold-ira-vs-gold-etf" className="p-4 bg-white/5 rounded-lg border border-slate-200 hover:border-[#B22234]/50 transition-colors group">
                                    <span className="text-sm font-semibold text-slate-600 group-hover:text-[#B22234]">Gold IRA vs. Gold ETF &rarr;</span>
                                </Link>
                                <Link href="/compare/gold-stocks-vs-gold-ira" className="p-4 bg-white/5 rounded-lg border border-slate-200 hover:border-[#B22234]/50 transition-colors group">
                                    <span className="text-sm font-semibold text-slate-600 group-hover:text-[#B22234]">Gold Stocks vs. Gold IRA &rarr;</span>
                                </Link>
                                <Link href="/compare/gold-ira-vs-physical-gold" className="p-4 bg-white/5 rounded-lg border border-slate-200 hover:border-[#B22234]/50 transition-colors group">
                                    <span className="text-sm font-semibold text-slate-600 group-hover:text-[#B22234]">Gold IRA vs. Physical Gold &rarr;</span>
                                </Link>
                            </div>
                        </section>

                    </article>
                </div>
            </Container>

            {/* Augusta CTA */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Want Physical Gold with IRA Tax Benefits?"
                        subheadline="Get your free Gold IRA guide and learn how to own real gold in a tax-advantaged account."
                        trackSource="compare-gold-etf-vs-physical"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
