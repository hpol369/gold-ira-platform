import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import {
  ArrowRight,
  Clock,
  TrendingUp,
  TrendingDown,
  Target,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Scale,
  DollarSign,
  Calendar,
  LineChart,
  Lightbulb,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "When to Sell Silver: Market Timing & Exit Strategy Guide (2026)",
  description:
    "Learn when to sell silver for maximum profit. Market timing considerations, gold-to-silver ratio, exit strategies, and signs it's time to sell.",
  url: "https://www.richdadretirement.com/buy-sell-silver/when-to-sell",
  imageAlt: "When to Sell Silver Guide - Rich Dad Retirement",
});

const goodReasonsToSell = [
  {
    reason: "Price Hits Your Target",
    description: "You set a price target when you bought. Silver has reached that level. Take the profit.",
    icon: Target,
    example: "You bought at $15/oz targeting $30. It's now $35. Consider selling some or all.",
  },
  {
    reason: "Gold/Silver Ratio is Low",
    description: "When the ratio drops below 50:1 (historically), silver is relatively expensive vs gold. Good time to swap silver for gold.",
    icon: Scale,
    example: "Ratio at 45:1 suggests selling silver to buy gold, then reversing when ratio climbs back up.",
  },
  {
    reason: "You Need the Money",
    description: "Life happens. Silver is liquid precisely for moments like this. No shame in selling when needed.",
    icon: DollarSign,
    example: "Medical bills, home repair, or opportunity investment may warrant selling silver.",
  },
  {
    reason: "Rebalancing Portfolio",
    description: "Silver became too large a percentage of your portfolio. Selling to rebalance is smart risk management.",
    icon: LineChart,
    example: "If silver grew from 10% to 25% of your net worth, selling some to rebalance makes sense.",
  },
  {
    reason: "Retirement Distribution",
    description: "You're taking retirement distributions and silver is part of your income stream.",
    icon: Calendar,
    example: "After 59.5, taking distributions from a Silver IRA is tax-advantaged.",
  },
];

const badReasonsToSell = [
  {
    reason: "Panic During a Price Drop",
    description: "Prices fell 10-20% and you're scared. This is exactly when NOT to sell. Buy more if you can.",
    better: "Dollar-cost average into the dip. Silver is volatile - expect swings.",
  },
  {
    reason: "Because Everyone Else Is",
    description: "Media says sell, forums are panicking. Herd behavior destroys wealth.",
    better: "Be contrarian. Sell when others are euphoric, buy when they're terrified.",
  },
  {
    reason: "Short-Term Cash Flow",
    description: "You need money this week and silver is the only option.",
    better: "Build an emergency fund in cash. Don't use silver as an emergency fund.",
  },
  {
    reason: "To Lock In Small Gains",
    description: "Silver is up 5% and you want to 'take profits.' Transaction costs may eat your gains.",
    better: "Think long-term. 5% gains aren't worth the hassle and taxes.",
  },
];

const marketIndicators = [
  {
    indicator: "Gold/Silver Ratio",
    bullish: "Above 80:1 (silver is cheap)",
    bearish: "Below 50:1 (silver is expensive)",
    current: "Check kitco.com for live ratio",
    action: "Buy when high, consider selling when low",
  },
  {
    indicator: "Premiums Over Spot",
    bullish: "High premiums = strong demand",
    bearish: "Low premiums = weak demand",
    current: "Compare dealer prices to spot",
    action: "Sell during high-premium periods",
  },
  {
    indicator: "Industrial Demand",
    bullish: "Solar, EV growth increasing demand",
    bearish: "Recession reduces industrial use",
    current: "Watch manufacturing data",
    action: "Long-term positive for silver",
  },
  {
    indicator: "Dollar Strength",
    bullish: "Weak dollar = higher silver prices",
    bearish: "Strong dollar = lower silver prices",
    current: "Track DXY dollar index",
    action: "Sell when dollar is weakest",
  },
];

