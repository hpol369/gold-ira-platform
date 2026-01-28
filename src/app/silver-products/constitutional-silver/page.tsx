import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
  Landmark,
  ArrowRight,
  Scale,
  Calculator,
  CheckCircle,
  XCircle,
  DollarSign,
  Info,
  History,
  Shield,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Constitutional Silver Guide: 90% Junk Silver Coins Explained (2026)",
  description:
    "Complete guide to constitutional silver (junk silver). Learn about pre-1965 US coins, silver content calculations, face value pricing, and why stackers love 90% silver.",
  url: "https://www.richdadretirement.com/silver-products/constitutional-silver",
  imageAlt: "Constitutional Silver Guide - Rich Dad Retirement",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Constitutional Silver: The Complete Guide to 90% Junk Silver",
      "description": "Everything you need to know about constitutional silver including coin types, silver content calculations, and why it's a stacker favorite.",
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
          "name": "What is constitutional silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Constitutional silver refers to US coins minted before 1965 that contain 90% silver. This includes dimes, quarters, half dollars, and some dollar coins. The term 'constitutional' refers to the original monetary system established by the US Constitution, which defined money as gold and silver coin."
          }
        },
        {
          "@type": "Question",
          "name": "How much silver is in $1 face value of junk silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "$1 face value of 90% silver coins (any combination of dimes, quarters, or half dollars) contains approximately 0.715 troy ounces of pure silver. Due to wear on circulated coins, the actual content may be slightly less (around 0.715 oz is the standard calculation)."
          }
        },
        {
          "@type": "Question",
          "name": "Is constitutional silver IRA eligible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, constitutional (90%) silver is NOT IRA-eligible. The IRS requires silver in IRAs to be .999 fine purity (99.9% pure). Since junk silver is only 90% silver, it does not qualify for precious metals IRAs. For IRA silver, consider American Silver Eagles or .999 fine bars."
          }
        },
        {
          "@type": "Question",
          "name": "Why do preppers and stackers love junk silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Constitutional silver is beloved for several reasons: 1) Instant recognizability - everyone knows what a quarter looks like, 2) Divisibility - small denominations for barter, 3) No counterfeiting concerns - US coins are hard to fake, 4) Lower premiums than bullion coins, 5) Historical value beyond silver content."
          }
        },
        {
          "@type": "Question",
          "name": "What's the best constitutional silver to buy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For pure silver value: Washington quarters and Roosevelt dimes are most common and affordable. For numismatic potential: Mercury dimes and Walking Liberty half dollars have collector appeal. For recognizability: Any 90% coins work well, but quarters are most familiar to Americans."
          }
        }
      ]
    }
  ]
};

