// src/app/gold-ira-rules/page.tsx
// P3-002: Gold IRA rules and regulations page

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
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
  description: "Complete guide to Gold IRA rules and IRS regulations. Learn about contribution limits, eligible metals, storage requirements, distribution rules, and prohibited transactions.",
  openGraph: {
    title: "Gold IRA Rules 2026 | IRS Regulations & Requirements",
    description: "Everything you need to know about Gold IRA rules - contribution limits, eligible metals, storage requirements, and IRS regulations.",
    type: "article",
  },
};

export default function GoldIRARulesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">
              <BookOpen className="h-4 w-4" />
              IRS Regulations
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gold IRA Rules & Regulations
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Understanding IRS rules is essential for maintaining your Gold IRA&apos;s tax-advantaged status.
              Here&apos;s everything you need to know about Gold IRA regulations in 2026.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Shield className="h-4 w-4 text-green-400" />
                <span>IRS Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Calendar className="h-4 w-4 text-blue-400" />
                <span>Updated for 2026</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Table of Contents */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="font-semibold text-slate-700">Jump to:</span>
            <a href="#contribution-limits" className="text-amber-600 hover:text-amber-700">Contribution Limits</a>
            <a href="#eligible-metals" className="text-amber-600 hover:text-amber-700">Eligible Metals</a>
            <a href="#storage-rules" className="text-amber-600 hover:text-amber-700">Storage Rules</a>
            <a href="#distribution-rules" className="text-amber-600 hover:text-amber-700">Distribution Rules</a>
            <a href="#prohibited-transactions" className="text-amber-600 hover:text-amber-700">Prohibited Transactions</a>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Contribution Limits */}
              <div id="contribution-limits">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <DollarSign className="h-7 w-7 text-amber-600" />
                  Contribution Limits
                </h2>
                <p className="text-slate-600 mb-6">
                  Gold IRAs follow the same contribution limits as traditional and Roth IRAs.
                  For 2026, the limits are:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">$7,000</div>
                    <div className="text-sm text-slate-600">Under Age 50</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">$8,000</div>
                    <div className="text-sm text-slate-600">Age 50+ (Catch-Up)</div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">Important Note</h4>
                  <p className="text-sm text-blue-700">
                    These limits apply to total IRA contributions. If you contribute $7,000 to a traditional IRA,
                    you cannot also contribute $7,000 to a Gold IRA—the combined total cannot exceed $7,000
                    (or $8,000 if 50+).
                  </p>
                </div>
              </div>

              {/* Rollovers vs Transfers */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 mb-4">Rollovers vs. Transfers: No Contribution Limits</h3>
                <p className="text-slate-600 mb-4">
                  Contribution limits only apply to new money. If you&apos;re moving funds from an existing
                  retirement account, there&apos;s no limit on how much you can transfer:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-slate-900">Direct Rollover:</span>
                      <span className="text-slate-600"> Funds move directly between custodians. No limit, no taxes.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-slate-900">Trustee-to-Trustee Transfer:</span>
                      <span className="text-slate-600"> Same as direct rollover. No limit, no taxes.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-slate-900">Indirect Rollover:</span>
                      <span className="text-slate-600"> You receive funds and have 60 days to deposit. 20% withholding applies. One per year.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eligible Metals */}
              <div id="eligible-metals">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Scale className="h-7 w-7 text-amber-600" />
                  IRS-Approved Precious Metals
                </h2>
                <p className="text-slate-600 mb-6">
                  Not all gold and silver can go into an IRA. The IRS requires specific purity standards:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full bg-white rounded-xl border border-slate-200">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="p-4 text-left font-semibold text-slate-700">Metal</th>
                        <th className="p-4 text-center font-semibold text-slate-700">Minimum Purity</th>
                        <th className="p-4 text-left font-semibold text-slate-700">Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-slate-100">
                        <td className="p-4 font-medium text-slate-900">Gold</td>
                        <td className="p-4 text-center">99.5% (0.995)</td>
                        <td className="p-4 text-slate-600">American Gold Eagle, Canadian Gold Maple Leaf, Gold bars</td>
                      </tr>
                      <tr className="border-t border-slate-100 bg-slate-50">
                        <td className="p-4 font-medium text-slate-900">Silver</td>
                        <td className="p-4 text-center">99.9% (0.999)</td>
                        <td className="p-4 text-slate-600">American Silver Eagle, Canadian Silver Maple Leaf, Silver bars</td>
                      </tr>
                      <tr className="border-t border-slate-100">
                        <td className="p-4 font-medium text-slate-900">Platinum</td>
                        <td className="p-4 text-center">99.95% (0.9995)</td>
                        <td className="p-4 text-slate-600">American Platinum Eagle, Canadian Platinum Maple Leaf</td>
                      </tr>
                      <tr className="border-t border-slate-100 bg-slate-50">
                        <td className="p-4 font-medium text-slate-900">Palladium</td>
                        <td className="p-4 text-center">99.95% (0.9995)</td>
                        <td className="p-4 text-slate-600">Canadian Palladium Maple Leaf</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      Allowed in Gold IRA
                    </h4>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• American Gold Eagle coins</li>
                      <li>• American Gold Buffalo coins</li>
                      <li>• Canadian Gold Maple Leaf</li>
                      <li>• Austrian Gold Philharmonic</li>
                      <li>• Credit Suisse gold bars</li>
                      <li>• PAMP Suisse gold bars</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-xl p-5 border border-red-200">
                    <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                      <XCircle className="h-5 w-5" />
                      NOT Allowed in Gold IRA
                    </h4>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• Collectible/numismatic coins</li>
                      <li>• South African Krugerrands</li>
                      <li>• British Sovereigns</li>
                      <li>• Swiss 20 Francs</li>
                      <li>• Gold jewelry</li>
                      <li>• Any gold below 99.5% purity</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-amber-50 rounded-xl p-5 border border-amber-200">
                  <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Exception: American Gold Eagle
                  </h4>
                  <p className="text-sm text-amber-700">
                    The American Gold Eagle is only 91.67% pure (22 karat), but Congress specifically
                    exempted it from the purity requirement. It&apos;s one of the most popular IRA-eligible gold coins.
                  </p>
                </div>
              </div>

              {/* Storage Rules */}
              <div id="storage-rules">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Landmark className="h-7 w-7 text-amber-600" />
                  Storage Requirements
                </h2>
                <p className="text-slate-600 mb-6">
                  IRS rules are clear: Gold IRA metals must be stored at an approved depository.
                  You cannot keep them at home or in a personal safe deposit box.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">Approved Depositories</h4>
                    <p className="text-slate-600 text-sm mb-4">
                      Your custodian will work with IRS-approved depositories. Popular options include:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
                      <div>• Delaware Depository</div>
                      <div>• Brink&apos;s Global Services</div>
                      <div>• HSBC Bank USA</div>
                      <div>• JPMorgan Chase</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">Segregated vs. Commingled Storage</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-slate-900">Segregated:</span>
                          <span className="text-slate-600"> Your metals stored separately with your name. Higher fees but you get your exact coins back.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-slate-900">Commingled:</span>
                          <span className="text-slate-600"> Your metals stored with other investors&apos; metals. Lower fees but you get equivalent metals back.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-5 border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    Home Storage is NOT Allowed
                  </h4>
                  <p className="text-sm text-red-700">
                    Despite what some promoters claim, storing Gold IRA metals at home is a prohibited transaction.
                    Doing so could disqualify your entire IRA, resulting in taxes and penalties on the full balance.
                    Learn more in our <Link href="/learn/home-storage-gold-ira" className="underline">home storage Gold IRA guide</Link>.
                  </p>
                </div>
              </div>

              {/* Distribution Rules */}
              <div id="distribution-rules">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Calendar className="h-7 w-7 text-amber-600" />
                  Distribution Rules
                </h2>
                <p className="text-slate-600 mb-6">
                  Gold IRA distributions follow the same rules as traditional IRAs:
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-3">Early Withdrawal (Before 59½)</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>10% early withdrawal penalty applies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Distribution is taxed as ordinary income (traditional IRA)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Some exceptions: first home purchase, disability, medical expenses</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-3">Qualified Distributions (After 59½)</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>No early withdrawal penalty</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Traditional Gold IRA: Taxed as ordinary income</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Roth Gold IRA: Tax-free (if account is 5+ years old)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-3">Required Minimum Distributions (RMDs)</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Traditional Gold IRA: RMDs begin at age 73</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Roth Gold IRA: No RMDs during owner&apos;s lifetime</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>50% penalty for failing to take RMD</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-2">Distribution Options</h4>
                    <p className="text-sm text-blue-700">
                      When you take a distribution from your Gold IRA, you can receive the physical metals
                      (in-kind distribution) or sell them and receive cash. Many retirees take physical
                      delivery of their gold when they reach retirement age.
                    </p>
                  </div>
                </div>
              </div>

              {/* Prohibited Transactions */}
              <div id="prohibited-transactions">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <XCircle className="h-7 w-7 text-red-600" />
                  Prohibited Transactions
                </h2>
                <p className="text-slate-600 mb-6">
                  The IRS prohibits certain transactions that could give you unfair tax advantages.
                  Violating these rules can disqualify your entire IRA:
                </p>

                <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-6">
                  <h4 className="font-bold text-red-800 mb-4">Disqualified Persons</h4>
                  <p className="text-sm text-red-700 mb-4">
                    You cannot conduct IRA transactions with &quot;disqualified persons,&quot; which include:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-red-700">
                    <li>• You (the IRA owner)</li>
                    <li>• Your spouse</li>
                    <li>• Your parents</li>
                    <li>• Your children</li>
                    <li>• Your grandchildren</li>
                    <li>• Your IRA custodian</li>
                    <li>• Your financial advisor</li>
                    <li>• Any businesses you own 50%+</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-slate-200">
                    <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Selling Personal Gold to Your IRA</h4>
                      <p className="text-sm text-slate-600">
                        You cannot sell gold you already own to your IRA or buy gold from your IRA for personal use.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-slate-200">
                    <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Using IRA Gold as Collateral</h4>
                      <p className="text-sm text-slate-600">
                        You cannot use your Gold IRA assets as collateral for a loan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-slate-200">
                    <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Personal Use or Possession</h4>
                      <p className="text-sm text-slate-600">
                        Taking personal possession of IRA gold (except as a distribution) is prohibited.
                        This includes &quot;home storage&quot; arrangements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-amber-50 rounded-xl p-5 border border-amber-200">
                  <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Consequences of Prohibited Transactions
                  </h4>
                  <p className="text-sm text-amber-700">
                    If you engage in a prohibited transaction, the IRS may consider your entire IRA
                    distributed as of the first day of the year. This means:
                    immediate taxes on the full balance, plus 10% penalty if you&apos;re under 59½.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Reference */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 sticky top-4">
                <h3 className="font-bold text-slate-900 mb-4">
                  2026 Quick Reference
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-slate-900">Contribution Limit</div>
                      <div className="text-sm text-slate-500">$7,000 ($8,000 if 50+)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Scale className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-slate-900">Gold Purity</div>
                      <div className="text-sm text-slate-500">99.5% minimum</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-slate-900">Early Withdrawal Age</div>
                      <div className="text-sm text-slate-500">59½</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Landmark className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-slate-900">RMD Age</div>
                      <div className="text-sm text-slate-500">73 (traditional only)</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
                <h3 className="font-bold text-slate-900 mb-2">
                  Questions About Gold IRA Rules?
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Augusta Precious Metals offers free consultations with IRA specialists who can
                  answer your questions about rules and regulations.
                </p>
                <Link
                  href="/reviews/augusta-precious-metals"
                  className="block text-center px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow text-sm"
                >
                  Get Free Consultation
                </Link>
              </div>

              {/* Related Links */}
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Related Guides</h3>
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

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Open a Compliant Gold IRA Today"
            subheadline="Augusta Precious Metals ensures your Gold IRA meets all IRS requirements. Their team handles custodian setup, depository selection, and helps you choose eligible metals."
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
