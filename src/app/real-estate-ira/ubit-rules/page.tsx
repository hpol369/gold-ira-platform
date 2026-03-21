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
    AlertTriangle,
    CheckCircle2,
    DollarSign,
    FileText,
    Shield,
    Building2,
    Calculator,
    Scale,
    BookOpen,
    Ban,
} from "lucide-react";

export const metadata = createPageMetadata({
    title: "UBIT in a Self-Directed IRA: Real Estate Tax Rules Explained (2026)",
    description:
        "Understand UBIT (Unrelated Business Income Tax) in self-directed IRAs. Learn what triggers UBIT, exemptions for real estate, tax rates, and how to avoid it.",
    url: "https://www.richdadretirement.com/real-estate-ira/ubit-rules",
    type: "article",
});

const faqs = [
    {
        question: "What is UBIT in a self-directed IRA?",
        answer:
            "Unrelated Business Income Tax (UBIT) is a tax that applies when a tax-exempt entity like your IRA earns income from an active business or from debt-financed investments. For real estate IRAs, UBIT most commonly applies when you use a mortgage (debt financing) to purchase property inside your IRA. The portion of income attributable to the debt is subject to UBIT at rates up to 37%.",
    },
    {
        question: "Does an all-cash real estate purchase in my IRA trigger UBIT?",
        answer:
            "No. If you purchase property entirely with IRA funds (no mortgage or leverage), the rental income and capital gains are generally exempt from UBIT. The tax shelter of the IRA remains intact. UBIT is triggered specifically by debt-financed income, so all-cash purchases avoid this issue entirely.",
    },
    {
        question: "What is the UBIT tax rate for IRAs?",
        answer:
            "UBIT is taxed at trust tax rates, which escalate quickly. For 2026, the rates are: 10% on the first $3,150, 24% on income from $3,151 to $11,450, 35% on income from $11,451 to $15,650, and 37% on income over $15,650. There is a $1,000 standard deduction, so UBIT only applies to unrelated business income above $1,000.",
    },
    {
        question: "How do I calculate UDFI (Unrelated Debt-Financed Income)?",
        answer:
            "UDFI is calculated as the percentage of the property financed by debt multiplied by the net income. For example, if your IRA buys a $200,000 property with a $100,000 non-recourse mortgage (50% debt), and the property generates $20,000 in net income, then 50% of that income ($10,000) is UDFI and subject to UBIT. The debt percentage is recalculated annually as you pay down the mortgage.",
    },
    {
        question: "Can I avoid UBIT on real estate in my IRA?",
        answer:
            "Yes. The most straightforward way is to buy property with all cash from your IRA—no mortgage. Other strategies include using a triple-net lease structure (tenant pays all expenses), investing through a Roth IRA (UBIT still applies but gains are eventually tax-free), or using a Solo 401k instead of an IRA, which is exempt from UDFI rules on leveraged real estate.",
    },
];

