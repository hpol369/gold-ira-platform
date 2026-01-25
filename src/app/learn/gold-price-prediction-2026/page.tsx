import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, TrendingUp, TrendingDown, AlertTriangle, BarChart3, Globe, DollarSign, Building2, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gold Price Prediction 2026: Expert Forecasts & Analysis",
    description: "What will gold prices do in 2026? Expert predictions from major banks, analysts, and market factors driving gold. Updated analysis for investors.",
    openGraph: {
        title: "Gold Price Prediction 2026: Expert Forecasts & Analysis",
        description: "What will gold prices do in 2026? Expert predictions from major banks and analysts.",
    },
};

const predictions = [
    {
        source: "Goldman Sachs",
        prediction: "$2,900 - $3,100",
        stance: "bullish",
        reasoning: "Central bank buying and geopolitical uncertainty",
    },
    {
        source: "J.P. Morgan",
        prediction: "$2,800 - $3,000",
        stance: "bullish",
        reasoning: "Fed rate cuts and dollar weakness",
    },
    {
        source: "Bank of America",
        prediction: "$3,000+",
        stance: "bullish",
        reasoning: "De-dollarization and inflation hedging",
    },
    {
        source: "UBS",
        prediction: "$2,600 - $2,800",
        stance: "neutral",
        reasoning: "Strong but moderating demand",
    },
    {
        source: "Citibank",
        prediction: "$2,500 - $2,700",
        stance: "neutral",
        reasoning: "Economic uncertainty balanced by rate normalization",
    },
];

const bullishFactors = [
    {
        icon: Building2,
        title: "Central Bank Buying",
        description: "Central banks bought record amounts of gold in 2024-2025, diversifying away from the US dollar.",
    },
    {
        icon: Globe,
        title: "Geopolitical Tensions",
        description: "Ongoing conflicts and trade wars drive safe-haven demand for gold.",
    },
    {
        icon: DollarSign,
        title: "Dollar Weakness",
        description: "Expected Fed rate cuts typically weaken the dollar, boosting gold prices.",
    },
    {
        icon: TrendingUp,
        title: "Inflation Concerns",
        description: "Despite official numbers, real-world inflation remains elevated for many goods.",
    },
    {
        icon: Shield,
        title: "De-dollarization",
        description: "BRICS nations actively reducing dollar holdings, increasing gold reserves.",
    },
];

const bearishFactors = [
    {
        icon: BarChart3,
        title: "Strong Stock Markets",
        description: "If equities continue to rally, investors may prefer stocks over gold.",
    },
    {
        icon: TrendingDown,
        title: "Real Rates Rising",
        description: "Higher real interest rates make non-yielding gold less attractive.",
    },
    {
        icon: Zap,
        title: "Crypto Competition",
        description: "Bitcoin and digital assets compete for 'alternative asset' allocation.",
    },
];

