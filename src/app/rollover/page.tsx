// src/app/rollover/page.tsx
// Phase 2: Rollover hub page

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ProviderCard, AccountTypeCard } from "@/components/rollover/ProviderCard";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { getAllProviders, getAllAccountTypes, getProvidersByType } from "@/data/rollovers";
import { RefreshCw, Building2, Landmark, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Gold IRA Rollover Guide 2026 | Transfer 401k, IRA, TSP Tax-Free",
  description: "Complete guide to rolling over your 401k, IRA, TSP, or other retirement account to a Gold IRA. Step-by-step instructions for Fidelity, Vanguard, Schwab & more.",
  openGraph: {
    title: "Gold IRA Rollover Guide 2026 | Transfer 401k, IRA, TSP Tax-Free",
    description: "Complete guide to rolling over your retirement account to a Gold IRA. Tax-free transfers from Fidelity, Vanguard, Schwab & more.",
    type: "website",
  },
};

export default function RolloverPage() {
  const allProviders = getAllProviders();
  const accountTypes = getAllAccountTypes();
  const brokerageProviders = getProvidersByType("brokerage");
  const employerProviders = getProvidersByType("employer");
  const governmentProviders = getProvidersByType("government");

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">
              <RefreshCw className="h-4 w-4" />
              Tax-Free Transfers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gold IRA Rollover Guide
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Transfer your 401(k), IRA, TSP, or other retirement account to a Gold IRA without taxes or penalties. Find step-by-step instructions for your specific provider.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Tax-Free Direct Rollover</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>IRS Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Building2 className="h-4 w-4 text-amber-400" />
                <span>{allProviders.length}+ Providers Covered</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Quick Start */}
      <section className="py-12 bg-amber-50 border-b border-amber-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Ready to Roll Over Your Retirement Account?
              </h2>
              <p className="text-slate-600">
                Our recommended Gold IRA company handles the entire rollover process for you.
              </p>
            </div>
            <Link
              href="/reviews/augusta-precious-metals"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg"
            >
              Start Your Rollover
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Account Types */}
      <section className="py-16">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Landmark className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Rollover by Account Type</h2>
              <p className="text-slate-500">Select your retirement account type</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {accountTypes.slice(0, 9).map((accountType) => (
              <AccountTypeCard key={accountType.slug} accountType={accountType} />
            ))}
          </div>
        </Container>
      </section>

      {/* Brokerage Providers */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building2 className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Brokerage Rollovers</h2>
              <p className="text-slate-500">Roll over from Fidelity, Vanguard, Schwab & more</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {brokerageProviders.map((provider) => (
              <ProviderCard key={provider.slug} provider={provider} />
            ))}
          </div>
        </Container>
      </section>

      {/* Employer Plans */}
      <section className="py-16">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-green-100 rounded-lg">
              <Building2 className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Employer Plan Rollovers</h2>
              <p className="text-slate-500">Roll over from TIAA, Principal, Empower & more</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {employerProviders.map((provider) => (
              <ProviderCard key={provider.slug} provider={provider} />
            ))}
          </div>
        </Container>
      </section>

      {/* Government Plans */}
      {governmentProviders.length > 0 && (
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Landmark className="h-5 w-5 text-purple-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Government Plan Rollovers</h2>
                <p className="text-slate-500">TSP and federal employee retirement plans</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {governmentProviders.map((provider) => (
                <ProviderCard key={provider.slug} provider={provider} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* How Rollovers Work */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            How a Gold IRA Rollover Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Open Gold IRA</h3>
              <p className="text-sm text-slate-600">
                Choose a Gold IRA company and open your new account
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Request Rollover</h3>
              <p className="text-sm text-slate-600">
                Contact your current provider to initiate the transfer
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Funds Transfer</h3>
              <p className="text-sm text-slate-600">
                Money moves directly to your Gold IRA custodian
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Buy Metals</h3>
              <p className="text-sm text-slate-600">
                Purchase IRS-approved gold and silver for your IRA
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Common Rollover Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Is a Gold IRA rollover tax-free?</h3>
              <p className="text-slate-600">
                Yes, a direct rollover from a traditional retirement account to a traditional Gold IRA is 100% tax-free. The funds transfer directly between custodians without you taking possession, so there are no taxes or penalties.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Can I roll over my 401(k) while still employed?</h3>
              <p className="text-slate-600">
                It depends on your plan. Many plans allow "in-service distributions" once you reach age 59½. Some plans allow earlier access. Check with your HR department or plan administrator. You can always roll over 401(k)s from previous employers.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">How long does a rollover take?</h3>
              <p className="text-slate-600">
                Most rollovers complete within 5-14 business days, depending on your current provider. Brokerages like Schwab and Fidelity are typically faster (3-7 days), while employer plans may take 10-14 days.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">What's the difference between direct and indirect rollover?</h3>
              <p className="text-slate-600">
                A direct rollover transfers funds straight from your old account to your new Gold IRA—no taxes withheld. An indirect rollover gives you the funds first, and you have 60 days to deposit them into your Gold IRA. Always choose direct rollover to avoid complications.
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
            headline="Ready to Protect Your Retirement with Gold?"
            subheadline="Augusta Precious Metals handles your entire rollover process. Their team contacts your current provider, completes the paperwork, and ensures a tax-free transfer."
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
