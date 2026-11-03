import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Building,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  ChevronRight,
  Camera,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { portfolioData } from "@/data/portfolio-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const org = portfolioData.organizations.find((o) => o.slug === slug);

  if (!org) {
    return {
      title: "Organisasi Tidak Ditemukan",
    };
  }

  return {
    title: `${org.role} — ${org.orgName}`,
    description: `Catatan kepengurusan ${org.role} di ${org.orgName} (${org.period}).`,
  };
}

export default async function OrganisasiDetailPage({ params }: Props) {
  const { slug } = await params;
  const orgIndex = portfolioData.organizations.findIndex((o) => o.slug === slug);

  if (orgIndex === -1) {
    notFound();
  }

  const org = portfolioData.organizations[orgIndex];
  const prevOrg =
    orgIndex > 0
      ? portfolioData.organizations[orgIndex - 1]
      : portfolioData.organizations[portfolioData.organizations.length - 1];
  const nextOrg =
    orgIndex < portfolioData.organizations.length - 1
      ? portfolioData.organizations[orgIndex + 1]
      : portfolioData.organizations[0];

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />

      <main id="main-content" className="flex-1 w-full max-w-4xl mx-auto px-6 md:px-12 py-10 md:py-16 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <Link href="/organisasi" className="hover:text-foreground transition-colors">
            Organisasi
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="text-foreground font-semibold truncate max-w-[200px]" aria-current="page">
            {org.orgName}
          </span>
        </nav>

        {/* Back Button */}
        <div>
          <Link
            href="/organisasi"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors py-1 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            <span>Kembali ke Daftar Pengalaman Organisasi</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="space-y-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-foreground/[0.06] text-foreground/90 border border-foreground/15 backdrop-blur-md">
              {org.location}
            </span>
            <span className="text-xs text-muted-foreground tabular-nums flex items-center gap-1">
              {org.period}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.05]">
            {org.orgName}
          </h1>

          <p className="text-xl md:text-2xl font-bold text-foreground/90">
            {org.role}
          </p>

          <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
            {org.summary}
          </p>
        </header>

        {/* Main Photo / Banner */}
        {org.photos[0] && (
          <div className="space-y-2">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-muted border border-border shadow-sm">
              <Image
                src={org.photos[0].url}
                alt={org.photos[0].caption || `Foto dokumentasi ${org.orgName}`}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
                priority
              />
            </div>
            <p className="text-xs text-center text-muted-foreground">
              {org.photos[0].caption}
            </p>
          </div>
        )}

        {/* Responsibilities & Leadership Section */}
        <section className="space-y-4 pt-4 border-t border-border">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Peran & Tanggung Jawab Kepengurusan
          </h2>
          <ul className="space-y-2.5">
            {org.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Key Programs and Initiatives */}
        <section className="space-y-4 pt-4 border-t border-border">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Program Kerja & Inisiatif Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {org.programs.map((prog, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-border bg-card space-y-2">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-foreground font-bold text-xs">
                  0{idx + 1}
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  {prog}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Measurable Achievements */}
        {org.achievements.length > 0 && (
          <section className="space-y-4 pt-4 border-t border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Pencapaian & Dampak Terukur
            </h2>
            <div className="space-y-3">
              {org.achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 text-sm font-medium text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" aria-hidden="true" />
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Extra Documentation Photos (if more than 1 photo exists) */}
        {org.photos.length > 1 && (
          <section className="space-y-4 pt-4 border-t border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Galeri Dokumentasi Tambahan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {org.photos.slice(1).map((photo, idx) => (
                <figure key={idx} className="space-y-2">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-muted border border-border">
                    <Image
                      src={photo.url}
                      alt={photo.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-xs text-muted-foreground text-center">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Previous and Next Navigation */}
        <nav aria-label="Navigasi antar organisasi" className="pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href={`/organisasi/${prevOrg.slug}`}
            className="p-4 rounded-xl border border-border bg-card hover:border-foreground/40 transition-colors flex flex-col items-start space-y-1 group"
          >
            <span className="text-xs text-muted-foreground inline-flex items-center gap-1 group-hover:-translate-x-0.5 transition-transform">
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Pengalaman Sebelumnya</span>
            </span>
            <span className="text-sm font-bold text-foreground line-clamp-1">
              {prevOrg.orgName}
            </span>
          </Link>

          <Link
            href={`/organisasi/${nextOrg.slug}`}
            className="p-4 rounded-xl border border-border bg-card hover:border-foreground/40 transition-colors flex flex-col items-end text-right space-y-1 group"
          >
            <span className="text-xs text-muted-foreground inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              <span>Pengalaman Berikutnya</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold text-foreground line-clamp-1">
              {nextOrg.orgName}
            </span>
          </Link>
        </nav>

      </main>

      <Footer />
    </div>
  );
}
