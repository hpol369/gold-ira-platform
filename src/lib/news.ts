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
 * Sanitize string for YAML frontmatter
 * - Remove nested quotes that break YAML parsing
 * - Escape special characters
 */
function sanitizeYamlString(str: string): string {
    // Replace smart quotes and nested double quotes with single quotes
    return str
        .replace(/[""]/g, "'")  // Smart quotes to single
        .replace(/"([^"]+)"/g, "'$1'");  // Nested double quotes to single
}

/**
 * Create MDX content for a new article
 */
export function createArticleMDX(article: Omit<NewsArticle, "slug" | "status">): string {
    // Sanitize text fields that might have problematic characters
    const safeTitle = sanitizeYamlString(article.title);
    const safeHeadline = sanitizeYamlString(article.headline);
    const safeExcerpt = sanitizeYamlString(article.excerpt);
    const safeMetaTitle = sanitizeYamlString(article.metaTitle || article.title);
    const safeMetaDescription = sanitizeYamlString(article.metaDescription || article.excerpt);

    const frontmatter = {
        title: safeTitle,
        headline: safeHeadline,
        excerpt: safeExcerpt,
        category: article.category,
        publishedAt: article.publishedAt,
        author: article.author,
        readTime: article.readTime,
        featuredImage: article.featuredImage || "",
        featuredImageAlt: article.featuredImageAlt || "",
        metaTitle: safeMetaTitle,
        metaDescription: safeMetaDescription,
        relatedGuides: article.relatedGuides || [],
        relatedNews: article.relatedNews || [],
        status: "published" as const,  // Auto-publish instead of review
        sourceUrl: article.sourceUrl || "",
        sourceName: article.sourceName || "",
    };

    return `---
${Object.entries(frontmatter)
    .map(([key, value]) => {
        if (Array.isArray(value)) {
            if (value.length === 0) {
                return `${key}: []`;  // Empty array as []
            }
            return `${key}:\n${value.map((v) => `  - "${v}"`).join("\n")}`;
        }
        if (typeof value === "number") {
            return `${key}: ${value}`;
        }
        // Always quote strings to be safe
        return `${key}: "${value}"`;
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
