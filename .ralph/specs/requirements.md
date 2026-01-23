# Rich Dad Retirement - Technical Requirements
## specs/requirements.md

---

## PROJECT SPECIFICATIONS

### Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance Targets
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Mobile PageSpeed: 90+

---

## DATA STRUCTURES

### Company Interface
```typescript
// src/data/companies/types.ts

export interface CompanyFees {
  setup: number          // One-time setup fee
  annual: number         // Annual maintenance fee
  storage: number        // Annual storage fee
  transaction?: number   // Per-transaction fee
}

export interface Company {
  // Identity
  id: string
  name: string
  slug: string

  // Ratings
  rating: number         // 1-5 scale
  bbbRating: string      // A+, A, B, etc.
  trustpilotRating?: number
  reviewCount?: number

  // Business Info
  founded: number
  headquarters: string
  ceo?: string
  employees?: string

  // Investment Details
  minInvestment: number
  maxInvestment?: number
  accountTypes: string[] // ['Traditional IRA', 'Roth IRA', 'SEP IRA']

  // Fees
  fees: CompanyFees

  // Products
  metals: string[]       // ['Gold', 'Silver', 'Platinum', 'Palladium']
  products: string[]     // ['Coins', 'Bars', 'Rounds']

  // Evaluation
  pros: string[]
  cons: string[]
  bestFor: string

  // Content
  description: string
  verdict: string

  // Meta
  featured: boolean
  affiliateLink?: string
  logo?: string
  website?: string
}
```

### Provider Interface
```typescript
// src/data/providers/types.ts

export type AccountType = '401k' | '403b' | '457b' | 'tsp' | 'ira' | 'roth' | 'sep' | 'simple'

export interface Provider {
  // Identity
  id: string
  name: string
  slug: string

  // Account Info
  accountTypes: AccountType[]

  // Rollover Process
  rolloverProcess: string[]    // Step-by-step instructions
  directRollover: boolean      // Supports direct rollover?
  indirectRollover: boolean    // Supports indirect rollover?

  // Contact
  contactPhone: string
  contactEmail?: string
  rolloverDepartment?: string
  website: string

  // Forms & Documents
  forms: {
    name: string
    url?: string
    description: string
  }[]

  // Timeline
  processingTime: string       // "5-7 business days"

  // Fees
  exitFees?: number
  transferFees?: number

  // Restrictions
  restrictions: string[]
  eligibilityRequirements: string[]

  // Content
  specialConsiderations: string[]
  tips: string[]
}
```

### Location Interfaces
```typescript
// src/data/locations/types.ts

export interface State {
  name: string
  slug: string
  abbreviation: string

  // Demographics
  population: number
  retireePopulation?: number
  medianAge?: number

  // Tax Info
  incomeTaxRate?: string
  capitalGainsTax?: string
  goldTaxExempt: boolean
  stateTaxNotes?: string

  // Content
  description: string

  // Related
  majorCities: string[]        // Slugs of cities
}

export interface City {
  name: string
  slug: string
  state: string               // State slug

  // Demographics
  population: number

  // Local Info
  localDealers?: {
    name: string
    address: string
    phone?: string
  }[]

  nearbyDepositories?: string[]

  // Content
  description: string
}
```

### Audience Interface
```typescript
// src/data/audiences/types.ts

export interface Audience {
  id: string
  slug: string

  // Display
  title: string               // "Firefighters"
  displayTitle: string        // "Gold IRA for Firefighters"
  subtitle: string

  // Account Info
  primaryAccountTypes: AccountType[]
  specialAccounts?: string[]  // "457(b) Deferred Compensation"

  // Content
  challenges: string[]        // Specific pain points
  benefits: string[]          // Why Gold IRA helps them
  considerations: string[]    // Special things to know

  // Rollover
  typicalProviders?: string[] // Common providers for this audience
  rolloverNotes: string[]

  // FAQ
  faqs: {
    question: string
    answer: string
  }[]

  // Meta
  keywords: string[]
  searchVolume?: number
  cpc?: number
}
```

