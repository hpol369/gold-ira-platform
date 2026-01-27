import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, AlertTriangle, DollarSign, Building2, Lock, Scale, Coins } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Silver IRA Guide 2026: How to Invest in Silver for Retirement",
    description: "Silver IRA guide for 2026. Learn how to open a silver IRA, IRS-approved coins and bars, rollover rules, fees, and top companies.",
    keywords: ["silver ira", "silver ira guide", "ira approved silver", "silver ira rollover", "silver ira companies", "invest in silver ira"],
    openGraph: {
        title: "Silver IRA Guide 2026: How to Invest in Silver for Retirement",
        description: "Complete silver IRA guide. Learn IRS rules, approved silver products, fees, and how to roll over your 401k into physical silver.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const tocItems = [
    { id: "what-is-silver-ira", label: "What is a Silver IRA?" },
    { id: "silver-vs-gold", label: "Silver vs. Gold IRA" },
    { id: "benefits", label: "Silver IRA Benefits" },
    { id: "how-to-open", label: "How to Open a Silver IRA" },
    { id: "approved-silver", label: "IRS-Approved Silver" },
    { id: "fees", label: "Silver IRA Fees" },
    { id: "risks", label: "Risks to Consider" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Silver IRA Guide 2026: How to Invest in Silver for Retirement",
    "description": "Complete silver IRA guide for 2026. Learn how to open a silver IRA, IRS-approved silver coins & bars, 401k rollover rules, fees, and which companies offer the best silver IRAs.",
    "image": "https://www.richdadretirement.com/images/silver-ira-guide.jpg",
    "datePublished": "2024-01-15",
    "dateModified": "2026-01-25",
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
                "name": "Can I hold both gold and silver in the same IRA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Most precious metals IRAs hold a combination of gold and silver. This is the most common approach."
                }
            },
            {
                "@type": "Question",
                "name": "What is the minimum investment for a silver IRA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Minimums vary. Noble Gold accepts as little as $2,000 for silver IRAs, making it very accessible."
                }
            },
            {
                "@type": "Question",
                "name": "Is silver better than gold for an IRA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Neither is universally better. Silver offers higher growth potential due to volatility and industrial demand, while gold provides more stability."
                }
            },
            {
                "@type": "Question",
                "name": "Can I rollover my 401(k) into a silver IRA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can roll over funds from a 401(k), 403(b), or traditional IRA into a silver IRA tax-free and penalty-free."
                }
            }
        ]
    }
};

