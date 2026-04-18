"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  BookOpen,
  Users,
  Calendar,
  Tag,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { publications } from "@/data/publications";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PublicationDetailClient({ id }: { id: string }) {
  const { t } = useLanguage();
  const pub = publications.find((p) => p.id === id);

  if (!pub) {
    return (
      <div className="pt-28 pb-24 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {t.common.notFound}
        </h1>
        <p className="mt-4 text-muted-foreground">{t.common.notFoundDesc}</p>
        <Link
          href="/publications"
          className={cn(buttonVariants({ variant: "outline" }), "mt-8 gap-2")}
        >
          <ArrowLeft className="h-4 w-4" />
          {t.common.backToPublications}
        </Link>
      </div>
    );
  }

  const related = publications
    .filter((p) => p.id !== id && p.category === pub.category)
    .slice(0, 3);

  const citation = `${pub.authors.join(", ")} (${pub.year}). ${pub.title}. ${pub.journal}${pub.volume ? `, ${pub.volume}` : ""}${pub.pages ? `, ${pub.pages}` : ""}.`;

  return (
    <>
      {/* Header / Breadcrumbs */}
      <div className="relative pt-28 pb-6">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <Link
            href="/publications"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mt-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t.common.backToPublications}
          </Link>
        </div>
      </div>

      {/* Title */}
      <section className="pb-10">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <Badge variant="secondary" className="text-[10px] tracking-wider uppercase">
                {pub.category}
              </Badge>
              <span className="text-[11px] tracking-wider uppercase text-muted-foreground">
                {pub.year}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-foreground leading-[1.2]">
              {pub.title}
            </h1>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed">
              {pub.authors.join(", ")}
            </p>
            <p className="mt-1 text-[14px] text-muted-foreground/70 italic">
              {pub.journal}
              {pub.volume && `, ${pub.volume}`}
              {pub.pages && `, pp. ${pub.pages}`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-4">
                  {t.publication.abstract}
                </h2>
                <p className="text-[15px] text-muted-foreground leading-[1.85]">
                  {pub.abstract}
                </p>
              </div>

              <div>
                <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-4">
                  {t.publication.citation}
                </h2>
                <div className="rounded-2xl border border-border/60 bg-card p-5">
                  <p className="text-[13px] text-muted-foreground leading-relaxed font-mono">
                    {citation}
                    {pub.doi && (
                      <>
                        {" "}
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          https://doi.org/{pub.doi}
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-border/60 bg-card p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] tracking-wider uppercase text-muted-foreground mb-1">
                      {t.publication.authors}
                    </p>
                    <p className="text-sm font-medium text-foreground leading-snug">
                      {pub.authors.join(", ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] tracking-wider uppercase text-muted-foreground mb-1">
                      {t.publication.journal}
                    </p>
                    <p className="text-sm font-medium text-foreground leading-snug">
                      {pub.journal}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] tracking-wider uppercase text-muted-foreground mb-1">
                      {t.publication.year}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {pub.year}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Tag className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] tracking-wider uppercase text-muted-foreground mb-1">
                      {t.publication.category}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {pub.category}
                    </p>
                  </div>
                </div>
              </div>

              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full gap-2 tracking-wide"
                  )}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {t.publication.openDoi}
                </a>
              )}
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="relative py-20 border-t border-border/60">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-transparent pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-8">
              {t.publication.relatedPublications}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/publications/${item.id}`}
                  className="group rounded-2xl border border-border/60 bg-card p-5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <Badge variant="secondary" className="text-[10px] tracking-wider uppercase">
                      {item.category}
                    </Badge>
                    <span className="text-[11px] text-muted-foreground">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-3">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12px] text-muted-foreground line-clamp-1">
                    {item.authors.join(", ")}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-medium text-primary group-hover:gap-1.5 transition-all">
                    {t.common.readMore}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
