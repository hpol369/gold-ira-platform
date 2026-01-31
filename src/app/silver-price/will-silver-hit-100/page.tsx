import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { Metadata } from "next";
import { Target, ArrowRight, DollarSign, TrendingUp, Clock, Zap, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "When Will Silver Hit $100? Scenarios, Timeline & Expert Predictions",
    description: "Analysis of when silver could hit $100/oz. Inflation-adjusted history shows it's achievable. Expert predictions, required catalysts, and timeline scenarios.",
    keywords: "when will silver hit 100, silver 100 dollars, silver price 100, will silver reach 100, silver to 100",
};

const takeaways = [
    "Silver's 1980 high of $49.45 would be $180+ inflation-adjusted today.",
    "At the historical 15:1 gold/silver ratio with gold at $2,600, silver would be $173.",
    "Expert predictions range from $100 (Peter Schiff) to $500 (Mike Maloney) this cycle.",
    "Key catalysts: monetary crisis, industrial shortage, gold above $4,000, ratio reversion.",
    "Silver would need to 3x from current levels to reach $100.",
    "Timeline estimates: aggressive 2026-2027, base case 2028-2030, conservative 2030+.",
    "A $100 silver price is historically normal when adjusted for monetary expansion."
];

const scenariosFor100 = [
    {
        scenario: "Monetary Crisis",
        probability: "25%",
        timeline: "6-18 months",
        description: "Dollar crisis, debt default, or banking emergency drives panic buying of hard assets.",
        silverPath: "$30 → $50 → $75 → $100+"
    },
    {
        scenario: "Industrial Supply Crunch",
        probability: "35%",
        timeline: "2-4 years",
        description: "Solar/EV demand outpaces supply, manufacturers bid up prices regardless of paper market.",
        silverPath: "$30 → $40 → $60 → $80 → $100"
    },
    {
        scenario: "Gold Ratio Reversion",
        probability: "30%",
        timeline: "3-5 years",
        description: "Gold hits $4,000+, ratio falls from 80:1 to 40:1, silver mechanically reaches $100.",
        silverPath: "Tied to gold's rise"
    },
    {
        scenario: "Hyperinflation",
        probability: "10%",
        timeline: "5-10 years",
        description: "Extended high inflation erodes dollar value, silver rises nominally but not in real terms.",
        silverPath: "Gradual, inflation-driven"
    },
];

const expertPredictions100 = [
    { expert: "Peter Schiff", firm: "Euro Pacific Capital", target: "$100+", timeline: "This cycle", rationale: "Dollar collapse will drive silver to triple digits." },
    { expert: "Mike Maloney", firm: "GoldSilver.com", target: "$100-$500", timeline: "Within 5 years", rationale: "Greatest wealth transfer in history; silver will lead." },
    { expert: "Keith Neumeyer", firm: "First Majestic Silver", target: "$130", timeline: "This bull market", rationale: "Silver is the most undervalued asset on Earth." },
    { expert: "David Morgan", firm: "The Morgan Report", target: "$100", timeline: "By 2030", rationale: "Supply deficits + solar demand = triple-digit silver." },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "When Will Silver Hit $100? Complete Analysis",
            "description": "Analysis of when and how silver could reach $100 per ounce.",
            "image": "https://www.richdadretirement.com/images/silver-100.jpg",
            "author": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.richdadretirement.com/logo.png"
                }
            },
            "datePublished": "2026-01-15",
            "dateModified": "2026-01-27"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Will silver ever hit $100 an ounce?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Many experts believe $100 silver is not only possible but likely in the coming years. Silver's 1980 high adjusted for inflation would be over $180 today. At the historical 15:1 gold/silver ratio with gold at $2,600, silver would be $173. Key catalysts could include a monetary crisis, industrial supply shortage, or ratio reversion."
                    }
                },
                {
                    "@type": "Question",
                    "name": "When will silver hit $100?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Timeline estimates vary: aggressive scenarios see $100 silver by 2026-2027 in a monetary crisis, base case scenarios project 2028-2030 as supply deficits worsen and industrial demand grows, conservative estimates put it at 2030 or beyond. The timing depends largely on Fed policy, dollar strength, and whether physical supply constraints force price discovery."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What would cause silver to hit $100?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Potential catalysts for $100 silver include: 1) A monetary crisis or dollar collapse driving safe-haven buying, 2) Industrial supply crunch from solar/EV demand, 3) Gold rising to $4,000+ with ratio compression, 4) Physical delivery demands breaking the paper manipulation, 5) Hyperinflation eroding dollar purchasing power."
                    }
                }
            ]
        }
    ]
};

