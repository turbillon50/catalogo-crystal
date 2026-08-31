import type { Metadata } from "next";
import "./globals.css";
import "./crystal-ui.css";
import "./composers.css";
import { CrystalFilters } from "@/components/crystal/CrystalFilters";
import { CrystalEngine } from "@/components/crystal/CrystalEngine";

export const metadata: Metadata = {
  title: "Catálogo Crystal",
  description: "Liquid glass premium — distorsión SVG real, háptica, luz-cursor, reveal.",
};

// Google Fonts por <link> directo — crystal-ui.css y composers.css referencian
// los nombres literales (Space Grotesk, Manrope, Instrument Sans, Newsreader,
// JetBrains Mono, Sora), así que necesitan cargar con esos nombres tal cual
// (next/font los renombra internamente, por eso no se usa aquí).
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Manrope:wght@400;500;600;700;800&family=Newsreader:ital,wght@0,400;1,400&family=Sora:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CrystalFilters />
        <CrystalEngine />
        {children}
      </body>
    </html>
  );
}
