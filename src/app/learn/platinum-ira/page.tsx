import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Gem, TrendingUp, AlertTriangle, ArrowRight, BarChart3, Factory } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Platinum IRA: A Complete Guide to Investing in White Gold (2026)",
    description: "Looking beyond gold and silver? Learn how a Platinum IRA works, the investment potential of 'white gold,' and IRS-approved platinum coins and bars.",
};

const takeaways = [
    "Platinum is 30x rarer than gold, offering high growth potential.",
    "It is a critical industrial metal (auto catalysts), meaning demand is tied to the economy.",
    "You can hold platinum in the same self-directed IRA as gold and silver.",
    "IRS purity requirement for platinum is very high: .9995 fine.",
    "Platinum is often more volatile than gold, making it better for growth than stability.",
    "American Platinum Eagles are the most popular choice for IRAs."
];

const tocItems = [
    { id: "what-is-platinum", label: "Why Platinum?" },
    { id: "investment-case", label: "The Investment Case" },
    { id: "platinum-vs-gold", label: "Platinum vs. Gold" },
    { id: "rules", label: "IRS Rules for Platinum" },
    { id: "approved-coins", label: "Approved Coins" },
    { id: "risks", label: "Risks to Consider" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Platinum IRA: Investing in White Gold",
            "description": "Looking beyond gold and silver? Learn how a Platinum IRA works, the investment potential of 'white gold,' and IRS-approved platinum coins and bars.",
            "image": "https://richdadretirement.com/images/platinum-ira-cover.jpg",
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
                    "name": "Why is platinum sometimes cheaper than gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Historically, platinum traded at a premium to gold. However, it is heavily dependent on the automotive industry (catalytic converters). When auto demand drops, platinum drops. Gold is a monetary metal, so it holds value better during economic slowdowns."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is platinum a good retirement investment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It can be an excellent diversifier. Because it is so rare and vital to industry, supply shocks can cause massive price spikes. However, it is more volatile than gold, so it should be a smaller percentage of your portfolio (e.g., 5-10%)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I add platinum to my existing Gold IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. A 'Gold IRA' is just a marketing term for a self-directed Precious Metals IRA. You can hold gold, silver, platinum, and palladium in the exact same account simultaneously."
                    }
                }
            ]
        }
    ]
};

export default function PlatinumIraPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-background-subtle py-16 border-b border-primary/5">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Precious Metals Guide
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            Platinum IRA Investment Guide
                        </h1>
                        <p className="text-xl text-text-muted leading-relaxed">
                            It's 30 times rarer than gold and essential to modern industry. Here's why smart investors are adding "white gold" to their retirement portfolios.
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
                            When people think of precious metals, they think of gold and silver. But <strong>Platinum</strong>—often called "the rich man's gold"—offers a unique investment opportunity that combines the scarcity of precious metals with the utility of industrial commodities.
                        </p>

                        {/* What is Platinum */}
                        <section id="what-is-platinum" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                                    <Gem className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Why Platinum?</h2>
                            </div>
                            <p>
                                Platinum is incredibly rare. All the platinum ever mined would fit into your living room. In contrast, all the gold would fill three Olympic-sized swimming pools.
                            </p>
                        </section>

                        {/* Investment Case */}
                        <section id="investment-case" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The Bull Case for Platinum</h2>
                            </div>
                            <p>
                                Platinum is primarily an industrial metal, used heavily in:
                            </p>
                            <ul>
                                <li>Automotive catalytic converters (reduces emissions)</li>
                                <li>Jewelry (high durability)</li>
                                <li>Electronics and medical devices</li>
                            </ul>
                            <p>
                                <strong>The Supply Crunch:</strong> Most platinum comes from South Africa and Russia. Geopolitical instability in these regions can cut off supply overnight, leading to explosive price growth.
                            </p>
                        </section>

                        {/* Platinum vs Gold */}
                        <section id="platinum-vs-gold" className="scroll-mt-32">
                            <h2>Platinum vs. Gold</h2>
                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Feature</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Gold</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Platinum</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Primary Use</td>
                                            <td className="p-4 text-slate-400">Monetary / Investment</td>
                                            <td className="p-4 text-slate-400">Industrial / Auto</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Economic Sensitivity</td>
                                            <td className="p-4 text-slate-400">Counter-cyclical (Safe Haven)</td>
                                            <td className="p-4 text-slate-400">Pro-cyclical (Grows with Economy)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Volatility</td>
                                            <td className="p-4 text-slate-400">Low/Moderate</td>
                                            <td className="p-4 text-slate-400">High</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Rules */}
                        <section id="rules" className="scroll-mt-32">
                            <h2>IRS Rules for Platinum</h2>
                            <p>
                                The IRS is stricter with platinum than gold. To be eligible for an IRA, platinum coins and bars must be <strong>.9995 fineness (99.95% pure)</strong>.
                            </p>
                        </section>

                        {/* Approved Coins */}
                        <section id="approved-coins" className="scroll-mt-32">
                            <h2>Approved Platinum Investments</h2>
                            <p>
                                Common IRS-approved choices include:
                            </p>
                            <ul>
                                <li>American Platinum Eagle Coins</li>
                                <li>Canadian Platinum Maple Leaf Coins</li>
                                <li>Australian Platinum Koala/Platypus Coins</li>
                                <li>Isle of Man Noble Coins</li>
                                <li>PAMP Suisse Platinum Bars</li>
                            </ul>
                        </section>

                        {/* Risks */}
                        <section id="risks" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The Risks</h2>
                            </div>
                            <p>
                                Because platinum is an industrial metal, it suffers during recessions when car manufacturing slows down. Gold tends to perform <i>better</i> during recessions. Therefore, platinum should be viewed as a <strong>growth play</strong> within a precious metals portfolio, not just a safety play.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Add Platinum to Your Portfolio</h3>
                                <p className="mb-6 text-gray-200">Find a Gold IRA company that offers a wide selection of IRS-approved platinum coins and bars.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find a Platinum Dealer <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Platinum IRA FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                                    <details key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                            <h4 className="text-lg font-bold">{faq.name}</h4>
                                            <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                                <Factory className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-slate-400">
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

            {/* CTA Section */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <AugustaCTA variant="footer" />
                </Container>
            </section>
        </main>
    );
}
