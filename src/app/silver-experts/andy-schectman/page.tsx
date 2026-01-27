import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Callout } from "@/components/ui/Callout";
import { ArrowRight, Quote, TrendingUp, Building2, Mic, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Andy Schectman Silver: Miles Franklin CEO's Predictions & Analysis",
    description: "Learn what Andy Schectman, CEO of Miles Franklin, says about silver shortages, bank manipulation, and why he believes silver is the investment of the decade.",
    keywords: ["andy schectman silver", "andy schectman", "miles franklin silver", "andy schectman predictions", "andy schectman interview"],
    openGraph: {
        title: "Andy Schectman Silver: Miles Franklin CEO's Predictions & Analysis",
        description: "What does Andy Schectman say about silver? Learn about his thesis on shortages, manipulation, and price predictions.",
        type: "article",
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Andy Schectman on Silver: Miles Franklin CEO's Complete Analysis",
    "description": "Comprehensive overview of Andy Schectman's silver thesis, predictions, and investment recommendations.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is Andy Schectman?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Andy Schectman is the President and CEO of Miles Franklin, one of the largest precious metals dealers in the United States. He has over 30 years of experience in the precious metals industry and is a frequent guest on financial media."
                }
            },
            {
                "@type": "Question",
                "name": "What does Andy Schectman predict for silver?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Andy Schectman believes silver is severely undervalued and predicts significant price increases when the paper silver market fails to deliver physical metal. He frequently discusses silver shortages and bank manipulation."
                }
            },
            {
                "@type": "Question",
                "name": "Why does Andy Schectman recommend silver?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Schectman recommends silver based on supply deficits, industrial demand growth, the gold-to-silver ratio being historically high, and evidence of price manipulation that he believes will eventually end."
                }
            },
            {
                "@type": "Question",
                "name": "What is Miles Franklin?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Miles Franklin is one of the largest precious metals dealers in the United States, founded in 1989. The company specializes in physical gold and silver sales and has been recognized for transparent pricing and customer service."
                }
            }
        ]
    }
};

const keyQuotes = [
    {
        quote: "The paper silver market is a fraud. There are hundreds of ounces of paper claims for every ounce of physical silver available.",
        context: "On paper vs physical silver"
    },
    {
        quote: "We are in a physical silver shortage right now. The mints cannot keep up with demand. Delivery times are stretching out to months.",
        context: "On silver supply"
    },
    {
        quote: "Central banks are accumulating gold at record rates. They know what is coming. Smart money follows what they do, not what they say.",
        context: "On central bank activity"
    },
    {
        quote: "Silver is both money and an industrial metal. It is being consumed in electronics, solar panels, and medical devices. Above-ground inventories are shrinking.",
        context: "On silver fundamentals"
    },
];

