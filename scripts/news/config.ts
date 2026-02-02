/**
 * News Pipeline Configuration
 */

export const CONFIG = {
    // Claude API
    claude: {
        apiKey: process.env.ANTHROPIC_API_KEY || "",
        model: "claude-sonnet-4-20250514",
        maxTokens: 2000,
    },

    // RSS Feeds to monitor
    feeds: [
        {
            name: "Federal Reserve",
            url: "https://www.federalreserve.gov/feeds/press_all.xml",
            category: "fed" as const,
            priority: 1,
        },
        {
            name: "CNBC Economy",
            url: "https://www.cnbc.com/id/20910258/device/rss/rss.html",
            category: "economy" as const,
            priority: 1,
        },
        {
            name: "Yahoo Finance",
            url: "https://finance.yahoo.com/news/rssindex",
            category: "economy" as const,
            priority: 2,
        },
        {
            name: "MarketWatch",
            url: "https://feeds.marketwatch.com/marketwatch/topstories/",
            category: "economy" as const,
            priority: 2,
        },
        {
            name: "Investing.com Gold",
            url: "https://www.investing.com/rss/news_301.rss",
            category: "gold" as const,
            priority: 1,
        },
        {
            name: "SilverSeek",
            url: "https://silverseek.com/rss.xml",
            category: "silver" as const,
            priority: 1,
        },
        {
            name: "Silver Doctors",
            url: "https://www.silverdoctors.com/feed/",
            category: "silver" as const,
            priority: 1,
        },
        {
            name: "Kitco News",
            url: "https://www.kitco.com/rss/news.xml",
            category: "silver" as const,
            priority: 1,
        },
        {
            name: "Sprott Money",
            url: "https://www.sprottmoney.com/blog/rss",
            category: "silver" as const,
            priority: 1,
        },
    ],

    // Relevance scoring keywords
    keywords: {
        highPriority: [
            "federal reserve", "fed", "interest rate", "inflation", "cpi",
            "gold price", "silver price", "precious metals", "bullion",
            "silver demand", "silver industrial", "silver solar", "silver ev",
            "silver shortage", "silver supply", "silver deficit", "silver institute",
            "photovoltaic silver", "silver conductivity",
            "401k", "401(k)", "ira", "retirement", "pension", "social security",
            "recession", "market crash", "bank failure", "banking crisis",
            "dollar", "currency", "monetary policy", "quantitative easing",
        ],
        mediumPriority: [
            "stock market", "s&p 500", "dow jones", "nasdaq",
            "treasury", "bonds", "yields", "debt ceiling",
            "economy", "gdp", "jobs report", "unemployment",
            "bitcoin", "cryptocurrency", "crypto",
        ],
        lowPriority: [
            "investing", "savings", "wealth", "financial", "money", "markets",
        ],
    },

    // Scoring thresholds
    scoring: {
        minimumScore: 3, // Minimum relevance score to consider (out of 10)
        maxArticlesPerRun: 4, // Maximum articles to generate per run (increased for silver coverage)
    },

    // Output paths
    paths: {
        contentDir: "content/news",
        reviewQueue: "content/news/.review-queue.json",
    },

    // Category to related guides mapping (only use existing pages!)
    categoryGuides: {
        fed: ["/guide/gold-ira-guide", "/why-gold/inflation-protection", "/best-gold-ira-companies"],
        gold: ["/guide/gold-ira-guide", "/why-gold", "/best-gold-ira-companies"],
        silver: ["/best-silver-ira-companies", "/lp/silver-ira", "/compare/gold-vs-silver-ira"],
        economy: ["/guide/protect-401k-from-crash", "/quiz", "/scenarios"],
        retirement: ["/rollover", "/self-directed-ira", "/solo-401k"],
        crypto: ["/crypto-ira", "/reviews/itrustcapital", "/best-crypto-ira-companies"],
        weekly: ["/guide/gold-ira-guide", "/quiz", "/best-gold-ira-companies"],
    },
};
