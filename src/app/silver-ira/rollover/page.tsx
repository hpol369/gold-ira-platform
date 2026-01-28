import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    AlertTriangle,
    RefreshCw,
    Shield,
    Clock,
    FileText,
    Building2,
    Coins,
    Phone,
    DollarSign,
} from "lucide-react";

export const metadata = createPageMetadata({
    title: "Silver IRA Rollover: Step-by-Step Guide to Moving Your 401k (2026)",
    description:
        "Complete guide to Silver IRA rollovers. Learn how to roll over your 401k, IRA, or TSP into physical silver tax-free. Direct vs indirect rollover explained.",
    url: "https://www.richdadretirement.com/silver-ira/rollover",
    imageAlt: "Silver IRA Rollover Guide - Rich Dad Retirement",
});

const rolloverSteps = [
    {
        step: 1,
        title: "Choose a Silver IRA Company",
        description: "Select a reputable precious metals company that specializes in Silver IRAs. Look for transparent pricing, good silver selection, and strong customer reviews.",
        tips: ["Compare at least 3 companies", "Check BBB ratings", "Ask about silver premiums upfront"],
        icon: Building2,
    },
    {
        step: 2,
        title: "Open a Self-Directed IRA",
        description: "Your chosen company will help you establish a self-directed IRA with an approved custodian. This account can hold physical precious metals.",
        tips: ["Provide identification documents", "Complete IRA application", "Choose Traditional or Roth structure"],
        icon: FileText,
    },
    {
        step: 3,
        title: "Initiate the Rollover",
        description: "Request a direct rollover from your current 401(k), IRA, or other retirement account. Funds transfer directly to your new custodian.",
        tips: ["Use direct rollover (trustee-to-trustee)", "Avoid taking possession of funds", "Complete within 60 days if indirect"],
        icon: RefreshCw,
    },
    {
        step: 4,
        title: "Select Your Silver Products",
        description: "Work with your precious metals specialist to choose IRS-approved silver coins and bars based on your investment goals and budget.",
        tips: ["Consider mix of coins and bars", "Compare premiums on different products", "Think about liquidity needs"],
        icon: Coins,
    },
    {
        step: 5,
        title: "Secure Storage",
        description: "Your silver ships to an IRS-approved depository where it's stored, insured, and held in your name until you take a distribution.",
        tips: ["Choose segregated vs. non-segregated", "Consider depository location", "Verify insurance coverage"],
        icon: Shield,
    },
];

const rolloverTypes = [
    {
        type: "Direct Rollover",
        description: "Funds transfer directly from your old account to your new Silver IRA custodian. You never touch the money.",
        pros: ["No tax withholding", "No time limit concerns", "Simplest and safest method", "No limit on frequency"],
        cons: ["May take slightly longer", "Requires coordination between custodians"],
        recommended: true,
    },
    {
        type: "Indirect Rollover",
        description: "You receive a check from your old account and must deposit it into your new IRA within 60 days.",
        pros: ["Faster initial access to funds", "More control over timing"],
        cons: ["20% mandatory tax withholding on 401k", "Must complete within 60 days", "Only allowed once per 12 months", "Risk of penalties if deadline missed"],
        recommended: false,
    },
];

const eligibleAccounts = [
    { name: "401(k)", details: "From former employers or after age 59.5 with current employer" },
    { name: "Traditional IRA", details: "Full balance can be rolled over tax-free" },
    { name: "403(b)", details: "Common for teachers and non-profit employees" },
    { name: "TSP", details: "Thrift Savings Plan for federal employees and military" },
    { name: "457(b)", details: "Government and some non-profit deferred compensation" },
    { name: "SEP IRA", details: "Self-employed retirement accounts" },
    { name: "SIMPLE IRA", details: "After 2-year waiting period" },
    { name: "Pension Plans", details: "If lump-sum distribution is available" },
];

