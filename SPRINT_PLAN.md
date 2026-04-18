# Gold IRA × AngelGuard — Full Site Migration Sprint Plan
**Started:** 18 april 2026 · Hugo + Claude Opus 4
**Homepage DONE ✅** — dark navy + warm gold + Playfair Display serif live op `localhost:3012`
**Scope:** 338 totale `page.tsx` files, ~20 template-categorieën

---

## 🎯 Strategie

**Fix templates, niet pagina's.** Een review-template refactor update direct alle 38 review pages. Dit is de kritische multiplier die 338 pagina's beheersbaar maakt.

**Laag-voor-laag benadering:**
1. **Global shell** (Navbar + Footer in `/components/layout/`) → updates alle 338 pages in één keer
2. **Legacy primitives** (oude `Card.tsx`, oude `PremiumCard.tsx`) → elke page die ze gebruikt profiteert
3. **Templates per content-type** (review, LP, guide, tool, comparison) → elk fix scaleert naar 10-50 pages
4. **Specialty hubs** (silver-*, scenarios, senior-protection) → geïsoleerde kleine refactors
5. **Polish + QA** (mobile audit, contrast, lighthouse, remove backups)

**Elke sprint volgt:** Lees huidige template → schrijf nieuwe versie met `Button`/`CardV2`/`BadgeV2` primitives → test 1-2 concrete pagina's visueel → commit staged.

---

## Status na Sprint 0 (klaar)

- `globals.css` — dark navy tokens + hero-gradient + section-wash ✅
- `layout.tsx` — Playfair Display + Inter + JetBrains Mono (variables op `<html>` zodat heel DOM erft) ✅
- `Button.tsx` — 5 nieuwe variants + legacy variants re-skinned ✅
- `CardV2.tsx` — 6 variants + severity left-bar + hoverable motion ✅
- `BadgeV2.tsx` — 7 variants + pulse dot ✅
- `src/components/home/v2/` — NavbarV2, HeroSectionV2, TrustBar, ProblemSection, CompaniesTeaser, HowItWorksSection, ProofSection, CTASection, FooterV2 ✅
- `page.tsx` — nieuwe homepage, oude in `page.old.tsx.bak` ✅

**Legacy pages op dit moment:** Alle 337 andere routes erven de dark `<body>` + token changes maar gebruiken nog oude `Navbar`/`Footer`/`Card`/`PremiumCard`. Voelt half-af tot Sprint 1 draait.

---

## SPRINT 1 — Global Shell + Legacy Primitives (4-5 u)
**Doel:** In één klap voelen alle 338 pages direct "zelfde website" als de nieuwe homepage.

### Taken
1. **Replace Navbar globally**
   - Vervang `@/components/layout/Navbar` imports door `@/components/home/v2/NavbarV2` in ALLE layout files
   - Of beter: herschrijf `src/components/layout/Navbar.tsx` intern om `NavbarV2` te exporteren (1 symlink = alle pages updaten)
   - Extract nav-items naar data-file voor makkelijk beheer

2. **Replace Footer globally**
   - Idem voor `Footer.tsx` → `FooterV2`
   - Zelfde strategie

3. **Legacy Card.tsx → dark**
   - `src/components/ui/card.tsx` (lowercase, oude shadcn one) — hardcoded `text-white` is toevallig dark-ok, maar vervang `border-white/10 bg-white/5` met echte `bg-[#161828] border-[#2A2D42]`
   - Elke component die dit importeert krijgt direct een bruikbaar dark theme

4. **Legacy PremiumCard.tsx → echte glass**
   - `src/components/ui/PremiumCard.tsx` — glass was designed voor dark, nu eindelijk op een dark bg
   - Variants `default/glow/subtle` re-skinnen met nieuwe tokens

5. **Legacy Badge.tsx → dark**
   - `src/components/ui/Badge.tsx` — navy/red badges → gold/dark badges matching BadgeV2

6. **Callout.tsx → dark**
   - Info/tip/warning/success callouts: swap `bg-blue-50 border-blue-200` naar `bg-blue-500/10 border-blue-500/30 text-blue-300`

7. **Container.tsx → breedere max (optioneel)**
   - Overweeg `max-w-7xl` → `max-w-[1280px]` met nieuwe responsive padding

