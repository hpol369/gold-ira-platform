import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, ComparisonRow } from "@/components/compare/ComparisonTable";
import { VerdictBox } from "@/components/compare/VerdictBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Augusta Precious Metals vs. Goldco: 2026 Comparison",
    description: "Augusta Precious Metals vs Goldco: We compare fees, minimums, complaints, and customer service to help you decide which Gold IRA company is right for you.",
};

const comparisonRows: ComparisonRow[] = [
    { feature: "Minimum Investment", optionA: "$50,000", optionB: "$25,000", winner: "B" },
    { feature: "BBB Rating", optionA: "A+", optionB: "A+", winner: "Tie" },
    { feature: "TrustPilot Score", optionA: "4.9/5", optionB: "4.8/5", winner: "A" },
    { feature: "Free Silver Promo", optionA: "No", optionB: "Up to 10%", winner: "B" },
    { feature: "1-on-1 Education", optionA: "Yes (Webinar w/ Harvard Economist)", optionB: "Yes (Standard Guide)", winner: "A" },
    { feature: "Fees", optionA: "Flat Fee usually waived 1st year", optionB: "Scaled fees based on account size", winner: "A" },
    { feature: "Buyback Program", optionA: "Yes, competitive", optionB: "Yes, guaranteed highest price", winner: "B" }
];

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "comparison", label: "Head-to-Head Comparison" },
    { id: "augusta-overview", label: "Augusta Precious Metals Overview" },
    { id: "goldco-overview", label: "Goldco Overview" },
    { id: "fees", label: "Fees & Minimums" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Augusta Precious Metals vs. Goldco: 2026 Comparison",
            "description": "Augusta Precious Metals vs Goldco: We compare fees, minimums, complaints, and customer service to help you decide which Gold IRA company is right for you.",
            "image": "https://richdadretirement.com/images/augusta-vs-goldco.jpg",
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
                    "name": "Which company has lower fees, Augusta or Goldco?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For larger accounts (over $100k), Augusta's flat-fee structure often works out cheaper. For smaller accounts ($25k-$50k), Goldco is the better option because Augusta doesn't accept accounts under $50k."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Augusta Precious Metals a reputable company?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Augusta is widely considered the 'Gold Standard' for transparency. They are famous for having zero BBB complaints since expected inception, which is unheard of in this industry."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Goldco offer a buyback program?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Goldco offers a 'Highest Price Buyback Guarantee,' meaning they will buy back your metals at the current market rate when you are ready to liquidate."
                    }
                }
            ]
        }
    ]
};

