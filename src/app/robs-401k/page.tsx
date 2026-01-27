import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
    Building2,
    ArrowRight,
    CheckCircle2,
    AlertTriangle,
    DollarSign,
    Shield,
    FileText,
    Users,
    TrendingUp,
    Clock,
    Scale,
    Landmark
} from "lucide-react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AugustaCTA } from "@/components/cta/AugustaCTA";

export const metadata: Metadata = {
    title: "ROBS 401k Guide 2026: Fund Your Business Tax-Free",
    description: "ROBS 401k guide: Use your retirement funds to start a business tax-free. Compare top providers, understand rules, and get costs.",
    keywords: "robs 401k, rollover for business startups, 401k business funding, use retirement to start business, robs financing, self-directed 401k business",
    openGraph: {
        title: "ROBS 401k Guide 2026: Use Your Retirement to Start a Business",
        description: "Learn how ROBS lets you use your 401k or IRA to fund a business tax-free. Compare top providers like Guidant Financial and Benetrends.",
        type: "article",
    },
};

const robsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ROBS 401k Guide 2026: Use Your Retirement to Start a Business",
    "description": "Complete guide to using ROBS (Rollover for Business Startups) to fund your business with retirement funds tax-free.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement",
        "logo": {
            "@type": "ImageObject",
            "url": "https://richdadretirement.com/logo.png"
        }
    },
    "datePublished": "2026-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is a ROBS 401k?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "ROBS (Rollover for Business Startups) is an IRS-approved strategy that allows you to use your retirement funds (401k, IRA, 403b) to start or buy a business without paying early withdrawal penalties or taxes."
            }
        },
        {
            "@type": "Question",
            "name": "Is ROBS legal?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, ROBS is 100% legal and IRS-approved. It's been used since the 1970s and was confirmed by the IRS in multiple rulings. However, it must be set up correctly to remain compliant."
            }
        },
        {
            "@type": "Question",
            "name": "How much money do I need for ROBS?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most ROBS providers require a minimum of $50,000 in retirement funds. The average ROBS transaction is around $150,000-$200,000."
            }
        },
        {
            "@type": "Question",
            "name": "What are the risks of ROBS?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The main risk is that if your business fails, you could lose your retirement savings. Additionally, improper setup can result in IRS penalties and disqualification."
            }
        }
    ]
};

