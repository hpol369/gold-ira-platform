import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
  Sun,
  ArrowRight,
  Scale,
  Shield,
  CheckCircle,
  XCircle,
  DollarSign,
  Info,
  Award,
  Lock,
  Fingerprint,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Sunshine Mint Silver Guide: MintMark SI Security Bars & Rounds (2026)",
  description:
    "Complete guide to Sunshine Mint silver products. Learn about the MintMark SI security feature, product range including bars and rounds, and why collectors trust Sunshine Mint.",
  url: "https://www.richdadretirement.com/silver-products/sunshine-mint",
  imageAlt: "Sunshine Mint Silver Guide - Rich Dad Retirement",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Sunshine Mint Silver: The Security-Focused Bullion Choice",
      "description": "Everything you need to know about Sunshine Mint silver including the MintMark SI security feature, product range, and why these products command collector trust.",
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
          "name": "What is the Sunshine Mint MintMark SI security feature?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MintMark SI (Security Image) is Sunshine Mint's proprietary anti-counterfeiting technology. It's a micro-engraved design embedded directly into the silver that reveals a hidden image when viewed with a special decoder lens. This technology was co-developed with the US Mint and is nearly impossible to counterfeit."
          }
        },
        {
          "@type": "Question",
          "name": "Is Sunshine Mint silver IRA eligible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Sunshine Mint silver bars and rounds meet IRS requirements for Precious Metals IRAs. Their products are .999 fine silver and produced by an accredited refiner. Sunshine Mint is actually a contractor for the US Mint, producing silver blanks for American Silver Eagles."
          }
        },
        {
          "@type": "Question",
          "name": "How do Sunshine Mint premiums compare to other brands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sunshine Mint products typically carry premiums of 5-10% over spot for rounds and 3-7% for bars. This is slightly higher than generic bullion due to the MintMark SI security feature, but lower than sovereign coins. Many investors consider the anti-counterfeit protection worth the modest premium."
          }
        },
        {
          "@type": "Question",
          "name": "What products does Sunshine Mint produce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sunshine Mint produces silver rounds (1 oz, fractional), silver bars (1 oz to 100 oz), and blanks for sovereign mints. Their Eagle design rounds are popular, and they offer specialty designs for various distributors. All products feature the MintMark SI security technology."
          }
        },
        {
          "@type": "Question",
          "name": "How do I verify Sunshine Mint authenticity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use a Sunshine Mint decoder lens (available free with many purchases or for ~$5) to verify the MintMark SI feature. When held at the correct angle over the security mark, you'll see a hidden sun logo appear. This verification takes seconds and provides peace of mind for every piece."
          }
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Sunshine Mint Silver",
      "description": "Premium silver bullion with MintMark SI security technology",
      "material": "Silver (.999 fine)",
      "manufacturer": {
        "@type": "Organization",
        "name": "Sunshine Minting Inc."
      }
    }
  ]
};

