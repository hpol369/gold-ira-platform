import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
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
        <main className="min-h-screen bg-background pb-24">
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
                            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                                <section id="overview">
                                    <p className="lead">
                                        US Money Reserve is one of the most heavily advertised gold companies in America. Their TV commercials feature former US Mint Director Philip Diehl, which gives them instant credibility. They&apos;re a major distributor of government-issued gold coins.
                                    </p>
                                    <p>
                                        But here&apos;s the thing: heavy advertising costs money. And that money comes from somewhere. After investigating US Money Reserve, I found some things that potential customers need to know.
                                    </p>
                                </section>

                                <section id="products" className="scroll-mt-32">
                                    <h2>The &quot;Exclusive Coin&quot; Trap</h2>
                                    <p>
                                        This is where things get complicated. When you call US Money Reserve, there&apos;s a good chance they&apos;ll try to sell you on numismatic or &quot;proof&quot; coins rather than standard bullion.
                                    </p>
                                    <p>
                                        <strong>Why does this matter?</strong> Standard bullion coins (like American Gold Eagles) are priced close to the spot price of gold. You might pay a 5-8% premium, which is normal. But numismatic coins—marketed as &quot;rare,&quot; &quot;exclusive,&quot; or &quot;collectible&quot;—can have premiums of 30-50% or more.
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
                                    <h2>Final Verdict</h2>
                                    <p>
                                        US Money Reserve is a legitimate company—they&apos;re not going to steal your money. But their business model appears optimized for selling high-margin numismatic products rather than helping you build a cost-effective Gold IRA.
                                    </p>
                                    <p>
                                        <strong>My recommendation:</strong> If you&apos;re interested in rare coins as collectibles, US Money Reserve might work. But if you want a Gold IRA for retirement diversification, you&apos;ll likely get better value from companies like <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta</Link> or <Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link> that focus on bullion.
                                    </p>
                                    <p>
                                        If you do call US Money Reserve, be very clear: &quot;I only want standard IRS-approved bullion for my IRA—no collectibles.&quot; Get everything in writing.
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
        </main>
    );
}
