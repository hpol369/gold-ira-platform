import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Callout } from "@/components/ui/Callout";
import { ArrowRight, Quote, AlertTriangle, BarChart3, FileText, Search, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Ted Butler Silver: COMEX Manipulation Research & JP Morgan Analysis",
    description: "Learn what Ted Butler, the pioneer of silver manipulation research, says about JP Morgan's silver position, COMEX fraud, and the coming price explosion.",
    keywords: ["ted butler silver", "ted butler", "silver manipulation", "jp morgan silver", "comex silver manipulation", "ted butler analysis"],
    openGraph: {
        title: "Ted Butler Silver: COMEX Manipulation Research & JP Morgan Analysis",
        description: "What does Ted Butler say about silver manipulation? Learn about his decades of COMEX research and JP Morgan accusations.",
        type: "article",
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ted Butler on Silver: Decades of Manipulation Research",
    "description": "Comprehensive overview of Ted Butler's silver manipulation research, COMEX analysis, and JP Morgan accusations.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is Ted Butler?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ted Butler is an independent precious metals analyst who has spent over 30 years researching and documenting silver price manipulation. He is widely credited as the pioneer of silver manipulation research and has filed numerous complaints with the CFTC."
                }
            },
            {
                "@type": "Question",
                "name": "What is Ted Butler's thesis on silver manipulation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Butler argues that silver prices are artificially suppressed through concentrated short positions held by major banks on the COMEX. He has specifically named JP Morgan as holding the largest short position in silver market history."
                }
            },
            {
                "@type": "Question",
                "name": "Was Ted Butler right about JP Morgan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In 2020, JP Morgan paid $920 million to settle charges of manipulating precious metals markets. While regulators cited spoofing rather than concentrated shorts, the settlement validated years of Butler's claims that major banks were manipulating silver prices."
                }
            },
            {
                "@type": "Question",
                "name": "What does Ted Butler predict for silver?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Butler believes silver is the most undervalued asset in the world and predicts explosive price increases when the manipulation ends. He has suggested silver could reach several hundred dollars per ounce when true price discovery occurs."
                }
            }
        ]
    }
};

const keyQuotes = [
    {
        quote: "JP Morgan is manipulating the silver market. This is not opinion, this is observable fact. They hold the largest concentrated short position in any commodity in history.",
        context: "On JP Morgan's silver position"
    },
    {
        quote: "The CFTC has failed in its duty to regulate the silver market. For over a decade, they have looked the other way while banks blatantly manipulate prices.",
        context: "On regulatory failure"
    },
    {
        quote: "Silver is the most undervalued asset on the planet. When the manipulation ends - and it will end - silver prices will explode to levels most cannot imagine.",
        context: "On silver's future"
    },
    {
        quote: "Physical silver will be the undoing of the paper manipulation. When enough investors demand delivery, the banks will be unable to cover their shorts.",
        context: "On physical silver"
    },
];

const keyArticles = [
    {
        title: "The JP Morgan Silver Manipulation",
        summary: "Butler's definitive analysis of how JP Morgan inherited Bear Stearns' silver short position in 2008 and has since held the largest concentrated short position in commodity market history."
    },
    {
        title: "CFTC Failures in Silver",
        summary: "Documentation of Butler's decades-long correspondence with the CFTC, including their repeated failures to address obvious manipulation despite clear evidence."
    },
    {
        title: "The Coming Silver Explosion",
        summary: "Analysis of why the current paper silver scheme cannot continue indefinitely and why physical silver demand will eventually force true price discovery."
    },
    {
        title: "COT Report Analysis",
        summary: "Butler's weekly analysis of the Commitment of Traders reports, tracking bank positions and identifying manipulation patterns in real-time."
    },
];

