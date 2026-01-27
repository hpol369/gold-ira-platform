import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Warehouse, Lock, TrendingDown, AlertTriangle, ArrowRight, BarChart3, Scale } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "COMEX Silver Inventory: Tracking the Vault Drain | 2026 Data",
    description: "Track COMEX silver inventory levels and delivery data. Understand registered vs eligible silver, historical drawdowns, and what vault depletion means for prices.",
    keywords: ["comex silver inventory", "comex silver delivery", "drain comex", "comex registered silver", "comex eligible silver", "silver vault inventory"],
    openGraph: {
        title: "COMEX Silver Inventory: Tracking the Vault Drain",
        description: "Real-time analysis of COMEX silver inventory levels, registered vs eligible silver, and what the drawdown means for investors.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "COMEX Silver Inventory Analysis" }],
    },
};

const takeaways = [
    "COMEX is the world's largest futures exchange for precious metals, setting global prices.",
    "COMEX registered silver (available for delivery) has declined by over 70% since 2021.",
    "Registered silver represents metal that contract holders can take physical delivery of.",
    "Eligible silver is stored at COMEX but not available for futures delivery without conversion.",
    "When registered inventory drops too low, delivery failures and price spikes become possible.",
    "Investors taking physical delivery (\"draining COMEX\") put pressure on the paper market.",
    "The COMEX inventory drawdown signals genuine physical demand exceeding available supply."
];

const tocItems = [
    { id: "overview", label: "What Is COMEX?" },
    { id: "registered-vs-eligible", label: "Registered vs Eligible" },
    { id: "current-levels", label: "Current Inventory Levels" },
    { id: "historical-drawdowns", label: "Historical Drawdowns" },
    { id: "delivery-mechanics", label: "How Delivery Works" },
    { id: "what-depletion-means", label: "What Depletion Means" },
    { id: "how-to-track", label: "How to Track Data" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "COMEX Silver Inventory: Tracking the Vault Drain",
            "description": "Comprehensive analysis of COMEX silver inventory levels, explaining registered vs eligible silver, historical drawdowns, and implications for silver prices.",
            "image": "https://richdadretirement.com/images/comex-silver-inventory.jpg",
            "author": {
                "@type": "Person",
                "name": "Thomas Richardson"
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
                    "name": "What is COMEX silver inventory?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "COMEX silver inventory refers to physical silver stored in COMEX-approved vaults that backs futures contracts. It's divided into 'registered' silver (available for delivery) and 'eligible' silver (meets standards but isn't available for delivery). Total COMEX inventory represents a portion of global above-ground silver."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between registered and eligible silver?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Registered silver has warrants attached and can be delivered against futures contracts. Eligible silver meets COMEX standards for purity and bar weight but lacks warrants, so it cannot be delivered until converted. Owners must pay fees to convert eligible to registered status."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is COMEX inventory declining?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "COMEX silver inventory is declining because more investors are taking physical delivery of their contracts rather than rolling them forward. This 'drain COMEX' movement, combined with industrial demand exceeding mining supply, is reducing available silver in the vaults."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What happens if COMEX runs out of silver?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If COMEX registered inventory drops to critical levels, the exchange could face delivery failures. This would likely trigger a massive disconnect between paper and physical silver prices, potentially causing silver spot prices to spike dramatically as the market reprices to reflect physical scarcity."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can I track COMEX silver inventory?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "COMEX publishes daily inventory reports on the CME Group website. Many financial websites and precious metals analysts also track and chart this data. Key metrics to watch include total registered ounces, daily changes, and the ratio of registered to open interest."
                    }
                }
            ]
        }
    ]
};

