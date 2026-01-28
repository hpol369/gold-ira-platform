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
    DollarSign,
    Coins,
    Building2,
    FileText,
    Phone,
    TrendingUp,
} from "lucide-react";

export const metadata = createPageMetadata({
    title: "Convert 401k to Silver: Step-by-Step Guide (2026)",
    description:
        "Complete guide to converting your 401k to silver. Learn the tax-free process, eligibility requirements, and how to transfer your retirement into physical silver.",
    url: "https://www.richdadretirement.com/silver-ira/convert-401k-to-silver",
    imageAlt: "Convert 401k to Silver Guide - Rich Dad Retirement",
});

const conversionSteps = [
    {
        step: 1,
        title: "Verify Your 401k Eligibility",
        description: "Determine if you can roll over your 401k funds. Former employer 401ks are always eligible. Current employer 401ks may allow 'in-service withdrawals' after age 59.5.",
        action: "Contact your HR department or plan administrator to confirm your options.",
        icon: FileText,
    },
    {
        step: 2,
        title: "Choose a Silver IRA Company",
        description: "Select a reputable precious metals company that specializes in 401k to Silver IRA conversions. Look for transparent pricing, good reviews, and experience with silver IRAs.",
        action: "Compare Augusta, Goldco, Noble Gold and others. Take our quiz for a personalized match.",
        icon: Building2,
    },
    {
        step: 3,
        title: "Open a Self-Directed IRA",
        description: "Your chosen company helps you establish a self-directed IRA with an approved custodian. This new account will hold your physical silver.",
        action: "Complete the IRA application and provide required identification documents.",
        icon: Shield,
    },
    {
        step: 4,
        title: "Initiate the 401k Rollover",
        description: "Request a direct rollover from your 401k to your new Silver IRA. Funds transfer directly between custodians - you never touch the money.",
        action: "Use direct (trustee-to-trustee) rollover to avoid taxes and penalties.",
        icon: RefreshCw,
    },
    {
        step: 5,
        title: "Select Your Silver Products",
        description: "Work with your precious metals advisor to choose IRS-approved silver coins and bars that fit your investment strategy and budget.",
        action: "Consider a mix of sovereign coins and bars for optimal value and liquidity.",
        icon: Coins,
    },
    {
        step: 6,
        title: "Complete the Conversion",
        description: "Your silver is purchased and shipped to an IRS-approved depository. The entire process typically takes 2-4 weeks from start to finish.",
        action: "Verify your silver is properly insured and stored in your name.",
        icon: CheckCircle2,
    },
];

const eligibilityScenarios = [
    {
        scenario: "Left Your Employer",
        eligible: true,
        explanation: "Your 401k from a former employer is always eligible for rollover into a Silver IRA. You have full control over these funds.",
    },
    {
        scenario: "Still Employed, Age 59.5+",
        eligible: true,
        explanation: "Many 401k plans allow 'in-service distributions' after age 59.5. Check with your plan administrator to confirm.",
    },
    {
        scenario: "Still Employed, Under 59.5",
        eligible: false,
        explanation: "Most plans don't allow withdrawals while employed if you're under 59.5. You may need to wait or explore other options.",
    },
    {
        scenario: "Hardship Withdrawal",
        eligible: false,
        explanation: "Hardship withdrawals cannot be rolled over into an IRA. These are taxable distributions.",
    },
];

const taxBenefits = [
    {
        benefit: "Tax-Free Transfer",
        description: "A direct rollover from 401k to Silver IRA is completely tax-free. No taxes are due at the time of conversion.",
        icon: DollarSign,
    },
    {
        benefit: "No Early Withdrawal Penalty",
        description: "With a proper rollover, there's no 10% early withdrawal penalty, regardless of your age.",
        icon: Shield,
    },
    {
        benefit: "Continued Tax-Deferred Growth",
        description: "Your silver investments continue to grow tax-deferred, just like your 401k did.",
        icon: TrendingUp,
    },
    {
        benefit: "Same Distribution Rules",
        description: "The Silver IRA follows the same distribution rules as traditional IRAs, with RMDs starting at 73.",
        icon: Clock,
    },
];

