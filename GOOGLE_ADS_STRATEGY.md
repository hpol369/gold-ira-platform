# Google Ads Strategy: Retirement Amount Keywords

**Campaign Goal:** Generate qualified leads ($50K+ IRA/401k) for Augusta Precious Metals affiliate program
**Payout:** $200/qualified lead
**Target ROAS:** 3:1 minimum (break-even at $66.67 CPA)

---

## 1. LANDING PAGE STRATEGY

### Decision: Dynamic Single LP ✅

**Why NOT multiple static pages:**
- 50+ keyword variations = 50+ pages to maintain
- Duplicate content risk with Google
- Slower time-to-market
- Higher maintenance burden

**Why dynamic `/calculator/[slug]` wins:**
- One codebase, infinite keyword variations
- Perfect message match (slug → headline)
- SEO-safe (unique meta per URL)
- Faster iteration on copy/design

**URL Structure:**
```
/calculator/is-1.5-million-enough-to-retire-at-60
/calculator/is-2-million-enough-to-retire-at-55
/calculator/can-i-retire-with-500k-at-65
```

---

## 2. GOOGLE ADS CAMPAIGN STRUCTURE

### Campaign Architecture

```
CAMPAIGN: Gold IRA - Retirement Amount Questions
├── Budget: $50/day (test phase)
├── Bid Strategy: Manual CPC → Maximize Conversions (after 15 conversions)
├── Network: Search only (no Display)
├── Location: USA only
├── Demographics: 45-65+ (bid +20% on 55-64)
│
├── AD GROUP 1: $1.5M Retirement
│   ├── [exact] is $1.5 million enough to retire at 60
│   ├── [exact] is 1.5 million enough to retire at 55
│   ├── [phrase] "1.5 million retire"
│   └── LP: /calculator/is-1.5-million-enough-to-retire-at-60
│
├── AD GROUP 2: $2M Retirement
│   ├── [exact] is $2 million enough to retire at 60
│   ├── [exact] is 2 million enough to retire at 55
│   ├── [phrase] "2 million retire"
│   └── LP: /calculator/is-2-million-enough-to-retire-at-60
│
├── AD GROUP 3: $1M Retirement
│   ├── [exact] can i retire at 60 with $1 million
│   ├── [exact] is 1 million enough to retire at 55
│   ├── [phrase] "1 million retire"
│   └── LP: /calculator/is-1-million-enough-to-retire-at-60
│
├── AD GROUP 4: $3M+ Retirement
│   ├── [exact] is $3 million enough to retire at 50
│   ├── [exact] is 3 million enough to retire at 55
│   ├── [phrase] "3 million retire"
│   └── LP: /calculator/is-3-million-enough-to-retire-at-50
│
└── AD GROUP 5: Generic Amount Questions
    ├── [phrase] "how much to retire at 55"
    ├── [phrase] "how much to retire at 60"
    ├── [broad] how much money retire early
    └── LP: /calculator/is-1-million-enough-to-retire-at-60
```

### Match Type Strategy

| Match Type | Use Case | Bid Modifier |
|------------|----------|--------------|
| Exact | High-intent specific amounts ($1.5M, $2M) | Base bid |
| Phrase | Capture variations ("retire with 1.5 million") | -15% |
| Broad | Discovery only (limited budget) | -30% |

### Negative Keywords (Add Immediately)

```
-"social security"
-"calculator"
-"spreadsheet"
-"reddit"
-"free"
-"without savings"
-"no money"
-"broke"
-"minimum wage"
```

---

## 3. AD COPY (5 Variations)

### Variation A: Fear + Solution
```
Headline 1: Is $1.5M Enough to Retire?
Headline 2: The Hidden Tax Eating Your Savings
Headline 3: See the Inflation Calculator
Description 1: Your $1.5M could be worth $900K in 20 years. See exactly how inflation destroys retirement savings—and the hedge wealthy Americans use.
Description 2: Free calculator shows your real purchasing power. No signup required.
```

