// src/app/federal-retirement/page.tsx
// Sprint 8: Federal Employee Retirement Hub Page

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { FAQSection } from "@/components/seo/FAQSection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { SourcesSection } from "@/components/content/SourcesSection";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { getAllFederalRetirementArticles } from "@/data/federal-retirement";
import {
  ArrowRight,
  Building2,
  Shield,
  Layers,
  Heart,
  Scale,
  DollarSign,
  Calculator,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Federal Employee Retirement Guide: FERS, TSP & Gold IRA Protection (2026)",
  description:
    "Complete retirement planning guide for federal employees. FERS pension, TSP diversification, FEHB healthcare, Social Security Fairness Act, and how gold protects your federal retirement.",
  keywords: [
    "federal employee retirement",
    "FERS retirement",
    "TSP to gold IRA",
    "federal retirement planning",
    "FERS pension gold",
    "military TSP rollover",
    "government employee retirement",
  ],
  alternates: {
    canonical: "/federal-retirement",
  },
  openGraph: {
    title: "Federal Employee Retirement Guide: FERS, TSP & Gold IRA Protection",
    description: "Complete guide covering FERS pension, TSP diversification, FEHB healthcare costs, and gold IRA protection for federal employees.",
    type: "article",
  },
};

const hubFAQs = [
  {
    question: "Can federal employees invest in gold through the TSP?",
    answer: "No. The Thrift Savings Plan offers only 5 core funds (G, F, C, S, I) and Lifecycle funds — none include gold or precious metals. To own gold in a tax-advantaged retirement account, federal employees must roll over TSP funds into a self-directed Gold IRA after separating from service or reaching age 59½.",
  },
  {
    question: "How does a Gold IRA protect my FERS pension?",
    answer: "Your FERS pension loses purchasing power every year due to 'diet COLAs' — cost-of-living adjustments that are capped below actual inflation. Gold historically outpaces inflation, rising an average of 8.3% annually since 2000. A Gold IRA hedges the gap between what your pension pays and what things actually cost over a 20-30 year retirement.",
  },
  {
    question: "Is a TSP to Gold IRA rollover taxable?",
    answer: "No, if done as a direct rollover (trustee-to-trustee transfer). Your TSP funds go directly to the Gold IRA custodian without touching your personal bank account. No taxes, no penalties, regardless of your age. This applies to both federal civilian and military TSP accounts.",
  },
  {
    question: "How much of my TSP should I put into gold?",
    answer: "Most financial advisors recommend allocating 10-15% of your total retirement portfolio to precious metals. For a federal employee with a $300,000 TSP balance, that's $30,000-$45,000. This provides meaningful inflation protection without over-concentrating in a single asset class.",
  },
  {
    question: "Does the Social Security Fairness Act affect FERS employees?",
    answer: "Most FERS employees are not directly affected because FERS includes Social Security coverage. However, FERS employees with prior non-covered state or local government service may benefit from the WEP repeal. CSRS employees who also earned Social Security credits see the biggest benefit — an average $350/month increase.",
  },
];

const spokeIcons: Record<string, typeof Building2> = {
  "fers-pension-and-gold": Shield,
  "tsp-to-gold-diversification": Layers,
  "fehb-retirement-healthcare": Heart,
  "social-security-fairness-act": Scale,
  "military-tsp-rollover": Shield,
};

const spokeColors: Record<string, string> = {
  "fers-pension-and-gold": "text-amber-600 bg-amber-100",
  "tsp-to-gold-diversification": "text-blue-600 bg-blue-100",
  "fehb-retirement-healthcare": "text-green-600 bg-green-100",
  "social-security-fairness-act": "text-purple-600 bg-purple-100",
  "military-tsp-rollover": "text-red-600 bg-red-100",
};

