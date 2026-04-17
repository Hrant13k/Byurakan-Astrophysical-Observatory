"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User as UserIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import NewsCard from "@/components/cards/NewsCard";
import { getNews } from "@/data/news";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export default function NewsArticleClient({ id }: { id: string }) {
  const { t, locale } = useLanguage();
  const news = getNews(locale);
  const article = news.find((n) => n.id === id);

  if (!article) {
    return (
      <div className="pt-28 pb-24 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {t.common.notFound}
        </h1>
        <p className="mt-4 text-muted-foreground">{t.common.notFoundDesc}</p>
        <Link
          href="/news"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "mt-8 gap-2"
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          {t.common.backToNews}
        </Link>
      </div>
    );
  }

  const related = news.filter((n) => n.id !== id).slice(0, 3);
  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === "am" ? "hy-AM" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      {/* Header / Breadcrumbs */}
      <div className="relative pt-28 pb-6">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mt-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t.common.backToNews}
          </Link>
        </div>
      </div>

      {/* Article Title */}
      <section className="pb-10">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Badge className="mb-5 bg-primary/90 text-primary-foreground text-[10px] tracking-wider uppercase">
              {article.category}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-[13px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <UserIcon className="h-3.5 w-3.5" />
                {t.article.by} {article.author}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
        className="pb-12"
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Excerpt + Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease }}
          >
            <p className="text-xl text-foreground leading-[1.7] font-medium">
              {article.excerpt}
            </p>
            <div className="mt-8 text-[16px] text-muted-foreground leading-[1.85] space-y-6">
              <p>{article.content}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="relative py-20 border-t border-border/60">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-transparent pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-8">
              {t.article.relatedNews}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((item, index) => (
                <NewsCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
