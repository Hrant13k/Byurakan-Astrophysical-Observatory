"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import { asset } from "@/lib/asset";
import { useLanguage } from "@/lib/i18n";

const galleryImages = [
  {
    src: "/images/background.jpg",
    alt: "Star trails over the observatory dome",
    caption:
      "Long-exposure star trails circling the celestial pole above the 2.6m telescope dome",
    category: "Observatory",
  },
  {
    src: "/images/img2.jpg",
    alt: "Observatory dome at night",
    caption:
      "The 2.6m telescope dome silhouetted against the starry Armenian sky",
    category: "Observatory",
  },
  {
    src: "/images/img3.jpg",
    alt: "Observatory dome with Mount Ararat",
    caption:
      "The observatory dome with the majestic Mount Ararat rising in the distance",
    category: "Observatory",
  },
  {
    src: "/images/img5.jpg",
    alt: "Main observatory building in spring",
    caption:
      "The main observatory building surrounded by the green landscape of Mount Aragats",
    category: "Observatory",
  },
  {
    src: "/images/img7.jpg",
    alt: "Observatory campus domes",
    caption:
      "Two of the observatory\u2019s distinctive dome structures on the campus grounds",
    category: "Observatory",
  },
  {
    src: "/images/img4.jpg",
    alt: "BAO scientists group photo",
    caption:
      "Scientists of Byurakan Observatory gathered in front of the 2.6m dome",
    category: "Observatory",
  },
  {
    src: "/images/img1.jpg",
    alt: "Inside the telescope dome",
    caption: "Visitors exploring the interior of the main telescope dome",
    category: "Telescope",
  },
  {
    src: "/images/telescope1.jpg",
    alt: "The 2.6m telescope",
    caption:
      "The 2.6-meter Cassegrain telescope \u2014 the largest in the Near East",
    category: "Telescope",
  },
  {
    src: "/images/telescope2.webp",
    alt: "Telescope dome tour",
    caption:
      "A guided tour of the telescope dome for visitors from around the world",
    category: "Telescope",
  },
  {
    src: "/images/telescope3.jpg",
    alt: "Educational session at the telescope",
    caption:
      "Students and guide during an educational visit to the telescope hall",
    category: "Telescope",
  },
  {
    src: "/images/img6.jpg",
    alt: "Small silver dome",
    caption:
      "One of the smaller auxiliary dome structures in the observatory grounds",
    category: "Telescope",
  },
  {
    src: "/images/viktorambartsumian1.png",
    alt: "Viktor Ambartsumian portrait",
    caption: "Viktor Ambartsumian, founder of the Byurakan Observatory",
    category: "Historic",
  },
  {
    src: "/images/viktorambartsumian2.jpg",
    alt: "Viktor Ambartsumian later years",
    caption: "Ambartsumian in his later years, continuing his scientific work",
    category: "Historic",
  },
  {
    src: "/images/viktorambartsumianwithjanoort.jpg",
    alt: "Ambartsumian with Jan Oort",
    caption:
      "Viktor Ambartsumian with Dutch astronomer Jan Oort at an international conference",
    category: "Historic",
  },
  {
    src: "/images/old-img1.jpg",
    alt: "Historic observatory view",
    caption:
      "The Byurakan Observatory shortly after its founding in 1946",
    category: "Historic",
  },
  {
    src: "/images/old-img2.webp",
    alt: "Historic observatory building",
    caption: "The observatory campus featuring the iconic dome towers",
    category: "Historic",
  },
];

const categoryKeys = ["All", "Observatory", "Telescope", "Historic"] as const;

export default function GalleryPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryLabels: Record<string, string> = {
    All: t.galleryCategories.all,
    Observatory: t.galleryCategories.observatory,
    Telescope: t.galleryCategories.telescope,
    Historic: t.galleryCategories.historic,
  };
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () => {
    if (lightboxIndex !== null)
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };
  const goPrev = () => {
    if (lightboxIndex !== null)
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  return (
    <>
      <PageHeader
        title={t.pages.galleryTitle}
        description={t.pages.galleryDesc}
      />

      <section className="py-14 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {categoryKeys.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {filtered.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden"
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={asset(image.src)}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-sm text-white font-medium leading-snug">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={asset(filtered[lightboxIndex].src)}
                alt={filtered[lightboxIndex].alt}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />
              <p className="mt-4 text-center text-sm text-white/60">
                {filtered[lightboxIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
