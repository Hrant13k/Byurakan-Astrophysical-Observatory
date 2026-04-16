export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  features: string[];
}

export const programs: Program[] = [
  {
    id: "biss",
    title: "Byurakan International Summer School (BISS)",
    description:
      "A prestigious two-week program for graduate students and early-career researchers featuring lectures by world-renowned astronomers, hands-on observational sessions, and collaborative projects.",
    duration: "2 weeks (September)",
    level: "Graduate / Early Career",
    features: [
      "Lectures by international experts",
      "Hands-on telescope observations",
      "Data analysis workshops",
      "Collaborative research projects",
      "Cultural excursions in Armenia",
      "Certificate of completion",
    ],
  },
  {
    id: "graduate-program",
    title: "Graduate Research Program",
    description:
      "Full-time graduate research positions at the observatory for students pursuing MSc or PhD degrees in astrophysics, working under the supervision of senior researchers.",
    duration: "2-4 years",
    level: "MSc / PhD",
    features: [
      "Full access to observatory facilities",
      "Supervision by leading researchers",
      "Stipend and accommodation support",
      "Publication opportunities",
      "International conference participation",
      "Thesis defense support",
    ],
  },
  {
    id: "visiting-researcher",
    title: "Visiting Researcher Program",
    description:
      "Short-term research visits for international astronomers seeking to use Byurakan's facilities or collaborate with our research teams.",
    duration: "1-6 months",
    level: "Postdoc / Faculty",
    features: [
      "Telescope time allocation",
      "Access to DFBS archive",
      "Office space and computing resources",
      "Accommodation at observatory guest house",
      "Collaborative research opportunities",
      "Seminar presentation slot",
    ],
  },
  {
    id: "public-outreach",
    title: "Public Outreach & Education",
    description:
      "Regular public programs including stargazing nights, school visits, and science communication events aimed at inspiring the next generation of scientists.",
    duration: "Ongoing",
    level: "All Ages",
    features: [
      "Monthly public stargazing nights",
      "School group observatory tours",
      "Astronomy club for students",
      "Science festival participation",
      "Online educational resources",
      "Teacher training workshops",
    ],
  },
];
