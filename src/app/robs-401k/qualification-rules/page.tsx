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
    Building2,
    Shield,
    FileText,
    Users,
    ClipboardList,
    Scale,
    DollarSign,
    Ban,
} from "lucide-react";

export const metadata = createPageMetadata({
    title: "ROBS 401k Qualification Rules: Who Can Use Rollover for Business Startups (2026)",
    description:
        "ROBS 401k qualification rules explained. Learn who qualifies, C-corporation requirements, 401k plan rules, IRS compliance, and prohibited transactions to avoid.",
    url: "https://www.richdadretirement.com/robs-401k/qualification-rules",
    type: "article",
});

const qualificationSteps = [
    {
        number: "01",
        title: "Form a C-Corporation",
        description: "ROBS only works with a C-corporation. LLCs, S-corps, sole proprietorships, and partnerships do not qualify. The C-corp structure is required because 401k plans can invest in employer stock of C-corps.",
    },
    {
        number: "02",
        title: "Establish a 401k Plan for the Corporation",
        description: "The C-corporation must create a 401k retirement plan that specifically allows investment in employer stock. The plan document must comply with ERISA and IRS rules.",
    },
    {
        number: "03",
        title: "Roll Over Existing Retirement Funds",
        description: "Transfer funds from your existing IRA, 401k, 403b, or TSP into the new C-corporation 401k plan. This rollover is tax-free and penalty-free when done correctly.",
    },
    {
        number: "04",
        title: "Purchase Employer Stock",
        description: "The 401k plan uses the rolled-over funds to buy stock in the C-corporation at fair market value. This provides the business with operating capital.",
    },
    {
        number: "05",
        title: "Use Funds to Operate the Business",
        description: "The C-corporation now has capital from selling stock. Use it for equipment, inventory, leases, hiring, marketing, or any legitimate business expense.",
    },
    {
        number: "06",
        title: "Maintain Ongoing Compliance",
        description: "File annual Form 5500, pass nondiscrimination testing, offer the 401k to all eligible employees, and avoid prohibited transactions. This is where most ROBS arrangements fail.",
    },
];

const faqs = [
    {
        question: "Who qualifies for a ROBS 401k?",
        answer:
            "Anyone with at least $50,000 in rollable retirement funds (IRA, 401k, 403b, TSP, etc.) who is starting or buying a business can potentially use ROBS. There are no income requirements, credit checks, or age restrictions from the IRS. However, you must form a C-corporation, establish a 401k plan, and maintain ongoing compliance with ERISA and IRS rules.",
    },
    {
        question: "Why does ROBS require a C-corporation?",
        answer:
            "ROBS requires a C-corporation because 401k plans can only invest in employer stock of the sponsoring company under ERISA rules. Under IRC Section 4975(e)(8), an ESOP or 401k can invest in qualifying employer securities, but only if the employer is a C-corporation. S-corps, LLCs, and other entity types do not have qualifying employer securities under this definition.",
    },
    {
        question: "Is ROBS legal?",
        answer:
            "Yes. ROBS is legal and has been upheld by the IRS. The IRS does not consider a properly structured ROBS arrangement to be a prohibited transaction or an abusive tax avoidance scheme. However, the IRS has flagged ROBS as a compliance concern and conducts audits. Proper structure, ongoing plan testing, and compliance are essential.",
    },
    {
        question: "What is the minimum amount needed for ROBS?",
        answer:
            "While there is no IRS-imposed minimum, most ROBS providers recommend at least $50,000 in rollable retirement funds. The setup costs alone (C-corp formation, 401k plan documents, stock valuation, legal fees) typically run $5,000-$7,000. After setup costs, you need enough capital remaining to actually fund and operate the business.",
    },
    {
        question: "What happens if my ROBS business fails?",
        answer:
            "If the business fails, you lose the retirement funds you invested. Unlike a loan, there is no debt to repay—but you also have no retirement savings to show for it. The 401k plan still exists and must be properly terminated. Any remaining assets in the plan are distributed according to plan rules. This is the primary risk of ROBS: business failure means losing your retirement savings.",
    },
];

