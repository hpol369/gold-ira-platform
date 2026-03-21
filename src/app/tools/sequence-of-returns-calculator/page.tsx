import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Container } from "@/components/ui/Container";
import { SequenceOfReturnsCalculator } from "@/components/tools/SequenceOfReturnsCalculator";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sequence of Returns Calculator - Retirement Risk Tool",
  description: "Free sequence of returns calculator. See how return timing affects retirement outcomes and learn to protect against sequence risk.",
  keywords: "sequence of returns calculator, sequence of returns risk calculator, retirement sequence risk, sequence risk retirement, order of returns risk",
  openGraph: {
    title: "Sequence of Returns Calculator - See Why Timing Matters",
    description: "Same average returns, vastly different outcomes. Calculate how sequence of returns risk can devastate or boost your retirement.",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
  },
};

export default function SequenceOfReturnsCalculatorPage() {
  return (
    <div className="min-h-screen bg-whitetext-slate-900">
      <SchemaScript schema={articleSchema({ title: "Sequence of Returns Calculator - Retirement Risk Tool", description: "Free sequence of returns calculator. See how return timing affects retirement outcomes and learn to protect against sequence risk.", slug: "/tools/sequence-of-returns-calculator" })} />
      <SchemaScript schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: "Sequence of Returns Calculator", url: "/tools/sequence-of-returns-calculator" }])} />
      <Navbar />
      <SequenceOfReturnsCalculator />
      <section className="py-16 bg-slate-50">
        <Container>
          <AugustaCTA variant="footer" headline="Protect Against Sequence Risk" subheadline="Gold moves inversely to stocks — it gained 25% during 2008 while the S&P fell 37%. Augusta Precious Metals can help you add this protection to your portfolio." trackSource="sequence-of-returns-calculator" />
        </Container>
      </section>
      <Footer />
    </div>
  );
}
