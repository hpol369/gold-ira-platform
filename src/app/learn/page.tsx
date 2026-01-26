// src/app/learn/page.tsx
// Learn articles hub page - lists all articles by category with enhanced internal linking

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Button } from "@/components/ui/Button";
import {
  getAllLearnArticles,
  getLearnArticlesByCategory,
  getLearnArticlesByVolume,
} from "@/data/learn-articles";
import { categoryMeta, type ArticleCategory } from "@/types/learn-article";
import {
  BookOpen,
  TrendingUp,
  ArrowRight,
  Shield,
  Clock,
  DollarSign,
  RefreshCcw,
  TrendingDown,
  Target,
  Users,
  Lock,
  Coins,
  Heart,
  Briefcase,
  Flame,
  Train,
  MapPin,
  AlertTriangle,
  Wallet,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "401k & Retirement Learning Center | Rich Dad Retirement",
  description:
    "Expert guides on 401k management, RMDs, fees, market protection, and retirement planning. Learn how to protect and grow your retirement savings.",
  keywords: [
    "401k guide",
    "retirement planning",
    "RMD rules",
    "401k fees",
    "market crash protection",
    "gold IRA education",
  ],
};

// Category icons
const categoryIcons: Record<ArticleCategory, typeof Shield> = {
  safety: Shield,
  rmd: Clock,
  "life-events": Users,
  loans: DollarSign,
  fees: DollarSign,
  roth: RefreshCcw,
  "market-fear": TrendingDown,
  "target-date": Target,
  enrollment: Users,
  protection: Lock,
  "gold-ira": Coins,
  healthcare: Heart,
  robs: Briefcase,
};

