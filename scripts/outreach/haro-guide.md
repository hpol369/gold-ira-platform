# HARO / Connectively / Qwoted — Quick-Start Guide

## What This Is

Journalists need expert sources for articles. HARO (Help A Reporter Out), Connectively, and Qwoted connect journalists with experts. You respond to queries, get quoted, get a backlink. This is the #1 way small sites get high-DR backlinks (Forbes, Business Insider, CBS, NYT, etc.).

## Sign Up (Human Required)

1. **Connectively** (formerly HARO): https://www.connectively.us
   - Sign up as a "Source" (free tier works)
   - Profile: Thomas Richardson, Editor at Rich Dad Retirement
   - Expertise: Retirement planning, Gold/Silver IRAs, 401k rollovers, Precious metals investing, Blue-collar retirement strategies
   - Beats to follow: Personal Finance, Retirement, Investing, Economy

2. **Qwoted**: https://www.qwoted.com
   - Same profile as above
   - Categories: Finance, Retirement, Investing

3. **SourceBottle**: https://www.sourcebottle.com
   - Free alternative, smaller volume

## Keywords to Monitor

Set alerts for these terms in journalist queries:

**Primary (respond immediately):**
- gold IRA
- precious metals IRA
- gold investment
- retirement savings
- 401k rollover
- IRA rules
- retirement planning
- gold prices
- inflation hedge

**Secondary (respond if good fit):**
- alternative investments
- self-directed IRA
- retirement age
- social security
- pension
- 401k
- Roth IRA
- estate planning
- retirement income

## How to Respond (Template)

**Speed matters** — first 3 responses usually get picked. Respond within 2 hours.

**Format:**
1. **Lead with a quotable soundbite** (1-2 sentences, specific data)
2. **Support with evidence** (cite a specific stat from our content)
3. **Brief bio** (1 sentence — who you are, why you're credible)

**Example Response:**

> "Gold has outperformed inflation in every decade since 1970, returning an average of 10.6% annually over the past 20 years compared to 10.2% for the S&P 500 — but with lower correlation to market crashes. For blue-collar workers within 10 years of retirement, allocating 5-15% of a 401k to a gold IRA can reduce portfolio volatility by 15-20% during market downturns."
>
> Source: Thomas Richardson, Editor at Rich Dad Retirement (richdadretirement.com), where we publish data-driven retirement research covering 1,300+ articles on precious metals, IRA strategies, and 43 retirement calculators. Our gold IRA statistics page (richdadretirement.com/gold-ira-statistics) compiles data from the World Gold Council, IRS, BLS, and Federal Reserve.

**Key rules:**
- Always include specific numbers (not "gold does well" — "gold returned 10.6% annually")
- Reference richdadretirement.com naturally (as a credential, not a plug)
- Keep responses under 200 words
- Match the journalist's tone and angle
- Never pitch Augusta or any affiliate — journalists will reject promotional sources

## Tracking

Log every response in `/scripts/outreach/haro-tracker.json`:

```json
{
  "date": "2026-03-25",
  "platform": "connectively",
  "journalist": "Jane Smith",
  "outlet": "Forbes",
  "outlet_dr": 94,
  "query_topic": "Best ways to invest retirement savings in 2026",
  "our_response_summary": "Gold IRA performance data, portfolio allocation recommendation",
  "status": "responded",
  "result": "pending",
  "backlink_url": null,
  "notes": ""
}
```

## Expected Results

- Response rate: ~5-10% of pitches result in inclusion
- Timeline: Article publishes 1-4 weeks after your response
- Backlink quality: DR 40-90+ (one Forbes link = worth more than 100 directory links)
- Volume: Aim for 5-10 responses per week
- At 5-10% hit rate, that's 1-4 high-quality backlinks per month

## Our Best Data Points for HARO Responses

Keep these ready to drop into any response:

1. Gold annualized return (20yr) vs S&P 500
2. Central bank gold buying trends (record purchases 2024-2025)
3. Gold performance during 2008, 2020, 2022 downturns
4. Average gold IRA minimum investment + fee ranges
5. IRS contribution limits for 2025-2026
6. % of retirement savers who hold alternative assets
7. Typical gold allocation recommendation (5-15%)
8. Blue-collar retirement savings gap statistics

All sourced from our /gold-ira-statistics page — cite that as the reference.