export default function ROBSQualificationRulesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <SchemaScript
                schema={articleSchema({
                    title: "ROBS 401k Qualification Rules: Who Can Use Rollover for Business Startups (2026)",
                    description:
                        "Complete guide to ROBS 401k qualification rules including C-corporation requirements, 401k plan compliance, IRS rules, and prohibited transactions.",
                    slug: "/robs-401k/qualification-rules",
                    datePublished: "2025-01-25",
                    dateModified: "2026-03-01",
                })}
            />
            <SchemaScript
                schema={breadcrumbSchema([
                    { name: "Home", url: "/" },
                    { name: "ROBS 401k", url: "/robs-401k" },
                    { name: "Qualification Rules", url: "/robs-401k/qualification-rules" },
                ])}
            />

            {/* Hero */}
            <header className="relative py-16 md:py-20 bg-[#0C0D18]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_50%)]" />
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <nav className="flex items-center gap-2 text-sm text-[#A8A39A] mb-6">
                            <Link href="/" className="hover:text-[#D4A94E]">Home</Link>
                            <span>/</span>
                            <Link href="/robs-401k" className="hover:text-[#D4A94E]">ROBS 401k</Link>
                            <span>/</span>
                            <span className="text-[#F6F4EF]">Qualification Rules</span>
                        </nav>

                        <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Building2 className="w-4 h-4" />
                            <span>IRS Compliance</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#F6F4EF] mb-6 leading-tight">
                            ROBS 401k Qualification Rules: Who Can Use Rollover for Business Startups
                        </h1>

                        <AnswerFirst
                            answer="To use ROBS (Rollover for Business Startups), you must form a C-corporation, establish a 401k plan that allows investment in employer stock, and roll over funds from an existing retirement account. The C-corporation sells stock to the 401k plan, giving the business capital to operate. There are no income or credit requirements, but you need at least $50,000 in rollable funds. Ongoing compliance includes annual Form 5500 filing, nondiscrimination testing, and offering the 401k to all eligible employees."
                            keyFacts={[
                                "Must form a C-corporation (LLCs and S-corps do not qualify)",
                                "Must establish a 401k plan that allows employer stock investment",
                                "Minimum ~$50,000 in rollable retirement funds recommended",
                                "No income, credit, or age requirements from the IRS",
                                "Ongoing compliance: Form 5500, plan testing, employee participation",
                            ]}
                        />
                    </div>
                </Container>
            </header>

            {/* How ROBS Works */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                <ClipboardList className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                How ROBS Works: Step-by-Step
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {qualificationSteps.map((step) => (
                                <div key={step.number} className="flex gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                        <span className="text-orange-700 font-bold text-sm">{step.number}</span>
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

            {/* C-Corp Requirement */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                Why a C-Corporation Is Required
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-[#D0CCC4] mb-8">
                            <p>
                                This is the part that trips up most people. ROBS does not work with an LLC, S-corp, or sole proprietorship. The reason is technical but important: under ERISA and IRC Section 4975(e)(8), a 401k plan can only invest in &quot;qualifying employer securities&quot; of the sponsoring company. Only C-corporation stock meets this definition.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" /> C-Corporation Advantages for ROBS
                                </h3>
                                <ul className="space-y-2 text-sm text-[#D0CCC4]">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Issues qualifying employer securities (stock)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Can sponsor a 401k plan
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Unlimited shareholders allowed
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        21% flat corporate tax rate
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                                <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                                    <Ban className="w-5 h-5" /> C-Corporation Challenges
                                </h3>
                                <ul className="space-y-2 text-sm text-[#D0CCC4]">
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        Double taxation (corporate + personal on dividends)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        More complex tax filing requirements
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        Corporate formalities (board minutes, annual reports)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        Cannot convert to S-corp while 401k holds stock
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* IRS Compliance */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Shield className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                IRS Compliance: The Ongoing Requirements
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-[#D0CCC4] mb-6">
                            <p>
                                Setting up ROBS is only the beginning. The IRS has flagged ROBS as a compliance concern and actively audits these arrangements. Here is what you must do every year to stay compliant:
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-[#161828] rounded-xl border border-[#2A2D42] p-6">
                                <h3 className="font-bold text-[#F6F4EF] mb-2 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-blue-500" />
                                    Annual Form 5500 Filing
                                </h3>
                                <p className="text-[#D0CCC4] text-sm">
                                    Every 401k plan must file Form 5500 with the DOL annually. This reports plan assets, participants, and financial information. Missing this filing can result in penalties of $250 per day, up to $150,000.
                                </p>
                            </div>

                            <div className="bg-[#161828] rounded-xl border border-[#2A2D42] p-6">
                                <h3 className="font-bold text-[#F6F4EF] mb-2 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-green-500" />
                                    Nondiscrimination Testing
                                </h3>
                                <p className="text-[#D0CCC4] text-sm">
                                    The 401k plan must pass ADP/ACP nondiscrimination tests proving it does not disproportionately benefit highly compensated employees. As the business owner, you are a highly compensated employee. If you hire staff, they must be offered the same 401k benefits.
                                </p>
                            </div>

                            <div className="bg-[#161828] rounded-xl border border-[#2A2D42] p-6">
                                <h3 className="font-bold text-[#F6F4EF] mb-2 flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-amber-500" />
                                    Annual Stock Valuation
                                </h3>
                                <p className="text-[#D0CCC4] text-sm">
                                    The C-corporation stock held by the 401k must be valued annually by an independent appraiser. This ensures the 401k&apos;s investment is accurately reported and prevents self-dealing at inflated or deflated prices.
                                </p>
                            </div>

                            <div className="bg-[#161828] rounded-xl border border-[#2A2D42] p-6">
                                <h3 className="font-bold text-[#F6F4EF] mb-2 flex items-center gap-2">
                                    <Scale className="w-5 h-5 text-red-500" />
                                    Prohibited Transaction Avoidance
                                </h3>
                                <p className="text-[#D0CCC4] text-sm">
                                    You cannot use ROBS funds for personal expenses, pay yourself an unreasonable salary to drain the business, or engage in transactions between yourself and the 401k plan. The IRS specifically looks for these red flags during audits.
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
                            headline="Not Ready for Business Ownership? Protect Your 401k with Gold."
                            subheadline="If ROBS feels too risky, a Gold IRA rollover lets you diversify your retirement without starting a business. Augusta Precious Metals can walk you through it."
                            trackSource="robs-401k-qualification-rules"
                        />
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-white">
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
