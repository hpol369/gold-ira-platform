import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { ShieldX, ShieldCheck, Building2, AlertTriangle, ArrowRight, Coins, Scale, TrendingDown, Briefcase } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";

export const metadata: Metadata = {
    title: "Is 401k FDIC Insured? What Actually Protects You",
    description: "401(k)s are NOT FDIC insured. Learn what actually protects your retirement savings (ERISA, SIPC), what happens if your employer goes bankrupt, and how to add real asset protection.",
    keywords: ["is 401k fdic insured", "is my ira fdic insured", "is 401k protected from bank failure", "what protects my 401k", "401k insurance protection"],
    openGraph: {
        title: "Is 401k FDIC Insured? The Truth About Retirement Account Protection",
        description: "401(k)s are NOT FDIC insured. Discover what protections actually exist and how to safeguard your retirement savings.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const takeaways = [
    "401(k)s are NOT FDIC insured - FDIC only covers bank deposits, not investment accounts.",
    "Your 401(k) is protected by ERISA, which shields it from employer bankruptcy and creditors.",
    "SIPC coverage (up to $500,000) protects against brokerage firm failure, not market losses.",
    "Market losses are the real risk - no insurance protects against stock market declines.",
    "If your employer goes bankrupt, your 401(k) is still yours - it's held in a separate trust.",
    "Adding physical gold through a Gold IRA provides tangible asset protection outside the paper system."
];

const tocItems = [
    { id: "answer", label: "The Direct Answer" },
    { id: "erisa", label: "ERISA Protection" },
    { id: "sipc", label: "SIPC Coverage" },
    { id: "employer-bankruptcy", label: "Employer Bankruptcy" },
    { id: "broker-failure", label: "Custodian/Broker Failure" },
    { id: "market-risk", label: "What IS at Risk" },
    { id: "gold-ira", label: "Gold IRA Protection" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Is 401k FDIC Insured? NO - But Here's What Does Protect Your Retirement",
            "description": "401(k)s are NOT FDIC insured. Learn what actually protects your retirement savings (ERISA, SIPC), what happens if your employer goes bankrupt, and how to add real asset protection.",
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
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is my IRA FDIC insured?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, traditional IRAs and Roth IRAs are generally NOT FDIC insured. FDIC insurance only covers deposit accounts at banks (checking, savings, CDs). However, if your IRA holds cash in a bank deposit account (like an IRA CD or IRA savings), that portion may be FDIC insured up to $250,000. Investment holdings in your IRA (stocks, mutual funds, ETFs) are not FDIC insured but may be covered by SIPC if your brokerage fails."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What happens to my 401k if the stock market crashes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If the stock market crashes, your 401(k) will likely lose value proportional to your stock exposure. Neither FDIC nor SIPC insurance protects against market losses - they only protect against institutional failures. This is why diversification into non-correlated assets like gold is important. A 50% market crash means a 50% loss in your stock-heavy 401(k), which could take years to recover."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is my 401k safe from bank failure?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your 401(k) is generally safe from bank failure because 401(k) assets are not held by banks - they're held in trust by custodians and are separate from the bank's assets. If the custodian or brokerage firm fails, SIPC provides up to $500,000 in protection ($250,000 for cash). Your 401(k) is also protected by ERISA, which requires that retirement funds be held separately from employer and custodian assets."
                    }
                }
            ]
        }
    ]
};

