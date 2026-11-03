"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectImageCarousel } from "@/components/ui/project-image-carousel";
import { portfolioData } from "@/data/portfolio-data";
import { fadeUp, list } from "@/lib/motion";

export default function ProyekPage() {
  const { projects } = portfolioData;

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />

      <main id="main-content" className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-12">
        {/* Header Section */}
        <section className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
            Daftar Proyek & Studi Kasus
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Daftar studi kasus komprehensif yang mendokumentasikan proses berpikir, penyelesaian masalah teknis, arsitektur frontend, dan dampak terukur terhadap bisnis.
          </p>
        </section>

        {/* Project Cards Grid */}
        <motion.div
          variants={list}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="group rounded-2xl border border-border bg-card overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Multi-photo preview container with non-cropping object-contain */}
                <ProjectImageCarousel
                  images={project.images}
                  title={project.title}
                  slug={project.slug}
                  href={`/proyek/${project.slug}`}
                  aspectRatio={project.aspectRatio}
                  badgeText={project.category || project.period}
                  variant="card"
                  showThumbnails={true}
                  className="border-b border-border"
                />

                {/* Content body */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap text-xs text-muted-foreground tabular-nums">
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.category && (
                        <span className="px-2.5 py-0.5 rounded-full bg-accent/15 text-foreground font-semibold border border-accent/30">
                          {project.category}
                        </span>
                      )}
                      <span className="font-semibold text-foreground/80">{project.role}</span>
                    </div>
                    <span className="flex items-center gap-1">
                      {project.period}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                      <Link href={`/proyek/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h2>
                    <p className="text-sm font-medium text-foreground/75">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Key highlights / methodology stages (when available) */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {project.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-muted/40 border border-border space-y-1"
                        >
                          <h3 className="text-xs font-bold text-foreground flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                              {idx + 1}
                            </span>
                            <span>{item.title}</span>
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Impact metrics chips */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-muted/60 border border-border">
                        <span className="block text-[11px] text-muted-foreground">{metric.label}</span>
                        <span className="block text-sm font-bold text-foreground tabular-nums">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack wrapping tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 md:px-8 py-4 border-t border-border bg-muted/20 flex items-center justify-end">
                <Link
                  href={`/proyek/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent transition-colors"
                >
                  <span>Baca Studi Kasus</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
