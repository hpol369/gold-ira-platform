"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  glossaryTerms,
  glossaryCategories,
  getTermsByCategory,
  getAvailableLetters,
  getTermsByLetter,
} from "@/config/glossary";
import { Book, Search, ArrowRight } from "lucide-react";

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const availableLetters = useMemo(() => getAvailableLetters(), []);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Filter terms based on search, letter, or category
  const filteredTerms = useMemo(() => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return glossaryTerms.filter(
        (term) =>
          term.term.toLowerCase().includes(query) ||
          term.definition.toLowerCase().includes(query)
      );
    }
    if (selectedLetter) {
      return getTermsByLetter(selectedLetter);
    }
    if (selectedCategory) {
      return getTermsByCategory(selectedCategory);
    }
    return glossaryTerms;
  }, [searchQuery, selectedLetter, selectedCategory]);

  // Group terms by first letter for display
  const groupedTerms = useMemo(() => {
    const grouped: Record<string, typeof glossaryTerms> = {};
    filteredTerms.forEach((term) => {
      const letter = term.term[0].toUpperCase();
      if (!grouped[letter]) {
        grouped[letter] = [];
      }
      grouped[letter].push(term);
    });
    return grouped;
  }, [filteredTerms]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLetter(null);
    setSelectedCategory(null);
  };

  return (
    <main className="min-h-screen bg-[#0C0D18]">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(220,38,38,0.1)] border border-[rgba(197,149,46,0.32)] rounded-full text-[#D4A94E] font-semibold text-sm mb-6">
              <Book className="h-4 w-4" />
              REFERENCE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F6F4EF] mb-6">
              Gold IRA Glossary
            </h1>
            <p className="text-xl text-[#D0CCC4] max-w-2xl mx-auto mb-8">
              {glossaryTerms.length}+ terms explained in plain English. Understand
              every aspect of Gold IRA investing.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#A8A39A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedLetter(null);
                  setSelectedCategory(null);
                }}
                placeholder="Search terms..."
                className="w-full pl-12 pr-4 py-4 bg-[#161828] border border-[#2A2D42] rounded-xl text-[#F6F4EF] placeholder-slate-400 focus:outline-none focus:border-[#B22234]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Alphabet Navigation */}
      <section className="py-4 bg-[#161828] border-b border-[#2A2D42] sticky top-0 z-10">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-1">
              <button
                onClick={clearFilters}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                  !selectedLetter && !selectedCategory && !searchQuery
                    ? "bg-[#DC2626] text-white"
                    : "bg-[#121423] text-[#A8A39A] hover:bg-[#2A2D42] hover:text-[#F6F4EF]"
                }`}
              >
                All
              </button>
              {alphabet.map((letter) => {
                const isAvailable = availableLetters.includes(letter);
                const isSelected = selectedLetter === letter;
                return (
                  <button
                    key={letter}
                    onClick={() => {
                      if (isAvailable) {
                        setSelectedLetter(letter);
                        setSearchQuery("");
                        setSelectedCategory(null);
                      }
                    }}
                    disabled={!isAvailable}
                    className={`w-8 h-8 rounded text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-[#DC2626] text-white"
                        : isAvailable
                        ? "bg-[#121423] text-[#A8A39A] hover:bg-[#2A2D42] hover:text-[#F6F4EF]"
                        : "bg-transparent text-[#3F4460] cursor-not-allowed"
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Category Pills */}
      <section className="py-4 bg-[#161828] border-b border-[#2A2D42]">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {glossaryCategories.map((category) => {
                const count = getTermsByCategory(category.id).length;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(
                        selectedCategory === category.id ? null : category.id
                      );
                      setSelectedLetter(null);
                      setSearchQuery("");
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      selectedCategory === category.id
                        ? "bg-[#DC2626] text-white"
                        : "bg-[#121423] text-[#A8A39A] hover:bg-[#2A2D42] hover:text-[#F6F4EF]"
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

      {/* Terms List */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto">
            {searchQuery && (
              <p className="text-[#A8A39A] mb-6">
                Found {filteredTerms.length} result
                {filteredTerms.length !== 1 ? "s" : ""} for &quot;{searchQuery}&quot;
              </p>
            )}

            {selectedCategory && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-2">
                  {glossaryCategories.find((c) => c.id === selectedCategory)?.name}
                </h2>
              </div>
            )}

            {Object.keys(groupedTerms).length > 0 ? (
              <div className="space-y-12">
                {Object.entries(groupedTerms)
                  .sort(([a], [b]) => a.localeCompare(b))
                  .map(([letter, terms]) => (
                    <div key={letter} id={`letter-${letter}`}>
                      <h2 className="text-3xl font-bold text-[#D4A94E] mb-6 sticky top-20 bg-white py-2">
                        {letter}
                      </h2>
                      <div className="space-y-4">
                        {terms
                          .sort((a, b) => a.term.localeCompare(b.term))
                          .map((term) => (
                            <div
                              key={term.slug}
                              id={term.slug}
                              className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-5 scroll-mt-32"
                            >
                              <h3 className="text-lg font-bold text-[#F6F4EF] mb-2">
                                {term.term}
                              </h3>
                              <p className="text-[#A8A39A] leading-relaxed mb-3">
                                {term.definition}
                              </p>
                              {term.relatedTerms && term.relatedTerms.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  <span className="text-[#A8A39A] text-sm">
                                    Related:
                                  </span>
                                  {term.relatedTerms.map((related) => {
                                    const relatedTerm = glossaryTerms.find(
                                      (t) =>
                                        t.term.toLowerCase() ===
                                        related.toLowerCase()
                                    );
                                    return relatedTerm ? (
                                      <a
                                        key={related}
                                        href={`#${relatedTerm.slug}`}
                                        className="text-[#D4A94E] text-sm hover:underline"
                                      >
                                        {related}
                                      </a>
                                    ) : (
                                      <span
                                        key={related}
                                        className="text-[#A8A39A] text-sm"
                                      >
                                        {related}
                                      </span>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Book className="h-12 w-12 text-[#3F4460] mx-auto mb-4" />
                <p className="text-[#A8A39A]">
                  No terms found. Try a different search or{" "}
                  <button
                    onClick={clearFilters}
                    className="text-[#D4A94E] hover:underline"
                  >
                    browse all terms
                  </button>
                  .
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Ready to Put This Knowledge to Work?"
            subheadline="Now that you understand the terminology, speak with a specialist who can help you apply it to your retirement plan."
            trackSource="glossary"
          />
        </Container>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-[#A8A39A] text-center mb-6">
              Continue Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/academy"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#121423] border border-[#2A2D42] rounded-full text-[#A8A39A] text-sm hover:bg-[#2A2D42] hover:text-[#F6F4EF] transition-all"
              >
                Gold IRA Academy
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#121423] border border-[#2A2D42] rounded-full text-[#A8A39A] text-sm hover:bg-[#2A2D42] hover:text-[#F6F4EF] transition-all"
              >
                FAQ Hub
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/what-is-a-gold-ira"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#121423] border border-[#2A2D42] rounded-full text-[#A8A39A] text-sm hover:bg-[#2A2D42] hover:text-[#F6F4EF] transition-all"
              >
                What is a Gold IRA?
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