### WHY/HOW Topic Interface
```typescript
// src/data/topics/types.ts

export interface TopicData {
  id: string
  slug: string
  category: 'why' | 'how'

  // SEO
  title: string
  metaDescription: string
  keywords: string[]
  searchVolume?: number
  keywordDifficulty?: number

  // Content Structure
  hook: string                // Emotional opening hook

  // WHY-specific
  problem?: {
    statistics: {
      value: string
      label: string
      source: string
    }[]
    explanation: string
  }

  personalImpact?: {
    calculator?: boolean
    examples: string[]
  }

  wealthyStrategy?: {
    quotes: {
      text: string
      author: string
      source: string
    }[]
    examples: string[]
  }

  // HOW-specific
  mechanism?: {
    explanation: string
    steps?: string[]
  }

  evidence?: {
    historicalData?: string   // Reference to chart data
    caseStudies: string[]
    research: {
      finding: string
      source: string
    }[]
  }

  application?: {
    steps: string[]
    considerations: string[]
  }

  // Shared
  comparison?: {
    headers: string[]
    rows: {
      label: string
      values: string[]
    }[]
  }

  // Navigation
  bridgeLink: {
    href: string
    text: string
  }

  relatedTopics: string[]    // Slugs of related topics

  // CTA
  ctaType: 'soft' | 'medium' | 'strong'
  ctaText?: string
}
```

---

## COMPONENT SPECIFICATIONS

### Review Components

#### CompanyCard
```typescript
interface CompanyCardProps {
  company: Company
  rank?: number
  variant?: 'default' | 'compact' | 'featured'
  showCTA?: boolean
}
```

#### CompanyRating
```typescript
interface CompanyRatingProps {
  rating: number
  maxRating?: number
  size?: 'sm' | 'md' | 'lg'
  showValue?: boolean
  reviews?: number
}
```

#### FeesTable
```typescript
interface FeesTableProps {
  companies: Company[]
  highlightCompany?: string    // Slug to highlight
  showTotal?: boolean
}
```

#### CompanyComparison
```typescript
interface CompanyComparisonProps {
  companyA: Company
  companyB: Company
  categories?: ('fees' | 'ratings' | 'products' | 'service')[]
}
```

### CTA Components

#### AugustaCTA
```typescript
interface AugustaCTAProps {
  variant?: 'default' | 'sidebar' | 'inline' | 'footer'
  headline?: string
  subheadline?: string
  context?: string            // For tracking
}
```

### Content Components

#### ArticleHero
```typescript
interface ArticleHeroProps {
  title: string
  subtitle?: string
  hook?: string
  breadcrumbs?: { label: string; href: string }[]
  publishDate?: string
  updateDate?: string
  readTime?: number
}
```

#### StatisticCard
```typescript
interface StatisticCardProps {
  value: string
  label: string
  source?: string
  trend?: 'up' | 'down' | 'neutral'
  highlight?: boolean
}
```

---

## PAGE SPECIFICATIONS

### Review Page Structure
```
/reviews/[company]/

Sections:
1. Hero
   - Company name, logo
   - Overall rating (stars)
   - Quick stats (BBB, min investment, founded)
   - "Our #1 Pick" badge if Augusta

2. Quick Summary Box
   - 3 pros, 3 cons
   - Best for statement
   - CTA button

3. Company Overview
   - About the company
   - History, leadership
   - What they offer

4. Detailed Ratings
   - Category breakdown (fees, service, products, reputation)
   - Visual rating bars

5. Fees Section
   - Detailed fee breakdown
   - Comparison to industry average
   - Fee calculator?

6. Products & Services
   - Metals offered
   - Account types
   - Storage options
   - Buyback policy

7. Customer Experience
   - Process walkthrough
   - Customer service quality
   - Real reviews/testimonials

8. Pros & Cons (Detailed)
   - Expanded pros with explanations
   - Honest cons with context

9. Who Should Use This Company
   - Ideal customer profile
   - Who should look elsewhere

10. Our Verdict
    - Final score
    - Recommendation
    - Augusta comparison (if not Augusta)

11. FAQ
    - Company-specific questions

12. CTA Section
    - Primary CTA to company or Augusta
```

