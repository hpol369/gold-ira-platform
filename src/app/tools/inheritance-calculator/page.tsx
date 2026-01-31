import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InheritanceCalculator } from "@/components/tools/InheritanceCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  CheckCircle2,
  Gift,
  Info,
  Scale,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Inheritance Calculator 2026 | Free Inheritance Tax Calculator",
  description:
    "Free inheritance calculator. Calculate taxes on inherited IRAs, understand the 10-year rule, step-up in basis, and state inheritance taxes.",
  keywords: [
    "inheritance calculator",
    "inheritance tax calculator",
    "what to do with inheritance",
    "inherited ira calculator",
    "inherited ira 10 year rule",
    "step up in basis",
    "estate tax calculator",
    "inheritance planning",
    "inherited 401k rules",
    "inheritance investment strategies",
  ],
};

const inheritanceFacts = [
  {
    title: "No Federal Inheritance Tax",
    description:
      "The U.S. has no federal inheritance tax. Only 6 states (IA, KY, MD, NE, NJ, PA) have state inheritance taxes, and most exempt spouses and children.",
    icon: CheckCircle2,
  },
  {
    title: "10-Year Rule for IRAs",
    description:
      "Non-spouse beneficiaries must withdraw all inherited IRA funds within 10 years under the SECURE Act. This can create significant tax liability.",
    icon: Clock,
  },
  {
    title: "Step-Up in Basis",
    description:
      "Inherited stocks and real estate get a 'stepped up' cost basis to fair market value at death, eliminating capital gains on lifetime appreciation.",
    icon: Scale,
  },
  {
    title: "Act Within Deadlines",
    description:
      "Inherited IRAs have strict deadlines. Missing them can result in the entire balance becoming taxable immediately. Consult a CPA promptly.",
    icon: Info,
  },
];

// Schema markup for the calculator tool
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Inheritance Calculator 2026",
  description: "Free inheritance tax calculator to estimate taxes on inherited assets, understand IRA distribution rules, and plan investment strategies",
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
      name: "Do I have to pay taxes on an inheritance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the asset type. Cash and stepped-up assets (stocks, real estate) generally have no immediate tax. Inherited traditional IRAs and 401(k)s are taxed as ordinary income when withdrawn. Only 6 states have inheritance taxes."
      }
    },
    {
      "@type": "Question",
      name: "What is the 10-year rule for inherited IRAs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the SECURE Act, most non-spouse beneficiaries must withdraw all funds from an inherited traditional IRA within 10 years of the original owner's death. All distributions are taxed as ordinary income in the year withdrawn."
      }
    },
    {
      "@type": "Question",
      name: "What is step-up in basis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you inherit appreciated assets like stocks or real estate, your cost basis 'steps up' to the fair market value at the date of death. This eliminates capital gains tax on all appreciation during the decedent's lifetime."
      }
    },
    {
      "@type": "Question",
      name: "What should I do with a large inheritance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Don't rush - park funds safely while you plan. Pay off high-interest debt, build an emergency fund, max out retirement accounts, and consider diversification including stocks, bonds, real estate, and inflation hedges like precious metals."
      }
    }
  ]
};

