"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Award,
  Users,
  Briefcase,
  Layers,
  Sparkles,
  Calendar,
  Building,
  User,
} from "lucide-react";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { ProjectImageCarousel } from "@/components/ui/project-image-carousel";
import { Footer } from "@/components/footer";
import { portfolioData } from "@/data/portfolio-data";
import { fadeUp, list } from "@/lib/motion";

export default function HomePage() {
  const { profile, gallery, projects, certificates, organizations } = portfolioData;

  const featuredGallery = gallery.filter((item) => item.featured).slice(0, 6);
  const featuredProjects = projects.filter((item) => item.featured).slice(0, 6);
  const featuredCertificates = certificates.filter((item) => item.featured).slice(0, 4);
  const featuredOrganizations = organizations.filter((item) => item.featured).slice(0, 4);

  return (
    <div className="flex flex-col min-h-dvh">
      {/* 1. Hero Section (MinimalistHero) */}
      <MinimalistHero
        logoText="muhammadnabil."
        mainText={profile.shortBio}
        readMoreLink="#tentang"
        readMoreLabel="Tentang Saya"
        imageSrc={profile.avatar}
        overlayText={profile.tagline}
        socialLinks={profile.socialLinks}
        locationText={profile.location}
      />

      <main id="main-content" className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-24 md:space-y-32">
        
        {/* 2. Sorotan Hasil Kerja (Featured Works) */}
        <section aria-labelledby="heading-galeri" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div className="space-y-2">
              <h2 id="heading-galeri" className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Sorotan Hasil Pekerjaan
              </h2>
            </div>
            <Link
              href="/galeri"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors group"
            >
              <span>Lihat semua karya di galeri</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {featuredGallery.map((item) => (
              <motion.article
                key={item.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="group relative rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <ProjectImageCarousel
                  images={item.images}
                  title={item.title}
                  slug={item.slug}
                  href={`/proyek/${item.slug}`}
                  aspectRatio={item.aspectRatio}
                  badgeText={item.year}
                  variant="card"
                  showThumbnails={true}
                  className="border-b border-border"
                />

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground tabular-nums">
                      <span>Klien: {item.client}</span>
                      <span>{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded-md bg-muted text-[11px] font-medium text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/galeri"
                      className="text-xs font-semibold text-foreground hover:underline inline-flex items-center gap-1"
                      aria-label={`Lihat pratinjau detail karya ${item.title}`}
                    >
                      <span>Detail</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* 3. Sorotan Proyek (Featured Projects) */}
        <section aria-labelledby="heading-proyek" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div className="space-y-2">
              <h2 id="heading-proyek" className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Sorotan Proyek Unggulan
              </h2>
            </div>
            <Link
              href="/proyek"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors group"
            >
              <span>Lihat semua proyek</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-8"
          >
            {featuredProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="group rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 w-full rounded-xl overflow-hidden border border-border">
                  <ProjectImageCarousel
                    images={project.images}
                    title={project.title}
                    slug={project.slug}
                    href={`/proyek/${project.slug}`}
                    aspectRatio={project.aspectRatio}
                    variant="featured"
                    showThumbnails={true}
                    showCaption={true}
                  />
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <span className="font-semibold text-foreground/80">{project.role}</span>
                      <span>·</span>
                      <span className="tabular-nums font-medium">{project.period}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                      <Link href={`/proyek/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-sm font-medium text-foreground/80">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-muted/60 border border-border">
                        <span className="block text-xs text-muted-foreground">{metric.label}</span>
                        <span className="block text-base font-bold text-foreground tabular-nums">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/proyek/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      <span>Pelajari Studi Kasus</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* 4. Section Tentang Saya (Menampilkan profile.fullBio) */}
        <section id="tentang" aria-labelledby="heading-tentang" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div className="space-y-2">
              <h2 id="heading-tentang" className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Tentang Saya
              </h2>
            </div>
            <Link
              href="/pengalaman"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors group"
            >
              <span>Lihat linimasa karier lengkap</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-xs"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                Dedikasi Rekayasa Perangkat Lunak & Desain
              </span>
              <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                {profile.fullBio}
              </p>
            </div>
          </motion.div>
        </section>

        {/* 5. Section Sertifikat (Certificates - New in PRD 6.1 & 6.5) */}
        <section aria-labelledby="heading-sertifikat" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div className="space-y-2">
              <h2 id="heading-sertifikat" className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Sertifikasi Terverifikasi
              </h2>
            </div>
            <Link
              href="/sertifikat"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors group"
            >
              <span>Lihat semua sertifikat</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredCertificates.map((cert) => (
              <motion.article
                key={cert.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="group rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-full rounded-lg overflow-hidden border border-border">
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
                      badgeText={cert.category}
                      variant="card"
                      showThumbnails={true}
                    />
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground flex items-center justify-between">
                      <span>{cert.issuer}</span>
                      <span className="tabular-nums font-medium">{cert.year}</span>
                    </p>
                    <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                      <Link href={`/sertifikat/${cert.slug}`}>
                        {cert.title}
                      </Link>
                    </h3>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-mono text-[11px] truncate max-w-[120px]">
                    {cert.credentialId}
                  </span>
                  <Link
                    href={`/sertifikat/${cert.slug}`}
                    className="font-semibold text-foreground hover:underline inline-flex items-center gap-1"
                  >
                    <span>Detail</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* 5. Section Pengalaman Organisasi (Organization - New in PRD 6.1 & 6.6) */}
        <section aria-labelledby="heading-organisasi" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div className="space-y-2">
              <h2 id="heading-organisasi" className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Pengalaman Organisasi
              </h2>
            </div>
            <Link
              href="/organisasi"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors group"
            >
              <span>Lihat semua pengalaman organisasi</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {featuredOrganizations.map((org) => (
              <motion.article
                key={org.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center font-medium">
                      {org.location}
                    </span>
                    <span className="tabular-nums font-semibold px-2 py-0.5 rounded bg-muted">
                      {org.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    <Link href={`/organisasi/${org.slug}`}>
                      {org.orgName}
                    </Link>
                  </h3>

                  <p className="text-sm font-semibold text-foreground/90">
                    {org.role}
                  </p>

                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {org.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {org.programs.length} Inisiatif Utama
                  </span>
                  <Link
                    href={`/organisasi/${org.slug}`}
                    className="text-xs font-semibold text-foreground hover:underline inline-flex items-center gap-1"
                  >
                    <span>Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* 6. Call To Action Hubungi (Contact CTA) */}
        <section aria-labelledby="heading-cta" className="relative isolate rounded-3xl border border-border bg-card p-8 md:p-12 overflow-hidden shadow-lg">
          {/* Planetary horizon glow (mirrors the hero) */}
          <div
            className="pointer-events-none absolute -z-10 -right-32 -top-40 w-[640px] h-[640px] rounded-full opacity-60 dark:opacity-100"
            style={{
              background:
                "radial-gradient(circle at 60% 40%, rgba(251, 146, 60, 0.35) 0%, rgba(220, 38, 38, 0.18) 38%, rgba(0, 0, 0, 0) 70%)",
            }}
            aria-hidden="true"
          />
          <svg
            className="pointer-events-none absolute -z-10 right-0 top-0 h-full w-2/3 opacity-50 dark:opacity-90"
            viewBox="0 0 600 400"
            preserveAspectRatio="xMaxYMin slice"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cta-rim" x1="80" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
                <stop offset="40%" stopColor="#fb923c" stopOpacity="0.9" />
                <stop offset="75%" stopColor="#fde047" stopOpacity="1" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.2" />
              </linearGradient>
              <filter id="cta-rim-blur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>
            <path d="M 80,-20 C 300,10 500,140 640,420" stroke="url(#cta-rim)" strokeWidth="10" strokeLinecap="round" filter="url(#cta-rim-blur)" />
            <path d="M 80,-20 C 300,10 500,140 640,420" stroke="url(#cta-rim)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className="max-w-2xl space-y-4 relative z-10">
            <h2 id="heading-cta" className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.05]">
              Tertarik mewujudkan proyek digital berkinerja tinggi bersama?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Saya selalu terbuka untuk berdiskusi seputar arsitektur frontend, sistem desain, atau kerja sama pengembangan produk digital baru.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/kontak"
                className="px-6 py-3.5 rounded-full bg-foreground text-background shadow-lg shadow-orange-500/10 font-semibold hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2 group"
              >
                <span>Hubungi Saya Sekarang</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                href="/pengalaman"
                className="px-6 py-3.5 rounded-full border border-foreground/15 bg-foreground/5 backdrop-blur-md font-semibold text-foreground hover:bg-foreground/10 transition-colors cursor-pointer"
              >
                Pelajari Riwayat Karier
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
