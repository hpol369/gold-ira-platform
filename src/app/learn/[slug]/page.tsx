// src/app/learn/[slug]/page.tsx
// P1-017: Dynamic learn article page template

import { Fragment } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Button } from "@/components/ui/Button";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { SidebarAuditWidget } from "@/components/widgets/SidebarAuditWidget";
import { InContentCTA } from "@/components/widgets/InContentCTA";
import { NewsletterSignup } from "@/components/email/NewsletterSignup";
import { ArticleMeta } from "@/components/content/ArticleMeta";
import { TrustBar } from "@/components/content/TrustBar";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { SourcesSection } from "@/components/content/SourcesSection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import {
  articleSchema as buildArticleSchema,
  faqSchema as buildFaqSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import {
  getLearnArticleBySlug,
  getAllLearnArticleSlugs,
  getRelatedLearnArticles,
} from "@/data/learn-articles";
import { getContextualCTABySlug } from "@/data/contextual-ctas";
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
  red: "text-red-700 bg-[rgba(220,38,38,0.08)]0/20",
  amber: "text-amber-700 bg-[#161828]0/20",
  green: "text-green-700 bg-[rgba(46,139,87,0.08)]0/20",
  blue: "text-blue-700 bg-[#121423]0/20",
  purple: "text-purple-700 bg-purple-500/20",
  slate: "text-[#A8A39A] bg-[#0C0D18]0/20",
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
    description: article.metaDescription.length > 155
      ? article.metaDescription.slice(0, 152) + "..."
      : article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `/learn/${slug}`,
    },
    // Noindex dynamic cluster articles — scaled content flagged by Google
    // Static learn pages in dedicated directories remain indexed
    robots: { index: false, follow: true },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription.length > 155
        ? article.metaDescription.slice(0, 152) + "..."
        : article.metaDescription,
      type: "article",
      images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
  };
}

