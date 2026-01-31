import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, Scale, FileWarning, Shield, TrendingUp, Gavel, DollarSign } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Silver Manipulation: How Banks Suppress Prices | The $920M JP Morgan Fine",
    description: "Exposed: How major banks manipulate silver prices through spoofing, paper contracts, and the London Fix. Learn how to profit when manipulation ends.",
    keywords: "silver manipulation, silver price manipulation, silver market manipulation, jp morgan silver, silver spoofing, london fix scandal",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Is silver price manipulation real?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. JP Morgan paid $920 million in 2020 to settle charges of manipulating precious metals markets through spoofing. Multiple traders have been convicted of federal crimes related to silver market manipulation."
            }
        },
        {
            "@type": "Question",
            "name": "How do banks manipulate silver prices?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Banks use techniques including spoofing (placing and canceling large orders to move prices), naked shorting through paper silver contracts, and concentrated short positions that can exceed annual mining supply."
            }
        },
        {
            "@type": "Question",
            "name": "What is paper silver vs physical silver?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Paper silver includes futures contracts, ETFs, and unallocated accounts that may not be backed 1:1 by physical metal. Estimates suggest paper silver contracts exceed physical silver by ratios of 100:1 or more."
            }
        },
        {
            "@type": "Question",
            "name": "What happens when silver manipulation ends?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "When manipulation schemes unwind, suppressed prices typically experience rapid price discovery. Investors holding physical silver or allocated silver in IRAs would benefit from price normalization."
            }
        },
        {
            "@type": "Question",
            "name": "How can I protect myself from silver manipulation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Own physical silver or allocated silver in an IRA rather than paper silver products. Physical ownership removes counterparty risk and ensures you benefit when manipulation ends."
            }
        }
    ]
};

