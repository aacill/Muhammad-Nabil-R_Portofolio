import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  Award,
  ShieldCheck,
  ChevronRight,
  CheckCircle2,
  Clock,
  Hash,
  BookOpen,
  FileCheck2,
  Layers,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ProjectImageCarousel,
  ProjectDocumentationGallery,
} from "@/components/ui/project-image-carousel";
import { portfolioData } from "@/data/portfolio-data";

type Props = {
  params: Promise<{ slug: string }>;
};

function findCertificateIndex(rawSlug: string): number {
  const decoded = decodeURIComponent(rawSlug).trim().toLowerCase();
  return portfolioData.certificates.findIndex(
    (c) =>
      c.slug.toLowerCase() === decoded ||
      c.id.toLowerCase() === decoded ||
      c.credentialId.toLowerCase() === decoded
  );
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const idx = findCertificateIndex(slug);
  const cert = idx !== -1 ? portfolioData.certificates[idx] : undefined;

  if (!cert) {
    return {
      title: "Sertifikat Tidak Ditemukan",
    };
  }

  return {
    title: `${cert.title} — Sertifikasi Resmi`,
    description: cert.description,
  };
}

export default async function CertificateDetailPage({ params }: Props) {
  const { slug } = await params;
  const certIndex = findCertificateIndex(slug);

  if (certIndex === -1) {
    notFound();
  }

  const cert = portfolioData.certificates[certIndex];
  const prevCert =
    certIndex > 0
      ? portfolioData.certificates[certIndex - 1]
      : portfolioData.certificates[portfolioData.certificates.length - 1];
  const nextCert =
    certIndex < portfolioData.certificates.length - 1
      ? portfolioData.certificates[certIndex + 1]
      : portfolioData.certificates[0];

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />

      <main id="main-content" className="flex-1 w-full max-w-4xl mx-auto px-6 md:px-12 py-10 md:py-16 space-y-10">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <Link href="/sertifikat" className="hover:text-foreground transition-colors">
            Sertifikat
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="text-foreground font-semibold truncate max-w-[260px]" aria-current="page">
            {cert.title}
          </span>
        </nav>

        {/* Back Link */}
        <div>
          <Link
            href="/sertifikat"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors py-1 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            <span>Kembali ke Daftar Seluruh Sertifikat</span>
          </Link>
        </div>

        {/* Header Title */}
        <header className="space-y-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-foreground/[0.06] text-foreground/90 border border-foreground/15 backdrop-blur-md">
              Kategori: {cert.category}
            </span>
            {cert.totalHours && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-muted text-foreground border border-border">
                <span>{cert.totalHours}</span>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span>Terverifikasi Sah</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.05]">
            {cert.title}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Diterbitkan secara resmi oleh <strong className="text-foreground">{cert.issuer}</strong>
          </p>
        </header>

        {/* Large Preview of Certificate (Uncropped with Multi-Page Support) */}
        <div className="w-full rounded-2xl overflow-hidden bg-card border-2 border-border shadow-lg">
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
            aspectRatio={cert.aspectRatio}
            variant="hero"
            showThumbnails={true}
            showCaption={true}
          />
        </div>

        {/* Metadata Details Cards */}
        <section aria-label="Metadata Kredensial" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Tanggal / Periode
            </span>
            <span className="block text-sm font-bold text-foreground tabular-nums">
              {cert.issueDate}
            </span>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Masa Berlaku
            </span>
            <span className="block text-sm font-bold text-foreground tabular-nums">
              {cert.expiryDate}
            </span>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              ID Kredensial
            </span>
            <span className="block text-sm font-bold font-mono text-foreground truncate" title={cert.credentialId}>
              {cert.credentialId}
            </span>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card flex flex-col justify-between space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Dokumen & Verifikasi
            </span>
            <a
              href={cert.credentialUrl || cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground text-background shadow-lg shadow-orange-500/10 text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <span>Buka Kredensial</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* Short Summary & Comprehensive Full Description */}
        <div className="space-y-8 pt-4 border-t border-border">
          {/* Ringkasan Singkat */}
          <div className="p-5 rounded-2xl border border-accent/30 bg-accent/5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground block">
              Ringkasan Singkat
            </span>
            <p className="text-sm sm:text-base font-medium text-foreground/90 leading-relaxed">
              {cert.description}
            </p>
          </div>

          {/* Deskripsi Lengkap */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Deskripsi Lengkap Sertifikasi & Kegiatan
            </h2>
            <div className="space-y-4">
              {cert.fullDescription && cert.fullDescription.length > 0 ? (
                cert.fullDescription.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-base text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-base text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              )}
            </div>
          </div>

          {/* Rincian Materi Pembelajaran / Ruang Lingkup Kegiatan */}
          {cert.learningModules && cert.learningModules.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-border">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Rincian Materi & Ruang Lingkup Kompetensi
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {cert.learningModules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-border bg-card space-y-2 shadow-2xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shrink-0 tabular-nums">
                          {idx + 1}
                        </span>
                        <h3 className="text-base font-bold text-foreground">
                          {mod.title}
                        </h3>
                      </div>
                      {mod.duration && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-muted text-muted-foreground w-fit tabular-nums">
                          {mod.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed sm:pl-8.5">
                      {mod.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Evaluasi & Hasil Kelulusan */}
          {cert.evaluation && (
            <div className="p-5 rounded-2xl border border-border bg-muted/30 space-y-2">
              <h2 className="text-base font-bold text-foreground">
                Evaluasi Akhir & Validasi Kelulusan
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.evaluation}
              </p>
            </div>
          )}

          {/* Keahlian & Kompetensi yang Diperoleh */}
          <div className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Keahlian & Kompetensi yang Diperoleh
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cert.skillsAcquired.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-border bg-card text-sm font-medium text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lampiran Dokumen Lengkap */}
          {cert.images && cert.images.length > 0 && (
            <div className="pt-4 border-t border-border space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Lampiran Dokumen Sertifikat & Transkrip ({cert.images.length} Halaman PNG)
              </h2>
              <ProjectDocumentationGallery
                images={cert.images}
                aspectRatio={cert.aspectRatio}
              />
            </div>
          )}
        </div>

        {/* Previous and Next Navigation */}
        <nav aria-label="Navigasi antar sertifikat" className="pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href={`/sertifikat/${prevCert.slug}`}
            className="p-4 rounded-xl border border-border bg-card hover:border-foreground/40 transition-colors flex flex-col items-start space-y-1 group"
          >
            <span className="text-xs text-muted-foreground inline-flex items-center gap-1 group-hover:-translate-x-0.5 transition-transform">
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Sertifikat Sebelumnya</span>
            </span>
            <span className="text-sm font-bold text-foreground line-clamp-1">
              {prevCert.title}
            </span>
          </Link>

          <Link
            href={`/sertifikat/${nextCert.slug}`}
            className="p-4 rounded-xl border border-border bg-card hover:border-foreground/40 transition-colors flex flex-col items-end text-right space-y-1 group"
          >
            <span className="text-xs text-muted-foreground inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              <span>Sertifikat Berikutnya</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold text-foreground line-clamp-1">
              {nextCert.title}
            </span>
          </Link>
        </nav>

      </main>

      <Footer />
    </div>
  );
}
