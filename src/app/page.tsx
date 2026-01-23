import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustBadges } from "@/components/home/TrustBadges";
import { Education } from "@/components/home/Education";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { FeaturedPartner } from "@/components/home/FeaturedPartner";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="flex-grow">
        <Hero />
        <TrustBadges />
        <FeaturedPartner />
        <ComparisonTable />
        <ValueProps />
        <Testimonials />
        <Education />
      </div>

      <Footer />
    </main>
  );
}