export default function SilverIraGuidePage() {
    return (
        <main className="min-h-screen bg-slate-900">
            <SchemaScript schema={schema} />
            <Navbar />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-6 border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            Updated for 2026 Tax Rules
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                            Silver IRA Guide 2026: How to Invest in Silver for Retirement
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                            Everything you need to know about diversifying your retirement with physical silver—the &quot;poor man&apos;s gold&quot; that may offer superior returns.
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
                            While gold gets most of the attention, smart investors know that <strong>silver</strong> offers unique advantages that gold simply can&apos;t match. This comprehensive <strong>silver IRA guide</strong> will show you how to add physical silver to your retirement portfolio—and why the current gold-to-silver ratio suggests silver may be dramatically undervalued.
                        </p>

                        <p>
                            A <strong>silver IRA</strong> works exactly like a <Link href="/guide/gold-ira-guide">gold IRA</Link>—it&apos;s a self-directed retirement account that holds physical precious metals instead of paper assets. The difference? Silver&apos;s industrial demand, lower price point, and historical volatility create opportunities for potentially higher returns.
                        </p>

                        <Callout type="tip" title="Rich Dad Insight">
                            &quot;Silver is both a precious metal AND an industrial metal. When the economy grows, industrial demand drives silver higher. When the economy struggles, investment demand drives it higher. Silver wins either way.&quot;
                        </Callout>

                        {/* Section 1: What is a Silver IRA */}
                        <section id="what-is-silver-ira" className="scroll-mt-32">
                            <h2 className="text-white">What is a Silver IRA?</h2>
                            <p>
                                A <strong>Silver IRA (Individual Retirement Account)</strong> is a self-directed IRA that allows you to invest in physical silver bullion and coins within a tax-advantaged retirement account. It operates under the same IRS rules as a gold IRA.
                            </p>
                            <p>
                                The key distinction: <strong>you own actual physical silver bars and coins</strong>—not silver ETFs, mining stocks, or paper derivatives. Your silver is stored in an IRS-approved depository, fully insured, and held in your name.
                            </p>
                            <p>
                                Silver IRAs became possible under the Taxpayer Relief Act of 1997, the same legislation that opened the door for gold IRAs. Since then, silver has outperformed gold in several major bull markets, making it an attractive option for investors seeking both protection and growth potential.
                            </p>

                            <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">Key Facts About Silver IRAs:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300">Same tax benefits as gold IRAs and traditional/Roth IRAs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300">Silver must meet 99.9% purity requirement (0.999 fine)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300">Lower entry point than gold—buy more ounces for your dollar</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300">Can combine gold and silver in the same IRA</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300">Higher volatility = higher potential returns (and risks)</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 2: Silver vs Gold */}
                        <section id="silver-vs-gold" className="scroll-mt-32">
                            <h2 className="text-white">Silver IRA vs. Gold IRA: Key Differences</h2>
                            <p>
                                Understanding the differences between <strong>silver and gold IRAs</strong> helps you decide the right allocation for your portfolio. Both offer protection against inflation and currency debasement, but they behave differently.
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Factor</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Silver IRA</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Gold IRA</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Price Per Ounce</td>
                                            <td className="p-4">~$25-35</td>
                                            <td className="p-4">~$2,000-2,500</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">Volatility</td>
                                            <td className="p-4">Higher (more opportunity, more risk)</td>
                                            <td className="p-4">Lower (more stable)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Industrial Demand</td>
                                            <td className="p-4">~50% of demand (solar, electronics)</td>
                                            <td className="p-4">~10% of demand</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">Storage Space</td>
                                            <td className="p-4">Requires more (same $ = more weight)</td>
                                            <td className="p-4">More compact</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Storage Costs</td>
                                            <td className="p-4">Higher per dollar invested</td>
                                            <td className="p-4">Lower per dollar invested</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">Growth Potential</td>
                                            <td className="p-4">Higher in bull markets</td>
                                            <td className="p-4">More moderate but consistent</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-white">The Gold-to-Silver Ratio: Why Silver May Be Undervalued</h3>
                            <p>
                                The gold-to-silver ratio measures how many ounces of silver it takes to buy one ounce of gold. Historically, this ratio averaged around 15:1 to 20:1. Today, it often exceeds 80:1—meaning silver is relatively cheap compared to gold by historical standards.
                            </p>
                            <p>
                                When this ratio contracts (returns toward historical norms), silver dramatically outperforms gold. During the 2010-2011 precious metals bull market, silver rose over 400% while gold rose about 70%.
                            </p>

                            <p>
                                For a detailed comparison, see our <Link href="/compare/gold-vs-silver-ira">Gold vs. Silver IRA comparison</Link>.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Find the Best Silver IRA Company</h3>
                                <p className="mb-6 text-gray-200">Take our 60-second quiz to discover which precious metals company is the best fit for your silver IRA.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find My Perfect Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Section 3: Benefits */}
                        <section id="benefits" className="scroll-mt-32">
                            <h2 className="text-white">Silver IRA Benefits: Why Add Silver to Your Portfolio</h2>
                            <p>
                                The <strong>benefits of a silver IRA</strong> extend beyond simple diversification. Here&apos;s why sophisticated investors include silver in their retirement portfolios:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <TrendingUp className="w-8 h-8 text-secondary mb-4" />
                                    <h4 className="font-bold text-white text-lg mb-2">Higher Growth Potential</h4>
                                    <p className="text-sm text-slate-400">Silver&apos;s smaller market and higher volatility mean bigger percentage gains in bull markets. From 2008-2011, silver rose over 400% vs. gold&apos;s 166%.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <DollarSign className="w-8 h-8 text-secondary mb-4" />
                                    <h4 className="font-bold text-white text-lg mb-2">Lower Entry Point</h4>
                                    <p className="text-sm text-slate-400">At ~$30/oz vs. $2,000+/oz for gold, silver allows smaller investors to accumulate meaningful positions. You can own 60+ ounces of silver for the price of one ounce of gold.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <Building2 className="w-8 h-8 text-secondary mb-4" />
                                    <h4 className="font-bold text-white text-lg mb-2">Industrial Demand</h4>
                                    <p className="text-sm text-slate-400">Silver is essential for solar panels, electronics, medical devices, and EVs. As the green energy transition accelerates, industrial silver demand is projected to surge.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <ShieldCheck className="w-8 h-8 text-secondary mb-4" />
                                    <h4 className="font-bold text-white text-lg mb-2">Inflation Protection</h4>
                                    <p className="text-sm text-slate-400">Like gold, silver protects against currency debasement. As governments print money, hard assets like silver maintain purchasing power.</p>
                                </div>
                            </div>

                            <h3 className="text-white">Silver&apos;s Dual Role: Investment AND Industrial Metal</h3>
                            <p>
                                Unlike gold, which is primarily held as a store of value, silver has significant industrial applications. Over 50% of annual silver demand comes from industrial use:
                            </p>
                            <ul>
                                <li><strong>Solar panels:</strong> Each panel requires about 20 grams of silver</li>
                                <li><strong>Electronics:</strong> Silver&apos;s conductivity makes it essential for smartphones, computers, and EVs</li>
                                <li><strong>Medical applications:</strong> Silver&apos;s antimicrobial properties are used in wound care and medical devices</li>
                                <li><strong>5G infrastructure:</strong> The 5G rollout requires massive amounts of silver</li>
                            </ul>
                            <p>
                                This industrial demand creates a &quot;floor&quot; under silver prices while investment demand provides upside during economic uncertainty.
                            </p>
                        </section>

                        <Callout type="warning" title="Storage Considerations">
                            Because silver is less valuable per ounce than gold, the same dollar amount requires significantly more storage space. A $50,000 silver investment weighs roughly 100 lbs vs. about 1 lb for gold. This can result in higher storage fees. Factor this into your allocation decision.
                        </Callout>

                        {/* Section 4: How to Open */}
                        <section id="how-to-open" className="scroll-mt-32">
                            <h2 className="text-white">How to Open a Silver IRA</h2>
                            <p>
                                Opening a <strong>silver IRA</strong> follows the same process as a gold IRA. In fact, most investors hold both metals in the same self-directed IRA:
                            </p>

                            <div className="not-prose my-8">
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">Choose a Precious Metals Company</h4>
                                            <p className="text-slate-400 mt-1">Select a reputable dealer that specializes in silver IRAs. <Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link> is known for competitive silver pricing, while <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta Precious Metals</Link> offers excellent education on silver investing.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">Open a Self-Directed IRA</h4>
                                            <p className="text-slate-400 mt-1">Your dealer coordinates with an IRS-approved custodian to establish your account. This process typically takes a few days and requires standard identification documents.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">Fund Your Account</h4>
                                            <p className="text-slate-400 mt-1">Roll over funds from an existing 401(k), 403(b), TSP, or IRA—completely tax-free. Or make a direct contribution up to annual limits ($7,000 in 2026, $8,000 if 50+).</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">4</div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">Select Your Silver Products</h4>
                                            <p className="text-slate-400 mt-1">Choose from IRS-approved silver bars and coins. Popular options include American Silver Eagles, Canadian Silver Maple Leafs, and silver bars from approved refiners.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">5</div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">Secure Storage</h4>
                                            <p className="text-slate-400 mt-1">Your silver ships directly to an IRS-approved depository where it&apos;s stored, insured, and held in your name until you take a distribution.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Approved Silver */}
                        <section id="approved-silver" className="scroll-mt-32">
                            <h2 className="text-white">IRS-Approved Silver for IRAs</h2>
                            <p>
                                Not all silver qualifies for an IRA. The IRS requires silver to be at least <strong>99.9% pure (0.999 fine)</strong>. Here are the most popular <strong>IRS-approved silver</strong> products:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Product</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Purity</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Premium</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">American Silver Eagle</td>
                                            <td className="p-4">99.9%</td>
                                            <td className="p-4">Higher</td>
                                            <td className="p-4">Recognition, liquidity</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">Canadian Silver Maple Leaf</td>
                                            <td className="p-4">99.99%</td>
                                            <td className="p-4">Moderate</td>
                                            <td className="p-4">Highest purity, good value</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Austrian Silver Philharmonic</td>
                                            <td className="p-4">99.9%</td>
                                            <td className="p-4">Moderate</td>
                                            <td className="p-4">European recognition</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">Silver Britannia</td>
                                            <td className="p-4">99.9%</td>
                                            <td className="p-4">Moderate</td>
                                            <td className="p-4">UK recognition, security features</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Silver Bars (Various)</td>
                                            <td className="p-4">99.9%</td>
                                            <td className="p-4">Lowest</td>
                                            <td className="p-4">Maximum silver per dollar</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <strong>Pro Tip:</strong> Silver bars typically carry lower premiums over spot price than coins, giving you more silver per dollar. However, coins like the American Silver Eagle offer better liquidity and recognition. Most advisors recommend a mix of both.
                            </p>
                        </section>

                        {/* Section 6: Fees */}
                        <section id="fees" className="scroll-mt-32">
                            <h2 className="text-white">Silver IRA Fees</h2>
                            <p>
                                <strong>Silver IRA fees</strong> are similar to gold IRA fees, with one important difference: storage costs may be higher because the same dollar amount of silver takes up significantly more space.
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Fee Type</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Typical Range</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Setup Fee</td>
                                            <td className="p-4">$50 - $150</td>
                                            <td className="p-4">One-time account opening fee</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Annual Custodian Fee</td>
                                            <td className="p-4">$75 - $300</td>
                                            <td className="p-4">Administrative and IRS reporting</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Storage Fee</td>
                                            <td className="p-4">$125 - $350/year</td>
                                            <td className="p-4">May be higher than gold due to volume</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Dealer Premium</td>
                                            <td className="p-4">3% - 15%</td>
                                            <td className="p-4">Over spot price; varies by product</td>
                                        </tr>
                                        <tr className="bg-secondary/10">
                                            <td className="p-4 font-bold text-white">Total First Year</td>
                                            <td className="p-4 font-bold text-white">$250 - $800+</td>
                                            <td className="p-4 font-medium text-secondary">Plus dealer premium on silver</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Callout type="tip" title="Fee-Saving Strategy">
                                Consider a mix of gold and silver in your IRA. Gold&apos;s higher value-to-weight ratio reduces storage costs, while silver provides growth potential. A 60/40 or 70/30 gold/silver split balances fees with opportunity.
                            </Callout>

                            <p>
                                For complete fee breakdowns by company, see our <Link href="/guide/gold-ira-fees">Gold IRA fees guide</Link>.
                            </p>
                        </section>

                        {/* Section 7: Risks */}
                        <section id="risks" className="scroll-mt-32">
                            <h2 className="text-white">Silver IRA Risks to Consider</h2>
                            <p>
                                Silver&apos;s potential for higher returns comes with higher risks. Here&apos;s what to understand before investing:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Higher Volatility</h4>
                                        <p className="text-sm text-red-300 mt-1">Silver can drop 30-50% during bear markets. In 2011-2015, silver fell from ~$49 to ~$14. Be prepared for significant swings and have a long time horizon.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                    <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-400">Industrial Demand Sensitivity</h4>
                                        <p className="text-sm text-amber-300 mt-1">Silver prices can fall during recessions as industrial demand drops. Gold typically holds up better during economic downturns.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                    <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-400">Higher Storage Costs</h4>
                                        <p className="text-sm text-amber-300 mt-1">The same dollar investment in silver requires ~70x more storage space than gold. This translates to higher annual storage fees.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                    <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-400">Higher Premiums</h4>
                                        <p className="text-sm text-amber-300 mt-1">Silver coins often carry premiums of 15-30% over spot price, meaning you need silver to rise that much just to break even on coins.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2 className="text-white">Silver IRA Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Can I hold both gold and silver in the same IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Yes! Most precious metals IRAs hold a combination of gold and silver (and sometimes platinum and palladium). This is the most common approach. You can adjust your gold-to-silver ratio based on your investment thesis and market conditions.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What is the minimum investment for a silver IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Minimums vary by company. <Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link> accepts as little as $2,000, making silver accessible to smaller investors. <Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link> starts at $25,000, while <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta Precious Metals</Link> requires $50,000.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Is silver better than gold for an IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Neither is universally &quot;better&quot;—they serve different purposes. Silver offers higher growth potential but more volatility. Gold provides stability and lower storage costs. Most advisors recommend a combination, typically 60-75% gold and 25-40% silver, to balance stability with growth potential.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What silver products have the lowest premiums?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Silver bars from recognized refiners (like Johnson Matthey, Engelhard, or Sunshine Minting) typically carry the lowest premiums—often just 3-8% over spot. Silver rounds are next lowest. Government-minted coins like American Silver Eagles carry the highest premiums (15-30%) but offer maximum liquidity and recognition.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Can I rollover my 401(k) into a silver IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Yes! You can roll over funds from a 401(k), 403(b), TSP, or traditional IRA into a precious metals IRA that holds silver—completely tax-free and penalty-free. Use a direct rollover for the smoothest process. See our <Link href="/guide/401k-to-gold-rollover" className="text-secondary hover:underline">401(k) rollover guide</Link> for detailed instructions.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Add Silver to Your Retirement?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Discover which precious metals company offers the best silver selection and pricing for your investment goals.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/compare/gold-vs-silver-ira">Compare Gold vs. Silver</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                        {/* Related Silver Content */}
                        <div className="my-12 not-prose">
                            <h3 className="text-xl font-serif font-bold text-white mb-6">Explore More Silver Resources</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/silver-squeeze" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                                    <h4 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Silver Squeeze Hub</h4>
                                    <p className="text-sm text-slate-400">Understand the silver squeeze movement and how it affects physical silver availability.</p>
                                </Link>
                                <Link href="/silver-squeeze/buy-physical-silver-guide" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                                    <h4 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">How to Buy Physical Silver</h4>
                                    <p className="text-sm text-slate-400">Complete guide to buying silver: premiums, products, dealers, and storage options.</p>
                                </Link>
                                <Link href="/silver-squeeze/silver-supply-deficit" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                                    <h4 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Silver Supply Deficit</h4>
                                    <p className="text-sm text-slate-400">Learn about the structural supply deficit driving silver prices.</p>
                                </Link>
                                <Link href="/best-silver-ira-companies" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                                    <h4 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Best Silver IRA Companies</h4>
                                    <p className="text-sm text-slate-400">Compare top silver IRA providers for 2026.</p>
                                </Link>
                            </div>
                        </div>

                    </article>
                </div>
            </Container>

            {/* CTA Section */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <AugustaCTA variant="footer" linkContext="silver" trackSource="guide-silver-ira-guide" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
