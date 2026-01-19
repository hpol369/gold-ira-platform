import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, ShieldCheck, Gavel } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Goldco Lawsuit & Complaints: Fact Check (2026)",
    description: "Are the rumors about a Goldco lawsuit true? We investigate the facts, the Santa Monica city attorney settlement, and what it means for customers today.",
};

const tocItems = [
    { id: "verdict", label: "Legal Verdict" },
    { id: "lawsuit-facts", label: "The Santa Monica Case" },
    { id: "current-status", label: "Current Status & Improvements" },
    { id: "customer-reviews", label: "Customer Reviews 2026" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Goldco Lawsuit & Complaints: Fact Check (2026)",
            "description": "Are the rumors of a Goldco lawsuit true? We investigate the facts, the Santa Monica city attorney settlement, and what it means for customers today.",
            "image": "https://richdadretirement.com/images/goldco-lawsuit.jpg",
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
                    "name": "Did Goldco get sued?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Goldco has not been sued by federal agencies (like the CFTC). However, in the past, they settled a civil consumer protection action with the Santa Monica City Attorney's office regarding marketing claims. They admitted no wrongdoing and agreed to improve disclosures."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Goldco safe to invest with?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Since that settlement, Goldco has become industry-leading in compliance and transparency. They maintain an A+ BBB rating and have thousands of 5-star reviews. The legal issue was a marketing dispute, not a failure to deliver assets."
                    }
                }
            ]
        }
    ]
};

export default function GoldcoLawsuitPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 border border-amber-500/30 text-sm font-semibold text-amber-200 mb-6 flex items-center justify-center gap-2 w-fit mx-auto">
                        <Gavel className="w-4 h-4" /> Legal Fact Check
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Goldco Lawsuit Rumors: The Truth
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Internet rumors can be misleading. We examine the actual legal history of Goldco to see if your money is safe.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                        <p className="lead">
                            Goldco is a massive company, and massive companies often attract legal scrutiny. You may have heard mentions of a "lawsuit" or "settlement." Here are the cold, hard facts.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                companyName="Goldco"
                                rating={4.9}
                                isRecommended={true}
                                bottomLine="The legal issues refer to a past civil settlement (2017) regarding marketing language. No customer funds were lost. Goldco has since overhauled compliance and remains a top-tier, A+ rated company."
                                ctaUrl="/reviews/goldco"
                                ctaText="Get Free Compliance Guide"
                            />
                        </section>

                        {/* Facts */}
                        <section id="lawsuit-facts" className="scroll-mt-32">
                            <h2>The Santa Monica City Attorney Case</h2>
                            <p>
                                Here&apos;s what actually happened. Back in 2017, the Santa Monica City Attorney&apos;s office filed a civil consumer protection action against Goldco. The allegations? That some of their marketing materials contained claims about delivery times and fee structures that weren&apos;t adequately disclosed.
                            </p>
                            <p>
                                Let&apos;s be very clear about what this was <strong>not</strong>:
                            </p>
                            <ul>
                                <li>This was NOT a fraud case</li>
                                <li>This was NOT filed by federal regulators (SEC, CFTC, FTC)</li>
                                <li>NO customer funds were lost or misappropriated</li>
                                <li>NO criminal charges were filed</li>
                            </ul>
                            <p>
                                What happened? Goldco settled the case. They paid a settlement (the exact amount was not publicly disclosed but was reportedly in the low six figures), agreed to improve their disclosure language, and—this is important—<strong>admitted no wrongdoing</strong>.
                            </p>
                            <p>
                                Is this ideal? No. But context matters. Goldco was a rapidly growing company, and their marketing department got ahead of their compliance department. It happens to a lot of fast-growing companies. The question is: what did they do about it?
                            </p>
                        </section>

                        {/* Current Status */}
                        <section id="current-status" className="scroll-mt-32">
                            <h2>Current Status & Improvements</h2>
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100 not-prose">
                                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5" /> Goldco Today
                                </h3>
                                <p className="text-green-800">
                                    Today, Goldco has one of the strictest compliance departments in the industry. Every call is recorded, and disclosures are abundant. This "baptism by fire" has actually made them safer than smaller competitors who haven't been scrutinized.
                                </p>
                            </div>
                        </section>

                        {/* Reviews */}
                        <section id="customer-reviews" className="scroll-mt-32">
                            <h2>Customer Reviews 2026</h2>
                            <p>
                                Actions speak louder than lawsuits. So what do actual customers say about Goldco today?
                            </p>
                            <div className="not-prose my-8 grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                                    <div className="text-sm text-gray-600">TrustPilot Rating</div>
                                    <div className="text-xs text-gray-400 mt-1">5,000+ Reviews</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">A+</div>
                                    <div className="text-sm text-gray-600">BBB Rating</div>
                                    <div className="text-xs text-gray-400 mt-1">Accredited Business</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">$2B+</div>
                                    <div className="text-sm text-gray-600">Metals Placed</div>
                                    <div className="text-xs text-gray-400 mt-1">Since Founding</div>
                                </div>
                            </div>
                            <p>
                                The numbers don&apos;t lie. Since the 2017 settlement, Goldco has placed billions of dollars in precious metals for tens of thousands of customers. They&apos;ve been endorsed by Sean Hannity and have maintained their A+ BBB rating throughout.
                            </p>
                            <p>
                                Compare that to companies that have <em>never</em> been scrutinized. Would you rather invest with a company that got caught, fixed their problems, and is now hyper-compliant? Or a smaller company that simply hasn&apos;t been investigated yet?
                            </p>
                            <p>
                                We&apos;d argue that Goldco&apos;s legal history is actually a <strong>positive signal</strong>. They got their compliance audit the hard way, and they passed.
                            </p>
                        </section>

                        {/* CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Trust But Verify</h3>
                                <p className="mb-6 text-gray-200">See their compliance first-hand. Get their free gold kit today.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/reviews/goldco">Visit Official Site <ArrowRight className="ml-2 w-4 h-4" /></Link>
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
