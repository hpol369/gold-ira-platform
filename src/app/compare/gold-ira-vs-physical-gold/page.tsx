import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, ComparisonRow } from "@/components/compare/ComparisonTable";
import { VerdictBox } from "@/components/compare/VerdictBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { Metadata } from "next";
import { ArrowRight, ShieldCheck, AlertTriangle, DollarSign, Lock, Home, Building2 } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Gold IRA vs. Physical Gold: Which is Better? (2026 Comparison)",
    description: "Comparing Gold IRAs vs buying physical gold directly. Learn the tax advantages, storage considerations, and which method is right for your situation.",
};

const comparisonRows: ComparisonRow[] = [
    { feature: "Tax Benefits", optionA: "Tax-deferred or tax-free growth", optionB: "Taxed as collectibles (28% max)", winner: "A" },
    { feature: "Storage", optionA: "Professional depository (insured)", optionB: "Your responsibility (home/safe)", winner: "A" },
    { feature: "Insurance", optionA: "Fully insured by depository", optionB: "Must purchase separately", winner: "A" },
    { feature: "Accessibility", optionA: "Limited until 59½", optionB: "Immediate access anytime", winner: "B" },
    { feature: "Privacy", optionA: "IRS reporting required", optionB: "Private (under $10k cash)", winner: "B" },
    { feature: "Annual Fees", optionA: "$200-350/year", optionB: "$0 (but insurance costs)", winner: "B" },
    { feature: "Theft Risk", optionA: "Minimal (secure vault)", optionB: "Higher (home storage)", winner: "A" },
    { feature: "Liquidity", optionA: "Sell through dealer", optionB: "Sell anywhere, anytime", winner: "B" },
    { feature: "Counterfeiting Risk", optionA: "Minimal (verified by dealer)", optionB: "Higher if buying privately", winner: "A" },
    { feature: "Estate Planning", optionA: "Clear beneficiary rules", optionB: "Can be complex", winner: "A" }
];

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "comparison", label: "Side-by-Side Comparison" },
    { id: "what-is-gold-ira", label: "What is a Gold IRA?" },
    { id: "what-is-physical", label: "What is Physical Gold?" },
    { id: "tax-differences", label: "Tax Differences" },
    { id: "storage-security", label: "Storage & Security" },
    { id: "which-to-choose", label: "Which Should You Choose?" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Gold IRA vs. Physical Gold: Which is Better for Your Investment?",
            "description": "Comparing Gold IRAs vs buying physical gold directly. Learn the tax advantages, storage considerations, and which method is right for your situation.",
            "image": "https://richdadretirement.com/images/gold-ira-vs-physical-gold-cover.jpg",
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
            "datePublished": "2026-01-17",
            "dateModified": "2026-01-17"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can I keep my Gold IRA gold at home?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. The IRS requires Gold IRA metals to be stored at an approved depository. 'Home storage Gold IRA' schemes are risky and can result in the IRS treating your entire IRA as a distribution—triggering immediate taxes plus a 10% penalty if you're under 59½. If you want gold at home, buy it outside of an IRA."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is physical gold a good investment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Gold is excellent for wealth preservation and inflation protection, but not designed for aggressive growth. It's best used as a portfolio diversifier (10-20% allocation). Gold tends to hold value during crashes when stocks fall—that's its main appeal. Whether in an IRA or physical form, the underlying value is the same."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do taxes compare between Gold IRA and physical gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Physical gold held outside an IRA is taxed as a collectible—28% max on long-term gains (or ordinary income for short-term). A Roth Gold IRA offers tax-free withdrawals. A Traditional Gold IRA defers taxes until withdrawal. For long-term holdings, a Gold IRA typically results in lower overall taxes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What's the best way to buy physical gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Buy from reputable dealers with transparent pricing. Stick to well-known coins (American Gold Eagles, Canadian Maple Leafs) or bars from recognized mints. Avoid eBay and unverified sellers. Many Gold IRA companies also sell physical gold for direct ownership—they're vetted and reliable."
                    }
                }
            ]
        }
    ]
};

export default function GoldIraVsPhysicalGoldPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-secondary mb-6">
                        Gold Ownership Comparison
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Gold IRA vs. Physical Gold
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Should you hold gold in a tax-advantaged retirement account or keep it in your own possession? We compare both approaches.
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                        <p className="lead">
                            Both <strong>Gold IRAs</strong> and <strong>physical gold</strong> ownership put real, tangible precious metals in your portfolio. But the way you own and access that gold differs significantly—especially when it comes to taxes, storage, and flexibility.
                        </p>

                        <p>
                            This comparison helps you decide whether tax-advantaged retirement gold or direct physical possession better fits your goals.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="Gold IRA for Retirement Savings"
                                summary="For retirement planning, a Gold IRA wins due to significant tax advantages—your gold grows tax-free or tax-deferred. However, for emergency preparedness or immediate access needs, physical gold at home provides flexibility that IRAs can't match. Many investors use both."
                                bestFor="Use a Gold IRA for long-term retirement savings; keep some physical gold for immediate access."
                            />
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2>Complete Side-by-Side Comparison</h2>
                            <p>
                                Here&apos;s how Gold IRAs compare to holding physical gold directly:
                            </p>
                            <ComparisonTable
                                optionAName="Gold IRA"
                                optionBName="Physical Gold (Direct)"
                                rows={comparisonRows}
                            />
                        </section>

                        {/* What is a Gold IRA */}
                        <section id="what-is-gold-ira" className="scroll-mt-32">
                            <h2>What is a Gold IRA?</h2>
                            <p>
                                A <strong>Gold IRA</strong> is a self-directed Individual Retirement Account that holds IRS-approved physical gold (and other precious metals) in a secure, third-party depository.
                            </p>
                            <p>
                                Key characteristics:
                            </p>
                            <ul>
                                <li>Gold is stored in an IRS-approved depository (not your home)</li>
                                <li>Fully insured against theft and damage</li>
                                <li>Tax-deferred (Traditional) or tax-free (Roth) growth</li>
                                <li>Same contribution limits as regular IRAs ($7,000 in 2026)</li>
                                <li>Early withdrawal penalties apply before age 59½</li>
                            </ul>
                            <p>
                                Learn more in our <Link href="/guide/gold-ira-guide">comprehensive Gold IRA guide</Link>.
                            </p>
                        </section>

                        {/* What is Physical Gold */}
                        <section id="what-is-physical" className="scroll-mt-32">
                            <h2>What is Physical Gold Ownership?</h2>
                            <p>
                                <strong>Physical gold ownership</strong> means buying gold coins, bars, or bullion and keeping it in your direct possession—at home, in a personal safe, or in a private vault.
                            </p>
                            <p>
                                Key characteristics:
                            </p>
                            <ul>
                                <li>You have immediate physical access to your gold</li>
                                <li>No IRS restrictions on which gold you can buy</li>
                                <li>No annual fees (though you may pay for insurance/storage)</li>
                                <li>Can sell anytime, anywhere, to anyone</li>
                                <li>Taxed as a &quot;collectible&quot; when sold (up to 28% capital gains)</li>
                            </ul>

                            <Callout type="warning" title="Home Storage Gold IRA Warning">
                                Some companies advertise &quot;home storage Gold IRAs&quot; where you can keep IRA gold at home. <strong>This is extremely risky.</strong> The IRS requires IRA metals to be stored at approved depositories. Home storage can trigger a full taxable distribution plus penalties. Don&apos;t confuse legitimate physical gold ownership (non-IRA) with these schemes.
                            </Callout>
                        </section>

                        {/* Tax Differences */}
                        <section id="tax-differences" className="scroll-mt-32">
                            <h2>Tax Differences: Gold IRA vs. Physical Gold</h2>
                            <p>
                                The tax treatment is the biggest difference between these two approaches:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="p-4 border-b font-bold text-primary">Tax Aspect</th>
                                            <th className="p-4 border-b font-bold text-primary">Gold IRA</th>
                                            <th className="p-4 border-b font-bold text-primary">Physical Gold</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        <tr>
                                            <td className="p-4 font-semibold">Purchase</td>
                                            <td className="p-4">Pre-tax (Traditional) or after-tax (Roth)</td>
                                            <td className="p-4">After-tax dollars only</td>
                                        </tr>
                                        <tr className="bg-background-subtle">
                                            <td className="p-4 font-semibold">Growth</td>
                                            <td className="p-4">Tax-deferred or tax-free</td>
                                            <td className="p-4">Taxable when sold</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">Sale/Withdrawal</td>
                                            <td className="p-4">Ordinary income tax (Traditional) or tax-free (Roth)</td>
                                            <td className="p-4">Collectibles tax: 28% max capital gains</td>
                                        </tr>
                                        <tr className="bg-background-subtle">
                                            <td className="p-4 font-semibold">Held &lt; 1 Year</td>
                                            <td className="p-4">N/A (retirement account)</td>
                                            <td className="p-4">Ordinary income tax rates</td>
                                        </tr>
                                        <tr className="bg-secondary/5">
                                            <td className="p-4 font-bold text-primary">Winner</td>
                                            <td className="p-4 font-bold text-green-600">Better for long-term</td>
                                            <td className="p-4">Simpler but higher tax burden</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>Example: $50,000 in Gold Appreciation</h3>
                            <p>
                                Suppose you buy $50,000 in gold and it doubles to $100,000 over 20 years:
                            </p>
                            <ul>
                                <li><strong>Physical Gold:</strong> You owe up to $14,000 in collectibles tax (28% × $50,000 gain)</li>
                                <li><strong>Roth Gold IRA:</strong> You owe $0 in taxes on qualified withdrawals</li>
                                <li><strong>Traditional Gold IRA:</strong> You owe ordinary income tax on withdrawals, but you got a tax deduction when contributing</li>
                            </ul>
                            <p>
                                The tax savings can be substantial over a retirement timeline.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Find the Best Gold IRA Company</h3>
                                <p className="mb-6 text-gray-200">Take our 60-second quiz to get matched with a company that fits your investment goals.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Storage & Security */}
                        <section id="storage-security" className="scroll-mt-32">
                            <h2>Storage & Security Comparison</h2>
                            <p>
                                How and where your gold is stored has significant implications:
                            </p>

                            <div className="not-prose space-y-6 my-8">
                                <div className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-lg">Gold IRA Storage</h4>
                                        <ul className="text-text-muted mt-2 space-y-1 text-sm">
                                            <li>• Stored in IRS-approved depositories (Delaware Depository, Brink&apos;s, etc.)</li>
                                            <li>• Armed security, 24/7 surveillance, climate control</li>
                                            <li>• Fully insured by Lloyd&apos;s of London or similar</li>
                                            <li>• Regular third-party audits</li>
                                            <li>• You can visit to view your metals (by appointment)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                                        <Home className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-lg">Physical Gold Storage (Home)</h4>
                                        <ul className="text-text-muted mt-2 space-y-1 text-sm">
                                            <li>• Home safe, hidden location, or bank safe deposit box</li>
                                            <li>• Security is your responsibility</li>
                                            <li>• Insurance required (homeowner&apos;s policy may not cover bullion)</li>
                                            <li>• Risk of theft, fire, or natural disaster</li>
                                            <li>• Immediate access whenever you need it</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <Callout type="tip" title="Best Practice">
                                If you hold physical gold at home, invest in a quality safe (bolted down), add a rider to your homeowner&apos;s insurance for precious metals, and don&apos;t tell people you have gold. Most home theft is opportunistic or involves someone who knew about the gold.
                            </Callout>
                        </section>

                        {/* Which to Choose */}
                        <section id="which-to-choose" className="scroll-mt-32">
                            <h2>Which Should You Choose?</h2>
                            <p>
                                The best choice depends on your goals:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                                    <ShieldCheck className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-green-700">Choose a Gold IRA if...</h4>
                                        <ul className="text-sm text-green-600 mt-2 space-y-1">
                                            <li>• Your primary goal is retirement savings</li>
                                            <li>• You want tax-advantaged growth</li>
                                            <li>• You prefer professional security and insurance</li>
                                            <li>• You have old 401(k)s or IRAs to roll over</li>
                                            <li>• You don&apos;t need immediate access to the gold</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-blue-50 border border-blue-100">
                                    <Lock className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-blue-700">Choose Physical Gold if...</h4>
                                        <ul className="text-sm text-blue-600 mt-2 space-y-1">
                                            <li>• You want immediate, direct access to your gold</li>
                                            <li>• Emergency preparedness is a priority</li>
                                            <li>• You value maximum privacy</li>
                                            <li>• You&apos;re already maxing out retirement accounts</li>
                                            <li>• You want complete control over your assets</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-secondary/10 border border-secondary/20">
                                    <DollarSign className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-primary">Consider Both if...</h4>
                                        <ul className="text-sm text-text-muted mt-2 space-y-1">
                                            <li>• You want tax-advantaged retirement gold AND immediate-access gold</li>
                                            <li>• You believe in diversifying how you hold assets</li>
                                            <li>• You want professional storage for most gold, but some at home for emergencies</li>
                                            <li>• You&apos;re following a comprehensive wealth protection strategy</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h3>The &quot;Both&quot; Strategy</h3>
                            <p>
                                Many sophisticated investors use both approaches:
                            </p>
                            <ul>
                                <li><strong>Gold IRA:</strong> The bulk of their precious metals for long-term retirement savings (tax advantages)</li>
                                <li><strong>Physical Gold:</strong> A smaller amount at home for immediate access and emergency preparedness</li>
                            </ul>
                            <p>
                                This provides tax benefits for the majority while maintaining some immediately accessible assets.
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Gold IRA vs. Physical Gold FAQs</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">Can I keep my Gold IRA gold at home?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        No. The IRS requires Gold IRA metals to be stored at an approved depository. &quot;Home storage Gold IRA&quot; schemes are risky and can result in the IRS treating your entire IRA as a distribution—triggering immediate taxes plus a 10% penalty if you&apos;re under 59½. If you want gold at home, buy it outside of an IRA.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">Is physical gold a good investment?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Gold is excellent for wealth preservation and inflation protection, but not designed for aggressive growth. It&apos;s best used as a portfolio diversifier (10-20% allocation). Gold tends to hold value during crashes when stocks fall—that&apos;s its main appeal. Whether in an IRA or physical form, the underlying value is the same.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">How do taxes compare between Gold IRA and physical gold?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Physical gold held outside an IRA is taxed as a collectible—28% max on long-term gains (or ordinary income for short-term). A Roth Gold IRA offers tax-free withdrawals. A Traditional Gold IRA defers taxes until withdrawal. For long-term holdings, a Gold IRA typically results in lower overall taxes. See our <Link href="/learn/gold-ira-tax-rules" className="text-secondary hover:underline">tax rules guide</Link> for details.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">What&apos;s the best way to buy physical gold?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Buy from reputable dealers with transparent pricing. Stick to well-known coins (American Gold Eagles, Canadian Maple Leafs) or bars from recognized mints. Avoid eBay and unverified sellers. Many Gold IRA companies also sell physical gold for direct ownership—they&apos;re vetted and reliable. See our <Link href="/reviews" className="text-secondary hover:underline">company reviews</Link>.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Explore Gold IRAs?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Find the best gold IRA company for your retirement savings with our free quiz.</p>
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

                    </article>
                </div>
            </Container>
        </main>
    );
}