export default function TedButlerPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={schema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-slate-50 text-slate-900 py-20 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <Link href="/silver-experts" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors">
                            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Silver Experts
                        </Link>
                        <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-400 mb-6 border border-red-500/30 ml-4">
                            <AlertTriangle className="w-4 h-4" />
                            Silver Expert Profile
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4">
                            Ted Butler on Silver
                        </h1>
                        <p className="text-xl text-red-400 font-semibold mb-4">
                            The Pioneer of Silver Manipulation Research
                        </p>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                            For over 30 years, Ted Butler has documented and exposed silver price manipulation. His relentless research into COMEX positioning and bank short positions has shaped how a generation of investors understands the silver market.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Main Content */}
            <Container className="py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Column */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Who Is Ted Butler */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <Search className="w-6 h-6 text-red-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Who Is Ted Butler?</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    Ted Butler is an independent precious metals analyst who has spent over three decades researching and documenting <strong className="text-red-400">silver price manipulation</strong>. He is widely credited as the pioneer of silver manipulation research, having first identified suspicious trading patterns in the 1980s.
                                </p>
                                <p className="text-slate-600">
                                    Unlike many commentators who speak in generalities about &quot;the banks&quot; or &quot;the system,&quot; Butler names names. His research specifically identifies <strong className="text-slate-900">JP Morgan</strong> as holding the largest concentrated short position in silver market history, a position he argues is used to artificially suppress prices.
                                </p>
                                <p className="text-slate-600">
                                    Butler has filed numerous complaints with the <strong className="text-slate-900">Commodity Futures Trading Commission (CFTC)</strong> over the years, documenting what he sees as blatant manipulation. While the CFTC initially dismissed his claims, the 2020 JP Morgan settlement for $920 million vindicated many of his accusations.
                                </p>

                                <div className="bg-slate-50 rounded-lg p-6 my-6 not-prose">
                                    <h4 className="font-bold text-slate-900 mb-4">Ted Butler Quick Facts</h4>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                            <span>30+ years researching silver manipulation</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                            <span>First to identify JP Morgan&apos;s silver short position</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                            <span>Filed numerous CFTC complaints on manipulation</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                            <span>Publishes weekly COT analysis for subscribers</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                            <span>Claims vindicated by 2020 JP Morgan settlement</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* COMEX Analysis */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <BarChart3 className="w-6 h-6 text-red-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Butler&apos;s COMEX Analysis</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    The core of Butler&apos;s research focuses on the <strong className="text-slate-900">Commitment of Traders (COT) reports</strong> published by the CFTC. These reports reveal the positions held by different categories of traders on the COMEX futures exchange.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Concentrated Short Positions</h3>
                                <p className="text-slate-600">
                                    Butler&apos;s key insight is that a small number of banks hold <strong className="text-red-400">massive concentrated short positions</strong> in silver - positions that are larger relative to market size than in any other commodity. He argues these positions are not legitimate hedges but rather tools for price suppression.
                                </p>
                                <blockquote className="border-l-4 border-red-400 pl-4 my-6 text-slate-600 italic">
                                    &quot;No legitimate market participant needs to short more silver than exists in annual global mine production. These are not hedges. These are tools of manipulation.&quot;
                                </blockquote>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The JP Morgan Position</h3>
                                <p className="text-slate-600">
                                    Butler traces JP Morgan&apos;s silver short position to the 2008 Bear Stearns collapse. When JP Morgan acquired Bear Stearns, they inherited what Butler calculates as the largest silver short position in history. Rather than cover this position, he argues JP Morgan has used it to manipulate prices ever since.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Price Suppression Patterns</h3>
                                <p className="text-slate-600">
                                    Butler documents recurring patterns in silver trading: sudden, sharp price drops during thin trading hours; prices that rise slowly then crash quickly; and bank positions that increase on price rises only to be covered on engineered price declines.
                                </p>
                            </div>
                        </section>

                        {/* JP Morgan Accusations */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <AlertTriangle className="w-6 h-6 text-red-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">The JP Morgan Accusations</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    Butler has been the most persistent voice accusing JP Morgan of silver manipulation. His specific claims include:
                                </p>
                                <ul className="text-slate-600 space-y-3">
                                    <li><strong className="text-slate-900">Concentrated Short Position:</strong> JP Morgan holds the largest silver short position ever recorded, often equivalent to months of global mine production.</li>
                                    <li><strong className="text-slate-900">Price Suppression:</strong> This position is used to cap silver prices whenever they threaten to break out, engineering sudden price crashes.</li>
                                    <li><strong className="text-slate-900">Regulatory Capture:</strong> The CFTC has failed to act because of the &quot;too big to fail&quot; status of JP Morgan.</li>
                                    <li><strong className="text-slate-900">Physical Accumulation:</strong> While suppressing paper prices, JP Morgan has allegedly accumulated one of the largest physical silver hoards in history.</li>
                                </ul>

                                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 my-8 not-prose">
                                    <h4 className="font-bold text-red-400 text-lg mb-3">The 2020 Vindication</h4>
                                    <p className="text-slate-600">
                                        In September 2020, JP Morgan paid <strong className="text-slate-900">$920 million</strong> to settle charges of manipulating precious metals and Treasury markets. While the settlement cited &quot;spoofing&quot; rather than concentrated short positions, it confirmed what Butler had been saying for years: JP Morgan was manipulating precious metals markets.
                                    </p>
                                    <p className="text-slate-600 mt-4">
                                        Butler views this as partial vindication but argues the real manipulation - the concentrated short position - remains unaddressed.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Key Quotes */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <Quote className="w-6 h-6 text-red-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Key Quotes & Predictions</h2>
                            </div>
                            <div className="space-y-6">
                                {keyQuotes.map((item, index) => (
                                    <div key={index} className="bg-slate-50 rounded-lg p-6">
                                        <p className="text-slate-900 text-lg italic mb-3">&quot;{item.quote}&quot;</p>
                                        <p className="text-red-400 text-sm font-semibold">{item.context}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Key Articles */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <FileText className="w-6 h-6 text-red-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Key Articles & Research</h2>
                            </div>
                            <div className="space-y-4">
                                {keyArticles.map((article, index) => (
                                    <div key={index} className="bg-slate-50 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{article.title}</h3>
                                        <p className="text-slate-600">{article.summary}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600 text-sm mt-6">
                                Butler publishes regular analysis through his subscription service, with weekly updates on COT positioning and market developments.
                            </p>
                        </section>

                        {/* What Butler Recommends */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">What Ted Butler Recommends</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    Based on his analysis, Butler&apos;s recommendations are straightforward:
                                </p>
                                <ul className="text-slate-600 space-y-3">
                                    <li><strong className="text-slate-900">Buy Physical Silver:</strong> The manipulation can only end when physical demand overwhelms the paper market. Every ounce of physical silver purchased contributes to this outcome.</li>
                                    <li><strong className="text-slate-900">Hold Long-Term:</strong> Manipulation can persist longer than expected, but fundamentals eventually prevail. Patience is essential.</li>
                                    <li><strong className="text-slate-900">Avoid Paper Silver:</strong> SLV and other paper products do not contribute to ending the manipulation. Only physical silver or fully allocated storage matters.</li>
                                    <li><strong className="text-slate-900">Demand Accountability:</strong> Butler encourages investors to contact the CFTC and their representatives to demand investigation of silver manipulation.</li>
                                </ul>

                                <Callout type="warning" title="Butler's Warning">
                                    &quot;The manipulation cannot last forever. When it ends - whether through regulatory action, physical shortage, or market collapse - those holding physical silver will be rewarded beyond their expectations. Those holding paper will be holding nothing.&quot;
                                </Callout>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <h2 className="text-2xl font-bold font-serif text-slate-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-red-400 mb-2">Who is Ted Butler?</h3>
                                    <p className="text-slate-600">Ted Butler is an independent precious metals analyst who has spent over 30 years researching and documenting silver price manipulation. He is widely credited as the pioneer of silver manipulation research and has filed numerous complaints with the CFTC.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-red-400 mb-2">What is Ted Butler&apos;s thesis on silver manipulation?</h3>
                                    <p className="text-slate-600">Butler argues that silver prices are artificially suppressed through concentrated short positions held by major banks on the COMEX. He has specifically named JP Morgan as holding the largest short position in silver market history.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-red-400 mb-2">Was Ted Butler right about JP Morgan?</h3>
                                    <p className="text-slate-600">In 2020, JP Morgan paid $920 million to settle charges of manipulating precious metals markets. While regulators cited spoofing rather than concentrated shorts, the settlement validated years of Butler&apos;s claims that major banks were manipulating silver prices.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-red-400 mb-2">What does Ted Butler predict for silver?</h3>
                                    <p className="text-slate-600">Butler believes silver is the most undervalued asset in the world and predicts explosive price increases when the manipulation ends. He has suggested silver could reach several hundred dollars per ounce when true price discovery occurs.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-8">
                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-red-900/30 to-slate-800/50 border border-red-500/30 rounded-xl p-6 sticky top-24">
                            <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">
                                Want to Follow the Experts Into Silver?
                            </h3>
                            <p className="text-slate-600 text-sm mb-6">
                                Like Ted Butler, many experts recommend physical silver in a tax-advantaged IRA. Find out if it is right for you.
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
                                    <Link href="/silver-experts/andy-schectman" className="text-red-400 hover:text-red-300 font-medium">
                                        Andy Schectman - Miles Franklin CEO
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/david-morgan" className="text-red-400 hover:text-red-300 font-medium">
                                        David Morgan - The Silver Guru
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/mike-maloney" className="text-red-400 hover:text-red-300 font-medium">
                                        Mike Maloney - GoldSilver.com
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/rick-rule" className="text-red-400 hover:text-red-300 font-medium">
                                        Rick Rule - Mining Investor
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/eric-sprott" className="text-red-400 hover:text-red-300 font-medium">
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
                                    <Link href="/silver-squeeze/silver-manipulation" className="text-slate-600 hover:text-slate-900">
                                        Silver Manipulation Evidence
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-squeeze/banks-shorting-silver" className="text-slate-600 hover:text-slate-900">
                                        Banks Shorting Silver
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-squeeze/comex-silver-inventory" className="text-slate-600 hover:text-slate-900">
                                        COMEX Silver Inventory
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
                            <strong className="text-slate-900">Disclaimer:</strong> We are not affiliated with Ted Butler. The information presented is for educational purposes only and represents our interpretation of publicly available statements. Always conduct your own research and consult with a financial advisor before making investment decisions.
                        </p>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA variant="footer" linkContext="silver" trackSource="ted-butler" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
