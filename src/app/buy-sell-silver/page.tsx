import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import {
  ArrowRight,
  Store,
  Coins,
  HandCoins,
  Sparkles,
  Search,
  FlaskConical,
  Clock,
  Scale,
  GraduationCap,
  CheckCircle2,
  TrendingUp,
  Shield,
  AlertTriangle,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Buy & Sell Silver Guide: Complete Resource for Silver Investors (2026)",
  description:
    "Complete guide to buying and selling silver. Learn where to sell, best coins to buy, testing methods, cleaning tips, and beginner stacking strategies.",
  url: "https://www.richdadretirement.com/buy-sell-silver",
  imageAlt: "Buy & Sell Silver Guide - Rich Dad Retirement",
});

const guides = [
  {
    slug: "best-place-to-sell",
    title: "Best Place to Sell Silver",
    description: "Compare dealers, pawn shops, online platforms, and local buyers. Get the best price for your silver.",
    icon: Store,
    stats: "500 monthly searches, DIFF 0, $1.40 CPC",
    featured: true,
  },
  {
    slug: "best-coins-to-buy",
    title: "Best Silver Coins to Buy",
    description: "American Eagles, Maple Leafs, and more. Which coins offer the best value for new investors?",
    icon: Coins,
    stats: "400 monthly searches, DIFF 0",
    featured: true,
  },
  {
    slug: "how-to-sell-coins",
    title: "How to Sell Silver Coins",
    description: "Step-by-step guide to selling your silver coins. Where to go, what to expect, and how to avoid scams.",
    icon: HandCoins,
    stats: "500 monthly searches, DIFF 3",
    featured: true,
  },
  {
    slug: "cleaning-coins",
    title: "Cleaning Silver Coins",
    description: "WARNING: Don't clean valuable coins! Learn when cleaning is OK and safe methods to use.",
    icon: Sparkles,
    stats: "390 monthly searches, DIFF 0",
    featured: false,
  },
  {
    slug: "spot-fake-silver",
    title: "How to Spot Fake Silver",
    description: "Visual inspection tips and common fakes to watch for. Protect yourself from counterfeits.",
    icon: Search,
    stats: "110 monthly searches, DIFF 0",
    featured: false,
  },
  {
    slug: "silver-testing",
    title: "Silver Testing Methods",
    description: "Magnet test, ice test, ping test, acid test, and specific gravity. All methods explained.",
    icon: FlaskConical,
    stats: "300 monthly searches, DIFF 0",
    featured: true,
  },
  {
    slug: "when-to-sell",
    title: "When to Sell Silver",
    description: "Market timing considerations and exit strategy guide. Know when it's time to sell.",
    icon: Clock,
    stats: "100 monthly searches, DIFF 0, $1.10 CPC",
    featured: false,
  },
  {
    slug: "coins-vs-bars",
    title: "Silver Coins vs Bars",
    description: "Pros and cons comparison. Which is better for your goals?",
    icon: Scale,
    stats: "80 monthly searches, DIFF 0",
    featured: false,
  },
  {
    slug: "stacking-beginners",
    title: "Silver Stacking for Beginners",
    description: "Getting started guide with budget recommendations and first purchases to make.",
    icon: GraduationCap,
    stats: "10 monthly searches, DIFF 0",
    featured: true,
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "name": "Buy & Sell Silver Guide",
      "description": "Complete guide to buying and selling silver, including best places to sell, testing methods, and beginner stacking strategies.",
      "url": "https://www.richdadretirement.com/buy-sell-silver",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": guides.map((guide, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": guide.title,
          "url": `https://www.richdadretirement.com/buy-sell-silver/${guide.slug}`,
        })),
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is the best place to sell silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Online precious metal dealers typically offer the best prices, usually paying 95-98% of spot price for common bullion. Local coin shops offer convenience but may pay less (90-95% of spot). Pawn shops should be avoided as they typically pay only 50-70% of spot value. Always get multiple quotes before selling."
          }
        },
        {
          "@type": "Question",
          "name": "What are the best silver coins for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "American Silver Eagles are the most recognized and liquid silver coins, though they carry higher premiums (25-40% over spot). Canadian Silver Maple Leafs offer .9999 purity at lower premiums (15-25%). For the budget-conscious, generic silver rounds from reputable mints offer the most silver per dollar at 5-10% premiums."
          }
        },
        {
          "@type": "Question",
          "name": "Should I clean my silver coins before selling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never clean collectible or numismatic coins - cleaning destroys their value and can reduce a coin's worth by 50% or more. For bullion silver sold by weight, light cleaning won't affect the price since you're paid for silver content, not appearance. When in doubt, don't clean."
          }
        },
        {
          "@type": "Question",
          "name": "How can I test if silver is real at home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The magnet test is the easiest: silver is not magnetic, so if a magnet sticks, it's fake. The ice test works because silver conducts heat rapidly - ice melts quickly on real silver. The ping test produces a high-pitched ring when you tap real silver. For definitive testing, use a silver acid test kit or specific gravity measurement."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to sell silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sell silver when you need the money, when prices hit your target, or when the gold-to-silver ratio is low (below 50:1 historically favors selling silver for gold). Avoid panic selling during price dips. For retirement, consider taking physical possession of IRA silver at 59.5 or converting to cash during high-premium periods."
          }
        }
      ]
    }
  ]
};

