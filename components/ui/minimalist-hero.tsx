"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  MapPin,
} from "lucide-react";
import { LinkedinIcon, InstagramIcon, WhatsappIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { ease, duration } from "@/lib/motion";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  instagram?: string;
  whatsapp?: string;
  email?: string;
}

export interface MinimalistHeroProps {
  logoText?: string;
  navLinks?: NavLink[];
  mainText?: string;
  readMoreLink?: string;
  readMoreLabel?: string;
  imageSrc?: string;
  overlayText?: {
    part1: string;
    part2: string;
  };
  socialLinks?: SocialLinks;
  locationText?: string;
}

export function MinimalistHero({
  logoText = "muhammadnabil.",
  navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Galeri", href: "/galeri" },
    { label: "Pengalaman", href: "/pengalaman" },
    { label: "Proyek", href: "/proyek" },
    { label: "Sertifikat", href: "/sertifikat" },
    { label: "Organisasi", href: "/organisasi" },
    { label: "Kontak", href: "/kontak" },
  ],
  mainText = "Membangun antarmuka web modern, sistem terdistribusi, dan pengalaman digital berdaya tahan tinggi.",
  readMoreLink = "/pengalaman",
  readMoreLabel = "Selengkapnya",
  imageSrc = "/images/hero-portrait.png",
  overlayText = {
    part1: "halo, saya",
    part2: "nabil.",
  },
  socialLinks = {
    linkedin: "https://www.linkedin.com/in/muhammad-nabil-ramadhani",
    instagram: "https://www.instagram.com/mhmdnabillr",
    whatsapp: "https://wa.me/62895410715774",
    email: "mramadhaninabil01@gmail.com",
  },
  locationText = "Surabaya, Jawa Timur",
}: MinimalistHeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [imgError, setImgError] = React.useState(false);
  const [cursorActive, setCursorActive] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const cursorPosRef = React.useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });
  const menuCloseRef = React.useRef<HTMLButtonElement>(null);
  const menuOpenRef = React.useRef<HTMLButtonElement>(null);

  // Motion values for cursor-following spotlight & multi-layer 3D parallax
  const rawX = useMotionValue(720);
  const rawY = useMotionValue(450);
  const normX = useMotionValue(0);
  const normY = useMotionValue(0);

  // Trailing wide nebula aura spring
  const auraX = useSpring(rawX, { stiffness: 85, damping: 24, mass: 0.6 });
  const auraY = useSpring(rawY, { stiffness: 85, damping: 24, mass: 0.6 });

  // Responsive core flare spring
  const coreX = useSpring(rawX, { stiffness: 240, damping: 28, mass: 0.25 });
  const coreY = useSpring(rawY, { stiffness: 240, damping: 28, mass: 0.25 });

  // Smooth normalized parallax springs (-0.5 to 0.5)
  const smoothNormX = useSpring(normX, { stiffness: 70, damping: 22 });
  const smoothNormY = useSpring(normY, { stiffness: 70, damping: 22 });

  const atmoParallaxX = useTransform(smoothNormX, [-0.5, 0.5], [-28, 28]);
  const atmoParallaxY = useTransform(smoothNormY, [-0.5, 0.5], [-20, 20]);
  const arcParallaxX = useTransform(smoothNormX, [-0.5, 0.5], [-14, 14]);
  const arcParallaxY = useTransform(smoothNormY, [-0.5, 0.5], [-10, 10]);

  const wideAuraGradient = useMotionTemplate`radial-gradient(650px circle at ${auraX}px ${auraY}px, rgba(234, 88, 12, 0.22) 0%, rgba(185, 28, 28, 0.12) 42%, rgba(0, 0, 0, 0) 75%)`;
  const coreFlareGradient = useMotionTemplate`radial-gradient(240px circle at ${coreX}px ${coreY}px, rgba(254, 240, 138, 0.20) 0%, rgba(251, 146, 60, 0.12) 45%, rgba(0, 0, 0, 0) 75%)`;

  const handlePointerMove = React.useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      rawX.set(x);
      rawY.set(y);
      normX.set(x / Math.max(rect.width, 1) - 0.5);
      normY.set(y / Math.max(rect.height, 1) - 0.5);
      cursorPosRef.current = { x, y, active: true };
      if (!cursorActive) setCursorActive(true);
    },
    [cursorActive, normX, normY, rawX, rawY]
  );

  const handlePointerLeave = React.useCallback(() => {
    normX.set(0);
    normY.set(0);
    cursorPosRef.current.active = false;
    setCursorActive(false);
  }, [normX, normY]);

  // Interactive cosmic ember & cursor trail canvas animation
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const sectionEl = sectionRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrameId = 0;
    let isRunning = false;
    let isInView = true;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    // Pre-render glowing particle sprites once per hue to eliminate per-frame ctx.shadowBlur overhead
    const spriteSize = 36;
    const spriteHalf = spriteSize / 2;
    const spriteHues = [45, 38, 24, 18, 10] as const;
    const sprites = new Map<number, HTMLCanvasElement>();
    for (const hue of spriteHues) {
      const off = document.createElement("canvas");
      off.width = spriteSize;
      off.height = spriteSize;
      const octx = off.getContext("2d");
      if (octx) {
        octx.beginPath();
        octx.arc(spriteHalf, spriteHalf, 2.4, 0, Math.PI * 2);
        octx.fillStyle = `hsla(${hue}, 98%, 70%, 1)`;
        octx.shadowBlur = 11;
        octx.shadowColor = `hsla(${hue}, 100%, 60%, 1)`;
        octx.fill();
      }
      sprites.set(hue, off);
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    interface AmbientParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      hue: number;
      phase: number;
    }

    interface TrailParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      hue: number;
    }

    const ambientCount = 48;
    const ambientParticles: AmbientParticle[] = Array.from(
      { length: ambientCount },
      (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: 1 + Math.random() * 1.8,
        baseAlpha: 0.18 + Math.random() * 0.45,
        hue: i % 3 === 0 ? 45 : i % 3 === 1 ? 24 : 10,
        phase: Math.random() * Math.PI * 2,
      })
    );

    const trailParticles: TrailParticle[] = [];
    let lastSpawnX = -1000;
    let lastSpawnY = -1000;
    let tick = 0;

    const render = () => {
      tick += 0.025;
      ctx.clearRect(0, 0, width, height);

      const { x: cx, y: cy, active } = cursorPosRef.current;

      // Spawn subtle solar sparks when cursor moves
      if (active && !reduceMotion) {
        const moveDist = Math.hypot(cx - lastSpawnX, cy - lastSpawnY);
        if (moveDist > 10 && trailParticles.length < 70) {
          lastSpawnX = cx;
          lastSpawnY = cy;
          for (let i = 0; i < 2; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.25 + Math.random() * 0.9;
            trailParticles.push({
              x: cx + (Math.random() - 0.5) * 14,
              y: cy + (Math.random() - 0.5) * 14,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed - 0.25,
              size: 1.2 + Math.random() * 2.2,
              alpha: 0.75,
              hue: Math.random() > 0.4 ? 38 : 18,
            });
          }
        }
      }

      // Draw & update ambient cosmic particles (reacting to cursor proximity)
      for (const p of ambientParticles) {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        let alpha = p.baseAlpha + Math.sin(tick + p.phase) * 0.12;
        let radius = p.size;

        if (active && !reduceMotion) {
          const dx = p.x - cx;
          const dy = p.y - cy;
          const dist = Math.hypot(dx, dy);
          const maxDist = 220;
          if (dist < maxDist && dist > 1) {
            const pull = (1 - dist / maxDist) * 0.45;
            p.x += (dx / dist) * pull;
            p.y += (dy / dist) * pull;
            alpha = Math.min(1, alpha + (1 - dist / maxDist) * 0.65);
            radius = p.size * (1 + (1 - dist / maxDist) * 0.9);
          }
        }

        const sprite = sprites.get(p.hue);
        if (sprite) {
          const scale = radius / 2.4;
          const drawSize = spriteSize * scale;
          const offset = drawSize / 2;
          ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
          ctx.drawImage(sprite, p.x - offset, p.y - offset, drawSize, drawSize);
        }
      }

      // Draw & update cursor trail solar sparks
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const tp = trailParticles[i];
        tp.x += tp.vx;
        tp.y += tp.vy;
        tp.alpha -= 0.018;
        tp.size *= 0.985;

        if (tp.alpha <= 0.01) {
          trailParticles.splice(i, 1);
          continue;
        }

        const sprite = sprites.get(tp.hue);
        if (sprite) {
          const scale = tp.size / 2.4;
          const drawSize = spriteSize * scale;
          const offset = drawSize / 2;
          ctx.globalAlpha = Math.max(0, Math.min(1, tp.alpha));
          ctx.drawImage(sprite, tp.x - offset, tp.y - offset, drawSize, drawSize);
        }
      }

      ctx.globalAlpha = 1;
      if (!reduceMotion && isInView && !document.hidden) {
        animationFrameId = window.requestAnimationFrame(render);
      } else {
        isRunning = false;
      }
    };

    const syncLoopState = () => {
      const shouldRun = !reduceMotion && isInView && !document.hidden;
      if (shouldRun && !isRunning) {
        isRunning = true;
        animationFrameId = window.requestAnimationFrame(render);
      } else if (!shouldRun && isRunning) {
        window.cancelAnimationFrame(animationFrameId);
        isRunning = false;
      }
    };

    render();
    if (!reduceMotion) {
      isRunning = true;
    }

    const observer =
      sectionEl && typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              const entry = entries[0];
              if (entry) {
                isInView = entry.isIntersecting;
                syncLoopState();
              }
            },
            { threshold: 0.01 }
          )
        : null;

    if (observer && sectionEl) {
      observer.observe(sectionEl);
    }

    document.addEventListener("visibilitychange", syncLoopState);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", syncLoopState);
      observer?.disconnect();
      window.cancelAnimationFrame(animationFrameId);
    };
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

  // Trap focus or focus close button when menu opens
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

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative min-h-dvh flex flex-col justify-between overflow-hidden bg-[#030101] text-white"
      aria-label="Bagian Hero Perkenalan"
    >
      {/* Cosmic Horizon Arc Background (Inspired by Reference Image 1 + Interactive Cursor Tracking) */}
      <div
        className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Ambient outer space radial atmosphere with deeper parallax */}
        <motion.div
          className="absolute -inset-8"
          style={{
            x: atmoParallaxX,
            y: atmoParallaxY,
            background:
              "radial-gradient(125% 110% at 88% 42%, rgba(185, 28, 28, 0.42) 0%, rgba(124, 45, 18, 0.28) 34%, rgba(69, 10, 10, 0.14) 58%, rgba(3, 1, 1, 0.98) 82%)",
          }}
        />

        {/* High-Precision Planetary Horizon Arc SVG with 3D Cursor Parallax */}
        <motion.div
          className="absolute -inset-4"
          style={{
            x: arcParallaxX,
            y: arcParallaxY,
          }}
        >
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Wide atmospheric crimson-orange bloom */}
            <filter
              id="cosmic-atmo-wide"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="95" />
            </filter>

            {/* Medium fiery orange bloom */}
            <filter
              id="cosmic-atmo-mid"
              x="-25%"
              y="-25%"
              width="150%"
              height="150%"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="42" />
            </filter>

            {/* Close intense amber-gold bloom */}
            <filter
              id="cosmic-atmo-tight"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="16" />
            </filter>

            {/* Rim corona blur */}
            <filter
              id="cosmic-rim-corona"
              x="-15%"
              y="-15%"
              width="130%"
              height="130%"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="6" />
            </filter>

            {/* Core filament soft glow */}
            <filter
              id="cosmic-rim-core"
              x="-10%"
              y="-10%"
              width="120%"
              height="120%"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="1.2" />
            </filter>

            {/* Secondary inner refraction blur */}
            <filter
              id="cosmic-inner-arc-blur"
              x="-15%"
              y="-15%"
              width="130%"
              height="130%"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="8" />
            </filter>

            {/* Gradients along the arc */}
            <linearGradient
              id="grad-atmo-wide"
              x1="0"
              y1="52"
              x2="1365"
              y2="900"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#6b0f0f" stopOpacity="0.65" />
              <stop offset="30%" stopColor="#991b1b" stopOpacity="0.85" />
              <stop offset="68%" stopColor="#ea580c" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient
              id="grad-atmo-mid"
              x1="0"
              y1="52"
              x2="1365"
              y2="900"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#991b1b" stopOpacity="0.55" />
              <stop offset="32%" stopColor="#dc2626" stopOpacity="0.85" />
              <stop offset="68%" stopColor="#f97316" stopOpacity="1" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient
              id="grad-atmo-tight"
              x1="0"
              y1="52"
              x2="1365"
              y2="900"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#b91c1c" stopOpacity="0.6" />
              <stop offset="30%" stopColor="#ef4444" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#fb923c" stopOpacity="1" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient
              id="grad-rim-corona"
              x1="0"
              y1="52"
              x2="1365"
              y2="900"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.7" />
              <stop offset="25%" stopColor="#f97316" stopOpacity="0.95" />
              <stop offset="62%" stopColor="#fde047" stopOpacity="1" />
              <stop offset="90%" stopColor="#fbbf24" stopOpacity="1" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient
              id="grad-rim-filament"
              x1="0"
              y1="52"
              x2="1365"
              y2="900"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.85" />
              <stop offset="20%" stopColor="#fb923c" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#fde047" stopOpacity="1" />
              <stop offset="68%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="86%" stopColor="#fef08a" stopOpacity="1" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient
              id="grad-inner-arc"
              x1="0"
              y1="78"
              x2="1150"
              y2="820"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#991b1b" stopOpacity="0.65" />
              <stop offset="35%" stopColor="#dc2626" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#ea580c" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* 1. Outer Atmospheric Glows (Radiating into upper-right space) */}
          <path
            d="M -60,52 C 515,65 1055,330 1365,930"
            stroke="url(#grad-atmo-wide)"
            strokeWidth="360"
            strokeLinecap="round"
            filter="url(#cosmic-atmo-wide)"
          />
          <path
            d="M -60,52 C 515,65 1055,330 1365,930"
            stroke="url(#grad-atmo-mid)"
            strokeWidth="150"
            strokeLinecap="round"
            filter="url(#cosmic-atmo-mid)"
          />
          <path
            d="M -60,52 C 515,65 1055,330 1365,930"
            stroke="url(#grad-atmo-tight)"
            strokeWidth="54"
            strokeLinecap="round"
            filter="url(#cosmic-atmo-tight)"
          />

          {/* 2. Dark Planetary Body Mask (Occludes inner side so bottom-left stays deep cosmic black) */}
          <path
            d="M -60,52 C 515,65 1055,330 1365,930 L -60,930 Z"
            fill="#020101"
          />

          {/* 3. Subtle Inner Atmospheric Bleed & Secondary Inner Arc (As seen in Reference Image 1) */}
          <path
            d="M -60,54 C 515,67 1055,332 1365,932"
            stroke="url(#grad-atmo-tight)"
            strokeWidth="26"
            strokeLinecap="round"
            filter="url(#cosmic-atmo-tight)"
            opacity="0.55"
          />
          <path
            d="M -50,76 C 460,95 950,365 1265,930"
            stroke="url(#grad-inner-arc)"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#cosmic-inner-arc-blur)"
          />
          <path
            d="M -50,76 C 460,95 950,365 1265,930"
            stroke="url(#grad-inner-arc)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* 4. Razor-Sharp Incandescent Horizon Rim */}
          <path
            d="M -60,52 C 515,65 1055,330 1365,930"
            stroke="url(#grad-rim-corona)"
            strokeWidth="14"
            strokeLinecap="round"
            filter="url(#cosmic-rim-corona)"
          />
          <path
            d="M -60,52 C 515,65 1055,330 1365,930"
            stroke="url(#grad-rim-filament)"
            strokeWidth="4.2"
            strokeLinecap="round"
            filter="url(#cosmic-rim-core)"
          />
          <path
            d="M -60,52 C 515,65 1055,330 1365,930"
            stroke="url(#grad-rim-filament)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        </motion.div>

        {/* Cursor-Following Wide Cosmic Nebula Aura */}
        <motion.div
          className="absolute inset-0 transition-opacity duration-500 mix-blend-screen"
          style={{
            background: wideAuraGradient,
            opacity: cursorActive ? 1 : 0,
          }}
        />

        {/* Cursor-Following Intense Solar Core Flare */}
        <motion.div
          className="absolute inset-0 transition-opacity duration-300 mix-blend-screen"
          style={{
            background: coreFlareGradient,
            opacity: cursorActive ? 1 : 0,
          }}
        />

        {/* Interactive Cosmic Embers & Cursor Spark Trail Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-90 mix-blend-screen"
        />
      </div>

      {/* Top Navigation Header */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 pt-6 md:pt-8 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: ease.out }}
        >
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1"
            aria-label="Kembali ke Beranda"
          >
            {logoText}
          </Link>
        </motion.div>

        {/* Desktop Nav Links (Glassmorphic Pill matching Reference Image 1) */}
        <nav
          className="hidden lg:flex items-center gap-5 text-sm font-medium px-5 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-lg"
          aria-label="Navigasi Utama Hero"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/75 hover:text-white transition-colors px-2.5 py-1.5 focus-visible:ring-2 focus-visible:ring-ring rounded-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls: Theme Toggle & Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: ease.out }}
          className="flex items-center gap-3"
        >
          <ThemeToggle className="border-white/15 bg-white/5 text-white hover:bg-white/10" />

          {/* Mobile Hamburger Button */}
          <button
            ref={menuOpenRef}
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-lg border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label="Buka menu navigasi"
          >
            <Menu className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
          </button>
        </motion.div>
      </header>

      {/* Accessible Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-menu"
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

            {/* Menu Content Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: ease.out }}
              className="relative ml-auto w-full max-w-xs h-full bg-card border-l border-border p-6 shadow-2xl flex flex-col justify-between"
            >
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <span className="font-bold text-lg text-foreground">{logoText}</span>
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
              <nav className="flex flex-col gap-2 my-auto" aria-label="Menu Link Seluler">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Footer */}
              <div className="pt-6 border-t border-border flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Mode Tampilan</span>
                  <ThemeToggle />
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{locationText}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main 3-Column Hero Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column 1: Short Introduction Text & CTA (Left Column, col 1-4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: ease.out, delay: 0.2 }}
            className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-center space-y-6"
          >
            <p className="text-base md:text-lg text-white/75 leading-relaxed">
              {mainText}
            </p>

            <div>
              <Link
                href={readMoreLink}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors focus-visible:ring-2 focus-visible:ring-ring cursor-pointer group shadow-lg shadow-orange-500/10"
              >
                <span>{readMoreLabel}</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>

          {/* Column 2: Center Yellow Circle & Cutout Portrait Image (col 5-8) */}
          <div className="order-1 lg:order-2 lg:col-span-4 flex justify-center items-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              {/* Red Background Circle Frame */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: ease.out, delay: 0.2 }}
                className="absolute inset-4 rounded-full bg-[#cc0000] ring-2 ring-white/15 shadow-[0_0_60px_rgba(220,38,38,0.35)]"
                aria-hidden="true"
              />

              {/* Portrait Image with Original Red Background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: ease.out, delay: 0.3 }}
                className="absolute inset-4 z-10 rounded-full overflow-hidden flex items-end justify-center select-none pointer-events-none"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={imgError ? "/images/hero-portrait.svg" : imageSrc}
                    alt="Potret Muhammad Nabil, FrontEnd Developer & Machine Learning"
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    priority
                    fetchPriority="high"
                    className="object-contain object-bottom"
                    onError={() => setImgError(true)}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Column 3: Large Headline Typography (col 9-12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: ease.out, delay: 0.3 }}
            className="order-3 lg:col-span-4 flex flex-col justify-center lg:items-start text-left"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
              <span className="block text-white/75 font-light text-2xl sm:text-4xl md:text-5xl tracking-normal mb-2">
                {overlayText.part1}
              </span>
              <span className="block text-white uppercase">
                {overlayText.part2}
              </span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer Area of Hero */}
      <footer className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pb-6 md:pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4">
        {/* Social Links with Accessible Area >= 44x44px */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: ease.out, delay: 0.4 }}
          className="flex items-center gap-2"
          aria-label="Tautan Media Sosial"
        >
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi profil LinkedIn Muhammad Nabil"
              className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
            >
              <LinkedinIcon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
            </a>
          )}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi profil Instagram Muhammad Nabil"
              className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
            >
              <InstagramIcon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
            </a>
          )}
          {socialLinks.whatsapp && (
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi WhatsApp Muhammad Nabil"
              className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
            >
              <WhatsappIcon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
            </a>
          )}
          {socialLinks.email && (
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Kirim email ke Muhammad Nabil"
              className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Mail className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
            </a>
          )}
        </motion.div>

        {/* Location Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: ease.out, delay: 0.45 }}
          className="flex items-center gap-2 text-sm text-white/75"
        >
          <span>{locationText}</span>
        </motion.div>
      </footer>
    </section>
  );
}
