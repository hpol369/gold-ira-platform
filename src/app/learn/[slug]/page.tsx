// src/app/learn/[slug]/page.tsx
// P1-017: Dynamic learn article page template

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Button } from "@/components/ui/Button";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  getLearnArticleBySlug,
  getAllLearnArticleSlugs,
  getRelatedLearnArticles,
} from "@/data/learn-articles";
import { threatLevelMeta, categoryMeta } from "@/types/learn-article";
import type { IconColor, ArticleSection } from "@/types/learn-article";
import {
  AlertTriangle,
  Shield,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Info,
  Clock,
  Calculator,
  FileText,
  Scale,
  Users,
  TrendingUp,
  TrendingDown,
  Lightbulb,
  ThumbsUp,
  ThumbsDown,
  AlertOctagon,
  CreditCard,
  Home,
  Landmark,
  PiggyBank,
  Heart,
  Wallet,
  Calendar,
  CalendarDays,
  Briefcase,
  Search,
  HelpCircle,
  Lock,
  ClipboardCheck,
  Settings,
  List,
  ListChecks,
  ListOrdered,
  BarChart3,
  PieChart,
  Target,
  Route,
  Wrench,
  Percent,
  Repeat,
  Timer,
  Plus,
  Rocket,
  Workflow,
  Pause,
  XCircle,
  KeyRound,
  ShieldCheck,
  ShieldAlert,
  Receipt,
  FileSearch,
  Scissors,
  Brain,
  Sparkles,
  FileWarning,
  FileCheck,
  GitCompare,
  PartyPopper,
  Store,
  Building,
  MousePointer,
  Layers,
  Gift,
  HandCoins,
  EyeOff,
  Bomb,
  History,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Icon mapping for dynamic rendering
const iconMap: Record<string, LucideIcon> = {
  AlertTriangle,
  Shield,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Info,
  Clock,
  Calculator,
  FileText,
  Scale,
  Users,
  TrendingUp,
  TrendingDown,
  Lightbulb,
  ThumbsUp,
  ThumbsDown,
  AlertOctagon,
  CreditCard,
  Home,
  Landmark,
  PiggyBank,
  Heart,
  Wallet,
  Calendar,
  CalendarDays,
  Briefcase,
  Search,
  HelpCircle,
  Lock,
  ClipboardCheck,
  Settings,
  List,
  ListChecks,
  ListOrdered,
  BarChart3,
  PieChart,
  Target,
  Route,
  Wrench,
  Percent,
  Repeat,
  Timer,
  Plus,
  Rocket,
  Workflow,
  Pause,
  XCircle,
  KeyRound,
  ShieldCheck,
  ShieldAlert,
  Receipt,
  FileSearch,
  Scissors,
  Brain,
  Sparkles,
  FileWarning,
  FileCheck,
  GitCompare,
  PartyPopper,
  Store,
  Building,
  MousePointer,
  Layers,
  Gift,
  HandCoins,
  EyeOff,
  Bomb,
  History,
};

// Color classes for icons
const iconColorClasses: Record<IconColor, string> = {
  red: "text-red-400 bg-red-500/20",
  amber: "text-amber-400 bg-amber-500/20",
  green: "text-green-400 bg-green-500/20",
  blue: "text-blue-400 bg-blue-500/20",
  purple: "text-purple-400 bg-purple-500/20",
  slate: "text-slate-400 bg-slate-500/20",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLearnArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getLearnArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
    },
  };
}

