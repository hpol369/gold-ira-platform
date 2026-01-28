import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Coins, CheckCircle2, XCircle, ArrowRight, Shield, Scale, DollarSign, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "IRA Approved Silver: IRS-Eligible Coins & Bars List",
    description: "IRA approved silver list for 2026. American Silver Eagles, Canadian Maple Leafs, approved bars, and 99.9% purity requirements explained.",
    keywords: ["ira approved silver", "ira eligible silver", "silver coins for ira", "silver bars for ira", "irs approved silver", "silver ira products"],
    openGraph: {
        title: "IRA Approved Silver 2026: Complete List of IRS-Eligible Silver",
        description: "Complete list of IRA approved silver coins and bars. Learn which silver products meet IRS purity requirements for your Silver IRA.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const tocItems = [
    { id: "requirements", label: "IRS Purity Requirements" },
    { id: "coins", label: "Approved Silver Coins" },
    { id: "bars", label: "Approved Silver Bars" },
    { id: "premiums", label: "Premium Comparison" },
    { id: "not-allowed", label: "Silver NOT Allowed" },
    { id: "best-value", label: "Best Value Picks" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "IRA Approved Silver 2026: Complete List of IRS-Eligible Silver Coins & Bars",
            "description": "Complete list of IRA approved silver coins and bars for 2026. American Silver Eagles, Canadian Maple Leafs, and approved silver bars.",
            "image": "https://www.richdadretirement.com/images/ira-approved-silver.jpg",
            "datePublished": "2024-06-01",
            "dateModified": "2026-01-25",
            "author": {
                "@type": "Person",
                "name": "Thomas Richardson",
                "jobTitle": "Retirement Investment Specialist"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.richdadretirement.com/logo.png"
                }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What silver purity is required for an IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Silver held in an IRA must be at least 99.9% pure (0.999 fineness). This is higher than gold's 99.5% requirement. Most government-minted silver coins meet or exceed this standard."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are American Silver Eagles IRA approved?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, American Silver Eagles are IRA approved. They are 99.9% pure silver and are the most popular silver coin for IRAs due to their liquidity and government backing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I put junk silver in an IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, junk silver (pre-1965 US coins) is NOT IRA eligible. These coins are only 90% silver, which does not meet the 99.9% purity requirement for Silver IRAs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What silver bars are approved for IRAs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Silver bars must be 99.9% pure and produced by a NYMEX/COMEX-approved refiner or national mint. Popular options include bars from Johnson Matthey, Engelhard, PAMP Suisse, and the Royal Canadian Mint."
                    }
                }
            ]
        }
    ]
};

// IRA-approved silver coins data
const approvedCoins = [
    {
        name: "American Silver Eagle",
        country: "United States",
        purity: "99.9%",
        weight: "1 oz",
        premium: "High (15-25%)",
        liquidity: "Excellent",
        notes: "Most popular IRA silver coin. Government-backed, highly recognizable.",
        recommended: true,
    },
    {
        name: "Canadian Silver Maple Leaf",
        country: "Canada",
        purity: "99.99%",
        weight: "1 oz",
        premium: "Moderate (8-15%)",
        liquidity: "Excellent",
        notes: "Highest purity silver coin. Features advanced security (MintMark SI).",
        recommended: true,
    },
    {
        name: "Austrian Silver Philharmonic",
        country: "Austria",
        purity: "99.9%",
        weight: "1 oz",
        premium: "Moderate (8-12%)",
        liquidity: "Good",
        notes: "Popular European coin. Lower premiums than Eagles.",
        recommended: true,
    },
    {
        name: "British Silver Britannia",
        country: "United Kingdom",
        purity: "99.9%",
        weight: "1 oz",
        premium: "Moderate (8-12%)",
        liquidity: "Good",
        notes: "Features security technology. Beautiful design.",
        recommended: false,
    },
    {
        name: "Australian Silver Kangaroo",
        country: "Australia",
        purity: "99.99%",
        weight: "1 oz",
        premium: "Moderate (10-15%)",
        liquidity: "Good",
        notes: "From Perth Mint. New design each year.",
        recommended: false,
    },
    {
        name: "Mexican Silver Libertad",
        country: "Mexico",
        purity: "99.9%",
        weight: "1 oz",
        premium: "High (20-30%)",
        liquidity: "Moderate",
        notes: "Limited mintage makes these collectible. Higher premiums.",
        recommended: false,
    },
    {
        name: "Chinese Silver Panda",
        country: "China",
        purity: "99.9%",
        weight: "30g",
        premium: "High (15-25%)",
        liquidity: "Moderate",
        notes: "New design each year. Note: 30g, not 1 oz.",
        recommended: false,
    },
];

