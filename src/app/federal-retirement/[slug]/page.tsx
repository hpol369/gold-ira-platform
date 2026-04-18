// src/app/federal-retirement/[slug]/page.tsx
// Sprint 8: Federal Employee Retirement Dynamic Article Page

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { Button } from "@/components/ui/Button";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { FAQSection } from "@/components/seo/FAQSection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { SidebarAuditWidget } from "@/components/widgets/SidebarAuditWidget";
import { ArticleMeta } from "@/components/content/ArticleMeta";
import { TrustBar } from "@/components/content/TrustBar";
import { SourcesSection } from "@/components/content/SourcesSection";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import {
  getFederalRetirementArticleBySlug,
  getAllFederalRetirementArticleSlugs,
  getRelatedFederalRetirementArticles,
} from "@/data/federal-retirement";
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
  Lock,
  Wallet,
  Calendar,
  Briefcase,
  HelpCircle,
  Target,
  Calculator,
  Shuffle,
  Layers,
  Scale,
  Building2,
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
  Lock,
  Wallet,
  Calendar,
  Briefcase,
  HelpCircle,
  Target,
  Calculator,
  Shuffle,
  Layers,
  Scale,
  Building2,
};

// Color classes for icons
const iconColorClasses: Record<IconColor, string> = {
  red: "text-red-600 bg-red-100",
  amber: "text-amber-600 bg-amber-100",
  green: "text-green-600 bg-green-100",
  blue: "text-blue-600 bg-blue-100",
  purple: "text-purple-600 bg-purple-100",
  slate: "text-[#D0CCC4] bg-[#121423]",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllFederalRetirementArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getFederalRetirementArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `/federal-retirement/${slug}`,
    },
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
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
          {section.title}
        </h2>
      </div>

      <div className="pl-0 md:pl-14">
        <p
          className="text-[#D0CCC4] leading-relaxed mb-4"
          dangerouslySetInnerHTML={{
            __html: section.content.replace(
              /\*\*(.*?)\*\*/g,
              '<strong class="text-[#F6F4EF]">$1</strong>'
            ),
          }}
        />

        {section.bullets && section.bullets.length > 0 && (
          <ul className="space-y-2 mb-4">
            {section.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <ChevronRight className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span
                  className="text-[#D0CCC4]"
                  dangerouslySetInnerHTML={{
                    __html: bullet.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-[#F6F4EF]">$1</strong>'
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
                <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  {i + 1}
                </span>
                <span
                  className="text-[#D0CCC4]"
                  dangerouslySetInnerHTML={{
                    __html: item.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-[#F6F4EF]">$1</strong>'
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
                ? "bg-blue-50 border-blue-200"
                : "bg-[#0C0D18] border-[#2A2D42]"
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
                  ? "text-blue-800"
                  : "text-[#F6F4EF]"
              )}
            >
              {section.callout.title}
            </p>
            <p className="text-sm text-[#D0CCC4]">{section.callout.content}</p>
          </div>
        )}

        {section.table && (
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2A2D42]">
                  {section.table.headers.map((header, i) => (
                    <th
                      key={i}
                      className="text-left py-3 px-4 text-[#A8A39A] font-medium"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row, i) => (
                  <tr key={i} className="border-b border-[#2A2D42]">
                    {row.map((cell, j) => (
                      <td key={j} className="py-3 px-4 text-[#D0CCC4]">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {section.table.caption && (
              <p className="text-xs text-[#A8A39A] mt-2 italic">
                {section.table.caption}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default async function FederalRetirementArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getFederalRetirementArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedFederalRetirementArticles(slug);

  // Build AnswerFirst text from metaDescription (which contains the direct answer)
  const answerFirstText = article.metaDescription;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TrustBar updateDate="2026-03-20" />

      <SchemaScript
        schema={articleSchema({
          title: article.title,
          description: article.metaDescription,
          slug: `/federal-retirement/${article.slug}`,
          datePublished: "2026-03-20",
          dateModified: "2026-03-20",
        })}
      />
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Federal Retirement", url: "/federal-retirement" },
          { name: article.title, url: `/federal-retirement/${article.slug}` },
        ])}
      />

      {/* Header */}
      <header className="bg-[#0C0D18] py-20 border-b border-[#2A2D42]">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-6 border border-blue-200">
              <Building2 className="h-4 w-4" />
              Federal Retirement Guide
            </div>

            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-[#A8A39A] mb-4">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/federal-retirement" className="hover:text-blue-600">Federal Retirement</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-[#D0CCC4]">{article.title.split(":")[0]}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#F6F4EF] mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-[#D0CCC4] leading-relaxed">
              {article.subtitle}
            </p>
          </div>
        </Container>
      </header>

      {/* Content */}
      <Container className="py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              <TableOfContents items={article.tocItems} />
              <SidebarAuditWidget trackSource={`federal-retirement-${article.slug}`} />

              {/* Related Tools */}
              {article.relatedTools && article.relatedTools.length > 0 && (
                <div className="bg-[#0C0D18] rounded-xl p-4 border border-[#2A2D42]">
                  <h3 className="text-sm font-bold text-[#F6F4EF] mb-3">Related Tools</h3>
                  <ul className="space-y-2">
                    {article.relatedTools.map((tool) => (
                      <li key={tool}>
                        <Link
                          href={tool}
                          className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                        >
                          <Calculator className="h-3 w-3" />
                          {tool.split("/").pop()?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 min-w-0 order-1 lg:order-2">
            {/* Article Meta */}
            <ArticleMeta
              publishDate="2026-03-20"
              updateDate="2026-03-20"
              readTime="10 min"
            />

            {/* Answer First */}
            <AnswerFirst answer={answerFirstText} className="mb-8" />

            {/* Key Takeaways */}
            <KeyTakeaways items={article.takeaways} />

            {/* Article Sections */}
            {article.sections.map((section) => (
              <ArticleSectionComponent key={section.id} section={section} />
            ))}

            {/* Gold Bridge CTA */}
            <div className="my-12 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-8 border border-amber-200">
              <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-3">
                {article.goldBridge.title}
              </h2>
              <p className="text-[#D0CCC4] mb-4">{article.goldBridge.content}</p>
              <ul className="space-y-2 mb-6">
                {article.goldBridge.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[#D0CCC4]">{bullet}</span>
                  </li>
                ))}
              </ul>
              <Button variant="gold" size="lg" asChild className="bg-[#DC2626] hover:bg-[#991B1B] text-white">
                <Link href="/get-started">
                  Get Your Free Precious Metals Kit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Sources */}
            <SourcesSection
              sources={[
                { name: "OPM.gov — Federal Employees Retirement System", url: "https://www.opm.gov/retirement-center/fers-information/" },
                { name: "TSP.gov — Thrift Savings Plan Fund Information", url: "https://www.tsp.gov/fund-performance/" },
                { name: "IRS Publication 590 — Individual Retirement Arrangements", url: "https://www.irs.gov/publications/p590a" },
                { name: "SSA.gov — Social Security Benefits", url: "https://www.ssa.gov/benefits/retirement/" },
                { name: "World Gold Council — Gold as a Strategic Asset", url: "https://www.gold.org/goldhub/research/relevance-of-gold-as-a-strategic-asset" },
              ]}
              lastVerified="March 2026"
            />

            {/* FAQ Section */}
            <FAQSection
              faqs={article.faqs}
              title={`${article.title.split(":")[0]} FAQs`}
              className="mb-12"
            />

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-6">
                  Related Federal Retirement Guides
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/federal-retirement/${related.slug}`}
                      className="group bg-[#0C0D18] rounded-xl p-5 border border-[#2A2D42] hover:border-blue-300 hover:shadow-sm transition-all"
                    >
                      <h3 className="font-bold text-[#F6F4EF] group-hover:text-blue-600 transition-colors mb-1">
                        {related.title.split(":")[0]}
                      </h3>
                      <p className="text-sm text-[#D0CCC4]">{related.subtitle}</p>
                    </Link>
                  ))}
                </div>

                {/* Back to hub */}
                <Link
                  href="/federal-retirement"
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium mt-4"
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                  Back to Federal Retirement Guide
                </Link>
              </section>
            )}
          </article>
        </div>
      </Container>

      {/* Augusta CTA */}
      <AugustaCTA
        variant="banner"
        trackSource={`federal-retirement-${slug}`}
      />

      <section className="py-12 bg-white">
        <Container>
          <AutoRelatedContent currentUrl={`/federal-retirement/${slug}`} />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