export default function UBITRulesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <SchemaScript
                schema={articleSchema({
                    title: "UBIT in a Self-Directed IRA: Real Estate Tax Rules Explained (2026)",
                    description:
                        "Complete guide to UBIT for real estate in self-directed IRAs, including UDFI calculations, exemptions, tax rates, and avoidance strategies.",
                    slug: "/real-estate-ira/ubit-rules",
                    datePublished: "2025-01-20",
                    dateModified: "2026-03-01",
                })}
            />
            <SchemaScript
                schema={breadcrumbSchema([
                    { name: "Home", url: "/" },
                    { name: "Real Estate IRA", url: "/real-estate-ira" },
                    { name: "UBIT Rules", url: "/real-estate-ira/ubit-rules" },
                ])}
            />

            {/* Hero */}
            <header className="relative py-16 md:py-20 bg-slate-50">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.08),transparent_50%)]" />
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                            <Link href="/" className="hover:text-[#B22234]">Home</Link>
                            <span>/</span>
                            <Link href="/real-estate-ira" className="hover:text-[#B22234]">Real Estate IRA</Link>
                            <span>/</span>
                            <span className="text-slate-900">UBIT Rules</span>
                        </nav>

                        <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Scale className="w-4 h-4" />
                            <span>IRS Tax Rules</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-6 leading-tight">
                            UBIT in a Self-Directed IRA: Real Estate Tax Rules Explained
                        </h1>

                        <AnswerFirst
                            answer="Unrelated Business Income Tax (UBIT) applies to your self-directed IRA when it earns income from debt-financed property or an active business. For real estate, the most common trigger is using a mortgage to buy property inside your IRA—the portion of income attributable to the debt is taxed at trust rates up to 37%. All-cash purchases and triple-net leases are generally exempt from UBIT."
                            keyFacts={[
                                "UBIT applies to debt-financed property income (UDFI) in an IRA",
                                "All-cash real estate purchases avoid UBIT entirely",
                                "Tax rate: up to 37% on net income above $1,000",
                                "Solo 401k is exempt from UDFI rules (unlike IRAs)",
                                "Triple-net leases and passive rental income from unlevered property are exempt",
                            ]}
                        />
                    </div>
                </Container>
            </header>

            {/* What Triggers UBIT */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#000080]">
                                What Triggers UBIT in a Real Estate IRA
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-600 mb-8">
                            <p>
                                Your IRA is a tax-exempt entity. The IRS allows it to grow tax-deferred (Traditional) or tax-free (Roth). But when your IRA engages in activities that look like a business, the IRS says: &quot;That is not what retirement accounts are for. You owe tax on that income.&quot;
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" /> Triggers UBIT
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-slate-600 text-sm">
                                        <Ban className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <strong>Debt-Financed Property (UDFI):</strong> Any property purchased with a mortgage triggers UBIT on the leveraged portion of income
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2 text-slate-600 text-sm">
                                        <Ban className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <strong>Operating a Business:</strong> If your IRA-owned property runs an active business (hotel, restaurant, store), the income is UBIT
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2 text-slate-600 text-sm">
                                        <Ban className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <strong>Flipping Property:</strong> Regular property flipping may be classified as a &quot;dealer&quot; activity subject to UBIT
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" /> Exempt from UBIT
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-slate-600 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <strong>All-Cash Purchases:</strong> Rental income from unlevered property is passive and exempt
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2 text-slate-600 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <strong>Triple-Net Leases:</strong> Tenant pays taxes, insurance, and maintenance—pure passive income for the IRA
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2 text-slate-600 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <strong>Property Sale Gains (No Debt):</strong> Capital gains from selling unlevered property are exempt
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* UBIT Rate Table */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#000080]">
                                UBIT Tax Rates for 2026
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-600 mb-6">
                            <p>
                                UBIT is taxed at <strong>trust tax rates</strong>, which are more compressed than individual tax rates. This means the income hits the top 37% rate much faster than your personal income does.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden">
                                <thead>
                                    <tr className="bg-slate-100">
                                        <th className="text-left px-5 py-3 text-slate-900 font-semibold">Taxable Income</th>
                                        <th className="text-left px-5 py-3 text-slate-900 font-semibold">Tax Rate</th>
                                        <th className="text-left px-5 py-3 text-slate-900 font-semibold">Tax Owed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-slate-100">
                                        <td className="px-5 py-3 text-slate-600">$0 - $1,000</td>
                                        <td className="px-5 py-3 text-green-600 font-medium">0% (standard deduction)</td>
                                        <td className="px-5 py-3 text-slate-600">$0</td>
                                    </tr>
                                    <tr className="border-t border-slate-100 bg-slate-50/50">
                                        <td className="px-5 py-3 text-slate-600">$1,001 - $3,150</td>
                                        <td className="px-5 py-3 text-slate-600 font-medium">10%</td>
                                        <td className="px-5 py-3 text-slate-600">Up to $215</td>
                                    </tr>
                                    <tr className="border-t border-slate-100">
                                        <td className="px-5 py-3 text-slate-600">$3,151 - $11,450</td>
                                        <td className="px-5 py-3 text-amber-600 font-medium">24%</td>
                                        <td className="px-5 py-3 text-slate-600">$215 + 24% of excess</td>
                                    </tr>
                                    <tr className="border-t border-slate-100 bg-slate-50/50">
                                        <td className="px-5 py-3 text-slate-600">$11,451 - $15,650</td>
                                        <td className="px-5 py-3 text-orange-600 font-medium">35%</td>
                                        <td className="px-5 py-3 text-slate-600">$2,207 + 35% of excess</td>
                                    </tr>
                                    <tr className="border-t border-slate-100">
                                        <td className="px-5 py-3 text-slate-600">Over $15,650</td>
                                        <td className="px-5 py-3 text-red-600 font-medium">37%</td>
                                        <td className="px-5 py-3 text-slate-600">$3,677 + 37% of excess</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                <p className="text-slate-700 text-sm">
                                    <strong>Important:</strong> The $1,000 standard deduction means small amounts of UBIT may not owe anything. But the trust tax rates are steep—income over $15,650 is taxed at 37%, compared to $609,350 for individual filers. This is why UBIT planning matters.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* UDFI Calculation Example */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Calculator className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#000080]">
                                UDFI Calculation Example
                            </h2>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <h3 className="font-bold text-slate-900 mb-4">Scenario: IRA Buys Rental Property with Mortgage</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-600">Property purchase price</span>
                                    <span className="font-semibold text-slate-900">$200,000</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-600">IRA cash invested</span>
                                    <span className="font-semibold text-slate-900">$100,000 (50%)</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-600">Non-recourse mortgage</span>
                                    <span className="font-semibold text-slate-900">$100,000 (50%)</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-600">Annual net rental income</span>
                                    <span className="font-semibold text-slate-900">$20,000</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-600">Debt percentage (average acquisition indebtedness)</span>
                                    <span className="font-semibold text-[#B22234]">50%</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-600">UDFI (50% of $20,000)</span>
                                    <span className="font-semibold text-[#B22234]">$10,000</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-600">Less $1,000 deduction</span>
                                    <span className="font-semibold text-green-600">-$1,000</span>
                                </div>
                                <div className="flex justify-between pt-2">
                                    <span className="text-slate-900 font-bold">Taxable UBIT</span>
                                    <span className="font-bold text-[#B22234]">$9,000</span>
                                </div>
                                <div className="flex justify-between border-t border-slate-300 pt-2">
                                    <span className="text-slate-900 font-bold">Estimated UBIT Tax Owed</span>
                                    <span className="font-bold text-[#B22234]">~$1,619</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Avoidance Strategies */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <Shield className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#000080]">
                                How to Avoid UBIT on Real Estate
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white rounded-xl border border-slate-200 p-6">
                                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Buy All-Cash
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    The simplest strategy. If your IRA has enough funds to purchase property without a mortgage, no UBIT applies. All rental income and capital gains are sheltered by the IRA&apos;s tax-exempt status.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl border border-slate-200 p-6">
                                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Use a Solo 401k Instead
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    Solo 401k plans are <strong>exempt from UDFI rules</strong> under IRC Section 514(c)(9). If you are self-employed, a Solo 401k lets you leverage real estate with a mortgage and avoid UBIT entirely. This is one of the biggest advantages of a Solo 401k over a self-directed IRA for real estate investors.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl border border-slate-200 p-6">
                                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Triple-Net Leases
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    With a triple-net (NNN) lease, the tenant pays all expenses including property taxes, insurance, and maintenance. This creates purely passive income for your IRA and reduces the chance of UBIT complications.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl border border-slate-200 p-6">
                                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Pay Off Mortgage Before Selling
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    UDFI on property sales looks at the average debt over the 12 months before the sale. If you pay off the mortgage and wait 12 months before selling, the UDFI percentage on the capital gain drops to zero.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Augusta CTA */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <AugustaCTA
                            variant="footer"
                            headline="Want Simpler Tax Rules? Consider a Gold IRA."
                            subheadline="Physical gold in an IRA has no UBIT concerns, no property management headaches, and no mortgage requirements. Augusta Precious Metals can show you how it works."
                            trackSource="real-estate-ira-ubit-rules"
                        />
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-slate-50">
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
