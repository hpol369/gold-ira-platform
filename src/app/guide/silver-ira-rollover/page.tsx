import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Metadata } from "next";
import Link from "next/link";
import { RefreshCw, Shield, Clock, CheckCircle2, ArrowRight, AlertTriangle, Coins, Building2, FileText, Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "Silver IRA Rollover Guide 2026: How to Transfer Your 401k to Silver",
    description: "Silver IRA rollover guide. How to transfer your 401k or IRA to silver tax-free. Step-by-step process, eligible accounts, and top companies.",
    keywords: ["silver ira rollover", "401k to silver ira", "silver ira transfer", "rollover to silver ira", "convert ira to silver", "silver rollover"],
    openGraph: {
        title: "Silver IRA Rollover Guide 2026: How to Transfer Your 401k to Silver",
        description: "Complete guide to rolling over your retirement account to a Silver IRA without taxes or penalties.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

// Steps data
const rolloverSteps = [
    {
        number: 1,
        title: "Choose a Silver IRA Company",
        description: "Select a reputable precious metals IRA company that offers silver products. Look for companies with transparent pricing, good silver selection, and experience with rollovers.",
        tips: ["Compare silver premiums between companies", "Check BBB ratings and customer reviews", "Ensure they offer IRA-approved silver products"]
    },
    {
        number: 2,
        title: "Open Your Silver IRA Account",
        description: "Complete the application with your chosen company. They'll help you select a custodian (the financial institution that holds your IRA) and depository (where your silver is stored).",
        tips: ["Provide required identification documents", "Choose between Traditional, Roth, SEP, or SIMPLE IRA", "Select your preferred storage depository"]
    },
    {
        number: 3,
        title: "Initiate the Rollover",
        description: "Your Silver IRA company will handle the paperwork to transfer funds from your existing retirement account. Choose a direct rollover to avoid tax withholding.",
        tips: ["Direct rollover is tax-free and penalty-free", "60-day indirect rollover requires you to redeposit funds", "Your IRA company handles most paperwork"]
    },
    {
        number: 4,
        title: "Fund Your Account",
        description: "Once the rollover is complete (typically 1-3 weeks), your funds will be in your new Silver IRA custodian account, ready to purchase silver.",
        tips: ["Full 401k balance can be rolled over", "Partial rollovers are also allowed", "No contribution limits on rollovers"]
    },
    {
        number: 5,
        title: "Purchase IRA-Approved Silver",
        description: "Work with your Silver IRA company to select and purchase IRA-approved silver coins or bars. The silver will be shipped directly to your chosen depository.",
        tips: ["American Silver Eagles are most popular", "Silver must be .999 fine (99.9% pure)", "Consider a mix of coins and bars"]
    },
];

// Eligible accounts
const eligibleAccounts = [
    { name: "Traditional 401(k)", description: "Employer-sponsored plans from current or former employers" },
    { name: "Roth 401(k)", description: "Can roll to Roth Silver IRA to maintain tax-free status" },
    { name: "Traditional IRA", description: "Existing traditional IRAs from any provider" },
    { name: "Roth IRA", description: "Roll to Roth Silver IRA for tax-free growth" },
    { name: "403(b)", description: "Retirement plans for public school and nonprofit employees" },
    { name: "457(b)", description: "Deferred compensation plans for government employees" },
    { name: "TSP", description: "Thrift Savings Plan for federal employees and military" },
    { name: "SEP IRA", description: "Self-employed retirement accounts" },
    { name: "SIMPLE IRA", description: "Small business retirement plans (after 2 years)" },
];

// FAQs
const faqs = [
    {
        question: "Is a silver IRA rollover tax-free?",
        answer: "Yes, a direct rollover from a 401(k), IRA, or other eligible retirement account to a Silver IRA is completely tax-free and penalty-free. The key is using a direct rollover (trustee-to-trustee transfer) rather than an indirect rollover. Your Silver IRA company will handle the paperwork to ensure it's done correctly."
    },
    {
        question: "How long does a silver IRA rollover take?",
        answer: "A typical Silver IRA rollover takes 1-3 weeks from start to finish. Opening your new account takes a few days, and the actual fund transfer usually takes 1-2 weeks depending on your current provider. Some 401(k) administrators may take longer. Once funds arrive, you can purchase silver immediately."
    },
    {
        question: "Can I roll over only part of my 401(k) to silver?",
        answer: "Yes, partial rollovers are allowed. You can roll over any amount you choose while leaving the rest in your current account. This is common for investors who want to diversify into silver while maintaining some traditional investments."
    },
    {
        question: "What silver can I hold in an IRA?",
        answer: "IRA-approved silver must be .999 fine (99.9% pure). Popular options include American Silver Eagles, Canadian Silver Maple Leafs, Austrian Silver Philharmonics, and silver bars from approved refineries like PAMP Suisse, Credit Suisse, and Johnson Matthey. Collectible and numismatic silver coins are not allowed."
    },
    {
        question: "Can I do a silver IRA rollover while still employed?",
        answer: "It depends on your employer's plan rules. Many 401(k) plans allow 'in-service rollovers' after you reach age 59½. Some plans allow in-service rollovers at any age. Check with your HR department or plan administrator. If your plan doesn't allow in-service rollovers, you'll need to wait until you leave the employer or reach the eligible age."
    },
    {
        question: "What are the fees for a silver IRA rollover?",
        answer: "Silver IRA fees typically include: account setup fee ($50-$150, often waived), annual custodian fee ($75-$300), and storage fee ($100-$300/year based on value). There's no fee for the rollover itself. The silver you purchase will have a premium over spot price, which varies by product and company."
    },
];

// JSON-LD Schema
const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Silver IRA Rollover Guide 2026: How to Transfer Your 401k to Silver",
            "description": "Complete guide to rolling over your 401k, IRA, or retirement account to a Silver IRA. Step-by-step process, tax rules, and best companies.",
            "author": {
                "@type": "Person",
                "name": "Thomas Richardson"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "datePublished": "2026-01-25",
            "dateModified": "2026-01-25"
        },
        {
            "@type": "HowTo",
            "name": "How to Roll Over Your 401k to a Silver IRA",
            "description": "Step-by-step guide to transferring retirement funds to a Silver IRA",
            "step": rolloverSteps.map(step => ({
                "@type": "HowToStep",
                "name": step.title,
                "text": step.description
            }))
        },
        {
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        }
    ]
};

