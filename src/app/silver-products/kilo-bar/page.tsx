import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
  Package,
  ArrowRight,
  Scale,
  CheckCircle,
  DollarSign,
  Award,
  Shield,
  Gem,
  Building2,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Silver Kilo Bar Guide: 32.15 oz Bars from Top Mints (2026)",
  description:
    "Complete guide to silver kilo bars (32.15 troy oz). Compare PAMP, Valcambi, RCM bars. Learn about premiums, IRA eligibility, and why kilos are the sweet spot for serious stackers.",
  url: "https://www.richdadretirement.com/silver-products/kilo-bar",
  imageAlt: "Silver Kilo Bar Guide - Rich Dad Retirement",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Silver Kilo Bar: The Sweet Spot for Serious Stackers",
      "description": "Complete guide to 1 kilogram silver bars including top brands, premiums, and IRA eligibility.",
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
          "name": "How many ounces is a silver kilo bar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A silver kilo bar contains exactly 32.1507 troy ounces of silver (1 kilogram = 1000 grams = 32.1507 troy oz). This makes them larger than most retail products but still manageable for individual investors."
          }
        },
        {
          "@type": "Question",
          "name": "Are silver kilo bars IRA eligible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, silver kilo bars are IRA-eligible if they meet IRS requirements: .999 fine purity and produced by a NYMEX/COMEX-approved refiner or accredited manufacturer. Popular IRA-eligible brands include PAMP Suisse, Valcambi, Royal Canadian Mint, and Asahi."
          }
        },
        {
          "@type": "Question",
          "name": "What is the premium on silver kilo bars?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Silver kilo bars typically carry premiums of 3-6% over spot price. Cast bars from generic refiners are at the low end (3-4%), while minted bars from premium brands like PAMP or Valcambi command 5-6%. This is significantly lower than 1 oz products which can have 10-20% premiums."
          }
        },
        {
          "@type": "Question",
          "name": "What's the best brand of silver kilo bar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For IRA purposes and resale liquidity, the best brands are: PAMP Suisse, Valcambi, Royal Canadian Mint (RCM), Perth Mint, and Asahi. PAMP and Valcambi command slight premiums for their recognizable designs and quality, while RCM and Asahi offer excellent value."
          }
        },
        {
          "@type": "Question",
          "name": "Cast vs minted silver kilo bars - what's the difference?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cast bars are made by pouring molten silver into molds, resulting in a rougher, more natural appearance with slight variations. Minted bars are cut from rolled silver sheets and stamped, producing perfectly uniform, mirror-finish bars. Cast bars have lower premiums; minted bars look more refined."
          }
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Silver Kilo Bar",
      "description": "1 kilogram (32.15 oz) silver bar from premium refiners",
      "weight": {
        "@type": "QuantitativeValue",
        "value": "32.15",
        "unitCode": "APZ"
      },
      "material": "Silver (.999 fine)"
    }
  ]
};

