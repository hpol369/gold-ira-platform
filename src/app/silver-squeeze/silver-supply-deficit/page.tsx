import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { TrendingUp, Factory, Zap, Sun, Car, ArrowRight, BarChart3, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Silver Supply Deficit: Why Demand Is Crushing Supply | 2026 Analysis",
    description: "Silver supply deficit analysis for 2026. Mining production vs industrial demand from solar, EVs, and electronics. Understand why silver faces structural shortage.",
    keywords: ["silver supply deficit", "silver demand vs supply", "silver shortage", "silver mining production", "silver industrial demand", "silver market analysis"],
    openGraph: {
        title: "Silver Supply Deficit: Why Demand Is Crushing Supply",
        description: "Deep analysis of silver supply deficit: mining trends, industrial demand explosion, and what it means for prices.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Silver Supply Deficit Analysis" }],
    },
};

const takeaways = [
    "Silver market has been in structural deficit since 2021, with demand exceeding supply by 100-200 million ounces annually.",
    "Industrial demand now accounts for over 54% of silver consumption, up from 40% a decade ago.",
    "Solar panel production alone is projected to consume 20%+ of annual silver supply by 2030.",
    "Global silver mining production has plateaued around 800 million ounces since 2016.",
    "Unlike gold, most silver gets consumed in industrial applications and is never recovered.",
    "Above-ground silver stockpiles have declined significantly as the deficit persists.",
    "The supply/demand imbalance suggests higher silver prices are mathematically inevitable."
];

const tocItems = [
    { id: "overview", label: "The Silver Deficit" },
    { id: "mining-production", label: "Mining Production Trends" },
    { id: "industrial-demand", label: "Industrial Demand Explosion" },
    { id: "solar-demand", label: "Solar Panel Impact" },
    { id: "ev-demand", label: "EV Revolution" },
    { id: "investment-demand", label: "Investment Demand" },
    { id: "price-implications", label: "Price Implications" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Silver Supply Deficit: Why Demand Is Crushing Supply",
            "description": "Comprehensive analysis of the silver supply deficit, examining mining production trends, industrial demand from solar and EVs, investment demand, and price implications.",
            "image": "https://richdadretirement.com/images/silver-supply-deficit.jpg",
            "author": {
                "@type": "Person",
                "name": "Thomas Richardson"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://richdadretirement.com/logo.png"
                }
            },
            "datePublished": "2026-01-27",
            "dateModified": "2026-01-27"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is there really a silver supply deficit?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, the silver market has been in structural deficit since 2021. According to the Silver Institute, annual demand has exceeded supply by 100-200 million ounces each year. This deficit is being met by drawing down above-ground stockpiles, which cannot continue indefinitely."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is silver demand increasing so rapidly?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Industrial demand for silver is surging due to solar panel production, electric vehicles, 5G infrastructure, and electronics. Solar alone is projected to consume over 20% of annual silver production by 2030. Unlike gold, silver is essential for green energy technology."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can silver mining increase to meet demand?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Silver mining production has been flat around 800 million ounces since 2016 despite higher prices. Most silver is mined as a byproduct of other metals (lead, zinc, copper), so production is tied to base metal demand. New primary silver mines take 10-15 years to develop."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What happens when silver stockpiles run out?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If the supply deficit continues and above-ground stockpiles deplete, the only mechanism to balance the market is higher prices. Higher prices incentivize more mining and recycling while reducing demand. This suggests significant price appreciation is likely."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does the silver deficit affect investors?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The structural supply deficit creates a bullish backdrop for silver investors. When demand consistently exceeds supply, prices must eventually rise. Investors can gain exposure through physical silver, Silver IRAs, or silver mining stocks."
                    }
                }
            ]
        }
    ]
};

