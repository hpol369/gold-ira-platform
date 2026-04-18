import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { ArrowRight, CheckCircle2, XCircle, DollarSign, AlertTriangle, Award, Scale, Building2, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/metadata";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Birch Gold Fees 2026: Complete Fee Breakdown & Cost Analysis",
    description: "Birch Gold fees breakdown: setup costs, annual fees, storage charges, and spreads. Compare to Augusta Precious Metals for best value.",
    keywords: ["birch gold fees", "birch gold group fees", "birch gold ira fees", "birch gold costs", "gold ira fees comparison"],
    openGraph: {
        title: "Birch Gold Fees 2026: Complete Fee Breakdown & Cost Analysis",
        description: "Complete breakdown of Birch Gold fees. Compare setup costs, annual fees, storage charges, and spreads with Augusta Precious Metals.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Birch Gold Fees 2026: Complete Fee Breakdown",
        description: "Complete breakdown of Birch Gold fees. Compare costs with Augusta Precious Metals.",
    },
    alternates: { canonical: getCanonicalUrl("/guide/birch-gold-fees") },
};

// FAQ data for schema markup
const faqData = [
    {
        question: "What are Birch Gold's setup fees?",
        answer: "Birch Gold charges a one-time setup fee of $50 when you open a new Gold IRA account. This covers the administrative costs of establishing your self-directed IRA with their custodian partner."
    },
    {
        question: "How much does Birch Gold charge for annual maintenance?",
        answer: "Birch Gold charges $100 per year for account maintenance. This fee covers custodian services, account administration, and quarterly statements. This is higher than some competitors like Augusta ($80/year)."
    },
    {
        question: "What are Birch Gold's storage fees?",
        answer: "Birch Gold charges $150 per year for segregated storage at an IRS-approved depository. This is a flat fee regardless of your account size, which benefits larger accounts."
    },
    {
        question: "Does Birch Gold have a minimum investment requirement?",
        answer: "Yes, Birch Gold has a minimum investment of $10,000 for new Gold IRA accounts. This is lower than Augusta's $50,000 minimum, making Birch Gold more accessible for smaller investors."
    },
    {
        question: "Are there hidden fees with Birch Gold?",
        answer: "While Birch Gold's administrative fees are transparent, be aware that spreads (the markup on precious metals) are the largest cost and aren't always clearly disclosed. Always request specific pricing before purchasing."
    },
    {
        question: "How do Birch Gold fees compare to Augusta?",
        answer: "Augusta has lower annual maintenance fees ($80 vs $100) and lower storage fees ($100 vs $150), but requires a higher minimum investment ($50,000 vs $10,000). For larger accounts, Augusta typically offers better value."
    }
];

// JSON-LD FAQ Schema
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

// Article schema for SEO
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Birch Gold Fees 2026: Complete Fee Breakdown & Cost Analysis",
    "description": "Complete breakdown of Birch Gold fees including setup costs, annual fees, storage charges, and spreads.",
    "datePublished": "2026-01-01",
    "dateModified": "2026-01-25",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    }
};

const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Guides", url: "/guide" },
    { name: "Birch Gold Fees", url: "/guide/birch-gold-fees" },
]);