export default function BuySellSilverHubPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[150px]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/20 border border-slate-500/30 rounded-full text-slate-300 font-semibold text-sm mb-6">
              <Coins className="h-4 w-4" />
              COMPLETE SILVER GUIDE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Buy &amp; Sell Silver Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Everything you need to know about buying, selling, and investing in silver.
              From beginner stacking to testing authenticity and getting the best prices.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                9 In-Depth Guides
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-amber-400" />
                All DIFF 0-3 Keywords
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                Expert Advice
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Rich Dad Quote */}
      <section className="py-8 bg-amber-500/10 border-y border-amber-500/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-white italic">
              &quot;Silver and gold are God&apos;s money. Paper is the government&apos;s money.&quot;
            </p>
            <p className="text-amber-400 mt-2 font-semibold">- Robert Kiyosaki, Rich Dad Poor Dad</p>
          </div>
        </Container>
      </section>

      {/* Featured Guides */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Featured Guides
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Start with these essential guides for buying and selling silver.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.filter(g => g.featured).map((guide) => {
                const Icon = guide.icon;
                return (
                  <Link
                    key={guide.slug}
                    href={`/buy-sell-silver/${guide.slug}`}
                    className="group bg-white/5 backdrop-blur-sm border border-slate-400/30 rounded-xl p-6 hover:bg-white/10 hover:border-slate-400/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-slate-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-slate-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                          {guide.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-3">
                          {guide.description}
                        </p>
                        <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded">
                          Easy Win: {guide.stats.split(",")[1]?.trim() || "DIFF 0"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-4 text-slate-400 group-hover:text-amber-400 transition-colors text-sm">
                      Read Guide
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* All Guides */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              All Silver Guides
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Complete collection of guides for silver investors at every level.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => {
                const Icon = guide.icon;
                return (
                  <Link
                    key={guide.slug}
                    href={`/buy-sell-silver/${guide.slug}`}
                    className={`group bg-white/5 backdrop-blur-sm border rounded-xl p-6 hover:bg-white/10 transition-all ${
                      guide.featured
                        ? "border-slate-400/30 hover:border-slate-400/50"
                        : "border-white/10 hover:border-slate-500/30"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        guide.featured ? "bg-slate-400/20" : "bg-white/10"
                      }`}>
                        <Icon className={`h-5 w-5 ${
                          guide.featured ? "text-slate-300" : "text-slate-400"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                          {guide.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-2 line-clamp-2">
                          {guide.description}
                        </p>
                        <span className="text-xs text-slate-500">
                          {guide.stats}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Silver Buying &amp; Selling Quick Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Buying Tips */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Buying Smart
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">1.</span>
                    Start with sovereign coins (Eagles, Maples) for liquidity
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">2.</span>
                    Compare premiums - lower isn&apos;t always better
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">3.</span>
                    Buy from reputable dealers with buyback policies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">4.</span>
                    Dollar-cost average instead of timing the market
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">5.</span>
                    Test any silver from unknown sources
                  </li>
                </ul>
              </div>

              {/* Selling Tips */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Selling Smart
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">1.</span>
                    Never clean numismatic or collectible coins
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">2.</span>
                    Get multiple quotes - prices vary 10-15%
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">3.</span>
                    Know spot price before negotiating
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">4.</span>
                    Avoid pawn shops - they pay 50-70% of value
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">5.</span>
                    Consider selling premiums, not just spot price
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800/50">
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

      {/* IRA Connection */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Silver in Your Retirement
            </h2>
            <p className="text-slate-400 mb-8">
              Physical silver can be held in a self-directed IRA, giving you tax-advantaged exposure
              to real assets. Many of the coins and bars we discuss in these guides are IRA-eligible,
              meaning you can protect your retirement with tangible wealth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/silver-ira"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-colors"
              >
                Learn About Silver IRAs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/silver-ira/rules"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors"
              >
                Silver IRA Rules
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Ready to Add Silver to Your IRA?"
            subheadline="Augusta Precious Metals offers IRA-eligible silver coins and bars with transparent pricing and lifetime customer support. Get a free consultation to explore your options."
            linkContext="silver"
            trackSource="buy-sell-silver-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
