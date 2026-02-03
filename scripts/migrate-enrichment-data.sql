-- Migration script: Parse enrichment data from notes field to dedicated columns
-- Run this in Supabase SQL Editor

-- Step 1: Preview what we have (run this first to check)
-- SELECT id, first_name, notes FROM leads WHERE notes ILIKE '%ENRICHMENT%' OR notes ILIKE '%Protect%';

-- Step 2: Parse percentage from notes format "% To Protect: 50%+"
UPDATE leads
SET percentage_to_protect =
  CASE
    WHEN notes ILIKE '%To Protect: 100%' THEN '100'
    WHEN notes ILIKE '%To Protect: 75%' THEN '75'
    WHEN notes ILIKE '%To Protect: 50%' THEN '50'
    WHEN notes ILIKE '%To Protect: 25%' THEN '25'
    -- Fallback patterns
    WHEN notes ILIKE '%100%%' THEN '100'
    WHEN notes ILIKE '%75%%' THEN '75'
    WHEN notes ILIKE '%50%%' THEN '50'
    WHEN notes ILIKE '%25%%' THEN '25'
    ELSE NULL
  END
WHERE notes IS NOT NULL
  AND notes != ''
  AND (notes ILIKE '%Protect%' OR notes ILIKE '%ENRICHMENT%')
  AND percentage_to_protect IS NULL;

-- Step 3: Parse savings amount if present in notes
-- Format might be: "Savings: $100K-$250K" or "$100k-250k" or "100k_250k"
UPDATE leads
SET total_retirement_savings =
  CASE
    WHEN notes ILIKE '%over 1m%' OR notes ILIKE '%over $1%' OR notes ILIKE '%1 million%' OR notes ILIKE '%$1M+%' THEN 'over_1m'
    WHEN notes ILIKE '%500k-1m%' OR notes ILIKE '%500k - 1%' OR notes ILIKE '%$500k%' OR notes ILIKE '%500K%' THEN '500k_1m'
    WHEN notes ILIKE '%250k-500k%' OR notes ILIKE '%250k - 500%' OR notes ILIKE '%$250k%' OR notes ILIKE '%250K%' THEN '250k_500k'
    WHEN notes ILIKE '%100k-250k%' OR notes ILIKE '%100k - 250%' OR notes ILIKE '%$100k%' OR notes ILIKE '%100K%' THEN '100k_250k'
    WHEN notes ILIKE '%50k-100k%' OR notes ILIKE '%50k - 100%' OR notes ILIKE '%$50k%' OR notes ILIKE '%50K%' THEN '50k_100k'
    ELSE NULL
  END
WHERE notes IS NOT NULL
  AND notes != ''
  AND total_retirement_savings IS NULL;

-- Step 4: Calculate potential deal values for leads that have both percentage and savings
UPDATE leads
SET
  potential_deal_min = CASE total_retirement_savings
    WHEN 'over_1m' THEN ROUND(1000000 * (percentage_to_protect::int / 100.0))
    WHEN '500k_1m' THEN ROUND(500000 * (percentage_to_protect::int / 100.0))
    WHEN '250k_500k' THEN ROUND(250000 * (percentage_to_protect::int / 100.0))
    WHEN '100k_250k' THEN ROUND(100000 * (percentage_to_protect::int / 100.0))
    WHEN '50k_100k' THEN ROUND(50000 * (percentage_to_protect::int / 100.0))
    ELSE NULL
  END,
  potential_deal_max = CASE total_retirement_savings
    WHEN 'over_1m' THEN ROUND(2000000 * (percentage_to_protect::int / 100.0))
    WHEN '500k_1m' THEN ROUND(1000000 * (percentage_to_protect::int / 100.0))
    WHEN '250k_500k' THEN ROUND(500000 * (percentage_to_protect::int / 100.0))
    WHEN '100k_250k' THEN ROUND(250000 * (percentage_to_protect::int / 100.0))
    WHEN '50k_100k' THEN ROUND(100000 * (percentage_to_protect::int / 100.0))
    ELSE NULL
  END
WHERE total_retirement_savings IS NOT NULL
  AND percentage_to_protect IS NOT NULL
  AND potential_deal_min IS NULL;

-- Step 5: Mark qualified leads (anyone with savings data is qualified)
UPDATE leads
SET is_qualified = TRUE
WHERE total_retirement_savings IS NOT NULL
  AND is_qualified IS NULL;

-- Step 6: Verify the migration results
SELECT
  id,
  first_name,
  last_name,
  LEFT(notes, 80) as notes_preview,
  percentage_to_protect,
  total_retirement_savings,
  potential_deal_min,
  potential_deal_max,
  is_qualified
FROM leads
WHERE percentage_to_protect IS NOT NULL
   OR total_retirement_savings IS NOT NULL
   OR notes ILIKE '%ENRICHMENT%'
   OR notes ILIKE '%Protect%'
ORDER BY created_at DESC;
