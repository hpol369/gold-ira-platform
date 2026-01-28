// src/app/widow-guide/[slug]/page.tsx
// P2-002: Widow's Guide Dynamic Article Page

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
  getWidowGuideArticleBySlug,
  getAllWidowGuideArticleSlugs,
  getRelatedWidowGuideArticles,
} from "@/data/widow-guide";
import type { HubSection } from "@/types/content-hubs";
import type { IconColor } from "@/types/learn-article";
import {
  AlertTriangle,
  Shield,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Info,
  Clock,
  DollarSign,
  FileText,
  Users,
  Heart,
  Home,
  CreditCard,
  Lock,
  Wallet,
  Calendar,
  Briefcase,
  HelpCircle,
  Target,
  Receipt,
  Scale,
  Phone,
  GraduationCap,
  Eye,
  Ambulance,
  LifeBuoy,
  Calculator,
  Shuffle,
  Layers,
  Gift,
  MapPin,
  Brain,
  ShieldAlert,
  AlertCircle,
  BookOpen,
  CheckCircle,
  Zap,
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
  DollarSign,
  FileText,
  Users,
  Heart,
  Home,
  CreditCard,
  Lock,
  Wallet,
  Calendar,
  Briefcase,
  HelpCircle,
  Target,
  Receipt,
  Scale,
  Phone,
  GraduationCap,
  Eye,
  Ambulance,
  LifeBuoy,
  Calculator,
  Shuffle,
  Layers,
  Gift,
  MapPin,
  Brain,
  ShieldAlert,
  AlertCircle,
  BookOpen,
  CheckCircle,
  Zap,
};

