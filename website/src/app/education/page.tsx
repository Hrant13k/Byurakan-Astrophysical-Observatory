"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Clock, Users, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { getPrograms } from "@/data/education";
import { useLanguage } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export default function EducationPage() {
  const { t, locale } = useLanguage();
  const programs = getPrograms(locale);

  return (
    <>
      <PageHeader
        title={t.pages.educationTitle}
        description={t.pages.educationDesc}
      />

      {/* Programs */}
      <section className="py-16 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 space-y-6">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              id={program.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="rounded-2xl border border-border/60 bg-card p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  {program.title}
                </h2>
              </div>

              <p className="text-[15px] text-muted-foreground leading-[1.75] max-w-3xl">
                {program.description}
              </p>

              <div className="flex flex-wrap gap-5 mt-5">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  {program.duration}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" />
                  {program.level}
                </div>
              </div>

              <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {program.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button className="mt-7" variant="outline">
                {t.cta.learnMore}
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BISS Highlight */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="relative rounded-2xl overflow-hidden aspect-video"
            >
              <Image
                src="/images/img1.jpg"
                alt="Inside the telescope dome"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
            >
              <Badge className="mb-5 text-[10px] tracking-wider uppercase">
                {t.common.featuredProgram}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Byurakan International Summer School
              </h2>
              <p className="mt-5 text-[15px] text-muted-foreground leading-[1.75]">
                The BISS is one of the premier summer schools in astronomy,
                attracting talented graduate students and early-career
                researchers from over 20 countries. The program combines
                lectures by internationally renowned astronomers with hands-on
                observational experience using Byurakan&apos;s telescopes.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "12", label: t.common.editions },
                  { value: "20+", label: t.common.countries },
                  { value: "500+", label: t.common.alumni },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center py-4 rounded-xl border border-border/60 bg-muted/30"
                  >
                    <p className="text-xl font-bold tracking-tight text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[10px] tracking-wider uppercase text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <Button className="mt-8">{t.common.applyNext}</Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
