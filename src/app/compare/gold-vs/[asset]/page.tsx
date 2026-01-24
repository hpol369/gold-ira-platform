// src/app/compare/gold-vs/[asset]/page.tsx
// Programmatic SEO: "Gold vs [Asset]" comparison pages

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  assets,
  getAssetBySlug,
  getAllAssetSlugs,
  GOLD_BASELINE,
  calculateComparison
} from "@/data/assets";
import {
  ArrowRight,
  Scale,
  CheckCircle2,
  XCircle,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ asset: string }>;
}

// Generate all static paths
export async function generateStaticParams() {
  return getAllAssetSlugs().map((slug) => ({
    asset: slug,
  }));
}

// Dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { asset: slug } = await params;
  const asset = getAssetBySlug(slug);

  if (!asset) {
    return { title: "Comparison Not Found" };
  }

  return {
    title: `Gold vs ${asset.name}: Which Protects Your Retirement Better? | Rich Dad Retirement`,
    description: `Compare Physical Gold vs ${asset.name} (${asset.ticker}) for retirement. See 10-year returns, volatility, inflation protection, and which asset protects your wealth better.`,
    keywords: [
      `gold vs ${asset.name.toLowerCase()}`,
      `${asset.name} vs gold`,
      `${asset.ticker} vs gold`,
      `should I invest in gold or ${asset.name.toLowerCase()}`,
      `gold or ${asset.name.toLowerCase()} for retirement`,
      "gold ira",
      "retirement investing",
    ],
  };
}