export default function SilverKiloBarPage() {
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
              <Package className="h-4 w-4" />
              200 MONTHLY SEARCHES - DIFFICULTY 1
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Silver Kilo Bar: The Stacker&apos;s Sweet Spot
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              At 32.15 troy ounces, the silver kilo bar hits the perfect balance:
              large enough for meaningful premiums savings, small enough to be practical.
              It&apos;s the go-to choice for serious silver stackers building wealth.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                IRA Eligible
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Low Premiums
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Easy to Stack
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Specs */}
      <section className="py-12 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <Scale className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">32.15 oz</div>
                <div className="text-sm text-slate-600">Silver Content</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">3-6%</div>
                <div className="text-sm text-slate-600">Typical Premium</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <Shield className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">.999</div>
                <div className="text-sm text-slate-600">Purity</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <Package className="h-8 w-8 text-[#B22234] mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">~2.2 lbs</div>
                <div className="text-sm text-slate-600">Weight</div>
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

              {/* Why Kilo Bars */}
              <div className="not-prose bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Award className="h-6 w-6 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">Why Kilo Bars Are the Sweet Spot</h2>
                </div>
                <p className="text-slate-600 mb-4">
                  Silver kilo bars occupy a unique position in the market. They&apos;re large enough to
                  benefit from wholesale-level premiums (3-6% vs 10-20% for small products), but still
                  small enough for individual investors to handle, store, and eventually sell.
                </p>
                <p className="text-slate-600">
                  At around $800 per bar (at $25/oz spot), they&apos;re accessible to most serious investors
                  without requiring the $25,000+ commitment of 1000 oz bars. Many stackers consider
                  kilos the &quot;goldilocks zone&quot; of silver investing.
                </p>
              </div>

              <h2 className="flex items-center gap-3">
                <Gem className="h-6 w-6 text-[#B22234]" />
                Top Silver Kilo Bar Brands
              </h2>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Brand</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Type</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Premium</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">IRA Eligible</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">PAMP Suisse</td>
                      <td className="p-4 text-slate-600">Minted</td>
                      <td className="p-4 text-[#B22234]">5-7%</td>
                      <td className="p-4 text-green-400">Yes</td>
                      <td className="p-4 text-slate-600">Premium brand, Lady Fortuna design</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Valcambi</td>
                      <td className="p-4 text-slate-600">Minted</td>
                      <td className="p-4 text-[#B22234]">5-6%</td>
                      <td className="p-4 text-green-400">Yes</td>
                      <td className="p-4 text-slate-600">Swiss quality, combibar options</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Royal Canadian Mint</td>
                      <td className="p-4 text-slate-600">Minted</td>
                      <td className="p-4 text-green-400">4-5%</td>
                      <td className="p-4 text-green-400">Yes</td>
                      <td className="p-4 text-slate-600">Government mint, maple leaf design</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Perth Mint</td>
                      <td className="p-4 text-slate-600">Cast/Minted</td>
                      <td className="p-4 text-green-400">4-5%</td>
                      <td className="p-4 text-green-400">Yes</td>
                      <td className="p-4 text-slate-600">Australian government mint</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Asahi</td>
                      <td className="p-4 text-slate-600">Minted</td>
                      <td className="p-4 text-green-400">3-4%</td>
                      <td className="p-4 text-green-400">Yes</td>
                      <td className="p-4 text-slate-600">Former J-M refinery, great value</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Nadir</td>
                      <td className="p-4 text-slate-600">Minted</td>
                      <td className="p-4 text-green-400">3-4%</td>
                      <td className="p-4 text-green-400">Yes</td>
                      <td className="p-4 text-slate-600">Turkish refiner, budget option</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Generic/Secondary</td>
                      <td className="p-4 text-slate-600">Cast</td>
                      <td className="p-4 text-green-400">2-3%</td>
                      <td className="p-4 text-[#B22234]">Varies</td>
                      <td className="p-4 text-slate-600">Lowest cost, check refiner</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-green-400" />
                Premium Comparison: Kilo vs Other Sizes
              </h2>

              <p>
                Here&apos;s why serious stackers love kilo bars—the premium savings add up fast:
              </p>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Product</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Premium</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Cost for 100 oz</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Extra Cost vs Kilo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">1 oz Rounds</td>
                      <td className="p-4 text-red-400">12-15%</td>
                      <td className="p-4 text-slate-600">$2,800-2,875</td>
                      <td className="p-4 text-red-400">+$225-300</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">10 oz Bars</td>
                      <td className="p-4 text-[#B22234]">6-8%</td>
                      <td className="p-4 text-slate-600">$2,650-2,700</td>
                      <td className="p-4 text-[#B22234]">+$75-125</td>
                    </tr>
                    <tr className="bg-green-500/10">
                      <td className="p-4 font-semibold text-slate-900">Kilo Bars (3x)</td>
                      <td className="p-4 text-green-400 font-bold">4-5%</td>
                      <td className="p-4 text-slate-600">$2,575-2,625</td>
                      <td className="p-4 text-green-400">Baseline</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">100 oz Bar</td>
                      <td className="p-4 text-green-400">3-4%</td>
                      <td className="p-4 text-slate-600">$2,575-2,600</td>
                      <td className="p-4 text-green-400">~Same</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-slate-600 mt-2">Based on $25/oz spot price. Actual prices vary by dealer and market conditions.</p>
              </div>

              <h2 className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-slate-600" />
                Cast vs Minted Kilo Bars
              </h2>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Cast Bars</h3>
                  <p className="text-slate-600 mb-4">
                    Made by pouring molten silver into molds. Each bar is slightly unique with
                    a rougher, more industrial appearance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Lower premiums (2-4%)</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Unique character</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Preferred by stackers</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Minted Bars</h3>
                  <p className="text-slate-600 mb-4">
                    Stamped from rolled silver sheets with precise designs. Uniform, polished
                    appearance with sharp edges.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Higher premiums (4-7%)</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Pristine finish</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Often in assay cards</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-green-400" />
                IRA Eligibility
              </h2>

              <div className="not-prose bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-green-400 mb-2">Silver Kilo Bars Are IRA-Eligible</h4>
                    <p className="text-slate-600 mb-3">
                      To qualify for a Precious Metals IRA, silver kilo bars must:
                    </p>
                    <ul className="space-y-1 text-slate-600">
                      <li>- Be .999 fine purity (or higher)</li>
                      <li>- Be produced by NYMEX/COMEX-approved refiner OR accredited manufacturer</li>
                      <li>- Be in new, uncirculated condition</li>
                      <li>- Be stored at an IRS-approved depository</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Where to Buy Silver Kilo Bars</h2>

              <p>
                Silver kilo bars are widely available from major dealers:
              </p>

              <ul>
                <li><strong>SD Bullion</strong> - Often lowest prices, variety of brands</li>
                <li><strong>JM Bullion</strong> - Good selection, competitive pricing</li>
                <li><strong>APMEX</strong> - Premium brands, assay card options</li>
                <li><strong>Monument Metals</strong> - Bulk discounts available</li>
                <li><strong>Bold Precious Metals</strong> - Good for RCM and Asahi</li>
              </ul>

              <h2>Storage Considerations</h2>

              <p>
                At about 2.2 pounds each, kilo bars are easy to handle and stack. A typical
                home safe can hold 20-30 kilos (650-1000 oz) without issue. For IRA holdings,
                they must be stored at an approved depository like Delaware Depository or Brinks.
              </p>

              <div className="not-prose bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Kilo Bar Stacking Math</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#B22234]">10 Bars</div>
                    <div className="text-slate-600">~321.5 oz</div>
                    <div className="text-slate-600">~$8,000</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#B22234]">31 Bars</div>
                    <div className="text-slate-600">~1000 oz</div>
                    <div className="text-slate-600">~$25,000</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#B22234]">100 Bars</div>
                    <div className="text-slate-600">~3215 oz</div>
                    <div className="text-slate-600">~$80,000</div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-4 text-center">At approximately $25/oz spot price</p>
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
            headline="Add Silver Kilo Bars to Your IRA"
            subheadline="Augusta Precious Metals offers IRA-eligible silver kilo bars from top refiners. Get a free consultation to start building your silver position tax-advantaged."
            linkContext="silver"
            trackSource="silver-kilo-bar"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
