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
  CheckCircle2,
  Star,
  Shield,
  Trophy,
  Target,
  Sparkles,
  DollarSign,
  Scale,
  TrendingUp,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Best Silver Coins to Buy: Top Picks for Investors (2026)",
  description:
    "Discover the best silver coins to buy for investment. Compare American Eagles, Canadian Maple Leafs, and other top choices. Expert recommendations for beginners.",
  url: "https://www.richdadretirement.com/buy-sell-silver/best-coins-to-buy",
  imageAlt: "Best Silver Coins to Buy - Rich Dad Retirement",
});

const topCoins = [
  {
    name: "American Silver Eagle",
    country: "United States",
    purity: ".9993 Fine",
    weight: "1 Troy Oz",
    premium: "25-40%",
    liquidity: 5,
    recognition: 5,
    iraEligible: true,
    featured: true,
    pros: [
      "Most recognized silver coin worldwide",
      "Highest liquidity - sell anywhere",
      "Government-backed authenticity",
      "Beautiful Walking Liberty design",
    ],
    cons: [
      "Highest premiums of major coins",
      "Not .9999 pure (contains copper)",
    ],
    bestFor: "Maximum liquidity and recognition",
    verdict: "The gold standard of silver coins - pay the premium for peace of mind.",
  },
  {
    name: "Canadian Silver Maple Leaf",
    country: "Canada",
    purity: ".9999 Fine",
    weight: "1 Troy Oz",
    premium: "15-25%",
    liquidity: 5,
    recognition: 5,
    iraEligible: true,
    featured: true,
    pros: [
      "Highest purity (.9999)",
      "Lower premiums than Eagles",
      "Advanced security features (DNA)",
      "Globally recognized",
    ],
    cons: [
      "Soft silver prone to milk spots",
      "Not as iconic as Eagles in US",
    ],
    bestFor: "Best value for purity and recognition",
    verdict: "Our top pick for most investors - excellent balance of premium and quality.",
  },
  {
    name: "Austrian Silver Philharmonic",
    country: "Austria",
    purity: ".999 Fine",
    weight: "1 Troy Oz",
    premium: "12-18%",
    liquidity: 4,
    recognition: 4,
    iraEligible: true,
    featured: true,
    pros: [
      "Lowest premiums of major coins",
      "Euro legal tender",
      "Elegant musical design",
      "Made by historic mint",
    ],
    cons: [
      "Less recognized in US",
      "Fewer buyback options domestically",
    ],
    bestFor: "Budget-conscious investors seeking low premiums",
    verdict: "Excellent value for those prioritizing ounces over brand recognition.",
  },
  {
    name: "British Silver Britannia",
    country: "United Kingdom",
    purity: ".999 Fine",
    weight: "1 Troy Oz",
    premium: "15-22%",
    liquidity: 4,
    recognition: 4,
    iraEligible: true,
    featured: false,
    pros: [
      "Royal Mint quality",
      "Four security features",
      "CGT-exempt in UK",
      "Iconic design since 1987",
    ],
    cons: [
      "Slightly higher premiums than Philharmonics",
      "Less common in US market",
    ],
    bestFor: "Security-conscious investors, British market exposure",
    verdict: "Solid choice with excellent anti-counterfeiting features.",
  },
  {
    name: "Australian Silver Kangaroo",
    country: "Australia",
    purity: ".9999 Fine",
    weight: "1 Troy Oz",
    premium: "15-22%",
    liquidity: 4,
    recognition: 4,
    iraEligible: true,
    featured: false,
    pros: [
      "Perth Mint quality",
      ".9999 purity",
      "Annual design changes",
      "Strong international demand",
    ],
    cons: [
      "Higher premiums than Philharmonics",
      "Annual designs may complicate stacking",
    ],
    bestFor: "Collectors who want variety, Perth Mint fans",
    verdict: "Premium quality from one of the world's finest mints.",
  },
  {
    name: "South African Silver Krugerrand",
    country: "South Africa",
    purity: ".999 Fine",
    weight: "1 Troy Oz",
    premium: "18-25%",
    liquidity: 4,
    recognition: 5,
    iraEligible: true,
    featured: false,
    pros: [
      "Iconic Krugerrand name",
      "First silver Krugerrand (2017)",
      "Springer antelope design",
      "Strong collector interest",
    ],
    cons: [
      "Newer to market than gold version",
      "Premium varies significantly",
    ],
    bestFor: "Krugerrand collectors, diversifying sovereign holdings",
    verdict: "The famous Krugerrand name finally in silver form.",
  },
];

