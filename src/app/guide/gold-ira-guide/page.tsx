import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, AlertTriangle, DollarSign, Building2, Lock, Scale, Clock, FileText } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gold IRA Guide 2026: Complete Beginner's Guide to Gold IRAs",
    description: "The definitive gold IRA guide for 2026. Learn what a gold IRA is, how it works, tax benefits, fees, and how to open one. Updated for current IRS rules.",
};

const tocItems = [
    { id: "what-is-gold-ira", label: "What is a Gold IRA?" },
    { id: "how-it-works", label: "How Does It Work?" },
    { id: "benefits", label: "Gold IRA Benefits" },
    { id: "account-types", label: "Types of Gold IRA Accounts" },
    { id: "how-to-open", label: "How to Open a Gold IRA" },
    { id: "investment-strategy", label: "Investment Strategy" },
    { id: "eligible-metals", label: "IRS-Approved Metals" },
    { id: "fees", label: "Understanding Fees" },
    { id: "risks", label: "Risks to Consider" },
    { id: "faq", label: "FAQs" },
];

export default function GoldIraGuidePage() {
    return (
        <main className="min-h-screen bg-background pb-24">
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
                            The Complete Gold IRA Guide for 2026
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                            Everything you need to know about protecting your retirement with physical gold—from tax advantages to choosing the right custodian.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:text-text prose-a:text-secondary max-w-none">

                        {/* Intro Content */}
                        <p className="lead text-xl text-text-muted">
                            If you&apos;ve been watching inflation eat away at your purchasing power while the stock market swings wildly, you&apos;re not alone. This comprehensive <strong>gold IRA guide</strong> will show you exactly how to diversify your retirement savings into physical precious metals—legally, tax-efficiently, and without the costly mistakes that trap most beginners.
                        </p>

                        <p>
                            A <strong>gold IRA</strong> (also called a precious metals IRA) allows you to hold physical gold, silver, platinum, and palladium in a tax-advantaged retirement account. Unlike paper assets that can lose value overnight, physical metals have maintained purchasing power for thousands of years.
                        </p>

                        <Callout type="tip" title="Rich Dad Insight">
                            &quot;Savers are losers. The dollar has lost over 96% of its purchasing power since 1913. Gold, on the other hand, has preserved wealth across generations. A Gold IRA lets you convert paper promises into real assets—tax-free.&quot;
                        </Callout>

                        {/* Section 1: What is a Gold IRA */}
                        <section id="what-is-gold-ira" className="scroll-mt-32">
                            <h2>What is a Gold IRA?</h2>
                            <p>
                                A <strong>Gold IRA (Individual Retirement Account)</strong> is a self-directed retirement account that allows you to invest in physical precious metals instead of—or in addition to—traditional paper assets like stocks, bonds, and mutual funds.
                            </p>
                            <p>
                                The key difference from a regular IRA? <strong>You own actual, physical gold</strong>. Not a gold ETF. Not shares in a mining company. Real gold bars and coins that are stored in a secure, IRS-approved depository in your name.
                            </p>
                            <p>
                                Gold IRAs were made possible by the Taxpayer Relief Act of 1997, which expanded the types of investments allowed in IRAs to include certain precious metals. This opened the door for Americans to protect their retirement savings with the same asset that central banks and wealthy families have relied on for centuries.
                            </p>

                            <div className="bg-background-subtle rounded-2xl p-6 border border-primary/5 not-prose my-8">
                                <h4 className="font-bold text-primary text-lg mb-4">Key Facts About Gold IRAs:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span>Same tax benefits as traditional or Roth IRAs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span>You own physical metals, not paper derivatives</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span>Metals must be stored in IRS-approved depositories</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span>You can rollover existing 401(k) or IRA funds tax-free</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span>Same contribution limits as regular IRAs ($7,000 in 2026, $8,000 if 50+)</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 2: How Does It Work */}
                        <section id="how-it-works" className="scroll-mt-32">
                            <h2>How Does a Gold IRA Work?</h2>
                            <p>
                                Understanding <strong>how a gold IRA works</strong> is simpler than most people think. The process involves three key parties working together to ensure your investment is legal, secure, and tax-compliant.
                            </p>

                            <div className="not-prose">
                                <div className="space-y-4 my-8">
                                    <div className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
                                            <Building2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <strong className="block text-primary text-lg">1. The Custodian</strong>
                                            <p className="text-text-muted mt-1">A specialized financial institution that holds your IRA assets and handles all IRS reporting. Unlike regular IRA custodians, gold IRA custodians are equipped to manage physical metal holdings. Examples include Equity Trust Company, STRATA Trust, and Delaware Depository.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                                        <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold shrink-0">
                                            <Scale className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <strong className="block text-primary text-lg">2. The Precious Metals Dealer</strong>
                                            <p className="text-text-muted mt-1">The company you purchase your gold from. Reputable dealers like <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta Precious Metals</Link>, <Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link>, and <Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link> guide you through the entire process and coordinate with your custodian.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                                        <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold shrink-0">
                                            <Lock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <strong className="block text-primary text-lg">3. The Depository</strong>
                                            <p className="text-text-muted mt-1">A high-security vault where your physical metals are stored. These facilities are insured, audited, and IRS-approved. Popular options include the Delaware Depository, Brink&apos;s Global Services, and the International Depository Services (IDS).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3>The Gold IRA Process: Step by Step</h3>
                            <ol>
                                <li><strong>Open a self-directed IRA</strong> with a custodian that allows precious metals investments</li>
                                <li><strong>Fund your account</strong> via rollover from an existing retirement account, transfer, or direct contribution</li>
                                <li><strong>Select your metals</strong> from IRS-approved gold, silver, platinum, or palladium products</li>
                                <li><strong>Purchase through your dealer</strong> who coordinates delivery to the depository</li>
                                <li><strong>Secure storage</strong> at an IRS-approved depository where your metals are held until distribution</li>
                            </ol>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Not Sure Where to Start?</h3>
                                <p className="mb-6 text-gray-200">Take our 60-second quiz to find out which gold IRA company is the best match for your investment goals and portfolio size.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find My Perfect Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Section 3: Benefits */}
                        <section id="benefits" className="scroll-mt-32">
                            <h2>Gold IRA Benefits: Why Investors Are Making the Switch</h2>
                            <p>
                                The <strong>benefits of a gold IRA</strong> extend far beyond simple diversification. Here&apos;s why hundreds of thousands of Americans have added physical metals to their retirement portfolios:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-background-subtle border border-primary/5">
                                    <ShieldCheck className="w-8 h-8 text-secondary mb-4" />
                                    <h4 className="font-bold text-primary text-lg mb-2">Inflation Protection</h4>
                                    <p className="text-sm text-text-muted">When the Federal Reserve prints money, the dollars in your savings account lose purchasing power. Gold has historically maintained its value—an ounce of gold bought a fine suit 100 years ago, and it still does today.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-background-subtle border border-primary/5">
                                    <TrendingUp className="w-8 h-8 text-secondary mb-4" />
                                    <h4 className="font-bold text-primary text-lg mb-2">Portfolio Diversification</h4>
                                    <p className="text-sm text-text-muted">Gold often moves inversely to stocks and bonds. During the 2008 financial crisis, the S&P 500 fell 37% while gold rose 5%. This negative correlation provides genuine protection.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-background-subtle border border-primary/5">
                                    <DollarSign className="w-8 h-8 text-secondary mb-4" />
                                    <h4 className="font-bold text-primary text-lg mb-2">Tax Advantages</h4>
                                    <p className="text-sm text-text-muted">Gold IRAs offer the same tax benefits as traditional retirement accounts. Choose tax-deferred growth (Traditional) or tax-free withdrawals (Roth). Learn more about <Link href="/learn/gold-ira-tax-rules" className="text-secondary hover:underline">gold IRA tax rules</Link>.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-background-subtle border border-primary/5">
                                    <Lock className="w-8 h-8 text-secondary mb-4" />
                                    <h4 className="font-bold text-primary text-lg mb-2">Tangible Ownership</h4>
                                    <p className="text-sm text-text-muted">Unlike stocks or bonds, gold is not someone else&apos;s liability. You own physical assets that can&apos;t be hacked, diluted through share issuance, or made worthless by corporate bankruptcy.</p>
                                </div>
                            </div>

                            <p>
                                For a deeper dive into why physical metals belong in your retirement portfolio, read our complete guide to <Link href="/learn/gold-ira-benefits">gold IRA benefits</Link>.
                            </p>
                        </section>

                        <Callout type="warning" title="Warning: Home Storage Gold IRAs">
                            You may see advertisements for &quot;Home Storage Gold IRAs&quot; that claim you can keep IRA gold in your house. <strong>This is extremely risky.</strong> The IRS requires precious metals IRAs to be stored at approved depositories. Storing IRA metals at home can trigger a full distribution, resulting in income taxes plus a 10% early withdrawal penalty. Don&apos;t fall for this trap.
                        </Callout>

                        {/* Section 4: Account Types */}
                        <section id="account-types" className="scroll-mt-32">
                            <h2>Types of Gold IRA Accounts</h2>
                            <p>
                                Just like regular IRAs, <strong>gold IRA accounts</strong> come in several varieties, each with different tax implications. Choosing the right type depends on your current tax situation and retirement goals.
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-primary/10">
                                            <th className="p-4 font-bold text-primary">Account Type</th>
                                            <th className="p-4 font-bold text-primary">Tax Treatment</th>
                                            <th className="p-4 font-bold text-primary">Best For</th>
                                            <th className="p-4 font-bold text-primary">2026 Contribution Limit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="bg-white">
                                            <td className="p-4 font-semibold">Traditional Gold IRA</td>
                                            <td className="p-4">Tax-deferred growth. Contributions may be tax-deductible. Taxed on withdrawal.</td>
                                            <td className="p-4">Those who expect to be in a lower tax bracket in retirement.</td>
                                            <td className="p-4">$7,000 ($8,000 if 50+)</td>
                                        </tr>
                                        <tr className="bg-background-subtle">
                                            <td className="p-4 font-semibold">Roth Gold IRA</td>
                                            <td className="p-4">Tax-free growth. Contributions made with after-tax dollars. No taxes on qualified withdrawals.</td>
                                            <td className="p-4">Those who expect higher taxes in retirement or want tax-free legacy.</td>
                                            <td className="p-4">$7,000 ($8,000 if 50+)</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="p-4 font-semibold">SEP Gold IRA</td>
                                            <td className="p-4">Tax-deferred. Higher contribution limits for self-employed.</td>
                                            <td className="p-4">Self-employed individuals and small business owners.</td>
                                            <td className="p-4">Up to $69,000 or 25% of compensation</td>
                                        </tr>
                                        <tr className="bg-background-subtle">
                                            <td className="p-4 font-semibold">SIMPLE Gold IRA</td>
                                            <td className="p-4">Tax-deferred with employer matching options.</td>
                                            <td className="p-4">Small businesses with fewer than 100 employees.</td>
                                            <td className="p-4">$16,000 ($19,500 if 50+)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                Most people rolling over an existing 401(k) or traditional IRA will choose a <strong>Traditional Gold IRA</strong> to maintain the tax-deferred status. However, you can also convert to a Roth Gold IRA if you&apos;re willing to pay taxes now for tax-free growth later. Compare your options with our <Link href="/compare/gold-ira-vs-401k">Gold IRA vs. 401(k)</Link> guide.
                            </p>
                        </section>

                        {/* Section 5: How to Open */}
                        <section id="how-to-open" className="scroll-mt-32">
                            <h2>How to Open a Gold IRA: Step-by-Step Process</h2>
                            <p>
                                Ready to <strong>open a gold IRA</strong>? The process is straightforward when you work with a reputable dealer. Here&apos;s exactly what to expect:
                            </p>

                            <div className="not-prose my-8">
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-primary text-lg">Choose a Gold IRA Company</h4>
                                            <p className="text-text-muted mt-1">Research and select a reputable precious metals dealer. Look for companies with strong BBB ratings, transparent pricing, and educational resources. Our top recommendations include <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta Precious Metals</Link> (best for $50k+) and <Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link> (best for smaller accounts).</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-primary text-lg">Open Your Self-Directed IRA</h4>
                                            <p className="text-text-muted mt-1">Your dealer will help you establish an account with a custodian that specializes in precious metals. This typically involves completing an application and providing identification documents.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-primary text-lg">Fund Your Account</h4>
                                            <p className="text-text-muted mt-1">You have three options: <strong>Rollover</strong> from an existing 401(k), 403(b), or TSP (tax-free); <strong>Transfer</strong> from another IRA (tax-free); or make a <strong>Direct Contribution</strong> up to annual limits. Most people choose a rollover. See our <Link href="/guide/401k-to-gold-rollover" className="text-secondary hover:underline">401(k) to gold rollover guide</Link> for details.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">4</div>
                                        <div>
                                            <h4 className="font-bold text-primary text-lg">Select Your Precious Metals</h4>
                                            <p className="text-text-muted mt-1">Work with your dealer to choose IRS-approved gold, silver, platinum, or palladium products. Your dealer should provide guidance on the best mix for your goals and explain premium vs. spot price considerations.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">5</div>
                                        <div>
                                            <h4 className="font-bold text-primary text-lg">Complete Purchase & Storage</h4>
                                            <p className="text-text-muted mt-1">Once your account is funded, you&apos;ll authorize the purchase. Your dealer ships the metals directly to your chosen depository, where they&apos;re securely stored and insured. You&apos;ll receive confirmation and can track your holdings.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p>
                                <strong>Timeline:</strong> The entire process typically takes 2-3 weeks from start to finish. The longest part is usually waiting for funds to transfer from your existing retirement account.
                            </p>
                        </section>

                        {/* Section 6: Investment Strategy */}
                        <section id="investment-strategy" className="scroll-mt-32">
                            <h2>Gold IRA Investment Strategy</h2>
                            <p>
                                How much of your portfolio should be in gold? There&apos;s no one-size-fits-all answer, but here are the strategies used by sophisticated <strong>gold IRA investors</strong>:
                            </p>

                            <h3>The 10-20% Rule</h3>
                            <p>
                                Most financial advisors who recommend precious metals suggest allocating 10-20% of your retirement portfolio to gold and silver. This provides meaningful protection without over-concentrating in a single asset class.
                            </p>

                            <h3>The &quot;Rich Dad&quot; Approach</h3>
                            <p>
                                Followers of Robert Kiyosaki&apos;s philosophy often take a more aggressive stance, viewing gold not as a small hedge but as a core holding. The idea: in times of monetary uncertainty, those who hold real assets thrive while those holding paper suffer.
                            </p>

                            <h3>Age-Based Allocation</h3>
                            <p>
                                Some investors increase their gold allocation as they approach retirement. The logic: younger investors can weather market volatility, while those closer to retirement need stability. A 65-year-old might hold 20-30% in precious metals, while a 45-year-old might hold 10%.
                            </p>

                            <div className="bg-background-subtle rounded-2xl p-6 border border-primary/5 not-prose my-8">
                                <h4 className="font-bold text-primary text-lg mb-4">Gold vs. Silver: How to Allocate</h4>
                                <p className="text-text-muted mb-4">Most precious metals IRAs include both gold and silver. Common splits include:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-3">
                                        <span className="w-3 h-3 rounded-full bg-secondary"></span>
                                        <span><strong>75% Gold / 25% Silver</strong> — Conservative, focuses on gold&apos;s stability</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-3 h-3 rounded-full bg-secondary"></span>
                                        <span><strong>60% Gold / 40% Silver</strong> — Balanced approach</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-3 h-3 rounded-full bg-secondary"></span>
                                        <span><strong>50% Gold / 50% Silver</strong> — Higher growth potential (silver is more volatile)</span>
                                    </li>
                                </ul>
                                <p className="text-sm text-text-muted mt-4">For a detailed comparison, see <Link href="/compare/gold-vs-silver-ira" className="text-secondary hover:underline">Gold vs. Silver IRA</Link>.</p>
                            </div>
                        </section>

                        {/* Section 7: Eligible Metals */}
                        <section id="eligible-metals" className="scroll-mt-32">
                            <h2>IRS-Approved Gold and Precious Metals</h2>
                            <p>
                                Not all gold qualifies for an IRA. The IRS has strict purity requirements for <strong>IRA-approved gold</strong> and other precious metals:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-primary/10">
                                            <th className="p-4 font-bold text-primary">Metal</th>
                                            <th className="p-4 font-bold text-primary">Minimum Purity</th>
                                            <th className="p-4 font-bold text-primary">Popular IRA-Approved Products</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="bg-white">
                                            <td className="p-4 font-semibold">Gold</td>
                                            <td className="p-4">99.5% (0.995)</td>
                                            <td className="p-4">American Gold Eagle, Canadian Gold Maple Leaf, Gold Buffalo, Austrian Philharmonic</td>
                                        </tr>
                                        <tr className="bg-background-subtle">
                                            <td className="p-4 font-semibold">Silver</td>
                                            <td className="p-4">99.9% (0.999)</td>
                                            <td className="p-4">American Silver Eagle, Canadian Silver Maple Leaf, Silver Britannia</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="p-4 font-semibold">Platinum</td>
                                            <td className="p-4">99.95% (0.9995)</td>
                                            <td className="p-4">American Platinum Eagle, Canadian Platinum Maple Leaf</td>
                                        </tr>
                                        <tr className="bg-background-subtle">
                                            <td className="p-4 font-semibold">Palladium</td>
                                            <td className="p-4">99.95% (0.9995)</td>
                                            <td className="p-4">Canadian Palladium Maple Leaf</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <strong>Note:</strong> Collectible coins, rare coins, and most jewelry do not qualify. The one exception is the American Gold Eagle, which is allowed despite being only 91.67% pure (22 karat) because it&apos;s specifically authorized by law. For a complete list, see our guide to <Link href="/learn/ira-approved-gold-coins">IRA-approved gold coins</Link>.
                            </p>
                        </section>

                        {/* Section 8: Fees */}
                        <section id="fees" className="scroll-mt-32">
                            <h2>Understanding Gold IRA Fees</h2>
                            <p>
                                <strong>Gold IRA fees</strong> are typically higher than standard IRA fees because of the costs involved in storing and insuring physical metals. Here&apos;s what to expect:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="p-4 border-b font-bold text-primary">Fee Type</th>
                                            <th className="p-4 border-b font-bold text-primary">Typical Range</th>
                                            <th className="p-4 border-b font-bold text-primary">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        <tr>
                                            <td className="p-4 font-semibold">Setup/Account Fee</td>
                                            <td className="p-4">$50 - $150</td>
                                            <td className="p-4">One-time fee to open your account</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">Annual Custodian Fee</td>
                                            <td className="p-4">$75 - $300</td>
                                            <td className="p-4">Administrative costs for maintaining your account</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">Storage Fee</td>
                                            <td className="p-4">$100 - $300/year</td>
                                            <td className="p-4">Depository charges; may be flat or percentage-based</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">Dealer Markup</td>
                                            <td className="p-4">2% - 10%</td>
                                            <td className="p-4">Premium over spot price; varies by product and dealer</td>
                                        </tr>
                                        <tr className="bg-secondary/5">
                                            <td className="p-4 font-bold text-primary">Total First Year</td>
                                            <td className="p-4 font-bold text-primary">$225 - $750+</td>
                                            <td className="p-4 font-medium text-secondary">Plus dealer markup on metals</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Callout type="tip" title="Fee-Saving Tip">
                                Several top companies waive fees for larger accounts. <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta Precious Metals</Link> often covers 10 years of fees for accounts over $50,000. Always ask about fee promotions before opening your account.
                            </Callout>

                            <p>
                                For a complete breakdown of what each company charges, see our detailed <Link href="/guide/gold-ira-fees">Gold IRA fees guide</Link>.
                            </p>
                        </section>

                        {/* Section 9: Risks */}
                        <section id="risks" className="scroll-mt-32">
                            <h2>Risks to Consider</h2>
                            <p>
                                No investment is without risk, and gold IRAs are no exception. Here are the key risks to understand before investing:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-red-50 border border-red-100">
                                    <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-700">Price Volatility</h4>
                                        <p className="text-sm text-red-600 mt-1">Gold prices can fluctuate significantly in the short term. While gold tends to hold value over decades, you could see your account value drop 20-30% during gold bear markets.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-50 border border-amber-100">
                                    <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-700">No Dividends or Interest</h4>
                                        <p className="text-sm text-amber-600 mt-1">Unlike stocks or bonds, gold generates no income. Your returns come solely from price appreciation. This makes gold better for preservation than growth.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-50 border border-amber-100">
                                    <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-700">Higher Fees Than Traditional IRAs</h4>
                                        <p className="text-sm text-amber-600 mt-1">Storage, insurance, and custodian fees add up. Make sure the benefits of holding gold outweigh these costs for your situation.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-50 border border-red-100">
                                    <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-700">Scams and Unscrupulous Dealers</h4>
                                        <p className="text-sm text-red-600 mt-1">The gold IRA industry has its share of bad actors. Always verify BBB ratings, read reviews, and never work with a company that pressures you. See our guide on <Link href="/learn/gold-ira-scams" className="text-secondary hover:underline">gold IRA scams to avoid</Link>.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions About Gold IRAs</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">Can I physically hold the gold in my IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        No, IRS rules require precious metals in an IRA to be stored at an approved depository. You can only take physical possession when you take a distribution (typically after age 59½). Taking possession earlier triggers taxes and potential penalties. However, you can visit most depositories to see your metals if desired.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">What is the minimum investment for a gold IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Minimums vary by company. <Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link> accepts investments as low as $2,000. <Link href="/reviews/american-hartford-gold" className="text-secondary hover:underline">American Hartford Gold</Link> starts around $10,000. Premium providers like <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta Precious Metals</Link> require $50,000+ but offer more personalized service. Choose based on your investment amount.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">Can I rollover my 401(k) to a gold IRA without penalties?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Yes! You can rollover funds from a 401(k), 403(b), TSP, or traditional IRA into a gold IRA completely tax-free and penalty-free. The key is using a &quot;direct rollover&quot; where funds transfer directly between custodians. An &quot;indirect rollover&quot; (where you receive the funds) must be completed within 60 days to avoid taxes. See our <Link href="/guide/401k-to-gold-rollover" className="text-secondary hover:underline">401(k) to gold rollover guide</Link> for step-by-step instructions.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">Is a gold IRA a good investment in 2026?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Gold IRAs can be an excellent choice for investors seeking to protect against inflation, economic uncertainty, and stock market volatility. With national debt at record levels, continued money printing, and geopolitical tensions, many see gold as an essential portfolio hedge. However, gold should complement—not replace—a diversified portfolio. Most advisors recommend 10-20% allocation to precious metals.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">What happens to my gold IRA when I retire?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        At age 59½, you can begin taking distributions without penalty. You have three options: (1) Take physical delivery of your metals, (2) Sell your metals and receive cash, or (3) Take &quot;in-kind&quot; distributions of actual coins/bars. Traditional IRA distributions are taxed as ordinary income; Roth IRA distributions are tax-free. Required Minimum Distributions (RMDs) begin at age 73.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">Which gold IRA company is the best?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        The &quot;best&quot; company depends on your investment amount and priorities. For accounts over $50,000, <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta Precious Metals</Link> offers unmatched education and often waives fees for 10 years. For smaller accounts, <Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link> has low minimums and excellent service. <Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link> is great for those who want a simple process. Take our <Link href="/quiz" className="text-secondary hover:underline">quiz</Link> to find your best match.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">Are gold IRAs safe?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Gold IRAs are safe when you work with reputable companies and IRS-approved depositories. Your metals are stored in high-security vaults, fully insured against theft and damage. The bigger risk is working with unscrupulous dealers who charge excessive markups or promote illegal &quot;home storage&quot; schemes. Always check BBB ratings and read reviews before choosing a company. Learn how to protect yourself in our <Link href="/learn/gold-ira-scams" className="text-secondary hover:underline">gold IRA scams guide</Link>.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Protect Your Retirement?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Join over 500,000 Americans who have diversified their retirement savings with physical gold. Find out which company is the best fit for you.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/reviews/augusta-precious-metals">Read Our #1 Pick</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>
        </main>
    );
}
