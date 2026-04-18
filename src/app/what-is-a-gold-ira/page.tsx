// src/app/what-is-a-gold-ira/page.tsx
// P3-001: Core educational page - What is a Gold IRA

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { FAQSection } from "@/components/seo/FAQSection";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { articleSchema, breadcrumbSchema, faqSchema, financialProductSchema } from "@/lib/schema";
import { getPageFAQs } from "@/data/faqs";
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
  description: "Learn what a Gold IRA is and how it works. Understand IRS rules, custodians, storage requirements, and if it's right for you.",
  openGraph: {
    title: "What Is a Gold IRA? Complete Guide 2026",
    description: "Everything you need to know about Gold IRAs - how they work, IRS rules, custodians, storage, and whether a precious metals IRA is right for you.",
    type: "article",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
  },
};

export default function WhatIsGoldIRAPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0C0D18]">
      <SchemaScript schema={articleSchema({ title: "What Is a Gold IRA? Complete Guide 2026", description: "Learn what a Gold IRA is, how it works, IRS rules, custodians, storage requirements, and if it's right for your retirement.", slug: "/what-is-a-gold-ira" })} />
      <SchemaScript schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "What Is a Gold IRA?", url: "/what-is-a-gold-ira" }])} />
      <SchemaScript schema={faqSchema(getPageFAQs("what-is-a-gold-ira"))} />
      <SchemaScript schema={financialProductSchema({ name: "Gold IRA (Self-Directed Precious Metals IRA)", description: "A self-directed Individual Retirement Account that holds IRS-approved physical gold, silver, platinum, and palladium. Offers tax-deferred or tax-free growth with the same contribution limits as traditional IRAs ($7,000 in 2026, $8,000 if 50+). Requires a specialized custodian and IRS-approved depository storage.", provider: "Augusta Precious Metals", url: "/what-is-a-gold-ira", category: "Retirement Investment Account" })} />
      <Navbar />

      {/* Answer-First GEO Block */}
      <section className="pt-8 pb-4 bg-white">
        <Container>
          <AnswerFirst
            answer="A Gold IRA is a self-directed Individual Retirement Account that holds physical gold, silver, platinum, or palladium instead of paper assets like stocks and bonds. It offers the same tax advantages as a traditional IRA — tax-deferred growth or tax-free withdrawals (Roth) — but with the added security of tangible precious metals stored in an IRS-approved depository."
            keyFacts={[
              "Same tax benefits as traditional or Roth IRAs — just different assets inside",
              "Metals must be 99.5% pure (gold) or 99.9% pure (silver) to qualify",
              "IRS requires storage in an approved depository — home storage is illegal",
              "2026 contribution limits: $7,000/year ($8,000 if 50+), rollovers have no limit",
            ]}
            className="max-w-3xl mx-auto"
          />
        </Container>
      </section>

      {/* Header */}
      <header className="bg-[#0C0D18] text-[#F6F4EF] py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#D4A94E] font-bold tracking-widest uppercase text-xs mb-4">
              <HelpCircle className="h-4 w-4" />
              Gold IRA Basics
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              After 30 Years of Hard Work, Your 401(k) Deserves Protection
            </h1>
            <p className="text-xl text-[#D0CCC4] leading-relaxed mb-8">
              You&apos;ve already done the hard part—saving. Whether you&apos;re a retired nurse, factory worker, truck driver, or teacher,
              a Gold IRA lets you convert part of your savings into physical gold that you actually own.
              Not paper promises. Real metal, in a real vault.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-[#2A2D42] px-4 py-2 rounded-lg">
                <Shield className="h-4 w-4 text-green-600" />
                <span>IRS Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-[#2A2D42] px-4 py-2 rounded-lg">
                <Lock className="h-4 w-4 text-blue-600" />
                <span>Tax-Advantaged</span>
              </div>
              <div className="flex items-center gap-2 bg-[#2A2D42] px-4 py-2 rounded-lg">
                <TrendingUp className="h-4 w-4 text-[#D4A94E]" />
                <span>Inflation Hedge</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Quick Answer */}
      <section className="py-12 bg-[rgba(220,38,38,0.1)] border-b border-[#B22234]/20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[#F6F4EF] mb-4">
              The Straight Answer (No Sales Pitch)
            </h2>
            <p className="text-lg text-[#D0CCC4] leading-relaxed">
              A <strong>Gold IRA</strong> is simply a retirement account that holds physical gold instead of stocks.
              After decades of watching Wall Street ride your savings up and down, many folks like you are
              moving a portion into something they can actually see and touch. Same tax benefits as your
              current IRA—your gold just sits in an insured vault instead of on a brokerage screen.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* How It Works */}
              <div>
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6">
                  How Does a Gold IRA Work?
                </h2>
                <p className="text-[#A8A39A] mb-6">
                  It&apos;s simpler than you might think. If you&apos;ve managed a 401(k) for 20 or 30 years, this won&apos;t be complicated. Here&apos;s the process:
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
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(220,38,38,0.18)] text-[#D4A94E] flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#F6F4EF]">{item.title}</h3>
                        <p className="text-[#A8A39A] text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Components */}
              <div>
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6">
                  Key Components of a Gold IRA
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                    <Building2 className="h-8 w-8 text-[#D4A94E] mb-4" />
                    <h3 className="font-bold text-[#F6F4EF] mb-2">Custodian</h3>
                    <p className="text-sm text-[#A8A39A]">
                      An IRS-approved financial institution that holds and administers your Gold IRA.
                      They handle paperwork, reporting, and compliance.
                    </p>
                  </div>
                  <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                    <Lock className="h-8 w-8 text-[#D4A94E] mb-4" />
                    <h3 className="font-bold text-[#F6F4EF] mb-2">Depository</h3>
                    <p className="text-sm text-[#A8A39A]">
                      A secure, IRS-approved storage facility where your physical gold is held.
                      Depositories provide insurance and 24/7 security.
                    </p>
                  </div>
                  <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                    <DollarSign className="h-8 w-8 text-[#D4A94E] mb-4" />
                    <h3 className="font-bold text-[#F6F4EF] mb-2">Dealer</h3>
                    <p className="text-sm text-[#A8A39A]">
                      The company you work with to select and purchase IRS-approved precious metals
                      for your account.
                    </p>
                  </div>
                  <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                    <Shield className="h-8 w-8 text-[#D4A94E] mb-4" />
                    <h3 className="font-bold text-[#F6F4EF] mb-2">IRS-Approved Metals</h3>
                    <p className="text-sm text-[#A8A39A]">
                      Only certain gold, silver, platinum, and palladium products meet IRS purity
                      requirements for IRA inclusion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gold IRA vs Traditional IRA */}
              <div>
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6">
                  Gold IRA vs. Traditional IRA
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-[#0C0D18] rounded-xl border border-[#2A2D42]">
                    <thead>
                      <tr className="bg-[#121423]">
                        <th className="p-4 text-left font-semibold text-[#D0CCC4]">Feature</th>
                        <th className="p-4 text-center font-semibold text-[#D0CCC4]">Gold IRA</th>
                        <th className="p-4 text-center font-semibold text-[#D0CCC4]">Traditional IRA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#2A2D42]">
                        <td className="p-4 text-[#D0CCC4]">Assets Held</td>
                        <td className="p-4 text-center text-[#A8A39A]">Physical precious metals</td>
                        <td className="p-4 text-center text-[#A8A39A]">Stocks, bonds, mutual funds</td>
                      </tr>
                      <tr className="border-t border-[#2A2D42] bg-[#121423]/50">
                        <td className="p-4 text-[#D0CCC4]">Tax Treatment</td>
                        <td className="p-4 text-center text-[#A8A39A]">Tax-deferred or tax-free</td>
                        <td className="p-4 text-center text-[#A8A39A]">Tax-deferred or tax-free</td>
                      </tr>
                      <tr className="border-t border-[#2A2D42]">
                        <td className="p-4 text-[#D0CCC4]">Contribution Limits (2026)</td>
                        <td className="p-4 text-center text-[#A8A39A]">$7,000 ($8,000 if 50+)</td>
                        <td className="p-4 text-center text-[#A8A39A]">$7,000 ($8,000 if 50+)</td>
                      </tr>
                      <tr className="border-t border-[#2A2D42] bg-[#121423]/50">
                        <td className="p-4 text-[#D0CCC4]">Custodian Required</td>
                        <td className="p-4 text-center text-[#A8A39A]">Self-directed custodian</td>
                        <td className="p-4 text-center text-[#A8A39A]">Any IRA custodian</td>
                      </tr>
                      <tr className="border-t border-[#2A2D42]">
                        <td className="p-4 text-[#D0CCC4]">Storage</td>
                        <td className="p-4 text-center text-[#A8A39A]">IRS-approved depository</td>
                        <td className="p-4 text-center text-[#A8A39A]">N/A (electronic records)</td>
                      </tr>
                      <tr className="border-t border-[#2A2D42] bg-[#121423]/50">
                        <td className="p-4 text-[#D0CCC4]">Annual Fees</td>
                        <td className="p-4 text-center text-[#A8A39A]">$150-$300/year</td>
                        <td className="p-4 text-center text-[#A8A39A]">Often $0</td>
                      </tr>
                      <tr className="border-t border-[#2A2D42]">
                        <td className="p-4 text-[#D0CCC4]">Inflation Protection</td>
                        <td className="p-4 text-center text-green-600 font-medium">Strong</td>
                        <td className="p-4 text-center text-[#A8A39A]">Varies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6">
                  Benefits of a Gold IRA
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-[rgba(46,139,87,0.08)] rounded-xl p-5 border border-green-200">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-green-700">Portfolio Diversification</h3>
                      <p className="text-sm text-green-600">
                        Gold typically moves independently of stocks and bonds, reducing overall portfolio risk.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[rgba(46,139,87,0.08)] rounded-xl p-5 border border-green-200">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-green-700">Inflation Hedge</h3>
                      <p className="text-sm text-green-600">
                        Gold has historically maintained purchasing power during periods of high inflation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[rgba(46,139,87,0.08)] rounded-xl p-5 border border-green-200">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-green-700">Tax Advantages</h3>
                      <p className="text-sm text-green-600">
                        Same tax benefits as traditional IRAs—grow your wealth tax-deferred or tax-free.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[rgba(46,139,87,0.08)] rounded-xl p-5 border border-green-200">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-green-700">Tangible Asset Ownership</h3>
                      <p className="text-sm text-green-600">
                        You own real, physical gold—not paper promises or derivatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Considerations */}
              <div>
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6">
                  Things to Consider
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-[#161828] rounded-xl p-5 border border-amber-200">
                    <AlertTriangle className="h-6 w-6 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-amber-700">Higher Fees</h3>
                      <p className="text-sm text-[#D4A94E]">
                        Gold IRAs have annual storage and custodian fees that traditional IRAs don&apos;t.
                        Expect $150-$300/year for most accounts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#161828] rounded-xl p-5 border border-amber-200">
                    <AlertTriangle className="h-6 w-6 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-amber-700">No Dividends</h3>
                      <p className="text-sm text-[#D4A94E]">
                        Unlike stocks, gold doesn&apos;t pay dividends or interest. Returns come only from price appreciation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#161828] rounded-xl p-5 border border-amber-200">
                    <AlertTriangle className="h-6 w-6 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-amber-700">Price Volatility</h3>
                      <p className="text-sm text-[#D4A94E]">
                        Gold prices can fluctuate significantly in the short term, though they&apos;ve been stable long-term.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#161828] rounded-xl p-5 border border-amber-200">
                    <AlertTriangle className="h-6 w-6 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-amber-700">Storage Requirements</h3>
                      <p className="text-sm text-[#D4A94E]">
                        IRS requires storage at an approved depository—you cannot store Gold IRA metals at home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Who Should Consider */}
              <div>
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6">
                  Is a Gold IRA Right for You?
                </h2>
                <p className="text-[#A8A39A] mb-6">
                  After decades in the workforce, you know what matters: protecting what you&apos;ve built. A Gold IRA makes sense if:
                </p>
                <ul className="space-y-3">
                  {[
                    "You've saved $100k or more and want to protect a portion with something tangible",
                    "You're tired of watching your 401(k) drop 20% every time the market panics",
                    "Your body says retire at 62, but your financial advisor says 67—you need a bridge",
                    "You've seen too many promises from Wall Street that didn't pan out",
                    "You want something real—gold bars and coins, not just numbers on a screen",
                    "You're not looking to get rich quick, just to keep what you've earned"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#D0CCC4]">
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
              <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42] sticky top-4">
                <h3 className="font-bold text-[#F6F4EF] mb-4">
                  Gold IRA Quick Facts
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-[#D4A94E] flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#F6F4EF]">2026 Contribution Limit</div>
                      <div className="text-sm text-[#A8A39A]">$7,000 ($8,000 if 50+)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-[#D4A94E] flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#F6F4EF]">Gold Purity Required</div>
                      <div className="text-sm text-[#A8A39A]">99.5% (0.995 fineness)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Landmark className="h-5 w-5 text-[#D4A94E] flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#F6F4EF]">RMD Age</div>
                      <div className="text-sm text-[#A8A39A]">73 (traditional Gold IRA)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Scale className="h-5 w-5 text-[#D4A94E] flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#F6F4EF]">Typical Allocation</div>
                      <div className="text-sm text-[#A8A39A]">5-15% of portfolio</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#B22234]/20 to-[#B22234]/10 rounded-xl p-6 border border-[#B22234]/20">
                <h3 className="font-bold text-[#F6F4EF] mb-2">
                  Get Your Free Gold IRA Kit
                </h3>
                <p className="text-sm text-[#A8A39A] mb-4">
                  Learn more about Gold IRAs with a free information kit from Augusta Precious Metals.
                </p>
                <Link
                  href="/reviews/augusta-precious-metals"
                  className="block text-center px-4 py-2.5 bg-[#DC2626] text-white font-bold rounded-lg hover:bg-[#991B1B] transition-all shadow text-sm"
                >
                  Request Free Kit
                </Link>
              </div>

              {/* Related Links */}
              <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                <h3 className="font-bold text-[#F6F4EF] mb-4">Related Guides</h3>
                <ul className="space-y-2">
                  {[
                    { href: "/gold-ira-rules", label: "Gold IRA Rules & Regulations" },
                    { href: "/learn/ira-approved-gold-coins", label: "IRS Approved Gold Coins" },
                    { href: "/guide/gold-ira-fees", label: "Gold IRA Fees Explained" },
                    { href: "/rollover", label: "How to Roll Over Your 401(k)" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-[#A8A39A] hover:text-[#D4A94E] transition-colors"
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
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <h2 className="text-2xl font-bold text-[#F6F4EF] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42]">
              <h3 className="font-bold text-[#F6F4EF] mb-2">Is a Gold IRA a good investment?</h3>
              <p className="text-[#A8A39A]">
                Gold isn&apos;t about getting rich—it&apos;s about protection. After 30 years of saving, the last thing
                you need is another 2008-style crash wiping out 40% of your nest egg right before retirement.
                Most advisors suggest putting 5-15% of your savings in gold. Not your whole portfolio—just enough
                to sleep better at night knowing part of your money is in something real.
              </p>
            </div>
            <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42]">
              <h3 className="font-bold text-[#F6F4EF] mb-2">Can I actually touch my gold? Will I ever see it?</h3>
              <p className="text-[#A8A39A]">
                This is the most common question we hear. While your gold must be stored in an IRS-approved
                depository (not at home) to keep the tax benefits, you absolutely own it—it&apos;s real gold with
                your name on the account. Most depositories allow scheduled visits, and when you retire,
                you can take physical delivery of your metals (you&apos;ll just pay taxes as a distribution).
                Many retirees do exactly this.
              </p>
            </div>
            <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42]">
              <h3 className="font-bold text-[#F6F4EF] mb-2">What is the minimum investment for a Gold IRA?</h3>
              <p className="text-[#A8A39A]">
                Most Gold IRA companies have minimums ranging from $10,000 to $50,000. Augusta Precious Metals
                requires $50,000 minimum, while some companies like Noble Gold start at $20,000.
              </p>
            </div>
            <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42]">
              <h3 className="font-bold text-[#F6F4EF] mb-2">Are Gold IRA fees tax deductible?</h3>
              <p className="text-[#A8A39A]">
                Generally, no. Gold IRA fees paid from your IRA account reduce your balance but aren&apos;t
                separately deductible. However, fees paid from personal funds may be deductible as
                investment expenses, depending on your tax situation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="You've Done the Hard Part. Let's Protect It."
            subheadline="Augusta Precious Metals has zero BBB complaints and no pushy salespeople. Their team will explain everything in plain English—no Wall Street jargon, no pressure. Just honest answers from people who respect what you've built."
            trackSource="what-is-gold-ira"
          />
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <FAQSection
            faqs={getPageFAQs("what-is-a-gold-ira")}
            title="Gold IRA Frequently Asked Questions"
            className="max-w-3xl"
            includeSchema={false}
          />
        </Container>
      </section>

      <section className="py-12 bg-[#0C0D18]">
        <Container>
          <AutoRelatedContent currentUrl="/what-is-a-gold-ira" />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
