// src/app/scenarios/page.tsx
// Crisis scenarios hub page

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Button } from "@/components/ui/Button";
import { scenarios } from "@/data/scenarios";
import {
  AlertTriangle,
  Shield,
  ArrowRight,
  Clock,
  TrendingDown,
  Skull,
  Building2,
  Banknote,
  CreditCard,
  PiggyBank,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Economic Crisis Scenarios: Protect Your Wealth | Rich Dad Retirement",
  description: "Prepare for economic uncertainty. Understand the threats to your retirement savings - dollar collapse, hyperinflation, bank failures, market crashes - and how to protect yourself.",
};

const scenarioIcons: Record<string, React.ReactNode> = {
  "dollar-collapse": <Banknote className="h-8 w-8" />,
  "hyperinflation": <TrendingDown className="h-8 w-8" />,
  "bank-failure": <Building2 className="h-8 w-8" />,
  "stock-market-crash": <Skull className="h-8 w-8" />,
  "cbdc-control": <CreditCard className="h-8 w-8" />,
  "pension-crisis": <PiggyBank className="h-8 w-8" />,
};

export default function ScenariosPage() {
  const threatColors = {
    high: {
      badge: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
      card: "hover:border-yellow-500/30",
      icon: "text-yellow-400",
    },
    critical: {
      badge: "text-orange-400 bg-orange-500/10 border-orange-500/20",
      card: "hover:border-orange-500/30",
      icon: "text-orange-400",
    },
    extreme: {
      badge: "text-red-400 bg-red-500/10 border-red-500/20",
      card: "hover:border-red-500/30",
      icon: "text-red-400",
    },
  };

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.1),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-400 mb-6">
              <AlertTriangle className="h-4 w-4" />
              Crisis Preparedness Center
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              The Threats to Your
              <span className="text-red-400"> Retirement</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8">
              Economic crises aren&apos;t theoretical - they&apos;re historical certainties. The only question is whether you&apos;ll be prepared. Understand the risks. Build your defense.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <Link href="/quiz">
                  Get Your Protection Plan <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-slate-800/50 border-y border-white/10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400">57</div>
              <div className="text-sm text-slate-400">Hyperinflations since 1900</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">$34T</div>
              <div className="text-sm text-slate-400">US National Debt</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">96%</div>
              <div className="text-sm text-slate-400">Dollar value lost since 1913</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">5,000</div>
              <div className="text-sm text-slate-400">Years gold has been money</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Scenarios Grid */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Economic Threat Scenarios
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Click any scenario to understand the threat, warning signs, and step-by-step protection strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario) => (
              <Link
                key={scenario.slug}
                href={`/scenarios/${scenario.slug}`}
                className={cn(
                  "group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all hover:bg-white/10",
                  threatColors[scenario.threatLevel].card
                )}
              >
                <div className="p-6">
                  {/* Icon & Threat Level */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn(
                      "p-3 rounded-xl bg-white/5",
                      threatColors[scenario.threatLevel].icon
                    )}>
                      {scenarioIcons[scenario.slug]}
                    </div>
                    <div className={cn(
                      "text-xs font-bold uppercase tracking-wider px-2 py-1 rounded border",
                      threatColors[scenario.threatLevel].badge
                    )}>
                      {scenario.threatLevel}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {scenario.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {scenario.subtitle}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {scenario.timeframe}
                    </div>
                    <div>{scenario.probability}</div>
                  </div>

                  {/* Stats Preview */}
                  <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
                    {scenario.stats.slice(0, 2).map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-amber-400">{stat.value}</div>
                        <div className="text-xs text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 bg-white/5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-sm text-slate-400">Read full guide</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Protection CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border-y border-amber-500/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-12 w-12 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              The Best Defense Is Preparation
            </h2>
            <p className="text-slate-300 mb-8">
              You can&apos;t predict exactly when these scenarios will unfold. But you can prepare now. A Gold IRA moves your retirement savings from paper promises to physical protection - legally, tax-advantaged, and under your control.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link href="/quiz">
                  Find My Ideal Gold IRA <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white/20 text-white hover:bg-white/10">
                <Link href="/best-gold-ira-companies">
                  Compare Top Companies
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Rich Dad Quote */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-serif text-white italic mb-6">
              &ldquo;The reason I hold gold and silver is not to make money. It&apos;s because I don&apos;t trust the dollar.&rdquo;
            </blockquote>
            <cite className="text-amber-400 font-semibold">— Robert Kiyosaki, Rich Dad Poor Dad</cite>
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
            trackSource="scenarios-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
