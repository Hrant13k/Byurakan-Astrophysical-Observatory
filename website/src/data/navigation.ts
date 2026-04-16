export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "History", href: "/about#history" },
      { label: "Mission", href: "/about#mission" },
      { label: "Facilities", href: "/about#facilities" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Stellar Physics", href: "/research#stellar-physics" },
      { label: "Extragalactic Astronomy", href: "/research#extragalactic" },
      { label: "Cosmic Structure", href: "/research#cosmic-structure" },
      { label: "Observational Programs", href: "/research#programs" },
    ],
  },
  { label: "Staff", href: "/staff" },
  { label: "Publications", href: "/publications" },
  {
    label: "News & Events",
    href: "/news",
    children: [
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" },
    ],
  },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];
