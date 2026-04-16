"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import ResearchCard from "@/components/cards/ResearchCard";
import { researchAreas } from "@/data/research";

export default function ResearchHighlights() {
  return (
    <section className="relative py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Study"
          title="Research Areas"
          subtitle="Advancing our understanding of the universe across multiple frontiers"
        />
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <ResearchCard key={area.id} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
