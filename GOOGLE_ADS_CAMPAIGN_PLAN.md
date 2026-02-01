# Google Ads Campaign: Retirement Amount Keywords

## Executive Summary

**Goal:** Capture high-net-worth prospects ($50K+ IRA/401k) searching retirement amount questions
**Payout:** $200/qualified lead (Augusta Precious Metals)
**Target ROAS:** 3:1 minimum (break-even CPA: $66.67)
**Recommended Budget:** $50/day test → scale to $150/day if profitable

---

## Part 1: Keyword Analysis & Intent Mapping

### Tier 1: High-Intent, Low Competition (PRIORITY)

| Keyword | Vol | KD | CPC | Intent | Emotion |
|---------|-----|-----|-----|--------|---------|
| is $1.5 million enough to retire at 60 | 200 | 0 | $0.60 | Validation | Anxiety |
| is $2 million enough to retire at 60 | 200 | 1 | $0.10 | Validation | Cautious optimism |
| is $1.5 million enough to retire at 55 | 150 | 4 | $1.10 | Validation | Early retirement dream |
| is $1 million enough to retire at 55 | 150 | 2 | $0.90 | Validation | Concern |
| is $2 million enough to retire at 55 | 60 | 0 | $0.15 | Validation | Confident but checking |
| can i retire at 60 with $1 million | 30 | 4 | $0.80 | Feasibility | Doubt |
| is $3 million enough to retire at 50 | 10 | 2 | — | Validation | Wealthy, aggressive |

**Total Tier 1:** ~800 searches/month

### Tier 2: Higher Volume, More Competition

| Keyword | Vol | KD | CPC | Intent |
|---------|-----|-----|-----|--------|
| how much do i need to retire at 55 | 1,100 | 56 | $0.60 | Research/Planning |
| how much do i need to retire at 60 | 700 | 47 | $0.45 | Research/Planning |
| how much do i need to retire at 62 | 250 | 58 | $0.35 | Research/Planning |

**Total Tier 2:** ~2,050 searches/month

---

## Part 2: Intent Segmentation

### Segment A: "Is X Enough?" (Validation Seekers)
**Profile:** Already has the money, seeking confirmation
**Emotion:** Anxiety about running out, fear of inflation
**Hook:** Show them the inflation reality, validate concern, offer solution
**CTA:** "See the real math" → Calculator

### Segment B: "Can I Retire With?" (Feasibility Doubters)
**Profile:** Has money but doubts it's enough
**Emotion:** Uncertainty, seeking permission
**Hook:** Reframe from "enough" to "protected"
**CTA:** "It depends on this one factor" → Calculator

### Segment C: "How Much Do I Need?" (Planners)
**Profile:** Still accumulating, researching target numbers
**Emotion:** Goal-oriented, analytical
**Hook:** "The number Wall Street won't tell you"
**CTA:** "Calculate your real number" → Calculator

### Segment D: "Early Retirement" (50-55 age targets)
**Profile:** Ambitious, higher income, aggressive timeline
**Emotion:** Impatient, wants freedom NOW
**Hook:** "Retire 10 years early without running out"
**CTA:** "See if your number works" → Calculator

---

## Part 3: Landing Page Strategy

### LP Architecture Decision: Hybrid Approach

We'll use the **dynamic `/calculator/[slug]`** base but create **intent-specific variants** for higher conversion:

```
/calculator/[slug]                    ← Dynamic base (handles all keywords)
/calculator/retire-early/[slug]       ← Early retirement variant (age 50-55)
/calculator/is-it-enough/[slug]       ← Validation variant (anxiety-focused)
/calculator/how-much/[slug]           ← Planning variant (analytical)
```

### Landing Pages to Build

| LP Path | Target Keywords | Unique Angle |
|---------|-----------------|--------------|
| `/calculator/is-1.5-million-enough-to-retire-at-60` | is $1.5M enough at 60 | Most common, baseline |
| `/calculator/is-2-million-enough-to-retire-at-60` | is $2M enough at 60 | Higher wealth, subtle upgrade |
| `/calculator/is-1.5-million-enough-to-retire-at-55` | is $1.5M enough at 55 | Early retirement angle |
| `/calculator/is-1-million-enough-to-retire-at-55` | is $1M enough at 55 | Tighter budget, more fear |
| `/calculator/is-2-million-enough-to-retire-at-55` | is $2M enough at 55 | Comfortable early retirement |
| `/calculator/can-i-retire-with-1-million-at-60` | can I retire with $1M at 60 | Doubt framing, reassurance |
| `/calculator/is-3-million-enough-to-retire-at-50` | is $3M enough at 50 | FIRE crowd, aggressive |
| `/calculator/how-much-to-retire-at-55` | how much to retire at 55 | Planning mode, no number yet |
| `/calculator/how-much-to-retire-at-60` | how much to retire at 60 | Planning mode, standard |
| `/calculator/how-much-to-retire-at-62` | how much to retire at 62 | Near Social Security |

