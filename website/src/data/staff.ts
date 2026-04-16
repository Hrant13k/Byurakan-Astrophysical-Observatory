export interface StaffMember {
  id: string;
  name: string;
  title: string;
  department: string;
  specialization: string;
  email: string;
  bio: string;
  publications: number;
}

export const departments = [
  "All",
  "Stellar Physics",
  "Extragalactic Astronomy",
  "Cosmology",
  "Solar Physics",
  "Instrumentation",
  "Administration",
] as const;

export const staff: StaffMember[] = [
  {
    id: "areg-mickaelian",
    name: "Dr. Areg Mickaelian",
    title: "Director",
    department: "Administration",
    specialization: "Active Galaxies, Astronomical Surveys",
    email: "aregmick@bao.sci.am",
    bio: "Director of the Byurakan Astrophysical Observatory since 2021. Leading researcher in active galaxies and multi-wavelength astronomical surveys with over 300 publications.",
    publications: 312,
  },
  {
    id: "hayk-harutyunyan",
    name: "Dr. Hayk Harutyunyan",
    title: "Senior Researcher",
    department: "Stellar Physics",
    specialization: "Stellar Evolution, Variable Stars",
    email: "hayk@bao.sci.am",
    bio: "Expert in stellar evolution and variable stars. Leading the observatory's spectroscopic survey program and mentoring the next generation of Armenian astronomers.",
    publications: 187,
  },
  {
    id: "elena-nikoghosyan",
    name: "Dr. Elena Nikoghosyan",
    title: "Leading Researcher",
    department: "Stellar Physics",
    specialization: "Planetary Nebulae, Emission-Line Stars",
    email: "elena@bao.sci.am",
    bio: "Leading researcher specializing in planetary nebulae and emission-line stars. Has contributed significantly to the understanding of late stages of stellar evolution.",
    publications: 145,
  },
  {
    id: "tigran-magakian",
    name: "Dr. Tigran Magakian",
    title: "Senior Researcher",
    department: "Stellar Physics",
    specialization: "Star Formation, Herbig-Haro Objects",
    email: "tigran@bao.sci.am",
    bio: "Renowned expert in star formation regions and Herbig-Haro objects. Discovered numerous new HH objects in the Milky Way.",
    publications: 198,
  },
  {
    id: "vahram-chavushyan",
    name: "Dr. Vahram Chavushyan",
    title: "Researcher",
    department: "Extragalactic Astronomy",
    specialization: "Active Galactic Nuclei, Quasars",
    email: "vahram@bao.sci.am",
    bio: "Specializes in active galactic nuclei and quasar spectroscopy. Collaborates with international teams on multi-wavelength AGN surveys.",
    publications: 156,
  },
  {
    id: "gohar-harutyunyan",
    name: "Dr. Gohar Harutyunyan",
    title: "Researcher",
    department: "Cosmology",
    specialization: "Dark Energy, Large-Scale Structure",
    email: "gohar@bao.sci.am",
    bio: "Researches dark energy and the large-scale structure of the universe. Active participant in several international cosmological survey projects.",
    publications: 92,
  },
  {
    id: "hovhannes-pikichyan",
    name: "Dr. Hovhannes Pikichyan",
    title: "Senior Researcher",
    department: "Solar Physics",
    specialization: "Solar Activity, Space Weather",
    email: "hovhannes@bao.sci.am",
    bio: "Leading expert in solar activity cycles and space weather prediction. Maintains the observatory's solar observation program.",
    publications: 134,
  },
  {
    id: "sona-farmanyan",
    name: "Dr. Sona Farmanyan",
    title: "Researcher",
    department: "Extragalactic Astronomy",
    specialization: "Galaxy Morphology, Photometry",
    email: "sona@bao.sci.am",
    bio: "Focuses on galaxy morphology and surface photometry. Contributed to several catalogs of galaxies and their classification.",
    publications: 78,
  },
];