export default function SilverManipulationPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero Section */}
            <div className="bg-white text-slate-900 py-20 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-slate-900 to-slate-900 z-0"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-700 border border-red-500/30 text-xs font-bold tracking-widest uppercase mb-4">
                            EXPOSE
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Silver Manipulation: <span className="text-red-700">How Banks Suppress Prices</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            The $920 million fine. The convicted traders. The paper silver scheme. Here is what Wall Street does not want you to know about the silver market.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="xl" asChild>
                                <Link href="/quiz">Take the Protection Quiz</Link>
                            </Button>
                            <Button variant="outline" className="text-slate-900 border-slate-300 hover:bg-slate-100" asChild>
                                <Link href="/silver-squeeze/banks-shorting-silver">The JP Morgan Story</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Key Stats Banner */}
            <div className="bg-slate-50 border-y border-slate-200">
                <Container className="py-8">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-6">
                            <div className="text-4xl font-bold text-red-700 mb-2">$920M</div>
                            <div className="text-sm text-slate-600 uppercase tracking-wide font-bold">JP Morgan Fine (2020)</div>
                        </div>
                        <div className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-6">
                            <div className="text-4xl font-bold text-[#B22234] mb-2">100:1</div>
                            <div className="text-sm text-slate-600 uppercase tracking-wide font-bold">Paper to Physical Ratio</div>
                        </div>
                        <div className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-6">
                            <div className="text-4xl font-bold text-red-700 mb-2">8</div>
                            <div className="text-sm text-slate-600 uppercase tracking-wide font-bold">Traders Convicted</div>
                        </div>
                        <div className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-6">
                            <div className="text-4xl font-bold text-[#B22234] mb-2">13+</div>
                            <div className="text-sm text-slate-600 uppercase tracking-wide font-bold">Years of Investigation</div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Main Content */}
            <Container className="py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">

                        {/* Section 1: The $920 Million Fine */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <Gavel className="w-6 h-6 text-red-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">The $920 Million Fine: JP Morgan Caught Red-Handed</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 leading-relaxed">
                                    In September 2020, JP Morgan Chase agreed to pay <strong className="text-red-700">$920.2 million</strong> to settle charges that its traders manipulated precious metals and Treasury markets for nearly a decade. This was not speculation. This was not conspiracy theory. This was a federal settlement.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    The Department of Justice called it &quot;the largest spoofing resolution in history.&quot; The Commodity Futures Trading Commission documented <strong className="text-slate-900">thousands of instances of manipulation</strong> between 2008 and 2016.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    What did they do? A technique called <strong className="text-[#B22234]">&quot;spoofing&quot;</strong> - placing large orders they never intended to execute, moving the market price, then canceling those orders and trading in the opposite direction. It is market manipulation, plain and simple.
                                </p>
                                <blockquote className="border-l-4 border-red-400 pl-4 my-6 text-slate-600 italic">
                                    &quot;JP Morgan turned its trading desks into criminal enterprises.&quot; - Acting Assistant Attorney General Brian Rabbitt, 2020
                                </blockquote>
                                <p className="text-slate-600 leading-relaxed">
                                    Eight individual traders have been charged with federal crimes. Several have been convicted. These are not victimless crimes - every time they pushed silver prices down artificially, retail investors and miners lost money while the bank profited.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: How Price Suppression Works */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-[#B22234]/20 rounded-lg">
                                    <Scale className="w-6 h-6 text-[#B22234]" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">How Silver Price Suppression Works</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 leading-relaxed">
                                    Silver manipulation is not just about spoofing. It operates on multiple levels, each designed to keep physical silver prices artificially low while banks profit from volatility.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Spoofing Playbook</h3>
                                <ol className="text-slate-600 space-y-3">
                                    <li><strong className="text-slate-900">Step 1:</strong> Trader places massive sell orders (often millions of ounces of &quot;paper&quot; silver)</li>
                                    <li><strong className="text-slate-900">Step 2:</strong> Other traders see the huge supply and prices drop</li>
                                    <li><strong className="text-slate-900">Step 3:</strong> Before orders execute, trader cancels them</li>
                                    <li><strong className="text-slate-900">Step 4:</strong> Trader buys at the artificially low price</li>
                                    <li><strong className="text-slate-900">Step 5:</strong> Repeat thousands of times per year</li>
                                </ol>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Concentrated Short Position</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Beyond spoofing, a small number of banks hold <strong className="text-red-700">concentrated short positions</strong> in silver futures. At times, these positions have exceeded the entire annual mining supply of silver. How can you short more silver than exists?
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    You cannot - unless you are creating &quot;paper&quot; silver that does not exist. This is the paper silver vs physical silver problem that regulators have failed to address for decades.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The &quot;Waterfall&quot; Decline Pattern</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Watch silver prices long enough and you will notice a pattern: sudden, sharp drops that occur within minutes, often during low-volume trading hours. These &quot;waterfall&quot; declines hit stop-losses, trigger margin calls, and shake out retail investors.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    This is not natural price discovery. Natural markets do not drop 3% in two minutes on no news.
                                </p>
                            </div>
                        </section>

                        {/* Section 3: Paper Silver vs Physical */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <FileWarning className="w-6 h-6 text-red-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Paper Silver vs Physical: The 100:1 Leverage Problem</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 leading-relaxed">
                                    Here is the dirty secret of the silver market: <strong className="text-red-700">there is far more &quot;silver&quot; trading on paper than actually exists</strong>.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    Industry estimates suggest that paper silver contracts (futures, ETFs, unallocated accounts) exceed physical silver by ratios of <strong className="text-[#B22234]">100:1 or higher</strong>. This means for every ounce of real silver, there are 100+ ounces of claims.
                                </p>

                                <div className="bg-slate-50 rounded-lg p-6 my-6">
                                    <h4 className="text-lg font-bold text-red-700 mb-3">What Counts as &quot;Paper Silver&quot;?</h4>
                                    <ul className="text-slate-600 space-y-2">
                                        <li><strong className="text-slate-900">Futures Contracts:</strong> Promises to deliver silver that often never settle in physical metal</li>
                                        <li><strong className="text-slate-900">Silver ETFs:</strong> Some ETFs allow authorized participants to substitute cash for silver</li>
                                        <li><strong className="text-slate-900">Unallocated Accounts:</strong> You &quot;own&quot; silver but it is not segregated - you are an unsecured creditor</li>
                                        <li><strong className="text-slate-900">Pool Accounts:</strong> Your &quot;silver&quot; is commingled with others and may not fully exist</li>
                                    </ul>
                                </div>

                                <p className="text-slate-600 leading-relaxed">
                                    This massive paper overhang suppresses prices. When investors want silver exposure, they buy paper. That paper does not require anyone to purchase physical silver. Supply and demand gets short-circuited.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    But what happens when paper holders want physical? That is when the game ends - and prices <strong className="text-slate-900">must</strong> adjust to reality.
                                </p>
                            </div>
                        </section>

                        {/* Section 4: The London Fix Scandal */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-[#B22234]/20 rounded-lg">
                                    <AlertTriangle className="w-6 h-6 text-[#B22234]" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">The London Fix Scandal</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 leading-relaxed">
                                    For over a century, silver prices were set daily by a small group of banks in London through a process called &quot;the Fix.&quot; Three banks would get on a phone call and agree on a price. That was it. No open market. No transparency.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    In 2014, <strong className="text-red-700">Deutsche Bank admitted to manipulating the silver fix</strong> as part of a settlement with regulators. The bank provided evidence that implicated other banks in a coordinated scheme.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    The silver fix was abolished in 2014 and replaced with an electronic auction. But the damage was done - decades of manipulation had suppressed silver prices and enriched insiders at the expense of ordinary investors.
                                </p>
                                <blockquote className="border-l-4 border-amber-400 pl-4 my-6 text-slate-600 italic">
                                    &quot;There is no silver market. There is a silver price-setting mechanism controlled by a few banks.&quot; - Chris Powell, GATA
                                </blockquote>
                            </div>
                        </section>

                        {/* Section 5: CFTC Investigation History */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <Shield className="w-6 h-6 text-red-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">CFTC Investigation History: 13 Years of &quot;Nothing to See Here&quot;</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 leading-relaxed">
                                    The Commodity Futures Trading Commission investigated silver market manipulation for <strong className="text-[#B22234]">over 13 years</strong> before finally taking action against JP Morgan in 2020.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    In 2008, 2010, and 2013, the CFTC announced investigations into silver manipulation. Each time, they concluded there was &quot;no basis&quot; for manipulation claims. Meanwhile, JP Morgan traders were spoofing the market <strong className="text-slate-900">thousands of times per year</strong>.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    It took a whistleblower - former JP Morgan trader John Edmonds - pleading guilty to federal charges for the CFTC to finally act. Edmonds admitted to manipulating precious metals markets from 2009 to 2015.
                                </p>

                                <div className="bg-slate-50 rounded-lg p-6 my-6">
                                    <h4 className="text-lg font-bold text-slate-900 mb-3">Timeline of Regulatory Failure</h4>
                                    <ul className="text-slate-600 space-y-2">
                                        <li><strong className="text-[#B22234]">2008:</strong> CFTC opens investigation - closes with &quot;no findings&quot;</li>
                                        <li><strong className="text-[#B22234]">2010:</strong> New investigation after Bear Stearns collapse reveals manipulation</li>
                                        <li><strong className="text-[#B22234]">2013:</strong> Investigation closed again - &quot;insufficient evidence&quot;</li>
                                        <li><strong className="text-[#B22234]">2018:</strong> JP Morgan trader pleads guilty to spoofing</li>
                                        <li><strong className="text-[#B22234]">2020:</strong> JP Morgan pays $920 million - admits manipulation</li>
                                    </ul>
                                </div>

                                <p className="text-slate-600 leading-relaxed">
                                    For 13 years, regulators dismissed manipulation claims as conspiracy theories. Then the conspiracy turned out to be real. What else are they missing?
                                </p>
                            </div>
                        </section>

                        {/* Section 6: What Manipulation Means for Investors */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-[#B22234]/20 rounded-lg">
                                    <DollarSign className="w-6 h-6 text-[#B22234]" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">What Manipulation Means for Your Retirement</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 leading-relaxed">
                                    Silver manipulation is not just a Wall Street scandal - it directly affects your retirement savings and financial security.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">If You Own Paper Silver</h3>
                                <ul className="text-slate-600 space-y-2">
                                    <li>Your &quot;investment&quot; may not be backed by real silver</li>
                                    <li>You are exposed to counterparty risk if the scheme unwinds</li>
                                    <li>You benefit banks more than yourself</li>
                                </ul>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">If You Own Physical Silver</h3>
                                <ul className="text-slate-600 space-y-2">
                                    <li>You own a real asset that cannot be diluted by paper contracts</li>
                                    <li>You will benefit when manipulation ends and prices normalize</li>
                                    <li>You have no counterparty risk - the metal is yours</li>
                                </ul>

                                <p className="text-slate-600 leading-relaxed mt-6">
                                    Think about it: if silver prices have been artificially suppressed for decades, what is the true value of silver? When the paper market meets reality, physical silver holders will be positioned to benefit.
                                </p>
                            </div>
                        </section>

                        {/* Section 7: How to Profit When Manipulation Ends */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-green-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">How to Profit When Manipulation Ends</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 leading-relaxed">
                                    Manipulation schemes do not last forever. Whether through regulatory action, market forces, or a breakdown in the paper silver system, eventually prices must reflect reality.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Smart Money Strategy</h3>
                                <ol className="text-slate-600 space-y-3">
                                    <li><strong className="text-slate-900">1. Own Physical Silver:</strong> Not paper, not ETFs, not pool accounts - actual silver in your possession or in allocated, segregated storage.</li>
                                    <li><strong className="text-slate-900">2. Use a Silver IRA:</strong> Hold physical silver in a tax-advantaged retirement account with proper IRS-approved storage.</li>
                                    <li><strong className="text-slate-900">3. Avoid Paper Silver Products:</strong> Unallocated accounts and leveraged products are vulnerable when manipulation unwinds.</li>
                                    <li><strong className="text-slate-900">4. Think Long-Term:</strong> Manipulation can persist longer than expected, but fundamentals eventually prevail.</li>
                                </ol>

                                <div className="bg-gradient-to-r from-[#B22234]/20 to-[#8b1c2a]/10 border border-[#B22234]/30 rounded-lg p-6 my-8">
                                    <h4 className="text-lg font-bold text-[#B22234] mb-3">The Silver IRA Advantage</h4>
                                    <p className="text-slate-600">
                                        A properly structured Silver IRA holds <strong className="text-slate-900">physical silver</strong> in IRS-approved depositories with segregated storage. This is not paper silver. This is not an ETF. This is real metal that you legally own, protected from manipulation and positioned for price discovery.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-8">
                            <h2 className="text-2xl font-bold font-serif text-slate-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-[#B22234] mb-2">Is silver price manipulation real?</h3>
                                    <p className="text-slate-600">Yes. JP Morgan paid $920 million in 2020 to settle charges of manipulating precious metals markets through spoofing. Multiple traders have been convicted of federal crimes related to silver market manipulation.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-[#B22234] mb-2">How do banks manipulate silver prices?</h3>
                                    <p className="text-slate-600">Banks use techniques including spoofing (placing and canceling large orders to move prices), naked shorting through paper silver contracts, and concentrated short positions that can exceed annual mining supply.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-[#B22234] mb-2">What is the paper silver vs physical silver problem?</h3>
                                    <p className="text-slate-600">Paper silver includes futures contracts, ETFs, and unallocated accounts that may not be backed 1:1 by physical metal. Estimates suggest paper silver contracts exceed physical silver by ratios of 100:1 or more, suppressing prices.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-[#B22234] mb-2">What happens when silver manipulation ends?</h3>
                                    <p className="text-slate-600">When manipulation schemes unwind, suppressed prices typically experience rapid price discovery. Investors holding physical silver or allocated silver in IRAs would benefit from price normalization.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#B22234] mb-2">How can I protect myself from silver manipulation?</h3>
                                    <p className="text-slate-600">Own physical silver or allocated silver in an IRA rather than paper silver products. Physical ownership removes counterparty risk and ensures you benefit when manipulation ends.</p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-8">
                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-red-900/30 to-slate-800/50 border border-red-500/30 rounded-xl p-6 sticky top-24">
                            <div className="flex items-center gap-2 mb-4">
                                <AlertTriangle className="w-5 h-5 text-red-700" />
                                <span className="text-red-700 font-bold text-sm uppercase tracking-wide">Take Action</span>
                            </div>
                            <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">
                                Do Not Let Banks Manipulate YOUR Retirement
                            </h3>
                            <p className="text-slate-600 text-sm mb-6">
                                While Wall Street plays games with paper silver, smart investors hold the real thing. Find out if physical silver belongs in your retirement portfolio.
                            </p>
                            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white w-full" size="lg" asChild>
                                <Link href="/quiz">Take the 60-Second Quiz</Link>
                            </Button>
                            <p className="text-xs text-slate-600 text-center mt-3">No commitment required</p>
                        </div>

                        {/* Related Articles */}
                        <div className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Related Investigations</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/silver-squeeze/banks-shorting-silver" className="text-[#B22234] hover:text-[#B22234] text-sm font-medium">
                                        Banks Shorting Silver: The JP Morgan Story
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-squeeze/paper-silver-vs-physical" className="text-[#B22234] hover:text-[#B22234] text-sm font-medium">
                                        Paper Silver vs Physical: Why Ownership Matters
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

                        {/* Key Facts Box */}
                        <div className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Key Facts</h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-700 font-bold">01</span>
                                    <span className="text-slate-600">JP Morgan paid $920 million in manipulation settlement (2020)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-700 font-bold">02</span>
                                    <span className="text-slate-600">8+ traders convicted of federal crimes</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-700 font-bold">03</span>
                                    <span className="text-slate-600">Deutsche Bank admitted to manipulating the London Fix</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-700 font-bold">04</span>
                                    <span className="text-slate-600">Paper silver estimated at 100:1 ratio to physical</span>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </Container>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-red-900/50 to-slate-900 border-t border-slate-200">
                <Container className="py-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                        The Banks Have Been Caught. What Will You Do?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                        JP Morgan paid $920 million because they got caught manipulating silver prices. Smart investors are moving to physical silver before the next phase.
                    </p>
                    <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="xl" asChild>
                        <Link href="/quiz">See If Physical Silver Fits Your Portfolio</Link>
                    </Button>
                </Container>
            </div>

            <Footer />
        </main>
    );
}
