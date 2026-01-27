import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import {
  ArrowRight,
  GraduationCap,
  Target,
  DollarSign,
  Calendar,
  ShoppingCart,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Coins,
  SquareStack,
  Store,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Silver Stacking for Beginners: Complete Getting Started Guide (2026)",
  description:
    "Learn how to start stacking silver. Budget recommendations, first purchases to make, where to buy, and how to build a solid silver position over time.",
  url: "https://www.richdadretirement.com/buy-sell-silver/stacking-beginners",
  imageAlt: "Silver Stacking for Beginners - Rich Dad Retirement",
});

const monthlyBudgets = [
  {
    amount: "$50-100/month",
    strategy: "1-2 oz of sovereign coins monthly",
    timeline: "12-24 oz in first year",
    recommendation: "Canadian Maple Leafs (best value) or American Eagles (best recognition)",
  },
  {
    amount: "$100-250/month",
    strategy: "2-5 oz mix of coins and occasional bars",
    timeline: "24-60 oz in first year",
    recommendation: "Mostly coins, add 10 oz bar when you can afford one outright",
  },
  {
    amount: "$250-500/month",
    strategy: "5-10 oz with emphasis on variety",
    timeline: "60-120 oz in first year",
    recommendation: "Mix of Eagles, Maples, and 10 oz bars for lower premiums",
  },
  {
    amount: "$500+/month",
    strategy: "10+ oz with bar focus for efficiency",
    timeline: "100+ oz in first year",
    recommendation: "70% bars (10 oz or larger), 30% sovereign coins for liquidity",
  },
];

const firstPurchases = [
  {
    order: 1,
    product: "5-10 Canadian Silver Maple Leafs",
    reason: "Highest purity (.9999), reasonable premiums, globally recognized",
    budget: "$150-300",
    priority: "Essential",
  },
  {
    order: 2,
    product: "5-10 American Silver Eagles",
    reason: "Most liquid and recognized coin in the world",
    budget: "$200-400",
    priority: "Essential",
  },
  {
    order: 3,
    product: "10 oz Silver Bar (PAMP, RCM, or similar)",
    reason: "Lower premiums, good stepping stone to larger bars",
    budget: "$280-350",
    priority: "Recommended",
  },
  {
    order: 4,
    product: "$50-100 Face Value Constitutional Silver",
    reason: "Divisible, recognizable, historical value, barter-friendly",
    budget: "$750-1,500",
    priority: "Optional",
  },
  {
    order: 5,
    product: "100 oz Silver Bar",
    reason: "Lowest premiums, serious stacking milestone",
    budget: "$2,500-3,000",
    priority: "Advanced",
  },
];

const whereTobuys = [
  {
    source: "Online Dealers",
    pros: ["Best prices", "Wide selection", "Easy comparison", "Buyback programs"],
    cons: ["Shipping costs for small orders", "Wait for delivery"],
    examples: "JM Bullion, SD Bullion, APMEX, Money Metals Exchange",
    bestFor: "Most purchases, best value",
  },
  {
    source: "Local Coin Shops",
    pros: ["Immediate possession", "Negotiate on rare pieces", "Build relationship", "No shipping"],
    cons: ["Higher premiums", "Limited selection", "Quality varies"],
    examples: "Local dealers - search 'coin shop near me'",
    bestFor: "Small purchases, urgent needs, learning",
  },
  {
    source: "Mints Direct",
    pros: ["Guaranteed authentic", "First access to new releases"],
    cons: ["Often higher premiums", "Limited to their products"],
    examples: "US Mint, Royal Canadian Mint",
    bestFor: "Collectors, guaranteed authenticity",
  },
];

const commonMistakes = [
  {
    mistake: "Chasing numismatic coins too early",
    why: "Premiums are high and value is subjective. Build bullion first.",
    fix: "Stick to bullion for your first 100+ oz. Numismatics come later if ever.",
  },
  {
    mistake: "Buying from pawn shops or unknown sellers",
    why: "High risk of fakes and terrible prices.",
    fix: "Buy only from reputable dealers with buyback policies.",
  },
  {
    mistake: "Timing the market",
    why: "Nobody can predict short-term moves. You'll miss dips waiting for 'the perfect time.'",
    fix: "Dollar-cost average: buy the same amount on a schedule regardless of price.",
  },
  {
    mistake: "Ignoring storage and security",
    why: "If someone knows you have silver and where it is, you're a target.",
    fix: "Don't broadcast your stack. Consider safe deposit boxes or home safes.",
  },
  {
    mistake: "Selling after small gains",
    why: "Transaction costs and taxes eat into small profits.",
    fix: "Think long-term (years, decades). Silver is a marathon, not a sprint.",
  },
  {
    mistake: "Going all-in immediately",
    why: "You may need cash for emergencies and panic sell at losses.",
    fix: "Keep 3-6 months expenses in cash before serious stacking.",
  },
];