// Color classes for icons - Light theme
const iconColorClasses: Record<IconColor, string> = {
  red: "text-red-600 bg-red-100",
  amber: "text-amber-600 bg-amber-100",
  green: "text-green-600 bg-green-100",
  blue: "text-blue-600 bg-blue-100",
  purple: "text-purple-600 bg-purple-100",
  slate: "text-slate-600 bg-slate-100",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllWidowGuideArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getWidowGuideArticleBySlug(slug);

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
function ArticleSectionComponent({ section }: { section: HubSection }) {
  const Icon = iconMap[section.icon] || Info;
  const colorClass = iconColorClasses[section.iconColor] || iconColorClasses.slate;

  return (
    <section id={section.id} className="scroll-mt-24 mb-12">
      <div className="flex items-start gap-4 mb-4">
        <div className={cn("p-2 rounded-lg flex-shrink-0", colorClass)}>
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080]">
          {section.title}
        </h2>
      </div>

      <div className="pl-0 md:pl-14">
        <p className="text-slate-600 leading-relaxed mb-4">{section.content}</p>

        {section.bullets && section.bullets.length > 0 && (
          <ul className="space-y-2 mb-4">
            {section.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <ChevronRight className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span
                  className="text-slate-600"
                  dangerouslySetInnerHTML={{
                    __html: bullet.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-slate-900">$1</strong>'
                    ),
                  }}
                />
              </li>
            ))}
          </ul>
        )}

        {section.numberedList && section.numberedList.length > 0 && (
          <ol className="space-y-3 mb-4">
            {section.numberedList.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="bg-purple-100 text-purple-700 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  {i + 1}
                </span>
                <span
                  className="text-slate-600"
                  dangerouslySetInnerHTML={{
                    __html: item.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-slate-900">$1</strong>'
                    ),
                  }}
                />
              </li>
            ))}
          </ol>
        )}

        {section.callout && (
          <div
            className={cn(
              "p-4 rounded-lg border mb-4",
              section.callout.type === "warning"
                ? "bg-amber-50 border-amber-200"
                : section.callout.type === "tip"
                ? "bg-green-50 border-green-200"
                : section.callout.type === "example"
                ? "bg-purple-50 border-purple-200"
                : "bg-blue-50 border-blue-200"
            )}
          >
            <p
              className={cn(
                "font-medium mb-1",
                section.callout.type === "warning"
                  ? "text-amber-800"
                  : section.callout.type === "tip"
                  ? "text-green-800"
                  : section.callout.type === "example"
                  ? "text-purple-800"
                  : "text-blue-800"
              )}
            >
              {section.callout.title}
            </p>
            <p className="text-sm text-slate-600">{section.callout.content}</p>
          </div>
        )}

        {section.table && (
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  {section.table.headers.map((header, i) => (
                    <th
                      key={i}
                      className="text-left py-3 px-4 text-slate-500 font-medium"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    {row.map((cell, j) => (
                      <td key={j} className="py-3 px-4 text-slate-600">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {section.table.caption && (
              <p className="text-xs text-slate-400 mt-2 italic">
                {section.table.caption}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default async function WidowGuideArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getWidowGuideArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedWidowGuideArticles(slug);

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
      "@id": `https://richdadretirement.com/widow-guide/${article.slug}`,
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
    <main className="min-h-screen bg-white">
      <Navbar />
      <SchemaScript schema={articleSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08),transparent_50%)]" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href="/widow-guide"
              className="hover:text-slate-900 transition-colors"
            >
              Widow&apos;s Guide
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-700">{article.title}</span>
          </nav>

          <div className="max-w-4xl">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                Widow&apos;s Guide
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  article.articleType === "checklist"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {article.articleType === "checklist" ? "Checklist" : "Guide"}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#000080] mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-slate-600">{article.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Emotional Note (if exists) */}
      {article.emotionalNote && (
        <section className="py-6 bg-white">
          <Container>
            <div className="max-w-4xl">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-purple-800 font-medium mb-1">
                      {article.emotionalNote.title}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {article.emotionalNote.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Main Content */}
      <section className="py-12 bg-white">
        <Container>
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
            {/* Sidebar - Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents items={article.tocItems} />
              </div>
            </aside>

            {/* Main Article Content */}
            <article>
              {/* Key Takeaways */}
              <div className="mb-12">
                <KeyTakeaways items={article.takeaways} />
              </div>

              {/* Timeline (if exists) */}
              {article.timeline && article.timeline.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6 flex items-center gap-3">
                    <Clock className="h-6 w-6 text-purple-600" />
                    Timeline of Action Items
                  </h2>
                  <div className="space-y-6">
                    {article.timeline.map((period, i) => (
                      <div
                        key={i}
                        className="bg-slate-50 border border-slate-200 rounded-xl p-6"
                      >
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-purple-600" />
                          {period.period}
                        </h3>
                        <ul className="space-y-2">
                          {period.tasks.map((task, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-600">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Article Sections */}
              {article.sections.map((section) => (
                <ArticleSectionComponent key={section.id} section={section} />
              ))}

              {/* Gold Bridge Section */}
              <section className="my-12 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-8">
                <h2 className="text-2xl font-serif font-bold text-[#B22234] mb-4">
                  {article.goldBridge.title}
                </h2>
                <p className="text-slate-600 mb-4">{article.goldBridge.content}</p>
                <ul className="space-y-2 mb-6">
                  {article.goldBridge.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#B22234] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="gold" size="lg" asChild className="bg-[#B22234] hover:bg-[#8b1c2a] text-white">
                  <Link href="/quiz">
                    Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </section>

              {/* FAQs */}
              {article.faqs.length > 0 && (
                <section className="my-12">
                  <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6 flex items-center gap-3">
                    <HelpCircle className="h-6 w-6 text-purple-600" />
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {article.faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="bg-slate-50 border border-slate-200 rounded-xl p-6"
                      >
                        <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                        <p className="text-slate-600 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <section className="my-12">
                  <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6">
                    Related Guides
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/widow-guide/${related.slug}`}
                        className="bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-purple-300 rounded-lg p-4 transition-all group"
                      >
                        <h3 className="font-medium text-slate-900 group-hover:text-purple-600 transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                          {related.subtitle}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>
          </div>
        </Container>
      </section>

      {/* Augusta CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Protect Your Financial Future"
            subheadline="Get free information about protecting your retirement savings with precious metals. No pressure, no obligation."
            trackSource={`widow-guide-${slug}`}
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