export default function AndySchectmanPage() {
    return (
        <main className="min-h-screen bg-slate-900">
            <SchemaScript schema={schema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white py-20 relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <Link href="/silver-experts" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Silver Experts
                        </Link>
                        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-1.5 text-sm font-semibold text-amber-400 mb-6 border border-amber-500/30 ml-4">
                            <TrendingUp className="w-4 h-4" />
                            Silver Expert Profile
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4">
                            Andy Schectman on Silver
                        </h1>
                        <p className="text-xl text-amber-400 font-semibold mb-4">
                            CEO & President, Miles Franklin Precious Metals
                        </p>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                            One of the most vocal advocates for physical silver ownership, Andy Schectman has spent over 30 years warning investors about silver shortages, bank manipulation, and the coming reset in precious metals prices.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Main Content */}
            <Container className="py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Column */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Who Is Andy Schectman */}
                        <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-amber-500/20 rounded-lg">
                                    <Building2 className="w-6 h-6 text-amber-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-white">Who Is Andy Schectman?</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-300">
                                    Andy Schectman is the President and CEO of <strong className="text-white">Miles Franklin</strong>, one of the largest and most respected precious metals dealers in the United States. Founded in 1989, Miles Franklin has facilitated billions of dollars in precious metals transactions for individual investors, institutions, and retirement accounts.
                                </p>
                                <p className="text-slate-300">
                                    With over three decades in the precious metals industry, Schectman has become one of the most recognizable voices advocating for physical silver ownership. He regularly appears on major financial media outlets including Kitco News, Stansberry Research, WallStreetSilver, and numerous precious metals podcasts.
                                </p>
                                <p className="text-slate-300">
                                    Unlike many commentators who focus purely on price predictions, Schectman emphasizes the <strong className="text-amber-400">structural fundamentals</strong> of the silver market - particularly the disconnect between paper derivative contracts and physical metal availability.
                                </p>

                                <div className="bg-slate-800/50 rounded-lg p-6 my-6 not-prose">
                                    <h4 className="font-bold text-white mb-4">Andy Schectman Quick Facts</h4>
                                    <ul className="space-y-2 text-slate-300">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                            <span>30+ years in precious metals industry</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                            <span>CEO of Miles Franklin since 2011</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                            <span>Regular guest on Kitco, Stansberry, and major podcasts</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                            <span>Advocate for physical silver over paper derivatives</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                            <span>Specializes in precious metals IRA rollovers</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* His Silver Thesis */}
                        <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-amber-500/20 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-amber-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-white">Andy Schectman&apos;s Silver Thesis</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-300">
                                    Schectman&apos;s investment thesis centers on a fundamental belief: <strong className="text-white">the physical silver market is in severe deficit, and paper prices do not reflect reality</strong>. He argues that when the paper market finally fails to deliver physical metal, prices will need to adjust dramatically higher.
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">The Shortage Thesis</h3>
                                <p className="text-slate-300">
                                    Schectman frequently points to real-world supply constraints: mints running behind on production, delivery delays stretching to weeks or months, and premiums on physical silver remaining elevated above spot prices. He sees these as evidence that official &quot;spot&quot; prices do not reflect true physical supply and demand.
                                </p>
                                <blockquote className="border-l-4 border-amber-400 pl-4 my-6 text-slate-400 italic">
                                    &quot;When you call the mint and they tell you delivery is 12 weeks out, that is not a functioning market. That is a shortage being hidden by paper price manipulation.&quot;
                                </blockquote>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">The Manipulation Argument</h3>
                                <p className="text-slate-300">
                                    Schectman is unequivocal about silver price manipulation. He points to the $920 million fine JP Morgan paid for spoofing precious metals markets as proof that manipulation is not theory but documented fact. He believes the concentrated short positions held by a few major banks continue to suppress silver prices.
                                </p>

                                <h3 className="text-xl font-bold text-white mt-8 mb-4">Central Bank Accumulation</h3>
                                <p className="text-slate-300">
                                    A key theme in Schectman&apos;s analysis is central bank behavior. He notes that central banks have been accumulating gold at record rates while simultaneously promoting fiat currency. His interpretation: central banks are preparing for a monetary reset that will revalue precious metals significantly higher.
                                </p>
                            </div>
                        </section>

                        {/* Key Quotes */}
                        <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-amber-500/20 rounded-lg">
                                    <Quote className="w-6 h-6 text-amber-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-white">Key Quotes & Predictions</h2>
                            </div>
                            <div className="space-y-6">
                                {keyQuotes.map((item, index) => (
                                    <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                                        <p className="text-white text-lg italic mb-3">&quot;{item.quote}&quot;</p>
                                        <p className="text-amber-400 text-sm font-semibold">{item.context}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Video Appearances */}
                        <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-amber-500/20 rounded-lg">
                                    <Mic className="w-6 h-6 text-amber-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-white">Media Appearances</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-300 mb-6">
                                    Andy Schectman is one of the most interviewed precious metals experts in the industry. His regular appearances provide updated analysis on silver market conditions, supply constraints, and price predictions.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 not-prose">
                                    <div className="bg-slate-800/50 rounded-lg p-4">
                                        <h4 className="font-bold text-white mb-2">Kitco News</h4>
                                        <p className="text-slate-400 text-sm">Regular guest discussing silver supply, central bank activity, and market manipulation.</p>
                                    </div>
                                    <div className="bg-slate-800/50 rounded-lg p-4">
                                        <h4 className="font-bold text-white mb-2">Stansberry Research</h4>
                                        <p className="text-slate-400 text-sm">Deep dives into precious metals fundamentals and investment strategy.</p>
                                    </div>
                                    <div className="bg-slate-800/50 rounded-lg p-4">
                                        <h4 className="font-bold text-white mb-2">WallStreetSilver</h4>
                                        <p className="text-slate-400 text-sm">Discussions with the silver squeeze community about physical silver demand.</p>
                                    </div>
                                    <div className="bg-slate-800/50 rounded-lg p-4">
                                        <h4 className="font-bold text-white mb-2">Liberty and Finance</h4>
                                        <p className="text-slate-400 text-sm">Economic commentary and precious metals market outlook.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* What He Recommends */}
                        <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-white">What Andy Schectman Recommends</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-300">
                                    Schectman&apos;s investment recommendations focus on physical ownership and avoiding paper derivatives:
                                </p>
                                <ul className="text-slate-300 space-y-3">
                                    <li><strong className="text-white">Physical Silver Coins and Bars:</strong> Government-minted coins like American Eagles, Canadian Maples, and low-premium bars from reputable mints.</li>
                                    <li><strong className="text-white">Precious Metals IRAs:</strong> Rolling over 401(k)s and IRAs into physical silver for tax-advantaged accumulation.</li>
                                    <li><strong className="text-white">Avoid Paper Silver:</strong> He consistently warns against SLV, unallocated accounts, and futures contracts that may not be backed by physical metal.</li>
                                    <li><strong className="text-white">Dollar Cost Averaging:</strong> Building positions over time rather than trying to time the market.</li>
                                    <li><strong className="text-white">Diversification:</strong> While bullish on silver, he recommends a mix of gold and silver based on individual circumstances.</li>
                                </ul>

                                <Callout type="tip" title="Schectman's Core Message">
                                    If you cannot hold it, you do not own it. The entire premise of the paper silver market is that most people will never demand delivery. When enough people do, the game changes.
                                </Callout>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                            <h2 className="text-2xl font-bold font-serif text-white mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div className="border-b border-white/10 pb-6">
                                    <h3 className="text-lg font-bold text-amber-400 mb-2">Who is Andy Schectman?</h3>
                                    <p className="text-slate-300">Andy Schectman is the President and CEO of Miles Franklin, one of the largest precious metals dealers in the United States. He has over 30 years of experience in the precious metals industry and is a frequent guest on financial media.</p>
                                </div>
                                <div className="border-b border-white/10 pb-6">
                                    <h3 className="text-lg font-bold text-amber-400 mb-2">What does Andy Schectman predict for silver?</h3>
                                    <p className="text-slate-300">Andy Schectman believes silver is severely undervalued and predicts significant price increases when the paper silver market fails to deliver physical metal. He frequently discusses silver shortages and bank manipulation.</p>
                                </div>
                                <div className="border-b border-white/10 pb-6">
                                    <h3 className="text-lg font-bold text-amber-400 mb-2">Why does Andy Schectman recommend silver?</h3>
                                    <p className="text-slate-300">Schectman recommends silver based on supply deficits, industrial demand growth, the gold-to-silver ratio being historically high, and evidence of price manipulation that he believes will eventually end.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-amber-400 mb-2">What is Miles Franklin?</h3>
                                    <p className="text-slate-300">Miles Franklin is one of the largest precious metals dealers in the United States, founded in 1989. The company specializes in physical gold and silver sales and has been recognized for transparent pricing and customer service.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-8">
                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-amber-900/30 to-slate-800/50 border border-amber-500/30 rounded-xl p-6 sticky top-24">
                            <h3 className="text-xl font-bold font-serif text-white mb-4">
                                Want to Follow the Experts Into Silver?
                            </h3>
                            <p className="text-slate-400 text-sm mb-6">
                                Like Andy Schectman, many experts recommend physical silver in a tax-advantaged IRA. Find out if it is right for you.
                            </p>
                            <Button variant="gold" className="w-full" size="lg" asChild>
                                <Link href="/quiz">Take the 60-Second Quiz</Link>
                            </Button>
                            <p className="text-xs text-slate-500 text-center mt-3">No commitment required</p>
                        </div>

                        {/* Other Experts */}
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-white mb-4">Other Silver Experts</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/silver-experts/david-morgan" className="text-amber-400 hover:text-amber-300 font-medium">
                                        David Morgan - The Silver Guru
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/mike-maloney" className="text-amber-400 hover:text-amber-300 font-medium">
                                        Mike Maloney - GoldSilver.com
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/ted-butler" className="text-amber-400 hover:text-amber-300 font-medium">
                                        Ted Butler - Manipulation Researcher
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/rick-rule" className="text-amber-400 hover:text-amber-300 font-medium">
                                        Rick Rule - Mining Investor
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/eric-sprott" className="text-amber-400 hover:text-amber-300 font-medium">
                                        Eric Sprott - PSLV Creator
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Related Resources */}
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-white mb-4">Related Resources</h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="/silver-squeeze" className="text-slate-400 hover:text-white">
                                        Silver Squeeze Explained
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-squeeze/silver-shortage" className="text-slate-400 hover:text-white">
                                        Silver Shortage 2026
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-squeeze/silver-manipulation" className="text-slate-400 hover:text-white">
                                        Silver Manipulation Evidence
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guide/silver-ira-guide" className="text-slate-400 hover:text-white">
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
                    <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 max-w-4xl mx-auto">
                        <p className="text-slate-400 text-sm text-center">
                            <strong className="text-white">Disclaimer:</strong> We are not affiliated with Andy Schectman or Miles Franklin. The information presented is for educational purposes only and represents our interpretation of publicly available statements. Always conduct your own research and consult with a financial advisor before making investment decisions.
                        </p>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <AugustaCTA variant="footer" linkContext="silver" trackSource="andy-schectman" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
