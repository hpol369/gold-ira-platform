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
      title: `${accountType.name} to Gold IRA Rollover Guide 2026 | Tax-Free Transfer`,
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
    title: `${provider.name} Gold IRA Rollover Guide 2026 | Step-by-Step Instructions`,
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

          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
            {accountType.description} Learn how to roll over your {accountType.fullName} to a Gold IRA
            while maintaining tax-advantaged status.
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
                Ready to Roll Over Your {accountType.name}?
              </h2>
              <p className="text-slate-400 text-sm">
                Augusta Precious Metals handles the entire {accountType.name} to Gold IRA rollover process.
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
                <h3 className="font-bold text-lg text-white mb-6">
                  How to Roll Over Your {accountType.name} to a Gold IRA
                </h3>
                <div className="space-y-4">
                  {[
                    `Verify your ${accountType.name} allows rollovers (check with your plan administrator)`,
                    "Choose a reputable Gold IRA company and open your new account",
                    "Request a direct rollover from your current custodian",
                    "Your Gold IRA company provides transfer paperwork",
                    "Funds transfer directly between custodians (no taxes withheld)",
                    "Purchase IRS-approved precious metals for your Gold IRA"
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
                <h3 className="font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  {accountType.name} Rollover Restrictions
                </h3>
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
                  Who Typically Has a {accountType.name}?
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-slate-400 mb-1">Eligibility</div>
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
                  {accountType.name} Key Facts
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">Rollover Eligible</div>
                      <div className="text-sm text-slate-400">
                        {accountType.canRolloverToGoldIRA ? "Yes, can roll to Gold IRA" : "Limited eligibility"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">Tax-Free Transfer</div>
                      <div className="text-sm text-slate-400">
                        Direct rollover has no taxes or penalties
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">Processing Time</div>
                      <div className="text-sm text-slate-400">
                        Typically 5-14 business days
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-start gap-2 text-sm text-slate-300">
                    <Shield className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>
                      A direct rollover from your {accountType.name} to a Gold IRA is 100% tax-free
                      when done correctly.
                    </span>
                  </div>
                </div>
              </div>

              {/* Augusta CTA */}
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl p-6 border border-amber-500/30">
                <h3 className="font-bold text-white mb-2">
                  Let Experts Handle Your Rollover
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  Augusta Precious Metals specializes in {accountType.name} to Gold IRA transfers.
                  They handle all the paperwork and coordination.
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
          <h2 className="text-2xl font-bold text-white mb-8">
            {accountType.name} to Gold IRA FAQs
          </h2>
          <div className="max-w-3xl space-y-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">
                Can I roll over my {accountType.name} to a Gold IRA?
              </h3>
              <p className="text-slate-300">
                Yes, {accountType.name}s are eligible for Gold IRA rollovers. The key is to use a
                direct rollover where funds transfer between custodians without you taking possession.
                This keeps the transfer tax-free and penalty-free.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">
                Is a {accountType.name} to Gold IRA rollover tax-free?
              </h3>
              <p className="text-slate-300">
                Yes, when done as a direct rollover (trustee-to-trustee transfer), there are no
                taxes or early withdrawal penalties. The funds maintain their tax-advantaged status
                throughout the transfer process.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">
                How much can I roll over from my {accountType.name}?
              </h3>
              <p className="text-slate-300">
                You can roll over any amount from your {accountType.name} to a Gold IRA—there&apos;s no
                limit. However, your plan may have restrictions on in-service withdrawals if you&apos;re
                still employed. Check your plan documents or contact your plan administrator.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">
                What&apos;s the difference between traditional and Roth Gold IRAs?
              </h3>
              <p className="text-slate-300">
                {accountType.taxTreatment === "pre-tax"
                  ? `Your ${accountType.name} uses pre-tax dollars, so it should roll into a traditional Gold IRA to maintain tax-deferred status. Rolling to a Roth Gold IRA would trigger taxes on the converted amount.`
                  : accountType.taxTreatment === "post-tax"
                  ? `Your ${accountType.name} uses after-tax dollars, so it should roll into a Roth Gold IRA to maintain tax-free withdrawal status.`
                  : `Your ${accountType.name} may have both pre-tax and Roth components. Pre-tax funds should go to a traditional Gold IRA, while Roth funds should go to a Roth Gold IRA.`
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
            headline={`Ready to Roll Over Your ${accountType.name}?`}
            subheadline={`Augusta Precious Metals makes ${accountType.name} to Gold IRA rollovers simple. Their team handles everything—from contacting your custodian to completing all the paperwork. Get started with a free consultation.`}
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

          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
            {provider.description}
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
                Need Help with Your {provider.name} Rollover?
              </h2>
              <p className="text-slate-400 text-sm">
                Augusta Precious Metals handles the entire process for you—including contacting {provider.name}.
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
                  Contact {provider.name}
                </h3>

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
                      A direct rollover from {provider.name} to a Gold IRA is 100% tax-free when done correctly.
                    </span>
                  </div>
                </div>
              </div>

              {/* Augusta CTA */}
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl p-6 border border-amber-500/30">
                <h3 className="font-bold text-white mb-2">
                  Let Experts Handle Your Rollover
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  Augusta Precious Metals will contact {provider.name} on your behalf, complete all paperwork,
                  and ensure a tax-free transfer.
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
              Other {provider.type === "brokerage" ? "Brokerage" :
                     provider.type === "employer" ? "Employer Plan" : "Government"} Rollovers
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
          <h2 className="text-2xl font-bold text-white mb-8">
            {provider.name} Rollover FAQs
          </h2>
          <div className="max-w-3xl space-y-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">
                How long does a {provider.name} rollover take?
              </h3>
              <p className="text-slate-300">
                Most {provider.name} rollovers complete within {provider.typicalTimeline}.
                {provider.onlineRollover
                  ? " Since online rollover is available, you can initiate the process immediately through their website."
                  : " You'll need to contact their rollover department by phone to initiate the transfer."
                }
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">
                Is a {provider.name} to Gold IRA rollover tax-free?
              </h3>
              <p className="text-slate-300">
                Yes, a direct rollover from {provider.name} to a Gold IRA is 100% tax-free.
                The funds transfer directly between custodians without you taking possession,
                so there are no taxes or early withdrawal penalties.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-2">
                Do I need to sell my investments before rolling over?
              </h3>
              <p className="text-slate-300">
                Yes, your current investments at {provider.name} will need to be liquidated
                (sold for cash) before the funds can be transferred to your Gold IRA.
                Your Gold IRA company will then use those funds to purchase IRS-approved precious metals.
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
            headline={`Ready to Roll Over Your ${provider.name} Account?`}
            subheadline={`Augusta Precious Metals makes ${provider.name} rollovers simple. Their team handles everything—from contacting ${provider.name} to completing all the paperwork. Get started with a free consultation.`}
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
