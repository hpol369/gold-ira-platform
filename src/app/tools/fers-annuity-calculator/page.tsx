import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FERSAnnuityCalculator } from "@/components/tools/FERSAnnuityCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  Calculator,
  Info,
  CheckCircle2,
  TrendingUp,
  Users,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FERS Annuity Calculator 2026 | Free Federal Pension Calculator",
  description:
    "Free FERS annuity calculator for federal employees. Calculate your FERS pension with the 1% or 1.1% multiplier, survivor benefit reductions, and 10-year COLA projections.",
  keywords: [
    "fers annuity calculator",
    "fers pension calculator",
    "federal pension calculator",
    "fers retirement calculator",
    "fers basic benefit calculator",
    "federal employee pension",
    "fers high-3 calculator",
    "fers cola calculator",
  ],
};

const annuityFormulas = [
  {
    title: "Standard Formula (Under 62 or Less Than 20 Years)",
    formula: "1% x High-3 x Years of Service",
    description:
      "Used for most FERS retirements where you're under age 62 or have less than 20 years of service.",
    icon: Calculator,
  },
  {
    title: "Enhanced Formula (Age 62+ with 20+ Years)",
    formula: "1.1% x High-3 x Years of Service",
    description:
      "If you retire at age 62 or older with at least 20 years of service, you get the enhanced 1.1% multiplier.",
    icon: TrendingUp,
  },
  {
    title: "Survivor Benefit (50% Option)",
    formula: "Annuity reduced by 10%",
    description:
      "Provide 50% of your annuity to your surviving spouse. This reduces your annuity by 10%.",
    icon: Users,
  },
  {
    title: "MRA+10 Early Retirement",
    formula: "5% reduction per year before age 62",
    description:
      "Retiring at MRA with only 10 years of service results in a 5% reduction for each year you're under 62.",
    icon: Calendar,
  },
];

// Schema markup for the calculator tool
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "FERS Annuity Calculator 2026",
  description: "Free FERS pension calculator for federal employees with COLA projections",
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
      name: "How is the FERS annuity calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The basic formula is: High-3 Salary x Years of Service x Multiplier (1% or 1.1%). You get the 1.1% multiplier if you retire at age 62 or older with 20 or more years of service."
      }
    },
    {
      "@type": "Question",
      name: "What is the High-3 salary for FERS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your High-3 is the average of your highest 3 consecutive years of basic pay. This typically includes your salary and locality pay but excludes overtime, bonuses, and most special payments."
      }
    },
    {
      "@type": "Question",
      name: "Do FERS annuities receive COLA increases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, FERS annuities receive annual Cost-of-Living Adjustments. If the CPI increase is 2% or less, you get the full amount. If it's between 2-3%, you get 2%. If over 3%, you get the CPI minus 1%."
      }
    },
    {
      "@type": "Question",
      name: "When can I retire under FERS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FERS offers several retirement options: MRA with 30 years (immediate), age 60 with 20 years, age 62 with 5 years, or MRA with 10 years (reduced benefits). Your MRA depends on your birth year, typically 56-57."
      }
    },
    {
      "@type": "Question",
      name: "Should I elect a survivor benefit for my spouse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're married, the law requires full survivor benefits unless your spouse consents in writing to a lesser amount. The 50% survivor benefit reduces your annuity by 10%, while the 25% option reduces it by 5%."
      }
    }
  ]
};

