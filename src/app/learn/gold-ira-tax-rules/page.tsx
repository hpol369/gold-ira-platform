import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { FileText, DollarSign, AlertTriangle, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Gold IRA Tax Rules 2026: Complete Guide to Taxes & Penalties",
    description: "Complete guide to Gold IRA tax rules in 2026. Learn about contributions, withdrawals, RMDs, penalties, and how to minimize taxes on your gold investments.",
};

const takeaways = [
    "Traditional Gold IRA contributions may be tax-deductible; Roth contributions are after-tax.",
    "Gold IRA growth is tax-deferred (Traditional) or tax-free (Roth).",
    "Early withdrawals before 59½ trigger a 10% penalty plus income taxes.",
    "Required Minimum Distributions (RMDs) start at age 73 for Traditional IRAs.",
    "Roth Gold IRAs have no RMDs during your lifetime—great for estate planning.",
    "Rollovers from 401(k)s to Gold IRAs are completely tax-free when done correctly.",
    "Home storage of IRA gold is treated as a distribution—avoid this mistake."
];

const tocItems = [
    { id: "overview", label: "Tax Overview" },
    { id: "contributions", label: "Contribution Rules" },
    { id: "traditional-vs-roth", label: "Traditional vs. Roth" },
    { id: "withdrawals", label: "Withdrawal Taxes" },
    { id: "rmds", label: "Required Distributions" },
    { id: "rollovers", label: "Rollover Rules" },
    { id: "penalties", label: "Penalties to Avoid" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Gold IRA Tax Rules 2026: Complete Guide to Taxes & Penalties",
    "description": "Complete guide to Gold IRA tax rules in 2026. Learn about contributions, withdrawals, RMDs, penalties, and how to minimize taxes.",
    "image": "https://www.richdadretirement.com/images/tax-rules-guide.jpg",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
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
                "name": "Do I pay taxes when I buy gold in my IRA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Purchases within your IRA are not taxable events. Taxes only apply when you take distributions (Traditional) or if you made after-tax contributions (Roth)."
                }
            },
            {
                "@type": "Question",
                "name": "Is a Gold IRA rollover taxable?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No—if done correctly. A direct rollover from a 401(k) or traditional IRA to a Gold IRA is completely tax-free."
                }
            },
            {
                "@type": "Question",
                "name": "How is gold taxed outside of an IRA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Physical gold held outside an IRA is taxed as a 'collectible' with a maximum long-term capital gains rate of 28%."
                }
            },
            {
                "@type": "Question",
                "name": "Can I deduct Gold IRA losses?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generally, no. Losses inside an IRA cannot be deducted because you never paid taxes on the gains in the first place."
                }
            }
        ]
    }
};

