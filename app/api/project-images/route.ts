import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

const SLUG_TO_FOLDERS: Record<string, { folders: string[]; aspectRatio: "16/10" | "9/16" }> = {
  "kantor-jasa-akuntan-sak": {
    folders: ["Website Kantor Jasa Akuntan (SAK)"],
    aspectRatio: "16/10",
  },
  "kantor-akuntan-publik-djoko-soerjadi": {
    folders: ["Website Kantor Akuntan Publik Djoko Soerjadi"],
    aspectRatio: "16/10",
  },
  "capstone-bangkit-deteksi-penyakit-kulit": {
    folders: [
      "Aplikasi Deteksi Penyakit Kulit - Bangkit Academy",
      "Aplikasi Deteksi Penyakit Kulit \u2014 Bangkit Academy",
    ],
    aspectRatio: "9/16",
  },
  "proyek-skripsi-klasifikasi-malaria-hybrid-cnn-swin-transformer": {
    folders: [
      "Proyek Skripsi - Klasifikasi Malaria Hybrid CNN-Swin Transformer",
      "Klasifikasi Malaria dengan Hybrid CNN-Swin Transformer",
    ],
    aspectRatio: "16/10",
  },
  "sensor-gas-berbasis-thingspeak-iot": {
    folders: ["Sensor Gas Berbasis ThingSpeak (IoT)"],
    aspectRatio: "16/10",
  },
};

const serverImagesCache = new Map<
  string,
  { url: string; caption: string; aspectRatio: "16/10" | "9/16" }[]
>();

const CACHE_HEADERS = {
  "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
};

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug") ?? "";
  const mapping = SLUG_TO_FOLDERS[slug];

  if (!mapping) {
    return Response.json({ images: [] }, { headers: CACHE_HEADERS });
  }

  const cached = serverImagesCache.get(slug);
  if (cached) {
    return Response.json({ images: cached }, { headers: CACHE_HEADERS });
  }

  const publicBaseDir = path.join(process.cwd(), "public", "foto-proyek");
  const baseDir = fs.existsSync(publicBaseDir)
    ? publicBaseDir
    : path.join(process.cwd(), "foto proyek");

  for (const folderName of mapping.folders) {
    const dirPath = path.join(baseDir, folderName);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs
      .readdirSync(dirPath)
      .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

    if (files.length > 0) {
      const images = files.map((file, idx) => ({
        url: `/foto-proyek/${folderName}/${file}`,
        caption: `${folderName} — Pratinjau ${idx + 1}`,
        aspectRatio: mapping.aspectRatio,
      }));
      serverImagesCache.set(slug, images);
      return Response.json({ images }, { headers: CACHE_HEADERS });
    }
  }

  return Response.json({ images: [] }, { headers: CACHE_HEADERS });
}
