"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getNavigation, type NavItem } from "@/data/navigation";
import { useLanguage } from "@/lib/i18n";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive =
    pathname === item.href ||
    (item.href !== "/" && pathname.startsWith(item.href));

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          "relative py-1 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200",
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {item.label}
        {isActive && (
          <motion.span
            layoutId="nav-underline"
            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full"
          />
        )}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={cn(
          "relative flex items-center gap-1 py-1 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200",
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
        {isActive && (
          <motion.span
            layoutId="nav-underline"
            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full"
          />
        )}
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 top-full pt-3 z-50"
          >
            <div className="glass-strong rounded-xl p-1.5 min-w-[210px] shadow-2xl shadow-black/20">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block rounded-lg px-3 py-2.5 text-[13px] text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors duration-150"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive =
    pathname === item.href ||
    (item.href !== "/" && pathname.startsWith(item.href));

  return (
    <div className="border-b border-border/50 last:border-0">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={onClose}
          className={cn(
            "block py-3.5 text-[15px] font-medium tracking-wide transition-colors",
            isActive ? "text-primary" : "text-foreground"
          )}
        >
          {item.label}
        </Link>
        {item.children && (
          <button
            onClick={() => setOpen(!open)}
            className="p-2.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`Expand ${item.label}`}
          >
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                open && "rotate-180"
              )}
            />
          </button>
        )}
      </div>
      <AnimatePresence>
        {open && item.children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-3 space-y-0.5">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, t, setLocale } = useLanguage();

  const navItems = useMemo(() => getNavigation(t), [t]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong shadow-lg shadow-black/10" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 shrink-0 group">
            <div className="relative h-9 w-9 transition-transform duration-300 group-hover:scale-105">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/icon/observatory-icon.svg")}
                alt="BAO Logo"
                className="h-9 w-9"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-[15px] font-semibold leading-tight tracking-tight text-foreground">
                {locale === "am" ? "\u0532\u0575\u0578\u0582\u0580\u0561\u056f\u0561\u0576" : "Byurakan"}
              </p>
              <p className="text-[11px] leading-tight tracking-wider uppercase text-muted-foreground">
                {locale === "am" ? "\u0531\u057d\u057f\u0572\u0561\u0564\u056b\u057f\u0561\u0580\u0561\u0576" : "Observatory"}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <DesktopNavItem key={item.href} item={item} />
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-1">
            {/* Language toggle */}
            <button
              onClick={() => setLocale(locale === "en" ? "am" : "en")}
              className="hidden sm:inline-flex items-center justify-center h-8 px-2.5 rounded-lg text-[12px] font-semibold tracking-wide text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-all duration-200 gap-1.5"
              aria-label="Change language"
            >
              <span className={locale === "en" ? "text-foreground" : "text-muted-foreground/50"}>EN</span>
              <span className="text-border">/</span>
              <span className={locale === "am" ? "text-foreground" : "text-muted-foreground/50"}>AM</span>
            </button>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-all duration-200"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[320px] bg-background/95 backdrop-blur-xl border-border/50"
              >
                <div className="mt-6 px-1">
                  {navItems.map((item) => (
                    <MobileNavItem
                      key={item.href}
                      item={item}
                      onClose={() => setMobileOpen(false)}
                    />
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border/50 px-1">
                  <p className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground mb-3">
                    {t.common.language}
                  </p>
                  <div className="flex gap-2">
                    {(["en", "am"] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setLocale(lang)}
                        className={cn(
                          "px-4 py-2 rounded-lg text-xs font-medium transition-colors",
                          locale === lang
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