### Verificatie
- Spot-check: `/about-us`, `/faq`, `/glossary`, `/quiz`, `/reviews/augusta-precious-metals` — alles dark? Nav + footer match?
- Build: `npm run build` zero errors
- Mobile: resize naar 375px, check hamburger werkt

### Output
~6 file edits = hele site voelt dark + navy + gold.

---

## SPRINT 2 — Reviews Template (5-6 u)
**Doel:** 38 review pages in één template-refactor.

### Waarom eerst reviews?
Reviews zijn de revenue-drivers (affiliate CTAs). Hoogste conversie-impact per effort.

### Taken
1. **Analyseer huidige review-structuur**
   - Read: `/reviews/augusta-precious-metals/page.tsx`, `/reviews/goldco/page.tsx`, `/reviews/[company]/page.tsx` dynamic
   - Identificeer shared blocks: hero, rating, pros/cons, fees table, verdict, FAQ, affiliate CTA
   - Check of er al een `ReviewLayout.tsx` component bestaat

2. **Nieuwe ReviewLayout in `src/components/reviews/v2/`**
   ```
   ReviewHero.tsx          — serif company name, 5-star rating, Editor's score pill, "Best for" tagline
   RatingStatsBar.tsx      — BBB, TrustPilot, BCA — horizontaal gold/neutral badges
   ProsConsCard.tsx        — 2-kolom kaarten (pros gold accent, cons critical severity)
   FeesPanel.tsx           — Card variant="comparison" met fee-rows
   VerdictCard.tsx         — Card variant="featured" + serif quote-style verdict
   ReviewFAQ.tsx           — accordion met AnimatePresence
   AffiliateCTA.tsx        — gold primary button + trust-row
   RelatedReviews.tsx      — 3 related company cards
   ```

3. **Refactor top-5 reviews (Augusta, Goldco, Noble, Hartford, Birch)**
   - Die zijn SEO-winners, visueel eerst perfect
   - Complaint pages (Augusta lawsuit, Goldco lawsuit, Regal Assets lawsuit) — zelfde layout maar `severity="warning"` accent

4. **Dynamic `/reviews/[company]/page.tsx` update**
   - Gebruikt ReviewLayout voor alle remaining 30+ companies

5. **Reviews index `/reviews/page.tsx`**
   - Card grid, `variant="default" hoverable` per review, Augusta featured

### Verificatie
- 3 review pages visueel OK op 375/1024/1440
- Affiliate links behouden (`getTrackedLink` helpers untouched)
- Schema.org Review markup behouden

### Output
38 review pages via 1 layout + 8 nieuwe sub-components.

---

## SPRINT 3 — Calculators / Tools (5-7 u)
**Doel:** 47 calculator pages in één shell.

### Taken
1. **Nieuwe `CalculatorShell.tsx`**
   - Hero: serif title + description + live spot-price chip
   - Main: `Card variant="hero" padding="lg"` wrapping existing calculator component
   - Sidebar (lg:): related calculators Card grid + methodology link
   - Bottom: FAQ + CTA card

2. **Dark-mode alle input elementen**
   - Global `<input>`, `<select>`, `<textarea>` styles via @layer base in globals.css:
     ```css
     input, select, textarea {
       background: var(--color-navy-elevated);
       border: 1px solid var(--color-border-subtle);
       color: var(--color-text-primary);
     }
     input:focus { border-color: var(--color-gold-base); }
     ```
   - Sliders (@radix-ui/react-slider) — custom CSS voor dark track + gold thumb

3. **Recharts dark theme**
   - Alle calculator pages die `recharts` gebruiken krijgen shared `<ChartTheme>` wrapper
   - CartesianGrid stroke `#2A2D42`, Axis tick fill `#A8A39A`, Tooltip bg `#161828`
   - Series colors: gold primary line `#D4A94E`, secondary `#4A6FA5`, critical `#DC2626`

4. **Top-10 tools eerst visueel perfect**
   - `/tools/gold-ira-calculator` ⭐ (link vanuit hero)
   - `/tools/retirement-calculator`
   - `/tools/fire-calculator`
   - `/tools/social-security-calculator`
   - `/tools/pension-vs-lump-sum-calculator`
   - `/tools/monte-carlo-retirement-simulator`
   - `/tools/crash-simulator`
   - `/tools/401k-risk-analyzer`
   - `/tools/gold-allocation-calculator`
   - `/tools/rmd-calculator`

