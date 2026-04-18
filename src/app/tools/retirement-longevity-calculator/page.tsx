import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Container } from "@/components/ui/Container";
import { RetirementLongevityCalculator } from "@/components/tools/RetirementLongevityCalculator";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Retirement Longevity Calculator - How Long Will Your Money Last?",
  description: "Free retirement longevity calculator shows exactly how long your savings will last. Calculate the impact of spending, returns, inflation, and Social Security.",
  keywords: "retirement longevity calculator, how long will money last, retirement money calculator, how long will my savings last, retirement depletion calculator",
  openGraph: {
    title: "Retirement Longevity Calculator - Will Your Money Last?",
    description: "Calculate exactly how many years your retirement savings will last. See the impact of spending changes, returns, and inflation.",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
  },
};

export default function RetirementLongevityCalculatorPage() {
  return (
    <div className="min-h-screen bg-whitetext-[#F6F4EF]">
      <SchemaScript schema={articleSchema({ title: "Retirement Longevity Calculator - How Long Will Your Money Last?", description: "Free retirement longevity calculator shows exactly how long your savings will last. Calculate the impact of spending, returns, inflation, and Social Security.", slug: "/tools/retirement-longevity-calculator" })} />
      <SchemaScript schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: "Retirement Longevity Calculator", url: "/tools/retirement-longevity-calculator" }])} />
      <Navbar />
      <RetirementLongevityCalculator />
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <AugustaCTA variant="footer" headline="Worried Your Money Won't Last?" subheadline="Gold has preserved purchasing power for thousands of years. Augusta Precious Metals can help you add inflation protection to your retirement — with zero pressure." trackSource="longevity-calculator" />
        </Container>
      </section>
      <Footer />
    </div>
  );
}
