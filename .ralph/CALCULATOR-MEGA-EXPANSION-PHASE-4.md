# Phase 4: Calculator Mega Expansion

## Overview
Building on the keyword research showing **580,000+ monthly search potential**, this phase adds 25+ new calculators targeting zero-to-low difficulty keywords with high conversion potential.

## Current State
**Existing Calculators (19):**
- ✅ Coast FIRE Calculator (14,000 vol)
- ✅ Barista FIRE Calculator (1,100 vol)
- ✅ Fat FIRE Calculator (350 vol)
- ✅ Lean FIRE Calculator (200 vol)
- ✅ FIRE Number Calculator (1,100 vol)
- ✅ Roth Conversion Calculator (5,400 vol)
- ✅ Retirement Spending Calculator (1,400 vol)
- ✅ Social Security Break-Even Calculator (4,100 vol)
- ✅ RMD Calculator (59,000 vol)
- ✅ 72(t) SEPP Calculator (1,600 vol)
- ✅ FERS Calculator (basic - 6,900 vol)
- ✅ Social Security Calculator (49,000 vol)
- ✅ Retirement Calculator (general)
- ✅ Money Longevity Calculator
- ✅ Medicaid Calculator
- ✅ 401k Risk Analyzer
- ✅ Crash Simulator
- ✅ Fees Comparison

---

## TIER 1: IMMEDIATE BUILD - Zero/Low Difficulty High Value

### Agent T1: Federal Employee Calculators
| Calculator | Volume | Diff | CPC |
|------------|--------|------|-----|
| FERS Supplement Calculator | 800 | 0 | $0.90 |
| FERS Annuity Calculator | 800 | 2 | $0.30 |
| TSP Calculator (enhanced) | 5,400 | 9 | $0.80 |

### Agent T2: California State Pension Calculators
| Calculator | Volume | Diff | CPC |
|------------|--------|------|-----|
| CalPERS Retirement Calculator | 300 | 0 | $1.10 |
| CalSTRS Calculator | 250 | 0 | $0.40 |
| CalPERS Pension Calculator | 50 | 0 | $1.20 |

### Agent T3: High CPC Calculators
| Calculator | Volume | Diff | CPC |
|------------|--------|------|-----|
| Reverse Mortgage Calculator | 9,600 | 11 | $3.50 |
| HECM Calculator | 450 | 7 | $3.50 |
| Inheritance Calculator | 150 | 6 | $6.00 |

### Agent T4: Railroad & Specialized
| Calculator | Volume | Diff | CPC |
|------------|--------|------|-----|
| Railroad Retirement Calculator | 400 | 1 | $0.50 |
| Railroad Tier 1 Calculator | - | 0 | - |
| NUA Calculator | 60 | 0 | $1.40 |

### Agent T5: Pension Decision Tools
| Calculator | Volume | Diff | CPC |
|------------|--------|------|-----|
| Pension vs Lump Sum Calculator | 600 | 5 | $0.90 |
| Pension Present Value Calculator | 300 | 5 | $1.70 |
| Solo 401k Calculator | 1,000 | 10 | $1.80 |

### Agent T6: Planning & Risk Tools
| Calculator | Volume | Diff | CPC |
|------------|--------|------|-----|
| Sequence of Returns Calculator | 80 | 0 | - |
| Monte Carlo Retirement Simulator | 600 | 8 | $1.60 |
| Retirement Longevity Calculator | 80 | 0 | $0.70 |

### Agent T7: Inheritance & Estate Calculators
| Calculator | Volume | Diff | CPC |
|------------|--------|------|-----|
| Inherited IRA RMD Calculator | 6,100 | 15 | $0.15 |
| Charitable Remainder Trust Calculator | 300 | 0 | $2.00 |
| WEP Calculator | 300 | 4 | $0.05 |

---

## TIER 2: BUILD NEXT - Medium Effort Good ROI

### Agent T8: Healthcare Calculators
| Calculator | Volume | Diff | CPC |
|------------|--------|------|-----|
| COBRA Cost Calculator | 700 | 10 | - |
| Medicare IRMAA Calculator | 200 | - | - |
| Nursing Home Cost Calculator | 200 | 20 | - |

### Agent T9: Income & Withdrawal
| Calculator | Volume | Diff | CPC |
|------------|--------|------|-----|
| Retirement Income Calculator | 7,500 | 47 | $1.10 |
| Safe Withdrawal Rate Calculator | 500 | - | - |
| 4% Rule Calculator | 500 | - | - |

### Agent T10: Annuity Calculators
| Calculator | Volume | Diff | CPC |
|------------|--------|------|-----|
| Immediate Annuity Calculator | 5,300 | 37 | $1.60 |
| SPIA Calculator | 500 | 11 | $2.00 |
| Deferred Income Annuity Calculator | 200 | 39 | $3.00 |

---

## Implementation Notes

### Calculator Architecture
Each calculator should:
1. Be a **server page** with metadata + **client component** for interactivity
2. Follow dark theme (bg-slate-900, glass-morphism cards)
3. Include Augusta CTA at bottom with Gold Bridge messaging
4. Have comprehensive educational content below calculator
5. Include SEO schema markup
6. Mobile-responsive with slider inputs

### Gold Bridge Messaging by Calculator Type

**FIRE Calculators:** "Protect your FIRE number from sequence of returns risk with Gold"
**Federal/Pension:** "Diversify beyond your pension with inflation-protected Gold IRA"
**Inheritance:** "Preserve inherited wealth with physical gold - passes directly to heirs"
**Reverse Mortgage:** "Consider a Gold IRA as alternative to reverse mortgage"
**Monte Carlo:** "Gold reduces portfolio volatility and improves retirement success probability"

### File Structure
```
src/app/tools/
├── [calculator-name]/
│   └── page.tsx (server component with metadata)
├──
src/components/tools/
├── [CalculatorName].tsx (client component)
```

---

## Execution Plan

### Wave 1 (Parallel Agents T1-T4): Federal + State + High CPC + Railroad
- 12 calculators total
- All zero-to-low difficulty
- ~35,000 monthly search volume

### Wave 2 (Parallel Agents T5-T7): Pension + Planning + Estate
- 9 calculators total
- Mix of difficulty levels
- ~8,000 monthly search volume + 6,100 inherited IRA

### Wave 3 (Parallel Agents T8-T10): Healthcare + Income + Annuity
- 9 calculators total
- Medium difficulty
- ~15,000 monthly search volume

---

## Expected Impact

| Metric | Current | After Phase 4 |
|--------|---------|---------------|
| Calculator Tools | 19 | 45+ |
| Monthly Search Vol | ~150,000 | ~230,000+ |
| Zero-Diff Keywords | 5 | 15+ |
| High CPC ($2+) Tools | 2 | 8+ |

---

## Priority Summary

### MUST BUILD (Zero Diff, High Value):
1. FERS Supplement Calculator (800 vol, diff 0)
2. CalPERS/CalSTRS Calculators (550 vol combined, diff 0)
3. Sequence of Returns Calculator (diff 0)
4. Charitable Remainder Trust Calculator (300 vol, diff 0, $2 CPC)
5. NUA Calculator (diff 0)

### HIGH VALUE (Volume + CPC):
1. Reverse Mortgage Calculator (9,600 vol, $3.50 CPC)
2. Inherited IRA RMD Calculator (6,100 vol)
3. TSP Calculator (5,400 vol)
4. Immediate Annuity Calculator (5,300 vol)
5. Monte Carlo Simulator (1,100 vol, $1.60 CPC)
