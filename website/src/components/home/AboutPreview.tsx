"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/shared/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/old-img2.webp"
                alt="Historic Byurakan Observatory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/30 to-transparent" />
            </div>
            {/* Ambartsumian portrait overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-8 -right-4 sm:right-8 w-32 sm:w-40 rounded-2xl overflow-hidden border-4 border-background shadow-2xl"
            >
              <Image
                src="/images/viktorambartsumian1.png"
                alt="Viktor Ambartsumian, founder"
                width={160}
                height={200}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeading
              label="Our Legacy"
              title="A Legacy of Discovery"
              subtitle="Pioneering astrophysical research for nearly eight decades"
              centered={false}
            />
            <div className="mt-8 space-y-5 text-[15px] text-muted-foreground leading-[1.75]">
              <p>
                Founded in 1946 by the legendary astrophysicist Viktor
                Ambartsumian, the Byurakan Astrophysical Observatory stands at
                1,490 meters on the slopes of Mount Aragats &mdash; a premier
                location for astronomical observation.
              </p>
              <p>
                Home to the famous Markarian Survey that cataloged 1,515
                UV-excess galaxies, Byurakan has made fundamental contributions
                to our understanding of stellar associations, active galaxies,
                and the evolution of the universe.
              </p>
            </div>
            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-8 gap-2.5 tracking-wide"
              )}
            >
              Explore Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
