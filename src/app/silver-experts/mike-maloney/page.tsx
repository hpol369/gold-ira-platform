import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Callout } from "@/components/ui/Callout";
import { ArrowRight, Quote, Star, PlayCircle, TrendingUp, History, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Mike Maloney Silver: Hidden Secrets of Money & Price Predictions",
    description: "Learn what Mike Maloney, founder of GoldSilver.com and creator of Hidden Secrets of Money, says about silver. Discover his wealth cycle analysis and predictions.",
    keywords: ["mike maloney silver", "mike maloney", "goldsilver.com", "hidden secrets of money", "mike maloney predictions", "wealth cycles"],
    openGraph: {
        title: "Mike Maloney Silver: Hidden Secrets of Money & Price Predictions",
        description: "What does Mike Maloney say about silver? Learn about his wealth cycle analysis and monetary history research.",
        type: "article",
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mike Maloney on Silver: Hidden Secrets of Money Analysis",
    "description": "Comprehensive overview of Mike Maloney's monetary history analysis, wealth cycle predictions, and silver investment thesis.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is Mike Maloney?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mike Maloney is the founder of GoldSilver.com and creator of the 'Hidden Secrets of Money' documentary series. He is a bestselling author and one of the most influential precious metals educators in the world."
                }
            },
            {
                "@type": "Question",
                "name": "What is Hidden Secrets of Money?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hidden Secrets of Money is a free documentary series created by Mike Maloney that explores monetary history, the difference between money and currency, and why gold and silver have been money for thousands of years."
                }
            },
            {
                "@type": "Question",
                "name": "What does Mike Maloney predict for silver?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mike Maloney believes we are in the greatest wealth transfer in history and that silver is poised for dramatic price increases. He has predicted silver could reach three-digit prices during the coming monetary crisis."
                }
            },
            {
                "@type": "Question",
                "name": "What are wealth cycles according to Mike Maloney?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Maloney teaches that wealth cycles transfer value from one asset class to another over time. He believes we are in a cycle that will transfer wealth from overvalued paper assets (stocks, bonds, real estate) to undervalued hard assets (gold and silver)."
                }
            }
        ]
    }
};

const keyQuotes = [
    {
        quote: "We are living through the greatest wealth transfer in history. Those who understand this and position themselves correctly will benefit enormously.",
        context: "On the coming wealth transfer"
    },
    {
        quote: "Gold and silver are not investments. They are savings. They are the only financial assets that are not simultaneously someone else's liability.",
        context: "On gold and silver as money"
    },
    {
        quote: "I believe silver is the best opportunity I have ever seen in my lifetime. The fundamentals are simply overwhelming.",
        context: "On silver as an investment"
    },
    {
        quote: "Every 30 to 40 years, the international monetary system fails and is rebuilt. We are overdue for the next reset.",
        context: "On monetary cycles"
    },
];

const documentarySeries = [
    {
        episode: "Episode 1",
        title: "Currency vs. Money",
        description: "Explores the fundamental difference between currency (paper money) and real money (gold and silver)."
    },
    {
        episode: "Episode 2",
        title: "Seven Stages of Empire",
        description: "Examines how all great empires throughout history have followed the same monetary path to collapse."
    },
    {
        episode: "Episode 3",
        title: "From Dollar Crisis to Golden Opportunity",
        description: "Analyzes the current dollar-based system and the opportunity in precious metals."
    },
    {
        episode: "Episode 4",
        title: "The Biggest Scam in History",
        description: "Reveals how the modern banking system creates currency from nothing."
    },
    {
        episode: "Episode 5",
        title: "Rise of Hitler",
        description: "Shows how monetary collapse in Weimar Germany led to social and political upheaval."
    },
];

