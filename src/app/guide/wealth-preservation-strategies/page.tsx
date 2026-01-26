import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, ShieldCheck, Coins, Building2, Globe, Lock, TrendingUp, PieChart } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wealth Preservation Strategies: Protect Your Assets",
    description: "Learn proven wealth preservation strategies including asset protection, diversification, gold allocation, tax planning, and estate planning for lasting wealth.",
    openGraph: {
        title: "Wealth Preservation Strategies - 2026 Guide",
        description: "Proven strategies to protect and preserve wealth for generations.",
        type: "article",
    },
};

const tocItems = [
    { id: "overview", label: "The Preservation Mindset" },
    { id: "diversification", label: "1. True Diversification" },
    { id: "gold", label: "2. Precious Metals Allocation" },
    { id: "real-assets", label: "3. Real Asset Ownership" },
    { id: "tax-planning", label: "4. Tax-Efficient Planning" },
    { id: "asset-protection", label: "5. Asset Protection" },
    { id: "inflation", label: "6. Inflation Defense" },
    { id: "estate", label: "7. Estate Planning" },
    { id: "insurance", label: "8. Risk Insurance" },
    { id: "framework", label: "Building Your Framework" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "HowTo",
            "name": "Wealth Preservation Strategies",
            "description": "Comprehensive guide to protecting and preserving wealth",
            "step": [
                {
                    "@type": "HowToStep",
                    "name": "Implement True Diversification",
                    "text": "Diversify across asset classes, geographies, and currencies"
                },
                {
                    "@type": "HowToStep",
                    "name": "Allocate to Precious Metals",
                    "text": "Hold 10-20% in physical gold and silver for crisis protection"
                },
                {
                    "@type": "HowToStep",
                    "name": "Own Real Assets",
                    "text": "Invest in tangible assets like real estate and farmland"
                },
                {
                    "@type": "HowToStep",
                    "name": "Plan for Taxes",
                    "text": "Use tax-advantaged accounts and efficient withdrawal strategies"
                },
                {
                    "@type": "HowToStep",
                    "name": "Protect Assets",
                    "text": "Implement legal structures for asset protection"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is wealth preservation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Wealth preservation is the practice of protecting accumulated wealth from erosion through market crashes, inflation, taxes, lawsuits, and estate transfer. Key strategies include diversification across asset classes, holding real assets like gold and real estate, tax-efficient planning, asset protection structures, and proper estate planning."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do wealthy families preserve wealth?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Wealthy families preserve wealth through: 1) Diversification across asset classes and geographies, 2) Significant allocation to real assets (real estate, gold, farmland), 3) Tax-efficient structures and planning, 4) Trusts and legal asset protection, 5) Multi-generational estate planning, 6) Focus on capital preservation over aggressive growth."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is gold good for wealth preservation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, gold is one of the oldest and most proven wealth preservation assets. It has maintained purchasing power for 5,000+ years, rises during crises, has no counterparty risk, and protects against currency devaluation. Most wealth preservation experts recommend 10-20% allocation to physical gold."
                    }
                }
            ]
        }
    ]
};

export default function WealthPreservationStrategiesPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-800/50 py-16 border-b border-white/10">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Comprehensive Guide
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Wealth Preservation Strategies
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Proven strategies to protect what you&apos;ve built from market crashes, inflation, taxes, and generational transfer.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-400 prose-a:text-secondary prose-strong:text-white prose-li:text-slate-400 prose-em:text-slate-300 max-w-none">

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead text-xl text-slate-400">
                                Building wealth is hard. Preserving it is harder. Studies show that 70% of wealthy families lose their wealth by the second generation, and 90% by the third.
                            </p>
                            <p>
                                The threats to wealth are numerous: market crashes, inflation, taxes, lawsuits, poor estate planning, and simple overspending. <strong className="text-white">Wealth preservation is about building defenses against all of these threats simultaneously.</strong>
                            </p>
                            <p>
                                This guide covers the essential strategies that wealthy families use to protect and grow their wealth across generations.
                            </p>

                            <Callout type="info" title="The Preservation Mindset">
                                Wealth builders focus on returns. Wealth preservers focus on risks. Once you&apos;ve built significant wealth, protecting the downside becomes more important than maximizing upside.
                            </Callout>
                        </section>

                        {/* 1. Diversification */}
                        <section id="diversification" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <PieChart className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">1. True Diversification</h2>
                            </div>
                            <p>
                                Most investors think they&apos;re diversified because they own different stocks. True wealth preservation requires diversification across:
                            </p>
                            <ul>
                                <li><strong className="text-white">Asset classes:</strong> Stocks, bonds, real estate, precious metals, private equity</li>
                                <li><strong className="text-white">Geographies:</strong> Domestic and international exposure</li>
                                <li><strong className="text-white">Currencies:</strong> Not just USD—exposure to other stable currencies</li>
                                <li><strong className="text-white">Time horizons:</strong> Short, medium, and long-term holdings</li>
                                <li><strong className="text-white">Counterparties:</strong> Different custodians, banks, and brokerages</li>
                            </ul>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">Wealth Preservation Allocation</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                                        <span className="text-slate-300">Stocks (Domestic & International)</span>
                                        <span className="font-semibold text-blue-400">30-40%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                                        <span className="text-slate-300">Bonds & Fixed Income</span>
                                        <span className="font-semibold text-green-400">20-30%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                                        <span className="text-slate-300">Real Estate</span>
                                        <span className="font-semibold text-purple-400">15-25%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                                        <span className="text-slate-300">Gold & Precious Metals</span>
                                        <span className="font-semibold text-amber-400">10-20%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                                        <span className="text-slate-300">Cash & Alternatives</span>
                                        <span className="font-semibold text-slate-400">5-15%</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 2. Precious Metals */}
                        <section id="gold" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">2. Precious Metals Allocation</h2>
                            </div>
                            <p>
                                Gold has been the ultimate wealth preservation asset for 5,000 years. Unlike stocks, bonds, or currencies, gold has never gone to zero—and it never will.
                            </p>

                            <h3 className="text-white">Why Gold for Wealth Preservation?</h3>
                            <ul>
                                <li><strong className="text-white">No counterparty risk:</strong> Physical gold doesn&apos;t depend on any company or government</li>
                                <li><strong className="text-white">Crisis performance:</strong> Rose 25% in 2008 while stocks fell 37%</li>
                                <li><strong className="text-white">Purchasing power:</strong> Maintains value across centuries</li>
                                <li><strong className="text-white">Privacy:</strong> Can be held privately outside the banking system</li>
                                <li><strong className="text-white">Universal value:</strong> Accepted and valued everywhere on Earth</li>
                            </ul>

                            <p>
                                A <Link href="/what-is-a-gold-ira">Gold IRA</Link> allows you to hold physical gold in a tax-advantaged retirement account—combining wealth preservation with tax efficiency.
                            </p>

                            <Callout type="tip" title="How Much Gold?">
                                Most wealth preservation experts recommend 10-20% of investable assets in physical precious metals. Ray Dalio, founder of the world&apos;s largest hedge fund, recommends 5-10% in gold for all portfolios.
                            </Callout>
                        </section>

                        {/* 3. Real Assets */}
                        <section id="real-assets" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">3. Real Asset Ownership</h2>
                            </div>
                            <p>
                                Real assets—tangible property with intrinsic value—are the foundation of generational wealth. Unlike financial assets that exist only on paper, real assets can&apos;t be printed, deleted, or inflated away.
                            </p>

                            <h3 className="text-white">Key Real Assets</h3>
                            <ul>
                                <li><strong className="text-white">Real estate:</strong> Income, appreciation, tax benefits, inflation hedge</li>
                                <li><strong className="text-white">Farmland:</strong> Food production, uncorrelated returns, limited supply</li>
                                <li><strong className="text-white">Physical gold/silver:</strong> Crisis hedge, portable wealth, privacy</li>
                                <li><strong className="text-white">Timber:</strong> Growing asset, inflation protection, tax benefits</li>
                                <li><strong className="text-white">Collectibles:</strong> Art, rare items (for sophisticated investors)</li>
                            </ul>

                            <p>
                                The key principle: <strong className="text-white">own things, not just paper claims on things</strong>. Physical ownership removes counterparty risk.
                            </p>
                        </section>

                        {/* 4. Tax Planning */}
                        <section id="tax-planning" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">4. Tax-Efficient Planning</h2>
                            </div>
                            <p>
                                Taxes are one of the biggest drains on wealth. Proper tax planning can save millions over a lifetime.
                            </p>

                            <h3 className="text-white">Key Strategies</h3>
                            <ul>
                                <li><strong className="text-white">Tax-advantaged accounts:</strong> Max out 401(k), IRA, Gold IRA, HSA contributions</li>
                                <li><strong className="text-white">Roth conversions:</strong> Pay taxes now at lower rates, withdraw tax-free later</li>
                                <li><strong className="text-white">Tax-loss harvesting:</strong> Offset gains with losses</li>
                                <li><strong className="text-white">Asset location:</strong> Hold tax-inefficient assets in tax-advantaged accounts</li>
                                <li><strong className="text-white">Long-term gains:</strong> Hold investments over a year for lower rates</li>
                                <li><strong className="text-white">Charitable giving:</strong> Donate appreciated assets, not cash</li>
                            </ul>
                        </section>

                        {/* 5. Asset Protection */}
                        <section id="asset-protection" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">5. Asset Protection</h2>
                            </div>
                            <p>
                                Asset protection shields wealth from lawsuits, creditors, and other legal threats. The key is implementing structures <em>before</em> any threat arises.
                            </p>

                            <h3 className="text-white">Protection Strategies</h3>
                            <ul>
                                <li><strong className="text-white">LLCs:</strong> Hold real estate and businesses in separate LLCs</li>
                                <li><strong className="text-white">Trusts:</strong> Irrevocable trusts can protect assets from creditors</li>
                                <li><strong className="text-white">Umbrella insurance:</strong> Additional liability coverage beyond standard policies</li>
                                <li><strong className="text-white">Retirement accounts:</strong> 401(k)s and IRAs have strong creditor protection</li>
                                <li><strong className="text-white">Homestead exemption:</strong> Protect primary residence (varies by state)</li>
                            </ul>

                            <Callout type="warning" title="Timing Matters">
                                Asset protection must be implemented before any legal threat arises. Transferring assets after a lawsuit is filed can be considered fraudulent conveyance.
                            </Callout>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Preserve Wealth With Gold</h3>
                                <p className="mb-6 text-gray-200">A Gold IRA combines wealth preservation with tax-advantaged retirement savings.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* 6. Inflation Defense */}
                        <section id="inflation" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">6. Inflation Defense</h2>
                            </div>
                            <p>
                                Inflation is the silent wealth destroyer. At 3% annual inflation, purchasing power halves every 24 years. The 2021-2023 inflation spike (7-9%) was a stark reminder of this risk.
                            </p>

                            <h3 className="text-white">Inflation Hedges</h3>
                            <ul>
                                <li><strong className="text-white">Gold:</strong> The ultimate inflation hedge—maintained purchasing power for millennia</li>
                                <li><strong className="text-white">Real estate:</strong> Rents and values rise with inflation</li>
                                <li><strong className="text-white">TIPS:</strong> Treasury bonds that adjust for inflation</li>
                                <li><strong className="text-white">Commodities:</strong> Physical goods that rise with prices</li>
                                <li><strong className="text-white">Stocks:</strong> Companies can raise prices (partial hedge)</li>
                            </ul>
                        </section>

                        {/* 7. Estate Planning */}
                        <section id="estate" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">7. Estate Planning</h2>
                            </div>
                            <p>
                                Estate planning ensures wealth transfers efficiently to the next generation—minimizing taxes and avoiding probate.
                            </p>

                            <h3 className="text-white">Essential Documents</h3>
                            <ul>
                                <li><strong className="text-white">Will:</strong> Basic distribution instructions</li>
                                <li><strong className="text-white">Revocable living trust:</strong> Avoid probate, maintain control</li>
                                <li><strong className="text-white">Power of attorney:</strong> Financial decision-making if incapacitated</li>
                                <li><strong className="text-white">Healthcare directive:</strong> Medical decision-making</li>
                                <li><strong className="text-white">Beneficiary designations:</strong> Keep these current on all accounts</li>
                            </ul>

                            <h3 className="text-white">Wealth Transfer Strategies</h3>
                            <ul>
                                <li><strong className="text-white">Annual gifting:</strong> $18,000 per person per year (2024) tax-free</li>
                                <li><strong className="text-white">529 plans:</strong> Education funding for heirs</li>
                                <li><strong className="text-white">Irrevocable life insurance trusts:</strong> Tax-free inheritance</li>
                                <li><strong className="text-white">Family limited partnerships:</strong> Business succession + valuation discounts</li>
                            </ul>
                        </section>

                        {/* 8. Insurance */}
                        <section id="insurance" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">8. Risk Insurance</h2>
                            </div>
                            <p>
                                Insurance transfers catastrophic risks to insurance companies, protecting wealth from unexpected disasters.
                            </p>

                            <h3 className="text-white">Essential Coverage</h3>
                            <ul>
                                <li><strong className="text-white">Umbrella liability:</strong> $2-5 million for high-net-worth individuals</li>
                                <li><strong className="text-white">Long-term care:</strong> Protect assets from nursing home costs</li>
                                <li><strong className="text-white">Disability:</strong> Protect income-earning ability</li>
                                <li><strong className="text-white">Life insurance:</strong> Estate liquidity and wealth transfer</li>
                                <li><strong className="text-white">Property insurance:</strong> Full replacement value on real estate</li>
                            </ul>
                        </section>

                        {/* Framework */}
                        <section id="framework" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Building Your Wealth Preservation Framework</h2>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">Wealth Preservation Checklist</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                                        <input type="checkbox" className="w-5 h-5 text-secondary" />
                                        <span className="text-slate-300">Diversified across 5+ asset classes</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                                        <input type="checkbox" className="w-5 h-5 text-secondary" />
                                        <span className="text-slate-300">10-20% in physical gold/precious metals</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                                        <input type="checkbox" className="w-5 h-5 text-secondary" />
                                        <span className="text-slate-300">Real estate and/or farmland ownership</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                                        <input type="checkbox" className="w-5 h-5 text-secondary" />
                                        <span className="text-slate-300">Tax-advantaged accounts maximized</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                                        <input type="checkbox" className="w-5 h-5 text-secondary" />
                                        <span className="text-slate-300">Asset protection structures in place</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                                        <input type="checkbox" className="w-5 h-5 text-secondary" />
                                        <span className="text-slate-300">Estate planning documents current</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                                        <input type="checkbox" className="w-5 h-5 text-secondary" />
                                        <span className="text-slate-300">Umbrella liability insurance ($2M+)</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2 className="text-white">Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What is wealth preservation?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Wealth preservation is protecting accumulated wealth from erosion through market crashes, inflation, taxes, lawsuits, and estate transfer. Key strategies include diversification, holding real assets like gold, tax-efficient planning, asset protection, and proper estate planning.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">How do wealthy families preserve wealth?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Wealthy families preserve wealth through: diversification across asset classes and geographies, significant allocation to real assets (real estate, gold, farmland), tax-efficient structures, trusts for asset protection, multi-generational estate planning, and focus on capital preservation over aggressive growth.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Is gold good for wealth preservation?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Yes, gold is one of the oldest and most proven wealth preservation assets. It has maintained purchasing power for 5,000+ years, rises during crises, has no counterparty risk, and protects against currency devaluation. Most experts recommend 10-20% allocation to physical gold via a <Link href="/what-is-a-gold-ira" className="text-secondary hover:underline">Gold IRA</Link>.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Start Your Wealth Preservation Journey</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Add physical gold to your wealth preservation strategy with a tax-advantaged Gold IRA.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/why-gold/physical-gold-vs-paper">Physical vs Paper Gold</Link>
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
                    <AugustaCTA variant="footer" trackSource="guide-wealth-preservation-strategies" />
                </Container>
            </section>
        </main>
    );
}
