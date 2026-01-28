import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { Metadata } from "next";
import { TrendingUp, ArrowRight, Calendar, DollarSign, AlertTriangle, Zap } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Silver All-Time High: $49.45 in 1980 | History & Future Analysis",
    description: "Silver's all-time high was $49.45 in January 1980 (Hunt Brothers). The 2011 high was $48.70. Learn what caused these spikes and if silver could break $50 again.",
    keywords: "silver all time high, silver highest price ever, silver price 1980, silver price history, silver record high",
};

const takeaways = [
    "Silver's all-time high was $49.45 on January 18, 1980 during the Hunt Brothers' corner.",
    "The 2011 high was $48.70, driven by QE and the financial crisis aftermath.",
    "Adjusted for inflation, the 1980 high would be over $180 in today's dollars.",
    "Both spikes were caused by a combination of monetary crisis + supply squeeze.",
    "Current conditions (deficits, industrial demand, debt crisis) mirror past setups.",
    "Silver would need to rise ~50% from current levels to challenge the all-time high.",
    "Many analysts believe a new all-time high is not a matter of 'if' but 'when'."
];

const silverHighs = [
    { date: "January 18, 1980", price: "$49.45", inflationAdjusted: "$180+", cause: "Hunt Brothers silver corner", duration: "Peak lasted 1 day" },
    { date: "April 25, 2011", price: "$48.70", inflationAdjusted: "$68", cause: "Post-2008 QE, debt ceiling crisis", duration: "Sustained for weeks" },
    { date: "August 2020", price: "$29.26", inflationAdjusted: "$36", cause: "COVID stimulus, Reddit squeeze attempt", duration: "Brief spike" },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Silver All-Time High: $49.45 in 1980 | Complete History",
            "description": "Silver's all-time high was $49.45 in January 1980. Learn what caused historical silver spikes and if it could happen again.",
            "image": "https://www.richdadretirement.com/images/silver-all-time-high.jpg",
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
                    "name": "What is silver's all-time high price?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Silver's all-time high was $49.45 per ounce on January 18, 1980, during the Hunt Brothers' attempt to corner the silver market. Adjusted for inflation, this would be equivalent to over $180 per ounce in today's dollars."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What was silver's highest price in 2011?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Silver reached $48.70 on April 25, 2011, driven by the aftermath of the 2008 financial crisis, Federal Reserve quantitative easing (QE), and the US debt ceiling crisis. This was the highest silver price in 31 years."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Could silver reach a new all-time high?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Many analysts believe silver could reach new all-time highs due to: structural supply deficits, growing industrial demand from solar panels and EVs, potential monetary crises, and the historically high gold/silver ratio. Some predict $50-100+ silver in the coming years."
                    }
                }
            ]
        }
    ]
};

