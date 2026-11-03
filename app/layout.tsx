import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { CosmicBackground } from "@/components/cosmic-background";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Nabil — FrontEnd Developer & Machine Learning",
    template: "%s | Muhammad Nabil",
  },
  description:
    "Website portofolio profesional menampilkan karya, proyek, pengalaman kerja, sertifikasi, dan aktivitas organisasi Muhammad Nabil.",
  keywords: [
    "Portofolio",
    "Frontend Engineer",
    "Fullstack Developer",
    "UI/UX Designer",
    "Next.js",
    "React",
    "TypeScript",
    "Surabaya",
  ],
  authors: [{ name: "Muhammad Nabil" }],
  creator: "Muhammad Nabil",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://muhammadnabil.dev",
    title: "Muhammad Nabil — Portofolio Karya Saya",
    description:
      "Website portofolio profesional: karya, proyek unggulan, riwayat pengalaman, sertifikasi terverifikasi, dan organisasi.",
    siteName: "Portofolio Muhammad Nabil",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${spaceGrotesk.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="relative isolate min-h-dvh flex flex-col bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-foreground focus:text-background focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring font-medium text-sm transition-transform"
        >
          Lompat ke konten utama
        </a>

        <Providers>
          {/* Global cosmic backdrop matching the home hero */}
          <CosmicBackground />
          {children}
        </Providers>
      </body>
    </html>
  );
}
