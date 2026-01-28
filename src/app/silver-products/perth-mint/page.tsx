import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
  Gem,
  ArrowRight,
  Scale,
  CheckCircle,
  DollarSign,
  Award,
  Shield,
  Globe,
  Package,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Perth Mint Silver Guide: Kangaroo Coins & Bars (2026)",
  description:
    "Complete guide to Perth Mint silver products. Learn about Kangaroo coins, cast bars, minted bars, premium levels, and authenticity features from Australia's renowned mint.",
  url: "https://www.richdadretirement.com/silver-products/perth-mint",
  imageAlt: "Perth Mint Silver Guide - Rich Dad Retirement",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Perth Mint Silver: Complete Guide to Australian Bullion",
      "description": "Everything you need to know about Perth Mint silver including Kangaroo coins, cast bars, and minted bars.",
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
          "name": "Is Perth Mint silver IRA eligible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most Perth Mint silver products are IRA-eligible. Silver Kangaroo coins (.9999 fine) and Perth Mint silver bars (.999+ fine) meet IRS requirements. They must be new/uncirculated and stored at an approved depository. Perth Mint is a government-backed mint, which adds to its credibility."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Perth Mint silver special?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Perth Mint is Australia's oldest operating mint (since 1899) and is backed by the government of Western Australia. Their products are known for exceptional quality, beautiful designs, and advanced security features. They're also one of few mints producing .9999 (four-nines) fine silver coins."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between Perth Mint cast and minted bars?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cast bars are poured into molds, giving each bar a unique, slightly rough appearance with natural variations. Minted bars are cut from rolled sheets and stamped with precise designs, producing uniform, mirror-finish bars. Cast bars have lower premiums; minted bars look more refined."
          }
        },
        {
          "@type": "Question",
          "name": "How do Perth Mint premiums compare to other brands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Perth Mint products typically carry mid-range premiums. Silver Kangaroos are priced similarly to Canadian Maple Leafs (8-12% over spot). Perth Mint bars run 4-6% for minted, 3-5% for cast. They're competitively priced for government-mint quality."
          }
        },
        {
          "@type": "Question",
          "name": "How can I verify Perth Mint silver is authentic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for: 1) The iconic swan logo and 'P' mintmark, 2) Weight and purity stamps, 3) Serial numbers on bars, 4) CertiCard security packaging with QR codes on newer products. Buy from authorized dealers to ensure authenticity. Perth Mint also offers a Certificate of Authenticity program."
          }
        }
      ]
    }
  ]
};

const perthProducts = [
  {
    name: "Silver Kangaroo (1 oz)",
    type: "Coin",
    purity: ".9999",
    premium: "8-12%",
    iraEligible: true,
    popular: true,
    description: "Flagship coin with new kangaroo design each year",
  },
  {
    name: "Koala (1 oz)",
    type: "Coin",
    purity: ".999",
    premium: "10-15%",
    iraEligible: true,
    popular: true,
    description: "Limited mintage, new design annually",
  },
  {
    name: "Kookaburra (1 oz)",
    type: "Coin",
    purity: ".999",
    premium: "10-15%",
    iraEligible: true,
    popular: true,
    description: "Australia's laughing kingfisher, since 1990",
  },
  {
    name: "Minted Bar (1 oz)",
    type: "Bar",
    purity: ".999",
    premium: "5-8%",
    iraEligible: true,
    popular: false,
    description: "Mirror finish with kangaroo design",
  },
  {
    name: "Minted Bar (10 oz)",
    type: "Bar",
    purity: ".999",
    premium: "4-6%",
    iraEligible: true,
    popular: false,
    description: "Same design, larger format",
  },
  {
    name: "Cast Bar (1 kg)",
    type: "Bar",
    purity: ".999",
    premium: "3-5%",
    iraEligible: true,
    popular: true,
    description: "Poured bar with unique character",
  },
  {
    name: "Cast Bar (100 oz)",
    type: "Bar",
    purity: ".999",
    premium: "2-4%",
    iraEligible: true,
    popular: false,
    description: "Large format for serious investors",
  },
];

