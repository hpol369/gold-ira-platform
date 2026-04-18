# Sprint 6 — Content Expansion: Retirement Adequacy Sub-Pages + Blue Ocean

**Date:** 2026-03-20
**Architect:** Cowork | **Dev Lead:** Claude Code
**Focus:** Build the highest-value content pages — ones that directly attract people with $50k-$500k+ in savings asking "is my money enough?"

---

## WHY THIS IS THE HIGHEST-ROI SPRINT

These aren't random SEO pages. Every person searching "is $500k enough to retire" literally HAS $500k. That's our ideal Augusta lead. The Google SERP shows Reddit, SmartAsset, and Motley Fool ranking — no Gold IRA affiliate site is capturing this traffic with a gold-protection angle. We own this.

**Current state:**
- `/is-enough-to-retire` hub page exists with 7 amount cards
- Zero sub-pages exist (all 7 slugs return 404)
- 4 of 6 Blue Ocean pages already exist as static learn pages
- 2 Blue Ocean pages still missing (457b rollover, Noble Gold fees)

---

## PART A: RETIREMENT ADEQUACY SUB-PAGES (7 pages)

### Page Template (applies to all 7)

Each sub-page must be DEEP, authoritative, and GEO-optimized. Not thin affiliate content — real financial guidance that happens to show gold as a protection strategy.

**Structure per page:**

```
1. ANSWER-FIRST PARAGRAPH (2-3 sentences)
   Direct answer to "Can I retire with $X?" — specific numbers, 4% rule, verdict.
   This is what AI models and Google AI Overview will pull.

2. KEY FACTS BOX
   - Monthly income (4% rule)
   - With Social Security
   - Healthcare gap (if retiring before 65)
   - Years money will last
   - Gold protection potential

3. DETAILED BREAKDOWN SECTIONS
   a) The Math: 4% Rule Applied to $X
   b) Social Security + $X: What Your Life Actually Looks Like
   c) Healthcare Costs Before Medicare (if age < 65)
   d) Where $X Goes Furthest (LCOL vs HCOL comparison)
   e) The Hidden Risk: What Happens If the Market Crashes in Year 1
      (This is our unique angle — sequence-of-returns risk → gold protection)
   f) How to Make $X Last Longer: 5 Strategies
      - Delay Social Security
      - Part-time work
      - Downsize housing
      - Reduce healthcare costs
      - Protect with gold (10-15% allocation) ← our CTA insertion point
   g) Real Example: "[Name], Age [X], Retired with $[X]"
      (Fictional but realistic case study in our brand voice)

4. INTERACTIVE ELEMENT
   Link to our existing retirement calculator: /tools/retirement-calculator
   "Run Your Own Numbers →"

5. COMPARISON TABLE
   "How $X Compares" showing $300k / $500k / $750k / $1M side by side
   (Links between sub-pages = internal linking boost)

6. GOLD PROTECTION SECTION
   "How Gold Could Add 10+ Years to Your $X"
   - 2008 crash example: stocks -37%, gold +25%
   - 10-15% allocation math applied to their specific amount
   - Augusta CTA: "See how gold protects $X portfolios → /get-started"

7. FAQ SECTION (3-5 questions with FAQPage schema)
   Use the "People Also Ask" questions from Google SERPs:
   - "How long will $X last in retirement?"
   - "What percent of retirees have $X?"
   - "Can I retire at [age] with $X?"
   - "How to make $X last 30 years"
   - "Should I put $X in a Gold IRA?"

8. RELATED ARTICLES (RelatedContent component)
   Links to other amounts + the hub page + relevant learn articles

9. AUGUSTA CTA (footer)
   AugustaCTA variant="footer" with contextual headline matching the page
```

### The 7 Sub-Pages

