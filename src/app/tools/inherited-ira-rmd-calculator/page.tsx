import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InheritedIRARMDCalculator } from "@/components/tools/InheritedIRARMDCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Users,
  Clock,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Inherited IRA RMD Calculator 2026 | SECURE Act Rules",
  description:
    "Free inherited IRA RMD calculator. Calculate distributions under SECURE Act 10-year rule for beneficiaries, spouses, and EDBs.",
  keywords: [
    "inherited ira rmd calculator",
    "inherited ira calculator",
    "beneficiary ira rmd calculator",
    "inherited ira rules",
    "10 year rule inherited ira",
    "secure act inherited ira",
    "inherited ira distribution rules",
    "beneficiary ira calculator",
    "stretch ira calculator",
    "inherited gold ira",
  ],
};

const keyRules = [
  {
    title: "10-Year Rule (SECURE Act)",
    description:
      "Most non-spouse beneficiaries must empty inherited IRAs within 10 years of the original owner's death. Annual RMDs may be required if owner died after RBD.",
    icon: Clock,
  },
  {
    title: "Spouse Special Options",
    description:
      "Surviving spouses can do a rollover to their own IRA, keep it as inherited, or disclaim. Each option has different RMD and tax implications.",
    icon: Users,
  },
  {
    title: "Eligible Designated Beneficiaries",
    description:
      "Minor children, disabled individuals, chronically ill, or those not more than 10 years younger can still use life expectancy stretch.",
    icon: CheckCircle2,
  },
  {
    title: "Pre-2020 Deaths",
    description:
      "If the original owner died before January 1, 2020, the old stretch rules may still apply, allowing RMDs over your life expectancy.",
    icon: Calendar,
  },
];

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Inherited IRA RMD Calculator 2026",
  description:
    "Calculate Required Minimum Distributions for inherited IRAs under SECURE Act rules including 10-year rule and EDB provisions",
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
      name: "What is the 10-year rule for inherited IRAs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The SECURE Act requires most non-spouse beneficiaries who inherit an IRA after 2019 to completely empty the account within 10 years of the original owner's death. If the owner died after their Required Beginning Date (RBD), annual RMDs are also required during those 10 years.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to take annual RMDs from an inherited IRA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends. If the original owner died after their RBD (age 73+ under SECURE 2.0), annual RMDs are required. If they died before their RBD, you only need to empty the account by year 10 - no annual RMDs required. Eligible Designated Beneficiaries (EDBs) follow different rules based on life expectancy.",
      },
    },
    {
      "@type": "Question",
      name: "What are my options as a spouse inheriting an IRA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Surviving spouses have several options: 1) Roll the inherited IRA into your own IRA (RMDs based on your age), 2) Keep it as an inherited IRA (can access before 59.5 without penalty), 3) Disclaim and let it pass to contingent beneficiaries, or 4) Take a lump sum distribution (immediate tax hit).",
      },
    },
    {
      "@type": "Question",
      name: "What is an Eligible Designated Beneficiary (EDB)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EDBs can still use the life expectancy stretch method. They include: surviving spouses, minor children of the deceased (until majority), disabled individuals, chronically ill individuals, and beneficiaries not more than 10 years younger than the deceased.",
      },
    },
    {
      "@type": "Question",
      name: "Can I roll an inherited IRA into a Gold IRA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Surviving spouses who do a spousal rollover can convert the inherited IRA to a Gold IRA since it becomes their own IRA. Non-spouse beneficiaries generally cannot do a rollover but can transfer to another custodian that offers precious metals within an inherited IRA structure.",
      },
    },
  ],
};

