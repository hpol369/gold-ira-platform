import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Building2, ShieldCheck, AlertTriangle, DollarSign, ArrowRight, Lock, TrendingDown, Coins } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Is My Money Safe in the Bank? FDIC Limits Guide",
    description: "Understand FDIC insurance limits, bank failure risks, and what happens to your money if a bank collapses. Learn strategies to protect savings beyond $250,000.",
    openGraph: {
        title: "Is My Money Safe in the Bank? 2026 Guide",
        description: "FDIC limits, bank failure risks, and how to protect your savings beyond traditional banking.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const takeaways = [
    "FDIC insurance covers up to $250,000 per depositor, per bank—deposits above this are at risk.",
    "In 2023, three major US banks failed (SVB, Signature, First Republic), highlighting real risks.",
    "Inflation erodes purchasing power faster than savings accounts can grow—your 'safe' money loses value.",
    "Fractional reserve banking means only 10% of deposits are held as cash reserves.",
    "Strategies to protect wealth include spreading across banks, Treasury securities, and physical gold.",
    "A Gold IRA offers an alternative store of value outside the banking system entirely."
];

const tocItems = [
    { id: "overview", label: "The Safety Question" },
    { id: "fdic", label: "FDIC Insurance Explained" },
    { id: "risks", label: "Real Risks to Your Money" },
    { id: "inflation", label: "The Inflation Problem" },
    { id: "failures", label: "Recent Bank Failures" },
    { id: "protection", label: "Protection Strategies" },
    { id: "alternatives", label: "Alternatives to Banks" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Is My Money Safe in the Bank? FDIC Limits & Risks Explained",
            "description": "Understand FDIC insurance limits, bank failure risks, and what happens to your money if a bank collapses.",
            "author": {
                "@type": "Person",
                "name": "Thomas Richardson"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "datePublished": "2026-01-23",
            "dateModified": "2026-01-23"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What happens if my bank fails?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If your bank fails, the FDIC typically takes over and either transfers your deposits to another bank or sends you a check for your insured deposits (up to $250,000). This usually happens within a few business days. However, deposits exceeding $250,000 per depositor, per bank may not be fully recovered."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is $250,000 safe in a bank?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, up to $250,000 per depositor, per FDIC-insured bank is protected by federal insurance. If you have more than $250,000, you should spread deposits across multiple banks or use different account ownership categories (individual, joint, retirement) to maximize coverage."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can banks take your money legally?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Banks can legally take money from your account in specific circumstances: to collect on a loan you have with them (right of setoff), to pay fees you've agreed to, or if required by court order. In a bank failure, deposits above FDIC limits may be at risk. Some countries have also implemented 'bail-in' provisions where depositors can be forced to absorb bank losses."
                    }
                }
            ]
        }
    ]
};

