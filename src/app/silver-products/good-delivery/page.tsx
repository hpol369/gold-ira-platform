import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
  Building2,
  ArrowRight,
  Scale,
  CheckCircle,
  XCircle,
  DollarSign,
  Shield,
  Globe,
  Award,
  Landmark,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Good Delivery Silver Bar Guide: LBMA Standards Explained (2026)",
  description:
    "Complete guide to LBMA Good Delivery silver bars. Learn about specifications, approved refiners, institutional vs retail markets, and how Good Delivery standards affect pricing.",
  url: "https://www.richdadretirement.com/silver-products/good-delivery",
  imageAlt: "Good Delivery Silver Bar Guide - Rich Dad Retirement",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Good Delivery Silver Bars: The Institutional Standard",
      "description": "Everything you need to know about LBMA Good Delivery silver bars including standards, approved refiners, and market implications.",
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
          "name": "What is an LBMA Good Delivery silver bar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An LBMA Good Delivery silver bar is a 1000 oz bar that meets the London Bullion Market Association's strict specifications for weight, purity, dimensions, appearance, and markings. These bars can be traded on the global wholesale market and are the standard for institutional silver transactions."
          }
        },
        {
          "@type": "Question",
          "name": "What are the Good Delivery specifications for silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LBMA Good Delivery silver bars must: weigh between 750-1100 troy oz, have minimum .999 fineness (99.9% pure), display serial number/refiner's mark/fineness/weight, be produced by an LBMA-accredited refiner, and have acceptable appearance (no surface cavities or defects)."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between Good Delivery and COMEX deliverable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Good Delivery is an LBMA standard for the London market, while COMEX deliverable refers to bars acceptable for CME Group's silver futures contracts. Requirements are similar but not identical. COMEX allows slightly wider weight range (750-1100 oz vs LBMA's preference for 900-1100 oz). Many bars qualify for both."
          }
        },
        {
          "@type": "Question",
          "name": "Can individual investors buy Good Delivery bars?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but it requires significant capital ($25,000+) and specialized storage. Good Delivery bars are primarily designed for institutional trading, but dealers like SD Bullion, JM Bullion, and APMEX sell them to retail investors. They can be held in IRAs when stored at approved depositories."
          }
        },
        {
          "@type": "Question",
          "name": "Why do Good Delivery bars have the lowest premiums?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Good Delivery bars have the lowest premiums (1-3%) because: 1) Manufacturing costs are spread over 1000 oz, 2) They're the most liquid form of physical silver, 3) They trade directly into the wholesale market without conversion costs, and 4) Institutional buyers prefer them, creating constant demand."
          }
        }
      ]
    }
  ]
};

const approvedRefiners = [
  { name: "Johnson Matthey", country: "UK/USA", status: "Historical (acquired by Asahi)" },
  { name: "Asahi Refining", country: "USA/Japan", status: "Active" },
  { name: "Heraeus", country: "Germany", status: "Active" },
  { name: "Valcambi", country: "Switzerland", status: "Active" },
  { name: "PAMP Suisse", country: "Switzerland", status: "Active" },
  { name: "Metalor", country: "Switzerland", status: "Active" },
  { name: "Republic Metals", country: "USA", status: "Active" },
  { name: "Royal Canadian Mint", country: "Canada", status: "Active" },
  { name: "Perth Mint", country: "Australia", status: "Active" },
];