export default function LearnPage() {
  const allArticles = getAllLearnArticles();
  const popularArticles = getLearnArticlesByVolume().slice(0, 6);

  // Get categories that have articles
  const categories = Object.keys(categoryMeta) as ArticleCategory[];

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.1),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              LEARNING CENTER
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Retirement Questions,{" "}
              <span className="text-amber-400">Straight Answers</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              You&apos;ve got questions about your 401k, RMDs, and protecting what you&apos;ve built. Here are the answers—in plain English, not Wall Street jargon. No sales pitch, just the information you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/quiz">
                  Get Personalized Advice <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/20 text-white hover:bg-white/10"
              >
                <a href="#categories">Browse by Topic</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-8 border-y border-white/10 bg-slate-800/30">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-400">{allArticles.length}+</div>
              <div className="text-sm text-slate-400">Expert Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">{categories.length}</div>
              <div className="text-sm text-slate-400">Topics Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">2025</div>
              <div className="text-sm text-slate-400">Updated Rules</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">Free</div>
              <div className="text-sm text-slate-400">No Paywall</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Popular Articles */}
      <section className="py-16">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-amber-400" />
              Most Popular Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article) => {
              const cat = categoryMeta[article.category];
              return (
                <Link
                  key={article.slug}
                  href={`/learn/${article.slug}`}
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-amber-500/30 rounded-xl p-6 transition-all group"
                >
                  <div className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-2">
                    {cat.label}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-400 line-clamp-2">
                    {article.subtitle}
                  </p>
                  {article.volume && (
                    <div className="mt-4 text-xs text-slate-500">
                      {article.volume.toLocaleString()} monthly searches
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FIRE Movement Guides */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
              <Flame className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-white">FIRE Movement Guides</h2>
              <p className="text-sm text-slate-400">Financial Independence, Retire Early strategies</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Link
              href="/learn/financial-independence-retire-early"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-orange-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-orange-400 transition-colors text-sm leading-snug">
                FIRE Movement Guide
              </h4>
              <p className="text-xs text-slate-500 mt-1">Complete introduction</p>
            </Link>
            <Link
              href="/learn/fat-fire-guide"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-orange-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-orange-400 transition-colors text-sm leading-snug">
                Fat FIRE Guide
              </h4>
              <p className="text-xs text-slate-500 mt-1">$100k+/year retirement</p>
            </Link>
            <Link
              href="/learn/lean-fire-guide"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-orange-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-orange-400 transition-colors text-sm leading-snug">
                Lean FIRE Guide
              </h4>
              <p className="text-xs text-slate-500 mt-1">Minimalist early retirement</p>
            </Link>
            <Link
              href="/learn/coast-fire-explained"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-orange-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-orange-400 transition-colors text-sm leading-snug">
                Coast FIRE Explained
              </h4>
              <p className="text-xs text-slate-500 mt-1">Let investments grow</p>
            </Link>
            <Link
              href="/learn/barista-fire-explained"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-orange-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-orange-400 transition-colors text-sm leading-snug">
                Barista FIRE Explained
              </h4>
              <p className="text-xs text-slate-500 mt-1">Part-time work strategy</p>
            </Link>
            <Link
              href="/learn/25x-retirement-rule"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-orange-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-orange-400 transition-colors text-sm leading-snug">
                The 25x Rule
              </h4>
              <p className="text-xs text-slate-500 mt-1">Calculate your FIRE number</p>
            </Link>
            <Link
              href="/learn/fire-movement-gold-ira"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-orange-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-orange-400 transition-colors text-sm leading-snug">
                FIRE Movement & Gold IRAs
              </h4>
              <p className="text-xs text-slate-500 mt-1">Protecting your FIRE portfolio</p>
            </Link>
            <Link
              href="/learn/early-retirement-extreme"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-orange-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-orange-400 transition-colors text-sm leading-snug">
                Early Retirement Extreme
              </h4>
              <p className="text-xs text-slate-500 mt-1">Ultra-frugal approach</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* 401k Provider Rollover Guides */}
      <section className="py-16">
        <Container>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                <RefreshCcw className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-white">401(k) Provider Rollover Guides</h2>
                <p className="text-sm text-slate-400">Step-by-step guides for each major provider</p>
              </div>
            </div>
            <Link href="/rollover" className="text-amber-400 hover:text-amber-300 text-sm font-medium flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link href="/learn/t-rowe-price-401k-rollover" className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all text-center">
              <span className="font-medium text-white group-hover:text-blue-400 text-sm">T. Rowe Price</span>
            </Link>
            <Link href="/learn/transamerica-401k-rollover" className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all text-center">
              <span className="font-medium text-white group-hover:text-blue-400 text-sm">Transamerica</span>
            </Link>
            <Link href="/learn/principal-401k-rollover" className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all text-center">
              <span className="font-medium text-white group-hover:text-blue-400 text-sm">Principal</span>
            </Link>
            <Link href="/learn/empower-401k-rollover" className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all text-center">
              <span className="font-medium text-white group-hover:text-blue-400 text-sm">Empower</span>
            </Link>
            <Link href="/learn/paychex-401k-rollover" className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all text-center">
              <span className="font-medium text-white group-hover:text-blue-400 text-sm">Paychex</span>
            </Link>
            <Link href="/learn/wells-fargo-401k-rollover" className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all text-center">
              <span className="font-medium text-white group-hover:text-blue-400 text-sm">Wells Fargo</span>
            </Link>
            <Link href="/learn/nationwide-401k-rollover" className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all text-center">
              <span className="font-medium text-white group-hover:text-blue-400 text-sm">Nationwide</span>
            </Link>
            <Link href="/learn/voya-401k-rollover" className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all text-center">
              <span className="font-medium text-white group-hover:text-blue-400 text-sm">Voya</span>
            </Link>
            <Link href="/learn/john-hancock-401k-rollover" className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all text-center">
              <span className="font-medium text-white group-hover:text-blue-400 text-sm">John Hancock</span>
            </Link>
            <Link href="/learn/adp-401k-rollover" className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all text-center">
              <span className="font-medium text-white group-hover:text-blue-400 text-sm">ADP</span>
            </Link>
            <Link href="/learn/merrill-lynch-401k-rollover" className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all text-center">
              <span className="font-medium text-white group-hover:text-blue-400 text-sm">Merrill Lynch</span>
            </Link>
            <Link href="/learn/goldman-sachs-401k" className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all text-center">
              <span className="font-medium text-white group-hover:text-blue-400 text-sm">Goldman Sachs</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Market Protection & Crash-Proof Guides */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-white">Market Protection Guides</h2>
              <p className="text-sm text-slate-400">Protect your retirement from market crashes and volatility</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/learn/crash-proof-retirement"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-red-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-red-400 transition-colors text-sm leading-snug">
                Crash-Proof Retirement
              </h4>
              <p className="text-xs text-slate-500 mt-1">Complete protection strategy</p>
            </Link>
            <Link
              href="/learn/should-i-move-401k-before-market-crash"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-red-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-red-400 transition-colors text-sm leading-snug">
                Should I Move 401k Before Crash?
              </h4>
              <p className="text-xs text-slate-500 mt-1">Timing considerations</p>
            </Link>
            <Link
              href="/learn/protecting-retirement-market-crash"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-red-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-red-400 transition-colors text-sm leading-snug">
                Protecting from Market Crash
              </h4>
              <p className="text-xs text-slate-500 mt-1">Defensive strategies</p>
            </Link>
            <Link
              href="/learn/401k-lost-20-percent-what-do-i-do"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-red-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-red-400 transition-colors text-sm leading-snug">
                401k Lost 20%: What to Do
              </h4>
              <p className="text-xs text-slate-500 mt-1">Recovery options</p>
            </Link>
            <Link
              href="/learn/how-to-prepare-economic-collapse"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-red-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-red-400 transition-colors text-sm leading-snug">
                Prepare for Economic Collapse
              </h4>
              <p className="text-xs text-slate-500 mt-1">Worst-case preparation</p>
            </Link>
            <Link
              href="/learn/sequence-of-returns-risk"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-red-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-red-400 transition-colors text-sm leading-snug">
                Sequence of Returns Risk
              </h4>
              <p className="text-xs text-slate-500 mt-1">Retirement timing risk</p>
            </Link>
            <Link
              href="/learn/depression-proof-investments"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-red-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-red-400 transition-colors text-sm leading-snug">
                Depression-Proof Investments
              </h4>
              <p className="text-xs text-slate-500 mt-1">Safe haven assets</p>
            </Link>
            <Link
              href="/learn/why-did-my-401k-drop-so-much"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-red-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-red-400 transition-colors text-sm leading-snug">
                Why Did My 401k Drop?
              </h4>
              <p className="text-xs text-slate-500 mt-1">Understanding losses</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Checkbook IRA & Self-Directed Guides */}
      <section className="py-16">
        <Container>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
              <Wallet className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-white">Checkbook IRA & Self-Directed Guides</h2>
              <p className="text-sm text-slate-400">Direct control over alternative investments</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/learn/checkbook-ira-gold"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-green-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-green-400 transition-colors text-sm leading-snug">
                Checkbook IRA Gold
              </h4>
              <p className="text-xs text-slate-500 mt-1">Direct control precious metals</p>
            </Link>
            <Link
              href="/learn/checkbook-ira-reviews"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-green-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-green-400 transition-colors text-sm leading-snug">
                Checkbook IRA Reviews
              </h4>
              <p className="text-xs text-slate-500 mt-1">Best providers compared</p>
            </Link>
            <Link
              href="/learn/checkbook-ira-real-estate"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-green-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-green-400 transition-colors text-sm leading-snug">
                Checkbook IRA Real Estate
              </h4>
              <p className="text-xs text-slate-500 mt-1">Property investing guide</p>
            </Link>
            <Link
              href="/learn/solo-401k-checkbook-control"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-green-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-green-400 transition-colors text-sm leading-snug">
                Solo 401k Checkbook Control
              </h4>
              <p className="text-xs text-slate-500 mt-1">Self-employed investors</p>
            </Link>
            <Link
              href="/learn/self-directed-ira-llc-operating-agreement"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-green-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-green-400 transition-colors text-sm leading-snug">
                SDIRA LLC Operating Agreement
              </h4>
              <p className="text-xs text-slate-500 mt-1">Legal requirements</p>
            </Link>
            <Link
              href="/learn/checkbook-ira-prohibited-transactions"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-green-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-green-400 transition-colors text-sm leading-snug">
                Prohibited Transactions
              </h4>
              <p className="text-xs text-slate-500 mt-1">IRS rules to follow</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Railroad Retirement Guides */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
              <Train className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-white">Railroad Retirement Guides</h2>
              <p className="text-sm text-slate-400">Specialized guides for railroad workers</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/learn/railroad-retirement-calculator"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors text-sm leading-snug">
                Railroad Retirement Calculator
              </h4>
              <p className="text-xs text-slate-500 mt-1">Estimate your benefits</p>
            </Link>
            <Link
              href="/learn/tier-1-vs-tier-2-railroad"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors text-sm leading-snug">
                Tier 1 vs Tier 2 Railroad
              </h4>
              <p className="text-xs text-slate-500 mt-1">Key differences explained</p>
            </Link>
            <Link
              href="/learn/railroad-retirement-vs-social-security"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors text-sm leading-snug">
                Railroad vs Social Security
              </h4>
              <p className="text-xs text-slate-500 mt-1">Complete comparison</p>
            </Link>
            <Link
              href="/learn/railroad-retirement-spouse-benefits"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors text-sm leading-snug">
                Railroad Spouse Benefits
              </h4>
              <p className="text-xs text-slate-500 mt-1">Spousal annuity guide</p>
            </Link>
            <Link
              href="/learn/railroad-retirement-survivor-benefits"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors text-sm leading-snug">
                Railroad Survivor Benefits
              </h4>
              <p className="text-xs text-slate-500 mt-1">For surviving spouses</p>
            </Link>
            <Link
              href="/learn/railroad-retirement-disability"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors text-sm leading-snug">
                Railroad Retirement Disability
              </h4>
              <p className="text-xs text-slate-500 mt-1">Disability benefits guide</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* State Retirement Tax Guides */}
      <section className="py-16">
        <Container>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-white">State Retirement Tax Guides</h2>
              <p className="text-sm text-slate-400">Find the best state for your retirement taxes</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/learn/tennessee-retirement-taxes"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-teal-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-teal-400 transition-colors text-sm leading-snug">
                Tennessee Retirement Taxes
              </h4>
              <p className="text-xs text-slate-500 mt-1">No income tax state</p>
            </Link>
            <Link
              href="/learn/north-carolina-retirement-taxes"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-teal-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-teal-400 transition-colors text-sm leading-snug">
                North Carolina Retirement Taxes
              </h4>
              <p className="text-xs text-slate-500 mt-1">Bailey Settlement guide</p>
            </Link>
            <Link
              href="/learn/delaware-retirement-taxes"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-teal-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-teal-400 transition-colors text-sm leading-snug">
                Delaware Retirement Taxes
              </h4>
              <p className="text-xs text-slate-500 mt-1">No sales tax state</p>
            </Link>
            <Link
              href="/learn/best-states-retire-social-security"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-teal-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-teal-400 transition-colors text-sm leading-snug">
                Best States for Social Security
              </h4>
              <p className="text-xs text-slate-500 mt-1">38 states that don&apos;t tax SS</p>
            </Link>
            <Link
              href="/learn/worst-states-retire-taxes"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-teal-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-teal-400 transition-colors text-sm leading-snug">
                Worst States for Retirement Taxes
              </h4>
              <p className="text-xs text-slate-500 mt-1">States to avoid</p>
            </Link>
            <Link
              href="/learn/expat-retirement-taxes"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-teal-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-teal-400 transition-colors text-sm leading-snug">
                Expat Retirement Taxes
              </h4>
              <p className="text-xs text-slate-500 mt-1">Retiring abroad</p>
            </Link>
            <Link
              href="/learn/social-security-living-abroad"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-teal-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-teal-400 transition-colors text-sm leading-snug">
                Social Security Living Abroad
              </h4>
              <p className="text-xs text-slate-500 mt-1">International considerations</p>
            </Link>
            <Link
              href="/learn/portugal-retirement-visa"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-teal-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-teal-400 transition-colors text-sm leading-snug">
                Portugal Retirement Visa
              </h4>
              <p className="text-xs text-slate-500 mt-1">Popular expat destination</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Gold IRA & Precious Metals */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <Coins className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-white">Gold IRA & Precious Metals</h2>
              <p className="text-sm text-slate-400">Compare fees, minimums, and storage options</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/learn/gold-ira-vs-physical-gold"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-amber-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-amber-400 transition-colors text-sm leading-snug">
                Gold IRA vs Physical Gold
              </h4>
              <p className="text-xs text-slate-500 mt-1">Which is right for you?</p>
            </Link>
            <Link
              href="/learn/gold-ira-vs-gold-etf"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-amber-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-amber-400 transition-colors text-sm leading-snug">
                Gold IRA vs Gold ETF
              </h4>
              <p className="text-xs text-slate-500 mt-1">Tax advantages compared</p>
            </Link>
            <Link
              href="/learn/gold-ira-storage-fees"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-amber-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-amber-400 transition-colors text-sm leading-snug">
                Gold IRA Storage Fees
              </h4>
              <p className="text-xs text-slate-500 mt-1">What to expect</p>
            </Link>
            <Link
              href="/learn/gold-ira-minimum-investment"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-amber-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-amber-400 transition-colors text-sm leading-snug">
                Gold IRA Minimum Investment
              </h4>
              <p className="text-xs text-slate-500 mt-1">Getting started guide</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Retirement Planning Essentials */}
      <section className="py-16">
        <Container>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-white">Retirement Planning Essentials</h2>
              <p className="text-sm text-slate-400">Key guides for smart retirement decisions</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/learn/can-i-retire-at-60-with-500k"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm leading-snug">
                Retire at 60 with $500k?
              </h4>
              <p className="text-xs text-slate-500 mt-1">Reality check</p>
            </Link>
            <Link
              href="/learn/how-long-will-500k-last-retirement"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm leading-snug">
                How Long Will $500k Last?
              </h4>
              <p className="text-xs text-slate-500 mt-1">Withdrawal scenarios</p>
            </Link>
            <Link
              href="/learn/bucket-strategy-retirement"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm leading-snug">
                Bucket Strategy
              </h4>
              <p className="text-xs text-slate-500 mt-1">Organize your withdrawals</p>
            </Link>
            <Link
              href="/learn/variable-percentage-withdrawal"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm leading-snug">
                Variable Percentage Withdrawal
              </h4>
              <p className="text-xs text-slate-500 mt-1">VPW method explained</p>
            </Link>
            <Link
              href="/learn/qualified-longevity-annuity-contract"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm leading-snug">
                QLAC Guide
              </h4>
              <p className="text-xs text-slate-500 mt-1">Longevity annuity explained</p>
            </Link>
            <Link
              href="/learn/self-directed-ira-prohibited-transactions"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm leading-snug">
                Prohibited Transactions
              </h4>
              <p className="text-xs text-slate-500 mt-1">IRA rules you must follow</p>
            </Link>
            <Link
              href="/learn/fixed-vs-variable-annuity"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm leading-snug">
                Fixed vs Variable Annuity
              </h4>
              <p className="text-xs text-slate-500 mt-1">Which is better?</p>
            </Link>
            <Link
              href="/learn/pension-lump-sum-vs-monthly"
              className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all"
            >
              <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm leading-snug">
                Pension: Lump Sum vs Monthly
              </h4>
              <p className="text-xs text-slate-500 mt-1">Critical decision guide</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Categories - Browse by Topic */}
      <section id="categories" className="py-16 bg-slate-800/30 scroll-mt-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">
            Browse All Articles by Topic
          </h2>

          <div className="space-y-12">
            {categories.map((category) => {
              const articles = getLearnArticlesByCategory(category);
              if (articles.length === 0) return null;

              const catMeta = categoryMeta[category];
              const Icon = categoryIcons[category] || BookOpen;

              return (
                <div key={category}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={cn(
                      "p-2 rounded-lg",
                      `bg-${catMeta.color}-500/20 text-${catMeta.color}-400`
                    )}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{catMeta.label}</h3>
                      <p className="text-sm text-slate-400">{catMeta.description}</p>
                    </div>
                    <span className="ml-auto text-sm text-slate-500">
                      {articles.length} articles
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {articles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/learn/${article.slug}`}
                        className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/30 rounded-lg p-4 transition-all group"
                      >
                        <h4 className="font-medium text-white group-hover:text-amber-400 transition-colors text-sm leading-snug">
                          {article.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Done Reading? Here&apos;s Your Next Step.
            </h2>
            <p className="text-slate-400 mb-8">
              You&apos;ve got the knowledge. Now find out which option actually fits your situation. Our 60-second quiz matches you with the right approach based on what you&apos;ve saved, when you&apos;re retiring, and what you&apos;re worried about.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link href="/quiz">
                Take the Quiz <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Augusta CTA */}
      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Get Expert Guidance on Your Retirement"
            subheadline="Augusta Precious Metals offers free educational resources and one-on-one consultations to help you make informed decisions about your retirement savings."
            trackSource="learn-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