**Total: 10 Landing Pages**

---

## Part 4: Campaign Structure

```
CAMPAIGN: Gold IRA - Retirement Calculator
├── Location: United States only
├── Language: English
├── Budget: $50/day (test) → $150/day (scale)
├── Bid Strategy: Manual CPC → Max Conversions (after 15 conv)
├── Schedule: All day (retirees browse at odd hours)
├── Devices: All (mobile bid +0%)
│
├── AD GROUP 1: $1.5M at 60 [PRIORITY]
│   ├── Keywords:
│   │   ├── [exact] is $1.5 million enough to retire at 60
│   │   ├── [exact] is 1.5 million enough to retire at 60
│   │   ├── [phrase] "1.5 million retire 60"
│   │   └── [phrase] "1.5 million enough retire"
│   ├── Landing Page: /calculator/is-1.5-million-enough-to-retire-at-60
│   ├── Max CPC: $1.00
│   └── Ads: 3 RSAs (see Part 5)
│
├── AD GROUP 2: $2M at 60
│   ├── Keywords:
│   │   ├── [exact] is $2 million enough to retire at 60
│   │   ├── [exact] is 2 million enough to retire at 60
│   │   └── [phrase] "2 million retire 60"
│   ├── Landing Page: /calculator/is-2-million-enough-to-retire-at-60
│   ├── Max CPC: $0.80
│   └── Ads: 3 RSAs
│
├── AD GROUP 3: $1.5M at 55 (Early Retirement)
│   ├── Keywords:
│   │   ├── [exact] is $1.5 million enough to retire at 55
│   │   ├── [exact] is 1.5 million enough to retire at 55
│   │   └── [phrase] "1.5 million retire 55"
│   ├── Landing Page: /calculator/is-1.5-million-enough-to-retire-at-55
│   ├── Max CPC: $1.50
│   └── Ads: 3 RSAs (early retirement angle)
│
├── AD GROUP 4: $1M at 55
│   ├── Keywords:
│   │   ├── [exact] is $1 million enough to retire at 55
│   │   ├── [exact] is 1 million enough to retire at 55
│   │   ├── [exact] can i retire at 55 with 1 million
│   │   └── [phrase] "1 million retire 55"
│   ├── Landing Page: /calculator/is-1-million-enough-to-retire-at-55
│   ├── Max CPC: $1.20
│   └── Ads: 3 RSAs
│
├── AD GROUP 5: $2M at 55
│   ├── Keywords:
│   │   ├── [exact] is $2 million enough to retire at 55
│   │   ├── [exact] is 2 million enough to retire at 55
│   │   └── [phrase] "2 million retire 55"
│   ├── Landing Page: /calculator/is-2-million-enough-to-retire-at-55
│   ├── Max CPC: $0.80
│   └── Ads: 3 RSAs
│
├── AD GROUP 6: $1M at 60 (Doubt/Feasibility)
│   ├── Keywords:
│   │   ├── [exact] can i retire at 60 with $1 million
│   │   ├── [exact] can i retire at 60 with 1 million
│   │   ├── [exact] is $1 million enough to retire at 60
│   │   └── [phrase] "1 million retire 60"
│   ├── Landing Page: /calculator/can-i-retire-with-1-million-at-60
│   ├── Max CPC: $1.00
│   └── Ads: 3 RSAs (reassurance angle)
│
├── AD GROUP 7: $3M at 50 (FIRE/Wealthy)
│   ├── Keywords:
│   │   ├── [exact] is $3 million enough to retire at 50
│   │   ├── [exact] is 3 million enough to retire at 50
│   │   ├── [exact] can i retire at 50 with 3 million
│   │   └── [phrase] "3 million retire 50"
│   ├── Landing Page: /calculator/is-3-million-enough-to-retire-at-50
│   ├── Max CPC: $1.50
│   └── Ads: 3 RSAs (FIRE angle)
│
├── AD GROUP 8: How Much at 55 (Planners) [TIER 2]
│   ├── Keywords:
│   │   ├── [exact] how much do i need to retire at 55
│   │   ├── [phrase] "how much retire 55"
│   │   └── [broad] retire at 55 savings needed
│   ├── Landing Page: /calculator/how-much-to-retire-at-55
│   ├── Max CPC: $0.80
│   └── Ads: 3 RSAs (planning angle)
│
├── AD GROUP 9: How Much at 60 (Planners) [TIER 2]
│   ├── Keywords:
│   │   ├── [exact] how much do i need to retire at 60
│   │   ├── [phrase] "how much retire 60"
│   │   └── [broad] retire at 60 savings needed
│   ├── Landing Page: /calculator/how-much-to-retire-at-60
│   ├── Max CPC: $0.60
│   └── Ads: 3 RSAs
│
└── AD GROUP 10: How Much at 62 (Near SS) [TIER 2]
    ├── Keywords:
    │   ├── [exact] how much do i need to retire at 62
    │   ├── [phrase] "how much retire 62"
    │   └── [phrase] "retire at 62 savings"
    ├── Landing Page: /calculator/how-much-to-retire-at-62
    ├── Max CPC: $0.50
    └── Ads: 3 RSAs

```

