"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import NewsCard from "@/components/cards/NewsCard";
import { getNews, getNewsCategories } from "@/data/news";
import { useLanguage } from "@/lib/i18n";

export default function NewsPage() {
  const { t, locale } = useLanguage();
  const newsCategories = getNewsCategories(locale);
  const news = getNews(locale);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = newsCategories[activeCategoryIndex];
  const filtered =
    activeCategoryIndex === 0
      ? news
      : news.filter((n) => n.category === activeCategory);

  return (
    <>
      <PageHeader
        title={t.pages.newsTitle}
        description={t.pages.newsDesc}
      />

      <section className="py-14 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {newsCategories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategoryIndex(i)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 ${
                  activeCategoryIndex === i
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
              {t.common.noNewsFound}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
