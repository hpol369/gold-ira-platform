import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  Scale,
  Shield,
  CheckCircle,
  XCircle,
  DollarSign,
  Info,
  Globe,
  Sparkles,
  FileCheck,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "PAMP Suisse Silver Guide: Lady Fortuna Bars & Assay Verification (2026)",
  description:
    "Complete guide to PAMP Suisse silver products. Learn about the iconic Lady Fortuna design, assay card verification, and why PAMP commands premium pricing.",
  url: "https://www.richdadretirement.com/silver-products/pamp-suisse",
  imageAlt: "PAMP Suisse Silver Guide - Rich Dad Retirement",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "PAMP Suisse Silver: The Swiss Standard for Premium Bullion",
      "description": "Everything you need to know about PAMP Suisse silver including the Lady Fortuna design, assay card verification, and why PAMP commands premium pricing.",
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
          "name": "What makes PAMP Suisse silver special?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PAMP (Produits Artistiques Metaux Precieux) is a Swiss refiner known for exceptional craftsmanship and the iconic Lady Fortuna design. As an LBMA-certified refiner, PAMP meets the highest global standards. Each bar comes with an assay card guaranteeing weight, purity, and authenticity, making PAMP the premium choice for discerning investors."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Lady Fortuna design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lady Fortuna is PAMP's signature design showing the Roman goddess of fortune, blindfolded and holding a cornucopia (horn of plenty). This design has been featured on PAMP bars since 1979 and has become one of the most recognized images in the precious metals industry. The artistic quality sets PAMP apart from generic bullion."
          }
        },
        {
          "@type": "Question",
          "name": "How do I verify a PAMP Suisse assay card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Authentic PAMP assay cards feature: the PAMP logo with hologram, unique serial number matching the bar, certified weight and purity, and the assayer's signature. The bar should be sealed within the card's protective packaging. PAMP also offers Veriscan technology - an app that can verify the bar's unique surface pattern against their database."
          }
        },
        {
          "@type": "Question",
          "name": "Is PAMP Suisse silver IRA eligible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, PAMP Suisse silver bars meeting .999+ purity are IRA-eligible. However, because PAMP bars carry significant premiums (15-25%+ over spot), many IRA investors prefer lower-premium options to maximize their silver ounces. PAMP is often better suited for personal collections where the aesthetic value can be appreciated."
          }
        },
        {
          "@type": "Question",
          "name": "Why do PAMP silver bars cost more than other brands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PAMP premiums reflect: 1) Superior Swiss craftsmanship and artistic designs, 2) LBMA Good Delivery certification, 3) Individual assay cards with serial numbers, 4) The Veriscan authentication system, 5) Global brand recognition, and 6) High resale value. Investors pay for quality, security, and the ability to sell at premium prices."
          }
        }
      ]
    },
    {
      "@type": "Product",
      "name": "PAMP Suisse Silver Bar",
      "description": "Premium Swiss silver bars featuring the iconic Lady Fortuna design",
      "material": "Silver (.999+ fine)",
      "manufacturer": {
        "@type": "Organization",
        "name": "PAMP SA"
      }
    }
  ]
};

