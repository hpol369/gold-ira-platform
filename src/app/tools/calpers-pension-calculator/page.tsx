import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CalPERSPensionCalculator } from "@/components/tools/CalPERSPensionCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Building2,
  Shield,
  TrendingUp,
  Scale,
  Heart,
  Clock,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CalPERS Pension Calculator 2026 | Advanced Benefit Estimator",
  description:
    "Advanced CalPERS pension calculator with employer-specific formulas, reciprocity support, optimal retirement age analysis, and health benefits eligibility. State, school, local, and safety employees.",
  keywords: [
    "calpers pension calculator",
    "calpers benefit estimator",
    "calpers retirement calculator",
    "calpers state employee",
    "calpers local government",
    "calpers safety",
    "calpers reciprocity",
    "calpers health benefits",
    "california pension calculator",
    "calpers optimal retirement age",
  ],
};

const employerComparison = [
  {
    employer: "State of California",
    classic: "2% @ 55",
    pepra: "2% @ 62",
    healthVesting: "10 years",
    notes: "Includes CSU, various state agencies",
  },
  {
    employer: "School Districts",
    classic: "2% @ 55",
    pepra: "2% @ 62",
    healthVesting: "Varies",
    notes: "Classified (non-teaching) employees",
  },
  {
    employer: "Local Government",
    classic: "2% @ 60",
    pepra: "2% @ 62",
    healthVesting: "20 years",
    notes: "Cities, counties, special districts",
  },
  {
    employer: "Public Safety",
    classic: "3% @ 50",
    pepra: "2.7% @ 57",
    healthVesting: "20 years",
    notes: "Police, fire, corrections",
  },
];

const reciprocitySystems = [
  {
    system: "CalSTRS",
    description: "California State Teachers Retirement System",
    note: "For educators who also worked in non-teaching public positions",
  },
  {
    system: "UCRS",
    description: "University of California Retirement System",
    note: "UC employees who also worked for state/local government",
  },
  {
    system: "1937 Act County",
    description: "County retirement systems (LA County, etc.)",
    note: "20 California counties with their own systems",
  },
  {
    system: "JRS/LCSA",
    description: "Judges and Legislators retirement systems",
    note: "Elected officials and judicial officers",
  },
];

// Schema markup for the calculator tool
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CalPERS Pension Calculator 2026",
  description: "Advanced California Public Employees Retirement System pension calculator with employer-specific formulas and reciprocity support",
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
      name: "What is CalPERS reciprocity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reciprocity allows you to combine service credit from multiple California public retirement systems (CalPERS, CalSTRS, UCRS, 37 Act Counties) for benefit calculation. Your highest salary from any reciprocal employer can be used to calculate benefits from all systems."
      }
    },
    {
      "@type": "Question",
      name: "How do I qualify for CalPERS retiree health benefits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Health benefits vesting depends on your employer. State employees typically vest after 10 years of service, while local government employees often need 20 years. You must retire from a CalPERS-covered position to receive retiree health benefits."
      }
    },
    {
      "@type": "Question",
      name: "What is the optimal retirement age for CalPERS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The optimal retirement age balances a higher monthly benefit (by waiting longer) against more total payments (by retiring earlier). For most members, the optimal age that maximizes lifetime benefits to age 85 is typically around age 60-62, though this varies based on individual circumstances."
      }
    },
    {
      "@type": "Question",
      name: "Why are CalPERS formulas different for different employers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each employer contracts with CalPERS for specific benefit formulas. State employees traditionally have the 2%@55 formula, while many local governments chose the 2%@60 formula. Public safety (police, fire) typically have enhanced formulas like 3%@50. PEPRA (2013+) standardized formulas for new members."
      }
    },
    {
      "@type": "Question",
      name: "Can I roll my CalPERS pension into a Gold IRA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your CalPERS defined benefit pension cannot be rolled over - it provides guaranteed monthly payments for life. However, if you have other retirement accounts like a 457(b) deferred compensation plan, 403(b), or any pre-tax contributions to CalPERS, those may be eligible for rollover to a Gold IRA after separation."
      }
    }
  ]
};

