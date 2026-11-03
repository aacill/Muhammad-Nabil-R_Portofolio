"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Search,
  SlidersHorizontal,
  Calendar,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectImageCarousel } from "@/components/ui/project-image-carousel";
import { portfolioData, CertificateItem } from "@/data/portfolio-data";
import { fadeUp, list } from "@/lib/motion";

const categories = [
  "Semua",
  "Sertifikasi Kompetensi",
  "Studi Independen",
  "Magang",
  "Sertifikat Pelatihan",
] as const;
const years = ["Semua", "2026", "2025", "2024"] as const;

export default function SertifikatPage() {
  const { certificates } = portfolioData;
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("Semua");
  const [selectedYear, setSelectedYear] = React.useState<string>("Semua");

  const filteredCertificates = React.useMemo(() => {
    return certificates.filter((cert) => {
      const matchSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.credentialId.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory =
        selectedCategory === "Semua" || cert.category === selectedCategory;

      const matchYear =
        selectedYear === "Semua" || cert.year === selectedYear;

      return matchSearch && matchCategory && matchYear;
    });
  }, [certificates, searchQuery, selectedCategory, selectedYear]);

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />

      <main id="main-content" className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-12">
        {/* Header Section */}
        <section className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
            Sertifikasi Terverifikasi
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Daftar lisensi dan sertifikasi kompetensi dari penyedia kredensial teknologi global yang memvalidasi penguasaan teknis arsitektur cloud, rekayasa frontend, dan metodologi riset desain.
          </p>
        </section>

        {/* Filters & Search Control Bar */}
        <div className="p-5 rounded-2xl border border-border bg-card shadow-xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <label htmlFor="search-certificates" className="sr-only">
                Cari sertifikat berdasarkan judul atau lembaga
              </label>
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
              <input
                id="search-certificates"
                type="text"
                placeholder="Cari judul sertifikat, penerbit, atau ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Category Filter Chips */}
            <div className="md:col-span-4 flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-semibold text-muted-foreground mr-1">Kategori:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-ring ${
                    selectedCategory === cat
                      ? "bg-foreground text-background font-semibold"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Year Filter Chips */}
            <div className="md:col-span-3 flex items-center gap-1.5 flex-wrap justify-end">
              <span className="text-xs font-semibold text-muted-foreground mr-1">Tahun:</span>
              {years.map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => setSelectedYear(y)}
                  aria-pressed={selectedYear === y}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium tabular-nums transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-ring ${
                    selectedYear === y
                      ? "bg-accent text-accent-foreground font-bold"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>

          {/* Active filter summary */}
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
            <span>
              Menampilkan <strong className="text-foreground">{filteredCertificates.length}</strong> sertifikat
            </span>
            {(searchQuery || selectedCategory !== "Semua" || selectedYear !== "Semua") && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Semua");
                  setSelectedYear("Semua");
                }}
                className="text-foreground hover:text-accent font-semibold underline cursor-pointer"
              >
                Reset Semua Filter
              </button>
            )}
          </div>
        </div>

        {/* Certificates Grid */}
        <motion.div
          variants={list}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredCertificates.map((cert) => (
            <motion.article
              key={cert.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="group rounded-2xl border border-border bg-card overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Certificate Preview Image (Uncropped with Multi-Page Carousel Support) */}
                <ProjectImageCarousel
                  images={
                    cert.images && cert.images.length > 0
                      ? cert.images
                      : [
                          {
                            url: cert.image,
                            caption: cert.title,
                            aspectRatio: cert.aspectRatio,
                          },
                        ]
                  }
                  title={cert.title}
                  href={`/sertifikat/${cert.slug}`}
                  aspectRatio={cert.aspectRatio}
                  badgeText={`${cert.category} · ${cert.year}`}
                  variant="card"
                  showThumbnails={true}
                  className="border-b border-border"
                />

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground/85">{cert.issuer}</span>
                    <span className="tabular-nums">{cert.issueDate}</span>
                  </div>

                  <h2 className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    <Link href={`/sertifikat/${cert.slug}`}>
                      {cert.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="pt-2">
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Keahlian Teruji:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsAcquired.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-muted text-[11px] font-medium text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skillsAcquired.length > 3 && (
                        <span className="px-2 py-0.5 rounded bg-muted text-[11px] font-medium text-muted-foreground">
                          +{cert.skillsAcquired.length - 3} lainnya
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer with Credential and Detail Action */}
              <div className="px-6 py-4 border-t border-border bg-muted/20 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="font-mono text-[11px] truncate max-w-[120px]">
                    {cert.credentialId}
                  </span>
                </div>

                <Link
                  href={`/sertifikat/${cert.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-accent transition-colors"
                >
                  <span>Lihat Detail Kredensial</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredCertificates.length === 0 && (
          <div className="p-12 text-center rounded-xl border border-dashed border-border bg-muted/30 space-y-3">
            <p className="text-muted-foreground font-medium">
              Tidak ada sertifikat yang cocok dengan kriteria pencarian &quot;{searchQuery}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Semua");
                setSelectedYear("Semua");
              }}
              className="text-sm font-semibold text-foreground underline"
            >
              Reset filter pencarian
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
