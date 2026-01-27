import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
  BarChart3,
  ArrowRight,
  Scale,
  CheckCircle,
  XCircle,
  DollarSign,
  Shield,
  Building2,
  TrendingUp,
  AlertTriangle,
  Info,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "PSLV vs SLV: Which Silver ETF is Better? Complete Comparison (2026)",
  description:
    "PSLV vs SLV comparison guide. Learn the differences between Sprott Physical Silver Trust and iShares Silver Trust including physical backing, redemption rights, and expense ratios.",
  url: "https://www.richdadretirement.com/silver-products/pslv-vs-slv",
  imageAlt: "PSLV vs SLV Comparison - Rich Dad Retirement",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "PSLV vs SLV: Complete Comparison of Silver ETFs",
      "description": "In-depth comparison of Sprott Physical Silver Trust (PSLV) and iShares Silver Trust (SLV) including physical backing, costs, and which is better for investors.",
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
          "name": "What's the main difference between PSLV and SLV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The main difference is physical backing and redemption. PSLV (Sprott) holds fully allocated silver bars at the Royal Canadian Mint with no leasing, and allows physical redemption for large holders. SLV (iShares) uses a custodian model with JPMorgan, allows silver leasing, and has no retail redemption option."
          }
        },
        {
          "@type": "Question",
          "name": "Is PSLV backed by real physical silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, PSLV is 100% backed by physical silver bars held at the Royal Canadian Mint. Each bar is allocated, serialized, and audited. Large investors can even redeem their shares for physical silver (minimum ~10,000 oz). The silver is not leased out or hypothecated."
          }
        },
        {
          "@type": "Question",
          "name": "Why do some investors prefer PSLV over SLV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Investors prefer PSLV for: 1) Physical redemption rights, 2) No silver leasing (SLV can lease silver to shorts), 3) Canadian government mint storage vs private bank custody, 4) Closed-end fund structure prevents dilution, 5) Considered 'harder' physical backing by silver stackers."
          }
        },
        {
          "@type": "Question",
          "name": "What are the expense ratios for PSLV and SLV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SLV has an expense ratio of 0.50% annually. PSLV charges 0.61%. While SLV is slightly cheaper, PSLV supporters argue the stronger physical backing justifies the small premium. Note: PSLV is a closed-end trust, so it can trade at premium/discount to NAV."
          }
        },
        {
          "@type": "Question",
          "name": "Can I hold PSLV or SLV in my IRA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both PSLV and SLV can be held in traditional IRAs, Roth IRAs, and 401(k)s—they trade like regular stocks. However, they are NOT the same as a Precious Metals IRA that holds physical bullion. ETFs are paper assets representing silver, while a PM IRA holds actual metal."
          }
        },
        {
          "@type": "Question",
          "name": "Which is better for a silver squeeze scenario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PSLV is generally preferred by those anticipating a silver squeeze because: 1) Shares are backed by fully allocated silver that can't be leased to shorts, 2) The closed-end structure means buying PSLV directly removes silver from the market (Sprott must buy more), 3) No authorized participant arbitrage that can dilute physical demand."
          }
        }
      ]
    }
  ]
};

