import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Coins, CheckCircle2, XCircle, ArrowRight, Shield, Scale } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "IRA-Approved Gold Coins & Bars 2026: Complete List & Guide",
    description: "Complete list of IRS-approved gold coins and bars for your Gold IRA in 2026. Learn purity requirements, which products to buy, and what to avoid.",
};

const takeaways = [
    "Gold must be at least 99.5% pure (0.995 fineness) to qualify for an IRA.",
    "American Gold Eagles are the one exception—approved despite being 91.67% gold.",
    "Popular choices include American Eagles, Canadian Maple Leafs, and Austrian Philharmonics.",
    "Gold bars must be produced by NYMEX/COMEX-approved refiners.",
    "Collectible, numismatic, and rare coins do NOT qualify for IRAs.",
    "Silver requires 99.9% purity; platinum and palladium require 99.95%.",
    "Bars typically offer lower premiums than coins but may be less liquid."
];

const tocItems = [
    { id: "overview", label: "IRS Requirements" },
    { id: "gold-coins", label: "Approved Gold Coins" },
    { id: "gold-bars", label: "Approved Gold Bars" },
    { id: "silver", label: "Approved Silver" },
    { id: "platinum-palladium", label: "Platinum & Palladium" },
    { id: "not-allowed", label: "What's NOT Allowed" },
    { id: "how-to-choose", label: "How to Choose" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "IRA-Approved Gold Coins & Bars 2026: Complete List & Guide",
            "description": "Complete list of IRS-approved gold coins and bars for your Gold IRA in 2026. Learn purity requirements, which products to buy, and what to avoid.",
            "image": "https://richdadretirement.com/images/coins-guide-cover.jpg",
            "author": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://richdadretirement.com/logo.png"
                }
            },
            "datePublished": "2026-01-14",
            "dateModified": "2026-01-14"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can I put my existing gold coins in an IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. You cannot contribute physical gold you already own to an IRA. IRA purchases must go through your custodian using IRA funds. If you want to add personal gold to your retirement, you'd need to sell it, contribute the cash (subject to limits), then repurchase gold through the IRA."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why are Krugerrands not allowed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "South African Krugerrands are only 91.67% gold (22 karat)—the same as American Eagles. However, Krugerrands don't have US legal tender status and weren't specifically approved by Congress like American Eagles were. It's a regulatory technicality, not a quality issue."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are proof coins allowed in an IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Some proof versions of approved coins (like Proof American Gold Eagles) are allowed. However, proof coins carry significant premiums over bullion versions. Unless you specifically want them, standard bullion coins offer better value for an IRA."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What happens if I buy non-approved gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Buying non-approved products is considered a \"prohibited transaction\" that can disqualify your entire IRA. This would make the full account value immediately taxable, plus a 10% penalty if you're under 59½. Always verify products are IRS-approved before purchasing."
                    }
                }
            ]
        }
    ]
};

export default function IraApprovedGoldCoinsPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-background-subtle py-16 border-b border-primary/5">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Investment Guide
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            IRA-Approved Gold Coins & Bars
                        </h1>
                        <p className="text-xl text-text-muted leading-relaxed">
                            The complete guide to which gold, silver, platinum, and palladium products qualify for your precious metals IRA.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead">
                                Not all gold qualifies for a Gold IRA. The IRS has specific purity requirements that determine which <strong>IRA-approved gold coins</strong> and bars you can hold in your retirement account.
                            </p>
                            <p>
                                Understanding these requirements is essential—buying the wrong products can disqualify your IRA and trigger taxes and penalties.
                            </p>

                            <div className="bg-background-subtle rounded-2xl p-6 border border-primary/5 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">IRS Purity Requirements</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="font-medium text-white">Gold</span>
                                        <span className="text-secondary font-bold">99.5% pure (0.995)</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="font-medium text-white">Silver</span>
                                        <span className="text-secondary font-bold">99.9% pure (0.999)</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="font-medium text-white">Platinum</span>
                                        <span className="text-secondary font-bold">99.95% pure (0.9995)</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="font-medium text-white">Palladium</span>
                                        <span className="text-secondary font-bold">99.95% pure (0.9995)</span>
                                    </div>
                                </div>
                            </div>

                            <Callout type="info" title="The American Eagle Exception">
                                The American Gold Eagle is only 91.67% gold (22 karat) but is specifically approved by Congress for IRAs. It&apos;s the only exception to the 99.5% rule. The remaining alloy (copper and silver) makes the coin more durable.
                            </Callout>
                        </section>

                        {/* Approved Gold Coins */}
                        <section id="gold-coins" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">IRA-Approved Gold Coins</h2>
                            </div>
                            <p>
                                These gold coins meet IRS requirements and are commonly held in Gold IRAs:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Coin</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Purity</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Sizes</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">American Gold Eagle</td>
                                            <td className="p-4 text-slate-400">91.67% (22k)*</td>
                                            <td className="p-4 text-slate-400">1 oz, 1/2 oz, 1/4 oz, 1/10 oz</td>
                                            <td className="p-4 text-slate-400">4-8%</td>
                                        </tr>
                                        <tr className="bg-slate-800/50">
                                            <td className="p-4 font-semibold text-white">American Gold Buffalo</td>
                                            <td className="p-4 text-slate-400">99.99% (24k)</td>
                                            <td className="p-4 text-slate-400">1 oz</td>
                                            <td className="p-4 text-slate-400">5-8%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Canadian Gold Maple Leaf</td>
                                            <td className="p-4 text-slate-400">99.99% (24k)</td>
                                            <td className="p-4 text-slate-400">1 oz, 1/2 oz, 1/4 oz, 1/10 oz</td>
                                            <td className="p-4 text-slate-400">3-6%</td>
                                        </tr>
                                        <tr className="bg-slate-800/50">
                                            <td className="p-4 font-semibold text-white">Austrian Gold Philharmonic</td>
                                            <td className="p-4 text-slate-400">99.99% (24k)</td>
                                            <td className="p-4 text-slate-400">1 oz, 1/2 oz, 1/4 oz, 1/10 oz</td>
                                            <td className="p-4 text-slate-400">3-6%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Australian Gold Kangaroo</td>
                                            <td className="p-4 text-slate-400">99.99% (24k)</td>
                                            <td className="p-4 text-slate-400">1 oz, 1/2 oz, 1/4 oz, 1/10 oz</td>
                                            <td className="p-4 text-slate-400">3-6%</td>
                                        </tr>
                                        <tr className="bg-slate-800/50">
                                            <td className="p-4 font-semibold text-white">British Gold Britannia</td>
                                            <td className="p-4 text-slate-400">99.99% (24k)</td>
                                            <td className="p-4 text-slate-400">1 oz</td>
                                            <td className="p-4 text-slate-400">3-6%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-text-muted">*American Gold Eagle is specifically approved by Congress despite lower purity.</p>

                            <h3>Most Popular Choice: American Gold Eagle</h3>
                            <p>
                                The American Gold Eagle is the most popular IRA gold coin due to its:
                            </p>
                            <ul>
                                <li><strong>Universal recognition</strong> — Accepted worldwide</li>
                                <li><strong>US Government backing</strong> — Legal tender with weight/purity guarantee</li>
                                <li><strong>Excellent liquidity</strong> — Easy to buy and sell</li>
                                <li><strong>Durability</strong> — 22k alloy is harder than pure gold</li>
                            </ul>

                            <h3>Best Value: Canadian Maple Leaf</h3>
                            <p>
                                For investors prioritizing purity and lower premiums, the Canadian Gold Maple Leaf offers 99.99% purity at typically lower premiums than American Eagles.
                            </p>
                        </section>

                        {/* Approved Gold Bars */}
                        <section id="gold-bars" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">IRA-Approved Gold Bars</h2>
                            </div>
                            <p>
                                Gold bars must meet two requirements: (1) 99.5% purity minimum, and (2) produced by a NYMEX/COMEX-approved refiner or national mint.
                            </p>

                            <h3>Approved Refiners & Mints</h3>
                            <ul>
                                <li>PAMP Suisse</li>
                                <li>Credit Suisse</li>
                                <li>Perth Mint</li>
                                <li>Royal Canadian Mint</li>
                                <li>Johnson Matthey</li>
                                <li>Engelhard</li>
                                <li>Valcambi</li>
                                <li>Heraeus</li>
                            </ul>

                            <h3>Available Sizes</h3>
                            <p>
                                IRA-eligible gold bars come in various sizes:
                            </p>
                            <ul>
                                <li>1 oz bars (most popular for IRAs)</li>
                                <li>10 oz bars</li>
                                <li>100 gram bars</li>
                                <li>1 kilo (32.15 oz) bars</li>
                            </ul>

                            <Callout type="tip" title="Bars vs. Coins">
                                Gold bars typically carry lower premiums than coins (2-5% vs. 4-8%). However, coins are more recognizable and may be easier to liquidate. Many investors hold a mix of both.
                            </Callout>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Find the Best Gold IRA Company</h3>
                                <p className="mb-6 text-gray-200">Get personalized recommendations based on your investment goals.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Approved Silver */}
                        <section id="silver" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-slate-800/50 rounded-lg text-slate-400">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">IRA-Approved Silver</h2>
                            </div>
                            <p>
                                Silver must be at least <strong>99.9% pure</strong> to qualify for an IRA. Here are the most popular options:
                            </p>

                            <h3>Approved Silver Coins</h3>
                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Coin</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Purity</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">American Silver Eagle</td>
                                            <td className="p-4 text-slate-400">99.9%</td>
                                            <td className="p-4 text-slate-400">10-20%</td>
                                        </tr>
                                        <tr className="bg-slate-800/50">
                                            <td className="p-4 font-semibold text-white">Canadian Silver Maple Leaf</td>
                                            <td className="p-4 text-slate-400">99.99%</td>
                                            <td className="p-4 text-slate-400">8-15%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Austrian Silver Philharmonic</td>
                                            <td className="p-4 text-slate-400">99.9%</td>
                                            <td className="p-4 text-slate-400">8-12%</td>
                                        </tr>
                                        <tr className="bg-slate-800/50">
                                            <td className="p-4 font-semibold text-white">British Silver Britannia</td>
                                            <td className="p-4 text-slate-400">99.9%</td>
                                            <td className="p-4 text-slate-400">8-12%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>Approved Silver Bars</h3>
                            <p>
                                Silver bars from NYMEX/COMEX-approved refiners qualify. Popular options:
                            </p>
                            <ul>
                                <li>1 oz, 10 oz, and 100 oz bars</li>
                                <li>Manufacturers: Sunshine Minting, Johnson Matthey, Engelhard, PAMP Suisse</li>
                                <li>Premium: 3-8% over spot (lower than coins)</li>
                            </ul>

                            <p>
                                For more on silver in IRAs, see our <Link href="/guide/silver-ira-guide">Silver IRA guide</Link>.
                            </p>
                        </section>

                        {/* Platinum & Palladium */}
                        <section id="platinum-palladium" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Platinum & Palladium</h2>
                            </div>
                            <p>
                                Both platinum and palladium require <strong>99.95% purity</strong> for IRA eligibility.
                            </p>

                            <h3>Approved Platinum</h3>
                            <ul>
                                <li><strong>American Platinum Eagle</strong> — 99.95% pure, 1 oz</li>
                                <li><strong>Canadian Platinum Maple Leaf</strong> — 99.95% pure, 1 oz</li>
                                <li><strong>Platinum bars</strong> — From approved refiners, various sizes</li>
                            </ul>

                            <h3>Approved Palladium</h3>
                            <ul>
                                <li><strong>Canadian Palladium Maple Leaf</strong> — 99.95% pure, 1 oz</li>
                                <li><strong>Palladium bars</strong> — From approved refiners</li>
                            </ul>

                            <p>
                                Note: Platinum and palladium are less common in IRAs due to their volatility and narrower markets. Most investors focus on gold and silver.
                            </p>
                        </section>

                        {/* Not Allowed */}
                        <section id="not-allowed" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <XCircle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">What&apos;s NOT Allowed</h2>
                            </div>
                            <p>
                                These products do NOT qualify for a Gold IRA:
                            </p>

                            <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20 not-prose my-8">
                                <h4 className="font-bold text-red-400 text-lg mb-4">Prohibited Products</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-red-300"><strong>Collectible/Numismatic coins</strong> — Pre-1933 coins, rare dates, proof sets valued for rarity</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-red-300"><strong>South African Krugerrands</strong> — Only 91.67% gold with no US legal tender status</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-red-300"><strong>Pre-1933 US Gold coins</strong> — Considered collectibles</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-red-300"><strong>British Sovereigns</strong> — Only 91.67% gold</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-red-300"><strong>Most jewelry</strong> — Doesn&apos;t meet purity requirements</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-red-300"><strong>Bars from non-approved refiners</strong> — Must be NYMEX/COMEX approved</span>
                                    </li>
                                </ul>
                            </div>

                            <Callout type="warning" title="Beware Numismatic Coin Pushes">
                                Some dealers aggressively promote expensive numismatic coins for IRAs. These do NOT qualify and carry excessive premiums. If a salesperson pushes &quot;rare&quot; or &quot;collectible&quot; coins for your IRA, find a different company. See our guide on <Link href="/learn/gold-ira-scams">Gold IRA scams</Link>.
                            </Callout>
                        </section>

                        {/* How to Choose */}
                        <section id="how-to-choose" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">How to Choose the Right Products</h2>
                            </div>
                            <p>
                                Consider these factors when selecting gold and silver for your IRA:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm">
                                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white">Consider Premiums</h4>
                                        <p className="text-sm text-slate-400 mt-1">Bars have lower premiums than coins. If you&apos;re maximizing gold per dollar, consider bars from reputable refiners.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm">
                                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white">Consider Liquidity</h4>
                                        <p className="text-sm text-slate-400 mt-1">American Gold Eagles are the most recognized and liquid. They may sell faster and at better prices when you need to liquidate.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm">
                                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white">Consider Storage</h4>
                                        <p className="text-sm text-slate-400 mt-1">Smaller denominations (1/4 oz, 1/10 oz) offer flexibility for partial distributions but carry higher per-ounce premiums.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm">
                                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white">Consider Diversification</h4>
                                        <p className="text-sm text-slate-400 mt-1">Many investors hold a mix: gold for stability, silver for growth potential. Common allocations range from 60/40 to 80/20 gold/silver.</p>
                                    </div>
                                </div>
                            </div>

                            <h3>Recommended Portfolio Mix</h3>
                            <ul>
                                <li><strong>Conservative:</strong> 80% gold, 20% silver</li>
                                <li><strong>Balanced:</strong> 70% gold, 30% silver</li>
                                <li><strong>Growth-oriented:</strong> 60% gold, 40% silver</li>
                            </ul>
                            <p>
                                Learn more in our <Link href="/compare/gold-vs-silver-ira">Gold vs. Silver IRA comparison</Link>.
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>IRA-Approved Gold FAQs</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Can I put my existing gold coins in an IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        No. You cannot contribute physical gold you already own to an IRA. IRA purchases must go through your custodian using IRA funds. If you want to add personal gold to your retirement, you&apos;d need to sell it, contribute the cash (subject to limits), then repurchase gold through the IRA.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Why are Krugerrands not allowed?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        South African Krugerrands are only 91.67% gold (22 karat)—the same as American Eagles. However, Krugerrands don&apos;t have US legal tender status and weren&apos;t specifically approved by Congress like American Eagles were. It&apos;s a regulatory technicality, not a quality issue.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Are proof coins allowed in an IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Some proof versions of approved coins (like Proof American Gold Eagles) are allowed. However, proof coins carry significant premiums over bullion versions. Unless you specifically want them, standard bullion coins offer better value for an IRA.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What happens if I buy non-approved gold?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Buying non-approved products is considered a &quot;prohibited transaction&quot; that can disqualify your entire IRA. This would make the full account value immediately taxable, plus a 10% penalty if you&apos;re under 59½. Always verify products are IRS-approved before purchasing.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Start Your Gold IRA?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Find the best company for your situation—with transparent pricing on approved products.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/guide/gold-ira-guide">Read the Full Guide</Link>
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
                    <AugustaCTA variant="footer" />
                </Container>
            </section>
        </main>
    );
}
