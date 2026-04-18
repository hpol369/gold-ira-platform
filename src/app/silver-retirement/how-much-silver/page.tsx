// src/app/silver-retirement/how-much-silver/page.tsx
// Keywords: how much silver should a retiree own

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";
import {
  ArrowRight,
  Scale,
  PieChart,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How Much Silver Should a Retiree Own? | Portfolio Allocation Guide 2026",
  description:
    "Expert guidance on how much silver retirees should own. Learn age-based allocation strategies, risk considerations, and diversification guidelines for silver in retirement portfolios.",
  keywords: [
    "how much silver should a retiree own",
    "silver allocation retirement",
    "silver portfolio percentage",
    "silver diversification retirement",
    "silver investment amount retirees",
  ],
  openGraph: {
    title: "How Much Silver Should a Retiree Own?",
    description: "Portfolio allocation guidelines for silver in retirement.",
    url: "https://www.richdadretirement.com/silver-retirement/how-much-silver",
    type: "article",
  },
};

const allocationProfiles = [
  {
    profile: "Conservative Retiree",
    description: "Currently retired, focused on capital preservation",
    silverAllocation: "3-7%",
    totalPrecious: "5-10%",
    rationale: "Minimal volatility exposure while maintaining inflation hedge",
    color: "blue",
  },
  {
    profile: "Moderate Retiree",
    description: "Near or recently retired, balanced approach",
    silverAllocation: "5-10%",
    totalPrecious: "10-15%",
    rationale: "Balanced protection with modest growth potential",
    color: "green",
  },
  {
    profile: "Growth-Oriented Retiree",
    description: "Longer time horizon, willing to accept volatility",
    silverAllocation: "8-15%",
    totalPrecious: "15-20%",
    rationale: "Higher exposure for potential appreciation during economic uncertainty",
    color: "amber",
  },
];

const ageGuidelines = [
  {
    age: "55-60",
    recommendation: "5-15% total precious metals",
    silverNote: "Can allocate more to silver for growth potential",
    reasoning: "Still have 5-10 years before mandatory distributions",
  },
  {
    age: "60-70",
    recommendation: "5-12% total precious metals",
    silverNote: "Balance silver with gold for stability",
    reasoning: "Approaching RMDs, need liquidity planning",
  },
  {
    age: "70-80",
    recommendation: "5-10% total precious metals",
    silverNote: "Favor gold over silver for lower volatility",
    reasoning: "Taking distributions, preserve capital",
  },
  {
    age: "80+",
    recommendation: "3-8% total precious metals",
    silverNote: "Minimal silver, focus on gold and cash",
    reasoning: "Estate planning focus, maximum stability",
  },
];

const considerations = [
  {
    factor: "Time Horizon",
    icon: Clock,
    description: "The longer until you need the money, the more silver you can hold. Silver is more volatile than gold but has greater upside potential over longer periods.",
  },
  {
    factor: "Risk Tolerance",
    icon: Scale,
    description: "Silver can swing 10-20% in a month. If that would keep you up at night, stick to 5% or less. If you can stomach volatility, 10-15% may be appropriate.",
  },
  {
    factor: "Portfolio Size",
    icon: PieChart,
    description: "Larger portfolios can handle more silver volatility. A 15% swing on $100K is $15K - manageable. On $1M, that's $150K - potentially stressful.",
  },
  {
    factor: "Other Holdings",
    icon: Target,
    description: "If you already hold gold, silver provides diversification within precious metals. If precious metals are your only alternative asset, keep total allocation moderate.",
  },
];