export default function InheritedIRARMDCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <InheritedIRARMDCalculator />

      {/* Key Rules Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Inherited IRA Rules You Need to Know
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyRules.map((rule, index) => {
                const Icon = rule.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 shadow-sm rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#B22234]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-[#B22234]" />
                      </div>
                      <div>
                        <h3 className="text-slate-900 font-semibold mb-2">
                          {rule.title}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {rule.description}
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

      {/* Beneficiary Types Explained */}
      <section className="py-16 bg-slate-100/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Scale className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                Beneficiary Categories Explained
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-600 mb-3">
                  Eligible Designated Beneficiaries (EDBs)
                </h3>
                <p className="text-slate-500 mb-4">
                  These beneficiaries can still use the &quot;stretch&quot; method based on life expectancy:
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Surviving Spouse:</strong> Most flexible options including rollover</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Minor Children:</strong> Until age of majority (then 10-year rule kicks in)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Disabled Individuals:</strong> As defined by IRS code section 72(m)(7)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Chronically Ill:</strong> Unable to perform daily living activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Not More Than 10 Years Younger:</strong> Siblings, friends, etc. close in age</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#B22234] mb-3">
                  Designated Beneficiaries (10-Year Rule)
                </h3>
                <p className="text-slate-500 mb-4">
                  Most non-spouse individual beneficiaries fall into this category:
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-[#B22234] mt-0.5 flex-shrink-0" />
                    <span>Adult children, grandchildren, nieces, nephews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-[#B22234] mt-0.5 flex-shrink-0" />
                    <span>Friends or non-family members named as beneficiary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-[#B22234] mt-0.5 flex-shrink-0" />
                    <span>Must empty account by December 31 of 10th year after death</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-red-300">If owner died after RBD, annual RMDs are REQUIRED in years 1-9</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-600 mb-3">
                  Non-Designated Beneficiaries (5-Year Rule)
                </h3>
                <p className="text-slate-500 mb-4">
                  Entities that are not individuals:
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Estates named as beneficiary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Charities and non-profit organizations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Non-qualifying trusts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Must distribute entire account within 5 years</span>
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
              Inherited IRA FAQ
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What is the 10-year rule for inherited IRAs?",
                  a: "The SECURE Act requires most non-spouse beneficiaries who inherit an IRA after 2019 to completely empty the account within 10 years of the original owner's death. If the owner died after their Required Beginning Date (RBD), annual RMDs are also required during those 10 years.",
                },
                {
                  q: "Do I have to take annual RMDs from an inherited IRA?",
                  a: "It depends. If the original owner died after their RBD (age 73+ under SECURE 2.0), annual RMDs are required. If they died before their RBD, you only need to empty the account by year 10.",
                },
                {
                  q: "What are my options as a spouse inheriting an IRA?",
                  a: "Surviving spouses have the most flexibility: 1) Roll into your own IRA, 2) Keep as inherited IRA, 3) Disclaim, or 4) Take lump sum. Each option has different RMD rules and tax implications.",
                },
                {
                  q: "Can I roll an inherited IRA into a Gold IRA?",
                  a: "Surviving spouses who do a spousal rollover can convert to a Gold IRA since it becomes their own IRA. Non-spouse beneficiaries can transfer to a custodian offering precious metals within an inherited IRA structure.",
                },
                {
                  q: "What happens if I miss an inherited IRA RMD?",
                  a: "The penalty is 25% of the amount that should have been withdrawn (reduced from 50% by SECURE 2.0). If corrected within 2 years, the penalty drops to 10%. File Form 5329 to request a waiver for reasonable cause.",
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
                    This calculator provides estimates based on SECURE Act and SECURE 2.0 rules.
                    Inherited IRA rules are complex and depend on many factors including the date
                    of death, beneficiary relationship, and whether the owner had started RMDs.
                    IRS regulations continue to evolve. Please consult a qualified tax professional
                    or estate attorney for advice specific to your situation.
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
            headline="Need Help with Your Inherited IRA?"
            subheadline="Our specialists can help you understand your distribution options and explore whether a Gold IRA makes sense for preserving inherited wealth."
            trackSource="tools-inherited-ira-rmd-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
