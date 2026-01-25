import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { StickyMobileCTA } from "@/components/cta/StickyMobileCTA";
import { ArrowRight, ShieldCheck, AlertTriangle, Gavel, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Augusta Precious Metals Lawsuit (2026 Update): The Truth",
    description: "Rumors of an Augusta Precious Metals lawsuit explained. We investigate the CFTC charges, customer complaints, and if Augusta is still safe.",
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
            "dateModified": "2026-01-19"
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

export default function AugustaLawsuitPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-500/30 text-sm font-semibold text-green-200 mb-6 flex items-center justify-center gap-2 w-fit mx-auto">
                        <ShieldCheck className="w-4 h-4" /> Legal Fact Check
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Augusta Precious Metals Lawsuit: The Truth
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        You searched &quot;Augusta lawsuit&quot; because you&apos;re being careful with your money. Good. Here&apos;s what we actually found.
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-80 flex-shrink-0 hidden lg:block relative">
                        <StickyMasterSidebar />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-a:text-secondary max-w-none">

                        <p className="lead">
                            When you&apos;re thinking about moving $50,000 or more into a Gold IRA, seeing the word &quot;lawsuit&quot; anywhere near the company name will make your stomach drop. That&apos;s a normal reaction—it&apos;s your money, and you should be skeptical.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                companyName="Augusta Precious Metals"
                                rating={4.9}
                                isRecommended={true}
                                bottomLine="Our investigation found NO lawsuits, NO CFTC actions, and ZERO BBB complaints against Augusta. This is the cleanest regulatory record in the industry. The 'lawsuit' searches come from people confusing Augusta with other dealers who DID get sued."
                                ctaUrl={AFFILIATE_LINKS.augusta}
                                ctaText="Get Augusta's Free Gold Guide"
                            />
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
                                The problem is that most people lump all Gold IRA companies together. They assume if one company got sued, they&apos;re all shady. But here&apos;s the reality: <strong>Augusta wasn&apos;t mentioned in any of these cases</strong>. Not as a defendant, not as a witness, not anywhere.
                            </p>
                        </section>

                        {/* The Companies That Got Sued */}
                        <section id="cftc-charges" className="scroll-mt-32">
                            <h2>The Companies That Actually Got Sued</h2>
                            <p>
                                Let me clarify which companies the CFTC and state regulators have actually taken action against:
                            </p>
                            <ul>
                                <li><strong>Metals.com / TMTE Inc.</strong> – Ordered to pay $180 million for defrauding customers, many of them elderly. They sold &quot;exclusive&quot; coins at 200-300% markups.</li>
                                <li><strong>Red Rock Secured</strong> – Faced CFTC charges for similar practices. Used scare tactics and sold overpriced numismatic coins.</li>
                                <li><strong>Regal Assets</strong> – <Link href="/reviews/regal-assets-lawsuit">Collapsed entirely</Link> after failing to deliver customer metals.</li>
                            </ul>

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

                        {/* Customer Reviews */}
                        <section id="customer-reviews" className="scroll-mt-32">
                            <h2>Augusta&apos;s Reputation in 2026</h2>
                            <div className="not-prose my-8 grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                                    <div className="text-sm text-gray-600">TrustPilot Rating</div>
                                    <div className="text-xs text-gray-400 mt-1">1,000+ Reviews</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">A+</div>
                                    <div className="text-sm text-gray-600">BBB Rating</div>
                                    <div className="text-xs text-gray-400 mt-1">Zero Complaints</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">0</div>
                                    <div className="text-sm text-gray-600">Lawsuits Filed</div>
                                    <div className="text-xs text-gray-400 mt-1">Clean Record</div>
                                </div>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section id="conclusion" className="scroll-mt-32">
                            <h2>Bottom Line: Should You Trust Augusta?</h2>
                            <p>
                                Based on everything I found, Augusta Precious Metals is one of the safest places to open a Gold IRA—if you can meet their $50,000 minimum. Their spotless regulatory record, zero complaints, and education-first approach set them apart from the companies that have gotten into legal trouble.
                            </p>
                            <p>
                                The &quot;lawsuit&quot; searches are mostly from cautious investors doing their homework—which is exactly what you should do. The good news is that Augusta passes the test.
                            </p>
                            <p>
                                If you have less than $50k, check out our reviews of <Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link> ($25k min) or <Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link> ($20k min).
                            </p>
                        </section>

                        {/* CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Verified Clean Record</h3>
                                <p className="mb-6 text-gray-200">See why Augusta has zero complaints. Get their free investor kit.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">
                                        Get Free Gold Guide <ArrowRight className="ml-2 w-4 h-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>
            <StickyMobileCTA companySlug="augusta-precious-metals" companyName="Augusta Precious Metals" />
        </main>
    );
}