export default function GoldPricePrediction2026Page() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <Navbar />

            {/* Header */}
            <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 border-b border-white/10">
                <Container>
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">
                            <BarChart3 className="h-4 w-4" />
                            Market Analysis
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Gold Price Prediction 2026
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            What do the experts say about gold prices this year? We compile forecasts from major banks, analyze key market drivers, and help you understand what it means for your portfolio.
                        </p>
                        <p className="text-sm text-slate-500 mt-4">Last Updated: January 2026</p>
                    </div>
                </Container>
            </header>

            {/* Current Price Banner */}
            <section className="bg-amber-500/10 border-b border-amber-500/30 py-6">
                <Container>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
                        <div className="text-center md:text-left">
                            <p className="text-amber-300 text-sm">Current Gold Spot Price</p>
                            <p className="text-3xl font-bold text-white">~$2,750/oz</p>
                        </div>
                        <div className="text-center">
                            <p className="text-amber-300 text-sm">2025 Performance</p>
                            <p className="text-2xl font-bold text-green-400">+27%</p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-amber-300 text-sm">Consensus 2026 Target</p>
                            <p className="text-3xl font-bold text-amber-400">$2,800 - $3,100</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Disclaimer */}
            <section className="py-6 bg-slate-800/50">
                <Container>
                    <div className="flex items-center gap-4 max-w-4xl mx-auto">
                        <AlertTriangle className="h-6 w-6 text-amber-400 shrink-0" />
                        <p className="text-slate-400 text-sm">
                            <strong className="text-white">Disclaimer:</strong> Price predictions are speculative. No one can accurately predict future gold prices. This analysis is for educational purposes only, not investment advice.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <Container>
                    <div className="max-w-4xl mx-auto">

                        {/* Expert Predictions */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-8">What the Experts Predict</h2>
                            <p className="text-slate-300 mb-8">
                                Major financial institutions have released their 2026 gold price forecasts. Here&apos;s what they&apos;re saying:
                            </p>

                            <div className="space-y-4">
                                {predictions.map((pred, i) => (
                                    <div key={i} className={`bg-white/5 border rounded-xl p-6 ${pred.stance === 'bullish' ? 'border-green-500/30' : 'border-white/10'}`}>
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{pred.source}</h3>
                                                <p className="text-slate-400 text-sm">{pred.reasoning}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className={`text-2xl font-bold ${pred.stance === 'bullish' ? 'text-green-400' : 'text-amber-400'}`}>
                                                    {pred.prediction}
                                                </p>
                                                <p className={`text-xs uppercase tracking-wide ${pred.stance === 'bullish' ? 'text-green-400' : 'text-amber-400'}`}>
                                                    {pred.stance}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-slate-500 text-sm mt-6">
                                Note: Predictions compiled from public research reports. Actual analyst views may have changed since publication.
                            </p>
                        </div>

                        {/* Bullish Factors */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-green-500/20 rounded-xl">
                                    <TrendingUp className="h-6 w-6 text-green-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">Factors That Could Push Gold Higher</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {bullishFactors.map((factor, i) => (
                                    <div key={i} className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <factor.icon className="h-5 w-5 text-green-400" />
                                            <h3 className="font-bold text-white">{factor.title}</h3>
                                        </div>
                                        <p className="text-slate-300 text-sm">{factor.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bearish Factors */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-red-500/20 rounded-xl">
                                    <TrendingDown className="h-6 w-6 text-red-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">Factors That Could Pressure Gold</h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {bearishFactors.map((factor, i) => (
                                    <div key={i} className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <factor.icon className="h-5 w-5 text-red-400" />
                                            <h3 className="font-bold text-white">{factor.title}</h3>
                                        </div>
                                        <p className="text-slate-300 text-sm">{factor.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Historical Context */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6">Historical Context</h2>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h4 className="font-bold text-white mb-4">Gold&apos;s Recent Performance</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                                        <span className="text-slate-300">2020</span>
                                        <span className="text-green-400 font-bold">+24.6%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                                        <span className="text-slate-300">2021</span>
                                        <span className="text-red-400 font-bold">-3.6%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                                        <span className="text-slate-300">2022</span>
                                        <span className="text-red-400 font-bold">-0.3%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                                        <span className="text-slate-300">2023</span>
                                        <span className="text-green-400 font-bold">+13.1%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                                        <span className="text-slate-300">2024</span>
                                        <span className="text-green-400 font-bold">+27.2%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
                                        <span className="text-amber-300">2025 YTD</span>
                                        <span className="text-green-400 font-bold">+4.8%</span>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm mt-4">
                                    Gold has delivered positive returns in 4 of the last 5 years, with 2024 being an exceptionally strong year.
                                </p>
                            </div>
                        </div>

                        {/* Key Events to Watch */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6">Key Events to Watch in 2026</h2>
                            <div className="space-y-4">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="font-bold text-white mb-2">Federal Reserve Policy</h3>
                                    <p className="text-slate-300 text-sm">
                                        The pace and magnitude of rate cuts will significantly impact gold. More cuts = bullish for gold. Fewer cuts = headwind.
                                    </p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="font-bold text-white mb-2">US Dollar Strength</h3>
                                    <p className="text-slate-300 text-sm">
                                        Gold typically moves inversely to the dollar. Watch the DXY index—weakness in the dollar supports higher gold prices.
                                    </p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="font-bold text-white mb-2">Central Bank Purchases</h3>
                                    <p className="text-slate-300 text-sm">
                                        China, Russia, and other central banks have been aggressive buyers. Continued accumulation supports prices.
                                    </p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="font-bold text-white mb-2">Geopolitical Developments</h3>
                                    <p className="text-slate-300 text-sm">
                                        Escalation in global conflicts or trade tensions typically drives safe-haven demand for gold.
                                    </p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="font-bold text-white mb-2">Inflation Data</h3>
                                    <p className="text-slate-300 text-sm">
                                        Persistent inflation above the Fed&apos;s 2% target would be bullish for gold as an inflation hedge.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* What This Means For You */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6">What This Means for Retirement Investors</h2>
                            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8">
                                <p className="text-slate-300 mb-6">
                                    While price predictions are interesting, they shouldn&apos;t drive your investment decisions. Here&apos;s what actually matters:
                                </p>
                                <ul className="space-y-4 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <Shield className="h-5 w-5 text-amber-400 mt-1 shrink-0" />
                                        <div>
                                            <strong className="text-white">Gold is insurance, not speculation.</strong> Focus on portfolio protection, not short-term price movements.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <BarChart3 className="h-5 w-5 text-amber-400 mt-1 shrink-0" />
                                        <div>
                                            <strong className="text-white">Time in market beats timing the market.</strong> Dollar-cost averaging smooths out volatility.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Globe className="h-5 w-5 text-amber-400 mt-1 shrink-0" />
                                        <div>
                                            <strong className="text-white">Think long-term.</strong> Gold&apos;s value is in wealth preservation over decades, not months.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Our Take */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6">Our Take</h2>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                <p className="text-slate-300 mb-4">
                                    The consensus among major institutions is <strong className="text-green-400">moderately bullish</strong> for gold in 2026. Multiple structural factors support higher prices:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
                                    <li>Central banks continue to accumulate gold at record pace</li>
                                    <li>Geopolitical uncertainty remains elevated</li>
                                    <li>US national debt concerns growing</li>
                                    <li>De-dollarization trend accelerating</li>
                                </ul>
                                <p className="text-slate-300">
                                    However, remember that experts have been wrong before—in both directions. The smartest approach is to allocate what makes sense for your risk tolerance and time horizon, regardless of short-term predictions.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Add Gold to Your Portfolio?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">
                                    Don&apos;t wait for the &quot;perfect&quot; price. Learn how a Gold IRA can protect your retirement savings from market volatility and inflation.
                                </p>
                                <Button variant="gold" size="xl" asChild>
                                    <Link href="/quiz">
                                        Check Your Eligibility <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Content */}
            <section className="py-12 bg-slate-800/50 border-t border-white/10">
                <Container>
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Related Analysis</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/why-gold/central-banks-buying-gold" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                            <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Why Central Banks Buy Gold</h3>
                            <p className="text-slate-400 text-sm">Record accumulation explained</p>
                        </Link>
                        <Link href="/why-gold/inflation-protection" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                            <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Gold as Inflation Hedge</h3>
                            <p className="text-slate-400 text-sm">Historical performance data</p>
                        </Link>
                        <Link href="/learn/how-much-gold-in-portfolio" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                            <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">How Much Gold to Own</h3>
                            <p className="text-slate-400 text-sm">Portfolio allocation guide</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Footer CTA */}
            <section className="py-16">
                <Container>
                    <AugustaCTA variant="footer" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
