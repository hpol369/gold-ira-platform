# Silver Squeeze Content Hub Implementation

## Target: 3,600+ Monthly Searches | 13 Pages + 1 Calculator

---

## PHASE 1: PILLAR CONTENT (Agent 1)

### P1-001: /silver-squeeze/page.tsx (Main Hub)
- **Keywords:** silver squeeze (1,000), silver short squeeze (200)
- **Volume:** 1,200+
- **Word count:** 2,000+
- **Sections:** What is silver squeeze, why it matters, how to profit, banks manipulation, action steps

### P1-002: /silver-squeeze/silver-shortage/page.tsx
- **Keywords:** silver shortage (800), physical silver shortage (80)
- **Volume:** 880+
- **Word count:** 1,500+

### P1-003: /silver-squeeze/silver-stacking-guide/page.tsx
- **Keywords:** silver stacking (400), stack silver (30), silver stackers (200)
- **Volume:** 630+
- **Word count:** 1,500+

---

## PHASE 2: CALCULATOR (Agent 2)

### P2-001: /silver-squeeze/silver-to-gold-ratio-calculator/page.tsx
- **Keywords:** silver to gold ratio (1,400), silver gold ratio historical (20)
- **Volume:** 1,420+
- **Features:**
  - Gold price input (default from API or manual)
  - Silver price input
  - Current ratio display
  - Historical average comparison (47:1 long-term, 80:1 recent)
  - "Fair value" calculation
  - Historical chart (Recharts)
  - Lead capture CTA

---

## PHASE 3: DATA/ANALYSIS (Agent 3)

### P3-001: /silver-squeeze/silver-supply-deficit/page.tsx
- **Keywords:** silver supply deficit (350), silver demand vs supply (70)
- **Volume:** 420+

### P3-002: /silver-squeeze/comex-silver-inventory/page.tsx
- **Keywords:** comex silver inventory (90), comex silver delivery (20)
- **Volume:** 110+

### P3-003: /silver-squeeze/silver-backwardation/page.tsx
- **Keywords:** silver backwardation (200), silver contango
- **Volume:** 210+

### P3-004: /silver-squeeze/silver-short-interest/page.tsx
- **Keywords:** silver short interest (100), silver short position (20)
- **Volume:** 120+

### P3-005: /silver-squeeze/silver-undervalued/page.tsx
- **Keywords:** silver undervalued (60), silver fair value
- **Volume:** 130+

---

## PHASE 4: EXPOSÉ CONTENT (Agent 4)

### P4-001: /silver-squeeze/silver-manipulation/page.tsx
- **Keywords:** silver manipulation (100), silver price manipulation (100), silver market manipulation (60)
- **Volume:** 260+

### P4-002: /silver-squeeze/banks-shorting-silver/page.tsx
- **Keywords:** banks shorting silver (70), jp morgan silver manipulation (30)
- **Volume:** 100+

### P4-003: /silver-squeeze/paper-silver-vs-physical/page.tsx
- **Keywords:** paper silver vs physical silver (60), silver paper market
- **Volume:** 70+

---

## PHASE 5: BUYER CONTENT + LINKING (Agent 5)

### P5-001: /silver-squeeze/buy-physical-silver-guide/page.tsx
- **Keywords:** buy physical silver (300), silver premium over spot (10), silver coin premium (10)
- **Volume:** 320+
- **CPC:** $2.50 💰

### P5-002: Internal Linking
- Add silver-squeeze to Navbar under Learn dropdown
- Add silver section to Footer
- Link from /guide/silver-ira-guide
- Link from /best-silver-ira-companies
- Update sitemap.ts

---

## CONTENT TEMPLATE

```tsx
export const metadata: Metadata = {
  title: "KEYWORD | Silver IRA Guide",  // <60 chars
  description: "DESCRIPTION with CTA",   // <155 chars
  openGraph: {
    title: "...",
    description: "...",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
  },
};
```

## CTA BLOCK (Every Page)

```tsx
<section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10">
  <h2 className="text-2xl font-bold text-white mb-4">Protect Your Retirement with Physical Silver</h2>
  <p className="text-slate-300 mb-6">The banks can manipulate paper silver. They can't manipulate physical silver sitting in YOUR IRA.</p>
  <Button variant="gold" asChild>
    <Link href="/quiz">Take Our Free Silver IRA Quiz →</Link>
  </Button>
</section>
```

## VERIFICATION
- [ ] All 13 pages created
- [ ] Calculator functional
- [ ] All pages have CTA
- [ ] Internal linking complete
- [ ] Sitemap updated
- [ ] Build passes
