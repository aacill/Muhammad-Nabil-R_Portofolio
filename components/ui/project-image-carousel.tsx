"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselImageItem {
  url: string;
  caption: string;
  aspectRatio?: "16/10" | "9/16";
}

const resolvedImagesCache = new Map<string, CarouselImageItem[]>();
const inFlightImagesCache = new Map<string, Promise<CarouselImageItem[] | null>>();

function fetchProjectImagesBySlug(slug: string): Promise<CarouselImageItem[] | null> {
  const cached = resolvedImagesCache.get(slug);
  if (cached) {
    return Promise.resolve(cached);
  }
  const existingPromise = inFlightImagesCache.get(slug);
  if (existingPromise) {
    return existingPromise;
  }

  const requestPromise = fetch(`/api/project-images?slug=${encodeURIComponent(slug)}`)
    .then((res) => (res.ok ? res.json() : null))
    .then((data) => {
      if (data?.images && Array.isArray(data.images) && data.images.length > 0) {
        resolvedImagesCache.set(slug, data.images);
        return data.images as CarouselImageItem[];
      }
      return null;
    })
    .catch(() => null)
    .finally(() => {
      inFlightImagesCache.delete(slug);
    });

  inFlightImagesCache.set(slug, requestPromise);
  return requestPromise;
}

interface ProjectImageCarouselProps {
  images: CarouselImageItem[];
  title: string;
  slug?: string;
  href?: string;
  aspectRatio?: "16/10" | "9/16";
  badgeText?: string;
  variant?: "card" | "featured" | "hero";
  showThumbnails?: boolean;
  showCaption?: boolean;
  className?: string;
}

