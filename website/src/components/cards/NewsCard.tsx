"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowUpRight } from "lucide-react";
import type { NewsItem } from "@/data/news";
import { useLanguage } from "@/lib/i18n";

export default function NewsCard({
  item,
  index = 0,
}: {
  item: NewsItem;
  index?: number;
}) {
  const { t, locale } = useLanguage();
  const formattedDate = new Date(item.date).toLocaleDateString(
    locale === "am" ? "hy-AM" : "en-US",
    { month: "long", day: "numeric", year: "numeric" }
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-primary/30 transition-all duration-300"
    >
      <Link href={`/news/${item.id}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-[10px] tracking-wider uppercase">
            {item.category}
          </Badge>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-[11px] tracking-wide uppercase text-muted-foreground mb-3">
            <Calendar className="h-3 w-3" />
            <time dateTime={item.date}>{formattedDate}</time>
          </div>
          <h3 className="text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {item.title}
          </h3>
          <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {item.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
            {t.common.readMore}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