export default function IsMyMoneySafeInBankPage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-50 backdrop-blur-sm py-16 border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Financial Safety
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-6">
                            Is My Money Safe in the Bank?
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            After watching three banks collapse in 2023, you&apos;re right to ask this question. Here&apos;s what really protects your hard-earned savings and what doesn&apos;t.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg  prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-[#000080] prose-li:text-slate-600 max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead">
                                When three major banks collapsed in 2023, a lot of hard-working folks suddenly had a wake-up call. If you&apos;ve got $500,000+ in retirement savings, you should understand exactly what&apos;s protected and what isn&apos;t.
                            </p>
                            <p>
                                Most people assume banks are rock solid. We put our money there and forget about it. But after seeing news footage of people lined up outside banks, trying to get their own money? Worth understanding the rules.
                            </p>
                            <p>
                                Here&apos;s what FDIC insurance actually covers, the risks nobody talks about, and what you can do to protect savings you&apos;ve spent 30 years building.
                            </p>
                        </section>

                        {/* FDIC Section */}
                        <section id="fdic" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-700">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">FDIC Insurance Explained</h2>
                            </div>
                            <p>
                                The Federal Deposit Insurance Corporation (FDIC) was created in 1933 after thousands of banks failed during the Great Depression. Its purpose: restore confidence in the banking system by guaranteeing deposits.
                            </p>

                            <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/20 not-prose my-8">
                                <h4 className="font-bold text-[#000080] text-lg mb-4">FDIC Coverage Limits</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-lg">
                                        <span className="text-slate-600">Single Accounts</span>
                                        <span className="font-semibold text-blue-700">$250,000 per depositor</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-lg">
                                        <span className="text-slate-600">Joint Accounts</span>
                                        <span className="font-semibold text-blue-700">$250,000 per co-owner</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-lg">
                                        <span className="text-slate-600">Retirement Accounts (IRAs)</span>
                                        <span className="font-semibold text-blue-700">$250,000 per owner</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-lg">
                                        <span className="text-slate-600">Trust Accounts</span>
                                        <span className="font-semibold text-blue-700">$250,000 per beneficiary</span>
                                    </div>
                                </div>
                            </div>

                            <p>
                                <strong>What&apos;s covered:</strong> Checking accounts, savings accounts, money market accounts, CDs, and certain retirement accounts.
                            </p>
                            <p>
                                <strong>What&apos;s NOT covered:</strong> Stocks, bonds, mutual funds, annuities, crypto, safe deposit box contents, or any investment products.
                            </p>

                            <Callout type="warning" title="The $250K Limit Is Per Bank">
                                If you have $500,000 in one bank, only $250,000 is insured. The rest is at risk if that bank fails. However, if you spread $250,000 across two different banks, you&apos;re fully covered at each.
                            </Callout>
                        </section>

                        {/* Real Risks */}
                        <section id="risks" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-700">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Real Risks to Your Bank Deposits</h2>
                            </div>

                            <h3>1. Fractional Reserve Banking</h3>
                            <p>
                                Banks don&apos;t keep all your money in a vault. Under fractional reserve banking, they&apos;re only required to keep about 10% of deposits as reserves—the rest is loaned out. This means if everyone tried to withdraw at once (a &quot;bank run&quot;), the bank couldn&apos;t pay.
                            </p>

                            <h3>2. Uninsured Deposits</h3>
                            <p>
                                Any amount over $250,000 per depositor per bank is uninsured. High-net-worth individuals and businesses with operating accounts often have millions at a single bank—leaving significant sums exposed.
                            </p>

                            <h3>3. Bail-In Risk</h3>
                            <p>
                                After the 2008 crisis, some countries implemented &quot;bail-in&quot; provisions allowing governments to convert depositor funds into bank equity during a crisis. While the US hasn&apos;t explicitly done this, the 2010 Dodd-Frank Act contains provisions for &quot;orderly liquidation&quot; that could affect large depositors.
                            </p>

                            <h3>4. Cyber Attacks & System Failures</h3>
                            <p>
                                Banks are increasingly targeted by sophisticated cyber attacks. A major breach could freeze accounts, expose personal data, or even result in theft that may take years to recover.
                            </p>
                        </section>

                        {/* Inflation Problem */}
                        <section id="inflation" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-[#B22234]">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">The Hidden Risk: Inflation</h2>
                            </div>
                            <p>
                                Perhaps the biggest threat to bank deposits isn&apos;t bank failure—it&apos;s <strong>inflation</strong>. Your money might be &quot;safe&quot; in the sense that the bank won&apos;t lose it, but it&apos;s constantly losing purchasing power.
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Year</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Avg Savings Rate</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Inflation Rate</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Real Return</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="p-4 text-[#000080]">2021</td>
                                            <td className="p-4 text-slate-500">0.06%</td>
                                            <td className="p-4 text-slate-500">7.0%</td>
                                            <td className="p-4 text-red-700 font-semibold">-6.94%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#000080]">2022</td>
                                            <td className="p-4 text-slate-500">0.30%</td>
                                            <td className="p-4 text-slate-500">6.5%</td>
                                            <td className="p-4 text-red-700 font-semibold">-6.20%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#000080]">2023</td>
                                            <td className="p-4 text-slate-500">0.45%</td>
                                            <td className="p-4 text-slate-500">3.4%</td>
                                            <td className="p-4 text-red-700 font-semibold">-2.95%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#000080]">2024</td>
                                            <td className="p-4 text-slate-500">4.50%</td>
                                            <td className="p-4 text-slate-500">2.9%</td>
                                            <td className="p-4 text-green-700 font-semibold">+1.60%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <strong>The math is brutal:</strong> $100,000 in a savings account in 2020 had the purchasing power of roughly $82,000 by the end of 2023. Your &quot;safe&quot; money lost 18% of its value.
                            </p>

                            <Callout type="info" title="Why Gold Matters Here">
                                While cash in banks loses value to inflation, gold has historically maintained purchasing power over centuries. An ounce of gold in 1920 bought the same quality suit as an ounce of gold today.
                            </Callout>
                        </section>

                        {/* Bank Failures */}
                        <section id="failures" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-slate-50 rounded-lg text-slate-500">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">The 2023 Banking Crisis</h2>
                            </div>
                            <p>
                                In March 2023, three major banks failed in rapid succession—a stark reminder that bank failures aren&apos;t just historical events:
                            </p>

                            <div className="space-y-4 not-prose my-8">
                                <div className="bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6">
                                    <h4 className="font-bold text-[#000080] text-lg mb-2">Silicon Valley Bank (SVB)</h4>
                                    <p className="text-slate-500 text-sm mb-2">Failed March 10, 2023 • $209 billion in assets</p>
                                    <p className="text-slate-500">The second-largest bank failure in US history. Over 90% of deposits were uninsured. The FDIC made an extraordinary decision to cover all deposits, but this isn&apos;t guaranteed in future failures.</p>
                                </div>
                                <div className="bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6">
                                    <h4 className="font-bold text-[#000080] text-lg mb-2">Signature Bank</h4>
                                    <p className="text-slate-500 text-sm mb-2">Failed March 12, 2023 • $110 billion in assets</p>
                                    <p className="text-slate-500">Third-largest bank failure in US history. Failed just two days after SVB as depositors panicked about exposure to similar risks.</p>
                                </div>
                                <div className="bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6">
                                    <h4 className="font-bold text-[#000080] text-lg mb-2">First Republic Bank</h4>
                                    <p className="text-slate-500 text-sm mb-2">Failed May 1, 2023 • $229 billion in assets</p>
                                    <p className="text-slate-500">The largest bank failure of 2023. Acquired by JPMorgan Chase in an FDIC-facilitated deal.</p>
                                </div>
                            </div>

                            <p>
                                <strong>Key lesson:</strong> These weren&apos;t small community banks—they were major regional institutions. If banks this size can fail, any bank can fail.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-[#000080] text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-[#000080]">Own Something Real</h3>
                                <p className="mb-6 text-gray-200">A Gold IRA holds actual gold in a vault with your name on it. Not a number on a bank&apos;s computer, not a paper promise. Real metal.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Explore Gold IRA Options <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Protection Strategies */}
                        <section id="protection" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-700">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Strategies to Protect Your Money</h2>
                            </div>

                            <h3>1. Spread Across Multiple Banks</h3>
                            <p>
                                Keep no more than $250,000 at any single bank. Use 2-4 different FDIC-insured banks to maximize coverage.
                            </p>

                            <h3>2. Use Different Account Ownership Categories</h3>
                            <p>
                                At the same bank, you can have separate coverage for: individual accounts, joint accounts, retirement accounts, and trust accounts. A married couple could have up to $1 million covered at one bank.
                            </p>

                            <h3>3. Consider CDARS/ICS</h3>
                            <p>
                                Certificate of Deposit Account Registry Service (CDARS) and Insured Cash Sweep (ICS) programs automatically spread large deposits across multiple banks while you work with just one institution.
                            </p>

                            <h3>4. Treasury Securities</h3>
                            <p>
                                Treasury bills, notes, and bonds are backed by the full faith and credit of the US government—not dependent on any bank&apos;s solvency. You can buy directly at TreasuryDirect.gov.
                            </p>

                            <h3>5. Physical Assets Outside the System</h3>
                            <p>
                                Assets like physical gold, real estate, and other tangible property exist outside the banking system entirely—no bank can fail and affect them.
                            </p>
                        </section>

                        {/* Alternatives */}
                        <section id="alternatives" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-[#B22234]">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Alternatives to Bank Deposits</h2>
                            </div>

                            <h3>Physical Gold & Precious Metals</h3>
                            <p>
                                Gold has been a store of value for 5,000+ years and exists completely outside the banking system. There&apos;s no counterparty risk—you own the metal directly.
                            </p>
                            <p>
                                A <Link href="/what-is-a-gold-ira">Gold IRA</Link> allows you to hold IRS-approved gold, silver, platinum, and palladium in a tax-advantaged retirement account. The metal is stored in secure depositories but is owned by you—not lent out or leveraged like bank deposits.
                            </p>

                            <h3>Treasury Securities</h3>
                            <p>
                                Treasury bills, notes, and bonds offer government-backed safety with better yields than most savings accounts. They&apos;re not dependent on any single bank.
                            </p>

                            <h3>I Bonds</h3>
                            <p>
                                I Bonds (inflation-protected savings bonds) are backed by the US Treasury and adjust for inflation, protecting purchasing power that bank deposits can&apos;t.
                            </p>

                            <Callout type="tip" title="Diversification Is Key">
                                The safest approach isn&apos;t choosing one alternative—it&apos;s diversifying across multiple options: some bank deposits (within FDIC limits), some Treasuries, some physical gold, and other assets. No single point of failure.
                            </Callout>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">What happens if my bank fails?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        If your bank fails, the FDIC typically takes over and either transfers your deposits to another bank or sends you a check for your insured deposits (up to $250,000). This usually happens within a few business days. However, deposits exceeding $250,000 per depositor, per bank may not be fully recovered.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Is $250,000 safe in a bank?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        Yes, up to $250,000 per depositor, per FDIC-insured bank is protected by federal insurance. If you have more than $250,000, spread deposits across multiple banks or use different account ownership categories (individual, joint, retirement) to maximize coverage.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Can banks legally take your money?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        Banks can legally take money from your account in specific circumstances: to collect on a loan you have with them (right of setoff), to pay fees you&apos;ve agreed to, or if required by court order. In a bank failure, deposits above FDIC limits may be at risk. Some countries have implemented &quot;bail-in&quot; provisions where depositors absorb bank losses.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">How do I check if my bank is FDIC insured?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        Use the FDIC&apos;s BankFind tool at fdic.gov to verify if your bank is FDIC-insured. Look for the official &quot;Member FDIC&quot; sign at your bank or on their website. Most traditional banks are FDIC-insured, but some online-only institutions and fintech apps may not be directly insured—verify carefully.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-[#000080] relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-[#000080]">Don&apos;t Keep All Your Eggs in One Basket</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">You worked too hard for too long to trust it all to banks. Physical gold doesn&apos;t care if banks fail or computers crash.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-[#000080] hover:bg-slate-200">
                                        <Link href="/what-is-a-gold-ira">What Is a Gold IRA?</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>

            {/* CTA Section */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA variant="footer" trackSource="learn-is-my-money-safe" />
                </Container>
            </section>
        </main>
    );
}
