#!/usr/bin/env npx tsx
/**
 * News Article Quality Scoring Script
 *
 * Reads all .mdx files in content/news/, scores them 0-100,
 * and outputs a tiered quality report.
 *
 * Usage: npx tsx scripts/news/score-quality.ts
 */

import * as fs from "fs";
import * as path from "path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Frontmatter {
  title: string;
  category: string;
  publishedAt: string;
  sourceUrl: string;
  sourceName: string;
  status: string;
}

interface ScoredArticle {
  file: string;
  title: string;
  slug: string;
  score: number;
  wordCount: number;
  category: string;
  tier: "A" | "B" | "C" | "D";
  issues: string[];
}

interface TierInfo {
  count: number;
  description: string;
}

interface Report {
  summary: {
    total: number;
    tier_a: TierInfo;
    tier_b: TierInfo;
    tier_c: TierInfo;
    tier_d: TierInfo;
  };
  articles: ScoredArticle[];
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const FORMULAIC_PHRASES = [
  "wake up, people",
  "follow the money",
  "i've been saying this for years",
  "what the mainstream won't tell you",
  "what your advisor won't tell you",
  "paper promises",
  "printing presses",
  "fiat currency",
  "stay the course",
  "here's what they're not telling you",
];

const TIME_SENSITIVE_PHRASES = [
  "this week",
  "today",
  "yesterday",
  "this weekend",
  "breaking",
  "just announced",
  "this morning",
  "this afternoon",
  "right now",
  "just happened",
];

const HIGH_VALUE_KEYWORDS = [
  "gold ira",
  "401k rollover",
  "rmd",
  "roth",
  "pension",
  "social security",
  "required minimum distribution",
  "rollover",
  "ira rollover",
];

const AUDIENCE_KEYWORDS = [
  "retiree",
  "retirement",
  "savings",
  "401k",
  "401(k)",
  "retire",
  "nest egg",
  "golden years",
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function parseFrontmatter(raw: string): { frontmatter: Frontmatter; body: string } {
  const parts = raw.split("---");
  if (parts.length < 3) {
    return {
      frontmatter: {
        title: "",
        category: "",
        publishedAt: "",
        sourceUrl: "",
        sourceName: "",
        status: "",
      },
      body: raw,
    };
  }

  const yamlBlock = parts[1];
  const body = parts.slice(2).join("---").trim();

  const get = (key: string): string => {
    // Match key: "value" or key: value (handles both quoted and unquoted YAML)
    const regex = new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, "m");
    const m = yamlBlock.match(regex);
    return m ? m[1].trim() : "";
  };

  return {
    frontmatter: {
      title: get("title"),
      category: get("category"),
      publishedAt: get("publishedAt"),
      sourceUrl: get("sourceUrl"),
      sourceName: get("sourceName"),
      status: get("status"),
    },
    body,
  };
}

function countWords(text: string): number {
  return text
    .replace(/[#*\-_>`~\[\](){}|]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

function countOccurrences(text: string, phrases: string[]): number {
  const lower = text.toLowerCase();
  let count = 0;
  for (const phrase of phrases) {
    // Use a simple indexOf loop to count all occurrences
    let idx = 0;
    while (true) {
      idx = lower.indexOf(phrase.toLowerCase(), idx);
      if (idx === -1) break;
      count++;
      idx += phrase.length;
    }
  }
  return count;
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.mdx$/, "");
}

// ---------------------------------------------------------------------------
// Scoring functions
// ---------------------------------------------------------------------------

function scoreWordCount(wordCount: number): { pts: number; issue: string | null } {
  if (wordCount >= 1000) return { pts: 10, issue: null };
  if (wordCount >= 700) return { pts: 8, issue: null };
  if (wordCount >= 500) return { pts: 5, issue: null };
  if (wordCount >= 300) return { pts: 3, issue: `low word count (${wordCount})` };
  return { pts: 0, issue: `very low word count (${wordCount})` };
}

function scoreDataPoints(body: string): { pts: number; issue: string | null } {
  // Dollar amounts like $1,000 or $50
  const dollarMatches = body.match(/\$[\d,]+(?:\.\d+)?(?:\s*(?:billion|million|trillion|thousand))?/gi) || [];
  // Percentages like 5% or 15.3%
  const pctMatches = body.match(/\d+(?:\.\d+)?%/g) || [];
  // Specific years 1900-2099
  const yearMatches = body.match(/\b(19|20)\d{2}\b/g) || [];

  const totalDataPoints = dollarMatches.length + pctMatches.length + yearMatches.length;

  if (totalDataPoints >= 10) return { pts: 10, issue: null };
  if (totalDataPoints >= 7) return { pts: 8, issue: null };
  if (totalDataPoints >= 4) return { pts: 5, issue: null };
  if (totalDataPoints >= 2) return { pts: 3, issue: "few data points" };
  return { pts: 0, issue: "no unique data" };
}

function scoreFormulaic(body: string): { pts: number; issue: string | null } {
  const count = countOccurrences(body, FORMULAIC_PHRASES);
  if (count === 0) return { pts: 10, issue: null };
  if (count <= 1) return { pts: 7, issue: `formulaic phrases (${count})` };
  if (count <= 2) return { pts: 4, issue: `formulaic phrases (${count})` };
  if (count <= 3) return { pts: 2, issue: `formulaic phrases (${count})` };
  return { pts: 0, issue: `formulaic phrases (${count})` };
}

function scoreSubheadings(body: string): { pts: number; issue: string | null } {
  const headings = (body.match(/^##\s+/gm) || []).length;
  if (headings >= 3) return { pts: 5, issue: null };
  if (headings >= 1) return { pts: 2, issue: null };
  return { pts: 0, issue: "no subheadings" };
}

function scoreLists(body: string): { pts: number; issue: string | null } {
  const bullets = (body.match(/^[\s]*[-*]\s+/gm) || []).length;
  const numbered = (body.match(/^[\s]*\d+\.\s+/gm) || []).length;
  const total = bullets + numbered;
  if (total >= 5) return { pts: 5, issue: null };
  if (total >= 2) return { pts: 3, issue: null };
  if (total >= 1) return { pts: 1, issue: null };
  return { pts: 0, issue: "no structured content" };
}

function scoreCategoryRelevance(category: string): number {
  const cat = category.toLowerCase();
  if (cat === "gold" || cat === "silver") return 15;
  if (cat === "retirement") return 10;
  if (cat === "fed" || cat === "economy") return 5;
  if (cat === "crypto") return 3;
  return 0;
}

function scoreTitleKeywords(title: string): { pts: number } {
  const lower = title.toLowerCase();
  let pts = 0;

  for (const kw of HIGH_VALUE_KEYWORDS) {
    if (lower.includes(kw)) {
      pts = 15;
      break;
    }
  }

  if (pts < 15) {
    for (const kw of AUDIENCE_KEYWORDS) {
      if (lower.includes(kw)) {
        pts = Math.max(pts, 10);
        break;
      }
    }
  }

  return { pts };
}

function scoreEvergreen(title: string, body: string): { pts: number; issue: string | null } {
  const fullText = (title + " " + body).toLowerCase();
  const count = countOccurrences(fullText, TIME_SENSITIVE_PHRASES);

  // Also check if title references specific dates/events (e.g., "March 2026", "Q1 2026")
  const dateRefs = (title.match(/\b(january|february|march|april|may|june|july|august|september|october|november|december)\b/gi) || []).length;
  const quarterRefs = (title.match(/\bQ[1-4]\s+20\d{2}\b/gi) || []).length;

  const totalTimeSensitive = count + dateRefs + quarterRefs;

  if (totalTimeSensitive === 0) return { pts: 30, issue: null };
  if (totalTimeSensitive <= 2) return { pts: 20, issue: "time-sensitive language" };
  if (totalTimeSensitive <= 4) return { pts: 10, issue: "highly time-sensitive" };
  return { pts: 0, issue: "extremely time-sensitive" };
}

// ---------------------------------------------------------------------------
// Main scoring
// ---------------------------------------------------------------------------

function scoreArticle(filename: string, raw: string): ScoredArticle {
  const { frontmatter, body } = parseFrontmatter(raw);
  const wordCount = countWords(body);
  const issues: string[] = [];

  // Content Quality (0-40)
  const wc = scoreWordCount(wordCount);
  if (wc.issue) issues.push(wc.issue);

  const dp = scoreDataPoints(body);
  if (dp.issue) issues.push(dp.issue);

  const fm = scoreFormulaic(body);
  if (fm.issue) issues.push(fm.issue);

  const sh = scoreSubheadings(body);
  if (sh.issue) issues.push(sh.issue);

  const li = scoreLists(body);
  if (li.issue) issues.push(li.issue);

  const contentScore = wc.pts + dp.pts + fm.pts + sh.pts + li.pts;

  // Topical Relevance (0-30)
  const catScore = scoreCategoryRelevance(frontmatter.category);
  const titleKw = scoreTitleKeywords(frontmatter.title);
  const relevanceScore = catScore + titleKw.pts;

  // Evergreen Potential (0-30)
  const eg = scoreEvergreen(frontmatter.title, body);
  if (eg.issue) issues.push(eg.issue);
  const evergreenScore = eg.pts;

  const totalScore = contentScore + relevanceScore + evergreenScore;

  let tier: "A" | "B" | "C" | "D";
  if (totalScore >= 70) tier = "A";
  else if (totalScore >= 40) tier = "B";
  else if (totalScore >= 20) tier = "C";
  else tier = "D";

  return {
    file: filename,
    title: frontmatter.title,
    slug: slugFromFilename(filename),
    score: totalScore,
    wordCount,
    category: frontmatter.category,
    tier,
    issues,
  };
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

function main() {
  const newsDir = path.resolve(__dirname, "../../content/news");

  if (!fs.existsSync(newsDir)) {
    console.error(`Directory not found: ${newsDir}`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(newsDir)
    .filter((f) => f.endsWith(".mdx"))
    .sort();

  const articles: ScoredArticle[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(newsDir, file), "utf-8");
    articles.push(scoreArticle(file, raw));
  }

  // Sort by score descending
  articles.sort((a, b) => b.score - a.score);

  const tierA = articles.filter((a) => a.tier === "A");
  const tierB = articles.filter((a) => a.tier === "B");
  const tierC = articles.filter((a) => a.tier === "C");
  const tierD = articles.filter((a) => a.tier === "D");

  const report: Report = {
    summary: {
      total: articles.length,
      tier_a: { count: tierA.length, description: "Score 70+, upgrade candidates" },
      tier_b: { count: tierB.length, description: "Score 40-69, acceptable" },
      tier_c: { count: tierC.length, description: "Score 20-39, noindex candidates" },
      tier_d: { count: tierD.length, description: "Score 0-19, worst quality" },
    },
    articles,
  };

  // Write JSON report
  const outPath = path.resolve(__dirname, "quality-scores.json");
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2), "utf-8");

  // Console summary
  console.log("");
  console.log("=== NEWS ARTICLE QUALITY AUDIT ===");
  console.log(`Total: ${articles.length.toLocaleString()} articles`);
  console.log(
    `Tier A (70+): ${tierA.length} articles - UPGRADE these`
  );
  console.log(
    `Tier B (40-69): ${tierB.length} articles - acceptable, improve over time`
  );
  console.log(
    `Tier C (20-39): ${tierC.length} articles - NOINDEX these`
  );
  console.log(
    `Tier D (0-19): ${tierD.length} articles - NOINDEX + deprioritize`
  );

  // Average score
  const avgScore = articles.reduce((sum, a) => sum + a.score, 0) / articles.length;
  console.log(`\nAverage score: ${avgScore.toFixed(1)}`);

  // Score distribution
  console.log("\nScore distribution:");
  const buckets = [
    { label: "90-100", min: 90, max: 100 },
    { label: "80-89", min: 80, max: 89 },
    { label: "70-79", min: 70, max: 79 },
    { label: "60-69", min: 60, max: 69 },
    { label: "50-59", min: 50, max: 59 },
    { label: "40-49", min: 40, max: 49 },
    { label: "30-39", min: 30, max: 39 },
    { label: "20-29", min: 20, max: 29 },
    { label: "10-19", min: 10, max: 19 },
    { label: " 0-9 ", min: 0, max: 9 },
  ];
  for (const b of buckets) {
    const count = articles.filter((a) => a.score >= b.min && a.score <= b.max).length;
    const bar = "#".repeat(Math.ceil(count / Math.max(1, Math.ceil(articles.length / 50))));
    console.log(`  ${b.label}: ${String(count).padStart(4)} ${bar}`);
  }

  // Top 20 upgrade candidates
  console.log("\nTop 20 upgrade candidates:");
  const top20 = articles.slice(0, 20);
  top20.forEach((a, i) => {
    console.log(
      `  ${String(i + 1).padStart(2)}. [${a.score}] ${a.title.substring(0, 80)} (${a.file})`
    );
  });

  // Bottom 20
  console.log("\nBottom 20 (worst quality):");
  const bottom20 = articles.slice(-20).reverse();
  bottom20.forEach((a, i) => {
    console.log(
      `  ${String(i + 1).padStart(2)}. [${a.score}] ${a.title.substring(0, 80)} (${a.file})`
    );
  });

  // Most common issues
  const issueCounts: Record<string, number> = {};
  for (const a of articles) {
    for (const issue of a.issues) {
      // Normalize formulaic phrase counts
      const normalized = issue.replace(/\(\d+\)/, "(N)");
      issueCounts[normalized] = (issueCounts[normalized] || 0) + 1;
    }
  }
  console.log("\nMost common issues:");
  const sortedIssues = Object.entries(issueCounts).sort((a, b) => b[1] - a[1]);
  for (const [issue, count] of sortedIssues.slice(0, 10)) {
    console.log(`  ${String(count).padStart(4)}x ${issue}`);
  }

  console.log(`\nJSON report written to: ${outPath}`);
}

main();
