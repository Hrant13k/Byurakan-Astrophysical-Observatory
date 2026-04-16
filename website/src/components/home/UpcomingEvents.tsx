"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/shared/SectionHeading";
import EventCard from "@/components/cards/EventCard";
import { events } from "@/data/events";
import { useLanguage } from "@/lib/i18n";

export default function UpcomingEvents() {
  const { t } = useLanguage();
  const upcoming = events
    .filter((e) => new Date(e.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return (
    <section className="relative py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.sections.markCalendar}
          title={t.sections.upcomingEvents}
          subtitle={t.sections.eventsSubtitle}
        />
        <div className="mt-14 space-y-4 max-w-3xl mx-auto">
          {upcoming.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/events"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2 tracking-wide")}
          >
            {t.sections.viewAllEvents}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
