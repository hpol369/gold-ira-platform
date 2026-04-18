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
    Shield,
    Building2,
    Scale,
    Landmark,
    BarChart3,
    FileText,
    ArrowRight,
} from "lucide-react";

export const metadata = createPageMetadata({
    title: "Non-Recourse Loans for IRA Real Estate: How They Work (2026)",
    description:
        "How non-recourse loans work for IRA real estate investing. Understand why IRAs require non-recourse financing, typical terms, lenders, and how they differ from conventional mortgages.",
    url: "https://www.richdadretirement.com/real-estate-ira/non-recourse-loans",
    type: "article",
});

const lenders = [
    { name: "North American Savings Bank", ltv: "Up to 60%", term: "15-30 years", minLoan: "$50,000", notes: "One of the most established IRA non-recourse lenders" },
    { name: "First Western Federal Savings Bank", ltv: "Up to 60%", term: "15-25 years", minLoan: "$50,000", notes: "Available in multiple states" },
    { name: "Solera National Bank", ltv: "Up to 55%", term: "15-20 years", minLoan: "$75,000", notes: "Focus on investment properties" },
    { name: "Pacific Enterprises Trust", ltv: "Up to 50%", term: "15-20 years", minLoan: "$100,000", notes: "Larger loan amounts available" },
];

const faqs = [
    {
        question: "What is a non-recourse loan for an IRA?",
        answer:
            "A non-recourse loan is a mortgage where the lender's only collateral is the property itself. If you default, the lender can seize the property but cannot pursue your other IRA assets, personal assets, or personal credit. IRAs are required to use non-recourse financing because a personal guarantee would constitute a prohibited transaction under IRC Section 4975.",
    },
    {
        question: "Why do IRAs require non-recourse loans instead of regular mortgages?",
        answer:
            "Regular mortgages require a personal guarantee, which means you personally promise to repay the debt. Since your IRA is a separate legal entity, you personally guaranteeing its debt is a prohibited transaction—it is an indirect benefit from a disqualified person (you) to the IRA. Non-recourse loans remove the personal guarantee, keeping the transaction compliant.",
    },
    {
        question: "What are typical non-recourse loan terms for IRAs?",
        answer:
            "Typical terms include: 40-50% down payment (50-60% LTV), interest rates 1-2% above conventional mortgages, 15-20 year loan terms (some lenders offer 25-30), and minimum loan amounts of $50,000-$100,000. There is no personal credit check since the loan is based on property cash flow. Closing costs are typically 2-3% of the loan amount.",
    },
    {
        question: "Does a non-recourse loan in my IRA trigger UBIT?",
        answer:
            "Yes. Any debt-financed property income in an IRA is subject to Unrelated Debt-Financed Income (UDFI), which triggers UBIT. The taxable portion equals the percentage of the property financed by debt multiplied by net income. For example, if 50% of the property is debt-financed, 50% of the net income is taxable. UBIT rates for trusts reach 37% on income over approximately $15,650.",
    },
    {
        question: "Can I avoid non-recourse loans by using a Solo 401k?",
        answer:
            "Yes. Solo 401k plans are exempt from UDFI rules under IRC Section 514(c)(9), which means you can use leveraged real estate in a Solo 401k without triggering UBIT. If you are self-employed, this is a significant advantage. The Solo 401k can still use non-recourse financing, but the income is not subject to UBIT.",
    },
];

