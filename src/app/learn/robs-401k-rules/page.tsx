import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
    Scale,
    ArrowRight,
    CheckCircle2,
    AlertTriangle,
    Building2,
    Users,
    FileText,
    Shield,
    DollarSign,
    Clock,
    XCircle,
    Landmark
} from "lucide-react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "ROBS 401k Rules 2026: IRS Compliance Guide",
    description: "Complete guide to ROBS 401k rules, IRS requirements, prohibited transactions, and compliance. Learn what you can and can't do with ROBS funding.",
    keywords: "robs 401k rules, robs requirements, robs compliance, robs prohibited transactions, robs irs rules, rollover business startups rules",
    openGraph: {
        title: "ROBS 401k Rules 2026: IRS Requirements & Compliance Guide",
        description: "Everything you need to know about ROBS 401k rules, IRS requirements, and staying compliant.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ROBS 401k Rules 2026: Complete IRS Requirements & Compliance Guide",
    "description": "Complete guide to ROBS 401k rules including IRS requirements, prohibited transactions, and compliance requirements.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "datePublished": "2026-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
};

export default function Robs401kRulesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />

            <main className="min-h-screen bg-slate-900">
                {/* Hero Section */}
                <section className="relative py-12 lg:py-16 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />

                    <Container className="relative z-10">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/robs-401k" className="hover:text-white transition-colors">ROBS 401k</Link>
                            <span>/</span>
                            <span className="text-white">Rules & Compliance</span>
                        </nav>

                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                                <Scale className="w-4 h-4 text-orange-400" />
                                <span className="text-orange-400 text-sm font-medium">IRS Compliance Guide</span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                ROBS 401k Rules:{" "}
                                <span className="text-orange-400">What You Need to Know</span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                                You've spent 30 years building your 401k. Now you're thinking about using it to start a business—maybe a franchise, maybe something you've always dreamed of doing. ROBS makes that possible without paying early withdrawal penalties. But the IRS has strict rules. Here's the straight talk on what you can and can't do.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="gold" size="lg" asChild>
                                    <a
                                        href={getTrackedLink(AFFILIATE_LINKS.guidantFinancial, "robs-rules-hero", "guidant")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Get Expert ROBS Help
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="/robs-401k">
                                        ROBS 401k Overview
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Key Requirements */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <h2 className="text-3xl font-bold text-white mb-4 text-center">
                            The Non-Negotiable Requirements
                        </h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            These aren't suggestions—they're requirements. Miss any of these, and you could owe taxes and penalties on your entire 401k. The IRS doesn't care that you didn't know.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: Building2,
                                    title: "C-Corporation Structure",
                                    description: "Your business MUST be structured as a C-Corporation. LLCs, S-Corps, sole proprietorships, and partnerships cannot use ROBS.",
                                    important: true
                                },
                                {
                                    icon: Users,
                                    title: "Active Employment",
                                    description: "You must be a bona fide employee of the company, providing legitimate services. Passive ownership alone is not sufficient.",
                                    important: true
                                },
                                {
                                    icon: Scale,
                                    title: "Fair Market Value",
                                    description: "Company stock must be purchased at fair market value, determined by an independent valuation at the time of purchase.",
                                    important: true
                                },
                                {
                                    icon: FileText,
                                    title: "Qualified 401(k) Plan",
                                    description: "The company must sponsor a 401(k) plan that specifically allows investment in employer securities (company stock).",
                                    important: false
                                },
                                {
                                    icon: Shield,
                                    title: "Non-Discrimination Rules",
                                    description: "The 401(k) plan must be available to all eligible employees, not just the owner. Cannot discriminate in favor of highly compensated employees.",
                                    important: false
                                },
                                {
                                    icon: Clock,
                                    title: "Timely Compliance",
                                    description: "Annual Form 5500 filing required. Quarterly contributions if you have employees. Regular valuations of company stock.",
                                    important: false
                                }
                            ].map((rule, index) => (
                                <div
                                    key={index}
                                    className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 ${rule.important ? 'border-orange-500/30' : 'border-white/10'
                                        }`}
                                >
                                    {rule.important && (
                                        <div className="text-xs font-bold text-orange-400 uppercase tracking-wide mb-3">
                                            Critical Requirement
                                        </div>
                                    )}
                                    <rule.icon className={`w-8 h-8 mb-4 ${rule.important ? 'text-orange-400' : 'text-slate-400'}`} />
                                    <h3 className="text-lg font-bold text-white mb-2">{rule.title}</h3>
                                    <p className="text-slate-400 text-sm">{rule.description}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Prohibited Transactions */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-4 text-center">
                                What Will Get You in Trouble
                            </h2>
                            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                                These are the things that get people audited and penalized. Some seem like common sense; others trip up people who don't know the rules. Do any of these, and you could lose the tax benefits on your entire 401k.
                            </p>

                            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6" />
                                    You CANNOT Do These Things
                                </h3>

                                <div className="space-y-4">
                                    {[
                                        {
                                            title: "Personal Use of Business Assets",
                                            description: "Using company vehicles, property, or equipment for personal purposes without paying fair market rent."
                                        },
                                        {
                                            title: "Loans to Disqualified Persons",
                                            description: "The company cannot lend money to you, your family members, or other disqualified persons."
                                        },
                                        {
                                            title: "Selling Personal Assets to the Company",
                                            description: "You cannot sell your personal property (car, equipment, real estate) to the company at any price."
                                        },
                                        {
                                            title: "Guaranteeing Company Debt Personally",
                                            description: "The 401(k) funds cannot be used as collateral for loans, and you generally cannot personally guarantee company debt."
                                        },
                                        {
                                            title: "Paying Below Fair Market Salary",
                                            description: "You must pay yourself reasonable compensation for work performed. Working for free or below-market rates is problematic."
                                        },
                                        {
                                            title: "Transactions with Family Members",
                                            description: "Hiring family members at inflated salaries or conducting business transactions with them at non-arm's-length terms."
                                        },
                                        {
                                            title: "Using Funds Before Stock Purchase",
                                            description: "The retirement funds must purchase company stock first. You cannot use the funds directly before the stock purchase completes."
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 bg-white/5 rounded-xl p-4">
                                            <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
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

                {/* Allowed Activities */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-4 text-center">
                                What You CAN Do with ROBS Funds
                            </h2>
                            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                                Once the 401(k) purchases company stock and the funds are in the C-Corporation,
                                you can use them for legitimate business purposes.
                            </p>

                            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6" />
                                    Legitimate Business Uses
                                </h3>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Purchase inventory for resale",
                                        "Buy equipment and machinery",
                                        "Lease or purchase business real estate",
                                        "Pay for franchise fees",
                                        "Cover initial operating expenses",
                                        "Hire employees and contractors",
                                        "Marketing and advertising costs",
                                        "Professional services (legal, accounting)",
                                        "Business insurance premiums",
                                        "Software and technology investments",
                                        "Vehicle fleet for business use",
                                        "Working capital for operations"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <span className="text-slate-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Ongoing Compliance */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                                Ongoing Compliance Requirements
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Annual Form 5500 Filing",
                                        description: "Every year, the 401(k) plan must file Form 5500 with the Department of Labor. This reports plan assets, participants, and compliance status. Missing this deadline can result in penalties of $250/day.",
                                        deadline: "July 31 (or Oct 15 with extension)"
                                    },
                                    {
                                        title: "Annual Stock Valuation",
                                        description: "The company stock held by the 401(k) must be valued annually by a qualified independent appraiser. This determines the value for participant statements and any stock transactions.",
                                        deadline: "Before annual filing"
                                    },
                                    {
                                        title: "Corporate Tax Returns",
                                        description: "As a C-Corporation, you must file Form 1120 annually. The company pays corporate income tax on profits (21% federal rate as of 2026).",
                                        deadline: "April 15 (or Oct 15 with extension)"
                                    },
                                    {
                                        title: "Reasonable Compensation",
                                        description: "You must pay yourself W-2 wages for services rendered. The IRS scrutinizes ROBS companies to ensure owners aren't avoiding payroll taxes by taking too little salary.",
                                        deadline: "Ongoing - each pay period"
                                    },
                                    {
                                        title: "401(k) Contributions for Employees",
                                        description: "If you have employees participating in the 401(k), their deferrals must be deposited within 7 business days (small plans) or as soon as administratively feasible.",
                                        deadline: "7 business days per pay period"
                                    },
                                    {
                                        title: "Non-Discrimination Testing",
                                        description: "Annual testing to ensure the plan doesn't unfairly favor highly compensated employees. Required tests include ADP/ACP tests and top-heavy testing.",
                                        deadline: "Before annual filing"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                                <p className="text-slate-400 text-sm">{item.description}</p>
                                            </div>
                                            <div className="md:text-right">
                                                <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Deadline</div>
                                                <div className="text-orange-400 font-medium text-sm">{item.deadline}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Penalties Section */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-4 text-center">
                                Penalties for Non-Compliance
                            </h2>
                            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                                Failure to follow ROBS rules can result in severe penalties from the IRS and DOL.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        penalty: "Plan Disqualification",
                                        description: "The entire rollover becomes a taxable distribution. You'd owe income tax on the full amount plus 10% early withdrawal penalty if under 59½.",
                                        severity: "Severe"
                                    },
                                    {
                                        penalty: "Prohibited Transaction Tax",
                                        description: "15% excise tax on the amount involved in the prohibited transaction. If not corrected within the tax year, an additional 100% tax applies.",
                                        severity: "Severe"
                                    },
                                    {
                                        penalty: "Form 5500 Late Filing",
                                        description: "$250 per day penalty for late filing, up to $150,000. DOL can also impose penalties up to $2,259 per day.",
                                        severity: "Moderate"
                                    },
                                    {
                                        penalty: "Fiduciary Breach",
                                        description: "Personal liability for losses to the plan. Fiduciaries can be required to restore losses from their own assets.",
                                        severity: "Severe"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`text-xs font-bold px-2 py-1 rounded ${item.severity === 'Severe'
                                                    ? 'bg-red-500/20 text-red-400'
                                                    : 'bg-yellow-500/20 text-yellow-400'
                                                }`}>
                                                {item.severity}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">{item.penalty}</h3>
                                        <p className="text-slate-400 text-sm">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Why Professional Help */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Don't Risk Your Life Savings on DIY
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                You've spent 30 years building your 401k. The wrong setup—one missed filing, one prohibited transaction—and you could owe taxes and penalties on the entire amount. This isn't where you cut corners. A good ROBS provider handles:
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
                                {[
                                    "Proper C-Corp formation in your state",
                                    "401(k) plan document drafting",
                                    "Initial stock valuation",
                                    "Retirement fund rollover coordination",
                                    "Annual Form 5500 filing",
                                    "Ongoing compliance monitoring",
                                    "Annual stock revaluation",
                                    "Non-discrimination testing"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="gold" size="lg" asChild>
                                    <a
                                        href={getTrackedLink(AFFILIATE_LINKS.guidantFinancial, "robs-rules-cta", "guidant")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Get Expert ROBS Setup
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="/reviews/guidant-financial">
                                        Read Guidant Review
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Related Content */}
                <section className="py-12 bg-slate-800/50">
                    <Container>
                        <h2 className="text-xl font-bold text-white mb-6 text-center">Related Resources</h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                            {[
                                { href: "/robs-401k", title: "ROBS 401k Guide", desc: "Complete overview" },
                                { href: "/reviews/guidant-financial", title: "Guidant Financial", desc: "Top ROBS provider" },
                                { href: "/reviews/benetrends", title: "Benetrends", desc: "ROBS pioneer" },
                                { href: "/self-directed-ira", title: "Self-Directed IRA", desc: "Alternative options" },
                            ].map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
                                >
                                    <h3 className="text-white font-semibold mb-1 group-hover:text-orange-400 transition-colors text-sm">
                                        {link.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs">{link.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
        </>
    );
}
