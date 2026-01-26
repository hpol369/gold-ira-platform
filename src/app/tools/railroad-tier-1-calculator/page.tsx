import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { RailroadTier1Calculator } from "@/components/tools/RailroadTier1Calculator";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  Train,
  AlertTriangle,
  Info,
  Calculator,
  FileWarning,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Railroad Tier 1 Calculator 2026 | RRB Tier 1 Benefits Calculator",
  description:
    "Free Railroad Tier 1 calculator for 2026. Calculate your Social Security equivalent benefits with WEP and GPO considerations. Compare railroad vs non-railroad earnings impact.",
  keywords: [
    "railroad tier 1 calculator",
    "rrb tier 1 benefits",
    "railroad tier 1 benefits",
    "tier 1 railroad retirement",
    "railroad social security",
    "wep railroad",
    "gpo railroad",
    "railroad earnings record",
  ],
};

const tier1Facts = [
  {
    title: "Social Security Equivalent",
    description:
      "Tier I is calculated using the same formula as Social Security, combining both railroad and non-railroad earnings in your calculation.",
    icon: Calculator,
  },
  {
    title: "WEP May Apply",
    description:
      "If you have a pension from work not covered by Social Security, the Windfall Elimination Provision may reduce your Tier I benefit.",
    icon: FileWarning,
  },
  {
    title: "35-Year Calculation",
    description:
      "Like Social Security, Tier I uses your highest 35 years of indexed earnings. Fewer years means zeros in the calculation.",
    icon: Info,
  },
  {
    title: "COLA Protected",
    description:
      "Tier I benefits receive the same annual cost-of-living adjustments as Social Security, protecting against inflation.",
    icon: Train,
  },
];

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Railroad Tier 1 Calculator 2026",
  description:
    "Free Railroad Retirement Board Tier I benefits calculator with WEP and GPO considerations",
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
      name: "What is Railroad Tier 1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tier I is the Social Security equivalent portion of Railroad Retirement benefits. It's calculated using the same formula as Social Security, combining both your railroad and non-railroad earnings. Railroad workers receive Tier I instead of Social Security.",
      },
    },
    {
      "@type": "Question",
      name: "How does WEP affect Railroad Tier 1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Windfall Elimination Provision (WEP) can reduce your Tier I benefit if you also receive a pension from work not covered by Social Security (like some government jobs). WEP can reduce benefits by up to $587/month in 2024. Having 30+ years of substantial earnings eliminates WEP.",
      },
    },
    {
      "@type": "Question",
      name: "Do non-railroad years count toward Tier 1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Both railroad and non-railroad earnings count toward your Tier I calculation. The combined earnings are used to determine your Primary Insurance Amount (PIA), similar to how Social Security calculates benefits.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Tier 1 and Tier 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tier I is the Social Security equivalent based on all covered earnings. Tier II is an additional railroad pension based only on railroad service and railroad earnings. Together they provide railroad workers with significantly more than Social Security alone.",
      },
    },
  ],
};