const commonMistakes = [
    {
        mistake: "Taking a Check Distribution",
        consequence: "20% mandatory tax withholding plus potential 10% penalty if under 59.5",
        solution: "Always use a direct (trustee-to-trustee) rollover",
    },
    {
        mistake: "Missing the 60-Day Deadline",
        consequence: "If you receive funds directly, you have 60 days to deposit into IRA or it becomes taxable",
        solution: "Avoid indirect rollovers entirely - use direct transfer",
    },
    {
        mistake: "Buying Non-Approved Silver",
        consequence: "Disqualified investment, treated as distribution with taxes and penalties",
        solution: "Only purchase IRS-approved silver (.999+ purity)",
    },
    {
        mistake: "Home Storage",
        consequence: "IRS treats this as a distribution - full taxes plus 10% penalty if under 59.5",
        solution: "Use only IRS-approved depositories",
    },
];

const faqs = [
    {
        question: "Can I convert my 401k to silver tax-free?",
        answer: "Yes, a properly executed direct rollover from your 401k to a Silver IRA is completely tax-free. The key is using a direct transfer where funds move from your 401k custodian to your new IRA custodian without you taking possession of the money."
    },
    {
        question: "How long does it take to convert a 401k to silver?",
        answer: "The complete process typically takes 2-4 weeks. Opening the IRA account takes a few days, the 401k rollover usually takes 1-2 weeks depending on your plan administrator, and purchasing silver and shipping to storage adds another week."
    },
    {
        question: "Can I convert only part of my 401k to silver?",
        answer: "Yes, partial rollovers are allowed. Many investors convert 10-25% of their 401k to silver for diversification while keeping the rest in traditional investments. Your financial situation and risk tolerance should guide this decision."
    },
    {
        question: "What if I'm still working at the company with my 401k?",
        answer: "It depends on your plan and age. Many 401k plans allow 'in-service rollovers' after age 59.5. Contact your HR department or plan administrator to check if your plan permits this. If not, you'll need to wait until you leave the company."
    },
    {
        question: "Is there a maximum amount I can convert from 401k to silver?",
        answer: "No, there's no maximum. You can roll over your entire 401k balance or any portion you choose. However, consider your overall investment strategy and diversification goals before converting large amounts."
    },
    {
        question: "What happens to my employer match when I rollover?",
        answer: "Any vested employer match in your 401k can be rolled over along with your contributions. Unvested amounts typically stay with the employer. Check your vesting schedule before initiating a rollover."
    },
    {
        question: "Can I convert a Roth 401k to silver?",
        answer: "Yes, but a Roth 401k must roll into a Roth IRA (not a traditional IRA). Your Roth Silver IRA will maintain its tax-free growth and withdrawal benefits."
    },
    {
        question: "What silver products can I buy with my converted 401k funds?",
        answer: "You can purchase any IRS-approved silver products with .999 or higher purity. Popular choices include American Silver Eagles, Canadian Silver Maple Leafs, Austrian Philharmonics, and silver bars from approved refiners."
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Convert Your 401k to Silver",
    "description": "Complete step-by-step guide to converting 401k retirement funds into physical silver tax-free",
    "step": conversionSteps.map((step, index) => ({
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

export default function Convert401kToSilverPage() {
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 font-semibold text-sm mb-6">
                            <TrendingUp className="h-4 w-4" />
                            LOW COMPETITION KEYWORD
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Convert 401k to Silver: The Complete Guide
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Learn exactly how to convert your 401k into physical silver tax-free. This step-by-step guide covers eligibility, the conversion process, and how to avoid costly mistakes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                                <Link href="/quiz">
                                    Start My Conversion <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="border-slate-300 text-slate-600 hover:bg-slate-100" asChild>
                                <Link href="#conversion-steps">
                                    See the Steps
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Key Benefits */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Why Convert Your 401k to Silver?</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Converting your 401k to a Silver IRA lets you diversify into physical precious metals while maintaining tax advantages.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {taxBenefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div key={index} className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Icon className="h-6 w-6 text-green-400" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">{benefit.benefit}</h3>
                                        <p className="text-sm text-slate-600">{benefit.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Eligibility Section */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Are You Eligible to Convert?</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Your ability to convert depends on your employment status and 401k plan rules.
                        </p>

                        <div className="space-y-4">
                            {eligibilityScenarios.map((item, index) => (
                                <div
                                    key={index}
                                    className={`rounded-xl p-6 border ${item.eligible ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`}
                                >
                                    <div className="flex items-start gap-4">
                                        {item.eligible ? (
                                            <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                                        ) : (
                                            <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                                        )}
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-bold text-slate-900">{item.scenario}</h3>
                                                <span className={`px-2 py-0.5 rounded text-xs font-bold ${item.eligible ? 'bg-green-500 text-slate-900' : 'bg-red-500 text-slate-900'}`}>
                                                    {item.eligible ? 'ELIGIBLE' : 'NOT ELIGIBLE'}
                                                </span>
                                            </div>
                                            <p className="text-slate-600">{item.explanation}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Conversion Steps */}
            <section id="conversion-steps" className="py-16 bg-slate-50 scroll-mt-20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">6 Steps to Convert Your 401k to Silver</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Follow this proven process for a smooth, tax-free conversion.
                        </p>

                        <div className="space-y-6">
                            {conversionSteps.map((step) => {
                                const Icon = step.icon;
                                return (
                                    <div key={step.step} className="flex gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#B22234] to-[#8b1c2a] flex items-center justify-center">
                                                <span className="text-xl font-bold text-slate-900">{step.step}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <Icon className="h-5 w-5 text-slate-600" />
                                                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                                            </div>
                                            <p className="text-slate-600 mb-4">{step.description}</p>
                                            <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-lg px-4 py-3">
                                                <p className="text-sm text-[#B22234]">
                                                    <strong>Action:</strong> {step.action}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Common Mistakes */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Common Mistakes to Avoid</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            These errors can cost you thousands in taxes and penalties. Here's how to avoid them.
                        </p>

                        <div className="space-y-4">
                            {commonMistakes.map((item, index) => (
                                <div key={index} className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-slate-900 mb-2">{item.mistake}</h3>
                                            <p className="text-red-300 text-sm mb-3">
                                                <strong>Consequence:</strong> {item.consequence}
                                            </p>
                                            <p className="text-green-400 text-sm">
                                                <strong>Solution:</strong> {item.solution}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Mid-page CTA */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-8 border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Convert Your 401k to Silver?</h2>
                        <p className="text-slate-600 mb-6">
                            The right Silver IRA company will guide you through every step. Take our quiz to find a provider that handles 401k conversions smoothly.
                        </p>
                        <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                            <Link href="/quiz">
                                Find My 401k Conversion Expert <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Timeline */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Expected Timeline</h2>
                        <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
                            <div className="grid md:grid-cols-4 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-[#B22234] mb-2">1-3 Days</div>
                                    <p className="text-sm text-slate-600">Open your new Silver IRA account</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#B22234] mb-2">5-10 Days</div>
                                    <p className="text-sm text-slate-600">401k funds transfer to IRA</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#B22234] mb-2">1-2 Days</div>
                                    <p className="text-sm text-slate-600">Select and purchase silver</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#B22234] mb-2">3-5 Days</div>
                                    <p className="text-sm text-slate-600">Silver shipped to depository</p>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                                <p className="text-slate-600">
                                    <strong className="text-slate-900">Total Time:</strong> Approximately 2-4 weeks from start to finish
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">401k to Silver Conversion FAQs</h2>
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
            <section className="py-16 bg-white">
                <Container>
                    <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Related Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/silver-ira/rollover" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Silver IRA Rollover Guide</h3>
                            <p className="text-sm text-slate-600">More details on the rollover process.</p>
                        </Link>
                        <Link href="/silver-ira/approved-coins" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">IRA Approved Silver Coins</h3>
                            <p className="text-sm text-slate-600">What silver you can buy with your funds.</p>
                        </Link>
                        <Link href="/silver-ira/companies" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Silver IRA Companies</h3>
                            <p className="text-sm text-slate-600">Compare top 401k conversion specialists.</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Let Experts Handle Your 401k Conversion"
                        subheadline="Augusta Precious Metals coordinates the entire 401k to Silver IRA conversion process. They handle the paperwork, coordinate with your plan administrator, and guide you through selecting the right silver products."
                        trackSource="convert-401k-to-silver"
                        linkContext="silver"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
