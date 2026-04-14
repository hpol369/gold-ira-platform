// src/lib/schema.ts
// Centralized JSON-LD schema generators for GEO optimization

const SITE_URL = "https://www.richdadretirement.com";
const ORG_NAME = "Rich Dad Retirement";
const LOGO_URL = `${SITE_URL}/logo.png`;

const publisher = {
  "@type": "Organization" as const,
  name: ORG_NAME,
  logo: { "@type": "ImageObject" as const, url: LOGO_URL },
};

const defaultAuthor = {
  "@type": "Organization" as const,
  name: "Rich Dad Retirement Editorial Team",
  url: `${SITE_URL}/editorial-board`,
};

// --- Article Schema ---

export function articleSchema(params: {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  image?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    author: params.author
      ? { "@type": "Person", name: params.author, url: `${SITE_URL}/editorial-board` }
      : defaultAuthor,
    publisher,
    datePublished: params.datePublished || new Date().toISOString(),
    ...(params.dateModified && { dateModified: params.dateModified }),
    image: params.image || `${SITE_URL}/og-default.jpg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${params.slug}`,
    },
    reviewedBy: {
      "@type": "Organization",
      name: "Rich Dad Retirement Editorial Board",
      url: `${SITE_URL}/editorial-board`,
    },
  };
}

// --- NewsArticle Schema ---

export function newsArticleSchema(params: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: params.title,
    description: params.description,
    author: params.author
      ? { "@type": "Person", name: params.author }
      : defaultAuthor,
    publisher,
    datePublished: params.datePublished,
    ...(params.dateModified && { dateModified: params.dateModified }),
    image: params.image || `${SITE_URL}/og-default.jpg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/news/${params.slug}`,
    },
  };
}

// --- FAQPage Schema ---

export function faqSchema(
  faqs: Array<{ question: string; answer: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// --- HowTo Schema ---

export function howToSchema(params: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
  totalTime?: string; // ISO 8601 duration e.g. "PT30M"
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: params.name,
    description: params.description,
    ...(params.totalTime && { totalTime: params.totalTime }),
    step: params.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

// --- BreadcrumbList Schema ---

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

// --- WebApplication Schema (for calculators/tools) ---

export function webApplicationSchema(params: {
  name: string;
  description: string;
  url: string;
  category?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: params.name,
    description: params.description,
    url: params.url.startsWith("http") ? params.url : `${SITE_URL}${params.url}`,
    applicationCategory: params.category || "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: publisher,
  };
}

// --- Review Schema ---

export function reviewSchema(params: {
  itemName: string;
  itemType?: string;
  reviewBody: string;
  ratingValue: number;
  bestRating?: number;
  author?: string;
  url: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": params.itemType || "FinancialService",
      name: params.itemName,
    },
    reviewBody: params.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: params.ratingValue,
      bestRating: params.bestRating || 5,
    },
    author: params.author
      ? { "@type": "Person", name: params.author }
      : defaultAuthor,
    publisher,
  };
}

// --- AggregateRating Schema ---

export function aggregateRatingSchema(params: {
  itemName: string;
  itemType?: string;
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": params.itemType || "FinancialService",
    name: params.itemName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: params.ratingValue,
      reviewCount: params.reviewCount,
      bestRating: params.bestRating || 5,
    },
  };
}

// --- WebSite Schema (for homepage) ---

export function webSiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORG_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/learn?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// --- SiteNavigationElement Schema ---

export function siteNavigationSchema(
  items: Array<{ name: string; url: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: items.map((i) => i.name),
    url: items.map((i) =>
      i.url.startsWith("http") ? i.url : `${SITE_URL}${i.url}`
    ),
  };
}

// --- FinancialProduct Schema ---

export function financialProductSchema(params: {
  name: string;
  description: string;
  provider: string;
  url: string;
  category?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: params.name,
    description: params.description,
    provider: {
      "@type": "Organization",
      name: params.provider,
    },
    url: params.url.startsWith("http") ? params.url : `${SITE_URL}${params.url}`,
    category: params.category || "Investment",
  };
}
