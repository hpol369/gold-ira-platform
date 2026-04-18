import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TSPCalculator } from "@/components/tools/TSPCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { CalculatorCTA } from "@/components/widgets/CalculatorCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import {
  AlertTriangle,
  Calculator,
  Info,
  CheckCircle2,
  TrendingUp,
  PieChart,
  DollarSign,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "TSP Calculator 2026 | Free Thrift Savings Plan Tool",
  description:
    "Free TSP calculator for federal employees. Project your Thrift Savings Plan balance at retirement with fund allocation and employer matching. 2026 limits.",
  keywords: [
    "tsp calculator",
    "thrift savings plan calculator",
    "federal tsp calculator",
    "tsp retirement calculator",
    "tsp contribution calculator",
    "tsp projection calculator",
    "federal employee tsp",
    "tsp fund allocation",
    "tsp 2026 limits",
  ],
};

const tspFunds = [
  {
    fund: "G Fund",
    name: "Government Securities Investment Fund",
    description:
      "Invests in special Treasury securities. Lowest risk, lowest return. Good for capital preservation.",
    risk: "Low",
    avgReturn: "2-3%",
    color: "bg-gray-400",
  },
  {
    fund: "F Fund",
    name: "Fixed Income Index Investment Fund",
    description:
      "Tracks the Bloomberg U.S. Aggregate Bond Index. Moderate risk with bond market exposure.",
    risk: "Low-Medium",
    avgReturn: "3-5%",
    color: "bg-blue-400",
  },
  {
    fund: "C Fund",
    name: "Common Stock Index Investment Fund",
    description:
      "Tracks the S&P 500 Index. Large-cap U.S. stocks with higher growth potential.",
    risk: "Medium",
    avgReturn: "9-11%",
    color: "bg-green-400",
  },
  {
    fund: "S Fund",
    name: "Small Cap Stock Index Investment Fund",
    description:
      "Tracks the Dow Jones U.S. Completion TSM Index. Small and mid-cap stocks not in the S&P 500.",
    risk: "Medium-High",
    avgReturn: "10-12%",
    color: "bg-purple-400",
  },
  {
    fund: "I Fund",
    name: "International Stock Index Investment Fund",
    description:
      "Tracks the MSCI EAFE Index. International developed market stocks for global diversification.",
    risk: "Medium-High",
    avgReturn: "6-8%",
    color: "bg-orange-400",
  },
];

const contributionLimits2026 = {
  regular: 23500,
  catchUp: 7500,
  total: 31000,
};

// Schema markup for the calculator tool
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "TSP Calculator 2026",
  description: "Free Thrift Savings Plan calculator for federal employees with fund allocation analysis",
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
      name: "What are the TSP contribution limits for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For 2026, the TSP contribution limit is $23,500. If you're age 50 or older, you can contribute an additional $7,500 in catch-up contributions for a total of $31,000. These limits are subject to annual IRS adjustments."
      }
    },
    {
      "@type": "Question",
      name: "How does TSP employer matching work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Federal employees automatically receive a 1% agency contribution regardless of their own contributions. Then, the agency matches your contributions dollar-for-dollar up to 3%, and 50 cents on the dollar for the next 2%. This means contributing 5% of your salary earns the full 5% match (4% matching + 1% automatic)."
      }
    },
    {
      "@type": "Question",
      name: "Can I roll my TSP into a Gold IRA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, after separation from federal service, you can roll your TSP funds into a self-directed Gold IRA. If you're still employed but age 59½ or older, you may be eligible for an in-service withdrawal that can also be rolled into a Gold IRA."
      }
    },
    {
      "@type": "Question",
      name: "Which TSP fund has the best returns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Historically, the C Fund (S&P 500) and S Fund (small-cap) have provided the highest long-term returns, averaging 9-12% annually. However, they also have higher volatility. The G Fund is the safest but has the lowest returns. Most experts recommend a diversified allocation across multiple funds."
      }
    },
    {
      "@type": "Question",
      name: "What is the TSP L Fund?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L Funds (Lifecycle Funds) are target-date funds that automatically adjust your allocation as you approach retirement. They start more aggressive and become more conservative over time. They're a good choice for hands-off investors who want professional allocation management."
      }
    }
  ]
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Tools", url: "/tools" },
  { name: "TSP Calculator", url: "/tools/tsp-calculator" },
]);

