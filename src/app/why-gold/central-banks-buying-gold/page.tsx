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
    Globe,
    TrendingUp,
    Building2,
    Coins,
    AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
    title: "Why Central Banks Are Buying Gold at Record Pace | Rich Dad Retirement",
    description: "Discover why central banks bought more gold in 2022-2024 than any time in 55 years. Learn what this means for gold prices and your retirement.",
    openGraph: {
        title: "Central Banks Buying Gold - What It Means for You",
        description: "Central banks are buying gold at record pace. Learn why and what it means for individual investors.",
        type: "article",
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Central Banks Are Buying Gold at Record Pace",
    description: "Central banks bought more gold in 2022-2024 than any time in 55 years. Learn what this means for gold prices and your retirement.",
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

export default function CentralBanksBuyingGoldPage() {
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
                            Institutional Demand
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Why Central Banks Are Buying Gold at Record Pace
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            In 2022-2024, central banks bought more gold than any time since 1967. What do they know that most individual investors don&apos;t?
                        </p>
                    </div>
                </Container>
            </section>

            {/* Content */}
            <section className="py-16 bg-background">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                            {/* The Data */}
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Record-Breaking Gold Purchases</h2>
                            </div>
                            <p>
                                The numbers are staggering. Central banks around the world have been accumulating gold at a pace not seen in over half a century:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="p-4 border-b font-bold text-primary">Year</th>
                                            <th className="p-4 border-b font-bold text-primary">Central Bank Gold Purchases</th>
                                            <th className="p-4 border-b font-bold text-primary">Notable Buyers</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        <tr>
                                            <td className="p-4">2022</td>
                                            <td className="p-4 font-semibold text-amber-600">1,136 tonnes</td>
                                            <td className="p-4">Turkey, China, Egypt, Qatar</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">2023</td>
                                            <td className="p-4 font-semibold text-amber-600">1,037 tonnes</td>
                                            <td className="p-4">China, Poland, Singapore, Libya</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">2024</td>
                                            <td className="p-4 font-semibold text-amber-600">1,100+ tonnes (est.)</td>
                                            <td className="p-4">China, India, Turkey, Poland</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                For context, annual gold mine production is about 3,000-3,500 tonnes. Central banks are now buying roughly one-third of all gold mined each year.
                            </p>

                            {/* Why They're Buying */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Why Central Banks Want Gold</h2>
                            </div>

                            <h3>1. De-Dollarization</h3>
                            <p>
                                After the US froze Russia&apos;s $300+ billion in dollar reserves following the Ukraine invasion, central banks worldwide got a wake-up call: <strong>dollar reserves can be weaponized</strong>.
                            </p>
                            <p>
                                Gold, unlike dollars or Treasuries, cannot be frozen, sanctioned, or seized. It&apos;s the only reserve asset with no counterparty risk.
                            </p>

                            <h3>2. Protection Against Currency Devaluation</h3>
                            <p>
                                Central banks know better than anyone that currencies are being debased. The US alone has printed trillions since 2020. Gold maintains value as currencies decline.
                            </p>

                            <h3>3. Geopolitical Insurance</h3>
                            <p>
                                In an increasingly multipolar world, gold provides stability that&apos;s not dependent on any single country&apos;s policies or economic health.
                            </p>

                            <h3>4. Portfolio Diversification</h3>
                            <p>
                                Central banks hold reserves to ensure financial stability. Gold provides diversification away from dollar-denominated assets.
                            </p>

                            <Callout type="info" title="China's Gold Strategy">
                                China has been buying gold for 17 consecutive months (as of late 2024), adding over 200 tonnes to its reserves. Official holdings are now 2,200+ tonnes—but many analysts believe actual holdings are much higher.
                            </Callout>

                            {/* Top Buyers */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The Biggest Buyers</h2>
                            </div>

                            <div className="grid gap-4 not-prose my-8">
                                <div className="bg-white rounded-xl border border-gray-200 p-6">
                                    <h4 className="font-bold text-primary text-lg mb-2">🇨🇳 China (PBOC)</h4>
                                    <p className="text-gray-600 text-sm mb-2">Official holdings: 2,200+ tonnes</p>
                                    <p className="text-gray-700">The world&apos;s largest gold producer is also a major buyer. Many analysts believe actual holdings are 3-4x higher than reported.</p>
                                </div>
                                <div className="bg-white rounded-xl border border-gray-200 p-6">
                                    <h4 className="font-bold text-primary text-lg mb-2">🇵🇱 Poland</h4>
                                    <p className="text-gray-600 text-sm mb-2">Added 130+ tonnes in 2023</p>
                                    <p className="text-gray-700">Poland&apos;s central bank has been one of Europe&apos;s most aggressive buyers, citing &quot;uncertain geopolitical environment.&quot;</p>
                                </div>
                                <div className="bg-white rounded-xl border border-gray-200 p-6">
                                    <h4 className="font-bold text-primary text-lg mb-2">🇹🇷 Turkey</h4>
                                    <p className="text-gray-600 text-sm mb-2">Major buyer through 2022-2023</p>
                                    <p className="text-gray-700">Facing high inflation and currency depreciation, Turkey&apos;s central bank has heavily accumulated gold.</p>
                                </div>
                                <div className="bg-white rounded-xl border border-gray-200 p-6">
                                    <h4 className="font-bold text-primary text-lg mb-2">🇮🇳 India (RBI)</h4>
                                    <p className="text-gray-600 text-sm mb-2">Consistent buyer since 2017</p>
                                    <p className="text-gray-700">India&apos;s central bank continues to add gold, reflecting the country&apos;s cultural affinity for the metal.</p>
                                </div>
                            </div>

                            {/* What It Means */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">What This Means for Individual Investors</h2>
                            </div>

                            <h3>1. Supply/Demand Dynamics</h3>
                            <p>
                                When central banks buy one-third of annual production, less gold is available for everyone else. This structural demand supports prices long-term.
                            </p>

                            <h3>2. Smart Money Signal</h3>
                            <p>
                                Central banks are the &quot;smart money&quot; of the financial world. When they accumulate an asset at record pace, it&apos;s worth paying attention.
                            </p>

                            <h3>3. Validation of Gold&apos;s Role</h3>
                            <p>
                                Central bank buying validates gold&apos;s role as a reserve asset and store of value—the same reasons individual investors should consider gold.
                            </p>

                            <Callout type="tip" title="Follow the Smart Money">
                                Individual investors can follow the central bank playbook by allocating 10-20% of their portfolio to physical gold. A Gold IRA offers a tax-advantaged way to hold physical gold in a retirement account.
                            </Callout>

                            {/* Price Impact */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Impact on Gold Prices</h2>
                            </div>

                            <p>
                                Central bank buying has contributed to gold reaching all-time highs in 2024-2025, surpassing $2,500/oz. Analysts point to this structural demand as a key price driver:
                            </p>

                            <ul>
                                <li>Goldman Sachs raised gold targets citing central bank demand</li>
                                <li>UBS projects continued central bank buying through 2025+</li>
                                <li>World Gold Council notes &quot;central banks remain committed gold buyers&quot;</li>
                            </ul>

                            <p>
                                As long as geopolitical tensions remain elevated and de-dollarization continues, central bank gold demand is likely to persist.
                            </p>

                            {/* Risks Section */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-red-50 rounded-lg text-red-600">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Considerations & Risks</h2>
                            </div>

                            <p>
                                While central bank buying is bullish for gold, investors should consider:
                            </p>

                            <ul>
                                <li><strong>Central banks could sell:</strong> Though unlikely in current environment, they have sold in the past</li>
                                <li><strong>Prices already reflect demand:</strong> Some of this buying may be priced in</li>
                                <li><strong>Gold doesn&apos;t pay dividends:</strong> It&apos;s a wealth preservation tool, not an income generator</li>
                                <li><strong>Short-term volatility:</strong> Gold prices fluctuate; long-term perspective is key</li>
                            </ul>

                            {/* CTA */}
                            <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-white">Follow the Central Banks</h3>
                                    <p className="mb-6 text-gray-200">Add physical gold to your retirement portfolio like the world&apos;s central banks.</p>
                                    <Button variant="gold" size="lg" asChild>
                                        <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Bottom Line */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The Bottom Line</h2>
                            </div>

                            <p>
                                Central banks are the most sophisticated financial institutions in the world. When they collectively decide to buy more gold than any time in 55 years, it&apos;s a signal worth heeding.
                            </p>

                            <p>
                                They&apos;re buying gold for the same reasons individual investors should consider it: protection against currency devaluation, geopolitical uncertainty, and financial system risk.
                            </p>

                            <p>
                                A <Link href="/what-is-a-gold-ira">Gold IRA</Link> allows you to follow the central bank playbook—holding physical gold in a tax-advantaged retirement account.
                            </p>

                        </article>

                        {/* Navigation */}
                        <div className="mt-16 pt-8 border-t border-gray-200">
                            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                                <Link
                                    href="/why-gold/physical-gold-vs-paper"
                                    className="flex items-center gap-2 text-primary hover:text-secondary transition"
                                >
                                    <ArrowLeft className="w-4 h-4" /> Physical vs Paper Gold
                                </Link>
                                <Link
                                    href="/why-gold/gold-vs-stocks"
                                    className="flex items-center gap-2 text-primary hover:text-secondary transition justify-end"
                                >
                                    Gold vs Stocks <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <AugustaCTA />
            <Footer />
        </>
    );
}
