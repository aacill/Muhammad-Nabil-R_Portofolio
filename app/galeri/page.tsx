"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Calendar,
  Briefcase,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectImageCarousel } from "@/components/ui/project-image-carousel";
import { portfolioData, GalleryItem } from "@/data/portfolio-data";
import { ease, spring } from "@/lib/motion";

export default function GaleriPage() {
  const { gallery } = portfolioData;
  const [selectedItem, setSelectedItem] = React.useState<GalleryItem | null>(null);

  const currentIndex = selectedItem
    ? gallery.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const handlePrev = React.useCallback(() => {
    if (currentIndex > 0) {
      setSelectedItem(gallery[currentIndex - 1]);
    } else {
      setSelectedItem(gallery[gallery.length - 1]);
    }
  }, [currentIndex, gallery]);

  const handleNext = React.useCallback(() => {
    if (currentIndex < gallery.length - 1) {
      setSelectedItem(gallery[currentIndex + 1]);
    } else {
      setSelectedItem(gallery[0]);
    }
  }, [currentIndex, gallery]);

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!selectedItem) return;
      if (e.key === "Escape") setSelectedItem(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, handlePrev, handleNext]);

  // Lock body scroll when lightbox is active
  React.useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />

      <main id="main-content" className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-12">
        {/* Header Section */}
        <section className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
            Galeri Hasil Pekerjaan
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Dokumentasi hasil karya pembuatan website profil perusahaan dan aplikasi seluler cerdas berbasis machine learning dengan teknologi modern.
          </p>
        </section>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {gallery.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: ease.out }}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-border bg-card overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col cursor-pointer focus-within:ring-2 focus-within:ring-ring"
                onClick={() => setSelectedItem(item)}
              >
                <ProjectImageCarousel
                  images={item.images}
                  title={item.title}
                  slug={item.slug}
                  aspectRatio={item.aspectRatio}
                  badgeText={item.year}
                  variant="card"
                  showThumbnails={true}
                  className="border-b border-border"
                />

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground tabular-nums">
                      <span>{item.client}</span>
                      <span>{item.year}</span>
                    </div>
                    <h2 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded bg-muted text-[11px] font-medium text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Interactive Accessible Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Pratinjau detail karya ${selectedItem.title}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={spring.soft}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl p-6 md:p-8 space-y-6"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-foreground">
                    {selectedItem.client}
                  </span>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    ({currentIndex + 1} dari {gallery.length})
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Prev / Next Controls */}
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Karya sebelumnya"
                    className="min-w-[40px] min-h-[40px] p-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Karya berikutnya"
                    className="min-w-[40px] min-h-[40px] p-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                  </button>

                  {/* Close button */}
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    aria-label="Tutup pratinjau"
                    className="min-w-[40px] min-h-[40px] p-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring ml-2"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Multi-Photo Preview Carousel inside Lightbox Modal */}
              <div className="rounded-xl overflow-hidden border border-border">
                <ProjectImageCarousel
                  images={selectedItem.images}
                  title={selectedItem.title}
                  slug={selectedItem.slug}
                  aspectRatio={selectedItem.aspectRatio}
                  variant="hero"
                  showThumbnails={true}
                  showCaption={true}
                />
              </div>

              {/* Detail Content */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                    {selectedItem.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground tabular-nums">
                    <span>{selectedItem.client}</span>
                    <span>{selectedItem.year}</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="pt-2">
                  <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-2">
                    Teknologi yang Digunakan:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-md bg-muted text-xs font-medium text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex justify-end">
                  <Link
                    href={`/proyek/${selectedItem.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background shadow-lg shadow-orange-500/10 text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <span>Baca Studi Kasus Proyek</span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
