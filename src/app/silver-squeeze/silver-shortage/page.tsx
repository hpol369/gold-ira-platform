import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, AlertTriangle, TrendingDown, Sun, Cpu, Car, Factory, BarChart3, Package, Lock, Coins } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Silver Shortage 2026: Why Physical Silver Is Disappearing",
    description: "Evidence of the 2026 silver shortage. Industrial demand from solar and EVs, declining mine output, and investment demand are creating a perfect storm for physical silver.",
    keywords: ["silver shortage", "physical silver shortage", "silver shortage 2026", "silver supply deficit", "silver industrial demand", "silver solar panels", "comex silver drain"],
    openGraph: {
        title: "Silver Shortage 2026: Why Physical Silver Is Disappearing",
        description: "The evidence is mounting: physical silver is disappearing. Industrial demand, investment buying, and declining supply are creating an unprecedented shortage.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Silver Shortage 2026" }],
    },
};

const tocItems = [
    { id: "shortage-evidence", label: "Shortage Evidence" },
    { id: "industrial-demand", label: "Industrial Demand Surge" },
    { id: "investment-demand", label: "Investment Demand" },
    { id: "supply-constraints", label: "Mining Supply Issues" },
    { id: "price-implications", label: "Price Implications" },
    { id: "secure-silver", label: "How to Secure Silver" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Silver Shortage 2026: Why Physical Silver Is Disappearing",
    "description": "Comprehensive analysis of the 2026 silver shortage. Industrial demand from solar panels and EVs, declining mine supply, and investment buying are depleting physical silver inventory.",
    "image": "https://www.richdadretirement.com/images/silver-shortage.jpg",
    "datePublished": "2024-03-01",
    "dateModified": "2026-01-27",
    "author": {
        "@type": "Person",
        "name": "Thomas Richardson",
        "jobTitle": "Retirement Investment Specialist",
        "description": "30+ years experience in retirement planning and precious metals investing"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.richdadretirement.com/logo.png"
        }
    },
    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is there really a silver shortage in 2026?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The silver market has been in a supply deficit since 2021, with demand exceeding mine production by hundreds of millions of ounces. COMEX registered inventory has declined significantly, and physical premiums remain elevated above spot prices."
                }
            },
            {
                "@type": "Question",
                "name": "Why is silver in short supply?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Three factors: 1) Industrial demand has surged due to solar panels, EVs, and electronics; 2) Investment demand has increased as investors seek hard assets; 3) Mining supply has stagnated with few new major silver mines coming online."
                }
            },
            {
                "@type": "Question",
                "name": "How much silver do solar panels use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A typical solar panel uses approximately 20 grams of silver. With solar installation growing at 25%+ annually, the solar industry alone could consume the majority of global silver production within the next decade."
                }
            },
            {
                "@type": "Question",
                "name": "What happens when silver runs out?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unlike gold (which is hoarded), silver is consumed in industrial applications and often uneconomical to recycle. If physical shortages become severe, prices would need to rise dramatically to incentivize more mining and recycling, potentially triggering supply rationing."
                }
            }
        ]
    }
};

