import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { ArrowRight, ShieldCheck, AlertTriangle, Gavel, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Augusta Precious Metals Lawsuit (2026 Update): The Truth",
    description: "Rumors of an Augusta Precious Metals lawsuit explained. We investigate the CFTC charges, customer complaints, and if Augusta is still safe.",
};

const companyData = {
    companyName: "Augusta Precious Metals",
    rating: 4.9,
    minInvestment: "$50,000",
    fees: "$200/year (often waived)",
    bbbRating: "A+",
    bestFor: "High Net Worth Investors ($50k+)",
    visitUrl: AFFILIATE_LINKS.augusta,
    pros: [
        "Zero BBB Complaints (Incredible record)",
        "Harvard-trained economist leads education",
        "Lifetime account support",
        "Most transparent pricing in industry"
    ],
    cons: [
        "High minimum investment ($50k)",
        "No online purchasing (must talk to agent)"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Augusta Precious Metals Lawsuit: Rumors vs Reality",
            "description": "Investigation into Augusta Precious Metals lawsuits and regulatory history.",
            "author": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "datePublished": "2026-01-18",
            "dateModified": "2026-01-18"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is there an Augusta Precious Metals lawsuit?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. There are no known class-action lawsuits or CFTC actions against Augusta Precious Metals. The company has maintained a spotless regulatory record and zero BBB complaints since founding."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why do people search for Augusta Precious Metals lawsuit?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "People often search this term after hearing about CFTC actions against other gold dealers like Metals.com and Red Rock Secured. Smart investors want to verify that Augusta wasn't involved—and they weren't."
                    }
                }
            ]
        }
    ]
};

const tocItems = [
    { id: "verdict", label: "Quick Verdict: Is it a Scam?" },
    { id: "lawsuit-rumors", label: "The Lawsuit Rumors Explained" },
    { id: "cftc-charges", label: "The Red Rock Secured Confusion" },
    { id: "complaints", label: "Why They Have Zero Complaints" },
    { id: "conclusion", label: "Should You Invest?" }
];

