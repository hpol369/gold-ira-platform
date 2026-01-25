# DAILY NEWS FEATURE - Ralph Execution Plan

## OVERVIEW
Automated news pipeline: Scrape → Claude writes in Kiyosaki voice → Auto-publish

---

## PHASE 1: Data Structures & Types (Foundation)
- [x] P1-001: Create news article types (`src/types/news.ts`)
- [x] P1-002: Create news data utilities (`src/lib/news.ts`)
- [x] P1-003: Create Kiyosaki voice prompt template (`src/lib/kiyosaki-prompt.ts`)

## PHASE 2: News Pages & Components
- [x] P2-001: Create news hub page (`src/app/news/page.tsx`)
- [x] P2-002: Create individual article page (`src/app/news/[slug]/page.tsx`)
- [x] P2-003: Create news card component (inline in hub page)
- [x] P2-004: Create news article layout (inline in article page)
- [x] P2-005: Create "What You Should Do" CTA box (inline)
- [x] P2-006: Add NewsArticle schema markup

## PHASE 3: Sample Content
- [x] P3-001: Create 2 sample news articles in MDX
- [x] P3-002: Test rendering and styling (build verified)

## PHASE 4: Automation Scripts
- [x] P4-001: Create RSS feed scraper (`scripts/news/scrape-feeds.ts`)
- [x] P4-002: Create relevance scorer (`scripts/news/score-relevance.ts`)
- [x] P4-003: Create Claude article generator (`scripts/news/generate-article.ts`)
- [x] P4-004: Create MDX file writer (`scripts/news/write-article.ts`)
- [x] P4-005: Create main pipeline runner (`scripts/news/run-pipeline.ts`)
- [x] P4-006: Create config file (`scripts/news/config.ts`)

## PHASE 5: Deployment & Scheduling
- [x] P5-001: Create GitHub Action for daily cron (`.github/workflows/daily-news.yml`)
- [x] P5-002: Add npm scripts for pipeline commands
- [x] P5-003: Create review queue functionality (built into write-article.ts)
- [x] P5-004: Test full pipeline ✅ VERIFIED - 3 articles generated successfully

## PHASE 6: Navigation & Integration
- [x] P6-001: Add news to navbar (desktop + mobile)
- [x] P6-002: Add news to footer
- [x] P6-003: Update sitemap for news

---

## CURRENT STATUS
- PHASE: COMPLETE ✅
- PROGRESS: 20/20 tasks completed
- BLOCKERS: None
- EXIT_SIGNAL: true

---

## PIPELINE TEST RESULTS (Jan 25, 2026)

**Input:** 51 news items from 5 RSS feeds (24hr window)
**Filtered:** 3 relevant articles (score >= 3)
**Generated:** 3 articles in Kiyosaki voice

### Articles Generated:
1. "Why Crypto Won't Save Your Retirement (But This Might)" - crypto/dollar hedge angle
2. "Fed's Yen Intervention Signal Reveals the Global Currency War Heating Up" - Fed/currency
3. "The Real Reason Wall Street Wants Something More Than Fed Rate Cuts" - Fed/economy

---

## USAGE INSTRUCTIONS

### Manual Pipeline Run
```bash
# Set your Claude API key
export ANTHROPIC_API_KEY=your-key-here

# Run the pipeline (articles go to review queue by default)
npm run news:generate

# Or auto-publish without review
AUTO_PUBLISH=true npm run news:generate
```

### Review Queue Commands
```bash
# List articles pending review
npm run news:list

# Approve an article
npm run news:approve <slug>

# Reject an article
npm run news:reject <slug>
```

### GitHub Actions (Automated)
1. Add `ANTHROPIC_API_KEY` to your GitHub repo secrets
2. The workflow runs daily at 6 AM UTC
3. New articles are auto-committed to the repo
4. Your hosting provider (Vercel) will auto-deploy

---

## FILES CREATED

### Types & Utilities
- `src/types/news.ts` - TypeScript types for news articles
- `src/lib/news.ts` - MDX parsing & file operations
- `src/lib/kiyosaki-prompt.ts` - Kiyosaki voice prompt engineering

### Pages
- `src/app/news/page.tsx` - News hub with featured article + grid
- `src/app/news/[slug]/page.tsx` - Individual article with sidebar

### Content
- `content/news/*.mdx` - 5 articles (2 sample + 3 generated)

### Automation Scripts
- `scripts/news/config.ts` - Pipeline configuration (feeds, keywords, thresholds)
- `scripts/news/scrape-feeds.ts` - RSS feed scraper
- `scripts/news/score-relevance.ts` - Relevance scoring
- `scripts/news/generate-article.ts` - Claude article generator
- `scripts/news/write-article.ts` - MDX file writer + review queue CLI
- `scripts/news/run-pipeline.ts` - Main pipeline orchestrator

### CI/CD
- `.github/workflows/daily-news.yml` - Daily cron job (6 AM UTC)

### Navigation Updates
- `src/components/layout/Navbar.tsx` - Added News link
- `src/components/layout/Footer.tsx` - Added Daily News Briefing link
- `src/app/sitemap.ts` - Added news pages to sitemap
- `package.json` - Added news:* npm scripts

### Environment
- `.env.local` - Added ANTHROPIC_API_KEY