const stackingMilestones = [
  { oz: 50, achievement: "First Major Milestone", description: "You have a meaningful liquid position. Celebrate!" },
  { oz: 100, achievement: "Serious Stacker", description: "You're no longer a beginner. Time to start adding bars." },
  { oz: 500, achievement: "Monster Box Club", description: "You could fill a monster box. Time for 100 oz bars." },
  { oz: 1000, achievement: "Four-Figure Stacker", description: "You have real wealth in physical silver. Impressive." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Silver Stacking for Beginners: Complete Getting Started Guide",
      "description": "Learn how to start stacking silver. Budget recommendations, first purchases to make, where to buy, and how to build a solid silver position.",
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
          "name": "How much silver should a beginner buy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start with what you can afford without stress. A good first goal is 50-100 oz over your first year. Begin with $50-100/month if that fits your budget, buying 1-2 oz of sovereign coins each time. The key is consistency - regular small purchases add up. Don't go into debt or neglect emergency savings to buy silver."
          }
        },
        {
          "@type": "Question",
          "name": "What should I buy first when starting to stack silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start with sovereign coins from government mints: Canadian Silver Maple Leafs (best value) or American Silver Eagles (most recognized). These are highly liquid, globally recognized, and harder to counterfeit. Avoid numismatic/collector coins and generic rounds until you have a foundation of 50+ oz in sovereign coins."
          }
        },
        {
          "@type": "Question",
          "name": "Is silver stacking a good investment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Silver is best viewed as savings/insurance rather than a traditional investment. It preserves purchasing power over decades, provides a hedge against currency debasement, and is tangible wealth you can hold. However, silver is volatile short-term and doesn't pay dividends. Stack silver alongside, not instead of, diversified investments."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the best place to buy silver for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reputable online dealers offer the best prices and selection: JM Bullion, SD Bullion, APMEX, and Money Metals Exchange are popular choices. Look for dealers with buyback programs, good reviews, and transparent pricing. Local coin shops are good for learning and immediate possession but typically charge higher premiums."
          }
        },
        {
          "@type": "Question",
          "name": "How do I store silver safely?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Options include: 1) Home safe - bolt it to the floor, don't tell anyone, 2) Bank safe deposit box - secure but not insured and bank-hour access only, 3) Private vault storage - for large stacks, insured and secure. Never tell people about your stack. Spread across multiple locations if your stack is large. Consider a Silver IRA for tax-advantaged, professionally stored silver."
          }
        }
      ]
    }
  ]
};