---

## Part 5: Ad Copy (Per Ad Group Theme)

### Theme A: Validation ("Is X Enough?")

**RSA 1:**
```
Headlines (15):
1. Is $1.5 Million Enough to Retire?
2. The Inflation Math Nobody Shows You
3. See Your Real Purchasing Power
4. $1.5M Could Become $900K
5. Free Retirement Reality Calculator
6. What Wall Street Won't Tell You
7. The Hidden Tax on Your Savings
8. Calculate Your True Number
9. Trusted by Joe Montana
10. A+ BBB Rated Company
11. No Pushy Sales Calls
12. See Results in 60 Seconds
13. Your $1.5M in 20 Years
14. Inflation Destroys Cash
15. Gold Has Beaten Inflation Since 1971

Descriptions (4):
1. Your $1.5 million could lose 40% of its purchasing power to inflation. See the exact math with our free calculator. Eye-opening results.
2. Most retirement calculators ignore inflation. Ours doesn't. See what your savings will really buy in 10, 20, 30 years. Free instant results.
3. Joe Montana moved his retirement to gold. See the same inflation calculator his advisors use. No signup required.
4. A+ BBB rated. 4.9 stars from 1,847 reviews. See why 23,000+ Americans are protecting their retirement with gold. Free guide.
```

### Theme B: Doubt/Feasibility ("Can I Retire With?")

**RSA 1:**
```
Headlines (15):
1. Can You Retire With $1 Million?
2. The Answer Might Surprise You
3. It Depends on This One Factor
4. $1M Isn't What It Used to Be
5. Free Retirement Feasibility Check
6. See Your Real Retirement Number
7. Inflation Changes Everything
8. What the Calculators Miss
9. Your $1M in Today's Dollars
10. Calculate Your True Buying Power
11. The Question You Should Ask
12. Money Magazine #1 Rated
13. No Financial Advisor Needed
14. Results in Under 2 Minutes
15. The Gold Hedge Explained

Descriptions (4):
1. $1 million sounds like a lot. But at 3.5% inflation, it buys 40% less in 20 years. See your real number with our free calculator.
2. Can you retire with $1M? The answer depends on inflation. Our calculator shows your actual purchasing power over time. Instant results.
3. Stop guessing. See exactly how long $1 million lasts when adjusted for reality. Free inflation calculator trusted by 23,000+ Americans.
4. The question isn't "is it enough?" It's "how do I protect it?" See why gold beats inflation. A+ BBB. Free consultation.
```

### Theme C: Planning ("How Much Do I Need?")

**RSA 1:**
```
Headlines (15):
1. How Much to Retire at 55?
2. Calculate Your Real Number
3. The Figure Nobody Tells You
4. Retirement Planning Calculator
5. Factor in Inflation (Most Don't)
6. Your Personalized Estimate
7. See Results Instantly
8. Free Retirement Calculator
9. Beyond the 4% Rule
10. What You Actually Need
11. Inflation-Adjusted Numbers
12. Plan With Real Data
13. Trusted by Thousands
14. No Email Required
15. 60-Second Calculation

Descriptions (4):
1. Most "how much to retire" calculators ignore inflation. Ours shows your real purchasing power over 10, 20, 30 years. Eye-opening.
2. Planning to retire at 55? See the inflation-adjusted number you actually need. Free calculator. No signup. Instant results.
3. The 4% rule assumes stable dollars. Reality is different. Calculate how much you really need with inflation factored in.
4. Get your personalized retirement number based on actual inflation rates. See why thousands add gold to protect their savings.
```

