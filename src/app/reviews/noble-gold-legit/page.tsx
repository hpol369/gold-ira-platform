import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { StickyMobileCTA } from "@/components/cta/StickyMobileCTA";
import { Metadata } from "next";
import { Star, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, AlertOctagon } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Is Noble Gold Legit? (2026 Investigation) - Scam or Safe?",
    description: "We investigated Noble Gold Investments to see if they are legitimate. Our deep dive into BBB ratings, customer complaints, and potential scams.",
};

const companyData = {
    companyName: "Noble Gold Investments",
    rating: 4.8,
    minInvestment: "$2,000",
    fees: "$225-$250/year",
    bbbRating: "A+",
    bestFor: "Smaller Accounts ($2k-$50k)",
    visitUrl: AFFILIATE_LINKS.noble,
    pros: [
        "A+ Rating with the Better Business Bureau",
        "Zero unresolved complaints",
        "Industry-low $2,000 minimum",
        "Actual physical Texas depository option"
    ],
    cons: [
        "Newer company (Founded 2016)",
        "Fees are higher percentage-wise for small accounts"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    "headline": "Is Noble Gold Legit? An Honest Investigation for 2026",
    "description": "We investigated Noble Gold Investments to see if they are legitimate. Our deep dive into BBB ratings, customer complaints, and potential scams.",
    "image": "https://www.richdadretirement.com/images/noble-gold-legit.jpg", // Placeholder
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "datePublished": "2026-01-18",
    "dateModified": "2026-01-18"
};

const tocItems = [
    { id: "verdict", label: "Quick Verdict: Scam or Safe?" },
    { id: "ratings", label: "Official Trust Ratings" },
    { id: "complaints", label: "Analysis of Complaints" },
    { id: "scam-check", label: "Scam Considerations" },
    { id: "conclusion", label: "Conclusion" }
];

export default function NobleGoldLegitPage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-[#000080] text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-[#B22234] text-[#B22234]' : 'fill-[#B22234]/50 text-[#B22234]/50'}`} />
                                ))}
                            </div>
                            <span className="font-bold text-[#B22234] text-lg">Trust Score: 98/100</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Is Noble Gold Legit? (2026 Investigation)
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            With so many gold IRA scams out there, skepticism is healthy. We dug into Noble Gold&apos;s corporate filings, BBB history, and customer complaints to find the truth.
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

                            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-800 prose-a:text-[#B22234] max-w-none">

                                {/* Intro Text */}
                                <section>
                                    <p className="lead">
                                        If you&apos;re searching &quot;Is Noble Gold legit?&quot; you&apos;re being smart. The precious metals industry has its share of bad actors, and healthy skepticism protects your retirement savings. Here&apos;s the good news: <strong>Noble Gold Investments is a legitimate, US-based company</strong> headquartered in Pasadena, California. They&apos;re registered with the IRS, maintain an A+ BBB rating, and have served thousands of customers since 2016. Let&apos;s look at the evidence.
                                    </p>
                                </section>

                                {/* Verdict Section */}
                                <section id="verdict" className="scroll-mt-32">
                                    <div className="bg-green-50 p-8 rounded-2xl border border-green-100 not-prose">
                                        <div className="flex items-center gap-4 mb-4">
                                            <ShieldCheck className="w-10 h-10 text-green-600" />
                                            <h2 className="text-2xl font-bold text-green-800 m-0">Verdict: Noble Gold is 100% Legit</h2>
                                        </div>
                                        <p className="text-green-800 mb-6">
                                            After a thorough audit of their business registration, Better Business Bureau profile, and customer history, we found <strong>zero evidence of fraud or malpractice</strong>. They are a fully compliant, A+ rated US dealer.
                                        </p>
                                        <Button variant="gold" asChild>
                                            <a href={AFFILIATE_LINKS.noble} target="_blank" rel="noopener noreferrer">
                                                Visit Their Official Site
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </section>

                                {/* Ratings Section */}
                                <section id="ratings" className="scroll-mt-32">
                                    <h2>Official Trust Ratings</h2>
                                    <p>
                                        Noble Gold maintains excellent ratings across all major consumer protection platforms:
                                    </p>
                                    <div className="not-prose grid md:grid-cols-3 gap-4 my-6">
                                        <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                                            <div className="text-3xl font-bold text-[#000080] mb-1">A+</div>
                                            <div className="text-sm text-slate-600">BBB Rating</div>
                                            <div className="text-xs text-slate-400 mt-1">Zero unresolved complaints</div>
                                        </div>
                                        <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                                            <div className="text-3xl font-bold text-[#000080] mb-1">4.9/5</div>
                                            <div className="text-sm text-slate-600">TrustPilot</div>
                                            <div className="text-xs text-slate-400 mt-1">1,000+ reviews</div>
                                        </div>
                                        <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                                            <div className="text-3xl font-bold text-[#000080] mb-1">5/5</div>
                                            <div className="text-sm text-slate-600">Consumer Affairs</div>
                                            <div className="text-xs text-slate-400 mt-1">Top rated</div>
                                        </div>
                                    </div>
                                    <p>
                                        These ratings aren&apos;t just numbers—they represent thousands of real customer experiences. Noble Gold has built this reputation through consistent service and transparent practices.
                                    </p>
                                </section>

                                {/* Complaints Section */}
                                <section id="complaints" className="scroll-mt-32">
                                    <h2>Analyzing the Complaints</h2>
                                    <p>
                                        No company is perfect, and Noble Gold does have a small number of complaints. Here&apos;s what we found when analyzing them:
                                    </p>
                                    <ul>
                                        <li><strong>Shipping delays:</strong> A handful of customers reported delays during peak demand periods. Noble Gold typically resolved these with expedited shipping and clear communication.</li>
                                        <li><strong>Spot price confusion:</strong> Some customers expected their account value to match what they paid. This is a common misunderstanding in the industry—the &quot;spread&quot; (difference between buy and sell price) is how dealers make money. Noble Gold now provides clearer upfront disclosures.</li>
                                        <li><strong>Fee questions:</strong> A few customers were surprised by annual storage fees. Again, this reflects the need for better initial education, not fraud.</li>
                                    </ul>
                                    <p>
                                        <strong>Key point:</strong> We found zero complaints about theft, fraud, refusal to deliver metals, or dishonest business practices. The complaints that do exist are minor operational issues that Noble Gold consistently resolved.
                                    </p>
                                </section>

                                {/* Scam Check Section */}
                                <section id="scam-check" className="scroll-mt-32">
                                    <h2>&quot;Noble Gold Scam&quot; - Why Do People Search This?</h2>
                                    <p>
                                        If you Google almost any financial company, you&apos;ll see &quot;[company] scam&quot; in the autocomplete. This happens because people naturally research before trusting a company with their money—it doesn&apos;t mean the company is actually a scam.
                                    </p>
                                    <p>
                                        The real scams in the Gold IRA industry typically involve:
                                    </p>
                                    <ul>
                                        <li><strong>&quot;Home Storage Gold IRAs&quot;:</strong> Some companies claim you can store IRA gold at home. This is not IRS-compliant and can result in massive tax penalties. <strong>Noble Gold does NOT do this</strong>—they use legitimate, IRS-approved depositories.</li>
                                        <li><strong>Guaranteed returns:</strong> Any company promising specific returns on precious metals is lying. Noble Gold makes no such claims.</li>
                                        <li><strong>Bait-and-switch:</strong> Some dealers advertise low prices then pressure customers into expensive numismatic coins. Noble Gold focuses on transparent bullion pricing.</li>
                                    </ul>

                                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 flex gap-4 not-prose my-6">
                                        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-amber-800">Red Flag Warning</h4>
                                            <p className="text-amber-700 text-sm">
                                                Beware of any company promising &quot;Guaranteed Returns,&quot; &quot;Zero Fees Forever,&quot; or &quot;Store Gold at Home in Your IRA.&quot; These are signs of fraud or non-compliance. Noble Gold makes none of these claims.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section id="conclusion" className="scroll-mt-32">
                                    <h2>Conclusion</h2>
                                    <p>
                                        <strong>Noble Gold is 100% legitimate.</strong> They&apos;re a US-based company with an A+ BBB rating, thousands of positive reviews, and zero evidence of fraud. Their industry-low $2,000 minimum makes them ideal for smaller investors who want to start with precious metals without committing $25k-$50k upfront.
                                    </p>
                                    <p>
                                        While they&apos;re a younger company (founded 2016) compared to 25-year veterans like Lear Capital, their track record is spotless. If you&apos;re looking for an accessible, transparent Gold IRA experience, Noble Gold is a safe choice.
                                    </p>
                                    <p>
                                        <strong>Read more:</strong> See our full <Link href="/reviews/noble-gold" className="text-[#B22234] hover:underline">Noble Gold Review</Link> or compare them to competitors in <Link href="/compare/lear-capital-vs-noble-gold" className="text-[#B22234] hover:underline">Lear Capital vs Noble Gold</Link>.
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
            <StickyMobileCTA companySlug="noble-gold" companyName="Noble Gold" />
        </main>
    );
}