export default function Is401kFDICInsuredPage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-50 backdrop-blur-sm py-16 border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Retirement Protection
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-6">
                            Is 401(k) FDIC Insured?
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Short answer: <strong className="text-red-700">NO</strong>. But before you panic, there ARE protections in place. Here&apos;s what actually safeguards the retirement you&apos;ve spent 30 years building.
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

                        {/* Direct Answer */}
                        <section id="answer" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-700">
                                    <ShieldX className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">The Direct Answer: NO</h2>
                            </div>

                            <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20 not-prose my-8">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="w-8 h-8 text-red-700 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-700 text-xl mb-2">401(k)s Are NOT FDIC Insured</h4>
                                        <p className="text-red-800">
                                            The Federal Deposit Insurance Corporation (FDIC) only insures <em>bank deposits</em> - checking accounts, savings accounts, and CDs at FDIC-member banks. Your 401(k) is an <em>investment account</em>, not a bank deposit, so it falls completely outside FDIC coverage.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="lead">
                                A lot of hard-working folks think their 401(k) has the same protection as their checking account. It doesn&apos;t. But that doesn&apos;t mean your retirement is hanging out there unprotected.
                            </p>
                            <p>
                                Your 401(k) has different protections. The real question is: what do they actually protect you from? And what&apos;s still at risk? Let&apos;s break it down in plain English.
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Protection Type</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">What It Covers</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">401(k)?</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="p-4 text-[#000080] font-semibold">FDIC Insurance</td>
                                            <td className="p-4 text-slate-500">Bank deposits (checking, savings, CDs)</td>
                                            <td className="p-4 text-red-700 font-semibold">NO</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#000080] font-semibold">SIPC Coverage</td>
                                            <td className="p-4 text-slate-500">Brokerage account assets if broker fails</td>
                                            <td className="p-4 text-green-700 font-semibold">YES (up to $500k)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#000080] font-semibold">ERISA Protection</td>
                                            <td className="p-4 text-slate-500">Employer bankruptcy, fiduciary duties</td>
                                            <td className="p-4 text-green-700 font-semibold">YES</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#000080] font-semibold">Market Loss Protection</td>
                                            <td className="p-4 text-slate-500">Stock market declines</td>
                                            <td className="p-4 text-red-700 font-semibold">NO - NOTHING</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* ERISA Protection */}
                        <section id="erisa" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-700">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">ERISA Protection: Your Primary Safeguard</h2>
                            </div>
                            <p>
                                The Employee Retirement Income Security Act of 1974 (ERISA) is the primary federal law protecting your 401(k). Here&apos;s what it does:
                            </p>

                            <div className="space-y-4 not-prose my-8">
                                <div className="bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6">
                                    <h4 className="font-bold text-[#000080] text-lg mb-2">Separation of Assets</h4>
                                    <p className="text-slate-500">Your 401(k) assets must be held in a trust, completely separate from your employer&apos;s business assets. Your company can&apos;t touch your retirement funds, even if they&apos;re in financial trouble.</p>
                                </div>
                                <div className="bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6">
                                    <h4 className="font-bold text-[#000080] text-lg mb-2">Fiduciary Duty</h4>
                                    <p className="text-slate-500">Plan administrators have a legal obligation to act in your best interest. They can be personally liable for breaches - not just fines, but personal financial responsibility.</p>
                                </div>
                                <div className="bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6">
                                    <h4 className="font-bold text-[#000080] text-lg mb-2">Creditor Protection</h4>
                                    <p className="text-slate-500">In most cases, your 401(k) is protected from creditors, lawsuits, and even bankruptcy proceedings. This is actually stronger protection than FDIC provides.</p>
                                </div>
                                <div className="bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6">
                                    <h4 className="font-bold text-[#000080] text-lg mb-2">Reporting Requirements</h4>
                                    <p className="text-slate-500">Plan sponsors must provide regular statements, disclose fees, and file annual reports. Transparency is legally mandated.</p>
                                </div>
                            </div>

                            <Callout type="info" title="ERISA vs FDIC: Different But Powerful">
                                While FDIC protects against bank failure (institutional risk), ERISA protects against employer misconduct, bankruptcy, and creditor claims. For many people, ERISA protection is actually more relevant than FDIC would be.
                            </Callout>
                        </section>

                        {/* SIPC Coverage */}
                        <section id="sipc" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-700">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">SIPC Coverage: If Your Broker Fails</h2>
                            </div>
                            <p>
                                The Securities Investor Protection Corporation (SIPC) provides another layer of protection - specifically if the brokerage firm holding your 401(k) goes bankrupt.
                            </p>

                            <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/20 not-prose my-8">
                                <h4 className="font-bold text-[#000080] text-lg mb-4">SIPC Coverage Limits</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-lg">
                                        <span className="text-slate-600">Total Coverage</span>
                                        <span className="font-semibold text-blue-700">$500,000 per customer</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-lg">
                                        <span className="text-slate-600">Cash Coverage</span>
                                        <span className="font-semibold text-blue-700">$250,000 (within total)</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-lg">
                                        <span className="text-slate-600">Securities Coverage</span>
                                        <span className="font-semibold text-blue-700">$500,000</span>
                                    </div>
                                </div>
                            </div>

                            <p>
                                <strong>What SIPC covers:</strong> If your brokerage firm fails and your securities are missing, SIPC works to return your investments. It covers stocks, bonds, mutual funds, and other securities.
                            </p>
                            <p>
                                <strong>What SIPC does NOT cover:</strong> Market losses. If your investments drop 50% due to a market crash, SIPC offers zero protection. It also doesn&apos;t cover commodity futures, currency, or investment contracts not registered with the SEC.
                            </p>

                            <Callout type="warning" title="SIPC Is Not FDIC">
                                Don&apos;t confuse SIPC with FDIC. SIPC protects against brokerage firm failure - not against your investments losing value. If the stock market crashes 40%, your account is worth 40% less, and no insurance helps.
                            </Callout>
                        </section>

                        {/* Employer Bankruptcy */}
                        <section id="employer-bankruptcy" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-[#B22234]">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">What Happens If Your Employer Goes Bankrupt?</h2>
                            </div>
                            <p>
                                This is a fear many workers have, especially after watching companies like Enron, Lehman Brothers, and others collapse. Here&apos;s the good news:
                            </p>

                            <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20 not-prose my-8">
                                <h4 className="font-bold text-green-700 text-xl mb-4">Your 401(k) Is Safe From Employer Bankruptcy</h4>
                                <p className="text-green-800 mb-4">
                                    Thanks to ERISA, your 401(k) assets are held in a trust that is legally separate from your employer. When a company files for bankruptcy, creditors cannot touch employee retirement accounts.
                                </p>
                                <ul className="space-y-2 text-green-800">
                                    <li className="flex items-start gap-2">
                                        <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                        <span>Your vested contributions remain 100% yours</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                        <span>Employer matching contributions (if vested) are also protected</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                        <span>You can typically roll over to an IRA or new employer plan</span>
                                    </li>
                                </ul>
                            </div>

                            <h3>The Exception: Company Stock</h3>
                            <p>
                                The one major risk is if your 401(k) is heavily invested in your employer&apos;s stock. When Enron collapsed, employees lost both their jobs AND their retirement savings because their 401(k)s were filled with Enron stock.
                            </p>
                            <p>
                                <strong>The lesson:</strong> Diversify. Never hold more than 10-15% of your retirement in any single company&apos;s stock, especially your employer.
                            </p>
                        </section>

                        {/* Broker/Custodian Failure */}
                        <section id="broker-failure" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-slate-100 rounded-lg text-slate-500">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">What If Your Custodian or Broker Fails?</h2>
                            </div>
                            <p>
                                If the brokerage firm managing your 401(k) goes bankrupt, here&apos;s what happens:
                            </p>

                            <div className="space-y-4 not-prose my-8">
                                <div className="flex gap-4 p-5 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-[#000080] flex items-center justify-center font-bold flex-shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">SIPC Steps In</h4>
                                        <p className="text-sm text-slate-500 mt-1">SIPC works to recover and return customer assets. Most recoveries happen within 1-3 months.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-[#000080] flex items-center justify-center font-bold flex-shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Assets Are Transferred</h4>
                                        <p className="text-sm text-slate-500 mt-1">Your securities are typically transferred to another brokerage firm. The actual stocks and bonds still exist - they just change custodians.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-[#000080] flex items-center justify-center font-bold flex-shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Coverage Fills Gaps</h4>
                                        <p className="text-sm text-slate-500 mt-1">If securities are missing (fraud), SIPC coverage of up to $500,000 helps make you whole.</p>
                                    </div>
                                </div>
                            </div>

                            <p>
                                Historically, brokerage failures rarely result in customer losses. The bigger risk by far is market losses - which no insurance covers.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-[#000080] text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-[#000080]">Want Something You Can Actually Touch?</h3>
                                <p className="mb-6 text-gray-200">A Gold IRA holds real gold in a vault with your name on it. Not paper, not promises, not computer numbers.</p>
                                <LeadCaptureButton variant="default" source="is-401k-fdic-insured" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-lg font-semibold inline-flex items-center">
                                    Learn About Gold IRAs <ArrowRight className="ml-2 w-4 h-4" />
                                </LeadCaptureButton>
                            </div>
                        </div>

                        {/* What IS at Risk */}
                        <section id="market-risk" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-700">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">What IS Actually at Risk: Market Losses</h2>
                            </div>
                            <p>
                                Here&apos;s the uncomfortable truth that no one likes to discuss: <strong>The biggest risk to your 401(k) has zero insurance protection.</strong>
                            </p>
                            <p>
                                Market losses - when stocks, bonds, or mutual funds decline in value - are not covered by any insurance or protection scheme. This is the risk that actually destroys retirement savings.
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Market Event</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">S&P 500 Loss</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">$500k 401(k) Becomes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="p-4 text-[#000080]">Dot-Com Crash (2000-02)</td>
                                            <td className="p-4 text-red-700 font-semibold">-49%</td>
                                            <td className="p-4 text-red-700 font-semibold">$255,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#000080]">Financial Crisis (2008)</td>
                                            <td className="p-4 text-red-700 font-semibold">-57%</td>
                                            <td className="p-4 text-red-700 font-semibold">$215,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#000080]">COVID Crash (2020)</td>
                                            <td className="p-4 text-red-700 font-semibold">-34%</td>
                                            <td className="p-4 text-red-700 font-semibold">$330,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#000080]">2022 Bear Market</td>
                                            <td className="p-4 text-red-700 font-semibold">-25%</td>
                                            <td className="p-4 text-red-700 font-semibold">$375,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Callout type="warning" title="The Real Retirement Killer">
                                For retirees, a major market crash early in retirement can be devastating. This is called &quot;sequence of returns risk&quot; - even if markets recover eventually, retirees who withdraw during the downturn may never recover. Learn more in our <Link href="/learn/sequence-of-returns-risk">sequence of returns guide</Link>.
                            </Callout>

                            <p>
                                Neither FDIC, SIPC, nor ERISA protect against market losses. This is why true diversification - owning assets that don&apos;t move with the stock market - matters so much.
                            </p>
                        </section>

                        {/* Gold IRA Protection */}
                        <section id="gold-ira" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-[#B22234]">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Gold IRA: Tangible Asset Protection</h2>
                            </div>
                            <p>
                                A Gold IRA offers something that paper investments cannot: ownership of a physical, tangible asset that exists outside the paper financial system.
                            </p>

                            <div className="bg-amber-500/10 rounded-2xl p-6 border border-amber-500/20 not-prose my-8">
                                <h4 className="font-bold text-[#B22234] text-xl mb-4">How Gold Provides Different Protection</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-2">
                                            <ShieldCheck className="w-5 h-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                                            <span className="text-amber-200">Physical asset you actually own</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <ShieldCheck className="w-5 h-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                                            <span className="text-amber-200">No counterparty risk</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <ShieldCheck className="w-5 h-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                                            <span className="text-amber-200">Historically rises during market crashes</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-2">
                                            <ShieldCheck className="w-5 h-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                                            <span className="text-amber-200">Held in IRS-approved depositories</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <ShieldCheck className="w-5 h-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                                            <span className="text-amber-200">Same tax advantages as traditional IRA</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <ShieldCheck className="w-5 h-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                                            <span className="text-amber-200">Can rollover from existing 401(k) tax-free</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3>Gold During Market Crashes</h3>
                            <p>
                                While stocks lost 50%+ during the 2008 financial crisis, gold actually gained value. This inverse relationship is what makes gold effective as portfolio insurance:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Crisis</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">S&P 500</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Gold</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="p-4 text-[#000080]">2008 Financial Crisis</td>
                                            <td className="p-4 text-red-700 font-semibold">-37%</td>
                                            <td className="p-4 text-green-700 font-semibold">+5.5%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#000080]">2020 COVID Crash</td>
                                            <td className="p-4 text-red-700 font-semibold">-34%</td>
                                            <td className="p-4 text-green-700 font-semibold">+25% (full year)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#000080]">2022 Bear Market</td>
                                            <td className="p-4 text-red-700 font-semibold">-18%</td>
                                            <td className="p-4 text-[#B22234] font-semibold">+0.4%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                A <Link href="/what-is-a-gold-ira">Gold IRA</Link> allows you to hold IRS-approved physical gold, silver, platinum, and palladium in a tax-advantaged retirement account. You can roll over funds from an existing 401(k) without triggering taxes or penalties.
                            </p>

                            <Callout type="tip" title="Diversification Is Key">
                                We don&apos;t suggest putting all your retirement in gold. But allocating 10-20% to precious metals provides meaningful protection against the market losses that no insurance covers.
                            </Callout>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Is my IRA FDIC insured?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        No, traditional IRAs and Roth IRAs are generally NOT FDIC insured. FDIC insurance only covers deposit accounts at banks (checking, savings, CDs). However, if your IRA holds cash in a bank deposit account (like an IRA CD or IRA savings), that portion may be FDIC insured up to $250,000. Investment holdings in your IRA (stocks, mutual funds, ETFs) are not FDIC insured but may be covered by SIPC if your brokerage fails.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">What happens to my 401k if the stock market crashes?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        If the stock market crashes, your 401(k) will likely lose value proportional to your stock exposure. Neither FDIC nor SIPC insurance protects against market losses - they only protect against institutional failures. This is why diversification into non-correlated assets like gold is important. A 50% market crash means a 50% loss in your stock-heavy 401(k), which could take years to recover.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Is my 401k safe from bank failure?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        Your 401(k) is generally safe from bank failure because 401(k) assets are not held by banks - they&apos;re held in trust by custodians and are separate from the bank&apos;s assets. If the custodian or brokerage firm fails, SIPC provides up to $500,000 in protection ($250,000 for cash). Your 401(k) is also protected by ERISA, which requires that retirement funds be held separately from employer and custodian assets.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">What protects my 401k from creditors?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        ERISA provides strong creditor protection for 401(k) accounts. In most cases, creditors and lawsuit judgments cannot touch your 401(k) savings. Even in bankruptcy, your 401(k) is generally protected. However, there are exceptions: the IRS can collect back taxes from your 401(k), and qualified domestic relations orders (QDROs) in divorce cases can divide your retirement assets.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Is a Gold IRA safer than a 401k?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        A Gold IRA offers different protection than a traditional 401(k). Gold is a tangible asset with no counterparty risk - it can&apos;t go bankrupt. It also tends to rise when stocks fall, providing crash protection that stock-based 401(k)s don&apos;t have. However, gold doesn&apos;t pay dividends and can be volatile in the short term. The safest approach is diversification: holding both traditional investments and precious metals for balanced protection.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-[#000080] relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-[#000080]">Add Real Protection to What You&apos;ve Built</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">You didn&apos;t work 30 years to watch a crash wipe it out. Physical gold doesn&apos;t care what the stock market does.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <LeadCaptureButton variant="default" source="is-401k-fdic-insured" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center">
                                        Get Your Free Gold IRA Guide <ArrowRight className="ml-2 w-5 h-5" />
                                    </LeadCaptureButton>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-[#000080] hover:bg-slate-200">
                                        <Link href="/what-is-a-gold-ira">Learn About Gold IRAs</Link>
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
                    <AugustaCTA variant="footer" trackSource="is-401k-fdic-insured" />
                </Container>
            </section>
        </main>
    );
}
