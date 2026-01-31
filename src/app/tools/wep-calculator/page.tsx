import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WEPCalculator } from "@/components/tools/WEPCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  CheckCircle2,
  Building,
  Briefcase,
  Users,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "WEP Calculator 2026 | Windfall Elimination Provision Calculator",
  description:
    "Free WEP calculator for 2026. Calculate how the Windfall Elimination Provision reduces your Social Security with a government pension. GPO calculator included.",
  keywords: [
    "wep calculator",
    "windfall elimination provision calculator",
    "social security wep calculator",
    "wep reduction calculator",
    "government pension offset calculator",
    "gpo calculator",
    "social security government pension",
    "wep social security",
    "csrs social security",
    "teachers pension social security",
  ],
};

const wepFacts = [
  {
    title: "Who WEP Affects",
    description:
      "WEP applies if you receive a pension from work where you didn't pay Social Security taxes (federal CSRS, some state/local governments, foreign employers).",
    icon: Building,
  },
  {
    title: "30 Years Eliminates WEP",
    description:
      "If you have 30 or more years of 'substantial earnings' (about $31,275+ in 2024) where you paid Social Security taxes, WEP doesn't apply to you.",
    icon: CheckCircle2,
  },
  {
    title: "Maximum Reduction",
    description:
      "The 2026 WEP maximum reduction is approximately $598/month. It cannot exceed 50% of your non-covered pension amount.",
    icon: AlertTriangle,
  },
  {
    title: "GPO Is Different",
    description:
      "Government Pension Offset (GPO) affects spousal and survivor benefits separately, reducing them by 2/3 of your government pension.",
    icon: Users,
  },
];

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "WEP Calculator 2026",
  description:
    "Calculate how the Windfall Elimination Provision (WEP) reduces your Social Security benefits based on years of substantial earnings and non-covered pension",
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
      name: "What is the Windfall Elimination Provision (WEP)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WEP is a formula that reduces Social Security benefits for people who receive pensions from work not covered by Social Security (like some government jobs) but also worked in Social Security-covered employment. It prevents 'double-dipping' from both systems.",
      },
    },
    {
      "@type": "Question",
      name: "How much does WEP reduce my Social Security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The maximum WEP reduction in 2026 is approximately $598/month. The actual reduction depends on your years of substantial earnings under Social Security. With 30+ years, WEP doesn't apply. With 20 or fewer years, you get the full reduction. Between 21-29 years, the reduction phases out.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between WEP and GPO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WEP reduces your own Social Security retirement benefit. GPO (Government Pension Offset) reduces spousal or survivor Social Security benefits by 2/3 of your government pension. They are separate provisions that can both apply to the same person.",
      },
    },
    {
      "@type": "Question",
      name: "What counts as substantial earnings for WEP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For 2024, substantial earnings means earning at least $31,275 in Social Security-covered employment. This threshold is adjusted annually for inflation. Check your Social Security statement to see your yearly earnings history.",
      },
    },
    {
      "@type": "Question",
      name: "Can I avoid WEP by working more years?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! WEP is gradually reduced with 21-29 years of substantial earnings and completely eliminated with 30+ years. Each year of substantial earnings above 20 reduces the WEP percentage by 5%. This can be a significant strategy for those close to the threshold.",
      },
    },
  ],
};

