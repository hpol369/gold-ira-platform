import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Callout } from "@/components/ui/Callout";
import { ArrowRight, Quote, TrendingUp, Mountain, DollarSign, Target, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Rick Rule Silver: Mining Investment Legend's Analysis & Strategy",
    description: "Learn what Rick Rule, legendary mining investor and former Sprott executive, says about silver. Discover his investment approach, mining stock picks, and market predictions.",
    keywords: ["rick rule silver", "rick rule", "sprott silver", "rick rule mining", "rick rule predictions", "silver mining stocks"],
    openGraph: {
        title: "Rick Rule Silver: Mining Investment Legend's Analysis & Strategy",
        description: "What does Rick Rule say about silver? Learn about his mining investment thesis and silver predictions.",
        type: "article",
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Rick Rule on Silver: A Mining Investment Legend's Perspective",
    "description": "Comprehensive overview of Rick Rule's silver investment thesis, mining stock analysis, and market predictions.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is Rick Rule?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rick Rule is a legendary resource investor with over 50 years of experience. He was formerly the President of Sprott U.S. Holdings and has been instrumental in financing hundreds of mining companies throughout his career."
                }
            },
            {
                "@type": "Question",
                "name": "What is Rick Rule's silver thesis?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rule believes silver offers compelling value, particularly through mining stocks which provide leveraged exposure to rising metal prices. He sees silver's industrial demand as a key differentiator from gold."
                }
            },
            {
                "@type": "Question",
                "name": "How does Rick Rule invest in silver?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rule primarily invests in silver through mining stocks rather than physical metal, as he believes quality mining companies can generate 3-5x returns on metal price increases. He focuses on companies with strong balance sheets and quality management."
                }
            },
            {
                "@type": "Question",
                "name": "What is Rick Rule's investment approach?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rule is a contrarian value investor who buys when sectors are out of favor and sells when they become popular. He emphasizes fundamental analysis, management quality, and buying at discounts to intrinsic value."
                }
            }
        ]
    }
};

const keyQuotes = [
    {
        quote: "The cure for low prices is low prices. When silver was $14 an ounce, new projects stopped getting funded. That supply deficit is now baked in.",
        context: "On supply dynamics"
    },
    {
        quote: "I do not invest in metals. I invest in metal companies. A well-run silver miner with leverage can return 3-5x what the metal returns.",
        context: "On mining stocks"
    },
    {
        quote: "Be fearful when others are greedy, and greedy when others are fearful. In natural resources, this is especially true.",
        context: "On contrarian investing"
    },
    {
        quote: "Silver's industrial demand sets it apart from gold. It is not just money - it is essential for the technologies driving the modern economy.",
        context: "On silver fundamentals"
    },
];

const investmentPrinciples = [
    {
        principle: "Buy When Out of Favor",
        description: "Rule accumulates resource stocks when they are deeply out of favor and trading at steep discounts to intrinsic value."
    },
    {
        principle: "Focus on Management",
        description: "The quality of management is often more important than the quality of the deposit. Rule invests in people first."
    },
    {
        principle: "Balance Sheet Matters",
        description: "Companies need strong balance sheets to survive bear markets. Avoid companies that need to raise capital in downturns."
    },
    {
        principle: "Sell the Rally",
        description: "When sectors become popular and stocks trade at premiums, it is time to take profits. Do not fall in love with positions."
    },
];

