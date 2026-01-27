import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, Building2, TrendingDown, Users, Target, Shield } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Banks Shorting Silver: The JP Morgan Story | $920M Manipulation Settlement",
    description: "How JP Morgan and other banks have shorted silver for decades. The spoofing conviction, the traders involved, and why banks suppress silver prices.",
    keywords: "banks shorting silver, jp morgan silver manipulation, silver short squeeze, jp morgan silver, bank silver manipulation",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Why do banks short silver?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Banks short silver for multiple reasons: to profit from price declines they engineer, to hedge their own precious metals positions, and allegedly to suppress prices as part of broader monetary policy objectives."
            }
        },
        {
            "@type": "Question",
            "name": "What happened with JP Morgan and silver manipulation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "JP Morgan paid $920 million in 2020 to settle charges that its traders manipulated precious metals markets through spoofing from 2008-2016. Multiple traders were convicted of federal crimes."
            }
        },
        {
            "@type": "Question",
            "name": "What is silver spoofing?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Spoofing is placing large orders with no intention to execute them, moving the market price, then canceling those orders and trading in the opposite direction. JP Morgan traders did this thousands of times."
            }
        },
        {
            "@type": "Question",
            "name": "Are other banks involved in silver manipulation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Deutsche Bank admitted to manipulating silver prices and provided evidence implicating other banks. HSBC and other institutions have faced allegations and settlements related to precious metals manipulation."
            }
        },
        {
            "@type": "Question",
            "name": "How can I protect myself from bank silver manipulation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Own physical silver rather than paper products. Use a Silver IRA with allocated, segregated storage to ensure your silver is real and you benefit when manipulation schemes unwind."
            }
        }
    ]
};

