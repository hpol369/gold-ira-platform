// Minimal layout for all landing pages - no nav/footer
// This is intentional for paid ads landing pages to reduce distractions
// LeadModalProvider is now in root layout via Providers component

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
