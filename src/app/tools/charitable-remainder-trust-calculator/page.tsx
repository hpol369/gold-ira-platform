import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CharitableRemainderTrustCalculator } from "@/components/tools/CharitableRemainderTrustCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  CheckCircle2,
  Gift,
  Heart,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Charitable Remainder Trust Calculator 2026 | CRT Tool",
  description:
    "Free CRT calculator. Calculate tax deductions, annual payouts, and remainder values for CRAT and CRUT charitable trusts.",
  keywords: [
    "charitable remainder trust calculator",
    "crt calculator",
    "crut calculator",
    "crat calculator",
    "charitable remainder unitrust",
    "charitable remainder annuity trust",
    "charitable trust calculator",
    "crt tax deduction",
    "charitable giving calculator",
    "appreciated assets charity",
  ],
};

const crtBenefits = [
  {
    title: "Income Tax Deduction",
    description:
      "Receive an immediate charitable deduction based on the present value of the remainder interest going to charity.",
    icon: DollarSign,
  },
  {
    title: "Capital Gains Bypass",
    description:
      "Contribute appreciated assets and avoid immediate capital gains tax. The trust can sell assets and reinvest the full amount.",
    icon: TrendingUp,
  },
  {
    title: "Lifetime Income Stream",
    description:
      "Receive annual payments (5-50% of trust value) for life or a term of years, providing reliable retirement income.",
    icon: Heart,
  },
  {
    title: "Charitable Legacy",
    description:
      "At trust termination, the remainder passes to your chosen charity, creating a meaningful philanthropic legacy.",
    icon: Gift,
  },
];

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Charitable Remainder Trust Calculator 2026",
  description:
    "Calculate charitable deductions, income streams, and remainder values for CRAT and CRUT charitable remainder trusts",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Charitable Remainder Trust (CRT)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Charitable Remainder Trust is an irrevocable trust that provides income to you (or other beneficiaries) for life or a term of years, with the remainder going to charity. You receive an immediate tax deduction and can avoid capital gains on appreciated assets.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a CRAT and CRUT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CRAT (Charitable Remainder Annuity Trust) pays a fixed dollar amount each year regardless of trust performance. A CRUT (Charitable Remainder Unitrust) pays a fixed percentage of the trust's annually revalued assets, so payments can increase if investments grow.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum payout rate for a CRT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The IRS requires a minimum 5% payout rate and maximum 50% payout rate. Additionally, the present value of the charitable remainder must be at least 10% of the initial contribution for the trust to qualify.",
      },
    },
    {
      "@type": "Question",
      name: "Can I fund a CRT with appreciated gold or investments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! CRTs are ideal for highly appreciated assets. You can transfer appreciated stocks, real estate, or gold to a CRT without triggering immediate capital gains. The trust can then sell the assets tax-free and reinvest the full proceeds.",
      },
    },
    {
      "@type": "Question",
      name: "How is the charitable deduction calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The deduction equals the present value of the remainder interest going to charity. It depends on: the contribution amount, payout rate, term length, and the IRS Section 7520 rate (AFR). Higher payout rates and longer terms reduce the deduction.",
      },
    },
  ],
};