export function ProjectImageCarousel({
  images,
  title,
  slug,
  href,
  aspectRatio = "16/10",
  badgeText,
  variant = "card",
  showThumbnails = true,
  showCaption = false,
  className,
}: ProjectImageCarouselProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [dynamicImages, setDynamicImages] = React.useState<CarouselImageItem[] | null>(
    () => (slug ? resolvedImagesCache.get(slug) ?? null : null)
  );

  React.useEffect(() => {
    if (!slug) return;
    const cached = resolvedImagesCache.get(slug);
    if (cached) {
      setDynamicImages(cached);
      return;
    }
    let cancelled = false;
    fetchProjectImagesBySlug(slug).then((imgs) => {
      if (!cancelled && imgs && imgs.length > 0) {
        setDynamicImages(imgs);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const safeImages = React.useMemo(() => {
    if (dynamicImages && dynamicImages.length > 0) {
      return dynamicImages.map((dynImg, idx) => ({
        ...dynImg,
        caption: images?.[idx]?.caption || dynImg.caption,
      }));
    }
    return images && images.length > 0 ? images : [];
  }, [dynamicImages, images]);

  // Reset activeIndex when switching to a different project/item
  React.useEffect(() => {
    setActiveIndex(0);
  }, [slug, title]);

  if (safeImages.length === 0) return null;

  const currentImage = safeImages[activeIndex] ?? safeImages[0];
  const hasMultiple = safeImages.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : safeImages.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev < safeImages.length - 1 ? prev + 1 : 0));
  };

  const handleSelect = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex(index);
  };

  return (
    <div className={cn("w-full flex flex-col bg-muted/40", className)}>
      {/* Main Image Stage — uses object-contain with inner padding so images are NEVER cropped by borders */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-muted/60 select-none",
          variant === "hero"
            ? aspectRatio === "9/16"
              ? "aspect-[16/11] sm:aspect-[16/10]"
              : "aspect-[16/10]"
            : "aspect-[16/10]"
        )}
      >
        <div
          className={cn(
            "absolute inset-0",
            variant === "hero" ? "p-3 sm:p-5" : "p-2.5 sm:p-3.5"
          )}
        >
          {href ? (
            <Link
              href={href}
              aria-label={`Lihat detail ${title}`}
              className="relative block w-full h-full cursor-pointer"
            >
              <Image
                key={currentImage.url}
                src={currentImage.url}
                alt={currentImage.caption || title}
                fill
                sizes={
                  variant === "hero"
                    ? "(max-width: 1024px) 100vw, 900px"
                    : "(max-width: 768px) 100vw, 50vw"
                }
                className="object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
                priority={variant === "hero" && activeIndex === 0}
              />
            </Link>
          ) : (
            <div className="relative w-full h-full">
              <Image
                key={currentImage.url}
                src={currentImage.url}
                alt={currentImage.caption || title}
                fill
                sizes={
                  variant === "hero"
                    ? "(max-width: 1024px) 100vw, 900px"
                    : "(max-width: 768px) 100vw, 50vw"
                }
                className="object-contain drop-shadow-sm transition-transform duration-300"
                priority={variant === "hero" && activeIndex === 0}
              />
            </div>
          )}
        </div>

        {/* Top-left Photo Counter Badge */}
        {hasMultiple && (
          <div className="absolute top-3 left-3 z-10 inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tabular-nums bg-background/90 text-foreground backdrop-blur-sm border border-border shadow-xs">
            <span>
              {activeIndex + 1} / {safeImages.length} Foto
            </span>
          </div>
        )}

        {/* Optional Top-right Badge (e.g., Year) */}
        {badgeText && (
          <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-xs font-bold tabular-nums bg-accent text-accent-foreground shadow-xs">
            {badgeText}
          </div>
        )}

        {/* Prev / Next Controls */}
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label={`Foto sebelumnya dari ${title}`}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-background/90 hover:bg-background text-foreground border border-border shadow-md flex items-center justify-center transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label={`Foto berikutnya dari ${title}`}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-background/90 hover:bg-background text-foreground border border-border shadow-md flex items-center justify-center transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {/* Caption bar (optional, useful in hero / detail views) */}
      {showCaption && currentImage.caption && (
        <div className="px-4 py-2.5 bg-card/80 border-t border-border text-xs text-center text-muted-foreground font-medium">
          {currentImage.caption}
        </div>
      )}

      {/* Multi-photo Thumbnail Strip */}
      {showThumbnails && hasMultiple && (
        <div
          className="px-3 py-2.5 bg-card/90 border-t border-border flex items-center gap-2 overflow-x-auto scrollbar-none"
          onClick={(e) => e.stopPropagation()}
        >
          {safeImages.map((img, idx) => {
            const isActive = idx === activeIndex;
            const isPortrait = (img.aspectRatio ?? aspectRatio) === "9/16";
            return (
              <button
                key={`${img.url}-${idx}`}
                type="button"
                onClick={(e) => handleSelect(e, idx)}
                aria-label={`Tampilkan foto ${idx + 1}: ${img.caption}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative shrink-0 rounded-md overflow-hidden border transition-all cursor-pointer bg-muted/70 p-0.5",
                  isPortrait ? "w-9 h-12" : "w-14 h-10",
                  isActive
                    ? "border-accent ring-2 ring-accent/40 opacity-100 scale-105"
                    : "border-border opacity-65 hover:opacity-100"
                )}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img.url}
                    alt={img.caption || `${title} foto ${idx + 1}`}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

interface ProjectDocumentationGalleryProps {
  images: CarouselImageItem[];
  slug?: string;
  aspectRatio?: "16/10" | "9/16";
}

export function ProjectDocumentationGallery({
  images,
  slug,
  aspectRatio = "16/10",
}: ProjectDocumentationGalleryProps) {
  const [dynamicImages, setDynamicImages] = React.useState<CarouselImageItem[] | null>(
    () => (slug ? resolvedImagesCache.get(slug) ?? null : null)
  );

  React.useEffect(() => {
    if (!slug) return;
    const cached = resolvedImagesCache.get(slug);
    if (cached) {
      setDynamicImages(cached);
      return;
    }
    let cancelled = false;
    fetchProjectImagesBySlug(slug).then((imgs) => {
      if (!cancelled && imgs && imgs.length > 0) {
        setDynamicImages(imgs);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const safeImages = React.useMemo(() => {
    if (dynamicImages && dynamicImages.length > 0) {
      return dynamicImages.map((dynImg, idx) => ({
        ...dynImg,
        caption: images?.[idx]?.caption || dynImg.caption,
      }));
    }
    return images && images.length > 0 ? images : [];
  }, [dynamicImages, images]);

  if (safeImages.length === 0) return null;

  return aspectRatio === "9/16" ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {safeImages.map((img, idx) => (
        <figure
          key={`${img.url}-${idx}`}
          className="space-y-3 bg-muted/20 p-3 rounded-2xl border border-border flex flex-col justify-between"
        >
          <div className="relative aspect-[9/18] w-full rounded-xl overflow-hidden bg-muted/60 border border-border/80 shadow-xs p-2">
            <div className="relative w-full h-full">
              <Image
                src={img.url}
                alt={img.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>
          <figcaption className="text-xs text-center text-muted-foreground font-medium leading-relaxed">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  ) : (
    <div className="space-y-6">
      {safeImages.map((img, idx) => (
        <figure
          key={`${img.url}-${idx}`}
          className="space-y-2.5 bg-muted/20 p-3 sm:p-4 rounded-2xl border border-border"
        >
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-muted/60 border border-border shadow-xs p-2 sm:p-3">
            <div className="relative w-full h-full">
              <Image
                src={img.url}
                alt={img.caption}
                fill
                sizes="(max-width: 1024px) 100vw, 850px"
                className="object-contain"
              />
            </div>
          </div>
          <figcaption className="text-xs text-center text-muted-foreground font-medium">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
