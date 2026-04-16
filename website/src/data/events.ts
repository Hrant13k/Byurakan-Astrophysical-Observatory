export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  type: "conference" | "seminar" | "workshop" | "public" | "school";
  registrationUrl?: string;
}

export const eventTypes = [
  "All",
  "conference",
  "seminar",
  "workshop",
  "public",
  "school",
] as const;

export const events: Event[] = [
  {
    id: "biss-2026",
    title: "13th Byurakan International Summer School",
    description:
      "Two-week intensive school on modern astrophysics and data science for graduate students and early-career researchers from around the world. Lectures by leading international astronomers.",
    date: "2026-09-01",
    endDate: "2026-09-14",
    time: "09:00 - 18:00",
    location: "Byurakan Observatory Campus",
    type: "school",
    registrationUrl: "#",
  },
  {
    id: "agn-workshop-2026",
    title: "Workshop on Active Galactic Nuclei in the Multi-Messenger Era",
    description:
      "International workshop bringing together researchers studying AGN across the electromagnetic spectrum and through gravitational waves and neutrinos.",
    date: "2026-06-15",
    endDate: "2026-06-18",
    time: "09:00 - 17:00",
    location: "BAO Conference Hall",
    type: "workshop",
    registrationUrl: "#",
  },
  {
    id: "public-night-may",
    title: "Public Stargazing Night: Jupiter and Saturn",
    description:
      "Join us for an evening of stargazing through our telescopes. This month features excellent views of Jupiter and Saturn. Suitable for all ages.",
    date: "2026-05-20",
    time: "20:00 - 23:00",
    location: "2.6m Telescope Dome",
    type: "public",
  },
  {
    id: "stellar-seminar-apr",
    title: "Seminar: New Results on Flare Star Activity Cycles",
    description:
      "Dr. Hayk Harutyunyan presents new findings on the long-term activity cycles of UV Ceti-type flare stars observed at Byurakan.",
    date: "2026-04-25",
    time: "14:00 - 15:30",
    location: "BAO Seminar Room",
    type: "seminar",
  },
  {
    id: "ambartsumian-conference",
    title: "Ambartsumian International Conference on Astrophysics",
    description:
      "Annual conference honoring the legacy of Viktor Ambartsumian, featuring invited talks on stellar physics, galaxy evolution, and cosmology.",
    date: "2026-09-18",
    endDate: "2026-09-21",
    time: "09:00 - 18:00",
    location: "NAS RA Conference Center, Yerevan",
    type: "conference",
    registrationUrl: "#",
  },
  {
    id: "data-workshop",
    title: "Hands-On Workshop: Astronomical Data Analysis with Python",
    description:
      "Practical workshop for students covering astronomical data reduction, photometry, spectroscopy analysis using Python and astropy.",
    date: "2026-07-10",
    endDate: "2026-07-12",
    time: "10:00 - 16:00",
    location: "BAO Computer Lab",
    type: "workshop",
    registrationUrl: "#",
  },
];
