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
import { AlertTriangle, Ban, DollarSign } from "lucide-react";

export const metadata: Metadata = {
    title: "Self-Directed IRA Prohibited Transactions: Complete List (2026)",
    description: "Complete list of self-directed IRA prohibited transactions. Learn what the IRS considers self-dealing, who disqualified persons are, and the penalties for violations.",
    alternates: {
        canonical: "https://richdadretirement.com/self-directed-ira/prohibited-transactions",
    },
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Self-Directed IRA Prohibited Transactions: Complete List (2026)",
            "description": "Complete list of self-directed IRA prohibited transactions, disqualified persons, penalties, and common mistakes to avoid.",
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
                { "@type": "ListItem", "position": 3, "name": "Prohibited Transactions", "item": "https://richdadretirement.com/self-directed-ira/prohibited-transactions" },
            ],
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What happens if I commit a prohibited transaction in my self-directed IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If you commit a prohibited transaction, the IRS imposes a 15% excise tax on the amount involved for each year it remains uncorrected. If you don't fix it within the taxable period, the penalty jumps to 100%. In the worst case, the entire IRA can be treated as a distribution, meaning you owe income tax on the full balance plus a 10% early withdrawal penalty if you're under 59\u00BD.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Can I buy a rental property with my self-directed IRA and live in it?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Using IRA-owned property for personal use is a prohibited transaction. You cannot live in the property, use it as a vacation home, let family members stay in it, or use it as a business office. The property must be purely an investment with no personal benefit to you or any disqualified person.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Can my IRA lend money to my business?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Lending IRA funds to yourself, your business, or any disqualified person is a prohibited transaction under IRC Section 4975. This includes direct loans, lines of credit, and using IRA assets as collateral for a personal loan.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Who are disqualified persons for self-directed IRA purposes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Disqualified persons include: you (the IRA owner), your spouse, your parents, your children and their spouses, your grandchildren, any fiduciary of the IRA (custodian, trustee, investment advisor), and any entity you or a disqualified person owns 50% or more of (corporations, partnerships, trusts, estates).",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Can I hire my son to manage my IRA-owned rental property?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Your children are disqualified persons. Paying them to manage, maintain, or improve IRA-owned property is a prohibited transaction. You must hire unrelated third parties for all property management, repairs, and maintenance on IRA-owned real estate.",
                    },
                },
            ],
        },
    ],
};

