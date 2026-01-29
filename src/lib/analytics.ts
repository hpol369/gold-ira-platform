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

// NOTE: Google Ads conversion tracking is now handled directly in:
// - LeadCaptureModal.tsx (LP forms)
// - LeadCaptureForm.tsx (main site form)
// Conversion tag: AW-17807049464/b4n5CImJ3O4bEPiFiKtC