const faqs = [
    {
        question: "Is a Silver IRA rollover tax-free?",
        answer: "Yes, a properly executed direct rollover from a 401(k) or IRA to a Silver IRA is completely tax-free. The key is using a direct (trustee-to-trustee) transfer so you never take possession of the funds. With an indirect rollover, you must redeposit funds within 60 days to avoid taxes and penalties."
    },
    {
        question: "Can I rollover my current 401(k) into a Silver IRA?",
        answer: "It depends on your employment status. If you've left that employer, yes - you can roll over the full balance. If you're still employed, check if your plan allows 'in-service withdrawals' or 'in-service rollovers.' Many plans allow these after age 59.5."
    },
    {
        question: "How long does a Silver IRA rollover take?",
        answer: "The complete process typically takes 2-4 weeks. Opening the new IRA account takes a few days, the rollover transfer usually takes 1-2 weeks depending on your old custodian, and purchasing silver and shipping to storage adds another week."
    },
    {
        question: "What is the difference between a rollover and a transfer?",
        answer: "A 'rollover' typically refers to moving funds from a 401(k) to an IRA, or moving funds where you temporarily receive them. A 'transfer' is moving funds between IRAs directly (trustee-to-trustee). Both can be tax-free when done correctly. The terms are often used interchangeably."
    },
    {
        question: "Can I rollover only part of my 401(k) into silver?",
        answer: "Yes, you can do a partial rollover. Many investors roll over a portion of their retirement funds into silver (commonly 10-25%) while keeping the rest in traditional investments. This provides diversification without putting all eggs in one basket."
    },
    {
        question: "What happens if I miss the 60-day deadline for an indirect rollover?",
        answer: "If you miss the 60-day deadline, the distribution becomes taxable income. You'll owe income taxes plus a 10% early withdrawal penalty if you're under 59.5. This is why direct rollovers are strongly recommended - they eliminate this risk entirely."
    },
    {
        question: "Can I rollover my Roth 401(k) into a Silver IRA?",
        answer: "Yes, but it must go into a Roth IRA (not a Traditional IRA). A Roth Silver IRA offers tax-free growth and tax-free withdrawals in retirement, making it attractive for investors who believe silver prices will rise significantly."
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Roll Over Your 401k into a Silver IRA",
    "description": "Complete step-by-step guide to rolling over retirement funds into a Silver IRA tax-free",
    "step": rolloverSteps.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.title,
        "text": step.description
    }))
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

