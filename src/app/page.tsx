import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustBadges } from "@/components/home/TrustBadges";
import { AuthorBio } from "@/components/home/AuthorBio";
import { Education } from "@/components/home/Education";
import { ComparisonTable } from "@/components/home/ComparisonTable";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="flex-grow">
        <Hero />
        <TrustBadges />
        <ComparisonTable />
        <ValueProps />
        <Testimonials />
        <AuthorBio />
        <Education />
      </div>

      <Footer />
    </main>
  );
}
