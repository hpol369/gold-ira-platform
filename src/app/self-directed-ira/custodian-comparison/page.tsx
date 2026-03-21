import { Container } from "@/components/ui/Container";
import { Callout } from "@/components/ui/Callout";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { RelatedContent } from "@/components/content/RelatedContent";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Best Self-Directed IRA Custodians: Fees & Features Compared (2026)",
    description: "Compare the top self-directed IRA custodians for 2026. Side-by-side fees, asset types, minimums, and features for Equity Trust, Millennium Trust, PENSCO, Entrust, and Kingdom Trust.",
    alternates: {
        canonical: "https://richdadretirement.com/self-directed-ira/custodian-comparison",
    },
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Best Self-Directed IRA Custodians: Fees & Features Compared (2026)",
            "description": "Compare the top self-directed IRA custodians. Side-by-side fees, asset types, minimums, and features.",
            "author": { "@type": "Organization", "name": "Rich Dad Retirement" },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": { "@type": "ImageObject", "url": "https://richdadretirement.com/logo.png" },
            },
            "datePublished": "2026-03-19",
            "dateModified": "2026-03-19",
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://richdadretirement.com" },
                { "@type": "ListItem", "position": 2, "name": "Self-Directed IRA", "item": "https://richdadretirement.com/self-directed-ira" },
                { "@type": "ListItem", "position": 3, "name": "Custodian Comparison", "item": "https://richdadretirement.com/self-directed-ira/custodian-comparison" },
            ],
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is a self-directed IRA custodian?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A self-directed IRA custodian is an IRS-approved financial institution that holds and administers your self-directed IRA. Unlike regular IRA custodians (like Fidelity or Schwab), self-directed custodians allow you to invest in alternative assets such as real estate, precious metals, private equity, cryptocurrency, and more. They handle paperwork, reporting, and compliance but do not provide investment advice.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "How much do self-directed IRA custodians charge?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Self-directed IRA custodians typically charge: setup fees ($50-$300), annual maintenance fees ($75-$400), transaction fees ($25-$250 per transaction), and asset-specific fees (like precious metals storage at $100-$300/year). Total annual costs usually range from $200-$1,000 depending on account size, asset types, and transaction volume.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between a custodian and a trustee for a self-directed IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A custodian holds and safeguards IRA assets and handles administrative duties, while a trustee has broader authority to manage trust assets. For most self-directed IRA investors, the terms are used interchangeably. The key distinction: a trustee may have discretionary authority over investments, while a custodian follows your directions exactly. Most self-directed IRA companies act as custodians.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Can I switch self-directed IRA custodians?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. You can transfer your self-directed IRA to a different custodian through a trustee-to-trustee transfer, which is tax-free and penalty-free. The process typically takes 2-4 weeks. Some custodians charge a transfer-out or account closure fee ($50-$150). Make sure the new custodian supports all the asset types you currently hold before initiating the transfer.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Do I need a custodian for a self-directed IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The IRS requires that all IRAs (including self-directed) be held by an IRS-approved custodian or trustee. You cannot hold IRA assets yourself (with the exception of a checkbook-control IRA LLC, where the LLC holds the assets but the IRA still has a custodian). Going without a custodian means your account isn't actually an IRA and you lose all tax advantages.",
                    },
                },
            ],
        },
    ],
};

