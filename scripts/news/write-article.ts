/**
 * Article Writer
 * Writes generated articles to MDX files
 */

import fs from "fs";
import path from "path";
import { NewsArticle } from "../../src/types/news";
import { generateSlug, createArticleMDX } from "../../src/lib/news";
import { CONFIG } from "./config.js";

/**
 * Write an article to the content directory
 */
export function writeArticle(
    article: Omit<NewsArticle, "slug" | "status">,
    status: "draft" | "review" | "published" = "review"
): string {
    // Generate slug from title and date
    const slug = generateSlug(article.title, article.publishedAt);

    // Create the MDX content
    const mdxContent = createArticleMDX(article);

    // Ensure directory exists
    const contentDir = path.join(process.cwd(), CONFIG.paths.contentDir);
    if (!fs.existsSync(contentDir)) {
        fs.mkdirSync(contentDir, { recursive: true });
    }

    // Write the file
    const filePath = path.join(contentDir, `${slug}.mdx`);
    fs.writeFileSync(filePath, mdxContent, "utf-8");

    console.log(`  Wrote: ${slug}.mdx`);

    return slug;
}

/**
 * Add article to review queue (for human approval before publishing)
 */
export function addToReviewQueue(
    article: Omit<NewsArticle, "slug" | "status">,
    slug: string
): void {
    const queuePath = path.join(process.cwd(), CONFIG.paths.reviewQueue);

    // Load existing queue
    let queue: Array<{ slug: string; title: string; createdAt: string; status: string }> = [];
    if (fs.existsSync(queuePath)) {
        queue = JSON.parse(fs.readFileSync(queuePath, "utf-8"));
    }

    // Add new article
    queue.push({
        slug,
        title: article.title,
        createdAt: new Date().toISOString(),
        status: "pending_review",
    });

    // Write updated queue
    fs.writeFileSync(queuePath, JSON.stringify(queue, null, 2), "utf-8");
    console.log(`  Added to review queue`);
}

/**
 * Approve an article from the review queue (publish it)
 */
export function approveArticle(slug: string): boolean {
    const contentDir = path.join(process.cwd(), CONFIG.paths.contentDir);
    const filePath = path.join(contentDir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        console.error(`Article not found: ${slug}`);
        return false;
    }

    // Read the file
    let content = fs.readFileSync(filePath, "utf-8");

    // Update status from "review" to "published"
    content = content.replace(/status: review/, "status: published");

    // Write back
    fs.writeFileSync(filePath, content, "utf-8");

    // Update review queue
    const queuePath = path.join(process.cwd(), CONFIG.paths.reviewQueue);
    if (fs.existsSync(queuePath)) {
        const queue = JSON.parse(fs.readFileSync(queuePath, "utf-8"));
        const updated = queue.map((item: { slug: string; status: string }) =>
            item.slug === slug ? { ...item, status: "approved" } : item
        );
        fs.writeFileSync(queuePath, JSON.stringify(updated, null, 2), "utf-8");
    }

    console.log(`Approved: ${slug}`);
    return true;
}

/**
 * Reject an article from the review queue (delete it)
 */
export function rejectArticle(slug: string): boolean {
    const contentDir = path.join(process.cwd(), CONFIG.paths.contentDir);
    const filePath = path.join(contentDir, `${slug}.mdx`);

    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }

    // Update review queue
    const queuePath = path.join(process.cwd(), CONFIG.paths.reviewQueue);
    if (fs.existsSync(queuePath)) {
        const queue = JSON.parse(fs.readFileSync(queuePath, "utf-8"));
        const updated = queue.filter((item: { slug: string }) => item.slug !== slug);
        fs.writeFileSync(queuePath, JSON.stringify(updated, null, 2), "utf-8");
    }

    console.log(`Rejected and deleted: ${slug}`);
    return true;
}

/**
 * List articles in review queue
 */
export function listReviewQueue(): Array<{ slug: string; title: string; createdAt: string; status: string }> {
    const queuePath = path.join(process.cwd(), CONFIG.paths.reviewQueue);

    if (!fs.existsSync(queuePath)) {
        return [];
    }

    return JSON.parse(fs.readFileSync(queuePath, "utf-8"));
}

// CLI commands when run directly
if (require.main === module) {
    const args = process.argv.slice(2);
    const command = args[0];
    const slug = args[1];

    switch (command) {
        case "list":
            const queue = listReviewQueue();
            console.log("Review Queue:");
            queue.forEach((item) => {
                console.log(`  [${item.status}] ${item.slug}`);
                console.log(`    Title: ${item.title}`);
                console.log(`    Created: ${item.createdAt}`);
                console.log("");
            });
            if (queue.length === 0) {
                console.log("  (empty)");
            }
            break;

        case "approve":
            if (!slug) {
                console.error("Usage: npx ts-node scripts/news/write-article.ts approve <slug>");
                process.exit(1);
            }
            approveArticle(slug);
            break;

        case "reject":
            if (!slug) {
                console.error("Usage: npx ts-node scripts/news/write-article.ts reject <slug>");
                process.exit(1);
            }
            rejectArticle(slug);
            break;

        default:
            console.log("Usage:");
            console.log("  npx ts-node scripts/news/write-article.ts list");
            console.log("  npx ts-node scripts/news/write-article.ts approve <slug>");
            console.log("  npx ts-node scripts/news/write-article.ts reject <slug>");
    }
}
