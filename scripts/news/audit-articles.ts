/**
 * News Article Audit Script
 *
 * Scores all news articles and outputs KEEP/DELETE recommendations.
 * Strategy: Keep the single best article per topic per week.
 *
 * Scoring criteria:
 * - Unique topic for that week (+10)
 * - Longer word count (+1 per 100 words above 600)
 * - Covers major event (Fed decision, gold record, policy change) (+5)
 * - Has specific data/numbers in title (+2)
 * - Not a duplicate title pattern (+3)
 *
 * Dedup: Group by topic cluster + week, keep highest scorer.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const NEWS_DIR = path.join(process.cwd(), "content/news");

interface ArticleScore {
  slug: string;
  title: string;
  date: string;
  week: string;
  category: string;
  wordCount: number;
  score: number;
  topicCluster: string;
  keep: boolean;
  reason: string;
}

// Topic clusters — articles covering the same general theme
const TOPIC_PATTERNS: [string, RegExp][] = [
  ["fed-rates", /\b(fed|federal reserve|rate cut|rate hike|interest rate|powell|fomc)\b/i],
  ["gold-price", /\b(gold price|gold hit|gold surge|gold record|gold target|gold rally)\b/i],
  ["silver", /\b(silver|silver price|silver demand|silver industrial)\b/i],
  ["bitcoin-crypto", /\b(bitcoin|crypto|ethereum|btc|digital asset|digital currency)\b/i],
  ["401k-retirement", /\b(401.k|retirement|retire|pension|nest egg|ira)\b/i],
  ["savings-rates", /\b(savings rate|4%|apy|high.yield savings|savings account)\b/i],
  ["social-security", /\b(social security|ss benefit|ssa)\b/i],
  ["dollar-currency", /\b(dollar|currency|usd|dxy|forex)\b/i],
  ["oil-energy", /\b(oil|energy|crude|barrel|gasoline|opec)\b/i],
  ["trump-policy", /\b(trump|tariff|trade war|executive order)\b/i],
  ["inflation", /\b(inflation|cpi|consumer price|purchasing power)\b/i],
  ["bank-crisis", /\b(bank|banking|fdic|bank merger|bank failure)\b/i],
  ["stock-market", /\b(stock market|dow|s&p|nasdaq|market crash|market rally|wall street)\b/i],
  ["recession", /\b(recession|depression|economic downturn|contraction)\b/i],
  ["real-estate", /\b(real estate|housing|mortgage|home price)\b/i],
  ["war-geopolitical", /\b(war|iran|china|russia|military|geopolit|sanctions)\b/i],
];

// Major events worth keeping (specific enough to be unique)
const MAJOR_EVENT_KEYWORDS = [
  /gold.*\$[3-9],?\d{3}/i,       // Gold hitting $3000+
  /gold.*record/i,                 // Gold records
  /fed.*decision/i,                // Fed decisions
  /fed.*cut/i,                     // Rate cuts
  /recession.*official/i,          // Official recession
  /bank.*collapse/i,               // Bank failures
  /tariff.*\d+%/i,                 // Specific tariff numbers
  /executive order/i,              // Policy changes
  /deutsche bank.*gold.*\$[4-9]/i, // Major price targets
];

function getWeekKey(dateStr: string): string {
  const d = new Date(dateStr);
  const jan1 = new Date(d.getFullYear(), 0, 1);
  const weekNum = Math.ceil(((d.getTime() - jan1.getTime()) / 86400000 + jan1.getDay() + 1) / 7);
  return `${d.getFullYear()}-W${String(weekNum).padStart(2, "0")}`;
}

function getTopicCluster(title: string): string {
  for (const [cluster, pattern] of TOPIC_PATTERNS) {
    if (pattern.test(title)) return cluster;
  }
  return "general";
}

function scoreArticle(title: string, content: string, wordCount: number): number {
  let score = 0;

  // Base word count score (longer = slightly better)
  score += Math.max(0, Math.floor((wordCount - 600) / 100));

  // Has specific numbers/data in title
  if (/\$[\d,]+/.test(title) || /\d+%/.test(title)) score += 2;

  // Covers a major event
  for (const pattern of MAJOR_EVENT_KEYWORDS) {
    if (pattern.test(title)) {
      score += 5;
      break;
    }
  }

  // Penalize formulaic clickbait patterns
  if (/here'?s what/i.test(title)) score -= 1;
  if (/won'?t tell you/i.test(title)) score -= 2;
  if (/wake up/i.test(title)) score -= 2;
  if (/under attack/i.test(title)) score -= 1;
  if (/what.*really means/i.test(title)) score -= 1;

  // Penalize ultra-generic retirement takes
  if (/retirement.*crosshairs/i.test(title)) score -= 3;
  if (/retirement.*under attack/i.test(title)) score -= 3;
  if (/your.*getting crushed/i.test(title)) score -= 2;

  return score;
}

function main() {
  const files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith(".mdx"));
  const articles: ArticleScore[] = [];

  for (const file of files) {
    const filePath = path.join(NEWS_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const wordCount = content.split(/\s+/).length;
    const title = (data.title as string) || "";
    const dateStr = (data.publishedAt as string) || file.slice(0, 10);
    const category = (data.category as string) || "general";

    const topicCluster = getTopicCluster(title);
    const week = getWeekKey(dateStr);
    const score = scoreArticle(title, content, wordCount);

    articles.push({
      slug: file.replace(".mdx", ""),
      title,
      date: dateStr.slice(0, 10),
      week,
      category: category.replace(/"/g, ""),
      wordCount,
      score,
      topicCluster,
      keep: false,
      reason: "",
    });
  }

  // Group by topic cluster + week
  const groups = new Map<string, ArticleScore[]>();
  for (const a of articles) {
    const key = `${a.week}__${a.topicCluster}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(a);
  }

  // Keep the highest-scoring article per group
  let keepCount = 0;
  let deleteCount = 0;

  for (const [groupKey, group] of groups) {
    group.sort((a, b) => b.score - a.score);
    // Keep the best one
    group[0].keep = true;
    group[0].reason = `Best of ${group.length} in ${groupKey}`;
    keepCount++;

    // Mark rest for deletion
    for (let i = 1; i < group.length; i++) {
      group[i].keep = false;
      group[i].reason = `Duplicate topic (${groupKey}), score ${group[i].score} vs best ${group[0].score}`;
      deleteCount++;
    }
  }

  // Output summary
  console.log(`\n=== NEWS ARTICLE AUDIT RESULTS ===\n`);
  console.log(`Total articles: ${articles.length}`);
  console.log(`KEEP: ${keepCount}`);
  console.log(`DELETE: ${deleteCount}`);
  console.log(`\nTopic clusters found: ${new Set(articles.map((a) => a.topicCluster)).size}`);
  console.log(`Weeks covered: ${new Set(articles.map((a) => a.week)).size}`);

  // Show topic distribution
  const topicCounts = new Map<string, number>();
  for (const a of articles) {
    topicCounts.set(a.topicCluster, (topicCounts.get(a.topicCluster) || 0) + 1);
  }
  console.log(`\n--- Articles by topic ---`);
  for (const [topic, count] of [...topicCounts.entries()].sort((a, b) => b[1] - a[1])) {
    const kept = articles.filter((a) => a.topicCluster === topic && a.keep).length;
    console.log(`  ${topic}: ${count} total → ${kept} kept`);
  }

  // Write KEEP list
  const keepList = articles
    .filter((a) => a.keep)
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((a) => a.slug);

  fs.writeFileSync(
    path.join(process.cwd(), "scripts/news/audit-keep.json"),
    JSON.stringify(keepList, null, 2)
  );

  // Write DELETE list
  const deleteList = articles
    .filter((a) => !a.keep)
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((a) => a.slug);

  fs.writeFileSync(
    path.join(process.cwd(), "scripts/news/audit-delete.json"),
    JSON.stringify(deleteList, null, 2)
  );

  console.log(`\nKEEP list written to scripts/news/audit-keep.json (${keepList.length} articles)`);
  console.log(`DELETE list written to scripts/news/audit-delete.json (${deleteList.length} articles)`);

  // Show sample of KEEP articles
  console.log(`\n--- Sample KEEP articles ---`);
  const keepArticles = articles.filter((a) => a.keep).sort((a, b) => b.score - a.score);
  for (const a of keepArticles.slice(0, 20)) {
    console.log(`  [${a.score}] ${a.date} | ${a.title.slice(0, 80)}`);
  }

  // Show sample DELETE articles
  console.log(`\n--- Sample DELETE articles (lowest scored) ---`);
  const delArticles = articles.filter((a) => !a.keep).sort((a, b) => a.score - b.score);
  for (const a of delArticles.slice(0, 10)) {
    console.log(`  [${a.score}] ${a.date} | ${a.title.slice(0, 80)}`);
  }
}

main();