5. **Remaining 37 tools** krijgen automatisch de shell
   - `/tools/page.tsx` — tools index page: Card grid met categorie-filters

### Verificatie
- Test één calculator full-flow: input → result → chart
- Check Recharts readable op dark
- Mobile: calculator scrollable, sliders werken touch

### Output
47 tool pages + shared dark chart theme.

---

## SPRINT 4 — Landing Pages + Comparison (4-5 u)
**Doel:** 17 LPs + 16 comparison pages — de paid-ads entry points.

### Taken
1. **LPLayout.tsx** (`src/components/lp/v2/`)
   - Minimal header (geen nav-links, alleen logo + compliance)
   - Above-fold: serif headline + pain point + primary CTA (gold)
   - Social proof strip
   - Single affiliate partner featured card
   - Gated lead magnet (free guide) — Card variant="featured" met email capture
   - Trust footer (minimal, geen menu)

2. **Refactor top-3 LPs**
   - `/lp/free-gold-ira-kit`
   - `/lp/401k-gold-rollover`
   - `/lp/gold-ira-rollover`

3. **Remaining 14 LPs** — adapteer tekst, zelfde layout

4. **ComparisonTable.tsx** (de bestaande home component)
   - Convert naar `Card variant="comparison"` per row
   - Header row: tactical mono labels
   - Rank badges: gold gradient for #1, dark for rest
   - Rating stars: gold fill
   - CTA column: Button size="sm" variant="primary"

5. **/compare/[comparison]/page.tsx** dynamic + 15 specifieke comparison pages
   - Zelfde template met side-by-side matrix
   - "Winner" badge met gold glow op winnaar column

### Verificatie
- 1 LP mobile + desktop visual check
- Comparison table: readable op 375px (horizontal scroll of stacked)
- Embedded Stripe / form flows nog werkend

### Output
33 high-conversion pages geupgraded.

---

## SPRINT 5 — Guide + Learn + Educational (5-6 u)
**Doel:** 23 guides + 38 learn articles + 5 why-gold pages = **66 content pages**.

### Taken
1. **ArticleLayout.tsx** (`src/components/article/v2/`)
   - Hero: breadcrumbs + eyebrow (category) + serif h1 + author chip + read time
   - Main content: `.prose` (already dark-skinned in globals.css Sprint 0)
   - Sidebar (xl:): TOC sticky, related articles card, newsletter signup
   - Footer: author bio card, related articles carousel, CTA

2. **Prose refinement**
   - Already updated `.prose` tokens in globals.css
   - Add: drop-cap on first paragraph via `.prose > p:first-of-type::first-letter`
   - Pull quotes: `<blockquote>` styling (serif italic, gold left border)
   - Callouts (info/warning/tip) via Callout.tsx v2

3. **Guide index `/guide/page.tsx`** + **Learn index `/learn/page.tsx`**
   - Card grid van topics, grouped by cluster (Rollover, Fees, Taxes, etc.)

4. **Why-Gold hub + 5 articles**
   - `/why-gold/page.tsx` hub: Card grid + feature highlight
   - `/why-gold/central-banks-buying-gold`, `/why-gold/inflation-protection`, etc.

5. **Rich-Dad-Strategy pages (2)** — branded content cluster
   - Gebruik Card variant="featured" met drop-cap hero

### Verificatie
- Reading experience on mobile: line-height, font-size
- Contrast check prose tokens
- TOC scroll-spy werkt

### Output
66 article-type pages via 1 layout + sidebar + TOC.

---

## SPRINT 6 — Silver Content Hub (6-8 u)
**Doel:** **120+ silver-cluster pages** (de grootste categorie qua volume!).

Sub-hubs:
- `/buy-sell-silver/` (10 pages)
- `/silver-ira/` (10 pages)
- `/silver-price/` (8 pages)
- `/silver-products/` (17 pages)
- `/silver-retirement/` (9 pages)
- `/silver-squeeze/` (14 pages)
- `/silver-stocks/` (2 pages)
- `/silver-coin-values/` (9 pages)
- `/silver-dealer-reviews/` (8 pages)
- `/silver-experts/` (7 pages)

### Taken
1. **SilverHubLayout.tsx**
   - Hero: silver-themed (cool-tone accent `#B6B3AD` als secondary tegen gold primary)
   - Navigation sub-bar: chips voor sub-hub switching
   - Live Silver spot-price chip in hero
   - Main: Card grid per categorie met silver-toned eyebrows