export default function StackingBeginnersPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[150px]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/buy-sell-silver"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Buy &amp; Sell Silver Guide
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 font-semibold text-sm mb-6">
              <GraduationCap className="h-4 w-4" />
              DIFF 0 - EASY WIN KEYWORD
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Silver Stacking for Beginners
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Welcome to your silver stacking journey. Whether you have $50 or $5,000 to start,
              this guide will show you exactly what to buy, where to buy it, and how to build
              a solid silver position over time.
            </p>
          </div>
        </Container>
      </section>

      {/* Rich Dad Quote */}
      <section className="py-8 bg-amber-500/10 border-y border-amber-500/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-white italic">
              &quot;Savers are losers. Save silver and gold, not paper dollars.&quot;
            </p>
            <p className="text-amber-400 mt-2 font-semibold">- Robert Kiyosaki</p>
          </div>
        </Container>
      </section>

      {/* Getting Started Checklist */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
              <Target className="h-6 w-6 text-green-400" />
              Getting Started Checklist
            </h2>
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 md:p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white">Build an emergency fund first</span>
                    <p className="text-slate-400 text-sm">3-6 months expenses in cash before serious stacking</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white">Set a monthly budget</span>
                    <p className="text-slate-400 text-sm">Decide what you can consistently invest - $50, $100, $500/month</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white">Choose a reputable dealer</span>
                    <p className="text-slate-400 text-sm">JM Bullion, SD Bullion, APMEX - compare prices before buying</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white">Plan your storage</span>
                    <p className="text-slate-400 text-sm">Home safe, bank box, or private vault - have a plan before buying</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white">Start with sovereign coins</span>
                    <p className="text-slate-400 text-sm">Maple Leafs or Eagles - build a liquid foundation first</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Budget Recommendations */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4 flex items-center justify-center gap-2">
              <DollarSign className="h-6 w-6 text-green-400" />
              Monthly Budget Recommendations
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Whatever you can afford consistently is the right amount. Here&apos;s what to buy at different budget levels.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {monthlyBudgets.map((budget, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-2">{budget.amount}</h3>
                  <p className="text-slate-300 mb-3">{budget.strategy}</p>
                  <div className="text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-400" />
                      <span className="text-blue-400">{budget.timeline}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Lightbulb className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-400">{budget.recommendation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* First Purchases */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4 flex items-center justify-center gap-2">
              <ShoppingCart className="h-6 w-6 text-amber-400" />
              Recommended First Purchases (In Order)
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Follow this sequence to build a balanced, liquid silver position.
            </p>
            <div className="space-y-4">
              {firstPurchases.map((purchase) => (
                <div key={purchase.order} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 md:w-16 flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-amber-400">{purchase.order}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-white">{purchase.product}</h3>
                        <div className="flex gap-2">
                          <span className="text-green-400 text-sm font-semibold">{purchase.budget}</span>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            purchase.priority === "Essential" ? "bg-green-500/20 text-green-400" :
                            purchase.priority === "Recommended" ? "bg-blue-500/20 text-blue-400" :
                            purchase.priority === "Optional" ? "bg-amber-500/20 text-amber-400" :
                            "bg-slate-500/20 text-slate-400"
                          }`}>
                            {purchase.priority}
                          </span>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm">{purchase.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Where to Buy */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
              <Store className="h-6 w-6 text-blue-400" />
              Where to Buy Silver
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whereTobuys.map((source, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">{source.source}</h3>
                  <div className="space-y-4 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-green-400 mb-1">Pros</h4>
                      <ul className="space-y-1">
                        {source.pros.map((pro, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-1">
                            <span className="text-green-400">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-red-400 mb-1">Cons</h4>
                      <ul className="space-y-1">
                        {source.cons.map((con, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-1">
                            <span className="text-red-400">-</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10 text-sm">
                    <p className="text-slate-500 mb-1">Examples:</p>
                    <p className="text-slate-400">{source.examples}</p>
                    <p className="text-amber-400 mt-2 font-semibold">Best for: {source.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-400" />
              Common Beginner Mistakes
            </h2>
            <div className="space-y-4">
              {commonMistakes.map((item, index) => (
                <div key={index} className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-red-400 mb-2">{item.mistake}</h3>
                  <p className="text-slate-400 text-sm mb-2"><strong>Why it's bad:</strong> {item.why}</p>
                  <p className="text-green-400 text-sm"><strong>Fix:</strong> {item.fix}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
              <TrendingUp className="h-6 w-6 text-amber-400" />
              Stacking Milestones to Celebrate
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {stackingMilestones.map((milestone, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-amber-400 mb-2">{milestone.oz} oz</div>
                  <h3 className="text-lg font-bold text-white mb-1">{milestone.achievement}</h3>
                  <p className="text-slate-400 text-sm">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-white">
                    <h3 className="text-lg font-bold">{faq.name}</h3>
                    <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-slate-400">
                      <ArrowRight className="h-5 w-5 transition duration-300 group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-400">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/buy-sell-silver/best-coins-to-buy" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">Best Coins to Buy</h3>
              <p className="text-sm text-slate-400">Detailed coin comparisons</p>
            </Link>
            <Link href="/buy-sell-silver/coins-vs-bars" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">Coins vs Bars</h3>
              <p className="text-sm text-slate-400">When to add bars to your stack</p>
            </Link>
            <Link href="/buy-sell-silver/spot-fake-silver" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">Spot Fake Silver</h3>
              <p className="text-sm text-slate-400">Protect yourself from fakes</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Consider a Silver IRA from Day One"
            subheadline="Instead of stacking at home, consider a Silver IRA for tax-advantaged growth and professional storage. Augusta Precious Metals can help you start your silver journey the smart way."
            linkContext="silver"
            trackSource="stacking-beginners"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
