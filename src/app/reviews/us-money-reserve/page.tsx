import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { StickyMobileCTA } from "@/components/cta/StickyMobileCTA";
import { Metadata } from "next";
import { ArrowRight, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "US Money Reserve Review 2026: Fees, Ratings & Complaints",
    description: "Detailed US Money Reserve review. We analyze their numismatic coin offerings, high pressure sales complaints, and if they are a good fit for your gold IRA.",
};

const companyData = {
    companyName: "US Money Reserve",
    rating: 3.8,
    minInvestment: "$25,000",
    fees: "Varies (Call for quote)",
    bbbRating: "A+",
    bestFor: "Numismatic Collectors",
    visitUrl: "https://usmoneyreserve.com",
    pros: [
        "Former US Mint Director as spokesman",
        "Large inventory of coins",
        "30-Day Money-Back Guarantee"
    ],
    cons: [
        "Heavy push toward numismatic coins",
        "Reports of aggressive sales tactics",
        "Fees not transparent online"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
        "@type": "Organization",
        "name": "US Money Reserve"
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": "3.8",
        "bestRating": "5"
    },
    "name": "US Money Reserve Review",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    }
};

const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "products", label: "The Numismatic Trap" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "complaints", label: "Complaints Warning" },
    { id: "verdict", label: "Final Verdict" }
];

export default function UsMoneyReserveReviewPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="font-bold text-secondary text-lg">3.8/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            US Money Reserve Review (2026)
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            Massive marketing budget, former Mint Director involvement, and TV commercials everywhere. But are their &quot;exclusive&quot; coins actually a good investment?
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
                            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-a:text-secondary max-w-none">

                                <section id="overview">
                                    <p className="lead">
                                        <strong>You&apos;ve seen the commercials.</strong> US Money Reserve ads are everywhere—TV, radio, the internet. They have a former US Mint Director as their spokesperson. Sounds impressive, right? But here&apos;s what 30 years of working teaches you: heavy advertising costs money. And that money comes from somewhere.
                                    </p>
                                    <p>
                                        We dug into US Money Reserve, and there are things potential customers—especially hardworking folks protecting their retirement—need to know before calling that number.
                                    </p>
                                </section>

                                <section id="products" className="scroll-mt-32">
                                    <h2>Watch Out: The &quot;Exclusive Coin&quot; Trap</h2>
                                    <p>
                                        Here&apos;s what we need to warn you about. When you call US Money Reserve, they&apos;ll likely try to sell you &quot;proof&quot; or &quot;collectible&quot; coins instead of standard bullion.
                                    </p>
                                    <p>
                                        <strong>Why does this matter to your retirement?</strong> Standard bullion coins (like American Gold Eagles) cost about 5-8% above the gold spot price—that&apos;s normal. But these &quot;exclusive&quot; and &quot;proof&quot; coins? They mark those up 30-50% or more.
                                    </p>
                                    <p>
                                        Walter, a retired ironworker from Pennsylvania, shared his experience: &quot;They pushed me toward some &apos;limited edition&apos; coins. Thank God I did more research. Those premiums were insane. I would&apos;ve lost 40% of my money before gold moved a penny.&quot;
                                    </p>

                                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 flex gap-4 not-prose my-6">
                                        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-amber-800">The Math Problem</h4>
                                            <p className="text-amber-700 text-sm">
                                                If you buy a coin at 40% above spot, gold needs to rise 40% just for you to break even. Most &quot;collectible&quot; coins do NOT appreciate faster than standard bullion. For a Gold IRA, stick to bullion.
                                            </p>
                                        </div>
                                    </div>

                                    <p>
                                        This isn&apos;t to say US Money Reserve is a scam—they&apos;re not. But their sales model appears designed to push higher-margin products. If you do business with them, <strong>insist on standard IRS-approved bullion</strong> and get the premium in writing before you commit.
                                    </p>
                                </section>

                                <section id="pros-cons" className="scroll-mt-32">
                                    <h2>Pros & Cons</h2>
                                    <div className="grid md:grid-cols-2 gap-8 not-prose">
                                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5" /> The Good
                                            </h3>
                                            <ul className="space-y-2 text-green-800 text-sm">
                                                <li>• Former US Mint Director involvement adds credibility</li>
                                                <li>• Large company with significant inventory</li>
                                                <li>• 30-day money-back guarantee on most purchases</li>
                                                <li>• BBB A+ rating</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                                                <XCircle className="w-5 h-5" /> The Bad
                                            </h3>
                                            <ul className="space-y-2 text-red-800 text-sm">
                                                <li>• Heavy push toward high-premium numismatic coins</li>
                                                <li>• Multiple reports of aggressive phone sales</li>
                                                <li>• Pricing not transparent on website</li>
                                                <li>• Higher markups than many competitors</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section id="complaints" className="scroll-mt-32">
                                    <h2>Complaints to Be Aware Of</h2>
                                    <p>
                                        We have a <Link href="/reviews/us-money-reserve-complaints" className="text-secondary hover:underline">dedicated page on US Money Reserve complaints</Link>, but here are the highlights:
                                    </p>
                                    <ul>
                                        <li><strong>Persistent phone calls:</strong> Many customers report being called repeatedly after requesting a free guide</li>
                                        <li><strong>&quot;Bait and switch&quot; allegations:</strong> Some say they were offered one product but pushed toward a more expensive option</li>
                                        <li><strong>Spread confusion:</strong> Customers surprised by the gap between buy and sell prices</li>
                                    </ul>
                                    <p>
                                        To be fair, the company does have an A+ BBB rating, which means they respond to and resolve complaints. But the volume of similar complaints suggests a pattern worth noting.
                                    </p>
                                </section>

                                <section id="verdict" className="scroll-mt-32">
                                    <h2>Final Verdict - Proceed With Caution</h2>
                                    <p>
                                        US Money Reserve is legitimate—they won&apos;t steal your money. But their business model seems built around selling expensive &quot;collectible&quot; coins with huge markups. That&apos;s not what you need when you&apos;re trying to protect your retirement.
                                    </p>
                                    <p>
                                        <strong>Our honest recommendation:</strong> If you&apos;re a coin collector who knows what you&apos;re doing, maybe. But if you&apos;re a working person looking for a straightforward Gold IRA to protect your 401k? Look at companies like <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta</Link> or <Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link> that focus on regular bullion without the markups.
                                    </p>
                                    <p>
                                        If you do call US Money Reserve, <strong>be firm:</strong> &quot;I only want standard IRS-approved bullion for my IRA—no collectibles, no &apos;exclusive&apos; coins.&quot; And get the premium over spot price in writing before you agree to anything.
                                    </p>
                                </section>
                            </article>
                        </div>
                    </div>
                    <aside className="w-80 flex-shrink-0 hidden lg:block">
                        <ReviewSidebar {...companyData} />
                        <div className="mt-8">
                            <TableOfContents items={tocItems} />
                        </div>
                    </aside>
                </div>
            </Container>
            <StickyMobileCTA companySlug="us-money-reserve" companyName="US Money Reserve" />
        </main>
    );
}
