"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { asset } from "@/lib/asset";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    observatory: [
      { label: t.footer.linkAbout, href: "/about" },
      { label: t.footer.linkResearch, href: "/research" },
      { label: t.footer.linkStaff, href: "/staff" },
      { label: t.footer.linkGallery, href: "/gallery" },
      { label: t.footer.linkHistory, href: "/about#history" },
    ],
    academic: [
      { label: t.footer.linkPublications, href: "/publications" },
      { label: t.footer.linkEducation, href: "/education" },
      { label: t.footer.linkSummerSchool, href: "/education#biss" },
      { label: t.footer.linkNews, href: "/news" },
      { label: t.footer.linkEvents, href: "/events" },
    ],
    resources: [
      { label: t.footer.linkDfbs, href: "#" },
      { label: t.footer.linkTelescopeSchedule, href: "#" },
      { label: t.footer.linkWeather, href: "#" },
      { label: t.footer.linkLibrary, href: "#" },
      { label: t.footer.linkOpenData, href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border/60">
      {/* Newsletter */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {t.footer.stayConnected}
            </h3>
            <p className="text-sm text-muted-foreground mt-1.5">
              {t.footer.subscribeDesc}
            </p>
          </div>
          <form className="flex w-full md:w-auto gap-2.5">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-64 rounded-xl bg-muted px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground border border-border/60 outline-none focus:border-primary/50 transition-colors"
            />
            <button
              type="submit"
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {t.footer.subscribe}
            </button>
          </form>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Links Grid */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/icon/observatory-icon.svg")}
                alt="BAO"
                className="h-7 w-7"
              />
              <p className="text-sm font-semibold text-foreground tracking-tight">
                {t.footer.observatoryName}
              </p>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground/60" />
                <span>
                  {t.footer.addressLine1}
                  <br />
                  {t.footer.addressLine2}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-muted-foreground/60" />
                <span>+374 232 34 142</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground/60" />
                <span>info@bao.sci.am</span>
              </div>
            </div>
          </div>

          {/* Observatory */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground mb-5">
              {t.footer.observatory}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.observatory.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground mb-5">
              {t.footer.academic}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.academic.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground mb-5">
              {t.footer.resources}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom */}
        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-wide text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p>
            {t.footer.fullName}
          </p>
        </div>
      </div>
    </footer>
  );
}