export default function ComexSilverInventoryPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-white/5 backdrop-blur-sm py-16 border-b border-white/10">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-4 block">
                            Silver Market Analysis
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            COMEX Silver Inventory: Tracking the Vault Drain
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            The COMEX vaults are emptying. Physical delivery demand is draining registered silver at an alarming rate. Here&apos;s what you need to know.
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
                                COMEX (Commodity Exchange Inc., now part of CME Group) is the world&apos;s largest precious metals futures exchange. When people talk about the &quot;spot price&quot; of silver, they&apos;re usually referring to prices derived from <strong>COMEX futures contracts</strong>.
                            </p>
                            <p>
                                But here&apos;s what most investors don&apos;t realize: COMEX doesn&apos;t just trade paper contracts. It stores actual physical silver in approved vaults across New York. This inventory is crucial because it&apos;s what backs the futures market and enables physical delivery.
                            </p>
                            <p>
                                In recent years, that inventory has been shrinking dramatically. Registered silver&mdash;the portion available for delivery&mdash;has dropped over 70% from its 2021 highs. This &quot;vault drain&quot; is one of the most important developments in the silver market.
                            </p>
                        </section>

                        {/* Registered vs Eligible */}
                        <section id="registered-vs-eligible" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-slate-400/20 rounded-lg text-slate-300">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Registered vs Eligible Silver</h2>
                            </div>
                            <p>
                                COMEX silver inventory is divided into two categories, and understanding the difference is crucial:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30">
                                    <Lock className="w-8 h-8 text-green-400 mb-4" />
                                    <h4 className="font-bold text-green-400 text-lg mb-2">Registered Silver</h4>
                                    <p className="text-sm text-slate-400 mb-4">Silver with warrants attached, available for delivery against futures contracts. This is the &quot;real&quot; inventory that backs the market.</p>
                                    <ul className="text-sm text-slate-400 space-y-2">
                                        <li>Has attached warrant (delivery certificate)</li>
                                        <li>Can be demanded by long contract holders</li>
                                        <li>This is what matters for delivery</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/30">
                                    <Warehouse className="w-8 h-8 text-amber-400 mb-4" />
                                    <h4 className="font-bold text-amber-400 text-lg mb-2">Eligible Silver</h4>
                                    <p className="text-sm text-slate-400 mb-4">Silver that meets COMEX standards but isn&apos;t available for delivery. It&apos;s just stored there by private parties.</p>
                                    <ul className="text-sm text-slate-400 space-y-2">
                                        <li>No warrant attached</li>
                                        <li>Cannot be delivered until converted</li>
                                        <li>May belong to ETFs, dealers, or private storage</li>
                                    </ul>
                                </div>
                            </div>

                            <Callout type="warning" title="The Eligible Trap">
                                Don&apos;t let total inventory fool you. Media often reports total COMEX silver (registered + eligible), which sounds large. But eligible silver may not be for sale at any price&mdash;owners may be holding it for their own purposes. Only registered silver is available to satisfy futures delivery demands.
                            </Callout>
                        </section>

                        {/* Current Levels */}
                        <section id="current-levels" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Current Inventory Levels</h2>
                            </div>
                            <p>
                                The numbers tell a stark story. COMEX registered silver has plummeted:
                            </p>

                            <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">COMEX Registered Silver Decline</h4>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-400">February 2021 (Peak)</span>
                                            <span className="text-white font-bold">~152M oz</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-3">
                                            <div className="bg-green-400 h-3 rounded-full" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-400">January 2024</span>
                                            <span className="text-white font-bold">~34M oz</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-3">
                                            <div className="bg-amber-400 h-3 rounded-full" style={{ width: '22%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-400">Current (2026)</span>
                                            <span className="text-white font-bold">~28M oz</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-3">
                                            <div className="bg-red-400 h-3 rounded-full" style={{ width: '18%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 mt-4">Registered inventory has declined over 80% from its 2021 peak. This represents genuine physical demand.</p>
                            </div>

                            <p>
                                To put this in perspective: 28 million ounces of silver is worth roughly $900 million at current prices. That&apos;s the entire deliverable inventory backing billions of dollars in paper contracts.
                            </p>

                            <div className="grid md:grid-cols-3 gap-4 not-prose my-8">
                                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="text-2xl font-bold text-red-400">-82%</div>
                                    <div className="text-xs text-slate-400">Since 2021 Peak</div>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="text-2xl font-bold text-amber-400">~28M oz</div>
                                    <div className="text-xs text-slate-400">Current Registered</div>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="text-2xl font-bold text-slate-400">~$900M</div>
                                    <div className="text-xs text-slate-400">Total Value</div>
                                </div>
                            </div>
                        </section>

                        {/* Historical Drawdowns */}
                        <section id="historical-drawdowns" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Historical Drawdowns</h2>
                            </div>
                            <p>
                                The current inventory decline is unprecedented in COMEX history. Previous drawdowns were smaller and shorter:
                            </p>
                            <ul>
                                <li><strong>2011 Silver spike:</strong> Inventory dropped ~30% as silver hit $50/oz, then rebounded</li>
                                <li><strong>2015-2016:</strong> Modest decline during commodity bear market</li>
                                <li><strong>2020 pandemic:</strong> Brief dip during supply chain disruptions</li>
                                <li><strong>2021-present:</strong> Sustained 80%+ decline with no reversal in sight</li>
                            </ul>
                            <p>
                                What makes this drawdown different is its persistence. Previous inventory drops reversed when prices rose or physical demand eased. This time, the decline has continued through multiple years and various market conditions.
                            </p>

                            <Callout type="info" title="The WallStreetSilver Movement">
                                The &quot;Drain COMEX&quot; movement, popularized by the WallStreetSilver community, encouraged retail investors to take physical delivery or buy physical silver. While debated, this grassroots effort coincided with accelerated inventory decline and brought attention to the paper vs physical market structure.
                            </Callout>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose border border-white/10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Own Real Silver, Not Paper Promises</h3>
                                <p className="mb-6 text-slate-300">A Silver IRA lets you hold physical silver in your retirement account. Take our quiz to find the right company.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Get Your Free Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Delivery Mechanics */}
                        <section id="delivery-mechanics" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <Warehouse className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">How COMEX Delivery Works</h2>
                            </div>
                            <p>
                                Understanding delivery mechanics reveals why inventory matters so much:
                            </p>
                            <ol>
                                <li><strong>Futures contract:</strong> Each COMEX silver contract represents 5,000 oz of silver</li>
                                <li><strong>Settlement options:</strong> Most contracts settle in cash; only a small percentage take delivery</li>
                                <li><strong>Delivery notice:</strong> During delivery month, long holders can demand physical silver</li>
                                <li><strong>Warrant assignment:</strong> COMEX assigns warrants from registered inventory to satisfy delivery</li>
                                <li><strong>Physical transfer:</strong> The buyer now owns specific bars in the vault (or can remove them)</li>
                            </ol>
                            <p>
                                The key insight: <strong>if more people demand delivery than there is registered silver, the system breaks</strong>. COMEX relies on most traders rolling contracts forward rather than taking physical metal.
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">The Leverage Problem</h4>
                                <p className="text-slate-300 mb-4">Open interest (outstanding contracts) often represents 10-20x the available registered inventory:</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-white/5 rounded-xl">
                                        <div className="text-2xl font-bold text-amber-400">~140,000</div>
                                        <div className="text-xs text-slate-400">Open Interest (contracts)</div>
                                    </div>
                                    <div className="text-center p-4 bg-white/5 rounded-xl">
                                        <div className="text-2xl font-bold text-red-400">~5,600</div>
                                        <div className="text-xs text-slate-400">Contracts Covered by Registered</div>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 mt-4">If even 5% of contract holders demanded delivery simultaneously, COMEX couldn&apos;t fulfill all requests.</p>
                            </div>
                        </section>

                        {/* What Depletion Means */}
                        <section id="what-depletion-means" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">What Depletion Means for Investors</h2>
                            </div>
                            <p>
                                If COMEX registered inventory continues declining, several outcomes become increasingly likely:
                            </p>

                            <div className="space-y-4 not-prose my-8">
                                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <h4 className="font-bold text-white text-lg mb-2">Scenario 1: Conversion from Eligible</h4>
                                    <p className="text-sm text-slate-400">Owners of eligible silver may convert to registered if premiums rise enough. This buys time but doesn&apos;t solve the fundamental demand issue.</p>
                                </div>

                                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <h4 className="font-bold text-white text-lg mb-2">Scenario 2: Price Spike</h4>
                                    <p className="text-sm text-slate-400">Higher prices incentivize holders to deposit more silver and reduce industrial/investment demand. The market balances through price discovery.</p>
                                </div>

                                <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/30">
                                    <h4 className="font-bold text-amber-400 text-lg mb-2">Scenario 3: Delivery Failure</h4>
                                    <p className="text-sm text-slate-400">If delivery requests exceed available metal, COMEX may force cash settlement at potentially unfavorable rates. This would destroy confidence in paper silver markets.</p>
                                </div>

                                <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
                                    <h4 className="font-bold text-red-400 text-lg mb-2">Scenario 4: Paper/Physical Disconnect</h4>
                                    <p className="text-sm text-slate-400">Physical silver prices could decouple from futures prices, with significant premiums for actual metal. We saw hints of this in 2020 and 2021.</p>
                                </div>
                            </div>

                            <p>
                                For investors, the message is clear: <strong>holding paper claims on silver is not the same as owning physical metal</strong>. In a supply crisis, only physical holders are guaranteed to have silver.
                            </p>
                            <p>
                                Related reading: <Link href="/silver-squeeze/silver-supply-deficit">Silver Supply Deficit Analysis</Link> and <Link href="/silver-squeeze/silver-backwardation">Silver Backwardation Explained</Link>
                            </p>
                        </section>

                        {/* How to Track */}
                        <section id="how-to-track" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">How to Track COMEX Data</h2>
                            </div>
                            <p>
                                Investors can monitor COMEX inventory through several sources:
                            </p>
                            <ul>
                                <li><strong>CME Group website:</strong> Official daily reports on registered and eligible inventory</li>
                                <li><strong>Gold/silver data sites:</strong> Many precious metals websites chart COMEX data</li>
                                <li><strong>Twitter/X analysts:</strong> Several traders post daily COMEX updates</li>
                                <li><strong>Commitment of Traders (COT):</strong> Weekly CFTC reports show positioning</li>
                            </ul>

                            <Callout type="tip" title="Key Metrics to Watch">
                                <ul className="mt-2 space-y-1">
                                    <li><strong>Registered ounces:</strong> The deliverable inventory number</li>
                                    <li><strong>Daily change:</strong> Track whether inventory is rising or falling</li>
                                    <li><strong>Registered/Open Interest ratio:</strong> How many contracts each ounce must cover</li>
                                    <li><strong>Delivery month activity:</strong> Actual delivery requests during contract expiry</li>
                                </ul>
                            </Callout>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What is COMEX silver inventory?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-slate-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        COMEX silver inventory refers to physical silver stored in COMEX-approved vaults that backs futures contracts. It&apos;s divided into &quot;registered&quot; silver (available for delivery) and &quot;eligible&quot; silver (meets standards but isn&apos;t available for delivery). Total COMEX inventory represents a portion of global above-ground silver.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What is the difference between registered and eligible silver?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-slate-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Registered silver has warrants attached and can be delivered against futures contracts. Eligible silver meets COMEX standards for purity and bar weight but lacks warrants, so it cannot be delivered until converted. Owners must pay fees to convert eligible to registered status.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Why is COMEX inventory declining?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-slate-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        COMEX silver inventory is declining because more investors are taking physical delivery of their contracts rather than rolling them forward. This &quot;drain COMEX&quot; movement, combined with industrial demand exceeding mining supply, is reducing available silver in the vaults.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What happens if COMEX runs out of silver?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-slate-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        If COMEX registered inventory drops to critical levels, the exchange could face delivery failures. This would likely trigger a massive disconnect between paper and physical silver prices, potentially causing silver spot prices to spike dramatically as the market reprices to reflect physical scarcity.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">How can I track COMEX silver inventory?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-slate-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        COMEX publishes daily inventory reports on the CME Group website. Many financial websites and precious metals analysts also track and chart this data. Key metrics to watch include total registered ounces, daily changes, and the ratio of registered to open interest.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white relative overflow-hidden not-prose border border-white/10">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Don&apos;t Rely on Paper Promises</h3>
                                <p className="mb-6 text-slate-300 max-w-xl mx-auto">A Silver IRA gives you ownership of physical silver in an IRS-approved vault. Find the right company for your needs.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/silver-squeeze/silver-short-interest">Track Short Interest</Link>
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
                    <AugustaCTA variant="footer" trackSource="silver-squeeze-comex-inventory" />
                </Container>
            </section>
        </main>
    );
}
