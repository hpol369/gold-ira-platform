// src/lib/analytics.ts
// Google Analytics 4 event tracking utilities

declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js',
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

// Track affiliate link clicks
export function trackAffiliateClick(
  company: string,
  source: string,
  linkType: 'cta' | 'sidebar' | 'inline' | 'mobile' | 'navbar' | 'hero' = 'cta'
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'affiliate_click', {
      event_category: 'affiliate',
      event_label: company,
      company: company,
      source_page: source,
      link_type: linkType,
      value: 1,
    });
  }
}

// Track quiz completions
export function trackQuizComplete(result: string, score: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quiz_complete', {
      event_category: 'engagement',
      event_label: result,
      quiz_result: result,
      quiz_score: score,
      value: 1,
    });
  }
}

// Track CTA views (for measuring CTR)
export function trackCTAView(ctaType: string, source: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_view', {
      event_category: 'engagement',
      event_label: ctaType,
      source_page: source,
    });
  }
}

// Track page scroll depth
export function trackScrollDepth(depth: number, page: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'engagement',
      event_label: `${depth}%`,
      scroll_depth: depth,
      page_path: page,
    });
  }
}

// Track outbound links (non-affiliate)
export function trackOutboundClick(url: string, linkText: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'outbound_click', {
      event_category: 'outbound',
      event_label: url,
      link_text: linkText,
    });
  }
}

// Track calculator interactions (for Google Ads optimization)
export function trackCalculatorInteraction(
  action: 'slider_change' | 'view_result' | 'time_on_calc',
  data: { amount?: number; years?: number; timeSpent?: number; source?: string }
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', `calc_${action}`, {
      event_category: 'calculator',
      event_label: data.source || 'wealth_calculator',
      calc_amount: data.amount,
      calc_years: data.years,
      time_spent: data.timeSpent,
      value: 1,
    });
  }
}

// ============================================
// FUNNEL TRACKING — Lead Form Steps
// ============================================

// Track each step of the /get-started funnel
export function trackFunnelStep(
  step: 'metal' | 'savings' | 'concern' | 'result' | 'contact' | 'submit' | 'success',
  data?: { savingsTier?: string; concern?: string; company?: string; abVariant?: string; metalPreference?: string }
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', `funnel_${step}`, {
      event_category: 'funnel',
      event_label: step,
      savings_tier: data?.savingsTier,
      concern: data?.concern,
      matched_company: data?.company,
      ab_variant: data?.abVariant,
      value: step === 'success' ? 50 : 1,
    });
  }
}

// Track lead form submission (separate from Google Ads conversion)
export function trackLeadSubmission(data: {
  source: string;
  savingsTier?: string;
  company?: string;
  isAugusta: boolean;
}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'lead_submitted', {
      event_category: 'conversion',
      event_label: data.company || 'unknown',
      source_page: data.source,
      savings_tier: data.savingsTier,
      is_augusta: data.isAugusta,
      value: data.isAugusta ? 50 : 25,
    });
  }
}

// ============================================
// ENGAGEMENT TRACKING
// ============================================

// Track newsletter/email signups
export function trackEmailSignup(source: string, trigger: 'exit_intent' | 'inline' | 'footer' | 'guide_download') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'email_signup', {
      event_category: 'conversion',
      event_label: trigger,
      source_page: source,
      value: 5,
    });
  }
}

// Track exit intent popup
export function trackExitIntent(action: 'shown' | 'closed' | 'converted', source: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', `exit_intent_${action}`, {
      event_category: 'engagement',
      event_label: action,
      source_page: source,
    });
  }
}

// Track quiz steps
export function trackQuizStep(step: number, answer?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quiz_step', {
      event_category: 'engagement',
      event_label: `step_${step}`,
      quiz_step: step,
      quiz_answer: answer,
    });
  }
}

// Track guide/PDF downloads
export function trackGuideDownload(guideName: string, source: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'guide_download', {
      event_category: 'conversion',
      event_label: guideName,
      source_page: source,
      value: 10,
    });
  }
}

// Track calculator usage (generic for all 43+ calculators)
export function trackCalculatorUsage(calculatorName: string, action: 'start' | 'complete' | 'cta_click') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', `calculator_${action}`, {
      event_category: 'calculator',
      event_label: calculatorName,
      value: action === 'cta_click' ? 5 : 1,
    });
  }
}

// Track page engagement (time on page milestones)
export function trackPageEngagement(milestone: '30s' | '60s' | '120s' | '300s', pagePath: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_engagement', {
      event_category: 'engagement',
      event_label: milestone,
      page_path: pagePath,
      value: 1,
    });
  }
}

// NOTE: Google Ads conversion tracking is now handled directly in:
// - LeadCaptureModal.tsx (LP forms)
// - LeadCaptureForm.tsx (main site form)
// Conversion tag configured in: src/config/google-ads.ts
