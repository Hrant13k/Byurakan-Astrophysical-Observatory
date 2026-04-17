"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, BookOpen, ArrowUpRight } from "lucide-react";
import type { ResearchArea } from "@/data/research";
import { useLanguage } from "@/lib/i18n";

export default function ResearchCard({
  area,
  index = 0,
}: {
  area: ResearchArea;
  index?: number;
}) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-primary/30 transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={area.image}
          alt={area.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-card/10" />
        <div className="absolute bottom-4 left-6 right-6 flex items-center gap-5 text-[11px] tracking-wide uppercase text-white/70">
          <span className="flex items-center gap-1.5">
            <Users className="h-3 w-3" />
            {area.researchers} {t.common.researchers}
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="h-3 w-3" />
            {area.publications}+ {t.common.papers}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
          {area.title}
        </h3>
        <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {area.description}
        </p>
        <Link
          href={`/research#${area.id}`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-2"
        >
          {t.common.exploreResearch}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
