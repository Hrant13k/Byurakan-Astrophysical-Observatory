"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import ResearchCard from "@/components/cards/ResearchCard";
import { getResearchAreas } from "@/data/research";
import { useLanguage } from "@/lib/i18n";

export default function ResearchHighlights() {
  const { locale, t } = useLanguage();
  const researchAreas = getResearchAreas(locale);
  return (
    <section className="relative py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.sections.whatWeStudy}
          title={t.sections.researchAreas}
          subtitle={t.sections.researchSubtitle}
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