const budgetOptions = [
  {
    name: "Generic Silver Rounds",
    premium: "5-10%",
    description: "Private mint rounds - pure bullion value only. Best for maximum ounces per dollar.",
    iraEligible: false,
  },
  {
    name: "Constitutional/Junk Silver",
    premium: "5-15%",
    description: "Pre-1965 US coins (90% silver). Recognizable, divisible, but not IRA-eligible.",
    iraEligible: false,
  },
  {
    name: "Sunshine Mint Rounds",
    premium: "8-12%",
    description: "Private mint with MintMark SI security feature. Good middle ground.",
    iraEligible: true,
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Silver Coins to Buy: Top Picks for Investors",
      "description": "Discover the best silver coins to buy for investment. Compare American Eagles, Canadian Maple Leafs, and other top choices.",
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
          "name": "What is the best silver coin to buy for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For beginners, we recommend Canadian Silver Maple Leafs. They offer the best balance of purity (.9999 fine), reasonable premiums (15-25%), and global recognition. American Silver Eagles are also excellent but carry higher premiums (25-40%). Start with sovereign coins for maximum liquidity and resale value."
          }
        },
        {
          "@type": "Question",
          "name": "Which silver coins have the lowest premiums?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Austrian Silver Philharmonics typically have the lowest premiums among major sovereign coins (12-18% over spot). For even lower premiums, consider generic silver rounds from private mints (5-10% over spot), though these aren't IRA-eligible and may be harder to sell."
          }
        },
        {
          "@type": "Question",
          "name": "Are American Silver Eagles worth the premium?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, for most investors. American Silver Eagles command 25-40% premiums but offer unmatched liquidity and recognition. When you sell, you'll typically recover most of that premium. If your priority is maximum ounces per dollar and you don't mind less liquidity, consider Maple Leafs or Philharmonics instead."
          }
        },
        {
          "@type": "Question",
          "name": "What silver coins are IRA-eligible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IRA-eligible silver coins must be .999 fine or higher and from sovereign mints. Eligible coins include: American Silver Eagles, Canadian Maple Leafs, Austrian Philharmonics, Australian Kangaroos/Kookaburras, British Britannias, and Mexican Libertads. Generic rounds and constitutional silver are NOT IRA-eligible."
          }
        },
        {
          "@type": "Question",
          "name": "Should I buy silver coins or bars?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Coins are better for beginners and liquidity. Bars offer lower premiums but reduced flexibility. A common strategy: build a foundation of sovereign coins (first 50-100 oz), then add bars to reduce premiums on larger purchases. See our Silver Coins vs Bars guide for detailed comparison."
          }
        }
      ]
    }
  ]
};