export default function InheritanceCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <InheritanceCalculator />

      {/* Important Facts */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Key Facts About Inheritance Taxes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {inheritanceFacts.map((fact, index) => {
                const Icon = fact.icon;
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
                          {fact.title}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {fact.description}
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

      {/* Tax by Asset Type Section */}
      <section className="py-16 bg-slate-100/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-12">
              How Different Inherited Assets Are Taxed
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Asset Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Federal Income Tax</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Special Rules</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="px-6 py-4 text-slate-900 font-medium">Cash</td>
                    <td className="px-6 py-4 text-green-600">None</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">Interest earned after inheritance is taxable</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="px-6 py-4 text-slate-900 font-medium">Traditional IRA/401(k)</td>
                    <td className="px-6 py-4 text-red-600">Ordinary income on withdrawals</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">10-year rule for non-spouse; spouse can rollover</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-6 py-4 text-slate-900 font-medium">Roth IRA</td>
                    <td className="px-6 py-4 text-green-600">None (if qualified)</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">10-year rule still applies; tax-free growth</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="px-6 py-4 text-slate-900 font-medium">Stocks/Investments</td>
                    <td className="px-6 py-4 text-green-600">None (step-up in basis)</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">Only pay tax on gains after inheritance</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-6 py-4 text-slate-900 font-medium">Real Estate</td>
                    <td className="px-6 py-4 text-green-600">None (step-up in basis)</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">Property taxes continue; rental income taxable</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="px-6 py-4 text-slate-900 font-medium">Life Insurance</td>
                    <td className="px-6 py-4 text-green-600">None</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">Proceeds tax-free to named beneficiaries</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Inherited IRA Strategy Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#B22234]/10 rounded-xl flex items-center justify-center">
                <Gift className="h-6 w-6 text-[#B22234]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                Strategies for Inherited IRAs
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Strategy 1: Equal Annual Distributions</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Divide the inherited IRA by 10 and withdraw the same amount each year. This spreads the tax burden evenly
                  and keeps you from jumping into higher tax brackets.
                </p>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-500">
                    <strong className="text-slate-900">Example:</strong> $500,000 inherited IRA = $50,000/year for 10 years
                    (plus growth on remaining balance)
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Strategy 2: Tax Bracket Management</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Withdraw more in years when your income is lower (job change, sabbatical, early retirement) and less
                  in high-income years. Keep withdrawals below the next tax bracket threshold.
                </p>
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <p className="text-sm text-green-600">
                    <strong>Pro tip:</strong> If you expect income to increase, front-load distributions in earlier years
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Strategy 3: Charitable Giving</h3>
                <p className="text-slate-600 text-sm mb-3">
                  If charitably inclined, you can donate IRA distributions directly to charity (Qualified Charitable Distribution)
                  once you reach age 70 1/2, avoiding income tax on the donated amount entirely.
                </p>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Strategy 4: Roth Conversion Bridge</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Consider using some of your inheritance to pay the tax on Roth conversions of your own traditional IRA.
                  This accelerates tax-free growth for your retirement while managing inherited IRA distributions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* State Inheritance Tax Map */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-8">
              States With Inheritance Tax (2024)
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { state: "Iowa", rate: "0-6%", note: "Phasing out by 2025" },
                { state: "Kentucky", rate: "4-16%", note: "Class A exempt" },
                { state: "Maryland", rate: "10%", note: "Immediate family exempt" },
                { state: "Nebraska", rate: "1-18%", note: "$40k family exemption" },
                { state: "New Jersey", rate: "11-16%", note: "Class A exempt" },
                { state: "Pennsylvania", rate: "4.5-15%", note: "Spouse exempt" },
              ].map((item) => (
                <div key={item.state} className="bg-white border border-slate-200 shadow-sm rounded-lg p-4">
                  <div className="text-slate-900 font-semibold">{item.state}</div>
                  <div className="text-[#B22234] text-lg font-bold">{item.rate}</div>
                  <div className="text-slate-500 text-xs">{item.note}</div>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-600 text-sm mt-6">
              The other 44 states have no inheritance tax. Estate taxes are separate and paid by the estate, not the beneficiary.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Inheritance FAQs
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Do I have to pay taxes on an inheritance?",
                  a: "It depends on the asset type. Cash and stepped-up assets (stocks, real estate) generally have no immediate federal income tax. Inherited traditional IRAs and 401(k)s are taxed as ordinary income when withdrawn. Only 6 states have inheritance taxes, and most exempt spouses and direct descendants.",
                },
                {
                  q: "What is the 10-year rule for inherited IRAs?",
                  a: "Under the SECURE Act (2019), most non-spouse beneficiaries must withdraw all funds from an inherited traditional IRA within 10 years of the original owner's death. Each withdrawal is taxed as ordinary income. Spouses can roll the IRA into their own and follow normal rules.",
                },
                {
                  q: "What is step-up in basis and why does it matter?",
                  a: "When you inherit appreciated assets like stocks or real estate, your cost basis 'steps up' to the fair market value at death. If someone bought stock for $50,000 and it's worth $500,000 when you inherit it, your basis is $500,000 - you pay zero capital gains tax on the $450,000 gain!",
                },
                {
                  q: "What should I do first when I receive an inheritance?",
                  a: "Don't rush into decisions. Park funds in a high-yield savings account while you plan. Pay off high-interest debt, build an emergency fund (6 months expenses), and consult a CPA for tax implications. Wait at least 6 months before making major investment decisions.",
                },
                {
                  q: "Can I roll an inherited IRA into my own IRA?",
                  a: "Only surviving spouses can roll an inherited IRA into their own IRA. Non-spouse beneficiaries must keep it as an inherited IRA and follow the 10-year distribution rule (or stretch rules if they're an Eligible Designated Beneficiary).",
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
      <section className="py-8 bg-slate-50">
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
                    This calculator provides estimates for educational purposes only. Tax laws are complex and
                    change frequently. Inherited IRA rules depend on your relationship to the decedent, account
                    type, and timing. This is not tax, legal, or financial advice. Consult a qualified CPA or
                    estate attorney for your specific situation before making any inheritance decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Your Parents Worked Hard for This. Honor Their Legacy."
            subheadline="An inheritance represents a lifetime of someone's work. Protect it from market crashes and inflation with physical gold - a safe haven that holds value for generations."
            trackSource="tools-inheritance-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
