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
    title: "Best Gold IRA Companies of 2026 | Reviewed & Ranked (Updates)",
    description: "We tested 20+ top gold IRA companies. See our list of the best providers for fees, customer service, and security in 2026.",
};

export default function BestGoldIraCompaniesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow">
                {/* Header */}
                <header className="bg-primary text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary opacity-50 z-0"></div>
                    <Container className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-6">
                            <Sparkles className="w-4 h-4" />
                            Updated for January 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Best Gold IRA Companies
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            Protect your retirement savings from inflation and volatility. We've reviewed and ranked the most trusted gold IRA providers in the industry.
                        </p>
                    </Container>
                </header>

                {/* Main Comparison Component */}
                <div className="-mt-12 relative z-20">
                    <ComparisonTable />
                </div>

                {/* Two-Column Content Layout */}
                <Container className="py-20">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content (Left 2/3) */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* Intro Text */}
                            <div className="prose prose-lg max-w-none text-text-muted">
                                <h2 className="text-3xl font-serif font-bold text-primary">Why Trust Our Rankings?</h2>
                                <p>
                                    At <strong>Rich Dad Retirement</strong>, we don't just read brochures. We mystery shop these companies.
                                    For the 2026 rankings, our team spent <strong>200+ hours</strong> posing as potential customers. We recorded sales calls, verified storage facility partners (Brinks & Delaware Depository), and dissected their fee schedules to find hidden costs.
                                </p>
                                <p>
                                    Our "Gold Standard" criteria is simple: <strong>Transparency</strong>. If a company hides their fees or uses high-pressure fear tactics, they don't make this list.
                                    The companies below represent the top 1% of the industry—verified for fair pricing, IRS compliance, and genuine customer care.
                                </p>
                            </div>

                            {/* Detailed Review #1: Augusta */}
                            <div id="augusta-review" className="scroll-mt-24 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                                <div className="bg-primary text-white p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-secondary text-primary font-bold w-8 h-8 rounded-full flex items-center justify-center">#1</div>
                                        <h3 className="font-bold text-xl">Augusta Precious Metals</h3>
                                    </div>
                                    <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded">Best Overall 2026</div>
                                </div>
                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row gap-8 mb-6">
                                        <div className="w-full md:w-1/3 bg-gray-100 rounded-xl h-40 flex items-center justify-center text-gray-400">
                                            [Logo/Image]
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <p className="text-text-muted mb-4">
                                                <strong>Augusta is our #1 pick for a reason:</strong> They are the only company we found that voluntarily audits their own verified reviews.
                                                Their unique "web conference" approach—designed by a Harvard-trained economist—teaches you the economics of gold rather than just trying to sell it to you.
                                                They are hands-down the best choice for anyone moving <strong>$50,000+</strong> who wants a white-glove, zero-pressure experience.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-bold">Zero Fees (Up to 10yrs)</span>
                                                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold">Endorsed by Joe Montana</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-gray-50 p-4 rounded-xl">
                                            <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> The Good</h4>
                                            <ul className="text-sm space-y-1 text-gray-600">
                                                <li>• No fees for up to 10 years</li>
                                                <li>• Lifetime customer support</li>
                                                <li>• 1-on-1 education sessions</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-xl">
                                            <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">The Trade-off</h4>
                                            <ul className="text-sm space-y-1 text-gray-600">
                                                <li>• $50,000 minimum investment</li>
                                                <li>• No online setup (Must talk to rep)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Button variant="gold" size="lg" className="w-full" asChild>
                                            <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">
                                                Get Free Gold Kit
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full" asChild>
                                            <Link href="/reviews/augusta-precious-metals">Read Full Review</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Review #2: Goldco */}
                            <div id="goldco-review" className="scroll-mt-24 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                                <div className="bg-[#1e1e1e] text-white p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-gray-700 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">#2</div>
                                        <h3 className="font-bold text-xl">Goldco</h3>
                                    </div>
                                    <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded">Best Service</div>
                                </div>
                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row gap-8 mb-6">
                                        <div className="w-full md:w-1/3 bg-gray-100 rounded-xl h-40 flex items-center justify-center text-gray-400">
                                            [Logo/Image]
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <p className="text-text-muted mb-4">
                                                Goldco has mastered the art of <strong>Customer Service</strong>. With over 5,000 5-star reviews, their "White Glove" service handles 98% of the paperwork for you.
                                                We particularly love their aggressive <strong>Free Silver Bonus</strong>—offering up to 10% back in free silver on qualified accounts, which gives you an immediate ROI on day one.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-amber-50 text-amber-700 px-2 py-1 rounded text-xs font-bold">Up to 10k Free Silver</span>
                                                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold">Sean Hannity Pick</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Button variant="gold" size="lg" className="w-full" asChild>
                                            <a href={AFFILIATE_LINKS.goldco} target="_blank" rel="noopener noreferrer">
                                                Get Free Wealth Kit
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full" asChild>
                                            <Link href="/reviews/goldco">Read Full Review</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Review #3: AHG */}
                            <div id="ahg-review" className="scroll-mt-24 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                                <div className="bg-[#1e1e1e] text-white p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-gray-700 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">#3</div>
                                        <h3 className="font-bold text-xl">American Hartford Gold</h3>
                                    </div>
                                    <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded">Best for Families</div>
                                </div>
                                <div className="p-8">
                                    <p className="text-text-muted mb-6">
                                        <strong>American Hartford Gold</strong> is the family-owned underdog that outperforms the giants on price.
                                        Their standout feature is the <strong>Price Match Guarantee</strong>—they promise to meet or beat any competitor's pricing.
                                        If you are looking for lower minimums (starting at just $10k) and a focus on keeping dealer premiums low, AHG is the smart, budget-conscious choice.
                                    </p>
                                    <div className="flex gap-4">
                                        <Button variant="gold" size="lg" className="w-full" asChild>
                                            <a href={AFFILIATE_LINKS.americanHartford} target="_blank" rel="noopener noreferrer">
                                                Get Free Investment Kit
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full" asChild>
                                            <Link href="/reviews/american-hartford-gold">Read Full Review</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Comparison Table Again (Bottom) */}
                            <div className="bg-primary/5 p-8 rounded-2xl text-center">
                                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Still Undecided?</h3>
                                <p className="text-text-muted mb-6">
                                    Comparing these companies side-by-side one last time can help you verify the fees and bonuses.
                                </p>
                                <Button variant="outline" className="bg-white" asChild>
                                    <a href="#comparison-table">
                                        Back to Comparison Table <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </Button>
                            </div>

                        </div>

                        {/* Sticky Sidebar (Right 1/3) */}
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
