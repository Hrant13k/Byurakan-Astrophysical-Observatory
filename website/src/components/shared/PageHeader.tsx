"use client";

import { motion } from "framer-motion";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { useLanguage } from "@/lib/i18n";

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  const { locale } = useLanguage();
  const isAm = locale === "am";
  return (
    <div className="relative pt-28 pb-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 star-field opacity-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Breadcrumbs />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2"
        >
          <h1
            className={`font-bold tracking-tight text-foreground leading-[1.05] ${
              isAm
                ? "text-3xl sm:text-4xl lg:text-5xl"
                : "text-4xl sm:text-5xl lg:text-6xl"
            }`}
          >
            {title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
