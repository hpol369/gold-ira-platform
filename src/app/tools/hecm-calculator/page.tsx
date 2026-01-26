import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HECMCalculator } from "@/components/tools/HECMCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  CheckCircle2,
  Shield,
  Info,
  Home,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HECM Calculator 2026 | Free FHA Reverse Mortgage Calculator",
  description:
    "Free HECM calculator. Calculate FHA reverse mortgage proceeds, compare to proprietary options, and understand MIP costs. 2024 limits included.",
  keywords: [
    "hecm calculator",
    "hecm reverse mortgage calculator",
    "hud reverse mortgage calculator",
    "fha reverse mortgage",
    "home equity conversion mortgage",
    "hecm lending limit 2024",
    "hecm vs proprietary reverse mortgage",
    "hecm mip calculator",
    "reverse mortgage comparison",
  ],
};

const hecmFacts = [
  {
    title: "FHA-Insured Protection",
    description:
      "HECM loans are insured by the Federal Housing Administration, guaranteeing you'll receive your funds even if the lender goes out of business.",
    icon: Shield,
  },
  {
    title: "2024 Lending Limit",
    description:
      "The maximum home value for HECM calculations is $1,149,825. Homes worth more may benefit from proprietary reverse mortgages.",
    icon: Home,
  },
  {
    title: "Mandatory Counseling",
    description:
      "Before applying, you must complete HUD-approved counseling. This protects borrowers by ensuring they understand all terms and risks.",
    icon: Info,
  },
  {
    title: "Non-Recourse Guarantee",
    description:
      "You (or your heirs) will never owe more than your home is worth when sold, even if the loan balance exceeds the home value.",
    icon: CheckCircle2,
  },
];

// Schema markup for the calculator tool
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "HECM Calculator 2026",
  description: "Free HECM reverse mortgage calculator to estimate FHA-insured reverse mortgage proceeds and compare to proprietary options",
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
      name: "What is the HECM lending limit for 2024?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 2024 HECM lending limit is $1,149,825. This is the maximum home value used to calculate your Principal Limit. If your home is worth more, only this amount is considered for a HECM, though you may get more from a proprietary reverse mortgage."
      }
    },
    {
      "@type": "Question",
      name: "What is the difference between HECM and proprietary reverse mortgages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HECM is FHA-insured with a lending limit but offers government-backed protections. Proprietary reverse mortgages are private lender products with no lending limit, making them better for high-value homes. HECMs have annual MIP fees; proprietary loans typically don't."
      }
    },
    {
      "@type": "Question",
      name: "How much does HECM mortgage insurance cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HECM has two MIP charges: an upfront premium of 2% of your home's appraised value (or HECM limit, whichever is less), and an annual premium of 0.5% of the outstanding loan balance, charged monthly."
      }
    },
    {
      "@type": "Question",
      name: "Is HECM better than a proprietary reverse mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For homes under $1.15 million, HECM usually provides more proceeds due to higher PLFs. For high-value homes, proprietary loans may provide more money despite lower PLFs because they use the full home value. Proprietary loans also skip annual MIP costs."
      }
    }
  ]
};

export default function HECMCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <HECMCalculator />

      {/* Important HECM Facts */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Understanding HECM Reverse Mortgages
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {hecmFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-emerald-400" />
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

      {/* MIP Explained Section */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-amber-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                HECM Mortgage Insurance Premium (MIP) Explained
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-amber-400 font-semibold mb-2">Upfront MIP</h4>
                  <div className="text-3xl font-bold text-white mb-2">2%</div>
                  <p className="text-slate-400 text-sm">
                    of appraised home value (or HECM limit, whichever is less). Typically financed into the loan.
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-amber-400 font-semibold mb-2">Annual MIP</h4>
                  <div className="text-3xl font-bold text-white mb-2">0.5%</div>
                  <p className="text-slate-400 text-sm">
                    of outstanding loan balance per year, charged monthly. This adds up significantly over time.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <h4 className="text-amber-400 font-semibold mb-2">What Does MIP Pay For?</h4>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>- Guarantees you receive your loan funds even if the lender fails</li>
                  <li>- Covers the &quot;non-recourse&quot; protection (you never owe more than home value)</li>
                  <li>- Pays the lender if your loan balance exceeds home value at sale</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* When to Choose Each Option */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              HECM vs Proprietary: Which Should You Choose?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
                <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5" /> Choose HECM If...
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Your home value is under $1,149,825</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>You want FHA insurance protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>You want the line of credit growth feature</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>You prefer government-backed consumer protections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>You qualify for all FHA property requirements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <Home className="h-5 w-5" /> Choose Proprietary If...
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Your home is worth over $1.5 million</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>You want to avoid ongoing MIP charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Your property doesn&apos;t meet FHA requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>You want a faster closing process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>You own a high-rise condo or unique property</span>
                  </li>
                </ul>
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
              HECM Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What is the HECM lending limit for 2024?",
                  a: "The 2024 HECM lending limit is $1,149,825. This is the maximum home value used to calculate your Principal Limit. If your home is worth more, only this amount is considered for a HECM - though you may benefit from a proprietary reverse mortgage instead.",
                },
                {
                  q: "How is the HECM Principal Limit calculated?",
                  a: "The Principal Limit = (Home Value or HECM Limit) x PLF. The Principal Limit Factor (PLF) is based on your age (or younger spouse's age) and current interest rates. Older borrowers get higher PLFs, meaning more available funds.",
                },
                {
                  q: "Can my spouse stay in the home if I pass away?",
                  a: "Yes, if your spouse is listed as a co-borrower or eligible non-borrowing spouse. They can remain in the home without making payments as long as they maintain property taxes, insurance, and upkeep. This is a key HECM protection.",
                },
                {
                  q: "What happens to my HECM if I need to move to a nursing home?",
                  a: "If you move out of your home for more than 12 consecutive months (including to a nursing facility), the loan becomes due. This is why planning for long-term care is important before getting a reverse mortgage.",
                },
                {
                  q: "Is HECM counseling really required?",
                  a: "Yes, HUD-approved counseling is mandatory before you can apply for a HECM. The counselor will explain costs, alternatives, and your obligations. This protects borrowers from making uninformed decisions.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group"
                >
                  <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                    <span className="text-white font-medium pr-4">{faq.q}</span>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform">
                      &#9660;
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
                    This calculator provides estimates for educational purposes only. Actual HECM terms,
                    PLFs, and fees vary based on HUD guidelines, lender policies, and your specific situation.
                    The HECM lending limit is updated annually. This is not financial advice. Consult a
                    HUD-approved reverse mortgage counselor before applying.
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
            headline="Diversify Beyond Your Home Equity"
            subheadline="A Gold IRA can provide retirement security and inflation protection without risking your home. Explore how physical gold can complement your retirement strategy."
            trackSource="tools-hecm-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
