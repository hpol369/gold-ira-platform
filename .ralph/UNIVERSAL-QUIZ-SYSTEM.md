# Universal Retirement Account Finder - Ralph Implementation Plan

## Goal
Transform the current Gold IRA-only quiz into a multi-product retirement account finder that routes users to the best-fit company based on their interests and budget.

## Constraints
- ✅ Keep `/audit` URL intact (no SEO breakage)
- ✅ Store leads locally (Vercel-compatible JSON/file storage)
- ✅ No external database required
- ✅ All affiliate links already exist in `src/config/affiliates.ts`

---

## PRODUCT ROUTING MATRIX

| Product Type | Budget | Recommended Company | Affiliate Link Key |
|-------------|--------|---------------------|-------------------|
| **Gold/Silver IRA** | $100k+ | Augusta Precious Metals | `augusta` |
| **Gold/Silver IRA** | $50k-100k | Goldco | `goldco` |
| **Gold/Silver IRA** | $25k-50k | American Hartford Gold | `americanHartford` |
| **Gold/Silver IRA** | <$25k | Noble Gold | `noble` |
| **Crypto IRA** | Any | iTrustCapital | `itrustcapital` |
| **Crypto IRA** | Alt | Alto IRA | `altoIra` |
| **Self-Directed IRA** | Any | Rocket Dollar | `rocketDollar` |
| **Real Estate IRA** | Any | Equity Trust | `equityTrust` |
| **ROBS 401k** | $50k+ | Guidant Financial | `guidantFinancial` |
| **ROBS 401k** | <$50k | Benetrends | `benetrends` |
| **Solo 401k** | Any | Rocket Dollar | `rocketDollar` |

---

## ARCHITECTURE

```
src/
├── components/
│   └── quiz/                          # NEW folder
│       ├── UniversalQuiz.tsx          # Main wizard component
│       ├── steps/
│       │   ├── ProductTypeStep.tsx    # "What interests you?"
│       │   ├── GoldFlowSteps.tsx      # Gold-specific questions
│       │   ├── CryptoFlowSteps.tsx    # Crypto-specific questions
│       │   ├── RobsFlowSteps.tsx      # ROBS-specific questions
│       │   ├── SdiraFlowSteps.tsx     # SDIRA-specific questions
│       │   └── AmountStep.tsx         # Universal budget question
│       ├── QuizResults.tsx            # Dynamic results page
│       └── QuizProgress.tsx           # Progress indicator
├── data/
│   └── quiz-routing.ts                # Routing logic & company data
├── lib/
│   └── lead-storage.ts                # Local lead storage (Vercel KV or JSON)
└── app/
    ├── audit/page.tsx                 # Keep URL, use new UniversalQuiz
    └── api/
        └── leads/
            ├── route.ts               # POST to save lead
            └── [id]/route.ts          # GET lead by ID (for results page)
```

---

## PHASE 1: DATA LAYER (2 Agents)

### Agent Q1: Quiz Routing Configuration
**Create:** `src/data/quiz-routing.ts`

**Contents:**
- Product type definitions with icons/descriptions
- Company recommendations per product + budget
- Routing logic function: `getRecommendedCompany(productType, budget)`
- Company details (name, minInvestment, highlights, affiliateKey)

```typescript
export type ProductType =
  | 'gold-ira'
  | 'silver-ira'
  | 'crypto-ira'
  | 'self-directed-ira'
  | 'real-estate-ira'
  | 'robs-401k'
  | 'solo-401k';

export type BudgetRange =
  | 'under-25k'
  | '25k-50k'
  | '50k-100k'
  | '100k-500k'
  | '500k-plus';

export interface QuizResult {
  productType: ProductType;
  budget: BudgetRange;
  timeline: string;
  concerns: string[];
  recommendedCompany: CompanyRecommendation;
  alternatives: CompanyRecommendation[];
}
```

---

### Agent Q2: Lead Storage System
**Create:** `src/lib/lead-storage.ts`
**Create:** `src/app/api/leads/route.ts`

**Storage Strategy (Vercel-compatible):**
- Use Vercel KV if available (check for `@vercel/kv`)
- Fallback: JSON file in `/tmp` (ephemeral but works for MVP)
- Structure: `{ id, email?, productType, budget, result, timestamp }`

**API Endpoints:**
- `POST /api/leads` - Save quiz completion
- `GET /api/leads/[id]` - Retrieve lead (for shareable results)

---

## PHASE 2: QUIZ COMPONENTS (4 Agents)

### Agent Q3: Product Type Selection Step
**Create:** `src/components/quiz/steps/ProductTypeStep.tsx`

**Options:**
1. 🥇 **Precious Metals IRA** - "Protect savings with physical gold & silver"
2. ₿ **Crypto IRA** - "Tax-advantaged Bitcoin & crypto investing"
3. 🏠 **Real Estate IRA** - "Invest in property with retirement funds"
4. 🏪 **ROBS 401k** - "Use retirement funds to start a business"
5. 💼 **Solo 401k** - "Self-employed retirement with high limits"
6. 🔓 **Self-Directed IRA** - "Full control over your investments"

**Design:** Large clickable cards with icons, 2-column grid on desktop

---

### Agent Q4: Product-Specific Flow Steps
**Create:** `src/components/quiz/steps/GoldFlowSteps.tsx`
**Create:** `src/components/quiz/steps/CryptoFlowSteps.tsx`
**Create:** `src/components/quiz/steps/RobsFlowSteps.tsx`
**Create:** `src/components/quiz/steps/SdiraFlowSteps.tsx`

**Gold Flow:**
1. Primary concern (inflation/crash/diversification)
2. Metal preference (gold/silver/both)
3. Budget range
4. Timeline

