"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Users, TrendingUp } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { researchAreas } from "@/data/research";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research"
        description="Explore our research programs spanning stellar physics, extragalactic astronomy, cosmology, and systematic sky surveys."
      />

      {/* Stats */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: BookOpen, value: "3,200+", label: "Published Papers" },
              { icon: Users, value: "35+", label: "Active Researchers" },
              { icon: TrendingUp, value: "4", label: "Research Areas" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease }}
                className="text-center py-6 rounded-2xl border border-border/40"
              >
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-3" />
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] tracking-wider uppercase text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Detail */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 space-y-28">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.id}
              id={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="grid lg:grid-cols-2 gap-14 items-center"
            >
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden aspect-video">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                </div>
              </div>

              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                  {area.researchers} researchers &middot; {area.publications}+ papers
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  {area.title}
                </h2>
                <p className="mt-5 text-[15px] text-muted-foreground leading-[1.75]">
                  {area.longDescription}
                </p>

                <div className="mt-7">
                  <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground mb-4">
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {area.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Markarian Legacy */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            label="Heritage"
            title="The Markarian Legacy"
            subtitle="A cornerstone of extragalactic astronomy"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="mt-14 max-w-4xl mx-auto"
          >
            <div className="rounded-2xl border border-border/60 bg-card p-8 sm:p-10">
              <p className="text-[15px] text-muted-foreground leading-[1.75]">
                The First Byurakan Survey (FBS), also known as the Markarian
                Survey, was a pioneering systematic search for galaxies with
                strong ultraviolet excess. Conducted by Beniamin Markarian
                between 1965 and 1980 using the 1m Schmidt telescope, the
                survey identified 1,515 UV-excess galaxies &mdash; now known as
                Markarian galaxies.
              </p>
              <p className="mt-5 text-[15px] text-muted-foreground leading-[1.75]">
                This catalog became one of the most widely used resources in
                extragalactic astronomy, fundamentally advancing our
                understanding of active galactic nuclei, Seyfert galaxies, and
                starburst galaxies. The survey&apos;s photographic plates have since
                been digitized as the DFBS project, creating an invaluable
                digital archive for modern researchers.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { value: "1,515", label: "Markarian Galaxies" },
                  { value: "17,000+", label: "sq. deg. surveyed" },
                  { value: "40,000+", label: "Plates digitized" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center py-4 rounded-xl bg-muted/50">
                    <p className="text-2xl font-bold tracking-tight text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] tracking-wider uppercase text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
