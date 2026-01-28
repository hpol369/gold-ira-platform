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
  title: "Economic Crisis Scenarios: Protect Your Wealth",
  description: "Prepare for economic uncertainty. Understand threats to your retirement: dollar collapse, hyperinflation, bank failures, and how to protect yourself.",
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
      badge: "text-yellow-700 bg-yellow-100 border-yellow-200",
      card: "hover:border-yellow-400",
      icon: "text-yellow-600",
    },
    critical: {
      badge: "text-orange-700 bg-orange-100 border-orange-200",
      card: "hover:border-orange-400",
      icon: "text-orange-600",
    },
    extreme: {
      badge: "text-red-700 bg-red-100 border-red-200",
      card: "hover:border-red-400",
      icon: "text-red-600",
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.08),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 border border-red-200 px-4 py-1.5 text-sm font-semibold text-red-700 mb-6">
              <AlertTriangle className="h-4 w-4" />
              Crisis Preparedness Center
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000080] mb-6">
              You Didn&apos;t Work 30 Years
              <span className="text-[#B22234]"> to Lose It Now</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8">
              You remember 2008. You watched your 401(k) drop 40% and wondered if you&apos;d ever recover. That fear isn&apos;t paranoia - it&apos;s wisdom earned the hard way. Here&apos;s the straight talk on what could happen next, and how working people like you are protecting what they&apos;ve built.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gold" size="lg" asChild className="bg-[#B22234] hover:bg-[#8b1c2a] text-white">
                <Link href="/quiz">
                  Get Your Protection Plan <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-y border-slate-200">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600">57</div>
              <div className="text-sm text-slate-500">Hyperinflations since 1900</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">$34T</div>
              <div className="text-sm text-slate-500">US National Debt</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600">96%</div>
              <div className="text-sm text-slate-500">Dollar value lost since 1913</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">5,000</div>
              <div className="text-sm text-slate-500">Years gold has been money</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Scenarios Grid */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#000080] mb-4">
              Real Threats to Your Life&apos;s Work
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              These aren&apos;t scare tactics - they&apos;re the same risks your union rep, your financial advisor, and the folks at the plant are talking about. Click any scenario for the facts, the warning signs, and what you can actually do about it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario) => (
              <Link
                key={scenario.slug}
                href={`/scenarios/${scenario.slug}`}
                className={cn(
                  "group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all hover:bg-white hover:shadow-lg",
                  threatColors[scenario.threatLevel].card
                )}
              >
                <div className="p-6">
                  {/* Icon & Threat Level */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn(
                      "p-3 rounded-xl bg-slate-100",
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
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">
                    {scenario.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                    {scenario.subtitle}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {scenario.timeframe}
                    </div>
                    <div>{scenario.probability}</div>
                  </div>

                  {/* Stats Preview */}
                  <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-2 gap-2">
                    {scenario.stats.slice(0, 2).map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-[#B22234]">{stat.value}</div>
                        <div className="text-xs text-slate-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-sm text-slate-500">Read full guide</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#B22234] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Protection CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-50 via-amber-100/50 to-amber-50 border-y border-amber-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-12 w-12 text-[#B22234] mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-[#000080] mb-4">
              You&apos;ve Earned the Right to Protect It
            </h2>
            <p className="text-slate-600 mb-8">
              You didn&apos;t save for 30 years by being reckless. You saved by being smart, by saying no to things you wanted, by showing up every day. That $400,000, $500,000, $600,000 in your 401(k)? That&apos;s not a number on a screen - it&apos;s your life&apos;s work. A Gold IRA lets you move some of that into physical gold - legally, tax-free, and finally under your control.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gold" size="xl" asChild className="bg-[#B22234] hover:bg-[#8b1c2a] text-white">
                <Link href="/quiz">
                  Find My Ideal Gold IRA <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-slate-300 text-slate-700 hover:bg-slate-100">
                <Link href="/best-gold-ira-companies">
                  Compare Top Companies
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Rich Dad Quote */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-serif text-[#000080] italic mb-6">
              &ldquo;The reason I hold gold and silver is not to make money. It&apos;s because I don&apos;t trust the dollar.&rdquo;
            </blockquote>
            <cite className="text-[#B22234] font-semibold">— Robert Kiyosaki, Rich Dad Poor Dad</cite>
          </div>
        </Container>
      </section>

      {/* Augusta CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="47,000 Working Americans Have Already Made This Move"
            subheadline="Teachers, nurses, steelworkers, truckers - people who spent their careers building something real. They moved part of their retirement into gold before the next 2008 hits. Augusta Precious Metals specializes in helping folks like you do it right."
            trackSource="scenarios-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