export default function RailroadTier1CalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

        <Container>
          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
              <Train className="h-4 w-4" />
              Railroad Retirement Tool
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Railroad Tier 1 Calculator
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Calculate your Tier I (Social Security equivalent) benefit with WEP and GPO
              considerations. See how mixed railroad and non-railroad work affects your benefits.
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator Section */}
      <RailroadTier1Calculator />

      {/* Key Facts Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Understanding Tier I Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tier1Facts.map((fact, index) => {
                const Icon = fact.icon;
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
                          {fact.title}
                        </h3>
                        <p className="text-slate-400 text-sm">{fact.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* WEP/GPO Explanation */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <FileWarning className="h-6 w-6 text-amber-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                WEP and GPO: What Railroad Workers Need to Know
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">
                  Windfall Elimination Provision (WEP)
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">*</span>
                    Applies if you receive a pension from work NOT covered by SS
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">*</span>
                    Reduces the 90% factor in the benefit formula to as low as 40%
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">*</span>
                    Maximum reduction: ~$587/month (2024)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">*</span>
                    30+ years of substantial SS-covered earnings eliminates WEP
                  </li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">
                  Government Pension Offset (GPO)
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">*</span>
                    Affects spousal and survivor benefits only
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">*</span>
                    Reduces these benefits by 2/3 of your government pension
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">*</span>
                    Can completely eliminate spousal/survivor benefits
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">*</span>
                    Does NOT affect your own Tier I benefit
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">
                Good News for Railroad Workers
              </h3>
              <p className="text-slate-300">
                Your <strong>Tier II benefits</strong> (the railroad-specific pension) are{" "}
                <strong>never affected</strong> by WEP or GPO. Even if WEP reduces your
                Tier I, you still receive full Tier II benefits based on your railroad
                service. This is a significant advantage of Railroad Retirement over
                Social Security alone.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* How Tier 1 is Calculated */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              How Tier I Is Calculated
            </h2>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                The PIA Formula (2024)
              </h3>
              <div className="bg-slate-800 rounded-lg p-4 mb-4">
                <p className="text-blue-400 font-mono text-sm">
                  PIA = 90% of first $1,174 AIME<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 32% of AIME from $1,174 to $7,077<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 15% of AIME above $7,077
                </p>
              </div>
              <p className="text-slate-400 text-sm">
                AIME = Average Indexed Monthly Earnings (your highest 35 years of
                earnings, indexed for inflation)
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">35</div>
                <p className="text-slate-400 text-sm">
                  Highest earning years used in calculation
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">62-70</div>
                <p className="text-slate-400 text-sm">
                  Age range for claiming (with early/late adjustments)
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">8%</div>
                <p className="text-slate-400 text-sm">
                  Annual increase for each year you delay past FRA
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Railroad vs Non-Railroad Work */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Mixed Railroad and Non-Railroad Employment
            </h2>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-4">
                    How It Affects Tier I
                  </h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">*</span>
                      Both types of earnings count toward your Tier I calculation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">*</span>
                      Combined earnings determine your AIME
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">*</span>
                      More years of earnings = higher benefit
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">*</span>
                      Need 35 years for maximum Tier I benefit
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-400 mb-4">
                    How It Affects Tier II
                  </h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">*</span>
                      Only railroad employment counts for Tier II
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">*</span>
                      Non-railroad years do NOT add to Tier II
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">*</span>
                      30 years of railroad service = maximum Tier II
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">*</span>
                      This is the &quot;extra&quot; railroad workers receive
                    </li>
                  </ul>
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
              Tier I Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Is Tier I the same as Social Security?",
                  a: "Tier I is calculated using the same formula as Social Security and provides similar benefits. However, it's administered by the Railroad Retirement Board, not the Social Security Administration. Railroad workers receive Tier I instead of Social Security.",
                },
                {
                  q: "Can I get both Tier I and Social Security?",
                  a: "Generally no. Your railroad earnings create Tier I benefits that replace Social Security. If you have limited railroad service (less than 10 years), your credits may transfer to Social Security instead of creating Tier I benefits.",
                },
                {
                  q: "How do I avoid WEP?",
                  a: "To eliminate WEP, you need 30 or more years of 'substantial earnings' from work covered by Social Security. The reduction phases out between 20-30 years. Railroad work counts as SS-covered work for this purpose.",
                },
                {
                  q: "What if I worked for the government?",
                  a: "If you worked for a government employer that didn't participate in Social Security and receive a pension from that work, both WEP (affecting your own benefit) and GPO (affecting spousal/survivor benefits) may apply.",
                },
                {
                  q: "Does Tier I receive COLA increases?",
                  a: "Yes! Tier I benefits receive the same annual cost-of-living adjustments (COLA) as Social Security. Your benefit automatically increases each year to keep pace with inflation.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group"
                >
                  <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                    <span className="text-white font-medium pr-4">{faq.q}</span>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform">
                      ^
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
                    This calculator provides estimates based on simplified formulas and
                    current benefit calculations. Actual Tier I benefits depend on your
                    complete earnings record, WEP/GPO applicability, and RRB
                    determinations. For accurate benefit estimates, review your Railroad
                    Retirement Board Statement of Account or contact the RRB directly.
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
            headline="Protect Your Railroad Benefits"
            subheadline="Understanding your Tier I is the first step. A Gold IRA can help diversify and protect your retirement benefits from inflation and market risk."
            trackSource="tools-railroad-tier-1-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
