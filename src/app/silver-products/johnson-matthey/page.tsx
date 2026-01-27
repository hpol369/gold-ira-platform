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
  History,
  CheckCircle,
  XCircle,
  DollarSign,
  Info,
  Shield,
  Search,
  Globe,
  AlertTriangle,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Johnson Matthey Silver Bars Guide: History, Value & Authentication (2026)",
  description:
    "Complete guide to Johnson Matthey silver bars. Learn the history of JM silver, collectible value, how to authenticate vintage bars, and current availability.",
  url: "https://www.richdadretirement.com/silver-products/johnson-matthey",
  imageAlt: "Johnson Matthey Silver Bars Guide - Rich Dad Retirement",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Johnson Matthey Silver: A Collector's Guide to Vintage JM Bars",
      "description": "Everything you need to know about Johnson Matthey silver bars including history, collectible value, authentication tips, and current market availability.",
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
          "name": "Does Johnson Matthey still make silver bars?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, Johnson Matthey exited the silver bar business in 2015 when they sold their precious metals refining division to Asahi Holdings. JM still exists as a specialty chemicals and technology company, but no longer produces retail silver products. This makes existing JM bars collectible vintage items."
          }
        },
        {
          "@type": "Question",
          "name": "Why are Johnson Matthey silver bars valuable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JM silver bars command premiums because: 1) They're no longer produced, making supply finite, 2) JM had an excellent reputation for quality and purity, 3) Collectors value vintage precious metals, and 4) JM bars are instantly recognizable worldwide. Premiums typically range from 10-30% over spot depending on size and condition."
          }
        },
        {
          "@type": "Question",
          "name": "How do I identify authentic Johnson Matthey silver bars?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Authentic JM bars feature: the distinctive JM logo (stylized 'JM' letters), serial numbers, weight stamps, and '.999+ FINE SILVER' marking. Font styles and logo designs vary by production era and facility (Salt Lake City, Canada, UK). Compare any bar to verified authentic examples and buy from reputable dealers."
          }
        },
        {
          "@type": "Question",
          "name": "Are Johnson Matthey silver bars IRA eligible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, JM silver bars meeting .999 purity are technically IRA-eligible. However, since JM bars carry collectible premiums, most IRA investors choose modern bullion to maximize their silver ounces per dollar. JM bars are better suited for personal collections where you can realize the collector premium upon sale."
          }
        },
        {
          "@type": "Question",
          "name": "What happened to Johnson Matthey's precious metals business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In 2015, Johnson Matthey sold its global precious metals refining and trading business to Japan's Asahi Holdings for approximately $175 million. This included the Salt Lake City refinery that produced the famous JM bars. Asahi now operates under their own brand, while JM focuses on sustainable technologies and specialty chemicals."
          }
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Johnson Matthey Silver Bar",
      "description": "Vintage silver bars from the historic Johnson Matthey refinery",
      "material": "Silver (.999+ fine)",
      "manufacturer": {
        "@type": "Organization",
        "name": "Johnson Matthey"
      }
    }
  ]
};