export default function ProhibitedTransactionsPage() {
    return (
        <main className="min-h-screen bg-[#0C0D18]">
            <SchemaScript schema={schema} />
            <Navbar />

            {/* Header */}
            <header className="bg-[#0C0D18] py-20 relative overflow-hidden border-b border-[#2A2D42]">
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-[rgba(220,38,38,0.1)] border border-[#B22234]/20 text-sm font-semibold text-[#D4A94E] mb-6">
                        IRS Rules &amp; Compliance
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#F6F4EF]">
                        Self-Directed IRA Prohibited Transactions
                    </h1>
                    <p className="text-xl text-[#D0CCC4] max-w-2xl mx-auto leading-relaxed">
                        One wrong move can blow up your entire IRA. Here&apos;s every transaction the IRS says you cannot make &mdash; and the penalties if you do.
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <article className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-[#F6F4EF] prose-p:text-[#D0CCC4] prose-strong:text-[#F6F4EF] prose-li:text-[#D0CCC4]">

                    {/* Answer First */}
                    <div className="not-prose mb-8">
                        <AnswerFirst
                            answer="A prohibited transaction is any direct or indirect transaction between your IRA and a disqualified person (you, your spouse, parents, children, or entities you control). Common violations include self-dealing (buying property for personal use), lending IRA money to yourself or family, and hiring disqualified persons to service IRA assets. Penalties start at a 15% excise tax and can escalate to the entire IRA being treated as a taxable distribution."
                            keyFacts={[
                                "IRC Section 4975 defines all prohibited transactions for IRAs",
                                "15% excise tax on the amount involved, per year it goes uncorrected",
                                "100% penalty if the transaction isn't corrected within the taxable period",
                                "The IRS can disqualify your entire IRA, triggering full income tax + 10% early withdrawal penalty",
                            ]}
                        />
                    </div>

                    <p>
                        Self-directed IRAs give you incredible freedom &mdash; you can invest in real estate, precious metals, private equity, and more. But that freedom comes with a minefield of IRS rules. Break one, and your entire retirement account can be wiped out by taxes and penalties.
                    </p>

                    {/* What the IRS Considers Prohibited */}
                    <h2>What the IRS Considers a Prohibited Transaction</h2>
                    <p>
                        Under <strong>IRC Section 4975</strong>, the IRS defines prohibited transactions as any direct or indirect:
                    </p>

                    <div className="not-prose my-8 space-y-4">
                        <div className="flex gap-4 p-5 rounded-xl bg-[rgba(220,38,38,0.08)] border border-red-100">
                            <Ban className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-red-700">Sale, exchange, or lease between your IRA and a disqualified person</h4>
                                <p className="text-sm text-red-600 mt-1">You cannot sell personal property to your IRA, buy IRA property for yourself, or lease IRA assets to/from any disqualified person.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-xl bg-[rgba(220,38,38,0.08)] border border-red-100">
                            <Ban className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-red-700">Lending money or extending credit between your IRA and a disqualified person</h4>
                                <p className="text-sm text-red-600 mt-1">Your IRA cannot lend money to you, your family, or your business. You also cannot use IRA assets as collateral for a personal loan.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-xl bg-[rgba(220,38,38,0.08)] border border-red-100">
                            <Ban className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-red-700">Providing goods, services, or facilities between your IRA and a disqualified person</h4>
                                <p className="text-sm text-red-600 mt-1">You cannot do repair work on IRA-owned property yourself. Your children cannot manage IRA assets. All services must come from unrelated third parties.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-xl bg-[rgba(220,38,38,0.08)] border border-red-100">
                            <Ban className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-red-700">Using IRA income or assets for the benefit of a disqualified person</h4>
                                <p className="text-sm text-red-600 mt-1">You cannot stay in an IRA-owned vacation home, use IRA-owned equipment, or receive any personal benefit from IRA assets before distribution.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-xl bg-[rgba(220,38,38,0.08)] border border-red-100">
                            <Ban className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-red-700">Transfer of IRA income or assets to a disqualified person</h4>
                                <p className="text-sm text-red-600 mt-1">Paying yourself or a family member from IRA funds (other than proper distributions) is prohibited.</p>
                            </div>
                        </div>
                    </div>

                    {/* Disqualified Persons */}
                    <h2>Who Are Disqualified Persons?</h2>
                    <p>
                        The IRS casts a wide net. A &quot;disqualified person&quot; includes far more people than most IRA owners realize:
                    </p>

                    <div className="overflow-x-auto not-prose my-8">
                        <table className="w-full text-left border-collapse bg-[#161828] rounded-xl border border-[#2A2D42] shadow-sm">
                            <thead className="bg-[#0C0D18]">
                                <tr>
                                    <th className="p-4 border-b border-[#2A2D42] font-bold text-[#D4A94E]">Category</th>
                                    <th className="p-4 border-b border-[#2A2D42] font-bold text-[#D4A94E]">Who&apos;s Included</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#2A2D42] text-sm text-[#D0CCC4]">
                                <tr><td className="p-4 font-semibold text-[#F6F4EF]">You</td><td className="p-4">The IRA owner</td></tr>
                                <tr><td className="p-4 font-semibold text-[#F6F4EF]">Spouse</td><td className="p-4">Your husband or wife</td></tr>
                                <tr><td className="p-4 font-semibold text-[#F6F4EF]">Lineal Ascendants</td><td className="p-4">Your parents, grandparents</td></tr>
                                <tr><td className="p-4 font-semibold text-[#F6F4EF]">Lineal Descendants</td><td className="p-4">Your children, grandchildren, and their spouses</td></tr>
                                <tr><td className="p-4 font-semibold text-[#F6F4EF]">Fiduciaries</td><td className="p-4">IRA custodian, trustee, investment advisor</td></tr>
                                <tr><td className="p-4 font-semibold text-[#F6F4EF]">Entities</td><td className="p-4">Any corporation, partnership, trust, or estate in which you or a disqualified person owns 50% or more</td></tr>
                                <tr><td className="p-4 font-semibold text-[#F6F4EF]">Key Employees</td><td className="p-4">Officers, directors, 10%+ shareholders, or highly compensated employees of entities involved</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <Callout type="info" title="Who Is NOT Disqualified">
                        Siblings, aunts, uncles, cousins, and friends are generally NOT disqualified persons. Your IRA can do business with them, though the IRS still looks at &quot;indirect&quot; transactions &mdash; so don&apos;t use a sibling as a pass-through for a deal that benefits you.
                    </Callout>

                    {/* Penalties */}
                    <h2>Penalties for Prohibited Transactions</h2>
                    <p>
                        The IRS does not mess around with prohibited transaction penalties. Here&apos;s what you&apos;re facing:
                    </p>

                    <div className="not-prose my-8 space-y-4">
                        <div className="flex gap-4 p-5 rounded-xl bg-[#161828] border border-[rgba(197,149,46,0.32)]">
                            <DollarSign className="w-6 h-6 text-[#D4A94E] shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-amber-800">First-Tier Penalty: 15% Excise Tax</h4>
                                <p className="text-sm text-amber-700 mt-1">The IRS charges 15% of the &quot;amount involved&quot; for each year the prohibited transaction remains uncorrected. On a $100,000 deal, that&apos;s $15,000/year.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-xl bg-[rgba(220,38,38,0.08)] border border-red-200">
                            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-red-800">Second-Tier Penalty: 100% Excise Tax</h4>
                                <p className="text-sm text-red-700 mt-1">If you don&apos;t correct the transaction within the taxable period, the penalty jumps to 100% of the amount involved. The IRS takes it all.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-xl bg-[rgba(220,38,38,0.08)] border border-red-200">
                            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-red-800">Nuclear Option: Full IRA Disqualification</h4>
                                <p className="text-sm text-red-700 mt-1">The IRS can treat your entire IRA as distributed on January 1st of the year the prohibited transaction occurred. You owe income tax on the full balance, plus a 10% early withdrawal penalty if under 59&frac12;. On a $500k IRA, that could mean $200k+ in taxes and penalties.</p>
                            </div>
                        </div>
                    </div>

                    {/* Common Mistakes */}
                    <h2>5 Most Common Prohibited Transaction Mistakes</h2>
                    <p>
                        These are the mistakes self-directed IRA owners make most often &mdash; usually because nobody warned them:
                    </p>

                    <h3>1. Buying a Vacation Home with Your IRA</h3>
                    <p>
                        Your IRA buys a condo in Florida. You figure, &quot;I&apos;ll rent it out most of the year, but I&apos;ll stay there two weeks in January.&quot; <strong>Prohibited.</strong> Any personal use of IRA-owned property &mdash; even one night &mdash; is a prohibited transaction. The property must be 100% investment, zero personal benefit.
                    </p>

                    <h3>2. Hiring Family to Manage IRA Property</h3>
                    <p>
                        Your IRA owns a rental house. You hire your son to manage it because he&apos;s a licensed property manager. <strong>Prohibited.</strong> Your son is a disqualified person. You must hire an unrelated third-party property manager, even if your kid would do a better job for less money.
                    </p>

                    <h3>3. Lending IRA Money to Your Business</h3>
                    <p>
                        Your small business needs a $50,000 bridge loan. Your IRA has the cash. Easy, right? <strong>Prohibited.</strong> Your IRA cannot lend money to you, your business, or any entity you control. Even if you pay it back with interest, the IRS considers it a prohibited transaction from day one.
                    </p>

                    <h3>4. Doing Your Own Repairs on IRA Property</h3>
                    <p>
                        The IRA-owned rental needs a new roof. You&apos;re a contractor, so you figure you&apos;ll save money by doing it yourself. <strong>Prohibited.</strong> Providing services (including &quot;sweat equity&quot;) to IRA assets is self-dealing. You must pay an unrelated contractor with IRA funds.
                    </p>

                    <h3>5. Buying Collectible Coins in Your IRA</h3>
                    <p>
                        You want to hold rare coins in your Gold IRA. <strong>Most collectibles are prohibited.</strong> The IRS only allows specific bullion coins and bars that meet minimum fineness requirements (99.5% gold, 99.9% silver). Rare coins, artwork, antiques, gems, stamps, and most collectibles are banned from IRAs entirely.
                    </p>

                    <Callout type="tip" title="How to Stay Safe">
                        Before making any transaction with your self-directed IRA, ask yourself: &quot;Does this benefit me or any family member personally, right now?&quot; If the answer is yes &mdash; or even maybe &mdash; talk to a tax professional before proceeding. The cost of a consultation is nothing compared to losing your entire IRA.
                    </Callout>

                    {/* Mid CTA */}
                    <div className="not-prose my-12">
                        <AugustaCTA
                            headline="Want a Self-Directed IRA Done Right?"
                            subheadline="Augusta Precious Metals handles all the custodian paperwork and compliance so you don't have to worry about prohibited transaction traps."
                            trackSource="sdira-prohibited-transactions"
                        />
                    </div>

                    {/* How to Correct */}
                    <h2>How to Correct a Prohibited Transaction</h2>
                    <p>
                        If you realize you&apos;ve made a prohibited transaction, act fast. The IRS allows correction if you:
                    </p>
                    <ul>
                        <li><strong>Undo the transaction</strong> &mdash; Reverse the sale, return the property, or repay the loan</li>
                        <li><strong>Make the IRA whole</strong> &mdash; Restore the IRA to the financial position it would have been in had the transaction never occurred</li>
                        <li><strong>File Form 5329</strong> &mdash; Report the excise tax on your tax return</li>
                        <li><strong>Pay the 15% excise tax</strong> &mdash; Due for each year the transaction was outstanding</li>
                        <li><strong>Consult a tax attorney</strong> &mdash; Complex corrections may need professional guidance to avoid making things worse</li>
                    </ul>

                    {/* FAQ Section */}
                    <h2>Prohibited Transaction FAQs</h2>

                    <div className="space-y-4 not-prose">
                        <details className="group bg-[#161828] rounded-xl border border-[#2A2D42] shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#F6F4EF]">
                                <h4 className="text-lg font-bold">What happens if I commit a prohibited transaction?</h4>
                                <span className="shrink-0 rounded-full bg-[rgba(220,38,38,0.1)] p-1.5 text-[#D4A94E] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-[#D0CCC4]">The IRS imposes a 15% excise tax on the amount involved for each year it remains uncorrected. If you don&apos;t fix it within the taxable period, the penalty jumps to 100%. In the worst case, the entire IRA can be treated as a distribution, meaning you owe income tax on the full balance plus a 10% early withdrawal penalty if you&apos;re under 59&frac12;.</p>
                        </details>

                        <details className="group bg-[#161828] rounded-xl border border-[#2A2D42] shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#F6F4EF]">
                                <h4 className="text-lg font-bold">Can I buy rental property with my IRA and live in it?</h4>
                                <span className="shrink-0 rounded-full bg-[rgba(220,38,38,0.1)] p-1.5 text-[#D4A94E] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-[#D0CCC4]">No. Using IRA-owned property for personal use is a prohibited transaction. You cannot live in the property, use it as a vacation home, let family members stay in it, or use it as a business office. The property must be purely an investment with no personal benefit to you or any disqualified person.</p>
                        </details>

                        <details className="group bg-[#161828] rounded-xl border border-[#2A2D42] shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#F6F4EF]">
                                <h4 className="text-lg font-bold">Can my IRA lend money to my business?</h4>
                                <span className="shrink-0 rounded-full bg-[rgba(220,38,38,0.1)] p-1.5 text-[#D4A94E] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-[#D0CCC4]">No. Lending IRA funds to yourself, your business, or any disqualified person is a prohibited transaction under IRC Section 4975. This includes direct loans, lines of credit, and using IRA assets as collateral for a personal loan.</p>
                        </details>

                        <details className="group bg-[#161828] rounded-xl border border-[#2A2D42] shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#F6F4EF]">
                                <h4 className="text-lg font-bold">Who exactly are disqualified persons?</h4>
                                <span className="shrink-0 rounded-full bg-[rgba(220,38,38,0.1)] p-1.5 text-[#D4A94E] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-[#D0CCC4]">Disqualified persons include: you (the IRA owner), your spouse, your parents, your children and their spouses, your grandchildren, any fiduciary of the IRA (custodian, trustee, investment advisor), and any entity you or a disqualified person owns 50% or more of (corporations, partnerships, trusts, estates).</p>
                        </details>

                        <details className="group bg-[#161828] rounded-xl border border-[#2A2D42] shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#F6F4EF]">
                                <h4 className="text-lg font-bold">Can I hire my son to manage my IRA-owned rental?</h4>
                                <span className="shrink-0 rounded-full bg-[rgba(220,38,38,0.1)] p-1.5 text-[#D4A94E] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-[#D0CCC4]">No. Your children are disqualified persons. Paying them to manage, maintain, or improve IRA-owned property is a prohibited transaction. You must hire unrelated third parties for all property management, repairs, and maintenance on IRA-owned real estate.</p>
                        </details>
                    </div>

                    {/* Bottom CTA */}
                    <div className="not-prose my-12">
                        <AugustaCTA
                            headline="Avoid Costly IRA Mistakes"
                            subheadline="Augusta Precious Metals guides you through every compliance requirement. Your IRA stays clean, your metals stay protected."
                            trackSource="sdira-prohibited-transactions-bottom"
                        />
                    </div>

                    {/* Related */}
                    <div className="not-prose">
                        <RelatedContent
                            title="Related Self-Directed IRA Resources"
                            links={[
                                { title: "Best SDIRA Custodians Compared", href: "/self-directed-ira/custodian-comparison", type: "compare" },
                                { title: "Alternative Assets for SDIRAs", href: "/self-directed-ira/alternative-assets", type: "guide" },
                                { title: "SDIRA LLC Structure Explained", href: "/self-directed-ira/llc-structure", type: "guide" },
                                { title: "What Is a Gold IRA?", href: "/what-is-a-gold-ira", type: "learn" },
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