export default function SilverShortagePage() {
    return (
        <main className="min-h-screen bg-slate-900">
            <SchemaScript schema={schema} />
            <Navbar />
            {/* Header */}
            <header className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-400 mb-6 border border-red-500/20">
                            <AlertTriangle className="w-4 h-4" />
                            Supply Crisis Escalating
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                            Silver Shortage 2026: Why Physical Silver Is Disappearing
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                            The numbers don&apos;t lie. Industrial demand is exploding. Investment buying is accelerating. Mine supply is flat. Physical silver is being drained from vaults faster than it can be replaced. Here&apos;s the evidence—and what it means for prices.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar (TOC) */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Main Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-400 prose-a:text-secondary max-w-none">

                        {/* Intro Content */}
                        <p className="lead text-xl text-slate-400">
                            The global silver market has experienced consecutive years of supply deficits. What was once dismissed as a temporary imbalance is now looking increasingly permanent—and the implications for silver prices could be dramatic.
                        </p>

                        <p>
                            This isn&apos;t speculation. The Silver Institute&apos;s World Silver Survey documents a structural deficit where demand consistently exceeds mine production by hundreds of millions of ounces annually. The difference has been made up by drawing down above-ground inventories—but those inventories are finite, and they&apos;re shrinking fast.
                        </p>

                        <Callout type="warning" title="The Deficit Is Growing">
                            According to industry data, the silver market experienced its largest deficit in decades in recent years, with demand exceeding supply by approximately 200+ million ounces annually. This gap is being filled by depleting existing stockpiles—a trend that cannot continue indefinitely.
                        </Callout>

                        {/* Section 1: Evidence */}
                        <section id="shortage-evidence" className="scroll-mt-32">
                            <h2 className="text-white">Current Silver Shortage Evidence</h2>
                            <p>
                                The <strong>physical silver shortage</strong> isn&apos;t a prediction—it&apos;s happening now. Here are the key indicators:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <TrendingDown className="w-8 h-8 text-red-400 mb-4" />
                                    <h4 className="font-bold text-white text-lg mb-2">COMEX Inventory Drain</h4>
                                    <p className="text-sm text-slate-400">COMEX registered silver (available for delivery) has declined dramatically from peak levels. The drain accelerated after the 2021 silver squeeze movement began.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                    <BarChart3 className="w-8 h-8 text-amber-400 mb-4" />
                                    <h4 className="font-bold text-white text-lg mb-2">Elevated Physical Premiums</h4>
                                    <p className="text-sm text-slate-400">Physical silver consistently trades 15-30% above spot price. In a well-supplied market, premiums are typically 3-5%. The gap indicates physical scarcity.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-orange-500/10 border border-orange-500/20">
                                    <Package className="w-8 h-8 text-orange-400 mb-4" />
                                    <h4 className="font-bold text-white text-lg mb-2">Dealer Sellouts</h4>
                                    <p className="text-sm text-slate-400">Major dealers regularly report being sold out of popular products. Wait times for silver Eagles and other coins have extended to weeks or months during demand surges.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
                                    <Factory className="w-8 h-8 text-purple-400 mb-4" />
                                    <h4 className="font-bold text-white text-lg mb-2">Mint Rationing</h4>
                                    <p className="text-sm text-slate-400">The US Mint has implemented allocation programs for Silver Eagles, limiting how many dealers can purchase. This is a direct admission of insufficient supply.</p>
                                </div>
                            </div>

                            <h3 className="text-white">The Numbers Tell the Story</h3>
                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Metric</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Status</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Trend</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Annual Supply/Demand</td>
                                            <td className="p-4 text-red-400 font-semibold">Deficit 200M+ oz</td>
                                            <td className="p-4">Deficit growing</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">COMEX Registered Silver</td>
                                            <td className="p-4 text-red-400 font-semibold">Multi-year lows</td>
                                            <td className="p-4">Declining</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Physical Premiums</td>
                                            <td className="p-4 text-amber-400 font-semibold">15-30% over spot</td>
                                            <td className="p-4">Elevated</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">Industrial Demand</td>
                                            <td className="p-4 text-green-400 font-semibold">Record highs</td>
                                            <td className="p-4">Accelerating</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Mine Production</td>
                                            <td className="p-4 text-slate-400">Flat</td>
                                            <td className="p-4">Stagnant</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 2: Industrial Demand */}
                        <section id="industrial-demand" className="scroll-mt-32">
                            <h2 className="text-white">Industrial Demand Surge: Solar, EVs, and Electronics</h2>
                            <p>
                                Silver isn&apos;t just a precious metal—it&apos;s an essential industrial commodity. And demand from green energy and technology is exploding at a rate that&apos;s outpacing new supply.
                            </p>

                            <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
                                    <Sun className="w-5 h-5 text-amber-400" />
                                    Silver&apos;s Critical Industrial Applications
                                </h4>

                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
                                            <Sun className="w-6 h-6 text-amber-400" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-white mb-1">Solar Panels</h5>
                                            <p className="text-slate-400 text-sm">Each solar panel contains approximately 20 grams of silver paste for electrical contacts. With solar installations growing 25%+ annually, the industry is projected to consume 150-200 million ounces per year by decade&apos;s end—potentially 20%+ of total production.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                                            <Car className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-white mb-1">Electric Vehicles</h5>
                                            <p className="text-slate-400 text-sm">EVs use approximately 1-2 ounces of silver per vehicle—significantly more than traditional cars. As EV adoption accelerates toward 50%+ of new car sales, automotive silver demand could double or triple.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                                            <Cpu className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-white mb-1">Electronics &amp; 5G</h5>
                                            <p className="text-slate-400 text-sm">Silver&apos;s superior conductivity makes it essential for smartphones, computers, servers, and 5G infrastructure. The digital economy runs on silver.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-white mb-1">Medical &amp; Antimicrobial</h5>
                                            <p className="text-slate-400 text-sm">Silver&apos;s antimicrobial properties are used in wound care, medical devices, and hospital surfaces. Post-pandemic, this application continues growing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Callout type="tip" title="The Solar Mega-Trend">
                                Solar panel installations are growing exponentially as countries race to meet clean energy goals. The IEA projects solar capacity to triple by 2030. Even if silver content per panel decreases through technological advances, total silver demand from solar will likely multiply several times over.
                            </Callout>

                            <h3 className="text-white">Silver Gets Consumed, Not Hoarded</h3>
                            <p>
                                Unlike gold (where 90%+ of all gold ever mined still exists), silver is consumed in industrial applications. Most electronics containing silver end up in landfills, where recovery is uneconomical. Solar panels have 25-30 year lifespans before recycling. This means:
                            </p>
                            <ul>
                                <li>Industrial silver is essentially gone forever</li>
                                <li>Above-ground silver stockpiles are shrinking</li>
                                <li>New supply must come from mining (which is flat)</li>
                                <li>Higher prices may be needed to incentivize more recycling</li>
                            </ul>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose border border-slate-400/20">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Secure Your Silver Position</h3>
                                <p className="mb-6 text-gray-300">Find out which precious metals company offers the best silver selection and pricing.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Take the Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Section 3: Investment Demand */}
                        <section id="investment-demand" className="scroll-mt-32">
                            <h2 className="text-white">Investment Demand Surge</h2>
                            <p>
                                On top of record industrial demand, investment demand for silver has exploded. The <Link href="/silver-squeeze">silver squeeze movement</Link> awakened millions of retail investors to silver&apos;s potential—and they&apos;re accumulating physical metal at unprecedented rates.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                                    <div className="text-4xl font-bold text-white mb-2">200K+</div>
                                    <div className="text-slate-400 text-sm">WallStreetSilver Reddit members stacking silver</div>
                                </div>
                                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                                    <div className="text-4xl font-bold text-amber-400 mb-2">Record</div>
                                    <div className="text-slate-400 text-sm">Silver Eagle sales at US Mint (allocation limits in place)</div>
                                </div>
                                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                                    <div className="text-4xl font-bold text-green-400 mb-2">Global</div>
                                    <div className="text-slate-400 text-sm">India silver imports at all-time highs</div>
                                </div>
                            </div>

                            <h3 className="text-white">Why Investors Are Turning to Silver</h3>
                            <ul>
                                <li><strong>Inflation hedge:</strong> With inflation persistent, hard assets like silver preserve purchasing power</li>
                                <li><strong>Undervalued vs gold:</strong> The gold-to-silver ratio suggests silver is historically cheap</li>
                                <li><strong>Bank manipulation thesis:</strong> Investors believe silver is artificially suppressed</li>
                                <li><strong>Green energy story:</strong> Industrial demand creates a secular bull case</li>
                                <li><strong>Affordability:</strong> At ~$30/oz, regular people can accumulate meaningful positions</li>
                            </ul>
                        </section>

                        {/* Section 4: Supply Constraints */}
                        <section id="supply-constraints" className="scroll-mt-32">
                            <h2 className="text-white">Mining Supply Constraints</h2>
                            <p>
                                While demand is surging, silver supply has barely budged. Global silver mine production has been essentially flat for the past decade, and there are fundamental reasons why this won&apos;t change quickly.
                            </p>

                            <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">Why Silver Supply Can&apos;t Easily Increase</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="text-white font-semibold">Byproduct Mining:</span>
                                            <span className="text-slate-300"> 70% of silver comes as a byproduct from copper, zinc, and lead mining. You can&apos;t just &quot;mine more silver&quot;—you have to mine more base metals.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="text-white font-semibold">Long Lead Times:</span>
                                            <span className="text-slate-300"> New mines take 10-15 years from discovery to production. Even with higher prices, supply response is years away.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="text-white font-semibold">Declining Ore Grades:</span>
                                            <span className="text-slate-300"> The easy silver has been found. Remaining deposits are lower grade, requiring more energy and processing per ounce.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="text-white font-semibold">ESG/Permitting Issues:</span>
                                            <span className="text-slate-300"> Environmental regulations make new mining projects increasingly difficult to permit, especially in developed countries.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="text-white font-semibold">Underinvestment:</span>
                                            <span className="text-slate-300"> Years of low silver prices discouraged exploration. There&apos;s a pipeline shortage of new projects ready to develop.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <p>
                                The bottom line: <strong>supply is inelastic</strong>. Even if silver prices doubled tomorrow, it would take years for significant new supply to reach the market. In the meantime, existing inventories continue to be drawn down.
                            </p>
                        </section>

                        {/* Section 5: Price Implications */}
                        <section id="price-implications" className="scroll-mt-32">
                            <h2 className="text-white">What This Means for Silver Prices</h2>
                            <p>
                                Simple economics: when demand exceeds supply and inventories are depleting, prices must eventually rise to restore equilibrium. The question isn&apos;t <em>if</em> silver prices will respond to the shortage—it&apos;s <em>when</em> and <em>how much</em>.
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Scenario</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Price Implication</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Probability</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Status Quo</td>
                                            <td className="p-4">Gradual rise to $40-50 as deficits persist</td>
                                            <td className="p-4 text-amber-400">Moderate</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">Industrial Demand Surge</td>
                                            <td className="p-4">$50-75 as solar/EV demand accelerates</td>
                                            <td className="p-4 text-amber-400">Moderate-High</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Investment Mania + Shortage</td>
                                            <td className="p-4">$75-100+ (2011-style spike)</td>
                                            <td className="p-4 text-green-400">Possible</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">Paper Market Break</td>
                                            <td className="p-4">$100-150+ if COMEX can&apos;t deliver</td>
                                            <td className="p-4 text-slate-400">Lower (but growing)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Callout type="tip" title="The Asymmetric Opportunity">
                                Silver&apos;s downside is limited—industrial demand creates a floor. But the upside in a shortage scenario could be multiples of current prices. This asymmetric risk/reward profile is why so many investors are accumulating physical silver.
                            </Callout>
                        </section>

                        {/* Section 6: How to Secure Silver */}
                        <section id="secure-silver" className="scroll-mt-32">
                            <h2 className="text-white">How to Secure Physical Silver Before Shortages Worsen</h2>
                            <p>
                                If you believe a <strong>physical silver shortage</strong> will drive prices significantly higher, the time to act is before the shortage becomes acute. Here&apos;s how to position yourself:
                            </p>

                            <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                                    <Lock className="w-5 h-5 text-amber-400" />
                                    Strategies for Securing Silver
                                </h4>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">1</div>
                                        <div>
                                            <strong className="text-white">Silver IRA</strong>
                                            <p className="text-slate-400 text-sm mt-1">Roll over existing retirement funds into physical silver with tax advantages. See our <Link href="/guide/silver-ira-guide" className="text-secondary hover:underline">Silver IRA Guide</Link>.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">2</div>
                                        <div>
                                            <strong className="text-white">Physical Stacking</strong>
                                            <p className="text-slate-400 text-sm mt-1">Buy silver coins and bars for home storage or private vaulting. See our <Link href="/silver-squeeze/silver-stacking-guide" className="text-secondary hover:underline">Silver Stacking Guide</Link>.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">3</div>
                                        <div>
                                            <strong className="text-white">PSLV</strong>
                                            <p className="text-slate-400 text-sm mt-1">Sprott Physical Silver Trust holds allocated silver. Unlike SLV, Sprott actually takes delivery and drains COMEX inventory.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">4</div>
                                        <div>
                                            <strong className="text-white">Dollar-Cost Average</strong>
                                            <p className="text-slate-400 text-sm mt-1">Buy regularly rather than all at once. This reduces timing risk and ensures you accumulate during dips.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-white">Avoid Paper Silver</h3>
                            <p>
                                In a true shortage, paper silver (like SLV) may not track physical prices. These products don&apos;t take delivery from COMEX—they&apos;re part of the problem, not the solution. Stick with:
                            </p>
                            <ul>
                                <li>Physical coins and bars in your possession</li>
                                <li>Allocated silver in an IRA depository</li>
                                <li>PSLV (physically-backed, takes delivery)</li>
                            </ul>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2 className="text-white">Silver Shortage FAQs</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Is there really a silver shortage in 2026?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Yes. The silver market has been in a supply deficit since 2021, with demand exceeding mine production by hundreds of millions of ounces annually. COMEX registered inventory has declined significantly, and physical premiums remain elevated 15-30% above spot prices—a clear indicator of physical scarcity.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Why is silver in short supply?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Three factors are driving the shortage: 1) Industrial demand has surged due to solar panels, EVs, and electronics—each growing at double-digit rates; 2) Investment demand has increased as millions of retail investors accumulate physical silver; 3) Mining supply has stagnated with few new major silver mines coming online and long lead times for new projects.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">How much silver do solar panels use?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        A typical solar panel uses approximately 20 grams of silver in its electrical contacts. With solar installation growing at 25%+ annually, the solar industry alone is projected to consume 150-200 million ounces per year by decade&apos;s end. Some projections suggest solar could eventually consume the majority of global silver production.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What happens when silver runs out?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Unlike gold (which is hoarded and recycled), silver is consumed in industrial applications and often uneconomical to recycle at current prices. If physical shortages become severe, prices would need to rise dramatically to: 1) incentivize more mining, 2) make recycling economical, and 3) reduce demand through substitution. In extreme scenarios, industrial users might face supply rationing or allocation.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white relative overflow-hidden not-prose border border-slate-400/20">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Secure Silver Before the Shortage Worsens</h3>
                                <p className="mb-6 text-gray-300 max-w-xl mx-auto">Physical silver is disappearing from vaults. Position yourself with a Silver IRA before premiums rise further.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Find the Right Company <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/silver-squeeze">Silver Squeeze Overview</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>

            {/* CTA Section */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <AugustaCTA variant="footer" linkContext="silver" trackSource="silver-shortage" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