export default function SilverIraRolloverPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Navbar />

            <div className="flex-grow">
                {/* Hero Header */}
                <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[150px]" />
                        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-[100px]" />
                    </div>
                    <Container className="relative z-10">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-2 text-slate-300 font-bold tracking-widest uppercase text-xs mb-4">
                                <RefreshCw className="h-4 w-4" />
                                Tax-Free Transfers
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                                Silver IRA Rollover Guide
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed mb-8">
                                Transfer your 401(k), IRA, or other retirement account to a Silver IRA without taxes or penalties. Complete step-by-step instructions for 2026.
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    <span>Tax-Free Direct Rollover</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                                    <Shield className="h-4 w-4 text-blue-400" />
                                    <span>IRS Compliant</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                                    <Clock className="h-4 w-4 text-amber-400" />
                                    <span>1-3 Weeks Process</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </header>

                {/* Quick Start CTA */}
                <section className="py-12 bg-gradient-to-r from-slate-400/10 via-slate-300/5 to-slate-400/10 border-b border-white/10">
                    <Container>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h2 className="text-xl font-bold text-white mb-2">
                                    Ready to Roll Over to a Silver IRA?
                                </h2>
                                <p className="text-slate-400">
                                    Our recommended company handles the entire rollover process for you.
                                </p>
                            </div>
                            <Link
                                href="/best-silver-ira-companies"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg whitespace-nowrap"
                            >
                                Compare Silver IRA Companies
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </Container>
                </section>

                {/* What is a Silver IRA Rollover */}
                <section className="py-16">
                    <Container>
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold text-white mb-6">What Is a Silver IRA Rollover?</h2>
                            <div className="prose prose-lg prose-invert prose-p:text-slate-300 max-w-none">
                                <p>
                                    A Silver IRA rollover is the process of transferring funds from an existing retirement account (like a 401k, traditional IRA, or TSP) into a self-directed IRA that holds physical silver. The &quot;rollover&quot; refers to moving your money from one retirement account to another without triggering taxes or early withdrawal penalties.
                                </p>
                                <p>
                                    Unlike regular IRAs that hold stocks, bonds, and mutual funds, a Silver IRA (also called a Precious Metals IRA) holds actual, physical silver coins and bars. This silver is stored in an IRS-approved depository on your behalf.
                                </p>
                                <p>
                                    The key benefit is that your retirement funds can be used to purchase real silver assets while maintaining all the tax advantages of your original retirement account.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Eligible Accounts */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold text-white mb-4">Accounts Eligible for Silver IRA Rollover</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                Most retirement accounts can be rolled over to a Silver IRA without taxes or penalties.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                            {eligibleAccounts.map((account, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                                    <div className="flex items-center gap-3 mb-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                                        <h3 className="font-bold text-white">{account.name}</h3>
                                    </div>
                                    <p className="text-sm text-slate-400">{account.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-slate-400 text-sm">
                                Not sure if your account qualifies? <Link href="/rollover" className="text-amber-400 hover:underline">View our complete rollover guide</Link> or contact a Silver IRA specialist.
                            </p>
                        </div>
                    </Container>
                </section>

                {/* Step-by-Step Process */}
                <section className="py-16">
                    <Container>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold text-white mb-4">How to Roll Over to a Silver IRA</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                The rollover process is straightforward. Your Silver IRA company handles most of the paperwork.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-6">
                            {rolloverSteps.map((step, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center text-slate-900 font-bold text-xl">
                                                {step.number}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                            <p className="text-slate-300 mb-4">{step.description}</p>
                                            <ul className="space-y-2">
                                                {step.tips.map((tip, tipIndex) => (
                                                    <li key={tipIndex} className="flex items-center gap-2 text-sm text-slate-400">
                                                        <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                                                        {tip}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Direct vs Indirect Rollover */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Direct vs. Indirect Rollover</h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Direct Rollover */}
                                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-green-500/20 rounded-lg">
                                            <CheckCircle2 className="h-6 w-6 text-green-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-green-400">Direct Rollover (Recommended)</h3>
                                    </div>
                                    <p className="text-slate-300 mb-4">
                                        Funds transfer directly from your old custodian to your new Silver IRA custodian. You never touch the money.
                                    </p>
                                    <ul className="space-y-2 text-sm text-slate-400">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            100% tax-free
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            No withholding
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            No time limit
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            Unlimited per year
                                        </li>
                                    </ul>
                                </div>

                                {/* Indirect Rollover */}
                                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-amber-500/20 rounded-lg">
                                            <AlertTriangle className="h-6 w-6 text-amber-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-amber-400">Indirect Rollover (Risky)</h3>
                                    </div>
                                    <p className="text-slate-300 mb-4">
                                        You receive a check for your funds and must deposit them into your new Silver IRA within 60 days.
                                    </p>
                                    <ul className="space-y-2 text-sm text-slate-400">
                                        <li className="flex items-center gap-2">
                                            <AlertTriangle className="h-4 w-4 text-amber-400" />
                                            20% mandatory withholding
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <AlertTriangle className="h-4 w-4 text-amber-400" />
                                            60-day deadline (strict)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <AlertTriangle className="h-4 w-4 text-amber-400" />
                                            Only one per 12-month period
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <AlertTriangle className="h-4 w-4 text-amber-400" />
                                            Miss deadline = taxes + penalties
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <FileText className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white mb-2">Our Recommendation</h4>
                                        <p className="text-slate-300 text-sm">
                                            Always choose a direct rollover. It&apos;s simpler, safer, and eliminates any risk of taxes or penalties. Reputable Silver IRA companies handle the direct rollover process for you at no additional cost.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* What Silver Can You Hold */}
                <section className="py-16">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold text-white mb-6 text-center">What Silver Can You Hold in an IRA?</h2>
                            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                                The IRS requires silver in an IRA to be .999 fine (99.9% pure) and produced by approved mints or refineries.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Coins className="h-6 w-6 text-slate-300" />
                                        <h3 className="font-bold text-white text-lg">IRA-Approved Silver Coins</h3>
                                    </div>
                                    <ul className="space-y-2 text-slate-400">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            American Silver Eagles
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            Canadian Silver Maple Leafs
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            Austrian Silver Philharmonics
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            Australian Silver Kangaroos
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            British Silver Britannias
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Building2 className="h-6 w-6 text-slate-300" />
                                        <h3 className="font-bold text-white text-lg">IRA-Approved Silver Bars</h3>
                                    </div>
                                    <ul className="space-y-2 text-slate-400">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            PAMP Suisse Silver Bars
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            Credit Suisse Silver Bars
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            Johnson Matthey Silver Bars
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            Royal Canadian Mint Bars
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            Sunshine Minting Silver Bars
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <Link href="/guide/ira-approved-silver" className="text-amber-400 hover:underline inline-flex items-center gap-2">
                                    View Complete IRA-Approved Silver List <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* FAQs */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Silver IRA Rollover FAQs</h2>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                                >
                                    <summary className="cursor-pointer p-6 font-semibold text-white flex justify-between items-center list-none">
                                        {faq.question}
                                        <span className="text-amber-400 group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-400">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Related Content */}
                <section className="py-16">
                    <Container>
                        <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">Related Silver IRA Resources</h2>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <Link href="/guide/silver-ira-guide" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Silver IRA Guide</h3>
                                <p className="text-sm text-slate-400">Complete guide to opening and managing a silver IRA.</p>
                            </Link>
                            <Link href="/guide/ira-approved-silver" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">IRA-Approved Silver</h3>
                                <p className="text-sm text-slate-400">Which silver coins and bars qualify for your IRA.</p>
                            </Link>
                            <Link href="/best-silver-ira-companies" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Best Silver IRA Companies</h3>
                                <p className="text-sm text-slate-400">Compare top silver IRA providers for 2026.</p>
                            </Link>
                        </div>
                    </Container>
                </section>

                {/* Augusta CTA */}
                <section className="py-16">
                    <Container>
                        <AugustaCTA
                            variant="footer"
                            linkContext="silver"
                            headline="Ready to Start Your Silver IRA Rollover?"
                            subheadline="Augusta Precious Metals handles the entire rollover process for you—paperwork, coordination with your current custodian, everything. Get started with a free consultation."
                            trackSource="silver-ira-rollover"
                        />
                    </Container>
                </section>
            </div>

            <Footer />
        </main>
    );
}
