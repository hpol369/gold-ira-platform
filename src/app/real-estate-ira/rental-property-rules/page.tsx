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
    Ban,
    Building2,
    DollarSign,
    Shield,
    FileText,
    ClipboardList,
    Users,
    Home,
} from "lucide-react";

export const metadata = createPageMetadata({
    title: "Buying Rental Property with a Self-Directed IRA: Complete Rules (2026)",
    description:
        "Complete rules for buying rental property with a self-directed IRA. Step-by-step process, prohibited transactions, non-recourse lending, and IRS compliance requirements.",
    url: "https://www.richdadretirement.com/real-estate-ira/rental-property-rules",
    type: "article",
});

const steps = [
    {
        number: "01",
        title: "Open a Self-Directed IRA",
        description: "Choose a custodian that allows real estate investments (Equity Trust, Entrust, IRA Financial Trust, etc.). Not all IRA custodians allow alternative assets.",
    },
    {
        number: "02",
        title: "Fund Your Account",
        description: "Transfer or roll over funds from an existing IRA or 401k. You can also make new contributions up to the annual limit ($7,000 or $8,000 if 50+ for 2026).",
    },
    {
        number: "03",
        title: "Find the Property",
        description: "You identify the property, but your IRA makes the purchase. The property title will be in the name of your IRA custodian for the benefit of your IRA.",
    },
    {
        number: "04",
        title: "Perform Due Diligence",
        description: "Hire independent inspectors, appraisers, and contractors. You can research and evaluate, but all expenses must be paid from IRA funds.",
    },
    {
        number: "05",
        title: "Direct Your Custodian to Purchase",
        description: "Tell your custodian to proceed. They handle all paperwork, wire funds, and sign documents on behalf of your IRA. You sign a direction of investment form.",
    },
    {
        number: "06",
        title: "Manage Through Your IRA",
        description: "Hire a property manager (not yourself or family). All rental income goes back to the IRA. All expenses (repairs, taxes, insurance) are paid from IRA funds.",
    },
];

const faqs = [
    {
        question: "Can I buy rental property with my IRA?",
        answer:
            "Yes. A self-directed IRA can purchase rental property including single-family homes, multi-family units, commercial property, and raw land. The IRA is the owner of the property, not you personally. All expenses must be paid from IRA funds and all income must return to the IRA. You need a custodian that allows real estate investments.",
    },
    {
        question: "Can I live in a property owned by my IRA?",
        answer:
            "Absolutely not. Living in, vacationing in, or personally using property owned by your IRA is a prohibited transaction under IRC Section 4975. This also applies to your spouse, children, grandchildren, parents, and their spouses. Violating this rule can result in the entire IRA being disqualified, with immediate tax on the full balance plus a 10% penalty if under 59 1/2.",
    },
    {
        question: "Can I do repairs myself on my IRA-owned rental property?",
        answer:
            "No. You cannot provide services (including maintenance, repairs, or improvements) to property owned by your IRA. This is considered a prohibited transaction because you are providing value to your IRA. You must hire independent third-party contractors for all work. The IRA pays the contractors directly.",
    },
    {
        question: "What happens if I accidentally make a prohibited transaction?",
        answer:
            "If the IRS determines a prohibited transaction occurred, the entire IRA is treated as distributed on the first day of the year in which the transaction happened. You would owe income tax on the full IRA balance plus a 10% early withdrawal penalty if under age 59 1/2. The consequences are severe, which is why working with an experienced custodian is critical.",
    },
    {
        question: "Can my IRA get a mortgage to buy rental property?",
        answer:
            "Yes, but it must be a non-recourse loan. This means the lender can only seize the property if you default—they cannot go after your other IRA assets or personal assets. Non-recourse loans for IRAs typically require 40-50% down payment, carry higher interest rates (1-2% above conventional), and have shorter terms (15-20 years). The mortgage income triggers UBIT (Unrelated Business Income Tax).",
    },
];