export default function BestCoinsToBuyPage() {
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
              <Coins className="h-4 w-4" />
              400 MONTHLY SEARCHES - DIFF 0
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Best Silver Coins to Buy
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Not all silver coins are created equal. The right choice depends on your goals:
              maximum liquidity, lowest premiums, or IRA eligibility. Here&apos;s what to buy
              based on decades of precious metals experience.
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Recommendation */}
      <section className="py-8 bg-[#B22234]/10 border-y border-[#B22234]/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#B22234] mb-4 flex items-center justify-center gap-2">
              <Trophy className="h-5 w-5" />
              Our Top Pick
            </h2>
            <p className="text-slate-600">
              <strong className="text-slate-900">Canadian Silver Maple Leaf</strong> -
              The best all-around silver coin. Highest purity (.9999), reasonable premiums (15-25%),
              globally recognized, and IRA-eligible. If you buy one silver coin, make it a Maple Leaf.
            </p>
          </div>
        </Container>
      </section>

      {/* Top Coins Grid */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
              Top Silver Coins for Investors
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Sovereign mint coins offer the best combination of liquidity, recognition, and security.
              All coins below are IRA-eligible.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topCoins.map((coin, index) => (
                <div
                  key={index}
                  className={`bg-slate-50 backdrop-blur-sm border rounded-xl p-6 ${
                    coin.featured ? "border-[#B22234]/30" : "border-slate-200"
                  }`}
                >
                  {coin.featured && (
                    <div className="text-xs font-bold text-[#B22234] mb-2 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      FEATURED
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{coin.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{coin.country}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-slate-50 rounded-lg p-2">
                      <span className="text-slate-600 block text-xs">Purity</span>
                      <span className="text-slate-900 font-semibold">{coin.purity}</span>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2">
                      <span className="text-slate-600 block text-xs">Premium</span>
                      <span className="text-[#B22234] font-semibold">{coin.premium}</span>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2">
                      <span className="text-slate-600 block text-xs">Liquidity</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-3 w-3 ${
                              star <= coin.liquidity ? "text-green-400 fill-current" : "text-slate-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2">
                      <span className="text-slate-600 block text-xs">Recognition</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-3 w-3 ${
                              star <= coin.recognition ? "text-blue-400 fill-current" : "text-slate-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-slate-600 mb-1 font-semibold">Pros:</p>
                    <ul className="space-y-1">
                      {coin.pros.slice(0, 2).map((pro, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-1">
                          <CheckCircle2 className="h-3 w-3 text-green-400 mt-0.5 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs">
                      <span className="text-[#B22234] font-semibold">Best For: </span>
                      <span className="text-slate-600">{coin.bestFor}</span>
                    </p>
                  </div>

                  {coin.iraEligible && (
                    <div className="mt-3 flex items-center gap-1 text-green-400 text-xs">
                      <Shield className="h-3 w-3" />
                      IRA Eligible
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Beginner Recommendation */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8 flex items-center justify-center gap-2">
              <Target className="h-6 w-6 text-[#B22234]" />
              Beginner&apos;s Guide to First Purchases
            </h2>
            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Start with 10-20 oz of Sovereign Coins</h3>
                    <p className="text-slate-600">
                      Begin with Canadian Maple Leafs or American Eagles. Pay the premium for liquidity
                      and recognition. This is your foundation - don&apos;t cheap out here.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Add Lower-Premium Coins (20-50 oz)</h3>
                    <p className="text-slate-600">
                      Expand with Philharmonics or Britannias at lower premiums. Still sovereign,
                      still liquid, but more ounces per dollar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#B22234]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#B22234] font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Consider Bars (50+ oz)</h3>
                    <p className="text-slate-600">
                      Once you have a coin foundation, add 10 oz or kilo bars for lowest premiums.
                      Your coin stack provides liquidity; bars maximize total ounces.
                    </p>
                  </div>
                </div>

                <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-lg p-4 mt-6">
                  <p className="text-[#B22234] font-semibold mb-1 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Pro Tip
                  </p>
                  <p className="text-slate-600 text-sm">
                    If you&apos;re planning a Silver IRA, stick exclusively to IRA-eligible coins from the start.
                    This makes future rollovers seamless and ensures all your silver can be part of your
                    retirement strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Budget Options */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-4 flex items-center justify-center gap-2">
              <DollarSign className="h-6 w-6 text-green-400" />
              Budget-Friendly Alternatives
            </h2>
            <p className="text-slate-600 text-center mb-8">
              Lower premiums, but trade-offs in liquidity and IRA eligibility.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {budgetOptions.map((option, index) => (
                <div key={index} className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{option.name}</h3>
                  <p className="text-green-400 font-semibold text-sm mb-3">{option.premium} premium</p>
                  <p className="text-slate-600 text-sm mb-4">{option.description}</p>
                  <div className={`text-xs font-semibold flex items-center gap-1 ${
                    option.iraEligible ? "text-green-400" : "text-red-400"
                  }`}>
                    {option.iraEligible ? (
                      <>
                        <CheckCircle2 className="h-3 w-3" />
                        IRA Eligible
                      </>
                    ) : (
                      <>
                        <Scale className="h-3 w-3" />
                        Not IRA Eligible
                      </>
                    )}
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
            <Link href="/buy-sell-silver/coins-vs-bars" className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234]">Silver Coins vs Bars</h3>
              <p className="text-sm text-slate-600">Detailed comparison of pros/cons</p>
            </Link>
            <Link href="/buy-sell-silver/stacking-beginners" className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234]">Stacking for Beginners</h3>
              <p className="text-sm text-slate-600">How to build your silver position</p>
            </Link>
            <Link href="/buy-sell-silver/spot-fake-silver" className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234]">Spot Fake Silver</h3>
              <p className="text-sm text-slate-600">Protect yourself from counterfeits</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Ready to Buy Silver for Your IRA?"
            subheadline="Augusta Precious Metals offers IRA-eligible silver coins at competitive premiums. Get expert guidance on building a silver portfolio that fits your retirement goals."
            linkContext="silver"
            trackSource="best-coins-to-buy"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
