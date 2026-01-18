import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, XCircle, Landmark, AlertTriangle, Star } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Blanchard Gold Review 2026: The Numismatic Giant",
    description: "Blanchard Gold is a legend in the industry. But is their focus on rare coins right for your IRA? 2026 Review.",
};

const companyData = {
    companyName: "Blanchard Gold",
    rating: 4.2,
    minInvestment: "$10,000",
    fees: "Varies",
    bbbRating: "A+",
    bestFor: "Rare Coin Collectors",
    visitUrl: "https://blanchardgold.com",
    pros: [
        "Industry pioneer (founded 1975)",
        "Deep numismatic expertise",
        "Buyback guarantee",
        "A+ BBB rating"
    ],
    cons: [
        "Heavy focus on collectibles",
        "Website feels dated",
        "Not ideal for bullion-only investors"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": { "@type": "Organization", "name": "Blanchard Gold" },
    "reviewRating": { "@type": "Rating", "ratingValue": "4.2", "bestRating": "5" },
    "name": "Blanchard Gold Review",
    "author": { "@type": "Organization", "name": "Rich Dad Retirement" }
};

const tocItems = [
    { id: "history", label: "A Pioneer's History" },
    { id: "numismatics", label: "Rare Coins vs Bullion" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "verdict", label: "Who Should Use Them" }
];

export default function BlanchardGoldReviewPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16">
                <Container>
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white/10 px-3 py-1 rounded-full border border-white/20 text-sm font-semibold flex items-center gap-2">
                                <Landmark className="w-4 h-4" /> Est. 1975
                            </div>
                            <div className="flex gap-1 ml-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-secondary text-secondary' : 'text-gray-400'}`} />
                                ))}
                            </div>
                            <span className="font-bold text-secondary text-lg">4.2/5.0</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Blanchard Gold Review (2026)</h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            One of the oldest names in American gold dealing. They helped legalize private gold ownership. But are they still the best choice today?
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

                                <section id="history" className="scroll-mt-32">
                                    <p className="lead">
                                        Blanchard and Company is a legend in the precious metals world. Founded in 1975, just one year after it became legal for Americans to own gold again, the company was started by James Blanchard III—one of the activists who fought to restore gold ownership rights.
                                    </p>
                                    <p>
                                        That&apos;s serious pedigree. Blanchard literally helped create the modern gold investment market in America. But 50 years later, does their expertise still translate to the best value for investors?
                                    </p>

                                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex gap-4 not-prose my-6">
                                        <Landmark className="w-6 h-6 text-blue-600 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-blue-800">Historical Footnote</h4>
                                            <p className="text-blue-700 text-sm">
                                                From 1933 to 1974, it was illegal for U.S. citizens to own gold bullion. James Blanchard led the successful campaign to overturn this ban. Blanchard and Company was one of the first dealers to open after legalization.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section id="numismatics" className="scroll-mt-32">
                                    <h2>The Numismatic Focus: Blessing or Curse?</h2>
                                    <p>
                                        Here&apos;s where things get complicated. Blanchard specializes in <strong>numismatic coins</strong>—rare, collectible coins valued for more than just their metal content. They have deep expertise in this area, probably more than any other Gold IRA company.
                                    </p>
                                    <p>
                                        But for most IRA investors, numismatic coins are the wrong choice.
                                    </p>

                                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 flex gap-4 not-prose my-6">
                                        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-amber-800">Numismatics vs. Bullion: The Key Difference</h4>
                                            <ul className="text-amber-700 text-sm mt-2 space-y-1">
                                                <li>• <strong>Bullion</strong> (Gold Eagles, bars): Priced based on gold content. You pay a small premium (5-8%). Value tracks gold prices.</li>
                                                <li>• <strong>Numismatics</strong> (rare coins): Priced based on collector value. Premiums can be 30-100%+. Value is speculative.</li>
                                            </ul>
                                            <p className="text-amber-700 text-sm mt-3">
                                                For retirement investing, bullion is generally the safer choice. Numismatics add speculation on top of already-volatile gold.
                                            </p>
                                        </div>
                                    </div>

                                    <p>
                                        This doesn&apos;t mean numismatics are a scam—serious collectors can do well with them. But if you&apos;re opening a Gold IRA for retirement diversification, you want straightforward bullion, not collector&apos;s items.
                                    </p>
                                    <p>
                                        Blanchard <em>does</em> sell bullion products, but it&apos;s not their specialty. If you work with them, you&apos;ll need to be clear about what you want.
                                    </p>
                                </section>

                                <section id="pros-cons" className="scroll-mt-32">
                                    <h2>Pros & Cons</h2>
                                    <div className="grid md:grid-cols-2 gap-8 not-prose">
                                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5" /> Strengths
                                            </h3>
                                            <ul className="space-y-2 text-green-800 text-sm">
                                                <li>• Unmatched history and expertise (50 years)</li>
                                                <li>• A+ BBB rating</li>
                                                <li>• Best-in-class for numismatic knowledge</li>
                                                <li>• Buyback guarantee on purchases</li>
                                                <li>• Genuine educational resources (not just sales)</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                                                <XCircle className="w-5 h-5" /> Weaknesses
                                            </h3>
                                            <ul className="space-y-2 text-red-800 text-sm">
                                                <li>• Heavy numismatic focus (higher risk)</li>
                                                <li>• Website and marketing feel dated</li>
                                                <li>• Not optimized for bullion-only buyers</li>
                                                <li>• Pricing less transparent than competitors</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section id="verdict" className="scroll-mt-32">
                                    <h2>Who Should Use Blanchard Gold?</h2>
                                    <p>
                                        Blanchard Gold makes sense if:
                                    </p>
                                    <ul>
                                        <li><strong>You&apos;re interested in rare coins:</strong> If numismatics genuinely appeal to you (beyond just gold investing), Blanchard&apos;s expertise is valuable</li>
                                        <li><strong>You value heritage:</strong> Working with a company that helped create the industry has intangible appeal for some</li>
                                        <li><strong>You know exactly what you want:</strong> If you can navigate their numismatic focus and stick to bullion, they&apos;re still a legitimate option</li>
                                    </ul>
                                    <p>
                                        <strong>For most Gold IRA investors</strong>—those who want simple, cost-effective exposure to gold prices—companies like <Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link> or <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta</Link> will be a better fit. They focus on bullion and make the process straightforward.
                                    </p>
                                    <p>
                                        Blanchard is a respected company with real expertise. But their specialty doesn&apos;t align with what most retirement investors need.
                                    </p>

                                    <div className="not-prose mt-6">
                                        <Button variant="gold" asChild>
                                            <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">
                                                Visit Blanchard Gold
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
        </main>
    );
}
