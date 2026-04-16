export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
}

export const newsCategories = [
  "All",
  "Discovery",
  "Observatory",
  "Collaboration",
  "Award",
  "Event",
] as const;

export const news: NewsItem[] = [
  {
    id: "new-spectroscopic-survey",
    title: "BAO Launches New Spectroscopic Survey of Northern Sky",
    excerpt:
      "The observatory begins a comprehensive spectroscopic survey using upgraded instrumentation on the 2.6m telescope, targeting over 10,000 objects.",
    content:
      "Byurakan Astrophysical Observatory has commenced a major new spectroscopic survey of the northern sky using recently upgraded instrumentation on its 2.6m telescope. The survey will target over 10,000 stellar and extragalactic objects over the next three years, building on the legacy of the historic First and Second Byurakan Surveys.",
    date: "2025-12-15",
    category: "Observatory",
    image: "/images/telescope1.jpg",
    author: "BAO Press Office",
  },
  {
    id: "markarian-galaxy-discovery",
    title: "New Class of Ultra-Compact Markarian Galaxies Identified",
    excerpt:
      "Researchers identify a previously unknown class of ultra-compact galaxies in the Markarian catalog, shedding new light on galaxy formation.",
    content:
      "A team of researchers from BAO has identified a new class of ultra-compact galaxies within the Markarian catalog. These objects, characterized by extremely high surface brightness and compact morphology, may represent a transitional phase in galaxy evolution previously unrecognized in the literature.",
    date: "2025-11-28",
    category: "Discovery",
    image: "/images/background.jpg",
    author: "Dr. Sona Farmanyan",
  },
  {
    id: "iau-collaboration",
    title: "BAO Signs New Collaboration Agreement with ESO",
    excerpt:
      "A landmark agreement with the European Southern Observatory opens new observational opportunities for Armenian astronomers.",
    content:
      "Byurakan Astrophysical Observatory has signed a new collaboration agreement with the European Southern Observatory (ESO), enabling Armenian astronomers to apply for observing time on ESO's world-class facilities in Chile. This partnership marks a significant milestone in international astronomical cooperation.",
    date: "2025-10-20",
    category: "Collaboration",
    image: "/images/img1.jpg",
    author: "BAO Press Office",
  },
  {
    id: "summer-school-2025",
    title: "12th Byurakan International Summer School Announced",
    excerpt:
      "The renowned summer school returns with focus on data science in astronomy, welcoming students from 20+ countries.",
    content:
      "The 12th Byurakan International Summer School (BISS) has been announced for September 2025, focusing on data science applications in modern astronomy. The two-week program will welcome graduate students and early-career researchers from over 20 countries.",
    date: "2025-09-05",
    category: "Event",
    image: "/images/img2.jpg",
    author: "Education Department",
  },
  {
    id: "telescope-upgrade",
    title: "2.6m Telescope Receives Major CCD Camera Upgrade",
    excerpt:
      "State-of-the-art CCD imaging system installed on the observatory's primary telescope, dramatically improving sensitivity.",
    content:
      "The observatory's flagship 2.6m telescope has received a major upgrade with the installation of a new state-of-the-art CCD camera system. The new detector offers significantly improved quantum efficiency, wider field of view, and lower read noise compared to the previous system.",
    date: "2025-08-12",
    category: "Observatory",
    image: "/images/telescope1.jpg",
    author: "Instrumentation Team",
  },
  {
    id: "young-researcher-award",
    title: "BAO Researcher Receives International Young Astronomer Prize",
    excerpt:
      "Dr. Gohar Harutyunyan recognized for outstanding contributions to cosmological research at international symposium.",
    content:
      "Dr. Gohar Harutyunyan of Byurakan Astrophysical Observatory has been awarded the International Young Astronomer Prize for her outstanding contributions to the study of large-scale cosmic structure and dark energy. The award was presented at the annual IAU symposium.",
    date: "2025-07-18",
    category: "Award",
    image: "/images/img2.jpg",
    author: "BAO Press Office",
  },
];
