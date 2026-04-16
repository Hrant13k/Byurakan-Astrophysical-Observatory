"use client";

import { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import EventCard from "@/components/cards/EventCard";
import { events, eventTypes } from "@/data/events";

const typeLabels: Record<string, string> = {
  All: "All Events",
  conference: "Conferences",
  seminar: "Seminars",
  workshop: "Workshops",
  public: "Public Events",
  school: "Summer Schools",
};

export default function EventsPage() {
  const [activeType, setActiveType] = useState("All");

  const filtered =
    activeType === "All"
      ? events
      : events.filter((e) => e.type === activeType);

  const upcoming = filtered
    .filter((e) => new Date(e.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const past = filtered
    .filter((e) => new Date(e.date) < new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <PageHeader
        title="Events"
        description="Conferences, seminars, workshops, and public events at Byurakan Observatory."
      />

      <section className="py-14 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 ${
                  activeType === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {typeLabels[type]}
              </button>
            ))}
          </div>

          {upcoming.length > 0 && (
            <div className="mb-16">
              <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-6">
                Upcoming
              </h2>
              <div className="space-y-4 max-w-3xl">
                {upcoming.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </div>
            </div>
          )}

          {past.length > 0 && (
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6">
                Past Events
              </h2>
              <div className="space-y-4 max-w-3xl opacity-60">
                {past.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </div>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">
              No events found for this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
