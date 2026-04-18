"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { faqs, faqCategories, getFAQsByCategory } from "@/config/faqs";
import {
  HelpCircle,
  Search,
  ChevronDown,
  BookOpen,
  Settings,
  ArrowLeftRight,
  Calculator,
  Gem,
  Lock,
  DollarSign,
  Building,
  Wallet,
  Target,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Settings,
  ArrowLeftRight,
  Calculator,
  Gem,
  Lock,
  DollarSign,
  Building,
  Wallet,
  Target,
};

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter FAQs based on search or category
  const filteredFAQs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : selectedCategory
    ? getFAQsByCategory(selectedCategory)
    : faqs;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(220,38,38,0.1)] border border-[#B22234]/30 rounded-full text-[#D4A94E] font-semibold text-sm mb-6">
              <HelpCircle className="h-4 w-4" />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F6F4EF] mb-6">
              Gold IRA FAQ
            </h1>
            <p className="text-xl text-[#D0CCC4] max-w-2xl mx-auto mb-8">
              Get answers to the most common questions about Gold IRAs, rollovers,
              taxes, and more. {faqs.length}+ questions answered.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#A8A39A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedCategory(null);
                }}
                placeholder="Search questions..."
                className="w-full pl-12 pr-4 py-4 bg-[#161828] border border-[#2A2D42] rounded-xl text-[#F6F4EF] placeholder-slate-400 focus:outline-none focus:border-[#B22234]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Answer-First GEO Block */}
      <section className="py-6 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <AnswerFirst
              answer="A Gold IRA is a self-directed retirement account that holds physical gold, silver, platinum, or palladium. You fund it by rolling over your existing 401(k) or IRA tax-free, choose IRS-approved metals (minimum 99.5% pure for gold), and a licensed custodian stores them in an approved depository. Contribution limits for 2026 are $7,000 ($8,000 if 50+), and rollovers have no dollar limit."
              keyFacts={[
                "Gold IRA rollovers from 401(k)s and IRAs are 100% tax-free when done as direct transfers",
                "IRS requires metals be stored in an approved depository — home storage is illegal",
                "Minimum investments range from $2,000 (Noble Gold) to $50,000 (Augusta Precious Metals)",
                "Annual fees typically run $200-$300 for storage and custodian services",
              ]}
              variant="light"
            />
          </div>
        </Container>
      </section>

      {/* Category Pills */}
      <section className="py-8 bg-[#161828] border-b border-[#2A2D42]">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery("");
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !selectedCategory && !searchQuery
                    ? "bg-[#DC2626] text-white"
                    : "bg-[#121423] text-[#A8A39A] hover:bg-slate-200 hover:text-[#F6F4EF]"
                }`}
              >
                All Questions ({faqs.length})
              </button>
              {faqCategories.map((category) => {
                const count = getFAQsByCategory(category.id).length;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setSearchQuery("");
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? "bg-[#DC2626] text-white"
                        : "bg-[#121423] text-[#A8A39A] hover:bg-slate-200 hover:text-[#F6F4EF]"
                    }`}
                  >
                    {category.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {searchQuery && (
              <p className="text-[#A8A39A] mb-6">
                Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? "s" : ""} for &quot;{searchQuery}&quot;
              </p>
            )}

            {selectedCategory && !searchQuery && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-2">
                  {faqCategories.find((c) => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-[#A8A39A]">
                  {faqCategories.find((c) => c.id === selectedCategory)?.description}
                </p>
              </div>
            )}

            <div className="space-y-3">
              {filteredFAQs.map((faq) => (
                <details
                  key={faq.id}
                  className="group bg-[#0C0D18] border border-[#2A2D42] rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="text-[#F6F4EF] font-medium pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className="h-5 w-5 text-[#A8A39A] group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 border-t border-[#2A2D42] pt-4">
                    <p className="text-[#A8A39A] leading-relaxed">{faq.answer}</p>
                    {!searchQuery && !selectedCategory && (
                      <div className="mt-3">
                        <span className="inline-block px-2 py-1 bg-slate-200 text-[#A8A39A] text-xs rounded">
                          {faqCategories.find((c) => c.id === faq.category)?.name}
                        </span>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="h-12 w-12 text-[#3F4460] mx-auto mb-4" />
                <p className="text-[#A8A39A]">
                  No questions found matching your search. Try different keywords or{" "}
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}
                    className="text-[#D4A94E] hover:underline"
                  >
                    browse all questions
                  </button>
                  .
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Category Overview */}
      {!searchQuery && !selectedCategory && (
        <section className="py-16 bg-[#0C0D18]">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-[#F6F4EF] text-center mb-12">
                Browse by Category
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {faqCategories.map((category) => {
                  const Icon = iconMap[category.icon] || HelpCircle;
                  const count = getFAQsByCategory(category.id).length;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className="bg-[#161828] border border-[#2A2D42] rounded-xl p-5 text-left hover:bg-[#1E2134] hover:border-[rgba(197,149,46,0.45)] transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-[rgba(220,38,38,0.1)] rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-[#D4A94E]" />
                        </div>
                        <span className="text-[#F6F4EF] font-semibold group-hover:text-[#D4A94E] transition-colors">
                          {category.name}
                        </span>
                      </div>
                      <p className="text-[#A8A39A] text-sm mb-2">
                        {category.description}
                      </p>
                      <span className="text-[#D4A94E] text-sm">
                        {count} questions
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Still Have Questions?"
            subheadline="Speak with a Gold IRA specialist who can answer your specific questions and provide personalized guidance."
            trackSource="faq"
          />
        </Container>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-[#A8A39A] text-center mb-6">
              Learn More
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/academy"
                className="px-4 py-2 bg-[#161828] border border-[#2A2D42] rounded-full text-[#A8A39A] text-sm hover:bg-[#1E2134] hover:text-[#F6F4EF] transition-all"
              >
                Gold IRA Academy
              </Link>
              <Link
                href="/what-is-a-gold-ira"
                className="px-4 py-2 bg-[#161828] border border-[#2A2D42] rounded-full text-[#A8A39A] text-sm hover:bg-[#1E2134] hover:text-[#F6F4EF] transition-all"
              >
                What is a Gold IRA?
              </Link>
              <Link
                href="/gold-ira-rules"
                className="px-4 py-2 bg-[#161828] border border-[#2A2D42] rounded-full text-[#A8A39A] text-sm hover:bg-[#1E2134] hover:text-[#F6F4EF] transition-all"
              >
                Gold IRA Rules
              </Link>
              <Link
                href="/glossary"
                className="px-4 py-2 bg-[#161828] border border-[#2A2D42] rounded-full text-[#A8A39A] text-sm hover:bg-[#1E2134] hover:text-[#F6F4EF] transition-all"
              >
                Glossary of Terms
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container>
          <AutoRelatedContent currentUrl="/faq" />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
