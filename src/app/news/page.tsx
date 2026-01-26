import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getAllNewsArticles, formatNewsDate, getCategoryInfo } from "@/lib/news";
import { NewsCategory, NEWS_CATEGORIES } from "@/types/news";
import { ArrowRight, Newspaper, TrendingUp, Clock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Rich Dad Daily Briefing | Financial News for Investors",
    description: "Daily financial news analysis with Robert Kiyosaki's perspective. Fed decisions, gold prices, and economic news explained for retirement investors.",
    keywords: "financial news, gold news, fed news, retirement news, robert kiyosaki",
    openGraph: {
        title: "Rich Dad Daily Briefing | Financial News for Retirement Investors",
        description: "Daily financial news analysis with Robert Kiyosaki's perspective. What the mainstream won't tell you about your retirement.",
        type: "website",
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
        <main className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-slate-900 to-slate-900"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent"></div>

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
                            <Newspaper className="w-4 h-4" />
                            Updated Daily
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            Rich Dad{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                                Daily Briefing
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                            Financial news through a wealth-building lens. We cut through the mainstream noise
                            to tell you what economic events <strong className="text-white">really mean</strong> for
                            your retirement savings.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-slate-400">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-amber-400" />
                                <span>Kiyosaki Perspective</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-amber-400" />
                                <span>5-Minute Reads</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Featured Article */}
            {latestArticle && (
                <section className="py-12 bg-slate-900">
                    <Container>
                        <div className="mb-8">
                            <h2 className="text-2xl font-serif font-bold text-white">Latest Briefing</h2>
                        </div>

                        <Link href={`/news/${latestArticle.slug}`} className="block group">
                            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 md:p-12 hover:border-amber-500/40 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${getCategoryInfo(latestArticle.category).color}-500/20 text-${getCategoryInfo(latestArticle.category).color}-400`}>
                                        {getCategoryInfo(latestArticle.category).label}
                                    </span>
                                    <span className="text-slate-500 text-sm">
                                        {formatNewsDate(latestArticle.publishedAt)}
                                    </span>
                                    <span className="text-slate-500 text-sm">
                                        • {latestArticle.readTime} min read
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                                    {latestArticle.title}
                                </h3>

                                <p className="text-lg text-slate-300 mb-6 max-w-3xl">
                                    {latestArticle.excerpt}
                                </p>

                                <div className="flex items-center gap-2 text-amber-400 font-medium">
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
                <section className="py-12 bg-slate-800/50">
                    <Container>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-serif font-bold text-white">Recent Briefings</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recentArticles.map((article) => (
                                <NewsCard key={article.slug} article={article} />
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* Categories */}
            <section className="py-12 bg-slate-900">
                <Container>
                    <h2 className="text-2xl font-serif font-bold text-white mb-8">Browse by Topic</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categories.filter(c => c !== "weekly").map((category) => {
                            const info = getCategoryInfo(category);
                            const count = articles.filter((a) => a.category === category).length;

                            return (
                                <Link
                                    key={category}
                                    href={`/news?category=${category}`}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all group"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                                                {info.label}
                                            </h3>
                                            <p className="text-sm text-slate-400 mt-1">
                                                {info.description}
                                            </p>
                                            <p className="text-xs text-slate-500 mt-2">
                                                {count} article{count !== 1 ? "s" : ""}
                                            </p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* Empty State */}
            {articles.length === 0 && (
                <section className="py-24 bg-slate-900">
                    <Container>
                        <div className="text-center max-w-2xl mx-auto">
                            <Newspaper className="w-16 h-16 text-slate-600 mx-auto mb-6" />
                            <h2 className="text-2xl font-serif font-bold text-white mb-4">
                                Daily Briefings Coming Soon
                            </h2>
                            <p className="text-slate-400 mb-8">
                                We&apos;re preparing our first batch of Rich Dad-style financial analysis.
                                Check back soon for daily briefings on Fed decisions, gold prices, and
                                economic news that affects your retirement.
                            </p>
                            <Link href="/quiz">
                                <Button variant="gold" size="lg">
                                    Take Our Retirement Quiz <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </Container>
                </section>
            )}

            {/* Newsletter CTA */}
            <section className="py-16 bg-gradient-to-br from-amber-900/20 via-slate-900 to-slate-900">
                <Container>
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-serif font-bold text-white mb-4">
                            Get the Daily Briefing in Your Inbox
                        </h2>
                        <p className="text-slate-300 mb-8">
                            Join thousands of retirement-focused investors who start their day with
                            our Rich Dad perspective on financial news.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
                            />
                            <Button variant="gold">
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-xs text-slate-500 mt-4">
                            No spam. Unsubscribe anytime.
                        </p>
                    </div>
                </Container>
            </section>
        </main>
    );
}

// News Card Component (inline for now)
function NewsCard({ article }: { article: ReturnType<typeof getAllNewsArticles>[0] }) {
    const categoryInfo = getCategoryInfo(article.category);

    return (
        <Link href={`/news/${article.slug}`} className="block group">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-white/20 transition-all">
                <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium bg-${categoryInfo.color}-500/20 text-${categoryInfo.color}-400`}>
                        {categoryInfo.label}
                    </span>
                    <span className="text-slate-500 text-xs">
                        {formatNewsDate(article.publishedAt)}
                    </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                    {article.headline || article.title}
                </h3>

                <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                    {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{article.readTime} min read</span>
                    <span className="flex items-center gap-1 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read <ArrowRight className="w-3 h-3" />
                    </span>
                </div>
            </div>
        </Link>
    );
}
