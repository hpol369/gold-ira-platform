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
  Globe,
  CheckCircle,
  Shield,
  Award,
  DollarSign,
  Info,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Silver Krugerrand Guide: South African Silver Coins for Investors (2026)",
  description:
    "Complete guide to Silver Krugerrands. Learn about specifications, premiums vs American Eagles, IRA eligibility, and where to buy South African silver coins.",
  url: "https://www.richdadretirement.com/silver-products/krugerrand",
  imageAlt: "Silver Krugerrand Guide - Rich Dad Retirement",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Silver Krugerrand: Complete Guide to South African Silver Coins",
      "description": "Everything you need to know about Silver Krugerrands including specifications, premiums, and how they compare to American Silver Eagles.",
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
          "name": "Are Silver Krugerrands IRA eligible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Silver Krugerrands are IRA-eligible. They meet the IRS requirement of .999 fine silver purity and are produced by a sovereign mint (South African Mint). They can be held in a Precious Metals IRA when stored at an approved depository."
          }
        },
        {
          "@type": "Question",
          "name": "How do Silver Krugerrands compare to American Silver Eagles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Silver Krugerrands typically carry a 2-4% lower premium than American Silver Eagles. Both are 1 oz .999 fine silver, but Eagles have higher demand in the US market. Krugerrands offer better value for pure bullion investors, while Eagles have stronger collector appeal."
          }
        },
        {
          "@type": "Question",
          "name": "When was the Silver Krugerrand first minted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Silver Krugerrand was first minted in 2017, exactly 50 years after the original Gold Krugerrand (1967). While the gold version is the world's most recognized gold coin, the silver version is relatively new to the market."
          }
        },
        {
          "@type": "Question",
          "name": "What is the silver content of a Krugerrand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each Silver Krugerrand contains exactly 1 troy ounce (31.1035 grams) of .999 fine silver. The total coin weight is slightly higher due to the small copper alloy added for durability, making the coin more scratch-resistant than pure silver coins."
          }
        },
        {
          "@type": "Question",
          "name": "Why is the Krugerrand called 'Krugerrand'?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The name combines 'Kruger' (after Paul Kruger, President of the South African Republic from 1883-1900, whose portrait appears on the obverse) and 'Rand' (the South African currency unit). The coin features the iconic Springbok antelope on the reverse."
          }
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Silver Krugerrand",
      "description": "South African silver bullion coin with Springbok design",
      "weight": {
        "@type": "QuantitativeValue",
        "value": "1",
        "unitCode": "APZ"
      },
      "material": "Silver (.999 fine)",
      "manufacturer": {
        "@type": "Organization",
        "name": "South African Mint"
      }
    }
  ]
};