export default function PerthMintPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/20 border border-[#B22234]/30 rounded-full text-[#B22234] font-semibold text-sm mb-6">
              <Gem className="h-4 w-4" />
              60 MONTHLY SEARCHES - DIFFICULTY 1
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Perth Mint Silver: Australian Excellence
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Since 1899, Perth Mint has been producing some of the world&apos;s finest bullion.
              Government-backed and known for exceptional quality, their Kangaroo coins and
              distinctive bars are favorites among silver investors worldwide.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                IRA Eligible
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Government Backed
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                .9999 Fine Silver
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
                <div className="text-2xl font-bold text-slate-900">1899</div>
                <div className="text-sm text-slate-600">Founded</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">.9999</div>
                <div className="text-sm text-slate-600">Coin Purity</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <Award className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">Gov&apos;t</div>
                <div className="text-sm text-slate-600">Backed</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">3-12%</div>
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

              {/* About Perth Mint */}
              <div className="not-prose bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#B22234]/20 rounded-lg">
                    <Award className="h-6 w-6 text-[#B22234]" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">About Perth Mint</h2>
                </div>
                <p className="text-slate-600 mb-4">
                  The Perth Mint is Australia&apos;s oldest operating mint, established in 1899 as a
                  branch of Britain&apos;s Royal Mint. Today it&apos;s wholly owned by the Government of
                  Western Australia, making it one of the most trusted mints in the world.
                </p>
                <p className="text-slate-600">
                  Unlike private refiners, Perth Mint&apos;s products are backed by a sovereign government.
                  This provides an extra layer of confidence in authenticity and quality—important
                  factors when building a silver position.
                </p>
              </div>

              <h2 className="flex items-center gap-3">
                <Package className="h-6 w-6 text-slate-600" />
                Perth Mint Silver Products
              </h2>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Product</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Type</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Purity</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Premium</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">IRA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    {perthProducts.map((product) => (
                      <tr key={product.name} className={product.popular ? "bg-[#B22234]/5" : ""}>
                        <td className="p-4 font-semibold text-slate-900">
                          {product.name}
                          {product.popular && (
                            <span className="ml-2 text-xs bg-[#B22234]/20 text-[#B22234] px-2 py-0.5 rounded">
                              Popular
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-slate-600">{product.type}</td>
                        <td className="p-4 text-[#B22234]">{product.purity}</td>
                        <td className="p-4 text-slate-600">{product.premium}</td>
                        <td className="p-4">
                          {product.iraEligible ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <span className="text-slate-600">No</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <Gem className="h-6 w-6 text-[#B22234]" />
                Featured: Silver Kangaroo
              </h2>

              <div className="not-prose bg-slate-50 backdrop-blur-sm border border-[#B22234]/30 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Australian Silver Kangaroo</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-600 mb-4">
                      Perth Mint&apos;s flagship silver coin features a new kangaroo design each year,
                      making it popular with both stackers and collectors. It&apos;s one of few
                      government coins struck in .9999 (four-nines) fine silver.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Purity: .9999 fine silver
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Weight: 1 troy oz
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Face Value: $1 AUD
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        New design annually
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#B22234] mb-2">Why Investors Like It</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>Higher purity than Eagles (.999) or Maples (.9999 match)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>Government-backed legal tender</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>Competitive premiums vs other sovereign coins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>Annual designs add collector interest</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-slate-600" />
                Cast vs Minted Bars
              </h2>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Perth Mint Cast Bars</h3>
                  <p className="text-slate-600 mb-4">
                    Made by pouring molten silver into molds. Each bar has a unique, slightly
                    irregular appearance with the Perth Mint swan logo stamped on top.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Lower premiums (3-5%)
                    </li>
                    <li className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Available: 1 kg, 100 oz
                    </li>
                    <li className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Unique character each bar
                    </li>
                    <li className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Serial numbered
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Perth Mint Minted Bars</h3>
                  <p className="text-slate-600 mb-4">
                    Stamped from rolled silver sheets with the kangaroo design. Uniform,
                    pristine finish with sharp edges. Often in sealed CertiCard packaging.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="h-4 w-4 text-slate-600" />
                      Higher premiums (5-8%)
                    </li>
                    <li className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="h-4 w-4 text-slate-600" />
                      Available: 1 oz, 10 oz
                    </li>
                    <li className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="h-4 w-4 text-slate-600" />
                      Uniform appearance
                    </li>
                    <li className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="h-4 w-4 text-slate-600" />
                      Sealed security packaging
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-green-400" />
                Authenticity Features
              </h2>

              <p>
                Perth Mint products include several security features to ensure authenticity:
              </p>

              <ul>
                <li><strong>Swan logo</strong> - The iconic Perth Mint swan appears on all products</li>
                <li><strong>&quot;P&quot; mintmark</strong> - Small &quot;P&quot; indicates Perth Mint origin</li>
                <li><strong>Serial numbers</strong> - All bars are individually numbered</li>
                <li><strong>CertiCard packaging</strong> - Tamper-evident cards with QR verification</li>
                <li><strong>Weight/purity stamps</strong> - Clear markings on all products</li>
              </ul>

              <div className="not-prose bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-green-400 mb-2">IRA Eligibility</h4>
                    <p className="text-slate-600">
                      All Perth Mint silver products meeting .999+ purity are IRA-eligible when
                      purchased new and stored at an approved depository. This includes Silver
                      Kangaroos, Koalas, Kookaburras, and Perth Mint silver bars.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Where to Buy Perth Mint Silver</h2>

              <ul>
                <li><strong>APMEX</strong> - Wide selection of Perth Mint products</li>
                <li><strong>JM Bullion</strong> - Competitive pricing</li>
                <li><strong>SD Bullion</strong> - Good for bars</li>
                <li><strong>Perth Mint (Direct)</strong> - Buy directly from the mint (ships from Australia)</li>
                <li><strong>Kitco</strong> - Selection of bars and coins</li>
              </ul>

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
            headline="Add Perth Mint Silver to Your IRA"
            subheadline="Augusta Precious Metals offers IRA-eligible Perth Mint products including Silver Kangaroos and bars. Get a free consultation to start building your Australian silver position."
            linkContext="silver"
            trackSource="silver-perth-mint"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