export default function CharitableRemainderTrustCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <CharitableRemainderTrustCalculator />

      {/* CRT Benefits Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Why Consider a Charitable Remainder Trust?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {crtBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 shadow-sm rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-purple-700" />
                      </div>
                      <div>
                        <h3 className="text-slate-900 font-semibold mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* How CRTs Work */}
      <section className="py-16 bg-slate-100/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Gift className="h-6 w-6 text-purple-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                How a Charitable Remainder Trust Works
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-purple-700 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      You Contribute Assets
                    </h3>
                    <p className="text-slate-500">
                      Transfer cash, securities, real estate, or other appreciated assets to an irrevocable
                      trust. You receive an immediate income tax deduction based on the present value of
                      the charitable remainder.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-purple-700 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Trust Sells &amp; Reinvests Tax-Free
                    </h3>
                    <p className="text-slate-500">
                      The trust can sell appreciated assets without paying capital gains tax immediately.
                      This allows 100% of the proceeds to be reinvested, generating more income for you
                      than if you sold personally and paid taxes first.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-purple-700 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      You Receive Income Payments
                    </h3>
                    <p className="text-slate-500">
                      The trust pays you (and/or other income beneficiaries) a percentage of the trust
                      value annually. Payments continue for your lifetime or a term up to 20 years.
                      These payments are partially taxable depending on the trust&apos;s income sources.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-purple-700 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Charity Receives the Remainder
                    </h3>
                    <p className="text-slate-500">
                      When the trust terminates (at your death or end of term), the remaining assets
                      pass to your designated charity. You&apos;ve created a meaningful charitable legacy
                      while enjoying income during your lifetime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CRAT vs CRUT Deep Dive */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              CRAT vs CRUT: Which Is Right for You?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  CRAT (Charitable Remainder Annuity Trust)
                </h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Fixed dollar payment each year (e.g., $30,000/year)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Predictable, stable income regardless of market performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>No additional contributions allowed after initial funding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Higher remainder to charity if investments outperform payout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-[#B22234] mt-0.5 flex-shrink-0" />
                    <span>Risk: Trust could be depleted if investments underperform</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
                  <p className="text-blue-800 text-xs">
                    <strong>Best for:</strong> Those wanting predictable income, older donors, or when funding with assets expected to have modest growth.
                  </p>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-700 mb-4">
                  CRUT (Charitable Remainder Unitrust)
                </h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-700 mt-0.5 flex-shrink-0" />
                    <span>Fixed percentage of trust value each year (e.g., 5% of current value)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-700 mt-0.5 flex-shrink-0" />
                    <span>Income increases if trust investments grow - inflation hedge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-700 mt-0.5 flex-shrink-0" />
                    <span>Can make additional contributions to the trust</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-700 mt-0.5 flex-shrink-0" />
                    <span>Trust is revalued annually - payments adjust automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-[#B22234] mt-0.5 flex-shrink-0" />
                    <span>Income decreases in down market years</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-purple-500/10 rounded-lg">
                  <p className="text-purple-800 text-xs">
                    <strong>Best for:</strong> Younger donors, those wanting growth potential, long-term trusts, or when planning additional contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-100/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Charitable Remainder Trust FAQ
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What is a Charitable Remainder Trust (CRT)?",
                  a: "A CRT is an irrevocable trust that provides income to you for life or a term of years, with the remainder going to charity. You receive an immediate tax deduction and can avoid capital gains on appreciated assets.",
                },
                {
                  q: "What is the difference between a CRAT and CRUT?",
                  a: "A CRAT pays a fixed dollar amount each year. A CRUT pays a fixed percentage of the trust's annually revalued assets - so payments can increase if investments grow, providing inflation protection.",
                },
                {
                  q: "What is the minimum payout rate for a CRT?",
                  a: "The IRS requires a minimum 5% payout rate and maximum 50%. Additionally, the present value of the charitable remainder must be at least 10% of the initial contribution.",
                },
                {
                  q: "Can I fund a CRT with appreciated gold or investments?",
                  a: "Yes! CRTs are ideal for highly appreciated assets. You can transfer appreciated stocks, real estate, or gold to a CRT without triggering immediate capital gains. The trust can then sell tax-free and reinvest 100%.",
                },
                {
                  q: "How is the charitable deduction calculated?",
                  a: "The deduction equals the present value of the remainder interest going to charity. It depends on the contribution amount, payout rate, term length, and IRS Section 7520 rate. Higher payouts and longer terms reduce the deduction.",
                },
                {
                  q: "Can I be the trustee of my own CRT?",
                  a: "Yes, in most cases you can serve as trustee of your own CRT. However, many donors choose corporate trustees or use professional advisors to handle investment and administrative duties.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden group"
                >
                  <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                    <span className="text-slate-900 font-medium pr-4">{faq.q}</span>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform">
                      &#9660;
                    </span>
                  </summary>
                  <div className="px-5 pb-5 border-t border-slate-200 pt-4">
                    <p className="text-slate-500">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-slate-900 font-semibold mb-2">
                    Important Disclaimer
                  </h3>
                  <p className="text-slate-600 text-sm">
                    This calculator provides estimates for educational purposes only. Actual charitable
                    deductions depend on current IRS Section 7520 rates, trust terms, and individual circumstances.
                    CRTs are complex legal instruments with significant tax and estate planning implications.
                    Consult with a qualified tax attorney, CPA, and financial advisor before establishing
                    any charitable remainder trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-100/30">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Combining Charitable Giving with Gold Investment?"
            subheadline="Many sophisticated investors combine charitable strategies with Gold IRAs. Our specialists can discuss how precious metals fit into your overall wealth planning."
            trackSource="tools-crt-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
