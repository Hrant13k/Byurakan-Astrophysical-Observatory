"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Mail, BookOpen, User } from "lucide-react";
import type { StaffMember } from "@/data/staff";
import { useLanguage } from "@/lib/i18n";

export default function StaffCard({
  member,
  index = 0,
}: {
  member: StaffMember;
  index?: number;
}) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
    >
      {/* Avatar placeholder */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-muted flex items-center justify-center">
          <User className="h-6 w-6 text-muted-foreground/60" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
            {member.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            {member.title}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <Badge variant="secondary" className="text-[11px] tracking-wide">
          {member.department}
        </Badge>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {member.specialization}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <BookOpen className="h-3.5 w-3.5" />
          {member.publications} {t.common.papers}
        </span>
        <a
          href={`mailto:${member.email}`}
          className="flex items-center gap-1.5 text-primary hover:underline underline-offset-2"
        >
          <Mail className="h-3.5 w-3.5" />
          {t.common.contact}
        </a>
      </div>
    </motion.div>
  );
}