export default function ConstitutionalSilverPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/silver-products"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Silver Products
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/10 border border-slate-300 rounded-full text-slate-600 font-semibold text-sm mb-6">
              <Landmark className="h-4 w-4" />
              450 MONTHLY SEARCHES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Constitutional Silver: America&apos;s Original Money
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Before 1965, every US dime, quarter, and half dollar contained 90% silver.
              Today, this &quot;junk silver&quot; is prized by stackers for its recognizability,
              divisibility, and connection to America&apos;s monetary heritage.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Highly Recognizable
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Divisible
              </span>
              <span className="flex items-center gap-2 text-red-400">
                <XCircle className="h-4 w-4" />
                NOT IRA Eligible
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Reference */}
      <section className="py-12 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <Scale className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">90%</div>
                <div className="text-sm text-slate-600">Silver Content</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <Calculator className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">0.715 oz</div>
                <div className="text-sm text-slate-600">Per $1 Face</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <History className="h-8 w-8 text-[#B22234] mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">Pre-1965</div>
                <div className="text-sm text-slate-600">Mintage Years</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">5-15%</div>
                <div className="text-sm text-slate-600">Premium Range</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-invert prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 max-w-none">

              {/* What is Constitutional Silver */}
              <div className="not-prose bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#B22234]/10 rounded-lg">
                    <Landmark className="h-6 w-6 text-slate-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">What is Constitutional Silver?</h2>
                </div>
                <p className="text-slate-600 mb-4">
                  &quot;Constitutional silver&quot; refers to US coins minted before 1965 that contain 90% silver
                  and 10% copper. The term comes from Article I, Section 10 of the US Constitution, which
                  originally defined lawful money as gold and silver coin.
                </p>
                <p className="text-slate-600">
                  It&apos;s also called &quot;junk silver&quot;—not because it&apos;s worthless, but because these coins
                  have no numismatic (collector) value beyond their silver content. They&apos;re valued purely
                  for the silver they contain.
                </p>
              </div>

              <h2 className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-slate-600" />
                Types of Constitutional Silver Coins
              </h2>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Coin Type</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Years</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Silver Content</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Per Coin (oz)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Roosevelt Dime</td>
                      <td className="p-4 text-slate-600">1946-1964</td>
                      <td className="p-4 text-slate-600">90%</td>
                      <td className="p-4 text-slate-600">0.0715 oz</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Mercury Dime</td>
                      <td className="p-4 text-slate-600">1916-1945</td>
                      <td className="p-4 text-slate-600">90%</td>
                      <td className="p-4 text-slate-600">0.0715 oz</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Washington Quarter</td>
                      <td className="p-4 text-slate-600">1932-1964</td>
                      <td className="p-4 text-slate-600">90%</td>
                      <td className="p-4 text-slate-600">0.1788 oz</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Standing Liberty Quarter</td>
                      <td className="p-4 text-slate-600">1916-1930</td>
                      <td className="p-4 text-slate-600">90%</td>
                      <td className="p-4 text-slate-600">0.1788 oz</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Kennedy Half Dollar</td>
                      <td className="p-4 text-slate-600">1964</td>
                      <td className="p-4 text-slate-600">90%</td>
                      <td className="p-4 text-slate-600">0.3575 oz</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Walking Liberty Half</td>
                      <td className="p-4 text-slate-600">1916-1947</td>
                      <td className="p-4 text-slate-600">90%</td>
                      <td className="p-4 text-slate-600">0.3575 oz</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Franklin Half Dollar</td>
                      <td className="p-4 text-slate-600">1948-1963</td>
                      <td className="p-4 text-slate-600">90%</td>
                      <td className="p-4 text-slate-600">0.3575 oz</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Morgan Dollar</td>
                      <td className="p-4 text-slate-600">1878-1921</td>
                      <td className="p-4 text-slate-600">90%</td>
                      <td className="p-4 text-slate-600">0.7734 oz</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Peace Dollar</td>
                      <td className="p-4 text-slate-600">1921-1935</td>
                      <td className="p-4 text-slate-600">90%</td>
                      <td className="p-4 text-slate-600">0.7734 oz</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="not-prose bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 text-[#B22234] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-[#B22234] mb-2">Note on Kennedy Halves (1965-1970)</h4>
                    <p className="text-slate-600">
                      Kennedy half dollars from 1965-1970 contain only 40% silver, not 90%. These are
                      sometimes called &quot;40% silver&quot; or &quot;clad silver&quot; and trade at different premiums.
                      From 1971 onward, Kennedy halves contain no silver (except special mint issues).
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Calculator className="h-6 w-6 text-green-400" />
                Silver Content Calculations
              </h2>

              <p>
                Constitutional silver is priced by &quot;face value&quot; - the total value printed on the coins.
                Here&apos;s how to calculate the silver content:
              </p>

              <div className="not-prose bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">The Formula</h3>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-lg text-center mb-4">
                  <span className="text-green-400">$1 face value</span> = <span className="text-[#B22234]">0.715 oz</span> silver
                </div>
                <p className="text-slate-600 mb-4">
                  This means $100 face value of 90% silver coins contains approximately <strong>71.5 troy ounces</strong> of silver.
                </p>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Quick Reference:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>$1.40 face value (14 dimes or 5.6 quarters) = 1 oz silver</li>
                  <li>$10 face value = 7.15 oz silver</li>
                  <li>$100 face value = 71.5 oz silver</li>
                  <li>$1,000 face value (standard bag) = 715 oz silver</li>
                </ul>
              </div>

              <h2 className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-green-400" />
                Why Stackers Love Constitutional Silver
              </h2>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Instantly recognizable</strong> - Everyone knows what a quarter is</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Highly divisible</strong> - Small denominations for barter</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Hard to counterfeit</strong> - Weight, sound, and design are familiar</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Lower premiums</strong> - Cheaper per oz than Eagles</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Historical value</strong> - Connection to sound money era</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Disadvantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><strong>NOT IRA eligible</strong> - Only .999 silver qualifies</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Variable condition</strong> - Wear affects weight</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Bulky storage</strong> - More space per oz vs bars</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Selling complexity</strong> - Need to count/weigh</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Premium volatility</strong> - Swings with demand</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="not-prose bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-red-400 mb-2">IRA Warning: NOT Eligible</h4>
                    <p className="text-slate-600">
                      Constitutional silver (90% coins) does NOT qualify for Precious Metals IRAs.
                      The IRS requires .999 fine silver (99.9% purity). If you want silver in your IRA,
                      consider American Silver Eagles, Canadian Maple Leafs, or .999 silver bars.
                    </p>
                  </div>
                </div>
              </div>

              <h2>How to Buy Constitutional Silver</h2>

              <p>
                Constitutional silver is sold by &quot;face value&quot; - the amount printed on the coins.
                The price is expressed as a multiple of face value or as a price per $1 face.
              </p>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Purchase Size</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Silver Content</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Typical Cost*</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">$10 Face Value</td>
                      <td className="p-4 text-slate-600">7.15 oz</td>
                      <td className="p-4 text-slate-600">$180-200</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">$100 Face Value</td>
                      <td className="p-4 text-slate-600">71.5 oz</td>
                      <td className="p-4 text-slate-600">$1,800-2,000</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">$500 Face (Half Bag)</td>
                      <td className="p-4 text-slate-600">357.5 oz</td>
                      <td className="p-4 text-slate-600">$8,900-9,500</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">$1,000 Face (Full Bag)</td>
                      <td className="p-4 text-slate-600">715 oz</td>
                      <td className="p-4 text-slate-600">$17,500-19,000</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-slate-600 mt-2">*Prices at approximately $25/oz spot. Premiums vary by market conditions and coin type.</p>
              </div>

              <h2>Where to Buy</h2>

              <ul>
                <li><strong>SD Bullion</strong> - Often best prices on bags</li>
                <li><strong>JM Bullion</strong> - Wide selection by type</li>
                <li><strong>APMEX</strong> - Premium selection, specific dates</li>
                <li><strong>Local coin shops</strong> - Great for small quantities</li>
                <li><strong>Estate sales</strong> - Sometimes find below market</li>
              </ul>

              <h2>Best Constitutional Silver for Different Goals</h2>

              <div className="not-prose grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">For Pure Value</h3>
                  <p className="text-slate-600 mb-3">
                    Roosevelt dimes and Washington quarters offer the best value - common dates
                    with no numismatic premium.
                  </p>
                  <span className="text-green-400 text-sm font-semibold">Lowest premiums</span>
                </div>
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">For Barter/Prepping</h3>
                  <p className="text-slate-600 mb-3">
                    Mix of dimes and quarters. Dimes are most divisible; quarters most recognizable.
                    Skip half dollars for barter.
                  </p>
                  <span className="text-[#B22234] text-sm font-semibold">Most practical</span>
                </div>
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">For Collector Appeal</h3>
                  <p className="text-slate-600 mb-3">
                    Mercury dimes, Walking Liberty halves, and Morgan dollars. Higher premiums but
                    potential upside if silver rises.
                  </p>
                  <span className="text-slate-600 text-sm font-semibold">Semi-numismatic</span>
                </div>
              </div>

            </article>
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

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Want IRA-Eligible Silver Instead?"
            subheadline="Constitutional silver isn't IRA-eligible, but Augusta Precious Metals offers American Silver Eagles and .999 fine bars that are. Get a free consultation to explore your tax-advantaged options."
            linkContext="silver"
            trackSource="silver-constitutional"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
