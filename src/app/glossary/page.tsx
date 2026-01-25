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
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 font-semibold text-sm mb-6">
              <Book className="h-4 w-4" />
              REFERENCE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Gold IRA Glossary
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              {glossaryTerms.length}+ terms explained in plain English. Understand
              every aspect of Gold IRA investing.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedLetter(null);
                  setSelectedCategory(null);
                }}
                placeholder="Search terms..."
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Alphabet Navigation */}
      <section className="py-4 bg-slate-900 border-b border-white/5 sticky top-0 z-10">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-1">
              <button
                onClick={clearFilters}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                  !selectedLetter && !selectedCategory && !searchQuery
                    ? "bg-amber-500 text-slate-900"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
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
                        ? "bg-amber-500 text-slate-900"
                        : isAvailable
                        ? "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                        : "bg-transparent text-slate-700 cursor-not-allowed"
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
      <section className="py-4 bg-slate-900 border-b border-white/5">
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
                        ? "bg-amber-500 text-slate-900"
                        : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
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
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            {searchQuery && (
              <p className="text-slate-400 mb-6">
                Found {filteredTerms.length} result
                {filteredTerms.length !== 1 ? "s" : ""} for &quot;{searchQuery}&quot;
              </p>
            )}

            {selectedCategory && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
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
                      <h2 className="text-3xl font-bold text-amber-400 mb-6 sticky top-20 bg-slate-900 py-2">
                        {letter}
                      </h2>
                      <div className="space-y-4">
                        {terms
                          .sort((a, b) => a.term.localeCompare(b.term))
                          .map((term) => (
                            <div
                              key={term.slug}
                              id={term.slug}
                              className="bg-white/5 border border-white/10 rounded-xl p-5 scroll-mt-32"
                            >
                              <h3 className="text-lg font-bold text-white mb-2">
                                {term.term}
                              </h3>
                              <p className="text-slate-400 leading-relaxed mb-3">
                                {term.definition}
                              </p>
                              {term.relatedTerms && term.relatedTerms.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  <span className="text-slate-500 text-sm">
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
                                        className="text-amber-400 text-sm hover:underline"
                                      >
                                        {related}
                                      </a>
                                    ) : (
                                      <span
                                        key={related}
                                        className="text-slate-500 text-sm"
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
                <Book className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400">
                  No terms found. Try a different search or{" "}
                  <button
                    onClick={clearFilters}
                    className="text-amber-400 hover:underline"
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
      <section className="py-16 bg-slate-800/50">
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
      <section className="py-12 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-400 text-center mb-6">
              Continue Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/academy"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-400 text-sm hover:bg-white/10 hover:text-white transition-all"
              >
                Gold IRA Academy
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-400 text-sm hover:bg-white/10 hover:text-white transition-all"
              >
                FAQ Hub
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/what-is-a-gold-ira"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-400 text-sm hover:bg-white/10 hover:text-white transition-all"
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
