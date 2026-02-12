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
        {
            name: "Mining.com",
            url: "https://www.mining.com/feed/",
            category: "silver" as const,
            priority: 2,
        },
        {
            name: "Investing.com Silver",
            url: "https://www.investing.com/rss/news_300.rss",
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
            "photovoltaic silver", "silver conductivity", "silver mining",
            "silver ira", "silver investment", "silver etf", "silver futures",
            "silver market", "silver rally", "silver ounce", "silver coins",
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

    // Twitter/X API for auto-tweeting silver articles
    twitter: {
        apiKey: process.env.TWITTER_API_KEY || "",
        apiSecret: process.env.TWITTER_API_SECRET || "",
        accessToken: process.env.TWITTER_ACCESS_TOKEN || "",
        accessSecret: process.env.TWITTER_ACCESS_SECRET || "",
        enabled: !!process.env.TWITTER_API_KEY,
    },

    // Quote tweet pipeline - quote big accounts tweeting about gold/retirement
    quoteTweets: {
        enabled: !!process.env.TWITTER_API_KEY,
        maxPerDay: 5,
        keywords: [
            "gold", "silver", "401k", "401(k)", "retirement", "inflation",
            "fed", "federal reserve", "interest rate", "dollar", "currency",
            "precious metals", "ira", "pension", "social security",
            "recession", "market crash", "economy", "debt",
        ],
        // Note: userIds can be populated via Twitter API lookup for timeline access.
        // Without valid userIds, the pipeline uses search fallback (works on free tier).
        accounts: [
            { username: "theRealKiyosaki", userId: "" },
            { username: "PeterSchiff", userId: "" },
            { username: "Jim_Rickards", userId: "" },
            { username: "WallStreetSilv", userId: "" },
            { username: "FirstMajestic", userId: "" },
            { username: "RealDonaldTrump", userId: "25073877" },
            { username: "TuckerCarlson", userId: "" },
        ],
    },

    // Facebook Page API for auto-posting silver articles
    facebook: {
        pageId: process.env.FACEBOOK_PAGE_ID || "",
        pageToken: process.env.FACEBOOK_PAGE_TOKEN || "",
        enabled: !!process.env.FACEBOOK_PAGE_ID && !!process.env.FACEBOOK_PAGE_TOKEN,
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
