import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Callout } from "@/components/ui/Callout";
import { ArrowRight, Quote, Star, Coins, Building2, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Eric Sprott Silver: Billionaire Investor & PSLV Creator's Analysis",
    description: "Learn what Eric Sprott, billionaire investor and creator of PSLV, says about silver. Discover his investment thesis, PSLV creation story, and current market views.",
    keywords: ["eric sprott silver", "eric sprott", "pslv", "sprott physical silver trust", "eric sprott predictions", "sprott silver"],
    openGraph: {
        title: "Eric Sprott Silver: Billionaire Investor & PSLV Creator's Analysis",
        description: "What does Eric Sprott say about silver? Learn about PSLV, his investment thesis, and market predictions.",
        type: "article",
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Eric Sprott on Silver: Billionaire Investor's Complete Analysis",
    "description": "Comprehensive overview of Eric Sprott's silver investment thesis, PSLV creation, and current market views.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is Eric Sprott?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Eric Sprott is a Canadian billionaire investor and founder of Sprott Inc. He is one of the largest individual investors in precious metals and mining companies, having personally invested hundreds of millions of dollars in silver."
                }
            },
            {
                "@type": "Question",
                "name": "What is PSLV?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PSLV (Sprott Physical Silver Trust) is an exchange-traded trust that holds physical silver bullion. Unlike SLV, PSLV is fully allocated, regularly audited, and allows investors to redeem shares for physical silver delivery."
                }
            },
            {
                "@type": "Question",
                "name": "Why did Eric Sprott create PSLV?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sprott created PSLV because he was concerned that existing silver ETFs like SLV were not fully backed by physical silver. PSLV was designed to give investors true physical silver exposure with the ability to take delivery."
                }
            },
            {
                "@type": "Question",
                "name": "What does Eric Sprott predict for silver?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sprott is extremely bullish on silver, believing it is significantly undervalued. He has predicted silver could dramatically outperform gold and has backed this view with hundreds of millions in personal investments."
                }
            }
        ]
    }
};

const keyQuotes = [
    {
        quote: "I have bet more on silver than gold. I believe silver has more upside potential because it is smaller, more volatile, and more suppressed.",
        context: "On silver vs gold"
    },
    {
        quote: "The physical silver market is incredibly tight. When investment demand picks up, there simply is not enough silver to go around.",
        context: "On silver supply"
    },
    {
        quote: "PSLV exists because I wanted an honest silver vehicle. One that actually owns silver, gets audited, and lets you take delivery if you want.",
        context: "On PSLV creation"
    },
    {
        quote: "We are in the early stages of a massive wealth transfer. Those who own real assets - gold, silver, commodities - will be the beneficiaries.",
        context: "On the wealth transfer"
    },
];

const sprottInvestments = [
    {
        category: "PSLV (Physical Silver Trust)",
        description: "Founded and funded the Sprott Physical Silver Trust, now holding billions in physical silver bullion."
    },
    {
        category: "Silver Mining Companies",
        description: "Major investor in silver mining companies including First Majestic Silver, MAG Silver, and many others."
    },
    {
        category: "Silver Streaming & Royalties",
        description: "Investments in silver streaming companies that provide financing to miners in exchange for future silver production."
    },
    {
        category: "Physical Silver Holdings",
        description: "Significant personal holdings of physical silver bullion stored in secure vaults."
    },
];