export default function GoodDeliveryPage() {
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
              <Building2 className="h-4 w-4" />
              30 MONTHLY SEARCHES - $1.90 CPC
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Good Delivery Silver Bars: The LBMA Standard
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              &quot;Good Delivery&quot; is the gold standard for silver bars—literally. These LBMA-certified
              1000 oz bars are the backbone of the global silver market, traded between central
              banks, bullion banks, and institutional investors.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                LBMA Certified
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Lowest Premiums
              </span>
              <span className="flex items-center gap-2 text-[#B22234]">
                <Landmark className="h-4 w-4" />
                Institutional Grade
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
                <div className="text-2xl font-bold text-slate-900">750-1100</div>
                <div className="text-sm text-slate-600">Troy Ounces</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">.999+</div>
                <div className="text-sm text-slate-600">Minimum Purity</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">1-3%</div>
                <div className="text-sm text-slate-600">Premium</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <Globe className="h-8 w-8 text-[#B22234] mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">Global</div>
                <div className="text-sm text-slate-600">Acceptance</div>
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

              {/* What is Good Delivery */}
              <div className="not-prose bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#B22234]/20 rounded-lg">
                    <Award className="h-6 w-6 text-[#B22234]" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">What is Good Delivery?</h2>
                </div>
                <p className="text-slate-600 mb-4">
                  &quot;Good Delivery&quot; is a quality standard established by the London Bullion Market
                  Association (LBMA). It specifies the exact requirements a silver bar must meet
                  to be accepted for trading in the London wholesale market—the world&apos;s largest
                  over-the-counter market for precious metals.
                </p>
                <p className="text-slate-600">
                  When a bar is &quot;Good Delivery,&quot; it means any LBMA member will accept it without
                  question. This fungibility is what makes the global silver market work—a Good
                  Delivery bar in London is equivalent to one in Zurich or Hong Kong.
                </p>
              </div>

              <h2 className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-slate-600" />
                Good Delivery Specifications
              </h2>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Requirement</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">LBMA Good Delivery</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">COMEX Deliverable</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Weight Range</td>
                      <td className="p-4 text-slate-600">750-1,100 troy oz (ideal: 900-1,100)</td>
                      <td className="p-4 text-slate-600">1,000 oz +/- 6%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Minimum Purity</td>
                      <td className="p-4 text-green-400">.999 fine (99.9%)</td>
                      <td className="p-4 text-green-400">.999 fine (99.9%)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Required Markings</td>
                      <td className="p-4 text-slate-600">Serial #, refiner, fineness, year, weight</td>
                      <td className="p-4 text-slate-600">Serial #, refiner, fineness, weight</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Refiner Requirement</td>
                      <td className="p-4 text-slate-600">LBMA Good Delivery List</td>
                      <td className="p-4 text-slate-600">COMEX-approved brands</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Appearance</td>
                      <td className="p-4 text-slate-600">No cavities, cracks, or excessive defects</td>
                      <td className="p-4 text-slate-600">No specific requirements</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Physical Weight</td>
                      <td className="p-4 text-slate-600">~62-75 lbs (28-34 kg)</td>
                      <td className="p-4 text-slate-600">~62-75 lbs (28-34 kg)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-slate-600" />
                LBMA-Accredited Refiners
              </h2>

              <p>
                Only bars from LBMA Good Delivery List refiners qualify. Here are some of the
                major refiners whose bars are widely traded:
              </p>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Refiner</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Country</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    {approvedRefiners.map((refiner) => (
                      <tr key={refiner.name}>
                        <td className="p-4 font-semibold text-slate-900">{refiner.name}</td>
                        <td className="p-4 text-slate-600">{refiner.country}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            refiner.status === "Active"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-[#B22234]/10 text-slate-600"
                          }`}>
                            {refiner.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-green-400" />
                Why Good Delivery Has the Lowest Premiums
              </h2>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-4">Lowest Cost Per Ounce</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Manufacturing costs spread over 1000 oz</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Direct access to wholesale market</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>No conversion costs when selling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Institutional demand provides liquidity</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#B22234] mb-4">Trade-offs</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span>High minimum investment (~$25,000)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span>Requires specialized storage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span>Not divisible (all-or-nothing)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span>Heavy (~70 lbs) - impractical for home</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Landmark className="h-6 w-6 text-slate-600" />
                Institutional vs Retail Markets
              </h2>

              <p>
                Good Delivery bars exist in two worlds: the institutional wholesale market and
                the retail investor market. Understanding this helps explain pricing and liquidity.
              </p>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Aspect</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Institutional</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Retail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Typical Buyer</td>
                      <td className="p-4 text-slate-600">Banks, ETFs, governments</td>
                      <td className="p-4 text-slate-600">High-net-worth individuals, IRA holders</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Minimum Purchase</td>
                      <td className="p-4 text-slate-600">Usually 100+ bars</td>
                      <td className="p-4 text-slate-600">1 bar</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Premium</td>
                      <td className="p-4 text-green-400">Spot + 0.25-0.50%</td>
                      <td className="p-4 text-slate-600">Spot + 1-3%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Storage</td>
                      <td className="p-4 text-slate-600">LBMA-approved vaults</td>
                      <td className="p-4 text-slate-600">IRA depository or private vault</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Selling</td>
                      <td className="p-4 text-slate-600">OTC market, instant</td>
                      <td className="p-4 text-slate-600">Back to dealer, may take days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="not-prose bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-green-400 mb-2">IRA Eligibility</h4>
                    <p className="text-slate-600">
                      Good Delivery silver bars are IRA-eligible when they meet the standard
                      IRS requirements (.999+ purity, from approved refiner). They must be stored
                      at an IRS-approved depository—you cannot take home delivery for IRA holdings.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Where to Buy Good Delivery Bars</h2>

              <p>
                Not every dealer carries 1000 oz Good Delivery bars. Here are sources that do:
              </p>

              <ul>
                <li><strong>SD Bullion</strong> - Often best retail prices</li>
                <li><strong>JM Bullion</strong> - Multiple brand options</li>
                <li><strong>APMEX</strong> - Wide selection, premium service</li>
                <li><strong>Monex</strong> - Institutional-oriented dealer</li>
                <li><strong>Kitco</strong> - Global dealer with GD inventory</li>
              </ul>

              <p>
                For IRA purchases, your Gold IRA custodian will typically source bars through
                their approved dealer network to ensure proper chain of custody and documentation.
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
            subheadline="Augusta Precious Metals can help you acquire Good Delivery silver bars for your IRA with proper depository storage. Get expert guidance on building a serious silver position."
            linkContext="silver"
            trackSource="silver-good-delivery"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