export default function SilverKrugerrandPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 font-semibold text-sm mb-6">
              <Coins className="h-4 w-4" />
              600 MONTHLY SEARCHES - DIFFICULTY 0
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Silver Krugerrand: The African Icon
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              The Silver Krugerrand brings the prestige of the world&apos;s most famous gold coin
              to the silver market. Backed by the South African Mint, these coins offer
              sovereign quality at competitive premiums.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                IRA Eligible
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                .999 Fine Silver
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Sovereign Mint
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
                <div className="text-2xl font-bold text-white">1 oz</div>
                <div className="text-sm text-slate-400">Silver Content</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <Shield className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">.999</div>
                <div className="text-sm text-slate-400">Purity</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">8-12%</div>
                <div className="text-sm text-slate-400">Typical Premium</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <Globe className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">2017</div>
                <div className="text-sm text-slate-400">First Minted</div>
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

              {/* Introduction */}
              <div className="not-prose bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <Award className="h-6 w-6 text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white m-0">The Krugerrand Legacy</h2>
                </div>
                <p className="text-slate-300 mb-4">
                  The Gold Krugerrand, introduced in 1967, became the world&apos;s best-selling gold coin
                  and helped make gold ownership accessible to everyday investors. In 2017, the South
                  African Mint celebrated the 50th anniversary by releasing the Silver Krugerrand.
                </p>
                <p className="text-slate-300">
                  The silver version carries the same iconic design: Paul Kruger on the obverse
                  and the Springbok antelope on the reverse. It&apos;s become a favorite among silver
                  stackers who want sovereign-mint quality without the higher premiums of US Eagles.
                </p>
              </div>

              <h2 className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-slate-400" />
                Specifications
              </h2>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Attribute</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-white">Silver Content</td>
                      <td className="p-4 text-slate-300">1 troy ounce (31.1035g)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Purity</td>
                      <td className="p-4 text-slate-300">.999 fine silver</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Diameter</td>
                      <td className="p-4 text-slate-300">38.725 mm</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Thickness</td>
                      <td className="p-4 text-slate-300">3.0 mm</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Face Value</td>
                      <td className="p-4 text-slate-300">1 Rand (South African)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Mint</td>
                      <td className="p-4 text-slate-300">South African Mint (Pretoria)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">First Year</td>
                      <td className="p-4 text-slate-300">2017</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-green-400" />
                Premium Comparison: Krugerrand vs Eagles vs Maple Leafs
              </h2>

              <p>
                One of the main advantages of Silver Krugerrands is their competitive pricing
                compared to other sovereign coins. Here&apos;s how they typically stack up:
              </p>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Coin</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Typical Premium</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Price at $25 Spot</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Liquidity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-white">American Silver Eagle</td>
                      <td className="p-4 text-amber-400">15-25%</td>
                      <td className="p-4 text-slate-300">$28.75 - $31.25</td>
                      <td className="p-4 text-green-400">Highest</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Canadian Maple Leaf</td>
                      <td className="p-4 text-amber-400">10-15%</td>
                      <td className="p-4 text-slate-300">$27.50 - $28.75</td>
                      <td className="p-4 text-green-400">Very High</td>
                    </tr>
                    <tr className="bg-green-500/10">
                      <td className="p-4 font-semibold text-white">Silver Krugerrand</td>
                      <td className="p-4 text-green-400 font-bold">8-12%</td>
                      <td className="p-4 text-slate-300">$27.00 - $28.00</td>
                      <td className="p-4 text-slate-300">High</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Austrian Philharmonic</td>
                      <td className="p-4 text-slate-300">8-12%</td>
                      <td className="p-4 text-slate-300">$27.00 - $28.00</td>
                      <td className="p-4 text-slate-300">Moderate</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">British Britannia</td>
                      <td className="p-4 text-slate-300">10-15%</td>
                      <td className="p-4 text-slate-300">$27.50 - $28.75</td>
                      <td className="p-4 text-slate-300">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="not-prose bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-green-400 mb-2">IRA Eligibility Confirmed</h4>
                    <p className="text-slate-300">
                      Silver Krugerrands meet all IRS requirements for inclusion in a Precious Metals IRA:
                    </p>
                    <ul className="mt-2 space-y-1 text-slate-300">
                      <li>- .999 fine silver purity (meets minimum .999 requirement)</li>
                      <li>- Produced by a sovereign mint (South African Mint)</li>
                      <li>- Legal tender status in country of origin</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-amber-400" />
                Design & Authenticity Features
              </h2>

              <p>
                The Silver Krugerrand features the same classic design that made the gold version famous:
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Obverse (Front)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Portrait of Paul Kruger (1825-1904)</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>&quot;SUID-AFRIKA&quot; and &quot;SOUTH AFRICA&quot; inscriptions</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Year of mintage</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Reverse (Back)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Springbok antelope in full stride</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>&quot;KRUGERRAND&quot; inscription</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Silver weight: &quot;1oz FINE SILVER&quot;</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2>Where to Buy Silver Krugerrands</h2>

              <p>
                Silver Krugerrands are widely available from reputable dealers. Here are top sources:
              </p>

              <ul>
                <li><strong>APMEX</strong> - Large selection, various years available</li>
                <li><strong>JM Bullion</strong> - Competitive pricing, regular stock</li>
                <li><strong>SD Bullion</strong> - Often the lowest prices</li>
                <li><strong>Monument Metals</strong> - Good for bulk orders</li>
                <li><strong>Bold Precious Metals</strong> - Competitive premiums</li>
              </ul>

              <div className="not-prose bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-amber-400 mb-2">Buying Tip</h4>
                    <p className="text-slate-300">
                      For IRA purchases, Silver Krugerrands must be brand new and in original mint
                      packaging. Your Gold IRA company will source these directly from approved
                      suppliers to ensure they meet IRS requirements.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Silver Krugerrand vs American Silver Eagle: Which to Choose?</h2>

              <p>
                Both are excellent choices, but they serve slightly different purposes:
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Choose Krugerrands If:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>You want the most silver for your money</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>You&apos;re building a large position (premiums add up)</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>You appreciate the historic Krugerrand design</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>You&apos;re a pure bullion investor (not collector)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Choose Eagles If:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>Maximum liquidity is your priority</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>You may need to sell quickly to local dealers</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>You want US government backing</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>Collector potential matters to you</span>
                    </li>
                  </ul>
                </div>
              </div>

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

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Add Silver Krugerrands to Your IRA"
            subheadline="Augusta Precious Metals offers IRA-eligible Silver Krugerrands with transparent pricing. Get a free consultation to start building your silver position."
            linkContext="silver"
            trackSource="silver-krugerrand"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