export default function SilverIraRolloverPage() {
    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Navbar />

            {/* Hero Section */}
            <header className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[150px]" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/10 border border-slate-300 rounded-full text-slate-600 font-semibold text-sm mb-6">
                            <RefreshCw className="h-4 w-4" />
                            ROLLOVER GUIDE
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Silver IRA Rollover: Move Your 401k Into Physical Silver
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Learn how to transfer your retirement funds into a Silver IRA tax-free. Our step-by-step guide covers direct vs. indirect rollovers, eligible accounts, and how to avoid costly mistakes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                                <Link href="/quiz">
                                    Start Your Rollover <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="border-slate-300 text-slate-600 hover:bg-slate-100" asChild>
                                <Link href="#rollover-steps">
                                    See the Process
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Key Benefits */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                            <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">100% Tax-Free</h3>
                            <p className="text-sm text-slate-600">Direct rollovers avoid all taxes and penalties</p>
                        </div>
                        <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                            <Clock className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">2-4 Weeks</h3>
                            <p className="text-sm text-slate-600">Typical completion time for the full process</p>
                        </div>
                        <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                            <Shield className="h-8 w-8 text-[#B22234] mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Full Protection</h3>
                            <p className="text-sm text-slate-600">Same IRA protections as your current account</p>
                        </div>
                        <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                            <Coins className="h-8 w-8 text-slate-600 mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Physical Silver</h3>
                            <p className="text-sm text-slate-600">Own real silver, not paper promises</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Rollover Steps */}
            <section id="rollover-steps" className="py-16 bg-white scroll-mt-20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">5 Steps to Complete Your Silver IRA Rollover</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            The rollover process is straightforward when you work with the right company. Here's exactly what to expect.
                        </p>

                        <div className="space-y-8">
                            {rolloverSteps.map((step) => {
                                const Icon = step.icon;
                                return (
                                    <div key={step.step} className="flex gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B22234] to-[#8b1c2a] flex items-center justify-center">
                                                <span className="text-2xl font-bold text-slate-900">{step.step}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <Icon className="h-6 w-6 text-slate-600" />
                                                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                                            </div>
                                            <p className="text-slate-600 mb-4">{step.description}</p>
                                            <div className="bg-slate-50 rounded-lg p-4">
                                                <h4 className="text-sm font-semibold text-[#B22234] mb-2">Pro Tips:</h4>
                                                <ul className="space-y-1">
                                                    {step.tips.map((tip, idx) => (
                                                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                                            <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                                                            {tip}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Direct vs Indirect Rollover */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Direct vs. Indirect Rollover</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Understanding the difference is crucial. The wrong choice can cost you thousands in taxes and penalties.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {rolloverTypes.map((type) => (
                                <div
                                    key={type.type}
                                    className={`rounded-xl p-6 border ${type.recommended ? 'bg-green-500/10 border-green-500/30' : 'bg-slate-50 border-slate-200'}`}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="text-xl font-bold text-slate-900">{type.type}</h3>
                                        {type.recommended && (
                                            <span className="px-2 py-1 bg-green-500 text-slate-900 text-xs font-bold rounded">
                                                RECOMMENDED
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-slate-600 mb-6">{type.description}</p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-green-400 mb-2">Advantages:</h4>
                                            <ul className="space-y-1">
                                                {type.pros.map((pro, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                                        <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                                                        {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#B22234] mb-2">Disadvantages:</h4>
                                            <ul className="space-y-1">
                                                {type.cons.map((con, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                                        <AlertTriangle className="h-4 w-4 text-[#B22234] flex-shrink-0" />
                                                        {con}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-red-400 mb-2">Critical Warning About Indirect Rollovers</h4>
                                    <p className="text-slate-600">
                                        With an indirect rollover from a 401(k), your employer is required to withhold 20% for taxes.
                                        To complete the rollover tax-free, you must deposit the full original amount (including the 20% from your own pocket)
                                        within 60 days. If you only deposit what you received, you'll owe taxes and possibly penalties on the difference.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Eligible Accounts */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Accounts Eligible for Silver IRA Rollover</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Most employer-sponsored retirement plans and IRAs can be rolled over into a Silver IRA.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {eligibleAccounts.map((account) => (
                                <div key={account.name} className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-bold text-slate-900">{account.name}</h3>
                                            <p className="text-sm text-slate-600">{account.details}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6">
                            <h4 className="font-bold text-[#B22234] mb-2">Note About Current Employer 401(k)s</h4>
                            <p className="text-slate-600">
                                Most 401(k) plans don't allow rollovers while you're still employed. However, many plans permit
                                "in-service distributions" after age 59.5. Contact your plan administrator to check your options.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Mid-page CTA */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-8 border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Start Your Silver IRA Rollover?</h2>
                        <p className="text-slate-600 mb-6">
                            Take our quick quiz to find the best Silver IRA company for your specific situation. We'll match you with a provider that fits your rollover amount and goals.
                        </p>
                        <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                            <Link href="/quiz">
                                Find My Perfect Match <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Silver IRA Rollover FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl"
                                >
                                    <summary className="cursor-pointer p-6 font-semibold text-slate-900 flex justify-between items-center list-none">
                                        {faq.question}
                                        <span className="text-[#B22234] group-open:rotate-180 transition-transform">&#9660;</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Pages */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Related Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/silver-ira/convert-401k-to-silver" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Convert 401k to Silver</h3>
                            <p className="text-sm text-slate-600">Step-by-step guide specifically for 401k to Silver IRA conversions.</p>
                        </Link>
                        <Link href="/silver-ira/companies" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Silver IRA Companies</h3>
                            <p className="text-sm text-slate-600">Compare top Silver IRA providers to find the right fit for your rollover.</p>
                        </Link>
                        <Link href="/silver-ira/rules" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Silver IRA Rules</h3>
                            <p className="text-sm text-slate-600">Understand IRS requirements for silver IRAs before you rollover.</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-white">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Get Expert Help With Your Silver IRA Rollover"
                        subheadline="Augusta Precious Metals handles the entire rollover process for you. Their specialists coordinate with your current custodian to ensure a smooth, tax-free transfer."
                        trackSource="silver-ira-rollover"
                        linkContext="silver"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