export default function CustodianComparisonPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={schema} />
            <Navbar />

            {/* Header */}
            <header className="bg-slate-50 py-20 relative overflow-hidden border-b border-slate-200">
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#B22234]/10 border border-[#B22234]/20 text-sm font-semibold text-[#B22234] mb-6">
                        2026 Comparison Guide
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#000080]">
                        Best Self-Directed IRA Custodians
                    </h1>
                    <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
                        Your custodian can make or break your self-directed IRA experience. Here&apos;s how the top 5 stack up on fees, asset types, and real-world usability.
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <article className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600">

                    {/* Answer First */}
                    <div className="not-prose mb-8">
                        <AnswerFirst
                            answer="The best self-directed IRA custodian depends on what you're investing in. Equity Trust is the largest and most versatile (real estate, metals, crypto, private equity). Entrust Group offers the lowest fees for simple accounts. Kingdom Trust is best for cryptocurrency IRAs. For precious metals specifically, Augusta Precious Metals handles custodian setup and storage as part of their service, making the process significantly easier."
                            keyFacts={[
                                "Setup fees range from $0 to $300 depending on the custodian",
                                "Annual maintenance fees: $75-$400/year across the top custodians",
                                "Equity Trust holds over $39 billion in assets across 350,000+ accounts",
                                "Transaction fees: $25-$250 per transaction depending on asset type",
                            ]}
                        />
                    </div>

                    <p>
                        Choosing the wrong custodian is one of the most expensive mistakes self-directed IRA investors make. Some charge hidden transaction fees. Others take weeks to process a real estate closing. And a few don&apos;t even support the assets you want to invest in.
                    </p>
                    <p>
                        We compared the 5 most popular self-directed IRA custodians on the factors that actually matter: fees, supported assets, minimums, processing speed, and customer experience.
                    </p>

                    {/* Main Comparison Table */}
                    <h2>Self-Directed IRA Custodian Comparison Table</h2>

                    <div className="overflow-x-auto not-prose my-8">
                        <table className="w-full text-left border-collapse bg-white rounded-xl border border-slate-200 shadow-sm text-sm">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">Feature</th>
                                    <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">Equity Trust</th>
                                    <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">Millennium Trust</th>
                                    <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">PENSCO</th>
                                    <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">Entrust Group</th>
                                    <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">Kingdom Trust</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 text-slate-600">
                                <tr>
                                    <td className="p-4 font-semibold text-slate-900">Setup Fee</td>
                                    <td className="p-4">$50</td>
                                    <td className="p-4">$100</td>
                                    <td className="p-4">$0-$150</td>
                                    <td className="p-4">$0</td>
                                    <td className="p-4">$0</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-slate-900">Annual Fee</td>
                                    <td className="p-4">$225-$400</td>
                                    <td className="p-4">$75-$200</td>
                                    <td className="p-4">$150-$275</td>
                                    <td className="p-4">$99-$399</td>
                                    <td className="p-4">$125-$300</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-slate-900">Transaction Fee</td>
                                    <td className="p-4">$25-$250</td>
                                    <td className="p-4">$50-$200</td>
                                    <td className="p-4">$35-$200</td>
                                    <td className="p-4">$25-$100</td>
                                    <td className="p-4">$50-$250</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-slate-900">Account Minimum</td>
                                    <td className="p-4">$500</td>
                                    <td className="p-4">$5,000</td>
                                    <td className="p-4">$0</td>
                                    <td className="p-4">$0</td>
                                    <td className="p-4">$0</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-slate-900">Real Estate</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-slate-900">Precious Metals</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-slate-900">Cryptocurrency</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-red-500">No</td>
                                    <td className="p-4 text-red-500">No</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-slate-900">Private Equity</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-slate-900">Checkbook IRA LLC</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-red-500">No</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                    <td className="p-4 text-green-600 font-semibold">Yes</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-slate-900">Best For</td>
                                    <td className="p-4 text-slate-900 font-medium">All-around versatility</td>
                                    <td className="p-4 text-slate-900 font-medium">Rollovers &amp; institutional</td>
                                    <td className="p-4 text-slate-900 font-medium">Real estate investors</td>
                                    <td className="p-4 text-slate-900 font-medium">Lowest fees for simple accounts</td>
                                    <td className="p-4 text-slate-900 font-medium">Cryptocurrency IRAs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-sm text-slate-500">
                        * Fees shown are approximate and may vary based on account size, asset type, and specific service plans. Always confirm current pricing directly with the custodian.
                    </p>

                    {/* Individual Reviews */}
                    <h2>Custodian-by-Custodian Breakdown</h2>

                    <h3>Equity Trust Company</h3>
                    <p>
                        <strong>Founded:</strong> 1974 | <strong>AUM:</strong> $39+ billion | <strong>Accounts:</strong> 350,000+
                    </p>
                    <p>
                        Equity Trust is the largest self-directed IRA custodian in the US. They support virtually every alternative asset class: real estate, precious metals, cryptocurrency, private equity, tax liens, promissory notes, and more. Their online platform is the most polished in the industry, and they process transactions faster than most competitors.
                    </p>
                    <p>
                        <strong>Downside:</strong> Annual fees are on the higher side ($225-$400), and they charge per-transaction fees that can add up if you&apos;re active. Best for investors with $100k+ who need maximum flexibility.
                    </p>

                    <h3>Millennium Trust Company</h3>
                    <p>
                        <strong>Founded:</strong> 2000 | <strong>AUM:</strong> $50+ billion | <strong>Focus:</strong> Institutional rollovers
                    </p>
                    <p>
                        Millennium Trust handles more 401(k) rollovers than almost any other custodian. They&apos;re the default rollover destination for many employer plans. Their self-directed IRA offering is solid for traditional alternatives (real estate, private equity) but lacks cryptocurrency support and checkbook IRA LLC options.
                    </p>
                    <p>
                        <strong>Downside:</strong> Less flexible than Equity Trust for alternative assets. Higher minimums ($5,000). Best for straightforward rollovers from employer plans.
                    </p>

                    <h3>PENSCO Trust Company</h3>
                    <p>
                        <strong>Founded:</strong> 1989 | <strong>Focus:</strong> Real estate and private equity
                    </p>
                    <p>
                        PENSCO (now part of Opus Bank/Pacific Premier Trust) has deep expertise in real estate IRA transactions. They understand the complexities of property closings, rental income handling, and expense management within an IRA. If real estate is your primary SDIRA strategy, PENSCO&apos;s experience is valuable.
                    </p>
                    <p>
                        <strong>Downside:</strong> No cryptocurrency support. Mid-range fees. Best for serious real estate investors who need a custodian that understands property transactions.
                    </p>

                    <h3>The Entrust Group</h3>
                    <p>
                        <strong>Founded:</strong> 1982 | <strong>Focus:</strong> Low-cost, broad asset support
                    </p>
                    <p>
                        Entrust offers some of the lowest fees in the industry, especially for smaller accounts. No setup fee, and annual fees start at $99. They support real estate, precious metals, private equity, and cryptocurrency. Their educational resources are excellent for first-time SDIRA investors.
                    </p>
                    <p>
                        <strong>Downside:</strong> Transaction processing can be slower than Equity Trust. Online platform is less sophisticated. Best for cost-conscious investors and SDIRA beginners.
                    </p>

                    <h3>Kingdom Trust</h3>
                    <p>
                        <strong>Founded:</strong> 2010 | <strong>Focus:</strong> Cryptocurrency and digital assets
                    </p>
                    <p>
                        Kingdom Trust is the standout for cryptocurrency IRAs. Their &quot;Choice&quot; platform lets you trade Bitcoin, Ethereum, and other crypto directly within your IRA. They also support traditional alternatives like precious metals and real estate. If crypto is a key part of your strategy, Kingdom Trust is the obvious choice.
                    </p>
                    <p>
                        <strong>Downside:</strong> Less established than Equity Trust. Higher transaction fees for some asset types. Best for investors who want crypto exposure inside their IRA.
                    </p>

                    <Callout type="tip" title="For Precious Metals Specifically">
                        If your main goal is a Gold or Silver IRA, you don&apos;t need to find a custodian yourself. Companies like <Link href="/reviews/augusta-precious-metals">Augusta Precious Metals</Link> handle the entire custodian setup, IRA paperwork, and metal storage as part of their service. They work with established custodians like Equity Trust and handle all the logistics for you.
                    </Callout>

                    {/* Mid CTA */}
                    <div className="not-prose my-12">
                        <AugustaCTA
                            headline="Skip the Custodian Research"
                            subheadline="Augusta Precious Metals sets up your custodian account, handles all paperwork, and arranges IRS-approved storage. One call, everything handled."
                            trackSource="sdira-custodian-comparison"
                        />
                    </div>

                    {/* What to Look For */}
                    <h2>What to Look for in a Self-Directed IRA Custodian</h2>

                    <div className="not-prose my-8 space-y-4">
                        <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-green-700">Asset type support</h4>
                                <p className="text-sm text-green-600 mt-1">Make sure the custodian supports every asset type you want to invest in &mdash; now and in the future. Switching custodians is a hassle.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-green-700">Fee transparency</h4>
                                <p className="text-sm text-green-600 mt-1">Get the full fee schedule in writing before you open an account. Ask about setup fees, annual fees, transaction fees, wire fees, and account closure fees.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-green-700">Processing speed</h4>
                                <p className="text-sm text-green-600 mt-1">For real estate transactions, a slow custodian can kill a deal. Ask how long it takes to fund a purchase and process distributions.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-green-700">Customer support quality</h4>
                                <p className="text-sm text-green-600 mt-1">Self-directed IRAs are complex. You want a custodian with knowledgeable staff who can answer questions quickly &mdash; not a call center reading scripts.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-green-700">Checkbook IRA LLC support</h4>
                                <p className="text-sm text-green-600 mt-1">If you want checkbook control for faster transactions, make sure the custodian supports IRA LLC structures. Not all of them do.</p>
                            </div>
                        </div>
                    </div>

                    <Callout type="warning" title="Red Flags to Watch For">
                        Avoid any custodian that: charges percentage-based fees on your total account value (flat fees are better), refuses to provide a written fee schedule, pushes you toward specific investments (they should be neutral), or has unresolved complaints with the Better Business Bureau.
                    </Callout>

                    {/* FAQs */}
                    <h2>Self-Directed IRA Custodian FAQs</h2>

                    <div className="space-y-4 not-prose">
                        <details className="group bg-white rounded-xl border border-slate-200 shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                <h4 className="text-lg font-bold">What is a self-directed IRA custodian?</h4>
                                <span className="shrink-0 rounded-full bg-[#B22234]/10 p-1.5 text-[#B22234] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-slate-600">A self-directed IRA custodian is an IRS-approved financial institution that holds and administers your self-directed IRA. Unlike regular IRA custodians (like Fidelity or Schwab), self-directed custodians allow you to invest in alternative assets such as real estate, precious metals, private equity, cryptocurrency, and more. They handle paperwork, reporting, and compliance but do not provide investment advice.</p>
                        </details>

                        <details className="group bg-white rounded-xl border border-slate-200 shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                <h4 className="text-lg font-bold">How much do custodians charge?</h4>
                                <span className="shrink-0 rounded-full bg-[#B22234]/10 p-1.5 text-[#B22234] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-slate-600">Self-directed IRA custodians typically charge: setup fees ($50-$300), annual maintenance fees ($75-$400), transaction fees ($25-$250 per transaction), and asset-specific fees (like precious metals storage at $100-$300/year). Total annual costs usually range from $200-$1,000 depending on account size, asset types, and transaction volume.</p>
                        </details>

                        <details className="group bg-white rounded-xl border border-slate-200 shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                <h4 className="text-lg font-bold">What&apos;s the difference between a custodian and a trustee?</h4>
                                <span className="shrink-0 rounded-full bg-[#B22234]/10 p-1.5 text-[#B22234] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-slate-600">A custodian holds and safeguards IRA assets and handles administrative duties, while a trustee has broader authority to manage trust assets. For most self-directed IRA investors, the terms are used interchangeably. The key distinction: a trustee may have discretionary authority over investments, while a custodian follows your directions exactly.</p>
                        </details>

                        <details className="group bg-white rounded-xl border border-slate-200 shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                <h4 className="text-lg font-bold">Can I switch custodians?</h4>
                                <span className="shrink-0 rounded-full bg-[#B22234]/10 p-1.5 text-[#B22234] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-slate-600">Yes. You can transfer your self-directed IRA to a different custodian through a trustee-to-trustee transfer, which is tax-free and penalty-free. The process typically takes 2-4 weeks. Some custodians charge a transfer-out fee ($50-$150). Make sure the new custodian supports all the asset types you currently hold before initiating.</p>
                        </details>

                        <details className="group bg-white rounded-xl border border-slate-200 shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                <h4 className="text-lg font-bold">Do I need a custodian for a self-directed IRA?</h4>
                                <span className="shrink-0 rounded-full bg-[#B22234]/10 p-1.5 text-[#B22234] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-slate-600">Yes. The IRS requires that all IRAs (including self-directed) be held by an IRS-approved custodian or trustee. You cannot hold IRA assets yourself (with the exception of a checkbook-control IRA LLC, where the LLC holds the assets but the IRA still has a custodian). Without a custodian, your account loses all tax advantages.</p>
                        </details>
                    </div>

                    {/* Bottom CTA */}
                    <div className="not-prose my-12">
                        <AugustaCTA
                            headline="Want the Easiest Path to a Gold IRA?"
                            subheadline="Augusta handles custodian selection, account setup, metal purchasing, and storage. You make one call and they handle the rest."
                            trackSource="sdira-custodian-comparison-bottom"
                        />
                    </div>

                    {/* Related */}
                    <div className="not-prose">
                        <RelatedContent
                            title="Related Self-Directed IRA Resources"
                            links={[
                                { title: "Prohibited Transactions to Avoid", href: "/self-directed-ira/prohibited-transactions", type: "guide" },
                                { title: "Alternative Assets for SDIRAs", href: "/self-directed-ira/alternative-assets", type: "guide" },
                                { title: "SDIRA LLC Structure Explained", href: "/self-directed-ira/llc-structure", type: "guide" },
                                { title: "Best Gold IRA Companies", href: "/best-gold-ira-companies", type: "compare" },
                                { title: "Gold IRA Rules", href: "/gold-ira-rules", type: "guide" },
                            ]}
                        />
                    </div>
                </article>
            </Container>

            <Footer />
        </main>
    );
}
