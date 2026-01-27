import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
  Coins,
  ArrowRight,
  Scale,
  DollarSign,
  CheckCircle,
  XCircle,
  Info,
  Handshake,
  TrendingUp,
  AlertTriangle,
  Wallet,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Fractional Silver Guide: 1/2 oz, 1/4 oz & 1/10 oz Silver Options (2026)",
  description:
    "Complete guide to fractional silver. Learn about 1/2 oz, 1/4 oz, and 1/10 oz silver options, their pros and cons, premiums, and why fractional silver has barter potential.",
  url: "https://www.richdadretirement.com/silver-products/fractional",
  imageAlt: "Fractional Silver Guide - Rich Dad Retirement",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Fractional Silver: Small Sizes, Big Flexibility",
      "description": "Everything you need to know about fractional silver including available sizes, premium analysis, barter potential, and best products for your collection.",
      "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.richdadretirement.com/logo.png"
        }
      },
      "datePublished": "2026-01-27",
      "dateModified": "2026-01-27"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is fractional silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fractional silver refers to silver bullion products smaller than one troy ounce. Common sizes include 1/2 oz, 1/4 oz, and 1/10 oz. These smaller pieces offer greater divisibility for barter scenarios, more affordable entry points for new investors, and flexibility for gift-giving."
          }
        },
        {
          "@type": "Question",
          "name": "Why do fractional silver pieces have higher premiums?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Manufacturing costs are roughly the same regardless of size - minting a 1/10 oz round costs nearly as much as minting a 1 oz round. This fixed cost spread across less silver results in higher per-ounce premiums. Expect to pay 15-30% over spot for fractional silver versus 5-10% for 1 oz products."
          }
        },
        {
          "@type": "Question",
          "name": "Is fractional silver good for barter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, fractional silver is ideal for barter scenarios. A 1/10 oz piece at $25/oz spot is worth about $2.50 in silver value - useful for small transactions. 1/4 oz pieces work well for mid-range trades. Many preppers include fractional silver in their emergency supplies for this reason."
          }
        },
        {
          "@type": "Question",
          "name": "What are the best fractional silver products?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For fractional silver, look for recognizable products: fractional American Silver Eagles (not common), Canadian Maple Leafs (1/2 oz available), or widely-traded rounds from Sunshine Mint, SilverTowne, or APMEX. Sovereign coins and recognizable designs command better resale value."
          }
        },
        {
          "@type": "Question",
          "name": "Is fractional silver IRA eligible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most fractional silver products are NOT IRA-eligible. The IRS requires silver to be .999 fine from approved refiners, but most custodians prefer standard 1 oz or larger sizes for practical reasons. Check with your IRA custodian before purchasing fractional silver for retirement accounts."
          }
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Fractional Silver",
      "description": "Silver bullion products in sizes smaller than one troy ounce",
      "material": "Silver (.999 fine)"
    }
  ]
};