export default function WillSilverHit100Page() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />

            {/* Header */}
            <header className="bg-slate-50 backdrop-blur-sm py-16 border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <Link href="/silver-price" className="text-gray-400 hover:text-slate-600 text-sm font-medium mb-4 inline-flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Silver Price Hub
                        </Link>
                        <span className="text-slate-600 text-sm block mb-4">80 monthly searches</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            When Will Silver Hit $100? The Road to Triple Digits
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            $100 silver sounds extreme—until you realize it would still be below the <strong className="text-slate-900">inflation-adjusted 1980 high</strong>. Here&apos;s what it would take, when it could happen, and why some experts think it&apos;s inevitable.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="max-w-4xl mx-auto">
                    <article className="prose prose-lg prose-invert prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* The $100 Question */}
                        <section className="scroll-mt-32">
                            <h2>Is $100 Silver Really Possible?</h2>
                            <p className="lead">
                                <strong>&quot;When will silver hit $100?&quot;</strong> It&apos;s a question that gets laughed off by mainstream financial media. But is it really that far-fetched?
                            </p>
                            <p>
                                Let&apos;s put $100 silver in context:
                            </p>
                            <ul>
                                <li><strong>1980 high inflation-adjusted:</strong> $49.45 in 1980 = $180+ today</li>
                                <li><strong>Historical gold/silver ratio:</strong> At 15:1 with gold at $2,600 = $173 silver</li>
                                <li><strong>Money supply growth:</strong> M2 has grown 10x since 1980; silver has not</li>
                            </ul>
                            <p>
                                By these measures, <strong>$100 silver isn&apos;t extreme—it&apos;s actually conservative</strong>. The real question isn&apos;t whether silver can hit $100, but what catalyst will get it there and when.
                            </p>

                            <Callout type="tip" title="Rich Dad Insight">
                                &quot;People think $100 silver is fantasy because they measure silver in dying dollars. Measure silver in terms of money supply growth, and it&apos;s cheaper than it&apos;s been in 100 years. $100 is just silver returning to historical norms.&quot;
                            </Callout>
                        </section>

                        {/* What the Math Says */}
                        <section className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-700">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">The Math Behind $100 Silver</h2>
                            </div>

                            <div className="bg-slate-50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 not-prose my-8">
                                <h4 className="font-bold text-slate-900 text-lg mb-4">Multiple Paths to $100 Silver</h4>
                                <div className="space-y-4">
                                    <div className="p-4 bg-slate-50 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-slate-600 font-medium">Path 1: Inflation Adjustment</span>
                                            <span className="text-green-700 font-bold">$180+</span>
                                        </div>
                                        <p className="text-xs text-slate-600">1980 high of $49.45 adjusted for CPI inflation = $180+. $100 is 55% of that.</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-slate-600 font-medium">Path 2: Gold/Silver Ratio to 25:1</span>
                                            <span className="text-green-700 font-bold">$104</span>
                                        </div>
                                        <p className="text-xs text-slate-600">With gold at $2,600, ratio falling from 80:1 to 25:1 = $104 silver.</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-slate-600 font-medium">Path 3: Gold at $4,000, Ratio 40:1</span>
                                            <span className="text-green-700 font-bold">$100</span>
                                        </div>
                                        <p className="text-xs text-slate-600">Gold rises to $4,000 (up 50%), ratio compresses to 40:1 = $100 silver.</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-slate-600 font-medium">Path 4: M2 Money Supply Adjustment</span>
                                            <span className="text-green-700 font-bold">$400+</span>
                                        </div>
                                        <p className="text-xs text-slate-600">1980 high adjusted for money supply growth = $400+. $100 is only 25% of that.</p>
                                    </div>
                                </div>
                            </div>

                            <p>
                                The math is clear: <strong>$100 silver is not only possible but historically justified</strong>. The only question is what breaks the current price suppression and when.
                            </p>
                        </section>

                        {/* Scenarios */}
                        <section className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-[#B22234]/20 rounded-lg text-[#B22234]">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">Scenarios for $100 Silver</h2>
                            </div>
                            <p>
                                Silver doesn&apos;t just drift to $100. It requires a catalyst. Here are the most likely scenarios:
                            </p>

                            <div className="not-prose my-8 space-y-6">
                                {scenariosFor100.map((scenario, idx) => (
                                    <div key={idx} className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                            <h4 className="font-bold text-slate-900 text-lg">{scenario.scenario}</h4>
                                            <div className="flex items-center gap-4">
                                                <div className="text-center">
                                                    <div className="text-xs text-slate-600">Probability</div>
                                                    <div className="font-bold text-[#B22234]">{scenario.probability}</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-xs text-slate-600">Timeline</div>
                                                    <div className="font-bold text-green-700">{scenario.timeline}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 text-sm mb-3">{scenario.description}</p>
                                        <div className="bg-slate-50 rounded-lg p-3">
                                            <span className="text-xs text-slate-600">Price Path: </span>
                                            <span className="text-sm text-slate-900 font-mono">{scenario.silverPath}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Expert Predictions */}
                        <section className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-700">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">Experts Who Predict $100+ Silver</h2>
                            </div>
                            <p>
                                These aren&apos;t random Reddit speculators. These are seasoned investors and industry leaders with decades of experience:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                {expertPredictions100.map((expert, idx) => (
                                    <div key={idx} className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-lg">{expert.expert}</h4>
                                                <p className="text-sm text-slate-600">{expert.firm}</p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-center px-4 py-2 bg-green-500/20 rounded-lg">
                                                    <div className="text-2xl font-bold text-green-700">{expert.target}</div>
                                                    <div className="text-xs text-slate-600">{expert.timeline}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <blockquote className="border-l-4 border-gray-500 pl-4 italic text-slate-600 text-sm">
                                            &quot;{expert.rationale}&quot;
                                        </blockquote>
                                    </div>
                                ))}
                            </div>

                            <Callout type="info" title="Note on Predictions">
                                These experts have been bullish on silver for years and have been wrong about timing before. However, their fundamental thesis—that silver is severely undervalued—remains intact, and many believe current conditions make their predictions more likely than ever.
                            </Callout>
                        </section>

                        {/* Timeline */}
                        <section className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-700">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">Timeline: When Could Silver Hit $100?</h2>
                            </div>

                            <div className="bg-slate-50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 not-prose my-8">
                                <h4 className="font-bold text-slate-900 text-lg mb-6">Silver to $100: Timeline Scenarios</h4>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-green-700">Aggressive: 2026-2027</span>
                                            <span className="text-sm text-slate-600">Requires crisis catalyst</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-3">
                                            <div className="bg-green-500 h-3 rounded-full" style={{ width: '30%' }}></div>
                                        </div>
                                        <p className="text-xs text-slate-600 mt-2">Probability: 15-20%. Requires monetary crisis, bank failures, or supply emergency.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-[#B22234]">Base Case: 2028-2030</span>
                                            <span className="text-sm text-slate-600">Steady grind higher</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-3">
                                            <div className="bg-[#B22234] h-3 rounded-full" style={{ width: '50%' }}></div>
                                        </div>
                                        <p className="text-xs text-slate-600 mt-2">Probability: 40-50%. Supply deficits worsen, industrial demand grows, gold rallies.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-slate-600">Conservative: 2030+</span>
                                            <span className="text-sm text-slate-600">Manipulation persists</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-3">
                                            <div className="bg-slate-500 h-3 rounded-full" style={{ width: '70%' }}></div>
                                        </div>
                                        <p className="text-xs text-slate-600 mt-2">Probability: 30-35%. Paper market suppression continues, gradual inflation-driven rise.</p>
                                    </div>
                                </div>
                            </div>

                            <p>
                                The timeline depends heavily on <strong>whether the physical market breaks free of paper price suppression</strong>. The declining COMEX inventories suggest we&apos;re moving toward that inflection point, but timing is the great unknown.
                            </p>
                        </section>

                        {/* What Needs to Happen */}
                        <section className="scroll-mt-32">
                            <h2>What Needs to Happen for $100 Silver</h2>
                            <p>
                                Silver won&apos;t reach $100 in a vacuum. Here are the catalysts that could drive it there:
                            </p>

                            <div className="not-prose my-8 grid md:grid-cols-2 gap-4">
                                <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/20">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Zap className="w-5 h-5 text-green-700" />
                                        <h4 className="font-bold text-green-700">Gold Breaks $4,000</h4>
                                    </div>
                                    <p className="text-sm text-slate-600">Silver follows gold. If gold rises 50% to $4,000, silver at even 40:1 ratio would be $100.</p>
                                </div>
                                <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/20">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Zap className="w-5 h-5 text-green-700" />
                                        <h4 className="font-bold text-green-700">Industrial Supply Crisis</h4>
                                    </div>
                                    <p className="text-sm text-slate-600">If solar/EV makers can&apos;t get silver, they&apos;ll pay any price. Physical scarcity trumps paper shorts.</p>
                                </div>
                                <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/20">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Zap className="w-5 h-5 text-green-700" />
                                        <h4 className="font-bold text-green-700">Dollar Crisis</h4>
                                    </div>
                                    <p className="text-sm text-slate-600">A loss of confidence in the dollar would drive panic buying of hard assets. Silver is the &quot;poor man&apos;s gold.&quot;</p>
                                </div>
                                <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/20">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Zap className="w-5 h-5 text-green-700" />
                                        <h4 className="font-bold text-green-700">COMEX Delivery Failure</h4>
                                    </div>
                                    <p className="text-sm text-slate-600">If COMEX can&apos;t deliver physical metal, the paper price becomes irrelevant. Physical sets the price.</p>
                                </div>
                            </div>
                        </section>

                        {/* Risks */}
                        <section className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-700">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">Why $100 Silver Might NOT Happen</h2>
                            </div>
                            <p>
                                To be balanced, here are the counterarguments:
                            </p>
                            <ul>
                                <li><strong>Manipulation persists:</strong> Large banks have successfully capped silver rallies for decades. They could continue.</li>
                                <li><strong>Fed fights inflation:</strong> Aggressive Fed tightening could prevent the monetary conditions needed for $100 silver.</li>
                                <li><strong>Solar technology evolves:</strong> New panels could use less silver, reducing industrial demand growth (unlikely near-term).</li>
                                <li><strong>Recession destroys demand:</strong> A severe depression could crater industrial demand, overwhelming safe-haven buying.</li>
                                <li><strong>Substitution:</strong> At high enough prices, some industrial applications could switch to alternatives.</li>
                            </ul>

                            <Callout type="warning" title="Risk Acknowledgment">
                                $100 silver is not guaranteed. The manipulation that has kept prices suppressed could continue for years. However, the physical market is tightening, and manipulation becomes harder as inventories decline. Position sizing matters—only invest what you can afford to hold through volatility.
                            </Callout>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-slate-900 text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">Position Yourself for the Potential</h3>
                                <p className="mb-6 text-gray-200">If silver reaches $100, you&apos;ll want to have been positioned at $30. Find the right precious metals company for your situation.</p>
                                <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                                    <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <section className="scroll-mt-32">
                            <h2>When Will Silver Hit $100: FAQ</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Will silver ever hit $100 an ounce?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-gray-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Many experts believe $100 silver is not only possible but likely. Silver&apos;s 1980 high adjusted for inflation would be over $180 today. At the historical 15:1 gold/silver ratio with gold at $2,600, silver would be $173. Analysts like Peter Schiff, Mike Maloney, and Keith Neumeyer all predict triple-digit silver this cycle. The key question is timing, not possibility.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">When will silver hit $100?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-gray-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Timelines vary by scenario: Aggressive (15-20% probability): 2026-2027, requiring a monetary crisis or supply emergency. Base case (40-50% probability): 2028-2030, as supply deficits worsen and gold rallies. Conservative (30-35% probability): 2030+, if manipulation persists and rise is inflation-driven. The timing depends on whether physical supply constraints force price discovery.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">What would cause silver to hit $100?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-gray-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Key catalysts for $100 silver include: 1) A monetary crisis or dollar collapse driving safe-haven buying, 2) Industrial supply crunch as solar/EV demand outpaces production, 3) Gold rising to $4,000+ with ratio compression from 80:1 toward 40:1, 4) COMEX delivery failure exposing the paper/physical disconnect, 5) Extended hyperinflation eroding dollar purchasing power. Most scenarios require multiple catalysts aligning.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">How much would I make if silver hits $100?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-gray-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        If silver rises from ~$32 to $100, that&apos;s a 212% gain (3.1x your money). A $10,000 investment would become $31,200. A $50,000 investment would become $156,000. In a Silver IRA, these gains would be tax-deferred (Traditional) or tax-free (Roth). However, remember that silver is volatile—it could drop significantly before reaching higher levels.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-slate-900 relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-slate-900">The Asymmetric Opportunity</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">If silver stays at $30, you haven&apos;t lost much. If it hits $100, you&apos;ve tripled your money. That&apos;s an asymmetric bet worth considering.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="xl" asChild>
                                        <Link href="/quiz">Find Your Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-slate-900 hover:bg-slate-100">
                                        <Link href="/silver-price/will-silver-hit-50">Will Silver Hit $50 First?</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>

            {/* CTA Section */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA variant="footer" trackSource="will-silver-hit-100" />
                </Container>
            </section>
        </main>
    );
}
