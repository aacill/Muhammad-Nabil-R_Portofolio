"use client";

import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, InstagramIcon, WhatsappIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolio-data";

export function Footer() {
  const { profile } = portfolioData;

  return (
    <footer className="relative isolate w-full border-t border-border mt-auto overflow-hidden" aria-label="Informasi Kaki Halaman">
      {/* Horizon glow rising from the bottom edge (echoes the hero planetary arc) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] -z-10 opacity-50 dark:opacity-100"
        style={{
          background:
            "radial-gradient(70% 100% at 85% 120%, rgba(234, 88, 12, 0.28) 0%, rgba(185, 28, 28, 0.14) 40%, rgba(0, 0, 0, 0) 75%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-border">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-foreground inline-block focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1"
            >
              muhammadnabil<span className="text-accent">.</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {profile.shortBio}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              Navigasi Halaman
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1"
                >
                  Galeri Karya
                </Link>
              </li>
              <li>
                <Link
                  href="/pengalaman"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1"
                >
                  Pengalaman
                </Link>
              </li>
              <li>
                <Link
                  href="/proyek"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1"
                >
                  Daftar Proyek
                </Link>
              </li>
              <li>
                <Link
                  href="/sertifikat"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1"
                >
                  Sertifikat
                </Link>
              </li>
              <li>
                <Link
                  href="/organisasi"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1"
                >
                  Organisasi
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 font-medium"
                >
                  Kontak Langsung
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social Action */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              Hubungi & Jejaring
            </p>
            <p className="text-sm text-muted-foreground">
              Punya ide proyek atau peluang kolaborasi?
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity group shadow-lg shadow-orange-500/10"
            >
              <span>Mulai percakapan</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>

            <div className="flex items-center gap-1 pt-2" aria-label="Media Sosial">
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Muhammad Nabil"
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
              >
                <LinkedinIcon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={profile.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Muhammad Nabil"
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
              >
                <InstagramIcon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={profile.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Muhammad Nabil"
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
              >
                <WhatsappIcon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.socialLinks.email}`}
                aria-label="Email Muhammad Nabil"
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© 2026 Muhammad Nabil. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
