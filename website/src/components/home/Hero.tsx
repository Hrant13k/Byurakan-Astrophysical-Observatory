"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Telescope } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background.jpg"
          alt="Byurakan Observatory under star trails"
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Subtle star overlay */}
      <div className="absolute inset-0 star-field opacity-20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-6">
              {t.hero.established}
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight">
              <span className="gradient-text">{t.hero.line1}</span>
              <br />
              <span className="text-foreground">{t.hero.line2}</span>
              <br />
              <span className="text-foreground/80">{t.hero.line3}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="/research"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2.5 text-sm tracking-wide px-6"
              )}
            >
              <Telescope className="h-4 w-4" />
              {t.hero.exploreResearch}
            </Link>
            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2.5 text-sm tracking-wide px-6"
              )}
            >
              {t.hero.ourStory}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-border/50 bg-border/50 max-w-2xl"
        >
          {[
            { value: "78+", label: t.hero.years },
            { value: "3,000+", label: t.hero.publications },
            { value: "1,515", label: t.hero.markarianGalaxies },
            { value: "40,000+", label: t.hero.plateArchive },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-background/60 backdrop-blur-sm px-5 py-5 text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] tracking-wider uppercase text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-muted-foreground/20 flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