export default function RentalPropertyRulesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <SchemaScript
                schema={articleSchema({
                    title: "Buying Rental Property with a Self-Directed IRA: Complete Rules (2026)",
                    description:
                        "Step-by-step guide to buying rental property with a self-directed IRA including prohibited transactions, non-recourse lending, and IRS requirements.",
                    slug: "/real-estate-ira/rental-property-rules",
                    datePublished: "2025-02-10",
                    dateModified: "2026-03-01",
                })}
            />
            <SchemaScript
                schema={breadcrumbSchema([
                    { name: "Home", url: "/" },
                    { name: "Real Estate IRA", url: "/real-estate-ira" },
                    { name: "Rental Property Rules", url: "/real-estate-ira/rental-property-rules" },
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
                            <span className="text-[#F6F4EF]">Rental Property Rules</span>
                        </nav>

                        <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Building2 className="w-4 h-4" />
                            <span>Complete Guide</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#F6F4EF] mb-6 leading-tight">
                            Buying Rental Property with a Self-Directed IRA: Complete Rules
                        </h1>

                        <AnswerFirst
                            answer="You can buy rental property with a self-directed IRA, but the IRS has strict rules. You cannot live in the property, hire family members to manage it, or do repairs yourself. All expenses must be paid from IRA funds and all income must return to the IRA. If you need a mortgage, it must be a non-recourse loan, and the leveraged income will trigger UBIT. Violating prohibited transaction rules can disqualify your entire IRA."
                            keyFacts={[
                                "Your IRA owns the property, not you personally",
                                "Prohibited: living in it, hiring family, doing repairs yourself",
                                "All expenses from IRA, all income back to IRA",
                                "Mortgages must be non-recourse (40-50% down required)",
                                "Prohibited transaction = entire IRA disqualified + taxes + penalties",
                            ]}
                        />
                    </div>
                </Container>
            </header>

            {/* Step-by-Step Process */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                                <ClipboardList className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                Step-by-Step: How to Buy Rental Property with Your IRA
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {steps.map((step) => (
                                <div key={step.number} className="flex gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                                        <span className="text-teal-700 font-bold text-sm">{step.number}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#F6F4EF] mb-1">{step.title}</h3>
                                        <p className="text-[#D0CCC4] text-sm">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Prohibited Transactions */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                <Ban className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                Prohibited Transactions: What You Cannot Do
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-[#D0CCC4] mb-8">
                            <p>
                                IRC Section 4975 defines prohibited transactions for IRAs. These rules exist to prevent you from using your IRA for personal benefit before retirement. The consequences are severe: your <strong>entire IRA can be disqualified</strong>, meaning the full balance is treated as a taxable distribution.
                            </p>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                            <h3 className="font-bold text-red-800 mb-4">You CANNOT:</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-2">
                                    <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-[#D0CCC4] text-sm">Live in or vacation in the property</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-[#D0CCC4] text-sm">Let family members live in or use it</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-[#D0CCC4] text-sm">Do repairs or improvements yourself</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-[#D0CCC4] text-sm">Hire your spouse, children, or parents to manage it</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-[#D0CCC4] text-sm">Pay property expenses from personal funds</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-[#D0CCC4] text-sm">Receive rental income personally</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-[#D0CCC4] text-sm">Buy property from yourself or family</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-[#D0CCC4] text-sm">Sell IRA property to yourself or family</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-[#D0CCC4] text-sm font-bold mb-1">Disqualified Persons (IRC 4975)</p>
                                    <p className="text-[#D0CCC4] text-sm">
                                        These rules apply to &quot;disqualified persons&quot;: you, your spouse, your lineal ascendants (parents, grandparents), lineal descendants (children, grandchildren), their spouses, and any entity you control. Siblings are generally not disqualified persons, but transactions with them can still raise red flags.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Non-Recourse Lending */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                Non-Recourse Lending Requirements
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-[#D0CCC4] mb-6">
                            <p>
                                If your IRA does not have enough cash to buy property outright, you can use financing—but it must be a <strong>non-recourse loan</strong>. This means the lender can only seize the property itself if you default. They cannot go after your other IRA assets or your personal assets.
                            </p>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <h3 className="font-bold text-[#F6F4EF] mb-4">Typical Non-Recourse Loan Terms for IRAs</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex justify-between text-sm border-b border-blue-100 pb-2">
                                    <span className="text-[#D0CCC4]">Down Payment</span>
                                    <span className="font-semibold text-[#F6F4EF]">40-50%</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-blue-100 pb-2">
                                    <span className="text-[#D0CCC4]">Interest Rate</span>
                                    <span className="font-semibold text-[#F6F4EF]">1-2% above conventional</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-blue-100 pb-2">
                                    <span className="text-[#D0CCC4]">Loan Term</span>
                                    <span className="font-semibold text-[#F6F4EF]">15-20 years</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-blue-100 pb-2">
                                    <span className="text-[#D0CCC4]">Personal Guarantee</span>
                                    <span className="font-semibold text-green-600">Not allowed</span>
                                </div>
                            </div>
                            <p className="text-[#A8A39A] text-xs mt-4">
                                Note: Leveraged income triggers UBIT. See our <Link href="/real-estate-ira/ubit-rules" className="text-[#D4A94E] underline">UBIT rules guide</Link> for details.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Income/Expense Rules */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <Shield className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                The Golden Rule: All In, All Out Through the IRA
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-[#161828] rounded-xl border border-green-200 p-6">
                                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" /> All Income to IRA
                                </h3>
                                <ul className="space-y-2 text-sm text-[#D0CCC4]">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Rent checks deposited directly into IRA
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Security deposits held in IRA
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Sale proceeds go to IRA
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Insurance payouts go to IRA
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#161828] rounded-xl border border-blue-200 p-6">
                                <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                                    <DollarSign className="w-5 h-5" /> All Expenses from IRA
                                </h3>
                                <ul className="space-y-2 text-sm text-[#D0CCC4]">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                        Property taxes paid from IRA
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                        Insurance premiums paid from IRA
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                        Repairs and maintenance paid from IRA
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                        Property management fees paid from IRA
                                    </li>
                                </ul>
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
                            headline="Too Many Rules? Gold IRAs Are Simpler."
                            subheadline="No property management, no prohibited transactions, no UBIT worries. Augusta Precious Metals handles everything for you."
                            trackSource="real-estate-ira-rental-property-rules"
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
