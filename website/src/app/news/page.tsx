"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import NewsCard from "@/components/cards/NewsCard";
import { news, newsCategories } from "@/data/news";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? news
      : news.filter((n) => n.category === activeCategory);

  return (
    <>
      <PageHeader
        title="News"
        description="Stay up to date with the latest discoveries, achievements, and developments at Byurakan Observatory."
      />

      <section className="py-14 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {newsCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item, index) => (
              <NewsCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">
              No news articles found in this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
