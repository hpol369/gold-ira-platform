"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
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
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/10 border border-[#B22234]/30 rounded-full text-[#B22234] font-semibold text-sm mb-6">
              <HelpCircle className="h-4 w-4" />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#000080] mb-6">
              Gold IRA FAQ
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Get answers to the most common questions about Gold IRAs, rollovers,
              taxes, and more. {faqs.length}+ questions answered.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedCategory(null);
                }}
                placeholder="Search questions..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl text-[#000080] placeholder-slate-400 focus:outline-none focus:border-[#B22234]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Category Pills */}
      <section className="py-8 bg-white border-b border-slate-200">
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
                    ? "bg-[#B22234] text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-[#000080]"
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
                        ? "bg-[#B22234] text-white"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-[#000080]"
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
              <p className="text-slate-500 mb-6">
                Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? "s" : ""} for &quot;{searchQuery}&quot;
              </p>
            )}

            {selectedCategory && !searchQuery && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#000080] mb-2">
                  {faqCategories.find((c) => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-slate-500">
                  {faqCategories.find((c) => c.id === selectedCategory)?.description}
                </p>
              </div>
            )}

            <div className="space-y-3">
              {filteredFAQs.map((faq) => (
                <details
                  key={faq.id}
                  className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="text-[#000080] font-medium pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 border-t border-slate-200 pt-4">
                    <p className="text-slate-500 leading-relaxed">{faq.answer}</p>
                    {!searchQuery && !selectedCategory && (
                      <div className="mt-3">
                        <span className="inline-block px-2 py-1 bg-slate-200 text-slate-500 text-xs rounded">
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
                <HelpCircle className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">
                  No questions found matching your search. Try different keywords or{" "}
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}
                    className="text-[#B22234] hover:underline"
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
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-[#000080] text-center mb-12">
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
                      className="bg-white border border-slate-200 rounded-xl p-5 text-left hover:bg-slate-100 hover:border-[#B22234]/30 transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-[#B22234]/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-[#B22234]" />
                        </div>
                        <span className="text-[#000080] font-semibold group-hover:text-[#B22234] transition-colors">
                          {category.name}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-2">
                        {category.description}
                      </p>
                      <span className="text-[#B22234] text-sm">
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
      <section className="py-12 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-500 text-center mb-6">
              Learn More
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/academy"
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-500 text-sm hover:bg-slate-100 hover:text-[#000080] transition-all"
              >
                Gold IRA Academy
              </Link>
              <Link
                href="/what-is-a-gold-ira"
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-500 text-sm hover:bg-slate-100 hover:text-[#000080] transition-all"
              >
                What is a Gold IRA?
              </Link>
              <Link
                href="/gold-ira-rules"
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-500 text-sm hover:bg-slate-100 hover:text-[#000080] transition-all"
              >
                Gold IRA Rules
              </Link>
              <Link
                href="/glossary"
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-500 text-sm hover:bg-slate-100 hover:text-[#000080] transition-all"
              >
                Glossary of Terms
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