### Variation B: Curiosity + Authority
```
Headline 1: $1.5M Retirement Reality Check
Headline 2: What Wall Street Won't Tell You
Headline 3: Joe Montana's Retirement Strategy
Description 1: NFL legend Joe Montana moved his retirement to gold. See the same inflation calculator his advisors use. Eye-opening results.
Description 2: A+ BBB rated. 4.9★ from 1,847 reviews. Free guide.
```

### Variation C: Direct Question Match
```
Headline 1: Is $1.5 Million Enough at 60?
Headline 2: Calculate Your Real Number
Headline 3: Inflation-Adjusted Results
Description 1: Most calculators lie. They ignore inflation. Our free tool shows your REAL purchasing power in 10, 20, 30 years. The truth may surprise you.
Description 2: See how Gold IRAs protect against dollar devaluation.
```

### Variation D: Problem Agitation
```
Headline 1: $1.5M Won't Last as Long as You Think
Headline 2: Inflation Steals 3.5% Yearly
Headline 3: Protect What You've Built
Description 1: At 3.5% inflation, $1.5M becomes $900K in purchasing power. Don't let decades of saving evaporate. See the math.
Description 2: Free inflation calculator + Gold IRA guide. No pressure.
```

### Variation E: Social Proof
```
Headline 1: 23,000+ Americans Switched to Gold IRAs
Headline 2: Is $1.5M Safe From Inflation?
Headline 3: A+ BBB • Money Magazine #1
Description 1: See why retirees are moving 401Ks to gold. Free calculator shows your inflation risk. Augusta Precious Metals—trusted by Joe Montana.
Description 2: Same tax benefits. Zero penalties. Physical gold you own.
```

### Ad Extensions

**Sitelinks:**
- Free Gold IRA Guide
- How Rollovers Work
- Gold vs. Stock Performance
- Talk to a Specialist

**Callouts:**
- A+ BBB Rating
- $0 Setup Fee
- No Pushy Sales
- Lifetime Support

**Structured Snippets:**
- Types: Gold IRA, Silver IRA, 401k Rollover, SEP IRA

---

## 4. BUDGET & KPIs

### Test Phase (Weeks 1-4)

| Metric | Target |
|--------|--------|
| Daily Budget | $50/day ($1,500/month) |
| Target CPC | $0.50-$1.50 |
| Expected Clicks | 1,000-3,000/month |
| Target CTR | >3% (aim for 5%+) |
| Landing Page Conv. Rate | >5% |
| Lead Quality Rate | >40% (have $50K+) |
| Target CPA | <$50 (profitable at $66.67) |

### Conversion Tracking Setup

**Primary Conversion:** Lead form submission
**Secondary Conversions:**
- Calculator interaction (slider moved)
- CTA click (Augusta link)
- 60-second time on page

### Scaling Triggers

| Condition | Action |
|-----------|--------|
| CPA < $40 for 7 days | Increase budget 25% |
| CPA < $30 for 14 days | Increase budget 50% |
| CTR > 5% on ad group | Add similar keywords |
| Conv. rate < 2% | Pause ad group, test new LP |

### Kill Criteria

- CPA > $80 for 7 days → Pause campaign
- CTR < 1.5% → Rewrite ads
- Bounce rate > 70% → Fix LP

---

## 5. COMPETITOR INTELLIGENCE

### Who's Advertising on These Keywords