export default function RickRulePage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={schema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-slate-50 text-slate-900 py-20 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <Link href="/silver-experts" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors">
                            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Silver Experts
                        </Link>
                        <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-1.5 text-sm font-semibold text-green-700 mb-6 border border-green-500/30 ml-4">
                            <TrendingUp className="w-4 h-4" />
                            Silver Expert Profile
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4">
                            Rick Rule on Silver
                        </h1>
                        <p className="text-xl text-green-700 font-semibold mb-4">
                            Legendary Mining Investor | Former President, Sprott U.S. Holdings
                        </p>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                            With over 50 years in resource investing, Rick Rule has financed hundreds of mining companies and generated legendary returns for investors. His insights on silver markets combine deep industry knowledge with contrarian investment wisdom.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Main Content */}
            <Container className="py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Column */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Who Is Rick Rule */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <Mountain className="w-6 h-6 text-green-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Who Is Rick Rule?</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    Rick Rule is one of the most respected names in natural resource investing. With over <strong className="text-slate-900">50 years of experience</strong>, he has been instrumental in financing hundreds of mining companies and has generated returns that have made him a legend in the industry.
                                </p>
                                <p className="text-slate-600">
                                    Rule served as President of <strong className="text-green-700">Sprott U.S. Holdings</strong>, where he oversaw billions of dollars in resource investments. Before joining Sprott, he founded Global Resource Investments, which became the largest brokerage focused on natural resource companies.
                                </p>
                                <p className="text-slate-600">
                                    Unlike analysts who only talk about markets, Rule has put his money where his mouth is throughout his career. His track record includes early investments in companies that became billion-dollar successes, as well as the discipline to avoid spectacular failures.
                                </p>

                                <div className="bg-slate-50 rounded-lg p-6 my-6 not-prose">
                                    <h4 className="font-bold text-slate-900 mb-4">Rick Rule Quick Facts</h4>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                                            <span>50+ years in natural resource investing</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                                            <span>Former President of Sprott U.S. Holdings</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                                            <span>Founder of Global Resource Investments</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                                            <span>Financed hundreds of mining companies</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                                            <span>Known for contrarian value investing approach</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Silver Mining Thesis */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-green-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Rick Rule&apos;s Silver Mining Thesis</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    Rule approaches silver differently than most precious metals investors. While he appreciates physical silver, his investment focus is on <strong className="text-slate-900">silver mining stocks</strong> - where he believes the real leverage lies.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Leverage Through Mining Stocks</h3>
                                <p className="text-slate-600">
                                    Rule&apos;s thesis is that quality silver mining stocks can provide <strong className="text-green-700">3-5x leverage</strong> to the underlying metal price. If silver doubles, a well-run miner with good cost structures could triple or quadruple. This leverage works both ways, which is why stock selection is critical.
                                </p>
                                <blockquote className="border-l-4 border-green-400 pl-4 my-6 text-slate-600 italic">
                                    &quot;Physical silver is insurance. Mining stocks are the lottery ticket. I want both, but I know which one offers the bigger payout potential.&quot;
                                </blockquote>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Supply Deficit Thesis</h3>
                                <p className="text-slate-600">
                                    Rule points to the chronic underinvestment in silver mining during the 2013-2020 bear market. New deposits were not developed, existing mines were not expanded, and exploration was cut to the bone. This creates a <strong className="text-slate-900">structural supply deficit</strong> that cannot be quickly fixed when demand rises.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Industrial Demand Tailwind</h3>
                                <p className="text-slate-600">
                                    Unlike gold, silver has substantial industrial demand - solar panels, electronics, medical devices, and increasingly EVs. Rule sees this as a fundamental tailwind that gold does not have. As the world electrifies, silver demand will grow.
                                </p>
                            </div>
                        </section>

                        {/* Investment Approach */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <Target className="w-6 h-6 text-green-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Rick Rule&apos;s Investment Approach</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none mb-8">
                                <p className="text-slate-600">
                                    Rule is a disciplined contrarian investor. His approach has been refined over five decades and has weathered multiple boom-bust cycles in the resource sector.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {investmentPrinciples.map((item, index) => (
                                    <div key={index} className="bg-slate-50 rounded-lg p-6">
                                        <h3 className="text-lg font-bold text-green-700 mb-2">{item.principle}</h3>
                                        <p className="text-slate-600 text-sm">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Key Quotes */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <Quote className="w-6 h-6 text-green-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">Key Quotes & Insights</h2>
                            </div>
                            <div className="space-y-6">
                                {keyQuotes.map((item, index) => (
                                    <div key={index} className="bg-slate-50 rounded-lg p-6">
                                        <p className="text-slate-900 text-lg italic mb-3">&quot;{item.quote}&quot;</p>
                                        <p className="text-green-700 text-sm font-semibold">{item.context}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* What Rick Rule Recommends */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <DollarSign className="w-6 h-6 text-green-700" />
                                </div>
                                <h2 className="text-2xl font-bold font-serif text-slate-900">What Rick Rule Recommends</h2>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-600">
                                    Rule&apos;s recommendations blend practical wisdom with decades of experience:
                                </p>
                                <ul className="text-slate-600 space-y-3">
                                    <li><strong className="text-slate-900">Start with Physical:</strong> Hold physical gold and silver as insurance. This is your foundation, not your speculation.</li>
                                    <li><strong className="text-slate-900">Add Mining Stocks:</strong> For those willing to accept higher risk, quality mining stocks offer leverage to rising metal prices.</li>
                                    <li><strong className="text-slate-900">Focus on Quality:</strong> Own the best companies, not the cheapest. Cheap stocks can get much cheaper.</li>
                                    <li><strong className="text-slate-900">Be Patient:</strong> Resource cycles can last years. Position yourself and wait for the market to recognize value.</li>
                                    <li><strong className="text-slate-900">Diversify Within the Sector:</strong> Spread risk across multiple companies and sub-sectors within precious metals.</li>
                                </ul>

                                <Callout type="tip" title="Rule's Core Advice for Individual Investors">
                                    &quot;If you cannot analyze mining stocks, own physical silver or a physically-backed trust like PSLV. Do not own what you do not understand. But if you can do the work, the rewards in mining stocks can be extraordinary.&quot;
                                </Callout>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <h2 className="text-2xl font-bold font-serif text-slate-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-green-700 mb-2">Who is Rick Rule?</h3>
                                    <p className="text-slate-600">Rick Rule is a legendary resource investor with over 50 years of experience. He was formerly the President of Sprott U.S. Holdings and has been instrumental in financing hundreds of mining companies throughout his career.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-green-700 mb-2">What is Rick Rule&apos;s silver thesis?</h3>
                                    <p className="text-slate-600">Rule believes silver offers compelling value, particularly through mining stocks which provide leveraged exposure to rising metal prices. He sees silver&apos;s industrial demand as a key differentiator from gold.</p>
                                </div>
                                <div className="border-b border-slate-200 pb-6">
                                    <h3 className="text-lg font-bold text-green-700 mb-2">How does Rick Rule invest in silver?</h3>
                                    <p className="text-slate-600">Rule primarily invests in silver through mining stocks rather than physical metal, as he believes quality mining companies can generate 3-5x returns on metal price increases. He focuses on companies with strong balance sheets and quality management.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-green-700 mb-2">What is Rick Rule&apos;s investment approach?</h3>
                                    <p className="text-slate-600">Rule is a contrarian value investor who buys when sectors are out of favor and sells when they become popular. He emphasizes fundamental analysis, management quality, and buying at discounts to intrinsic value.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-8">
                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-green-900/30 to-slate-800/50 border border-green-500/30 rounded-xl p-6 sticky top-24">
                            <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">
                                Want to Follow the Experts Into Silver?
                            </h3>
                            <p className="text-slate-600 text-sm mb-6">
                                Like Rick Rule, many experts recommend physical silver as a foundation. Find out if a Silver IRA is right for you.
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
                                    <Link href="/silver-experts/andy-schectman" className="text-green-700 hover:text-green-800 font-medium">
                                        Andy Schectman - Miles Franklin CEO
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/david-morgan" className="text-green-700 hover:text-green-800 font-medium">
                                        David Morgan - The Silver Guru
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/mike-maloney" className="text-green-700 hover:text-green-800 font-medium">
                                        Mike Maloney - GoldSilver.com
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/ted-butler" className="text-green-700 hover:text-green-800 font-medium">
                                        Ted Butler - Manipulation Researcher
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/silver-experts/eric-sprott" className="text-green-700 hover:text-green-800 font-medium">
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
                                    <Link href="/silver-squeeze/silver-supply-deficit" className="text-slate-600 hover:text-slate-900">
                                        Silver Supply Deficit Analysis
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
                            <strong className="text-slate-900">Disclaimer:</strong> We are not affiliated with Rick Rule or Sprott. The information presented is for educational purposes only and represents our interpretation of publicly available statements. Always conduct your own research and consult with a financial advisor before making investment decisions.
                        </p>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA variant="footer" linkContext="silver" trackSource="rick-rule" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
