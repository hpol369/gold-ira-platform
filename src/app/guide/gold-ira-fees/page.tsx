import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2, AlertTriangle, DollarSign, Calculator, Percent, Building2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Gold IRA Fees Guide 2026: Complete Fee Breakdown & Comparison",
    description: "Complete guide to gold IRA fees in 2026. Understand setup fees, storage fees, custodian fees, and dealer markups. Compare fees across top companies.",
};

const tocItems = [
    { id: "overview", label: "Fee Overview" },
    { id: "fee-types", label: "Types of Fees" },
    { id: "company-comparison", label: "Company Fee Comparison" },
    { id: "hidden-fees", label: "Hidden Fees to Watch" },
    { id: "minimize-fees", label: "How to Minimize Fees" },
    { id: "fee-vs-value", label: "Fees vs. Value" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Gold IRA Fees: Complete 2026 Guide",
            "description": "Complete guide to gold IRA fees in 2026. Understand setup fees, storage fees, custodian fees, and dealer markups. Compare fees across top companies.",
            "image": "https://richdadretirement.com/images/fees-guide-cover.jpg",
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
                    "name": "Are gold IRA fees tax-deductible?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Not directly. IRA fees paid from within the account reduce your balance but aren't separately deductible. However, if you pay fees from outside funds, they may be deductible as investment expenses (consult a tax professional, as tax laws change)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why are gold IRA fees higher than regular IRAs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Physical storage. Regular IRAs hold electronic securities that cost nothing to store. Gold IRAs hold physical metals in secure, insured vaults with armed guards, surveillance, and insurance. These costs are passed on to account holders, typically adding $100-300 per year."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I avoid gold IRA fees entirely?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Not entirely—storage and custodian fees are unavoidable for IRA-held metals. However, companies like Augusta Precious Metals waive up to 10 years of fees for larger accounts, effectively eliminating ongoing costs for a decade. You'll still pay premiums on metal purchases."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What's the difference between segregated and commingled storage?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Segregated storage means your specific bars and coins are stored separately, in your own allocated space. Commingled storage means your metals are pooled with others' identical products—you own a specific quantity, but not specific bars. Segregated costs more but ensures you get the exact items you purchased when you take distribution."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do gold IRA fees eat into my returns?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, but typically modestly. On a $50,000 account paying $225/year in fees, that's 0.45% annually—comparable to many low-cost ETFs. The key is whether gold's portfolio protection and potential appreciation outweigh these costs for your situation. Many investors find the inflation protection alone justifies the fees."
                    }
                }
            ]
        }
    ]
};

