import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, XCircle, Scale, Coins, Box, Shield, TrendingUp, DollarSign } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gold Bullion vs Gold Coins: Which Is Better for Your IRA? (2026)",
    description: "Compare gold bullion bars vs gold coins for your IRA. Learn the pros, cons, premiums, and liquidity differences. Expert guide for retirement investors.",
    openGraph: {
        title: "Gold Bullion vs Gold Coins: Which Is Better for Your IRA?",
        description: "Compare gold bullion bars vs gold coins for your IRA. Learn the pros, cons, premiums, and liquidity differences.",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const comparisonData = [
    {
        feature: "Premium Over Spot",
        bullion: "Lower (1-3%)",
        coins: "Higher (3-8%)",
        winner: "bullion",
    },
    {
        feature: "Liquidity",
        bullion: "Good",
        coins: "Excellent",
        winner: "coins",
    },
    {
        feature: "Recognition",
        bullion: "Requires assay",
        coins: "Instantly recognizable",
        winner: "coins",
    },
    {
        feature: "Storage Flexibility",
        bullion: "Less flexible (large bars)",
        coins: "More flexible (sell partial)",
        winner: "coins",
    },
    {
        feature: "Collectible Value",
        bullion: "None",
        coins: "Potential numismatic premium",
        winner: "coins",
    },
    {
        feature: "IRA Eligibility",
        bullion: "Yes (if .995+ purity)",
        coins: "Yes (specific coins)",
        winner: "tie",
    },
    {
        feature: "Best For",
        bullion: "Maximum gold per dollar",
        coins: "Flexibility & recognition",
        winner: "tie",
    },
];

export default function GoldBullionVsCoinsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Header */}
            <header className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
                <Container>
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-[#B22234] font-bold tracking-widest uppercase text-xs mb-4">
                            <Scale className="h-4 w-4" />
                            Investment Comparison
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#000080]">
                            Gold Bullion vs Gold Coins
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            You&apos;ve worked decades to build your retirement savings. Now you want to protect it with gold. But should you buy bars or coins? Here&apos;s the straight talk on premiums, liquidity, and which makes sense for your situation.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Quick Answer */}
            <section className="py-12 bg-slate-50 border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-[#000080] mb-4">Quick Answer</h2>
                            <p className="text-lg text-slate-600 mb-4">
                                <strong className="text-[#000080]">For most folks protecting their retirement, coins are the better choice.</strong> They&apos;re easier to sell when you need them, everyone recognizes them, and you can cash out a few at a time instead of all or nothing. If you&apos;ve got $100,000+ to move, bars can save you some money on markups.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-[#B22234]">
                                    <Coins className="h-5 w-5" />
                                    <span className="font-semibold">Coins: Best for most investors</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-500">
                                    <Box className="h-5 w-5" />
                                    <span>Bars: Best for large investments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <Container>
                    <div className="max-w-4xl mx-auto">

                        {/* What is Bullion */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-[#B22234]/10 rounded-xl">
                                    <Box className="h-6 w-6 text-[#B22234]" />
                                </div>
                                <h2 className="text-3xl font-bold text-[#000080]">What is Gold Bullion?</h2>
                            </div>
                            <p className="text-slate-600 mb-6">
                                Gold bullion refers to gold bars or ingots, typically valued purely for their metal content rather than any collectible value. Bullion bars come in various sizes:
                            </p>
                            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                {["1 oz", "10 oz", "1 kilo (32.15 oz)", "100 oz"].map((size) => (
                                    <div key={size} className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm">
                                        <span className="text-[#000080] font-semibold">{size}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-500 text-sm">
                                For Gold IRAs, bars must be .995 fine (99.5% pure) or higher and produced by a NYMEX or COMEX-approved refiner or national mint.
                            </p>
                        </div>

                        {/* What are Coins */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-[#B22234]/10 rounded-xl">
                                    <Coins className="h-6 w-6 text-[#B22234]" />
                                </div>
                                <h2 className="text-3xl font-bold text-[#000080]">What are Gold Coins?</h2>
                            </div>
                            <p className="text-slate-600 mb-6">
                                Gold coins are minted by government mints and carry a face value (though their gold value far exceeds it). IRA-approved coins include:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                                    <h4 className="font-bold text-[#000080] mb-2">American Gold Eagle</h4>
                                    <p className="text-slate-500 text-sm">Most popular. 91.67% gold (22 karat). The only IRA-approved coin that doesn&apos;t need to be .995 pure due to special IRS exemption.</p>
                                </div>
                                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                                    <h4 className="font-bold text-[#000080] mb-2">American Gold Buffalo</h4>
                                    <p className="text-slate-500 text-sm">99.99% pure gold (24 karat). First pure gold coin minted by the US government.</p>
                                </div>
                                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                                    <h4 className="font-bold text-[#000080] mb-2">Canadian Gold Maple Leaf</h4>
                                    <p className="text-slate-500 text-sm">99.99% pure. Known for its high purity and intricate security features.</p>
                                </div>
                                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                                    <h4 className="font-bold text-[#000080] mb-2">Austrian Gold Philharmonic</h4>
                                    <p className="text-slate-500 text-sm">99.99% pure. Features the Vienna Philharmonic Orchestra design.</p>
                                </div>
                            </div>
                            <Link href="/learn/ira-approved-gold-coins" className="inline-flex items-center gap-2 text-[#B22234] font-semibold hover:text-[#B22234]/80">
                                See full list of IRA-approved coins
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        {/* Comparison Table */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-8 text-center">Side-by-Side Comparison</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                    <thead>
                                        <tr className="border-b border-slate-200 bg-slate-50">
                                            <th className="text-left p-4 text-[#000080] font-bold">Feature</th>
                                            <th className="text-left p-4 text-[#B22234] font-bold">
                                                <div className="flex items-center gap-2">
                                                    <Box className="h-4 w-4" />
                                                    Bullion Bars
                                                </div>
                                            </th>
                                            <th className="text-left p-4 text-[#B22234] font-bold">
                                                <div className="flex items-center gap-2">
                                                    <Coins className="h-4 w-4" />
                                                    Gold Coins
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        {comparisonData.map((row, i) => (
                                            <tr key={i} className="border-b border-slate-100">
                                                <td className="p-4 font-medium text-[#000080]">{row.feature}</td>
                                                <td className={`p-4 ${row.winner === 'bullion' ? 'text-green-600' : ''}`}>
                                                    {row.winner === 'bullion' && <CheckCircle2 className="inline h-4 w-4 mr-1" />}
                                                    {row.bullion}
                                                </td>
                                                <td className={`p-4 ${row.winner === 'coins' ? 'text-green-600' : ''}`}>
                                                    {row.winner === 'coins' && <CheckCircle2 className="inline h-4 w-4 mr-1" />}
                                                    {row.coins}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Pros and Cons */}
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {/* Bullion Pros/Cons */}
                            <div>
                                <h3 className="text-xl font-bold text-[#000080] mb-6 flex items-center gap-2">
                                    <Box className="h-5 w-5 text-[#B22234]" />
                                    Gold Bullion Bars
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                                        <h4 className="font-bold text-green-700 mb-3">Pros</h4>
                                        <ul className="space-y-2 text-green-800 text-sm">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                                                Lower premiums over spot price
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                                                More gold per dollar invested
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                                                Easier to stack and store large amounts
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                                                Simple pricing (weight x spot price)
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                                        <h4 className="font-bold text-red-700 mb-3">Cons</h4>
                                        <ul className="space-y-2 text-red-800 text-sm">
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
                                                Less liquid (harder to sell quickly)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
                                                May require assay to verify authenticity
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
                                                Less flexible (can&apos;t sell half a bar)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
                                                Counterfeits harder to detect
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Coins Pros/Cons */}
                            <div>
                                <h3 className="text-xl font-bold text-[#000080] mb-6 flex items-center gap-2">
                                    <Coins className="h-5 w-5 text-[#B22234]" />
                                    Gold Coins
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                                        <h4 className="font-bold text-green-700 mb-3">Pros</h4>
                                        <ul className="space-y-2 text-green-800 text-sm">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                                                Highly liquid and easily tradeable
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                                                Instantly recognizable worldwide
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                                                Government-backed authenticity
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                                                Flexible (sell one coin at a time)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                                                Potential numismatic value
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                                        <h4 className="font-bold text-red-700 mb-3">Cons</h4>
                                        <ul className="space-y-2 text-red-800 text-sm">
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
                                                Higher premiums over spot
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
                                                Less gold per dollar invested
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
                                                Premiums vary by coin type
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Premium Comparison */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-6">Understanding Premiums</h2>
                            <p className="text-slate-600 mb-6">
                                The &quot;premium&quot; is how much you pay above the spot price of gold. It covers minting costs, dealer margins, and supply/demand factors.
                            </p>
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                <h4 className="font-bold text-[#000080] mb-4">Typical Premiums (2026)</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600">1 oz Gold Bar</span>
                                        <span className="text-green-600 font-bold">1-3% over spot</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600">American Gold Eagle (1 oz)</span>
                                        <span className="text-[#B22234] font-bold">4-6% over spot</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600">American Gold Buffalo (1 oz)</span>
                                        <span className="text-[#B22234] font-bold">3-5% over spot</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600">Canadian Maple Leaf (1 oz)</span>
                                        <span className="text-[#B22234] font-bold">3-5% over spot</span>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm mt-4">
                                    Note: Premiums fluctuate based on market conditions. During high demand, coin premiums can spike significantly.
                                </p>
                            </div>
                        </div>

                        {/* Recommendation */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-6">Our Recommendation</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-[#B22234] mb-3">Choose Coins If...</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>You&apos;re rolling over $50,000-$100,000 from your 401(k)</li>
                                        <li>You want flexibility to sell some without liquidating everything</li>
                                        <li>You value being able to sell quickly if needed</li>
                                        <li>You&apos;re moving to gold for the first time</li>
                                    </ul>
                                </div>
                                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                    <h3 className="text-xl font-bold text-[#000080] mb-3">Choose Bars If...</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>You&apos;re rolling over $100,000 or more</li>
                                        <li>You want every dollar buying actual gold</li>
                                        <li>You&apos;re protecting savings you won&apos;t touch for 10+ years</li>
                                        <li>You&apos;re not worried about selling in pieces</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-slate-500 mt-6 text-center">
                                <strong className="text-[#000080]">Pro Tip:</strong> Many investors do both—using bars for the bulk of their holdings and coins for flexibility.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Protect What You&apos;ve Built?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">
                                    Get straight answers on the right mix of coins and bars for your retirement savings. No sales pressure, just honest guidance.
                                </p>
                                <Button variant="gold" size="xl" asChild>
                                    <Link href="/quiz">
                                        Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
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
                    <AugustaCTA variant="footer" trackSource="learn-bullion-vs-coins" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
