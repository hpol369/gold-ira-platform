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
    high: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    critical: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    extreme: "text-red-400 bg-red-500/10 border-red-500/20",
  };

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.15),transparent_50%)]" />

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
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Clock className="h-4 w-4" />
                {scenario.timeframe}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              {scenario.title}
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {scenario.subtitle}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {scenario.stats.map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                  {stat.subtext && <div className="text-xs text-slate-500">{stat.subtext}</div>}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/quiz">
                  Protect Your Wealth Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10">
                <a href="#protection">
                  See Protection Plan
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Warning Signals */}
      <section className="py-12 bg-red-500/5 border-y border-red-500/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Warning Signals to Watch
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {scenario.warningSignals.map((signal, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <Zap className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Content Sections */}
            <div className="space-y-12 mb-16">
              {scenario.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.bullets && (
                    <ul className="space-y-2">
                      {section.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Protection Plan */}
            <div id="protection" className="scroll-mt-24">
              <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-emerald-500/10 rounded-2xl border border-emerald-500/20 p-8 mb-16">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-emerald-400" />
                  Your Protection Plan
                </h2>

                <div className="space-y-6">
                  {scenario.protectionSteps.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                        <span className="text-emerald-400 font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{step.title}</h3>
                        <p className="text-slate-300 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Gold */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 rounded-2xl border border-amber-500/20 p-8 mb-16">
              <h2 className="text-2xl font-serif font-bold text-white mb-4 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-amber-400" />
                Why Gold Protects Against This Scenario
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {scenario.goldBenefit}
              </p>
              <div className="mt-6">
                <Button variant="gold" size="lg" asChild>
                  <Link href="/quiz">
                    Start Your Gold IRA Today <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {scenario.faqs.map((faq, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                    <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                    <p className="text-slate-300 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Scenarios */}
            {relatedScenarios.length > 0 && (
              <div className="mb-16">
                <h2 className="text-xl font-bold text-white mb-6">Related Threats</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {relatedScenarios.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/scenarios/${related.slug}`}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/30 rounded-xl p-4 transition-all group"
                    >
                      <div className={cn(
                        "text-xs font-bold uppercase tracking-wider mb-2",
                        threatColors[related.threatLevel].split(" ")[0]
                      )}>
                        {related.threatLevel} threat
                      </div>
                      <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">
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
      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Don&apos;t Wait for the Crisis
            </h2>
            <p className="text-slate-400 mb-8">
              The time to protect your wealth is before disaster strikes, not after. Take our 60-second quiz to find the best Gold IRA company for your situation.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link href="/quiz">
                Protect My Retirement <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Augusta CTA */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Don't Wait Until It's Too Late"
            subheadline="Protect your retirement before the next crisis hits. Augusta Precious Metals has helped thousands of Americans secure their savings with physical gold."
            trackSource={`scenario-${slug}`}
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
