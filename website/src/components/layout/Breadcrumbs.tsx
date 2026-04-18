"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { getNews } from "@/data/news";
import { getStaff } from "@/data/staff";
import { getPrograms } from "@/data/education";
import { getPublications } from "@/data/publications";

function titleCase(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const { t, locale } = useLanguage();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const sectionLabels: Record<string, string> = {
    about: t.nav.about,
    research: t.nav.research,
    staff: t.nav.staff,
    publications: t.nav.publications,
    news: t.nav.news,
    events: t.nav.events,
    education: t.nav.education,
    contact: t.nav.contact,
    gallery: t.nav.gallery,
  };

  const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const parent = segments[0];
    let label = sectionLabels[segment] ?? titleCase(segment);

    if (index === 1) {
      if (parent === "news") {
        label = getNews(locale).find((n) => n.id === segment)?.title ?? label;
      } else if (parent === "staff") {
        label = getStaff(locale).find((s) => s.id === segment)?.name ?? label;
      } else if (parent === "education") {
        label =
          getPrograms(locale).find((p) => p.id === segment)?.title ?? label;
      } else if (parent === "publications") {
        label =
          getPublications(locale).find((p) => p.id === segment)?.title ?? label;
      }
    }

    return { href, label };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-sm text-muted-foreground py-4"
    >
      <Link
        href="/"
        className="hover:text-foreground transition-colors flex items-center gap-1"
      >
        <Home className="h-3.5 w-3.5" />
        <span className="sr-only">{t.nav.home}</span>
      </Link>
      {crumbs.map((crumb, index) => (
        <span key={crumb.href} className="flex items-center gap-1.5 min-w-0">
          <ChevronRight className="h-3 w-3 shrink-0" />
          {index === crumbs.length - 1 ? (
            <span className="text-foreground font-medium truncate max-w-[60vw] sm:max-w-md">
              {crumb.label}
            </span>
          ) : (
            <Link
              href={crumb.href}
              className="hover:text-foreground transition-colors truncate max-w-[40vw] sm:max-w-xs"
            >
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