// IRA-approved silver bars data
const approvedBars = [
    {
        refiner: "Johnson Matthey",
        sizes: "1 oz, 10 oz, 100 oz, 1000 oz",
        premium: "Low (3-8%)",
        notes: "Industry standard. No longer producing but still highly traded.",
    },
    {
        refiner: "Engelhard",
        sizes: "1 oz, 10 oz, 100 oz",
        premium: "Low-Moderate (5-10%)",
        notes: "Vintage bars command slight premiums. Highly trusted.",
    },
    {
        refiner: "PAMP Suisse",
        sizes: "1 oz, 10 oz, 100 oz, 1 kg",
        premium: "Moderate (6-12%)",
        notes: "Swiss quality. Lady Fortuna design is iconic.",
    },
    {
        refiner: "Royal Canadian Mint",
        sizes: "10 oz, 100 oz",
        premium: "Low (4-8%)",
        notes: "Government mint quality. Excellent value.",
    },
    {
        refiner: "Sunshine Minting",
        sizes: "1 oz, 10 oz, 100 oz",
        premium: "Low (3-6%)",
        notes: "US-based. Features Mintmark SI security.",
    },
    {
        refiner: "Asahi Refining",
        sizes: "1 oz, 10 oz, 100 oz",
        premium: "Low (3-6%)",
        notes: "Acquired Johnson Matthey's operations.",
    },
];

// NOT allowed silver
const notAllowedSilver = [
    {
        type: "Junk Silver (Pre-1965 US Coins)",
        reason: "Only 90% silver - does not meet 99.9% purity requirement",
    },
    {
        type: "Collectible/Numismatic Silver Coins",
        reason: "IRS prohibits collectibles in IRAs regardless of purity",
    },
    {
        type: "Silver Jewelry",
        reason: "Not a bullion product and typically impure",
    },
    {
        type: "Sterling Silver (.925)",
        reason: "Only 92.5% pure - does not meet requirement",
    },
    {
        type: "Silver Rounds from Unknown Mints",
        reason: "Must be from NYMEX/COMEX-approved refiners",
    },
    {
        type: "Proof Coins with High Premiums",
        reason: "While some are technically allowed, the IRS may view excessive premiums as collectible transactions",
    },
];

