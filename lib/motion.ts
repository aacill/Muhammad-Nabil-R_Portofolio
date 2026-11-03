export const ease = {
  out: [0.22, 1, 0.36, 1] as const,     // masuk / mendarat
  in: [0.4, 0, 1, 1] as const,          // keluar
};

export const duration = {
  fast: 0.2,      // hover, tekan, toggle
  base: 0.4,      // kartu, section masuk
  slow: 0.8,      // hero (lingkaran, gambar)
  exit: 0.25,     // ± 60–70% dari masuk
};

export const spring = {
  soft: { type: "spring" as const, stiffness: 260, damping: 28 },   // lightbox, kartu
  snappy: { type: "spring" as const, stiffness: 420, damping: 32 }, // tombol, chip
};

export const stagger = 0.06; // detik per item

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.out },
  },
};

export const list = {
  hidden: {},
  show: {
    transition: { staggerChildren: stagger },
  },
};
