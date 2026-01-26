import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FERSSupplementCalculator } from "@/components/tools/FERSSupplementCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Info,
  Calculator,
  Clock,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FERS Supplement Calculator 2026 | Free SRS Calculator for Federal Employees",
  description:
    "Free FERS Special Retirement Supplement (SRS) calculator. Calculate your bridge payment from FERS retirement until age 62. Includes eligibility checker and total value projection.",
  keywords: [
    "fers supplement calculator",
    "fers special retirement supplement",
    "srs calculator",
    "fers srs calculator",
    "federal retirement supplement",
    "fers bridge to social security",
    "special retirement supplement calculator",
    "fers supplement eligibility",
  ],
};

const eligibilityRequirements = [
  {
    title: "MRA + 30 Years",
    description:
      "Retire at your Minimum Retirement Age (usually 57) with 30 or more years of service.",
    icon: Calendar,
  },
  {
    title: "Age 60 + 20 Years",
    description:
      "Retire at age 60 or older with at least 20 years of creditable service.",
    icon: Briefcase,
  },
  {
    title: "Before Age 62",
    description:
      "Must retire before reaching age 62. The supplement bridges the gap until Social Security eligibility.",
    icon: Clock,
  },
  {
    title: "Immediate Retirement",
    description:
      "Must be an immediate (unreduced) retirement. MRA+10 early retirements do NOT qualify for the supplement.",
    icon: CheckCircle2,
  },
];

// Schema markup for the calculator tool
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "FERS Supplement Calculator 2026",
  description: "Free FERS Special Retirement Supplement calculator for federal employees",
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
      name: "What is the FERS Special Retirement Supplement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The FERS Special Retirement Supplement (SRS) is a benefit paid to eligible FERS employees who retire before age 62. It approximates the Social Security benefit earned during federal service and bridges the gap until you can collect Social Security at 62."
      }
    },
    {
      "@type": "Question",
      name: "How is the FERS Supplement calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The formula is: (Years of Service / 40) x Estimated Social Security Benefit at Age 62. For example, with 30 years of service and a projected $2,000 SS benefit: (30/40) x $2,000 = $1,500 per month."
      }
    },
    {
      "@type": "Question",
      name: "Who is eligible for the FERS Supplement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You must retire before age 62 with either: (1) MRA with 30 years of service (immediate retirement), or (2) Age 60 with 20 years of service. MRA+10 early retirements do NOT qualify."
      }
    },
    {
      "@type": "Question",
      name: "Is the FERS Supplement subject to an earnings test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you work and earn above the annual exempt amount ($23,400 in 2025), your supplement is reduced by $1 for every $2 earned above the limit. This is similar to the Social Security earnings test."
      }
    },
    {
      "@type": "Question",
      name: "When does the FERS Supplement end?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The FERS Supplement ends when you reach age 62, at which point you become eligible for actual Social Security benefits. It also ends if you become eligible for Social Security disability benefits."
      }
    }
  ]
};

export default function FERSSupplementCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <FERSSupplementCalculator />

      {/* Eligibility Requirements */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              FERS Supplement Eligibility Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {eligibilityRequirements.map((req, index) => {
                const Icon = req.icon;
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
                          {req.title}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          {req.description}
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

      {/* How It Works Section */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Calculator className="h-6 w-6 text-blue-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                How the FERS Supplement Works
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">The SRS Formula</h3>
              <div className="bg-slate-800 rounded-lg p-4 mb-4">
                <p className="text-blue-400 font-mono text-lg text-center">
                  SRS = (Years of Service / 40) x Estimated SS Benefit at 62
                </p>
              </div>
              <div className="space-y-3 text-slate-400">
                <p><strong className="text-white">Step 1:</strong> Determine your total years of creditable federal service.</p>
                <p><strong className="text-white">Step 2:</strong> Find your estimated Social Security benefit at age 62 (from ssa.gov).</p>
                <p><strong className="text-white">Step 3:</strong> Divide years of service by 40 and multiply by your SS estimate.</p>
              </div>
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 font-medium mb-1">Example Calculation:</p>
                <p className="text-slate-300 text-sm">
                  30 years of service, $2,000 SS estimate: (30 / 40) x $2,000 = <strong className="text-white">$1,500/month</strong>
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">SRS Payment Timeline</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500/30"></div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 relative">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Retirement Date</p>
                      <p className="text-slate-400 text-sm">SRS payments begin 30 days after your retirement date</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 relative">
                    <div className="w-8 h-8 bg-blue-500/50 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Monthly Payments</p>
                      <p className="text-slate-400 text-sm">Receive SRS along with your FERS annuity each month</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 relative">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Age 62</p>
                      <p className="text-slate-400 text-sm">SRS payments end - you become eligible for actual Social Security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gold Bridge Strategy */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <Info className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    The Gold Bridge Strategy for Federal Employees
                  </h2>
                </div>
              </div>
              <p className="text-slate-300 mb-6">
                Your FERS Supplement provides valuable income until age 62, but inflation can erode its purchasing power.
                Federal employees should consider diversifying beyond TSP and FERS with a Gold IRA for inflation protection.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-amber-400 font-semibold mb-1">TSP Rollover</p>
                  <p className="text-slate-400 text-sm">After separation, roll TSP funds into a Gold IRA</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-amber-400 font-semibold mb-1">Inflation Hedge</p>
                  <p className="text-slate-400 text-sm">Gold historically maintains purchasing power</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-amber-400 font-semibold mb-1">Diversification</p>
                  <p className="text-slate-400 text-sm">Balance TSP stock/bond exposure with physical gold</p>
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
              FERS Supplement FAQ
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What is the FERS Special Retirement Supplement?",
                  a: "The SRS is a benefit paid to eligible FERS employees who retire before age 62. It approximates the Social Security benefit earned during your federal career and \"bridges\" the gap until you can collect actual Social Security at 62.",
                },
                {
                  q: "Can I get the FERS Supplement if I take MRA+10 early retirement?",
                  a: "No. The FERS Supplement is only available for immediate, unreduced retirements. MRA+10 retirements (with the 5% per year reduction) do not qualify for the supplement.",
                },
                {
                  q: "Is the FERS Supplement taxable?",
                  a: "Yes, the FERS Supplement is fully taxable as ordinary income, just like your FERS annuity. You can have federal taxes withheld from your combined payment.",
                },
                {
                  q: "Does the FERS Supplement receive COLA increases?",
                  a: "No. Unlike your FERS annuity, the FERS Supplement does not receive cost-of-living adjustments. The amount stays the same from retirement until age 62.",
                },
                {
                  q: "What happens if I return to federal service?",
                  a: "If you return to federal employment, your FERS Supplement payments will stop. They will resume when you separate from service again, if you're still under age 62.",
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
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Related Federal Employee Tools
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="/tools/fers-annuity-calculator"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  FERS Annuity Calculator
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Calculate your FERS pension benefit
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
                href="/tools/social-security-calculator"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Social Security Calculator
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Estimate your SS benefits
                </p>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-800/30">
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
                    This calculator provides estimates based on the standard FERS Supplement formula.
                    Your actual supplement amount is calculated by OPM and may differ based on your
                    specific employment history and Social Security earnings record. This is not
                    official guidance. Contact your HR office or OPM for definitive calculations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Diversify Your Federal Retirement"
            subheadline="Federal employees can roll TSP funds into a Gold IRA after separation. Augusta Precious Metals specializes in helping federal retirees protect their savings from inflation."
            trackSource="tools-fers-supplement-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
