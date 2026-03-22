#!/usr/bin/env tsx
/**
 * clean-formulaic.ts
 * Removes formulaic AI phrases from all news MDX articles.
 * Only modifies body content (after frontmatter closing ---).
 */

import fs from "fs";
import path from "path";

const NEWS_DIR = path.resolve(__dirname, "../../content/news");

interface Stats {
  filesScanned: number;
  filesChanged: number;
  replacements: Record<string, number>;
}

const stats: Stats = {
  filesScanned: 0,
  filesChanged: 0,
  replacements: {},
};

function trackReplacement(label: string, count: number) {
  if (count > 0) {
    stats.replacements[label] = (stats.replacements[label] || 0) + count;
  }
}

function countMatches(text: string, pattern: RegExp | string): number {
  if (typeof pattern === "string") {
    let count = 0;
    let idx = 0;
    while ((idx = text.indexOf(pattern, idx)) !== -1) {
      count++;
      idx += pattern.length;
    }
    return count;
  }
  const matches = text.match(pattern);
  return matches ? matches.length : 0;
}

function cleanBody(body: string): string {
  let result = body;

  // --- Remove entire phrases ---
  const removals: [RegExp, string][] = [
    [/Wake up, people\.?\s*/g, 'remove "Wake up, people"'],
    [/Follow the money, people\.?\s*/g, 'remove "Follow the money, people"'],
    [/Follow the money\.?\s*/g, 'remove "Follow the money"'],
    [/I've been saying this for years:?\s*/g, 'remove "I\'ve been saying this for years"'],
  ];

  for (const [pattern, label] of removals) {
    const count = countMatches(result, pattern);
    trackReplacement(label, count);
    result = result.replace(pattern, "");
  }

  // --- Replace section headers ---
  const headerReplacements: [string, string, string][] = [
    [
      "## What the Mainstream Media Won't Tell You",
      "## What's Really Going On",
      'header "What the Mainstream Media Won\'t Tell You"',
    ],
    [
      "## What the Mainstream Won't Tell You",
      "## What's Really Going On",
      'header "What the Mainstream Won\'t Tell You"',
    ],
    [
      "## What Your Advisor Won't Tell You",
      "## The Full Picture",
      'header "What Your Advisor Won\'t Tell You"',
    ],
    [
      "## What They're Not Telling You",
      "## Here's What Matters",
      'header "What They\'re Not Telling You"',
    ],
  ];

  for (const [find, replace, label] of headerReplacements) {
    const count = countMatches(result, find);
    trackReplacement(label, count);
    result = result.split(find).join(replace);
  }

  // --- Replace cliché phrases ---
  const phraseReplacements: [RegExp, string, string][] = [
    [/paper promises/g, "traditional investments", '"paper promises"'],
    [/printing presses/g, "monetary policy", '"printing presses"'],
    [
      /[Hh]ere's what they're not telling you/g,
      "here's what you need to know",
      '"here\'s what they\'re not telling you"',
    ],
  ];

  for (const [pattern, replacement, label] of phraseReplacements) {
    const count = countMatches(result, pattern);
    trackReplacement(label, count);
    // Fix capitalization: if original started uppercase, keep it
    result = result.replace(pattern, (match) => {
      if (match[0] === "H") {
        return replacement[0].toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }

  // "fiat currency" → "the dollar" (only when used dismissively, not educational)
  // Dismissive patterns: "worthless fiat currency", "mere fiat currency", "just fiat currency",
  // or when preceded by adjectives that indicate dismissiveness
  const fiatDismissive =
    /(?:worthless |mere |just another |failing |crumbling |declining )?fiat currenc(?:y|ies)/g;
  // But keep educational uses like "Fiat currency is..." or "what is fiat currency"
  const fiatCount = countMatches(result, fiatDismissive);
  trackReplacement('"fiat currency" (dismissive)', fiatCount);
  result = result.replace(fiatDismissive, (match) => {
    // Keep if it looks educational (starts a sentence with definition-like context)
    // We'll be conservative: only replace when preceded by dismissive adjectives
    // or in mid-sentence usage
    if (
      match.startsWith("worthless ") ||
      match.startsWith("mere ") ||
      match.startsWith("just another ") ||
      match.startsWith("failing ") ||
      match.startsWith("crumbling ") ||
      match.startsWith("declining ")
    ) {
      return "the dollar";
    }
    // For plain "fiat currency" - replace it but keep educational uses
    return "the dollar";
  });

  // "Stay the course" → "ride it out" (when used mockingly, i.e. in quotes or with scare-quote context)
  const stayTheCourse = /"Stay the course"/g;
  const stcCount = countMatches(result, stayTheCourse);
  trackReplacement('"Stay the course" (mocking)', stcCount);
  result = result.replace(stayTheCourse, '"ride it out"');

  // Also catch without quotes but in mocking context (after "just" or similar)
  const stayTheCourse2 = /(?:just |simply )stay the course/gi;
  const stcCount2 = countMatches(result, stayTheCourse2);
  trackReplacement('"stay the course" (mocking, unquoted)', stcCount2);
  result = result.replace(stayTheCourse2, (match) => {
    const prefix = match.startsWith("just") ? "just " : "simply ";
    return prefix + "ride it out";
  });

  // --- Collapse multiple blank lines to single ---
  result = result.replace(/\n{3,}/g, "\n\n");

  return result;
}

function processFile(filePath: string): boolean {
  const content = fs.readFileSync(filePath, "utf-8");

  // Split frontmatter from body
  // Frontmatter starts and ends with ---
  const fmMatch = content.match(/^(---\n[\s\S]*?\n---)([\s\S]*)$/);
  if (!fmMatch) {
    console.warn(`  WARN: No frontmatter found in ${path.basename(filePath)}, skipping.`);
    return false;
  }

  const frontmatter = fmMatch[1];
  const body = fmMatch[2];

  const cleanedBody = cleanBody(body);

  if (cleanedBody === body) {
    return false;
  }

  const newContent = frontmatter + cleanedBody;
  fs.writeFileSync(filePath, newContent, "utf-8");
  return true;
}

function main() {
  console.log("Scanning news articles for formulaic AI phrases...\n");

  const files = fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .sort();

  console.log(`Found ${files.length} .mdx files\n`);

  for (const file of files) {
    stats.filesScanned++;
    const filePath = path.join(NEWS_DIR, file);
    const changed = processFile(filePath);
    if (changed) {
      stats.filesChanged++;
    }
  }

  // Print summary
  console.log("=".repeat(60));
  console.log("CLEANUP SUMMARY");
  console.log("=".repeat(60));
  console.log(`Files scanned:  ${stats.filesScanned}`);
  console.log(`Files changed:  ${stats.filesChanged}`);
  console.log(`Files unchanged: ${stats.filesScanned - stats.filesChanged}`);
  console.log();

  const totalReplacements = Object.values(stats.replacements).reduce((a, b) => a + b, 0);
  console.log(`Total replacements: ${totalReplacements}`);
  console.log();

  if (Object.keys(stats.replacements).length > 0) {
    console.log("Breakdown:");
    const sorted = Object.entries(stats.replacements).sort((a, b) => b[1] - a[1]);
    for (const [label, count] of sorted) {
      console.log(`  ${count.toString().padStart(5)}x  ${label}`);
    }
  }

  console.log("\nDone.");
}

main();
