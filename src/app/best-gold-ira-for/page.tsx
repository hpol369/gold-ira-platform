import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { audiences } from "@/config/audiences";
import { createPageMetadata } from "@/lib/metadata";
import {
  Users,
  ArrowRight,
  Target,
  GraduationCap,
  Briefcase,
  Shield,
  TrendingUp,
  Heart,
  Calendar,
  Building,
  Landmark,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Best Gold IRA For Your Situation | Rich Dad Retirement",
  description:
    "Find the best Gold IRA strategy for your specific situation. Personalized guides for retirees, veterans, teachers, beginners, and more.",
  url: "https://www.richdadretirement.com/best-gold-ira-for",
  imageAlt: "Best Gold IRA for Your Situation - Rich Dad Retirement",
});

const audienceCategories = [
  {
    name: "By Life Stage",
    icon: Calendar,
    audiences: ["retirees", "millennials", "beginners"],
  },
  {
    name: "By Profession",
    icon: Briefcase,
    audiences: ["veterans", "teachers", "federal-employees", "self-employed"],
  },
  {
    name: "By Financial Goal",
    icon: Target,
    audiences: ["inflation-protection", "estate-planning", "high-net-worth"],
  },
  {
    name: "Specialized Guides",
    icon: Users,
    audiences: ["women"],
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  retirees: Shield,
  veterans: Shield,
  teachers: GraduationCap,
  beginners: GraduationCap,
  "high-net-worth": TrendingUp,
  "self-employed": Briefcase,
  women: Heart,
  millennials: TrendingUp,
  "federal-employees": Building,
  "estate-planning": Landmark,
  "inflation-protection": TrendingUp,
};

export default function BestGoldIRAForPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/10 border border-[#B22234]/20 rounded-full text-[#B22234] font-semibold text-sm mb-6">
              <Target className="h-4 w-4" />
              PERSONALIZED GUIDES
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#000080] mb-6">
              Best Gold IRA For Your Situation
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everyone&apos;s retirement journey is different. Find the guide tailored
              to your specific needs, background, and goals.
            </p>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            {audienceCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.name}>
                  <div className="flex items-center gap-2 text-[#B22234] font-semibold mb-6">
                    <CategoryIcon className="h-5 w-5" />
                    {category.name}
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.audiences.map((slug) => {
                      const data = audiences[slug];
                      if (!data) return null;
                      const Icon = iconMap[slug] || Target;
                      return (
                        <Link
                          key={slug}
                          href={`/best-gold-ira-for/${slug}`}
                          className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-white hover:border-[#B22234]/30 hover:shadow-md transition-all"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-200">
                              <Icon className="h-6 w-6 text-[#B22234]" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#B22234] transition-colors mb-2">
                                {data.title}
                              </h3>
                              <p className="text-slate-600 text-sm line-clamp-2">
                                {data.heroSubheadline}
                              </p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-[#B22234] transition-colors flex-shrink-0" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* All Guides */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[#000080] text-center mb-8">
              All Personalized Guides
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {Object.entries(audiences).map(([slug, data]) => (
                <Link
                  key={slug}
                  href={`/best-gold-ira-for/${slug}`}
                  className="px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm hover:bg-slate-50 hover:text-[#B22234] hover:border-[#B22234]/30 transition-all text-center shadow-sm"
                >
                  Best Gold IRA for {data.title}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Not Sure Which Guide Fits You?"
            subheadline="Speak with a Gold IRA specialist who can analyze your specific situation and provide personalized recommendations."
            trackSource="best-for-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
