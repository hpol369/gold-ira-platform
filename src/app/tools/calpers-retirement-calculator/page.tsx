import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CalPERSRetirementCalculator } from "@/components/tools/CalPERSRetirementCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Info,
  Calculator,
  Building2,
  Shield,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CalPERS Retirement Calculator 2026 | Free California Pension Estimator",
  description:
    "Free CalPERS retirement calculator for 2026. Calculate your California Public Employees Retirement System pension using official formulas including Classic 2%@55, 2%@60, and PEPRA 2%@62.",
  keywords: [
    "calpers retirement calculator",
    "calpers pension calculator",
    "california pers calculator",
    "calpers benefit calculator",
    "calpers 2% at 55",
    "calpers 2% at 60",
    "pepra 2% at 62",
    "california state pension calculator",
    "calpers retirement estimate",
    "calpers final compensation",
  ],
};

const calpersFacts = [
  {
    title: "Largest Public Pension",
    description:
      "CalPERS is the largest public pension fund in the United States, managing over $450 billion in assets for 2 million members.",
    icon: Building2,
  },
  {
    title: "PEPRA Changes",
    description:
      "Members hired after January 1, 2013 are subject to PEPRA, with lower benefit formulas and higher retirement ages.",
    icon: Calendar,
  },
  {
    title: "Guaranteed Benefits",
    description:
      "CalPERS benefits are constitutionally protected in California and provide guaranteed lifetime income.",
    icon: Shield,
  },
  {
    title: "Annual COLA",
    description:
      "Most CalPERS pensions include a 2% annual cost-of-living adjustment to help maintain purchasing power.",
    icon: TrendingUp,
  },
];

const benefitFormulas = [
  {
    name: "Classic 2% @ 55",
    forWho: "State misc. members hired before 1/1/2013",
    minAge: 50,
    maxFactor: "2.418% at age 63",
    finalComp: "Highest 12 months",
  },
  {
    name: "Classic 2% @ 60",
    forWho: "Local misc. members hired before 1/1/2013",
    minAge: 50,
    maxFactor: "2.418% at age 63",
    finalComp: "Highest 12 months",
  },
  {
    name: "PEPRA 2% @ 62",
    forWho: "All new members hired on/after 1/1/2013",
    minAge: 52,
    maxFactor: "2.5% at age 67",
    finalComp: "Highest 36 months",
  },
];

// Schema markup for the calculator tool
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CalPERS Retirement Calculator 2026",
  description: "Free California Public Employees Retirement System pension calculator using official CalPERS benefit formulas",
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
      name: "How is my CalPERS pension calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CalPERS uses the formula: Age Factor % x Service Credit Years x Final Compensation. Your age factor depends on your retirement age and benefit formula (Classic or PEPRA). Final compensation is typically your highest 12 or 36 consecutive months of pay."
      }
    },
    {
      "@type": "Question",
      name: "What is PEPRA and how does it affect my pension?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PEPRA (Public Employees' Pension Reform Act of 2013) applies to members hired on or after January 1, 2013. PEPRA members have a 2% @ 62 formula with a minimum retirement age of 52 and final compensation based on the highest 36 months."
      }
    },
    {
      "@type": "Question",
      name: "What is the minimum retirement age for CalPERS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Classic members, the minimum retirement age is typically 50. For PEPRA members, the minimum retirement age is 52. However, retiring before the 'at' age in your formula results in reduced benefits."
      }
    },
    {
      "@type": "Question",
      name: "Does CalPERS provide cost-of-living adjustments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, most CalPERS benefits include a 2% annual COLA (Cost-of-Living Adjustment). This helps your pension maintain purchasing power over time as inflation increases."
      }
    },
    {
      "@type": "Question",
      name: "Can I protect my CalPERS pension from inflation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While CalPERS provides a 2% COLA, this may not keep pace with actual inflation. California retirees often supplement their pension with other retirement accounts, including Gold IRAs, to maintain purchasing power during high inflation periods."
      }
    }
  ]
};

