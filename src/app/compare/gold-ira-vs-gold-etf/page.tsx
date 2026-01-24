import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, ComparisonRow } from "@/components/compare/ComparisonTable";
import { VerdictBox } from "@/components/compare/VerdictBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { Metadata } from "next";
import { ArrowRight, TrendingUp, ShieldCheck, AlertTriangle, DollarSign, Lock, BarChart3, Scale } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Gold IRA vs. Gold ETF: Real Gold vs. Paper Assets (2026 Guide)",
    description: "Compare Physical Gold IRAs vs Gold ETFs. Discover the hidden risks of 'paper gold' and why holding the real thing offers superior protection.",
};

const comparisonRows: ComparisonRow[] = [
    { feature: "Ownership", optionA: "Physical Gold (Direct Ownership)", optionB: "Paper Share (Claim on Trust)", winner: "A" },
    { feature: "Tangibility", optionA: "Real Coins & Bars", optionB: "Digital Entry Only", winner: "A" },
    { feature: "Counterparty Risk", optionA: "Zero (You own it)", optionB: "High (Reliance on banks/trusts)", winner: "A" },
    { feature: "Liquidity", optionA: "Moderate (Must ship/sell)", optionB: "High (Instant stock trade)", winner: "B" },
    { feature: "Fees", optionA: "Setup + Storage Fees", optionB: "Expense Ratio (0.25-0.40%)", winner: "B" },
    { feature: "Crisis Protection", optionA: "Excellent (Independent asset)", optionB: "Moderate (System reliant)", winner: "A" },
    { feature: "Tax Benefits", optionA: "Tax-Deferred/Tax-Free (IRA)", optionB: "Capital Gains (Collectibles Tax)", winner: "A" },
    { feature: "Minimum Investment", optionA: "$5,000 - $25,000+", optionB: "Price of 1 Share (~$200)", winner: "B" }
];

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "comparison", label: "Side-by-Side Comparison" },
    { id: "what-is-gold-ira", label: "What is a Gold IRA?" },
    { id: "what-is-gold-etf", label: "What is a Gold ETF?" },
    { id: "key-differences", label: "Key Differences" },
    { id: "paper-vs-physical", label: "Paper vs. Physical Risks" },
    { id: "tax-implications", label: "Tax Implications" },
    { id: "which-is-right", label: "Which is Right for You?" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Gold IRA vs. Gold ETF: Real Gold vs. Paper Assets",
            "description": "Compare Physical Gold IRAs vs Gold ETFs. Discover the hidden risks of 'paper gold' and why holding the real thing offers superior protection.",
            "image": "https://richdadretirement.com/images/gold-ira-vs-etf-cover.jpg",
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
            "datePublished": "2026-01-17",
            "dateModified": "2026-01-17"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is a Gold ETF safer than a Gold IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For convenience, ETFs are easier. But for safety, a Gold IRA is superior. With an ETF, you own a paper claim (liability) of a trust that holds gold. With a Gold IRA, you own the actual physical metal. In a systemic financial crisis, paper claims can fail; physical gold cannot."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do Gold ETFs actually hold gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most major Gold ETFs (like GLD) do hold gold bars in vaults, but you as a shareholder have no claim to specific bars and cannot take delivery of them. You are essentially trusting the custodian and multiple counterparties. Some ETFs don't hold gold at all, using derivatives instead."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which has better tax benefits?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A Gold IRA offers significant tax advantages (tax-deferred or tax-free growth). Gold ETFs held in a standard brokerage account are subject to capital gains taxes, often at the higher 'collectibles' rate of up to 28%, not the standard long-term capital gains rate."
                    }
                }
            ]
        }
    ]
};

export default function GoldIraVsGoldEtfPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-secondary mb-6">
                        Investment Showdown
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Gold IRA vs. Gold ETF
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Do you want to own the asset or just track the price? We break down the critical differences between holding physical metal and buying "paper gold."
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-invert prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

                        <p className="lead">
                            Investors often ask: "Why pay for storage and setup fees with a Gold IRA when I can just buy GLD or IAU stock instantly?" It's a fair question. The answer comes down to one fundamental difference: <strong>Counterparty Risk.</strong>
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="Gold IRA (For Insurance)"
                                summary="If you want to trade short-term price movements, use an ETF. But if you want true wealth insurance, protection against systemic collapse, and zero counterparty risk, you must hold physical metal in a Gold IRA."
                                bestFor="Long-term investors seeking genuine crisis protection."
                            />
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2>Side-by-Side Comparison</h2>
                            <p>
                                Here is how physical ownership stacks up against paper proxies:
                            </p>
                            <ComparisonTable
                                optionAName="Gold IRA (Physical)"
                                optionBName="Gold ETF (Paper)"
                                rows={comparisonRows}
                            />
                        </section>

                        {/* What is Gold IRA */}
                        <section id="what-is-gold-ira" className="scroll-mt-32">
                            <h2>What is a Gold IRA?</h2>
                            <p>
                                A Gold IRA is a self-directed retirement account that holds tangible, physical precious metals in an IRS-approved depository. The key distinction is <strong>title ownership</strong>. The gold bars and coins belong to you.
                            </p>
                        </section>

                        {/* What is Gold ETF */}
                        <section id="what-is-gold-etf" className="scroll-mt-32">
                            <h2>What is a Gold ETF?</h2>
                            <p>
                                A Gold ETF (Exchange Traded Fund) is a financial instrument that tracks the price of gold. When you buy a share of GLD, you do not own gold. You own a share of a trust that owns gold.
                            </p>
                            <Callout type="warning" title="Read the Prospectus">
                                "Gold shares represent a fractional undivided beneficial interest in the Trust's net assets." You are a shareholder, not a gold owner. You cannot redeem shares for physical metal (unless you are an 'Authorized Participant' dealing in millions of dollars).
                            </Callout>
                        </section>

                        {/* Key Differences */}
                        <section id="key-differences" className="scroll-mt-32">
                            <h2>Key Differences</h2>
                            <ul>
                                <li><strong>Asset Control:</strong> Gold IRA = You control it. ETF = Trust controls it.</li>
                                <li><strong>Fees:</strong> Gold IRA = Flat annual fees. ETF = Percentage ratio (eats into equity over time).</li>
                                <li><strong>Trading:</strong> Gold IRA = Slower to liquidate. ETF = Instant during market hours.</li>
                            </ul>
                        </section>

                        {/* Paper vs Physical Risks */}
                        <section id="paper-vs-physical" className="scroll-mt-32">
                            <h2>Paper vs. Physical: The Hidden Risks</h2>
                            <p>
                                In normal markets, ETFs work fine. In a crisis, they introduce <strong>counterparty risk</strong>. If the financial system freezes, the custodian fails, or the market closes, your "paper gold" is inaccessible. Physical gold has no counterparty risk.
                            </p>
                        </section>

                        {/* Tax Implications */}
                        <section id="tax-implications" className="scroll-mt-32">
                            <h2>Tax Implications</h2>
                            <p>
                                <strong>Gold IRA:</strong> Grows tax-deferred (Traditional) or tax-free (Roth).<br />
                                <strong>Gold ETF:</strong> If held in a taxable account, gains are taxed as "collectibles" (max 28%), not favorable capital gains rates.
                            </p>
                        </section>

                        {/* Which is Right */}
                        <section id="which-is-right" className="scroll-mt-32">
                            <h2>Which is Right for You?</h2>
                            <p>
                                <strong>Choose a Gold ETF if:</strong>
                                <br />- You are trading short-term (days/weeks).
                                <br />- You have a very small amount to invest (under $5,000).
                                <br />- You don't care about insurance against systemic collapse.
                            </p>
                            <p>
                                <strong>Choose a Gold IRA if:</strong>
                                <br />- You are investing for retirement (10+ years).
                                <br />- You want to protect wealth from currency collapse.
                                <br />- You demand legal title to your assets.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Secure Your Retirement with Real Assets</h3>
                                <p className="mb-6 text-gray-200">Don't rely on paper promises. See which Gold IRA companies offer the best security and lowest fees.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find My Best Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>
                            {/* FAQs will serve from Schema but displayed here for readers */}
                            <div className="space-y-4 not-prose">
                                {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                                    <details key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                            <h4 className="text-lg font-bold">{faq.name}</h4>
                                            <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                                <Scale className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-slate-300">
                                            {faq.acceptedAnswer.text}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>

                    </article>
                </div>
            </Container>
        </main>
    );
}