export default function FERSAnnuityCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <FERSAnnuityCalculator />

      {/* Formula Reference */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              FERS Annuity Formulas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {annuityFormulas.map((formula, index) => {
                const Icon = formula.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">
                          {formula.title}
                        </h3>
                        <div className="bg-slate-800 rounded-lg px-3 py-2 mb-2">
                          <code className="text-blue-400 text-sm">{formula.formula}</code>
                        </div>
                        <p className="text-slate-400 text-sm">
                          {formula.description}
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

      {/* Retirement Eligibility */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                FERS Retirement Eligibility
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 px-4 text-left text-slate-400 font-semibold">Retirement Type</th>
                    <th className="py-3 px-4 text-left text-slate-400 font-semibold">Age</th>
                    <th className="py-3 px-4 text-left text-slate-400 font-semibold">Years of Service</th>
                    <th className="py-3 px-4 text-left text-slate-400 font-semibold">Benefit Reduction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="bg-green-500/5">
                    <td className="py-3 px-4 text-white font-medium">Immediate (MRA+30)</td>
                    <td className="py-3 px-4 text-slate-300">MRA (56-57)</td>
                    <td className="py-3 px-4 text-slate-300">30+ years</td>
                    <td className="py-3 px-4 text-green-400">None</td>
                  </tr>
                  <tr className="bg-green-500/5">
                    <td className="py-3 px-4 text-white font-medium">Immediate (60+20)</td>
                    <td className="py-3 px-4 text-slate-300">60+</td>
                    <td className="py-3 px-4 text-slate-300">20+ years</td>
                    <td className="py-3 px-4 text-green-400">None</td>
                  </tr>
                  <tr className="bg-blue-500/5">
                    <td className="py-3 px-4 text-white font-medium">Immediate (62+5)</td>
                    <td className="py-3 px-4 text-slate-300">62+</td>
                    <td className="py-3 px-4 text-slate-300">5+ years</td>
                    <td className="py-3 px-4 text-blue-400">None (1.1% multiplier!)</td>
                  </tr>
                  <tr className="bg-amber-500/5">
                    <td className="py-3 px-4 text-white font-medium">MRA+10 (Early)</td>
                    <td className="py-3 px-4 text-slate-300">MRA (56-57)</td>
                    <td className="py-3 px-4 text-slate-300">10+ years</td>
                    <td className="py-3 px-4 text-amber-400">5% per year before 62</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">Deferred</td>
                    <td className="py-3 px-4 text-slate-300">62</td>
                    <td className="py-3 px-4 text-slate-300">5+ years</td>
                    <td className="py-3 px-4 text-slate-400">None (no FEHB eligibility)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-blue-400 text-sm">
                <strong>Note:</strong> Your Minimum Retirement Age (MRA) depends on your birth year.
                For those born in 1970 or later, the MRA is 57. Earlier birth years have MRAs between 55-57.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* COLA Information */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-amber-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                FERS COLA (Cost-of-Living Adjustments)
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">How FERS COLA Works</h3>
              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-slate-300 mb-2">
                    FERS COLAs are based on the Consumer Price Index (CPI-W) but are capped:
                  </p>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>If CPI increase is <strong className="text-white">2% or less</strong>: You get the full COLA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>If CPI increase is <strong className="text-white">2-3%</strong>: You get 2%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>If CPI increase is <strong className="text-white">over 3%</strong>: You get CPI minus 1%</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                  <p className="text-amber-400 font-semibold mb-2">Important: COLA Timing</p>
                  <p className="text-slate-300 text-sm">
                    FERS retirees under age 62 do not receive COLAs on their basic annuity (though COLAs
                    still apply to the FERS Supplement). Once you turn 62, your annuity will receive
                    annual COLAs each January.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gold Bridge Strategy */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <Info className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Protect Your FERS Pension with Gold
                  </h2>
                </div>
              </div>
              <p className="text-slate-300 mb-6">
                Your FERS annuity provides stable income, but COLA caps mean inflation can erode purchasing power over time.
                Federal employees should consider diversifying beyond TSP and FERS with a Gold IRA for inflation protection.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-amber-400 font-semibold mb-1">COLA Gap</p>
                  <p className="text-slate-400 text-sm">FERS COLAs are capped below true inflation in high-inflation years</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-amber-400 font-semibold mb-1">Gold Hedge</p>
                  <p className="text-slate-400 text-sm">Gold historically rises during high inflation periods</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-amber-400 font-semibold mb-1">TSP Rollover</p>
                  <p className="text-slate-400 text-sm">Roll TSP to a Gold IRA after separation or at 59 1/2</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              FERS Annuity FAQ
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What counts as creditable service for FERS?",
                  a: "Creditable service includes all federal civilian service, certain military service (if you make a deposit), and any service credit you've purchased. Part-time service counts proportionally based on hours worked.",
                },
                {
                  q: "Can I increase my High-3 average before retiring?",
                  a: "Yes! Strategies include: getting promoted, moving to a higher locality pay area, maximizing within-grade increases, or taking temporary assignments with higher pay. Even your final years matter significantly.",
                },
                {
                  q: "Is my FERS annuity taxable?",
                  a: "Most of your FERS annuity is taxable as ordinary income. A small portion may be tax-free as a return of your after-tax contributions. State taxation varies - some states don't tax federal pensions.",
                },
                {
                  q: "What happens to my annuity if I die?",
                  a: "If you elected a survivor benefit, your surviving spouse receives 25% or 50% of your annuity for life. Without a survivor election, the annuity stops at your death (though there may be a lump-sum payment of remaining contributions).",
                },
                {
                  q: "Can I work after retiring from FERS?",
                  a: "Yes, with some considerations. Working for the federal government may affect your annuity. Private sector work doesn't affect your FERS annuity but may affect your FERS Supplement (earnings test) if you're under 62.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group"
                >
                  <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                    <span className="text-white font-medium pr-4">{faq.q}</span>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform">
                      {"\u25BC"}
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

      {/* Related Tools */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Related Federal Employee Tools
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="/tools/fers-supplement-calculator"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  FERS Supplement Calculator
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Calculate your SRS bridge payment
                </p>
              </a>
              <a
                href="/tools/tsp-calculator"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  TSP Calculator
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Project your TSP balance at retirement
                </p>
              </a>
              <a
                href="/tools/fers-calculator"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Complete FERS Calculator
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  All-in-one FERS retirement planning
                </p>
              </a>
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
                    This calculator provides estimates based on standard FERS formulas.
                    Your actual annuity is calculated by OPM and may differ based on your
                    specific employment history, sick leave credit, and other factors.
                    This is not official guidance. Contact your HR office or OPM for
                    definitive calculations.
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
            headline="Diversify Your Federal Retirement"
            subheadline="Federal employees can roll TSP funds into a Gold IRA after separation. Augusta Precious Metals specializes in helping federal retirees protect their savings from inflation."
            trackSource="tools-fers-annuity-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
