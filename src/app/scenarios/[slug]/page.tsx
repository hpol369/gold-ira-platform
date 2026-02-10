// src/app/scenarios/[slug]/page.tsx
// Crisis scenario detail pages

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Button } from "@/components/ui/Button";
import {
  scenarios,
  getScenarioBySlug,
  getAllScenarioSlugs,
  getRelatedScenarios,
} from "@/data/scenarios";
import {
  AlertTriangle,
  Shield,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  ChevronRight,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllScenarioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const scenario = getScenarioBySlug(slug);

  if (!scenario) {
    return { title: "Scenario Not Found" };
  }

  return {
    title: scenario.metaTitle,
    description: scenario.metaDescription,
    alternates: {
      canonical: `/scenarios/${slug}`,
    },
  };
}

export default async function ScenarioPage({ params }: PageProps) {
  const { slug } = await params;
  const scenario = getScenarioBySlug(slug);

  if (!scenario) {
    notFound();
  }

  const relatedScenarios = getRelatedScenarios(slug);

  const threatColors = {
    high: "text-yellow-700 bg-yellow-100 border-yellow-200",
    critical: "text-orange-700 bg-orange-100 border-orange-200",
    extreme: "text-red-700 bg-red-100 border-red-200",
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.08),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Threat Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider border",
                threatColors[scenario.threatLevel]
              )}>
                <AlertTriangle className="h-4 w-4" />
                {scenario.threatLevel} Threat
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Clock className="h-4 w-4" />
                {scenario.timeframe}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000080] mb-6">
              {scenario.title}
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {scenario.subtitle}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {scenario.stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#B22234]">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                  {stat.subtext && <div className="text-xs text-slate-400">{stat.subtext}</div>}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg" asChild className="bg-[#B22234] hover:bg-[#8b1c2a] text-white">
                <Link href="/quiz">
                  Protect Your Wealth Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-slate-300 text-slate-700 hover:bg-slate-100">
                <a href="#protection">
                  See Protection Plan
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Warning Signals */}
      <section className="py-12 bg-red-50 border-y border-red-200">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Warning Signals to Watch
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {scenario.warningSignals.map((signal, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <Zap className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Content Sections */}
            <div className="space-y-12 mb-16">
              {scenario.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                    {section.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.bullets && (
                    <ul className="space-y-2">
                      {section.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="h-4 w-4 text-[#B22234] flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Protection Plan */}
            <div id="protection" className="scroll-mt-24">
              <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 rounded-2xl border border-green-200 p-8 mb-16">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-6 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-green-600" />
                  Your Protection Plan
                </h2>

                <div className="space-y-6">
                  {scenario.protectionSteps.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
                        <span className="text-green-700 font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                        <p className="text-slate-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Gold */}
            <div className="bg-gradient-to-r from-amber-50 via-amber-100/50 to-amber-50 rounded-2xl border border-amber-200 p-8 mb-16">
              <h2 className="text-2xl font-serif font-bold text-[#000080] mb-4 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-[#B22234]" />
                Why Gold Protects Against This Scenario
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {scenario.goldBenefit}
              </p>
              <div className="mt-6">
                <Button variant="gold" size="lg" asChild className="bg-[#B22234] hover:bg-[#8b1c2a] text-white">
                  <Link href="/quiz">
                    Start Your Gold IRA Today <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {scenario.faqs.map((faq, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                    <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Scenarios */}
            {relatedScenarios.length > 0 && (
              <div className="mb-16">
                <h2 className="text-xl font-bold text-[#000080] mb-6">Related Threats</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {relatedScenarios.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/scenarios/${related.slug}`}
                      className="bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-red-300 rounded-xl p-4 transition-all group"
                    >
                      <div className={cn(
                        "text-xs font-bold uppercase tracking-wider mb-2",
                        threatColors[related.threatLevel].split(" ")[0]
                      )}>
                        {related.threatLevel} threat
                      </div>
                      <h3 className="font-bold text-slate-900 group-hover:text-[#B22234] transition-colors">
                        {related.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
              You Worked Too Hard to Gamble It Now
            </h2>
            <p className="text-slate-500 mb-8">
              You remember 2008. You remember watching years of hard work disappear on a screen. The good news? You can take steps today to protect what you&apos;ve built. Take our 60-second quiz to find out if a Gold IRA makes sense for your situation.
            </p>
            <Button variant="gold" size="xl" asChild className="bg-[#B22234] hover:bg-[#8b1c2a] text-white">
              <Link href="/quiz">
                See If Gold Is Right for Me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Augusta CTA */}
      <section className="py-16 bg-slate-50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Real People Are Protecting Their Retirement Right Now"
            subheadline="Steelworkers from Ohio, nurses from Texas, teachers from Florida - working Americans who spent 30 years building something real. They're moving part of their savings to gold before the next crisis hits. Augusta has helped 47,000+ people just like you."
            trackSource={`scenario-${slug}`}
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
