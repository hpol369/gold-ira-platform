// src/app/grandchildren/[slug]/page.tsx
// P2-006: Grandchildren Legacy Dynamic Article Page

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
  getGrandchildrenArticleBySlug,
  getAllGrandchildrenArticleSlugs,
  getRelatedGrandchildrenArticles,
} from "@/data/grandchildren";
import type { HubSection } from "@/types/content-hubs";
import type { IconColor } from "@/types/learn-article";
import {
  ArrowRight, CheckCircle2, ChevronRight, Info, Clock, DollarSign, FileText,
  Users, Heart, Home, Lock, Wallet, Calendar, HelpCircle, Target, Gift,
  GraduationCap, Briefcase, Layers, Shuffle, Zap, BookOpen, Shield,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  ArrowRight, CheckCircle2, ChevronRight, Info, Clock, DollarSign, FileText,
  Users, Heart, Home, Lock, Wallet, Calendar, HelpCircle, Target, Gift,
  GraduationCap, Briefcase, Layers, Shuffle, Zap, BookOpen, Shield,
  CheckCircle: CheckCircle2,
};

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
  return getAllGrandchildrenArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getGrandchildrenArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
  };
}

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
        {section.bullets && (
          <ul className="space-y-2 mb-4">
            {section.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <ChevronRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600" dangerouslySetInnerHTML={{
                  __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>')
                }} />
              </li>
            ))}
          </ul>
        )}
        {section.numberedList && (
          <ol className="space-y-3 mb-4">
            {section.numberedList.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="bg-green-100 text-green-700 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-slate-600" dangerouslySetInnerHTML={{
                  __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>')
                }} />
              </li>
            ))}
          </ol>
        )}
        {section.callout && (
          <div className={cn("p-4 rounded-lg border mb-4",
            section.callout.type === "warning" ? "bg-amber-50 border-amber-200" :
            section.callout.type === "tip" ? "bg-green-50 border-green-200" :
            section.callout.type === "example" ? "bg-purple-50 border-purple-200" :
            "bg-blue-50 border-blue-200"
          )}>
            <p className={cn("font-medium mb-1",
              section.callout.type === "warning" ? "text-amber-800" :
              section.callout.type === "tip" ? "text-green-800" :
              section.callout.type === "example" ? "text-purple-800" : "text-blue-800"
            )}>{section.callout.title}</p>
            <p className="text-sm text-slate-600">{section.callout.content}</p>
          </div>
        )}
        {section.table && (
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  {section.table.headers.map((header, i) => (
                    <th key={i} className="text-left py-3 px-4 text-slate-500 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    {row.map((cell, j) => (
                      <td key={j} className="py-3 px-4 text-slate-600">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {section.table.caption && (
              <p className="text-xs text-slate-400 mt-2 italic">{section.table.caption}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default async function GrandchildrenArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getGrandchildrenArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = getRelatedGrandchildrenArticles(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    author: { "@type": "Organization", name: "Rich Dad Retirement" },
    publisher: { "@type": "Organization", name: "Rich Dad Retirement" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SchemaScript schema={articleSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Hero */}
      <section className="relative pt-24 pb-12 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.08),transparent_50%)]" />
        <Container className="relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/grandchildren" className="hover:text-slate-900">Grandchildren Legacy</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-700">{article.title}</span>
          </nav>
          <div className="max-w-4xl">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              Grandchildren Legacy
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#000080] mt-4 mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-slate-600">{article.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <Container>
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents items={article.tocItems} />
              </div>
            </aside>
            <article>
              <div className="mb-12">
                <KeyTakeaways items={article.takeaways} />
              </div>

              {/* Age Considerations if exists */}
              {article.ageConsiderations && article.ageConsiderations.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6 flex items-center gap-3">
                    <Users className="h-6 w-6 text-green-600" /> Age Considerations
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {article.ageConsiderations.map((age, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                        <h3 className="font-bold text-green-700 mb-3">{age.ageRange}</h3>
                        <ul className="space-y-2">
                          {age.tips.map((tip, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tax Implications if exists */}
              {article.taxImplications && article.taxImplications.length > 0 && (
                <div className="mb-12 bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="font-bold text-amber-700 mb-4 flex items-center gap-2">
                    <DollarSign className="h-5 w-5" /> Tax Implications
                  </h3>
                  <div className="space-y-3">
                    {article.taxImplications.map((tax, i) => (
                      <div key={i} className="text-sm border-b border-amber-200 pb-3 last:border-0 last:pb-0">
                        <span className="text-slate-900 font-medium">{tax.scenario}:</span>{" "}
                        <span className="text-slate-600">{tax.taxTreatment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {article.sections.map((section) => (
                <ArticleSectionComponent key={section.id} section={section} />
              ))}

              {/* Gold Bridge */}
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
                  <Link href="/quiz">Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </section>

              {/* FAQs */}
              {article.faqs.length > 0 && (
                <section className="my-12">
                  <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6 flex items-center gap-3">
                    <HelpCircle className="h-6 w-6 text-green-600" /> Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {article.faqs.map((faq, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                        <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                        <p className="text-slate-600 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Related */}
              {relatedArticles.length > 0 && (
                <section className="my-12">
                  <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6">Related Guides</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {relatedArticles.map((related) => (
                      <Link key={related.slug} href={`/grandchildren/${related.slug}`}
                        className="bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-green-300 rounded-lg p-4 transition-all group">
                        <h3 className="font-medium text-slate-900 group-hover:text-green-600">{related.title}</h3>
                        <p className="text-sm text-slate-500 mt-1 line-clamp-2">{related.subtitle}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <Container>
          <AugustaCTA variant="footer" headline="Build Generational Wealth"
            subheadline="Gold has preserved wealth across generations for thousands of years."
            trackSource={`grandchildren-${slug}`} />
        </Container>
      </section>
      <Footer />
    </main>
  );
}
