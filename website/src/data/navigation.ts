import type { Translations } from "@/lib/i18n";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export function getNavigation(t: Translations): NavItem[] {
  return [
    { label: t.nav.home, href: "/" },
    {
      label: t.nav.about,
      href: "/about",
      children: [
        { label: t.nav.history, href: "/about#history" },
        { label: t.nav.mission, href: "/about#mission" },
        { label: t.nav.facilities, href: "/about#facilities" },
        { label: t.nav.gallery, href: "/gallery" },
      ],
    },
    {
      label: t.nav.research,
      href: "/research",
      children: [
        { label: t.nav.stellarPhysics, href: "/research#stellar-physics" },
        { label: t.nav.extragalactic, href: "/research#extragalactic" },
        { label: t.nav.cosmicStructure, href: "/research#cosmic-structure" },
        { label: t.nav.programs, href: "/research#programs" },
      ],
    },
    { label: t.nav.staff, href: "/staff" },
    { label: t.nav.publications, href: "/publications" },
    {
      label: t.nav.newsEvents,
      href: "/news",
      children: [
        { label: t.nav.news, href: "/news" },
        { label: t.nav.events, href: "/events" },
      ],
    },
    { label: t.nav.education, href: "/education" },
    { label: t.nav.contact, href: "/contact" },
  ];
}