export default function SilverSupplyDeficitPage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-50 backdrop-blur-sm py-16 border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-slate-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                            Silver Market Analysis
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Silver Supply Deficit: Why Demand Is Crushing Supply
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            The silver market is facing a structural crisis. Industrial demand is exploding while mining production stagnates. Here&apos;s what the data shows.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-invert prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead">
                                Something unprecedented is happening in the silver market. For four consecutive years, global silver demand has exceeded supply by <strong>100 to 200 million ounces annually</strong>. This isn&apos;t a temporary blip&mdash;it&apos;s a structural shift that could reshape the precious metals landscape.
                            </p>
                            <p>
                                The silver supply deficit is being driven by an explosion in industrial demand while mining production remains flat. Solar panels, electric vehicles, and electronics are consuming silver at record rates. Meanwhile, investment demand remains strong as investors seek hard assets.
                            </p>
                            <p>
                                In this analysis, we&apos;ll break down the supply and demand dynamics, examine why this deficit exists, and explore what it means for silver prices and investors.
                            </p>
                        </section>

                        {/* Mining Production Trends */}
                        <section id="mining-production" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-[#B22234]/10 rounded-lg text-slate-600">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">Mining Production: The Supply Ceiling</h2>
                            </div>
                            <p>
                                Global silver mining production has plateaued around <strong>800-830 million ounces annually</strong> since 2016. Despite silver prices more than doubling since then, mining output hasn&apos;t responded. Here&apos;s why:
                            </p>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 not-prose my-8">
                                <h4 className="font-bold text-slate-900 text-lg mb-4">Silver Production Breakdown</h4>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-600">Byproduct Mining (Lead, Zinc, Copper)</span>
                                            <span className="text-slate-900 font-bold">72%</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-3">
                                            <div className="bg-slate-400 h-3 rounded-full" style={{ width: '72%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-600">Primary Silver Mines</span>
                                            <span className="text-slate-900 font-bold">28%</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-3">
                                            <div className="bg-amber-400 h-3 rounded-full" style={{ width: '28%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 mt-4">Because most silver is mined as a byproduct, production depends on base metal demand, not silver prices.</p>
                            </div>

                            <ul>
                                <li><strong>Byproduct problem:</strong> 72% of silver comes from mining lead, zinc, and copper. Silver production is a side effect, not the goal.</li>
                                <li><strong>Long development cycles:</strong> New silver mines take 10-15 years from discovery to production.</li>
                                <li><strong>Declining ore grades:</strong> Average silver ore grades have dropped 50% in the past 15 years, requiring more processing for less metal.</li>
                                <li><strong>Political risk:</strong> Major silver deposits are in politically challenging regions like Mexico and Peru.</li>
                            </ul>

                            <Callout type="warning" title="Supply Inelasticity">
                                Even if silver prices doubled tomorrow, it would take a decade or more for significant new supply to come online. This supply inelasticity is a key reason why the deficit could persist for years.
                            </Callout>
                        </section>

                        {/* Industrial Demand */}
                        <section id="industrial-demand" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <Factory className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">Industrial Demand Explosion</h2>
                            </div>
                            <p>
                                Industrial demand for silver has grown from 40% of total demand a decade ago to over <strong>54% today</strong>. This isn&apos;t cyclical&mdash;it&apos;s structural growth driven by technology and green energy.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <Zap className="w-8 h-8 text-blue-400 mb-4" />
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Electronics</h4>
                                    <p className="text-sm text-slate-600">Silver is the best electrical conductor. Every smartphone, computer, and electronic device contains silver. 5G infrastructure requires substantial silver.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <Sun className="w-8 h-8 text-[#B22234] mb-4" />
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Solar Energy</h4>
                                    <p className="text-sm text-slate-600">Each solar panel contains 20 grams of silver. Global solar capacity is growing 20-25% annually, consuming ever more silver.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <Car className="w-8 h-8 text-green-400 mb-4" />
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Electric Vehicles</h4>
                                    <p className="text-sm text-slate-600">EVs use roughly 1.5-2 oz of silver each, nearly double traditional vehicles. EV production is scaling exponentially.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Medical & Industrial</h4>
                                    <p className="text-sm text-slate-600">Silver&apos;s antibacterial properties make it essential in medical devices. Industrial uses include brazing, soldering, and catalysts.</p>
                                </div>
                            </div>

                            <p>
                                Unlike gold, which mostly sits in vaults, <strong>silver gets consumed</strong>. When silver is used in a solar panel or smartphone, it&apos;s dispersed in tiny amounts that aren&apos;t economically recoverable. This consumption creates permanent demand.
                            </p>
                        </section>

                        {/* Solar Panel Impact */}
                        <section id="solar-demand" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-[#B22234]/20 rounded-lg text-[#B22234]">
                                    <Sun className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">Solar: The Demand Multiplier</h2>
                            </div>
                            <p>
                                Solar energy is the single biggest driver of silver&apos;s demand growth. Consider these numbers:
                            </p>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 not-prose my-8">
                                <h4 className="font-bold text-slate-900 text-lg mb-4">Silver in Solar: The Numbers</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                                        <div className="text-2xl font-bold text-[#B22234]">20g</div>
                                        <div className="text-xs text-slate-600">Silver per panel</div>
                                    </div>
                                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                                        <div className="text-2xl font-bold text-[#B22234]">200M oz</div>
                                        <div className="text-xs text-slate-600">2025 solar demand</div>
                                    </div>
                                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                                        <div className="text-2xl font-bold text-[#B22234]">20%+</div>
                                        <div className="text-xs text-slate-600">Of supply by 2030</div>
                                    </div>
                                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                                        <div className="text-2xl font-bold text-[#B22234]">3x</div>
                                        <div className="text-xs text-slate-600">Growth since 2020</div>
                                    </div>
                                </div>
                            </div>

                            <p>
                                Solar installations have grown from consuming 50 million ounces in 2014 to over 160 million ounces in 2024. By 2030, solar alone could consume 200+ million ounces annually&mdash;roughly 20-25% of total supply.
                            </p>
                            <p>
                                The green energy transition isn&apos;t optional. Governments worldwide have committed trillions of dollars to solar deployment. This creates <strong>guaranteed, growing demand</strong> for silver that didn&apos;t exist a decade ago.
                            </p>
                        </section>

                        {/* EV Demand */}
                        <section id="ev-demand" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <Car className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">Electric Vehicles: The Next Wave</h2>
                            </div>
                            <p>
                                Electric vehicles use nearly twice as much silver as traditional cars due to their complex electrical systems:
                            </p>
                            <ul>
                                <li><strong>Battery management systems:</strong> Require silver for electrical connections</li>
                                <li><strong>Motor controllers:</strong> Use silver contacts for reliability</li>
                                <li><strong>Charging infrastructure:</strong> Charging stations use silver contacts</li>
                                <li><strong>Autonomous driving sensors:</strong> LiDAR and radar systems contain silver</li>
                            </ul>
                            <p>
                                With EV sales projected to reach 45% of global car sales by 2030, automotive silver demand could triple from current levels. Combined with solar, this creates a demand growth trajectory that supply simply cannot match.
                            </p>

                            <Callout type="info" title="The Substitution Question">
                                Can manufacturers substitute silver with other materials? In most applications, no. Silver is the best electrical and thermal conductor. Where substitution is possible (like aluminum in solar), it reduces efficiency. As silver remains cheap relative to total manufacturing costs, substitution pressure is limited.
                            </Callout>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-white rounded-2xl p-8 text-slate-900 text-center relative overflow-hidden not-prose border border-slate-200">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">Position Your Retirement for the Silver Opportunity</h3>
                                <p className="mb-6 text-slate-600">Take our 60-second quiz to find the best Silver IRA company for your situation.</p>
                                <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                                    <Link href="/quiz">Get Your Free Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Investment Demand */}
                        <section id="investment-demand" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">Investment Demand: The Wild Card</h2>
                            </div>
                            <p>
                                Beyond industrial use, investment demand for silver remains robust. Investors buy silver through:
                            </p>
                            <ul>
                                <li><strong>Physical coins and bars:</strong> American Silver Eagles, Canadian Maple Leafs, 10 oz bars</li>
                                <li><strong>Silver IRAs:</strong> Tax-advantaged retirement accounts holding physical silver</li>
                                <li><strong>Silver ETFs:</strong> Paper claims on silver held in vaults (SLV, PSLV)</li>
                                <li><strong>Mining stocks:</strong> Equity in companies that produce silver</li>
                            </ul>
                            <p>
                                Investment demand is more volatile than industrial demand, but it tends to spike during periods of economic uncertainty, inflation, or currency concerns&mdash;exactly the conditions we&apos;re seeing today.
                            </p>
                            <p>
                                The combination of <strong>steady industrial demand growth</strong> and <strong>episodic investment spikes</strong> creates a demand profile that consistently exceeds what miners can produce.
                            </p>
                            <p>
                                Learn more in our comprehensive guide: <Link href="/learn/is-silver-a-good-investment">Is Silver a Good Investment?</Link>
                            </p>
                        </section>

                        {/* Price Implications */}
                        <section id="price-implications" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 m-0">Price Implications: What Happens Next?</h2>
                            </div>
                            <p>
                                When demand exceeds supply, markets must balance through one of three mechanisms:
                            </p>
                            <ol>
                                <li><strong>Drawing down stockpiles:</strong> This is happening now but is finite</li>
                                <li><strong>Increasing supply:</strong> Limited by geology and development timelines</li>
                                <li><strong>Reducing demand via higher prices:</strong> The inevitable outcome</li>
                            </ol>
                            <p>
                                The current deficit of 100-200 million ounces annually is being met by depleting above-ground silver stocks. But these inventories&mdash;including COMEX, LBMA, and ETF holdings&mdash;have been declining steadily.
                            </p>

                            <Callout type="tip" title="The Math Is Simple">
                                If demand exceeds supply and stockpiles are finite, the market must eventually balance through higher prices. This isn&apos;t speculation&mdash;it&apos;s arithmetic. The only question is timing.
                            </Callout>

                            <p>
                                Historical precedent suggests that commodity supply deficits eventually lead to dramatic price moves. The longer the deficit persists, the more violent the eventual rebalancing tends to be.
                            </p>
                            <p>
                                Explore related analysis: <Link href="/silver-squeeze/comex-silver-inventory">COMEX Silver Inventory Tracking</Link> and <Link href="/silver-squeeze/silver-undervalued">Is Silver Undervalued?</Link>
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Is there really a silver supply deficit?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-600 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Yes, the silver market has been in structural deficit since 2021. According to the Silver Institute, annual demand has exceeded supply by 100-200 million ounces each year. This deficit is being met by drawing down above-ground stockpiles, which cannot continue indefinitely.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Why is silver demand increasing so rapidly?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-600 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Industrial demand for silver is surging due to solar panel production, electric vehicles, 5G infrastructure, and electronics. Solar alone is projected to consume over 20% of annual silver production by 2030. Unlike gold, silver is essential for green energy technology.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Can silver mining increase to meet demand?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-600 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Silver mining production has been flat around 800 million ounces since 2016 despite higher prices. Most silver is mined as a byproduct of other metals (lead, zinc, copper), so production is tied to base metal demand. New primary silver mines take 10-15 years to develop.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">What happens when silver stockpiles run out?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-600 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        If the supply deficit continues and above-ground stockpiles deplete, the only mechanism to balance the market is higher prices. Higher prices incentivize more mining and recycling while reducing demand. This suggests significant price appreciation is likely.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">How does the silver deficit affect investors?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-600 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        The structural supply deficit creates a bullish backdrop for silver investors. When demand consistently exceeds supply, prices must eventually rise. Investors can gain exposure through physical silver, Silver IRAs, or silver mining stocks.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-white rounded-2xl p-8 text-slate-900 relative overflow-hidden not-prose border border-slate-200">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-slate-900">Ready to Add Silver to Your Retirement?</h3>
                                <p className="mb-6 text-slate-600 max-w-xl mx-auto">The supply deficit suggests significant upside potential. Find a Silver IRA company that fits your needs.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="xl" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-slate-900 hover:bg-slate-100">
                                        <Link href="/silver-squeeze/comex-silver-inventory">Track COMEX Inventory</Link>
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
                    <AugustaCTA variant="footer" trackSource="silver-squeeze-supply-deficit" />
                </Container>
            </section>
        </main>
    );
}