2. **SilverProductCard.tsx** voor `/silver-products/*`
   - Image + type + IRA-approved badge + spec list + buying CTA

3. **SilverExpertCard.tsx** voor `/silver-experts/*`
   - Portrait + name + bio + quotes + social links

4. **Reuse ArticleLayout** voor content-heavy pages (squeeze, retirement, coin-values)

5. **Reuse ReviewLayout** voor `/silver-dealer-reviews/*`

6. **SilverPriceChart.tsx** — Recharts dark + silver tone gradient fill

### Verificatie
- Top-3 silver hubs (buy-sell-silver, silver-ira, silver-squeeze) visueel perfect
- Silver spot ticker pulls live (of mock) in all hubs

### Output
120+ pages gecleand in één mega-refactor.

---

## SPRINT 7 — Quiz + Interactive + Specialty (4-5 u)
**Doel:** Conversion-kritieke interactive flows + specialty niches.

### Taken
1. **Quiz redesign** (`/quiz/page.tsx`)
   - Full-screen modal/wizard in Card variant="hero"
   - Progress bar: gold gradient, tactical mono step counter
   - Question cards: radio/multi-select met gold-accent selected state
   - Result screen: serif "Your Match" hero + matched-custodians cards
   - Keep existing logic, restyle shell

2. **Scenarios hub** (`/scenarios/page.tsx` + [slug])
   - Crisis scenarios: dollar collapse, stock crash, hyperinflation
   - Severity="critical" left-bar on scenario cards

3. **Senior Protection + Medicaid + Widow Guide**
   - Softer tone: Card variant="default" with generous padding
   - Warmer copy, larger body text (18px+)

4. **Grandchildren + Rich-Dad-Strategy**
   - Feature-card style with testimonial inserts

5. **Rollover hub** (`/rollover/page.tsx` + [slug])
   - Step-by-step flow: Card variant="stat" per step, arrows between

6. **Local SEO** (`/local/[state]/[city]`)
   - Template met map, local custodian list, state-specific tax notes

### Verificatie
- Quiz werkt full-flow
- Keyboard navigation op quiz buttons

### Output
Top-10 interactive / specialty pages, fallback template voor dynamic [slug] routes.

---

## SPRINT 8 — Meta + Admin + Polish + Deploy (3-5 u)
**Doel:** Clean up en ship.

### Taken
1. **Meta pages** (10 pages)
   - `/about-us`, `/faq`, `/glossary`, `/privacy-policy`, `/terms-of-service`, `/editorial-policy`, `/contact`, `/thank-you`, `/academy`, `/resources`
   - Simpele gelijkvormige template met serif h1 + prose body + CTA

2. **Admin pages** (optional)
   - `/admin/conversions`, `/audit`, `/design-concept`, `/preview/*`
   - Low priority — intern gebruikt

3. **Dynamic [slug] fallback layouts**
   - `[company]`, `[audience]`, `[slug]`, `[state]`, `[city]`, `[age]`, `[asset]`, `[comparison]`
   - Check dat alle fallbacks een ArticleLayout of ReviewLayout erven

4. **Full build + type-check**
   ```bash
   npm run build
   npm run lint
   ```
   Zero errors, minimal warnings.

5. **Lighthouse audit**
   - Homepage + 1 review + 1 tool + 1 guide
   - Target: Performance 90+, Accessibility 95+, SEO 95+

6. **Mobile audit (375px)**
   - Spot-check 20 pages, fix overflow/wrapping bugs

7. **Contrast audit**
   - Automated via `axe-core` or manual via DevTools
   - `--text-tertiary` op elke bg-variant

8. **Remove backups**
   ```bash
   rm src/app/page.old.tsx.bak
   rm src/app/globals.css.bak
   rm src/app/layout.tsx.bak
   ```

9. **Git commit strategie**
   ```
   feat(ui): migrate to AngelGuard dark navy + warm gold — globals + primitives
   feat(ui): new v2 homepage (hero + trust + threats + companies + how + proof + cta + footer)
   feat(reviews): migrate 38 review pages to ReviewLayout v2
   feat(tools): migrate 47 calculators to CalculatorShell v2 + Recharts dark theme
   feat(lp+compare): 33 pages to new LPLayout + ComparisonTable v2
   feat(articles): 66 guide/learn/why-gold pages to ArticleLayout v2
   feat(silver): 120+ silver-cluster pages migrated
   feat(quiz+specialty): quiz redesign + scenarios + local SEO
   chore(cleanup): remove backups, final polish
   ```