// Section component for rendering article sections with premium glass styling
function ArticleSectionComponent({ section }: { section: ArticleSection }) {
  const Icon = iconMap[section.icon] || Info;
  const colorClass = iconColorClasses[section.iconColor] || iconColorClasses.slate;

  return (
    <section id={section.id} className="scroll-mt-24 mb-12">
      {/* Glass-premium section card */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8
                      shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <div className="flex items-start gap-4 mb-6">
          <div className={cn(
            "p-3 rounded-xl flex-shrink-0 shadow-lg ring-1 ring-white/10",
            colorClass
          )}>
            <Icon className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white pt-1">
            {section.title}
          </h2>
        </div>

        <div className="pl-0 md:pl-16">
          <p className="text-[#3F4460] leading-relaxed mb-6">
            {section.content}
          </p>

          {section.bullets && section.bullets.length > 0 && (
            <ul className="space-y-3 mb-6">
              {section.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-[#161828]0/20 flex items-center justify-center mt-0.5 group-hover:bg-[#161828]0/30 transition-colors">
                    <ChevronRight className="h-4 w-4 text-amber-700" />
                  </span>
                  <span className="text-[#3F4460] pt-0.5">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {section.numberedList && section.numberedList.length > 0 && (
            <ol className="space-y-3 mb-6 list-none">
              {section.numberedList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm group">
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500/30 to-amber-600/20
                                   text-amber-700 text-xs font-bold flex items-center justify-center
                                   shadow-lg ring-1 ring-amber-500/20 group-hover:from-amber-500/40 group-hover:to-amber-600/30 transition-all">
                    {i + 1}
                  </span>
                  <span className="text-[#3F4460] pt-1">{item}</span>
                </li>
              ))}
            </ol>
          )}

          {section.table && (
            <div className="overflow-x-auto mb-6 bg-white/[0.02] rounded-xl border border-white/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    {section.table.headers.map((header, i) => (
                      <th key={i} className="text-left py-4 px-5 text-amber-700/90 font-semibold uppercase text-xs tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-[#1E2134]/[0.03] transition-colors">
                      {row.map((cell, j) => (
                        <td key={j} className={cn(
                          "py-4 px-5 text-[#3F4460]",
                          j === 0 && "font-medium text-white"
                        )}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {section.table.caption && (
                <p className="text-xs text-[#A8A39A] px-5 py-3 border-t border-white/5 italic">{section.table.caption}</p>
              )}
            </div>
          )}

          {section.callout && (
            <div className={cn(
              "relative rounded-2xl p-5 mb-4 overflow-hidden",
              "bg-white/5 backdrop-blur-xl",
              "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:-z-10",
              section.callout.type === 'info' && "before:bg-gradient-to-r before:from-blue-500/50 before:via-blue-400/30 before:to-[#161828]/10",
              section.callout.type === 'warning' && "before:bg-gradient-to-r before:from-amber-500/50 before:via-amber-400/30 before:to-[#161828]/10",
              section.callout.type === 'tip' && "before:bg-gradient-to-r before:from-green-500/50 before:via-green-400/30 before:to-[#161828]/10",
              section.callout.type === 'example' && "before:bg-gradient-to-r before:from-purple-500/50 before:via-purple-400/30 before:to-[#161828]/10"
            )}>
              <div className={cn(
                "absolute inset-0 rounded-2xl border",
                section.callout.type === 'info' && "border-blue-500/30",
                section.callout.type === 'warning' && "border-amber-500/30",
                section.callout.type === 'tip' && "border-green-500/30",
                section.callout.type === 'example' && "border-[rgba(197,149,46,0.32)]"
              )} />
              <div className="relative flex items-start gap-4">
                <div className={cn(
                  "p-2 rounded-lg flex-shrink-0",
                  section.callout.type === 'info' && "bg-[#121423]0/20",
                  section.callout.type === 'warning' && "bg-[#161828]0/20",
                  section.callout.type === 'tip' && "bg-[rgba(46,139,87,0.08)]0/20",
                  section.callout.type === 'example' && "bg-purple-500/20"
                )}>
                  {section.callout.type === 'info' && <Info className="h-5 w-5 text-blue-700" />}
                  {section.callout.type === 'warning' && <AlertTriangle className="h-5 w-5 text-amber-700" />}
                  {section.callout.type === 'tip' && <Lightbulb className="h-5 w-5 text-green-700" />}
                  {section.callout.type === 'example' && <FileText className="h-5 w-5 text-purple-700" />}
                </div>
                <div>
                  <h4 className={cn(
                    "font-bold text-sm mb-1.5",
                    section.callout.type === 'info' && "text-blue-700",
                    section.callout.type === 'warning' && "text-amber-700",
                    section.callout.type === 'tip' && "text-green-700",
                    section.callout.type === 'example' && "text-purple-700"
                  )}>{section.callout.title}</h4>
                  <p className="text-[#3F4460] text-sm leading-relaxed">{section.callout.content}</p>
                </div>
              </div>
            </div>
          )}
        </div>
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
  const ctaCopy = getContextualCTABySlug(slug);
  const threatMeta = threatLevelMeta[article.threatLevel];
  const catMeta = categoryMeta[article.category];

  // Resolve dates from article data with static fallbacks
  const publishDate = article.publishDate ?? "2026-01-15";
  const updateDate = article.updatedDate ?? "2026-03-20";

  // JSON-LD Schemas (centralized generators)
  const articleSchemaData = buildArticleSchema({
    title: article.title,
    description: article.metaDescription,
    slug: `/learn/${slug}`,
    datePublished: publishDate,
    dateModified: updateDate,
  });

  const faqSchemaData = buildFaqSchema(article.faqs);

  const breadcrumbData = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Learn", url: "/learn" },
    { name: article.title, url: `/learn/${slug}` },
  ]);

  // Default sources by category
  const defaultSources = [
    { name: "IRS Publication 590-A — Contributions to IRAs", url: "https://www.irs.gov/publications/p590a" },
    { name: "IRS Publication 590-B — Distributions from IRAs", url: "https://www.irs.gov/publications/p590b" },
    { name: "World Gold Council — Gold Performance Data", url: "https://www.gold.org/goldhub/data/gold-prices" },
    { name: "U.S. Bureau of Labor Statistics — Consumer Price Index", url: "https://www.bls.gov/cpi/" },
    { name: "Better Business Bureau — Company Profiles", url: "https://www.bbb.org" },
  ];

  return (
    <main className="min-h-screen bg-transparent">
      <SchemaScript schema={articleSchemaData} />
      <SchemaScript schema={faqSchemaData} />
      <SchemaScript schema={breadcrumbData} />
      
      <TrustBar updateDate={updateDate} />

      {/* Hero Section - Premium Visual Styling */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.1),transparent_50%)]" />

        {/* Ambient gold glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]
            bg-gradient-radial from-amber-500/10 to-transparent blur-3xl pointer-events-none" />

        {/* Floating orbs for premium effect */}
        <FloatingOrbs variant="minimal" />

        <Container className="relative z-10">
          <div className="max-w-4xl">
            {/* Category & Threat Badge - Glass Treatment */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link
                href="/learn"
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-1.5
                           text-amber-700 text-sm font-medium hover:bg-[#1E2134]/10 transition-colors"
              >
                {catMeta.label}
              </Link>
              <div className={cn(
                "bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-1.5",
                "inline-flex items-center gap-1.5 text-sm font-medium"
              )}>
                {article.threatLevel === 'critical' && <AlertTriangle className="h-3.5 w-3.5 text-red-700" />}
                {article.threatLevel === 'warning' && <Info className="h-3.5 w-3.5 text-amber-700" />}
                {article.threatLevel === 'info' && <CheckCircle2 className="h-3.5 w-3.5 text-green-700" />}
                <span className={threatMeta.color}>{threatMeta.label}</span>
              </div>
            </div>

            {/* Title with subtle text shadow for depth */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight
                           [text-shadow:_0_2px_20px_rgba(251,191,36,0.15)]">
              {article.title}
            </h1>

            <p className="text-lg md:text-xl text-[#3F4460] leading-relaxed">
              {article.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Article Meta */}
      <section className="pt-6 pb-0">
        <Container>
          <div className="max-w-4xl">
            <ArticleMeta
              publishDate={publishDate}
              updateDate={updateDate}
              readTime="8 min"
            />
          </div>
        </Container>
      </section>

      {/* Answer First - GEO optimization for AI snippets */}
      {article.answerFirst && (
        <section className="pb-4">
          <Container>
            <div className="max-w-4xl">
              <AnswerFirst
                answer={article.answerFirst}
                keyFacts={article.answerFirstFacts}
                variant="dark"
              />
            </div>
          </Container>
        </section>
      )}

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
            {/* Sidebar - TOC and Audit Widget */}
            <div className="hidden lg:flex flex-col gap-6 sticky top-24 self-start">
              <TableOfContents
                items={article.tocItems}
                className="static block"
              />
              <SidebarAuditWidget
                trackSource={`learn-${article.slug}`}
                headline={ctaCopy.sidebarHeadline}
                body={ctaCopy.sidebarBody}
              />
            </div>

            {/* Article Content */}
            <div className="flex-1 max-w-4xl">
              {/* Sections */}
              {article.sections.map((section, index) => (
                <Fragment key={section.id}>
                  <ArticleSectionComponent section={section} />
                  {index === 2 && (
                    <InContentCTA
                      trackSource={`learn-${article.slug}`}
                      headline={ctaCopy.inContentHeadline}
                      body={ctaCopy.inContentBody}
                    />
                  )}
                  {index === 4 && (
                    <NewsletterSignup
                      variant="inline"
                      headline="Stay Updated on Retirement Strategies"
                      description="Get weekly insights on IRS rule changes, gold market moves, and retirement planning tips. No spam, unsubscribe anytime."
                    />
                  )}
                </Fragment>
              ))}

              {/* Warning Box - Premium Styling with Gradient Border */}
              {article.warningBox && (
                <div className={cn(
                  "relative rounded-2xl p-6 mb-12 overflow-hidden",
                  "bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
                  "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:-z-10",
                  article.warningBox.type === 'red' && "before:bg-gradient-to-r before:from-red-500/60 before:via-red-400/30 before:to-[#161828]/10",
                  article.warningBox.type === 'amber' && "before:bg-gradient-to-r before:from-amber-500/60 before:via-amber-400/30 before:to-[#161828]/10",
                  article.warningBox.type === 'blue' && "before:bg-gradient-to-r before:from-blue-500/60 before:via-blue-400/30 before:to-[#161828]/10",
                  article.warningBox.type === 'green' && "before:bg-gradient-to-r before:from-green-500/60 before:via-green-400/30 before:to-[#161828]/10"
                )}>
                  <div className={cn(
                    "absolute inset-0 rounded-2xl border",
                    article.warningBox.type === 'red' && "border-red-500/30",
                    article.warningBox.type === 'amber' && "border-amber-500/30",
                    article.warningBox.type === 'blue' && "border-blue-500/30",
                    article.warningBox.type === 'green' && "border-green-500/30"
                  )} />
                  <div className="relative flex items-start gap-4">
                    <div className={cn(
                      "p-3 rounded-xl flex-shrink-0 shadow-lg",
                      article.warningBox.type === 'red' && "bg-[rgba(220,38,38,0.08)]0/20",
                      article.warningBox.type === 'amber' && "bg-[#161828]0/20",
                      article.warningBox.type === 'blue' && "bg-[#121423]0/20",
                      article.warningBox.type === 'green' && "bg-[rgba(46,139,87,0.08)]0/20"
                    )}>
                      <AlertTriangle className={cn(
                        "h-6 w-6",
                        article.warningBox.type === 'red' && "text-red-700",
                        article.warningBox.type === 'amber' && "text-amber-700",
                        article.warningBox.type === 'blue' && "text-blue-700",
                        article.warningBox.type === 'green' && "text-green-700"
                      )} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">{article.warningBox.title}</h3>
                      <p className="text-[#3F4460] leading-relaxed">{article.warningBox.content}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Gold Bridge CTA - Premium Glass Card with Gold Accent */}
              <div id="gold-ira-bridge" className="scroll-mt-24 relative rounded-2xl p-8 mb-12 overflow-hidden
                                                   bg-gradient-to-br from-[rgba(197,149,46,0.08)] via-[#121423] to-[rgba(197,149,46,0.04)]
                                                   backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_60px_rgba(251,191,36,0.1)]">
                {/* Gold gradient border effect */}
                <div className="absolute inset-0 rounded-2xl border border-amber-500/30" />
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-amber-500/50 via-amber-400/20 to-amber-500/50 -z-10" />

                <div className="relative">
                  <h2 className="text-2xl font-serif font-bold text-white mb-4 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#161828]0/20 shadow-lg ring-1 ring-amber-500/30">
                      <Shield className="h-6 w-6 text-amber-700" />
                    </div>
                    {article.goldBridge.title}
                  </h2>
                  <p className="text-[#3F4460] leading-relaxed mb-5">
                    {article.goldBridge.content}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {article.goldBridge.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm group">
                        <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-[#161828]0/20 flex items-center justify-center mt-0.5
                                         group-hover:bg-[#161828]0/30 transition-colors ring-1 ring-amber-500/20">
                          <CheckCircle2 className="h-4 w-4 text-amber-700" />
                        </span>
                        <span className="text-[#3F4460] pt-0.5">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="gold" size="lg" asChild>
                    <Link href="/quiz">
                      Get Your Free Precious Metals Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* FAQs - Premium Glass Cards with Hover Effects */}
              {article.faqs.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#161828]0/20 shadow-lg ring-1 ring-amber-500/30">
                      <HelpCircle className="h-5 w-5 text-amber-700" />
                    </div>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {article.faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6
                                   shadow-[0_4px_20px_rgba(0,0,0,0.2)]
                                   hover:bg-[#1E2134]/[0.08] hover:border-amber-400/20
                                   hover:shadow-[0_8px_30px_-10px_rgba(212,175,55,0.15)]
                                   transition-all duration-300 group"
                      >
                        <h3 className="font-bold text-white mb-3 text-lg group-hover:text-amber-100 transition-colors flex items-start gap-3">
                          <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500/30 to-amber-600/20
                                           text-amber-700 text-sm font-bold flex items-center justify-center mt-0.5
                                           shadow-lg ring-1 ring-amber-500/20">
                            {i + 1}
                          </span>
                          <span className="pt-0.5">{faq.question}</span>
                        </h3>
                        <p className="text-[#3F4460] leading-relaxed pl-10">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter Signup - Post FAQ */}
              <NewsletterSignup
                variant="inline"
                headline="Stay Updated on Retirement Strategies"
                description="Get weekly insights on IRS rule changes, gold market moves, and retirement planning tips. No spam, unsubscribe anytime."
              />

              {/* Related Articles - Float Card Effect */}
              {relatedArticles.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#121423]0/20 shadow-lg ring-1 ring-blue-500/30">
                      <FileText className="h-5 w-5 text-blue-700" />
                    </div>
                    Related Articles
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {relatedArticles.map((related) => {
                      const relatedCat = categoryMeta[related.category];
                      return (
                        <Link
                          key={related.slug}
                          href={`/learn/${related.slug}`}
                          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5
                                     hover:bg-[#1E2134]/[0.08] hover:-translate-y-1
                                     hover:shadow-[0_8px_30px_-10px_rgba(212,175,55,0.2)]
                                     hover:border-amber-400/30 transition-all duration-300 group"
                        >
                          <div className="text-xs font-medium uppercase tracking-wider mb-2 text-[#A8A39A]
                                          group-hover:text-amber-700/80 transition-colors">
                            {relatedCat.label}
                          </div>
                          <h3 className="font-bold text-white group-hover:text-amber-700 transition-colors text-sm leading-snug">
                            {related.title}
                          </h3>
                          <div className="mt-3 flex items-center gap-1 text-xs text-[#A8A39A] group-hover:text-amber-700/60 transition-colors">
                            <span>Read more</span>
                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Related Guides - Premium Chip Style */}
              {article.relatedGuides.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-[rgba(46,139,87,0.08)]0/20 shadow-lg ring-1 ring-green-500/30">
                      <FileText className="h-4 w-4 text-green-700" />
                    </div>
                    Helpful Guides
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {article.relatedGuides.map((guide) => (
                      <Link
                        key={guide}
                        href={guide}
                        className="inline-flex items-center gap-2 px-4 py-2.5
                                   bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl
                                   text-sm text-[#3F4460]
                                   hover:bg-[#1E2134]/[0.08] hover:border-amber-400/30 hover:text-white
                                   hover:-translate-y-0.5 hover:shadow-[0_4px_20px_-5px_rgba(212,175,55,0.2)]
                                   transition-all duration-300 group"
                      >
                        <FileText className="h-4 w-4 text-amber-700 group-hover:text-amber-800" />
                        {guide.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Tools - Premium Gold Accent Style */}
              {article.relatedTools && article.relatedTools.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-[#161828]0/20 shadow-lg ring-1 ring-amber-500/30">
                      <Calculator className="h-4 w-4 text-amber-700" />
                    </div>
                    Interactive Tools
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {article.relatedTools.map((tool) => (
                      <Link
                        key={tool}
                        href={tool}
                        className="inline-flex items-center gap-2 px-4 py-2.5
                                   bg-gradient-to-br from-amber-500/15 to-amber-600/10
                                   backdrop-blur-xl border border-amber-500/30 rounded-xl
                                   text-sm text-amber-700 font-medium
                                   hover:from-amber-500/25 hover:to-amber-600/15
                                   hover:border-amber-400/50 hover:text-amber-800
                                   hover:-translate-y-0.5 hover:shadow-[0_4px_20px_-5px_rgba(212,175,55,0.3)]
                                   transition-all duration-300 group"
                      >
                        <Calculator className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        {tool.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                        <ArrowRight className="h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Sources */}
      <section className="py-8">
        <Container>
          <div className="max-w-4xl">
            <SourcesSection sources={defaultSources} lastVerified="March 2026" />
          </div>
        </Container>
      </section>

      {/* Augusta CTA */}
      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <Container>
          <AugustaCTA
            variant="footer"
            headline={ctaCopy.footerHeadline}
            subheadline={ctaCopy.footerSubheadline}
            augustaContext={ctaCopy.augustaContext}
            trackSource={`learn-${slug}`}
          />
        </Container>
      </section>

      
    </main>
  );
}