const faqs = [
  {
    question: "Is 10% of my portfolio in silver too much?",
    answer:
      "For most retirees, 10% in silver alone is on the aggressive side. Remember, financial advisors typically recommend 5-15% in ALL precious metals combined (gold, silver, platinum). If you want 10% in silver specifically, ensure the rest of your portfolio is very conservative (bonds, cash) to balance the volatility.",
  },
  {
    question: "Should I hold more silver or gold as a retiree?",
    answer:
      "Most retirees should favor gold over silver due to gold's lower volatility and stronger 'safe haven' characteristics during market crashes. A common approach is 70-80% gold, 20-30% silver within your precious metals allocation. Gold preserves wealth; silver offers growth potential.",
  },
  {
    question: "Can I have too little silver in my portfolio?",
    answer:
      "If you have zero precious metals exposure, you're missing an important diversification tool. Even a modest 3-5% allocation to silver provides some inflation protection and portfolio diversification. Any amount is better than none for retirees concerned about dollar devaluation.",
  },
  {
    question: "How does silver fit with my bond allocation?",
    answer:
      "Silver can partially replace bond allocation as an inflation hedge. With bond yields low and inflation high, some retirees are shifting 5-10% from bonds to precious metals. Silver and gold tend to rise when bonds fall due to inflation concerns, providing balance.",
  },
  {
    question: "Should I adjust my silver allocation as I age?",
    answer:
      "Yes. As you age and approach or enter retirement, gradually reduce silver exposure in favor of gold and more stable assets. A 60-year-old might hold 10% silver, but an 80-year-old might reduce this to 3-5% for capital preservation and simpler RMD planning.",
  },
  {
    question: "What about silver outside my IRA?",
    answer:
      "Physical silver held outside an IRA (at home or in a private vault) provides emergency access and avoids RMD complications. Many retirees split their silver: IRA silver for tax advantages and physical silver at home for accessibility. Home storage doesn't count toward IRA limits.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "How Much Silver Should a Retiree Own?",
      "description": "Expert guidance on silver allocation for retirement portfolios.",
      "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement",
      },
      "datePublished": "2026-01-15",
      "dateModified": "2026-01-27",
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
  ],
};

