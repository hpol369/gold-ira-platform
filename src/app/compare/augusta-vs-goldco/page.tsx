import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, ComparisonRow } from "@/components/compare/ComparisonTable";
import { VerdictBox } from "@/components/compare/VerdictBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
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
        <main className="min-h-screen bg-white">
            <SchemaScript schema={schema} />
            <Navbar />
            {/* Header */}
            <header className="bg-slate-50 border-b border-slate-200 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#000080]-dark/50" />
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-100 border border-slate-200 text-sm font-semibold text-[#B22234] mb-6">
                        Industry Titans Clash
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Augusta Precious Metals vs. Goldco
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4">
                        You&apos;ve worked too hard to trust your savings to the wrong company. These are the two names you&apos;ll hear the most&mdash;here&apos;s the honest comparison.
                    </p>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        For someone with $500k built over 30 years, what matters isn&apos;t flashy ads or celebrity endorsements. It&apos;s complaint history, how they treat customers when problems arise, and whether they&apos;ll be straight with you.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 max-w-none">

                        <p className="lead">
                            Let&apos;s cut through the noise. If you&apos;ve been researching Gold IRAs, you&apos;ve probably seen these two names everywhere: <strong>Augusta Precious Metals</strong> and <strong>Goldco</strong>.
                        </p>

                        <p>
                            Both have A+ BBB ratings and thousands of positive reviews. But for someone who&apos;s spent decades building a $500k nest egg, the real question isn&apos;t &quot;which has better marketing?&quot;&mdash;it&apos;s &quot;which one can I actually trust with my life&apos;s savings?&quot;
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
                                Here&apos;s what matters most: Augusta has <strong>zero complaints at the BBB</strong>. In an industry where some companies rack up complaints like parking tickets, that track record says something.
                            </p>
                            <p>
                                Their approach is different. Before you move a dime, they want you to actually understand what you&apos;re doing. They set up a one-on-one education session with their Director of Education, Devlyn Steele (Harvard-trained economist). It&apos;s not a hard sell&mdash;it&apos;s real information about the economy, inflation, and whether gold makes sense for YOUR situation.
                            </p>
                            <p>
                                The honest downside? That $50,000 minimum is steep. If you&apos;re looking to roll over less than that, Augusta isn&apos;t going to work for you.
                            </p>
                            <Button variant="outline" asChild className="mr-4">
                                <Link href="/reviews/augusta-precious-metals">Read Full Review</Link>
                            </Button>
                        </section>

                        {/* Goldco Overview */}
                        <section id="goldco-overview" className="scroll-mt-32">
                            <h2>Goldco Overview</h2>
                            <p>
                                Goldco is the biggest name in the business. They&apos;ve handled <strong>billions</strong> in precious metals rollovers. That kind of track record means something when you&apos;re trusting them with your retirement.
                            </p>
                            <p>
                                The practical advantages: lower minimum ($25,000 vs Augusta&apos;s $50,000), promotions that can get you up to 10% in free silver, and a buyback guarantee when you need to sell. For someone with a $250k-$400k 401k who wants to move part of it, that lower minimum matters.
                            </p>
                            <p>
                                What to expect: Goldco has more of a traditional sales approach. You&apos;ll get follow-up calls. Some folks appreciate the attention&mdash;they want someone checking in. Others find it pushy. Know yourself.
                            </p>
                            <Button variant="outline" asChild className="mr-4">
                                <Link href="/reviews/goldco">Read Full Review</Link>
                            </Button>
                        </section>

                        {/* Fees */}
                        <section id="fees" className="scroll-mt-32">
                            <h2>Fees & Minimums</h2>
                            <p>
                                Let&apos;s talk real numbers. When you&apos;re moving $500k of your life&apos;s savings, you need to know exactly what you&apos;re paying:
                            </p>
                            <div className="not-prose my-8 overflow-x-auto">
                                <table className="w-full text-left border-collapse bg-white shadow-sm rounded-xl border border-slate-200">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">Fee Type</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">Augusta</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">Goldco</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-600">
                                        <tr><td className="p-4 font-medium">Minimum Investment</td><td className="p-4">$50,000</td><td className="p-4">$25,000</td></tr>
                                        <tr><td className="p-4 font-medium">Setup Fee</td><td className="p-4">$50 (often waived)</td><td className="p-4">$50 (often waived)</td></tr>
                                        <tr><td className="p-4 font-medium">Annual Storage</td><td className="p-4">~$100-$150 flat</td><td className="p-4">Scaled by account size</td></tr>
                                        <tr><td className="p-4 font-medium">First Year Fees</td><td className="p-4">Usually waived</td><td className="p-4">Usually waived</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                <strong>The bottom line on fees:</strong> If you&apos;re rolling over $100k or more, Augusta&apos;s flat fee usually saves you money over time. If you&apos;ve got between $25k and $50k to move, Goldco is your only choice here&mdash;Augusta won&apos;t take accounts that small. Neither situation is bad; just pick the one that fits what you have.
                            </p>
                        </section>

                        {/* Pros & Cons */}
                        <section id="pros-cons" className="scroll-mt-32">
                            <h2>Pros & Cons</h2>
                            <div className="grid md:grid-cols-2 gap-8 not-prose">
                                <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/30">
                                    <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Augusta Pros
                                    </h3>
                                    <ul className="space-y-2 text-green-800">
                                        <li>• Zero BBB complaints history</li>
                                        <li>• Incredible educational materials</li>
                                        <li>• Lifetime account support</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/30">
                                    <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Goldco Pros
                                    </h3>
                                    <ul className="space-y-2 text-blue-800">
                                        <li>• Lower minimum ($25k)</li>
                                        <li>• Great buyback guarantee</li>
                                        <li>• Huge promotional silver giveaways</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="my-12 bg-[#000080] rounded-2xl p-8 text-slate-900 text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">Still Undecided?</h3>
                                <p className="mb-6 text-slate-600">Take our 30-second quiz to see which company matches your investment goals.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find My Perfect Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>

            {/* Augusta CTA */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Ready to Work with the Best?"
                        subheadline="Get your free Gold IRA guide from Augusta - rated #1 for transparency and education."
                        trackSource="compare-augusta-vs-goldco"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