export default function SunshineMintPage() {
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
              <Sun className="h-4 w-4" />
              350 MONTHLY SEARCHES - DIFFICULTY 0!
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Sunshine Mint Silver: Security You Can Trust
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Sunshine Minting produces the blanks for American Silver Eagles and their own
              premium bullion line featuring the revolutionary MintMark SI anti-counterfeiting
              technology. When authenticity matters, smart investors choose Sunshine Mint.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-green-400">
                <Lock className="h-4 w-4" />
                MintMark SI Security
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                .999 Fine Silver
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
                <Award className="h-8 w-8 text-[#B22234] mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">1979</div>
                <div className="text-sm text-slate-600">Founded</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <Shield className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">.999</div>
                <div className="text-sm text-slate-600">Purity</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <Fingerprint className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">SI</div>
                <div className="text-sm text-slate-600">Security Tech</div>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">3-10%</div>
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

              {/* About Sunshine Mint */}
              <div className="not-prose bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#B22234]/20 rounded-lg">
                    <Sun className="h-6 w-6 text-[#B22234]" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">About Sunshine Minting</h2>
                </div>
                <p className="text-slate-600 mb-4">
                  Sunshine Minting Inc., based in Coeur d&apos;Alene, Idaho, has been producing precious
                  metals since 1979. What many investors don&apos;t know is that Sunshine is a major
                  contractor for the United States Mint, producing the silver blanks used to strike
                  American Silver Eagles.
                </p>
                <p className="text-slate-600">
                  This relationship with the US Mint speaks to Sunshine&apos;s quality and reliability.
                  Their own branded bullion products feature the same precision manufacturing, plus
                  their proprietary MintMark SI security technology that makes counterfeiting virtually impossible.
                </p>
              </div>

              <h2 className="flex items-center gap-3">
                <Lock className="h-6 w-6 text-green-400" />
                The MintMark SI Security Feature
              </h2>

              <p>
                MintMark SI (Security Image) is what sets Sunshine Mint apart from all other private mints.
                This technology was co-developed with the US Mint and provides instant authentication.
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">How It Works</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Micro-engraved pattern embedded in silver</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Invisible to naked eye</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Decoder lens reveals hidden sun logo</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Verification takes seconds</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Why It Matters</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Counterfeiters cannot replicate</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Instant verification without testing</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Higher resale confidence</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>No damage to verify (non-destructive)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="not-prose bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <Fingerprint className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-green-400 mb-2">US Mint Approved Technology</h4>
                    <p className="text-slate-600">
                      The MintMark SI technology is now used on American Silver Eagles produced since 2021.
                      When you buy Sunshine Mint products, you&apos;re getting the same security features
                      trusted by the United States Mint for its flagship silver bullion coin.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-slate-600" />
                Sunshine Mint Product Range
              </h2>

              <p>
                Sunshine Mint offers a complete range of silver products for every type of investor:
              </p>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Product</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Sizes</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Premium</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Silver Rounds</td>
                      <td className="p-4 text-slate-600">1 oz, 1/2 oz, 1/4 oz</td>
                      <td className="p-4 text-slate-600">5-10% over spot</td>
                      <td className="p-4 text-green-400">General stacking</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Silver Bars (Minted)</td>
                      <td className="p-4 text-slate-600">1 oz, 5 oz, 10 oz</td>
                      <td className="p-4 text-slate-600">4-8% over spot</td>
                      <td className="p-4 text-green-400">Value seekers</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Silver Bars (Large)</td>
                      <td className="p-4 text-slate-600">100 oz</td>
                      <td className="p-4 text-green-400">3-5% over spot</td>
                      <td className="p-4 text-green-400">Serious investors</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Eagle Design Rounds</td>
                      <td className="p-4 text-slate-600">1 oz</td>
                      <td className="p-4 text-slate-600">6-10% over spot</td>
                      <td className="p-4 text-slate-600">Collectors</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-green-400" />
                Premium Analysis: Is Sunshine Worth It?
              </h2>

              <p>
                Sunshine Mint products cost slightly more than generic bullion but less than sovereign coins.
                Here&apos;s how they compare:
              </p>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Product Type</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Typical Premium</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Security Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Generic Rounds</td>
                      <td className="p-4 text-green-400">3-6% over spot</td>
                      <td className="p-4 text-red-400">None</td>
                    </tr>
                    <tr className="bg-green-500/10">
                      <td className="p-4 font-semibold text-slate-900">Sunshine Mint Rounds</td>
                      <td className="p-4 text-slate-600">5-10% over spot</td>
                      <td className="p-4 text-green-400">MintMark SI</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">American Silver Eagle</td>
                      <td className="p-4 text-[#B22234]">15-25% over spot</td>
                      <td className="p-4 text-green-400">MintMark SI + Government</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Canadian Maple Leaf</td>
                      <td className="p-4 text-slate-600">10-15% over spot</td>
                      <td className="p-4 text-green-400">DNA Anti-Counterfeit</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="not-prose bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 text-[#B22234] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-[#B22234] mb-2">The Security Premium</h4>
                    <p className="text-slate-600">
                      Paying an extra 2-4% for MintMark SI security is worthwhile peace of mind. When
                      you sell, buyers will pay more for easily-verifiable authentic silver. The premium
                      pays for itself through higher resale confidence and faster transactions.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Award className="h-6 w-6 text-[#B22234]" />
                Why Collectors Love Sunshine Mint
              </h2>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Instant authenticity verification</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>US Mint contractor quality</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Moderate premiums</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Wide product range</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>IRA eligible</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Considerations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span>Higher premium than generics</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span>Need decoder lens for verification</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span>Not a sovereign mint (private)</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <XCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span>Less liquid than government coins</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2>Where to Buy Sunshine Mint Silver</h2>

              <p>
                Sunshine Mint products are widely available from major bullion dealers:
              </p>

              <ul>
                <li><strong>SD Bullion</strong> - Often has the best prices on Sunshine products</li>
                <li><strong>JM Bullion</strong> - Wide selection, includes decoder lens</li>
                <li><strong>APMEX</strong> - Full product range available</li>
                <li><strong>Monument Metals</strong> - Competitive on bulk orders</li>
                <li><strong>Provident Metals</strong> - Good selection of bars and rounds</li>
              </ul>

              <p>
                Most dealers include a free decoder lens with first purchases, or you can buy one
                separately for around $5. It&apos;s a small investment for lifetime authentication capability.
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
                href="/silver-products/generic-rounds"
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors group"
              >
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-600 mb-2">Generic Rounds</h3>
                <p className="text-sm text-slate-600">Lowest premiums for pure stackers</p>
              </Link>
              <Link
                href="/silver-products/pamp-suisse"
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors group"
              >
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-600 mb-2">PAMP Suisse</h3>
                <p className="text-sm text-slate-600">Premium Swiss refiner with assay cards</p>
              </Link>
              <Link
                href="/silver-products/monster-box"
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors group"
              >
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-600 mb-2">Monster Box</h3>
                <p className="text-sm text-slate-600">Bulk buying for serious stackers</p>
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
            headline="Add Secure Silver to Your IRA"
            subheadline="Augusta Precious Metals offers IRA-eligible silver from trusted refiners including Sunshine Mint. Get expert guidance on building a secure silver position."
            linkContext="silver"
            trackSource="silver-sunshine-mint"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
