import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, FileWarning, Coins, Scale, Shield, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Paper Silver vs Physical Silver: Why Ownership Matters | 100:1 Leverage Problem",
    description: "Understand the critical difference between paper silver (ETFs, futures, unallocated accounts) and physical silver ownership. The 100:1 leverage problem exposed.",
    keywords: "paper silver vs physical silver, silver paper market, paper silver, physical silver, SLV prospectus, silver ETF risks",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is paper silver?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Paper silver includes futures contracts, ETFs like SLV, unallocated accounts, pool accounts, and other derivatives that represent claims on silver but may not be backed 1:1 by physical metal."
            }
        },
        {
            "@type": "Question",
            "name": "What is the 100:1 leverage problem in silver?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Industry estimates suggest paper silver contracts exceed physical silver by ratios of 100:1 or more. This means for every ounce of physical silver, there are over 100 ounces of paper claims."
            }
        },
        {
            "@type": "Question",
            "name": "Is SLV backed by physical silver?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "SLV's prospectus contains warnings that the trust may not always hold sufficient silver to back all shares, and authorized participants can substitute cash for silver. Read the prospectus carefully."
            }
        },
        {
            "@type": "Question",
            "name": "What is counterparty risk in silver investing?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Counterparty risk means your silver holdings depend on another party fulfilling their obligation. With paper silver, you're an unsecured creditor. With physical silver, you own the actual metal."
            }
        },
        {
            "@type": "Question",
            "name": "Why is physical silver in an IRA superior to paper silver?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Physical silver in an IRA is held in allocated, segregated storage at IRS-approved depositories. You legally own the metal. There's no counterparty risk and you benefit when paper silver schemes unwind."
            }
        }
    ]
};

export default function PaperSilverVsPhysicalPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero Section */}
            <div className="bg-white text-slate-900 py-20 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-900 to-slate-900 z-0"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-[#B22234]/20 text-[#B22234] border border-[#B22234]/30 text-xs font-bold tracking-widest uppercase mb-4">
                            CRITICAL ANALYSIS
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Paper Silver vs Physical: <span className="text-[#B22234]">Why Ownership Matters</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            For every ounce of physical silver, there are 100+ ounces of paper claims. When investors demand delivery, this house of cards collapses. Which side will you be on?
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="xl" asChild>
                                <Link href="/quiz">Find Your Silver Strategy</Link>
                            </Button>
                            <Button variant="outline" className="text-slate-900 border-slate-300 hover:bg-slate-100" asChild>
                                <Link href="/silver-squeeze/silver-manipulation">See the Manipulation Evidence</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Visual Comparison Banner */}
            <div className="bg-slate-50 border-y border-slate-200">
                <Container className="py-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-red-900/20 backdrop-blur border border-red-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <FileWarning className="w-8 h-8 text-red-700" />
                                <h3 className="text-xl font-bold text-red-700">Paper Silver</h3>
                            </div>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-700" /> May not be backed by physical metal</li>
                                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-700" /> Counterparty risk exposure</li>
                                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-700" /> Can be manipulated by banks</li>
                                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-700" /> 100:1 leverage problem</li>
                            </ul>
                        </div>
                        <div className="bg-green-900/20 backdrop-blur border border-green-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Coins className="w-8 h-8 text-green-700" />
                                <h3 className="text-xl font-bold text-green-700">Physical Silver</h3>
                            </div>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-700" /> Real asset you legally own</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-700" /> No counterparty risk</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-700" /> Cannot be manipulated away</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-700" /> Benefits from price discovery</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Main Content */}
            <Container className="py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">

                        {/* Section 1: What Is Paper Silver? */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <FileWarning className="w-6 h-6 text-red-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">What Is Paper Silver?</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 leading-relaxed">
                                    <strong className="text-red-700">&quot;Paper silver&quot;</strong> refers to financial products that represent claims on silver but may not be backed 1:1 by physical metal. When you own paper silver, you own a promise - not the metal itself.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Types of Paper Silver</h3>

                                <div className="bg-slate-50 rounded-lg p-6 my-6">
                                    <h4 className="text-lg font-bold text-red-700 mb-3">Silver ETFs (like SLV)</h4>
                                    <p className="text-slate-600 text-sm mb-2">
                                        Exchange-traded funds that claim to hold silver. However, many ETF prospectuses contain concerning language:
                                    </p>
                                    <ul className="text-slate-600 text-sm space-y-1">
                                        <li>Authorized participants may substitute cash for silver</li>
                                        <li>The trust may not have adequate insurance</li>
                                        <li>You cannot redeem shares for physical silver</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 rounded-lg p-6 my-6">
                                    <h4 className="text-lg font-bold text-red-700 mb-3">Futures Contracts</h4>
                                    <p className="text-slate-600 text-sm mb-2">
                                        Promises to buy or sell silver at a future date. Most are settled in cash, not metal:
                                    </p>
                                    <ul className="text-slate-600 text-sm space-y-1">
                                        <li>Less than 1% of contracts result in physical delivery</li>
                                        <li>Banks use futures to manipulate spot prices</li>
                                        <li>No requirement to have physical silver to sell contracts</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 rounded-lg p-6 my-6">
                                    <h4 className="text-lg font-bold text-red-700 mb-3">Unallocated Accounts</h4>
                                    <p className="text-slate-600 text-sm mb-2">
                                        Bank accounts denominated in silver ounces. Critical problems:
                                    </p>
                                    <ul className="text-slate-600 text-sm space-y-1">
                                        <li>You are an <strong className="text-slate-900">unsecured creditor</strong> of the bank</li>
                                        <li>No specific silver is set aside for you</li>
                                        <li>If the bank fails, you get pennies on the dollar</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 rounded-lg p-6 my-6">
                                    <h4 className="text-lg font-bold text-red-700 mb-3">Pool Accounts</h4>
                                    <p className="text-slate-600 text-sm mb-2">
                                        Your &quot;silver&quot; is commingled with other investors:
                                    </p>
                                    <ul className="text-slate-600 text-sm space-y-1">
                                        <li>The pool may hold less silver than total claims</li>
                                        <li>You cannot audit the actual holdings</li>
                                        <li>First out wins if there&apos;s a run</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: What Is Physical Silver? */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <Coins className="w-6 h-6 text-green-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">What Is Physical Silver?</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 leading-relaxed">
                                    <strong className="text-green-700">Physical silver</strong> means actual silver metal that you legally own. It exists in the real world, can be touched, weighed, and verified. No promises, no counterparties, no games.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Forms of Physical Silver</h3>

                                <div className="bg-slate-50 rounded-lg p-6 my-6">
                                    <h4 className="text-lg font-bold text-green-700 mb-3">Silver Coins</h4>
                                    <p className="text-slate-600 text-sm">
                                        Government-minted coins like American Silver Eagles, Canadian Maple Leafs, or Austrian Philharmonics. Coins offer:
                                    </p>
                                    <ul className="text-slate-600 text-sm space-y-1 mt-2">
                                        <li>Government-guaranteed purity and weight</li>
                                        <li>High liquidity and recognition</li>
                                        <li>IRA-eligible when meeting purity requirements</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 rounded-lg p-6 my-6">
                                    <h4 className="text-lg font-bold text-green-700 mb-3">Silver Bars</h4>
                                    <p className="text-slate-600 text-sm">
                                        Refined silver bars from recognized mints and refiners. Available in sizes from 1 oz to 1,000 oz:
                                    </p>
                                    <ul className="text-slate-600 text-sm space-y-1 mt-2">
                                        <li>Lower premiums than coins</li>
                                        <li>Must meet .999 purity for IRAs</li>
                                        <li>COMEX-deliverable 1000 oz bars for large investors</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 rounded-lg p-6 my-6">
                                    <h4 className="text-lg font-bold text-green-700 mb-3">Allocated Storage</h4>
                                    <p className="text-slate-600 text-sm">
                                        Physical silver held in your name at a secure depository:
                                    </p>
                                    <ul className="text-slate-600 text-sm space-y-1 mt-2">
                                        <li>Specific bars/coins assigned to you</li>
                                        <li>Segregated from other investors&apos; metals</li>
                                        <li>Regular audits verify your holdings</li>
                                        <li>You can take delivery anytime</li>
                                    </ul>
                                </div>

                                <p className="text-slate-600 leading-relaxed mt-6">
                                    The key difference: with physical silver, <strong className="text-slate-900">you own it</strong>. With paper silver, someone promises to pay you based on silver&apos;s price. Those are fundamentally different things.
                                </p>
                            </div>
                        </section>

                        {/* Section 3: The 100:1 Leverage Problem */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <Scale className="w-6 h-6 text-red-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">The 100:1 Leverage Problem</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 leading-relaxed">
                                    Here is the core problem with paper silver: <strong className="text-red-700">there is not enough physical silver to back all the paper claims</strong>.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    Industry analysts estimate that paper silver contracts (futures, ETFs, unallocated accounts, derivatives) exceed physical silver by ratios of <strong className="text-[#B22234]">100:1 or higher</strong>.
                                </p>

                                <div className="bg-gradient-to-r from-red-500/20 to-red-600/10 border border-red-500/30 rounded-lg p-6 my-8">
                                    <h4 className="text-lg font-bold text-red-700 mb-3">What 100:1 Means</h4>
                                    <p className="text-slate-600">
                                        For every <strong className="text-slate-900">1 ounce</strong> of physical silver that exists, there are claims on <strong className="text-slate-900">100+ ounces</strong>. This is a game of musical chairs. When the music stops, 99 out of 100 paper silver holders will not get their metal.
                                    </p>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Why This Happens</h3>
                                <ol className="text-slate-600 space-y-3">
                                    <li><strong className="text-slate-900">1. Fractional Reserve:</strong> Banks hold a fraction of the silver they sell claims on</li>
                                    <li><strong className="text-slate-900">2. Rehypothecation:</strong> The same silver is pledged as collateral multiple times</li>
                                    <li><strong className="text-slate-900">3. Cash Settlement:</strong> Most paper contracts settle in cash, not metal</li>
                                    <li><strong className="text-slate-900">4. No Audits:</strong> Many paper products are not independently audited</li>
                                </ol>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">What Happens When Everyone Wants Physical?</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We have seen glimpses of this. In early 2021, a Reddit-driven silver squeeze caused physical silver premiums to spike 30-50% above spot price. Dealers ran out of inventory. The COMEX raised margin requirements.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    If even 2% of paper silver holders demanded physical delivery, <strong className="text-red-700">there would not be enough silver to deliver</strong>. Prices would have to rise dramatically to equilibrate supply and demand.
                                </p>
                            </div>
                        </section>

                        {/* Section 4: SLV Prospectus Warnings */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-[#B22234]/20 rounded-lg">
                                    <AlertTriangle className="w-6 h-6 text-[#B22234]" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">SLV Prospectus Warnings: Read the Fine Print</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 leading-relaxed">
                                    The iShares Silver Trust (SLV) is the most popular silver ETF. Most investors never read the prospectus. They should.
                                </p>

                                <div className="bg-slate-50 rounded-lg p-6 my-6 border-l-4 border-amber-400">
                                    <h4 className="text-lg font-bold text-[#B22234] mb-3">Warning #1: You Cannot Redeem for Silver</h4>
                                    <p className="text-slate-600 text-sm italic">
                                        &quot;Individual shareholders do not have the right to redeem their shares for the underlying silver... Shareholders who are not Authorized Participants may only sell shares at the prevailing market price.&quot;
                                    </p>
                                    <p className="text-slate-600 text-xs mt-2">- SLV Prospectus</p>
                                </div>

                                <div className="bg-slate-50 rounded-lg p-6 my-6 border-l-4 border-amber-400">
                                    <h4 className="text-lg font-bold text-[#B22234] mb-3">Warning #2: Silver May Not Be Adequate</h4>
                                    <p className="text-slate-600 text-sm italic">
                                        &quot;The Trustee&apos;s arrangements with the Custodian contemplate that at the end of each business day there can be in the Trust&apos;s account no more than 1,100 ounces of silver in an unallocated form.&quot;
                                    </p>
                                    <p className="text-slate-600 text-xs mt-2">- SLV Prospectus</p>
                                </div>

                                <div className="bg-slate-50 rounded-lg p-6 my-6 border-l-4 border-red-400">
                                    <h4 className="text-lg font-bold text-red-700 mb-3">Warning #3: JP Morgan Is the Custodian</h4>
                                    <p className="text-slate-600 text-sm">
                                        Yes, <strong className="text-slate-900">JP Morgan</strong> - the same bank that paid $920 million for manipulating silver markets - is the custodian of SLV. They hold the silver (or claim to) for the world&apos;s largest silver ETF.
                                    </p>
                                </div>

                                <p className="text-slate-600 leading-relaxed">
                                    In January 2021, SLV amended its prospectus to add language warning that the trust might not be able to acquire enough silver to meet demand. This is not normal for a product supposedly backed by physical silver.
                                </p>

                                <blockquote className="border-l-4 border-amber-400 pl-4 my-6 text-slate-600 italic">
                                    &quot;To the extent the Trust needs to acquire additional silver... the Trust may not be able to acquire silver... the market price at which shares trade may deviate... from the net asset value of the Trust.&quot;
                                </blockquote>
                            </div>
                        </section>

                        {/* Section 5: Counterparty Risk Explained */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <AlertTriangle className="w-6 h-6 text-red-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Counterparty Risk Explained</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 leading-relaxed">
                                    <strong className="text-[#B22234]">Counterparty risk</strong> is the risk that the other party in a financial transaction will not fulfill their obligation. With paper silver, you are exposed to multiple counterparty risks.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Paper Silver Counterparty Risks</h3>
                                <ul className="text-slate-600 space-y-3">
                                    <li><strong className="text-red-700">Bank Failure:</strong> Unallocated accounts make you an unsecured creditor</li>
                                    <li><strong className="text-red-700">Broker Failure:</strong> Your futures positions may not survive a broker bankruptcy</li>
                                    <li><strong className="text-red-700">Custodian Risk:</strong> ETF custodians could fail or refuse delivery</li>
                                    <li><strong className="text-red-700">Clearinghouse Risk:</strong> Derivatives depend on clearinghouse solvency</li>
                                </ul>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Physical Silver: Zero Counterparty Risk</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    When you own physical silver - whether in your possession or in allocated storage - there is <strong className="text-green-700">no counterparty</strong>. The silver is yours. No one can default on their obligation because there is no obligation - you already have the metal.
                                </p>

                                <div className="bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 rounded-lg p-6 my-8">
                                    <h4 className="text-lg font-bold text-green-700 mb-3">The 2008 Lesson</h4>
                                    <p className="text-slate-600">
                                        During the 2008 financial crisis, Lehman Brothers held precious metals for clients in unallocated accounts. When Lehman failed, those clients became unsecured creditors - recovering cents on the dollar. Physical metal holders? They kept their metal.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Why Physical Silver in IRA Is Superior */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <Shield className="w-6 h-6 text-green-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Why Physical Silver in IRA Is Superior</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 leading-relaxed">
                                    A <strong className="text-[#B22234]">Physical Silver IRA</strong> combines the benefits of physical ownership with the tax advantages of retirement accounts. Here is why it beats paper silver in every meaningful way.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Physical Silver IRA Advantages</h3>

                                <div className="grid md:grid-cols-2 gap-4 my-6">
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <h4 className="text-green-700 font-bold mb-2">Real Ownership</h4>
                                        <p className="text-slate-600 text-sm">You legally own specific coins and bars. Serial numbers tracked. Fully insured.</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <h4 className="text-green-700 font-bold mb-2">Allocated Storage</h4>
                                        <p className="text-slate-600 text-sm">Your silver is segregated from other investors. Never commingled.</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <h4 className="text-green-700 font-bold mb-2">IRS-Approved Facilities</h4>
                                        <p className="text-slate-600 text-sm">Stored in approved depositories like Brinks, Delaware Depository, or HSBC vaults.</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <h4 className="text-green-700 font-bold mb-2">Tax Advantages</h4>
                                        <p className="text-slate-600 text-sm">Tax-deferred growth (Traditional) or tax-free growth (Roth). Same benefits as any IRA.</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <h4 className="text-green-700 font-bold mb-2">Take Delivery</h4>
                                        <p className="text-slate-600 text-sm">When you retire, you can take physical possession of your silver.</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <h4 className="text-green-700 font-bold mb-2">Zero Counterparty Risk</h4>
                                        <p className="text-slate-600 text-sm">The metal is yours. No bank, broker, or ETF can fail and take it from you.</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">When Paper Silver Meets Physical Reality</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Eventually, the 100:1 paper to physical ratio must resolve. When it does, paper silver holders will discover their &quot;silver&quot; was mostly promises. Physical silver holders - including Silver IRA holders - will own real metal at its true value.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    This is not speculation. JP Morgan knows this. That is why they have accumulated <strong className="text-slate-900">hundreds of millions of ounces</strong> of physical silver while shorting paper. Follow the smart money.
                                </p>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <h2 className="text-2xl font-bold font-serif text-slate-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-[#B22234] mb-2">What is paper silver?</h3>
                                    <p className="text-slate-600">Paper silver includes futures contracts, ETFs like SLV, unallocated accounts, pool accounts, and other derivatives that represent claims on silver but may not be backed 1:1 by physical metal.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-[#B22234] mb-2">What is the 100:1 leverage problem in silver?</h3>
                                    <p className="text-slate-600">Industry estimates suggest paper silver contracts exceed physical silver by ratios of 100:1 or more. This means for every ounce of physical silver, there are over 100 ounces of paper claims.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-[#B22234] mb-2">Is SLV backed by physical silver?</h3>
                                    <p className="text-slate-600">SLV&apos;s prospectus contains warnings that the trust may not always hold sufficient silver to back all shares, and authorized participants can substitute cash for silver. Read the prospectus carefully.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-[#B22234] mb-2">What is counterparty risk in silver investing?</h3>
                                    <p className="text-slate-600">Counterparty risk means your silver holdings depend on another party fulfilling their obligation. With paper silver, you are an unsecured creditor. With physical silver, you own the actual metal.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#B22234] mb-2">Why is physical silver in an IRA superior to paper silver?</h3>
                                    <p className="text-slate-600">Physical silver in an IRA is held in allocated, segregated storage at IRS-approved depositories. You legally own the metal. There is no counterparty risk and you benefit when paper silver schemes unwind.</p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-8">
                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-amber-900/30 to-slate-800/50 border border-[#B22234]/30 rounded-xl p-6 sticky top-24">
                            <div className="flex items-center gap-2 mb-4">
                                <AlertTriangle className="w-5 h-5 text-[#B22234]" />
                                <span className="text-[#B22234] font-bold text-sm uppercase tracking-wide">Take Action</span>
                            </div>
                            <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">
                                Do Not Let Banks Manipulate YOUR Retirement
                            </h3>
                            <p className="text-slate-600 text-sm mb-6">
                                Paper silver can be manipulated. Physical silver in your IRA cannot. Find out if you qualify for a Silver IRA.
                            </p>
                            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white w-full" size="lg" asChild>
                                <Link href="/quiz">Take the 60-Second Quiz</Link>
                            </Button>
                            <p className="text-xs text-slate-600 text-center mt-3">No commitment required</p>
                        </div>

                        {/* Comparison Table */}
                        <div className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Paper vs Physical Comparison</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                                    <span className="text-slate-600">Ownership</span>
                                    <span className="text-red-700">Paper: Claim</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                                    <span className="text-slate-600"></span>
                                    <span className="text-green-700">Physical: Real</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                                    <span className="text-slate-600">Counterparty</span>
                                    <span className="text-red-700">Paper: Yes</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                                    <span className="text-slate-600"></span>
                                    <span className="text-green-700">Physical: None</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                                    <span className="text-slate-600">Manipulation</span>
                                    <span className="text-red-700">Paper: Vulnerable</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600"></span>
                                    <span className="text-green-700">Physical: Protected</span>
                                </div>
                            </div>
                        </div>

                        {/* Related Articles */}
                        <div className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Related Investigations</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/silver-squeeze/silver-manipulation" className="text-[#B22234] hover:text-[#B22234] text-sm font-medium">
                                        Silver Manipulation: How Banks Suppress Prices
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-squeeze/banks-shorting-silver" className="text-[#B22234] hover:text-[#B22234] text-sm font-medium">
                                        Banks Shorting Silver: The JP Morgan Story
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guide/silver-ira-guide" className="text-slate-600 hover:text-slate-900 text-sm">
                                        Complete Silver IRA Guide
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/best-silver-ira-companies" className="text-slate-600 hover:text-slate-900 text-sm">
                                        Best Silver IRA Companies
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </Container>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-t border-slate-200">
                <Container className="py-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                        100 Paper Claims. 1 Ounce of Silver. Which Side Are You On?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                        When the paper silver market meets physical reality, only those holding real metal will be protected. Find out if a Silver IRA is right for you.
                    </p>
                    <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="xl" asChild>
                        <Link href="/quiz">Get Your Personalized Silver Strategy</Link>
                    </Button>
                </Container>
            </div>

            <Footer />
        </main>
    );
}