export default function WEPCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <WEPCalculator />

      {/* WEP Facts Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Understanding the Windfall Elimination Provision
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {wepFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 shadow-sm rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-red-600" />
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

      {/* How WEP Works */}
      <section className="py-16 bg-slate-100/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <Scale className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                How the WEP Calculation Works
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  The WEP Formula
                </h3>
                <p className="text-slate-500 mb-4">
                  Social Security normally replaces 90% of your first $1,174 (2024) of average monthly
                  earnings. WEP reduces this first &quot;bend point&quot; from 90% down to as low as 40%,
                  depending on your years of substantial earnings.
                </p>
                <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm">
                  <p className="text-slate-600 mb-2">Standard Formula: 90% of first $1,174 = $1,057</p>
                  <p className="text-red-600">WEP Formula: 40% of first $1,174 = $470</p>
                  <p className="text-[#B22234] mt-2">Maximum Reduction: $587 (2024)</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Years of Substantial Earnings Scale
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="py-2 px-4 text-left text-slate-500">Years</th>
                        <th className="py-2 px-4 text-left text-slate-500">WEP Percentage</th>
                        <th className="py-2 px-4 text-left text-slate-500">First Bend Point Factor</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-600">
                      <tr className="border-b border-slate-200">
                        <td className="py-2 px-4">20 or fewer</td>
                        <td className="py-2 px-4 text-red-600">100% (Full WEP)</td>
                        <td className="py-2 px-4">40%</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-2 px-4">21</td>
                        <td className="py-2 px-4">95%</td>
                        <td className="py-2 px-4">45%</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-2 px-4">22</td>
                        <td className="py-2 px-4">90%</td>
                        <td className="py-2 px-4">50%</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-2 px-4">...</td>
                        <td className="py-2 px-4">...</td>
                        <td className="py-2 px-4">...</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-2 px-4">29</td>
                        <td className="py-2 px-4">55%</td>
                        <td className="py-2 px-4">85%</td>
                      </tr>
                      <tr className="bg-green-500/5">
                        <td className="py-2 px-4 text-green-600 font-semibold">30+</td>
                        <td className="py-2 px-4 text-green-600">0% (No WEP)</td>
                        <td className="py-2 px-4 text-green-600">90% (Normal)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  The 50% Pension Guarantee
                </h3>
                <p className="text-slate-500">
                  Your WEP reduction can never be more than 50% of your non-covered pension.
                  If you receive a $800/month government pension, your WEP reduction is capped
                  at $400 - even if the formula would otherwise produce a larger reduction.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* GPO Explained */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                Government Pension Offset (GPO)
              </h2>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mb-6">
              <p className="text-slate-600 mb-4">
                GPO is separate from WEP. While WEP reduces your <em>own</em> Social Security benefit,
                GPO reduces <em>spousal or survivor</em> benefits you might receive based on a spouse&apos;s
                Social Security record.
              </p>
              <div className="bg-slate-100 rounded-lg p-4">
                <p className="text-purple-700 font-semibold">GPO Formula:</p>
                <p className="text-slate-600 font-mono">
                  Spousal Benefit - (Government Pension x 2/3) = Adjusted Benefit
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h4 className="text-slate-900 font-semibold mb-3">Example: GPO Elimination</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>Government pension: $2,400/month</li>
                  <li>Spousal benefit: $1,200/month</li>
                  <li>GPO reduction: $2,400 x 2/3 = $1,600</li>
                  <li className="text-red-600 font-semibold">Adjusted benefit: $0 (completely eliminated)</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h4 className="text-slate-900 font-semibold mb-3">Example: Partial GPO</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>Government pension: $900/month</li>
                  <li>Spousal benefit: $1,200/month</li>
                  <li>GPO reduction: $900 x 2/3 = $600</li>
                  <li className="text-green-600 font-semibold">Adjusted benefit: $600/month</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Affected Workers */}
      <section className="py-16 bg-slate-100/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Who Is Affected by WEP?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Building className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-slate-900">Commonly Affected</h3>
                </div>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Federal employees hired before 1984 (CSRS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Some state and local government employees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Teachers in certain states (15 states don&apos;t participate in SS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Police officers and firefighters in some jurisdictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>People with foreign pensions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Railroad employees (pre-1984)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-slate-900">Not Affected by WEP</h3>
                </div>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Federal employees under FERS (hired after 1983)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>State/local employees who paid into Social Security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Anyone with 30+ years of substantial SS earnings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Most private sector workers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Self-employed who paid SE tax</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              WEP Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What is the Windfall Elimination Provision (WEP)?",
                  a: "WEP is a formula that reduces Social Security benefits for people who receive pensions from work not covered by Social Security but also worked in Social Security-covered employment. It prevents 'double-dipping' from both systems.",
                },
                {
                  q: "How much does WEP reduce my Social Security?",
                  a: "The maximum WEP reduction in 2026 is approximately $598/month. With 30+ years of substantial earnings, WEP doesn't apply. With 20 or fewer years, you get the full reduction. Between 21-29 years, the reduction phases out by 5% per year.",
                },
                {
                  q: "What is the difference between WEP and GPO?",
                  a: "WEP reduces your own Social Security retirement benefit. GPO (Government Pension Offset) reduces spousal or survivor Social Security benefits by 2/3 of your government pension. They are separate provisions.",
                },
                {
                  q: "What counts as substantial earnings for WEP?",
                  a: "For 2024, substantial earnings means earning at least $31,275 in Social Security-covered employment. The threshold adjusts annually. Check your Social Security statement for your earnings history.",
                },
                {
                  q: "Can I avoid WEP by working more years?",
                  a: "Yes! WEP is gradually reduced with 21-29 years of substantial earnings and completely eliminated with 30+ years. Each year above 20 reduces the WEP percentage by 5%.",
                },
                {
                  q: "Will WEP be repealed?",
                  a: "There have been ongoing legislative efforts to repeal or reform WEP/GPO. The Social Security Fairness Act has been introduced multiple times. Check current legislation status, but don't count on repeal when planning.",
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
                    This calculator provides estimates based on current WEP and GPO rules.
                    Actual Social Security calculations are complex and depend on your complete
                    earnings history. For an exact calculation, contact the Social Security
                    Administration at ssa.gov or 1-800-772-1213. This tool is for educational
                    purposes only and should not be relied upon for financial planning decisions.
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
            headline="WEP Cut Your Social Security? You Still Have Options."
            subheadline="After 25+ years of public service, WEP can slash your Social Security by $600/month. A Gold IRA builds retirement income they can't reduce - independent of government formulas."
            trackSource="tools-wep-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
