"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Galeri", href: "/galeri" },
  { label: "Pengalaman", href: "/pengalaman" },
  { label: "Proyek", href: "/proyek" },
  { label: "Sertifikat", href: "/sertifikat" },
  { label: "Organisasi", href: "/organisasi" },
  { label: "Kontak", href: "/kontak" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const menuCloseRef = React.useRef<HTMLButtonElement>(null);
  const menuOpenRef = React.useRef<HTMLButtonElement>(null);

  // Glass header intensifies once the page is scrolled
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape key
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuOpenRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      menuCloseRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isLinkActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`sticky top-0 z-30 w-full transition-[background-color,border-color,backdrop-filter] duration-300 border-b ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-border"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1"
            aria-label="Kembali ke Beranda"
          >
            muhammadnabil.
          </Link>

          {/* Desktop Nav Links — glassmorphic pill (same as home hero) */}
          <nav
            className="hidden lg:flex items-center gap-3 text-sm font-medium px-5 py-2 rounded-full border border-foreground/15 bg-foreground/[0.04] backdrop-blur-md shadow-lg"
            aria-label="Navigasi Utama Situs"
          >
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-3.5 py-1.5 rounded-full transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-ring ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-foreground/10 border border-foreground/10"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      aria-hidden="true"
                    >
                      <span className="absolute left-1/2 -bottom-[7px] -translate-x-1/2 w-1 h-1 rounded-full bg-accent shadow-[0_0_8px_2px_rgba(251,146,60,0.7)]" />
                    </motion.span>
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle className="border-foreground/15 bg-foreground/5 hover:bg-foreground/10" />

            {/* Mobile Menu Trigger */}
            <button
              ref={menuOpenRef}
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-lg border border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors cursor-pointer flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={mobileMenuOpen}
              aria-controls="global-mobile-menu"
              aria-label="Buka menu navigasi"
            >
              <Menu className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (rendered outside the blurred header so `fixed` spans the viewport) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            id="global-mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi Seluler"
            className="fixed inset-0 z-50 lg:hidden flex flex-col"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative ml-auto w-full max-w-xs h-full bg-background/95 backdrop-blur-xl border-l border-border p-6 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Horizon glow accent */}
              <div
                className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-60"
                style={{
                  background:
                    "radial-gradient(circle, rgba(234,88,12,0.35) 0%, rgba(185,28,28,0.15) 45%, rgba(0,0,0,0) 70%)",
                }}
                aria-hidden="true"
              />

              <div className="relative flex items-center justify-between pb-6 border-b border-border">
                <span className="font-bold text-lg">
                  muhammadnabil.
                </span>
                <button
                  ref={menuCloseRef}
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg border border-border hover:bg-muted text-foreground transition-colors cursor-pointer flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Tutup menu navigasi"
                >
                  <X className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="relative flex flex-col gap-2 my-auto" aria-label="Menu Link Seluler">
                {navLinks.map((link) => {
                  const isActive = isLinkActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`px-4 py-3 rounded-full text-lg font-medium transition-colors ${
                        isActive
                          ? "bg-foreground/10 text-foreground font-semibold border border-foreground/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Footer */}
              <div className="relative pt-6 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Mode Tampilan</span>
                <ThemeToggle />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
