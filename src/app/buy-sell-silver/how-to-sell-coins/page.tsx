import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import {
  ArrowRight,
  HandCoins,
  CheckCircle2,
  AlertTriangle,
  Search,
  DollarSign,
  FileText,
  Truck,
  Shield,
  Clock,
  Calculator,
  Package,
  Scale,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "How to Sell Silver Coins: Step-by-Step Guide (2026)",
  description:
    "Learn how to sell silver coins for maximum value. Step-by-step process from valuation to payment. Where to sell, what to expect, and how to avoid scams.",
  url: "https://www.richdadretirement.com/buy-sell-silver/how-to-sell-coins",
  imageAlt: "How to Sell Silver Coins - Rich Dad Retirement",
});

const steps = [
  {
    number: 1,
    title: "Inventory Your Silver",
    icon: Search,
    description: "Know exactly what you have before approaching buyers.",
    details: [
      "Separate sovereign coins from generic rounds",
      "Identify coins: American Eagles, Maple Leafs, etc.",
      "Note condition and any special features",
      "Look for collectible/numismatic pieces",
      "Count total troy ounces",
    ],
    tip: "Take photos of front and back of each coin type for online quotes.",
  },
  {
    number: 2,
    title: "Research Current Prices",
    icon: Calculator,
    description: "Know your silver's value before negotiating.",
    details: [
      "Check spot price on Kitco.com or similar",
      "Research premiums for your specific coins",
      "Compare retail prices at major dealers",
      "Note recent trends (up/down market)",
      "Calculate your expected value range",
    ],
    tip: "Eagles typically sell for spot + 10-20%. Maple Leafs for spot + 5-15%.",
  },
  {
    number: 3,
    title: "Get Multiple Quotes",
    icon: DollarSign,
    description: "Never accept the first offer - prices vary significantly.",
    details: [
      "Contact 3+ online dealers for quotes",
      "Visit 2-3 local coin shops",
      "Check buyback prices from your original dealer",
      "Compare offers as percentage of spot",
      "Ask about any additional fees",
    ],
    tip: "Online dealers often beat local shops by 5-10% for common bullion.",
  },
  {
    number: 4,
    title: "Prepare Documentation",
    icon: FileText,
    description: "Have your paperwork ready for smooth transactions.",
    details: [
      "Government ID (required by law)",
      "Original purchase receipts (for cost basis)",
      "Proof of ownership for large collections",
      "Understand tax reporting requirements",
      "Know your state's precious metal laws",
    ],
    tip: "Sales over $10,000 require IRS Form 8300 from the dealer.",
  },
  {
    number: 5,
    title: "Complete the Sale",
    icon: HandCoins,
    description: "Choose your selling method and finalize the transaction.",
    details: [
      "For online: Ship with insurance and tracking",
      "For local: Get payment before leaving",
      "Verify payment method (check, wire, cash)",
      "Get a receipt for your records",
      "Document the transaction for taxes",
    ],
    tip: "Wire transfers are safest for large amounts. Avoid checks from unknown buyers.",
  },
];

const sellingMethods = [
  {
    method: "Online Dealers",
    process: "Get quote, lock price, ship coins, receive payment",
    timeline: "5-10 business days",
    bestFor: "Large quantities, common bullion",
    considerations: [
      "Lock in price before shipping",
      "Use dealer-provided shipping label",
      "Insure for full value",
      "Payment after verification",
    ],
  },
  {
    method: "Local Coin Shop",
    process: "Walk in, negotiate, walk out with payment",
    timeline: "Same day (immediate)",
    bestFor: "Quick cash, small quantities, rare coins",
    considerations: [
      "Call ahead for large amounts",
      "Bring ID and documentation",
      "Negotiate if possible",
      "Cash may be limited",
    ],
  },
  {
    method: "Coin Shows",
    process: "Compare multiple buyers, negotiate best price",
    timeline: "Same day (at show)",
    bestFor: "Collectible/numismatic coins, large collections",
    considerations: [
      "Multiple buyers = better prices",
      "Experts can appraise rare pieces",
      "Transport security needed",
      "Only at scheduled events",
    ],
  },
  {
    method: "Private Sale",
    process: "List, communicate, meet, exchange",
    timeline: "Days to weeks",
    bestFor: "Maximum return for rare pieces",
    considerations: [
      "eBay fees eat into profits",
      "Scam/chargeback risk",
      "Time-consuming process",
      "Meet in safe locations only",
    ],
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "How to Sell Silver Coins",
      "description": "A step-by-step guide to selling silver coins for maximum value",
      "step": steps.map((step) => ({
        "@type": "HowToStep",
        "name": step.title,
        "text": step.description,
        "position": step.number,
      })),
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much can I expect to get for my silver coins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For common bullion coins like American Eagles, expect 90-98% of spot price from dealers, with online dealers typically paying more than local shops. Rare or numismatic coins can sell above spot if sold to collectors. Pawn shops pay only 50-70% - avoid them. Always get multiple quotes before selling."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to pay taxes when selling silver coins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, silver coins are classified as collectibles by the IRS and are subject to capital gains tax when sold at a profit. The long-term rate is up to 28% for collectibles (held over 1 year). Short-term gains are taxed as ordinary income. Keep purchase receipts to establish your cost basis. Transactions over $10,000 in cash require dealer reporting."
          }
        },
        {
          "@type": "Question",
          "name": "Should I clean my silver coins before selling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never clean collectible or numismatic coins - cleaning destroys their value and can reduce worth by 50% or more. For bullion coins sold strictly for silver content, cleaning won't affect the price you receive, but it's still unnecessary. When in doubt, leave coins as they are."
          }
        },
        {
          "@type": "Question",
          "name": "How do I ship silver coins to online dealers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most reputable dealers provide prepaid, insured shipping labels. Pack coins securely using bubble wrap and avoid marking the package as containing precious metals. Use a service with tracking and signature confirmation. Ship promptly after locking in your price - most quotes are only valid for 24-48 hours."
          }
        },
        {
          "@type": "Question",
          "name": "What documentation do I need to sell silver coins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You'll need a valid government-issued ID (required by law in most states). For large transactions, have proof of ownership and original purchase receipts for tax purposes. For sales over $10,000, dealers must file IRS Form 8300. Some states have holding periods for precious metal purchases by dealers."
          }
        }
      ]
    }
  ]
};