export default function HowMuchSilverPage() {
  return (
    <main className="min-h-screen bg-[#0C0D18]">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0C0D18]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/silver-retirement"
              className="inline-flex items-center gap-2 text-[#D0CCC4] text-sm hover:text-[#F6F4EF] transition-colors mb-6"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Silver Retirement Hub
            </Link>
            <div className="inline-flex items-center gap-2 text-[#D4A94E] text-sm font-medium mb-4 bg-purple-500/20 px-4 py-2 rounded-full border border-[rgba(197,149,46,0.32)]">
              <Scale className="h-4 w-4" />
              ALLOCATION GUIDE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F6F4EF] mb-6">
              How Much Silver Should a{" "}
              <span className="text-[#D4A94E]">Retiree Own?</span>
            </h1>
            <p className="text-xl text-[#D0CCC4] mb-8">
              Portfolio allocation guidelines, age-based strategies, and risk
              considerations for silver in your retirement.
            </p>

            <LeadCaptureButton
              variant="silver"
              source="silver-retirement-howmuch-hero"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#DC2626] hover:bg-[#991B1B] text-white h-11 px-8"
            >
              Get Personalized Guidance <ArrowRight className="ml-2 h-4 w-4" />
            </LeadCaptureButton>
          </div>
        </Container>
      </section>

      {/* Quick Answer */}
      <section className="py-12 bg-[#121423] border-y border-[#2A2D42]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-4">
              The Quick Answer
            </h2>
            <div className="bg-[rgba(197,149,46,0.08)] border border-[rgba(197,149,46,0.32)] rounded-xl p-6">
              <p className="text-3xl font-bold text-[#D4A94E] mb-2">5-15%</p>
              <p className="text-lg text-[#F6F4EF] mb-4">
                of your total portfolio in precious metals (gold + silver combined)
              </p>
              <p className="text-[#D0CCC4]">
                Within that allocation, silver typically represents 20-40% depending
                on your risk tolerance. So for a $500,000 portfolio, that's $25,000-$75,000
                in precious metals with $5,000-$30,000 in silver.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Allocation Profiles */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] text-center mb-4">
            Silver Allocation by Risk Profile
          </h2>
          <p className="text-[#D0CCC4] text-center max-w-2xl mx-auto mb-12">
            Your ideal silver allocation depends on your retirement timeline, risk
            tolerance, and overall financial situation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {allocationProfiles.map((profile, index) => {
              const colorClasses: Record<string, string> = {
                blue: "border-blue-500/30 bg-[#121423]0/10",
                green: "border-green-500/30 bg-[rgba(46,139,87,0.08)]0/10",
                amber: "border-[#B22234]/30 bg-[rgba(220,38,38,0.1)]",
              };
              const textColors: Record<string, string> = {
                blue: "text-blue-400",
                green: "text-green-400",
                amber: "text-[#D4A94E]",
              };

              return (
                <div
                  key={index}
                  className={`rounded-xl p-6 border ${colorClasses[profile.color]}`}
                >
                  <h3 className={`text-xl font-bold mb-2 ${textColors[profile.color]}`}>
                    {profile.profile}
                  </h3>
                  <p className="text-sm text-[#D0CCC4] mb-4">{profile.description}</p>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-xs text-[#D0CCC4] block">Silver Allocation</span>
                      <span className="text-2xl font-bold text-[#F6F4EF]">
                        {profile.silverAllocation}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-[#D0CCC4] block">Total Precious Metals</span>
                      <span className="text-lg font-semibold text-[#D0CCC4]">
                        {profile.totalPrecious}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#D0CCC4]">{profile.rationale}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Age-Based Guidelines */}
      <section className="py-16 bg-[#121423]">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] text-center mb-8">
            Age-Based Allocation Guidelines
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-[#0C0D18] backdrop-blur-sm rounded-xl border border-[#2A2D42]">
                <thead className="bg-[#0C0D18]">
                  <tr>
                    <th className="p-4 border-b border-[#2A2D42] font-bold text-[#F6F4EF]">Age Range</th>
                    <th className="p-4 border-b border-[#2A2D42] font-bold text-[#F6F4EF]">Precious Metals</th>
                    <th className="p-4 border-b border-[#2A2D42] font-bold text-[#F6F4EF]">Silver Note</th>
                    <th className="p-4 border-b border-[#2A2D42] font-bold text-[#F6F4EF]">Reasoning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2A2D42] text-sm">
                  {ageGuidelines.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "" : "bg-[#121423]"}>
                      <td className="p-4 font-semibold text-[#F6F4EF]">{row.age}</td>
                      <td className="p-4 text-[#D4A94E] font-semibold">{row.recommendation}</td>
                      <td className="p-4 text-[#D0CCC4]">{row.silverNote}</td>
                      <td className="p-4 text-[#D0CCC4]">{row.reasoning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Considerations */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] text-center mb-8">
            Key Factors to Consider
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {considerations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-500/20 p-2 rounded-lg">
                      <Icon className="h-5 w-5 text-[#D4A94E]" />
                    </div>
                    <h3 className="font-bold text-[#F6F4EF]">{item.factor}</h3>
                  </div>
                  <p className="text-sm text-[#D0CCC4]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-12 bg-gradient-to-r from-slate-100 via-[#B22234]/10 to-slate-100 border-y border-[#2A2D42]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#F6F4EF] mb-4">
              Want a Personalized Recommendation?
            </h3>
            <p className="text-[#D0CCC4] mb-6">
              Augusta's precious metals specialists can review your specific
              situation and recommend an appropriate silver allocation for your
              retirement goals. Free consultation, no obligation.
            </p>
            <LeadCaptureButton
              variant="silver"
              source="silver-retirement-howmuch-mid"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#DC2626] hover:bg-[#991B1B] text-white h-11 px-8"
            >
              Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </LeadCaptureButton>
          </div>
        </Container>
      </section>

      {/* Portfolio Examples */}
      <section className="py-16 bg-[#121423]">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] text-center mb-8">
            Sample Portfolio Allocations
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
              <h3 className="font-bold text-[#F6F4EF] mb-4">$250,000 Portfolio</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#D0CCC4]">Stocks/Bonds</span>
                  <span className="text-[#F6F4EF]">$212,500 (85%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D0CCC4]">Gold</span>
                  <span className="text-[#D4A94E]">$25,000 (10%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D0CCC4]">Silver</span>
                  <span className="text-[#D0CCC4]">$12,500 (5%)</span>
                </div>
              </div>
            </div>
            <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
              <h3 className="font-bold text-[#F6F4EF] mb-4">$500,000 Portfolio</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#D0CCC4]">Stocks/Bonds</span>
                  <span className="text-[#F6F4EF]">$400,000 (80%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D0CCC4]">Gold</span>
                  <span className="text-[#D4A94E]">$60,000 (12%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D0CCC4]">Silver</span>
                  <span className="text-[#D0CCC4]">$40,000 (8%)</span>
                </div>
              </div>
            </div>
            <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
              <h3 className="font-bold text-[#F6F4EF] mb-4">$1,000,000 Portfolio</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#D0CCC4]">Stocks/Bonds</span>
                  <span className="text-[#F6F4EF]">$850,000 (85%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D0CCC4]">Gold</span>
                  <span className="text-[#D4A94E]">$100,000 (10%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D0CCC4]">Silver</span>
                  <span className="text-[#D0CCC4]">$50,000 (5%)</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#D0CCC4] text-center mt-6">
            These are examples only. Your ideal allocation depends on your specific
            circumstances, risk tolerance, and goals.
          </p>
        </Container>
      </section>

      {/* Warning Section */}
      <section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto bg-[rgba(220,38,38,0.1)] border border-[#B22234]/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-[#D4A94E] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-[#F6F4EF] mb-2">Important Disclaimer</h3>
                <p className="text-sm text-[#D0CCC4]">
                  These allocation guidelines are general recommendations, not
                  personalized financial advice. Silver is a volatile asset that
                  can lose significant value in short periods. Before making any
                  investment decisions, consult with a qualified financial advisor
                  who understands your complete financial picture.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#121423] border-y border-[#2A2D42]">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] text-center mb-8">
            Silver Allocation FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-[#0C0D18] backdrop-blur-sm rounded-xl border border-[#2A2D42] p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-[#F6F4EF] font-semibold list-none">
                  {faq.question}
                  <span className="text-[#D4A94E] group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-4 text-[#D0CCC4]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Pages */}
      <section className="py-12">
        <Container>
          <h2 className="text-xl font-bold text-[#F6F4EF] text-center mb-6">
            Continue Your Research
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link
              href="/silver-retirement/silver-vs-bonds"
              className="bg-[#0C0D18] hover:bg-[#1E2134] border border-[#2A2D42] rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-[#F6F4EF] mb-1">Silver vs Bonds</h3>
              <p className="text-sm text-[#D0CCC4]">Compare for retirement</p>
            </Link>
            <Link
              href="/silver-retirement/transfer-ira-to-silver"
              className="bg-[#0C0D18] hover:bg-[#1E2134] border border-[#2A2D42] rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-[#F6F4EF] mb-1">Transfer IRA to Silver</h3>
              <p className="text-sm text-[#D0CCC4]">Step-by-step guide</p>
            </Link>
            <Link
              href="/silver-retirement/rmd-rules"
              className="bg-[#0C0D18] hover:bg-[#1E2134] border border-[#2A2D42] rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-[#F6F4EF] mb-1">Silver IRA RMD Rules</h3>
              <p className="text-sm text-[#D0CCC4]">Distribution planning</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-[#2A2D42]">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Get Personalized Silver Allocation Advice"
            subheadline="Augusta's precious metals specialists can help you determine the right silver allocation for your specific retirement goals and risk tolerance. Free consultation with no pressure."
            trackSource="how-much-silver-footer"
            linkContext="silver"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