export default function PSLVvsSLVPage() {
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
              <BarChart3 className="h-4 w-4" />
              100 MONTHLY SEARCHES - DIFFICULTY 0
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              PSLV vs SLV: Which Silver ETF Is Better?
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Two silver ETFs, two very different approaches. Sprott Physical Silver Trust (PSLV)
              and iShares Silver Trust (SLV) both track silver prices—but the devil is in the
              details. Here&apos;s what you need to know before investing.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Physical Backing Analysis
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Cost Comparison
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Redemption Differences
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Comparison */}
      <section className="py-12 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-white text-center mb-8">At a Glance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* PSLV Card */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">PSLV</h3>
                    <p className="text-sm text-green-400">Sprott Physical Silver Trust</p>
                  </div>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    100% allocated physical silver
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Royal Canadian Mint storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Physical redemption available
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    No silver leasing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">0.61%</span> expense ratio
                  </li>
                </ul>
              </div>

              {/* SLV Card */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-500/20 rounded-lg">
                    <Building2 className="h-6 w-6 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">SLV</h3>
                    <p className="text-sm text-slate-400">iShares Silver Trust</p>
                  </div>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-slate-400" />
                    Physical silver (custodian model)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-slate-400" />
                    JPMorgan custody
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-400" />
                    No retail redemption
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Silver can be leased
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">0.50%</span> expense ratio
                  </li>
                </ul>
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

              {/* The Key Difference */}
              <div className="not-prose bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <Scale className="h-6 w-6 text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white m-0">The Fundamental Difference</h2>
                </div>
                <p className="text-slate-300 mb-4">
                  Both PSLV and SLV are designed to track the price of silver—but they do it
                  very differently. The key distinction is how the silver is held and whether
                  it can be used by others while you own shares.
                </p>
                <p className="text-slate-300">
                  <strong>PSLV</strong> is a closed-end trust that holds fully allocated silver bars
                  at the Royal Canadian Mint. Each bar is serialized and audited. The silver
                  cannot be leased out. Large shareholders can even redeem for physical metal.
                </p>
                <p className="text-slate-300 mt-3">
                  <strong>SLV</strong> is an open-end ETF using a custodian model with JPMorgan.
                  While it holds physical silver, the prospectus allows for silver leasing to
                  shorts and authorized participants. There&apos;s no retail redemption option.
                </p>
              </div>

              <h2 className="flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-slate-400" />
                Side-by-Side Comparison
              </h2>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Feature</th>
                      <th className="p-4 border-b border-white/10 font-bold text-green-400">PSLV (Sprott)</th>
                      <th className="p-4 border-b border-white/10 font-bold text-slate-300">SLV (iShares)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-white">Fund Type</td>
                      <td className="p-4 text-slate-300">Closed-End Trust</td>
                      <td className="p-4 text-slate-300">Open-End ETF</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Custodian</td>
                      <td className="p-4 text-green-400">Royal Canadian Mint</td>
                      <td className="p-4 text-slate-300">JPMorgan Chase</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Silver Allocation</td>
                      <td className="p-4 text-green-400">Fully allocated, serialized</td>
                      <td className="p-4 text-slate-300">Allocated (custodian model)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Silver Leasing</td>
                      <td className="p-4 text-green-400">Not permitted</td>
                      <td className="p-4 text-amber-400">Permitted per prospectus</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Physical Redemption</td>
                      <td className="p-4 text-green-400">Yes (min. ~10,000 oz)</td>
                      <td className="p-4 text-red-400">No (APs only)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Expense Ratio</td>
                      <td className="p-4 text-slate-300">0.61%</td>
                      <td className="p-4 text-green-400">0.50%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">AUM</td>
                      <td className="p-4 text-slate-300">~$4 billion</td>
                      <td className="p-4 text-slate-300">~$10 billion</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Average Spread</td>
                      <td className="p-4 text-slate-300">0.10-0.20%</td>
                      <td className="p-4 text-green-400">0.01-0.02%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Tax Treatment</td>
                      <td className="p-4 text-slate-300">PFIC (complex for US)</td>
                      <td className="p-4 text-slate-300">Grantor trust (collectibles)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-green-400" />
                Why Silver Stackers Prefer PSLV
              </h2>

              <p>
                In the silver stacking community, PSLV is often the preferred choice. Here&apos;s why:
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-4">PSLV Advantages</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>True removal:</strong> Silver can&apos;t be leased to shorts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Redemption option:</strong> Large holders can take physical</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Government mint:</strong> RCM is sovereign storage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Closed-end:</strong> Buying forces Sprott to buy silver</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-300 mb-4">SLV Advantages</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Lower cost:</strong> 0.50% vs 0.61% expense ratio</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Higher liquidity:</strong> Tighter spreads, more volume</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Options market:</strong> More active options trading</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Simpler tax:</strong> Easier US tax treatment</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-amber-400" />
                The Silver Squeeze Argument
              </h2>

              <p>
                During the 2021 &quot;Silver Squeeze&quot; movement, PSLV saw massive inflows as retail
                investors specifically chose it over SLV. The reasoning:
              </p>

              <ul>
                <li>When you buy SLV, the silver can potentially be leased to shorts</li>
                <li>SLV&apos;s authorized participant system allows arbitrage that may not require physical buying</li>
                <li>PSLV&apos;s closed-end structure means Sprott must buy physical silver when trading at premium</li>
                <li>PSLV silver cannot be rehypothecated or used against silver bulls</li>
              </ul>

              <div className="not-prose bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-amber-400 mb-2">Important Note</h4>
                    <p className="text-slate-300">
                      Both PSLV and SLV are <strong>paper silver</strong>—you don&apos;t own physical metal,
                      you own shares in a trust. For true ownership of silver in a retirement account,
                      you need a <strong>Precious Metals IRA</strong> that holds actual bullion at an
                      approved depository.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Which Should You Choose?</h2>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-4">Choose PSLV If:</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-400" />
                      You want strongest physical backing
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-400" />
                      You&apos;re concerned about silver leasing
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-400" />
                      You believe in silver squeeze dynamics
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-400" />
                      You might want physical redemption someday
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-300 mb-4">Choose SLV If:</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                      You prioritize lowest costs
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                      You need maximum liquidity
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                      You trade options on silver
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                      You want simpler US tax reporting
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-slate-400" />
                Cost Analysis: 10-Year Holding
              </h2>

              <p>
                Let&apos;s compare the costs of holding $100,000 in each ETF for 10 years:
              </p>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Cost Factor</th>
                      <th className="p-4 border-b border-white/10 font-bold text-green-400">PSLV</th>
                      <th className="p-4 border-b border-white/10 font-bold text-slate-300">SLV</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-white">Expense Ratio (10 yr)</td>
                      <td className="p-4 text-slate-300">~$6,100</td>
                      <td className="p-4 text-green-400">~$5,000</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Bid-Ask Spread (round trip)</td>
                      <td className="p-4 text-slate-300">~$150</td>
                      <td className="p-4 text-green-400">~$20</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Premium/Discount Risk</td>
                      <td className="p-4 text-amber-400">Can be +/-3%</td>
                      <td className="p-4 text-green-400">Minimal</td>
                    </tr>
                    <tr className="bg-white/5">
                      <td className="p-4 font-semibold text-white">Total Explicit Cost</td>
                      <td className="p-4 text-slate-300">~$6,250</td>
                      <td className="p-4 text-green-400 font-bold">~$5,020</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-slate-500 mt-2">
                  The ~$1,200 difference over 10 years may be worth it for the additional physical backing of PSLV—
                  or may not, depending on your priorities.
                </p>
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
            headline="Want to Own Actual Physical Silver?"
            subheadline="ETFs like PSLV and SLV are paper assets. If you want to own real silver in your retirement account, Augusta Precious Metals can help you set up a Precious Metals IRA with actual bullion storage."
            linkContext="silver"
            trackSource="silver-pslv-vs-slv"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