export default async function GoldVsAssetPage({ params }: PageProps) {
  const { asset: slug } = await params;
  const asset = getAssetBySlug(slug);

  if (!asset) {
    notFound();
  }

  const comparison = calculateComparison(asset);
  const gold = GOLD_BASELINE;

  // Determine winner for each category
  const winners = {
    returns10y: asset.returns.year10 > gold.returns.year10 ? "asset" : "gold",
    volatility: asset.volatility < gold.volatility ? "asset" : "gold",
    drawdown: asset.maxDrawdown > gold.maxDrawdown ? "asset" : "gold",
    inflation: asset.inflationCorrelation > gold.inflationCorrelation ? "asset" : "gold",
  };

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.1),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-sm font-semibold text-amber-400 mb-6">
              <Scale className="h-4 w-4" />
              Head-to-Head Comparison
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              <span className="text-amber-400">Gold</span>
              <span className="text-amber-500 mx-4">vs</span>
              <span className="text-slate-300">{asset.name}</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Which asset better protects your retirement savings? We compare physical gold against {asset.name} ({asset.ticker}) on returns, risk, and inflation protection.
            </p>

            {/* Quick Verdict */}
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
              <div className={cn(
                "w-3 h-3 rounded-full",
                comparison.goldAdvantage >= 60 ? "bg-amber-500" : "bg-slate-400"
              )} />
              <span className="text-white font-medium">
                Gold Advantage Score: <span className="text-amber-400 font-bold">{comparison.goldAdvantage}/100</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Comparison Grid */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Gold Card - First (Winner Position) */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-amber-500/30 overflow-hidden shadow-[0_0_30px_-5px_rgba(251,191,36,0.15)]">
              <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 px-6 py-4 border-b border-amber-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-amber-400 uppercase tracking-wider">Hard Asset</span>
                    <h3 className="text-2xl font-bold text-white">Physical Gold</h3>
                  </div>
                  <div className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-slate-300 text-sm">{gold.description}</p>

                {/* Returns */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-amber-500/10">
                    <div className="text-xs text-amber-400 mb-1">10-Year Return</div>
                    <div className="text-2xl font-bold text-green-400">
                      +{gold.returns.year10}%
                    </div>
                    <div className="text-xs text-slate-500">annualized</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-amber-500/10">
                    <div className="text-xs text-amber-400 mb-1">Volatility</div>
                    <div className="text-2xl font-bold text-white">{gold.volatility}%</div>
                    <div className="text-xs text-slate-500">std deviation</div>
                  </div>
                </div>

                {/* Risk Metrics */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Max Drawdown</span>
                    <span className="text-amber-400 font-bold">{gold.maxDrawdown}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Inflation Correlation</span>
                    <span className="text-green-400 font-bold">+{gold.inflationCorrelation.toFixed(2)}</span>
                  </div>
                </div>

                {/* Facts */}
                <div className="space-y-2">
                  <div className="text-xs text-amber-400 uppercase tracking-wider mb-2">Key Benefits</div>
                  {gold.facts.map((fact, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Asset Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <div className="bg-slate-800/50 px-6 py-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider">Paper Asset</span>
                    <h3 className="text-2xl font-bold text-white">{asset.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400">Ticker</span>
                    <div className="text-xl font-mono text-slate-300">{asset.ticker}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-slate-300 text-sm">{asset.description}</p>

                {/* Returns */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-white/5">
                    <div className="text-xs text-slate-400 mb-1">10-Year Return</div>
                    <div className={cn(
                      "text-2xl font-bold",
                      asset.returns.year10 > 0 ? "text-green-400" : "text-red-400"
                    )}>
                      {asset.returns.year10 > 0 ? "+" : ""}{asset.returns.year10}%
                    </div>
                    <div className="text-xs text-slate-500">annualized</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-white/5">
                    <div className="text-xs text-slate-400 mb-1">Volatility</div>
                    <div className="text-2xl font-bold text-white">{asset.volatility}%</div>
                    <div className="text-xs text-slate-500">std deviation</div>
                  </div>
                </div>

                {/* Risk Metrics */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Max Drawdown</span>
                    <span className="text-red-400 font-bold">{asset.maxDrawdown}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Inflation Correlation</span>
                    <span className={cn(
                      "font-bold",
                      asset.inflationCorrelation > 0.3 ? "text-green-400" : "text-red-400"
                    )}>
                      {asset.inflationCorrelation > 0 ? "+" : ""}{asset.inflationCorrelation.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Facts */}
                <div className="space-y-2">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">Key Risks</div>
                  {asset.facts.map((fact, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Comparison Table */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden mb-16">
            <div className="bg-slate-800/50 px-6 py-4 border-b border-white/10">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-amber-400" />
                Performance Comparison
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-400">Metric</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-amber-400">Gold</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-white">{asset.name}</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-slate-400">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6 text-slate-300">1-Year Return</td>
                    <td className="text-center py-4 px-6 text-amber-400">{gold.returns.year1}%</td>
                    <td className="text-center py-4 px-6 text-white">{asset.returns.year1}%</td>
                    <td className="text-center py-4 px-6">
                      <span className={cn(
                        "text-xs font-bold px-2 py-1 rounded",
                        gold.returns.year1 > asset.returns.year1
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-slate-700 text-slate-300"
                      )}>
                        {gold.returns.year1 > asset.returns.year1 ? "GOLD" : asset.ticker}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6 text-slate-300">5-Year Return</td>
                    <td className="text-center py-4 px-6 text-amber-400">{gold.returns.year5}%</td>
                    <td className="text-center py-4 px-6 text-white">{asset.returns.year5}%</td>
                    <td className="text-center py-4 px-6">
                      <span className={cn(
                        "text-xs font-bold px-2 py-1 rounded",
                        gold.returns.year5 > asset.returns.year5
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-slate-700 text-slate-300"
                      )}>
                        {gold.returns.year5 > asset.returns.year5 ? "GOLD" : asset.ticker}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6 text-slate-300">10-Year Return</td>
                    <td className="text-center py-4 px-6 text-amber-400">{gold.returns.year10}%</td>
                    <td className="text-center py-4 px-6 text-white">{asset.returns.year10}%</td>
                    <td className="text-center py-4 px-6">
                      <span className={cn(
                        "text-xs font-bold px-2 py-1 rounded",
                        winners.returns10y === "gold"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-slate-700 text-slate-300"
                      )}>
                        {winners.returns10y === "gold" ? "GOLD" : asset.ticker}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6 text-slate-300">Volatility (Lower = Better)</td>
                    <td className="text-center py-4 px-6 text-amber-400">{gold.volatility}%</td>
                    <td className="text-center py-4 px-6 text-white">{asset.volatility}%</td>
                    <td className="text-center py-4 px-6">
                      <span className={cn(
                        "text-xs font-bold px-2 py-1 rounded",
                        winners.volatility === "gold"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-slate-700 text-slate-300"
                      )}>
                        {winners.volatility === "gold" ? "GOLD" : asset.ticker}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6 text-slate-300">Max Drawdown (Smaller = Better)</td>
                    <td className="text-center py-4 px-6 text-amber-400">{gold.maxDrawdown}%</td>
                    <td className="text-center py-4 px-6 text-white">{asset.maxDrawdown}%</td>
                    <td className="text-center py-4 px-6">
                      <span className={cn(
                        "text-xs font-bold px-2 py-1 rounded",
                        winners.drawdown === "gold"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-slate-700 text-slate-300"
                      )}>
                        {winners.drawdown === "gold" ? "GOLD" : asset.ticker}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-slate-300">Inflation Protection</td>
                    <td className="text-center py-4 px-6 text-amber-400">{gold.inflationCorrelation.toFixed(2)}</td>
                    <td className="text-center py-4 px-6 text-white">{asset.inflationCorrelation.toFixed(2)}</td>
                    <td className="text-center py-4 px-6">
                      <span className={cn(
                        "text-xs font-bold px-2 py-1 rounded",
                        winners.inflation === "gold"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-slate-700 text-slate-300"
                      )}>
                        {winners.inflation === "gold" ? "GOLD" : asset.ticker}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* The Verdict */}
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 rounded-2xl border border-amber-500/20 p-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                The Verdict: Gold vs {asset.name}
              </h2>
              <p className="text-slate-300 mb-6">
                {comparison.goldAdvantage >= 70 ? (
                  <>While {asset.name} may offer higher short-term returns, <strong className="text-amber-400">gold provides superior wealth protection</strong> for retirees. Gold&apos;s lower volatility, better inflation correlation, and zero counterparty risk make it the smarter choice for preserving purchasing power.</>
                ) : comparison.goldAdvantage >= 50 ? (
                  <>Both {asset.name} and gold have their merits. However, for retirement portfolios where <strong className="text-amber-400">wealth preservation matters more than speculation</strong>, gold&apos;s stability and inflation protection give it an edge.</>
                ) : (
                  <>{asset.name} has outperformed gold in recent years. However, <strong className="text-amber-400">past performance doesn&apos;t guarantee future results</strong>. Gold remains essential for portfolio diversification and crisis protection.</>
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" asChild>
                  <Link href="/quiz">
                    Find Your Ideal Gold IRA <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10">
                  <Link href="/best-gold-ira-companies">
                    Compare Top Companies
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Related Comparisons */}
          <div className="mb-16">
            <h2 className="text-xl font-bold text-white mb-6">More Gold Comparisons</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {assets
                .filter((a) => a.slug !== slug)
                .slice(0, 8)
                .map((a) => (
                  <Link
                    key={a.slug}
                    href={`/compare/gold-vs/${a.slug}`}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/30 rounded-lg p-4 transition-all"
                  >
                    <div className="text-xs text-slate-400 mb-1">{a.category}</div>
                    <div className="font-medium text-white">Gold vs {a.name}</div>
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Ready to Add Gold to Your Retirement?
            </h2>
            <p className="text-slate-400 mb-8">
              Take our 60-second quiz to find the best Gold IRA company for your situation. Get personalized recommendations and a free investor kit.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link href="/quiz">
                Take the Quiz <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
