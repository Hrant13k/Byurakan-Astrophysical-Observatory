"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Users,
  GraduationCap,
  CheckCircle2,
  MapPin,
  Send,
  ArrowUpRight,
  BookOpen,
  ListChecks,
  UserCheck,
  Calendar,
  Hourglass,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getPrograms } from "@/data/education";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProgramDetailClient({ id }: { id: string }) {
  const { t, locale } = useLanguage();
  const programs = getPrograms(locale);
  const program = programs.find((p) => p.id === id);

  if (!program) {
    return (
      <div className="pt-28 pb-24 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {t.common.notFound}
        </h1>
        <p className="mt-4 text-muted-foreground">{t.common.notFoundDesc}</p>
        <Link
          href="/education"
          className={cn(buttonVariants({ variant: "outline" }), "mt-8 gap-2")}
        >
          <ArrowLeft className="h-4 w-4" />
          {t.common.backToPrograms}
        </Link>
      </div>
    );
  }

  const related = programs.filter((p) => p.id !== id).slice(0, 3);

  return (
    <>
      {/* Header / Breadcrumbs */}
      <div className="relative pt-28 pb-6">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <Link
            href="/education"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mt-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t.common.backToPrograms}
          </Link>
        </div>
      </div>

      {/* Title */}
      <section className="pb-10">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-start gap-5"
          >
            <div className="hidden sm:inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0 mt-1">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <Badge variant="secondary" className="mb-4 text-[10px] tracking-wider uppercase">
                {t.nav.education}
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                {program.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-5 text-[13px] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  {program.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-primary" />
                  {program.level}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {t.program.onSite}
                </span>
              </div>
            </div>
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
              {/* Overview */}
              <div>
                <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-4">
                  {t.program.overview}
                </h2>
                <div className="space-y-5 text-[15px] text-muted-foreground leading-[1.8]">
                  {program.longDescription.length > 0 ? (
                    program.longDescription.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))
                  ) : (
                    <p>{program.description}</p>
                  )}
                </div>
              </div>

              {/* Curriculum */}
              {program.curriculum.length > 0 && (
                <div>
                  <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-5">
                    {t.program.curriculum}
                  </h2>
                  <ul className="space-y-3">
                    {program.curriculum.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 text-[15px] text-muted-foreground leading-relaxed"
                      >
                        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-[12px] font-semibold text-primary shrink-0">
                          {i + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outcomes */}
              {program.outcomes.length > 0 && (
                <div>
                  <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-5">
                    {t.program.outcomes}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {program.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-card p-4 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What You'll Gain (features) */}
              <div>
                <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-5">
                  {t.program.whatYouLearn}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {program.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-card p-4 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              {program.prerequisites.length > 0 && (
                <div>
                  <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-4">
                    {t.program.prerequisites}
                  </h2>
                  <ul className="space-y-3">
                    {program.prerequisites.map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-3 text-[15px] text-muted-foreground leading-relaxed"
                      >
                        <ListChecks className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Instructors */}
              {program.instructors.length > 0 && (
                <div>
                  <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-4">
                    {t.program.instructors}
                  </h2>
                  <ul className="space-y-3">
                    {program.instructors.map((instructor) => (
                      <li
                        key={instructor}
                        className="flex items-start gap-3 text-[15px] text-muted-foreground leading-relaxed"
                      >
                        <UserCheck className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span>{instructor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-border/60 bg-card p-5">
                <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4">
                  {t.program.quickFacts}
                </p>
                <dl className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <dt className="text-[11px] tracking-wider uppercase text-muted-foreground">
                        {t.program.duration}
                      </dt>
                      <dd className="text-sm font-medium text-foreground">
                        {program.duration}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <dt className="text-[11px] tracking-wider uppercase text-muted-foreground">
                        {t.program.level}
                      </dt>
                      <dd className="text-sm font-medium text-foreground">
                        {program.level}
                      </dd>
                    </div>
                  </div>
                  {program.nextSession && (
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <dt className="text-[11px] tracking-wider uppercase text-muted-foreground">
                          {t.program.nextSession}
                        </dt>
                        <dd className="text-sm font-medium text-foreground leading-snug">
                          {program.nextSession}
                        </dd>
                      </div>
                    </div>
                  )}
                  {program.applicationDeadline && (
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Hourglass className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <dt className="text-[11px] tracking-wider uppercase text-muted-foreground">
                          {t.program.deadline}
                        </dt>
                        <dd className="text-sm font-medium text-foreground">
                          {program.applicationDeadline}
                        </dd>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <dt className="text-[11px] tracking-wider uppercase text-muted-foreground">
                        {t.program.format}
                      </dt>
                      <dd className="text-sm font-medium text-foreground">
                        {t.program.onSite}
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-5">
                <p className="text-sm font-semibold text-foreground mb-1.5">
                  {t.program.howToApply}
                </p>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
                  {t.program.applyDesc}
                </p>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full gap-2 tracking-wide"
                  )}
                >
                  <Send className="h-3.5 w-3.5" />
                  {t.program.applyNow}
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      {related.length > 0 && (
        <section className="relative py-20 border-t border-border/60">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-transparent pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-8">
              {t.program.relatedPrograms}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/education/${item.id}`}
                  className="group rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 mb-4">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-muted-foreground line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-medium text-primary group-hover:gap-1.5 transition-all">
                    {t.cta.learnMore}
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