### Comparison Page Structure
```
/compare/[comparison]/

Sections:
1. Hero
   - "X vs Y: Which is Better for Your Gold IRA?"
   - Quick verdict preview

2. Quick Comparison Table
   - Side-by-side key metrics
   - Winner indicators

3. Company A Overview
   - Brief summary
   - Key strengths

4. Company B Overview
   - Brief summary
   - Key strengths

5. Detailed Comparisons
   - Fees comparison
   - Products comparison
   - Service comparison
   - Reputation comparison

6. Verdict by Category
   - Winner for fees
   - Winner for service
   - Winner for beginners
   - etc.

7. Final Verdict
   - Overall winner
   - Use cases for each

8. Augusta Alternative
   - "Consider Our #1 Pick"

9. FAQ

10. CTA
```

### WHY Page Structure
```
/why/[topic]/

Sections:
1. Hook Hero
   - Emotional headline
   - Shocking statistic
   - Personal relevance statement

2. The Problem
   - Data visualization
   - Statistics cards
   - Expert quotes
   - Historical context

3. Why This Matters to You
   - Personal impact calculator
   - Relatable examples
   - Future projections

4. What the Wealthy Know
   - Billionaire strategies
   - Central bank data
   - Expert recommendations

5. The Solution Preview
   - Bridge to HOW content
   - Brief gold mention
   - "Learn more" links

6. Soft CTA
   - Free guide offer
   - Quiz option
```

### HOW Page Structure
```
/how/[topic]/

Sections:
1. Connection Hero
   - Link to WHY (problem)
   - Promise of solution

2. The Mechanism
   - How gold addresses the problem
   - Clear explanation
   - Visual aids

3. Evidence
   - Historical charts
   - Case studies
   - Research findings

4. Practical Application
   - How to implement
   - Step-by-step if applicable
   - Considerations

5. Comparison
   - Gold vs alternatives (for this purpose)
   - Table comparison

6. Bridge to WHAT
   - "The best way to own gold in your retirement..."
   - Gold IRA introduction
   - Link to /gold-ira/

7. CTA
   - Company recommendations
   - Augusta feature
```

---

## SEO REQUIREMENTS

### Meta Tags (per page type)

#### Reviews
```typescript
title: `${company.name} Review 2026: Fees, Ratings & Is It Worth It?`
description: `Honest ${company.name} review. We analyze fees (${fees}), BBB rating (${bbb}), customer complaints & more. See how they compare to our #1 pick.`
```

#### Comparisons
```typescript
title: `${companyA} vs ${companyB}: Which Gold IRA Company is Better?`
description: `${companyA} vs ${companyB} comparison. We compare fees, ratings, minimums & more to help you choose the best Gold IRA company for your needs.`
```

#### WHY Content
```typescript
title: `${topic.title} | Rich Dad Retirement`
description: `${topic.hook} Learn what's really happening to your retirement savings and what you can do about it.`
```

#### HOW Content
```typescript
title: `${topic.title}: Complete Guide | Rich Dad Retirement`
description: `Learn ${topic.title.toLowerCase()}. Discover how this strategy can protect your retirement savings from ${relatedProblem}.`
```

### Structured Data

#### Review Pages
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "FinancialService",
    "name": "{{company.name}}",
    "image": "{{company.logo}}"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "{{company.rating}}",
    "bestRating": "5"
  },
  "author": {
    "@type": "Organization",
    "name": "Rich Dad Retirement"
  },
  "reviewBody": "{{company.verdict}}"
}
```

#### Comparison Pages
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{companyA}} vs {{companyB}}: Which is Better?",
  "author": {
    "@type": "Organization",
    "name": "Rich Dad Retirement"
  }
}
```

#### FAQ Sections
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{{question}}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{answer}}"
      }
    }
  ]
}
```