export default function Robs401kPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(robsJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <Navbar />
            <main className="min-h-screen bg-slate-900">
                {/* Hero Section */}
                <section className="relative py-16 lg:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />

                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                                <Building2 className="w-4 h-4 text-orange-400" />
                                <span className="text-orange-400 text-sm font-medium">Business Funding Strategy</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                ROBS 401k Guide:{" "}
                                <span className="text-orange-400">Fund Your Business With Your Retirement</span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                                You&apos;ve spent 25 years building a retirement account. Now you want to start or buy a business. ROBS (Rollover for Business Startups) lets you use your 401k to fund it—<strong className="text-white">without paying the early withdrawal penalty or taxes</strong>. It&apos;s 100% legal, but it&apos;s not for everyone. Here&apos;s what you need to know.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button variant="gold" size="lg" asChild>
                                    <a
                                        href={getTrackedLink(AFFILIATE_LINKS.guidantFinancial, "robs-hero", "guidant")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Get Free ROBS Consultation
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="#how-robs-works">
                                        Learn How It Works
                                    </Link>
                                </Button>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { value: "Tax-Free", label: "Funding" },
                                    { value: "$50k+", label: "Minimum" },
                                    { value: "100%", label: "IRS Legal" },
                                    { value: "10,000+", label: "Businesses Funded" },
                                ].map((stat, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
                                        <div className="text-sm text-slate-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* What is ROBS Section */}
                <section id="how-robs-works" className="py-16 bg-slate-800/50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                What is ROBS?
                            </h2>

                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    ROBS stands for Rollover for Business Startups. In plain English: it&apos;s a legal way to use your 401k, IRA, or 403b to fund a business without paying the 10% early withdrawal penalty or immediate taxes. The IRS approved this strategy—it&apos;s been used since the 1970s.
                                </p>

                                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                    Instead of taking a loan (and paying interest to a bank), your retirement money gets invested directly in your own company. Think of it this way: your 401k used to own stocks. Now it owns stock in YOUR business. If the business succeeds, your retirement grows. If it fails... well, that&apos;s the risk.
                                </p>
                            </div>

                            {/* How ROBS Works Steps */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                                <h3 className="text-xl font-bold text-white mb-6">How ROBS Works (5 Steps)</h3>
                                <div className="space-y-6">
                                    {[
                                        {
                                            step: "1",
                                            title: "Form a C-Corporation",
                                            description: "Create a new C-Corp (required structure for ROBS). Your business must be a C-Corporation."
                                        },
                                        {
                                            step: "2",
                                            title: "Establish a 401(k) Plan",
                                            description: "The new C-Corp sponsors a 401(k) plan that allows investment in employer stock."
                                        },
                                        {
                                            step: "3",
                                            title: "Roll Over Retirement Funds",
                                            description: "Transfer your existing 401(k)/IRA funds into the new company's 401(k) plan tax-free."
                                        },
                                        {
                                            step: "4",
                                            title: "Purchase Company Stock",
                                            description: "The 401(k) plan uses the rolled-over funds to buy stock in your C-Corporation."
                                        },
                                        {
                                            step: "5",
                                            title: "Fund Your Business",
                                            description: "The C-Corp now has capital to use for business operations, equipment, inventory, etc."
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                                                {item.step}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                                <p className="text-slate-400 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Pros and Cons */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            ROBS 401k: Pros and Cons
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Pros */}
                            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6" />
                                    Advantages
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "No early withdrawal penalties (avoid 10% penalty)",
                                        "No income taxes on the rollover",
                                        "No debt or monthly loan payments",
                                        "Keep full ownership of your business",
                                        "Use funds for any legitimate business purpose",
                                        "Continue contributing to your 401(k) as an employee",
                                        "Potential for significant wealth building"
                                    ].map((pro, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-300">{pro}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cons */}
                            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6" />
                                    Risks & Considerations
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Risk of losing retirement savings if business fails",
                                        "Must form a C-Corporation (more complex structure)",
                                        "Setup costs ($3,000-$6,000 typically)",
                                        "Ongoing compliance and administration required",
                                        "IRS scrutiny if not set up properly",
                                        "Must work actively in the business",
                                        "Not suitable for all business types"
                                    ].map((con, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-300">{con}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Top ROBS Providers */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                            Best ROBS 401k Providers (2026)
                        </h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            Working with an experienced ROBS provider is essential for proper setup and ongoing compliance.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Guidant Financial */}
                            <div className="bg-white/5 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 relative">
                                <div className="absolute -top-3 left-6 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    RECOMMENDED
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Guidant Financial</h3>
                                <p className="text-slate-400 mb-6">Industry leader with 25+ years experience</p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Setup Fee:</span>
                                        <span className="text-white font-medium">~$5,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Monthly Admin:</span>
                                        <span className="text-white font-medium">$139/month</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Minimum:</span>
                                        <span className="text-white font-medium">$50,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Businesses Funded:</span>
                                        <span className="text-white font-medium">25,000+</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Button variant="gold" className="w-full" asChild>
                                        <a
                                            href={getTrackedLink(AFFILIATE_LINKS.guidantFinancial, "robs-providers", "guidant")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Get Free Consultation
                                        </a>
                                    </Button>
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href="/reviews/guidant-financial">
                                            Read Full Review
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Benetrends */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Benetrends</h3>
                                <p className="text-slate-400 mb-6">Pioneer of ROBS funding since 1983</p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Setup Fee:</span>
                                        <span className="text-white font-medium">~$4,995</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Monthly Admin:</span>
                                        <span className="text-white font-medium">$129/month</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Minimum:</span>
                                        <span className="text-white font-medium">$50,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Experience:</span>
                                        <span className="text-white font-medium">40+ years</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Button variant="outline" className="w-full" asChild>
                                        <a
                                            href={getTrackedLink(AFFILIATE_LINKS.benetrends, "robs-providers", "benetrends")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Learn More
                                        </a>
                                    </Button>
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href="/reviews/benetrends">
                                            Read Full Review
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Who Should Use ROBS */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                                Is ROBS Right for You?
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Good Fit */}
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <h3 className="text-xl font-bold text-green-400 mb-6">ROBS May Be Right If You:</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Have $50,000+ in retirement savings",
                                            "Want to start or buy a business",
                                            "Plan to work actively in the business",
                                            "Have strong business experience/skills",
                                            "Want to avoid debt financing",
                                            "Understand and accept the risks",
                                            "Are willing to operate as a C-Corp"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Not Good Fit */}
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <h3 className="text-xl font-bold text-red-400 mb-6">ROBS May NOT Be Right If You:</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Have less than $50,000 in retirement funds",
                                            "Plan to be a passive investor only",
                                            "Are risk-averse about retirement savings",
                                            "Want to run a sole proprietorship or LLC",
                                            "Don't want ongoing compliance responsibilities",
                                            "Are nearing retirement age",
                                            "Have limited business experience"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ROBS Rules Section */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                                ROBS 401k Rules & Requirements
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        icon: Building2,
                                        title: "C-Corporation Required",
                                        description: "Your business must be structured as a C-Corporation to use ROBS funding."
                                    },
                                    {
                                        icon: Users,
                                        title: "Active Employment",
                                        description: "You must be a bona fide employee of the company, not just a passive investor."
                                    },
                                    {
                                        icon: Scale,
                                        title: "Fair Market Value",
                                        description: "Stock must be purchased at fair market value as determined by an independent valuation."
                                    },
                                    {
                                        icon: FileText,
                                        title: "Annual Compliance",
                                        description: "Required annual filings include Form 5500 and corporate tax returns."
                                    },
                                    {
                                        icon: Shield,
                                        title: "Non-Discrimination",
                                        description: "The 401(k) plan must be available to all eligible employees, not just owners."
                                    },
                                    {
                                        icon: Landmark,
                                        title: "Prohibited Transactions",
                                        description: "Certain transactions between you and the plan are prohibited by ERISA."
                                    }
                                ].map((rule, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                        <rule.icon className="w-8 h-8 text-orange-400 mb-4" />
                                        <h3 className="text-lg font-bold text-white mb-2">{rule.title}</h3>
                                        <p className="text-slate-400 text-sm">{rule.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 text-center">
                                <Button variant="outline" asChild>
                                    <Link href="/learn/robs-401k-rules">
                                        Read Complete ROBS Rules Guide
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            ROBS 401k: Frequently Asked Questions
                        </h2>

                        <div className="max-w-3xl mx-auto space-y-6">
                            {[
                                {
                                    question: "What is a ROBS 401k?",
                                    answer: "ROBS (Rollover for Business Startups) is an IRS-approved strategy that allows you to use your retirement funds (401k, IRA, 403b) to start or buy a business without paying early withdrawal penalties or taxes. Your retirement plan invests in your own company's stock."
                                },
                                {
                                    question: "Is ROBS legal?",
                                    answer: "Yes, ROBS is 100% legal and IRS-approved. It's been used since the Employee Retirement Income Security Act (ERISA) was passed in 1974. The IRS has issued guidance confirming its legitimacy when properly structured."
                                },
                                {
                                    question: "How much money do I need for ROBS?",
                                    answer: "Most ROBS providers require a minimum of $50,000 in eligible retirement funds. The average ROBS transaction is around $150,000-$200,000. There's no maximum limit—some entrepreneurs have used $500,000+ in retirement funds."
                                },
                                {
                                    question: "What types of retirement accounts can I use?",
                                    answer: "You can use most tax-deferred retirement accounts including 401(k), 403(b), 457, Traditional IRA, SEP IRA, and profit-sharing plans. Roth IRAs typically cannot be used for ROBS."
                                },
                                {
                                    question: "What are the costs of setting up ROBS?",
                                    answer: "Typical setup costs range from $3,000 to $6,000, which includes C-Corp formation, 401(k) plan setup, and legal documentation. Ongoing administration fees are typically $100-$150 per month."
                                },
                                {
                                    question: "Can I use ROBS to buy a franchise?",
                                    answer: "Yes, ROBS is very commonly used for franchise purchases. Many franchisees use ROBS combined with SBA loans to fund their franchise investment."
                                },
                                {
                                    question: "What happens if my business fails?",
                                    answer: "If your business fails, you could lose the retirement funds you invested. Unlike a traditional 401(k) invested in stocks, your retirement is now tied to your business's success. This is the primary risk of ROBS."
                                },
                                {
                                    question: "Do I need to pay myself a salary?",
                                    answer: "Yes, if you work in the business, you must receive reasonable compensation. This also makes you eligible to continue contributing to the company's 401(k) plan as an employee."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                                    <p className="text-slate-400">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-br from-orange-500/10 via-slate-800 to-slate-900">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ready to Be Your Own Boss?
                            </h2>
                            <p className="text-xl text-slate-300 mb-8">
                                You&apos;ve worked for someone else long enough. If you&apos;ve got a solid business plan and understand the risks, ROBS can help you fund your dream without bank loans or credit card debt. Talk to a specialist—it&apos;s free.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="gold" size="lg" asChild>
                                    <a
                                        href={getTrackedLink(AFFILIATE_LINKS.guidantFinancial, "robs-bottom-cta", "guidant")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Free ROBS Consultation
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="/reviews/guidant-financial">
                                        Read Guidant Review
                                    </Link>
                                </Button>
                            </div>

                            <p className="text-sm text-slate-500 mt-6">
                                No obligation. Learn if ROBS is right for your situation.
                            </p>
                        </div>
                    </Container>
                </section>

                {/* Related Content */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">
                            Related Resources
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {[
                                { href: "/reviews/guidant-financial", title: "Guidant Financial Review", desc: "Top ROBS provider" },
                                { href: "/reviews/benetrends", title: "Benetrends Review", desc: "ROBS pioneer since 1983" },
                                { href: "/learn/robs-401k-rules", title: "ROBS Rules Guide", desc: "IRS requirements explained" },
                                { href: "/self-directed-ira", title: "Self-Directed IRA", desc: "Alternative investment strategies" },
                            ].map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group"
                                >
                                    <h3 className="text-white font-semibold mb-1 group-hover:text-orange-400 transition-colors">
                                        {link.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm">{link.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Augusta CTA */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <AugustaCTA
                            variant="footer"
                            headline="Protect Remaining Retirement Funds with Gold"
                            subheadline="After using ROBS for your business, consider diversifying any remaining retirement savings with precious metals for protection."
                            trackSource="robs-401k"
                        />
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
