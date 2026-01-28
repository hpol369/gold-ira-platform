import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Solo401kCalculator } from "@/components/tools/Solo401kCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  CheckCircle2,
  Briefcase,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solo 401k Calculator 2024 | Self-Employed 401k Contribution Calculator",
  description:
    "Free Solo 401k calculator for self-employed. Calculate maximum contributions as a sole proprietor, LLC, or S-Corp. 2024 limits and catch-up included.",
  keywords: [
    "solo 401k calculator",
    "self employed 401k calculator",
    "solo 401k contribution calculator",
    "individual 401k calculator",
    "self employed retirement calculator",
    "solo 401k max contribution",
    "one participant 401k calculator",
    "solo 401k limits 2024",
    "s corp 401k calculator",
    "self directed solo 401k",
  ],
};

const solo401kFacts = [
  {
    title: "Highest Contribution Limits",
    description:
      "Solo 401(k) allows up to $69,000 in 2024 ($76,500 if 50+). That's more than SEP IRA for most self-employed individuals.",
    icon: CheckCircle2,
  },
  {
    title: "Employee + Employer Contributions",
    description:
      "Unlike SEP IRA (employer only), Solo 401(k) includes employee deferral up to $23,000 plus employer profit sharing.",
    icon: Briefcase,
  },
  {
    title: "Roth Option Available",
    description:
      "The employee deferral portion can be Roth (after-tax), allowing tax-free growth and withdrawals in retirement.",
    icon: Shield,
  },
  {
    title: "Loan Feature",
    description:
      "You can borrow up to $50,000 or 50% of your account balance. SEP IRAs don't allow loans.",
    icon: AlertTriangle,
  },
];

// Schema markup for the calculator tool
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Solo 401k Calculator 2024",
  description: "Free calculator for self-employed individuals to determine maximum Solo 401(k) contributions",
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
      name: "How much can I contribute to a Solo 401k in 2024?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In 2024, you can contribute up to $69,000 ($76,500 if age 50+). This includes up to $23,000 in employee deferrals ($30,500 if 50+) plus up to 25% of compensation as employer profit sharing. Your actual limit depends on your business income and structure."
      }
    },
    {
      "@type": "Question",
      name: "What is the difference between Solo 401k and SEP IRA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solo 401(k) has two contribution types (employee deferral + employer), while SEP IRA only allows employer contributions. This means Solo 401(k) typically allows higher contributions at lower income levels. Solo 401(k) also offers Roth contributions and loan options that SEP IRA doesn't have."
      }
    },
    {
      "@type": "Question",
      name: "Can I have a Solo 401k if I have employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Solo 401(k) is only for self-employed individuals with no full-time employees (other than a spouse). If you have employees working 1,000+ hours/year, you'll need a traditional 401(k) plan or SEP IRA instead."
      }
    },
    {
      "@type": "Question",
      name: "Can I invest my Solo 401k in gold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! A self-directed Solo 401(k) with 'checkbook control' allows you to invest in physical gold, silver, and other precious metals. The gold must be stored in an approved depository, not personally. This gives you direct investment control without needing custodian approval for each purchase."
      }
    }
  ]
};