export default function JohnsonMattheyPage() {
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
              <Award className="h-4 w-4" />
              250 MONTHLY SEARCHES - DIFFICULTY 0!
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Johnson Matthey Silver: The Vintage Standard
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Johnson Matthey set the global standard for precious metals refining for over 200 years.
              Though they exited the retail silver market in 2015, their bars remain prized collectibles
              known for exceptional quality and purity.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-amber-400">
                <History className="h-4 w-4" />
                Vintage Collectible
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                .999+ Fine Silver
              </span>
              <span className="flex items-center gap-2 text-amber-400">
                <AlertTriangle className="h-4 w-4" />
                No Longer Produced
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
                <History className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">1817</div>
                <div className="text-sm text-slate-400">Founded</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <AlertTriangle className="h-8 w-8 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">2015</div>
                <div className="text-sm text-slate-400">Exited Silver</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <Shield className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">.999+</div>
                <div className="text-sm text-slate-400">Purity</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">10-30%</div>
                <div className="text-sm text-slate-400">Premium Range</div>
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

              {/* History */}
              <div className="not-prose bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <History className="h-6 w-6 text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white m-0">The History of Johnson Matthey</h2>
                </div>
                <p className="text-slate-300 mb-4">
                  Founded in London in 1817, Johnson Matthey became one of the world&apos;s most trusted names
                  in precious metals. The company was appointed official refiner and assayer to the Bank of
                  England and built a global reputation for quality that spanned two centuries.
                </p>
                <p className="text-slate-300 mb-4">
                  JM established refineries worldwide, with their Salt Lake City facility becoming the
                  primary source for American JM silver bars. These US-made bars, produced from the 1970s
                  through 2015, are the most common JM bars in the American market.
                </p>
                <p className="text-slate-300">
                  In 2015, JM made a strategic decision to exit precious metals refining, selling the
                  division to Japan&apos;s Asahi Holdings. This move instantly transformed all existing JM
                  silver bars into finite collectibles that can never be reproduced.
                </p>
              </div>

              <h2 className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-slate-400" />
                JM Bar Types by Origin
              </h2>

              <p>
                Johnson Matthey operated refineries in multiple countries. Each produced slightly
                different bar designs that collectors now categorize:
              </p>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Origin</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Characteristics</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Collector Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-white">Salt Lake City, USA</td>
                      <td className="p-4 text-slate-300">Pressed bars, distinctive JM logo, most common in US</td>
                      <td className="p-4 text-slate-300">Standard premium</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Canada (JM Canada)</td>
                      <td className="p-4 text-slate-300">Both pressed and poured bars, maple leaf designs</td>
                      <td className="p-4 text-amber-400">Higher premium</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">United Kingdom</td>
                      <td className="p-4 text-slate-300">Original hallmarked bars, oldest designs</td>
                      <td className="p-4 text-green-400">Highest premium</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Poured Bars (Any Origin)</td>
                      <td className="p-4 text-slate-300">Hand-poured with unique characteristics</td>
                      <td className="p-4 text-green-400">Highest premium</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-green-400" />
                JM Value Guide by Size
              </h2>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Size</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Premium Range</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Availability</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-white">100 oz Pressed</td>
                      <td className="p-4 text-slate-300">8-15% over spot</td>
                      <td className="p-4 text-green-400">Common</td>
                      <td className="p-4 text-slate-300">Best value for serious collectors</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">100 oz Poured</td>
                      <td className="p-4 text-amber-400">20-40% over spot</td>
                      <td className="p-4 text-amber-400">Uncommon</td>
                      <td className="p-4 text-slate-300">Highly sought after</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">10 oz Pressed</td>
                      <td className="p-4 text-slate-300">10-20% over spot</td>
                      <td className="p-4 text-green-400">Common</td>
                      <td className="p-4 text-slate-300">Popular size for collectors</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">1 oz Bar</td>
                      <td className="p-4 text-amber-400">25-50% over spot</td>
                      <td className="p-4 text-red-400">Rare</td>
                      <td className="p-4 text-slate-300">Very collectible</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Vintage/Early Bars</td>
                      <td className="p-4 text-red-400">50-100%+ over spot</td>
                      <td className="p-4 text-red-400">Very Rare</td>
                      <td className="p-4 text-slate-300">Authentication essential</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <Search className="h-6 w-6 text-slate-400" />
                Authentication Tips
              </h2>

              <p>
                Counterfeits exist, particularly for rare varieties. Here&apos;s how to verify
                authentic Johnson Matthey silver:
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Authentic Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Distinctive JM logo (varies by era)</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Serial number (unique to each bar)</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Correct font styles for production era</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>&quot;.999+ FINE SILVER&quot; marking</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Proper weight and dimensions</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Warning Signs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Incorrect logo or font style</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Missing or illegible serial number</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Suspicious pricing (too good to be true)</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Unknown seller, no return policy</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Weight or dimension discrepancies</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="not-prose bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-amber-400 mb-2">Sigma Testing</h4>
                    <p className="text-slate-300">
                      For valuable JM bars, consider Sigma Metalytics testing. This non-destructive
                      method verifies the internal composition matches the surface markings. Many
                      dealers offer free testing, or you can purchase a home unit for serious collecting.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Award className="h-6 w-6 text-amber-400" />
                JM vs Other Vintage Refiners
              </h2>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Refiner</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Production Ended</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Collectibility</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Typical Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-white">Johnson Matthey</td>
                      <td className="p-4 text-slate-300">2015</td>
                      <td className="p-4 text-green-400">Very High</td>
                      <td className="p-4 text-slate-300">10-30%+</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Engelhard</td>
                      <td className="p-4 text-slate-300">1988</td>
                      <td className="p-4 text-green-400">Very High</td>
                      <td className="p-4 text-slate-300">10-100%+</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Republic Metals</td>
                      <td className="p-4 text-slate-300">2018 (bankruptcy)</td>
                      <td className="p-4 text-slate-300">Moderate</td>
                      <td className="p-4 text-slate-300">5-10%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Sunshine Mint</td>
                      <td className="p-4 text-green-400">Still Producing</td>
                      <td className="p-4 text-slate-300">Current</td>
                      <td className="p-4 text-slate-300">3-8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Current Availability</h2>

              <p>
                JM bars appear regularly on the secondary market. Here are the best sources:
              </p>

              <ul>
                <li><strong>Major Bullion Dealers</strong> - APMEX, JM Bullion, and SD Bullion occasionally stock JM bars</li>
                <li><strong>eBay</strong> - Large selection, but verify seller ratings and return policies</li>
                <li><strong>Local Coin Shops</strong> - May have JM bars in estate collections</li>
                <li><strong>Auction Houses</strong> - Heritage Auctions for rare varieties</li>
                <li><strong>r/Pmsforsale</strong> - Reddit precious metals community for peer-to-peer sales</li>
              </ul>

              <p>
                When buying, prioritize reputable sellers and don&apos;t be afraid to pay for authentication
                on valuable pieces. The collector premium is only worth paying for verified authentic bars.
              </p>

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
                href="/silver-products/engelhard"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-slate-300 mb-2">Engelhard Silver</h3>
                <p className="text-sm text-slate-400">Another iconic vintage refiner</p>
              </Link>
              <Link
                href="/silver-products/pamp-suisse"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-slate-300 mb-2">PAMP Suisse</h3>
                <p className="text-sm text-slate-400">Premium Swiss refiner still producing</p>
              </Link>
              <Link
                href="/silver-products/sunshine-mint"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-slate-300 mb-2">Sunshine Mint</h3>
                <p className="text-sm text-slate-400">Modern alternative with security features</p>
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
            headline="Build Your Silver IRA with Modern Bullion"
            subheadline="While vintage JM bars are best for personal collections, Augusta Precious Metals offers IRA-eligible silver from active refiners. Get expert guidance on retirement silver."
            linkContext="silver"
            trackSource="silver-johnson-matthey"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