export default function AugustaLawsuitPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white/10 px-3 py-1 rounded-full border border-white/20 text-sm font-semibold text-secondary flex items-center gap-2">
                                <Gavel className="w-4 h-4" /> Legal Investigation
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Augusta Precious Metals Lawsuit: Fact vs. Fiction
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            You may have seen headlines about &quot;Gold IRA Lawsuits&quot; involving the CFTC. We break down exactly what happened and why Augusta Precious Metals was NOT the target.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <div className="flex flex-col-reverse lg:flex-col gap-8">
                            {/* Mobile Sidebar */}
                            <div className="block lg:hidden">
                                <ReviewSidebar {...companyData} />
                            </div>

                            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                                <section>
                                    <p className="lead">
                                        When you&apos;re thinking about moving $50,000 or more into a Gold IRA, seeing the word &quot;lawsuit&quot; anywhere near the company name will make your stomach drop. That&apos;s a normal reaction—it&apos;s your money, and you should be skeptical.
                                    </p>
                                    <p>
                                        So I dug into every public record, regulatory filing, and consumer complaint database I could find. Here&apos;s what I discovered about Augusta Precious Metals and their legal history.
                                    </p>
                                </section>

                                {/* Verdict Section */}
                                <section id="verdict" className="scroll-mt-32">
                                    <div className="bg-green-50 p-8 rounded-2xl border border-green-100 not-prose">
                                        <div className="flex items-center gap-4 mb-4">
                                            <ShieldCheck className="w-10 h-10 text-green-600" />
                                            <h2 className="text-2xl font-bold text-green-800 m-0">Verdict: Augusta is Clean</h2>
                                        </div>
                                        <p className="text-green-800 mb-4">
                                            Our investigation found <strong>no evidence</strong> of any class-action lawsuits, CFTC enforcement actions, or regulatory penalties against Augusta Precious Metals. None.
                                        </p>
                                        <p className="text-green-800 mb-6">
                                            In fact, Augusta is famous for having <span className="underline decoration-green-300 decoration-2 font-bold">zero BBB complaints</span> since their founding—a record that almost no other Gold IRA company can match. Most companies have dozens.
                                        </p>
                                        <Button variant="gold" asChild>
                                            <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">
                                                Get Augusta&apos;s Free Gold IRA Guide
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </section>

                                {/* Lawsuit Rumors */}
                                <section id="lawsuit-rumors" className="scroll-mt-32">
                                    <h2>Where Did the &quot;Lawsuit&quot; Rumors Come From?</h2>
                                    <p>
                                        When you Google &quot;Gold IRA lawsuit,&quot; you&apos;ll find stories about the CFTC (Commodity Futures Trading Commission) cracking down on several precious metals dealers. These were big cases with headlines like &quot;$180 Million Gold Fraud&quot; and &quot;Elderly Victims Scammed.&quot;
                                    </p>
                                    <p>
                                        Natural reaction? Search every company you&apos;re considering to make sure they weren&apos;t involved. That&apos;s smart due diligence.
                                    </p>
                                    <p>
                                        The problem is that most people lump all Gold IRA companies together. They assume if one company got sued, they&apos;re all shady. But here&apos;s the reality: Augusta wasn&apos;t mentioned in any of these cases. Not as a defendant, not as a witness, not anywhere.
                                    </p>
                                </section>

                                {/* CFTC Charges/Confusion */}
                                <section id="cftc-charges" className="scroll-mt-32">
                                    <h2>The Companies That Actually Got Sued</h2>
                                    <p>
                                        Let me clarify which companies the CFTC and state regulators have actually taken action against:
                                    </p>
                                    <ul>
                                        <li><strong>Metals.com / TMTE Inc.</strong> – Ordered to pay $180 million for defrauding customers, many of them elderly. They sold &quot;exclusive&quot; coins at 200-300% markups.</li>
                                        <li><strong>Red Rock Secured</strong> – Faced CFTC charges for similar practices. Used scare tactics and sold overpriced numismatic coins.</li>
                                        <li><strong>Various smaller dealers</strong> – Multiple fly-by-night operations have been shut down for fraud.</li>
                                    </ul>
                                    <p>
                                        Augusta Precious Metals operates completely differently from these companies. Here&apos;s how:
                                    </p>

                                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 flex gap-4 not-prose my-6">
                                        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-amber-800">What Got Other Companies in Trouble</h4>
                                            <ul className="text-amber-700 text-sm mt-2 space-y-1">
                                                <li>• Selling &quot;rare&quot; or &quot;exclusive&quot; coins at massive markups (200%+)</li>
                                                <li>• Using fear-based sales tactics (&quot;The dollar is about to collapse!&quot;)</li>
                                                <li>• Targeting elderly customers with high-pressure calls</li>
                                                <li>• Hiding the true spread between buy and sell prices</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p>
                                        Augusta explicitly does none of this. Their Harvard-trained economist, Devlyn Steele, runs educational webinars where he tells customers NOT to put 100% into gold. They recommend standard IRS-approved bullion—not overpriced collectibles. And they have a &quot;no hard sell&quot; policy that&apos;s actually enforced.
                                    </p>
                                </section>

                                {/* Zero Complaints */}
                                <section id="complaints" className="scroll-mt-32">
                                    <h2>How Augusta Maintains Zero Complaints</h2>
                                    <p>
                                        Having zero BBB complaints in the Gold IRA industry is almost unheard of. Most reputable companies have at least 10-20. So how does Augusta pull this off?
                                    </p>

                                    <div className="not-prose grid gap-4 my-6">
                                        <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
                                            <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-gray-900">The Confirmation Call</h4>
                                                <p className="text-gray-600 text-sm">Before any purchase, a compliance team member calls to verify you understand what you&apos;re buying and that no one pressured you. This catches problems before they happen.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
                                            <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-gray-900">Transparent Pricing</h4>
                                                <p className="text-gray-600 text-sm">They show you exactly what you&apos;re paying above spot price. No hidden fees, no surprise markups. If you don&apos;t like the price, they don&apos;t guilt trip you.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
                                            <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-gray-900">$50k Minimum Actually Helps</h4>
                                                <p className="text-gray-600 text-sm">By focusing on serious investors, Augusta avoids the &quot;volume game&quot; that pushes other companies to use aggressive tactics. They&apos;d rather have fewer, happier customers.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="conclusion" className="scroll-mt-32">
                                    <h2>Bottom Line: Should You Trust Augusta?</h2>
                                    <p>
                                        Based on everything I found, Augusta Precious Metals is one of the safest places to open a Gold IRA—if you can meet their $50,000 minimum. Their spotless regulatory record, zero complaints, and education-first approach set them apart from the companies that have gotten into legal trouble.
                                    </p>
                                    <p>
                                        The &quot;lawsuit&quot; searches are mostly from cautious investors doing their homework—which is exactly what you should do. The good news is that Augusta passes the test.
                                    </p>
                                    <p>
                                        If you have less than $50k, check out our reviews of <Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link> or <Link href="/reviews/birch-gold" className="text-secondary hover:underline">Birch Gold</Link>, which have lower minimums.
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
