import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Calendar,
  Layers,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectImageCarousel, ProjectDocumentationGallery } from "@/components/ui/project-image-carousel";
import { portfolioData } from "@/data/portfolio-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan",
    };
  }

  return {
    title: `${project.title} — Studi Kasus`,
    description: project.subtitle,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />

      <main id="main-content" className="flex-1 w-full max-w-4xl mx-auto px-6 md:px-12 py-10 md:py-16 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <Link href="/proyek" className="hover:text-foreground transition-colors">
            Proyek
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="text-foreground font-semibold truncate max-w-[200px]" aria-current="page">
            {project.title}
          </span>
        </nav>

        {/* Back Button */}
        <div>
          <Link
            href="/proyek"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors py-1 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            <span>Kembali ke Daftar Proyek</span>
          </Link>
        </div>

        {/* Project Header Info */}
        <header className="space-y-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            {project.category && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-foreground/[0.06] text-foreground/90 border border-foreground/15 backdrop-blur-md">
                {project.category}
              </span>
            )}
            <span className="text-xs text-muted-foreground tabular-nums flex items-center gap-1 font-semibold">
              {project.period}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.05]">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {project.subtitle}
          </p>

          {/* Quick metadata grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 rounded-xl border border-border bg-card mt-6">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Peran
              </span>
              <span className="block text-sm font-bold text-foreground mt-0.5">
                {project.role}
              </span>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Periode Pengerjaan
              </span>
              <span className="block text-sm font-bold text-foreground mt-0.5 tabular-nums">
                {project.period}
              </span>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Bidang Fokus
              </span>
              <span className="block text-sm font-bold text-foreground mt-0.5">
                {project.category || "Riset & Pengembangan"}
              </span>
            </div>
          </div>
        </header>

        {/* Hero Multi-Photo Preview Carousel — non-cropping object-contain */}
        <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
          <ProjectImageCarousel
            images={project.images}
            title={project.title}
            slug={project.slug}
            aspectRatio={project.aspectRatio}
            variant="hero"
            showThumbnails={true}
            showCaption={true}
          />
        </div>

        {/* Content Section: Overview (Reading width <= 75ch) */}
        <article className="prose prose-neutral dark:prose-invert max-w-[75ch] space-y-10 leading-relaxed text-foreground/90">
          
          {/* Overview */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Ringkasan Proyek
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Key Highlights / Methodology Stages */}
          {project.highlights && project.highlights.length > 0 && (
            <section className="space-y-4 not-prose">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Tahapan Metodologi & Fokus Utama
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-border bg-card space-y-2 shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shrink-0 tabular-nums">
                        {idx + 1}
                      </span>
                      <h3 className="text-base font-bold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-8.5">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Objectives */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Tujuan & Sasaran Utama
            </h2>
            <ul className="space-y-2.5 not-prose">
              {project.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges & Solutions */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Tantangan Teknis & Solusi
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              <div className="p-6 rounded-xl border border-destructive/30 bg-destructive/5 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-destructive">
                  Tantangan yang Dihadapi
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-foreground/80 leading-relaxed">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" aria-hidden="true" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Solusi Arsitektural
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-foreground/80 leading-relaxed">
                  {project.solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" aria-hidden="true" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Measurable Metrics / Outcomes */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Dampak & Metrik Terukur
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 not-prose">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-border bg-card text-center space-y-1">
                  <span className="block text-xl md:text-2xl font-black text-foreground tabular-nums">
                    {metric.value}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Teknologi yang Digunakan
            </h2>
            <div className="flex flex-wrap gap-2 not-prose">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg bg-muted border border-border text-xs font-semibold text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Gallery documentation images */}
          {project.images.length > 0 && (
            <section className="space-y-6 not-prose pt-4">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Dokumentasi Visual Antarmuka
              </h2>
              <ProjectDocumentationGallery
                images={project.images}
                slug={project.slug}
                aspectRatio={project.aspectRatio}
              />
            </section>
          )}

          {/* Bottom Back Button */}
          <div className="pt-8 border-t border-border not-prose flex items-center justify-between">
            <Link
              href="/proyek"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors py-2"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Kembali ke Daftar Proyek</span>
            </Link>

            <Link
              href="/kontak"
              className="px-5 py-2.5 rounded-full bg-foreground text-background shadow-lg shadow-orange-500/10 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Diskusikan Proyek Serupa
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