export default function FederalRetirementPage() {
  const articles = getAllFederalRetirementArticles();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <SchemaScript
        schema={articleSchema({
          title: "Federal Employee Retirement Guide: FERS, TSP & Gold IRA Protection",
          description: "Complete retirement planning guide for federal employees covering FERS pension, TSP diversification, FEHB healthcare, and gold IRA protection.",
          slug: "/federal-retirement",
          datePublished: "2026-03-20",
          dateModified: "2026-03-20",
        })}
      />
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Federal Retirement Guide", url: "/federal-retirement" },
        ])}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-[#0C0D18]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium mb-4">
              <Building2 className="h-4 w-4" />
              FEDERAL EMPLOYEE RETIREMENT
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F6F4EF] mb-6">
              Federal Employee{" "}
              <span className="text-blue-600">Retirement Guide</span>
            </h1>
            <p className="text-xl text-[#D0CCC4] mb-8">
              FERS pension, TSP diversification, FEHB healthcare, and how a Gold IRA
              protects your federal retirement from inflation and market risk.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild className="bg-[#DC2626] hover:bg-[#991B1B] text-white">
                <Link href="/quiz">
                  Get Personalized Plan <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-[#3F4460] text-[#D0CCC4] hover:bg-[#1E2134]"
              >
                <a href="#guides">View All Guides</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Author & Last Updated */}
      <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <AuthorBox variant="compact" />
        <p className="text-sm text-[#A8A39A]">Last updated: March 2026</p>
      </div>

      {/* Quick Stats */}
      <section className="py-8 border-y border-[#2A2D42] bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">2.1M</div>
              <div className="text-sm text-[#A8A39A]">Federal Employees in FERS</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$800B+</div>
              <div className="text-sm text-[#A8A39A]">Total TSP Assets</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">0</div>
              <div className="text-sm text-[#A8A39A]">Gold Options in TSP</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">25-35%</div>
              <div className="text-sm text-[#A8A39A]">Pension Value Lost to Diet COLAs</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Answer First */}
      <section className="py-12 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <AnswerFirst
              answer="Federal employees can roll their TSP (Thrift Savings Plan) into a Gold IRA after separation from service. The TSP-to-Gold-IRA rollover is tax-free when done as a direct trustee-to-trustee transfer. FERS employees also keep their pension and Social Security benefits."
              keyFacts={[
                "TSP-to-Gold IRA rollover is tax-free via direct transfer",
                "FERS pension + Social Security + TSP = three retirement income streams",
                "TSP funds in the G Fund earned 4.5% in 2025 (TSP.gov)",
              ]}
              variant="dark"
            />
          </div>
        </Container>
      </section>

      {/* Three-Legged Stool Visual */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F6F4EF] mb-4">
              The Federal Retirement &quot;Three-Legged Stool&quot;
            </h2>
            <p className="text-lg text-[#D0CCC4] max-w-2xl mx-auto">
              Each pillar of federal retirement carries hidden risks that erode your buying power over a 20-30 year retirement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* FERS Pension */}
            <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <DollarSign className="h-5 w-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-[#F6F4EF]">FERS Pension</h3>
              </div>
              <p className="text-sm text-[#D0CCC4] mb-4">
                1.1% &times; high-3 salary &times; years of service. Guaranteed income — but diet COLAs
                mean it buys less every year.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-xs text-red-700 font-medium">
                  Risk: Inflation erodes 25-35% of purchasing power over 20 years
                </p>
              </div>
              <Link
                href="/federal-retirement/fers-pension-and-gold"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium mt-4"
              >
                Learn about FERS + Gold <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* TSP */}
            <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Layers className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#F6F4EF]">Thrift Savings Plan</h3>
              </div>
              <p className="text-sm text-[#D0CCC4] mb-4">
                5 core funds (G, F, C, S, I). Solid for stocks and bonds — but zero
                exposure to gold, silver, or precious metals.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-xs text-red-700 font-medium">
                  Risk: 100% paper assets. No hedge against market crashes or dollar devaluation.
                </p>
              </div>
              <Link
                href="/federal-retirement/tsp-to-gold-diversification"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium mt-4"
              >
                Diversify your TSP <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Social Security */}
            <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Scale className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-[#F6F4EF]">Social Security</h3>
              </div>
              <p className="text-sm text-[#D0CCC4] mb-4">
                Full COLAs help, but the trust fund faces a 2033 shortfall. The Fairness
                Act restored benefits for many federal retirees.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs text-amber-700 font-medium">
                  Watch: Trust fund projected to be depleted by 2033 without Congressional action
                </p>
              </div>
              <Link
                href="/federal-retirement/social-security-fairness-act"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium mt-4"
              >
                Fairness Act details <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Fourth Leg CTA */}
          <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-8 border border-amber-200 text-center">
            <h3 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-3">
              Add a Fourth Leg: Gold IRA Protection
            </h3>
            <p className="text-[#D0CCC4] mb-6">
              Gold is the asset class your TSP can&apos;t provide. It moves independently of stocks,
              outpaces inflation, and protects your purchasing power when diet COLAs fall short.
            </p>
            <Button variant="gold" size="lg" asChild className="bg-[#DC2626] hover:bg-[#991B1B] text-white">
              <Link href="/get-started">
                See If You Qualify <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Article Cards */}
      <section id="guides" className="py-16 bg-white scroll-mt-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F6F4EF] mb-4">
              Federal Retirement Guides
            </h2>
            <p className="text-lg text-[#D0CCC4] max-w-2xl mx-auto">
              In-depth guides covering every aspect of federal retirement planning — written
              specifically for government employees and veterans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {articles.map((article) => {
              const Icon = spokeIcons[article.slug] || Building2;
              const colorClass = spokeColors[article.slug] || "text-blue-600 bg-blue-100";

              return (
                <Link
                  key={article.slug}
                  href={`/federal-retirement/${article.slug}`}
                  className="group bg-[#161828] rounded-xl border border-[#2A2D42] p-6 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${colorClass}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-medium text-[#A8A39A] uppercase">
                      {article.articleType}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F6F4EF] group-hover:text-blue-600 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#D0CCC4] mb-4">
                    {article.subtitle}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-blue-600 font-medium">
                    Read Guide <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              );
            })}

            {/* Existing Related Guides */}
            <Link
              href="/guide/tsp-to-gold-ira-rollover"
              className="group bg-[#161828] rounded-xl border border-[#2A2D42] p-6 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg text-green-600 bg-green-100">
                  <Calculator className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-[#A8A39A] uppercase">
                  Step-by-Step
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#F6F4EF] group-hover:text-blue-600 transition-colors mb-2">
                TSP to Gold IRA Rollover: Complete Steps
              </h3>
              <p className="text-sm text-[#D0CCC4] mb-4">
                Form-by-form walkthrough of the TSP rollover process for federal employees and military.
              </p>
              <div className="flex items-center gap-1 text-sm text-blue-600 font-medium">
                Read Guide <ArrowRight className="h-3 w-3" />
              </div>
            </Link>

            <Link
              href="/guide/457b-to-gold-ira-rollover"
              className="group bg-[#161828] rounded-xl border border-[#2A2D42] p-6 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg text-purple-600 bg-purple-100">
                  <Building2 className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-[#A8A39A] uppercase">
                  Rollover Guide
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#F6F4EF] group-hover:text-blue-600 transition-colors mb-2">
                457(b) to Gold IRA Rollover Guide
              </h3>
              <p className="text-sm text-[#D0CCC4] mb-4">
                State and local government employees: how to roll your 457(b) into a Gold IRA.
              </p>
              <div className="flex items-center gap-1 text-sm text-blue-600 font-medium">
                Read Guide <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
              Federal Retirement Calculators
            </h2>
            <p className="text-lg text-[#D0CCC4]">
              Free tools to plan your federal retirement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { href: "/tools/fers-calculator", title: "FERS Pension Calculator", desc: "Estimate your FERS annuity" },
              { href: "/tools/fers-annuity-calculator", title: "FERS Annuity Calculator", desc: "Detailed annuity projections" },
              { href: "/tools/fers-supplement-calculator", title: "FERS Supplement Calculator", desc: "Pre-62 supplement estimate" },
              { href: "/tools/tsp-calculator", title: "TSP Calculator", desc: "Project your TSP growth" },
              { href: "/tools/social-security-calculator", title: "Social Security Calculator", desc: "Estimate your SS benefits" },
              { href: "/tools/wep-calculator", title: "WEP Calculator", desc: "Check WEP impact (pre-repeal)" },
              { href: "/tools/gold-allocation-calculator", title: "Gold Allocation Calculator", desc: "How much gold in your portfolio" },
              { href: "/tools/retirement-calculator", title: "Retirement Calculator", desc: "Are you on track?" },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="bg-[#161828] rounded-lg p-4 border border-[#2A2D42] hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="h-4 w-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-[#F6F4EF]">{tool.title}</h3>
                </div>
                <p className="text-xs text-[#A8A39A]">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Federal Employees Choose Gold */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF] mb-8 text-center">
              Why Federal Employees Are Choosing Gold
            </h2>
            <div className="space-y-4">
              {[
                "TSP has zero precious metals — your only option is paper assets",
                "FERS diet COLAs lose 1%+ of purchasing power every high-inflation year",
                "Gold has zero correlation with stocks — true diversification",
                "Central banks bought 1,037 tonnes of gold in 2023 alone",
                "Tax-free direct rollover from TSP to Gold IRA after separation",
                "Physical gold in IRS-approved depository — not paper ETFs",
              ].map((reason, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[#D0CCC4]">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Augusta CTA */}
      <AugustaCTA
        variant="banner"
        trackSource="federal-retirement-hub"
      />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FAQSection faqs={hubFAQs} title="Federal Retirement & Gold IRA FAQs" />
          </div>
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container>
          <AutoRelatedContent currentUrl="/federal-retirement" />
        </Container>
      </section>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 pb-12">
          <SourcesSection
            sources={[
              { name: "OPM — FERS Information", url: "https://www.opm.gov/retirement-center/fers-information/", accessDate: "Mar 2026" },
              { name: "TSP — Thrift Savings Plan", url: "https://www.tsp.gov/", accessDate: "Mar 2026" },
              { name: "IRS — Retirement Plans for Federal Employees", url: "https://www.irs.gov/retirement-plans", accessDate: "Mar 2026" },
              { name: "PBGC — Pension Benefit Guaranty Corporation", url: "https://www.pbgc.gov/", accessDate: "Mar 2026" },
            ]}
            lastVerified="March 2026"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
