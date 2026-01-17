import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { DollarSign, Wallet, TrendingUp, AlertTriangle, ArrowRight, Layers } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Gold IRA Minimum Investment: How Much Do You Need? (2026)",
    description: "What is the minimum amount to start a Gold IRA? We break down the entry requirements for top companies, starting from $10,000 to $50,000+.",
};

const takeaways = [
    "Most reputable Gold IRA companies require a minimum of $10,000 to $50,000.",
    "Small account balances (<$25k) can be eaten up by annual flat fees.",
    "Some companies specialize in lower minimums ($10k-$20k), while others focus on high-net-worth ($50k+).",
    "Rolling over an existing 401(k) is the most common way to meet these minimums.",
    "Avoid 'no minimum' companies—they often have hidden fees or poor service.",
    "Investing 10-20% of your portfolio is the standard recommendation."
];

const tocItems = [
    { id: "typical-minimums", label: "Typical Minimums" },
    { id: "why-minimums-exist", label: "Why Minimums Exist" },
    { id: "small-account-problem", label: "The Small Account Problem" },
    { id: "company-comparison", label: "Company Comparison" },
    { id: "alternatives", label: "Alternatives for Small Investors" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Gold IRA Minimum Investment Requirements",
            "description": "What is the minimum amount to start a Gold IRA? We break down the entry requirements for top companies, starting from $10,000 to $50,000+.",
            "image": "https://richdadretirement.com/images/minimum-investment-cover.jpg",
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
                    "name": "can I start a Gold IRA with $1,000?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Generally, no. Most custodians have minimum fees ($150-$250/year) that make small accounts inefficient. A $1,000 account paying $200 in fees loses 20% immediately. For amounts under $10,000, consider buying silver coins directly (outside an IRA) or a Gold ETF."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the average Gold IRA minimum?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The industry average is around $25,000 to $50,000. This ensures the account size is large enough to absorb annual storage and custodian fees without significantly impacting returns."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I combine multiple old 401(k)s to meet the minimum?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! You can roll over funds from multiple sources (e.g., an old 401(k) from a previous job + an existing IRA) into a single new Gold IRA to meet the minimum investment requirement."
                    }
                }
            ]
        }
    ]
};

export default function GoldIraMinimumInvestmentPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-background-subtle py-16 border-b border-primary/5">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Investment Guide
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            Gold IRA Minimum Investment
                        </h1>
                        <p className="text-xl text-text-muted leading-relaxed">
                            How much do you really need to get started? We decode the entry costs and help you find a provider that fits your budget.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                        <KeyTakeaways items={takeaways} />

                        <p className="lead">
                            One of the first questions investors ask is: <strong>"How much money do I need?"</strong> Unlike opening a Robinhood account with $5, opening a Gold IRA involves physical storage, security, and IRS compliance, which creates a higher barrier to entry.
                        </p>

                        {/* Typical Minimums */}
                        <section id="typical-minimums" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                                    <Wallet className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Typical Industry Minimums</h2>
                            </div>
                            <p>
                                Most reputable brokers fall into three tiers:
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl border border-gray-200 bg-white">
                                    <h4 className="font-bold text-gray-900 mb-2">Entry Level</h4>
                                    <div className="text-3xl font-bold text-primary mb-2">$10k - $25k</div>
                                    <p className="text-sm text-gray-600">Best for first-time investors or partial rollovers.</p>
                                </div>
                                <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                                    <h4 className="font-bold text-primary mb-2">Standard</h4>
                                    <div className="text-3xl font-bold text-primary mb-2">$50,000</div>
                                    <div className="inline-block px-2 py-1 bg-secondary text-white text-xs font-bold rounded">Most Popular</div>
                                    <p className="text-sm text-gray-600 mt-2">Access to better pricing and promotions (like waived fees).</p>
                                </div>
                                <div className="p-6 rounded-xl border border-gray-200 bg-white">
                                    <h4 className="font-bold text-gray-900 mb-2">Premium</h4>
                                    <div className="text-3xl font-bold text-primary mb-2">$100,000+</div>
                                    <p className="text-sm text-gray-600">VIP service, lowest premiums, and dedicated account managers.</p>
                                </div>
                            </div>
                        </section>

                        {/* Why Minimums Exist */}
                        <section id="why-minimums-exist" className="scroll-mt-32">
                            <h2>Why Do Minimums Exist?</h2>
                            <p>
                                Gold IRA companies aren't just being difficult. Setting up a self-directed IRA involves significant administrative work:
                            </p>
                            <ul>
                                <li>Opening a trust account</li>
                                <li>Coordinating with the custodian</li>
                                <li>Arranging secure transport</li>
                                <li>Allocating vault space</li>
                            </ul>
                            <p>
                                Companies set minimums to ensure they can cover these costs while providing high-quality service.
                            </p>
                        </section>

                        {/* Small Account Problem */}
                        <section id="small-account-problem" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-50 rounded-lg text-red-600">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The "Fees Trap" for Small Accounts</h2>
                            </div>
                            <p>
                                Why shouldn't you open a $5,000 Gold IRA? <strong>Math.</strong>
                            </p>
                            <p>
                                Most accounts have valid flat fees of ~$200/year for storage and maintenance.
                            </p>
                            <div className="not-prose my-6 p-6 bg-red-50 rounded-xl border border-red-100">
                                <p className="font-bold text-red-800">Fee Impact Example:</p>
                                <ul className="mt-2 space-y-2 text-red-700">
                                    <li><strong>$100,000 Account:</strong> $200 fee = 0.2% (Negligible)</li>
                                    <li><strong>$50,000 Account:</strong> $200 fee = 0.4% (Reasonable)</li>
                                    <li><strong>$5,000 Account:</strong> $200 fee = 4.0% (HIGH)</li>
                                </ul>
                                <p className="mt-4 text-sm text-red-600">
                                    If your account loses 4% strictly to fees every year, gold would need to skyrocket just for you to break even. This is why we recommend at least $25,000.
                                </p>
                            </div>
                        </section>

                        {/* Company Comparison */}
                        <section id="company-comparison" className="scroll-mt-32">
                            <h2>How to Qualify</h2>
                            <p>
                                The easiest way to hit the minimum is via a <strong>Rollover</strong>.
                            </p>
                            <p>
                                Most people don't have $50,000 sitting in cash. But they often have $50,000 sitting in an old 401(k) from a previous job. Moving receiving that money into a Gold IRA is tax-free and instantly meets the minimum investment requirements.
                            </p>
                        </section>

                        {/* Alternatives */}
                        <section id="alternatives" className="scroll-mt-32">
                            <h2>Alternatives for Investors Under $10k</h2>
                            <p>
                                If you don't meet the minimums, don't force it. Consider:
                            </p>
                            <ul>
                                <li><strong>Gold ETFs:</strong> Good for exposure to price, though you don't own the metal.</li>
                                <li><strong>Physical Cash Purchase:</strong> Buy silver coins and keep them in a home safe (NOT in an IRA).</li>
                                <li><strong>Wait and Save:</strong> Wait until your retirement account grows larger before rolling over.</li>
                            </ul>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Check Your Eligibility</h3>
                                <p className="mb-6 text-gray-200">Take our quick quiz to see if you qualify for a Gold IRA and find a company that matches your investment amount.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Check Eligibility Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Minimum Investment FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                                    <details key={index} className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                            <h4 className="text-lg font-bold">{faq.name}</h4>
                                            <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                                <DollarSign className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-gray-700">
                                            {faq.acceptedAnswer.text}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <AuthorBox />

                    </article>
                </div>
            </Container>
        </main>
    );
}