**Page 1: `/is-enough-to-retire/retire-with-300k-at-55`**
- Target query: "can I retire at 55 with 300k", "is 300k enough to retire"
- Audience: Early retirees, often forced out of jobs. $300k is below Augusta's minimum but perfect for Noble Gold ($2k min) or American Hartford ($10k min)
- CTA: Routes to Noble Gold or /get-started for assessment
- Answer-first: "$300,000 provides roughly $1,000/month using the 4% rule — $12,000/year. Combined with Social Security (available at 62), total income reaches ~$33,756/year. This is tight but doable in low-cost areas if you have no debt and low healthcare costs."
- **Savings tier this attracts:** $200k-$500k (the amount they're ASKING about is what they HAVE)

**Page 2: `/is-enough-to-retire/retire-with-400k-at-60`**
- Target query: "can I retire at 60 with 400k"
- Answer-first: "$400,000 generates $1,333/month ($16,000/year) at a 4% withdrawal rate. With Social Security at 62, total income reaches ~$37,756. You'll need to bridge 5 years of healthcare before Medicare at 65 — budget $6,000-$12,000/year for ACA coverage."
- **Savings tier:** $300k-$500k

**Page 3: `/is-enough-to-retire/retire-with-500k-at-62`**
- Target query: "is 500k enough to retire at 62", "can I retire with $500k"
- **THIS IS THE MONEY PAGE.** Highest search volume. Person has exactly $500k — Augusta's minimum.
- Answer-first: "$500,000 provides $1,667/month ($20,000/year) at a 4% withdrawal rate. Combined with Social Security at 62 (~$21,756/year), total income is approximately $41,756/year. This puts you solidly in the 'comfortable modest retirement' range in most of America — but one bad market year could erase decades of savings."
- CTA: Augusta-focused. "You qualify for Augusta's Private Client Program ($50k minimum). [Get Your Free Kit →]"
- **Savings tier:** $500k (exact Augusta target)

**Page 4: `/is-enough-to-retire/retire-with-600k-at-65`**
- Target query: "is 600k enough to retire at 65"
- Answer-first: "$600,000 at age 65 gives you $2,000/month ($24,000/year) plus full Social Security at $21,756+. Total income: ~$45,756/year. With Medicare kicking in and presumably a paid-off home, this is a solid position — but inflation at 3.5% will erode your purchasing power by 30% over 10 years."
- CTA: Augusta mid/high intent
- **Savings tier:** $500k-$750k

**Page 5: `/is-enough-to-retire/retire-with-750k`**
- Target query: "can I retire with 750k", "is $750,000 enough to retire"
- Answer-first: "$750,000 gives you $2,500/month ($30,000/year) at a 4% withdrawal rate. With Social Security, your total income exceeds $51,000/year — above the median household income in most US states. This is a comfortable retirement with room for travel, healthcare, and unexpected expenses."
- CTA: Augusta high-intent (this person has $750k — premium lead)
- **Savings tier:** $500k-$1M

**Page 6: `/is-enough-to-retire/retire-with-800k`**
- Target query: "is 800k enough to retire"
- Answer-first: "$800,000 provides $2,667/month ($32,000/year). Combined with Social Security, total income reaches ~$53,756 — strong enough for a comfortable retirement in all but the most expensive US cities. The key risk at this level isn't running out of money — it's losing purchasing power to inflation over 25+ years."
- CTA: Augusta high-intent. Emphasize protection, not accumulation.
- **Savings tier:** $750k-$1M

**Page 7: `/is-enough-to-retire/retire-with-1-million`** (ADD THIS — not in current hub but massive search volume)
- Target query: "is 1 million enough to retire", "can I retire with $1 million"
- Answer-first: "$1,000,000 provides $3,333/month ($40,000/year) at a 4% withdrawal rate. With Social Security, total income exceeds $61,000 — well above the national median. One million dollars is the classic retirement milestone, but inflation means today's $1M buys what $600K bought in 2010. Protecting purchasing power is the real challenge."
- CTA: Augusta white-glove. This is a $100k+ potential deal.
- **Savings tier:** $1M+ (whale alert)

### Technical Requirements per Sub-Page

1. **Schema markup:** Article + FAQPage + BreadcrumbList
2. **AnswerFirst component** with the direct answer paragraph
3. **FAQSection component** with 5 contextual FAQs + JSON-LD
4. **RelatedContent** linking to other amounts + hub
5. **SidebarAuditWidget** in sidebar
6. **InContentCTA** after section 3 (the crash risk section)
7. **AugustaCTA** footer — with contextual headline: "Protect Your $[X] From the Next Crash"
8. **Metadata:** unique title, description, canonical URL, OG tags
9. **Internal links:** each page links to the hub + 2-3 other amount pages + relevant learn articles
10. **Comparison table** showing all amounts side-by-side (drives clicks between pages)

### Page Quality Standard

These pages must be **better than SmartAsset, better than Motley Fool, better than Bankrate.** That means:
- Specific dollar figures, not vague ranges
- Real 4% rule math applied to the exact amount
- Social Security estimates at different claiming ages (62, 67, 70)
- Healthcare cost breakdown (ACA vs Medicare)
- State-by-state cost of living comparison (at least 5 states)
- Inflation erosion projection over 10, 20, 30 years
- The gold protection angle is our UNIQUE value prop — nobody else has this
- Written in our brand voice: plain English, blue-collar audience, no Wall Street jargon
- 2,500-4,000 words per page (comprehensive but not bloated)

---

## PART B: BLUE OCEAN PAGES (2 remaining)

### Page 8: `/guide/457b-to-gold-ira-rollover`
- Target: Government/nonprofit employees with 457(b) plans
- Template: Match existing rollover guide structure (`/guide/gold-ira-rollover-guide`)
- Content: 457(b) vs 401(k) differences, rollover rules, tax implications, step-by-step process
- CTA: Augusta (government workers often have $100k+ in 457b plans)
- Schema: HowTo + Article + FAQPage

### Page 9: `/guide/noble-gold-fees`
- Target: People comparing Noble Gold's fee structure (high commercial intent, CPC $14)
- Content: Full Noble Gold fee breakdown, comparison vs Augusta, vs industry average
- CTA: Noble Gold affiliate link for the main CTA, Augusta "See our #1 pick" as secondary
- Schema: Article + FAQPage
- This is a money page — people searching "noble gold fees" are in the consideration phase

---

## PART C: HUB PAGE UPDATE

### Update `/is-enough-to-retire/page.tsx`

1. Add the $1M option to the amounts array
2. Make all amount cards link to their sub-pages (currently they show data but don't link to sub-pages since sub-pages don't exist)
3. Update the slug for $1M: `retire-with-1-million`
4. Add a cross-link comparison table at the bottom showing all amounts
5. Update internal-links.ts to include the retirement hub and all sub-pages

---

## PART D: INTERNAL LINKING UPDATES

### Add to `src/data/internal-links.ts`:

```typescript
"retirement-adequacy": {
  hub: { url: "/is-enough-to-retire", title: "Is Your Savings Enough to Retire?" },
  spokes: [
    { url: "/is-enough-to-retire/retire-with-300k-at-55", title: "Retire with $300K at 55" },
    { url: "/is-enough-to-retire/retire-with-400k-at-60", title: "Retire with $400K at 60" },
    { url: "/is-enough-to-retire/retire-with-500k-at-62", title: "Retire with $500K at 62" },
    { url: "/is-enough-to-retire/retire-with-600k-at-65", title: "Retire with $600K at 65" },
    { url: "/is-enough-to-retire/retire-with-750k", title: "Retire with $750K" },
    { url: "/is-enough-to-retire/retire-with-800k", title: "Retire with $800K" },
    { url: "/is-enough-to-retire/retire-with-1-million", title: "Retire with $1 Million" },
  ],
},
```

Also add cross-links from:
- `/learn/retirement-planning-mistakes` → retirement hub
- `/learn/sequence-of-returns-risk` → retirement hub
- `/learn/too-late-to-save-retirement` → retirement hub
- `/tools/retirement-calculator` → retirement hub

---

## EXECUTION ORDER

```
PHASE 1: Sub-page template + first page
  1. Create shared data/types for retirement amount pages
  2. Build page template component (reusable across all 7 amounts)
  3. Build retire-with-500k-at-62 FIRST (highest volume, Augusta target)
  4. Verify: build, schema validation, visual check

PHASE 2: Remaining sub-pages
  5. retire-with-300k-at-55
  6. retire-with-400k-at-60
  7. retire-with-600k-at-65
  8. retire-with-750k
  9. retire-with-800k
  10. retire-with-1-million

PHASE 3: Hub + Blue Ocean
  11. Update hub page with links to sub-pages + $1M option
  12. Build 457b-to-gold-ira-rollover
  13. Build noble-gold-fees
  14. Update internal-links.ts

PHASE 4: Verification
  15. npm run build — zero errors
  16. All 9 new pages render correctly
  17. All schema markup validates
  18. All internal links work
  19. All CTAs route correctly (/get-started for general, Augusta direct for high-intent)
  20. Sitemap includes all new pages
```

---

## CONTENT QUALITY CHECKLIST (Per Page)

- [ ] Answer-first paragraph directly answers the query in 2-3 sentences
- [ ] Specific dollar figures, not vague ranges
- [ ] 4% rule math applied to exact amount
- [ ] Social Security estimates at 62, 67, and 70
- [ ] Healthcare cost section (ACA if pre-65, Medicare if 65+)
- [ ] At least 3 state cost-of-living comparisons
- [ ] Inflation erosion projection (10, 20, 30 years)
- [ ] Sequence-of-returns risk section with gold protection angle
- [ ] Case study example in brand voice
- [ ] Link to /tools/retirement-calculator
- [ ] Comparison table linking to other amount pages
- [ ] FAQSection with 5 People Also Ask questions + schema
- [ ] SidebarAuditWidget + InContentCTA + AugustaCTA footer
- [ ] RelatedContent with hub + other amounts
- [ ] Schema: Article + FAQPage + BreadcrumbList
- [ ] Written in brand voice (plain English, 55+ blue-collar audience)
- [ ] 2,500-4,000 words
- [ ] No patronizing language ("it's never too late", "small contributions")
- [ ] Uses $50k+ examples and language that resonates with serious savers

---

## EXPECTED IMPACT

| Metric | Current | After Sprint 6 |
|--------|---------|----------------|
| Retirement adequacy pages | 1 (hub only) | 8 (hub + 7 sub-pages) |
| Blue Ocean pages built | 4/6 | 6/6 |
| Pages targeting "$X enough to retire" queries | 0 | 7 |
| Estimated monthly search volume captured | 0 | 5,000-10,000 |
| % of visitors with $50k+ savings | Unknown | Very high (they're searching their exact amount) |
| Internal links between retirement content | 0 | 50+ cross-links |

---

RALPH_STATUS:
- PHASE: Sprint 6 (Content Expansion)
- TASK: Plan complete — ready for Claude Code
- PROGRESS: Research + plan done
- BLOCKERS: None — all components exist (AnswerFirst, FAQSection, SidebarAuditWidget, etc.)
