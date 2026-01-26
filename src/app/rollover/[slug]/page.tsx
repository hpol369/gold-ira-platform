// src/app/rollover/[slug]/page.tsx
// Dynamic rollover page - handles both providers and account types

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { RolloverSteps, TipsWarnings, RolloverTimeline } from "@/components/rollover/RolloverSteps";
import { ProviderCard } from "@/components/rollover/ProviderCard";
import {
  getProviderBySlug,
  getProviderSlugs,
  getAllProviders,
  getAccountTypeBySlug,
  getAccountTypeSlugs,
  getAllAccountTypes
} from "@/data/rollovers";
import {
  Building2,
  Phone,
  Globe,
  Clock,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Shield,
  FileText,
  Landmark,
  DollarSign,
  Calendar,
  AlertTriangle,
  ArrowRight
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

// Check if slug is an account type page (ends with -to-gold-ira)
function isAccountTypePage(slug: string): boolean {
  return slug.endsWith("-to-gold-ira");
}

// Extract account type slug from URL slug
function extractAccountTypeSlug(slug: string): string {
  return slug.replace("-to-gold-ira", "");
}

export async function generateStaticParams() {
  const providerSlugs = getProviderSlugs();
  const accountTypeSlugs = getAccountTypeSlugs();

  // Provider pages: /rollover/fidelity
  const providerParams = providerSlugs.map((slug) => ({ slug }));

  // Account type pages: /rollover/401k-to-gold-ira
  const accountTypeParams = accountTypeSlugs.map((slug) => ({
    slug: `${slug}-to-gold-ira`
  }));

  return [...providerParams, ...accountTypeParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (isAccountTypePage(slug)) {
    const accountTypeSlug = extractAccountTypeSlug(slug);
    const accountType = getAccountTypeBySlug(accountTypeSlug);

    if (!accountType) {
      return { title: "Account Type Not Found" };
    }

    return {
      title: `${accountType.name} to Gold IRA Rollover Guide 2026`,
      description: `Complete guide to rolling over your ${accountType.fullName} to a Gold IRA. Learn the rules, restrictions, and step-by-step process for a tax-free transfer.`,
      openGraph: {
        title: `${accountType.name} to Gold IRA Rollover Guide 2026`,
        description: `Step-by-step instructions for rolling over your ${accountType.name} to a Gold IRA without taxes or penalties.`,
        type: "article",
      },
    };
  }

  const provider = getProviderBySlug(slug);

  if (!provider) {
    return { title: "Provider Not Found" };
  }

  return {
    title: `${provider.name} Gold IRA Rollover Guide 2026`,
    description: `Complete guide to rolling over your ${provider.name} retirement account to a Gold IRA. ${provider.typicalTimeline} processing time. Tax-free direct transfer.`,
    openGraph: {
      title: `${provider.name} Gold IRA Rollover Guide 2026`,
      description: `Step-by-step instructions for rolling over your ${provider.name} account to a Gold IRA. Tax-free transfer in ${provider.typicalTimeline}.`,
      type: "article",
    },
  };
}

// Account Type Page Component
function AccountTypeRolloverPage({ accountType }: { accountType: NonNullable<ReturnType<typeof getAccountTypeBySlug>> }) {
  const allAccountTypes = getAllAccountTypes();
  const relatedAccountTypes = allAccountTypes
    .filter(at => at.slug !== accountType.slug && at.taxTreatment === accountType.taxTreatment)
    .slice(0, 3);

  // Get providers that handle this account type
  const allProviders = getAllProviders();
  const relevantProviders = allProviders
    .filter(p => p.accountTypes.some(at => at.toLowerCase().includes(accountType.name.toLowerCase().replace(/[()]/g, ''))))
    .slice(0, 6);

  return (
    <main className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 md:py-16">
        <Container>
          <Link
            href="/rollover"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Rollover Hub
          </Link>

          <div className="flex items-start gap-4 mb-6">
            <div className="p-4 bg-white/10 rounded-xl">
              <Landmark className="h-8 w-8 text-amber-400" />
            </div>
            <div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                accountType.taxTreatment === "pre-tax" ? "bg-blue-500/20 text-blue-300" :
                accountType.taxTreatment === "post-tax" ? "bg-green-500/20 text-green-300" :
                "bg-purple-500/20 text-purple-300"
              }`}>
                {accountType.taxTreatment === "pre-tax" ? "Pre-Tax" :
                 accountType.taxTreatment === "post-tax" ? "Post-Tax (Roth)" : "Both Options"}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mt-2">
                {accountType.name} to Gold IRA Rollover
              </h1>
            </div>
          </div>

          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-4">
            After years of contributing to your {accountType.fullName}, you&apos;ve built something real. Now it&apos;s about protecting what you&apos;ve earned&mdash;not chasing more growth.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mb-8">
            This is simpler than it sounds. A direct rollover moves your {accountType.name} to a Gold IRA without taxes or penalties. Most people complete the process in under two weeks.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
              <DollarSign className="h-4 w-4 text-green-400" />
              <span>2026 Limit: ${accountType.contributionLimit2026.toLocaleString()}</span>
            </div>
            {accountType.catchUpContribution && accountType.catchUpContribution > 0 && (
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Calendar className="h-4 w-4 text-blue-400" />
                <span>Age {accountType.catchUpAge}+ Catch-up: ${accountType.catchUpContribution.toLocaleString()}</span>
              </div>
            )}
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span>{accountType.canRolloverToGoldIRA ? "Eligible for Gold IRA" : "Not Eligible"}</span>
            </div>
          </div>
        </Container>
      </header>

      {/* Quick Start CTA */}
      <section className="py-8 bg-amber-500/10 border-b border-amber-500/20">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-white">
                Nervous About Getting This Right?
              </h2>
              <p className="text-slate-400 text-sm">
                Most people are. Augusta handles the whole process&mdash;they contact your {accountType.name} provider, complete the paperwork, and make sure nothing falls through the cracks.
              </p>
            </div>
            <Link
              href="/reviews/augusta-precious-metals"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg text-sm whitespace-nowrap"
            >
              Get Free Rollover Kit
            </Link>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Rollover Steps */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <h3 className="font-bold text-lg text-white mb-2">
                  How to Roll Over Your {accountType.name} to a Gold IRA
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Six steps. Your Gold IRA company handles most of the work. You don&apos;t touch the money, so there&apos;s no tax hit.
                </p>
                <div className="space-y-4">
                  {[
                    `Make sure your ${accountType.name} allows rollovers (if you're retiring or leaving your job, you're good to go)`,
                    "Pick a Gold IRA company and set up your new account (takes about 15 minutes)",
                    "They handle the paperwork and contact your current provider for you",
                    "Request goes in for a direct rollover (money goes straight between accounts)",
                    "Funds transfer directly&mdash;you never touch the money, so no taxes",
                    "Choose your gold and silver. Your metals ship to an IRS-approved vault."
                  ].map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-slate-300">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Account Details */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-4">{accountType.name} Account Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-sm text-slate-400 mb-1">2026 Contribution Limit</div>
                    <div className="text-xl font-bold text-white">
                      ${accountType.contributionLimit2026.toLocaleString()}
                    </div>
                  </div>
                  {accountType.catchUpContribution && accountType.catchUpContribution > 0 && (
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-sm text-slate-400 mb-1">Catch-Up (Age {accountType.catchUpAge}+)</div>
                      <div className="text-xl font-bold text-white">
                        +${accountType.catchUpContribution.toLocaleString()}
                      </div>
                    </div>
                  )}
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-sm text-slate-400 mb-1">Tax Treatment</div>
                    <div className="text-xl font-bold text-white">
                      {accountType.taxTreatment === "pre-tax" ? "Pre-Tax" :
                       accountType.taxTreatment === "post-tax" ? "Post-Tax (Roth)" : "Both Available"}
                    </div>
                  </div>
                  {accountType.requiredMinDistributionAge > 0 && (
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-sm text-slate-400 mb-1">RMD Age</div>
                      <div className="text-xl font-bold text-white">
                        {accountType.requiredMinDistributionAge}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Rollover Restrictions */}
              <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/20">
                <h3 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Things to Know Before You Start
                </h3>
                <p className="text-amber-300/70 text-sm mb-4">
                  Most {accountType.name} rollovers are straightforward, but here are a few rules to be aware of:
                </p>
                <ul className="space-y-3">
                  {accountType.rolloverRestrictions.map((restriction, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-amber-300">
                      <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{restriction}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Holds This Account Type */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <h3 className="font-bold text-lg text-white mb-4">
                  Is This You?
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  If you&apos;ve been contributing to a {accountType.name} for years, you&apos;ve done something most Americans couldn&apos;t. Now let&apos;s protect it.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-slate-400 mb-1">Who Has This Account</div>
                    <p className="text-slate-300">{accountType.eligibility}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-400 mb-1">Typical Account Holder</div>
                    <p className="text-slate-300">{accountType.typicalHolder}</p>
                  </div>
                </div>
              </div>

              {/* Providers That Handle This Account Type */}
              {relevantProviders.length > 0 && (
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                  <h3 className="font-bold text-lg text-white mb-4">
                    Common {accountType.name} Providers
                  </h3>
                  <p className="text-slate-400 mb-4">
                    If your {accountType.name} is held at one of these providers, click through for specific rollover instructions.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {relevantProviders.map((provider) => (
                      <Link
                        key={provider.slug}
                        href={`/rollover/${provider.slug}`}
                        className="group flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-amber-500/10 transition-colors border border-white/10"
                      >
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-slate-400 group-hover:text-amber-400" />
                          <span className="font-medium text-white group-hover:text-amber-400">
                            {provider.name}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-amber-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Key Facts Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 sticky top-4">
                <h3 className="font-bold text-white mb-4">
                  The Bottom Line
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">Yes, You Can Roll It Over</div>
                      <div className="text-sm text-slate-400">
                        {accountType.canRolloverToGoldIRA ? "Your " + accountType.name + " is eligible for a Gold IRA rollover" : "Some restrictions may apply"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">No Taxes. No Penalties.</div>
                      <div className="text-sm text-slate-400">
                        Direct rollover means you don&apos;t touch the money
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">About 1-2 Weeks</div>
                      <div className="text-sm text-slate-400">
                        Most rollovers finish in 5-14 business days
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-start gap-2 text-sm text-slate-300">
                    <Shield className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>
                      You worked hard for this money. A direct rollover keeps it protected and tax-free.
                    </span>
                  </div>
                </div>
              </div>

              {/* Augusta CTA */}
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl p-6 border border-amber-500/30">
                <h3 className="font-bold text-white mb-2">
                  Don&apos;t Want to Do This Alone?
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  Most people don&apos;t. Augusta contacts your {accountType.name} provider, handles the paperwork,
                  and makes sure everything goes right. No cost to get started.
                </p>
                <Link
                  href="/reviews/augusta-precious-metals"
                  className="block text-center px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow text-sm"
                >
                  Get Free Rollover Kit
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white/5">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-4">
            Common Questions About {accountType.name} Rollovers
          </h2>
          <p className="text-slate-400 mb-8">
            Straight answers. No financial jargon.
          </p>
          <div className="max-w-3xl space-y-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">
                Can I actually do this with my {accountType.name}?
              </h3>
              <p className="text-slate-300">
                Yes. {accountType.name}s are eligible for Gold IRA rollovers. The key is using a
                direct rollover&mdash;the money goes straight from one custodian to the other. You never
                touch it, so there&apos;s no tax bill.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">
                Will I owe taxes on the rollover?
              </h3>
              <p className="text-slate-300">
                No. A direct rollover is 100% tax-free. The money moves between accounts without
                you taking possession. No taxes, no penalties, no 60-day deadline to worry about.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">
                How much can I roll over?
              </h3>
              <p className="text-slate-300">
                There&apos;s no limit on rollover amounts. You can move all of it or just a portion&mdash;whatever
                feels right for protecting your retirement. If you&apos;re still working, check if your plan
                has any in-service withdrawal rules.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">
                What kind of Gold IRA do I need?
              </h3>
              <p className="text-slate-300">
                {accountType.taxTreatment === "pre-tax"
                  ? `Your ${accountType.name} is pre-tax money, so it rolls into a traditional Gold IRA. Same tax treatment, just different assets. If you wanted a Roth Gold IRA instead, you'd owe taxes on the conversion.`
                  : accountType.taxTreatment === "post-tax"
                  ? `Your ${accountType.name} is after-tax money (Roth), so it rolls into a Roth Gold IRA. You already paid taxes on this money—now it grows and comes out tax-free.`
                  : `Your ${accountType.name} might have both pre-tax and Roth money. Pre-tax goes to a traditional Gold IRA, Roth goes to a Roth Gold IRA. Your Gold IRA company will help sort this out.`
                }
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Account Types */}
      {relatedAccountTypes.length > 0 && (
        <section className="py-12">
          <Container>
            <h2 className="text-2xl font-bold text-white mb-6">
              Related Account Types
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedAccountTypes.map((at) => (
                <Link
                  key={at.slug}
                  href={`/rollover/${at.slug}-to-gold-ira`}
                  className="group block bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-amber-500/30 hover:bg-white/10 transition-all"
                >
                  <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors mb-2">
                    {at.name} to Gold IRA
                  </h3>
                  <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                    {at.description}
                  </p>
                  <span className="text-amber-400 text-sm font-semibold flex items-center gap-1">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-12 bg-white/5">
        <Container>
          <AugustaCTA
            variant="footer"
            linkContext="fees"
            headline={`You've Earned This. Now Protect It.`}
            subheadline={`After years of building your ${accountType.name}, it's time to think about protection—not just growth. Augusta handles the whole rollover process. They contact your provider, complete the paperwork, and make sure your money is safe every step of the way.`}
            trackSource={`rollover-${accountType.slug}`}
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}

// Provider Page Component
function ProviderRolloverPage({ provider }: { provider: NonNullable<ReturnType<typeof getProviderBySlug>> }) {
  const allProviders = getAllProviders();
  const relatedProviders = allProviders
    .filter(p => p.type === provider.type && p.slug !== provider.slug)
    .slice(0, 3);

  const accountTypeDetails = provider.accountTypes
    .map(name => {
      const slug = name.toLowerCase()
        .replace(/[()]/g, '')
        .replace(/ /g, '-');
      return getAccountTypeBySlug(slug);
    })
    .filter(Boolean);

  return (
    <main className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 md:py-16">
        <Container>
          <Link
            href="/rollover"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Rollover Hub
          </Link>

          <div className="flex items-start gap-4 mb-6">
            <div className="p-4 bg-white/10 rounded-xl">
              <Building2 className="h-8 w-8 text-amber-400" />
            </div>
            <div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                provider.type === "brokerage" ? "bg-blue-500/20 text-blue-300" :
                provider.type === "employer" ? "bg-green-500/20 text-green-300" :
                "bg-purple-500/20 text-purple-300"
              }`}>
                {provider.type === "brokerage" ? "Brokerage" :
                 provider.type === "employer" ? "Employer Plan" : "Government"}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mt-2">
                {provider.name} Gold IRA Rollover
              </h1>
            </div>
          </div>

          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-4">
            After decades of work, your {provider.name} account represents real money&mdash;money you earned one paycheck at a time. Here&apos;s exactly how to move it to a Gold IRA without taxes or penalties.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mb-8">
            This is simpler than it sounds. {provider.description}
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
              <Clock className="h-4 w-4 text-amber-400" />
              <span>{provider.typicalTimeline}</span>
            </div>
            {provider.phone && (
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Phone className="h-4 w-4 text-green-400" />
                <span>{provider.phone}</span>
              </div>
            )}
            {provider.onlineRollover && (
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Globe className="h-4 w-4 text-blue-400" />
                <span>Online Rollover Available</span>
              </div>
            )}
            {provider.directRollover && (
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Direct Rollover</span>
              </div>
            )}
          </div>
        </Container>
      </header>

      {/* Quick Start CTA */}
      <section className="py-8 bg-amber-500/10 border-b border-amber-500/20">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-white">
                Nervous About Doing This Yourself?
              </h2>
              <p className="text-slate-400 text-sm">
                Most people are. Augusta calls {provider.name} for you, handles all the paperwork, and makes sure nothing goes wrong.
              </p>
            </div>
            <Link
              href="/reviews/augusta-precious-metals"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg text-sm whitespace-nowrap"
            >
              Get Free Rollover Assistance
            </Link>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Rollover Steps */}
              <RolloverSteps
                steps={provider.rolloverSteps}
                providerName={provider.name}
              />

              {/* Timeline Info */}
              <RolloverTimeline
                timeline={provider.typicalTimeline}
                directRollover={provider.directRollover}
                onlineRollover={provider.onlineRollover}
              />

              {/* Tips & Warnings */}
              <TipsWarnings
                tips={provider.tips}
                warnings={provider.warnings}
              />

              {/* Rollover Process Details */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-slate-400" />
                  {provider.name} Rollover Process Details
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {provider.rolloverProcess}
                </p>
              </div>

              {/* Account Types Supported */}
              {accountTypeDetails.length > 0 && (
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                  <h3 className="font-bold text-lg text-white mb-4">
                    Account Types You Can Roll Over from {provider.name}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {accountTypeDetails.map((accountType) => (
                      <Link
                        key={accountType!.slug}
                        href={`/rollover/${accountType!.slug}-to-gold-ira`}
                        className="group p-4 bg-white/5 rounded-lg hover:bg-amber-500/10 transition-colors border border-white/10"
                      >
                        <div className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                          {accountType!.name}
                        </div>
                        <div className="text-sm text-slate-400">{accountType!.fullName}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 sticky top-4">
                <h3 className="font-bold text-white mb-4">
                  If You Want to Call Yourself
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Here&apos;s {provider.name}&apos;s rollover line. Or let Augusta handle it for you.
                </p>

                {provider.phone && (
                  <a
                    href={`tel:${provider.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors mb-3 border border-white/10"
                  >
                    <Phone className="h-5 w-5 text-slate-400" />
                    <div>
                      <div className="font-medium text-white">{provider.phone}</div>
                      <div className="text-xs text-slate-400">{provider.rolloverDepartment || "Rollover Department"}</div>
                    </div>
                  </a>
                )}

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-start gap-2 text-sm text-slate-300">
                    <Shield className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>
                      A direct rollover from {provider.name} to a Gold IRA is 100% tax-free. You don&apos;t touch the money, so there&apos;s no tax bill.
                    </span>
                  </div>
                </div>
              </div>

              {/* Augusta CTA */}
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl p-6 border border-amber-500/30">
                <h3 className="font-bold text-white mb-2">
                  Skip the Phone Calls
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  Augusta contacts {provider.name} for you, handles all the paperwork,
                  and makes sure your rollover goes smoothly. No cost to get started.
                </p>
                <Link
                  href="/reviews/augusta-precious-metals"
                  className="block text-center px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow text-sm"
                >
                  Get Free Rollover Kit
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Providers */}
      {relatedProviders.length > 0 && (
        <section className="py-12 bg-white/5">
          <Container>
            <h2 className="text-2xl font-bold text-white mb-6">
              Have an Account Somewhere Else?
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedProviders.map((related) => (
                <ProviderCard key={related.slug} provider={related} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-4">
            Common Questions About {provider.name} Rollovers
          </h2>
          <p className="text-slate-400 mb-8">
            Straight answers. No financial jargon.
          </p>
          <div className="max-w-3xl space-y-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">
                How long is this going to take?
              </h3>
              <p className="text-slate-300">
                {provider.name} rollovers typically take {provider.typicalTimeline}.
                {provider.onlineRollover
                  ? " You can start online, which speeds things up."
                  : " You'll need to call their rollover department, but your Gold IRA company can handle that for you."
                }
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">
                Will I owe taxes on this?
              </h3>
              <p className="text-slate-300">
                No. A direct rollover from {provider.name} to a Gold IRA is 100% tax-free.
                The money goes straight from one account to the other&mdash;you never touch it.
                No taxes, no penalties. It&apos;s the same money, just in a different account.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">
                What happens to my current investments?
              </h3>
              <p className="text-slate-300">
                Your stocks, bonds, or mutual funds at {provider.name} get sold and converted to cash.
                That cash then transfers to your Gold IRA, where you use it to buy physical gold.
                Your Gold IRA company walks you through choosing the right metals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white/5">
        <Container>
          <AugustaCTA
            variant="footer"
            linkContext="fees"
            headline="You Built This. Now Protect It."
            subheadline={`After years of saving with ${provider.name}, your retirement deserves real protection. Augusta handles everything—they call ${provider.name}, complete the paperwork, and make sure your money is safe every step of the way.`}
            trackSource={`rollover-${provider.slug}`}
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}

// Main Page Component
export default async function RolloverSlugPage({ params }: Props) {
  const { slug } = await params;

  // Check if this is an account type page
  if (isAccountTypePage(slug)) {
    const accountTypeSlug = extractAccountTypeSlug(slug);
    const accountType = getAccountTypeBySlug(accountTypeSlug);

    if (!accountType) {
      notFound();
    }

    return <AccountTypeRolloverPage accountType={accountType} />;
  }

  // Otherwise, it's a provider page
  const provider = getProviderBySlug(slug);

  if (!provider) {
    notFound();
  }

  return <ProviderRolloverPage provider={provider} />;
}
