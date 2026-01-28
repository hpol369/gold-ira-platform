import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, PieChart, Shield, AlertTriangle, Target, TrendingUp, Clock, CheckCircle2, User } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "How Much Gold Should I Have in My Portfolio? (2026 Guide)",
    description: "Expert recommendations on gold allocation for retirement portfolios. Learn the 5-15% rule, age-based strategies, and how to rebalance your holdings.",
    openGraph: {
        title: "How Much Gold Should I Have in My Portfolio?",
        description: "Expert recommendations on gold allocation. Learn the 5-15% rule and age-based strategies.",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const allocationByAge = [
    { age: "30-40", stocks: "70-80%", bonds: "10-20%", gold: "5-10%", reasoning: "Long time horizon allows for more risk; gold provides crisis insurance" },
    { age: "40-50", stocks: "60-70%", bonds: "15-25%", gold: "10-15%", reasoning: "Balancing growth with protection as retirement approaches" },
    { age: "50-60", stocks: "50-60%", bonds: "25-35%", gold: "10-15%", reasoning: "Increased focus on wealth preservation and income" },
    { age: "60+", stocks: "40-50%", bonds: "30-40%", gold: "10-20%", reasoning: "Maximum protection; gold hedges sequence-of-returns risk" },
];

const expertQuotes = [
    {
        quote: "A 5-10% allocation to gold is appropriate for most diversified portfolios.",
        source: "Ray Dalio, Bridgewater Associates",
    },
    {
        quote: "Gold should be viewed as insurance, not an investment. 10% is a reasonable allocation.",
        source: "Warren Buffett (paraphrased critique response)",
    },
    {
        quote: "We recommend 5-15% in gold for retirement portfolios seeking inflation protection.",
        source: "Common financial advisor guidance",
    },
];

export default function HowMuchGoldPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Header */}
            <header className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
                <Container>
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-[#B22234] font-bold tracking-widest uppercase text-xs mb-4">
                            <PieChart className="h-4 w-4" />
                            Portfolio Strategy
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#000080]">
                            How Much Gold Should Be in Your Portfolio?
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            You&apos;ve worked 30+ years building your nest egg. Now you want to know how much to move into gold. Here&apos;s the straight answer, without the Wall Street jargon.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Quick Answer */}
            <section className="py-12 bg-slate-50 border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-2xl p-8 text-center">
                            <h2 className="text-2xl font-bold text-[#000080] mb-4">The Short Answer</h2>
                            <p className="text-5xl font-bold text-[#B22234] mb-4">5-15%</p>
                            <p className="text-lg text-slate-600">
                                Most experts say <strong className="text-[#000080]">5-15% of your total savings</strong> should be in gold and precious metals. That&apos;s enough protection to matter if markets crash, but not so much that you&apos;re betting the farm.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <Container>
                    <div className="max-w-4xl mx-auto">

                        {/* Why This Range */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-6">Why 5-15%?</h2>
                            <p className="text-slate-600 mb-6">
                                This range isn&apos;t some arbitrary number. It&apos;s based on decades of market data. Here&apos;s the logic:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                    <h3 className="font-bold text-[#000080] mb-3 flex items-center gap-2">
                                        <Shield className="h-5 w-5 text-[#B22234]" />
                                        Below 5% = Not Enough
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        A 1-2% allocation provides minimal protection. If markets crash 40%, a 2% gold position that rises 20% barely moves the needle on your total portfolio.
                                    </p>
                                </div>
                                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                    <h3 className="font-bold text-[#000080] mb-3 flex items-center gap-2">
                                        <AlertTriangle className="h-5 w-5 text-[#B22234]" />
                                        Above 20% = Too Concentrated
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        Gold doesn&apos;t pay dividends or interest. Over-allocating means missing out on compounding growth from productive assets during normal market conditions.
                                    </p>
                                </div>
                                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                    <h3 className="font-bold text-[#000080] mb-3 flex items-center gap-2">
                                        <Target className="h-5 w-5 text-green-600" />
                                        5-15% = Sweet Spot
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        Large enough to provide meaningful downside protection during crises, but small enough to not drag on returns during bull markets.
                                    </p>
                                </div>
                                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                    <h3 className="font-bold text-[#000080] mb-3 flex items-center gap-2">
                                        <TrendingUp className="h-5 w-5 text-green-600" />
                                        Backed by Research
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        Studies show adding 5-10% gold to a 60/40 portfolio has historically improved risk-adjusted returns while reducing maximum drawdowns.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Age-Based Allocation */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-6">Recommended Allocation by Age</h2>
                            <p className="text-slate-600 mb-8">
                                Your ideal gold allocation depends on your age and risk tolerance. Here&apos;s a general framework:
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                    <thead>
                                        <tr className="border-b border-slate-200 bg-slate-50">
                                            <th className="text-left p-4 text-[#000080] font-bold">Age</th>
                                            <th className="text-left p-4 text-[#000080] font-bold">Stocks</th>
                                            <th className="text-left p-4 text-[#000080] font-bold">Bonds</th>
                                            <th className="text-left p-4 text-[#B22234] font-bold">Gold</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        {allocationByAge.map((row, i) => (
                                            <tr key={i} className="border-b border-slate-100">
                                                <td className="p-4 font-medium text-[#000080]">{row.age}</td>
                                                <td className="p-4">{row.stocks}</td>
                                                <td className="p-4">{row.bonds}</td>
                                                <td className="p-4 text-[#B22234] font-semibold">{row.gold}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 space-y-3">
                                {allocationByAge.map((row, i) => (
                                    <div key={i} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                                        <p className="text-slate-600 text-sm">
                                            <strong className="text-[#000080]">{row.age}:</strong> {row.reasoning}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Expert Opinions */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-6">What Experts Say</h2>
                            <div className="space-y-6">
                                {expertQuotes.map((item, i) => (
                                    <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                        <blockquote className="text-lg text-slate-600 italic mb-3">
                                            &quot;{item.quote}&quot;
                                        </blockquote>
                                        <p className="text-[#B22234] text-sm font-medium">— {item.source}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Factors to Consider */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-6">Factors That Affect Your Ideal Allocation</h2>

                            <div className="space-y-4">
                                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                    <h3 className="font-bold text-[#000080] mb-2 flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-[#B22234]" />
                                        Time Horizon
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        <strong>20+ years to retirement?</strong> You can be more aggressive with stocks (5-10% gold). <strong>Near retirement?</strong> More protection makes sense (10-15% gold).
                                    </p>
                                </div>

                                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                    <h3 className="font-bold text-[#000080] mb-2 flex items-center gap-2">
                                        <User className="h-5 w-5 text-[#B22234]" />
                                        Risk Tolerance
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        Can you stomach a 40% portfolio decline? If not, a higher gold allocation provides peace of mind and reduces volatility.
                                    </p>
                                </div>

                                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                    <h3 className="font-bold text-[#000080] mb-2 flex items-center gap-2">
                                        <Shield className="h-5 w-5 text-[#B22234]" />
                                        Other Income Sources
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        Have a pension or Social Security? You can afford more risk. Relying solely on investments? More gold protection is wise.
                                    </p>
                                </div>

                                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                    <h3 className="font-bold text-[#000080] mb-2 flex items-center gap-2">
                                        <TrendingUp className="h-5 w-5 text-[#B22234]" />
                                        Economic Outlook
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        Concerned about inflation, debt, or geopolitical risks? A higher allocation (10-15%) provides more insurance against these scenarios.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Practical Examples */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-6">Practical Examples</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                    <h3 className="font-bold text-[#000080] mb-4">$100,000 Portfolio</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-slate-600">5% Gold Allocation</span>
                                            <span className="text-[#B22234] font-bold">$5,000</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-600">10% Gold Allocation</span>
                                            <span className="text-[#B22234] font-bold">$10,000</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-600">15% Gold Allocation</span>
                                            <span className="text-[#B22234] font-bold">$15,000</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                    <h3 className="font-bold text-[#000080] mb-4">$500,000 Portfolio</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-slate-600">5% Gold Allocation</span>
                                            <span className="text-[#B22234] font-bold">$25,000</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-600">10% Gold Allocation</span>
                                            <span className="text-[#B22234] font-bold">$50,000</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-600">15% Gold Allocation</span>
                                            <span className="text-[#B22234] font-bold">$75,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* How to Implement */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-6">How to Implement Your Gold Allocation</h2>

                            <div className="space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-white flex items-center justify-center font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Calculate Your Target Amount</h4>
                                        <p className="text-sm text-slate-500 mt-1">Total portfolio value x your chosen percentage = target gold allocation</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-white flex items-center justify-center font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Choose Your Gold Vehicle</h4>
                                        <p className="text-sm text-slate-500 mt-1">Physical gold in an IRA, gold ETFs, or a combination. Gold IRA offers tax advantages and physical ownership.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-white flex items-center justify-center font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Fund Gradually (Optional)</h4>
                                        <p className="text-sm text-slate-500 mt-1">Consider dollar-cost averaging into gold over 6-12 months to reduce timing risk.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-white flex items-center justify-center font-bold shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Rebalance Annually</h4>
                                        <p className="text-sm text-slate-500 mt-1">Check your allocation yearly. If gold has grown to 20%, sell some. If it&apos;s dropped to 5%, add more.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Common Mistakes */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-6">Common Mistakes to Avoid</h2>

                            <div className="space-y-4">
                                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                                    <h3 className="font-bold text-red-700 mb-2">Going All-In After a Crash</h3>
                                    <p className="text-slate-600 text-sm">
                                        Don&apos;t panic-buy gold after markets crash. That&apos;s often when gold prices are highest. Have your allocation set beforehand.
                                    </p>
                                </div>
                                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                                    <h3 className="font-bold text-red-700 mb-2">Treating Gold as a Trading Vehicle</h3>
                                    <p className="text-slate-600 text-sm">
                                        Gold is insurance, not a get-rich-quick scheme. Don&apos;t try to time gold prices. Set your allocation and stick with it.
                                    </p>
                                </div>
                                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                                    <h3 className="font-bold text-red-700 mb-2">Ignoring Rebalancing</h3>
                                    <p className="text-slate-600 text-sm">
                                        If gold surges 50%, your allocation drifts too high. If stocks surge, your gold allocation gets too low. Rebalance annually.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="mb-16">
                            <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-[#000080] mb-6 text-center">Summary: Your Gold Allocation</h2>
                                <div className="grid md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <p className="text-slate-500 text-sm mb-2">Conservative</p>
                                        <p className="text-3xl font-bold text-[#B22234]">5%</p>
                                        <p className="text-slate-500 text-xs mt-1">Basic diversification</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-sm mb-2">Recommended</p>
                                        <p className="text-3xl font-bold text-[#B22234]">10%</p>
                                        <p className="text-slate-500 text-xs mt-1">Balanced protection</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-sm mb-2">Aggressive</p>
                                        <p className="text-3xl font-bold text-[#B22234]">15%</p>
                                        <p className="text-slate-500 text-xs mt-1">Maximum insurance</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Protect What You&apos;ve Built?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">
                                    You didn&apos;t work three decades to lose it in the next crash. Get a straight answer on what makes sense for your situation.
                                </p>
                                <Button variant="gold" size="xl" asChild>
                                    <Link href="/quiz">
                                        Get My Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Footer CTA */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <Container>
                    <AugustaCTA variant="footer" trackSource="learn-how-much-gold" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
