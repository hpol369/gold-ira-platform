// src/app/news/[slug]/page.tsx
// PATRIOT LIGHT THEME REFACTOR

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
    getNewsArticleBySlug,
    getAllNewsSlugs,
    formatNewsDate,
    getCategoryInfo,
    getRelatedNews,
} from "@/lib/news";
import { ArrowRight, ArrowLeft, Clock, Calendar, ExternalLink, Share2 } from "lucide-react";
import { SpotPriceWidget } from "@/components/widgets/SpotPriceWidget";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllNewsSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = getNewsArticleBySlug(slug);

    if (!article) {
        return { title: "Article Not Found" };
    }

    return {
        title: article.metaTitle || `${article.title} | Rich Dad Daily Briefing`,
        description: article.metaDescription || article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: "article",
            publishedTime: article.publishedAt,
            authors: [article.author],
            images: article.featuredImage ? [article.featuredImage] : [],
        },
    };
}

export default async function NewsArticlePage({ params }: Props) {
    const { slug } = await params;
    const article = getNewsArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const categoryInfo = getCategoryInfo(article.category);
    const relatedArticles = getRelatedNews(slug, 3);
    const names: Record<string, string> = {
        "/guide/gold-ira-guide": "Gold IRA Guide",
        "/guide/silver-ira-guide": "Silver IRA Guide",
        "/crypto-ira": "Crypto IRA Guide",
        "/self-directed-ira": "Self-Directed IRA Guide",
        "/solo-401k": "Solo 401k Guide",
        "/rollover": "Rollover Guide",
        "/quiz": "Take Our Quiz",
        "/best-gold-ira-companies": "Best Gold IRA Companies",
        "/best-crypto-ira-companies": "Best Crypto IRA Companies",
        "/reviews/itrustcapital": "iTrustCapital Review",
        "/learn/stock-market-crash-protection": "Market Crash Protection",
        "/why-gold": "Why Gold?",
        "/why-gold/inflation-protection": "Gold & Inflation",
        "/scenarios": "Economic Scenarios",
    };
    function formatGuideName(path: string): string {
        return names[path] || path.split("/").pop()?.replace(/-/g, " ") || path;
    }

    function formatArticleBody(body: string): string {
        // Split into blocks by double newlines
        const blocks = body.split(/\n\n+/);

        const htmlBlocks = blocks.map(block => {
            const trimmed = block.trim();
            if (!trimmed) return '';

            // Headers
            if (trimmed.startsWith('### ')) {
                return `<h3>${processInline(trimmed.slice(4))}</h3>`;
            }
            if (trimmed.startsWith('## ')) {
                return `<h2>${processInline(trimmed.slice(3))}</h2>`;
            }
            if (trimmed.startsWith('# ')) {
                return `<h1>${processInline(trimmed.slice(2))}</h1>`;
            }

            // Bullet lists
            if (trimmed.startsWith('- ')) {
                const items = trimmed.split('\n').map(line => {
                    if (line.startsWith('- ')) {
                        return `<li>${processInline(line.slice(2))}</li>`;
                    }
                    return '';
                }).filter(Boolean);
                return `<ul>${items.join('')}</ul>`;
            }

            // Blockquotes
            if (trimmed.startsWith('> ')) {
                const content = trimmed.split('\n').map(line =>
                    line.startsWith('> ') ? line.slice(2) : line
                ).join(' ');
                return `<blockquote><p>${processInline(content)}</p></blockquote>`;
            }

            // Regular paragraphs
            return `<p>${processInline(trimmed.replace(/\n/g, ' '))}</p>`;
        });

        return htmlBlocks.filter(Boolean).join('\n');
    }

    // Process inline markdown (bold, italic, links)
    function processInline(text: string): string {
        return text
            // Bold
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            // Italic
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            // Links
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Article Header - Patriot Style */}
            <section className="relative py-12 md:py-16 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#000080]/5 skew-x-12 transform translate-x-20 pointer-events-none"></div>

                <Container className="relative z-10">
                    {/* Back Link */}
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-[#000080] transition-colors mb-8 font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Daily Briefings
                    </Link>

                    {/* Category & Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold bg-${categoryInfo.color}-100 text-${categoryInfo.color}-700 shadow-sm border border-${categoryInfo.color}-200`}>
                            {categoryInfo.label}
                        </span>
                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                            <Calendar className="w-4 h-4" />
                            {formatNewsDate(article.publishedAt)}
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                            <Clock className="w-4 h-4" />
                            {article.readTime} min read
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-[#000080] mb-6 leading-tight max-w-4xl">
                        {article.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-xl text-slate-600 max-w-3xl mb-8 font-medium leading-relaxed">
                        {article.excerpt}
                    </p>

                    {/* Author & Share */}
                    <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                        <div className="text-sm text-slate-600 font-medium">
                            By <span className="text-[#000080] font-bold">{article.author}</span>
                        </div>
                        <button className="flex items-center gap-2 text-slate-500 hover:text-[#B22234] transition-colors text-sm font-bold">
                            <Share2 className="w-4 h-4" />
                            Share
                        </button>
                    </div>
                </Container>
            </section>

            {/* Article Content */}
            <section className="py-12 bg-white">
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Main Content */}
                        <article className="lg:col-span-8">
                            <div
                                className="text-slate-700 text-lg leading-relaxed
                                    [&>h2]:font-serif [&>h2]:text-[#000080] [&>h2]:font-bold [&>h2]:text-2xl [&>h2]:mt-10 [&>h2]:mb-4
                                    [&>h3]:font-serif [&>h3]:text-[#000080] [&>h3]:font-bold [&>h3]:text-xl [&>h3]:mt-8 [&>h3]:mb-3
                                    [&>p]:mb-6
                                    [&_strong]:text-[#000080] [&_strong]:font-bold
                                    [&_a]:text-[#B22234] [&_a]:no-underline hover:[&_a]:underline
                                    [&>ul]:my-6 [&>ul]:pl-6 [&>ul]:list-disc [&>ul]:marker:text-[#B22234]
                                    [&_li]:mb-2
                                    [&>blockquote]:border-l-4 [&>blockquote]:border-[#B22234] [&>blockquote]:pl-6 [&>blockquote]:my-6 [&>blockquote]:italic [&>blockquote]:text-slate-600 [&>blockquote]:bg-slate-50 [&>blockquote]:py-2 [&>blockquote]:pr-4"
                                dangerouslySetInnerHTML={{ __html: formatArticleBody(article.body) }}
                            />

                            {/* Source Attribution */}
                            {article.sourceUrl && (
                                <div className="mt-8 pt-6 border-t border-slate-200">
                                    <p className="text-sm text-slate-500 font-medium">
                                        Source:{" "}
                                        <a
                                            href={article.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#000080] hover:text-[#B22234] inline-flex items-center gap-1 font-bold"
                                        >
                                            {article.sourceName || "Original Article"}
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </p>
                                </div>
                            )}

                            {/* Action Box CTA - Patriot Style */}
                            <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
                                <h3 className="text-xl font-serif font-bold text-[#000080] mb-4">
                                    Ready to Protect Your Retirement?
                                </h3>
                                <p className="text-slate-600 mb-6 font-medium">
                                    If this news has you concerned about your 401(k) or IRA, you&apos;re not alone.
                                    Thousands of Americans are diversifying into physical gold to protect their
                                    purchasing power from inflation and market volatility.
                                </p>
                                <Link href={getTrackedLink(AFFILIATE_LINKS.augusta, `news-${slug}`, "augusta")}>
                                    <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white font-bold" size="lg">
                                        Get Your Free Gold IRA Guide <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4">
                            {/* Related Guides */}
                            {article.relatedGuides.length > 0 && (
                                <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-[#000080] mb-4">Related Guides</h3>
                                    <div className="space-y-3">
                                        {article.relatedGuides.map((guide) => (
                                            <Link
                                                key={guide}
                                                href={guide}
                                                className="flex items-center justify-between text-slate-600 hover:text-[#B22234] transition-colors font-medium"
                                            >
                                                <span className="text-sm">{formatGuideName(guide)}</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Gold Price Widget - Live from API */}
                            <div className="mb-6">
                                <SpotPriceWidget metal="gold" />
                            </div>

                            {/* Newsletter Signup */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-[#000080] mb-2">Daily Briefing</h3>
                                <p className="text-sm text-slate-500 mb-4 font-medium">
                                    Get our Rich Dad perspective on financial news delivered to your inbox.
                                </p>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 text-sm mb-3 focus:outline-none focus:border-[#000080]"
                                />
                                <Button className="w-full bg-[#000080] hover:bg-[#000060] text-white font-bold" size="sm">
                                    Subscribe
                                </Button>
                            </div>
                        </aside>
                    </div>
                </Container>
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="py-12 bg-slate-50 border-t border-slate-200">
                    <Container>
                        <h2 className="text-2xl font-serif font-bold text-[#000080] mb-8">More Briefings</h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedArticles.map((related) => (
                                <Link key={related.slug} href={`/news/${related.slug}`} className="group">
                                    <div className="bg-white border border-slate-200 rounded-xl p-6 h-full hover:shadow-lg hover:border-[#000080]/30 transition-all">
                                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold bg-${getCategoryInfo(related.category).color}-100 text-${getCategoryInfo(related.category).color}-700 mb-3`}>
                                            {getCategoryInfo(related.category).label}
                                        </span>
                                        <h3 className="text-lg font-bold text-[#000080] mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                                            {related.headline || related.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 line-clamp-2 font-medium">{related.excerpt}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            <Footer />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        headline: article.title,
                        description: article.excerpt,
                        datePublished: article.publishedAt,
                        dateModified: article.updatedAt || article.publishedAt,
                        author: {
                            "@type": "Organization",
                            name: article.author,
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "Rich Dad Retirement",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://richdadretirement.com/logo.png",
                            },
                        },
                        image: article.featuredImage || "https://richdadretirement.com/og-image.jpg",
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            "@id": `https://richdadretirement.com/news/${article.slug}`,
                        },
                    }),
                }}
            />
        </main>
    );
}