export default function GoldIraFeesGuidePage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-50 py-20 border-b border-slate-200">
                <Container>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#B22234]/10 px-4 py-1.5 text-sm font-semibold text-[#B22234] mb-6 border border-[#B22234]/20">
                            <span className="w-2 h-2 rounded-full bg-[#B22234]"></span>
                            Updated for 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-[#000080]">
                            Gold IRA Fees: Complete 2026 Guide
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                            Understand exactly what you&apos;ll pay for a gold IRA—and how to minimize fees without sacrificing quality.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-a:text-[#B22234] max-w-none">

                        {/* Intro Content */}
                        <p className="lead text-xl text-slate-600">
                            <strong className="text-[#000080]">Gold IRA fees</strong> are typically higher than standard IRA fees—but the difference might be smaller than you think. Understanding the fee structure helps you choose the right company and avoid overpaying. This guide breaks down every fee you&apos;ll encounter.
                        </p>

                        <p className="text-slate-600">
                            The typical gold IRA costs <strong className="text-[#000080]">$225-$350 per year</strong> in ongoing fees (custodian + storage), plus a one-time setup fee and the dealer&apos;s markup on metals. Some companies waive fees for larger accounts, potentially saving you thousands over time.
                        </p>

                        <Callout type="tip" title="Key Insight">
                            Don&apos;t choose a gold IRA company based on fees alone. A company with slightly higher fees but better service, pricing, and buyback terms often provides better overall value. That said, understanding fees helps you make an informed decision.
                        </Callout>

                        {/* Section 1: Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <h2 className="text-[#000080]">Gold IRA Fee Overview</h2>
                            <p className="text-slate-600">
                                Gold IRAs involve <strong className="text-[#000080]">four main categories of fees</strong>. Here&apos;s a quick overview before we dive into the details:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Fee Category</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Typical Range</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">When Paid</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="p-4 font-semibold text-[#000080]">Setup/Account Fee</td>
                                            <td className="p-4 text-slate-600">$0 - $150</td>
                                            <td className="p-4 text-slate-600">One-time (account opening)</td>
                                        </tr>
                                        <tr className="bg-slate-100">
                                            <td className="p-4 font-semibold text-[#000080]">Annual Custodian Fee</td>
                                            <td className="p-4 text-slate-600">$75 - $300</td>
                                            <td className="p-4 text-slate-600">Yearly</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-[#000080]">Storage Fee</td>
                                            <td className="p-4 text-slate-600">$100 - $300/year</td>
                                            <td className="p-4 text-slate-600">Yearly</td>
                                        </tr>
                                        <tr className="bg-slate-100">
                                            <td className="p-4 font-semibold text-[#000080]">Dealer Markup</td>
                                            <td className="p-4 text-slate-600">2% - 10%+</td>
                                            <td className="p-4 text-slate-600">Per purchase (over spot)</td>
                                        </tr>
                                        <tr className="bg-[#B22234]/5">
                                            <td className="p-4 font-bold text-[#000080]">Total First Year</td>
                                            <td className="p-4 font-bold text-[#000080]">$225 - $750+</td>
                                            <td className="p-4 font-medium text-[#B22234]">Plus metal markup</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-slate-600">
                                Why are gold IRA fees higher than regular IRAs? <strong className="text-[#000080]">Physical storage and insurance.</strong> Traditional IRAs hold electronic securities that cost nothing to store. Gold IRAs hold physical metals in secure, insured vaults—that costs money. Think of it as the price of owning real assets instead of paper promises.
                            </p>
                        </section>

                        {/* Section 2: Fee Types */}
                        <section id="fee-types" className="scroll-mt-32">
                            <h2 className="text-[#000080]">Types of Gold IRA Fees Explained</h2>
                            <p className="text-slate-600">
                                Let&apos;s examine each fee type in detail so you know exactly what you&apos;re paying for:
                            </p>

                            <div className="not-prose my-8">
                                <div className="space-y-6">
                                    <div className="flex gap-4 p-6 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
                                            <DollarSign className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#000080] text-lg">Setup/Account Opening Fee</h4>
                                            <p className="text-slate-600 mt-2"><strong className="text-[#000080]">Range: $0 - $150</strong></p>
                                            <p className="text-slate-600 mt-1">A one-time fee to establish your self-directed IRA. Covers paperwork, account creation, and initial administration. Many companies waive this for larger accounts or as a promotional offer.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-6 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                        <div className="w-12 h-12 rounded-full bg-[#B22234]/10 text-[#B22234] flex items-center justify-center font-bold shrink-0">
                                            <Building2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#000080] text-lg">Annual Custodian/Administration Fee</h4>
                                            <p className="text-slate-600 mt-2"><strong className="text-[#000080]">Range: $75 - $300/year</strong></p>
                                            <p className="text-slate-600 mt-1">Paid to the IRA custodian for maintaining your account, handling IRS reporting, processing transactions, and providing statements. Some custodians charge flat fees; others charge based on account value.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-6 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                        <div className="w-12 h-12 rounded-full bg-green-900/50 text-green-700 flex items-center justify-center font-bold shrink-0">
                                            <Building2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#000080] text-lg">Annual Storage Fee</h4>
                                            <p className="text-slate-600 mt-2"><strong className="text-[#000080]">Range: $100 - $300/year</strong></p>
                                            <p className="text-slate-600 mt-1">Paid to the depository that houses your metals. Covers vault space, security, insurance, and auditing. Can be flat-rate or percentage-based. Segregated storage (your metals stored separately) costs more than commingled storage.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-6 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                        <div className="w-12 h-12 rounded-full bg-amber-900/50 text-amber-700 flex items-center justify-center font-bold shrink-0">
                                            <Percent className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#000080] text-lg">Dealer Markup (Premium Over Spot)</h4>
                                            <p className="text-slate-600 mt-2"><strong className="text-[#000080]">Range: 2% - 10%+ over spot price</strong></p>
                                            <p className="text-slate-600 mt-1">This is where companies make most of their money. The &quot;spot price&quot; is the raw metal value; the &quot;premium&quot; covers minting, distribution, and dealer profit. Premiums vary by product—bars are lowest, rare coins are highest.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-[#000080]">Additional Fees to Know About</h3>
                            <ul className="text-slate-600">
                                <li><strong className="text-[#000080]">Wire transfer fee:</strong> $25-50 per transfer (some companies cover this)</li>
                                <li><strong className="text-[#000080]">Termination fee:</strong> $0-250 to close your account</li>
                                <li><strong className="text-[#000080]">Selling/liquidation fee:</strong> Some companies charge to sell your metals back</li>
                                <li><strong className="text-[#000080]">Shipping fee:</strong> Usually included, but verify for distributions</li>
                            </ul>
                        </section>

                        {/* Section 3: Company Comparison */}
                        <section id="company-comparison" className="scroll-mt-32">
                            <h2 className="text-[#000080]">Gold IRA Fee Comparison by Company</h2>
                            <p className="text-slate-600">
                                Here&apos;s how the <strong className="text-[#000080]">top gold IRA companies</strong> compare on fees:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Company</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Setup Fee</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Annual Fees</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Fee Waivers</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="p-4 font-semibold"><Link href="/reviews/augusta-precious-metals" className="text-[#B22234] hover:underline">Augusta Precious Metals</Link></td>
                                            <td className="p-4 text-slate-600">$50</td>
                                            <td className="p-4 text-slate-600">$225 (custodian + storage)</td>
                                            <td className="p-4 text-green-700 font-medium">Up to 10 years waived ($50k+)</td>
                                        </tr>
                                        <tr className="bg-slate-100">
                                            <td className="p-4 font-semibold"><Link href="/reviews/noble-gold" className="text-[#B22234] hover:underline">Noble Gold</Link></td>
                                            <td className="p-4 text-slate-600">$80</td>
                                            <td className="p-4 text-slate-600">$225-$250</td>
                                            <td className="p-4 text-slate-600">First year waived (promotions)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold"><Link href="/reviews/goldco" className="text-[#B22234] hover:underline">Goldco</Link></td>
                                            <td className="p-4 text-slate-600">$50</td>
                                            <td className="p-4 text-slate-600">$225-$275</td>
                                            <td className="p-4 text-slate-600">First year waived</td>
                                        </tr>
                                        <tr className="bg-slate-100">
                                            <td className="p-4 font-semibold"><Link href="/reviews/birch-gold" className="text-[#B22234] hover:underline">Birch Gold Group</Link></td>
                                            <td className="p-4 text-slate-600">$50</td>
                                            <td className="p-4 text-slate-600">$200-$250</td>
                                            <td className="p-4 text-slate-600">Case-by-case</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold"><Link href="/reviews/american-hartford-gold" className="text-[#B22234] hover:underline">American Hartford Gold</Link></td>
                                            <td className="p-4 text-slate-600">$0</td>
                                            <td className="p-4 text-slate-600">$180-$230</td>
                                            <td className="p-4 text-slate-600">No setup fee; promotions available</td>
                                        </tr>
                                        <tr className="bg-slate-100">
                                            <td className="p-4 font-semibold"><Link href="/reviews/advantage-gold" className="text-[#B22234] hover:underline">Advantage Gold</Link></td>
                                            <td className="p-4 text-slate-600">$50</td>
                                            <td className="p-4 text-slate-600">$150-$200</td>
                                            <td className="p-4 text-slate-600">Low minimums, competitive fees</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Callout type="tip" title="Best Value Tip">
                                For accounts over $50,000, <Link href="/reviews/augusta-precious-metals">Augusta Precious Metals</Link> often waives up to 10 years of fees—a potential savings of $2,250+. For smaller accounts, <Link href="/reviews/noble-gold">Noble Gold</Link> and <Link href="/reviews/advantage-gold">Advantage Gold</Link> offer competitive pricing without high minimums.
                            </Callout>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-[#000080] text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-[#000080]">Compare Gold IRA Fees Instantly</h3>
                                <p className="mb-6 text-gray-200">Take our 60-second quiz to get personalized fee comparisons based on your investment amount.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Get My Fee Comparison <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Section 4: Hidden Fees */}
                        <section id="hidden-fees" className="scroll-mt-32">
                            <h2 className="text-[#000080]">Hidden Fees to Watch Out For</h2>
                            <p className="text-slate-600">
                                Some gold IRA companies bury fees in the fine print or make money in less obvious ways. Here are the <strong className="text-[#000080]">hidden fees</strong> to ask about:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-900/20 border border-amber-500/20">
                                    <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-700">Excessive Premiums</h4>
                                        <p className="text-sm text-amber-800/80 mt-1">The biggest &quot;hidden&quot; cost is often inflated premiums over spot price. A company might have low fees but charge 15% over spot when competitors charge 5%. Always ask for total purchase price, not just fees.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-900/20 border border-amber-500/20">
                                    <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-700">Percentage-Based Storage</h4>
                                        <p className="text-sm text-amber-800/80 mt-1">Some depositories charge a percentage of your holdings (e.g., 0.5%/year) instead of a flat fee. For large accounts, this can mean hundreds or thousands more per year than flat-rate storage.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-900/20 border border-amber-500/20">
                                    <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-700">Poor Buyback Pricing</h4>
                                        <p className="text-sm text-amber-800/80 mt-1">Some companies offer low purchase premiums but buy back at deep discounts. Ask about the &quot;spread&quot; between buy and sell prices. Reputable companies buy back at competitive rates.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-900/20 border border-amber-500/20">
                                    <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-700">Liquidation Fees</h4>
                                        <p className="text-sm text-amber-800/80 mt-1">Some companies charge fees when you sell your metals or take a distribution. These can range from $50 to several hundred dollars. Ask about all exit costs upfront.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-900/20 border border-amber-500/20">
                                    <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-700">Minimum Balance Fees</h4>
                                        <p className="text-sm text-amber-800/80 mt-1">Some custodians charge extra if your account falls below a certain value. Make sure you understand any minimum balance requirements.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-[#000080]">Questions to Ask Before Opening an Account</h3>
                            <ol className="text-slate-600">
                                <li>What is the <strong className="text-[#000080]">total premium</strong> over spot price for the products I want?</li>
                                <li>Is storage <strong className="text-[#000080]">flat-rate or percentage-based</strong>?</li>
                                <li>What is your <strong className="text-[#000080]">buyback policy</strong> and pricing?</li>
                                <li>Are there any <strong className="text-[#000080]">fees to close</strong> my account?</li>
                                <li>What <strong className="text-[#000080]">fee waivers or promotions</strong> are currently available?</li>
                            </ol>
                        </section>

                        {/* Section 5: Minimize Fees */}
                        <section id="minimize-fees" className="scroll-mt-32">
                            <h2 className="text-[#000080]">How to Minimize Gold IRA Fees</h2>
                            <p className="text-slate-600">
                                While you can&apos;t avoid all fees, these strategies can significantly reduce your costs:
                            </p>

                            <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200 not-prose my-8">
                                <h4 className="font-bold text-[#000080] text-lg mb-4">Fee-Saving Strategies:</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#B22234] mt-0.5 flex-shrink-0" />
                                        <div className="text-slate-600">
                                            <strong className="text-[#000080]">Invest more upfront:</strong> Many companies waive fees for accounts over $50,000. Even if you don&apos;t have that much, consolidating multiple retirement accounts can help you hit fee-waiver thresholds.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#B22234] mt-0.5 flex-shrink-0" />
                                        <div className="text-slate-600">
                                            <strong className="text-[#000080]">Choose bars over coins:</strong> Silver and gold bars typically carry lower premiums than coins (2-5% vs. 5-15%). You get more metal for your money.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#B22234] mt-0.5 flex-shrink-0" />
                                        <div className="text-slate-600">
                                            <strong className="text-[#000080]">Ask about promotions:</strong> Companies frequently run promotions—free storage for a year, waived setup fees, or bonus silver. Always ask what&apos;s currently available.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#B22234] mt-0.5 flex-shrink-0" />
                                        <div className="text-slate-600">
                                            <strong className="text-[#000080]">Choose commingled storage:</strong> If having your exact coins stored separately isn&apos;t important to you, commingled (pooled) storage is typically cheaper than segregated storage.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#B22234] mt-0.5 flex-shrink-0" />
                                        <div className="text-slate-600">
                                            <strong className="text-[#000080]">Consider gold-heavy portfolios:</strong> Gold has a higher value-to-weight ratio than silver. A gold-heavy portfolio costs less to store than the same dollar amount in silver.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#B22234] mt-0.5 flex-shrink-0" />
                                        <div className="text-slate-600">
                                            <strong className="text-[#000080]">Make fewer, larger purchases:</strong> Some companies charge transaction fees. Fewer, larger purchases minimize transaction costs and potentially give you leverage for better premiums.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 6: Fees vs Value */}
                        <section id="fee-vs-value" className="scroll-mt-32">
                            <h2 className="text-[#000080]">Fees vs. Value: The Bigger Picture</h2>
                            <p className="text-slate-600">
                                <strong className="text-[#000080]">The cheapest gold IRA isn&apos;t always the best value.</strong> Here&apos;s why:
                            </p>

                            <h3 className="text-[#000080]">What &quot;Value&quot; Looks Like Beyond Fees</h3>
                            <ul className="text-slate-600">
                                <li><strong className="text-[#000080]">Competitive metal pricing:</strong> A company charging $50 less in annual fees but 3% higher premiums costs you more on a $50,000 investment</li>
                                <li><strong className="text-[#000080]">Quality customer service:</strong> Knowledgeable, responsive support saves you time and helps you make better decisions</li>
                                <li><strong className="text-[#000080]">Strong buyback program:</strong> Companies that buy back at fair prices protect your investment when it&apos;s time to sell</li>
                                <li><strong className="text-[#000080]">Education and guidance:</strong> Learning what to buy (and what to avoid) can be worth far more than fee savings</li>
                                <li><strong className="text-[#000080]">Reputation and longevity:</strong> Established companies are more likely to be around when you need them in retirement</li>
                            </ul>

                            <h3 className="text-[#000080]">A Real Example</h3>
                            <p className="text-slate-600">
                                Consider two companies for a $50,000 gold IRA:
                            </p>
                            <ul className="text-slate-600">
                                <li><strong className="text-[#000080]">Company A:</strong> $300/year fees, 8% premium over spot = $4,000 in premiums + $300 fees = $4,300 first year cost</li>
                                <li><strong className="text-[#000080]">Company B:</strong> $225/year fees (waived first year), 4% premium = $2,000 in premiums + $0 fees = $2,000 first year cost</li>
                            </ul>
                            <p className="text-slate-600">
                                Company B—despite potentially being more &quot;expensive&quot; on paper—saves you $2,300 in the first year alone. Always calculate <strong className="text-[#000080]">total cost</strong>, not just fees.
                            </p>

                            <Callout type="tip" title="Bottom Line">
                                For most investors, total first-year costs of $2,500-3,500 (fees + premiums on $50k) represent good value from a reputable company. Be suspicious of companies that seem dramatically cheaper—they usually make it up elsewhere.
                            </Callout>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2 className="text-[#000080]">Gold IRA Fees FAQs</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Are gold IRA fees tax-deductible?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-50 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Not directly. IRA fees paid from within the account reduce your balance but aren&apos;t separately deductible. However, if you pay fees from outside funds, they may be deductible as investment expenses (consult a tax professional, as tax laws change).
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Why are gold IRA fees higher than regular IRAs?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-50 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Physical storage. Regular IRAs hold electronic securities that cost nothing to store. Gold IRAs hold physical metals in secure, insured vaults with armed guards, surveillance, and insurance. These costs are passed on to account holders, typically adding $100-300 per year.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Can I avoid gold IRA fees entirely?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-50 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Not entirely—storage and custodian fees are unavoidable for IRA-held metals. However, companies like <Link href="/reviews/augusta-precious-metals" className="text-[#B22234] hover:underline">Augusta Precious Metals</Link> waive up to 10 years of fees for larger accounts, effectively eliminating ongoing costs for a decade. You&apos;ll still pay premiums on metal purchases.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">What&apos;s the difference between segregated and commingled storage?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-50 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        <strong className="text-[#000080]">Segregated storage</strong> means your specific bars and coins are stored separately, in your own allocated space. <strong className="text-[#000080]">Commingled storage</strong> means your metals are pooled with others&apos; identical products—you own a specific quantity, but not specific bars. Segregated costs more but ensures you get the exact items you purchased when you take distribution.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Do gold IRA fees eat into my returns?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-50 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Yes, but typically modestly. On a $50,000 account paying $225/year in fees, that&apos;s 0.45% annually—comparable to many low-cost ETFs. The key is whether gold&apos;s portfolio protection and potential appreciation outweigh these costs for your situation. Many investors find the inflation protection alone justifies the fees.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-[#000080] relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-[#000080]">Find the Best Value Gold IRA</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Our quiz matches you with companies based on your investment amount, finding the best combination of low fees and quality service.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Get Personalized Recommendations <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-[#000080] hover:bg-slate-200">
                                        <Link href="/reviews">Compare All Companies</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>

            {/* CTA Section */}
            <section className="py-16 bg-slate-100">
                <Container>
                    <AugustaCTA variant="footer" linkContext="fees" trackSource="guide-gold-ira-fees" />
                </Container>
            </section>
        </main>
    );
}
