export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  highlights: string[];
  publications: number;
  researchers: number;
}

export const researchAreas: ResearchArea[] = [
  {
    id: "stellar-physics",
    title: "Stellar Physics",
    description:
      "Investigating the birth, evolution, and death of stars through spectroscopic observations and theoretical modeling.",
    longDescription:
      "Our stellar physics division carries on the pioneering tradition established by Viktor Ambartsumian. We study stellar associations, T Tauri stars, Herbig-Haro objects, flare stars, and the late stages of stellar evolution including planetary nebulae and symbiotic stars. Using the 2.6m telescope and modern spectroscopic instrumentation, our team conducts systematic surveys of emission-line stars and variable objects throughout the Milky Way.",
    image: "/images/background.jpg",
    highlights: [
      "Discovery of new Herbig-Haro objects in star-forming regions",
      "Spectroscopic monitoring of symbiotic and cataclysmic variables",
      "Statistical studies of stellar associations and OB groups",
      "Classification of emission-line stars from objective prism surveys",
    ],
    publications: 1250,
    researchers: 12,
  },
  {
    id: "extragalactic",
    title: "Extragalactic Astronomy",
    description:
      "Studying galaxies, active galactic nuclei, and large-scale cosmic structures to understand the universe beyond our Milky Way.",
    longDescription:
      "Building on the legacy of Markarian's survey — one of the most influential extragalactic surveys in history — our team studies active galactic nuclei, starburst galaxies, and galaxy interactions. The First and Second Byurakan Surveys (FBS/SBS) have cataloged thousands of UV-excess and emission-line galaxies, providing fundamental data for understanding galaxy evolution and nuclear activity.",
    image: "/images/telescope1.jpg",
    highlights: [
      "Continuation and digitization of Markarian Survey data",
      "Multi-wavelength studies of active galactic nuclei",
      "Research on galaxy interactions and mergers",
      "Spectral classification of UV-excess objects",
    ],
    publications: 980,
    researchers: 8,
  },
  {
    id: "cosmic-structure",
    title: "Cosmology & Cosmic Structure",
    description:
      "Probing the fundamental nature of the universe — its origin, evolution, and ultimate fate through theoretical and observational approaches.",
    longDescription:
      "Our cosmology group investigates the large-scale structure of the universe, dark matter and dark energy, and the cosmic microwave background. Working with international collaborations, we contribute to understanding how the universe evolved from the Big Bang to its current state, including the formation of galaxy clusters and cosmic voids.",
    image: "/images/img2.jpg",
    highlights: [
      "Studies of large-scale structure and galaxy clustering",
      "Theoretical models of dark energy evolution",
      "Analysis of cosmic voids and superclusters",
      "Collaboration with international cosmological surveys",
    ],
    publications: 420,
    researchers: 5,
  },
  {
    id: "programs",
    title: "Observational Programs",
    description:
      "Systematic sky surveys and monitoring programs using the observatory's powerful telescopes and modern instruments.",
    longDescription:
      "Byurakan Observatory operates several ongoing observational programs utilizing its 2.6m and 1m telescopes. These include spectroscopic surveys, photometric monitoring of variable objects, and follow-up observations of transient phenomena. Our digitized plate archive — containing over 40,000 photographic plates — represents a unique historical dataset spanning decades of astronomical observations.",
    image: "/images/img1.jpg",
    highlights: [
      "Digitized First Byurakan Survey (DFBS) — 40,000+ plates",
      "Spectroscopic follow-up of transient events",
      "Photometric monitoring with the 1m Schmidt telescope",
      "International time-domain astronomy collaborations",
    ],
    publications: 560,
    researchers: 10,
  },
];
