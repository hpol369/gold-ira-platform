// src/app/learn/page.tsx
// Learn articles hub page - lists all articles by category

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
              401k & Retirement{" "}
              <span className="text-amber-400">Knowledge Base</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Expert answers to your retirement questions. From RMD rules to market
              crash protection—everything you need to know to secure your future.
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

      {/* Categories */}
      <section id="categories" className="py-16 bg-slate-800/30 scroll-mt-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">
            Browse by Topic
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

      {/* Featured Deep-Dive Guides */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">
            Featured Retirement Guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <Link
              href="/learn/qualified-longevity-annuity-contract"
              className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all"
            >
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">QLAC Guide</h3>
              <p className="text-slate-400 text-sm">Qualified Longevity Annuity Contract explained</p>
            </Link>
            <Link
              href="/learn/variable-percentage-withdrawal"
              className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all"
            >
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">VPW Strategy</h3>
              <p className="text-slate-400 text-sm">Variable Percentage Withdrawal method</p>
            </Link>
            <Link
              href="/learn/self-directed-ira-prohibited-transactions"
              className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all"
            >
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Prohibited Transactions</h3>
              <p className="text-slate-400 text-sm">IRA rules you must follow</p>
            </Link>
            <Link
              href="/learn/fixed-vs-variable-annuity"
              className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all"
            >
              <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Annuity Comparison</h3>
              <p className="text-slate-400 text-sm">Fixed vs Variable explained</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* 401k Provider Rollover Guides */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
              <RefreshCcw className="h-6 w-6 text-blue-400" />
              401(k) Provider Rollover Guides
            </h2>
            <Link href="/rollover" className="text-amber-400 hover:text-amber-300 text-sm font-medium flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
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
            <Link href="/learn/lincoln-financial-401k-rollover" className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all text-center">
              <span className="font-medium text-white group-hover:text-blue-400 text-sm">Lincoln Financial</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Ready to Protect Your Retirement?
            </h2>
            <p className="text-slate-400 mb-8">
              Knowledge is power, but action is what protects your wealth. Take our
              60-second quiz to find the best Gold IRA company for your situation.
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
