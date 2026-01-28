import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  Scale,
  Building2,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Warehouse,
  DollarSign,
  Info,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "1000 oz Silver Bar Guide: COMEX Deliverable Bars for Serious Investors (2026)",
  description:
    "Complete guide to 1000 oz silver bars. Learn about COMEX deliverable specifications, premiums, weight, dimensions, and where to buy institutional silver bars.",
  url: "https://www.richdadretirement.com/silver-products/1000-oz-bar",
  imageAlt: "1000 oz Silver Bar Guide - Rich Dad Retirement",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "1000 oz Silver Bar: The Complete Guide for Serious Investors",
      "description": "Everything you need to know about 1000 oz silver bars including COMEX specifications, premiums, storage, and where to buy.",
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
          "name": "How much does a 1000 oz silver bar cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At current silver prices around $25/oz, a 1000 oz silver bar costs approximately $25,000-$26,000. The premium over spot is typically only 1-3%, making these bars the most cost-effective way to acquire physical silver per ounce."
          }
        },
        {
          "@type": "Question",
          "name": "Can I buy a 1000 oz silver bar for my IRA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, 1000 oz silver bars can be IRA-eligible if they meet IRS requirements: .999 fine purity and produced by a NYMEX/COMEX-approved refiner or national mint. The bar must be stored at an IRS-approved depository."
          }
        },
        {
          "@type": "Question",
          "name": "What are the dimensions of a 1000 oz silver bar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard 1000 oz silver bars are approximately 10-12 inches long, 4-6 inches wide, and 3-4 inches tall. They weigh between 900-1100 troy ounces (the '1000 oz' is nominal). Each bar weighs roughly 68-70 pounds."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I store a 1000 oz silver bar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Options include: professional vault storage (Delaware Depository, Brinks, Loomis), bank safe deposit boxes (if large enough), or home storage in a secure safe. Professional storage costs $0.50-$1.50 per ounce annually but provides insurance and easy selling."
          }
        },
        {
          "@type": "Question",
          "name": "Is a 1000 oz bar considered 'good delivery'?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not all 1000 oz bars are LBMA Good Delivery. Good Delivery bars must meet specific weight, purity, and manufacturing standards from approved refiners. COMEX-deliverable bars have similar but slightly different requirements. Both command the lowest premiums."
          }
        }
      ]
    },
    {
      "@type": "Product",
      "name": "1000 oz Silver Bar",
      "description": "Industrial-grade silver bar for institutional investors and serious stackers",
      "weight": {
        "@type": "QuantitativeValue",
        "value": "1000",
        "unitCode": "APZ"
      },
      "material": "Silver (.999 fine)"
    }
  ]
};

