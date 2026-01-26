# Ahrefs SEO Fix Plan V2 - January 26, 2026

## Current Health Score Issues

| Issue | Count | Priority |
|-------|-------|----------|
| OG Tags Incomplete | 3,354 | CRITICAL |
| Orphan Pages | 127 | HIGH |
| Meta Desc Too Long | 199 | HIGH |
| Title Too Long | 59 | MEDIUM |
| Missing H1 | 1 | MEDIUM |
| Structured Data Errors | 6 | MEDIUM |
| Low Internal Links | 246 | LOW |

---

## PHASE 1: CRITICAL - OG Image Fix

### Agent 1: Create OG Default Image + Fix Layout
- Create placeholder og-default.jpg in /public (1200x630)
- Verify layout.tsx has correct metadataBase
- This alone won't fix pages that override openGraph

### Agent 2: Create Shared Metadata Helper
- Create `/src/lib/metadata.ts` with `getDefaultOGImage()` helper
- All pages with openGraph should include images array
- Pattern: `images: getDefaultOGImage()`

### Agent 3: Fix OG on High-Traffic Pages
- Add og:images to: /self-directed-ira, /crypto-ira, /why-gold, /academy
- Add og:images to: /what-is-a-gold-ira, /guide/*, /tools/*

---

## PHASE 2: HIGH PRIORITY

### Agent 4: Fix Meta Descriptions (199 pages)
- Focus on pages in /learn/*, /compare/*, /tools/*
- Shorten to under 155 characters
- Maintain keyword focus

### Agent 5: Fix Titles (59 pages)
- Shorten to under 60 characters
- Keep primary keyword near start

### Agent 6: Fix Orphan Compare Pages
- Verify /compare/page.tsx links to ALL comparison pages
- Add more internal links from relevant content

---

## PHASE 3: MEDIUM PRIORITY

### Agent 7: Fix Missing H1 (/audit)
- Add visible H1 to /audit page
- May need to add before UniversalQuiz component

### Agent 8: Fix Structured Data (6 review pages)
- /reviews/birch-gold, /reviews/birch-gold-group
- /reviews/regal-assets, /reviews/regal-assets-lawsuit
- /reviews/benetrends, /reviews/guidant-financial
- Validate Review schema requirements

---

## EXECUTION ORDER

```
PARALLEL BATCH 1: Agents 1, 2 (OG infrastructure)
PARALLEL BATCH 2: Agents 3, 4, 5, 6 (Content fixes)
PARALLEL BATCH 3: Agents 7, 8 (Final fixes)
```

## VERIFICATION
- [ ] og-default.jpg exists in /public
- [ ] All pages have og:image
- [ ] All meta descriptions < 155 chars
- [ ] All titles < 60 chars
- [ ] All pages have H1 tags
- [ ] Review schema validates