// Section component for rendering article sections
function ArticleSectionComponent({ section }: { section: ArticleSection }) {
  const Icon = iconMap[section.icon] || Info;
  const colorClass = iconColorClasses[section.iconColor] || iconColorClasses.slate;

  return (
    <section id={section.id} className="scroll-mt-24 mb-12">
      <div className="flex items-start gap-4 mb-4">
        <div className={cn("p-2 rounded-lg flex-shrink-0", colorClass)}>
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
          {section.title}
        </h2>
      </div>

      <div className="pl-0 md:pl-14">
        <p className="text-slate-300 leading-relaxed mb-4">
          {section.content}
        </p>

        {section.bullets && section.bullets.length > 0 && (
          <ul className="space-y-2 mb-4">
            {section.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <ChevronRight className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {section.numberedList && section.numberedList.length > 0 && (
          <ol className="space-y-2 mb-4 list-none">
            {section.numberedList.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-slate-300 pt-0.5">{item}</span>
              </li>
            ))}
          </ol>
        )}

        {section.table && (
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {section.table.headers.map((header, i) => (
                    <th key={i} className="text-left py-3 px-4 text-slate-400 font-medium">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    {row.map((cell, j) => (
                      <td key={j} className="py-3 px-4 text-slate-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {section.table.caption && (
              <p className="text-xs text-slate-500 mt-2 italic">{section.table.caption}</p>
            )}
          </div>
        )}

        {section.callout && (
          <div className={cn(
            "rounded-lg p-4 mb-4 border",
            section.callout.type === 'info' && "bg-blue-500/10 border-blue-500/20",
            section.callout.type === 'warning' && "bg-amber-500/10 border-amber-500/20",
            section.callout.type === 'tip' && "bg-green-500/10 border-green-500/20",
            section.callout.type === 'example' && "bg-purple-500/10 border-purple-500/20"
          )}>
            <div className="flex items-start gap-3">
              {section.callout.type === 'info' && <Info className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />}
              {section.callout.type === 'warning' && <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />}
              {section.callout.type === 'tip' && <Lightbulb className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />}
              {section.callout.type === 'example' && <FileText className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />}
              <div>
                <h4 className={cn(
                  "font-bold text-sm mb-1",
                  section.callout.type === 'info' && "text-blue-400",
                  section.callout.type === 'warning' && "text-amber-400",
                  section.callout.type === 'tip' && "text-green-400",
                  section.callout.type === 'example' && "text-purple-400"
                )}>{section.callout.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{section.callout.content}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default async function LearnArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getLearnArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedLearnArticles(slug, 3);
  const threatMeta = threatLevelMeta[article.threatLevel];
  const catMeta = categoryMeta[article.category];

  // JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    author: {
      "@type": "Organization",
      name: "Rich Dad Retirement",
    },
    publisher: {
      "@type": "Organization",
      name: "Rich Dad Retirement",
      logo: {
        "@type": "ImageObject",
        url: "https://richdadretirement.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://richdadretirement.com/learn/${slug}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-900">
      <SchemaScript schema={articleSchema} />
      <SchemaScript schema={faqSchema} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.1),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-4xl">
            {/* Category & Threat Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link
                href="/learn"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider border",
                  `text-${catMeta.color}-400 bg-${catMeta.color}-500/10 border-${catMeta.color}-500/20`
                )}
              >
                {catMeta.label}
              </Link>
              <div className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider border",
                threatMeta.bgColor
              )}>
                {article.threatLevel === 'critical' && <AlertTriangle className="h-3 w-3" />}
                {article.threatLevel === 'warning' && <Info className="h-3 w-3" />}
                {article.threatLevel === 'info' && <CheckCircle2 className="h-3 w-3" />}
                <span className={threatMeta.color}>{threatMeta.label}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              {article.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Key Takeaways */}
      <section className="pb-8">
        <Container>
          <div className="max-w-4xl">
            <KeyTakeaways items={article.takeaways} />
          </div>
        </Container>
      </section>

      {/* Main Content with TOC */}
      <section className="py-8">
        <Container>
          <div className="flex gap-8 max-w-6xl mx-auto">
            {/* Table of Contents - Desktop */}
            <TableOfContents items={article.tocItems} />

            {/* Article Content */}
            <div className="flex-1 max-w-4xl">
              {/* Sections */}
              {article.sections.map((section) => (
                <ArticleSectionComponent key={section.id} section={section} />
              ))}

              {/* Warning Box */}
              {article.warningBox && (
                <div className={cn(
                  "rounded-xl p-6 mb-12 border",
                  article.warningBox.type === 'red' && "bg-red-500/10 border-red-500/20",
                  article.warningBox.type === 'amber' && "bg-amber-500/10 border-amber-500/20",
                  article.warningBox.type === 'blue' && "bg-blue-500/10 border-blue-500/20",
                  article.warningBox.type === 'green' && "bg-green-500/10 border-green-500/20"
                )}>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className={cn(
                      "h-5 w-5 flex-shrink-0 mt-0.5",
                      article.warningBox.type === 'red' && "text-red-400",
                      article.warningBox.type === 'amber' && "text-amber-400",
                      article.warningBox.type === 'blue' && "text-blue-400",
                      article.warningBox.type === 'green' && "text-green-400"
                    )} />
                    <div>
                      <h3 className="font-bold text-white mb-2">{article.warningBox.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{article.warningBox.content}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Gold Bridge CTA */}
              <div id="gold-ira-bridge" className="scroll-mt-24 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 rounded-2xl border border-amber-500/20 p-8 mb-12">
                <h2 className="text-2xl font-serif font-bold text-white mb-4 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-amber-400" />
                  {article.goldBridge.title}
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {article.goldBridge.content}
                </p>
                <ul className="space-y-2 mb-6">
                  {article.goldBridge.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="gold" size="lg" asChild>
                  <Link href="/quiz">
                    Get Your Free Gold IRA Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* FAQs */}
              {article.faqs.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-bold text-white mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {article.faqs.map((faq, i) => (
                      <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                        <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-white mb-6">Related Articles</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {relatedArticles.map((related) => {
                      const relatedCat = categoryMeta[related.category];
                      return (
                        <Link
                          key={related.slug}
                          href={`/learn/${related.slug}`}
                          className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/30 rounded-xl p-4 transition-all group"
                        >
                          <div className="text-xs font-medium uppercase tracking-wider mb-2 text-slate-400">
                            {relatedCat.label}
                          </div>
                          <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors text-sm leading-snug">
                            {related.title}
                          </h3>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Related Guides */}
              {article.relatedGuides.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-lg font-bold text-white mb-4">Helpful Guides</h2>
                  <div className="flex flex-wrap gap-3">
                    {article.relatedGuides.map((guide) => (
                      <Link
                        key={guide}
                        href={guide}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-slate-300 hover:text-white transition-colors"
                      >
                        <FileText className="h-4 w-4 text-amber-400" />
                        {guide.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Tools */}
              {article.relatedTools && article.relatedTools.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-lg font-bold text-white mb-4">Interactive Tools</h2>
                  <div className="flex flex-wrap gap-3">
                    {article.relatedTools.map((tool) => (
                      <Link
                        key={tool}
                        href={tool}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 rounded-lg text-sm text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        <Calculator className="h-4 w-4" />
                        {tool.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Augusta CTA */}
      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Ready to Protect Your Retirement?"
            subheadline="Join thousands of Americans who have secured their savings with physical gold. Augusta Precious Metals makes the process simple."
            trackSource={`learn-${slug}`}
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
