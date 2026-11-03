"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

/**
 * Latar kosmik global yang meneruskan bahasa visual hero beranda
 * (cakrawala planet oranye–merah–emas, atmosfer kosmik hitam pekat, dan partikel bintang)
 * ke seluruh halaman situs.
 */
export function CosmicBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div aria-hidden="true" className="pointer-events-none select-none">
      {/* Lapisan tetap di seluruh viewport: atmosfer kosmik & partikel bintang */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-35 dark:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(125% 110% at 88% 32%, rgba(185, 28, 28, 0.34) 0%, rgba(124, 45, 18, 0.22) 34%, rgba(69, 10, 10, 0.12) 58%, rgba(3, 1, 1, 0.98) 84%), radial-gradient(85% 70% at 12% 88%, rgba(234, 88, 12, 0.10) 0%, rgba(0, 0, 0, 0) 65%)",
          }}
        />
        <EmberField />
      </div>

      {/* Busur cakrawala planet identik dengan Hero Beranda untuk seluruh halaman selain Beranda */}
      {!isHome && (
        <div className="fixed inset-0 -z-10 overflow-hidden opacity-25 dark:opacity-85 transition-opacity duration-500">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="global-cosmic-atmo-wide"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="95" />
              </filter>
              <filter
                id="global-cosmic-atmo-mid"
                x="-25%"
                y="-25%"
                width="150%"
                height="150%"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="42" />
              </filter>
              <filter
                id="global-cosmic-atmo-tight"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="16" />
              </filter>
              <filter
                id="global-cosmic-rim-corona"
                x="-15%"
                y="-15%"
                width="130%"
                height="130%"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="6" />
              </filter>
              <filter
                id="global-cosmic-rim-core"
                x="-10%"
                y="-10%"
                width="120%"
                height="120%"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="1.2" />
              </filter>
              <filter
                id="global-cosmic-inner-arc-blur"
                x="-15%"
                y="-15%"
                width="130%"
                height="130%"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="8" />
              </filter>

              <linearGradient
                id="global-grad-atmo-wide"
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
                id="global-grad-atmo-mid"
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
                id="global-grad-atmo-tight"
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
                id="global-grad-rim-corona"
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
                id="global-grad-rim-filament"
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
                id="global-grad-inner-arc"
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

            <path
              d="M -60,52 C 515,65 1055,330 1365,930"
              stroke="url(#global-grad-atmo-wide)"
              strokeWidth="360"
              strokeLinecap="round"
              filter="url(#global-cosmic-atmo-wide)"
            />
            <path
              d="M -60,52 C 515,65 1055,330 1365,930"
              stroke="url(#global-grad-atmo-mid)"
              strokeWidth="150"
              strokeLinecap="round"
              filter="url(#global-cosmic-atmo-mid)"
            />
            <path
              d="M -60,52 C 515,65 1055,330 1365,930"
              stroke="url(#global-grad-atmo-tight)"
              strokeWidth="54"
              strokeLinecap="round"
              filter="url(#global-cosmic-atmo-tight)"
            />

            <path
              d="M -60,52 C 515,65 1055,330 1365,930 L -60,930 Z"
              className="fill-background"
            />

            <path
              d="M -60,54 C 515,67 1055,332 1365,932"
              stroke="url(#global-grad-atmo-tight)"
              strokeWidth="26"
              strokeLinecap="round"
              filter="url(#global-cosmic-atmo-tight)"
              opacity="0.55"
            />
            <path
              d="M -50,76 C 460,95 950,365 1265,930"
              stroke="url(#global-grad-inner-arc)"
              strokeWidth="12"
              strokeLinecap="round"
              filter="url(#global-cosmic-inner-arc-blur)"
            />
            <path
              d="M -50,76 C 460,95 950,365 1265,930"
              stroke="url(#global-grad-inner-arc)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path
              d="M -60,52 C 515,65 1055,330 1365,930"
              stroke="url(#global-grad-rim-corona)"
              strokeWidth="14"
              strokeLinecap="round"
              filter="url(#global-cosmic-rim-corona)"
            />
            <path
              d="M -60,52 C 515,65 1055,330 1365,930"
              stroke="url(#global-grad-rim-filament)"
              strokeWidth="4.2"
              strokeLinecap="round"
              filter="url(#global-cosmic-rim-core)"
            />
            <path
              d="M -60,52 C 515,65 1055,330 1365,930"
              stroke="url(#global-grad-rim-filament)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

/** Partikel bara kosmik yang melayang lembut seperti pada Hero Beranda. */
function EmberField() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    // Pre-render glowing ember sprites once per hue to avoid expensive per-frame ctx.shadowBlur
    const spriteSize = 32;
    const spriteHalf = spriteSize / 2;
    const hues = [45, 24, 10] as const;
    const sprites = new Map<number, HTMLCanvasElement>();
    for (const hue of hues) {
      const off = document.createElement("canvas");
      off.width = spriteSize;
      off.height = spriteSize;
      const octx = off.getContext("2d");
      if (octx) {
        octx.beginPath();
        octx.arc(spriteHalf, spriteHalf, 2.2, 0, Math.PI * 2);
        octx.fillStyle = `hsla(${hue}, 95%, 68%, 1)`;
        octx.shadowBlur = 10;
        octx.shadowColor = `hsla(${hue}, 100%, 60%, 1)`;
        octx.fill();
      }
      sprites.set(hue, off);
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const count = Math.round(Math.min(44, Math.max(22, (width * height) / 36000)));
    const particles = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: 1 + Math.random() * 1.6,
      baseAlpha: 0.16 + Math.random() * 0.42,
      hue: i % 3 === 0 ? 45 : i % 3 === 1 ? 24 : 10,
      phase: Math.random() * Math.PI * 2,
    }));

    let tick = 0;
    let frame = 0;
    let isRunning = false;

    const draw = () => {
      tick += 0.022;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }
        const alpha = Math.max(0, p.baseAlpha + Math.sin(tick + p.phase) * 0.12);
        const sprite = sprites.get(p.hue);
        if (sprite) {
          const scale = p.size / 2.2;
          const drawSize = spriteSize * scale;
          const offset = drawSize / 2;
          ctx.globalAlpha = Math.min(1, alpha);
          ctx.drawImage(sprite, p.x - offset, p.y - offset, drawSize, drawSize);
        }
      }
      ctx.globalAlpha = 1;
      if (!reduceMotion && !document.hidden) {
        frame = window.requestAnimationFrame(draw);
      } else {
        isRunning = false;
      }
    };

    const startLoop = () => {
      if (!isRunning && !reduceMotion && !document.hidden) {
        isRunning = true;
        frame = window.requestAnimationFrame(draw);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(frame);
        isRunning = false;
      } else {
        startLoop();
      }
    };

    draw();
    if (!reduceMotion) {
      isRunning = true;
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-0 dark:opacity-85 transition-opacity" />;
}