### Theme D: Early Retirement (50-55)

**RSA 1:**
```
Headlines (15):
1. Retire at 55 - Is It Possible?
2. Early Retirement Reality Check
3. $1.5M for 30+ Years?
4. The Early Retirement Trap
5. FIRE Calculator (With Inflation)
6. Can Your Money Last?
7. 30 Years of Retirement
8. The Longevity Problem
9. Outliving Your Savings
10. Calculate Your FIRE Number
11. Healthcare Costs Factored In
12. Free Early Retirement Tool
13. Instant Personalized Results
14. The Gold FIRE Strategy
15. Protect Your Early Exit

Descriptions (4):
1. Retiring at 55 means 30+ years of withdrawals. Most calculators don't show the inflation damage. Ours does. Free tool.
2. Early retirement is possible—if you protect against inflation. See how $1.5M performs over 30 years with our free calculator.
3. The FIRE movement forgot about inflation. See your real early retirement number. Calculator used by thousands.
4. At 55, you have decades ahead. See why early retirees are adding gold to hedge against 30 years of inflation. Free guide.
```

---

## Part 6: Landing Page Specifications

### Base Template (Already Built)
`/calculator/[slug]` handles:
- Dynamic H1 with amount + age
- Trust bar (BBB, Money Magazine, Joe Montana, 4.9 stars)
- Interactive inflation calculator
- "Cash Trap" vs "Gold Hedge" comparison
- Social proof (3 testimonials including Joe Montana)
- Trust badges
- Augusta CTA

### Additional LP Variants Needed

#### 1. "How Much" Variant (Planners)
**Path:** `/calculator/how-much-to-retire-at-[age]`
**Differences from base:**
- H1: "How Much Do You Really Need to Retire at [age]?"
- Subhead: "The number depends on one factor most calculators ignore"
- Calculator starts at $500K (let them discover their number)
- Add "Your Target Number" output section
- More educational, less fear-based

#### 2. Early Retirement Variant (50-55)
**Path:** Same as base but age 50-55 triggers different copy
**Differences:**
- Add "30+ Year Horizon" warning badge
- Include healthcare cost callout (pre-Medicare gap)
- FIRE-friendly language
- Longer time horizon default in calculator

#### 3. Doubt/Reassurance Variant
**Path:** `/calculator/can-i-retire-with-[amount]-at-[age]`
**Differences:**
- H1: "Can You Retire at [age] With [amount]? Let's Find Out."
- More reassuring tone
- "Here's the good news..." section
- Emphasize "protection" over "growth"

---

## Part 7: Technical Implementation

### Files to Create/Modify

```
src/app/calculator/
├── [slug]/
│   └── page.tsx              ← EXISTING (update for variants)
├── how-much-to-retire-at-55/
│   └── page.tsx              ← NEW
├── how-much-to-retire-at-60/
│   └── page.tsx              ← NEW
├── how-much-to-retire-at-62/
│   └── page.tsx              ← NEW
```

### URL → LP Mapping

| Final URL | LP Type |
|-----------|---------|
| `/calculator/is-1.5-million-enough-to-retire-at-60` | Base (validation) |
| `/calculator/is-2-million-enough-to-retire-at-60` | Base (validation) |
| `/calculator/is-1.5-million-enough-to-retire-at-55` | Base + early retirement |
| `/calculator/is-1-million-enough-to-retire-at-55` | Base + early retirement |
| `/calculator/is-2-million-enough-to-retire-at-55` | Base + early retirement |
| `/calculator/can-i-retire-with-1-million-at-60` | Base (reassurance tone) |
| `/calculator/is-3-million-enough-to-retire-at-50` | Base + FIRE angle |
| `/calculator/how-much-to-retire-at-55` | Planner variant |
| `/calculator/how-much-to-retire-at-60` | Planner variant |
| `/calculator/how-much-to-retire-at-62` | Planner variant |

---

## Part 8: Tracking & Conversion Setup