export default function NonRecourseLoansPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#0C0D18]">
            <Navbar />

            <SchemaScript
                schema={articleSchema({
                    title: "Non-Recourse Loans for IRA Real Estate: How They Work (2026)",
                    description:
                        "Complete guide to non-recourse loans for IRA real estate including why they are required, typical terms, lender comparison, and UBIT implications.",
                    slug: "/real-estate-ira/non-recourse-loans",
                    datePublished: "2025-02-15",
                    dateModified: "2026-03-01",
                })}
            />
            <SchemaScript
                schema={breadcrumbSchema([
                    { name: "Home", url: "/" },
                    { name: "Real Estate IRA", url: "/real-estate-ira" },
                    { name: "Non-Recourse Loans", url: "/real-estate-ira/non-recourse-loans" },
                ])}
            />

            {/* Hero */}
            <header className="relative py-16 md:py-20 bg-[#0C0D18]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.08),transparent_50%)]" />
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <nav className="flex items-center gap-2 text-sm text-[#A8A39A] mb-6">
                            <Link href="/" className="hover:text-[#D4A94E]">Home</Link>
                            <span>/</span>
                            <Link href="/real-estate-ira" className="hover:text-[#D4A94E]">Real Estate IRA</Link>
                            <span>/</span>
                            <span className="text-[#F6F4EF]">Non-Recourse Loans</span>
                        </nav>

                        <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Landmark className="w-4 h-4" />
                            <span>IRA Financing</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#F6F4EF] mb-6 leading-tight">
                            Non-Recourse Loans for IRA Real Estate: How They Work
                        </h1>

                        <AnswerFirst
                            answer="A non-recourse loan means the lender can only seize the property if you default—they cannot go after your other IRA assets or personal assets. IRAs are required to use non-recourse financing because a personal guarantee would be a prohibited transaction. Typical terms require 40-50% down payment, carry interest rates 1-2% above conventional mortgages, and have 15-20 year terms. The leveraged income triggers UBIT at rates up to 37%."
                            keyFacts={[
                                "Non-recourse: lender can only seize the property, not other assets",
                                "Required for IRAs: personal guarantees are prohibited transactions",
                                "Typical terms: 50-60% LTV, 15-20 years, rates 1-2% above conventional",
                                "Leveraged income triggers UBIT at trust tax rates (up to 37%)",
                                "Solo 401k avoids UBIT on leveraged real estate (Section 514(c)(9) exemption)",
                            ]}
                        />
                    </div>
                </Container>
            </header>

            {/* What Non-Recourse Means */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Shield className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                What &quot;Non-Recourse&quot; Actually Means
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-[rgba(220,38,38,0.08)] border border-red-200 rounded-xl p-6">
                                <h3 className="font-bold text-red-800 mb-3">Recourse Loan (Regular Mortgage)</h3>
                                <p className="text-[#D0CCC4] text-sm mb-3">
                                    With a regular mortgage, you personally guarantee repayment. If you default, the lender can:
                                </p>
                                <ul className="space-y-2 text-sm text-[#D0CCC4]">
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        Seize the property
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        Sue you personally for the remaining balance
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        Garnish wages and go after other assets
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        Report the deficiency to credit bureaus
                                    </li>
                                </ul>
                                <p className="text-red-700 text-xs font-bold mt-4">NOT ALLOWED for IRA real estate</p>
                            </div>

                            <div className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-xl p-6">
                                <h3 className="font-bold text-green-800 mb-3">Non-Recourse Loan (IRA Mortgage)</h3>
                                <p className="text-[#D0CCC4] text-sm mb-3">
                                    The lender&apos;s only collateral is the property. If the IRA defaults:
                                </p>
                                <ul className="space-y-2 text-sm text-[#D0CCC4]">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Lender can seize only the property
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Cannot pursue other IRA assets
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Cannot pursue your personal assets
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        No impact on your personal credit
                                    </li>
                                </ul>
                                <p className="text-green-700 text-xs font-bold mt-4">REQUIRED for IRA real estate</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Required */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                                <Scale className="w-5 h-5 text-[#D4A94E]" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                Why IRAs Require Non-Recourse Financing
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-[#D0CCC4]">
                            <p>
                                Under IRC Section 4975, a &quot;prohibited transaction&quot; includes any direct or indirect extension of credit between you (a disqualified person) and your IRA. When you personally guarantee a mortgage for your IRA, you are extending your personal credit to benefit the IRA. That is a prohibited transaction.
                            </p>
                            <p>
                                Non-recourse loans solve this by removing the personal guarantee entirely. The lender evaluates the property&apos;s cash flow and value to make the lending decision, not your personal creditworthiness. This keeps the transaction arm&apos;s-length and IRS-compliant.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Typical Terms */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                                <BarChart3 className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                Typical Non-Recourse Loan Terms
                            </h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-[#161828] rounded-xl overflow-hidden">
                                <thead>
                                    <tr className="bg-[#121423]">
                                        <th className="text-left px-5 py-3 text-[#F6F4EF] font-semibold">Feature</th>
                                        <th className="text-left px-5 py-3 text-[#F6F4EF] font-semibold">Non-Recourse (IRA)</th>
                                        <th className="text-left px-5 py-3 text-[#F6F4EF] font-semibold">Conventional Mortgage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-[#2A2D42]">
                                        <td className="px-5 py-3 font-medium text-[#D0CCC4]">Down Payment</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">40-50%</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">20-25%</td>
                                    </tr>
                                    <tr className="border-t border-[#2A2D42] bg-[#0C0D18]/50">
                                        <td className="px-5 py-3 font-medium text-[#D0CCC4]">Interest Rate</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">1-2% above conventional</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">Market rate</td>
                                    </tr>
                                    <tr className="border-t border-[#2A2D42]">
                                        <td className="px-5 py-3 font-medium text-[#D0CCC4]">Loan Term</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">15-20 years (some 25-30)</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">15-30 years</td>
                                    </tr>
                                    <tr className="border-t border-[#2A2D42] bg-[#0C0D18]/50">
                                        <td className="px-5 py-3 font-medium text-[#D0CCC4]">Personal Guarantee</td>
                                        <td className="px-5 py-3 text-green-600 font-medium">None (prohibited)</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">Required</td>
                                    </tr>
                                    <tr className="border-t border-[#2A2D42]">
                                        <td className="px-5 py-3 font-medium text-[#D0CCC4]">Credit Check</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">Property-based underwriting</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">Personal credit score</td>
                                    </tr>
                                    <tr className="border-t border-[#2A2D42] bg-[#0C0D18]/50">
                                        <td className="px-5 py-3 font-medium text-[#D0CCC4]">Minimum Loan</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">$50,000-$100,000</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">Varies</td>
                                    </tr>
                                    <tr className="border-t border-[#2A2D42]">
                                        <td className="px-5 py-3 font-medium text-[#D0CCC4]">UBIT Implications</td>
                                        <td className="px-5 py-3 text-red-600 font-medium">Triggers UBIT on leveraged income</td>
                                        <td className="px-5 py-3 text-[#D0CCC4]">N/A (personal property)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Lenders */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Landmark className="w-5 h-5 text-[#D4A94E]" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                Lenders Who Offer Non-Recourse IRA Loans
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-[#D0CCC4] mb-6">
                            <p>
                                Not many banks offer non-recourse loans for IRAs because the lending risk is higher (they cannot pursue personal assets). Here are some of the most established lenders in this space:
                            </p>
                        </div>

                        <div className="space-y-4">
                            {lenders.map((lender) => (
                                <div key={lender.name} className="bg-[#161828] rounded-xl border border-[#2A2D42] p-5">
                                    <h3 className="font-bold text-[#F6F4EF] mb-2">{lender.name}</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                                        <div>
                                            <span className="text-[#A8A39A] block text-xs">LTV</span>
                                            <span className="text-[#F6F4EF] font-medium">{lender.ltv}</span>
                                        </div>
                                        <div>
                                            <span className="text-[#A8A39A] block text-xs">Term</span>
                                            <span className="text-[#F6F4EF] font-medium">{lender.term}</span>
                                        </div>
                                        <div>
                                            <span className="text-[#A8A39A] block text-xs">Min Loan</span>
                                            <span className="text-[#F6F4EF] font-medium">{lender.minLoan}</span>
                                        </div>
                                        <div>
                                            <span className="text-[#A8A39A] block text-xs">Notes</span>
                                            <span className="text-[#F6F4EF] font-medium">{lender.notes}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#161828] border border-[rgba(197,149,46,0.32)] rounded-xl p-5 mt-6">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-[#D4A94E] mt-0.5 flex-shrink-0" />
                                <p className="text-[#D0CCC4] text-sm">
                                    <strong>Disclaimer:</strong> Lender terms change frequently. Always verify current rates, terms, and availability directly with the lender. This list is informational and not an endorsement. Your IRA custodian may also have preferred lending partners.
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
                            headline="Skip the Mortgage Hassle. Try Gold Instead."
                            subheadline="Gold IRAs require no loans, no property management, and no UBIT. Augusta Precious Metals makes it simple to protect your retirement with physical gold."
                            trackSource="real-estate-ira-non-recourse-loans"
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
