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
    <main className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-700/20 rounded-full blur-[100px]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">
              <RefreshCw className="h-4 w-4" />
              Tax-Free Transfers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Gold IRA Rollover Guide
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-4">
              After 30 years at the plant, the hospital, or behind the wheel, your 401(k) deserves careful handling. You built it one paycheck at a time. Now it&apos;s time to protect it.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              This is simpler than it sounds. A direct rollover moves your savings to a Gold IRA without taxes or penalties. Your Gold IRA company handles the paperwork. Find your provider below for step-by-step instructions.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Tax-Free Direct Rollover</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>IRS Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <Building2 className="h-4 w-4 text-amber-400" />
                <span>{allProviders.length}+ Providers Covered</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Quick Start */}
      <section className="py-12 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border-b border-amber-500/20">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                Not Sure Where to Start? You&apos;re Not Alone.
              </h2>
              <p className="text-slate-400">
                Most people feel nervous about this process. Augusta handles everything&mdash;they contact your provider, complete the paperwork, and make sure nothing goes wrong.
              </p>
            </div>
            <Link
              href="/reviews/augusta-precious-metals"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg"
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
            <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
              <Landmark className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Rollover by Account Type</h2>
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
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
              <Building2 className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Brokerage Rollovers</h2>
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
            <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
              <Building2 className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Employer Plan Rollovers</h2>
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
        <section className="py-16 bg-slate-800/50">
          <Container>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <Landmark className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Government Plan Rollovers</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            How a Gold IRA Rollover Works
          </h2>
          <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
            Four steps. That&apos;s it. Your Gold IRA company handles most of the work. You don&apos;t touch the money, so there&apos;s no tax hit.
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl mx-auto mb-4 border border-amber-500/30">
                1
              </div>
              <h3 className="font-bold text-white mb-2">Open Gold IRA</h3>
              <p className="text-sm text-slate-400">
                15-minute phone call to set up your new account
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl mx-auto mb-4 border border-amber-500/30">
                2
              </div>
              <h3 className="font-bold text-white mb-2">They Handle Paperwork</h3>
              <p className="text-sm text-slate-400">
                Your Gold IRA company contacts your old provider for you
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl mx-auto mb-4 border border-amber-500/30">
                3
              </div>
              <h3 className="font-bold text-white mb-2">Funds Transfer</h3>
              <p className="text-sm text-slate-400">
                Money moves directly between accounts&mdash;tax-free
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl mx-auto mb-4 border border-amber-500/30">
                4
              </div>
              <h3 className="font-bold text-white mb-2">Choose Your Metals</h3>
              <p className="text-sm text-slate-400">
                Pick IRS-approved gold and silver for your protected retirement
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Questions We Hear All the Time
          </h2>
          <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
            Straight answers. No financial jargon. Just the facts you need.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">Will I owe taxes on this?</h3>
              <p className="text-slate-400">
                No. A direct rollover is 100% tax-free. The money goes straight from your old account to your Gold IRA&mdash;you never touch it. No taxes, no penalties. It&apos;s the same money, just in a different account.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">Can I do this if I&apos;m still working?</h3>
              <p className="text-slate-400">
                If you&apos;re 59&frac12; or older, most plans allow it even while you&apos;re still employed. If you&apos;re leaving your job or already retired, you can roll over anytime. And 401(k)s from old jobs? Those can always be rolled over&mdash;no restrictions.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">How long does this take?</h3>
              <p className="text-slate-400">
                Usually 1-2 weeks from start to finish. Fidelity and Schwab are faster (3-7 days). Employer plans like TIAA or Principal take a bit longer (10-14 days). Your Gold IRA company tracks the whole thing for you.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">What if I mess something up?</h3>
              <p className="text-slate-400">
                That&apos;s why you use a direct rollover&mdash;there&apos;s nothing to mess up. The money goes straight between custodians. You don&apos;t handle it, so there&apos;s no 60-day deadline to worry about and no risk of triggering taxes by accident.
              </p>
              <Link href="/learn/indirect-vs-direct-rollover" className="inline-flex items-center gap-1 text-amber-400 text-sm font-medium mt-3 hover:text-amber-300">
                Why direct rollovers are safer <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 401k Provider Rollover Guides */}
      <section className="py-16">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
              <Building2 className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">401(k) Provider Rollover Guides</h2>
              <p className="text-slate-500">Step-by-step instructions for your specific provider</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/learn/t-rowe-price-401k-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">T. Rowe Price</h3>
              <p className="text-slate-400 text-sm">Rollover guide & process</p>
            </Link>
            <Link href="/learn/transamerica-401k-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Transamerica</h3>
              <p className="text-slate-400 text-sm">Rollover guide & process</p>
            </Link>
            <Link href="/learn/principal-401k-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Principal Financial</h3>
              <p className="text-slate-400 text-sm">Rollover guide & process</p>
            </Link>
            <Link href="/learn/empower-401k-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Empower</h3>
              <p className="text-slate-400 text-sm">Formerly Prudential</p>
            </Link>
            <Link href="/learn/voya-401k-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Voya Financial</h3>
              <p className="text-slate-400 text-sm">Rollover guide & process</p>
            </Link>
            <Link href="/learn/john-hancock-401k-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">John Hancock</h3>
              <p className="text-slate-400 text-sm">Rollover guide & process</p>
            </Link>
            <Link href="/learn/adp-401k-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">ADP Retirement</h3>
              <p className="text-slate-400 text-sm">Rollover guide & process</p>
            </Link>
            <Link href="/learn/paychex-401k-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Paychex</h3>
              <p className="text-slate-400 text-sm">Rollover guide & process</p>
            </Link>
            <Link href="/learn/wells-fargo-401k-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Wells Fargo</h3>
              <p className="text-slate-400 text-sm">Rollover guide & process</p>
            </Link>
            <Link href="/learn/nationwide-401k-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Nationwide</h3>
              <p className="text-slate-400 text-sm">Rollover guide & process</p>
            </Link>
            <Link href="/learn/wells-fargo-401k-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Wells Fargo</h3>
              <p className="text-slate-400 text-sm">Rollover guide & process</p>
            </Link>
            <Link href="/learn/merrill-lynch-401k-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Merrill Lynch</h3>
              <p className="text-slate-400 text-sm">Rollover guide & process</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Related Rollover Guides */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Detailed Rollover Guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link href="/guide/401k-to-gold-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">401(k) to Gold IRA</h3>
              <p className="text-slate-400 text-sm">Complete guide for 401(k) holders</p>
            </Link>
            <Link href="/guide/tsp-to-gold-ira-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">TSP to Gold IRA</h3>
              <p className="text-slate-400 text-sm">For federal employees</p>
            </Link>
            <Link href="/guide/403b-to-gold-ira-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">403(b) to Gold IRA</h3>
              <p className="text-slate-400 text-sm">For teachers & non-profits</p>
            </Link>
            <Link href="/guide/457b-to-gold-ira-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">457(b) to Gold IRA</h3>
              <p className="text-slate-400 text-sm">For government workers</p>
            </Link>
            <Link href="/guide/what-to-do-with-old-401k" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Old 401(k) Options</h3>
              <p className="text-slate-400 text-sm">What to do with old accounts</p>
            </Link>
            <Link href="/guide/401k-alternatives" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">401(k) Alternatives</h3>
              <p className="text-slate-400 text-sm">Beyond traditional options</p>
            </Link>
            <Link href="/learn/indirect-vs-direct-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Direct vs Indirect</h3>
              <p className="text-slate-400 text-sm">Critical rollover rules</p>
            </Link>
            <Link href="/learn/60-day-ira-rollover-rule" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all">
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">60-Day Rule</h3>
              <p className="text-slate-400 text-sm">Rollover deadline explained</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <AugustaCTA
            variant="footer"
            linkContext="fees"
            headline="You Built It. Now Protect It."
            subheadline="After decades of work, your retirement savings deserve real protection. Augusta handles everything&mdash;they call your provider, complete the paperwork, and make sure your rollover goes smoothly. No cost to find out if it&apos;s right for you."
            trackSource="rollover-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
