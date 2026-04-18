// src/app/news/page.tsx
// PATRIOT LIGHT THEME REFACTOR

import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getAllNewsArticles, formatNewsDate, getCategoryInfo } from "@/lib/news";
import { NewsCategory, NEWS_CATEGORIES } from "@/types/news";
import { ArrowRight, Newspaper, TrendingUp, Clock, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Rich Dad Daily Briefing | Financial News for Investors",
    description: "Daily financial news analysis with Robert Kiyosaki's perspective. Fed decisions, gold prices, and economic news explained for retirement investors.",
    keywords: "financial news, gold news, fed news, retirement news, robert kiyosaki",
    // Noindex — all child news articles are noindexed, so index page should be too
    robots: { index: false, follow: true },
    openGraph: {
        title: "Rich Dad Daily Briefing | Financial News for Retirement Investors",
        description: "Daily financial news analysis with Robert Kiyosaki's perspective. What the mainstream won't tell you about your retirement.",
        type: "website",
    },
    twitter: {
        card: "summary",
    },
    alternates: {
        canonical: "https://www.richdadretirement.com/news",
    },
};

export default function NewsPage() {
    const articles = getAllNewsArticles();
    const latestArticle = articles[0];
    const recentArticles = articles.slice(1, 7);
    const categories = Object.keys(NEWS_CATEGORIES) as NewsCategory[];

    return (
        <main className="min-h-screen bg-[#0C0D18]">
            <Navbar />

            {/* Hero Section - Patriot Style */}
            <section className="relative py-16 md:py-24 overflow-hidden bg-[#0C0D18] border-b border-[#2A2D42]">
                {/* Patriot Wash */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[rgba(197,149,46,0.06)] skew-x-12 transform translate-x-20 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.015] pointer-events-none"></div>

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(197,149,46,0.08)] border border-[#000080]/20 text-[#F6F4EF] text-sm font-bold mb-6">
                            <Newspaper className="w-4 h-4" />
                            Updated Daily
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#F6F4EF] mb-6 leading-tight">
                            Rich Dad{" "}
                            <span className="text-[#D4A94E] underline decoration-4 underline-offset-4 decoration-[#B22234]">
                                Daily Briefing
                            </span>
                        </h1>

                        <p className="text-xl text-[#D0CCC4] mb-8 leading-relaxed max-w-3xl font-medium">
                            Financial news through a wealth-building lens. We cut through the mainstream noise
                            to tell you what economic events <strong className="text-[#F6F4EF]">really mean</strong> for
                            your retirement savings.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-[#A8A39A] font-medium">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-[#D4A94E]" />
                                <span>Kiyosaki Perspective</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#F6F4EF]" />
                                <span>5-Minute Reads</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Featured Article */}
            {latestArticle && (
                <section className="py-12 bg-white">
                    <Container>
                        <div className="mb-8">
                            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF]">Latest Briefing</h2>
                        </div>

                        <Link href={`/news/${latestArticle.slug}`} className="block group">
                            <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-lg hover:border-[rgba(197,149,46,0.55)]/30 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${getCategoryInfo(latestArticle.category).color}-100 text-${getCategoryInfo(latestArticle.category).color}-700`}>
                                        {getCategoryInfo(latestArticle.category).label}
                                    </span>
                                    <span className="text-[#A8A39A] text-sm font-medium">
                                        {formatNewsDate(latestArticle.publishedAt)}
                                    </span>
                                    <span className="text-[#A8A39A] text-sm font-medium">
                                        • {latestArticle.readTime} min read
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4 group-hover:text-blue-700 transition-colors">
                                    {latestArticle.title}
                                </h3>

                                <p className="text-lg text-[#D0CCC4] mb-6 max-w-3xl">
                                    {latestArticle.excerpt}
                                </p>

                                <div className="flex items-center gap-2 text-[#D4A94E] font-bold">
                                    Read Full Analysis
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </Container>
                </section>
            )}

            {/* Recent Articles Grid */}
            {recentArticles.length > 0 && (
                <section className="py-12 bg-[#0C0D18]">
                    <Container>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF]">Recent Briefings</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recentArticles.map((article) => (
                                <NewsCard key={article.slug} article={article} />
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* All Briefings Archive */}
            {articles.length > 7 && (
                <section className="py-12 bg-[#161828] border-b border-[#2A2D42]">
                    <Container>
                        <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-8">All Briefings</h2>

                        {(() => {
                            const grouped: Record<string, typeof articles> = {};
                            for (const article of articles) {
                                const d = new Date(article.publishedAt);
                                const key = `${d.toLocaleString("en-US", { month: "long" })} ${d.getFullYear()}`;
                                if (!grouped[key]) grouped[key] = [];
                                grouped[key].push(article);
                            }
                            return Object.entries(grouped).map(([month, items]) => (
                                <div key={month} className="mb-6">
                                    <h3 className="text-lg font-bold text-[#D0CCC4] mb-3 border-b border-[#2A2D42] pb-2">{month}</h3>
                                    <ul className="space-y-1.5">
                                        {items.map((article) => (
                                            <li key={article.slug} className="flex items-baseline gap-3">
                                                <span className="text-xs text-[#A8A39A] font-medium whitespace-nowrap">
                                                    {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                                                </span>
                                                <Link href={`/news/${article.slug}`} className="text-sm text-[#F6F4EF] hover:text-blue-700 hover:underline font-medium line-clamp-1">
                                                    {article.headline || article.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ));
                        })()}
                    </Container>
                </section>
            )}

            {/* Categories */}
            <section className="py-12 bg-white">
                <Container>
                    <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-8">Browse by Topic</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categories.filter(c => c !== "weekly").map((category) => {
                            const info = getCategoryInfo(category);
                            const count = articles.filter((a) => a.category === category).length;

                            return (
                                <Link
                                    key={category}
                                    href={`/news?category=${category}`}
                                    className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6 hover:border-[rgba(197,149,46,0.55)]/30 hover:bg-[#1E2134] hover:shadow-md transition-all group"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-bold text-[#F6F4EF] group-hover:text-blue-700 transition-colors">
                                                {info.label}
                                            </h3>
                                            <p className="text-sm text-[#A8A39A] mt-1 font-medium">
                                                {info.description}
                                            </p>
                                            <p className="text-xs text-[#A8A39A] mt-2">
                                                {count} article{count !== 1 ? "s" : ""}
                                            </p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-[#A8A39A] group-hover:text-[#D4A94E] transition-colors" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* Empty State */}
            {articles.length === 0 && (
                <section className="py-24 bg-white">
                    <Container>
                        <div className="text-center max-w-2xl mx-auto">
                            <Newspaper className="w-16 h-16 text-[#3F4460] mx-auto mb-6" />
                            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-4">
                                Daily Briefings Coming Soon
                            </h2>
                            <p className="text-[#A8A39A] mb-8">
                                We&apos;re preparing our first batch of Rich Dad-style financial analysis.
                                Check back soon for daily briefings on Fed decisions, gold prices, and
                                economic news that affects your retirement.
                            </p>
                            <Link href="/quiz">
                                <Button className="bg-[#DC2626] text-white" size="lg">
                                    Take Our Retirement Quiz <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </Container>
                </section>
            )}

            {/* Newsletter CTA */}
            <section className="py-16 bg-[rgba(197,149,46,0.1)] text-white">
                <Container>
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-serif font-bold mb-4">
                            Get the Daily Briefing in Your Inbox
                        </h2>
                        <p className="text-[#3F4460] mb-8 font-medium">
                            Join thousands of retirement-focused investors who start their day with
                            our Rich Dad perspective on financial news.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-[#A8A39A] focus:outline-none focus:border-white focus:bg-white/20 backdrop-blur-sm"
                            />
                            <Button className="bg-[#DC2626] hover:bg-[#991B1B] text-white font-bold">
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-xs text-[#A8A39A] mt-4">
                            No spam. Unsubscribe anytime.
                        </p>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}

// News Card Component (inline for now)
function NewsCard({ article }: { article: ReturnType<typeof getAllNewsArticles>[0] }) {
    const categoryInfo = getCategoryInfo(article.category);

    return (
        <Link href={`/news/${article.slug}`} className="block group">
            <div className="bg-[#161828] border border-[#2A2D42] rounded-xl p-6 h-full hover:shadow-lg hover:border-[rgba(197,149,46,0.55)]/30 transition-all">
                <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold bg-${categoryInfo.color}-100 text-${categoryInfo.color}-700`}>
                        {categoryInfo.label}
                    </span>
                    <span className="text-[#A8A39A] text-xs font-medium">
                        {formatNewsDate(article.publishedAt)}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-[#F6F4EF] mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {article.headline || article.title}
                </h3>

                <p className="text-sm text-[#D0CCC4] mb-4 line-clamp-2">
                    {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-[#A8A39A] font-medium">
                    <span>{article.readTime} min read</span>
                    <span className="flex items-center gap-1 text-[#D4A94E] opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                        Read <ArrowRight className="w-3 h-3" />
                    </span>
                </div>
            </div>
        </Link>
    );
}
