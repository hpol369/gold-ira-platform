# Dynamic Lead Form Implementation Plan

## Objective
Create a single, max-converting multi-step lead form that dynamically adapts content based on URL parameters, then connect all LPs to use this form.

---

## PHASE 1: Data Structure
- [x] P1-001: Define form variants config (type → headline, subtext, benefits)

## PHASE 2: Update Get-Started Page
- [x] P2-001: Add URL param reading (`?type=fees`, `?type=compare`, etc.)
- [x] P2-002: Create variant config with dynamic content
- [x] P2-003: Update headlines/subtext to use variant config
- [x] P2-004: Update success screen with variant-specific messaging
- [x] P2-005: Pass source/type to API for tracking

## PHASE 3: Update All LPs
- [x] P3-001: Update `/lp/gold-ira-fees` → link to `/get-started?type=fees`
- [x] P3-002: Update `/lp/gold-ira-company-fees` → link to `/get-started?type=compare`
- [x] P3-003: Update `/lp/silver-ira` → link to `/get-started?type=silver`
- [x] P3-004: Update `/lp/silver-ira-companies` → link to `/get-started?type=silver`
- [x] P3-005: Update `/lp/silver-ira-fees` → link to `/get-started?type=silver-fees`
- [x] P3-006: Update `/lp/silver-ira-rollover` → link to `/get-started?type=silver`
- [x] P3-007: Update `/lp/silver-ira-approved` → link to `/get-started?type=silver`
- [x] P3-008: Update `/lp/401k-gold-rollover` → link to `/get-started?type=401k`
- [x] P3-009: Update `/lp/gold-ira-seniors` → link to `/get-started?type=seniors`
- [x] P3-010: Update `/lp/protect-retirement` → link to `/get-started?type=protect`
- [x] P3-011: Update remaining LPs (augusta-silver, patriot-silver, us-gold-kit)

## PHASE 4: Verification
- [x] P4-001: Build and verify no TypeScript errors
- [ ] P4-002: Test all localhost URLs

---

## Form Variants Config

| type | headline | subtext | benefit1 | benefit2 | benefit3 |
|------|----------|---------|----------|----------|----------|
| fees | "Get Your Free Fee Breakdown" | "See exactly what Gold IRAs cost — no hidden fees" | "Complete fee comparison" | "No surprise costs" | "Transparent pricing" |
| compare | "Get Your Comparison Guide" | "See how top Gold IRA companies stack up" | "Side-by-side comparison" | "Unbiased analysis" | "Find the best fit" |
| silver | "Get Your Silver IRA Kit" | "Discover how to protect wealth with silver" | "Silver IRA guide" | "Tax advantages" | "Diversification tips" |
| silver-fees | "Get Your Silver IRA Fee Guide" | "See what Silver IRAs really cost" | "Fee breakdown" | "No hidden costs" | "Compare companies" |
| 401k | "Start Your 401k Rollover" | "Move your 401k to gold — tax-free" | "Tax-free transfer" | "Keep your savings protected" | "Simple 3-step process" |
| seniors | "Get Your Retirement Protection Guide" | "Secure your retirement with precious metals" | "Inflation protection" | "Preserve purchasing power" | "Peace of mind" |
| protect | "Protect Your Retirement Savings" | "See how gold shields your wealth" | "Hedge against inflation" | "Portfolio diversification" | "Physical asset ownership" |
| (default) | "Get Your Free Consultation" | "Speak with a Gold IRA specialist" | "No pressure, no obligation" | "Expert guidance" | "Personalized advice" |

---

## Test URLs (localhost:3000)

After implementation, test these:
- `/get-started` (default)
- `/get-started?type=fees`
- `/get-started?type=compare`
- `/get-started?type=silver`
- `/get-started?type=silver-fees`
- `/get-started?type=401k`
- `/get-started?type=seniors`
- `/get-started?type=protect`
