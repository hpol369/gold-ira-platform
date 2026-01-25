# Claude Code Instructions for Rich Dad Retirement

## ALWAYS USE RALPH'S METHOD

For ANY implementation task, follow this systematic approach:

### 1. CREATE A PLAN FIRST
Before coding, create a task plan in `.ralph/[feature]-plan.md`:
```
## PHASE 1: Data Structures
- [ ] P1-001: Task description
- [ ] P1-002: Task description

## PHASE 2: Components
- [ ] P2-001: Task description
...
```

### 2. DATA STRUCTURES FIRST
Always create types and data utilities before UI components.

### 3. EXECUTE SEQUENTIALLY
Complete each task, mark it done, move to next.

### 4. STATUS TRACKING
End each major response with:
```
RALPH_STATUS:
- PHASE: [current phase]
- TASK: [current task ID]
- PROGRESS: [X/Y completed]
- BLOCKERS: [any issues]
```

---

## PROJECT CONTEXT

**Site:** richdadretirement.com - Gold IRA affiliate site for 55+ Americans

**Tech Stack:**
- Next.js 15+ (App Router)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion

**Primary Affiliate:** Augusta Precious Metals

**Design System:**
- Dark theme (slate-900 backgrounds)
- Glass-morphism cards (bg-white/5 backdrop-blur border-white/10)
- Gold accents (amber-400/500)
- Color-coded sections (purple=Solo401k, teal=RealEstate, orange=ROBS, green=SDIRA, blue=Crypto)

**Affiliate Links:** Use `getTrackedLink(AFFILIATE_LINKS.augusta, "source-page", "augusta")` from `@/config/affiliates`

---

## KEY FILES

- `.ralph/` - Task plans and logs
- `src/config/affiliates.ts` - Affiliate link configuration
- `src/types/` - TypeScript type definitions
- `src/data/` - Static data (companies, providers, etc.)
- `src/components/ui/` - Reusable UI components

---

## QUALITY STANDARDS

1. Mobile-first responsive
2. TypeScript strict mode - no `any`
3. Use existing components before creating new ones
4. Every page needs Augusta CTA
5. Dark theme consistency
6. Schema markup for SEO (FAQ, Article, Review)
