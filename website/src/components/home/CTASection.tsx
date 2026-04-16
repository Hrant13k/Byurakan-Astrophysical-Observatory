"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GraduationCap, Users, Telescope, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function CTASection() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: GraduationCap,
      title: t.cta.summerSchool,
      description: t.cta.summerSchoolDesc,
      href: "/education",
      cta: t.cta.learnMore,
    },
    {
      icon: Telescope,
      title: t.cta.visitUs,
      description: t.cta.visitDesc,
      href: "/contact",
      cta: t.cta.planVisit,
    },
    {
      icon: Users,
      title: t.cta.collaborate,
      description: t.cta.collaborateDesc,
      href: "/research",
      cta: t.cta.exploreOptions,
    },
  ];
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/img2.jpg"
          alt="Observatory at night"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 star-field opacity-15" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-4">
            {t.sections.getInvolved}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.1]">
            {t.sections.joinCommunity}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t.sections.joinSubtitle}
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {cards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-7 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <Link
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "mt-4 text-primary gap-1"
                )}
              >
                {item.cta}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