10. **Deploy**
    ```bash
    npx vercel --prod
    ```
    Watch first 10 minutes for regressions. Rollback plan ready.

### Verificatie
- Production URL smoke test: homepage, 2 reviews, 1 calculator, 1 guide, 1 LP
- Check affiliate tracking still fires
- GA/GTM/Clarity pixels still fire

### Output
338 pages live met AngelGuard-grade UI. Klaar om paid traffic te scalen.

---

## 📊 Sprint Totaal

| Sprint | Focus | Pages | Effort | Priority |
|--------|-------|-------|--------|----------|
| 0 | Homepage + primitives | 1 | ✅ klaar | — |
| 1 | Global shell + legacy prims | 338 (indirect) | 4-5 u | 🔴 MUST |
| 2 | Reviews template | 38 | 5-6 u | 🔴 MUST (revenue) |
| 3 | Tools / Calculators | 47 | 5-7 u | 🟡 HIGH |
| 4 | LPs + Comparison | 33 | 4-5 u | 🔴 MUST (ads) |
| 5 | Guide + Learn + Why-Gold | 66 | 5-6 u | 🟡 HIGH (SEO) |
| 6 | Silver content hub | 120+ | 6-8 u | 🟢 MED |
| 7 | Quiz + specialty | ~20 | 4-5 u | 🟡 HIGH (conversion) |
| 8 | Meta + polish + deploy | ~10 + audit | 3-5 u | 🔴 MUST |

**Total: 36-47 uur effort voor 338 pagina's** = ~8 focussed sessies

---

## 🚦 Aanbevolen volgorde (revenue-impact ordered)

1. **Sprint 1** (global shell) — ONMIDDELLIJK waarde op alle pages
2. **Sprint 2** (reviews) — direct revenue, Augusta/Goldco zijn top-earners
3. **Sprint 4** (LPs + compare) — ads-landing dark shell = hogere conversie
4. **Sprint 3** (tools) — SEO-heavy, lead-capture via calculator gate
5. **Sprint 7** (quiz + specialty) — lead-capture optimalisatie
6. **Sprint 5** (articles) — SEO snowball
7. **Sprint 6** (silver) — volume, lager per-page impact maar massive SEO surface
8. **Sprint 8** (polish + deploy) — ship it

Hugo kan na Sprint 1+2+4+8 al deployen om de revenue-paginas te upgraden, dan de rest in follow-up deploys.

---

## ⚠️ Hardere regels voor elke sprint

1. **NOOIT revenue-logica aanraken** — alleen visual shell. `getTrackedLink`, affiliate hrefs, quiz submit, stripe handoff, form posts, SEO metadata — alles **restyle-only**.
2. **Altijd backup** voor elke template refactor (`template.tsx.bak`)
3. **Commit per sprint** — niet alles in één mega-commit
4. **Lees voor schrijven** — elke file die je gaat wijzigen, lees eerst
5. **Build test na elke sprint** — `npm run build` moet groen
6. **Spot-check visueel** — 2-3 instances per template voor je doorgaat

---

## 🎨 Design anchors (niet afwijken)

- **Navy base**: `#0C0D18`
- **Gold accent**: `#C5952E` (light `#D4A94E`, dark `#A67D24`)
- **Text**: primary `#F6F4EF` / secondary `#D0CCC4` / tertiary `#A8A39A`
- **Fonts**: Playfair Display (serif headlines) / Inter (body) / JetBrains Mono (data)
- **Buttons**: `rounded-lg` — geen pill, geen sharp
- **Cards**: `rounded-2xl` default, `rounded-[28px]` featured/hero
- **Motion**: button `{scale:1.03, y:-1}`, card `{y:-4, scale:1.01}`, ease `[0.25,1,0.5,1]`
- **Eyebrows**: `text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light`
- **Serif italic** voor accent headline-helft (AngelGuard signature move)

---

**Laatste update:** 18 april 2026
**Reviewed by:** GPT 5.4 + Gemini 3.1 Pro (Phase 2 consensus)
**Reference:** `/Users/hugolol/Desktop/Gerry Obsidian Vault/Universal UI Makeover Playbook.md`