export default function FractionalSilverPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/silver-products"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Silver Products
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 font-semibold text-sm mb-6">
              <Coins className="h-4 w-4" />
              250 MONTHLY SEARCHES - DIFFICULTY 0!
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fractional Silver: Small Sizes, Big Flexibility
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Fractional silver offers divisibility that 1 oz coins can&apos;t match. From 1/2 oz
              rounds to 1/10 oz pieces, these smaller denominations are perfect for barter,
              gifts, and building a diversified stack on a budget.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Highly Divisible
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Affordable Entry
              </span>
              <span className="flex items-center gap-2 text-amber-400">
                <AlertTriangle className="h-4 w-4" />
                Higher Premiums
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Specs */}
      <section className="py-12 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <Scale className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">1/10 - 1/2</div>
                <div className="text-sm text-slate-400">oz Sizes</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <DollarSign className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">15-30%</div>
                <div className="text-sm text-slate-400">Premium Over Spot</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <Wallet className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">$3-15</div>
                <div className="text-sm text-slate-400">Per Piece</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <Handshake className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">Barter</div>
                <div className="text-sm text-slate-400">Ready</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-invert prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

              {/* What is Fractional Silver */}
              <div className="not-prose bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-500/20 rounded-lg">
                    <Coins className="h-6 w-6 text-slate-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white m-0">What is Fractional Silver?</h2>
                </div>
                <p className="text-slate-300 mb-4">
                  Fractional silver refers to any silver bullion smaller than one troy ounce.
                  The most common sizes are 1/2 oz, 1/4 oz, and 1/10 oz, though some mints
                  produce 1/20 oz and even 1 gram pieces.
                </p>
                <p className="text-slate-300">
                  While 1 oz coins and bars are the standard for silver stacking, fractional
                  silver serves specific purposes: barter preparedness, gift-giving, introducing
                  new collectors, and providing flexibility when selling only a portion of your stack.
                </p>
              </div>

              <h2 className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-slate-400" />
                Available Fractional Sizes
              </h2>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Size</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Silver Value*</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Typical Cost</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Best Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-white">1/2 oz</td>
                      <td className="p-4 text-slate-300">$12.50</td>
                      <td className="p-4 text-slate-300">$14-17</td>
                      <td className="p-4 text-green-400">General stacking, gifts</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">1/4 oz</td>
                      <td className="p-4 text-slate-300">$6.25</td>
                      <td className="p-4 text-slate-300">$7.50-9</td>
                      <td className="p-4 text-green-400">Mid-range barter, gifts</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">1/10 oz</td>
                      <td className="p-4 text-slate-300">$2.50</td>
                      <td className="p-4 text-slate-300">$3.25-4</td>
                      <td className="p-4 text-green-400">Small barter transactions</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">1 gram (~1/31 oz)</td>
                      <td className="p-4 text-slate-300">$0.80</td>
                      <td className="p-4 text-slate-300">$2-3</td>
                      <td className="p-4 text-amber-400">Novelty/collection</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-slate-500 mt-2">*Based on $25/oz spot silver price</p>
              </div>

              <h2 className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-green-400" />
                Pros and Cons of Fractional Silver
              </h2>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-4">Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Divisibility:</strong> Make change in barter scenarios</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Affordability:</strong> Lower cost per piece to start</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Gift-giving:</strong> Perfect for introducing newcomers</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Flexibility:</strong> Sell small amounts when needed</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Prepper value:</strong> Essential for SHTF scenarios</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-4">Disadvantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Higher premiums:</strong> 15-30%+ over spot</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Less silver per dollar:</strong> Inefficient stacking</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Lower resale value:</strong> Harder to sell at full premium</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Limited selection:</strong> Fewer product options</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Not IRA-friendly:</strong> Most custodians won&apos;t accept</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="not-prose bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-amber-400 mb-2">The Premium Math</h4>
                    <p className="text-slate-300">
                      At 25% premium, a 1/10 oz piece costing $3.13 contains only $2.50 of silver.
                      You need silver to rise 25% just to break even. For pure investment, stick to
                      1 oz products. Only buy fractional for its utility value (barter, gifts, flexibility).
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Handshake className="h-6 w-6 text-slate-400" />
                Fractional Silver for Barter
              </h2>

              <p>
                One of the primary reasons investors buy fractional silver is barter preparedness.
                Here&apos;s how different sizes might work in a barter economy:
              </p>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Size</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Approximate Value</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Possible Trade For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-white">1/10 oz</td>
                      <td className="p-4 text-slate-300">~$3-5</td>
                      <td className="p-4 text-slate-300">Loaf of bread, can of gas, small items</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">1/4 oz</td>
                      <td className="p-4 text-slate-300">~$7-10</td>
                      <td className="p-4 text-slate-300">Basic groceries, ammunition, tools</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">1/2 oz</td>
                      <td className="p-4 text-slate-300">~$15-20</td>
                      <td className="p-4 text-slate-300">Week of food, services, equipment</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">1 oz (for comparison)</td>
                      <td className="p-4 text-slate-300">~$28-35</td>
                      <td className="p-4 text-slate-300">May be too large for small transactions</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-green-400" />
                Best Fractional Silver Products
              </h2>

              <p>
                When buying fractional silver, prioritize recognizable products that will be
                easy to trade or sell. Here are the best options:
              </p>

              <ul>
                <li><strong>Canadian Silver Maple Leaf (1/2 oz)</strong> - Sovereign coin with .9999 purity, highly recognizable</li>
                <li><strong>Sunshine Mint Rounds</strong> - Available in 1/2 oz and 1/4 oz with MintMark SI security</li>
                <li><strong>SilverTowne Rounds</strong> - Affordable fractional rounds from established mint</li>
                <li><strong>APMEX Fractional Rounds</strong> - Wide selection of sizes and designs</li>
                <li><strong>Generic Fractional Rounds</strong> - Lowest cost but less recognizable</li>
              </ul>

              <div className="not-prose bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-green-400 mb-2">Alternative: Constitutional Silver</h4>
                    <p className="text-slate-300">
                      Pre-1965 US dimes (90% silver) are a natural fractional silver option. Each dime
                      contains ~0.0715 oz of silver, worth about $1.80 at $25/oz spot. They&apos;re instantly
                      recognizable and carry lower premiums than minted fractional rounds. Consider adding
                      &quot;junk silver&quot; dimes to your barter stack.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-slate-400" />
                How Much Fractional Silver to Own
              </h2>

              <p>
                Most financial advisors who recommend precious metals suggest keeping fractional
                silver as a small percentage of your total silver holdings:
              </p>

              <ul>
                <li><strong>For general investors:</strong> 5-10% of silver stack in fractional</li>
                <li><strong>For preppers:</strong> 10-20% for barter flexibility</li>
                <li><strong>For new collectors:</strong> Start with any size you can afford</li>
              </ul>

              <p>
                The majority of your silver should be in 1 oz coins or bars with lower premiums.
                Treat fractional silver as a utility holding, not your primary silver investment.
              </p>

              <h2>Where to Buy Fractional Silver</h2>

              <ul>
                <li><strong>SD Bullion</strong> - Good selection at competitive prices</li>
                <li><strong>JM Bullion</strong> - Wide variety including sovereign fractional coins</li>
                <li><strong>APMEX</strong> - Largest selection, higher prices</li>
                <li><strong>SilverTowne</strong> - Direct from mint, house brand fractionals</li>
                <li><strong>eBay</strong> - Compare prices, buy from top-rated sellers</li>
              </ul>

            </article>
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

      {/* Related Products */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Related Silver Products
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/silver-products/constitutional-silver"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-slate-300 mb-2">Constitutional Silver</h3>
                <p className="text-sm text-slate-400">Pre-1965 US coins for natural fractional</p>
              </Link>
              <Link
                href="/silver-products/generic-rounds"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-slate-300 mb-2">Generic Rounds</h3>
                <p className="text-sm text-slate-400">Lowest premiums on 1 oz silver</p>
              </Link>
              <Link
                href="/silver-products/sunshine-mint"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-slate-300 mb-2">Sunshine Mint</h3>
                <p className="text-sm text-slate-400">Fractional with security features</p>
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
            headline="Build Your Silver IRA with Standard Sizes"
            subheadline="While fractional silver is great for personal holdings, Augusta Precious Metals recommends IRA-eligible 1 oz coins and bars for retirement accounts. Get expert guidance on optimal IRA silver choices."
            linkContext="silver"
            trackSource="silver-fractional"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
