# Sprint 11 — Homepage Elevation: State-of-the-Art Conversion Machine

**Date:** 2026-03-20
**Architect:** Cowork | **Dev Lead:** Claude Code
**Focus:** Redesign the homepage from a good information page into a world-class conversion machine. Every pixel earns its place.

---

## HONEST ASSESSMENT OF THE CURRENT HOMEPAGE

I scrolled through the entire homepage, read every section, and here's what's wrong:

### What's Working
- The hero headline is strong: "You've Worked 30 Years for This. Don't Let Wall Street Take It Now." — emotionally resonant, speaks directly to the audience
- The $50k+ badge pre-qualifies
- Augusta FeaturedPartner section is well-designed
- The WealthCalculator is interactive and creates urgency
- ComparisonTable is comprehensive

### What's Broken

**1. The hero has NO lead capture above the fold.**
The two hero CTAs are anchor links — "Protect What You've Built" scrolls to #how-it-works and "See Protection Options" scrolls to #compare. Neither captures a lead. Neither goes to `/get-started`. Neither goes to Augusta. A visitor who's already convinced and ready to act has to SCROLL to find a way to engage. First-visit conversion is near zero.

**2. Massive dead space between hero and Authority section.**
After the hero CTAs, there's a full screen of whitespace before the Authority stats appear. On a 1080p screen, the user sees nothing but empty space after the CTA buttons. This is where visitors bounce.

**3. Too many sections — 13 sections, ~8 screens of scrolling.**
Information overload. The page tries to do everything: educate, compare companies, show testimonials, display market data, explain the process, show resources, newsletter signup. A confused mind doesn't convert. Financial services landing pages with <200 words convert BEST (Unbounce data).

**4. No clear single action.**
The page has at least 7 different CTAs pointing to different places: anchor links, Augusta LP, /get-started, /learn, /rollover, /scenarios, newsletter signup, company affiliate links in the comparison table. A visitor doesn't know what to do. Best-converting pages have ONE primary action.

**5. DailyBrief (market prices) is at position 8 — too late and breaks conversion flow.**
Market data is interesting but it doesn't convert. It's a distraction in the middle of the conversion journey. Should be in the navbar ticker (which already exists) or a separate page.

**6. The "Rich Dad Approach" section explains paper vs real assets — but for who?**
Someone who already clicked through to this site probably already knows why gold is good. This section is for people who aren't convinced yet — but it's at position 9, meaning only the most engaged visitors see it. If they scrolled that far, they're already interested. It's in the wrong place.

**7. Resources section (Crisis/Learn/Rollover links) leaks visitors into content.**
At position 11, the Resources section gives visitors 3 exits away from the conversion path. "Browse Articles" sends them to /learn where they might read for 20 minutes and leave. The homepage should keep them in the funnel, not scatter them.

**8. No video or human element.**
The entire page is text and icons. No photos of real people, no video testimonial, no image of gold bars or coins. Financial trust is built through seeing real humans and real products. The testimonials section has initials (R, J, M) but no photos.

---

## THE NEW HOMEPAGE PHILOSOPHY

**One page, one job: Get the visitor to `/get-started`.**

Everything on the homepage exists to move the visitor toward the qualification funnel. Every section either builds trust, creates urgency, or reduces anxiety — and then points to `/get-started`.

**Fewer sections, more impact.** Cut from 13 to 8. Every remaining section earns its place.

**Above-the-fold CTA goes to `/get-started`.** Not an anchor link. Not a secondary action. The primary button in the hero takes them directly to the funnel.

**Social proof is everywhere, not in one section.** Instead of a dedicated testimonials section at position 7, weave proof into every section: inline quotes, trust badges, numbers.

---

## THE NEW HOMEPAGE FLOW (8 Sections)

