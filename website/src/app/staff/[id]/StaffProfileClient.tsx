"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  BookOpen,
  Building2,
  Microscope,
  ArrowLeft,
  Send,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getStaff } from "@/data/staff";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export default function StaffProfileClient({ id }: { id: string }) {
  const { t, locale } = useLanguage();
  const member = getStaff(locale).find((m) => m.id === id);

  if (!member) {
    return (
      <div className="pt-28 pb-24 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {t.common.notFound}
        </h1>
        <p className="mt-4 text-muted-foreground">{t.common.notFoundDesc}</p>
        <Link
          href="/staff"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "mt-8 gap-2"
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          {t.common.backToTeam}
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 star-field opacity-10" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <Link
            href="/staff"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mt-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t.common.backToTeam}
          </Link>
        </div>
      </div>

      {/* Profile Hero */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col sm:flex-row items-start gap-8"
          >
            <div className="flex-shrink-0 w-28 h-28 rounded-full bg-muted flex items-center justify-center">
              <User className="h-12 w-12 text-muted-foreground/50" />
            </div>
            <div className="flex-1 min-w-0">
              <Badge variant="secondary" className="mb-4 text-[11px] tracking-wide">
                {member.department}
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.05]">
                {member.name}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                {member.title}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-4">
                  {t.profile.biography}
                </h2>
                <p className="text-[15px] text-muted-foreground leading-[1.8]">
                  {member.bio}
                </p>
              </div>

              <div>
                <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-4">
                  {t.profile.specialization}
                </h2>
                <p className="text-[15px] text-muted-foreground leading-[1.8]">
                  {member.specialization}
                </p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="space-y-4"
            >
              {/* Stats card */}
              <div className="rounded-2xl border border-border/60 bg-card p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold tracking-tight text-foreground">
                      {member.publications}
                    </p>
                    <p className="text-[11px] tracking-wider uppercase text-muted-foreground">
                      {t.profile.publicationsCount}
                    </p>
                  </div>
                </div>
              </div>

              {/* Department card */}
              <div className="rounded-2xl border border-border/60 bg-card p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] tracking-wider uppercase text-muted-foreground mb-1">
                      {t.profile.department}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {member.department}
                    </p>
                  </div>
                </div>
              </div>

              {/* Specialization card */}
              <div className="rounded-2xl border border-border/60 bg-card p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Microscope className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] tracking-wider uppercase text-muted-foreground mb-1">
                      {t.profile.specialization}
                    </p>
                    <p className="text-sm font-medium text-foreground leading-snug">
                      {member.specialization}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact card */}
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.profile.getInTouch}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {t.profile.contactDesc}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3 font-mono">
                  {member.email}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full gap-2 tracking-wide"
                  )}
                >
                  <Send className="h-3.5 w-3.5" />
                  {t.profile.sendEmail}
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}