const exitStrategies = [
  {
    name: "Target Price Exit",
    description: "Set a specific price target when you buy. Sell when reached.",
    pros: ["Removes emotion", "Clear plan", "Guaranteed to capture gains if hit"],
    cons: ["May sell before bigger moves", "Requires discipline"],
    bestFor: "Traders, those who need to take profits",
  },
  {
    name: "Trailing Stop",
    description: "Sell if price drops X% from its peak. Protects gains while allowing upside.",
    pros: ["Captures uptrends", "Limits downside", "Adjusts automatically"],
    cons: ["Can be stopped out on volatility", "Requires monitoring"],
    bestFor: "Active investors comfortable with trading concepts",
  },
  {
    name: "Ratio Trading",
    description: "Swap silver for gold when ratio is low, reverse when high.",
    pros: ["Increases total ounces over time", "Market-neutral", "Proven strategy"],
    cons: ["Requires understanding ratios", "Transaction costs add up"],
    bestFor: "Long-term stackers, those who trade metals",
  },
  {
    name: "Never Sell",
    description: "Hold forever. Pass to heirs. Use as ultimate insurance.",
    pros: ["No taxes on gains", "Ultimate protection", "Generational wealth"],
    cons: ["No liquidity", "No profit realization", "May not suit everyone"],
    bestFor: "Long-term wealth preservation, those with other income",
  },
  {
    name: "Gradual Distribution",
    description: "Sell a fixed percentage each year in retirement.",
    pros: ["Steady income", "Tax-efficient", "Reduces timing risk"],
    cons: ["May sell at bad prices", "Requires planning"],
    bestFor: "Retirees using silver for income",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "When to Sell Silver: Market Timing & Exit Strategy Guide",
      "description": "Learn when to sell silver for maximum profit. Market timing considerations, gold-to-silver ratio, exit strategies, and signs it's time to sell.",
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
          "name": "When is the best time to sell silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best times to sell silver include: 1) When the gold/silver ratio drops below 50:1 (silver is historically expensive relative to gold), 2) When your price target is hit, 3) When premiums over spot are unusually high, 4) During portfolio rebalancing, or 5) When you need the funds. Never sell in panic during price drops."
          }
        },
        {
          "@type": "Question",
          "name": "Should I sell silver when prices drop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, selling during price drops is typically the worst time to sell. Panic selling locks in losses. Silver is volatile by nature - expect 20-30% swings. If you believe in silver long-term, price drops are buying opportunities, not selling signals. Only sell during drops if you genuinely need the money."
          }
        },
        {
          "@type": "Question",
          "name": "What is the gold to silver ratio and why does it matter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The gold/silver ratio shows how many ounces of silver it takes to buy one ounce of gold. Historically, extremes are: above 80:1 = silver is cheap (buy), below 50:1 = silver is expensive (consider selling/swapping to gold). The long-term average is around 60:1. Many stackers trade the ratio, selling silver for gold when the ratio is low, then reversing when high."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if silver premiums are high?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Compare dealer prices to spot price. Normal premiums for American Eagles are 25-40% over spot, Maple Leafs 15-25%, generic rounds 5-10%. During supply crunches (like March 2020 or February 2021), premiums can double or triple. High premiums = strong demand = good time to sell. Low premiums = weak demand = better to hold."
          }
        },
        {
          "@type": "Question",
          "name": "Should I ever sell all my silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rarely. Silver is insurance and a store of value. Most experts recommend maintaining at least a base position (5-10% of portfolio) permanently. You might sell your speculative/trading stack when targets are hit, but keep your core 'insurance' stack. The exception is extreme financial need or if silver becomes grossly overvalued."
          }
        }
      ]
    }
  ]
};

