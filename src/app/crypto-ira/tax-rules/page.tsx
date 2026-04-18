import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { FAQSection } from "@/components/seo/FAQSection";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { createPageMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";
import {
    FileText,
    Shield,
    AlertTriangle,
    DollarSign,
    CheckCircle2,
    Scale,
    Coins,
    BarChart3,
    BookOpen,
    Clock,
} from "lucide-react";

export const metadata = createPageMetadata({
    title: "Crypto IRA Tax Rules: What the IRS Says About Bitcoin in Retirement (2026)",
    description:
        "Complete guide to Crypto IRA tax rules for 2026. IRS Notice 2014-21, Traditional vs Roth crypto IRA tax treatment, UBIT for staking, and reporting requirements.",
    url: "https://www.richdadretirement.com/crypto-ira/tax-rules",
    type: "article",
});

const faqs = [
    {
        question: "Does the IRS tax cryptocurrency in an IRA?",
        answer:
            "Cryptocurrency held inside a Traditional IRA grows tax-deferred. You pay ordinary income tax only when you withdraw funds in retirement. In a Roth IRA, your crypto grows completely tax-free and qualified withdrawals are also tax-free. No capital gains tax applies to trades inside either IRA type.",
    },
    {
        question: "Is crypto staking inside an IRA subject to UBIT?",
        answer:
            "The IRS has not issued definitive guidance on whether staking rewards inside an IRA trigger Unrelated Business Income Tax (UBIT). However, many tax professionals argue that passive staking income could be treated as UBIT if it exceeds $1,000 per year. Consult a tax advisor familiar with crypto and retirement accounts before staking inside your IRA.",
    },
    {
        question: "Do I need to report crypto trades inside my IRA?",
        answer:
            "You do not report individual crypto trades inside your IRA on your personal tax return. Your IRA custodian handles reporting to the IRS. However, you must report IRA distributions (withdrawals) on Form 1040 and Form 1099-R. If your IRA earns more than $1,000 in UBIT, the IRA itself must file Form 990-T.",
    },
    {
        question: "Can I convert a regular crypto account to a Crypto IRA?",
        answer:
            "You cannot directly transfer crypto from a personal Coinbase or Binance account into an IRA. Instead, you would need to sell the crypto (triggering capital gains tax), contribute cash to your IRA (subject to annual limits), and then repurchase crypto inside the IRA. Alternatively, you can roll over funds from an existing IRA or 401k into a Crypto IRA without selling.",
    },
    {
        question: "What happens if I withdraw crypto from my IRA early?",
        answer:
            "Withdrawing from a Traditional Crypto IRA before age 59 1/2 triggers a 10% early withdrawal penalty plus ordinary income tax on the full amount. For a Roth Crypto IRA, you can withdraw your contributions penalty-free at any time, but earnings withdrawn before age 59 1/2 (and before the account is 5 years old) face the 10% penalty plus income tax.",
    },
];

export default function CryptoIRATaxRulesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#0C0D18]">
            <Navbar />

            <SchemaScript
                schema={articleSchema({
                    title: "Crypto IRA Tax Rules: What the IRS Says About Bitcoin in Retirement (2026)",
                    description:
                        "Complete guide to IRS tax treatment of cryptocurrency in IRAs including Notice 2014-21, Traditional vs Roth treatment, UBIT, and reporting requirements.",
                    slug: "/crypto-ira/tax-rules",
                    datePublished: "2025-02-01",
                    dateModified: "2026-03-01",
                })}
            />
            <SchemaScript
                schema={breadcrumbSchema([
                    { name: "Home", url: "/" },
                    { name: "Crypto IRA", url: "/crypto-ira" },
                    { name: "Tax Rules", url: "/crypto-ira/tax-rules" },
                ])}
            />

            {/* Hero */}
            <header className="relative py-16 md:py-20 bg-[#0C0D18]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_50%)]" />
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <nav className="flex items-center gap-2 text-sm text-[#A8A39A] mb-6">
                            <Link href="/" className="hover:text-[#D4A94E]">Home</Link>
                            <span>/</span>
                            <Link href="/crypto-ira" className="hover:text-[#D4A94E]">Crypto IRA</Link>
                            <span>/</span>
                            <span className="text-[#F6F4EF]">Tax Rules</span>
                        </nav>

                        <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Scale className="w-4 h-4" />
                            <span>IRS Guidance</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#F6F4EF] mb-6 leading-tight">
                            Crypto IRA Tax Rules: What the IRS Says About Bitcoin in Retirement
                        </h1>

                        <AnswerFirst
                            answer="The IRS treats cryptocurrency as property under Notice 2014-21. In a Traditional Crypto IRA, your Bitcoin and other crypto grow tax-deferred and you pay ordinary income tax on withdrawals. In a Roth Crypto IRA, qualified withdrawals are completely tax-free. No capital gains tax applies to trades made inside an IRA. Staking or DeFi income may trigger UBIT if it exceeds $1,000 per year."
                            keyFacts={[
                                "IRS Notice 2014-21: Crypto is property, not currency",
                                "Traditional IRA: Tax-deferred growth, taxed on withdrawal",
                                "Roth IRA: Tax-free growth and tax-free qualified withdrawals",
                                "UBIT may apply to staking/DeFi income over $1,000/year",
                                "No capital gains on trades inside an IRA",
                            ]}
                        />
                    </div>
                </Container>
            </header>

            {/* IRS Classification */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                IRS Notice 2014-21: Crypto Is Property
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-[#D0CCC4]">
                            <p>
                                In 2014, the IRS issued Notice 2014-21, which established that cryptocurrency is treated as <strong>property</strong> for federal tax purposes. This is the foundation of all crypto tax rules in retirement accounts.
                            </p>
                            <p>
                                What this means for your IRA: Since self-directed IRAs can hold property (real estate, precious metals, private equity), they can also hold cryptocurrency. The same tax advantages that apply to stocks and bonds in your IRA apply to Bitcoin, Ethereum, and other digital assets.
                            </p>
                        </div>

                        <div className="bg-[#121423] border border-blue-200 rounded-xl p-6 mt-6">
                            <h3 className="font-bold text-[#F6F4EF] mb-3">Key IRS Rules for Crypto in IRAs</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-[#D0CCC4]">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span>Crypto-to-crypto swaps inside an IRA are <strong>not</strong> taxable events</span>
                                </li>
                                <li className="flex items-start gap-3 text-[#D0CCC4]">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span>No short-term or long-term capital gains tax applies inside the IRA</span>
                                </li>
                                <li className="flex items-start gap-3 text-[#D0CCC4]">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span>Annual contribution limits still apply: $7,000 ($8,000 if 50+) for 2026</span>
                                </li>
                                <li className="flex items-start gap-3 text-[#D0CCC4]">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span>Required Minimum Distributions (RMDs) apply to Traditional Crypto IRAs starting at age 73</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Traditional vs Roth */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <BarChart3 className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                Traditional vs Roth Crypto IRA Tax Treatment
                            </h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-[#161828] rounded-xl overflow-hidden">
                                <thead>
                                    <tr className="bg-[#121423]">
                                        <th className="text-left px-5 py-3 text-[#F6F4EF] font-semibold">Tax Feature</th>
                                        <th className="text-left px-5 py-3 text-[#F6F4EF] font-semibold">Traditional Crypto IRA</th>
                                        <th className="text-left px-5 py-3 text-[#F6F4EF] font-semibold">Roth Crypto IRA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-[#2A2D42]">
                                        <td className="px-5 py-3 font-medium text-[#D0CCC4]">Contributions</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">Tax-deductible (reduces current taxes)</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">After-tax (no deduction)</td>
                                    </tr>
                                    <tr className="border-t border-[#2A2D42] bg-[#0C0D18]/50">
                                        <td className="px-5 py-3 font-medium text-[#D0CCC4]">Growth</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">Tax-deferred</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">Tax-free</td>
                                    </tr>
                                    <tr className="border-t border-[#2A2D42]">
                                        <td className="px-5 py-3 font-medium text-[#D0CCC4]">Withdrawals</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">Taxed as ordinary income</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">Tax-free (if qualified)</td>
                                    </tr>
                                    <tr className="border-t border-[#2A2D42] bg-[#0C0D18]/50">
                                        <td className="px-5 py-3 font-medium text-[#D0CCC4]">RMDs at 73</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">Required</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">Not required for original owner</td>
                                    </tr>
                                    <tr className="border-t border-[#2A2D42]">
                                        <td className="px-5 py-3 font-medium text-[#D0CCC4]">Early Withdrawal Penalty</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">10% + income tax before 59 1/2</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">10% on earnings before 59 1/2</td>
                                    </tr>
                                    <tr className="border-t border-[#2A2D42] bg-[#0C0D18]/50">
                                        <td className="px-5 py-3 font-medium text-[#D0CCC4]">Best For</td>
                                        <td className="px-5 py-3 text-[#D0CCC4] font-medium">Higher income now, lower in retirement</td>
                                        <td className="px-5 py-3 text-[#D0CCC4] font-medium">Expect crypto to grow significantly</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-xl p-5 mt-6">
                            <div className="flex items-start gap-3">
                                <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <p className="text-[#D0CCC4] text-sm">
                                    <strong>Tax Tip:</strong> If you believe Bitcoin will be worth significantly more in 10-20 years, a Roth Crypto IRA means all that growth is tax-free. A $10,000 Roth contribution that grows to $100,000 means $90,000 in gains you never pay taxes on.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* UBIT */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                                <AlertTriangle className="w-5 h-5 text-[#D4A94E]" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                UBIT: The Hidden Tax Risk for Staking and DeFi
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-[#D0CCC4]">
                            <p>
                                Unrelated Business Income Tax (UBIT) is a tax that applies when a tax-exempt entity (like your IRA) earns income from an active trade or business. While simply buying and holding crypto is passive income, <strong>staking rewards and DeFi yields</strong> may cross the line into active business income.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-[rgba(220,38,38,0.08)] border border-red-200 rounded-xl p-6">
                                <h3 className="font-bold text-red-800 mb-3">May Trigger UBIT</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-[#D0CCC4] text-sm">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        Staking rewards exceeding $1,000/year
                                    </li>
                                    <li className="flex items-start gap-2 text-[#D0CCC4] text-sm">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        DeFi lending and liquidity pool income
                                    </li>
                                    <li className="flex items-start gap-2 text-[#D0CCC4] text-sm">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        Mining operations through the IRA
                                    </li>
                                    <li className="flex items-start gap-2 text-[#D0CCC4] text-sm">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        Active trading as a business (high frequency)
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-xl p-6">
                                <h3 className="font-bold text-green-800 mb-3">Generally UBIT-Free</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-[#D0CCC4] text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Buying and holding cryptocurrency
                                    </li>
                                    <li className="flex items-start gap-2 text-[#D0CCC4] text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Trading crypto for other crypto
                                    </li>
                                    <li className="flex items-start gap-2 text-[#D0CCC4] text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Selling crypto for cash inside the IRA
                                    </li>
                                    <li className="flex items-start gap-2 text-[#D0CCC4] text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Airdrops and hard fork proceeds (generally)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-[#161828] border border-[rgba(197,149,46,0.32)] rounded-xl p-5 mt-6">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-[#D4A94E] mt-0.5 flex-shrink-0" />
                                <p className="text-[#D0CCC4] text-sm">
                                    <strong>Tax Note:</strong> UBIT tax rates go up to 37% on unrelated business income over $1,000 per year. If your IRA earns UBIT, it must file Form 990-T and pay the tax from IRA funds. Most buy-and-hold crypto investors will not encounter UBIT.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Reporting Requirements */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-[#D4A94E]" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                Reporting Requirements
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-[#D0CCC4] mb-8">
                            <p>
                                One of the big advantages of holding crypto in an IRA is simplified tax reporting. You do not need to track every single trade for capital gains purposes, because trades inside an IRA are not taxable events.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-[#161828] rounded-xl border border-[#2A2D42] p-6">
                                <h3 className="font-bold text-[#F6F4EF] mb-2 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-blue-500" />
                                    Form 5498 (IRA Contributions)
                                </h3>
                                <p className="text-[#D0CCC4] text-sm">
                                    Your custodian files this annually reporting your IRA contributions and year-end fair market value. You receive a copy for your records but do not file it with your tax return.
                                </p>
                            </div>

                            <div className="bg-[#161828] rounded-xl border border-[#2A2D42] p-6">
                                <h3 className="font-bold text-[#F6F4EF] mb-2 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-blue-500" />
                                    Form 1099-R (IRA Distributions)
                                </h3>
                                <p className="text-[#D0CCC4] text-sm">
                                    Issued when you take distributions from your IRA. You must report distributions on your Form 1040. For Traditional IRAs, the distribution amount is taxable income.
                                </p>
                            </div>

                            <div className="bg-[#161828] rounded-xl border border-[#2A2D42] p-6">
                                <h3 className="font-bold text-[#F6F4EF] mb-2 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-[#D4A94E]" />
                                    Form 990-T (UBIT Only)
                                </h3>
                                <p className="text-[#D0CCC4] text-sm">
                                    Required only if your IRA has more than $1,000 in unrelated business taxable income (from staking, DeFi, etc.). The IRA itself files this form and pays the tax from IRA funds.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Augusta CTA */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <AugustaCTA
                            variant="footer"
                            headline="Prefer Simpler Tax Treatment? Consider Gold."
                            subheadline="Physical gold in an IRA has straightforward tax rules with no UBIT concerns. Augusta Precious Metals can help you understand your options."
                            trackSource="crypto-ira-tax-rules"
                        />
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <FAQSection faqs={faqs} />
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
