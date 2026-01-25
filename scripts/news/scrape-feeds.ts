/**
 * RSS Feed Scraper
 * Fetches news items from configured RSS feeds
 */

import { CONFIG } from "./config.js";
import { RSSFeedItem } from "../../src/types/news";

interface RSSChannel {
    item: RSSItem | RSSItem[];
}

interface RSSItem {
    title: string;
    link: string;
    pubDate?: string;
    description?: string;
}

/**
 * Parse RSS XML to extract items
 * Simple parser - could use xml2js for more robust parsing
 */
function parseRSS(xml: string, sourceName: string): RSSFeedItem[] {
    const items: RSSFeedItem[] = [];

    // Simple regex-based extraction (production would use proper XML parser)
    const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];

    for (const itemXml of itemMatches) {
        const title = itemXml.match(/<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>/)?.[1] || "";
        const link = itemXml.match(/<link>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/link>/)?.[1] || "";
        const pubDate = itemXml.match(/<pubDate>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/pubDate>/)?.[1] || "";
        const description = itemXml.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/)?.[1] || "";

        if (title && link) {
            items.push({
                title: cleanText(title),
                link: cleanText(link),
                pubDate: pubDate || new Date().toISOString(),
                description: cleanText(description),
                source: sourceName,
            });
        }
    }

    return items;
}

/**
 * Clean HTML entities and extra whitespace
 */
function cleanText(text: string): string {
    return text
        .replace(/<[^>]*>/g, "") // Remove HTML tags
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, " ")
        .trim();
}

/**
 * Fetch all RSS feeds and return combined items
 */
export async function scrapeFeeds(): Promise<RSSFeedItem[]> {
    const allItems: RSSFeedItem[] = [];

    for (const feed of CONFIG.feeds) {
        try {
            console.log(`Fetching: ${feed.name}...`);

            const response = await fetch(feed.url, {
                headers: {
                    "User-Agent": "RichDadRetirement-NewsBot/1.0",
                },
            });

            if (!response.ok) {
                console.error(`Failed to fetch ${feed.name}: ${response.status}`);
                continue;
            }

            const xml = await response.text();
            const items = parseRSS(xml, feed.name);

            console.log(`  Found ${items.length} items from ${feed.name}`);
            allItems.push(...items);
        } catch (error) {
            console.error(`Error fetching ${feed.name}:`, error);
        }
    }

    // Sort by date (newest first)
    allItems.sort((a, b) => {
        const dateA = new Date(a.pubDate).getTime();
        const dateB = new Date(b.pubDate).getTime();
        return dateB - dateA;
    });

    // Filter to last 24 hours
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    const recentItems = allItems.filter((item) => {
        const itemDate = new Date(item.pubDate).getTime();
        return itemDate > oneDayAgo;
    });

    console.log(`\nTotal items from last 24h: ${recentItems.length}`);

    return recentItems;
}

// Run directly if called as script
if (require.main === module) {
    scrapeFeeds()
        .then((items) => {
            console.log("\nSample items:");
            items.slice(0, 5).forEach((item) => {
                console.log(`- ${item.title}`);
                console.log(`  Source: ${item.source}`);
                console.log(`  Date: ${item.pubDate}`);
                console.log("");
            });
        })
        .catch(console.error);
}