export default function WhenToSellPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[150px]" />
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
              <Clock className="h-4 w-4" />
              100 MONTHLY SEARCHES - DIFF 0 - $1.10 CPC
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              When to Sell Silver
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Knowing when NOT to sell is just as important as knowing when to sell.
              Most people sell at the worst times. Here&apos;s how to avoid that mistake
              and maximize your returns.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Insight */}
      <section className="py-8 bg-[#B22234]/10 border-y border-[#B22234]/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#B22234] mb-4 flex items-center justify-center gap-2">
              <Lightbulb className="h-6 w-6" />
              Key Insight
            </h2>
            <p className="text-slate-600">
              <strong className="text-slate-900">&quot;Be fearful when others are greedy, and greedy when others are fearful.&quot;</strong>
              {" "}- Warren Buffett. Sell when everyone is euphoric about silver, not when they&apos;re panicking.
            </p>
          </div>
        </Container>
      </section>

      {/* Good vs Bad Reasons */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Good Reasons */}
              <div>
                <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Good Reasons to Sell
                </h2>
                <div className="space-y-4">
                  {goodReasonsToSell.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-green-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">{item.reason}</h3>
                            <p className="text-slate-600 text-sm mb-2">{item.description}</p>
                            <p className="text-green-400 text-xs">
                              <strong>Example:</strong> {item.example}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bad Reasons */}
              <div>
                <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                  <TrendingDown className="h-6 w-6" />
                  Bad Reasons to Sell
                </h2>
                <div className="space-y-4">
                  {badReasonsToSell.map((item, index) => (
                    <div key={index} className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <XCircle className="h-5 w-5 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-1">{item.reason}</h3>
                          <p className="text-slate-600 text-sm mb-2">{item.description}</p>
                          <p className="text-[#B22234] text-xs">
                            <strong>Better Approach:</strong> {item.better}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Market Indicators */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8 flex items-center justify-center gap-2">
              <LineChart className="h-6 w-6 text-blue-400" />
              Market Indicators to Watch
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left p-4 text-slate-900 font-bold">Indicator</th>
                    <th className="text-center p-4 text-green-400 font-bold">Bullish (Buy)</th>
                    <th className="text-center p-4 text-red-400 font-bold">Bearish (Sell)</th>
                    <th className="text-left p-4 text-[#B22234] font-bold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {marketIndicators.map((row, index) => (
                    <tr key={index}>
                      <td className="p-4 text-slate-900 font-semibold">{row.indicator}</td>
                      <td className="p-4 text-center text-slate-600 text-sm">{row.bullish}</td>
                      <td className="p-4 text-center text-slate-600 text-sm">{row.bearish}</td>
                      <td className="p-4 text-slate-600 text-sm">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Exit Strategies */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-4 flex items-center justify-center gap-2">
              <Target className="h-6 w-6 text-[#B22234]" />
              Exit Strategies
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Have a plan before you need to sell. These are proven approaches to taking profits or liquidating silver.
            </p>
            <div className="space-y-6">
              {exitStrategies.map((strategy, index) => (
                <div key={index} className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-64 flex-shrink-0">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{strategy.name}</h3>
                      <p className="text-slate-600 text-sm">{strategy.description}</p>
                    </div>
                    <div className="flex-1 grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" /> Pros
                        </h4>
                        <ul className="space-y-1">
                          {strategy.pros.map((pro, i) => (
                            <li key={i} className="text-slate-600 text-sm">+ {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-1">
                          <XCircle className="h-3 w-3" /> Cons
                        </h4>
                        <ul className="space-y-1">
                          {strategy.cons.map((con, i) => (
                            <li key={i} className="text-slate-600 text-sm">- {con}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-lg p-3">
                        <h4 className="text-sm font-semibold text-[#B22234] mb-1">Best For:</h4>
                        <p className="text-slate-600 text-sm">{strategy.bestFor}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
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
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/buy-sell-silver/best-place-to-sell" className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234]">Best Place to Sell</h3>
              <p className="text-sm text-slate-600">Where to sell for best price</p>
            </Link>
            <Link href="/buy-sell-silver/how-to-sell-coins" className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234]">How to Sell Coins</h3>
              <p className="text-sm text-slate-600">Step-by-step selling guide</p>
            </Link>
            <Link href="/silver-squeeze/silver-to-gold-ratio-calculator" className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234]">Gold/Silver Ratio</h3>
              <p className="text-sm text-slate-600">Calculator and strategy</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Not Ready to Sell? Keep Building"
            subheadline="If you're not ready to sell, consider adding to your position through a Silver IRA. Augusta Precious Metals can help you build a tax-advantaged silver portfolio for retirement."
            linkContext="silver"
            trackSource="when-to-sell"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
