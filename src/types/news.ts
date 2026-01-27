// News Article Types for Rich Dad Daily Briefing

export type NewsCategory = "fed" | "gold" | "silver" | "economy" | "retirement" | "crypto" | "weekly";

export interface NewsArticle {
    // Core fields
    slug: string;
    title: string;
    headline: string; // Short attention-grabbing headline
    excerpt: string; // 1-2 sentence summary for cards/social

    // Content
    body: string; // MDX content

    // Metadata
    category: NewsCategory;
    publishedAt: string; // ISO date string
    updatedAt?: string;
    author: string;
    readTime: number; // minutes

    // Media
    featuredImage?: string;
    featuredImageAlt?: string;

    // SEO
    metaTitle?: string;
    metaDescription?: string;

    // Internal linking
    relatedGuides: string[]; // paths like "/gold-ira", "/learn/inflation-protection"
    relatedNews?: string[]; // slugs of related news articles

    // Status
    status: "draft" | "review" | "published" | "archived";

    // Source tracking (for automation)
    sourceUrl?: string;
    sourceName?: string;
}

export interface NewsFrontmatter {
    title: string;
    headline: string;
    excerpt: string;
    category: NewsCategory;
    publishedAt: string;
    updatedAt?: string;
    author: string;
    readTime: number;
    featuredImage?: string;
    featuredImageAlt?: string;
    metaTitle?: string;
    metaDescription?: string;
    relatedGuides: string[];
    relatedNews?: string[];
    status: "draft" | "review" | "published" | "archived";
    sourceUrl?: string;
    sourceName?: string;
}

export interface NewsCardProps {
    slug: string;
    title: string;
    excerpt: string;
    category: NewsCategory;
    publishedAt: string;
    readTime: number;
    featuredImage?: string;
}

export interface RSSFeedItem {
    title: string;
    link: string;
    pubDate: string;
    description: string;
    source: string;
}

export interface ScoredNewsItem extends RSSFeedItem {
    relevanceScore: number; // 0-10
    suggestedCategory: NewsCategory;
    keywords: string[];
}

export const NEWS_CATEGORIES: Record<NewsCategory, { label: string; color: string; description: string }> = {
    fed: {
        label: "Federal Reserve",
        color: "blue",
        description: "Fed policy, interest rates, and monetary policy news"
    },
    gold: {
        label: "Gold",
        color: "amber",
        description: "Gold prices, trends, and market analysis"
    },
    silver: {
        label: "Silver",
        color: "sky",
        description: "Silver prices, industrial demand, and market analysis"
    },
    economy: {
        label: "Economy",
        color: "green",
        description: "Economic indicators, GDP, jobs, and market news"
    },
    retirement: {
        label: "Retirement",
        color: "purple",
        description: "401k, IRA, Social Security, and retirement planning news"
    },
    crypto: {
        label: "Crypto",
        color: "orange",
        description: "Cryptocurrency and digital asset news"
    },
    weekly: {
        label: "Weekly Roundup",
        color: "slate",
        description: "Weekly summary of key financial news"
    }
};

// RSS feeds to monitor
export const NEWS_RSS_FEEDS = [
    {
        name: "Reuters Business",
        url: "https://www.reutersagency.com/feed/?best-topics=business-finance&post_type=best",
        priority: 1
    },
    {
        name: "Kitco Gold News",
        url: "https://www.kitco.com/rss/gold.xml",
        priority: 1
    },
    {
        name: "Federal Reserve",
        url: "https://www.federalreserve.gov/feeds/press_all.xml",
        priority: 1
    },
    {
        name: "CNBC Economy",
        url: "https://www.cnbc.com/id/20910258/device/rss/rss.html",
        priority: 2
    },
    {
        name: "MarketWatch",
        url: "https://feeds.marketwatch.com/marketwatch/topstories/",
        priority: 2
    }
];

// Keywords for relevance scoring
export const RELEVANCE_KEYWORDS = {
    highPriority: [
        "federal reserve", "fed", "interest rate", "inflation", "cpi",
        "gold price", "silver price", "precious metals",
        "401k", "ira", "retirement", "pension",
        "recession", "market crash", "bank failure",
        "dollar", "currency", "monetary policy"
    ],
    mediumPriority: [
        "stock market", "s&p 500", "dow jones",
        "treasury", "bonds", "yields",
        "social security", "medicare",
        "economy", "gdp", "jobs report", "unemployment",
        "bitcoin", "cryptocurrency"
    ],
    lowPriority: [
        "investing", "savings", "wealth",
        "financial", "money", "markets"
    ]
};