export default function BanksShortingSilverPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <Navbar />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero Section */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-slate-900 to-slate-900 z-0"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold tracking-widest uppercase mb-4">
                            INVESTIGATION
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Banks Shorting Silver: <span className="text-amber-400">The JP Morgan Story</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                            How the largest bank in America ran a criminal enterprise inside its trading desks - and what it means for silver investors.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="gold" size="xl" asChild>
                                <Link href="/quiz">Find Your Silver Strategy</Link>
                            </Button>
                            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
                                <Link href="/silver-squeeze/silver-manipulation">See Full Manipulation Report</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Key Stats Banner */}
            <div className="bg-slate-800/50 border-y border-white/10">
                <Container className="py-8">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                            <div className="text-4xl font-bold text-red-400 mb-2">$920M</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wide font-bold">JP Morgan Settlement</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                            <div className="text-4xl font-bold text-amber-400 mb-2">2008-2016</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wide font-bold">Years of Manipulation</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                            <div className="text-4xl font-bold text-red-400 mb-2">1000s</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wide font-bold">Spoofing Incidents</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                            <div className="text-4xl font-bold text-amber-400 mb-2">8+</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wide font-bold">Traders Charged</div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Main Content */}
            <Container className="py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">

                        {/* Section 1: JP Morgan's Silver Position History */}
                        <section className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-amber-500/20 rounded-lg">
                                    <Building2 className="w-6 h-6 text-amber-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-white">JP Morgan&apos;s Silver Position History</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-300 leading-relaxed">
                                    In March 2008, JP Morgan inherited a massive silver short position when it acquired Bear Stearns in a fire sale facilitated by the Federal Reserve. Bear Stearns had been shorting silver heavily, and those positions transferred to JP Morgan.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    What happened next is remarkable: <strong className="text-amber-400">JP Morgan did not close those short positions</strong>. Instead, they expanded them. At various points, JP Morgan&apos;s silver short position represented <strong className="text-white">40% or more of the entire COMEX silver market</strong>.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Think about that. One bank, controlling nearly half of all short positions in the silver futures market. This is not a free market - it is a controlled market.
                                </p>

                                <div className="bg-slate-800/50 rounded-lg p-6 my-6">
                                    <h4 className="text-lg font-bold text-white mb-3">The Concentrated Short Position</h4>
                                    <ul className="text-slate-300 space-y-2">
                                        <li><strong className="text-amber-400">2008:</strong> JP Morgan acquires Bear Stearns&apos; massive silver short</li>
                                        <li><strong className="text-amber-400">2011:</strong> Silver hits $49/oz despite massive shorting</li>
                                        <li><strong className="text-amber-400">2011-2020:</strong> Position maintained, prices suppressed</li>
                                        <li><strong className="text-amber-400">2020:</strong> Settlement forces position changes</li>
                                    </ul>
                                </div>

                                <p className="text-slate-300 leading-relaxed">
                                    Here is what few people discuss: while maintaining massive short positions publicly, <strong className="text-red-400">JP Morgan was quietly accumulating physical silver</strong>. The bank&apos;s vaults reportedly hold hundreds of millions of ounces of physical silver.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Short the paper market to suppress prices. Buy physical at suppressed prices. When manipulation ends, profit from both. This is the accumulation theory that many silver analysts believe explains bank behavior.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: The Spoofing Conviction */}
                        <section className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <TrendingDown className="w-6 h-6 text-red-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-white">The Spoofing Conviction: Federal Crimes Admitted</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-300 leading-relaxed">
                                    In 2020, JP Morgan entered into a <strong className="text-red-400">deferred prosecution agreement</strong> with the Department of Justice. The bank admitted that its traders engaged in widespread spoofing and market manipulation.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    The settlement included:
                                </p>
                                <ul className="text-slate-300 space-y-2">
                                    <li>A criminal monetary penalty of <strong className="text-white">$436.4 million</strong></li>
                                    <li>CFTC civil penalty of <strong className="text-white">$436.4 million</strong></li>
                                    <li>Victim compensation fund of <strong className="text-white">$35 million</strong></li>
                                    <li>SEC disgorgement of <strong className="text-white">$12.3 million</strong></li>
                                </ul>

                                <blockquote className="border-l-4 border-red-400 pl-4 my-6 text-slate-400 italic">
                                    &quot;For nearly a decade, a significant number of JP Morgan traders and sales personnel openly, and in plain view of their supervisors, placed orders that they intended to cancel before execution.&quot; - DOJ Statement
                                </blockquote>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">The Convicted Traders</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    <strong className="text-white">Michael Nowak</strong>, JP Morgan&apos;s head of precious metals trading, was convicted in 2022 of racketeering, conspiracy, and spoofing charges. He led the desk from 2009 to 2019.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    <strong className="text-white">Gregg Smith</strong>, a senior trader, was also convicted on similar charges. <strong className="text-white">John Edmonds</strong>, another trader, pleaded guilty and cooperated with prosecutors.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    The prosecution used the <strong className="text-amber-400">RICO Act</strong> - the same law used to prosecute organized crime. Federal prosecutors argued the trading desk operated as a criminal enterprise within the bank.
                                </p>
                            </div>
                        </section>

                        {/* Section 3: Other Banks Involved */}
                        <section className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-amber-500/20 rounded-lg">
                                    <Users className="w-6 h-6 text-amber-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-white">Other Banks Involved in Silver Manipulation</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-300 leading-relaxed">
                                    JP Morgan is not the only bank implicated in silver manipulation. The pattern of concentrated short positions and coordinated trading extends across multiple major financial institutions.
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">Deutsche Bank</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    In 2016, <strong className="text-red-400">Deutsche Bank settled lawsuits</strong> alleging it conspired to manipulate silver prices. As part of the settlement, Deutsche Bank agreed to <strong className="text-white">provide evidence</strong> against other banks involved in the scheme.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    This evidence reportedly included chat logs, emails, and trading records showing coordination among major banks in the London silver fix.
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">HSBC</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    HSBC has faced multiple allegations related to precious metals manipulation. In 2018, the bank paid <strong className="text-amber-400">$765,000 in CFTC penalties</strong> related to spoofing in precious metals markets.
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">UBS</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    UBS was named in class action lawsuits alleging silver price manipulation. The bank was one of the participants in the London Silver Fix before it was disbanded.
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">Bank of Nova Scotia (Scotiabank)</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Scotiabank paid <strong className="text-red-400">$127.4 million</strong> in 2020 to settle CFTC charges that its traders manipulated precious metals futures markets through spoofing.
                                </p>

                                <div className="bg-slate-800/50 rounded-lg p-6 my-6">
                                    <h4 className="text-lg font-bold text-red-400 mb-3">Pattern of Bank Manipulation Settlements</h4>
                                    <ul className="text-slate-300 space-y-2">
                                        <li><strong className="text-white">JP Morgan:</strong> $920 million (2020)</li>
                                        <li><strong className="text-white">Scotiabank:</strong> $127.4 million (2020)</li>
                                        <li><strong className="text-white">Deutsche Bank:</strong> Multiple settlements + evidence cooperation</li>
                                        <li><strong className="text-white">HSBC:</strong> $765,000+ in CFTC penalties</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Why Banks Short Silver */}
                        <section className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <Target className="w-6 h-6 text-red-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-white">Why Do Banks Short Silver?</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-300 leading-relaxed">
                                    Understanding <em>why</em> banks maintain massive short positions helps you understand the silver market and how to position yourself.
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">Reason 1: Profit from Volatility</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Banks profit from volatility. By spoofing prices down, they can buy at artificial lows. By manipulating prices up, they can sell at artificial highs. The bigger the moves, the bigger the profits.
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">Reason 2: Market Making</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Banks claim short positions are necessary for &quot;market making&quot; - providing liquidity for customers who want to buy. But market making does not require concentrated positions that exceed annual mining supply.
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">Reason 3: The Accumulation Strategy</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Many analysts believe banks short paper silver to suppress prices while simultaneously accumulating physical silver. Keep prices low through derivatives, buy the real metal cheap, profit when manipulation ends.
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">Reason 4: Monetary Policy Support</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Some researchers suggest silver and gold suppression serves broader monetary policy objectives. Rising precious metals prices signal inflation and currency weakness - inconvenient truths for central banks.
                                </p>

                                <blockquote className="border-l-4 border-amber-400 pl-4 my-6 text-slate-400 italic">
                                    &quot;The gold price is the enemy of the dollar. Central banks have every incentive to keep it under control.&quot; - Jim Rickards
                                </blockquote>
                            </div>
                        </section>

                        {/* Section 5: The Accumulation Theory */}
                        <section className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-amber-500/20 rounded-lg">
                                    <TrendingDown className="w-6 h-6 text-amber-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-white">The Accumulation Theory: Are Banks Secretly Buying?</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-300 leading-relaxed">
                                    Here is where the silver story gets interesting. While banks maintain massive short positions in paper markets, <strong className="text-amber-400">evidence suggests they are simultaneously accumulating physical silver</strong>.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    JP Morgan reportedly holds <strong className="text-white">over 600 million ounces of physical silver</strong> in its vaults - one of the largest private silver hoards in history. Why would a bank that is short silver accumulate so much physical metal?
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">The Strategy Explained</h3>
                                <ol className="text-slate-300 space-y-3">
                                    <li><strong className="text-white">Step 1:</strong> Use paper short positions to suppress silver prices</li>
                                    <li><strong className="text-white">Step 2:</strong> Buy physical silver at artificially low prices</li>
                                    <li><strong className="text-white">Step 3:</strong> When manipulation ends, prices rise</li>
                                    <li><strong className="text-white">Step 4:</strong> Physical silver holdings multiply in value</li>
                                    <li><strong className="text-white">Step 5:</strong> Close short positions (at a loss) but overall profit massively</li>
                                </ol>

                                <p className="text-slate-300 leading-relaxed mt-6">
                                    This explains the apparent contradiction: banks short paper silver while buying physical. They know paper silver is not real - but physical silver is. They are positioning for the end of their own manipulation.
                                </p>

                                <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-lg p-6 my-8">
                                    <h4 className="text-lg font-bold text-amber-400 mb-3">What This Means For You</h4>
                                    <p className="text-slate-300">
                                        If banks are accumulating physical silver while shorting paper, they expect physical silver to outperform paper silver significantly. Smart retail investors should follow the same playbook: <strong className="text-white">own physical silver, not paper derivatives</strong>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Protecting Yourself */}
                        <section className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <Shield className="w-6 h-6 text-green-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-white">Protecting Yourself from Bank Manipulation</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-300 leading-relaxed">
                                    You cannot stop banks from manipulating markets. But you can position yourself to benefit when manipulation ends.
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">Strategy 1: Own Physical Silver</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Physical silver cannot be spoofed, shorted, or manipulated away. When you own the metal, you own a real asset that benefits from price discovery. Paper silver can go to zero in a crisis - physical silver cannot.
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">Strategy 2: Use a Silver IRA</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    A properly structured Silver IRA holds <strong className="text-white">physical silver</strong> in IRS-approved depositories with segregated storage. You get tax advantages AND real metal ownership. This is the same strategy banks use - accumulate physical at suppressed prices.
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">Strategy 3: Avoid Paper Silver Products</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    ETFs, futures, pool accounts, and unallocated silver are all paper products that banks can manipulate. When the paper market meets reality, paper holders may discover their &quot;silver&quot; does not exist.
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">Strategy 4: Think Long-Term</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Bank manipulation has persisted for decades. It may continue longer than you expect. But fundamentals always win eventually. Physical silver is used in solar panels, electronics, and medicine - industrial demand grows while mines deplete.
                                </p>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
                            <h2 className="text-2xl font-bold font-serif text-white mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div className="border-b border-white/10 pb-6">
                                    <h3 className="text-lg font-bold text-amber-400 mb-2">Why do banks short silver?</h3>
                                    <p className="text-slate-300">Banks short silver for multiple reasons: to profit from price declines they engineer, to hedge their own precious metals positions, and allegedly to suppress prices as part of broader monetary policy objectives.</p>
                                </div>
                                <div className="border-b border-white/10 pb-6">
                                    <h3 className="text-lg font-bold text-amber-400 mb-2">What happened with JP Morgan and silver manipulation?</h3>
                                    <p className="text-slate-300">JP Morgan paid $920 million in 2020 to settle charges that its traders manipulated precious metals markets through spoofing from 2008-2016. Multiple traders were convicted of federal crimes.</p>
                                </div>
                                <div className="border-b border-white/10 pb-6">
                                    <h3 className="text-lg font-bold text-amber-400 mb-2">What is silver spoofing?</h3>
                                    <p className="text-slate-300">Spoofing is placing large orders with no intention to execute them, moving the market price, then canceling those orders and trading in the opposite direction. JP Morgan traders did this thousands of times.</p>
                                </div>
                                <div className="border-b border-white/10 pb-6">
                                    <h3 className="text-lg font-bold text-amber-400 mb-2">Are other banks involved in silver manipulation?</h3>
                                    <p className="text-slate-300">Deutsche Bank admitted to manipulating silver prices and provided evidence implicating other banks. HSBC, Scotiabank, and other institutions have faced allegations and settlements related to precious metals manipulation.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-amber-400 mb-2">How can I protect myself from bank silver manipulation?</h3>
                                    <p className="text-slate-300">Own physical silver rather than paper products. Use a Silver IRA with allocated, segregated storage to ensure your silver is real and you benefit when manipulation schemes unwind.</p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-8">
                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-amber-900/30 to-slate-800/50 border border-amber-500/30 rounded-xl p-6 sticky top-24">
                            <div className="flex items-center gap-2 mb-4">
                                <AlertTriangle className="w-5 h-5 text-amber-400" />
                                <span className="text-amber-400 font-bold text-sm uppercase tracking-wide">Take Action</span>
                            </div>
                            <h3 className="text-xl font-bold font-serif text-white mb-4">
                                Do Not Let Banks Manipulate YOUR Retirement
                            </h3>
                            <p className="text-slate-400 text-sm mb-6">
                                Banks short paper silver while buying physical. Follow the smart money - find out if physical silver belongs in your retirement portfolio.
                            </p>
                            <Button variant="gold" className="w-full" size="lg" asChild>
                                <Link href="/quiz">Take the 60-Second Quiz</Link>
                            </Button>
                            <p className="text-xs text-slate-500 text-center mt-3">No commitment required</p>
                        </div>

                        {/* Related Articles */}
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-white mb-4">Related Investigations</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/silver-squeeze/silver-manipulation" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                                        Silver Manipulation: How Banks Suppress Prices
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-squeeze/paper-silver-vs-physical" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                                        Paper Silver vs Physical: Why Ownership Matters
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guide/silver-ira-guide" className="text-slate-400 hover:text-white text-sm">
                                        Complete Silver IRA Guide
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/best-silver-ira-companies" className="text-slate-400 hover:text-white text-sm">
                                        Best Silver IRA Companies
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Key Players Box */}
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-white mb-4">Key Players</h3>
                            <ul className="space-y-4 text-sm">
                                <li className="border-b border-white/10 pb-3">
                                    <span className="text-amber-400 font-bold block">JP Morgan Chase</span>
                                    <span className="text-slate-400">$920M settlement, RICO charges</span>
                                </li>
                                <li className="border-b border-white/10 pb-3">
                                    <span className="text-amber-400 font-bold block">Michael Nowak</span>
                                    <span className="text-slate-400">JP Morgan precious metals chief, convicted</span>
                                </li>
                                <li className="border-b border-white/10 pb-3">
                                    <span className="text-amber-400 font-bold block">Deutsche Bank</span>
                                    <span className="text-slate-400">Admitted manipulation, provided evidence</span>
                                </li>
                                <li>
                                    <span className="text-amber-400 font-bold block">Scotiabank</span>
                                    <span className="text-slate-400">$127.4M CFTC settlement</span>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </Container>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-amber-900/50 to-slate-900 border-t border-white/10">
                <Container className="py-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        Banks Are Playing a Different Game. Are You?
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                        They short paper silver. They buy physical silver. They know what is coming. Now you do too.
                    </p>
                    <Button variant="gold" size="xl" asChild>
                        <Link href="/quiz">Get Your Personalized Silver Strategy</Link>
                    </Button>
                </Container>
            </div>

            <Footer />
        </main>
    );
}
