// src/app/gold-ira-rules/page.tsx
// P3-002: Gold IRA rules and regulations page

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
import { SourcesSection } from "@/components/content/SourcesSection";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getCanonicalUrl } from "@/lib/metadata";
import { getPageFAQs } from "@/data/faqs";
import {
  Shield,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  DollarSign,
  Calendar,
  Scale,
  FileText,
  Landmark,
  ArrowRight,
  BookOpen
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gold IRA Rules 2026 | IRS Regulations & Requirements",
  description: "Gold IRA rules guide. Learn IRS contribution limits, eligible metals, storage requirements, distribution rules, and prohibited transactions.",
  alternates: { canonical: getCanonicalUrl("/gold-ira-rules") },
  openGraph: {
    title: "Gold IRA Rules 2026 | IRS Regulations & Requirements",
    description: "Everything you need to know about Gold IRA rules - contribution limits, eligible metals, storage requirements, and IRS regulations.",
    type: "article",
  },
};

export default function GoldIRARulesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0C0D18]">
      <SchemaScript schema={articleSchema({ title: "Gold IRA Rules 2026 | IRS Regulations & Requirements", description: "Gold IRA rules guide covering contribution limits, eligible metals, storage requirements, and distribution rules.", slug: "/gold-ira-rules" })} />
      <SchemaScript schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Gold IRA Rules", url: "/gold-ira-rules" }])} />
      <SchemaScript schema={faqSchema(getPageFAQs("gold-ira-rules"))} />
      <Navbar />

      {/* Answer-First GEO Block */}
      <section className="pt-8 pb-4 bg-white">
        <Container>
          <AnswerFirst
            answer="Gold IRA rules require that metals be at least 99.5% pure (.995 fineness), stored in an IRS-approved depository (not at home), and held by a licensed custodian. Contribution limits for 2026 are $7,000 ($8,000 if 50+). Withdrawals before 59½ incur a 10% penalty plus income tax. Required Minimum Distributions begin at age 73."
            keyFacts={[
              "Gold purity: minimum 99.5% (.995 fineness) — American Eagles are the exception at 91.67%",
              "Home storage is a prohibited transaction — triggers full tax liability + 10% penalty",
              "2026 contribution limits: $7,000/year ($8,000 if 50+), rollovers unlimited",
              "RMDs start at age 73 for Traditional; Roth Gold IRAs have no RMDs during owner\'s lifetime",
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
              <BookOpen className="h-4 w-4" />
              IRS Regulations
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gold IRA Rules & Regulations
            </h1>
            <p className="text-xl text-[#D0CCC4] leading-relaxed mb-8">
              Understanding IRS rules is essential for maintaining your Gold IRA&apos;s tax-advantaged status.
              Here&apos;s everything you need to know about Gold IRA regulations in 2026.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-[#161828] border border-[#2A2D42] px-4 py-2 rounded-lg">
                <Shield className="h-4 w-4 text-green-500" />
                <span>IRS Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-[#161828] border border-[#2A2D42] px-4 py-2 rounded-lg">
                <Calendar className="h-4 w-4 text-blue-500" />
                <span>Updated for 2026</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Table of Contents */}
      <section className="py-8 bg-[#121423] border-b border-[#2A2D42]">
        <Container>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="font-semibold text-[#D0CCC4]">Jump to:</span>
            <a href="#contribution-limits" className="text-[#D4A94E] hover:text-[#8B1A28]">Contribution Limits</a>
            <a href="#eligible-metals" className="text-[#D4A94E] hover:text-[#8B1A28]">Eligible Metals</a>
            <a href="#storage-rules" className="text-[#D4A94E] hover:text-[#8B1A28]">Storage Rules</a>
            <a href="#distribution-rules" className="text-[#D4A94E] hover:text-[#8B1A28]">Distribution Rules</a>
            <a href="#prohibited-transactions" className="text-[#D4A94E] hover:text-[#8B1A28]">Prohibited Transactions</a>
            <a href="#tax-rules" className="text-[#D4A94E] hover:text-[#8B1A28]">Tax Rules</a>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* 2026 Contribution Limits Callout */}
              <div className="bg-[#161828] border border-[rgba(197,149,46,0.32)] rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-[#D4A94E]" />
                  2026 Gold IRA Contribution Limits
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-3">
                  <div className="bg-[#161828] rounded-lg p-4 border border-amber-100 text-center">
                    <div className="text-3xl font-bold text-amber-700">$7,000</div>
                    <div className="text-sm text-amber-800/70 mt-1">Per year (under age 50)</div>
                  </div>
                  <div className="bg-[#161828] rounded-lg p-4 border border-amber-100 text-center">
                    <div className="text-3xl font-bold text-amber-700">$8,000</div>
                    <div className="text-sm text-amber-800/70 mt-1">Per year (age 50+ catch-up)</div>
                  </div>
                </div>
                <p className="text-sm text-amber-800/70">
                  These limits are set by IRS Publication 590-A and apply to your combined IRA contributions (traditional + Roth + Gold IRA). Rollovers and trustee-to-trustee transfers have no dollar limit.
                </p>
              </div>

              {/* Contribution Limits */}
              <div id="contribution-limits">
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6 flex items-center gap-3">
                  <DollarSign className="h-7 w-7 text-[#D4A94E]" />
                  Contribution Limits
                </h2>
                <p className="text-[#A8A39A] mb-6">
                  Gold IRAs follow the same contribution limits as traditional and Roth IRAs.
                  For 2026, the limits are:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42] text-center">
                    <div className="text-3xl font-bold text-[#D4A94E] mb-2">$7,000</div>
                    <div className="text-sm text-[#A8A39A]">Under Age 50</div>
                  </div>
                  <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42] text-center">
                    <div className="text-3xl font-bold text-[#D4A94E] mb-2">$8,000</div>
                    <div className="text-sm text-[#A8A39A]">Age 50+ (Catch-Up)</div>
                  </div>
                </div>
                <div className="bg-[#121423] rounded-xl p-5 border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">Important Note</h4>
                  <p className="text-sm text-blue-700/80">
                    These limits apply to total IRA contributions. If you contribute $7,000 to a traditional IRA,
                    you cannot also contribute $7,000 to a Gold IRA—the combined total cannot exceed $7,000
                    (or $8,000 if 50+).
                  </p>
                </div>
              </div>

              {/* Rollovers vs Transfers */}
              <div className="bg-[#0C0D18] rounded-xl border border-[#2A2D42] p-6">
                <h3 className="font-bold text-[#F6F4EF] mb-4">Rollovers vs. Transfers: No Contribution Limits</h3>
                <p className="text-[#A8A39A] mb-4">
                  Contribution limits only apply to new money. If you&apos;re moving funds from an existing
                  retirement account, there&apos;s no limit on how much you can transfer:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-[#F6F4EF]">Direct Rollover:</span>
                      <span className="text-[#A8A39A]"> Funds move directly between custodians. No limit, no taxes.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-[#F6F4EF]">Trustee-to-Trustee Transfer:</span>
                      <span className="text-[#A8A39A]"> Same as direct rollover. No limit, no taxes.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-[#F6F4EF]">Indirect Rollover:</span>
                      <span className="text-[#A8A39A]"> You receive funds and have 60 days to deposit. 20% withholding applies. One per year.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eligible Metals */}
              <div id="eligible-metals">
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6 flex items-center gap-3">
                  <Scale className="h-7 w-7 text-[#D4A94E]" />
                  IRS-Approved Precious Metals
                </h2>
                <p className="text-[#A8A39A] mb-6">
                  Not all gold and silver can go into an IRA. The IRS requires specific purity standards:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full bg-[#0C0D18] rounded-xl border border-[#2A2D42]">
                    <thead>
                      <tr className="bg-[#121423]">
                        <th className="p-4 text-left font-semibold text-[#D0CCC4]">Metal</th>
                        <th className="p-4 text-center font-semibold text-[#D0CCC4]">Minimum Purity</th>
                        <th className="p-4 text-left font-semibold text-[#D0CCC4]">Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#2A2D42]">
                        <td className="p-4 font-medium text-[#F6F4EF]">Gold</td>
                        <td className="p-4 text-center text-[#A8A39A]">99.5% (0.995)</td>
                        <td className="p-4 text-[#A8A39A]">American Gold Eagle, Canadian Gold Maple Leaf, Gold bars</td>
                      </tr>
                      <tr className="border-t border-[#2A2D42] bg-[#121423]/50">
                        <td className="p-4 font-medium text-[#F6F4EF]">Silver</td>
                        <td className="p-4 text-center text-[#A8A39A]">99.9% (0.999)</td>
                        <td className="p-4 text-[#A8A39A]">American Silver Eagle, Canadian Silver Maple Leaf, Silver bars</td>
                      </tr>
                      <tr className="border-t border-[#2A2D42]">
                        <td className="p-4 font-medium text-[#F6F4EF]">Platinum</td>
                        <td className="p-4 text-center text-[#A8A39A]">99.95% (0.9995)</td>
                        <td className="p-4 text-[#A8A39A]">American Platinum Eagle, Canadian Platinum Maple Leaf</td>
                      </tr>
                      <tr className="border-t border-[#2A2D42] bg-[#121423]/50">
                        <td className="p-4 font-medium text-[#F6F4EF]">Palladium</td>
                        <td className="p-4 text-center text-[#A8A39A]">99.95% (0.9995)</td>
                        <td className="p-4 text-[#A8A39A]">Canadian Palladium Maple Leaf</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[rgba(46,139,87,0.08)] rounded-xl p-5 border border-green-200">
                    <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      Allowed in Gold IRA
                    </h4>
                    <ul className="space-y-2 text-sm text-green-700/80">
                      <li>- American Gold Eagle coins</li>
                      <li>- American Gold Buffalo coins</li>
                      <li>- Canadian Gold Maple Leaf</li>
                      <li>- Austrian Gold Philharmonic</li>
                      <li>- Credit Suisse gold bars</li>
                      <li>- PAMP Suisse gold bars</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(220,38,38,0.08)] rounded-xl p-5 border border-red-200">
                    <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
                      <XCircle className="h-5 w-5" />
                      NOT Allowed in Gold IRA
                    </h4>
                    <ul className="space-y-2 text-sm text-red-700/80">
                      <li>- Collectible/numismatic coins</li>
                      <li>- South African Krugerrands</li>
                      <li>- British Sovereigns</li>
                      <li>- Swiss 20 Francs</li>
                      <li>- Gold jewelry</li>
                      <li>- Any gold below 99.5% purity</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-[#161828] rounded-xl p-5 border border-amber-200">
                  <h4 className="font-bold text-[#D4A94E] mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Exception: American Gold Eagle
                  </h4>
                  <p className="text-sm text-amber-700/80">
                    The American Gold Eagle is only 91.67% pure (22 karat), but Congress specifically
                    exempted it from the purity requirement. It&apos;s one of the most popular IRA-eligible gold coins.
                  </p>
                </div>
              </div>

              {/* Storage Rules */}
              <div id="storage-rules">
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6 flex items-center gap-3">
                  <Landmark className="h-7 w-7 text-[#D4A94E]" />
                  Storage Requirements
                </h2>
                <p className="text-[#A8A39A] mb-6">
                  IRS rules are clear: Gold IRA metals must be stored at an approved depository.
                  You cannot keep them at home or in a personal safe deposit box.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                    <h4 className="font-bold text-[#F6F4EF] mb-2">Approved Depositories</h4>
                    <p className="text-[#A8A39A] text-sm mb-4">
                      Your custodian will work with IRS-approved depositories. Popular options include:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm text-[#D0CCC4]">
                      <div>- Delaware Depository</div>
                      <div>- Brink&apos;s Global Services</div>
                      <div>- HSBC Bank USA</div>
                      <div>- JPMorgan Chase</div>
                    </div>
                  </div>

                  <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                    <h4 className="font-bold text-[#F6F4EF] mb-2">Segregated vs. Commingled Storage</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-[#F6F4EF]">Segregated:</span>
                          <span className="text-[#A8A39A]"> Your metals stored separately with your name. Higher fees but you get your exact coins back.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-[#F6F4EF]">Commingled:</span>
                          <span className="text-[#A8A39A]"> Your metals stored with other investors&apos; metals. Lower fees but you get equivalent metals back.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[rgba(220,38,38,0.08)] rounded-xl p-5 border border-red-200">
                  <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    Home Storage is NOT Allowed
                  </h4>
                  <p className="text-sm text-red-700/80">
                    Despite what some promoters claim, storing Gold IRA metals at home is a prohibited transaction.
                    Doing so could disqualify your entire IRA, resulting in taxes and penalties on the full balance.
                    Learn more in our <Link href="/learn/home-storage-gold-ira" className="underline">home storage Gold IRA guide</Link>.
                  </p>
                </div>
              </div>

              {/* Distribution Rules */}
              <div id="distribution-rules">
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6 flex items-center gap-3">
                  <Calendar className="h-7 w-7 text-[#D4A94E]" />
                  Distribution Rules
                </h2>
                <p className="text-[#A8A39A] mb-6">
                  Gold IRA distributions follow the same rules as traditional IRAs:
                </p>

                <div className="space-y-4">
                  <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                    <h4 className="font-bold text-[#F6F4EF] mb-3">Early Withdrawal (Before 59 1/2)</h4>
                    <ul className="space-y-2 text-sm text-[#A8A39A]">
                      <li className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>10% early withdrawal penalty applies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Distribution is taxed as ordinary income (traditional IRA)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Some exceptions: first home purchase, disability, medical expenses</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                    <h4 className="font-bold text-[#F6F4EF] mb-3">Qualified Distributions (After 59 1/2)</h4>
                    <ul className="space-y-2 text-sm text-[#A8A39A]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>No early withdrawal penalty</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                        <span>Traditional Gold IRA: Taxed as ordinary income</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Roth Gold IRA: Tax-free (if account is 5+ years old)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                    <h4 className="font-bold text-[#F6F4EF] mb-3">Required Minimum Distributions (RMDs)</h4>
                    <ul className="space-y-2 text-sm text-[#A8A39A]">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                        <span>Traditional Gold IRA: RMDs begin at age 73</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Roth Gold IRA: No RMDs during owner&apos;s lifetime</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                        <span>50% penalty for failing to take RMD</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#121423] rounded-xl p-5 border border-blue-200">
                    <h4 className="font-bold text-blue-600 mb-2">Distribution Options</h4>
                    <p className="text-sm text-blue-700/80">
                      When you take a distribution from your Gold IRA, you can receive the physical metals
                      (in-kind distribution) or sell them and receive cash. Many retirees take physical
                      delivery of their gold when they reach retirement age.
                    </p>
                  </div>
                </div>
              </div>

              {/* Prohibited Transactions */}
              <div id="prohibited-transactions">
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6 flex items-center gap-3">
                  <XCircle className="h-7 w-7 text-red-500" />
                  Prohibited Transactions
                </h2>
                <p className="text-[#A8A39A] mb-6">
                  The IRS prohibits certain transactions that could give you unfair tax advantages.
                  Violating these rules can disqualify your entire IRA:
                </p>

                <div className="bg-[rgba(220,38,38,0.08)] rounded-xl p-6 border border-red-200 mb-6">
                  <h4 className="font-bold text-red-600 mb-4">Disqualified Persons</h4>
                  <p className="text-sm text-red-700/80 mb-4">
                    You cannot conduct IRA transactions with &quot;disqualified persons,&quot; which include:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-red-700/80">
                    <li>- You (the IRA owner)</li>
                    <li>- Your spouse</li>
                    <li>- Your parents</li>
                    <li>- Your children</li>
                    <li>- Your grandchildren</li>
                    <li>- Your IRA custodian</li>
                    <li>- Your financial advisor</li>
                    <li>- Any businesses you own 50%+</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-[#0C0D18] rounded-xl p-5 border border-[#2A2D42]">
                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[#F6F4EF]">Selling Personal Gold to Your IRA</h4>
                      <p className="text-sm text-[#A8A39A]">
                        You cannot sell gold you already own to your IRA or buy gold from your IRA for personal use.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#0C0D18] rounded-xl p-5 border border-[#2A2D42]">
                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[#F6F4EF]">Using IRA Gold as Collateral</h4>
                      <p className="text-sm text-[#A8A39A]">
                        You cannot use your Gold IRA assets as collateral for a loan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#0C0D18] rounded-xl p-5 border border-[#2A2D42]">
                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[#F6F4EF]">Personal Use or Possession</h4>
                      <p className="text-sm text-[#A8A39A]">
                        Taking personal possession of IRA gold (except as a distribution) is prohibited.
                        This includes &quot;home storage&quot; arrangements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-[#161828] rounded-xl p-5 border border-amber-200">
                  <h4 className="font-bold text-[#D4A94E] mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Consequences of Prohibited Transactions
                  </h4>
                  <p className="text-sm text-amber-700/80">
                    If you engage in a prohibited transaction, the IRS may consider your entire IRA
                    distributed as of the first day of the year. This means:
                    immediate taxes on the full balance, plus 10% penalty if you&apos;re under 59 1/2.
                  </p>
                </div>
              </div>
              {/* Gold IRA Tax Rules */}
              <div id="tax-rules">
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6 flex items-center gap-3">
                  <FileText className="h-7 w-7 text-[#D4A94E]" />
                  Gold IRA Tax Rules
                </h2>
                <p className="text-[#A8A39A] mb-6">
                  Gold IRA tax rules depend on whether you have a Traditional or Roth Gold IRA. Understanding the tax treatment helps you plan withdrawals and minimize your tax burden in retirement.
                </p>

                <div className="space-y-4">
                  <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                    <h4 className="font-bold text-[#F6F4EF] mb-3">Tax-Deferred Growth (Traditional Gold IRA)</h4>
                    <p className="text-sm text-[#A8A39A] mb-3">
                      Contributions to a Traditional Gold IRA may be tax-deductible depending on your income and whether you have a workplace retirement plan. Your gold investments grow tax-deferred, meaning you pay no capital gains tax as your metals appreciate.
                    </p>
                    <ul className="space-y-2 text-sm text-[#A8A39A]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Contributions may be tax-deductible (subject to income limits)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>No capital gains tax while metals are held inside the IRA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                        <span>Withdrawals taxed as ordinary income (not capital gains rates)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                    <h4 className="font-bold text-[#F6F4EF] mb-3">Roth Gold IRA Tax Treatment</h4>
                    <p className="text-sm text-[#A8A39A] mb-3">
                      Roth Gold IRA contributions are made with after-tax dollars. The major advantage is that qualified withdrawals are completely tax-free, including all gains from gold appreciation.
                    </p>
                    <ul className="space-y-2 text-sm text-[#A8A39A]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Qualified withdrawals are 100% tax-free (account must be 5+ years old)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>No Required Minimum Distributions during the owner&apos;s lifetime</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                        <span>Contributions are NOT tax-deductible (funded with after-tax money)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                    <h4 className="font-bold text-[#F6F4EF] mb-3">Required Minimum Distributions (RMDs)</h4>
                    <p className="text-sm text-[#A8A39A] mb-3">
                      Traditional Gold IRA holders must begin taking Required Minimum Distributions at age 73 under the SECURE 2.0 Act. Failing to take your RMD results in a 25% excise tax on the amount not withdrawn (reduced from 50% under prior law).
                    </p>
                    <ul className="space-y-2 text-sm text-[#A8A39A]">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                        <span>Traditional Gold IRA: RMDs begin at age 73</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Roth Gold IRA: No RMDs during owner&apos;s lifetime</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                        <span>Gold IRA RMDs can be taken as physical metals (in-kind) or cash after liquidation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[rgba(220,38,38,0.08)] rounded-xl p-6 border border-red-200">
                    <h4 className="font-bold text-red-600 mb-3">Early Withdrawal Penalties</h4>
                    <p className="text-sm text-red-700/80 mb-3">
                      Withdrawing from a Gold IRA before age 59 1/2 triggers both income tax and a 10% early withdrawal penalty. Some exceptions apply:
                    </p>
                    <ul className="space-y-2 text-sm text-red-700/80">
                      <li className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>10% penalty + ordinary income tax on the distribution amount</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Penalty exceptions: disability, first-time home purchase ($10k max), certain medical expenses, substantially equal periodic payments (72(t))</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Reference */}
              <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42] sticky top-4">
                <h3 className="font-bold text-[#F6F4EF] mb-4">
                  2026 Quick Reference
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-[#D4A94E] flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#F6F4EF]">Contribution Limit</div>
                      <div className="text-sm text-[#A8A39A]">$7,000 ($8,000 if 50+)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Scale className="h-5 w-5 text-[#D4A94E] flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#F6F4EF]">Gold Purity</div>
                      <div className="text-sm text-[#A8A39A]">99.5% minimum</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-[#D4A94E] flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#F6F4EF]">Early Withdrawal Age</div>
                      <div className="text-sm text-[#A8A39A]">59 1/2</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Landmark className="h-5 w-5 text-[#D4A94E] flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#F6F4EF]">RMD Age</div>
                      <div className="text-sm text-[#A8A39A]">73 (traditional only)</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-[rgba(220,38,38,0.1)] rounded-xl p-6 border border-[#B22234]/20">
                <h3 className="font-bold text-[#F6F4EF] mb-2">
                  Questions About Gold IRA Rules?
                </h3>
                <p className="text-sm text-[#A8A39A] mb-4">
                  Augusta Precious Metals offers free consultations with IRA specialists who can
                  answer your questions about rules and regulations.
                </p>
                <Link
                  href="/reviews/augusta-precious-metals"
                  className="block text-center px-4 py-2.5 bg-[#DC2626] text-white font-bold rounded-lg hover:bg-[#8B1A28] transition-all shadow text-sm"
                >
                  Get Free Consultation
                </Link>
              </div>

              {/* Related Links */}
              <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                <h3 className="font-bold text-[#F6F4EF] mb-4">Related Guides</h3>
                <ul className="space-y-2">
                  {[
                    { href: "/what-is-a-gold-ira", label: "What Is a Gold IRA?" },
                    { href: "/learn/ira-approved-gold-coins", label: "IRS Approved Gold Coins" },
                    { href: "/learn/home-storage-gold-ira", label: "Home Storage IRA Truth" },
                    { href: "/learn/gold-ira-tax-rules", label: "Gold IRA Tax Rules" },
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

      {/* CTA */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <AugustaCTA
            variant="footer"
            linkContext="fees"
            headline="Open a Compliant Gold IRA Today"
            subheadline="Augusta Precious Metals ensures your Gold IRA meets all IRS requirements. Their team handles custodian setup, depository selection, and helps you choose eligible metals."
            trackSource="gold-ira-rules"
          />
        </Container>
      </section>

      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <FAQSection
            faqs={getPageFAQs("gold-ira-rules")}
            title="Gold IRA Rules FAQ"
            className="max-w-3xl"
            includeSchema={false}
          />
        </Container>
      </section>

      <section className="py-12 bg-[#0C0D18]">
        <Container>
          <SourcesSection
            sources={[
              { name: "IRS Publication 590-A: Contributions to Individual Retirement Arrangements", url: "https://www.irs.gov/publications/p590a", accessDate: "2026-03-15" },
              { name: "IRS Publication 590-B: Distributions from Individual Retirement Arrangements", url: "https://www.irs.gov/publications/p590b", accessDate: "2026-03-15" },
              { name: "IRC Section 408(m)(3) — Investment in Collectibles", url: "https://www.law.cornell.edu/uscode/text/26/408", accessDate: "2026-03-15" },
              { name: "SECURE 2.0 Act — Required Minimum Distribution Changes", url: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-required-minimum-distributions-rmds", accessDate: "2026-03-15" },
            ]}
            lastVerified="2026-03-15"
          />
          <AutoRelatedContent currentUrl="/gold-ira-rules" />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