export default function HowToSellCoinsPage() {
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
              <HandCoins className="h-4 w-4" />
              500 MONTHLY SEARCHES - DIFF 3
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How to Sell Silver Coins
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Selling silver coins isn&apos;t complicated, but doing it right can mean
              hundreds or thousands of dollars more in your pocket. Follow this step-by-step
              guide to get maximum value for your precious metals.
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-[#B22234]">95-98%</div>
              <div className="text-sm text-slate-600">Typical dealer payout</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">5-10 days</div>
              <div className="text-sm text-slate-600">Online sale timeline</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">3+ quotes</div>
              <div className="text-sm text-slate-600">Recommended minimum</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Step by Step Guide */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Step-by-Step Selling Process
            </h2>
            <div className="space-y-8">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 md:p-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#B22234]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-xl font-bold text-[#B22234]">{step.number}</span>
                        </div>
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 md:hidden">
                          <Icon className="h-6 w-6 text-slate-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                          <div className="hidden md:flex w-10 h-10 bg-slate-100 rounded-lg items-center justify-center">
                            <Icon className="h-5 w-5 text-slate-600" />
                          </div>
                        </div>
                        <p className="text-slate-600 mb-4">{step.description}</p>
                        <ul className="space-y-2 mb-4">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-lg p-3">
                          <p className="text-sm">
                            <span className="text-[#B22234] font-semibold">Pro Tip: </span>
                            <span className="text-slate-600">{step.tip}</span>
                          </p>
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

      {/* Selling Methods Comparison */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Compare Selling Methods
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {sellingMethods.map((method, index) => (
                <div key={index} className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{method.method}</h3>
                  <p className="text-slate-600 text-sm mb-4">{method.process}</p>

                  <div className="flex gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-400" />
                      <span className="text-slate-600">{method.timeline}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-[#B22234] font-semibold text-sm">Best For: </span>
                    <span className="text-slate-600 text-sm">{method.bestFor}</span>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-600 font-semibold mb-2">Considerations:</p>
                    <ul className="space-y-1">
                      {method.considerations.map((item, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-1">
                          <span className="text-slate-600">-</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8 flex items-center justify-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-400" />
              Common Mistakes to Avoid
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-400 mb-4">Don&apos;t Do This</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">X</span>
                    Sell to the first buyer without comparing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">X</span>
                    Clean collectible coins (destroys value)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">X</span>
                    Use pawn shops or cash-for-gold places
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">X</span>
                    Ship without insurance or tracking
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">X</span>
                    Accept payment after handing over coins
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">X</span>
                    Sell during panic or market dips
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-4">Do This Instead</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Get at least 3 quotes before selling
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Leave coins in their natural state
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Use reputable online or local dealers
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Fully insure all shipments
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Get payment before releasing coins locally
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Sell on your timeline, not emotionally
                  </li>
                </ul>
              </div>
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
              <p className="text-sm text-slate-600">Compare selling options</p>
            </Link>
            <Link href="/buy-sell-silver/when-to-sell" className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234]">When to Sell</h3>
              <p className="text-sm text-slate-600">Market timing strategies</p>
            </Link>
            <Link href="/buy-sell-silver/cleaning-coins" className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234]">Cleaning Silver Coins</h3>
              <p className="text-sm text-slate-600">When cleaning is OK (and when it's not)</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Not Ready to Sell? Consider a Silver IRA"
            subheadline="If you're selling silver to reallocate investments, a Silver IRA might be a better option. Keep your precious metals while getting tax advantages. Augusta can help you understand your options."
            linkContext="silver"
            trackSource="how-to-sell-coins"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
