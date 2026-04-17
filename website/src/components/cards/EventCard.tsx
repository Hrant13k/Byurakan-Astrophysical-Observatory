"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import type { Event } from "@/data/events";
import { useLanguage } from "@/lib/i18n";

const typeColors: Record<Event["type"], string> = {
  conference: "bg-chart-1/15 text-chart-1 border-chart-1/20",
  seminar: "bg-chart-2/15 text-chart-2 border-chart-2/20",
  workshop: "bg-chart-3/15 text-chart-3 border-chart-3/20",
  public: "bg-chart-4/15 text-chart-4 border-chart-4/20",
  school: "bg-chart-5/15 text-chart-5 border-chart-5/20",
};

export default function EventCard({
  event,
  index = 0,
}: {
  event: Event;
  index?: number;
}) {
  const { t } = useLanguage();

  const typeLabels: Record<Event["type"], string> = {
    conference: t.common.conferences,
    seminar: t.common.seminars,
    workshop: t.common.workshops,
    public: t.common.publicEvents,
    school: t.common.summerSchools,
  };

  const dateObj = new Date(event.date);
  const month = dateObj.toLocaleDateString("en-US", { month: "short" });
  const day = dateObj.getDate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex gap-5 rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-all duration-300"
    >
      {/* Date badge */}
      <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-primary/8 border border-primary/15">
        <span className="text-[10px] font-semibold text-primary tracking-wider uppercase">
          {month}
        </span>
        <span className="text-2xl font-bold tracking-tight text-foreground leading-none mt-0.5">
          {day}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <Badge className={`text-[10px] tracking-wider uppercase border ${typeColors[event.type]}`}>
            {typeLabels[event.type]}
          </Badge>
        </div>
        <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-1">
          {event.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {event.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-4 text-[11px] tracking-wide text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3 w-3" />
            {event.endDate
              ? `${new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} \u2013 ${new Date(event.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`
              : new Date(event.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            {event.time}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3" />
            {event.location}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
