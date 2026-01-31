import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Callout } from "@/components/ui/Callout";
import { ArrowRight, Quote, BookOpen, TrendingUp, BarChart3, Mic, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "David Morgan Silver: The Silver Guru's Analysis & Predictions",
    description: "Learn what David Morgan, publisher of The Morgan Report, says about silver markets. Discover his analysis methodology, key predictions, and investment insights.",
    keywords: ["david morgan silver", "david morgan", "the morgan report", "silver guru", "david morgan predictions", "silver manifesto"],
    openGraph: {
        title: "David Morgan Silver: The Silver Guru's Analysis & Predictions",
        description: "What does David Morgan say about silver? Learn about his analysis methodology and market predictions.",
        type: "article",
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "David Morgan on Silver: The Silver Guru's Complete Analysis",
    "description": "Comprehensive overview of David Morgan's silver analysis methodology, predictions, and investment philosophy.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is David Morgan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "David Morgan is a precious metals analyst known as 'The Silver Guru.' He publishes The Morgan Report, a newsletter focused on precious metals and mining stocks, and authored 'The Silver Manifesto' with Chris Marchese."
                }
            },
            {
                "@type": "Question",
                "name": "What is The Morgan Report?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Morgan Report is a subscription-based newsletter published by David Morgan that provides analysis on silver, gold, and mining stocks. It includes investment recommendations, market analysis, and economic commentary."
                }
            },
            {
                "@type": "Question",
                "name": "What does David Morgan predict for silver prices?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "David Morgan has consistently predicted that silver will significantly outperform gold during precious metals bull markets. He believes the gold-to-silver ratio will contract dramatically, potentially to 20:1 or lower."
                }
            },
            {
                "@type": "Question",
                "name": "What is David Morgan's investment philosophy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Morgan advocates for owning physical silver as the foundation of a precious metals portfolio, supplemented by carefully selected mining stocks for leverage. He emphasizes patience and long-term thinking."
                }
            }
        ]
    }
};

const keyQuotes = [
    {
        quote: "Silver will be the investment of this decade. When the masses finally understand what is happening to the monetary system, the rush into silver will be overwhelming.",
        context: "On silver as an investment"
    },
    {
        quote: "The gold-to-silver ratio at 80:1 is historically absurd. Silver is money, and at some point, the market will recognize its true value relative to gold.",
        context: "On the gold-silver ratio"
    },
    {
        quote: "Mining stocks offer leverage to rising metal prices, but physical metal is the foundation. You need both, but never sacrifice physical holdings for paper exposure.",
        context: "On investment strategy"
    },
    {
        quote: "The monetary system is in trouble. Debt levels are unsustainable. When confidence finally breaks, hard assets will be the only safe haven.",
        context: "On monetary policy"
    },
];

const books = [
    {
        title: "The Silver Manifesto",
        coAuthor: "Chris Marchese",
        description: "A comprehensive analysis of the silver market, covering supply/demand fundamentals, the monetary case for silver, and investment strategies."
    },
    {
        title: "Get the Skinny on Silver Investing",
        coAuthor: null,
        description: "An accessible introduction to silver investing for beginners, covering the basics of why and how to invest in silver."
    },
];

