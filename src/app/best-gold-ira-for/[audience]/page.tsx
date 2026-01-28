import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { audiences, audienceSlugs, getAudienceData } from "@/config/audiences";
import {
  Target,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  HelpCircle,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

interface PageProps {
  params: Promise<{ audience: string }>;
}

export async function generateStaticParams() {
  return audienceSlugs.map((slug) => ({
    audience: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { audience } = await params;
  const data = getAudienceData(audience);

  if (!data) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function AudiencePage({ params }: PageProps) {
  const { audience } = await params;
  const data = getAudienceData(audience);

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/10 border border-[#B22234]/20 rounded-full text-[#B22234] font-semibold text-sm mb-6">
              <Target className="h-4 w-4" />
              TAILORED FOR {data.title.toUpperCase()}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#000080] mb-6">
              {data.heroHeadline}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              {data.heroSubheadline}
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#B22234] hover:bg-[#8b1c2a] text-white font-bold text-lg rounded-xl transition-all"
            >
              Get Your Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Pain Points & Benefits */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pain Points */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 text-red-600 font-semibold mb-6">
                  <AlertTriangle className="h-5 w-5" />
                  CHALLENGES YOU FACE
                </div>
                <ul className="space-y-4">
                  {data.painPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-200">
                        <span className="text-red-600 text-xs font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 text-green-600 font-semibold mb-6">
                  <CheckCircle2 className="h-5 w-5" />
                  HOW GOLD HELPS
                </div>
                <ul className="space-y-4">
                  {data.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Expert Advice */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 text-amber-700 font-semibold mb-4">
                <Lightbulb className="h-5 w-5" />
                OUR ADVICE FOR {data.title.toUpperCase()}
              </div>
              <p className="text-slate-700 text-lg leading-relaxed">
                {data.specificAdvice}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-[#B22234] font-semibold text-sm mb-4">
                <HelpCircle className="h-4 w-4" />
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                Questions From {data.title}
              </h2>
            </div>

            <div className="space-y-4">
              {data.faqQuestions.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="text-slate-900 font-semibold pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className="h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-[#000080] text-center mb-8">
              Recommended Next Steps
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {data.relatedLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:bg-slate-50 hover:border-[#B22234]/30 transition-all group shadow-sm"
                >
                  <span className="text-slate-900 font-semibold group-hover:text-[#B22234] transition-colors">
                    {link.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#B22234] mx-auto mt-2 transition-colors" />
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
            headline={`Ready to Protect Your Retirement?`}
            subheadline={`Get personalized guidance tailored to ${data.title.toLowerCase()}. Free consultation, no obligation.`}
            trackSource={`best-for-${audience}`}
          />
        </Container>
      </section>

      {/* Browse Other Audiences */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-500 text-center mb-6">
              Explore Guides for Other Situations
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {audienceSlugs
                .filter((slug) => slug !== audience)
                .slice(0, 8)
                .map((slug) => {
                  const audienceData = audiences[slug];
                  return (
                    <Link
                      key={slug}
                      href={`/best-gold-ira-for/${slug}`}
                      className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 text-sm hover:bg-slate-50 hover:text-slate-900 transition-all"
                    >
                      {audienceData.title}
                    </Link>
                  );
                })}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