export default function TSPCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#0C0D18]">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={breadcrumbs} />

      {/* Calculator Section */}
      <TSPCalculator />

      {/* TSP Fund Overview */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[rgba(46,139,87,0.08)]0/20 rounded-xl flex items-center justify-center">
                <PieChart className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F6F4EF]">
                TSP Fund Options
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tspFunds.map((fund) => (
                <div
                  key={fund.fund}
                  className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-4 h-4 rounded-full ${fund.color}`} />
                    <h3 className="text-[#F6F4EF] font-semibold">{fund.fund}</h3>
                  </div>
                  <p className="text-[#A8A39A] text-xs mb-2">{fund.name}</p>
                  <p className="text-[#D0CCC4] text-sm mb-3">{fund.description}</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#A8A39A]">Risk: <span className="text-[#F6F4EF]">{fund.risk}</span></span>
                    <span className="text-[#A8A39A]">Avg Return: <span className="text-green-600">{fund.avgReturn}</span></span>
                  </div>
                </div>
              ))}

              {/* L Funds */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                  <h3 className="text-[#F6F4EF] font-semibold">L Funds (Lifecycle)</h3>
                </div>
                <p className="text-[#A8A39A] text-xs mb-2">Target-Date Retirement Funds</p>
                <p className="text-[#D0CCC4] text-sm mb-3">
                  Automatically balanced funds that shift to conservative as your target retirement date approaches.
                </p>
                <div className="text-xs text-[#A8A39A]">
                  Options: L Income, L 2025-L 2065
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contribution Limits & Matching */}
      <section className="py-16 bg-[#121423]/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* 2026 Limits */}
              <div className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[rgba(46,139,87,0.08)]0/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F6F4EF]">2026 TSP Limits</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-[#2A2D42]">
                    <span className="text-[#A8A39A]">Regular Contribution</span>
                    <span className="text-[#F6F4EF] font-semibold">${contributionLimits2026.regular.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#2A2D42]">
                    <span className="text-[#A8A39A]">Catch-Up (Age 50+)</span>
                    <span className="text-[#F6F4EF] font-semibold">+${contributionLimits2026.catchUp.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-[rgba(46,139,87,0.08)]0/10 rounded-lg px-3 -mx-3">
                    <span className="text-green-600 font-medium">Total Possible (50+)</span>
                    <span className="text-green-600 font-bold text-lg">${contributionLimits2026.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Matching Breakdown */}
              <div className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#121423]0/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F6F4EF]">Agency Matching</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#F6F4EF] font-medium">1% Automatic</p>
                      <p className="text-[#D0CCC4] text-sm">You get this even if you contribute $0</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#F6F4EF] font-medium">3% Dollar-for-Dollar Match</p>
                      <p className="text-[#D0CCC4] text-sm">Agency matches 100% of your first 3%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#F6F4EF] font-medium">2% Half Match</p>
                      <p className="text-[#D0CCC4] text-sm">Agency matches 50% of your next 2%</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-[#121423] border border-blue-200 rounded-lg">
                    <p className="text-blue-600 text-sm">
                      <strong>Bottom line:</strong> Contribute at least 5% to get the full 5% agency contribution (4% match + 1% auto).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TSP Rollover Options */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[rgba(220,38,38,0.1)] rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-[#D4A94E]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F6F4EF]">
                TSP Rollover Options
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#F6F4EF] mb-3">After Separation</h3>
                <p className="text-[#D0CCC4] text-sm mb-4">
                  Once you leave federal service, you have full control over your TSP funds:
                </p>
                <ul className="space-y-2 text-[#D0CCC4] text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Roll over to Traditional IRA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Roll over to Roth IRA (taxes apply)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#D4A94E] mt-0.5 flex-shrink-0" />
                    <span>Roll over to Self-Directed Gold IRA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Leave in TSP (no minimum balance)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#F6F4EF] mb-3">While Still Employed</h3>
                <p className="text-[#D0CCC4] text-sm mb-4">
                  Limited options while working, but still possible at age 59 1/2:
                </p>
                <ul className="space-y-2 text-[#D0CCC4] text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Age-based withdrawal (59 1/2+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Can be rolled to IRA or Gold IRA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-[#D4A94E] mt-0.5 flex-shrink-0" />
                    <span>Only one age-based withdrawal allowed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-[#A8A39A] mt-0.5 flex-shrink-0" />
                    <span>Hardship withdrawals for financial emergencies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-[rgba(220,38,38,0.1)] border border-[rgba(197,149,46,0.32)] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-[#D4A94E] flex-shrink-0" />
                <div>
                  <h4 className="text-[#D4A94E] font-semibold mb-2">Why Consider a Gold IRA Rollover?</h4>
                  <p className="text-[#D0CCC4] text-sm">
                    TSP offers excellent low-cost index funds, but it lacks precious metals options.
                    Rolling a portion of your TSP into a Gold IRA provides true asset diversification
                    and inflation protection that stock and bond funds alone cannot offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#F6F4EF] text-center mb-12">
              TSP Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What are the TSP contribution limits for 2026?",
                  a: `The 2026 TSP contribution limit is $${contributionLimits2026.regular.toLocaleString()}. If you're age 50 or older, you can contribute an additional $${contributionLimits2026.catchUp.toLocaleString()} in catch-up contributions for a total of $${contributionLimits2026.total.toLocaleString()}.`,
                },
                {
                  q: "How much should I contribute to TSP?",
                  a: "At minimum, contribute 5% to get the full employer match (that's free money!). Ideally, aim to contribute 15-20% of your salary if your budget allows. Maxing out at $23,500 (or $31,000 with catch-up) provides the best tax-advantaged savings.",
                },
                {
                  q: "Should I choose Traditional or Roth TSP?",
                  a: "Traditional TSP reduces your taxable income now but is taxed at withdrawal. Roth TSP is taxed now but grows tax-free. Generally, Roth is better if you expect higher taxes in retirement. Many experts recommend contributing to both for tax diversification.",
                },
                {
                  q: "Can I change my TSP allocation?",
                  a: "Yes, you can change your fund allocation at any time through TSP.gov. Interfund transfers (moving existing balances between funds) and contribution allocations (directing future contributions) can be adjusted separately.",
                },
                {
                  q: "What happens to my TSP if I leave federal service?",
                  a: "Your TSP remains yours regardless of employment. You can leave it in TSP, roll it to an IRA or new employer's plan, or take distributions (with potential penalties if under 59½). There's no minimum balance requirement to keep it in TSP.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl overflow-hidden group"
                >
                  <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                    <span className="text-[#F6F4EF] font-medium pr-4">{faq.q}</span>
                    <span className="text-[#A8A39A] group-open:rotate-180 transition-transform">
                      {"\u25BC"}
                    </span>
                  </summary>
                  <div className="px-5 pb-5 border-t border-[#2A2D42] pt-4">
                    <p className="text-[#A8A39A]">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Tools */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#F6F4EF] text-center mb-8">
              Related Federal Employee Tools
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="/tools/fers-annuity-calculator"
                className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl p-6 hover:bg-[#1E2134]/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-[#F6F4EF] group-hover:text-green-600 transition-colors">
                  FERS Annuity Calculator
                </h3>
                <p className="text-[#D0CCC4] text-sm mt-2">
                  Calculate your FERS pension benefit
                </p>
              </a>
              <a
                href="/tools/fers-supplement-calculator"
                className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl p-6 hover:bg-[#1E2134]/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-[#F6F4EF] group-hover:text-green-600 transition-colors">
                  FERS Supplement Calculator
                </h3>
                <p className="text-[#D0CCC4] text-sm mt-2">
                  Calculate your SRS bridge payment
                </p>
              </a>
              <a
                href="/tools/fers-calculator"
                className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl p-6 hover:bg-[#1E2134]/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-[#F6F4EF] group-hover:text-green-600 transition-colors">
                  Complete FERS Calculator
                </h3>
                <p className="text-[#D0CCC4] text-sm mt-2">
                  All-in-one FERS retirement planning
                </p>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[#0C0D18]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#F6F4EF] font-semibold mb-2">
                    Important Disclaimer
                  </h3>
                  <p className="text-[#D0CCC4] text-sm">
                    This calculator provides estimates based on historical fund performance
                    and your inputs. Actual returns will vary and past performance does not
                    guarantee future results. Contribution limits are subject to annual IRS
                    adjustments. This is not financial advice. Consult a qualified financial
                    advisor for your specific situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contextual CTA */}
      <section className="py-12">
        <Container>
          <CalculatorCTA calculatorType="tsp" trackSource="tools-tsp-calculator" />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="25+ Years of Federal Service. Protect It."
            subheadline="Your TSP can lose 40% in a crash. Federal employees at 59.5 can roll into a Gold IRA - protecting decades of contributions from market chaos. No job change required."
            trackSource="tools-tsp-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