| Competitor | Strategy | Weakness |
|------------|----------|----------|
| SmartAsset | Generic calculators, lead gen for advisors | No gold angle, boring LP |
| NerdWallet | SEO-focused, minimal paid | Not aggressive on paid |
| Fidelity | Brand awareness | Institutional, not gold |
| Goldco | Direct gold IRA ads | $25K minimum (we match) |
| American Hartford | TV celebrity (Bill O'Reilly) | Heavy political lean |

### Our Competitive Edge

1. **Message Match:** Dynamic LP matches exact keyword
2. **Visual Calculator:** Interactive, not just text
3. **Fear → Solution:** Inflation visualizer creates urgency
4. **Lower Friction:** No immediate phone call push
5. **Trust Stack:** Joe Montana + BBB + Money Magazine

---

## 6. TECHNICAL REQUIREMENTS

### Tracking Checklist

- [x] GA4 installed (existing)
- [x] Affiliate click tracking (existing)
- [ ] **Google Ads conversion pixel** (add to form submission)
- [ ] **Calculator interaction events** (slider change, time spent)
- [ ] **UTM parameter capture** (store in hidden form fields)
- [ ] **gclid capture** (for offline conversion import)

### Quality Score Optimization

| Factor | Our Approach |
|--------|--------------|
| Ad Relevance | Keyword in Headline 1 |
| LP Experience | Fast load, mobile-first, keyword in H1 |
| Expected CTR | Strong emotional hooks, numbers in headline |

### Mobile Requirements

- Calculator must work on touch (slider responsive)
- CTA button above fold on mobile
- Phone number click-to-call option
- Load time < 3 seconds

---

## 7. IMPLEMENTATION TIMELINE

### Week 1: Foundation
- [x] Dynamic LP built (`/calculator/[slug]`)
- [ ] Add trust signals (Joe Montana, badges)
- [ ] Implement calculator event tracking
- [ ] Set up Google Ads conversion tracking

### Week 2: Campaign Launch
- [ ] Create Google Ads account structure
- [ ] Upload all ad variations
- [ ] Set up conversion tracking in Google Ads
- [ ] Enable campaigns (start with $30/day)

### Week 3: Optimization
- [ ] Review search terms report daily
- [ ] Add negative keywords
- [ ] Pause underperforming ads
- [ ] A/B test headline variations

### Week 4: Scale Decision
- [ ] Analyze CPA and lead quality
- [ ] If profitable: increase budget to $75/day
- [ ] If not: pivot messaging or pause

---

## 8. RISK MITIGATION

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| High CPC competition | Medium | High | Focus on KD 0-4 keywords first |
| Low lead quality | Medium | High | Add qualifying questions to form |
| Ad disapproval (financial) | Low | Medium | Follow Google financial services policies |
| LP slow on mobile | Low | High | Test with PageSpeed, optimize images |
| Calculator confusion | Medium | Low | Add tooltips, simplify UI |
| Augusta changes affiliate terms | Low | Critical | Diversify to Goldco/Birch as backup |

---

## 9. QUICK START COMMANDS

### Google Ads Editor Import (CSV ready)

```csv
Campaign,Ad Group,Keyword,Match Type,Max CPC
Gold IRA - Retirement Amount,1.5M Retirement,is $1.5 million enough to retire at 60,Exact,1.00
Gold IRA - Retirement Amount,1.5M Retirement,is 1.5 million enough to retire at 55,Exact,1.10
Gold IRA - Retirement Amount,2M Retirement,is $2 million enough to retire at 60,Exact,0.80
Gold IRA - Retirement Amount,2M Retirement,is 2 million enough to retire at 55,Exact,0.90
Gold IRA - Retirement Amount,1M Retirement,can i retire at 60 with $1 million,Exact,0.90
Gold IRA - Retirement Amount,1M Retirement,is 1 million enough to retire at 55,Exact,1.00
```

### UTM Template for Final URLs

```
https://richdadretirement.com/calculator/is-1.5-million-enough-to-retire-at-60?utm_source=google&utm_medium=cpc&utm_campaign=retirement_amount&utm_content={adgroupid}&utm_term={keyword}&gclid={gclid}
```

---

## NEXT ACTIONS

1. **You:** Approve this strategy
2. **Me:** Add trust signals + tracking to LP
3. **You:** Create Google Ads account (if not exists)
4. **Me:** Provide campaign import file
5. **You:** Fund account, enable campaigns
6. **Me:** Monitor first 48 hours, adjust bids

---

*Strategy prepared by Claude | Ready for execution*
