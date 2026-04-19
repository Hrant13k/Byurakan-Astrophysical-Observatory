import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider, themeInitScript } from "@/lib/theme";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Byurakan Astrophysical Observatory",
    template: "%s | Byurakan Observatory",
  },
  description:
    "NAS RA V. Ambartsumian Byurakan Astrophysical Observatory — one of the world's leading centers for astrophysical research, founded in 1946 on Mount Aragats, Armenia.",
  keywords: [
    "Byurakan",
    "Observatory",
    "Astrophysics",
    "Armenia",
    "Ambartsumian",
    "Markarian",
    "Astronomy",
    "Research",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