export default function DavidMorganPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={schema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-slate-50 text-slate-900 py-20 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <Link href="/silver-experts" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors">
                            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Silver Experts
                        </Link>
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-6 border border-blue-500/30 ml-4">
                            <BookOpen className="w-4 h-4" />
                            Silver Expert Profile
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4">
                            David Morgan on Silver
                        </h1>
                        <p className="text-xl text-blue-700 font-semibold mb-4">
                            &quot;The Silver Guru&quot; - Publisher of The Morgan Report
                        </p>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                            David Morgan has been analyzing precious metals markets since the 1990s. Known for his educational approach and long-term perspective, he has helped thousands of investors understand the fundamentals driving silver prices.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Main Content */}
            <Container className="py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Column */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Who Is David Morgan */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-lg">
                                    <BookOpen className="w-6 h-6 text-blue-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Who Is David Morgan?</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    David Morgan is a precious metals analyst and educator who has earned the nickname <strong className="text-slate-900">&quot;The Silver Guru&quot;</strong> through decades of focused research and accurate market analysis. He publishes <strong className="text-blue-700">The Morgan Report</strong>, a subscription newsletter that provides in-depth analysis of silver, gold, and mining stocks.
                                </p>
                                <p className="text-slate-600">
                                    Morgan&apos;s journey into precious metals began in the 1990s when he recognized the disconnect between fiat currency creation and real economic growth. His educational background in engineering gives him an analytical approach that sets him apart from many market commentators.
                                </p>
                                <p className="text-slate-600">
                                    Unlike some silver analysts who focus primarily on short-term price movements, Morgan emphasizes <strong className="text-slate-900">fundamental analysis</strong> - studying supply and demand dynamics, monetary policy, and the role of silver in the global financial system.
                                </p>

                                <div className="bg-slate-50 rounded-lg p-6 my-6 not-prose">
                                    <h4 className="font-bold text-slate-900 mb-4">David Morgan Quick Facts</h4>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                                            <span>Publisher of The Morgan Report since 2000</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                                            <span>Author of &quot;The Silver Manifesto&quot;</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                                            <span>Featured in documentaries including &quot;Four Horsemen&quot;</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                                            <span>Regular contributor to major financial publications</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                                            <span>Engineering background - analytical approach to markets</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Analysis Methodology */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-lg">
                                    <BarChart3 className="w-6 h-6 text-blue-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">David Morgan&apos;s Analysis Methodology</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    Morgan&apos;s analytical framework combines fundamental analysis with an understanding of monetary history. He believes that understanding why silver is money is essential to understanding where prices are headed.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Supply and Demand Analysis</h3>
                                <p className="text-slate-600">
                                    Morgan closely tracks silver supply from mining and recycling against demand from industrial uses, investment, and jewelry. He notes that silver is unique among precious metals because <strong className="text-slate-900">roughly 50% of annual production is consumed by industry</strong>, unlike gold which is primarily hoarded.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Monetary Case</h3>
                                <p className="text-slate-600">
                                    A central theme in Morgan&apos;s work is silver&apos;s historical role as money. He argues that silver has been money for thousands of years and that the current fiat experiment is historically anomalous and ultimately unsustainable.
                                </p>
                                <blockquote className="border-l-4 border-blue-400 pl-4 my-6 text-slate-600 italic">
                                    &quot;Silver has been money for 5,000 years. The dollar has been fiat for 50 years. Which do you trust with your purchasing power?&quot;
                                </blockquote>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Gold-to-Silver Ratio</h3>
                                <p className="text-slate-600">
                                    Morgan frequently references the gold-to-silver ratio, currently around 80:1. He notes that historically this ratio averaged around 15:1, reflecting the natural occurrence of silver relative to gold in the earth&apos;s crust. He sees the current high ratio as evidence that silver is dramatically undervalued.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Technical Analysis</h3>
                                <p className="text-slate-600">
                                    While primarily a fundamentals analyst, Morgan also incorporates technical analysis to identify entry and exit points. He uses moving averages, support and resistance levels, and momentum indicators to refine his investment timing.
                                </p>
                            </div>
                        </section>

                        {/* Key Quotes */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-lg">
                                    <Quote className="w-6 h-6 text-blue-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Key Quotes & Predictions</h2>
                            </div>
                            <div className="space-y-6">
                                {keyQuotes.map((item, index) => (
                                    <div key={index} className="bg-slate-50 rounded-lg p-6">
                                        <p className="text-slate-900 text-lg italic mb-3">&quot;{item.quote}&quot;</p>
                                        <p className="text-blue-700 text-sm font-semibold">{item.context}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Books and Resources */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-lg">
                                    <BookOpen className="w-6 h-6 text-blue-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Books & Resources</h2>
                            </div>
                            <div className="space-y-6">
                                {books.map((book, index) => (
                                    <div key={index} className="bg-slate-50 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{book.title}</h3>
                                        {book.coAuthor && (
                                            <p className="text-blue-700 text-sm mb-3">Co-authored with {book.coAuthor}</p>
                                        )}
                                        <p className="text-slate-600">{book.description}</p>
                                    </div>
                                ))}
                                <div className="bg-slate-50 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">The Morgan Report</h3>
                                    <p className="text-slate-600">Monthly newsletter providing silver market analysis, mining stock recommendations, and economic commentary. Subscribers receive detailed research reports and model portfolio updates.</p>
                                </div>
                            </div>
                        </section>

                        {/* Media Appearances */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-lg">
                                    <Mic className="w-6 h-6 text-blue-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Media Appearances</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 mb-6">
                                    David Morgan is a sought-after guest for his calm, educational approach to explaining complex market dynamics. He appears regularly on financial media and precious metals podcasts.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 not-prose">
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <h4 className="font-bold text-slate-900 mb-2">USA Watchdog</h4>
                                        <p className="text-slate-600 text-sm">In-depth discussions on monetary policy and precious metals markets.</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <h4 className="font-bold text-slate-900 mb-2">Cambridge House</h4>
                                        <p className="text-slate-600 text-sm">Conference presentations on silver market fundamentals.</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <h4 className="font-bold text-slate-900 mb-2">Mining Stock Education</h4>
                                        <p className="text-slate-600 text-sm">Educational content on precious metals investing.</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <h4 className="font-bold text-slate-900 mb-2">Silver Doctors</h4>
                                        <p className="text-slate-600 text-sm">Market updates and silver analysis.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Investment Philosophy */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-green-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">David Morgan&apos;s Investment Philosophy</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    Morgan advocates for a balanced approach to precious metals investing:
                                </p>
                                <ul className="text-slate-600 space-y-3">
                                    <li><strong className="text-slate-900">Physical Metal First:</strong> Own physical silver as the foundation of your precious metals holdings. This is your insurance, not your speculation.</li>
                                    <li><strong className="text-slate-900">Mining Stocks for Leverage:</strong> Carefully selected mining stocks can provide leverage to rising metal prices, but they also carry company-specific risks.</li>
                                    <li><strong className="text-slate-900">Long-Term Perspective:</strong> Precious metals markets move in long cycles. Patience is essential for success.</li>
                                    <li><strong className="text-slate-900">Education First:</strong> Understand what you own and why you own it. Emotional investing leads to poor decisions.</li>
                                    <li><strong className="text-slate-900">Diversification Within Metals:</strong> Own both gold and silver, along with a mix of physical metal and mining equities.</li>
                                </ul>

                                <Callout type="tip" title="Morgan's Core Advice">
                                    &quot;Buy physical silver, hold it for the long term, and add to your position on significant dips. This is not a trade - it is a strategic position against monetary debasement.&quot;
                                </Callout>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <h2 className="text-2xl font-bold font-serif text-slate-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-blue-700 mb-2">Who is David Morgan?</h3>
                                    <p className="text-slate-600">David Morgan is a precious metals analyst known as &quot;The Silver Guru.&quot; He publishes The Morgan Report, a newsletter focused on precious metals and mining stocks, and authored &quot;The Silver Manifesto&quot; with Chris Marchese.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-blue-700 mb-2">What is The Morgan Report?</h3>
                                    <p className="text-slate-600">The Morgan Report is a subscription-based newsletter published by David Morgan that provides analysis on silver, gold, and mining stocks. It includes investment recommendations, market analysis, and economic commentary.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-blue-700 mb-2">What does David Morgan predict for silver prices?</h3>
                                    <p className="text-slate-600">David Morgan has consistently predicted that silver will significantly outperform gold during precious metals bull markets. He believes the gold-to-silver ratio will contract dramatically, potentially to 20:1 or lower.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-blue-700 mb-2">What is David Morgan&apos;s investment philosophy?</h3>
                                    <p className="text-slate-600">Morgan advocates for owning physical silver as the foundation of a precious metals portfolio, supplemented by carefully selected mining stocks for leverage. He emphasizes patience and long-term thinking.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-8">
                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/50 border border-blue-500/30 rounded-xl p-6 sticky top-24">
                            <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">
                                Want to Follow the Experts Into Silver?
                            </h3>
                            <p className="text-slate-600 text-sm mb-6">
                                Like David Morgan, many experts recommend physical silver in a tax-advantaged IRA. Find out if it is right for you.
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
                                    <Link href="/silver-experts/andy-schectman" className="text-blue-700 hover:text-blue-800 font-medium">
                                        Andy Schectman - Miles Franklin CEO
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/mike-maloney" className="text-blue-700 hover:text-blue-800 font-medium">
                                        Mike Maloney - GoldSilver.com
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/ted-butler" className="text-blue-700 hover:text-blue-800 font-medium">
                                        Ted Butler - Manipulation Researcher
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/rick-rule" className="text-blue-700 hover:text-blue-800 font-medium">
                                        Rick Rule - Mining Investor
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/eric-sprott" className="text-blue-700 hover:text-blue-800 font-medium">
                                        Eric Sprott - PSLV Creator
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Related Resources */}
                        <div className="bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Related Resources</h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="/silver-squeeze" className="text-slate-600 hover:text-slate-900">
                                        Silver Squeeze Explained
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-squeeze/silver-to-gold-ratio-calculator" className="text-slate-600 hover:text-slate-900">
                                        Gold-to-Silver Ratio Calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-squeeze/silver-undervalued" className="text-slate-600 hover:text-slate-900">
                                        Is Silver Undervalued?
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
                            <strong className="text-slate-900">Disclaimer:</strong> We are not affiliated with David Morgan or The Morgan Report. The information presented is for educational purposes only and represents our interpretation of publicly available statements. Always conduct your own research and consult with a financial advisor before making investment decisions.
                        </p>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA variant="footer" linkContext="silver" trackSource="david-morgan" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