### Google Ads Conversion Actions

| Conversion | Type | Value | Window |
|------------|------|-------|--------|
| Lead Form Submit | Primary | $200 | 30 days |
| Calculator Interaction | Secondary | $0 | 7 days |
| CTA Click (Augusta) | Secondary | $0 | 7 days |
| 60s Time on Page | Micro | $0 | 1 day |

### UTM Structure

```
?utm_source=google
&utm_medium=cpc
&utm_campaign=retirement_calculator
&utm_content={adgroupid}
&utm_term={keyword}
&gclid={gclid}
```

### Hidden Form Fields (for lead quality)
- `keyword`: {keyword}
- `adgroup`: {adgroupid}
- `gclid`: {gclid}
- `landing_page`: current URL
- `calculator_amount`: user's selected amount
- `calculator_years`: user's selected years

---

## Part 9: Budget & Bidding Strategy

### Phase 1: Test (Weeks 1-2)
- **Budget:** $50/day ($350/week)
- **Bid Strategy:** Manual CPC
- **Focus:** Ad Groups 1-4 (Tier 1 keywords only)
- **Goal:** Get 10+ conversions to enable smart bidding

### Phase 2: Optimize (Weeks 3-4)
- **Budget:** $50/day
- **Bid Strategy:** Maximize Conversions (if 15+ conversions)
- **Action:** Pause low CTR ads, expand winners
- **Goal:** Identify CPA baseline

### Phase 3: Scale (Week 5+)
- **If CPA < $50:** Increase to $100/day, add Tier 2 keywords
- **If CPA $50-67:** Maintain, optimize further
- **If CPA > $67:** Pause, rework LPs and ads

### Bid Adjustments
| Segment | Adjustment | Rationale |
|---------|------------|-----------|
| Age 55-64 | +20% | Core demo |
| Age 65+ | +10% | Has money |
| Age 25-44 | -50% | Low value |
| Mobile | +0% | Test first |
| Weekends | +10% | More browsing time |

---

## Part 10: Negative Keywords (Add Day 1)

```
// Broke/No Money
-free money
-no savings
-broke
-poor
-welfare
-social security only
-minimum wage
-low income

// DIY/Reddit
-reddit
-forum
-diy
-spreadsheet template
-excel

// Off-Topic
-social security calculator
-pension calculator
-annuity
-life insurance
-reverse mortgage

// Competitor Noise
-goldco
-birch gold
-american hartford

// Non-Buyers
-jobs
-career
-part time work
-side hustle
```

---

## Part 11: Implementation Checklist

### Landing Pages
- [x] Base `/calculator/[slug]` with trust signals
- [ ] Add "how-much" variant for planner keywords
- [ ] Ensure all 10 URLs resolve correctly
- [ ] Test calculator on mobile
- [ ] Verify tracking fires on all pages

### Google Ads Setup
- [ ] Create campaign "Gold IRA - Retirement Calculator"
- [ ] Create 10 ad groups per structure above
- [ ] Add all keywords with correct match types
- [ ] Upload RSA ads (3 per ad group)
- [ ] Set up conversion tracking
- [ ] Add negative keywords
- [ ] Set bid adjustments
- [ ] Add sitelink extensions
- [ ] Add callout extensions
- [ ] Enable campaign

### Tracking
- [ ] Verify GA4 events firing
- [ ] Set up Google Ads conversion import from GA4
- [ ] Test gclid capture in form
- [ ] Create GA4 audience for retargeting

---

## Part 12: Expected Results

### Conservative Projections (Month 1)

| Metric | Estimate |
|--------|----------|
| Impressions | 15,000-25,000 |
| Clicks | 500-800 |
| Avg CPC | $0.80 |
| Spend | $400-640 |
| LP Conv Rate | 5% |
| Leads | 25-40 |
| Lead Quality Rate | 50% |
| Qualified Leads | 12-20 |
| Revenue (@$200) | $2,400-$4,000 |
| ROAS | 4:1 - 6:1 |

### Success Criteria
- CPA < $50 = Scale aggressively
- CPA $50-67 = Optimize and hold
- CPA > $67 = Pause and rework

---

## NEXT STEPS

1. **Approve this plan**
2. **I build the 3 "how-much" landing pages**
3. **I generate Google Ads Editor import CSV**
4. **You upload to Google Ads and fund account**
5. **Launch and monitor**

Ready to execute?