export default function MikeMaloneyPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={schema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-slate-50 text-slate-900 py-20 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <Link href="/silver-experts" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors">
                            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Silver Experts
                        </Link>
                        <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-4 py-1.5 text-sm font-semibold text-purple-700 mb-6 border border-purple-500/30 ml-4">
                            <Star className="w-4 h-4" />
                            Silver Expert Profile
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4">
                            Mike Maloney on Silver
                        </h1>
                        <p className="text-xl text-purple-700 font-semibold mb-4">
                            Founder of GoldSilver.com | Creator of &quot;Hidden Secrets of Money&quot;
                        </p>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                            Mike Maloney has educated millions about monetary history and the role of gold and silver as real money. His documentary series and bestselling books have become essential resources for precious metals investors worldwide.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Main Content */}
            <Container className="py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Column */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Who Is Mike Maloney */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-purple-500/20 rounded-lg">
                                    <Star className="w-6 h-6 text-purple-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Who Is Mike Maloney?</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    Mike Maloney is the founder of <strong className="text-purple-700">GoldSilver.com</strong>, one of the world&apos;s leading precious metals dealers, and the creator of the acclaimed documentary series <strong className="text-slate-900">&quot;Hidden Secrets of Money.&quot;</strong> His work has been viewed by tens of millions of people and has fundamentally changed how a generation thinks about money.
                                </p>
                                <p className="text-slate-600">
                                    Maloney&apos;s journey into precious metals began after studying wealth cycles and monetary history. He discovered that throughout history, all fiat currencies eventually return to their intrinsic value: zero. This insight led him to dedicate his career to educating others about real money and wealth preservation.
                                </p>
                                <p className="text-slate-600">
                                    As an author, Maloney wrote <strong className="text-slate-900">&quot;Guide to Investing in Gold and Silver,&quot;</strong> which became a bestseller and is considered essential reading for precious metals investors. He is also a sought-after speaker who has presented at investment conferences worldwide.
                                </p>

                                <div className="bg-slate-50 rounded-lg p-6 my-6 not-prose">
                                    <h4 className="font-bold text-slate-900 mb-4">Mike Maloney Quick Facts</h4>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                                            <span>Founder of GoldSilver.com</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                                            <span>Creator of &quot;Hidden Secrets of Money&quot; documentary series</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                                            <span>Author of &quot;Guide to Investing in Gold and Silver&quot;</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                                            <span>Advisor to Robert Kiyosaki (Rich Dad, Poor Dad)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                                            <span>Tens of millions of views on his educational content</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Monetary History Analysis */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-purple-500/20 rounded-lg">
                                    <History className="w-6 h-6 text-purple-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Maloney&apos;s Monetary History Analysis</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    Central to Maloney&apos;s work is the study of monetary history. He has documented how every fiat currency in history has eventually failed, and he believes the current dollar-based system is no exception.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Currency vs. Money</h3>
                                <p className="text-slate-600">
                                    Maloney makes a critical distinction between <strong className="text-purple-700">currency</strong> (government-issued paper that functions as a medium of exchange) and <strong className="text-slate-900">money</strong> (a store of value that maintains purchasing power over time). He argues that only gold and silver meet the true definition of money.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Seven Stages of Empire</h3>
                                <p className="text-slate-600">
                                    One of Maloney&apos;s most influential concepts is the &quot;Seven Stages of Empire,&quot; which traces how great civilizations throughout history have followed the same monetary path:
                                </p>
                                <ol className="text-slate-600 space-y-2">
                                    <li><strong className="text-slate-900">Sound Money:</strong> Empire begins with gold and silver as money</li>
                                    <li><strong className="text-slate-900">Public Works:</strong> Wealth enables infrastructure and military expansion</li>
                                    <li><strong className="text-slate-900">Military Expansion:</strong> Empire extends its reach</li>
                                    <li><strong className="text-slate-900">Political Influence:</strong> Corruption and special interests emerge</li>
                                    <li><strong className="text-slate-900">Currency Debasement:</strong> Government inflates the currency to pay debts</li>
                                    <li><strong className="text-slate-900">Loss of Faith:</strong> Citizens lose trust in the currency</li>
                                    <li><strong className="text-slate-900">Currency Crisis:</strong> Hyperinflation or deflation destroys the currency</li>
                                </ol>
                                <blockquote className="border-l-4 border-purple-400 pl-4 my-6 text-slate-600 italic">
                                    &quot;The United States is now in stage 5 to 6. The currency debasement has been going on for decades, and we are beginning to see the loss of faith. The crisis is coming.&quot;
                                </blockquote>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Wealth Cycles</h3>
                                <p className="text-slate-600">
                                    Maloney teaches that wealth is not created or destroyed—it simply transfers from one asset class to another in predictable cycles. He believes we are at the end of a cycle that overvalued paper assets (stocks, bonds, real estate) and undervalued hard assets (gold and silver).
                                </p>
                            </div>
                        </section>

                        {/* Hidden Secrets of Money */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-purple-500/20 rounded-lg">
                                    <PlayCircle className="w-6 h-6 text-purple-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Hidden Secrets of Money Documentary</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600 mb-6">
                                    Maloney&apos;s documentary series has become essential viewing for anyone interested in understanding money, banking, and precious metals. The series is available for free and has been viewed tens of millions of times.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {documentarySeries.map((ep, index) => (
                                    <div key={index} className="bg-slate-50 rounded-lg p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-purple-700 font-bold">{ep.episode}</span>
                                            <span className="text-slate-900 font-semibold">: {ep.title}</span>
                                        </div>
                                        <p className="text-slate-600 text-sm">{ep.description}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600 mt-6">
                                The series continues with additional episodes covering topics such as the Federal Reserve, the 2008 financial crisis, and the coming monetary reset.
                            </p>
                        </section>

                        {/* Key Quotes */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-purple-500/20 rounded-lg">
                                    <Quote className="w-6 h-6 text-purple-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Key Quotes & Predictions</h2>
                            </div>
                            <div className="space-y-6">
                                {keyQuotes.map((item, index) => (
                                    <div key={index} className="bg-slate-50 rounded-lg p-6">
                                        <p className="text-slate-900 text-lg italic mb-3">&quot;{item.quote}&quot;</p>
                                        <p className="text-purple-700 text-sm font-semibold">{item.context}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Silver Predictions */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-green-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Maloney&apos;s Silver Predictions</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    Maloney has been consistently bullish on silver, calling it &quot;the best opportunity I have ever seen in my lifetime.&quot; His predictions are based on several key factors:
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Wealth Transfer Thesis</h3>
                                <p className="text-slate-600">
                                    Maloney believes we are in the early stages of the greatest wealth transfer in history. As the current monetary system becomes increasingly unstable, wealth will flow from overvalued paper assets into undervalued hard assets like silver.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Silver&apos;s Dual Role</h3>
                                <p className="text-slate-600">
                                    Unlike gold, silver is both a monetary metal and an industrial commodity. Maloney notes that growing industrial demand from solar panels, electronics, and medical applications is consuming silver faster than it can be mined, creating a structural supply deficit.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Price Targets</h3>
                                <p className="text-slate-600">
                                    While Maloney is careful about specific price predictions, he has suggested that silver could reach <strong className="text-purple-700">triple-digit prices</strong> during the coming monetary crisis. He bases this on historical precedents where precious metals experienced dramatic price increases during currency crises.
                                </p>

                                <Callout type="tip" title="Maloney's Key Insight">
                                    &quot;When currency dies, it does not die slowly. It dies quickly. Those who are positioned in gold and silver before the crisis will preserve and grow their wealth. Those who wait too long will find themselves on the wrong side of the greatest wealth transfer in history.&quot;
                                </Callout>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <h2 className="text-2xl font-bold font-serif text-slate-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-purple-700 mb-2">Who is Mike Maloney?</h3>
                                    <p className="text-slate-600">Mike Maloney is the founder of GoldSilver.com and creator of the &quot;Hidden Secrets of Money&quot; documentary series. He is a bestselling author and one of the most influential precious metals educators in the world.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-purple-700 mb-2">What is Hidden Secrets of Money?</h3>
                                    <p className="text-slate-600">Hidden Secrets of Money is a free documentary series created by Mike Maloney that explores monetary history, the difference between money and currency, and why gold and silver have been money for thousands of years.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-purple-700 mb-2">What does Mike Maloney predict for silver?</h3>
                                    <p className="text-slate-600">Mike Maloney believes we are in the greatest wealth transfer in history and that silver is poised for dramatic price increases. He has predicted silver could reach three-digit prices during the coming monetary crisis.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-purple-700 mb-2">What are wealth cycles according to Mike Maloney?</h3>
                                    <p className="text-slate-600">Maloney teaches that wealth cycles transfer value from one asset class to another over time. He believes we are in a cycle that will transfer wealth from overvalued paper assets to undervalued hard assets like gold and silver.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-8">
                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-purple-900/30 to-slate-800/50 border border-purple-500/30 rounded-xl p-6 sticky top-24">
                            <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">
                                Want to Follow the Experts Into Silver?
                            </h3>
                            <p className="text-slate-600 text-sm mb-6">
                                Like Mike Maloney, many experts recommend physical silver in a tax-advantaged IRA. Find out if it is right for you.
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
                                    <Link href="/silver-experts/andy-schectman" className="text-purple-700 hover:text-purple-800 font-medium">
                                        Andy Schectman - Miles Franklin CEO
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/david-morgan" className="text-purple-700 hover:text-purple-800 font-medium">
                                        David Morgan - The Silver Guru
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/ted-butler" className="text-purple-700 hover:text-purple-800 font-medium">
                                        Ted Butler - Manipulation Researcher
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/rick-rule" className="text-purple-700 hover:text-purple-800 font-medium">
                                        Rick Rule - Mining Investor
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/eric-sprott" className="text-purple-700 hover:text-purple-800 font-medium">
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
                                    <Link href="/rich-dad-strategy" className="text-slate-600 hover:text-slate-900">
                                        Rich Dad Strategy for Gold & Silver
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-squeeze/silver-supply-deficit" className="text-slate-600 hover:text-slate-900">
                                        Silver Supply Deficit Analysis
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
                            <strong className="text-slate-900">Disclaimer:</strong> We are not affiliated with Mike Maloney or GoldSilver.com. The information presented is for educational purposes only and represents our interpretation of publicly available statements. Always conduct your own research and consult with a financial advisor before making investment decisions.
                        </p>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA variant="footer" linkContext="silver" trackSource="mike-maloney" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