export default function ThousandOzBarPage() {
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
              <Layers className="h-4 w-4" />
              1,300 MONTHLY SEARCHES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              1000 oz Silver Bar: The Institutional Standard
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              The 1000 oz silver bar is the benchmark for wholesale silver trading.
              Used on COMEX and LBMA exchanges, these bars offer the lowest premiums
              available for physical silver ownership.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Lowest Premium
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                COMEX Deliverable
              </span>
              <span className="flex items-center gap-2 text-[#B22234]">
                <AlertTriangle className="h-4 w-4" />
                High Minimum
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
                <div className="text-2xl font-bold text-slate-900">~68 lbs</div>
                <div className="text-sm text-slate-600">Weight</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">1-3%</div>
                <div className="text-sm text-slate-600">Premium Over Spot</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <Building2 className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">.999</div>
                <div className="text-sm text-slate-600">Purity (Fine)</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <Warehouse className="h-8 w-8 text-[#B22234] mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">$25K+</div>
                <div className="text-sm text-slate-600">Min. Investment</div>
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

              {/* What is a 1000 oz Bar */}
              <div className="not-prose bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#B22234]/10 rounded-lg">
                    <Layers className="h-6 w-6 text-slate-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">What is a 1000 oz Silver Bar?</h2>
                </div>
                <p className="text-slate-600 mb-4">
                  The 1000 oz silver bar (also called a &quot;Good Delivery&quot; bar or &quot;COMEX bar&quot;) is the
                  standard unit of trade for institutional silver markets. Despite the name, these bars
                  actually range from 900 to 1,100 troy ounces—the &quot;1000 oz&quot; is just a nominal designation.
                </p>
                <p className="text-slate-600">
                  These bars are what banks, hedge funds, and commodity traders buy and sell. When silver
                  futures contracts are settled with physical delivery, these are the bars that change hands.
                </p>
              </div>

              <h2 className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-slate-600" />
                Specifications & Dimensions
              </h2>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Specification</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">COMEX Standard</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">LBMA Good Delivery</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Weight Range</td>
                      <td className="p-4 text-slate-600">750-1,100 troy oz</td>
                      <td className="p-4 text-slate-600">900-1,100 troy oz</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Purity</td>
                      <td className="p-4 text-slate-600">.999 fine minimum</td>
                      <td className="p-4 text-slate-600">.999 fine minimum</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Physical Weight</td>
                      <td className="p-4 text-slate-600">~62-75 lbs (28-34 kg)</td>
                      <td className="p-4 text-slate-600">~62-75 lbs (28-34 kg)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Dimensions (approx)</td>
                      <td className="p-4 text-slate-600">10-12&quot; x 4-6&quot; x 3-4&quot;</td>
                      <td className="p-4 text-slate-600">10-12&quot; x 4-6&quot; x 3-4&quot;</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Required Markings</td>
                      <td className="p-4 text-slate-600">Serial #, weight, assay, refiner</td>
                      <td className="p-4 text-slate-600">Serial #, weight, assay, refiner, year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-green-400" />
                Why 1000 oz Bars Have the Lowest Premium
              </h2>

              <p>
                The economics are simple: manufacturing costs are spread across more ounces. It costs
                roughly the same to pour and stamp a 1 oz bar as a 1000 oz bar, but with 1000x the silver
                content, the per-ounce fabrication cost becomes negligible.
              </p>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Product</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Typical Premium</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Cost at $25 Spot</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr className="bg-green-500/10">
                      <td className="p-4 font-semibold text-slate-900">1000 oz Bar</td>
                      <td className="p-4 text-green-400 font-bold">1-3%</td>
                      <td className="p-4 text-slate-600">$25,250 - $25,750</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">100 oz Bar</td>
                      <td className="p-4 text-slate-600">3-5%</td>
                      <td className="p-4 text-slate-600">$2,575 - $2,625</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">10 oz Bar</td>
                      <td className="p-4 text-slate-600">5-8%</td>
                      <td className="p-4 text-slate-600">$262 - $270</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">1 oz Round</td>
                      <td className="p-4 text-slate-600">10-15%</td>
                      <td className="p-4 text-slate-600">$27.50 - $28.75</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">American Silver Eagle</td>
                      <td className="p-4 text-[#B22234]">15-25%</td>
                      <td className="p-4 text-slate-600">$28.75 - $31.25</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-slate-600" />
                Who Buys 1000 oz Silver Bars?
              </h2>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Ideal For</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Institutional investors and funds</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>High-net-worth individuals ($250K+ in precious metals)</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Serious stackers optimizing for lowest cost per ounce</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>IRA accounts with $50K+ in silver allocation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Not Ideal For</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Beginners or small investors</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Those needing liquidity/divisibility</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Home storage without professional security</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Preppers planning for SHTF scenarios</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Warehouse className="h-6 w-6 text-[#B22234]" />
                Storage Considerations
              </h2>

              <p>
                At nearly 70 pounds each, storage is a real consideration. Most 1000 oz bar owners
                use professional vault storage, which provides insurance, security, and easy liquidity
                when it&apos;s time to sell.
              </p>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Storage Option</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Annual Cost</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Pros</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Cons</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Delaware Depository</td>
                      <td className="p-4 text-slate-600">0.5% of value</td>
                      <td className="p-4 text-green-400">Insured, IRA-approved, liquid</td>
                      <td className="p-4 text-slate-600">Ongoing fees</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Brinks/Loomis</td>
                      <td className="p-4 text-slate-600">0.4-0.6% of value</td>
                      <td className="p-4 text-green-400">Global network, insured</td>
                      <td className="p-4 text-slate-600">May require minimum</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Bank Safe Deposit</td>
                      <td className="p-4 text-slate-600">$300-500/year</td>
                      <td className="p-4 text-green-400">Low cost, local access</td>
                      <td className="p-4 text-red-400">Not insured, size limits</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Home Safe</td>
                      <td className="p-4 text-slate-600">One-time $2,000+</td>
                      <td className="p-4 text-green-400">Full control, no fees</td>
                      <td className="p-4 text-red-400">Security risk, heavy</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="not-prose bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 text-[#B22234] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-[#B22234] mb-2">IRA Storage Requirements</h4>
                    <p className="text-slate-600">
                      If you hold 1000 oz bars in a Precious Metals IRA, the IRS requires they be stored
                      at an approved depository—you cannot take home delivery. This is actually a benefit:
                      it ensures your bars maintain &quot;good delivery&quot; status and can be easily liquidated.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Where to Buy 1000 oz Silver Bars</h2>

              <p>
                Not every dealer carries 1000 oz bars—they require significant capital and specialized
                logistics. Here are reputable sources:
              </p>

              <ul>
                <li><strong>SD Bullion</strong> - Often has the best prices, bulk discounts available</li>
                <li><strong>JM Bullion</strong> - Wide selection, competitive pricing</li>
                <li><strong>APMEX</strong> - Largest selection, premium pricing</li>
                <li><strong>Monument Metals</strong> - Competitive on large orders</li>
                <li><strong>Direct from refiners</strong> - Johnson Matthey, Asahi, Republic Metals (minimum orders apply)</li>
              </ul>

              <p>
                For IRA purchases, work with an established Gold IRA company that sources from COMEX-approved
                refiners and handles the logistics of depository storage.
              </p>

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
            headline="Add Institutional Silver to Your IRA"
            subheadline="Augusta Precious Metals can help you acquire 1000 oz bars for your IRA with proper depository storage. Get expert guidance on building a serious silver position."
            linkContext="silver"
            trackSource="silver-1000oz-bar"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
