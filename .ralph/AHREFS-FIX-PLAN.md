# Ahrefs SEO Fix Plan - January 26, 2026

## Health Score: 19 → Target: 85+

---

## PHASE 1: CRITICAL (Agents 1-3)

### Agent 1: Fix Sitemap Issues
- Remove 404 URLs from sitemap
- Remove /thank-you from sitemap
- Add missing pages to sitemap (rollover account types, /audit, /learn)

### Agent 2: Fix Canonical Tags + News Duplicates
- Add canonical tags to /news category pages
- Fix duplicate content issues

### Agent 3: Fix Missing H1 Tags (6 pages)
- /tools/rmd-calculator
- /tools/fers-supplement-calculator
- /tools/fers-annuity-calculator
- /tools/tsp-calculator
- /tools/fees-comparison
- /audit

---

## PHASE 2: HIGH PRIORITY (Agents 4-7)

### Agent 4: Add Open Graph Image Site-Wide
- Create default og:image in public folder
- Update layout.tsx with default OG tags
- Ensure all pages have og:image, og:type, og:url

### Agent 5: Fix Meta Descriptions Too Long (206 pages)
- Shorten to under 155 characters
- Focus on /tools/*, /learn/*, /compare/*

### Agent 6: Fix Titles Too Long (122 pages)
- Shorten to under 60 characters
- Remove "| Rich Dad Retirement" suffix where needed

### Agent 7: Fix Structured Data Errors (10 pages)
- /reviews/birch-gold-group
- /reviews/regal-assets
- /reviews/benetrends
- /reviews/guidant-financial
- Validate with Google Rich Results Test

---

## PHASE 3: INTERNAL LINKING (Agents 8-10)

### Agent 8: Create /local/ Hub Page + Links
- Create index page for 50 state pages
- Add internal links from footer/relevant pages

### Agent 9: Fix Compare Orphan Pages (203 pages)
- Add links from /compare/ hub to all comparison pages
- Create category sections on compare page

### Agent 10: Fix Learn/Other Orphan Pages
- Add RelatedArticles component
- Improve cross-linking between articles

---

## EXECUTION ORDER

```
PARALLEL BATCH 1: Agents 1, 2, 3 (Critical fixes)
PARALLEL BATCH 2: Agents 4, 5, 6, 7 (High priority)
PARALLEL BATCH 3: Agents 8, 9, 10 (Internal linking)
```

## VERIFICATION
- [ ] npm run build passes
- [ ] No 404 pages in sitemap
- [ ] All pages have og:image
- [ ] All meta descriptions < 155 chars
- [ ] All titles < 60 chars
- [ ] All pages have H1 tags
- [ ] Orphan pages have internal links
