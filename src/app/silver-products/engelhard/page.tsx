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
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Engelhard Silver Bars Guide: History, Value & Authentication (2026)",
  description:
    "Complete guide to Engelhard silver bars. Learn the history, identify authentic bars, understand collectible premiums, and find current values for vintage Engelhard silver.",
  url: "https://www.richdadretirement.com/silver-products/engelhard",
  imageAlt: "Engelhard Silver Bars Guide - Rich Dad Retirement",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Engelhard Silver Bars: The Collector's Guide to Vintage Silver",
      "description": "Everything you need to know about Engelhard silver bars including history, authentication, values, and why collectors pay premium prices.",
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
          "name": "Why are Engelhard silver bars valuable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Engelhard silver bars command premium prices because the company stopped producing silver bars in 1988. As a finite collectible from a legendary American refiner, Engelhard bars appeal to both bullion investors and collectors. Their historical significance, quality craftsmanship, and limited supply drive prices above melt value."
          }
        },
        {
          "@type": "Question",
          "name": "How do I identify an authentic Engelhard silver bar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Authentic Engelhard bars feature specific characteristics: the distinctive Engelhard logo (bull and bear for commercial bars), precise weight stamps, unique serial numbers, and consistent fonts/spacing for their production era. Key identifiers include the 'E' hallmark, correct font styles, and proper edge finishing. When in doubt, purchase from reputable dealers or have bars authenticated."
          }
        },
        {
          "@type": "Question",
          "name": "What is the premium on Engelhard silver bars?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Engelhard premiums vary widely based on size, rarity, and condition. Common 10 oz bars typically sell for 10-20% over spot, while rare 1 oz bars or vintage poured bars can command 50-100%+ premiums. Exceptionally rare varieties like the 'P' series or low mintage bars may sell for multiples of melt value."
          }
        },
        {
          "@type": "Question",
          "name": "Are Engelhard silver bars IRA eligible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Engelhard silver bars meeting .999 purity can be IRA-eligible. However, most IRA investors prefer modern bullion because Engelhard's collectible premiums don't add value in an IRA (you can't benefit from numismatic value in a tax-advantaged account). It's generally better to buy Engelhard for personal holdings."
          }
        },
        {
          "@type": "Question",
          "name": "What happened to Engelhard Corporation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Engelhard Corporation was acquired by BASF in 2006 for $5 billion. However, Engelhard had stopped producing retail silver bars in 1988, nearly two decades before the acquisition. The company shifted focus to industrial precious metals applications. This is why Engelhard bars are now considered vintage collectibles."
          }
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Engelhard Silver Bar",
      "description": "Vintage silver bars from the historic Engelhard Corporation refinery",
      "material": "Silver (.999 fine)",
      "manufacturer": {
        "@type": "Organization",
        "name": "Engelhard Corporation"
      }
    }
  ]
};

