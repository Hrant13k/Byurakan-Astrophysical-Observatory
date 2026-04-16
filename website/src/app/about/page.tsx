"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Telescope, Mountain, Database, Award } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { timeline } from "@/data/timeline";

const facilities = [
  {
    icon: Telescope,
    title: "2.6m Cassegrain Telescope",
    description:
      "The largest telescope in the Near East, commissioned in 1976. Equipped with modern CCD cameras and spectrographs for cutting-edge research.",
  },
  {
    icon: Mountain,
    title: "1m Schmidt Telescope",
    description:
      "One of the world's largest Schmidt telescopes. The instrument that made the legendary Markarian Survey possible.",
  },
  {
    icon: Database,
    title: "Digitized Plate Archive",
    description:
      "Over 40,000 photographic plates from decades of observations, digitized and accessible for modern research.",
  },
  {
    icon: Award,
    title: "UNESCO Heritage Candidate",
    description:
      "Inscribed on Armenia's Tentative List for UNESCO World Heritage status, recognizing its exceptional scientific and cultural value.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About the Observatory"
        description="Discover the history, mission, and facilities of one of the world's leading astrophysical research centers."
      />

      {/* Founder Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <SectionHeading
                label="The Founder"
                title="Viktor Ambartsumian"
                subtitle="One of the greatest astrophysicists of the 20th century"
                centered={false}
              />
              <div className="mt-8 space-y-5 text-[15px] text-muted-foreground leading-[1.75]">
                <p>
                  Viktor Amazaspovich Ambartsumian (1908&ndash;1996) founded
                  the Byurakan Astrophysical Observatory in 1946 and served as its
                  director for over four decades. His discovery of stellar
                  associations revolutionized our understanding of star formation.
                </p>
                <p>
                  President of the International Astronomical Union
                  (1961&ndash;1964) and a member of numerous national academies
                  worldwide, Ambartsumian established Byurakan as a world-class
                  center for astrophysical research and a symbol of Armenian
                  scientific achievement.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/images/viktorambartsumian1.png"
                    alt="Viktor Ambartsumian, young portrait"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/images/viktorambartsumian2.jpg"
                    alt="Viktor Ambartsumian, later years"
                    width={400}
                    height={260}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/images/viktorambartsumianwithjanoort.jpg"
                    alt="Viktor Ambartsumian with Jan Oort"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="relative py-24">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] order-2 lg:order-1"
            >
              <Image
                src="/images/telescope1.jpg"
                alt="2.6m Telescope"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="order-1 lg:order-2"
            >
              <SectionHeading
                label="Our Purpose"
                title="Mission & Vision"
                subtitle="Advancing humanity's understanding of the cosmos"
                centered={false}
              />
              <div className="mt-8 space-y-5 text-[15px] text-muted-foreground leading-[1.75]">
                <p>
                  The NAS RA V. Ambartsumian Byurakan Astrophysical Observatory
                  is dedicated to fundamental research in stellar and
                  extragalactic astrophysics, training the next generation of
                  scientists, and sharing the wonder of the universe with the
                  public.
                </p>
                <p>
                  Situated at 1,490 meters above sea level on the southern slope
                  of Mount Aragats, the observatory benefits from excellent
                  atmospheric conditions &mdash; approximately 200 clear nights per
                  year &mdash; making it an ideal location for optical astronomical
                  observations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            label="Infrastructure"
            title="Facilities & Instruments"
            subtitle="World-class equipment for cutting-edge research"
          />
          <div className="mt-14 grid sm:grid-cols-2 gap-5">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease }}
                className="rounded-2xl border border-border/60 bg-card p-7 hover:border-primary/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 mb-5">
                  <facility.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground tracking-tight">
                  {facility.title}
                </h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="history" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            label="Through the Decades"
            title="Our History"
            subtitle="Nearly eight decades of astronomical discovery"
          />
          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-primary/40 md:-translate-x-px" />

            <div className="space-y-10 md:space-y-14">
              {timeline.map((entry, index) => (
                <motion.div
                  key={entry.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, ease }}
                  className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-10 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-5 md:left-1/2 w-3 h-3 rounded-full bg-primary border-[3px] border-background -translate-x-1.5 md:-translate-x-1.5 mt-1 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      index % 2 === 0
                        ? "md:text-right md:pr-0"
                        : "md:text-left md:pl-0"
                    }`}
                  >
                    <span className="inline-block text-sm font-bold text-primary tracking-wide">
                      {entry.year}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 tracking-tight">
                      {entry.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {entry.description}
                    </p>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Historic Images */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            label="Visual Archive"
            title="Through the Years"
            subtitle="Historic glimpses of the observatory"
          />
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src="/images/old-img1.jpg"
                alt="Historic Byurakan Observatory"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 text-sm text-white/80 font-medium">
                Early years of the observatory
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08, ease }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src="/images/old-img2.webp"
                alt="Byurakan Observatory historic view"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 text-sm text-white/80 font-medium">
                The observatory campus in its early decades
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
