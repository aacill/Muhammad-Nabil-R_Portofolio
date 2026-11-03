"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Cpu,
  ChevronDown,
  User,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { portfolioData } from "@/data/portfolio-data";
import { fadeUp, list } from "@/lib/motion";

export default function PengalamanPage() {
  const { experiences, skills, profile } = portfolioData;
  const [expandedId, setExpandedId] = React.useState<string | null>(experiences[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />

      <main id="main-content" className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-16 md:space-y-24">
        
        {/* Header Section with Profile Summary & Full Bio */}
        <section className="space-y-6 max-w-4xl">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
              Riwayat Pengalaman
            </h1>
          </div>

          <div className="p-6 md:p-8 rounded-2xl border border-border bg-card space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
              <span>Ringkasan Profil Profesional</span>
            </div>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-normal">
              {profile.fullBio}
            </p>
          </div>
        </section>

        {/* Career Timeline Section */}
        <section aria-labelledby="heading-timeline" className="space-y-8">
          <h2 id="heading-timeline" className="text-2xl font-bold tracking-tight pb-3 border-b border-border">
            Linimasa Karier Profesional
          </h2>

          <div className="relative pl-6 md:pl-8 border-l-2 border-border/80 space-y-10 md:space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;

              return (
                <div key={exp.id} className="relative group">
                  {/* Timeline Node Marker */}
                  <span
                    className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                      index === 0
                        ? "bg-accent border-foreground ring-4 ring-accent/20"
                        : "bg-card border-border group-hover:border-foreground"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Experience Card */}
                  <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-xs hover:shadow-md transition-shadow space-y-6">
                    {/* Header info */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/20 text-foreground">
                            {exp.type}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            {exp.location}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-base font-semibold text-foreground/80">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 self-start">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-xs font-semibold text-foreground tabular-nums">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Tanggung Jawab Utama:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quantifiable Achievements */}
                    {exp.achievements.length > 0 && (
                      <div className="p-4 rounded-lg bg-muted/40 border border-border/60 space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                          <span>Pencapaian Terukur:</span>
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.achievements.map((ach, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-foreground/90 font-medium">
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Skill Tags */}
                    <div className="pt-2 border-t border-border flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Skills Section */}
        <section aria-labelledby="heading-skills" className="space-y-8 pt-6">
          <div className="space-y-2">
            <h2 id="heading-skills" className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Keahlian & Penguasaan Teknologi
            </h2>
          </div>

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-xs"
              >
                <h3 className="text-lg font-bold text-foreground flex items-center justify-between pb-2 border-b border-border">
                  <span>{cat.title}</span>
                  <span className="text-xs font-normal text-muted-foreground tabular-nums">
                    {cat.skills.length} keahlian
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-muted border border-border/80 text-xs font-medium text-foreground hover:border-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
