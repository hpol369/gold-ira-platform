import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CalSTRSCalculator } from "@/components/tools/CalSTRSCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Info,
  GraduationCap,
  Shield,
  TrendingUp,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CalSTRS Calculator 2026 | Free California Teachers Retirement Estimator",
  description:
    "Free CalSTRS calculator for California teachers. Calculate your pension using official formulas: 2%@60 classic and 2%@62 PEPRA.",
  keywords: [
    "calstrs calculator",
    "calstrs retirement calculator",
    "california teachers retirement",
    "calstrs pension calculator",
    "calstrs 2% at 60",
    "calstrs 2% at 62",
    "calstrs pepra",
    "teacher retirement calculator california",
    "calstrs benefit estimator",
    "california educator pension",
  ],
};

const calstrsFacts = [
  {
    title: "Dedicated to Educators",
    description:
      "CalSTRS serves over 975,000 California educators - teachers, administrators, counselors, and other school employees.",
    icon: GraduationCap,
  },
  {
    title: "No Social Security",
    description:
      "Most CalSTRS members do not participate in Social Security. Your CalSTRS pension is your primary retirement income source.",
    icon: Shield,
  },
  {
    title: "Second Largest Educator Fund",
    description:
      "CalSTRS is the largest educator-only pension fund in the U.S. and second largest overall, managing over $300 billion.",
    icon: TrendingUp,
  },
  {
    title: "Purchasing Power Protection",
    description:
      "CalSTRS provides a 2% annual benefit adjustment to help maintain your purchasing power throughout retirement.",
    icon: DollarSign,
  },
];

const calstrsTimeline = [
  {
    year: "Before 1996",
    change: "Final compensation based on highest 12 months",
    impact: "Most favorable calculation period",
  },
  {
    year: "1996 - 2012",
    change: "Final compensation based on highest 36 months for new hires",
    impact: "Longer averaging period",
  },
  {
    year: "January 1, 2013",
    change: "PEPRA enacted - 2% @ 62 formula for new members",
    impact: "Higher retirement age, lower maximum factor",
  },
  {
    year: "2014 - Present",
    change: "Increased contribution rates to improve funding",
    impact: "Higher member contributions",
  },
];

// Schema markup for the calculator tool
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CalSTRS Retirement Calculator 2026",
  description: "Free California State Teachers Retirement System pension calculator using official CalSTRS benefit formulas",
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
      name: "How is my CalSTRS pension calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CalSTRS uses the formula: Service Credit x Age Factor x Final Compensation. Your age factor depends on your retirement age and whether you're a classic (2% @ 60) or PEPRA (2% @ 62) member."
      }
    },
    {
      "@type": "Question",
      name: "What is the difference between CalSTRS 2% @ 60 and 2% @ 62?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 2% @ 60 formula applies to members hired before January 1, 2013 (classic members). At age 60, they receive 2% per year of service. PEPRA members (hired 2013+) have the 2% @ 62 formula, receiving 2% at age 62 with a maximum factor of 2.3% vs 2.4% for classic members."
      }
    },
    {
      "@type": "Question",
      name: "Do California teachers get Social Security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most California public school teachers do not participate in Social Security and do not pay Social Security taxes. CalSTRS is their primary retirement system. However, some teachers who have Social Security credits from other employment may receive reduced benefits due to the Windfall Elimination Provision (WEP)."
      }
    },
    {
      "@type": "Question",
      name: "What is CalSTRS final compensation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Final compensation is the average of your highest earnable salary. For members hired before 1996, it's the highest 12 consecutive months. For members hired 1996-2012, it's the highest 36 consecutive months. PEPRA members (2013+) also use 36 months."
      }
    },
    {
      "@type": "Question",
      name: "Can I supplement my CalSTRS pension with other retirement accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many teachers supplement CalSTRS with a 403(b) plan (similar to a 401(k) for educators), a 457(b) deferred compensation plan, Roth IRA, Traditional IRA, or Gold IRA. Since you don't have Social Security, building additional retirement savings is especially important."
      }
    }
  ]
};