export default function CalPERSPensionCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <CalPERSPensionCalculator />

      {/* Employer Formula Comparison */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-amber-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                CalPERS Formulas by Employer Type
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Employer Type</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Classic Formula</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">PEPRA Formula</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Health Vesting</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employerComparison.map((row, index) => (
                      <tr key={row.employer} className={`border-b border-white/5 ${index % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                        <td className="px-6 py-4 text-white font-medium">{row.employer}</td>
                        <td className="px-6 py-4 text-green-400">{row.classic}</td>
                        <td className="px-6 py-4 text-amber-400">{row.pepra}</td>
                        <td className="px-6 py-4 text-slate-400">{row.healthVesting}</td>
                        <td className="px-6 py-4 text-slate-500 text-sm">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reciprocity Explained */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Scale className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Understanding CalPERS Reciprocity
                </h2>
                <p className="text-slate-400">Combine service from multiple California public retirement systems</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {reciprocitySystems.map((system) => (
                <div key={system.system} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-semibold text-lg mb-1">{system.system}</h3>
                  <p className="text-blue-400 text-sm mb-2">{system.description}</p>
                  <p className="text-slate-400 text-sm">{system.note}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">How Reciprocity Benefits You</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Combined Service Credit</p>
                    <p className="text-slate-400 text-sm">All service years count toward vesting and benefit calculation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Highest Salary Used</p>
                    <p className="text-slate-400 text-sm">Your highest final compensation from any system applies to all</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Concurrent Retirement</p>
                    <p className="text-slate-400 text-sm">Retire from all systems on the same date for maximum benefits</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">No Gap in Employment</p>
                    <p className="text-slate-400 text-sm">Must maintain reciprocity by not breaking service more than 6 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Health Benefits Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-red-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                CalPERS Retiree Health Benefits
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-4">Understanding Health Vesting</h3>
                <p className="text-slate-400 mb-4">
                  CalPERS provides access to health insurance for eligible retirees. To qualify, you must:
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    Meet your employer&apos;s vesting requirement (typically 10-20 years)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    Retire directly from CalPERS-covered employment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    Employer must participate in CalPERS health program
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                  <h4 className="text-green-400 font-semibold mb-2">State Employees</h4>
                  <p className="text-slate-400 text-sm">
                    100% employer health contribution after 10 years of service (100/90 formula).
                    50% at 10 years, increasing 5% per year.
                  </p>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
                  <h4 className="text-amber-400 font-semibold mb-2">Local Government</h4>
                  <p className="text-slate-400 text-sm">
                    Varies by employer contract. Many require 20 years for full vesting.
                    Some use 10 years minimum with increasing contributions.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium mb-1">Medicare Coordination</p>
                    <p className="text-slate-400 text-sm">
                      At age 65, Medicare becomes your primary coverage. CalPERS health plans coordinate
                      with Medicare, often reducing your out-of-pocket costs significantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Optimal Retirement Timing */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-green-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Finding Your Optimal Retirement Date
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-white font-semibold text-lg mb-4">Factors to Consider</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-amber-400 font-medium mb-2">Reasons to Wait Longer</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      Higher age factor = larger monthly benefit
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      More service credit years
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      Higher final compensation
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      More time to vest in health benefits
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-400 font-medium mb-2">Reasons to Retire Earlier</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      More years receiving payments
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      Enjoy retirement while healthy
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      Time for second career or consulting
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      Health or life circumstances
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-400 font-semibold mb-2">Pro Tip: The Break-Even Point</p>
                  <p className="text-slate-300 text-sm">
                    Our calculator shows the optimal retirement age based on maximizing lifetime benefits to age 85.
                    However, your personal situation matters most. Consider using our comparison table to find
                    your &quot;break-even&quot; point - when waiting longer would require living past a certain age to
                    make up for the payments you missed by not retiring earlier.
                  </p>
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
              CalPERS Pension Calculator FAQ
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What is CalPERS reciprocity and how does it work?",
                  a: "Reciprocity allows you to combine service credit from multiple California public retirement systems (CalPERS, CalSTRS, UCRS, 37 Act Counties). Your highest salary from any reciprocal employer is used to calculate benefits from all systems. You must maintain continuous membership without a break longer than 6 months.",
                },
                {
                  q: "How do I qualify for CalPERS retiree health benefits?",
                  a: "You must meet your employer's vesting requirement (typically 10 years for state, 20 years for local government) and retire directly from a CalPERS-covered position. Your employer must also participate in the CalPERS health program.",
                },
                {
                  q: "Why does my employer type affect my CalPERS formula?",
                  a: "Each employer contracts with CalPERS for specific benefit formulas and contribution rates. State employees traditionally have 2%@55, while local governments often chose 2%@60. Public safety has enhanced formulas. PEPRA (2013) standardized formulas for new members.",
                },
                {
                  q: "What is the 'optimal' retirement age?",
                  a: "The optimal age mathematically maximizes your lifetime benefits. It balances waiting longer for a higher monthly benefit against starting payments earlier. Our calculator projects this to age 85, but your personal health, financial needs, and life goals should guide your decision.",
                },
                {
                  q: "Can I supplement my CalPERS pension with other investments?",
                  a: "Absolutely. Many California public employees use 457(b) deferred compensation plans, 403(b) plans (for school employees), IRAs, and Gold IRAs to supplement their CalPERS pension. This diversification helps protect against inflation beyond the 2% COLA.",
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

      {/* Related Tools */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Related California Retirement Tools
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/tools/calpers-retirement-calculator"
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <Shield className="h-8 w-8 text-amber-400 mb-3" />
                <h3 className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                  CalPERS Retirement Calculator
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Simple CalPERS calculator with COLA projections
                </p>
              </Link>
              <Link
                href="/tools/calstrs-calculator"
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <Shield className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                  CalSTRS Calculator
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  For California teachers and educators
                </p>
              </Link>
              <Link
                href="/tools/social-security-calculator"
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <Shield className="h-8 w-8 text-green-400 mb-3" />
                <h3 className="text-white font-semibold group-hover:text-green-400 transition-colors">
                  Social Security Calculator
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Calculate WEP/GPO impact on benefits
                </p>
              </Link>
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
                    This advanced calculator provides estimates based on standard CalPERS formulas. Actual
                    benefits may vary based on your specific employer contract, service credit purchases,
                    reciprocity agreements, and other factors. For official benefit estimates, please use
                    myCalPERS or contact CalPERS directly. This is not financial or tax advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="California Public Employees: Protect Your Pension from Inflation"
            subheadline="Your CalPERS pension provides guaranteed income, but the 2% COLA may not keep pace with actual inflation. Many California state employees supplement their pension with a Gold IRA to maintain purchasing power."
            trackSource="tools-calpers-pension-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
