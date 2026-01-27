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
  Globe,
  Building2,
  Coins,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  DollarSign,
  Star,
  Shield,
  Clock,
  TrendingUp,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Best Place to Sell Silver: Compare Options & Get Top Dollar (2026)",
  description:
    "Find the best place to sell silver coins and bullion. Compare online dealers, local coin shops, pawn shops, and private buyers. Get maximum value for your silver.",
  url: "https://www.richdadretirement.com/buy-sell-silver/best-place-to-sell",
  imageAlt: "Best Place to Sell Silver - Rich Dad Retirement",
});

const sellingOptions = [
  {
    name: "Online Precious Metal Dealers",
    icon: Globe,
    payout: "95-98% of spot",
    speed: "5-10 business days",
    pros: [
      "Highest payouts for common bullion",
      "Competitive, transparent pricing",
      "Easy shipping with insurance",
      "Buyback programs from major dealers",
    ],
    cons: [
      "Must wait for payment",
      "Shipping costs for small amounts",
      "No negotiation possible",
    ],
    bestFor: "Large quantities, common bullion, best overall value",
    rating: 5,
    examples: ["APMEX", "JM Bullion", "SD Bullion", "Money Metals Exchange"],
  },
  {
    name: "Local Coin Shops",
    icon: Store,
    payout: "90-95% of spot",
    speed: "Immediate cash",
    pros: [
      "Instant payment",
      "Face-to-face transaction",
      "Can negotiate on rare pieces",
      "No shipping required",
    ],
    cons: [
      "Lower prices than online",
      "Limited by dealer's cash on hand",
      "Quality varies significantly",
    ],
    bestFor: "Small quantities, immediate cash needs, rare coins",
    rating: 4,
    examples: ["Local coin dealers", "Numismatic shops", "Bullion dealers"],
  },
  {
    name: "Coin Shows & Conventions",
    icon: Coins,
    payout: "92-97% of spot",
    speed: "Immediate cash",
    pros: [
      "Multiple buyers competing",
      "Good for rare/collectible pieces",
      "Can compare offers instantly",
      "Expert appraisals available",
    ],
    cons: [
      "Infrequent in many areas",
      "Must transport your silver",
      "Cash limits may apply",
    ],
    bestFor: "Numismatic coins, large collections, serious stackers",
    rating: 4,
    examples: ["ANA shows", "Regional coin shows", "Precious metal expos"],
  },
  {
    name: "Private Sales (eBay, Forums)",
    icon: Building2,
    payout: "100-110% of spot",
    speed: "Varies (days to weeks)",
    pros: [
      "Highest potential return",
      "Capture full retail premium",
      "Set your own price",
      "Direct to collector sales",
    ],
    cons: [
      "Risk of scams and chargebacks",
      "Time-consuming process",
      "Fees eat into profits",
      "Must handle shipping/disputes",
    ],
    bestFor: "Rare coins, patient sellers, experienced traders",
    rating: 3,
    examples: ["eBay", "r/Pmsforsale", "Facebook groups", "Craigslist (risky)"],
  },
  {
    name: "Pawn Shops",
    icon: AlertTriangle,
    payout: "50-70% of spot",
    speed: "Immediate cash",
    pros: [
      "Quick, no-questions cash",
      "Available everywhere",
      "Will buy almost anything",
    ],
    cons: [
      "Terrible prices",
      "Staff may not understand silver",
      "Designed to profit from desperation",
      "May lowball rare pieces",
    ],
    bestFor: "Last resort only - avoid if possible",
    rating: 1,
    examples: ["Avoid pawn shops for silver sales"],
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Place to Sell Silver: Compare Options & Get Top Dollar",
      "description": "Find the best place to sell silver coins and bullion. Compare online dealers, local coin shops, pawn shops, and private buyers.",
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
          "name": "Where can I get the most money for my silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Online precious metal dealers typically pay the most for common silver bullion (95-98% of spot price). For rare or numismatic coins, private sales or coin shows may yield better results. Local coin shops offer convenience but typically pay 90-95% of spot. Never sell silver to pawn shops - they pay only 50-70% of value."
          }
        },
        {
          "@type": "Question",
          "name": "Should I sell silver to a pawn shop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, avoid pawn shops when selling silver. They typically pay only 50-70% of the actual value, meaning you lose 30-50% of your silver's worth. Pawn shops are designed to profit from people who need quick cash and don't know better options. Even local coin shops pay significantly more than pawn shops."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get the best price when selling silver locally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To get the best local price: 1) Know the current spot price before you go, 2) Get quotes from at least 3 different dealers, 3) Bring documentation of authenticity if available, 4) Be willing to walk away - dealers may call you back with better offers, 5) Visit during slow periods when dealers have more time to negotiate."
          }
        },
        {
          "@type": "Question",
          "name": "Is it better to sell silver online or locally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For common bullion in larger quantities, online dealers typically pay more (95-98% vs 90-95% locally). For rare or numismatic coins, local dealers or coin shows may pay premiums. For immediate cash needs or small quantities, local is more practical. Consider shipping costs - for under $500 in silver, local may net more after shipping."
          }
        },
        {
          "@type": "Question",
          "name": "What documents do I need to sell silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Requirements vary by state, but typically you'll need: valid government ID, proof of ownership for large transactions, and for amounts over $10,000, be prepared for IRS reporting (Form 8300). Some states require holding periods for precious metal purchases by dealers. Original purchase receipts help prove cost basis for tax purposes."
          }
        }
      ]
    }
  ]
};

