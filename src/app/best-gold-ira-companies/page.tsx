import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { Sparkles, Trophy, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export const metadata = {
    title: "Best Gold IRA Companies of 2026 | Independent Reviews & Rankings",
    description: "Objective comparison of the top Gold IRA companies. We analyze fees, minimums, customer service, and track records to help you make an informed decision.",
};

export default function BestGoldIraCompaniesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <Navbar />

            <div className="flex-grow">
                <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
                        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-700/20 rounded-full blur-[100px]" />
                    </div>
                    <Container className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-6">
                            <Sparkles className="w-4 h-4" />
                            Updated January 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
                            Best Gold IRA Companies
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Choosing the right Gold IRA company matters. Here&apos;s our analysis of the top providers based on fees, service quality, and track record.
                        </p>
                    </Container>
                </header>

                <div className="-mt-12 relative z-20">
                    <ComparisonTable />
                </div>

                <Container className="py-20">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-16">

                            <div className="prose prose-lg max-w-none text-slate-300">
                                <h2 className="text-3xl font-serif font-bold text-white">How We Evaluate Companies</h2>
                                <p>
                                    The Gold IRA industry has its share of questionable operators. We focus on companies that demonstrate transparency in their pricing, maintain strong regulatory standing, and have verifiable customer satisfaction records.
                                </p>
                                <p>
                                    Our evaluation criteria includes: fee transparency (can you understand what you&apos;ll pay before signing up?), BBB ratings and complaint history, time in business, customer review patterns across multiple platforms, and the overall sales approach (education-focused vs. pressure tactics).
                                </p>
                                <p>
                                    The right company for you depends on your situation - primarily how much you&apos;re looking to invest. Companies have different minimum thresholds, and their service levels and fee structures vary accordingly.
                                </p>
                            </div>

                            {/* Augusta - Best for $50k+ */}
                            <div id="augusta-review" className="scroll-mt-24 border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm shadow-xl">
                                <div className="bg-slate-800 text-white p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-amber-500 text-slate-900 font-bold w-8 h-8 rounded-full flex items-center justify-center">#1</div>
                                        <h3 className="font-bold text-xl whitespace-nowrap">Augusta Precious Metals</h3>
                                    </div>
                                    <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded whitespace-nowrap">Best for $50,000+</div>
                                </div>
                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row gap-8 mb-6">
                                        <div className="w-full md:w-1/3 bg-white/5 rounded-xl h-40 flex items-center justify-center text-slate-500 border border-white/10">
                                            [Logo/Image]
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <p className="text-slate-400 mb-4">
                                                Augusta has built their reputation on education rather than sales pressure. Their process includes a one-on-one web conference covering how precious metals fit into retirement planning - no obligation, no hard sell. For investors with $50,000 or more, their fee waiver programs can provide genuine value over time.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-bold border border-green-500/30">Fee Waiver Programs Available</span>
                                                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-bold border border-blue-500/30">Zero BBB Complaints</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                                            <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Strengths</h4>
                                            <ul className="text-sm space-y-1 text-slate-400">
                                                <li>• Education-first approach</li>
                                                <li>• Transparent fee structure</li>
                                                <li>• Exceptional complaint record</li>
                                            </ul>
                                        </div>
                                        <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
                                            <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">Considerations</h4>
                                            <ul className="text-sm space-y-1 text-slate-400">
                                                <li>• <span className="whitespace-nowrap">$50,000</span> minimum investment</li>
                                                <li>• Requires phone consultation</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Button variant="gold" size="lg" className="w-full" asChild>
                                            <a href={getTrackedLink(AFFILIATE_LINKS.augusta, "best-companies", "augusta")} target="_blank" rel="noopener noreferrer">
                                                Request Information
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full border-white/20 text-slate-300 hover:bg-white/10" asChild>
                                            <Link href="/reviews/augusta-precious-metals">Read Full Review</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Noble Gold - Best for $10k-$50k */}
                            <div id="noble-review" className="scroll-mt-24 border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm shadow-xl">
                                <div className="bg-slate-700 text-white p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-slate-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">#2</div>
                                        <h3 className="font-bold text-xl whitespace-nowrap">Noble Gold Investments</h3>
                                    </div>
                                    <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded whitespace-nowrap">Best for $10,000-$50,000</div>
                                </div>
                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row gap-8 mb-6">
                                        <div className="w-full md:w-1/3 bg-white/5 rounded-xl h-40 flex items-center justify-center text-slate-500 border border-white/10">
                                            [Logo/Image]
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <p className="text-slate-400 mb-4">
                                                Noble Gold fills an important gap for investors who don&apos;t meet the high minimums at Augusta or Goldco. With minimums as low as $2,000, they&apos;re accessible to a wider range of investors. Their Texas storage option and straightforward service approach have earned them strong reviews.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-bold border border-green-500/30">Low Minimum ($2k-$5k)</span>
                                                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-bold border border-blue-500/30">Texas Storage Available</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                                            <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Strengths</h4>
                                            <ul className="text-sm space-y-1 text-slate-400">
                                                <li>• Accessible to smaller investors</li>
                                                <li>• Patient, no-pressure service</li>
                                                <li>• Multiple storage options</li>
                                            </ul>
                                        </div>
                                        <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
                                            <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">Considerations</h4>
                                            <ul className="text-sm space-y-1 text-slate-400">
                                                <li>• Flat fees less favorable on very small accounts</li>
                                                <li>• Newer company (founded 2016)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Button variant="gold" size="lg" className="w-full" asChild>
                                            <a href={getTrackedLink(AFFILIATE_LINKS.noble, "best-companies", "noble")} target="_blank" rel="noopener noreferrer">
                                                Request Information
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full border-white/20 text-slate-300 hover:bg-white/10" asChild>
                                            <Link href="/reviews/noble-gold">Read Full Review</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Goldco - Established Alternative */}
                            <div id="goldco-review" className="scroll-mt-24 border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm shadow-xl">
                                <div className="bg-slate-700 text-white p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-slate-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">#3</div>
                                        <h3 className="font-bold text-xl">Goldco</h3>
                                    </div>
                                    <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded">Most Recognized Brand</div>
                                </div>
                                <div className="p-8">
                                    <p className="text-slate-400 mb-6">
                                        Goldco is the most-advertised Gold IRA company in the country. Their heavy marketing budget means strong brand recognition, and they&apos;ve processed billions in precious metals. Customer service is solid, though their pricing requires speaking with a representative. Good option for investors who value working with a widely-recognized name.
                                    </p>
                                    <div className="flex gap-4">
                                        <Button variant="gold" size="lg" className="w-full" asChild>
                                            <a href={getTrackedLink(AFFILIATE_LINKS.goldco, "best-companies", "goldco")} target="_blank" rel="noopener noreferrer">
                                                Request Information
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full border-white/20 text-slate-300 hover:bg-white/10" asChild>
                                            <Link href="/reviews/goldco">Read Full Review</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Other Companies Worth Considering */}
                            <div className="prose prose-lg max-w-none text-slate-300">
                                <h2 className="text-2xl font-serif font-bold text-white">Other Companies Worth Considering</h2>
                                <p>
                                    Several other companies have solid reputations in the Gold IRA space. <Link href="/reviews/birch-gold" className="text-amber-400 hover:underline">Birch Gold Group</Link> has been operating since 2003 and uses a flat-fee structure that benefits larger accounts. <Link href="/reviews/american-hartford-gold" className="text-amber-400 hover:underline">American Hartford Gold</Link> offers price-matching and competitive minimums.
                                </p>
                                <p>
                                    For investors with smaller amounts to invest, <Link href="/reviews/orion-metal-exchange" className="text-amber-400 hover:underline">Orion Metal Exchange</Link> is worth researching as they cater specifically to beginning investors.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/10">
                                <h3 className="text-2xl font-serif font-bold text-white mb-4">Not Sure Which Company Fits?</h3>
                                <p className="text-slate-400 mb-6">
                                    The right choice depends on your investment amount and preferences. Take our quick quiz to get a personalized recommendation.
                                </p>
                                <Button variant="outline" className="border-white/20 text-slate-300 hover:bg-white/10 hover:text-white" asChild>
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

                {/* Augusta CTA */}
                <section className="py-16">
                    <Container>
                        <AugustaCTA
                            variant="footer"
                            linkContext="comparison"
                            headline="Ready to Get Started?"
                            subheadline="Augusta Precious Metals earned our #1 ranking for their education-first approach and zero BBB complaints. Request your free kit today."
                            trackSource="best-companies"
                        />
                    </Container>
                </section>
            </div>
            <Footer />
        </main>
    );
}
