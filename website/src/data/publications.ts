export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  abstract: string;
  category: string;
}

export const publicationCategories = [
  "All",
  "Stellar Physics",
  "Extragalactic",
  "Cosmology",
  "Instrumentation",
  "Solar Physics",
  "Surveys",
] as const;

export const publications: Publication[] = [
  {
    id: "pub-001",
    title:
      "Spectroscopic Survey of Emission-Line Stars in the Northern Milky Way: New Discoveries from the DFBS",
    authors: ["A. M. Mickaelian", "H. V. Harutyunyan", "E. H. Nikoghosyan"],
    journal: "Astronomy & Astrophysics",
    year: 2025,
    volume: "683",
    pages: "A45",
    doi: "10.1051/0004-6361/202449123",
    abstract:
      "We present results from a new spectroscopic survey of emission-line stars identified in the Digitized First Byurakan Survey. Over 1,200 new emission-line objects were confirmed through follow-up spectroscopy with the 2.6m telescope.",
    category: "Surveys",
  },
  {
    id: "pub-002",
    title:
      "Ultra-Compact Markarian Galaxies: A New Population of High Surface Brightness Objects",
    authors: ["S. V. Farmanyan", "A. M. Mickaelian", "V. H. Chavushyan"],
    journal: "Monthly Notices of the Royal Astronomical Society",
    year: 2025,
    volume: "528",
    pages: "3421-3438",
    doi: "10.1093/mnras/stae2345",
    abstract:
      "We identify and characterize a new class of ultra-compact galaxies from the Markarian catalog. These objects display extreme surface brightness and compact morphology suggesting a transitional evolutionary phase.",
    category: "Extragalactic",
  },
  {
    id: "pub-003",
    title:
      "Long-Term Variability of T Tauri Stars in the Cygnus Star-Forming Region",
    authors: ["T. Yu. Magakian", "H. V. Harutyunyan"],
    journal: "The Astrophysical Journal",
    year: 2025,
    volume: "961",
    pages: "L15",
    doi: "10.3847/2041-8213/ad1234",
    abstract:
      "We present a 15-year photometric monitoring campaign of T Tauri stars in the Cygnus OB2 association, revealing complex variability patterns linked to disk accretion and stellar magnetic activity.",
    category: "Stellar Physics",
  },
  {
    id: "pub-004",
    title:
      "Dark Energy Constraints from Cosmic Void Statistics in the SDSS Footprint",
    authors: ["G. S. Harutyunyan", "A. M. Mickaelian"],
    journal: "Physical Review D",
    year: 2024,
    volume: "110",
    pages: "023512",
    doi: "10.1103/PhysRevD.110.023512",
    abstract:
      "Using void statistics from the Sloan Digital Sky Survey, we derive new constraints on dark energy parameters, finding results consistent with the cosmological constant but with improved precision over previous void-based analyses.",
    category: "Cosmology",
  },
  {
    id: "pub-005",
    title:
      "New Herbig-Haro Objects in the L1641 Cloud: Evidence for Episodic Jet Activity",
    authors: ["T. Yu. Magakian", "E. H. Nikoghosyan", "H. V. Harutyunyan"],
    journal: "Astronomy & Astrophysics",
    year: 2024,
    volume: "679",
    pages: "A112",
    doi: "10.1051/0004-6361/202348765",
    abstract:
      "We report the discovery of 14 new Herbig-Haro objects in the L1641 molecular cloud in Orion. The spatial distribution and proper motions suggest episodic jet activity from several young stellar objects.",
    category: "Stellar Physics",
  },
  {
    id: "pub-006",
    title:
      "The First Byurakan Survey Revisited: A Machine Learning Approach to Object Classification",
    authors: ["A. M. Mickaelian", "S. V. Farmanyan"],
    journal: "Astronomical Journal",
    year: 2024,
    volume: "167",
    pages: "89",
    doi: "10.3847/1538-3881/ad5678",
    abstract:
      "We apply modern machine learning techniques to reclassify objects in the Digitized First Byurakan Survey, achieving 95% accuracy in separating stars, galaxies, and QSOs, and discovering 230 previously misclassified objects.",
    category: "Surveys",
  },
  {
    id: "pub-007",
    title:
      "Solar Activity Cycle 25: Updated Predictions from Byurakan Solar Observations",
    authors: ["H. O. Pikichyan"],
    journal: "Solar Physics",
    year: 2024,
    volume: "299",
    pages: "45",
    doi: "10.1007/s11207-024-02345-6",
    abstract:
      "Based on updated solar observations from Byurakan Observatory, we refine predictions for Solar Cycle 25, suggesting a peak amplitude 15% higher than initial forecasts with maximum expected in late 2025.",
    category: "Solar Physics",
  },
  {
    id: "pub-008",
    title:
      "Performance Characterization of the New CCD System on the BAO 2.6m Telescope",
    authors: ["H. V. Harutyunyan", "A. M. Mickaelian"],
    journal: "Publications of the Astronomical Society of the Pacific",
    year: 2024,
    volume: "136",
    pages: "015001",
    doi: "10.1088/1538-3873/ad9012",
    abstract:
      "We present the commissioning results and performance characterization of the newly installed CCD imaging system on the 2.6m telescope at Byurakan Observatory. The system achieves a limiting magnitude of 24.5 in the R-band.",
    category: "Instrumentation",
  },
];
