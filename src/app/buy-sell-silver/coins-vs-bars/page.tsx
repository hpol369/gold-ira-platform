import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import {
  ArrowRight,
  Coins,
  SquareStack,
  Scale,
  CheckCircle2,
  XCircle,
  Target,
  DollarSign,
  Shield,
  TrendingUp,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Silver Coins vs Bars: Which Should You Buy? Complete Comparison (2026)",
  description:
    "Compare silver coins vs silver bars for investment. Analyze premiums, liquidity, storage, and which is better for your goals. Expert recommendations.",
  url: "https://www.richdadretirement.com/buy-sell-silver/coins-vs-bars",
  imageAlt: "Silver Coins vs Bars Comparison - Rich Dad Retirement",
});

const comparisonFactors = [
  {
    factor: "Premiums Over Spot",
    coins: "Higher (15-40%)",
    bars: "Lower (5-15%)",
    winner: "bars",
    explanation: "Bars cost less per ounce of silver. For pure metal accumulation, bars win.",
  },
  {
    factor: "Liquidity (Ease of Selling)",
    coins: "Higher - sell anywhere",
    bars: "Lower - fewer buyers",
    winner: "coins",
    explanation: "Sovereign coins like Eagles are universally recognized and easy to sell.",
  },
  {
    factor: "Recognition",
    coins: "Universal",
    bars: "Varies by brand",
    winner: "coins",
    explanation: "Government-minted coins are trusted worldwide. Bar brands vary in recognition.",
  },
  {
    factor: "Divisibility",
    coins: "Excellent - sell single coins",
    bars: "Poor - sell entire bar",
    winner: "coins",
    explanation: "Need $50? Sell two coins. With bars, you sell the whole thing or nothing.",
  },
  {
    factor: "Storage Efficiency",
    coins: "Less efficient",
    bars: "More efficient",
    winner: "bars",
    explanation: "Bars stack neatly. Coins in tubes take more space per ounce.",
  },
  {
    factor: "Counterfeit Risk",
    coins: "Lower - security features",
    bars: "Higher - easier to fake",
    winner: "coins",
    explanation: "Sovereign coins have anti-counterfeiting features. Generic bars are easier to fake.",
  },
  {
    factor: "IRA Eligibility",
    coins: "Many qualify",
    bars: "Must meet standards",
    winner: "tie",
    explanation: "Both can be IRA-eligible if they meet .999 purity and approved refiner requirements.",
  },
  {
    factor: "Collector Value",
    coins: "Some numismatic premium",
    bars: "Bullion value only",
    winner: "coins",
    explanation: "Some coins develop collector premiums. Bars are valued strictly by weight.",
  },
];

const coinsAdvantages = [
  "Universally recognized - American Eagles, Maple Leafs are known worldwide",
  "Easy to sell - any dealer, any time, anywhere",
  "Divisible - sell as few or as many as you need",
  "Security features - harder to counterfeit",
  "Potential numismatic value over time",
  "Better for beginners building a foundation",
];

const barsAdvantages = [
  "Lower premiums - more silver per dollar spent",
  "Efficient storage - stackable, compact",
  "Large sizes available - 100 oz, 1000 oz for serious stackers",
  "No numismatic distraction - pure bullion investment",
  "Better for large purchases once you have a coin base",
];

const recommendations = [
  {
    portfolio: "0-50 oz (Beginner)",
    recommendation: "100% Coins",
    reasoning: "Build liquid foundation with Eagles or Maples. Liquidity matters most when starting.",
    icon: Target,
  },
  {
    portfolio: "50-200 oz (Growing)",
    recommendation: "70% Coins / 30% Bars",
    reasoning: "Add 10 oz bars to reduce premiums while maintaining mostly liquid coin base.",
    icon: TrendingUp,
  },
  {
    portfolio: "200-500 oz (Established)",
    recommendation: "50% Coins / 50% Bars",
    reasoning: "Equal mix provides both liquidity and cost-efficiency. Consider 100 oz bars.",
    icon: Scale,
  },
  {
    portfolio: "500+ oz (Advanced)",
    recommendation: "30% Coins / 70% Bars",
    reasoning: "Large bar emphasis minimizes premiums. Coin base provides quick liquidity when needed.",
    icon: SquareStack,
  },
];