export default function EngelhardPage() {
  return (
    <main className="min-h-screen bg-[#0C0D18]">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/silver-products"
              className="inline-flex items-center gap-2 text-[#D0CCC4] hover:text-[#F6F4EF] mb-6 transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Silver Products
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(220,38,38,0.18)] border border-[rgba(197,149,46,0.32)] rounded-full text-[#D4A94E] font-semibold text-sm mb-6">
              <Award className="h-4 w-4" />
              700 MONTHLY SEARCHES - DIFFICULTY 2
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F6F4EF] mb-6">
              Engelhard Silver Bars: The Collector&apos;s Standard
            </h1>
            <p className="text-xl text-[#D0CCC4] mb-8">
              Engelhard Corporation set the standard for American silver refining. Though they
              stopped producing retail silver in 1988, their bars remain highly sought after
              by collectors willing to pay significant premiums for these vintage pieces.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-[#D4A94E]">
                <History className="h-4 w-4" />
                Vintage Collectible
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                .999 Fine Silver
              </span>
              <span className="flex items-center gap-2 text-[#D4A94E]">
                <TrendingUp className="h-4 w-4" />
                Premium Over Spot
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Specs */}
      <section className="py-12 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6 text-center">
                <History className="h-8 w-8 text-[#D4A94E] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#F6F4EF]">1902</div>
                <div className="text-sm text-[#D0CCC4]">Founded</div>
              </div>
              <div className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6 text-center">
                <AlertTriangle className="h-8 w-8 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#F6F4EF]">1988</div>
                <div className="text-sm text-[#D0CCC4]">Production Ended</div>
              </div>
              <div className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6 text-center">
                <Shield className="h-8 w-8 text-[#D0CCC4] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#F6F4EF]">.999</div>
                <div className="text-sm text-[#D0CCC4]">Purity</div>
              </div>
              <div className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#F6F4EF]">10-100%+</div>
                <div className="text-sm text-[#D0CCC4]">Premium Range</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-invert prose-headings:text-[#F6F4EF] prose-p:text-[#D0CCC4] prose-strong:text-[#F6F4EF] prose-li:text-[#D0CCC4] max-w-none">

              {/* History */}
              <div className="not-prose bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[rgba(220,38,38,0.18)] rounded-lg">
                    <History className="h-6 w-6 text-[#D4A94E]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#F6F4EF] m-0">The History of Engelhard</h2>
                </div>
                <p className="text-[#D0CCC4] mb-4">
                  Charles Engelhard founded Engelhard Corporation in 1902 in Newark, New Jersey. The company
                  became one of the world&apos;s largest refiners of precious metals, processing gold and silver
                  for industrial, commercial, and investment purposes.
                </p>
                <p className="text-[#D0CCC4] mb-4">
                  During the 1970s and 1980s silver boom, Engelhard produced retail bullion bars in sizes
                  from 1 oz to 100 oz. These bars became synonymous with quality and were trusted by
                  investors worldwide.
                </p>
                <p className="text-[#D0CCC4]">
                  In 1988, Engelhard exited the retail bullion market to focus on industrial applications.
                  The company was eventually acquired by BASF in 2006. Because production ended decades ago,
                  Engelhard bars are now finite collectibles that can never be reproduced.
                </p>
              </div>

              <h2 className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-green-400" />
                Engelhard Value Guide
              </h2>

              <p>
                Engelhard premiums vary dramatically based on size, type, and rarity. Here&apos;s a general
                guide to current market values:
              </p>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-[#0C0D18] backdrop-blur-sm rounded-xl border border-[#2A2D42]">
                  <thead className="bg-[#0C0D18]">
                    <tr>
                      <th className="p-4 border-b border-[#2A2D42] font-bold text-[#F6F4EF]">Bar Type</th>
                      <th className="p-4 border-b border-[#2A2D42] font-bold text-[#F6F4EF]">Typical Premium</th>
                      <th className="p-4 border-b border-[#2A2D42] font-bold text-[#F6F4EF]">Collector Interest</th>
                      <th className="p-4 border-b border-[#2A2D42] font-bold text-[#F6F4EF]">Rarity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2A2D42] text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-[#F6F4EF]">100 oz Pressed Bar</td>
                      <td className="p-4 text-[#D0CCC4]">8-15% over spot</td>
                      <td className="p-4 text-[#D0CCC4]">Moderate</td>
                      <td className="p-4 text-green-400">Common</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-[#F6F4EF]">10 oz Pressed Bar</td>
                      <td className="p-4 text-[#D0CCC4]">10-20% over spot</td>
                      <td className="p-4 text-[#D0CCC4]">High</td>
                      <td className="p-4 text-[#D0CCC4]">Common</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-[#F6F4EF]">10 oz Poured Bar</td>
                      <td className="p-4 text-[#D4A94E]">25-40% over spot</td>
                      <td className="p-4 text-green-400">Very High</td>
                      <td className="p-4 text-[#D4A94E]">Uncommon</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-[#F6F4EF]">1 oz Bar</td>
                      <td className="p-4 text-[#D4A94E]">50-100%+ over spot</td>
                      <td className="p-4 text-green-400">Very High</td>
                      <td className="p-4 text-red-400">Rare</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-[#F6F4EF]">&quot;P&quot; Series Bars</td>
                      <td className="p-4 text-red-400">100-300%+ over spot</td>
                      <td className="p-4 text-green-400">Extremely High</td>
                      <td className="p-4 text-red-400">Very Rare</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="not-prose bg-[rgba(46,139,87,0.08)]0/10 border border-green-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-green-400 mb-2">Appreciation Potential</h4>
                    <p className="text-[#D0CCC4]">
                      Unlike modern bullion, Engelhard bars have shown appreciation beyond silver&apos;s spot
                      price. As supplies dwindle and collector interest grows, premiums have steadily
                      increased over the past decade. Many collectors view Engelhard as a &quot;store of
                      collector value&quot; in addition to silver value.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Search className="h-6 w-6 text-[#D0CCC4]" />
                How to Identify Authentic Engelhard Bars
              </h2>

              <p>
                Counterfeits exist, especially for rare varieties. Here&apos;s how to verify authenticity:
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#F6F4EF] mb-4">Authentic Indicators</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Correct font style for the era</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Proper serial number format</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Distinctive &quot;E&quot; hallmark</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Correct weight and dimensions</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Proper edge finishing (varies by type)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#F6F4EF] mb-4">Red Flags</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Incorrect font or spacing</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Wrong serial number sequence</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Price too good to be true</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Unknown seller with no history</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Refuses authentication/testing</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="not-prose bg-[rgba(220,38,38,0.1)] border border-[rgba(197,149,46,0.32)] rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-[#D4A94E] mb-2">Authentication Resources</h4>
                    <p className="text-[#D0CCC4]">
                      The AllEngelhard.com database catalogs every known Engelhard variety with detailed
                      photos and serial number ranges. Cross-reference any bar before purchasing. For
                      valuable pieces, consider professional authentication through NGC or PCGS.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Award className="h-6 w-6 text-[#D4A94E]" />
                Most Collectible Engelhard Varieties
              </h2>

              <p>
                Some Engelhard bars command exceptional premiums. Here are the most sought-after varieties:
              </p>

              <ul>
                <li><strong>&quot;P&quot; Series Bars</strong> - Early production with &quot;P&quot; prefix serial numbers. Extremely rare and valuable.</li>
                <li><strong>1 oz Bars</strong> - Produced in limited quantities, especially poured versions.</li>
                <li><strong>Maple Leaf Bars</strong> - Canadian production with distinctive maple leaf hallmark.</li>
                <li><strong>Waffleback Bars</strong> - Early poured bars with distinctive waffle pattern on reverse.</li>
                <li><strong>Commercial Bull &amp; Bear Logo</strong> - Early commercial bars with the iconic logo.</li>
              </ul>

              <h2 className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-[#D0CCC4]" />
                Engelhard vs Modern Bullion: Which to Buy?
              </h2>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#F6F4EF] mb-4">Choose Engelhard If:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>You appreciate numismatic/collector value</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>You want potential appreciation beyond spot</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>You enjoy collecting vintage items</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>You&apos;re building a personal collection (not IRA)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#F6F4EF] mb-4">Choose Modern Bullion If:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <CheckCircle className="h-5 w-5 text-[#D0CCC4] flex-shrink-0 mt-0.5" />
                      <span>You want maximum silver for your dollar</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <CheckCircle className="h-5 w-5 text-[#D0CCC4] flex-shrink-0 mt-0.5" />
                      <span>You&apos;re buying for a Precious Metals IRA</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <CheckCircle className="h-5 w-5 text-[#D0CCC4] flex-shrink-0 mt-0.5" />
                      <span>Liquidity is your priority</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D0CCC4]">
                      <CheckCircle className="h-5 w-5 text-[#D0CCC4] flex-shrink-0 mt-0.5" />
                      <span>You don&apos;t want to worry about counterfeits</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2>Where to Buy Authentic Engelhard Silver</h2>

              <p>
                Due to counterfeit risks, buy only from reputable sources:
              </p>

              <ul>
                <li><strong>Established Bullion Dealers</strong> - APMEX, JM Bullion, SD Bullion (limited availability)</li>
                <li><strong>Auction Houses</strong> - Heritage Auctions, Great Collections for rare pieces</li>
                <li><strong>Specialized Vintage Dealers</strong> - Dealers who focus on vintage silver</li>
                <li><strong>eBay (with caution)</strong> - Only from top-rated sellers with return policies</li>
              </ul>

              <p>
                Always verify authenticity before paying collector premiums. For expensive pieces,
                consider having them authenticated and encapsulated by NGC or PCGS.
              </p>

            </article>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#F6F4EF] text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-[#0C0D18] backdrop-blur-sm rounded-xl border border-[#2A2D42] p-6"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-[#F6F4EF]">
                    <h3 className="text-lg font-bold">{faq.name}</h3>
                    <span className="shrink-0 rounded-full bg-[#121423] p-1.5 text-[#D0CCC4]">
                      <ArrowRight className="h-5 w-5 transition duration-300 group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-[#D0CCC4]">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#F6F4EF] text-center mb-8">
              Related Silver Products
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/silver-products/johnson-matthey"
                className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6 hover:bg-[#1E2134] transition-colors group"
              >
                <h3 className="text-lg font-bold text-[#F6F4EF] group-hover:text-[#F6F4EF] mb-2">Johnson Matthey</h3>
                <p className="text-sm text-[#D0CCC4]">Another vintage collectible refiner</p>
              </Link>
              <Link
                href="/silver-products/pamp-suisse"
                className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6 hover:bg-[#1E2134] transition-colors group"
              >
                <h3 className="text-lg font-bold text-[#F6F4EF] group-hover:text-[#F6F4EF] mb-2">PAMP Suisse</h3>
                <p className="text-sm text-[#D0CCC4]">Premium Swiss refiner still producing</p>
              </Link>
              <Link
                href="/silver-products/generic-rounds"
                className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6 hover:bg-[#1E2134] transition-colors group"
              >
                <h3 className="text-lg font-bold text-[#F6F4EF] group-hover:text-[#F6F4EF] mb-2">Generic Rounds</h3>
                <p className="text-sm text-[#D0CCC4]">Lowest premiums for pure value stackers</p>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Start Your Silver IRA with Quality Bullion"
            subheadline="While Engelhard bars are best for personal collections, Augusta Precious Metals offers IRA-eligible silver bullion from top refiners. Get expert guidance on building your retirement silver position."
            linkContext="silver"
            trackSource="silver-engelhard"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