export default function SilverAllTimeHighPage() {
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
                        <span className="text-slate-600 text-sm block mb-4">400 monthly searches</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Silver All-Time High: The $49.45 Record That Still Stands
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            On January 18, 1980, silver hit <strong className="text-slate-900">$49.45 per ounce</strong>—a record that has stood for over 45 years. What caused that epic spike? And could it happen again?
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="max-w-4xl mx-auto">
                    <article className="prose prose-lg prose-invert prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* Historical Highs Table */}
                        <section className="scroll-mt-32">
                            <h2>Silver&apos;s Historic Price Highs</h2>
                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Date</th>
                                            <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Price</th>
                                            <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Inflation-Adjusted</th>
                                            <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Cause</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 text-sm">
                                        {silverHighs.map((high, idx) => (
                                            <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-100' : ''}>
                                                <td className="p-4 text-slate-900 font-medium">{high.date}</td>
                                                <td className="p-4 text-green-400 font-bold text-lg">{high.price}</td>
                                                <td className="p-4 text-[#B22234]">{high.inflationAdjusted}</td>
                                                <td className="p-4 text-slate-600">{high.cause}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 1980 Story */}
                        <section className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-[#B22234]/20 rounded-lg text-[#B22234]">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">1980: The Hunt Brothers Silver Corner</h2>
                            </div>
                            <p>
                                The story of <strong>silver&apos;s all-time high</strong> is one of the most dramatic episodes in commodities history. It involves Texas oil billionaires, market manipulation, and a spectacular crash that nearly destroyed Wall Street.
                            </p>

                            <h3>Who Were the Hunt Brothers?</h3>
                            <p>
                                Nelson Bunker Hunt and William Herbert Hunt were sons of Texas oil tycoon H.L. Hunt. In the early 1970s, they became convinced that the US dollar was headed for collapse after Nixon closed the gold window in 1971, ending dollar convertibility to gold.
                            </p>
                            <p>
                                Their solution? Buy as much silver as they could get their hands on. They believed silver was severely undervalued and would protect their wealth from dollar debasement. Sound familiar?
                            </p>

                            <h3>The Silver Accumulation</h3>
                            <p>
                                Starting in 1973, the Hunts began quietly accumulating silver. By 1979, they controlled an estimated <strong>100-200 million ounces</strong>—roughly half of the world&apos;s deliverable supply.
                            </p>
                            <p>
                                As they bought more, prices rose. And as prices rose, more speculators piled in. Silver went from $6 in early 1979 to $49.45 by January 1980—an <strong>8x gain in about a year</strong>.
                            </p>

                            <div className="bg-slate-50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 not-prose my-8">
                                <h4 className="font-bold text-slate-900 text-lg mb-4">Silver&apos;s 1979-1980 Price Explosion</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">January 1979</span>
                                        <span className="text-slate-900 font-bold">$6.00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">July 1979</span>
                                        <span className="text-slate-900 font-bold">$9.00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">October 1979</span>
                                        <span className="text-[#B22234] font-bold">$17.00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">December 1979</span>
                                        <span className="text-[#B22234] font-bold">$34.00</span>
                                    </div>
                                    <div className="flex justify-between items-center border-t border-slate-200 pt-3">
                                        <span className="text-slate-600">January 18, 1980</span>
                                        <span className="text-green-400 font-bold text-xl">$49.45 (ALL-TIME HIGH)</span>
                                    </div>
                                </div>
                            </div>

                            <h3>The Crash: &quot;Silver Thursday&quot;</h3>
                            <p>
                                The COMEX exchange, alarmed by the Hunt&apos;s dominance, changed the rules. On January 7, 1980, they announced that traders could only liquidate existing contracts, not open new positions. This killed buying pressure.
                            </p>
                            <p>
                                Silver began to fall. On March 27, 1980—<strong>&quot;Silver Thursday&quot;</strong>—the price crashed 50% in a single day, from $21.62 to $10.80. The Hunts faced margin calls they couldn&apos;t meet and nearly caused the collapse of several major brokerage firms.
                            </p>

                            <Callout type="warning" title="The Lesson">
                                The 1980 crash shows what happens when exchanges change the rules to protect short sellers. Many silver investors believe similar manipulation continues today through massive paper shorts on COMEX. The Hunts were right about the dollar—they were just stopped by rule changes before their thesis could play out.
                            </Callout>
                        </section>

                        {/* 2011 Story */}
                        <section className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">2011: The Post-Crisis Rally</h2>
                            </div>
                            <p>
                                Silver&apos;s second major run came in 2010-2011, in the aftermath of the 2008 financial crisis. Unlike 1980, this rally was driven by broad investor participation, not a small group of buyers.
                            </p>

                            <h3>What Drove the 2011 Rally?</h3>
                            <ul>
                                <li><strong>Quantitative Easing (QE):</strong> The Fed was printing trillions, fueling fears of inflation and dollar debasement.</li>
                                <li><strong>Debt Ceiling Crisis:</strong> The US government nearly defaulted, shaking confidence in the dollar.</li>
                                <li><strong>Eurozone Crisis:</strong> Greece, Italy, and Spain were on the brink, driving safe-haven demand.</li>
                                <li><strong>Physical Buying:</strong> Retail investors were lining up at coin shops to buy silver.</li>
                                <li><strong>Industrial Demand:</strong> Post-recession recovery boosted industrial silver consumption.</li>
                            </ul>

                            <p>
                                Silver rose from $17 in August 2010 to <strong>$48.70 on April 25, 2011</strong>—just $0.75 shy of the 1980 all-time high. Then it crashed, falling to $26 by September 2011 after margin requirements were raised and selling accelerated.
                            </p>

                            <div className="bg-slate-50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 not-prose my-8">
                                <h4 className="font-bold text-slate-900 text-lg mb-4">2010-2011 Rally vs 2024-2026?</h4>
                                <div className="grid md:grid-cols-2 gap-6 text-sm">
                                    <div>
                                        <h5 className="font-bold text-[#B22234] mb-2">2010-2011 Conditions</h5>
                                        <ul className="space-y-1 text-slate-600">
                                            <li>Fed QE (trillions printed)</li>
                                            <li>US debt ceiling crisis</li>
                                            <li>Eurozone debt fears</li>
                                            <li>Gold at all-time highs</li>
                                            <li>Retail buying frenzy</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-green-400 mb-2">2024-2026 Conditions</h5>
                                        <ul className="space-y-1 text-slate-600">
                                            <li>$35T+ national debt</li>
                                            <li>De-dollarization accelerating</li>
                                            <li>Supply deficits growing</li>
                                            <li>Gold at all-time highs</li>
                                            <li>Industrial demand surging</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Inflation Adjusted */}
                        <section className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">Inflation-Adjusted All-Time High</h2>
                            </div>
                            <p>
                                Here&apos;s what most people miss: <strong>silver hasn&apos;t come close to its inflation-adjusted high</strong>. That $49.45 in 1980 is equivalent to over $180 in today&apos;s purchasing power.
                            </p>
                            <p>
                                In other words, for silver to reach its &quot;real&quot; all-time high in today&apos;s dollars, it would need to rise <strong>5-6x from current levels</strong>. That&apos;s the magnitude of the opportunity some investors see.
                            </p>

                            <div className="bg-gradient-to-r from-[#B22234]/10 to-green-500/10 rounded-2xl p-6 border border-amber-500/20 not-prose my-8">
                                <h4 className="font-bold text-slate-900 text-lg mb-4">What Silver Prices &quot;Should Be&quot; If They Kept Pace</h4>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-600">1980 High Adjusted for CPI Inflation</span>
                                            <span className="text-green-400 font-bold">$180+</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-3">
                                            <div className="bg-green-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-600">1980 High Adjusted for M2 Money Supply</span>
                                            <span className="text-[#B22234] font-bold">$400+</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-3">
                                            <div className="bg-[#B22234] h-3 rounded-full" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-600">Current Silver Price</span>
                                            <span className="text-gray-400 font-bold">~$32</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-3">
                                            <div className="bg-gray-500 h-3 rounded-full" style={{ width: '18%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-600 mt-4">If silver matched its 1980 high in terms of money supply growth (M2), it would be over $400/oz today.</p>
                            </div>

                            <Callout type="tip" title="Rich Dad Insight">
                                &quot;They tell you silver is expensive at $30. But adjust for all the money they&apos;ve printed, and silver is cheaper than it was in 1980. The only thing that&apos;s expensive is the dollar—and it&apos;s getting cheaper every day.&quot;
                            </Callout>
                        </section>

                        {/* Could It Happen Again? */}
                        <section className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">Could Silver Hit a New All-Time High?</h2>
                            </div>
                            <p>
                                The million-dollar question: <strong>can silver break $50 and set a new record?</strong> Many analysts believe not only is it possible—it&apos;s likely. Here&apos;s why:
                            </p>

                            <h3>Reasons Silver Could Break $50</h3>
                            <ul>
                                <li><strong>Supply deficits are structural:</strong> Unlike 1980 or 2011, today&apos;s deficits are driven by growing industrial demand, not speculation. Solar alone could consume 30% of supply by 2030.</li>
                                <li><strong>No new supply coming:</strong> It takes 10-15 years to bring a mine online. There are no major projects in the pipeline.</li>
                                <li><strong>COMEX inventories depleted:</strong> Registered COMEX silver has dropped from 150M oz to under 30M oz. Physical tightness is real.</li>
                                <li><strong>Debt crisis brewing:</strong> The US debt is $35+ trillion and growing. Any loss of confidence could trigger a rush to hard assets.</li>
                                <li><strong>Gold leading the way:</strong> Gold has already broken to new all-time highs. Silver typically follows with a lag—and greater percentage gains.</li>
                            </ul>

                            <h3>Reasons It Might Take Longer</h3>
                            <ul>
                                <li><strong>Paper manipulation:</strong> Large banks hold massive short positions on COMEX that have historically capped rallies.</li>
                                <li><strong>Fed policy:</strong> If the Fed keeps rates elevated, it suppresses precious metals demand.</li>
                                <li><strong>Recession risk:</strong> A severe recession could crush industrial demand short-term.</li>
                            </ul>

                            <div className="bg-slate-50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 not-prose my-8">
                                <h4 className="font-bold text-slate-900 text-lg mb-4">Timeline Scenarios for New All-Time High</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-green-400 font-bold w-24">Aggressive</span>
                                        <div className="flex-1 bg-green-500/20 rounded-full h-8 relative">
                                            <div className="absolute inset-y-0 left-0 w-1/3 bg-green-500 rounded-full"></div>
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-900">2026-2027</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-[#B22234] font-bold w-24">Base Case</span>
                                        <div className="flex-1 bg-[#B22234]/20 rounded-full h-8 relative">
                                            <div className="absolute inset-y-0 left-0 w-1/2 bg-[#B22234] rounded-full"></div>
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-900">2027-2029</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-slate-600 font-bold w-24">Conservative</span>
                                        <div className="flex-1 bg-[#B22234]/10 rounded-full h-8 relative">
                                            <div className="absolute inset-y-0 left-0 w-2/3 bg-slate-500 rounded-full"></div>
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-900">2029-2032</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-slate-900 text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">Position Before the Breakout</h3>
                                <p className="mb-6 text-gray-200">If silver reaches a new all-time high, you&apos;ll want to already own it. Find the right precious metals company for your situation.</p>
                                <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                                    <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <section className="scroll-mt-32">
                            <h2>Silver All-Time High: FAQ</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">What is silver&apos;s all-time high price?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-gray-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Silver&apos;s all-time high was <strong>$49.45 per ounce</strong> on January 18, 1980. This was during the Hunt Brothers&apos; attempt to corner the silver market. The second-highest price was $48.70 on April 25, 2011. Adjusted for inflation, the 1980 high would be equivalent to over $180 in today&apos;s dollars.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">What caused the 1980 silver spike?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-gray-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        The 1980 spike was caused by the Hunt Brothers—Texas oil billionaires who accumulated an estimated 100-200 million ounces of silver (roughly half of world deliverable supply) because they believed the US dollar would collapse after Nixon ended dollar-gold convertibility. Their massive buying drove prices from $6 to $49.45 in about a year. The rally ended when COMEX changed the rules to allow only liquidation of contracts.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Could silver reach a new all-time high?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-gray-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Many analysts believe silver will eventually reach new all-time highs due to: structural supply deficits (6th consecutive year), exploding industrial demand from solar and EVs, depleting COMEX inventories, a potential monetary crisis with $35T+ in debt, and the fact that gold has already broken to new highs while silver lags. Some predict $50-100+ silver within the next 3-5 years.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">What would silver be worth adjusted for inflation?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-gray-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Adjusted for official CPI inflation, the 1980 high of $49.45 would be over $180 in today&apos;s dollars. If you adjust for M2 money supply growth (a more aggressive measure), the 1980 high would be equivalent to $400+ today. Current silver prices around $30-35 represent a small fraction of these inflation-adjusted highs.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-slate-900 relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-slate-900">Will You Be Ready When Silver Breaks Out?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">The 1980 and 2011 rallies made fortunes for those who were positioned early. Find out which precious metals company is right for you.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="xl" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-slate-900 hover:bg-slate-100">
                                        <Link href="/silver-price/will-silver-hit-100">Will Silver Hit $100?</Link>
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
                    <AugustaCTA variant="footer" trackSource="silver-all-time-high" />
                </Container>
            </section>
        </main>
    );
}