const popularProducts = {
  coins: [
    { name: "American Silver Eagle", premium: "25-40%", notes: "Most recognized, highest premium" },
    { name: "Canadian Maple Leaf", premium: "15-25%", notes: "Highest purity (.9999), best value" },
    { name: "Austrian Philharmonic", premium: "12-18%", notes: "Lowest premium major coin" },
    { name: "British Britannia", premium: "15-22%", notes: "Security features, Royal Mint" },
  ],
  bars: [
    { name: "1 oz Bars", premium: "10-15%", notes: "Beginner bars, highest per-oz premium" },
    { name: "10 oz Bars", premium: "8-12%", notes: "Good balance of premium and liquidity" },
    { name: "Kilo Bars (32.15 oz)", premium: "6-10%", notes: "International standard" },
    { name: "100 oz Bars", premium: "5-8%", notes: "Lowest premiums, serious stackers" },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Silver Coins vs Bars: Which Should You Buy?",
      "description": "Compare silver coins vs silver bars for investment. Analyze premiums, liquidity, storage, and which is better for your goals.",
      "author": {
        "@type": "Person",
        "name": "Thomas Richardson"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
      },
      "datePublished": "2026-01-25",
      "dateModified": "2026-01-27"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Should I buy silver coins or bars?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For beginners, start with sovereign coins like Canadian Maple Leafs or American Eagles for maximum liquidity and recognition. Once you've built a foundation of 50-100 oz in coins, add bars to reduce premiums. Most experienced stackers hold both - coins for liquidity, bars for cost efficiency."
          }
        },
        {
          "@type": "Question",
          "name": "Which has lower premiums - silver coins or bars?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Silver bars have significantly lower premiums. Generic 1 oz bars carry 10-15% premiums vs 25-40% for American Eagles. The gap widens with size - 100 oz bars may have only 5-8% premiums. However, lower premiums come with reduced liquidity and recognition."
          }
        },
        {
          "@type": "Question",
          "name": "Are silver bars harder to sell than coins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, generally. Sovereign coins like American Eagles can be sold to any dealer, at any time, anywhere in the world. Bars, especially from lesser-known refiners, may have fewer buyers and require verification. You also can't partially sell a bar - it's all or nothing, while coins can be sold one at a time."
          }
        },
        {
          "@type": "Question",
          "name": "What size silver bar is best for investment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "10 oz bars offer the best balance of low premiums and reasonable liquidity. 100 oz bars have the lowest premiums but are harder to sell and represent a large commitment. 1 oz bars have premiums nearly as high as coins, reducing their advantage. Kilo bars (32.15 oz) are popular internationally."
          }
        },
        {
          "@type": "Question",
          "name": "Can both silver coins and bars be held in an IRA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both can be IRA-eligible if they meet requirements: .999+ fine silver and from approved mints/refiners. Coins from sovereign mints (US, Canada, Austria, UK, Australia) qualify. Bars must be from COMEX/NYMEX-approved refiners like PAMP Suisse, Johnson Matthey, or the Royal Canadian Mint."
          }
        }
      ]
    }
  ]
};

