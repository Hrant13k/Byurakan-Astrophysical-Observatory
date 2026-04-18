"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import { asset } from "@/lib/asset";
import { useLanguage } from "@/lib/i18n";

type Caption = { en: string; am: string };

const galleryImages: {
  src: string;
  alt: string;
  caption: Caption;
  category: "Observatory" | "Telescope" | "Historic";
}[] = [
  {
    src: "/images/background.jpg",
    alt: "Star trails over the observatory dome",
    caption: {
      en: "Long-exposure star trails circling the celestial pole above the 2.6m telescope dome",
      am: "Երկարատև էքսպոզիցիայով աստղային հետքեր, որոնք պտտվում են երկնային բևեռի շուրջ 2.6մ հեռադիտակի գմբեթի վրա",
    },
    category: "Observatory",
  },
  {
    src: "/images/img2.jpg",
    alt: "Observatory dome at night",
    caption: {
      en: "The 2.6m telescope dome silhouetted against the starry Armenian sky",
      am: "2.6մ հեռադիտակի գմբեթը հայկական աստղազարդ երկնքի ֆոնին",
    },
    category: "Observatory",
  },
  {
    src: "/images/img3.jpg",
    alt: "Observatory dome with Mount Ararat",
    caption: {
      en: "The observatory dome with the majestic Mount Ararat rising in the distance",
      am: "Աստղադիտարանի գմբեթը վեհաշուք Արարատ լեռան ֆոնին",
    },
    category: "Observatory",
  },
  {
    src: "/images/img5.jpg",
    alt: "Main observatory building in spring",
    caption: {
      en: "The main observatory building surrounded by the green landscape of Mount Aragats",
      am: "Աստղադիտարանի գլխավոր շենքը Արագած լեռան կանաչ բնապատկերի մեջ",
    },
    category: "Observatory",
  },
  {
    src: "/images/img7.jpg",
    alt: "Observatory campus domes",
    caption: {
      en: "Two of the observatory\u2019s distinctive dome structures on the campus grounds",
      am: "Աստղադիտարանի տարածքում գտնվող երկու բնորոշ գմբեթային կառույցները",
    },
    category: "Observatory",
  },
  {
    src: "/images/img4.jpg",
    alt: "BAO scientists group photo",
    caption: {
      en: "Scientists of Byurakan Observatory gathered in front of the 2.6m dome",
      am: "Բյուրականի աստղադիտարանի գիտնականները հավաքված 2.6մ գմբեթի առջև",
    },
    category: "Observatory",
  },
  {
    src: "/images/img1.jpg",
    alt: "Inside the telescope dome",
    caption: {
      en: "Visitors exploring the interior of the main telescope dome",
      am: "Այցելուները ուսումնասիրում են գլխավոր հեռադիտակի գմբեթի ներսը",
    },
    category: "Telescope",
  },
  {
    src: "/images/telescope1.jpg",
    alt: "The 2.6m telescope",
    caption: {
      en: "The 2.6-meter Cassegrain telescope \u2014 the largest in the Near East",
      am: "2.6 մետրանոց Կասեգրենի հեռադիտակը՝ Մերձավոր Արևելքի ամենամեծը",
    },
    category: "Telescope",
  },
  {
    src: "/images/telescope2.webp",
    alt: "Telescope dome tour",
    caption: {
      en: "A guided tour of the telescope dome for visitors from around the world",
      am: "Հեռադիտակի գմբեթի էքսկուրսիան աշխարհի տարբեր ծագերից եկած այցելուների համար",
    },
    category: "Telescope",
  },
  {
    src: "/images/telescope3.jpg",
    alt: "Educational session at the telescope",
    caption: {
      en: "Students and guide during an educational visit to the telescope hall",
      am: "Ուսանողներ և ուղեկցող հեռադիտակի սրահ կատարվող կրթական այցի ընթացքում",
    },
    category: "Telescope",
  },
  {
    src: "/images/img6.jpg",
    alt: "Small silver dome",
    caption: {
      en: "One of the smaller auxiliary dome structures in the observatory grounds",
      am: "Աստղադիտարանի տարածքի փոքր օժանդակ գմբեթային կառույցներից մեկը",
    },
    category: "Telescope",
  },
  {
    src: "/images/viktorambartsumian1.png",
    alt: "Viktor Ambartsumian portrait",
    caption: {
      en: "Viktor Ambartsumian, founder of the Byurakan Observatory",
      am: "Վիկտոր Համբարձումյան՝ Բյուրականի աստղադիտարանի հիմնադիրը",
    },
    category: "Historic",
  },
  {
    src: "/images/viktorambartsumian2.jpg",
    alt: "Viktor Ambartsumian later years",
    caption: {
      en: "Ambartsumian in his later years, continuing his scientific work",
      am: "Համբարձումյանը ուշ տարիներին՝ շարունակելով իր գիտական աշխատանքը",
    },
    category: "Historic",
  },
  {
    src: "/images/viktorambartsumianwithjanoort.jpg",
    alt: "Ambartsumian with Jan Oort",
    caption: {
      en: "Viktor Ambartsumian with Dutch astronomer Jan Oort at an international conference",
      am: "Վիկտոր Համբարձումյանը հոլանդացի աստղագետ Յան Օորտի հետ միջազգային գիտաժողովում",
    },
    category: "Historic",
  },
  {
    src: "/images/old-img1.jpg",
    alt: "Historic observatory view",
    caption: {
      en: "The Byurakan Observatory shortly after its founding in 1946",
      am: "Բյուրականի աստղադիտարանը 1946 թ. հիմնադրումից անմիջապես հետո",
    },
    category: "Historic",
  },
  {
    src: "/images/old-img2.webp",
    alt: "Historic observatory building",
    caption: {
      en: "The observatory campus featuring the iconic dome towers",
      am: "Աստղադիտարանի տարածքը՝ խորհրդանշական գմբեթային աշտարակներով",
    },
    category: "Historic",
  },
];

const categoryKeys = ["All", "Observatory", "Telescope", "Historic"] as const;

export default function GalleryPage() {
  const { t, locale } = useLanguage();
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
                      {image.caption[locale]}
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
                {filtered[lightboxIndex].caption[locale]}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
