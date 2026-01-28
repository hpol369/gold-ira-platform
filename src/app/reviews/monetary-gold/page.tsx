import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { StickyMobileCTA } from "@/components/cta/StickyMobileCTA";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, XCircle, DollarSign, Star } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Monetary Gold Review 2026: Direct Dealer Pricing?",
    description: "Monetary Gold review. They claim to bypass the middleman. We analyze if their prices are actually lower and what their service is like.",
};

const companyData = {
    companyName: "Monetary Gold",
    rating: 4.5,
    minInvestment: "$5,000",
    fees: "$175/year",
    bbbRating: "A+",
    bestFor: "Budget-Conscious Investors",
    visitUrl: "https://monetarygold.com",
    pros: [
        "Low $5,000 minimum",
        "Claims direct dealer pricing",
        "Below-average annual fees",
        "A+ BBB rating"
    ],
    cons: [
        "Smaller company (less brand recognition)",
        "Basic website design",
        "Less educational content"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": { "@type": "Organization", "name": "Monetary Gold" },
    "reviewRating": { "@type": "Rating", "ratingValue": "4.5", "bestRating": "5" },
    "name": "Monetary Gold Review",
    "author": { "@type": "Organization", "name": "Rich Dad Retirement" }
};

const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "direct-dealer", label: "Direct Dealer Pricing" },
    { id: "fees", label: "Fees Breakdown" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "verdict", label: "Final Verdict" }
];

export default function MonetaryGoldReviewPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-slate-50 border-b border-slate-200 py-16">
                <Container>
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-[#B22234] text-[#B22234]' : i < 5 ? 'fill-slate-300 text-slate-300' : 'text-slate-300'}`} />
                                ))}
                            </div>
                            <span className="font-bold text-[#B22234] text-lg">4.5/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#000080]">Monetary Gold Review (2026)</h1>
                        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                            A smaller company claiming &quot;direct to the source&quot; pricing. Is cutting out the middleman actually saving you money?
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <div className="flex flex-col-reverse lg:flex-col gap-8">
                            <div className="block lg:hidden">
                                <ReviewSidebar {...companyData} />
                            </div>
                            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900 prose-a:text-[#B22234] max-w-none">

                                <section id="overview">
                                    <p className="lead">
                                        <strong>You&apos;ve noticed that TV commercials and celebrity endorsements cost money.</strong> And that money has to come from somewhere—usually higher prices for you. Monetary Gold&apos;s pitch is simple: they skip the advertising and pass the savings to customers.
                                    </p>
                                    <p>
                                        Sounds good in theory. But does it actually work? We looked at their fees, what customers say, and how they compare to the big names you see on TV.
                                    </p>
                                </section>

                                <section id="direct-dealer" className="scroll-mt-32">
                                    <h2>The &quot;Direct Dealer&quot; Advantage</h2>
                                    <p>
                                        Here&apos;s Monetary Gold&apos;s theory: Companies like Goldco, Augusta, and Rosland Capital spend enormous amounts on advertising—TV commercials, celebrity endorsers, radio spots. Those costs get baked into the prices you pay.
                                    </p>
                                    <p>
                                        Monetary Gold claims to operate with a leaner model. No TV ads. No William Devane. Just a basic website and word-of-mouth referrals. The savings, they say, go back to customers.
                                    </p>

                                    <div className="bg-green-50 p-6 rounded-xl border border-green-100 flex gap-4 not-prose my-6">
                                        <DollarSign className="w-6 h-6 text-green-600 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-green-800">What This Means For You</h4>
                                            <p className="text-green-700 text-sm">
                                                In theory, lower marketing costs = lower premiums. Some customer reviews do mention competitive pricing. But &quot;direct dealer pricing&quot; is also a marketing claim itself—always get specific quotes and compare before committing.
                                            </p>
                                        </div>
                                    </div>

                                    <p>
                                        Is it true? Based on customer reviews, Monetary Gold does seem to offer competitive premiums—particularly on standard bullion products. But I&apos;d still recommend getting quotes from 2-3 companies before making a decision.
                                    </p>
                                </section>

                                <section id="fees" className="scroll-mt-32">
                                    <h2>Fees Breakdown</h2>
                                    <p>
                                        Monetary Gold&apos;s fee structure is relatively straightforward:
                                    </p>
                                    <ul>
                                        <li><strong>Setup fee:</strong> Around $50 (one-time)</li>
                                        <li><strong>Annual storage/admin:</strong> $175/year</li>
                                        <li><strong>Minimum investment:</strong> $5,000 for IRA</li>
                                    </ul>
                                    <p>
                                        That $175/year is below the industry average of $200-250. And the $5,000 minimum is one of the lowest in the industry—most companies require $10,000-25,000.
                                    </p>
                                    <p>
                                        For investors with smaller amounts to roll over, this is significant. If you have $8,000 in an old 401(k), Monetary Gold will work with you when many competitors won&apos;t.
                                    </p>
                                </section>

                                <section id="pros-cons" className="scroll-mt-32">
                                    <h2>Pros & Cons</h2>
                                    <div className="grid md:grid-cols-2 gap-8 not-prose">
                                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5" /> What We Like
                                            </h3>
                                            <ul className="space-y-2 text-green-800 text-sm">
                                                <li>• Low $5,000 minimum (great for smaller accounts)</li>
                                                <li>• Below-average annual fees ($175)</li>
                                                <li>• A+ BBB rating</li>
                                                <li>• Claims competitive premiums</li>
                                                <li>• No pushy sales tactics reported</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                                                <XCircle className="w-5 h-5" /> What Could Be Better
                                            </h3>
                                            <ul className="space-y-2 text-red-800 text-sm">
                                                <li>• Smaller company, less brand recognition</li>
                                                <li>• Website is basic and dated</li>
                                                <li>• Less educational content than Augusta/Goldco</li>
                                                <li>• Fewer customer reviews available</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section id="verdict" className="scroll-mt-32">
                                    <h2>Final Verdict - Good for Budget-Minded Folks</h2>
                                    <p>
                                        Monetary Gold is worth looking at if you&apos;re watching your costs. Their low minimum ($5,000) and below-average fees mean regular working people can access Gold IRAs when bigger companies turn them away.
                                    </p>
                                    <p>
                                        The tradeoff? They&apos;re smaller and less well-known. You won&apos;t find fancy educational webinars or celebrity endorsements. But if your priority is keeping more of your money instead of paying for someone else&apos;s TV commercials, Monetary Gold is worth a call.
                                    </p>
                                    <p>
                                        Tony, a retired city bus driver from New Jersey, found them through word of mouth: &quot;My cousin used them and said the prices were fair. No fancy website, no Sean Hannity commercials—just gold at a decent price. That&apos;s all I wanted.&quot;
                                    </p>
                                    <p>
                                        <strong>Best for:</strong> Working folks with $5,000-$20,000 who want low fees and can do their own research.
                                    </p>
                                    <p>
                                        <strong>Consider alternatives if:</strong> You want someone to walk you through everything or have $50k+ (where Augusta&apos;s personal education adds more value).
                                    </p>

                                    <div className="not-prose mt-6">
                                        <Button variant="gold" asChild>
                                            <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">
                                                Visit Monetary Gold
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </section>
                            </article>
                        </div>
                    </div>
                    <aside className="w-80 flex-shrink-0 hidden lg:block">
                        <ReviewSidebar {...companyData} />
                        <div className="mt-8"><TableOfContents items={tocItems} /></div>
                    </aside>
                </div>
            </Container>
            <StickyMobileCTA companySlug="monetary-gold" companyName="Monetary Gold" />
        </main>
    );
}
