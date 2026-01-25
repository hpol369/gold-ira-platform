import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NewsArticle, NewsFrontmatter, NewsCategory, NEWS_CATEGORIES } from "@/types/news";

const NEWS_DIRECTORY = path.join(process.cwd(), "content/news");

/**
 * Get all published news articles
 */
export function getAllNewsArticles(): NewsArticle[] {
    if (!fs.existsSync(NEWS_DIRECTORY)) {
        return [];
    }

    const files = fs.readdirSync(NEWS_DIRECTORY);
    const articles: NewsArticle[] = [];

    for (const file of files) {
        if (!file.endsWith(".mdx")) continue;

        const filePath = path.join(NEWS_DIRECTORY, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);
        const frontmatter = data as NewsFrontmatter;

        if (frontmatter.status !== "published") continue;

        articles.push({
            slug: file.replace(".mdx", ""),
            title: frontmatter.title,
            headline: frontmatter.headline,
            excerpt: frontmatter.excerpt,
            body: content,
            category: frontmatter.category,
            publishedAt: frontmatter.publishedAt,
            updatedAt: frontmatter.updatedAt,
            author: frontmatter.author,
            readTime: frontmatter.readTime,
            featuredImage: frontmatter.featuredImage,
            featuredImageAlt: frontmatter.featuredImageAlt,
            metaTitle: frontmatter.metaTitle,
            metaDescription: frontmatter.metaDescription,
            relatedGuides: frontmatter.relatedGuides || [],
            relatedNews: frontmatter.relatedNews,
            status: frontmatter.status,
            sourceUrl: frontmatter.sourceUrl,
            sourceName: frontmatter.sourceName,
        });
    }

    // Sort by date, newest first
    return articles.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

/**
 * Get a single news article by slug
 */
export function getNewsArticleBySlug(slug: string): NewsArticle | null {
    const filePath = path.join(NEWS_DIRECTORY, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const frontmatter = data as NewsFrontmatter;

    return {
        slug,
        title: frontmatter.title,
        headline: frontmatter.headline,
        excerpt: frontmatter.excerpt,
        body: content,
        category: frontmatter.category,
        publishedAt: frontmatter.publishedAt,
        updatedAt: frontmatter.updatedAt,
        author: frontmatter.author,
        readTime: frontmatter.readTime,
        featuredImage: frontmatter.featuredImage,
        featuredImageAlt: frontmatter.featuredImageAlt,
        metaTitle: frontmatter.metaTitle,
        metaDescription: frontmatter.metaDescription,
        relatedGuides: frontmatter.relatedGuides || [],
        relatedNews: frontmatter.relatedNews,
        status: frontmatter.status,
        sourceUrl: frontmatter.sourceUrl,
        sourceName: frontmatter.sourceName,
    };
}

/**
 * Get all news article slugs (for static generation)
 */
export function getAllNewsSlugs(): string[] {
    if (!fs.existsSync(NEWS_DIRECTORY)) {
        return [];
    }

    return fs
        .readdirSync(NEWS_DIRECTORY)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => file.replace(".mdx", ""));
}

/**
 * Get news articles by category
 */
export function getNewsByCategory(category: NewsCategory): NewsArticle[] {
    return getAllNewsArticles().filter((article) => article.category === category);
}

/**
 * Get latest N news articles
 */
export function getLatestNews(count: number = 5): NewsArticle[] {
    return getAllNewsArticles().slice(0, count);
}

/**
 * Get related news articles
 */
export function getRelatedNews(currentSlug: string, count: number = 3): NewsArticle[] {
    const current = getNewsArticleBySlug(currentSlug);
    if (!current) return [];

    // Get articles in same category, excluding current
    const sameCategory = getAllNewsArticles()
        .filter((a) => a.slug !== currentSlug && a.category === current.category)
        .slice(0, count);

    // If not enough, fill with latest from other categories
    if (sameCategory.length < count) {
        const others = getAllNewsArticles()
            .filter((a) => a.slug !== currentSlug && a.category !== current.category)
            .slice(0, count - sameCategory.length);
        return [...sameCategory, ...others];
    }

    return sameCategory;
}

/**
 * Format date for display
 */
export function formatNewsDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

/**
 * Get category info
 */
export function getCategoryInfo(category: NewsCategory) {
    return NEWS_CATEGORIES[category];
}

/**
 * Generate article slug from title
 */
export function generateSlug(title: string, date: string): string {
    const datePrefix = date.slice(0, 10); // YYYY-MM-DD
    const titleSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 50);
    return `${datePrefix}-${titleSlug}`;
}

/**
 * Create MDX content for a new article
 */
export function createArticleMDX(article: Omit<NewsArticle, "slug" | "status">): string {
    const frontmatter = {
        title: article.title,
        headline: article.headline,
        excerpt: article.excerpt,
        category: article.category,
        publishedAt: article.publishedAt,
        author: article.author,
        readTime: article.readTime,
        featuredImage: article.featuredImage || "",
        featuredImageAlt: article.featuredImageAlt || "",
        metaTitle: article.metaTitle || article.title,
        metaDescription: article.metaDescription || article.excerpt,
        relatedGuides: article.relatedGuides,
        relatedNews: article.relatedNews || [],
        status: "review" as const,
        sourceUrl: article.sourceUrl || "",
        sourceName: article.sourceName || "",
    };

    return `---
${Object.entries(frontmatter)
    .map(([key, value]) => {
        if (Array.isArray(value)) {
            return `${key}:\n${value.map((v) => `  - "${v}"`).join("\n")}`;
        }
        if (typeof value === "string" && value.includes(":")) {
            return `${key}: "${value}"`;
        }
        return `${key}: ${value}`;
    })
    .join("\n")}
---

${article.body}
`;
}

/**
 * Save article to file system
 */
export function saveArticle(slug: string, content: string): void {
    if (!fs.existsSync(NEWS_DIRECTORY)) {
        fs.mkdirSync(NEWS_DIRECTORY, { recursive: true });
    }

    const filePath = path.join(NEWS_DIRECTORY, `${slug}.mdx`);
    fs.writeFileSync(filePath, content, "utf-8");
}