### Section 1: HERO — The Emotional Hook + CTA
**What changes:**
- Keep the headline, badge, and subtext (they're strong)
- **REPLACE** the two anchor-link CTAs with one primary CTA to `/get-started`:
  ```
  Primary: "Get Your Free Gold IRA Kit →" → /get-started?ref=homepage-hero
  Secondary (smaller): "See How It Works ↓" → anchor to section 2
  ```
- **ADD** a trust strip below the CTAs: `✓ 50,000+ Americans Educated · ✓ A+ BBB Partners · ✓ No Obligation`
- **REMOVE** the 3 stat cards (30+ Years, 5-10 Years, 5,000+ Years) — they're nice but they dilute the CTA. Move "5,000+ Years Gold has held its value" into a one-liner above the CTA.
- **FIX** the whitespace after the hero — remove the excess padding

**Above the fold on desktop should show:**
```
[Navbar with "Get Free Gold Kit" button]
[Badge: For Americans With $50,000+ in Retirement Savings]
[Headline: You've Worked 30 Years for This. Don't Let Wall Street Take It Now.]
[Subtext: But one market crash could wipe out decades of sacrifice.]
[One-liner: Gold has protected wealth for 5,000 years. It can protect yours.]
[BIG CTA: Get Your Free Gold IRA Kit →]
[Trust strip: ✓ 50,000+ Educated · ✓ A+ BBB · ✓ Free, No Obligation]
```

Zero wasted space. The visitor knows what to do within 3 seconds.

### Section 2: SOCIAL PROOF + PAIN → URGENCY
**What it is:** Merge the best of AuthoritySection + a condensed urgency message.

**Layout:**
```
Left column:
  "50,000+ Americans have already protected their retirement."
  [50,000+ Educated] [$2B+ Protected] [4.9/5 Rating] [A+ BBB]

Right column:
  "Central banks bought 1,037 tons of gold in 2023.
   They're preparing. Are you?"
  [CTA: Check Your Options →] → /get-started?ref=homepage-urgency
```

This combines credibility (numbers) with urgency (central banks are buying) in one compact section. No separate urgency section needed later.

### Section 3: WEALTH CALCULATOR — Make the Pain Real
**Keep as-is.** This is the best interactive element on the page. Shows the dollar-for-dollar difference between cash and gold over time.

**One change:** After the calculator shows results, the CTA should go to `/get-started`:
```
"Lock In These $215,892 Gains" → /get-started?ref=calculator&context=wealth-calculator
```
NOT an anchor link. Not a generic button. Direct to funnel with context.

### Section 4: AUGUSTA FEATURED PARTNER — The Solution
**Keep mostly as-is.** This is well-designed.

**Changes:**
- Make the "Get Your Free Gold IRA Kit" button go to `/get-started?ref=homepage-featured` (funnel, captures lead data) instead of the current `openModal`
- Add a small "Minimum investment: $50,000" note directly below the CTA button (already exists as text but make it more prominent)
- Add a micro-testimonial inline: *"The best financial decision we ever made." — Robert & Sarah M., Florida*

### Section 5: HOW IT WORKS — Reduce Anxiety (3 Steps)
**Keep as-is but tighten.** The 3-step process is clean and reduces anxiety.

**Remove:** The "How We Help You Find the Right Company" sub-section with "Unbiased Comparisons / Education First / For Real People" — this is redundant with the trust signals already shown. It adds another screen of scrolling before the next CTA.

**Add:** A CTA at the bottom: "Ready to Start? It Takes 10 Minutes →" → `/get-started`

### Section 6: COMPANY COMPARISON TABLE — For Researchers
**Keep as-is.** This is essential for comparison shoppers.

**Change:** Each company's CTA should use tracked affiliate links (already done in Sprint 2).

### Section 7: TESTIMONIALS — Social Proof
**Keep but condense.** 3 testimonials is fine.

**Change:** Add a photo placeholder (or styled avatar) next to each testimonial. Even a circular gradient with initials looks more human than a plain letter.

**Add:** Below testimonials: "Join 50,000+ Americans who've protected their retirement. [Get Your Free Kit →]" → `/get-started`

### Section 8: FOOTER CTA — Final Push
**Replace** the current Resources section + Newsletter + TrustBadges with ONE strong closing section:

```
"The Best Time to Protect Your Wealth Was 10 Years Ago.
 The Second Best Time Is Today."

[Get Your Free Gold IRA Kit →] → /get-started?ref=homepage-footer

✓ Free consultation · ✓ No obligation · ✓ Takes 2 minutes
✓ A+ BBB Rated Partners · ✓ IRS-Approved Depositories
```

Then the footer navigation below.

---

## SECTIONS REMOVED (and why)

| Removed Section | Reason | Where Content Goes |
|----------------|--------|-------------------|
| DailyBrief (market prices) | Breaks conversion flow, better on /news or navbar ticker | Keep the navbar live price ticker |
| ValueProps (Rich Dad approach) | Position 9 = almost nobody sees it. Interested visitors already know why gold is good | Move key point into hero one-liner or Section 2 |
| UrgencySection ("Window Is Closing") | Merged into Section 2 (Social Proof + Urgency) | Central bank stat moves to Section 2 |
| Resources (Crisis/Learn/Rollover links) | Leaks visitors away from conversion path | Footer navigation handles this |
| Newsletter signup | Not the homepage job. Newsletter capture happens via exit intent + email sequences | Exit intent popup + dedicated /newsletter page |

**Net result: 13 sections → 8 sections.** ~40% shorter page. Every remaining section drives toward `/get-started`.

---

## CTA CONSISTENCY

**Every CTA on the homepage goes to the same place:**

| CTA | Location | Destination |
|-----|----------|-------------|
| Navbar "Get Free Gold Kit" | Sticky header | `/get-started?ref=navbar` |
| Hero primary button | Section 1 | `/get-started?ref=homepage-hero` |
| Section 2 "Check Your Options" | After urgency | `/get-started?ref=homepage-urgency` |
| WealthCalculator result CTA | Section 3 | `/get-started?ref=calculator` |
| Augusta FeaturedPartner CTA | Section 4 | `/get-started?ref=homepage-featured` |
| How It Works bottom CTA | Section 5 | `/get-started?ref=homepage-how` |
| ComparisonTable (Augusta) | Section 6 | Augusta LP direct (high intent) |
| ComparisonTable (others) | Section 6 | Partner affiliate links |
| Post-testimonials CTA | Section 7 | `/get-started?ref=homepage-social-proof` |
| Footer CTA | Section 8 | `/get-started?ref=homepage-footer` |
| Mobile sticky bar | Bottom | `/get-started?ref=mobile-sticky` |

**Count: 8 CTAs to `/get-started`, 1 direct to Augusta (ComparisonTable), partner links in ComparisonTable.** All tracked with unique `ref` params for source attribution.

---

## MOBILE-SPECIFIC CHANGES

55%+ of visitors are on mobile. The homepage must work perfectly on a phone.

1. **Hero on mobile:** Badge → Headline → One-liner → CTA → Trust strip. All visible without scrolling on a 390px wide screen.
2. **Remove stat cards on mobile** (the 30+ Years / 5-10 Years / 5,000+ Years grid doesn't stack well)
3. **Sticky bottom CTA bar** (already exists from Sprint 1) — verify it links to `/get-started`
4. **WealthCalculator:** Verify the sliders work smoothly on touch screens
5. **ComparisonTable:** Should show card view on mobile (stacked), not a wide table

---

## PART 2: VISUAL DESIGN & UX OVERHAUL

This is the design layer that the content flow plan above doesn't cover. The current homepage has significant visual and UX problems beyond just section ordering.

### DESIGN CRITIQUE: What's Wrong Visually

**Compared to Augusta's own site** (their homepage has a hero photo of a real couple holding gold bars, a lead capture form above the fold, warm tones, and a single clear action), our homepage looks like a text document with rounded rectangles.

#### D1: No Hero Imagery — Just Text on a Flat Background
**Problem:** The hero section is white/light gray text on a pale background with a faint blue diagonal stripe. No photo. No gold imagery. No human element. It looks like a blog post, not a premium financial services site.

**Fix:** Add a hero visual. Options (ordered by impact):
- **Option A (best):** Split-layout hero — text on left, image of gold bars/coins or a couple reviewing finances on right. Similar to Augusta's approach but with our design language.
- **Option B:** Full-width background image with text overlay — gold bullion, vault imagery, or a desaturated photo with navy overlay.
- **Option C (minimal):** Keep text-only hero but add a gold coin/bar illustration or icon next to the headline. Even a small visual breaks the text monotony.

**Images are ready in `/public/images/homepage/`:**

| File | Usage | Notes |
|------|-------|-------|
| `hero-gold-bars.jpg` | Hero split-layout (right side) | 1kg Argor-Heraeus gold bars + coins on black. Crop/darken edges to blend with navy bg. |
| `testimonial-couple.jpg` | Robert & Sarah M., Florida | Warm couple portrait. Crop to circle for testimonial avatar. |
| `testimonial-man.jpg` | James D., Texas | Man with glasses, blue shirt. Crop to circle. |
| `testimonial-woman.jpg` | Margaret H., Arizona | White-haired woman, confident. Crop to circle. |

Claude Code should convert these to avif/webp using Next.js `<Image>` component with `priority` on the hero image. Testimonial images should be cropped to 96x96px circles via CSS `rounded-full` + `object-cover`.

#### D2: Massive Dead Space Between Sections
**Problem:** The transition from hero to AuthoritySection has nearly a full viewport of empty space. The hero section has `py-20 md:py-32` (massive padding), and the Authority section starts with its own `py-20`. Combined, there's ~200px of dead space where users see nothing.

**Fix:**
- Reduce hero bottom padding: `py-20 md:py-24` (not `md:py-32`)
- Remove top padding from Authority section when it directly follows the hero
- Consider making the Authority stats (50,000+ / $2B+ / 4.9 / A+) a floating bar that overlaps both sections — reduces visual gap and creates a premium layered effect.

#### D3: Color Palette Feels Institutional, Not Premium
**Problem:** Navy (#000080) + white + light gray = looks like a government website or a bank from 2015. There's no warmth, no gold, no premium feel. The brand is about GOLD, but gold barely appears in the design. The amber/gold accent (`amber-400/500`) is only used on the navbar CTA button and a few hover states.

**Fix:** Introduce gold as a primary accent throughout the homepage:
- Hero badge: gold background instead of `bg-[#000080]/10`
- Stat cards: subtle gold border or gold accent line
- Section dividers: thin gold line instead of gray borders
- CTA buttons: gold gradient options (not just navy and red)
- Headings: selective gold underline or highlight on key words
- Create a warm-to-cool gradient flow: hero (warm gold tones) → middle sections (balanced) → comparison table (cool analytical)

Gold hex suggestions: `#C5A55A` (warm gold), `#D4AF37` (classic gold), `#B8860B` (dark gold)

#### D4: Typography Lacks Hierarchy Rhythm
**Problem:** The serif font (Playfair Display) is used for headlines, Inter for body — but the sizing and weight don't create a clear visual rhythm. The hero headline is huge (`text-7xl`), then the subtext is also large (`text-2xl`), then the stat cards use `text-3xl` bold. Everything feels big and equally weighted.

**Fix:**
- Create clear type scale: Hero H1 (7xl) → Section H2 (3xl-4xl) → Card headings (xl-2xl) → Body (base-lg)
- Use font weight more intentionally: `font-black` only for the hero H1, `font-bold` for section headings, `font-semibold` for card headings
- Add more contrast between heading and body text — increase body text lightness (slate-500 instead of slate-700)

#### D5: Cards Look Generic — No Visual Identity
**Problem:** All cards (stat cards, feature cards, testimonial cards) use the same rounded white rectangle with light border. They look like every other template site. No brand identity.

**Fix:**
- Give different card types different visual treatments:
  - Stat cards: minimal, just number + label, no card border — use spacing and typography to separate
  - Feature cards (How It Works): subtle left-border accent in gold
  - Testimonial cards: larger pull-quote styling with gold quotation marks, warmer background
  - Comparison cards: stronger visual hierarchy with ranking badges
- Add subtle texture or gradient backgrounds to alternate sections (gold-tinted bg for key sections)

#### D6: No Micro-Interactions or Motion
**Problem:** Framer Motion is loaded but barely used on the homepage. The fade-in-up animations exist but they're the same `fadeInUp 0.6s` on everything. No scroll-triggered reveals, no counter animations on stats, no hover depth on cards.

**Fix:**
- **Counter animation:** 50,000+ counts up from 0 when scrolled into view
- **Staggered reveals:** Cards animate in sequence (0.1s delay each), not all at once
- **Parallax-lite:** Hero background stripe moves slightly on scroll
- **Hover depth:** Cards lift with shadow increase on hover (already partially done, make it more pronounced)
- **Progress indicator:** Subtle scroll progress bar in the navbar (gold line that fills left-to-right as user scrolls)

#### D7: Testimonials Need Visual Credibility
**Problem:** Three testimonials with letter avatars (R, J, M). No photos. No company logos. No verification badges. They look fabricated even if they're real.

**Fix:**
- Add state-specific details (already there: Florida, Texas, Arizona — good)
- Style the quote marks as large decorative gold quotes (`"`) — makes it feel editorially designed
- Add a small "Verified Reviewer" badge or star rating beneath each testimonial
- **ADD headshot photos** — images are in `public/images/homepage/`:
  - `testimonial-couple.jpg` → Robert & Sarah M., Florida
  - `testimonial-man.jpg` → James D., Texas
  - `testimonial-woman.jpg` → Margaret H., Arizona
  - Use Next.js `<Image>` with `width={96} height={96}` + `className="rounded-full object-cover"`

#### D8: Mobile Sticky Bar is Red on White — Clashes
**Problem:** The mobile sticky CTA bar is a full-width red bar. While it's visible, it looks like an error banner or warning, not a premium CTA.

**Fix:** Make it navy with gold accent, matching the brand:
- Background: `bg-[#000080]` or dark navy gradient
- Text: white with gold arrow icon
- Or: gold background with dark text — feels premium, stands out without feeling like an alert

### UX ISSUES

#### UX1: Hero CTAs Are Anchor Links (Critical — Already in Sprint 11 Content Plan)
Both hero buttons scroll the page instead of converting. Covered in the content plan above.

#### UX2: No Scroll Indicator
**Problem:** The hero fills the entire viewport. Users don't know there's more content below. No arrow, no "scroll down" indicator, no peek of the next section.

**Fix:** Add a subtle animated chevron or "Scroll to explore" at the very bottom of the hero viewport. CSS animation bouncing up/down gently.

#### UX3: Navbar Doesn't Collapse to Sticky on Scroll
**Problem:** The navbar stays the same height whether at top or mid-page. When scrolling through a 13-section page, the navbar takes up premium vertical space.

**Fix:** Implement a condensed navbar on scroll — smaller logo, tighter padding, semi-transparent background with backdrop-blur. The "Get Free Gold Kit" CTA stays prominent.

#### UX4: Section Transitions Are Abrupt
**Problem:** Every section is a hard rectangle. White section → dark section → white section with hard borders. No visual flow between sections.

**Fix:**
- Use subtle curve dividers (SVG wave or angled) between key sections
- Alternate background warmth: warm gold-tinted → white → warm → white
- Section padding consistency — currently varies wildly (`py-16` to `py-32`)

### ACCESSIBILITY ISSUES

#### A1: Color Contrast
- Red text (#B22234) on light gray background: borderline contrast ratio (~4.2:1, needs 4.5:1 for AA)
- Navy text on light blue hero background: acceptable but could be stronger
- Gold/amber text on white: likely fails contrast on small text

#### A2: Touch Targets
- Hero buttons look adequate (py-4 px-8)
- Mobile sticky bar: adequate height
- Stat cards: not interactive, so N/A

#### A3: Font Sizes
- Hero body text at `text-xl` is readable
- Stat card descriptions at `text-sm` are small for 55+ audience — bump to `text-base`
- Footer links: too small for target demographic

---

## PERFORMANCE CONSIDERATIONS

1. **No new heavy libraries.** Use existing Framer Motion sparingly.
2. **Hero loads instantly** — no dynamic imports for the hero section. It's static HTML + CSS.
3. **Below-fold components lazy loaded** — already implemented with `dynamic()` imports.
4. **Images:** If adding hero imagery, use Next.js `<Image>` with avif/webp and `priority` prop.
5. **LCP target: < 2.5s.** The hero text + CTA button should be the LCP element.
6. **Font preloading:** Ensure Inter + Playfair Display are preloaded in layout.

---

## EXECUTION ORDER

```
PHASE 1: Hero overhaul
  1. Replace hero CTAs — primary goes to /get-started, secondary is anchor
  2. Remove stat cards from hero (or move to mobile-hidden)
  3. Add one-liner about gold's 5,000-year track record
  4. Add trust strip below CTA
  5. Fix whitespace/padding after hero

PHASE 2: Section consolidation
  6. Merge AuthoritySection + UrgencySection into new Section 2 (Social Proof + Urgency)
  7. Remove DailyBrief from homepage
  8. Remove ValueProps (Rich Dad approach) from homepage
  9. Remove Resources section from homepage
  10. Remove Newsletter section from homepage

PHASE 3: CTA consistency
  11. WealthCalculator result CTA → /get-started
  12. FeaturedPartner CTA → /get-started (via openModal "funnel" path)
  13. Add CTA at bottom of HowSection
  14. Add CTA after testimonials
  15. Create closing Section 8 (final push CTA)

PHASE 4: Polish
  16. Condense HowSection (remove "How We Help" sub-section)
  17. Enhance testimonials with styled avatars
  18. Verify mobile layout — hero fits above fold, sticky bar works
  19. Verify all CTA ref params are unique and tracked

PHASE 5: Verification
  20. npm run build — zero errors
  21. Visual check: desktop + mobile
  22. Click every CTA — verify all go to /get-started or correct affiliate
  23. Check page load speed (Lighthouse)
  24. Verify no removed sections break any other page's links
```

---

## WHAT THE HOMEPAGE LOOKS LIKE AFTER

```
DESKTOP ABOVE THE FOLD:
┌─────────────────────────────────────────────────────────────┐
│ 🟢 Gold $5,350 (+0.8%) | 🇺🇸 American Owned & Operated     │
├─────────────────────────────────────────────────────────────┤
│ [R] RICH DAD  Why Gold? How It Works Best Companies  [Get Free Gold Kit] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│          For Americans With $50,000+ in Retirement Savings  │
│                                                             │
│           You've Worked 30 Years for This.                  │
│        Don't Let Wall Street Take It Now.                   │
│                                                             │
│   One market crash could wipe out decades of sacrifice.     │
│   Gold has protected wealth for 5,000 years. It can         │
│   protect yours.                                            │
│                                                             │
│         [  Get Your Free Gold IRA Kit  →  ]                 │
│              See How It Works ↓                             │
│                                                             │
│   ✓ 50,000+ Educated  ✓ A+ BBB Partners  ✓ No Obligation  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

SCROLL 1: Social Proof + Urgency
┌─────────────────────────────────────────────────────────────┐
│  [50,000+]  [$2B+]  [4.9/5]  [A+]    │  Central banks     │
│  Educated   Protected Rating  BBB     │  bought 1,037 tons │
│                                       │  in 2023. They're  │
│  ✓ BBB Accredited Partners           │  preparing.        │
│  ✓ IRS-Approved Depositories         │  Are you?          │
│  ✓ Segregated Storage                │                    │
│  ✓ Full Insurance Coverage           │  [Check Options →] │
└─────────────────────────────────────────────────────────────┘

SCROLL 2: Wealth Calculator (interactive)
SCROLL 3: Augusta Featured Partner (the answer)
SCROLL 4: How It Works (3 steps)
SCROLL 5: Company Comparison Table
SCROLL 6: Testimonials + CTA
SCROLL 7: Final closing CTA
FOOTER
```

**Total scrolls: ~7 on desktop (down from ~12).** Every scroll has purpose. Every scroll moves toward `/get-started`.

---

## EXPECTED IMPACT

| Metric | Before | After |
|--------|--------|-------|
| Above-fold CTA to /get-started | 0 (anchor links only) | 1 primary |
| Total CTAs to /get-started | ~2 | 8 |
| Sections | 13 | 8 |
| Page length (scrolls) | ~12 | ~7 |
| CTAs pointing to different destinations | 7+ different | 1 primary (funnel) + company links |
| Dead space / no-CTA zones | Multiple | Zero |
| Time to first CTA | After 2 scrolls | Immediate (above fold) |

---

RALPH_STATUS:
- PHASE: Sprint 11 (Homepage Elevation)
- TASK: Plan complete — ready for Claude Code
- PROGRESS: Audit + research + design + plan done
- BLOCKERS: None