export default function PAMPSuissePage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 font-semibold text-sm mb-6">
              <Award className="h-4 w-4" />
              150 MONTHLY SEARCHES - DIFFICULTY 0!
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              PAMP Suisse Silver: Swiss Excellence
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              PAMP Suisse represents the pinnacle of precious metals refining. Known worldwide
              for the iconic Lady Fortuna design and meticulous Swiss craftsmanship, PAMP
              bars command premiums that reflect their superior quality and authenticity.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                LBMA Certified
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Assay Card Included
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                IRA Eligible
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
                <Globe className="h-8 w-8 text-[#B22234] mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">1977</div>
                <div className="text-sm text-slate-600">Founded</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <Shield className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">.999+</div>
                <div className="text-sm text-slate-600">Purity</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <FileCheck className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">Assay</div>
                <div className="text-sm text-slate-600">Card Included</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <DollarSign className="h-8 w-8 text-[#B22234] mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">15-25%</div>
                <div className="text-sm text-slate-600">Premium</div>
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

              {/* About PAMP */}
              <div className="not-prose bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#B22234]/20 rounded-lg">
                    <Award className="h-6 w-6 text-[#B22234]" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">About PAMP Suisse</h2>
                </div>
                <p className="text-slate-600 mb-4">
                  PAMP (Produits Artistiques Metaux Precieux, or &quot;Artistic Precious Metals Products&quot;)
                  was founded in 1977 in Ticino, Switzerland. From the beginning, PAMP distinguished itself
                  by combining traditional Swiss craftsmanship with artistic excellence.
                </p>
                <p className="text-slate-600 mb-4">
                  As an LBMA (London Bullion Market Association) certified refiner, PAMP meets the most
                  stringent global standards for precious metals. Their refinery processes over 400 tonnes
                  of gold and silver annually for clients worldwide.
                </p>
                <p className="text-slate-600">
                  PAMP is now part of the MKS PAMP GROUP, one of the world&apos;s largest precious metals
                  trading companies. This backing ensures financial stability and continued quality.
                </p>
              </div>

              <h2 className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-[#B22234]" />
                The Lady Fortuna Design
              </h2>

              <p>
                The Lady Fortuna design has been PAMP&apos;s signature since 1979, making it one of the
                most recognized images in precious metals. Here&apos;s what the design represents:
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Design Elements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span><strong>Lady Fortuna:</strong> Roman goddess of fortune and prosperity</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span><strong>Blindfold:</strong> Represents impartial distribution of luck</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span><strong>Cornucopia:</strong> Horn of plenty symbolizing abundance</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span><strong>Wheel:</strong> Wheel of fortune at her feet</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Why It Matters</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Instantly recognizable worldwide</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Commands premium at resale</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Difficult to counterfeit accurately</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Aesthetic value beyond bullion</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <FileCheck className="h-6 w-6 text-green-400" />
                Assay Card Verification
              </h2>

              <p>
                Every PAMP bar comes sealed in a CertiPAMP assay card that guarantees authenticity.
                Here&apos;s how to verify yours is genuine:
              </p>

              <div className="not-prose bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Authentic Assay Card Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>PAMP logo with security hologram</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Unique serial number matching bar</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Certified weight in troy ounces/grams</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Purity certification (.999 or .9999)</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Official assayer signature</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Tamper-evident sealed packaging</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="not-prose bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-green-400 mb-2">VERISCAN Technology</h4>
                    <p className="text-slate-600">
                      PAMP offers VERISCAN, a smartphone app that can verify bar authenticity by scanning
                      the bar&apos;s unique surface pattern and comparing it to PAMP&apos;s database. Every precious
                      metal bar has a unique &quot;fingerprint&quot; created during manufacturing. This provides
                      an additional layer of verification beyond the assay card.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-slate-600" />
                PAMP Silver Product Range
              </h2>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Product</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Size</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Typical Premium</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Lady Fortuna Bar</td>
                      <td className="p-4 text-slate-600">1 oz</td>
                      <td className="p-4 text-[#B22234]">20-25% over spot</td>
                      <td className="p-4 text-slate-600">Collectors, gifts</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Lady Fortuna Bar</td>
                      <td className="p-4 text-slate-600">10 oz</td>
                      <td className="p-4 text-slate-600">15-20% over spot</td>
                      <td className="p-4 text-slate-600">Serious investors</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Lady Fortuna Bar</td>
                      <td className="p-4 text-slate-600">100 oz</td>
                      <td className="p-4 text-green-400">10-15% over spot</td>
                      <td className="p-4 text-slate-600">Large positions</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Kilo Bar</td>
                      <td className="p-4 text-slate-600">32.15 oz</td>
                      <td className="p-4 text-slate-600">12-18% over spot</td>
                      <td className="p-4 text-slate-600">Mid-size investors</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Rosa Bar (Limited)</td>
                      <td className="p-4 text-slate-600">Various</td>
                      <td className="p-4 text-[#B22234]">25%+ over spot</td>
                      <td className="p-4 text-slate-600">Collectors</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-green-400" />
                Why PAMP Commands Premium Prices
              </h2>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Worth the Premium</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Superior Swiss craftsmanship</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>LBMA Good Delivery certification</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Assay card with serial number</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>VERISCAN authentication available</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Strong resale value globally</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Considerations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span>High premiums reduce pure silver value</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span>May not recoup premium on quick sale</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span>Counterfeits exist (buy from reputable sources)</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span>Less efficient for pure bullion stacking</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="not-prose bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 text-[#B22234] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-[#B22234] mb-2">Best Use Cases for PAMP</h4>
                    <p className="text-slate-600">
                      PAMP bars are ideal when you value authenticity guarantees, plan to gift silver,
                      want aesthetic appeal in your collection, or will be selling internationally where
                      PAMP is highly recognized. For pure bullion accumulation where cost-per-ounce is
                      priority, consider lower-premium alternatives.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Where to Buy PAMP Suisse Silver</h2>

              <p>
                PAMP products are available from all major bullion dealers. Always buy from authorized sources:
              </p>

              <ul>
                <li><strong>APMEX</strong> - Wide selection, PAMP authorized dealer</li>
                <li><strong>JM Bullion</strong> - Competitive pricing on PAMP bars</li>
                <li><strong>SD Bullion</strong> - Often has best prices</li>
                <li><strong>Kitco</strong> - Long-standing PAMP relationship</li>
                <li><strong>Local Coin Shops</strong> - Verify authenticity before purchase</li>
              </ul>

              <p>
                Avoid eBay for PAMP products unless buying from top-rated sellers with authentication
                guarantees. The premium pricing makes PAMP an attractive target for counterfeiters.
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

      {/* Related Products */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Related Silver Products
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/silver-products/sunshine-mint"
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors group"
              >
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-600 mb-2">Sunshine Mint</h3>
                <p className="text-sm text-slate-600">MintMark SI security at lower premiums</p>
              </Link>
              <Link
                href="/silver-products/engelhard"
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors group"
              >
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-600 mb-2">Engelhard</h3>
                <p className="text-sm text-slate-600">Vintage collector silver</p>
              </Link>
              <Link
                href="/silver-products/generic-rounds"
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors group"
              >
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-600 mb-2">Generic Rounds</h3>
                <p className="text-sm text-slate-600">Lowest premiums for pure stacking</p>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Add Premium Silver to Your IRA"
            subheadline="Augusta Precious Metals offers IRA-eligible silver from PAMP Suisse and other premium refiners. Get expert guidance on balancing quality with value in your retirement portfolio."
            linkContext="silver"
            trackSource="silver-pamp-suisse"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
