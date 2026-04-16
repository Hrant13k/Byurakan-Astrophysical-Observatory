"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PageHeader from "@/components/shared/PageHeader";
import { publications, publicationCategories } from "@/data/publications";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PublicationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const years = useMemo(
    () => [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a),
    []
  );

  const filtered = useMemo(() => {
    return publications.filter((pub) => {
      const matchCategory =
        activeCategory === "All" || pub.category === activeCategory;
      const matchYear = !selectedYear || pub.year === selectedYear;
      const matchSearch =
        !searchQuery ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.some((a) =>
          a.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchCategory && matchYear && matchSearch;
    });
  }, [activeCategory, selectedYear, searchQuery]);

  return (
    <>
      <PageHeader
        title="Publications"
        description="Explore our research output spanning stellar physics, extragalactic astronomy, cosmology, and more."
      />

      <section className="py-14 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="space-y-5 mb-12">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl bg-muted pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground border border-border/60 outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Category & Year filters */}
            <div className="flex flex-wrap gap-2">
              {publicationCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium tracking-wide transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
              <span className="mx-1.5 border-l border-border/60" />
              <button
                onClick={() => setSelectedYear(null)}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium tracking-wide transition-all duration-200 ${
                  !selectedYear
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                All Years
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium tracking-wide transition-all duration-200 ${
                    selectedYear === year
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-[13px] text-muted-foreground mb-6 tracking-wide">
            {filtered.length} of {publications.length} publications
          </p>

          {/* Publications list */}
          <div className="space-y-4">
            {filtered.map((pub, index) => (
              <motion.article
                key={pub.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04, ease }}
                className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <Badge variant="secondary" className="text-[10px] tracking-wider uppercase">
                        {pub.category}
                      </Badge>
                      <span className="text-[11px] text-muted-foreground tracking-wide">
                        {pub.year}
                      </span>
                    </div>
                    <h3 className="text-[15px] font-semibold text-foreground leading-snug">
                      {pub.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {pub.authors.join(", ")}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground/70 italic">
                      {pub.journal}
                      {pub.volume && `, ${pub.volume}`}
                      {pub.pages && `, pp. ${pub.pages}`}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {pub.abstract}
                    </p>
                  </div>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 flex items-center gap-1 text-[11px] font-medium text-primary hover:underline underline-offset-2 mt-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                      DOI
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="h-10 w-10 text-muted-foreground/20 mx-auto mb-4" />
              <p className="text-muted-foreground">
                No publications match your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
