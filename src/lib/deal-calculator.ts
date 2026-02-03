// Savings range mapping (no under_50k - all leads are qualified)
export const SAVINGS_RANGES: Record<string, { min: number; max: number; label: string }> = {
  "50k_100k": { min: 50000, max: 100000, label: "$50K - $100K" },
  "100k_250k": { min: 100000, max: 250000, label: "$100K - $250K" },
  "250k_500k": { min: 250000, max: 500000, label: "$250K - $500K" },
  "500k_1m": { min: 500000, max: 1000000, label: "$500K - $1M" },
  "over_1m": { min: 1000000, max: 2000000, label: "Over $1M" },
};

// Calculate potential deal range
export function calculatePotentialDeal(savings: string, percentage: string): { min: number; max: number } {
  const range = SAVINGS_RANGES[savings];
  if (!range) return { min: 0, max: 0 };

  const pct = parseInt(percentage) / 100;

  return {
    min: Math.round(range.min * pct),
    max: Math.round(range.max * pct),
  };
}

// Format currency for display
export function formatCurrency(amount: number): string {
  if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
  if (amount >= 1000) return `$${Math.round(amount / 1000)}K`;
  return `$${amount}`;
}

// Get savings label for display
export function getSavingsLabel(savings: string): string {
  return SAVINGS_RANGES[savings]?.label || savings;
}

// Determine hot lead level based on potential deal max
export function getHotLeadIndicator(potentialMax: number): string {
  if (potentialMax >= 500000) return "🔥🔥🔥 WHALE ALERT! 🔥🔥🔥";
  if (potentialMax >= 250000) return "🔥🔥 HIGH VALUE LEAD! 🔥🔥";
  if (potentialMax >= 100000) return "🔥 HOT LEAD!";
  return "";
}
