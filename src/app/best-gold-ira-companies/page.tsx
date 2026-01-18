import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { Sparkles, Trophy, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export const metadata = {
    title: "Best Gold IRA Companies of 2026 | Independent Reviews & Rankings",
    description: "Objective comparison of the top Gold IRA companies. We analyze fees, minimums, customer service, and track records to help you make an informed decision.",
};

export default function BestGoldIraCompaniesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow">
                <header className="bg-primary text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary opacity-50 z-0"></div>
                    <Container className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-6">
                            <Sparkles className="w-4 h-4" />
                            Updated January 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Best Gold IRA Companies
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            Choosing the right Gold IRA company matters. Here's our analysis of the top providers based on fees, service quality, and track record.
                        </p>
                    </Container>
                </header>

                <div className="-mt-12 relative z-20">
                    <ComparisonTable />
                </div>

                <Container className="py-20">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-16">

                            <div className="prose prose-lg max-w-none text-text-muted">
                                <h2 className="text-3xl font-serif font-bold text-primary">How We Evaluate Companies</h2>
                                <p>
                                    The Gold IRA industry has its share of questionable operators. We focus on companies that demonstrate transparency in their pricing, maintain strong regulatory standing, and have verifiable customer satisfaction records.
                                </p>
                                <p>
                                    Our evaluation criteria includes: fee transparency (can you understand what you'll pay before signing up?), BBB ratings and complaint history, time in business, customer review patterns across multiple platforms, and the overall sales approach (education-focused vs. pressure tactics).
                                </p>
                                <p>
                                    The right company for you depends on your situation - primarily how much you're looking to invest. Companies have different minimum thresholds, and their service levels and fee structures vary accordingly.
                                </p>
                            </div>

                            {/* Augusta - Best for $50k+ */}
                            <div id="augusta-review" className="scroll-mt-24 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                                <div className="bg-primary text-white p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-secondary text-primary font-bold w-8 h-8 rounded-full flex items-center justify-center">#1</div>
                                        <h3 className="font-bold text-xl">Augusta Precious Metals</h3>
                                    </div>
                                    <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded">Best for $50,000+</div>
                                </div>
                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row gap-8 mb-6">
                                        <div className="w-full md:w-1/3 bg-gray-100 rounded-xl h-40 flex items-center justify-center text-gray-400">
                                            [Logo/Image]
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <p className="text-text-muted mb-4">
                                                Augusta has built their reputation on education rather than sales pressure. Their process includes a one-on-one web conference covering how precious metals fit into retirement planning - no obligation, no hard sell. For investors with $50,000 or more, their fee waiver programs can provide genuine value over time.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-bold">Fee Waiver Programs Available</span>
                                                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold">Zero BBB Complaints</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-gray-50 p-4 rounded-xl">
                                            <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Strengths</h4>
                                            <ul className="text-sm space-y-1 text-gray-600">
                                                <li>• Education-first approach</li>
                                                <li>• Transparent fee structure</li>
                                                <li>• Exceptional complaint record</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-xl">
                                            <h4 className="font-bold text-amber-700 mb-2 flex items-center gap-2">Considerations</h4>
                                            <ul className="text-sm space-y-1 text-gray-600">
                                                <li>• $50,000 minimum investment</li>
                                                <li>• Requires phone consultation</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Button variant="gold" size="lg" className="w-full" asChild>
                                            <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">
                                                Request Information
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full" asChild>
                                            <Link href="/reviews/augusta-precious-metals">Read Full Review</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Noble Gold - Best for $10k-$50k */}
                            <div id="noble-review" className="scroll-mt-24 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                                <div className="bg-amber-900 text-white p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-amber-700 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">#2</div>
                                        <h3 className="font-bold text-xl">Noble Gold Investments</h3>
                                    </div>
                                    <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded">Best for $10,000-$50,000</div>
                                </div>
                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row gap-8 mb-6">
                                        <div className="w-full md:w-1/3 bg-gray-100 rounded-xl h-40 flex items-center justify-center text-gray-400">
                                            [Logo/Image]
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <p className="text-text-muted mb-4">
                                                Noble Gold fills an important gap for investors who don't meet the high minimums at Augusta or Goldco. With minimums as low as $2,000, they're accessible to a wider range of investors. Their Texas storage option and straightforward service approach have earned them strong reviews.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-bold">Low Minimum ($2k-$5k)</span>
                                                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold">Texas Storage Available</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-gray-50 p-4 rounded-xl">
                                            <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Strengths</h4>
                                            <ul className="text-sm space-y-1 text-gray-600">
                                                <li>• Accessible to smaller investors</li>
                                                <li>• Patient, no-pressure service</li>
                                                <li>• Multiple storage options</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-xl">
                                            <h4 className="font-bold text-amber-700 mb-2 flex items-center gap-2">Considerations</h4>
                                            <ul className="text-sm space-y-1 text-gray-600">
                                                <li>• Flat fees less favorable on very small accounts</li>
                                                <li>• Newer company (founded 2016)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Button variant="gold" size="lg" className="w-full" asChild>
                                            <a href={AFFILIATE_LINKS.noble} target="_blank" rel="noopener noreferrer">
                                                Request Information
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full" asChild>
                                            <Link href="/reviews/noble-gold">Read Full Review</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Goldco - Established Alternative */}
                            <div id="goldco-review" className="scroll-mt-24 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                                <div className="bg-[#1e1e1e] text-white p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-gray-700 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">#3</div>
                                        <h3 className="font-bold text-xl">Goldco</h3>
                                    </div>
                                    <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded">Most Recognized Brand</div>
                                </div>
                                <div className="p-8">
                                    <p className="text-text-muted mb-6">
                                        Goldco is the most-advertised Gold IRA company in the country. Their heavy marketing budget means strong brand recognition, and they've processed billions in precious metals. Customer service is solid, though their pricing requires speaking with a representative. Good option for investors who value working with a widely-recognized name.
                                    </p>
                                    <div className="flex gap-4">
                                        <Button variant="gold" size="lg" className="w-full" asChild>
                                            <a href={AFFILIATE_LINKS.goldco} target="_blank" rel="noopener noreferrer">
                                                Request Information
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full" asChild>
                                            <Link href="/reviews/goldco">Read Full Review</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Other Companies Worth Considering */}
                            <div className="prose prose-lg max-w-none text-text-muted">
                                <h2 className="text-2xl font-serif font-bold text-primary">Other Companies Worth Considering</h2>
                                <p>
                                    Several other companies have solid reputations in the Gold IRA space. <Link href="/reviews/birch-gold" className="text-primary hover:underline">Birch Gold Group</Link> has been operating since 2003 and uses a flat-fee structure that benefits larger accounts. <Link href="/reviews/american-hartford-gold" className="text-primary hover:underline">American Hartford Gold</Link> offers price-matching and competitive minimums.
                                </p>
                                <p>
                                    For investors with smaller amounts to invest, <Link href="/reviews/orion-metal-exchange" className="text-primary hover:underline">Orion Metal Exchange</Link> is worth researching as they cater specifically to beginning investors.
                                </p>
                            </div>

                            <div className="bg-primary/5 p-8 rounded-2xl text-center">
                                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Not Sure Which Company Fits?</h3>
                                <p className="text-text-muted mb-6">
                                    The right choice depends on your investment amount and preferences. Take our quick quiz to get a personalized recommendation.
                                </p>
                                <Button variant="outline" className="bg-white" asChild>
                                    <Link href="/quiz">
                                        Take the Quiz <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>

                        </div>

                        <div className="relative">
                            <StickyMasterSidebar />
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}

function TrophyIcon(props: any) {
    // ... kept for compatibility if needed elsewhere, but using Lucide icons now
    return null;
}