export default function AugustaVsGoldcoPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-secondary mb-6">
                        Industry Titans Clash
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Augusta Precious Metals vs. Goldco
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        The two heavyweights of the Gold IRA industry go head-to-head. Currently #1 and #2 on most review sites. Which one is actually better for YOU?
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
                            If you are doing your research on Gold IRAs, you have undoubtedly narrowed it down to these two: <strong>Augusta Precious Metals</strong> and <strong>Goldco</strong>.
                        </p>

                        <p>
                            Both are excellent. Both have A+ BBB ratings. Both have thousands of 5-star reviews. But they cater to slightly different investors.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="It Depends on Your Balance"
                                summary="If you have over $50,000 to invest, Augusta Precious Metals wins on education and transparency. If you have between $25,000 and $50,000, Goldco is your best choice (since Augusta requires $50k+)."
                                bestFor="High Net Worth (Augusta) vs Flexible Limits (Goldco)"
                            />
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2>Head-to-Head Comparison</h2>
                            <ComparisonTable
                                optionAName="Augusta Precious Metals"
                                optionBName="Goldco"
                                rows={comparisonRows}
                            />
                        </section>

                        {/* Augusta Overview */}
                        <section id="augusta-overview" className="scroll-mt-32">
                            <h2>Augusta Precious Metals Overview</h2>
                            <p>
                                Augusta is the &quot;Rolls-Royce&quot; of Gold IRA companies. They&apos;re famous for one thing above all else: <strong>zero complaints at the BBB</strong>. In an industry plagued by pushy salespeople and hidden fees, that&apos;s remarkable.
                            </p>
                            <p>
                                What makes them different? Their onboarding process. Before you invest a dime, they require you to watch a one-on-one webinar with Devlyn Steele, their Director of Education (and Harvard-trained economist). It&apos;s not a sales pitch—it&apos;s actual education about the economy, inflation, and why gold makes sense.
                            </p>
                            <p>
                                The downside? That $50,000 minimum is steep. If you don&apos;t have that much, Augusta isn&apos;t for you.
                            </p>
                            <Button variant="outline" asChild className="mr-4">
                                <Link href="/reviews/augusta-precious-metals">Read Full Review</Link>
                            </Button>
                        </section>

                        {/* Goldco Overview */}
                        <section id="goldco-overview" className="scroll-mt-32">
                            <h2>Goldco Overview</h2>
                            <p>
                                Goldco is the 800-pound gorilla of the Gold IRA industry. They&apos;ve placed <strong>billions</strong> in precious metals for customers and have endorsements from Sean Hannity and other major conservative figures.
                            </p>
                            <p>
                                Their big advantages? Lower minimum ($25,000 vs Augusta&apos;s $50,000), aggressive promotions (up to 10% in free silver on qualifying purchases), and a &quot;Highest Price Buyback Guarantee&quot; when you&apos;re ready to sell.
                            </p>
                            <p>
                                The trade-off is that Goldco has more of a &quot;sales&quot; culture than Augusta. Not bad—just more traditional. You&apos;ll get follow-up calls. Some people love the attention, others find it annoying.
                            </p>
                            <Button variant="outline" asChild className="mr-4">
                                <Link href="/reviews/goldco">Read Full Review</Link>
                            </Button>
                        </section>

                        {/* Fees */}
                        <section id="fees" className="scroll-mt-32">
                            <h2>Fees & Minimums</h2>
                            <p>
                                Here&apos;s where things get interesting:
                            </p>
                            <div className="not-prose my-8 overflow-x-auto">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Fee Type</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Augusta</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Goldco</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr><td className="p-4 font-medium">Minimum Investment</td><td className="p-4">$50,000</td><td className="p-4">$25,000</td></tr>
                                        <tr><td className="p-4 font-medium">Setup Fee</td><td className="p-4">$50 (often waived)</td><td className="p-4">$50 (often waived)</td></tr>
                                        <tr><td className="p-4 font-medium">Annual Storage</td><td className="p-4">~$100-$150 flat</td><td className="p-4">Scaled by account size</td></tr>
                                        <tr><td className="p-4 font-medium">First Year Fees</td><td className="p-4">Usually waived</td><td className="p-4">Usually waived</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                <strong>Bottom line:</strong> For accounts over $100k, Augusta&apos;s flat fee structure is usually cheaper. For accounts between $25k-$50k, Goldco wins by default since Augusta won&apos;t take you.
                            </p>
                        </section>

                        {/* Pros & Cons */}
                        <section id="pros-cons" className="scroll-mt-32">
                            <h2>Pros & Cons</h2>
                            <div className="grid md:grid-cols-2 gap-8 not-prose">
                                <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/30">
                                    <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Augusta Pros
                                    </h3>
                                    <ul className="space-y-2 text-green-300">
                                        <li>• Zero BBB complaints history</li>
                                        <li>• Incredible educational materials</li>
                                        <li>• Lifetime account support</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/30">
                                    <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Goldco Pros
                                    </h3>
                                    <ul className="space-y-2 text-blue-300">
                                        <li>• Lower minimum ($25k)</li>
                                        <li>• Great buyback guarantee</li>
                                        <li>• Huge promotional silver giveaways</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Still Undecided?</h3>
                                <p className="mb-6 text-gray-200">Take our 30-second quiz to see which company matches your investment goals.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find My Perfect Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>
        </main>
    );
}