export default function BirchGoldFeesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#0C0D18]">
            

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <SchemaScript schema={breadcrumbs} />

            <section className="pt-8 pb-4 bg-white">
                <Container>
                    <AnswerFirst
                        answer="Birch Gold Group charges a $50 setup fee, $100/year annual maintenance, and $150/year for storage — totaling $250/year in ongoing fees. Their $10,000 minimum is lower than competitors, but their total annual cost is $70 more than Augusta Precious Metals ($180/year)."
                        keyFacts={[
                            "Setup fee: $50 one-time; annual maintenance: $100/year; storage: $150/year",
                            "Total ongoing cost: $250/year (excluding spreads of 5-8% on gold purchases)",
                            "Minimum investment: $10,000 — lower than Augusta ($50,000) or Goldco ($25,000)",
                            "Augusta saves $70/year on fees: $80 maintenance + $100 storage = $180/year total",
                        ]}
                        className="max-w-3xl mx-auto"
                    />
                </Container>
            </section>

            {/* Header */}
            <header className="bg-[#0C0D18] py-16 md:py-24 border-b border-[#2A2D42]">
                <Container>
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-[#D4A94E] font-bold tracking-widest uppercase text-xs mb-4">
                            <DollarSign className="h-4 w-4" />
                            Fee Analysis
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#F6F4EF]">
                            Birch Gold Fees Breakdown
                        </h1>
                        <p className="text-xl text-[#D0CCC4] leading-relaxed">
                            Complete cost analysis of Birch Gold Group&apos;s Gold IRA fees. We break down every fee so you know exactly what you&apos;ll pay—and how it compares to our top-rated alternative.
                        </p>
                        <p className="text-sm text-[#A8A39A] mt-4">Last Updated: January 2026</p>
                    </div>
                </Container>
            </header>

            {/* Quick Summary */}
            <section className="py-12 bg-[#121423] border-b border-[#2A2D42]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-5 gap-6">
                            <div className="bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-xl p-5 text-center">
                                <p className="text-[#D0CCC4] text-sm mb-1">Setup Fee</p>
                                <p className="text-2xl font-bold text-[#F6F4EF]">$50</p>
                            </div>
                            <div className="bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-xl p-5 text-center">
                                <p className="text-[#D0CCC4] text-sm mb-1">Annual Fee</p>
                                <p className="text-2xl font-bold text-[#F6F4EF]">$100</p>
                            </div>
                            <div className="bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-xl p-5 text-center">
                                <p className="text-[#D0CCC4] text-sm mb-1">Storage Fee</p>
                                <p className="text-2xl font-bold text-[#F6F4EF]">$150/yr</p>
                            </div>
                            <div className="bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-xl p-5 text-center">
                                <p className="text-[#D0CCC4] text-sm mb-1">Wire Fee</p>
                                <p className="text-2xl font-bold text-[#F6F4EF]">$30</p>
                            </div>
                            <div className="bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-xl p-5 text-center">
                                <p className="text-[#D0CCC4] text-sm mb-1">Minimum</p>
                                <p className="text-2xl font-bold text-[#F6F4EF]">$10,000</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <Container>
                    <div className="max-w-4xl mx-auto">

                        {/* Detailed Fee Breakdown */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-8">Birch Gold Fee Structure</h2>

                            <div className="space-y-6">
                                {/* Setup Fee */}
                                <div className="bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-xl p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#F6F4EF]">Account Setup Fee</h3>
                                            <p className="text-[#D0CCC4] text-sm">One-time fee when you open your Gold IRA</p>
                                        </div>
                                        <span className="text-2xl font-bold text-[#D4A94E]">$50</span>
                                    </div>
                                    <p className="text-[#D0CCC4] text-sm">
                                        This covers the administrative costs of establishing your self-directed IRA with Birch Gold&apos;s custodian partner. This is competitive with industry standards of $50-$100.
                                    </p>
                                </div>

                                {/* Annual Fee */}
                                <div className="bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-xl p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#F6F4EF]">Annual Maintenance Fee</h3>
                                            <p className="text-[#D0CCC4] text-sm">Charged yearly by the custodian</p>
                                        </div>
                                        <span className="text-2xl font-bold text-[#D4A94E]">$100/year</span>
                                    </div>
                                    <p className="text-[#D0CCC4] text-sm mb-4">
                                        This is the IRA custodian&apos;s fee for maintaining your account, handling paperwork, and providing quarterly statements. This is slightly higher than the industry average of $75-$80.
                                    </p>
                                    <div className="bg-[#161828]0/10 border border-amber-500/20 rounded-lg p-4">
                                        <p className="text-amber-800 text-sm">
                                            <strong className="text-[#D4A94E]">Note:</strong> Augusta Precious Metals charges only $80/year for annual maintenance—saving you $20 annually.
                                        </p>
                                    </div>
                                </div>

                                {/* Storage Fee */}
                                <div className="bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-xl p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#F6F4EF]">Storage Fee</h3>
                                            <p className="text-[#D0CCC4] text-sm">Annual fee for IRS-approved depository</p>
                                        </div>
                                        <span className="text-2xl font-bold text-[#D4A94E]">$150/year</span>
                                    </div>
                                    <p className="text-[#D0CCC4] text-sm mb-4">
                                        Your physical gold must be stored at an IRS-approved depository. Birch Gold uses Delaware Depository, a reputable facility. This flat fee applies regardless of how much gold you hold.
                                    </p>
                                    <div className="bg-[rgba(220,38,38,0.08)]0/10 border border-red-500/20 rounded-lg p-4">
                                        <p className="text-red-800 text-sm">
                                            <strong className="text-red-700">Comparison:</strong> Augusta Precious Metals charges only $100/year for storage—saving you $50 annually on this fee alone.
                                        </p>
                                    </div>
                                </div>

                                {/* Wire Fee */}
                                <div className="bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-xl p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#F6F4EF]">Wire Transfer Fee</h3>
                                            <p className="text-[#D0CCC4] text-sm">For incoming/outgoing wire transfers</p>
                                        </div>
                                        <span className="text-2xl font-bold text-[#D4A94E]">$30</span>
                                    </div>
                                    <p className="text-[#D0CCC4] text-sm">
                                        Standard industry fee for wire transfers. Only applies when you move money in or out via wire. Most rollovers can be done via check or direct transfer to avoid this fee.
                                    </p>
                                </div>

                                {/* Spreads */}
                                <div className="bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-xl p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#F6F4EF]">Spreads (Markup)</h3>
                                            <p className="text-[#D0CCC4] text-sm">Difference between buy and sell price</p>
                                        </div>
                                        <span className="text-2xl font-bold text-[#D4A94E]">Varies</span>
                                    </div>
                                    <p className="text-[#D0CCC4] text-sm mb-4">
                                        This is where the real cost is. Birch Gold (like all dealers) charges a spread—the difference between what you pay to buy gold and what they&apos;ll pay when you sell. This is typically 5-8% above spot price for gold coins.
                                    </p>
                                    <div className="bg-[rgba(220,38,38,0.08)]0/10 border border-red-500/20 rounded-lg p-4">
                                        <p className="text-red-800 text-sm">
                                            <strong className="text-red-700">Important:</strong> Spreads are the largest cost in any Gold IRA and are often not clearly disclosed. Always request a specific price quote before purchasing. Augusta is known for transparent, competitive pricing on spreads.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Total Annual Cost Example */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-6">Total Annual Cost Example</h2>
                            <div className="bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-2xl p-6">
                                <h4 className="font-bold text-[#F6F4EF] mb-4">For a $50,000 Gold IRA with Birch Gold:</h4>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center p-3 bg-[#121423] rounded-lg">
                                        <span className="text-[#D0CCC4]">Year 1 Setup Fee</span>
                                        <span className="font-bold text-[#F6F4EF]">$50</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-[#121423] rounded-lg">
                                        <span className="text-[#D0CCC4]">Annual Maintenance Fee</span>
                                        <span className="font-bold text-[#F6F4EF]">$100</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-[#121423] rounded-lg">
                                        <span className="text-[#D0CCC4]">Storage Fee</span>
                                        <span className="font-bold text-[#F6F4EF]">$150</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-[#161828]0/10 rounded-lg border border-amber-500/30">
                                        <span className="text-amber-800 font-medium">First Year Total (excluding spreads)</span>
                                        <span className="font-bold text-[#D4A94E]">$300</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-[#121423] rounded-lg">
                                        <span className="text-[#D0CCC4] font-medium">Ongoing Annual Cost (Birch Gold)</span>
                                        <span className="font-bold text-[#F6F4EF]">$250/year</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-[rgba(46,139,87,0.08)]0/10 rounded-lg border border-green-500/30">
                                        <span className="text-green-800 font-medium">Ongoing Annual Cost (Augusta)</span>
                                        <span className="font-bold text-green-700">$180/year</span>
                                    </div>
                                </div>
                                <p className="text-[#D0CCC4] text-sm">
                                    By choosing Augusta over Birch Gold, you save $70/year on fees—that&apos;s $700 over 10 years not including potential savings on spreads.
                                </p>
                            </div>
                        </div>

                        {/* Comparison Table */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-6">Birch Gold Fees vs Augusta Precious Metals</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-[#2A2D42]">
                                            <th className="text-left p-4 text-[#F6F4EF] font-bold">Fee Type</th>
                                            <th className="text-left p-4 text-[#F6F4EF] font-bold">Birch Gold</th>
                                            <th className="text-left p-4 text-[#F6F4EF] font-bold">Augusta</th>
                                            <th className="text-left p-4 text-[#F6F4EF] font-bold">Savings</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[#D0CCC4]">
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-[#F6F4EF]">Account Setup</td>
                                            <td className="p-4">$50</td>
                                            <td className="p-4 text-green-700">$50</td>
                                            <td className="p-4 text-[#D0CCC4]">$0</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-[#F6F4EF]">Annual Maintenance</td>
                                            <td className="p-4">$100</td>
                                            <td className="p-4 text-green-700">$80</td>
                                            <td className="p-4 text-green-700">$20/year</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-[#F6F4EF]">Annual Storage</td>
                                            <td className="p-4">$150</td>
                                            <td className="p-4 text-green-700">$100</td>
                                            <td className="p-4 text-green-700">$50/year</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-[#F6F4EF]">Wire Transfer</td>
                                            <td className="p-4">$30</td>
                                            <td className="p-4">$30</td>
                                            <td className="p-4 text-[#D0CCC4]">$0</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-[#F6F4EF]">Minimum Investment</td>
                                            <td className="p-4">$10,000</td>
                                            <td className="p-4">$50,000</td>
                                            <td className="p-4 text-[#D0CCC4]">—</td>
                                        </tr>
                                        <tr className="bg-[#161828]0/5 border-b border-white/5">
                                            <td className="p-4 font-bold text-[#D4A94E]">Total Annual Fees</td>
                                            <td className="p-4 font-bold">$250/year</td>
                                            <td className="p-4 font-bold text-green-700">$180/year</td>
                                            <td className="p-4 font-bold text-green-700">$70/year</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-[#A8A39A] text-sm mt-4">
                                *Fee comparison based on publicly available information as of January 2026. Contact each company for current pricing.
                            </p>
                        </div>

                        {/* Pros and Cons */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-6">Birch Gold Fees: Pros & Cons</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-[rgba(46,139,87,0.08)]0/10 border border-green-500/20 rounded-xl p-6">
                                    <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5" />
                                        Advantages
                                    </h3>
                                    <ul className="space-y-3 text-green-800">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 mt-1 shrink-0" />
                                            Low $10,000 minimum (accessible for beginners)
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 mt-1 shrink-0" />
                                            Competitive $50 setup fee
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 mt-1 shrink-0" />
                                            Flat storage fee (benefits larger accounts)
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 mt-1 shrink-0" />
                                            Uses reputable Delaware Depository
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 mt-1 shrink-0" />
                                            Established company since 2003
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-[rgba(220,38,38,0.08)]0/10 border border-red-500/20 rounded-xl p-6">
                                    <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                                        <XCircle className="h-5 w-5" />
                                        Disadvantages
                                    </h3>
                                    <ul className="space-y-3 text-red-800">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 mt-1 shrink-0" />
                                            $100 annual fee is above average
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 mt-1 shrink-0" />
                                            $150 storage fee is $50 more than Augusta
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 mt-1 shrink-0" />
                                            Spreads not transparently disclosed
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 mt-1 shrink-0" />
                                            Less educational content than Augusta
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 mt-1 shrink-0" />
                                            $70/year more expensive than top competitors
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Why Augusta is Better Value */}
                        <div className="mb-16">
                            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Award className="h-8 w-8 text-[#D4A94E]" />
                                    <h2 className="text-2xl font-bold text-[#F6F4EF]">Why We Recommend Augusta Instead</h2>
                                </div>
                                <p className="text-[#D0CCC4] mb-6">
                                    While Birch Gold has a lower minimum investment ($10,000 vs $50,000), for investors who qualify, <strong className="text-[#D4A94E]">Augusta Precious Metals</strong> offers significantly better value:
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-xl p-4 text-center">
                                        <Scale className="h-8 w-8 text-[#D4A94E] mx-auto mb-2" />
                                        <p className="text-2xl font-bold text-[#F6F4EF] mb-1">$70</p>
                                        <p className="text-[#D0CCC4] text-sm">Annual Fee Savings</p>
                                    </div>
                                    <div className="bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-xl p-4 text-center">
                                        <Building2 className="h-8 w-8 text-[#D4A94E] mx-auto mb-2" />
                                        <p className="text-2xl font-bold text-[#F6F4EF] mb-1">$700+</p>
                                        <p className="text-[#D0CCC4] text-sm">10-Year Savings</p>
                                    </div>
                                    <div className="bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-xl p-4 text-center">
                                        <CheckCircle2 className="h-8 w-8 text-green-700 mx-auto mb-2" />
                                        <p className="text-2xl font-bold text-[#F6F4EF] mb-1">A+ BBB</p>
                                        <p className="text-[#D0CCC4] text-sm">Rating & 0 Complaints</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-[#D0CCC4] mb-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5 shrink-0" />
                                        <span><strong className="text-[#F6F4EF]">Lower annual fees:</strong> $180/year vs Birch Gold&apos;s $250/year</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5 shrink-0" />
                                        <span><strong className="text-[#F6F4EF]">Transparent pricing:</strong> Augusta is known for clear, upfront spread disclosure</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5 shrink-0" />
                                        <span><strong className="text-[#F6F4EF]">Education-first approach:</strong> Free one-on-one web conference to learn before you buy</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5 shrink-0" />
                                        <span><strong className="text-[#F6F4EF]">Lifetime support:</strong> Dedicated account representative for life</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5 shrink-0" />
                                        <span><strong className="text-[#F6F4EF]">No pushy sales:</strong> Never pressured to buy—they let the education speak for itself</span>
                                    </li>
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <LeadCaptureButton variant="default" source="birch-gold-fees" className="bg-[#161828]0 hover:bg-amber-600 text-[#F6F4EF] px-6 py-3 rounded-lg font-semibold inline-flex items-center">
                                        Get Free Augusta Consultation <ArrowRight className="ml-2 h-4 w-4" />
                                    </LeadCaptureButton>
                                    <Button variant="outline" size="lg" asChild className="border-white/20 text-[#F6F4EF] hover:bg-[#2A2D42]">
                                        <Link href="/reviews/augusta-precious-metals">
                                            Read Full Augusta Review
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-6 flex items-center gap-3">
                                <HelpCircle className="h-8 w-8 text-[#D4A94E]" />
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
                                {faqData.map((faq, index) => (
                                    <details key={index} className="group bg-[#0C0D18] backdrop-blur border border-[#2A2D42] rounded-xl p-6">
                                        <summary className="flex cursor-pointer items-center justify-between text-[#F6F4EF] font-bold">
                                            {faq.question}
                                            <span className="text-[#D4A94E] group-open:rotate-45 transition-transform">+</span>
                                        </summary>
                                        <p className="mt-4 text-[#D0CCC4]">
                                            {faq.answer}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-[#F6F4EF] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-[#F6F4EF]">Want Lower Fees Than Birch Gold?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">
                                    Augusta Precious Metals offers lower annual fees, transparent pricing, and world-class education. Get a free consultation to see exactly what you&apos;ll pay—no hidden costs.
                                </p>
                                <LeadCaptureButton variant="default" source="birch-gold-fees" className="bg-[#161828]0 hover:bg-amber-600 text-[#F6F4EF] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center">
                                    Get Free Fee Comparison <ArrowRight className="ml-2 w-5 h-5" />
                                </LeadCaptureButton>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Footer CTA */}
            <section className="py-16 bg-[#121423]">
                <Container>
                    <AugustaCTA variant="footer" trackSource="guide-birch-gold-fees" />
                </Container>
            </section>

            
        </main>
    );
}
