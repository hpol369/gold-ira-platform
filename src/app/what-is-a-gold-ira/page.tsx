// src/app/what-is-a-gold-ira/page.tsx
// P3-001: Core educational page - What is a Gold IRA

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  Building2,
  Lock,
  TrendingUp,
  Scale,
  FileText,
  Landmark,
  ArrowRight,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "What Is a Gold IRA? Complete Guide 2026 | How It Works",
  description: "Learn what a Gold IRA is, how it works, and whether it's right for your retirement. Understand rules, custodians, storage, and IRS requirements for precious metals IRAs.",
  openGraph: {
    title: "What Is a Gold IRA? Complete Guide 2026",
    description: "Everything you need to know about Gold IRAs - how they work, IRS rules, custodians, storage, and whether a precious metals IRA is right for you.",
    type: "article",
  },
};

export default function WhatIsGoldIRAPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">
              <HelpCircle className="h-4 w-4" />
              Gold IRA Basics
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Is a Gold IRA?
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              A Gold IRA is a self-directed Individual Retirement Account that allows you to hold physical gold,
              silver, platinum, and palladium as retirement investments. Here&apos;s everything you need to know.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Shield className="h-4 w-4 text-green-400" />
                <span>IRS Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Lock className="h-4 w-4 text-blue-400" />
                <span>Tax-Advantaged</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <TrendingUp className="h-4 w-4 text-amber-400" />
                <span>Inflation Hedge</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Quick Answer */}
      <section className="py-12 bg-amber-50 border-b border-amber-200">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              The Simple Answer
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              A <strong>Gold IRA</strong> (Individual Retirement Account) is a retirement savings account that
              holds physical precious metals instead of paper assets like stocks and bonds. Like traditional
              and Roth IRAs, Gold IRAs offer tax advantages—but instead of mutual funds, your account
              holds real gold bars and coins stored in an IRS-approved depository.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* How It Works */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  How Does a Gold IRA Work?
                </h2>
                <p className="text-slate-600 mb-6">
                  A Gold IRA works similarly to a traditional IRA, with a few key differences. Here&apos;s the process:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Open a Self-Directed IRA",
                      description: "You open a self-directed IRA through a specialized custodian that handles precious metals accounts."
                    },
                    {
                      step: "2",
                      title: "Fund Your Account",
                      description: "Contribute new funds or roll over existing retirement accounts (401k, IRA, TSP) into your Gold IRA."
                    },
                    {
                      step: "3",
                      title: "Purchase Precious Metals",
                      description: "Work with your Gold IRA company to purchase IRS-approved gold, silver, platinum, or palladium."
                    },
                    {
                      step: "4",
                      title: "Secure Storage",
                      description: "Your metals are stored in an IRS-approved depository—not at your home. The depository insures and protects your assets."
                    },
                    {
                      step: "5",
                      title: "Grow Tax-Advantaged",
                      description: "Your precious metals grow tax-deferred (traditional) or tax-free (Roth) until retirement."
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Components */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Key Components of a Gold IRA
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <Building2 className="h-8 w-8 text-amber-600 mb-4" />
                    <h3 className="font-bold text-slate-900 mb-2">Custodian</h3>
                    <p className="text-sm text-slate-600">
                      An IRS-approved financial institution that holds and administers your Gold IRA.
                      They handle paperwork, reporting, and compliance.
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <Lock className="h-8 w-8 text-amber-600 mb-4" />
                    <h3 className="font-bold text-slate-900 mb-2">Depository</h3>
                    <p className="text-sm text-slate-600">
                      A secure, IRS-approved storage facility where your physical gold is held.
                      Depositories provide insurance and 24/7 security.
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <DollarSign className="h-8 w-8 text-amber-600 mb-4" />
                    <h3 className="font-bold text-slate-900 mb-2">Dealer</h3>
                    <p className="text-sm text-slate-600">
                      The company you work with to select and purchase IRS-approved precious metals
                      for your account.
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <Shield className="h-8 w-8 text-amber-600 mb-4" />
                    <h3 className="font-bold text-slate-900 mb-2">IRS-Approved Metals</h3>
                    <p className="text-sm text-slate-600">
                      Only certain gold, silver, platinum, and palladium products meet IRS purity
                      requirements for IRA inclusion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gold IRA vs Traditional IRA */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Gold IRA vs. Traditional IRA
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl border border-slate-200">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="p-4 text-left font-semibold text-slate-700">Feature</th>
                        <th className="p-4 text-center font-semibold text-slate-700">Gold IRA</th>
                        <th className="p-4 text-center font-semibold text-slate-700">Traditional IRA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-slate-100">
                        <td className="p-4 text-slate-700">Assets Held</td>
                        <td className="p-4 text-center">Physical precious metals</td>
                        <td className="p-4 text-center">Stocks, bonds, mutual funds</td>
                      </tr>
                      <tr className="border-t border-slate-100 bg-slate-50">
                        <td className="p-4 text-slate-700">Tax Treatment</td>
                        <td className="p-4 text-center">Tax-deferred or tax-free</td>
                        <td className="p-4 text-center">Tax-deferred or tax-free</td>
                      </tr>
                      <tr className="border-t border-slate-100">
                        <td className="p-4 text-slate-700">Contribution Limits (2026)</td>
                        <td className="p-4 text-center">$7,000 ($8,000 if 50+)</td>
                        <td className="p-4 text-center">$7,000 ($8,000 if 50+)</td>
                      </tr>
                      <tr className="border-t border-slate-100 bg-slate-50">
                        <td className="p-4 text-slate-700">Custodian Required</td>
                        <td className="p-4 text-center">Self-directed custodian</td>
                        <td className="p-4 text-center">Any IRA custodian</td>
                      </tr>
                      <tr className="border-t border-slate-100">
                        <td className="p-4 text-slate-700">Storage</td>
                        <td className="p-4 text-center">IRS-approved depository</td>
                        <td className="p-4 text-center">N/A (electronic records)</td>
                      </tr>
                      <tr className="border-t border-slate-100 bg-slate-50">
                        <td className="p-4 text-slate-700">Annual Fees</td>
                        <td className="p-4 text-center">$150-$300/year</td>
                        <td className="p-4 text-center">Often $0</td>
                      </tr>
                      <tr className="border-t border-slate-100">
                        <td className="p-4 text-slate-700">Inflation Protection</td>
                        <td className="p-4 text-center text-green-600 font-medium">Strong</td>
                        <td className="p-4 text-center text-slate-400">Varies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Benefits of a Gold IRA
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-green-50 rounded-xl p-5 border border-green-200">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-green-800">Portfolio Diversification</h3>
                      <p className="text-sm text-green-700">
                        Gold typically moves independently of stocks and bonds, reducing overall portfolio risk.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-green-50 rounded-xl p-5 border border-green-200">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-green-800">Inflation Hedge</h3>
                      <p className="text-sm text-green-700">
                        Gold has historically maintained purchasing power during periods of high inflation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-green-50 rounded-xl p-5 border border-green-200">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-green-800">Tax Advantages</h3>
                      <p className="text-sm text-green-700">
                        Same tax benefits as traditional IRAs—grow your wealth tax-deferred or tax-free.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-green-50 rounded-xl p-5 border border-green-200">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-green-800">Tangible Asset Ownership</h3>
                      <p className="text-sm text-green-700">
                        You own real, physical gold—not paper promises or derivatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Considerations */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Things to Consider
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-amber-50 rounded-xl p-5 border border-amber-200">
                    <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-amber-800">Higher Fees</h3>
                      <p className="text-sm text-amber-700">
                        Gold IRAs have annual storage and custodian fees that traditional IRAs don&apos;t.
                        Expect $150-$300/year for most accounts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-amber-50 rounded-xl p-5 border border-amber-200">
                    <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-amber-800">No Dividends</h3>
                      <p className="text-sm text-amber-700">
                        Unlike stocks, gold doesn&apos;t pay dividends or interest. Returns come only from price appreciation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-amber-50 rounded-xl p-5 border border-amber-200">
                    <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-amber-800">Price Volatility</h3>
                      <p className="text-sm text-amber-700">
                        Gold prices can fluctuate significantly in the short term, though they&apos;ve been stable long-term.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-amber-50 rounded-xl p-5 border border-amber-200">
                    <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-amber-800">Storage Requirements</h3>
                      <p className="text-sm text-amber-700">
                        IRS requires storage at an approved depository—you cannot store Gold IRA metals at home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Who Should Consider */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Who Should Consider a Gold IRA?
                </h2>
                <p className="text-slate-600 mb-6">
                  A Gold IRA may be right for you if:
                </p>
                <ul className="space-y-3">
                  {[
                    "You want to diversify beyond stocks and bonds",
                    "You're concerned about inflation eroding your savings",
                    "You have a long time horizon (10+ years until retirement)",
                    "You're comfortable with precious metals as an asset class",
                    "You have enough retirement savings to allocate 5-15% to gold",
                    "You want tangible assets as part of your retirement portfolio"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Facts */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 sticky top-4">
                <h3 className="font-bold text-slate-900 mb-4">
                  Gold IRA Quick Facts
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-slate-900">2026 Contribution Limit</div>
                      <div className="text-sm text-slate-500">$7,000 ($8,000 if 50+)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-slate-900">Gold Purity Required</div>
                      <div className="text-sm text-slate-500">99.5% (0.995 fineness)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Landmark className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-slate-900">RMD Age</div>
                      <div className="text-sm text-slate-500">73 (traditional Gold IRA)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Scale className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-slate-900">Typical Allocation</div>
                      <div className="text-sm text-slate-500">5-15% of portfolio</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
                <h3 className="font-bold text-slate-900 mb-2">
                  Get Your Free Gold IRA Kit
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Learn more about Gold IRAs with a free information kit from Augusta Precious Metals.
                </p>
                <Link
                  href="/reviews/augusta-precious-metals"
                  className="block text-center px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow text-sm"
                >
                  Request Free Kit
                </Link>
              </div>

              {/* Related Links */}
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Related Guides</h3>
                <ul className="space-y-2">
                  {[
                    { href: "/learn/gold-ira-rules", label: "Gold IRA Rules & Regulations" },
                    { href: "/learn/ira-approved-gold-coins", label: "IRS Approved Gold Coins" },
                    { href: "/guide/gold-ira-fees", label: "Gold IRA Fees Explained" },
                    { href: "/rollover", label: "How to Roll Over Your 401(k)" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 transition-colors"
                      >
                        <ArrowRight className="h-4 w-4" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Is a Gold IRA a good investment?</h3>
              <p className="text-slate-600">
                A Gold IRA can be a good investment for diversification and inflation protection.
                Most financial advisors suggest allocating 5-15% of your portfolio to precious metals.
                Whether it&apos;s right for you depends on your risk tolerance, time horizon, and retirement goals.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Can I hold physical gold in my IRA?</h3>
              <p className="text-slate-600">
                Yes, but with restrictions. The gold must meet IRS purity requirements (99.5% for gold)
                and must be stored at an IRS-approved depository. You cannot store IRA gold at home.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">What is the minimum investment for a Gold IRA?</h3>
              <p className="text-slate-600">
                Most Gold IRA companies have minimums ranging from $10,000 to $50,000. Augusta Precious Metals
                requires $50,000 minimum, while some companies like Noble Gold start at $20,000.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Are Gold IRA fees tax deductible?</h3>
              <p className="text-slate-600">
                Generally, no. Gold IRA fees paid from your IRA account reduce your balance but aren&apos;t
                separately deductible. However, fees paid from personal funds may be deductible as
                investment expenses, depending on your tax situation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Ready to Learn More About Gold IRAs?"
            subheadline="Augusta Precious Metals offers free one-on-one web conferences to help you understand if a Gold IRA is right for your retirement goals. No pressure, just education."
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