export default function GoldIraTaxRulesPage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-50 py-16 border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Financial Education
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-6">
                            Gold IRA Tax Rules: 2026 Guide
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            The IRS rules aren&apos;t complicated, but make a mistake and you could owe thousands in penalties. Here&apos;s what you need to know before moving your hard-earned retirement savings.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead">
                                Look, taxes aren&apos;t exciting. But if you&apos;re putting gold in an IRA and you don&apos;t understand the rules? You&apos;re going to get burned. I&apos;ve seen people accidentally trigger five-figure tax bills because they didn&apos;t know what they were doing.
                            </p>
                            <p>
                                The basics are simple: Gold IRAs follow the same tax rules as regular IRAs. Same contribution limits. Same withdrawal rules. Same penalties for screwing up. But there are a few gold-specific gotchas you need to know about—especially around storage and distributions.
                            </p>
                        </section>

                        {/* Contribution Rules */}
                        <section id="contributions" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Contribution Rules & Limits</h2>
                            </div>
                            <p>
                                Nothing special here—Gold IRAs have the exact same contribution limits as any other IRA. For 2026:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-slate-50 rounded-xl shadow-sm border border-slate-200">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Age</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Annual Limit</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 text-sm">
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-900">Under 50</td>
                                            <td className="p-4 text-slate-600">$7,000</td>
                                            <td className="p-4 text-slate-600">Standard annual contribution</td>
                                        </tr>
                                        <tr className="bg-slate-100/50">
                                            <td className="p-4 font-semibold text-slate-900">50 and older</td>
                                            <td className="p-4 text-slate-600">$8,000</td>
                                            <td className="p-4 text-slate-600">Includes $1,000 catch-up contribution</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-900">SEP IRA</td>
                                            <td className="p-4 text-slate-600">Up to $69,000</td>
                                            <td className="p-4 text-slate-600">25% of compensation, whichever is less</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <strong>One thing people mess up:</strong> These limits apply across ALL your IRAs. Got a regular IRA and a Gold IRA? The total contributions to both can&apos;t exceed $7,000. Put $5,000 in your regular IRA, and you can only put $2,000 in your Gold IRA that year.
                            </p>

                            <h3>But Rollovers? No Limit.</h3>
                            <p>
                                Here&apos;s where it gets interesting. That $7,000 limit only applies to new contributions. Rollovers from 401(k)s, 403(b)s, or other IRAs? No limit whatsoever. You could roll over $500,000 in one transaction if you wanted. Completely tax-free. This is how most people fund their Gold IRAs—they move existing retirement money, not new savings. Check out our <Link href="/guide/401k-to-gold-rollover">401(k) rollover guide</Link> for the how-to.
                            </p>
                        </section>

                        {/* Traditional vs Roth */}
                        <section id="traditional-vs-roth" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Traditional vs. Roth Gold IRA Taxes</h2>
                            </div>
                            <p>
                                This is a big one. Traditional and Roth Gold IRAs are taxed completely differently, and picking the wrong one can cost you thousands over the long run.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-slate-900 text-lg mb-4">Traditional Gold IRA</h4>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600"><strong className="text-slate-900">Contributions:</strong> May be tax-deductible</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600"><strong className="text-slate-900">Growth:</strong> Tax-deferred</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600"><strong className="text-slate-900">Withdrawals:</strong> Taxed as ordinary income</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600"><strong className="text-slate-900">RMDs:</strong> Required at age 73</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600"><strong className="text-slate-900">Best for:</strong> Expect lower tax bracket in retirement</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-slate-900 text-lg mb-4">Roth Gold IRA</h4>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600"><strong className="text-slate-900">Contributions:</strong> After-tax (not deductible)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600"><strong className="text-slate-900">Growth:</strong> Tax-free</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600"><strong className="text-slate-900">Withdrawals:</strong> Tax-free (if qualified)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600"><strong className="text-slate-900">RMDs:</strong> None during your lifetime</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600"><strong className="text-slate-900">Best for:</strong> Expect higher taxes in retirement</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Callout type="tip" title="Roth Conversion Strategy">
                                You can convert a Traditional Gold IRA to a Roth Gold IRA, paying taxes now for tax-free growth later. This can be smart if you expect tax rates to rise or want to leave tax-free assets to heirs. Consult a tax professional before converting.
                            </Callout>

                            <p>
                                <strong>Not sure which is right for you?</strong> Read our full comparison: <Link href="/compare/gold-ira-vs-roth-ira">Gold IRA vs. Roth IRA</Link>
                            </p>
                        </section>

                        {/* Withdrawal Taxes */}
                        <section id="withdrawals" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Withdrawal Tax Rules</h2>
                            </div>
                            <p>
                                How you&apos;re taxed on Gold IRA withdrawals depends on your account type and age:
                            </p>

                            <h3>Qualified Distributions (Age 59½+)</h3>
                            <ul>
                                <li><strong>Traditional:</strong> Taxed as ordinary income at your current rate</li>
                                <li><strong>Roth:</strong> Completely tax-free (if account is 5+ years old)</li>
                            </ul>

                            <h3>Distribution Options</h3>
                            <p>
                                When you take a distribution from your Gold IRA, you have three options:
                            </p>
                            <ol>
                                <li><strong>Cash distribution:</strong> Sell your metals, receive cash (most common)</li>
                                <li><strong>In-kind distribution:</strong> Receive the actual physical gold/silver coins and bars</li>
                                <li><strong>Partial distribution:</strong> Take some assets, leave others in the account</li>
                            </ol>
                            <p>
                                All options are taxed the same way—based on the fair market value of the metals at distribution time.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-[#B22234] rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Ready to Open a Gold IRA?</h3>
                                <p className="mb-6 text-gray-200">Find the best gold IRA company for your tax situation and investment goals.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* RMDs */}
                        <section id="rmds" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Required Minimum Distributions (RMDs)</h2>
                            </div>
                            <p>
                                <strong>Traditional Gold IRAs</strong> are subject to Required Minimum Distributions (RMDs) starting at age 73 (as of 2023 SECURE 2.0 Act rules).
                            </p>

                            <h3>How Gold IRA RMDs Work</h3>
                            <ul>
                                <li>RMD amounts are based on your account value and IRS life expectancy tables</li>
                                <li>You must take your first RMD by April 1 of the year after you turn 73</li>
                                <li>Subsequent RMDs are due by December 31 each year</li>
                                <li>You can take RMDs as cash OR in-kind (physical metals)</li>
                                <li>Failure to take RMDs results in a 25% penalty (reduced from 50%)</li>
                            </ul>

                            <Callout type="info" title="Roth Gold IRA Advantage">
                                Roth Gold IRAs have <strong>no RMDs during your lifetime</strong>. This makes them ideal for estate planning—your gold can continue growing tax-free and be passed to heirs. Your beneficiaries will have RMD requirements, but the distributions remain tax-free.
                            </Callout>
                        </section>

                        {/* Rollovers */}
                        <section id="rollovers" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Tax-Free Rollover Rules</h2>
                            </div>
                            <p>
                                One of the best tax features of Gold IRAs: you can <strong>roll over funds from existing retirement accounts tax-free</strong>. No taxes owed, no penalties—just a transfer of assets.
                            </p>

                            <h3>Accounts You Can Roll Over Tax-Free</h3>
                            <ul>
                                <li>401(k) and 403(b) plans</li>
                                <li>Traditional IRAs</li>
                                <li>TSP (Thrift Savings Plan)</li>
                                <li>457(b) plans</li>
                                <li>SEP and SIMPLE IRAs</li>
                            </ul>

                            <h3>Direct vs. Indirect Rollovers</h3>
                            <p>
                                <strong>Always use a direct rollover.</strong> With a direct (trustee-to-trustee) rollover:
                            </p>
                            <ul>
                                <li>Funds transfer directly between custodians</li>
                                <li>No tax withholding</li>
                                <li>No time limits</li>
                                <li>Unlimited rollovers per year</li>
                            </ul>
                            <p>
                                With an indirect rollover, you receive the funds personally and have 60 days to deposit them—but your old custodian must withhold 20% for taxes. Avoid this complexity by using direct rollovers.
                            </p>
                        </section>

                        {/* Penalties */}
                        <section id="penalties" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Penalties to Avoid</h2>
                            </div>
                            <p>
                                These mistakes can trigger significant taxes and penalties:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Early Withdrawal (Before 59½)</h4>
                                        <p className="text-sm text-red-300 mt-1">Taking distributions before age 59½ triggers a 10% penalty PLUS ordinary income taxes (for Traditional IRAs). A $50,000 early withdrawal could cost you $15,000+ in taxes and penalties.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Home Storage of IRA Gold</h4>
                                        <p className="text-sm text-red-300 mt-1">Storing IRA metals at home is treated as a distribution. The IRS considers this &quot;taking possession,&quot; triggering immediate taxes and potentially the 10% early withdrawal penalty. Always use IRS-approved depositories.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                    <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-400">Missing the 60-Day Rollover Deadline</h4>
                                        <p className="text-sm text-amber-300 mt-1">With indirect rollovers, failing to deposit funds within 60 days makes the entire amount a taxable distribution. Use direct rollovers to avoid this risk entirely.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                    <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-400">Missing RMDs</h4>
                                        <p className="text-sm text-amber-300 mt-1">Failing to take Required Minimum Distributions results in a 25% penalty on the amount not withdrawn. Set reminders and work with your custodian to ensure compliance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                    <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-400">Prohibited Transactions</h4>
                                        <p className="text-sm text-amber-300 mt-1">Using IRA funds for personal benefit (like borrowing against them) or investing in non-approved assets can disqualify your entire IRA, making the full amount immediately taxable.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Gold IRA Tax FAQs</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Do I pay taxes when I buy gold in my IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        No. Purchases within your IRA are not taxable events. You can buy and sell gold within the account without triggering taxes. Taxes only apply when you take distributions (Traditional) or if you made after-tax contributions (Roth, but then distributions are tax-free).
                                    </p>
                                </details>

                                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Is a Gold IRA rollover taxable?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        No—if done correctly. A direct rollover from a 401(k) or traditional IRA to a Gold IRA is completely tax-free. The funds transfer between custodians without you taking possession. The tax-deferred status is preserved. See our <Link href="/guide/401k-to-gold-rollover" className="text-[#B22234] hover:underline">rollover guide</Link> for details.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">How is gold taxed outside of an IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Physical gold held outside an IRA is taxed as a &quot;collectible.&quot; Long-term capital gains (held over 1 year) are taxed at a maximum rate of 28%. Short-term gains are taxed as ordinary income. This is why a Gold IRA offers significant tax advantages—especially a Roth, where gains are tax-free.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Can I deduct Gold IRA losses?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Generally, no. Losses inside an IRA cannot be deducted because you never paid taxes on the gains in the first place (Traditional) or the account is designed to be tax-free (Roth). This is one reason diversification matters—you can&apos;t offset IRA losses against other income.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-[#B22234] rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Protect Your Retirement?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">You&apos;ve done the smart thing learning the rules first. Now find the right company to work with.</p>
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
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA variant="footer" linkContext="fees" trackSource="learn-gold-ira-tax-rules" />
                </Container>
            </section>
        </main>
    );
}