export default function CalPERSRetirementCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <CalPERSRetirementCalculator />

      {/* Important CalPERS Facts */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Understanding CalPERS Retirement
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {calpersFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">
                          {fact.title}
                        </h3>
                        <p className="text-slate-400 text-sm">
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

      {/* Benefit Formula Comparison */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <Calculator className="h-6 w-6 text-amber-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                CalPERS Benefit Formulas Explained
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Formula</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">For Who</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Min Age</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Max Factor</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Final Comp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benefitFormulas.map((formula, index) => (
                      <tr key={formula.name} className={`border-b border-white/5 ${index % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                        <td className="px-6 py-4 text-amber-400 font-medium">{formula.name}</td>
                        <td className="px-6 py-4 text-slate-400 text-sm">{formula.forWho}</td>
                        <td className="px-6 py-4 text-white">{formula.minAge}</td>
                        <td className="px-6 py-4 text-green-400">{formula.maxFactor}</td>
                        <td className="px-6 py-4 text-slate-400">{formula.finalComp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-amber-400 font-semibold mb-2">Understanding the Formula</h3>
                  <p className="text-slate-300 text-sm">
                    <strong>Age Factor % x Service Credit x Final Compensation = Annual Pension</strong>
                    <br /><br />
                    Example: 2.0% x 30 years x $100,000 = $60,000/year ($5,000/month)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gold IRA Protection Strategy */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Protecting Your CalPERS Pension from Inflation
              </h2>
              <p className="text-slate-400">
                While CalPERS provides a 2% COLA, actual inflation has averaged 3-4% historically.
                Here is how California retirees protect their purchasing power.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">The Inflation Gap Problem</h3>
                    <p className="text-slate-400 text-sm">
                      With a 2% COLA and 4% inflation, your pension loses 2% of purchasing power each year.
                      Over 20 years, this means your $5,000/month pension could feel like only $3,400 in
                      today&apos;s dollars. This is why supplementing your pension is crucial.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Gold IRA as Inflation Hedge</h3>
                    <p className="text-slate-400 text-sm">
                      Many California state employees supplement their CalPERS pension with a Gold IRA.
                      Gold has historically maintained purchasing power during inflationary periods.
                      You can rollover a 457(b), 403(b), or other retirement accounts into a Gold IRA
                      while keeping your CalPERS pension intact.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Diversification Strategy</h3>
                    <p className="text-slate-400 text-sm">
                      Your CalPERS pension provides guaranteed monthly income. Adding gold to your
                      retirement portfolio provides a hedge against both inflation and market volatility.
                      This diversification helps ensure your retirement savings maintain real value
                      throughout your retirement years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              CalPERS Calculator FAQ
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How is my CalPERS pension calculated?",
                  a: "CalPERS uses the formula: Age Factor % x Service Credit Years x Final Compensation. Your age factor depends on your retirement age and benefit formula (Classic or PEPRA). Final compensation is typically your highest 12 or 36 consecutive months of pay.",
                },
                {
                  q: "What is PEPRA and how does it affect my pension?",
                  a: "PEPRA (Public Employees' Pension Reform Act of 2013) applies to members hired on or after January 1, 2013. PEPRA members have a 2% @ 62 formula with a minimum retirement age of 52 and final compensation based on the highest 36 months instead of 12.",
                },
                {
                  q: "Can I retire early from CalPERS?",
                  a: "Yes, Classic members can retire as early as age 50, and PEPRA members at age 52. However, retiring before the 'at' age in your formula (55, 60, or 62) results in a reduced age factor and lower monthly benefits.",
                },
                {
                  q: "What survivor benefits does CalPERS offer?",
                  a: "CalPERS offers several survivor options: 100%, 75%, or 50% of your benefit to your survivor after your death. Choosing a survivor option reduces your monthly benefit during your lifetime, with higher survivor percentages resulting in larger reductions.",
                },
                {
                  q: "How can I supplement my CalPERS pension?",
                  a: "California state employees can supplement CalPERS with a 457(b) deferred compensation plan, Social Security (if covered), personal savings, and Individual Retirement Accounts including Gold IRAs for inflation protection.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group"
                >
                  <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                    <span className="text-white font-medium pr-4">{faq.q}</span>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform">
                      v
                    </span>
                  </summary>
                  <div className="px-5 pb-5 border-t border-white/5 pt-4">
                    <p className="text-slate-400">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Important Disclaimer
                  </h3>
                  <p className="text-slate-400 text-sm">
                    This calculator provides estimates only. Actual CalPERS benefits may vary based on your
                    specific employment history, employer contract, service credit purchases, and other factors.
                    For official benefit estimates, please contact CalPERS directly or use the myCalPERS
                    online system. This is not financial advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="California Retirees: Protect Your Pension Purchasing Power"
            subheadline="While CalPERS provides a 2% COLA, inflation often runs higher. Many California state employees supplement their pension with a Gold IRA to maintain purchasing power throughout retirement."
            trackSource="tools-calpers-retirement-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