export default function BestPlaceToSellPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-400/5 rounded-full blur-[150px]" />
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
              <DollarSign className="h-4 w-4" />
              500 MONTHLY SEARCHES - DIFF 0 - $1.40 CPC
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Best Place to Sell Silver
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Where you sell your silver matters more than you think. The difference between a
              pawn shop and an online dealer could be 40% of your silver&apos;s value. Here&apos;s
              how to get maximum return on your precious metals.
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Answer */}
      <section className="py-8 bg-green-500/10 border-y border-green-500/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-green-400 mb-4">Quick Answer</h2>
            <p className="text-slate-300">
              <strong className="text-white">Online precious metal dealers</strong> pay the most for common bullion (95-98% of spot).
              <strong className="text-white"> Local coin shops</strong> offer convenience at slightly lower prices (90-95%).
              <strong className="text-white"> Never use pawn shops</strong> - you&apos;ll lose 30-50% of your value.
            </p>
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Selling Options Compared
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="text-left p-4 text-white font-bold">Selling Option</th>
                    <th className="text-center p-4 text-white font-bold">Payout</th>
                    <th className="text-center p-4 text-white font-bold">Speed</th>
                    <th className="text-center p-4 text-white font-bold">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {sellingOptions.map((option, index) => (
                    <tr key={index} className={option.rating === 1 ? "bg-red-500/5" : ""}>
                      <td className="p-4 text-slate-300 font-semibold">{option.name}</td>
                      <td className="p-4 text-center">
                        <span className={`font-bold ${
                          option.rating >= 4 ? "text-green-400" :
                          option.rating >= 3 ? "text-amber-400" : "text-red-400"
                        }`}>
                          {option.payout}
                        </span>
                      </td>
                      <td className="p-4 text-center text-slate-400">{option.speed}</td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= option.rating ? "text-amber-400 fill-current" : "text-slate-600"
                              }`}
                            />
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Options */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Detailed Breakdown
            </h2>
            <div className="space-y-8">
              {sellingOptions.map((option, index) => {
                const Icon = option.icon;
                const isWarning = option.rating === 1;
                return (
                  <div
                    key={index}
                    className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 md:p-8 ${
                      isWarning ? "border-red-500/30" : "border-white/10"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isWarning ? "bg-red-500/20" : "bg-slate-400/20"
                      }`}>
                        <Icon className={`h-8 w-8 ${isWarning ? "text-red-400" : "text-slate-300"}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">{option.name}</h3>
                            <div className="flex items-center gap-4 mt-1">
                              <span className={`text-sm font-semibold ${
                                option.rating >= 4 ? "text-green-400" :
                                option.rating >= 3 ? "text-amber-400" : "text-red-400"
                              }`}>
                                {option.payout}
                              </span>
                              <span className="text-sm text-slate-400 flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {option.speed}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-5 w-5 ${
                                  star <= option.rating ? "text-amber-400 fill-current" : "text-slate-600"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-4">
                          <div>
                            <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4" />
                              Pros
                            </h4>
                            <ul className="space-y-1">
                              {option.pros.map((pro, i) => (
                                <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                                  <span className="text-green-400 mt-1">+</span>
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                              <XCircle className="h-4 w-4" />
                              Cons
                            </h4>
                            <ul className="space-y-1">
                              {option.cons.map((con, i) => (
                                <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                                  <span className="text-red-400 mt-1">-</span>
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-4 pt-4 border-t border-white/10">
                          <div className="flex-1">
                            <span className="text-amber-400 font-semibold">Best For: </span>
                            <span className="text-slate-300">{option.bestFor}</span>
                          </div>
                          {option.examples[0] !== "Avoid pawn shops for silver sales" && (
                            <div className="text-sm text-slate-500">
                              Examples: {option.examples.join(", ")}
                            </div>
                          )}
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

      {/* Tips for Maximum Value */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Tips for Maximum Value
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  Before You Sell
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Check current spot price (use Kitco or similar)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Research premiums for your specific coins/bars
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Get quotes from at least 3 different buyers
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Separate bullion from numismatic coins
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Gather original receipts for tax purposes
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                  Common Mistakes to Avoid
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                    Selling to the first buyer without comparing
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                    Cleaning coins (destroys numismatic value)
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                    Using pawn shops or cash-for-gold places
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                    Selling during panic or price dips
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                    Forgetting about tax implications
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

      {/* Related Guides */}
      <section className="py-16 bg-slate-900">
        <Container>
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/buy-sell-silver/how-to-sell-coins" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">How to Sell Silver Coins</h3>
              <p className="text-sm text-slate-400">Step-by-step selling process</p>
            </Link>
            <Link href="/buy-sell-silver/when-to-sell" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">When to Sell Silver</h3>
              <p className="text-sm text-slate-400">Market timing strategies</p>
            </Link>
            <Link href="/buy-sell-silver/silver-testing" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">Silver Testing Methods</h3>
              <p className="text-sm text-slate-400">Verify before you sell</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Thinking About a Silver IRA Instead?"
            subheadline="Rather than selling, consider rolling your silver into a tax-advantaged IRA. Augusta Precious Metals offers buyback programs and can help you understand your options."
            linkContext="silver"
            trackSource="best-place-to-sell"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
