"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Building,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { portfolioData } from "@/data/portfolio-data";
import { fadeUp, list } from "@/lib/motion";

export default function OrganisasiPage() {
  const { organizations } = portfolioData;

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />

      <main id="main-content" className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-12">
        {/* Header Section */}
        <section className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
            Pengalaman Organisasi & Kepanitiaan
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Catatan keterlibatan aktif dalam kepanitiaan kegiatan mahasiswa serta kolaborasi tim lintas disiplin dalam pengembangan proyek aplikasi berbasis produk.
          </p>
        </section>

        {/* Organizations Timeline / Cards */}
        <motion.div
          variants={list}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {organizations.map((org) => (
            <motion.article
              key={org.id}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="group rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              {/* Photo preview (only if available) */}
              {org.photos.length > 0 && org.photos[0] && (
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-muted border border-border">
                  <Image
                    src={org.photos[0].url}
                    alt={org.photos[0].caption || `Kegiatan ${org.orgName}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Organization Content */}
              <div className="flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap text-xs text-muted-foreground">
                    <span className="inline-flex items-center font-semibold text-accent uppercase tracking-wider text-[11px]">
                      {org.role}
                    </span>
                    <span className="inline-flex items-center tabular-nums font-bold px-3 py-1 rounded-full bg-foreground/[0.06] border border-foreground/15 text-foreground">
                      {org.period}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    <Link href={`/organisasi/${org.slug}`}>
                      {org.orgName}
                    </Link>
                  </h2>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {org.summary}
                  </p>
                </div>

                {/* Key programs highlight */}
                {org.programs.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-border/60">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Fokus Tugas & Kegiatan:
                    </span>
                    <ul className="space-y-1.5">
                      {org.programs.map((prog, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                          <span>{prog}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Measurable achievements pill */}
                {org.achievements.length > 0 && (
                  <div className="p-3 rounded-lg bg-muted/50 border border-border/80">
                    <p className="text-xs font-medium text-foreground/90">
                      <strong>Sorotan Capaian:</strong> {org.achievements[0]}
                    </p>
                  </div>
                )}

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {org.location}
                  </span>
                  <Link
                    href={`/organisasi/${org.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
