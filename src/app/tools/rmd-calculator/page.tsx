import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RMDCalculator } from "@/components/tools/RMDCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "RMD Calculator 2025 - Required Minimum Distribution | Rich Dad Retirement",
  description:
    "Calculate your Required Minimum Distribution for Traditional and Gold IRAs. Free RMD calculator with 10-year projections based on current IRS tables.",
  keywords: [
    "RMD calculator",
    "required minimum distribution",
    "Gold IRA RMD",
    "IRA withdrawal calculator",
    "retirement distribution",
    "SECURE Act RMD",
  ],
};

const rmdFacts = [
  {
    title: "Start Age Changed",
    description:
      "SECURE 2.0 Act raised the RMD start age to 73 (for those born 1951-1959) and 75 (for those born 1960+).",
    icon: Calendar,
  },
  {
    title: "Penalty Reduced",
    description:
      "The penalty for missing an RMD dropped from 50% to 25% (or 10% if corrected quickly). Still significant!",
    icon: AlertTriangle,
  },
  {
    title: "Roth IRAs Exempt",
    description:
      "Roth IRAs have no RMDs during your lifetime—only your heirs face distribution requirements.",
    icon: CheckCircle2,
  },
  {
    title: "Deadline Matters",
    description:
      "RMDs must be taken by December 31 each year. Your first RMD can be delayed until April 1 of the following year.",
    icon: Info,
  },
];

export default function RMDCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Calculator Section */}
      <RMDCalculator />

      {/* Important RMD Facts */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              What You Need to Know About RMDs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {rmdFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-amber-400" />
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

      {/* Gold IRA RMD Strategy */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Gold IRA RMD Strategies
              </h2>
              <p className="text-slate-400">
                Physical gold in your IRA gives you unique options when taking distributions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Option 1: Cash Distribution
                </h3>
                <p className="text-slate-400">
                  Your custodian sells enough gold to meet your RMD amount and sends you
                  cash. This is the simplest method and works like any traditional IRA
                  distribution. Taxes owed on the full withdrawal amount.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Option 2: In-Kind Distribution
                </h3>
                <p className="text-slate-400">
                  Receive physical gold instead of cash! The depository ships actual coins
                  or bars directly to you. You still owe taxes on the fair market value,
                  but you now own the gold outright—outside your IRA. Popular for those
                  who want to hold their precious metals personally.
                </p>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-400 mb-3">
                  Pro Tip: Consider a Roth Conversion
                </h3>
                <p className="text-slate-400">
                  If you don&apos;t need the RMD income, consider converting part of your
                  Traditional Gold IRA to a Roth Gold IRA. You&apos;ll pay taxes now, but
                  eliminate future RMDs and leave tax-free gold to your heirs.
                </p>
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
              RMD Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What happens if I don't take my RMD?",
                  a: "You'll owe a 25% penalty on the amount not withdrawn (reduced to 10% if corrected within 2 years). Plus you still have to take the distribution and pay regular income taxes.",
                },
                {
                  q: "Can I take more than the RMD?",
                  a: "Yes! The RMD is the minimum required. You can withdraw more, but you'll owe income taxes on the full amount. You cannot carry forward excess withdrawals to reduce future RMDs.",
                },
                {
                  q: "Do RMDs apply to inherited Gold IRAs?",
                  a: "Yes, but rules differ. Spouses can roll over to their own IRA. Non-spouse beneficiaries must generally empty the account within 10 years (SECURE Act). Consult a tax advisor.",
                },
                {
                  q: "Is my RMD based on spot price or what I paid?",
                  a: "RMDs are based on the fair market value (current spot price) of your gold as of December 31 of the prior year, not what you originally paid.",
                },
                {
                  q: "Can I reinvest my RMD in gold outside the IRA?",
                  a: "Yes! Take your cash distribution, pay the taxes, and use the remainder to buy physical gold for personal possession. Many retirees do this to keep growing their gold holdings.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group"
                >
                  <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                    <span className="text-white font-medium pr-4">{faq.q}</span>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform">
                      ▼
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
                    This calculator provides estimates based on IRS Uniform Lifetime
                    Tables. Your actual RMD may differ based on beneficiary age,
                    multiple accounts, or other factors. This is not tax advice.
                    Please consult a qualified tax professional for your specific
                    situation.
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
            headline="Need Help Planning Your RMDs?"
            subheadline="A Gold IRA specialist can help you develop a tax-efficient withdrawal strategy for your specific situation."
            trackSource="tools-rmd-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