export default function EricSprottPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={schema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-slate-50 text-slate-900 py-20 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/20 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <Link href="/silver-experts" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors">
                            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Silver Experts
                        </Link>
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#B22234]/10 px-4 py-1.5 text-sm font-semibold text-slate-600 mb-6 border border-slate-300 ml-4">
                            <Star className="w-4 h-4" />
                            Silver Expert Profile
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4">
                            Eric Sprott on Silver
                        </h1>
                        <p className="text-xl text-slate-600 font-semibold mb-4">
                            Billionaire Investor | Founder of Sprott Inc. | Creator of PSLV
                        </p>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                            Eric Sprott has put his money where his mouth is like few others, personally investing hundreds of millions in silver. As the creator of PSLV and a major stakeholder in silver mining companies, he has become one of the most influential voices in precious metals.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Main Content */}
            <Container className="py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Column */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Who Is Eric Sprott */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-[#B22234]/10 rounded-lg">
                                    <Building2 className="w-6 h-6 text-slate-600" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Who Is Eric Sprott?</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    Eric Sprott is a Canadian <strong className="text-slate-900">billionaire investor</strong> and the founder of <strong className="text-slate-600">Sprott Inc.</strong>, one of the largest precious metals investment firms in the world. His personal fortune, estimated in the billions, is heavily concentrated in gold and silver investments.
                                </p>
                                <p className="text-slate-600">
                                    Sprott began his career as a research analyst before founding Sprott Asset Management in 2001. His early bets on gold during the 2000s bull market generated legendary returns and established him as one of the most successful resource investors of his generation.
                                </p>
                                <p className="text-slate-600">
                                    What sets Sprott apart from many commentators is the scale of his personal investment. He has put <strong className="text-slate-900">hundreds of millions of his own money</strong> into silver - through physical holdings, PSLV, and mining companies. When Eric Sprott talks about silver, he is talking about his largest personal bet.
                                </p>

                                <div className="bg-slate-50 rounded-lg p-6 my-6 not-prose">
                                    <h4 className="font-bold text-slate-900 mb-4">Eric Sprott Quick Facts</h4>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                                            <span>Canadian billionaire - net worth from precious metals investing</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                                            <span>Founder of Sprott Inc. and Sprott Asset Management</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                                            <span>Creator of PSLV (Sprott Physical Silver Trust)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                                            <span>Major shareholder in First Majestic Silver and other miners</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                                            <span>Hundreds of millions personally invested in silver</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* PSLV Creation Story */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-[#B22234]/10 rounded-lg">
                                    <Coins className="w-6 h-6 text-slate-600" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">The PSLV Creation Story</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    PSLV - the <strong className="text-slate-900">Sprott Physical Silver Trust</strong> - was born out of Sprott&apos;s concerns about existing silver investment vehicles. He did not trust that products like SLV (iShares Silver Trust) were fully backed by physical silver, and he wanted to create something better.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Problem with SLV</h3>
                                <p className="text-slate-600">
                                    Sprott and other analysts pointed to concerning features of SLV: the ability to substitute cash for silver in certain circumstances, custody arrangements with banks that may have conflicting interests, and prospectus language that some interpreted as allowing &quot;paper&quot; silver exposure.
                                </p>
                                <blockquote className="border-l-4 border-slate-400 pl-4 my-6 text-slate-600 italic">
                                    &quot;I wanted a silver vehicle that I could trust. One that actually owns silver, publishes bar lists, gets independent audits, and lets investors take delivery. PSLV does all of that.&quot;
                                </blockquote>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">How PSLV Works</h3>
                                <ul className="text-slate-600 space-y-2">
                                    <li><strong className="text-slate-900">Fully Allocated:</strong> Every ounce of silver is allocated to the trust and stored in the Royal Canadian Mint.</li>
                                    <li><strong className="text-slate-900">Published Bar Lists:</strong> Complete lists of silver bars with serial numbers are publicly available.</li>
                                    <li><strong className="text-slate-900">Independent Audits:</strong> Regular third-party audits verify that the silver exists as claimed.</li>
                                    <li><strong className="text-slate-900">Physical Redemption:</strong> Large shareholders can redeem shares for actual physical silver delivery.</li>
                                </ul>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">PSLV and the Silver Squeeze</h3>
                                <p className="text-slate-600">
                                    PSLV became a key tool for the silver squeeze movement. Because PSLV actually takes physical delivery of silver when shares are purchased, it drains real metal from the market - unlike paper derivatives that create no physical demand.
                                </p>
                            </div>
                        </section>

                        {/* Silver Investments */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-[#B22234]/10 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-slate-600" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Eric Sprott&apos;s Silver Investments</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none mb-8">
                                <p className="text-slate-600">
                                    Sprott&apos;s silver investments span multiple categories, from physical bullion to mining stocks to streaming companies. His portfolio represents one of the largest individual bets on silver in the world.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {sprottInvestments.map((item, index) => (
                                    <div key={index} className="bg-slate-50 rounded-lg p-6">
                                        <h3 className="text-lg font-bold text-slate-600 mb-2">{item.category}</h3>
                                        <p className="text-slate-600">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Key Quotes */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-[#B22234]/10 rounded-lg">
                                    <Quote className="w-6 h-6 text-slate-600" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Key Quotes & Predictions</h2>
                            </div>
                            <div className="space-y-6">
                                {keyQuotes.map((item, index) => (
                                    <div key={index} className="bg-slate-50 rounded-lg p-6">
                                        <p className="text-slate-900 text-lg italic mb-3">&quot;{item.quote}&quot;</p>
                                        <p className="text-slate-600 text-sm font-semibold">{item.context}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Current Views */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-[#B22234]/10 rounded-lg">
                                    <Star className="w-6 h-6 text-slate-600" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Eric Sprott&apos;s Current Views</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    Sprott remains extremely bullish on silver, backing his views with ongoing investments:
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">On Silver vs Gold</h3>
                                <p className="text-slate-600">
                                    While bullish on both metals, Sprott has publicly stated he is more heavily weighted toward silver. He believes silver&apos;s smaller market size and industrial demand create more explosive upside potential.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">On Market Manipulation</h3>
                                <p className="text-slate-600">
                                    Sprott has been vocal about silver price manipulation, noting the disconnect between physical market tightness and paper prices. He sees PSLV as a way for investors to participate in physical demand rather than paper trading.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">On Monetary Policy</h3>
                                <p className="text-slate-600">
                                    Sprott views silver (and gold) as protection against monetary debasement. With unprecedented currency creation by central banks, he believes precious metals will be major beneficiaries of the coming loss of confidence in fiat currencies.
                                </p>

                                <Callout type="tip" title="Sprott's Core Message">
                                    &quot;Own real things. Gold, silver, commodities, productive assets. The paper system is running on borrowed time. When it resets, you want to be on the right side of history.&quot;
                                </Callout>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <h2 className="text-2xl font-bold font-serif text-slate-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-slate-600 mb-2">Who is Eric Sprott?</h3>
                                    <p className="text-slate-600">Eric Sprott is a Canadian billionaire investor and founder of Sprott Inc. He is one of the largest individual investors in precious metals and mining companies, having personally invested hundreds of millions of dollars in silver.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-slate-600 mb-2">What is PSLV?</h3>
                                    <p className="text-slate-600">PSLV (Sprott Physical Silver Trust) is an exchange-traded trust that holds physical silver bullion. Unlike SLV, PSLV is fully allocated, regularly audited, and allows investors to redeem shares for physical silver delivery.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-slate-600 mb-2">Why did Eric Sprott create PSLV?</h3>
                                    <p className="text-slate-600">Sprott created PSLV because he was concerned that existing silver ETFs like SLV were not fully backed by physical silver. PSLV was designed to give investors true physical silver exposure with the ability to take delivery.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-600 mb-2">What does Eric Sprott predict for silver?</h3>
                                    <p className="text-slate-600">Sprott is extremely bullish on silver, believing it is significantly undervalued. He has predicted silver could dramatically outperform gold and has backed this view with hundreds of millions in personal investments.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-8">
                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/50 border border-slate-300 rounded-xl p-6 sticky top-24">
                            <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">
                                Want to Follow the Experts Into Silver?
                            </h3>
                            <p className="text-slate-600 text-sm mb-6">
                                Like Eric Sprott, many experts recommend physical silver in a tax-advantaged IRA. Find out if it is right for you.
                            </p>
                            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white w-full" size="lg" asChild>
                                <Link href="/quiz">Take the 60-Second Quiz</Link>
                            </Button>
                            <p className="text-xs text-slate-600 text-center mt-3">No commitment required</p>
                        </div>

                        {/* Other Experts */}
                        <div className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Other Silver Experts</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/silver-experts/andy-schectman" className="text-slate-600 hover:text-slate-600 font-medium">
                                        Andy Schectman - Miles Franklin CEO
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/david-morgan" className="text-slate-600 hover:text-slate-600 font-medium">
                                        David Morgan - The Silver Guru
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/mike-maloney" className="text-slate-600 hover:text-slate-600 font-medium">
                                        Mike Maloney - GoldSilver.com
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/ted-butler" className="text-slate-600 hover:text-slate-600 font-medium">
                                        Ted Butler - Manipulation Researcher
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/rick-rule" className="text-slate-600 hover:text-slate-600 font-medium">
                                        Rick Rule - Mining Investor
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Related Resources */}
                        <div className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Related Resources</h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="/silver-squeeze/paper-silver-vs-physical" className="text-slate-600 hover:text-slate-900">
                                        Paper vs Physical Silver
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-squeeze" className="text-slate-600 hover:text-slate-900">
                                        Silver Squeeze Explained
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/best-silver-ira-companies" className="text-slate-600 hover:text-slate-900">
                                        Best Silver IRA Companies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guide/silver-ira-guide" className="text-slate-600 hover:text-slate-900">
                                        Complete Silver IRA Guide
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </Container>

            {/* Disclaimer */}
            <section className="py-8">
                <Container>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 max-w-4xl mx-auto">
                        <p className="text-slate-600 text-sm text-center">
                            <strong className="text-slate-900">Disclaimer:</strong> We are not affiliated with Eric Sprott or Sprott Inc. The information presented is for educational purposes only and represents our interpretation of publicly available statements. Always conduct your own research and consult with a financial advisor before making investment decisions.
                        </p>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA variant="footer" linkContext="silver" trackSource="eric-sprott" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