**Crypto Flow:**
1. Crypto experience (beginner/intermediate/advanced)
2. Preferred assets (BTC only / altcoins / DeFi)
3. Budget range
4. Timeline

**ROBS Flow:**
1. Business type (franchise/existing/startup)
2. Funding needed
3. Timeline to launch

**SDIRA Flow:**
1. Investment type (real estate/notes/private equity)
2. Budget range
3. Experience level

---

### Agent Q5: Universal Quiz Container
**Create:** `src/components/quiz/UniversalQuiz.tsx`
**Create:** `src/components/quiz/QuizProgress.tsx`

**Features:**
- State machine managing all flows
- Branching logic based on product type
- Progress indicator showing current step
- Back navigation
- Animated transitions (Framer Motion)

**State Structure:**
```typescript
interface QuizState {
  currentStep: string;
  productType: ProductType | null;
  answers: Record<string, string>;
  isComplete: boolean;
}
```

---

### Agent Q6: Dynamic Results Component
**Create:** `src/components/quiz/QuizResults.tsx`

**Features:**
- Shows recommended company based on routing logic
- Displays 2 alternatives ("Also consider...")
- Personalized messaging based on answers
- Primary CTA → tracked affiliate link
- Secondary CTA → comparison page
- "Save my results" → captures email
- Share results URL

**Design:** Similar to current AuditResults but with:
- Company logo/branding
- Key benefits matched to user's concerns
- "Why we recommend X" section
- Trust badges specific to that company

---

## PHASE 3: INTEGRATION (2 Agents)

### Agent Q7: Update Audit Page
**Edit:** `src/app/audit/page.tsx`

**Changes:**
- Replace `<AuditWizard />` with `<UniversalQuiz />`
- Update metadata for broader appeal
- Keep URL exactly the same

**New metadata:**
```typescript
title: "Free Retirement Account Finder | Gold, Crypto, Real Estate IRAs"
description: "Take our 60-second quiz to find the perfect retirement account for your goals. Compare Gold IRAs, Crypto IRAs, ROBS 401k, and more."
```

---

### Agent Q8: Update CTAs Site-Wide
**Edit:** Multiple files

**Changes:**
- Update QuizCTA component messaging to reflect multi-product
- Update SidebarAuditWidget messaging
- Update MobileStickyBar messaging
- Update InContentCTA messaging

**New copy:**
- "Find Your Perfect Retirement Account"
- "Gold, Crypto, Real Estate & More"
- "60-Second Quiz"

---

## PHASE 4: TRACKING & ANALYTICS (1 Agent)

### Agent Q9: Enhanced Lead Tracking
**Edit:** `src/app/api/leads/route.ts`
**Edit:** `src/lib/notifications.ts` (if exists)

**Features:**
- Log quiz completions with full answer data
- Telegram notification on high-value leads ($100k+)
- Track conversion funnel: start → complete → click
- UTM parameter passthrough to affiliate links

---

## EXECUTION ORDER

```
Phase 1 (Data Layer):     Q1 + Q2 in parallel
Phase 2 (Components):     Q3 + Q4 + Q5 + Q6 in parallel
Phase 3 (Integration):    Q7 + Q8 in parallel (depends on Phase 2)
Phase 4 (Tracking):       Q9 (depends on Phase 3)
```

**Total: 9 agents, 4 phases**

---

## VERIFICATION CHECKLIST

- [ ] `/audit` URL still works
- [ ] All 6 product types route correctly
- [ ] Budget-based routing works for Gold IRA
- [ ] Leads are saved locally
- [ ] Affiliate links have tracking parameters
- [ ] Mobile responsive
- [ ] Build passes: `npm run build`

---

## SAMPLE USER JOURNEYS

### Journey 1: High-Net-Worth Gold IRA
1. Clicks "Start Quiz"
2. Selects "Precious Metals IRA"
3. Selects "Inflation protection"
4. Selects "$500k+"
5. Selects "5-10 years"
6. **Result:** Augusta Precious Metals with premium messaging

### Journey 2: Crypto Beginner
1. Clicks "Start Quiz"
2. Selects "Crypto IRA"
3. Selects "Beginner"
4. Selects "Bitcoin only"
5. Selects "$25k-50k"
6. **Result:** iTrustCapital with beginner-friendly messaging

### Journey 3: Business Starter
1. Clicks "Start Quiz"
2. Selects "ROBS 401k"
3. Selects "Franchise"
4. Selects "$100k+"
5. **Result:** Guidant Financial with franchise focus

---

## FILES CREATED/MODIFIED

### New Files (12):
```
src/data/quiz-routing.ts
src/lib/lead-storage.ts
src/app/api/leads/route.ts
src/app/api/leads/[id]/route.ts
src/components/quiz/UniversalQuiz.tsx
src/components/quiz/QuizProgress.tsx
src/components/quiz/QuizResults.tsx
src/components/quiz/steps/ProductTypeStep.tsx
src/components/quiz/steps/GoldFlowSteps.tsx
src/components/quiz/steps/CryptoFlowSteps.tsx
src/components/quiz/steps/RobsFlowSteps.tsx
src/components/quiz/steps/SdiraFlowSteps.tsx
```

### Modified Files (5):
```
src/app/audit/page.tsx
src/components/home/QuizCTA.tsx
src/components/widgets/SidebarAuditWidget.tsx
src/components/widgets/MobileStickyBar.tsx
src/components/widgets/InContentCTA.tsx
```

### Preserved (no changes):
```
src/components/audit/AuditWizard.tsx      # Keep as backup
src/components/audit/AuditResults.tsx     # Keep as backup
src/components/audit/LoadingAnalysis.tsx  # Reuse in new quiz
```