export default function Solo401kCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <Solo401kCalculator />

      {/* Important Facts */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Why Choose a Solo 401(k)?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {solo401kFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 shadow-sm rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-purple-400" />
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

      {/* 2024 Limits Reference */}
      <section className="py-16 bg-slate-100/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
                2024 Solo 401(k) Contribution Limits
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Understand the different components that make up your maximum contribution.
              </p>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Contribution Type</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">Under 50</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">Age 50+</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-900">Employee Deferral</div>
                        <div className="text-xs text-slate-500">Can be Traditional or Roth</div>
                      </td>
                      <td className="px-6 py-4 text-right text-blue-600 font-semibold">$23,000</td>
                      <td className="px-6 py-4 text-right text-blue-600 font-semibold">$30,500</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-900">Employer Profit Sharing</div>
                        <div className="text-xs text-slate-500">Up to 25% of compensation</div>
                      </td>
                      <td className="px-6 py-4 text-right text-green-600 font-semibold">Up to $46,000</td>
                      <td className="px-6 py-4 text-right text-green-600 font-semibold">Up to $46,000</td>
                    </tr>
                    <tr className="bg-purple-500/10">
                      <td className="px-6 py-4">
                        <div className="font-bold text-purple-400">Total Maximum</div>
                      </td>
                      <td className="px-6 py-4 text-right text-purple-400 font-bold text-lg">$69,000</td>
                      <td className="px-6 py-4 text-right text-purple-400 font-bold text-lg">$76,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Note: The employee deferral limit is shared across all 401(k) plans. If you also contribute to an employer 401(k), the combined employee deferrals cannot exceed $23,000 ($30,500 if 50+).
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Self-Directed Gold Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#B22234]/5 rounded-xl p-8 border border-[#B22234]/30">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-[#B22234]" />
                <h2 className="text-2xl font-bold text-slate-900">
                  Self-Directed Solo 401(k) for Gold
                </h2>
              </div>

              <div className="space-y-4 text-slate-500 mb-8">
                <p>
                  A self-directed Solo 401(k) with &quot;checkbook control&quot; is one of the most powerful ways to invest in physical gold within a retirement account. Unlike a traditional Gold IRA, you can:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="text-[#B22234] font-semibold mb-2">With Checkbook Control</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Write checks directly to gold dealers</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>No custodian approval for each purchase</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Lower transaction fees</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Faster purchases</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="text-[#B22234] font-semibold mb-2">Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <AlertTriangle className="h-4 w-4 text-[#B22234] flex-shrink-0 mt-0.5" />
                        <span>Self-employment income required</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-4 w-4 text-[#B22234] flex-shrink-0 mt-0.5" />
                        <span>No employees (except spouse)</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-4 w-4 text-[#B22234] flex-shrink-0 mt-0.5" />
                        <span>Gold stored in approved depository</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-4 w-4 text-[#B22234] flex-shrink-0 mt-0.5" />
                        <span>Annual IRS reporting (Form 5500-EZ)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-lg p-4 mb-6">
                <p className="text-[#B22234] text-sm">
                  <strong>Key Insight:</strong> Solo 401(k) with checkbook control lets you invest in physical gold directly. This gives self-employed individuals more control and potentially lower fees than traditional Gold IRAs, while sheltering up to $76,500 per year from taxes.
                </p>
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
              Solo 401(k) Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How much can I contribute to a Solo 401k in 2024?",
                  a: "In 2024, you can contribute up to $69,000 ($76,500 if age 50+). This includes up to $23,000 in employee deferrals ($30,500 if 50+) plus up to 25% of compensation as employer profit sharing. Your actual limit depends on your business income and structure.",
                },
                {
                  q: "What is the difference between Solo 401k and SEP IRA?",
                  a: "Solo 401(k) has two contribution types (employee deferral + employer), while SEP IRA only allows employer contributions. This means Solo 401(k) typically allows higher contributions at lower income levels. Solo 401(k) also offers Roth contributions and loan options that SEP IRA doesn't have.",
                },
                {
                  q: "Can I have a Solo 401k if I have employees?",
                  a: "A Solo 401(k) is only for self-employed individuals with no full-time employees (other than a spouse). If you have employees working 1,000+ hours/year, you'll need a traditional 401(k) plan or SEP IRA instead.",
                },
                {
                  q: "Can I invest my Solo 401k in gold?",
                  a: "Yes! A self-directed Solo 401(k) with 'checkbook control' allows you to invest in physical gold, silver, and other precious metals. The gold must be stored in an approved depository, not personally. This gives you direct investment control without needing custodian approval for each purchase.",
                },
                {
                  q: "What's the deadline for Solo 401k contributions?",
                  a: "The deadline is your tax filing deadline (including extensions). Employee deferrals must come from compensation earned during the year and should be contributed promptly. Employer contributions can be made up until your tax deadline.",
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
                    This calculator provides estimates based on 2024 IRS limits and general rules. Your actual contribution limits depend on your specific business structure, income, and other factors. Solo 401(k) plans have complex rules and reporting requirements. We recommend consulting with a qualified tax professional or retirement plan specialist before establishing a Solo 401(k). This is not tax or financial advice.
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
            headline="Ready to Set Up a Solo 401(k) for Gold?"
            subheadline="Self-employed individuals can shelter up to $76,500 per year while investing in physical gold. Get expert guidance on setting up a self-directed Solo 401(k) with checkbook control."
            trackSource="tools-solo-401k-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