export default function CalSTRSCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <CalSTRSCalculator />

      {/* Important CalSTRS Facts */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Understanding CalSTRS Retirement
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {calstrsFacts.map((fact, index) => {
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

      {/* CalSTRS History Timeline */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                CalSTRS Benefit Changes Timeline
              </h2>
            </div>

            <div className="space-y-4">
              {calstrsTimeline.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="md:w-32 flex-shrink-0">
                    <span className="text-blue-400 font-bold">{item.year}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">{item.change}</h4>
                    <p className="text-slate-400 text-sm">{item.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* No Social Security Warning */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-3">
                    Important: Most CalSTRS Members Have No Social Security
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Unlike workers in most professions, California public school educators typically do not
                    participate in Social Security. This means your CalSTRS pension is your primary
                    (and often only) guaranteed retirement income. This makes supplemental savings
                    even more critical.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Windfall Elimination Provision</h4>
                      <p className="text-slate-400 text-sm">
                        If you have Social Security credits from other employment, your SS benefit
                        may be reduced due to WEP. Plan accordingly.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Government Pension Offset</h4>
                      <p className="text-slate-400 text-sm">
                        Spousal Social Security benefits may also be reduced. Understanding these
                        rules is essential for retirement planning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Supplementing CalSTRS */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Supplementing Your Teacher Pension
              </h2>
              <p className="text-slate-400">
                Since most California teachers don&apos;t have Social Security, building additional
                retirement savings is essential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                  <h3 className="text-white font-semibold">403(b) Plans</h3>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  Available to most school employees, a 403(b) allows pre-tax contributions
                  up to $23,000/year ($30,500 if 50+).
                </p>
                <div className="text-xs text-slate-500">
                  Similar to a 401(k) for private sector workers
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                  <h3 className="text-white font-semibold">457(b) Deferred Compensation</h3>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  Some districts offer 457(b) plans with an additional $23,000 contribution
                  limit - on top of your 403(b)!
                </p>
                <div className="text-xs text-slate-500">
                  No 10% early withdrawal penalty before 59½
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                  <h3 className="text-white font-semibold">Roth IRA</h3>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  Contribute up to $7,000/year ($8,000 if 50+) with after-tax dollars.
                  Qualified withdrawals are tax-free in retirement.
                </p>
                <div className="text-xs text-slate-500">
                  Income limits apply for contributions
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-amber-400" />
                  <h3 className="text-white font-semibold">Gold IRA</h3>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  Roll over 403(b), 457(b), or other retirement funds into physical gold.
                  Provides inflation protection beyond CalSTRS&apos;s 2% COLA.
                </p>
                <div className="text-xs text-amber-400">
                  Hedge against inflation and market volatility
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
              CalSTRS Calculator FAQ
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How is my CalSTRS pension calculated?",
                  a: "CalSTRS uses the formula: Service Credit x Age Factor x Final Compensation. Your age factor depends on your retirement age and whether you're a classic (2% @ 60) or PEPRA (2% @ 62) member. For example, 30 years x 2% x $80,000 = $48,000/year.",
                },
                {
                  q: "What is the difference between 2% @ 60 and 2% @ 62?",
                  a: "The 2% @ 60 formula applies to members hired before January 1, 2013. At age 60, they receive 2% per year of service with a maximum of 2.4% at age 63. PEPRA members (hired 2013+) have 2% @ 62, reaching maximum 2.3% at age 65 with a higher minimum retirement age of 55.",
                },
                {
                  q: "Can I retire early from CalSTRS?",
                  a: "Yes, classic members can retire as early as age 50, and PEPRA members at age 55. However, your age factor (and therefore benefit) is significantly reduced. For example, a classic member retiring at 55 receives only 1.56% per year versus 2% at age 60.",
                },
                {
                  q: "How does the CalSTRS COLA work?",
                  a: "CalSTRS provides a 2% purchasing power protection (COLA) based on your initial benefit amount. This is a simple 2% of your starting benefit added each year - not compound interest. Over 20 years, this adds 40% to your original benefit.",
                },
                {
                  q: "Why don't California teachers have Social Security?",
                  a: "California chose not to participate in Social Security for public school educators, instead providing retirement benefits solely through CalSTRS. This means your pension planning is particularly important, as CalSTRS is likely your only guaranteed retirement income.",
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
      <section className="py-8 bg-slate-800/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Important Disclaimer
                  </h3>
                  <p className="text-slate-400 text-sm">
                    This calculator provides estimates only. Actual CalSTRS benefits depend on your
                    specific employment history, service credit purchases, unused sick leave,
                    and other factors. For official benefit estimates, please use the myCalSTRS
                    online portal or contact CalSTRS directly. This is not financial advice.
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
            headline="California Teachers: Protect Your Pension Purchasing Power"
            subheadline="With no Social Security and only a 2% COLA, many California educators supplement their CalSTRS pension with a Gold IRA to maintain purchasing power during retirement."
            trackSource="tools-calstrs-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