export default function CoinsVsBarsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[150px]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/buy-sell-silver"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Buy &amp; Sell Silver Guide
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 font-semibold text-sm mb-6">
              <Scale className="h-4 w-4" />
              80 MONTHLY SEARCHES - DIFF 0
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Silver Coins vs Bars
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              The coins vs bars debate has a simple answer: you should own both.
              But the ratio depends on your experience level, portfolio size, and goals.
              Here&apos;s how to think about it.
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Answer */}
      <section className="py-8 bg-[#B22234]/10 border-y border-[#B22234]/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#B22234] mb-4">Quick Answer</h2>
            <p className="text-slate-600">
              <strong className="text-slate-900">Start with coins</strong> for liquidity and recognition.
              <strong className="text-slate-900"> Add bars</strong> as your stack grows to reduce premiums.
              <strong className="text-slate-900"> Most investors should hold both</strong> - coins for liquidity, bars for cost efficiency.
            </p>
          </div>
        </Container>
      </section>

      {/* Visual Comparison */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Coins */}
            <div className="bg-[#B22234]/10 backdrop-blur-sm border border-[#B22234]/30 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#B22234]/20 rounded-xl">
                  <Coins className="w-8 h-8 text-[#B22234]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Silver Coins</h3>
              </div>

              <ul className="space-y-3 mb-6">
                {coinsAdvantages.map((adv, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-slate-50 rounded-lg p-4 text-sm">
                <span className="text-[#B22234] font-bold">Best For:</span>
                <span className="text-slate-600"> Beginners, liquidity, easy selling, IRA holdings</span>
              </div>
            </div>

            {/* Bars */}
            <div className="bg-[#B22234]/10 backdrop-blur-sm border border-slate-300 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#B22234]/10 rounded-xl">
                  <SquareStack className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Silver Bars</h3>
              </div>

              <ul className="space-y-3 mb-6">
                {barsAdvantages.map((adv, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-slate-50 rounded-lg p-4 text-sm">
                <span className="text-slate-600 font-bold">Best For:</span>
                <span className="text-slate-600"> Experienced stackers, large purchases, maximum ounces</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Head-to-Head Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left p-4 text-slate-900 font-bold">Factor</th>
                    <th className="text-center p-4 text-[#B22234] font-bold">Coins</th>
                    <th className="text-center p-4 text-slate-600 font-bold">Bars</th>
                    <th className="text-center p-4 text-slate-900 font-bold">Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {comparisonFactors.map((row, index) => (
                    <tr key={index}>
                      <td className="p-4">
                        <span className="font-semibold text-slate-900">{row.factor}</span>
                        <p className="text-slate-600 text-xs mt-1">{row.explanation}</p>
                      </td>
                      <td className="p-4 text-center text-slate-600 text-sm">{row.coins}</td>
                      <td className="p-4 text-center text-slate-600 text-sm">{row.bars}</td>
                      <td className="p-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          row.winner === "coins" ? "bg-[#B22234]/20 text-[#B22234]" :
                          row.winner === "bars" ? "bg-[#B22234]/10 text-slate-600" :
                          "bg-slate-100 text-slate-600"
                        }`}>
                          {row.winner === "coins" ? "Coins" : row.winner === "bars" ? "Bars" : "Tie"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Recommendations by Portfolio Size */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Recommended Mix by Portfolio Size
            </h2>
            <div className="space-y-4">
              {recommendations.map((rec, index) => {
                const Icon = rec.icon;
                return (
                  <div key={index} className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                        <div className="w-10 h-10 bg-[#B22234]/20 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-[#B22234]" />
                        </div>
                        <span className="text-slate-900 font-bold">{rec.portfolio}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <span className="text-[#B22234] font-bold text-lg md:w-48">
                            {rec.recommendation}
                          </span>
                          <p className="text-slate-600 text-sm">{rec.reasoning}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Popular Products
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Coins */}
              <div>
                <h3 className="text-lg font-bold text-[#B22234] mb-4 flex items-center gap-2">
                  <Coins className="h-5 w-5" />
                  Top Silver Coins
                </h3>
                <div className="space-y-3">
                  {popularProducts.coins.map((coin, index) => (
                    <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-slate-900">{coin.name}</span>
                        <span className="text-[#B22234] text-sm">{coin.premium}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{coin.notes}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bars */}
              <div>
                <h3 className="text-lg font-bold text-slate-600 mb-4 flex items-center gap-2">
                  <SquareStack className="h-5 w-5" />
                  Top Silver Bars
                </h3>
                <div className="space-y-3">
                  {popularProducts.bars.map((bar, index) => (
                    <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-slate-900">{bar.name}</span>
                        <span className="text-green-400 text-sm">{bar.premium}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{bar.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-slate-900">
                    <h3 className="text-lg font-bold">{faq.name}</h3>
                    <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-600">
                      <ArrowRight className="h-5 w-5 transition duration-300 group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-slate-50">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/buy-sell-silver/best-coins-to-buy" className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234]">Best Coins to Buy</h3>
              <p className="text-sm text-slate-600">Top picks for investors</p>
            </Link>
            <Link href="/buy-sell-silver/stacking-beginners" className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234]">Stacking for Beginners</h3>
              <p className="text-sm text-slate-600">How to start your stack</p>
            </Link>
            <Link href="/learn/silver-coins-vs-bars" className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234]">In-Depth Comparison</h3>
              <p className="text-sm text-slate-600">Extended analysis for IRA holders</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Add Both Coins and Bars to Your IRA"
            subheadline="Augusta Precious Metals offers IRA-eligible silver coins and bars at competitive premiums. Get expert guidance on the right mix for your retirement portfolio."
            linkContext="silver"
            trackSource="coins-vs-bars"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