export default function IraApprovedSilverPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={schema} />
            <Navbar />

            {/* Header */}
            <header className="bg-white text-slate-900 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(203,213,225,0.1),transparent_50%)]" />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-[#B22234] mb-6 border border-slate-200">
                            <Coins className="w-4 h-4" />
                            Complete Product Guide
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
                            IRA Approved Silver: Complete List of IRS-Eligible Coins & Bars
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                            Not all silver qualifies for your IRA. This guide covers every IRS-approved silver product—from American Silver Eagles to 100 oz bars—with current premium data.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Main Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-a:text-[#B22234] max-w-none">

                        {/* Key Point Box */}
                        <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6 not-prose mb-8">
                            <h3 className="font-bold text-[#B22234] text-lg mb-3">The 99.9% Rule</h3>
                            <p className="text-slate-600">
                                <strong>All silver in an IRA must be at least 99.9% pure (0.999 fineness).</strong> This is stricter than gold&apos;s 99.5% requirement. Most government-minted silver bullion coins meet this standard, but junk silver and sterling silver do NOT qualify.
                            </p>
                        </div>

                        {/* Section 1: Requirements */}
                        <section id="requirements" className="scroll-mt-32">
                            <h2 className="text-slate-900">IRS Silver Purity Requirements</h2>
                            <p>
                                The IRS sets specific standards for <strong>IRA approved silver</strong>. To be eligible for a self-directed IRA, silver must meet these criteria:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 not-prose my-8">
                                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                                    <div className="flex items-center gap-2 text-green-400 font-bold mb-3">
                                        <CheckCircle2 className="w-5 h-5" />
                                        Required
                                    </div>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>• Minimum 99.9% purity (0.999 fine)</li>
                                        <li>• Produced by approved refiner or mint</li>
                                        <li>• Stored in IRS-approved depository</li>
                                        <li>• Purchased through your IRA custodian</li>
                                    </ul>
                                </div>
                                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                                    <div className="flex items-center gap-2 text-red-400 font-bold mb-3">
                                        <XCircle className="w-5 h-5" />
                                        NOT Allowed
                                    </div>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>• Junk silver (90% purity)</li>
                                        <li>• Sterling silver (92.5% purity)</li>
                                        <li>• Collectible/numismatic coins</li>
                                        <li>• Home storage (must be in depository)</li>
                                    </ul>
                                </div>
                            </div>

                            <p>
                                Unlike gold (which has a special exception for 91.67% pure American Gold Eagles), there are <strong>no exceptions for silver</strong>—it must meet the 99.9% standard, period.
                            </p>
                        </section>

                        {/* Section 2: Approved Coins */}
                        <section id="coins" className="scroll-mt-32">
                            <h2 className="text-slate-900">IRA Approved Silver Coins</h2>
                            <p>
                                These <strong>IRA eligible silver coins</strong> are the most popular choices for precious metals IRAs. All meet or exceed the 99.9% purity requirement:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Coin</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Purity</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Premium</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-slate-900 hidden md:table-cell">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 text-sm text-slate-600">
                                        {approvedCoins.map((coin, index) => (
                                            <tr key={coin.name} className={index % 2 === 1 ? "bg-slate-100" : ""}>
                                                <td className="p-4">
                                                    <div className="flex items-center gap-2">
                                                        {coin.recommended && <span className="text-[#B22234]">★</span>}
                                                        <div>
                                                            <span className="font-semibold text-slate-900">{coin.name}</span>
                                                            <div className="text-xs text-slate-600">{coin.country}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-green-400 font-semibold">{coin.purity}</td>
                                                <td className="p-4">{coin.premium}</td>
                                                <td className="p-4 hidden md:table-cell text-xs">{coin.notes}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-sm text-slate-600">★ = Recommended picks for best value and liquidity</p>

                            <h3 className="text-slate-900">Top 3 Silver Coins for IRAs</h3>
                            <div className="grid md:grid-cols-3 gap-4 not-prose my-6">
                                <div className="bg-slate-50 border border-[#B22234]/30 rounded-xl p-5">
                                    <div className="text-[#B22234] font-bold text-sm mb-2">#1 Best Overall</div>
                                    <h4 className="font-bold text-slate-900">American Silver Eagle</h4>
                                    <p className="text-slate-600 text-sm mt-2">Maximum liquidity and recognition. The &quot;gold standard&quot; of silver coins (ironic, we know). Higher premiums but easiest to sell.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                                    <div className="text-green-400 font-bold text-sm mb-2">#2 Best Value</div>
                                    <h4 className="font-bold text-slate-900">Canadian Maple Leaf</h4>
                                    <p className="text-slate-600 text-sm mt-2">Highest purity (99.99%), lower premiums than Eagles, excellent security features. Best bang for your buck.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                                    <div className="text-blue-400 font-bold text-sm mb-2">#3 Budget Pick</div>
                                    <h4 className="font-bold text-slate-900">Austrian Philharmonic</h4>
                                    <p className="text-slate-600 text-sm mt-2">Lowest premiums among major government coins. Beautiful design. EU legal tender status.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Approved Bars */}
                        <section id="bars" className="scroll-mt-32">
                            <h2 className="text-slate-900">IRA Approved Silver Bars</h2>
                            <p>
                                <strong>Silver bars for IRA</strong> accounts must be produced by NYMEX/COMEX-approved refiners or national government mints. Bars typically offer the lowest premiums over spot price:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Refiner/Mint</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Sizes</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Premium</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-slate-900 hidden md:table-cell">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 text-sm text-slate-600">
                                        {approvedBars.map((bar, index) => (
                                            <tr key={bar.refiner} className={index % 2 === 1 ? "bg-slate-100" : ""}>
                                                <td className="p-4 font-semibold text-slate-900">{bar.refiner}</td>
                                                <td className="p-4">{bar.sizes}</td>
                                                <td className="p-4 text-green-400">{bar.premium}</td>
                                                <td className="p-4 hidden md:table-cell text-xs">{bar.notes}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <Callout type="tip" title="Bar Size Strategy">
                                Larger bars (100 oz) have the lowest per-ounce premiums but are harder to liquidate partially. For IRAs under $50,000, consider 10 oz bars for better flexibility. For larger portfolios, 100 oz bars maximize your silver per dollar.
                            </Callout>
                        </section>

                        {/* Mid-page CTA */}
                        <div className="my-12 bg-white rounded-2xl p-8 text-slate-900 text-center relative overflow-hidden not-prose border border-slate-200">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">Ready to Add Silver to Your IRA?</h3>
                                <p className="mb-6 text-slate-600">Compare the best silver IRA companies and find the lowest premiums on approved products.</p>
                                <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                                    <Link href="/best-silver-ira-companies">Compare Silver IRA Companies <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Section 4: Premium Comparison */}
                        <section id="premiums" className="scroll-mt-32">
                            <h2 className="text-slate-900">Silver IRA Premium Comparison</h2>
                            <p>
                                The &quot;premium&quot; is how much you pay above the spot price of silver. Lower premiums mean more silver for your money:
                            </p>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 not-prose my-8">
                                <h4 className="font-bold text-slate-900 mb-4">Typical Premiums by Product Type</h4>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-600">100 oz Silver Bars</span>
                                            <span className="text-green-400 font-semibold">3-5%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full">
                                            <div className="h-2 bg-green-500 rounded-full" style={{ width: '15%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-600">10 oz Silver Bars</span>
                                            <span className="text-green-400 font-semibold">5-8%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full">
                                            <div className="h-2 bg-green-500 rounded-full" style={{ width: '25%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-600">Canadian Maple Leafs</span>
                                            <span className="text-[#B22234] font-semibold">8-15%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full">
                                            <div className="h-2 bg-[#B22234] rounded-full" style={{ width: '45%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-600">American Silver Eagles</span>
                                            <span className="text-red-400 font-semibold">15-25%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full">
                                            <div className="h-2 bg-red-500 rounded-full" style={{ width: '70%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-600 mt-4">* Premiums vary by market conditions and dealer. Data as of January 2026.</p>
                            </div>
                        </section>

                        {/* Section 5: Not Allowed */}
                        <section id="not-allowed" className="scroll-mt-32">
                            <h2 className="text-slate-900">Silver NOT Allowed in IRAs</h2>
                            <p>
                                Buying non-approved silver in your IRA is a &quot;prohibited transaction&quot; that can <strong>disqualify your entire IRA</strong>. Avoid these products:
                            </p>

                            <div className="space-y-3 not-prose my-8">
                                {notAllowedSilver.map((item) => (
                                    <div key={item.type} className="flex gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-red-400">{item.type}</h4>
                                            <p className="text-sm text-red-300 mt-1">{item.reason}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Callout type="warning" title="Important">
                                If you purchase non-approved silver in your IRA, the IRS considers it a distribution. You&apos;ll owe income taxes on the full value PLUS a 10% early withdrawal penalty if you&apos;re under 59½. Always verify products are IRS-approved before buying.
                            </Callout>
                        </section>

                        {/* Section 6: Best Value */}
                        <section id="best-value" className="scroll-mt-32">
                            <h2 className="text-slate-900">Best Value IRA Silver: Our Recommendations</h2>
                            <p>
                                For most investors, we recommend a mix of coins and bars to balance liquidity with value:
                            </p>

                            <div className="bg-slate-50 border border-[#B22234]/30 rounded-xl p-6 not-prose my-8">
                                <h4 className="font-bold text-[#B22234] mb-4">Recommended Silver IRA Portfolio</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <div>
                                            <span className="font-semibold text-slate-900">10 oz Silver Bars</span>
                                            <span className="text-slate-600 text-sm ml-2">(Sunshine, RCM)</span>
                                        </div>
                                        <span className="text-[#B22234] font-bold">40-50%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <div>
                                            <span className="font-semibold text-slate-900">Canadian Silver Maple Leafs</span>
                                        </div>
                                        <span className="text-[#B22234] font-bold">30-40%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <div>
                                            <span className="font-semibold text-slate-900">American Silver Eagles</span>
                                        </div>
                                        <span className="text-[#B22234] font-bold">10-20%</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 mt-4">This mix provides: lowest average premiums (bars), best value coins (Maples), and ultimate liquidity (Eagles).</p>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2 className="text-slate-900">Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">What silver purity is required for an IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Silver held in an IRA must be at least 99.9% pure (0.999 fineness). This is higher than gold&apos;s 99.5% requirement. Most government-minted silver coins meet or exceed this standard, including American Silver Eagles (99.9%) and Canadian Maple Leafs (99.99%).
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Can I put junk silver in an IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        No, junk silver (pre-1965 US coins like Mercury dimes and Morgan dollars) is NOT IRA eligible. These coins are only 90% silver, which does not meet the 99.9% purity requirement. If you want to own junk silver, you&apos;ll need to hold it outside your IRA.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Are silver rounds IRA approved?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Some silver rounds are IRA approved, but only if they meet 99.9% purity AND are produced by a NYMEX/COMEX-approved refiner. Rounds from random private mints typically don&apos;t qualify. Stick with government coins or bars from approved refiners to be safe.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Should I buy silver coins or bars for my IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        For most investors, a mix of both works best. <strong>Bars</strong> offer the lowest premiums (3-8% over spot) so you get more silver per dollar. <strong>Coins</strong> like American Silver Eagles offer maximum liquidity and are easier to sell in smaller amounts. We recommend 40-60% bars and 40-60% coins, weighted toward bars for larger portfolios.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Related Content */}
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 not-prose my-12">
                            <h3 className="font-bold text-slate-900 mb-4">Related Silver IRA Guides</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/guide/silver-ira-guide" className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                    <Coins className="w-5 h-5 text-[#B22234]" />
                                    <span className="text-slate-600 hover:text-slate-900">Complete Silver IRA Guide</span>
                                </Link>
                                <Link href="/silver-ira/rollover" className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                    <ArrowRight className="w-5 h-5 text-[#B22234]" />
                                    <span className="text-slate-600 hover:text-slate-900">Silver IRA Rollover Guide</span>
                                </Link>
                                <Link href="/compare/gold-vs-silver-ira" className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                    <Scale className="w-5 h-5 text-[#B22234]" />
                                    <span className="text-slate-600 hover:text-slate-900">Silver IRA vs Gold IRA</span>
                                </Link>
                                <Link href="/best-silver-ira-companies" className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                    <Shield className="w-5 h-5 text-[#B22234]" />
                                    <span className="text-slate-600 hover:text-slate-900">Best Silver IRA Companies</span>
                                </Link>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>

            {/* CTA Section */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA variant="footer" linkContext="silver" trackSource="guide-ira-approved-silver" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
