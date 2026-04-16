"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  label?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  label,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={centered ? "text-center" : ""}
    >
      {label && (
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-4">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl text-muted-foreground ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