---

## INTERNAL LINKING RULES

### WHY Pages
- Link to 2-3 related WHY pages
- Link to 1-2 HOW pages (bridge to solution)
- Sidebar: Augusta CTA

### HOW Pages
- Link to related WHY page (problem context)
- Link to 2-3 related HOW pages
- Link to WHAT pages (Gold IRA, reviews)
- Sidebar: Augusta CTA

### WHAT Pages (Gold IRA, Reviews)
- Link to relevant HOW pages
- Link to comparison pages
- Link to rollover pages
- Strong Augusta CTAs

### Rollover Pages
- Link to relevant provider pages
- Link to Gold IRA basics
- Link to company reviews
- Strong Augusta CTAs

### Local Pages
- Link to state/city siblings
- Link to Gold IRA basics
- Link to company reviews
- Augusta CTA with local angle

### Audience Pages
- Link to relevant rollover types (403b for teachers, TSP for military)
- Link to Gold IRA basics
- Link to company reviews
- Augusta CTA with audience-specific messaging

---

## AFFILIATE INTEGRATION

### Augusta Precious Metals
```typescript
// src/lib/constants.ts

export const AFFILIATE_LINKS = {
  augusta: process.env.NEXT_PUBLIC_AUGUSTA_AFFILIATE_URL || 'https://augustapreciousmetals.com',
  // Add other affiliate links as needed
}

export const AFFILIATE_PHONE = {
  augusta: '1-855-XXX-XXXX'  // Replace with actual
}
```

### CTA Placement Rules
1. **Every page** has at least one Augusta CTA
2. **Review pages**: CTA after verdict, "Augusta scored higher in our tests"
3. **Comparison pages**: CTA after verdict with Augusta comparison
4. **WHY pages**: Soft CTA (free guide/quiz)
5. **HOW pages**: Medium CTA (learn about Gold IRA)
6. **WHAT pages**: Strong CTA (get started today)
7. **Sidebar**: Augusta CTA on all content pages

---

## FILE ORGANIZATION

```
src/
├── app/
│   ├── reviews/
│   │   ├── page.tsx
│   │   └── [company]/
│   │       └── page.tsx
│   ├── compare/
│   │   ├── page.tsx
│   │   └── [comparison]/
│   │       └── page.tsx
│   ├── rollover/
│   │   ├── page.tsx
│   │   ├── 401k-to-gold/
│   │   ├── ira-to-gold/
│   │   ├── 403b-to-gold/
│   │   ├── tsp-to-gold/
│   │   └── from/
│   │       └── [provider]/
│   │           └── page.tsx
│   ├── gold-ira/
│   │   ├── page.tsx
│   │   └── [topic]/
│   │       └── page.tsx
│   ├── why/
│   │   ├── page.tsx
│   │   └── [topic]/
│   │       └── page.tsx
│   ├── how/
│   │   ├── page.tsx
│   │   └── [topic]/
│   │       └── page.tsx
│   ├── for/
│   │   ├── page.tsx
│   │   └── [audience]/
│   │       └── page.tsx
│   ├── local/
│   │   ├── page.tsx
│   │   └── [state]/
│   │       ├── page.tsx
│   │       └── [city]/
│   │           └── page.tsx
│   └── learn/
│       ├── page.tsx
│       └── [topic]/
│           └── page.tsx
├── components/
│   ├── reviews/
│   ├── compare/
│   ├── rollover/
│   ├── content/
│   ├── why/
│   ├── how/
│   ├── local/
│   ├── audience/
│   ├── cta/
│   └── layout/
├── data/
│   ├── companies/
│   ├── providers/
│   ├── locations/
│   ├── audiences/
│   ├── why-topics/
│   └── how-topics/
└── lib/
    ├── constants.ts
    ├── utils.ts
    └── seo.ts
```

---

*Technical Requirements v1.0*
*Created: January 2026*
